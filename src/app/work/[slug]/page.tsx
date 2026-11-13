import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudyPages, getCaseStudy } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudyPages.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.metaDescription,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { title: c.title, description: c.metaDescription, type: "article" },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();

  return (
    <article className="pb-20">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-[52rem] flex-col gap-5 px-4 pb-12 pt-10 sm:px-6">
          <Link href="/#work" className="link self-start py-1 text-[15px] font-medium">
            ← All work
          </Link>
          <p className="font-mono text-[13px] uppercase tracking-[0.04em] text-muted">Case study · {c.kind}</p>
          <h1 className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[44px]">{c.title}</h1>
          <p className="text-lg leading-relaxed text-body">{c.intro}</p>
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,170px),1fr))] gap-px overflow-hidden rounded-xl border border-line bg-line">
            {c.facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 bg-surface px-4 py-3.5">
                <dt className="font-mono text-xs text-muted">{f.label}</dt>
                <dd className="font-display text-[17px] font-bold tabular-nums">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {c.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link py-1 font-semibold">
                {l.label} ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[52rem] flex-col gap-14 px-4 pt-14 sm:px-6">
        {c.sections.map((s) => (
          <section key={s.heading} className="flex flex-col gap-4" data-reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-[-0.015em] sm:text-[28px]">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="max-w-[68ch] text-[17px] leading-relaxed text-body">
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="flex max-w-[68ch] list-disc flex-col gap-1.5 pl-5 text-[17px] text-body marker:text-field">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {s.figure && (
              <figure className="mt-2 flex flex-col gap-2.5">
                <Image
                  src={s.figure.src}
                  alt={s.figure.alt}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 860px) 100vw, 800px"
                  className="w-full rounded-xl border border-line"
                />
                <figcaption className="text-sm text-muted">{s.figure.caption}</figcaption>
              </figure>
            )}
          </section>
        ))}

        <div className="flex flex-wrap items-center justify-between gap-5 rounded-xl bg-night p-7 text-white ring-1 ring-line" data-reveal>
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-1.5">
            <h2 className="font-display text-2xl font-extrabold">Have a similar problem?</h2>
            <p className="text-[#D5DDEE]">Tell me about it. I reply within 24 hours with questions and a fixed price.</p>
          </div>
          <Link
            href="/#contact"
            className="rounded-lg bg-white px-5 py-3.5 font-semibold text-[#0E1B33] transition-colors hover:bg-[#E6ECFB]"
          >
            Start a project
          </Link>
        </div>
      </div>
    </article>
  );
}
