import Image from "next/image";
import Link from "next/link";
import { clientWork, site } from "@/content/site";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-site flex-wrap items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:pt-[72px] lg:gap-14">
      <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
        <p className="font-mono text-[13px] uppercase tracking-[0.04em] text-muted">React · Next.js · Laravel · Python</p>
        <h1 className="font-display text-[40px] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-[54px]">
          Full-stack developer for fast websites, bug fixes and automation
        </h1>
        <p className="max-w-[560px] text-lg leading-relaxed text-body sm:text-[19px]">
          I build and repair websites in React, Next.js and Laravel, and automate messy data work with Python and
          Excel. Clear communication, tested code, delivered on time.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Link
            href="/#contact"
            className="rounded-lg bg-accent px-6 py-[15px] text-base font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Start a project
          </Link>
          <Link
            href="/#work"
            className="rounded-lg border border-field/60 bg-surface px-6 py-[14px] text-base font-semibold text-ink transition-colors hover:border-ink"
          >
            See my work
          </Link>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-body" aria-label="Highlights">
          <li className="flex items-center gap-2">
            <Check /> {clientWork.length} live client sites
          </li>
          <li className="flex items-center gap-2">
            <Check /> Fixed prices
          </li>
          <li className="flex items-center gap-2">
            <Check /> Reply within 24 hours
          </li>
        </ul>
      </div>

      <div className="w-full min-w-0 max-w-[420px] flex-[0_1_400px] overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_2px_rgb(14_27_51/0.04),0_12px_32px_-12px_rgb(14_27_51/0.18)]">
        <Image
          src="/images/rabiul.jpg"
          alt={`Portrait of ${site.name}`}
          width={1000}
          height={1339}
          priority
          sizes="(max-width: 480px) 100vw, 400px"
          className="aspect-[5/4] w-full object-cover object-[center_22%]"
        />
        <dl className="font-mono text-[13px]">
          <Row label="Based in" value={`${site.location} (${site.timezone})`} />
          <Row label="Works with" value="UK, EU and US clients" />
          <div className="flex justify-between gap-4 border-t border-line px-[18px] py-3">
            <dt className="text-muted">Status</dt>
            <dd className="flex items-center gap-2 font-medium text-good">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-good-dot opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-good-dot" />
              </span>
              Available for new work
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-t border-line px-[18px] py-3">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  );
}

function Check() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="text-link">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
