import Image from "next/image";
import Link from "next/link";
import { caseStudies, clientWork, copy } from "@/content/site";
import { SectionHead } from "./Eyebrow";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line bg-sunken/40">
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8">
        <SectionHead id="work-title" eyebrow="Client work" title="Sites I have built for clients" intro={copy.workIntro} />

        <ul className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-6">
          {clientWork.map((c) => (
            <li key={c.client} data-reveal>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="card card-glow group flex h-full flex-col overflow-hidden">
                <span className="block overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`${c.client}'s website on desktop and phone`}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 700px) 100vw, 380px"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-2 p-6">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-link">{c.role}</span>
                  <span className="font-display text-[22px] font-semibold leading-tight">{c.client}</span>
                  <span className="flex-1 text-[15px] text-body">{c.summary}</span>
                  <span className="mt-2 flex flex-wrap gap-2">
                    {c.stack.map((s) => (
                      <span key={s} className="rounded-full border border-line px-3 py-1 text-[12px] text-muted">
                        {s}
                      </span>
                    ))}
                  </span>
                  <span className="mt-3 font-semibold text-link">
                    Visit live site ↗<span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
          <li data-reveal>
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-[#1D4ED8] p-8 text-white">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-white">Next on this list</p>
                <p className="mt-3 font-display text-[32px] font-bold leading-tight">Your project</p>
                <p className="mt-3 text-white">Tell me what you need. I reply within 24 hours with questions and a fixed price.</p>
              </div>
              <Link href="/#contact" className="self-start rounded-full bg-white px-7 py-3.5 font-semibold text-[#0D111C] transition hover:bg-white/90">
                Start a project →
              </Link>
            </div>
          </li>
        </ul>

        <div className="mt-24">
          <SectionHead eyebrow="Case studies" title="Projects that show how I work" intro={copy.studiesIntro} />
        </div>
        <ul className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-6">
          {caseStudies.map((c) => (
            <li key={c.title} data-reveal>
              <article className="card card-glow group flex h-full flex-col overflow-hidden">
                <div className="overflow-hidden">
                  <Image src={c.image} alt={c.imageAlt} width={1600} height={1200} sizes="(max-width: 700px) 100vw, 380px" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-link">{c.kind}</p>
                  <h3 className="font-display text-[22px] font-semibold leading-tight">{c.title}</h3>
                  <p className="flex-1 text-[15px] text-body">{c.summary}</p>
                  <p className="text-[13px] text-muted">{c.stack}</p>
                  {c.external ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="mt-2 self-start py-1 font-semibold text-link hover:underline">
                      {c.cta} ↗<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={c.href} className="mt-2 self-start py-1 font-semibold text-link hover:underline">
                      {c.cta} →<span className="sr-only">: {c.title}</span>
                    </Link>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
