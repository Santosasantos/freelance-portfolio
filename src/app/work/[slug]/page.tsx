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
    <article className="mx-auto max-w-[46rem] px-5 pb-24 pt-10 sm:px-8">
      <Link href="/#work" className="link inline-block py-1">
        ← Back to all work
      </Link>
      <h1 className="mt-8 font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] sm:text-[52px]">{c.title}</h1>
      <p className="mt-6 text-xl leading-relaxed text-body">{c.intro}</p>

      <dl className="card mt-9 grid grid-cols-2 gap-x-8 gap-y-5 p-6 sm:grid-cols-4">
        {c.facts.map((f) => (
          <div key={f.label}>
            <dt className="text-[15px] text-muted">{f.label}</dt>
            <dd className="mt-0.5 font-semibold tabular-nums">{f.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
        {c.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link py-1 font-semibold">
            {l.label} ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </p>

      <div className="mt-16 flex flex-col gap-16">
        {c.sections.map((s) => (
          <section key={s.heading} className="flex flex-col gap-4" data-reveal>
            <h2 className="font-display text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-[32px]">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-body">
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="flex list-disc flex-col gap-2 pl-5 text-lg text-body marker:text-field">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {s.figure && (
              <figure className="mt-3 sm:-mx-8">
                <Image src={s.figure.src} alt={s.figure.alt} width={1600} height={1200} sizes="(max-width: 800px) 100vw, 800px" className="w-full rounded-2xl border border-line" />
                <figcaption className="mt-3 text-[15px] text-muted sm:px-8">{s.figure.caption}</figcaption>
              </figure>
            )}
          </section>
        ))}
      </div>

      <div className="mt-20 border-t border-line pt-10" data-reveal>
        <h2 className="font-display text-3xl font-bold tracking-[-0.025em]">Got a similar problem?</h2>
        <p className="mt-3 text-lg text-body">Tell me about it. I reply within 24 hours with questions and a fixed price.</p>
        <Link href="/#contact" className="mt-6 inline-block rounded-full bg-accent px-7 py-4 text-base font-semibold text-white transition hover:brightness-110">
          Tell me about your project
        </Link>
      </div>
    </article>
  );
}
