import { NextResponse } from "next/server";
import { readInput, validate } from "@/lib/contact";
import { site } from "@/content/site";

// Sends contact form messages by email through Resend (https://resend.com).
// Set RESEND_API_KEY in Vercel. Optional: CONTACT_TO (defaults to the site email) and
// CONTACT_FROM (needs a domain verified in Resend; the default test sender only delivers
// to the email address the Resend account was created with).

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ message: "Too many messages in a short time. Please try again in a few minutes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "The form data could not be read." }, { status: 400 });
  }

  const input = readInput(body);

  // A filled trap field means a bot. Pretend it worked so it does not retry.
  if (input.website) return NextResponse.json({ ok: true });

  const errors = validate(input);
  if (Object.keys(errors).length) {
    return NextResponse.json({ message: "Some details need fixing.", errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return NextResponse.json({ message: "The contact form is not set up yet." }, { status: 503 });
  }

  const name = input.name.trim();
  const email = input.email.trim();
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Budget", input.budget || "Not given"],
    ["Deadline", input.deadline.trim() || "Not given"],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${input.need.trim()}`;
  const html = `<table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><p style="white-space:pre-wrap">${escapeHtml(input.need.trim())}</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "Portfolio contact form <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO || site.email],
        reply_to: email,
        subject: `New project enquiry from ${name.slice(0, 60)}`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Contact form: Resend returned", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ message: "The message could not be sent right now." }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact form: request to Resend failed", err);
    return NextResponse.json({ message: "The message could not be sent right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
