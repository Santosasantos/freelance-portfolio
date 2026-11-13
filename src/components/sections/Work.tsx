import Image from "next/image";
import Link from "next/link";
import { caseStudies, clientWork, copy, type CaseStudyCard } from "@/content/site";

export function Work() {
  const [lead, ...rest] = caseStudies;
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-site px-5 py-20 sm:px-8">
      <h2 id="work-title" className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
        Sites I&apos;ve built for clients
      </h2>
      <p className="mt-4 max-w-[52ch] text-lg text-body">{copy.workIntro}</p>

      <ul className="mt-10 border-t border-line">
        {clientWork.map((c) => (
          <li key={c.client} className="border-b border-line" data-reveal>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-3 grid items-baseline gap-x-10 gap-y-1.5 rounded-md px-3 py-6 transition-colors hover:bg-sunken md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto]"
            >
              <span>
                <span className="block font-display text-[26px] font-semibold leading-tight tracking-[-0.015em]">{c.client}</span>
                <span className="mt-1 block text-base text-muted">{c.role}</span>
              </span>
              <span className="text-body">{c.summary}</span>
              <span className="whitespace-nowrap font-semibold text-link">
                Visit{" "}
                <span aria-hidden="true" className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-lg">
        Yours could be the sixth.{" "}
        <Link href="/#contact" className="link">
          Tell me about it
        </Link>
        .
      </p>

      <h2 className="mt-24 font-display text-3xl font-bold tracking-[-0.025em] sm:text-4xl">Things I built to show how I work</h2>
      <p className="mt-4 max-w-[52ch] text-lg text-body">{copy.studiesIntro}</p>

      <article className="mt-10 grid items-center gap-x-12 gap-y-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" data-reveal>
        <Shot c={lead} sizes="(max-width: 768px) 100vw, 620px" />
        <Words c={lead} />
      </article>

      <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
        {rest.map((c, i) => (
          <article key={c.title} className={`flex flex-col gap-5 ${i === 1 ? "md:mt-16" : ""}`} data-reveal>
            <Shot c={c} sizes="(max-width: 768px) 100vw, 500px" />
            <Words c={c} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Shot({ c, sizes }: { c: CaseStudyCard; sizes: string }) {
  return <Image src={c.image} alt={c.imageAlt} width={1600} height={1200} sizes={sizes} className="aspect-[4/3] w-full rounded-md object-cover" />;
}

function Words({ c }: { c: CaseStudyCard }) {
  const linkClass = "link mt-1 inline-block self-start py-2 font-semibold";
  return (
    <div className="flex flex-col gap-2.5">
      <h3 className="font-display text-[26px] font-semibold leading-tight tracking-[-0.015em]">{c.title}</h3>
      <p className="max-w-[48ch] text-body">{c.summary}</p>
      <p className="text-base text-muted">{c.stack}</p>
      {c.external ? (
        <a href={c.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {c.cta} ↗<span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <Link href={c.href} className={linkClass}>
          {c.cta}
          <span className="sr-only">: {c.title}</span>
        </Link>
      )}
    </div>
  );
}
