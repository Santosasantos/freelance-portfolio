"use client";

import { useRef, useState } from "react";
import { budgets, site } from "@/content/site";
import { limits, validate, type ContactInput, type FieldErrors } from "@/lib/contact";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const empty: ContactInput = { name: "", email: "", need: "", budget: budgets[4], deadline: "", website: "" };

const inputClass =
  "w-full min-w-0 rounded-md border border-field bg-surface px-4 py-3 text-[17px] text-ink placeholder:text-muted transition-colors focus:border-ink aria-[invalid=true]:border-bad";

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  function set<K extends keyof ContactInput>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { errors?: FieldErrors; message?: string };
      if (res.ok) {
        setStatus({ kind: "sent" });
        setValues(empty);
        return;
      }
      if (data.errors) setErrors(data.errors);
      setStatus({ kind: "error", message: data.message ?? "The message could not be sent." });
    } catch {
      setStatus({ kind: "error", message: "The message could not be sent. Check your connection and try again." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="flex flex-col gap-3 self-start bg-sunken p-7">
        <h3 className="font-display text-2xl font-bold">Thanks, your message is on its way</h3>
        <p className="text-body">I will reply within one working day. Check your spam folder if you do not hear back.</p>
        <button type="button" onClick={() => setStatus({ kind: "idle" })} className="link self-start py-2 text-left font-semibold">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-label="Project enquiry"
      className="flex flex-col gap-5"
    >
      <div className="flex flex-wrap gap-5">
        <Field id="name" label="Your name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={limits.name}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={limits.email}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <Field id="need" label="What do you need?" error={errors.need} full>
        <textarea
          id="need"
          name="need"
          rows={5}
          maxLength={limits.need}
          placeholder="For example: our booking form does not work on phones"
          value={values.need}
          onChange={(e) => set("need", e.target.value)}
          aria-invalid={!!errors.need}
          aria-describedby={errors.need ? "need-error" : undefined}
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div className="flex flex-wrap gap-5">
        <Field id="budget" label="Budget" error={errors.budget}>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) => set("budget", e.target.value)}
            className={inputClass}
          >
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
        <Field id="deadline" label="Deadline (optional)" error={errors.deadline}>
          <input
            id="deadline"
            name="deadline"
            type="text"
            maxLength={limits.deadline}
            placeholder="For example: in two weeks"
            value={values.deadline}
            onChange={(e) => set("deadline", e.target.value)}
            className={inputClass}
          />
        </Field>
      </div>

      {/* Trap field for spam bots. Hidden from people and screen readers. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => set("website", e.target.value)}
        />
      </div>

      {status.kind === "error" && (
        <p role="alert" className="rounded-md border border-bad/40 bg-bad/5 px-4 py-3 text-base text-bad">
          {status.message} You can also email me at{" "}
          <a className="font-semibold underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="rounded-full bg-ink px-7 py-4 text-lg font-semibold text-page transition-opacity hover:opacity-85 disabled:cursor-wait disabled:opacity-60"
        >
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </button>
        <span className="text-[15px] text-muted">I only use your details to reply to you.</span>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  full = false,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex min-w-0 flex-col gap-1.5 ${full ? "" : "flex-[1_1_180px]"}`}>
      <label htmlFor={id} className="text-base font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-[15px] text-bad">
          {error}
        </p>
      )}
    </div>
  );
}
