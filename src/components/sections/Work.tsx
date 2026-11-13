import Image from "next/image";
import Link from "next/link";
import { caseStudies, clientWork, type ClientProject } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

const tints: Record<ClientProject["tint"], { bg: string; fg: string; bar: string }> = {
  blue: { bg: "bg-[#E6ECFB] dark:bg-[#1A284A]", fg: "text-[#163BA6] dark:text-[#A9C1FF]", bar: "bg-[#C9D6F6] dark:bg-[#2A3D69]" },
  teal: { bg: "bg-[#E1F3F0] dark:bg-[#12322F]", fg: "text-[#0B5D52] dark:text-[#8FE0D1]", bar: "bg-[#C3E6E0] dark:bg-[#1E4A45]" },
  violet: { bg: "bg-[#EEE8FB] dark:bg-[#2A2148]", fg: "text-[#5B34B8] dark:text-[#C9B5FF]", bar: "bg-[#DCD0F6] dark:bg-[#3D3166]" },
  amber: { bg: "bg-[#FBF0DD] dark:bg-[#3A2C14]", fg: "text-[#8A5300] dark:text-[#F5CF8A]", bar: "bg-[#F2DDB8] dark:bg-[#55411F]" },
  rose: { bg: "bg-[#FBE7EC] dark:bg-[#3E1E28]", fg: "text-[#A3244A] dark:text-[#FFB3C6]", bar: "bg-[#F4CDD7] dark:bg-[#5C2D3B]" },
};

function initials(name: string) {
  const parts = name.replace(/^Md\.?\s+/i, "").split(/\s+/);
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

function domain(url: string) {
  return new URL(url).hostname;
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto flex max-w-site flex-col gap-9 px-4 py-20 sm:px-6">
      <SectionHeading
        id="work-title"
        title="Client work"
        intro="Live sites I designed, built and deployed for researchers and academics."
      />

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-6">
        {clientWork.map((c) => {
          const t = tints[c.tint];
          return (
            <li key={c.client} data-reveal>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgb(14_27_51/0.35)]">
                {/* A drawn browser window: real screenshots can replace it later. */}
                <div className={`relative aspect-[16/10] ${t.bg} p-4`} aria-hidden="true">
                  <div className="flex h-full flex-col overflow-hidden rounded-lg bg-surface shadow-[0_8px_24px_-12px_rgb(14_27_51/0.35)] transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#F26D5B]" />
                      <span className="h-2 w-2 rounded-full bg-[#F5BE4F]" />
                      <span className="h-2 w-2 rounded-full bg-[#5BC771]" />
                      <span className="ml-2 truncate rounded bg-sunken px-2 py-0.5 font-mono text-[10px] text-muted">{domain(c.url)}</span>
                    </div>
                    <div className="flex flex-1 items-center gap-3 px-4">
                      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${t.bar} font-display text-base font-extrabold ${t.fg}`}>
                        {initials(c.client)}
                      </span>
                      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                        <span className={`truncate font-display text-[15px] font-extrabold ${t.fg}`}>{c.client}</span>
                        <span className={`h-1.5 w-4/5 rounded-full ${t.bar}`} />
                        <span className={`h-1.5 w-3/5 rounded-full ${t.bar}`} />
                      </div>
                    </div>
                    <div className="flex gap-2 px-4 pb-3">
                      <span className={`h-5 flex-1 rounded ${t.bar}`} />
                      <span className={`h-5 flex-1 rounded ${t.bar}`} />
                      <span className={`h-5 flex-1 rounded ${t.bar}`} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="font-mono text-xs text-muted">{c.role}</span>
                  <h3 className="font-display text-[19px] font-bold">{c.client}</h3>
                  <p className="flex-1 text-[15px] text-body">{c.summary}</p>
                  <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Built with">
                    {c.stack.map((s) => (
                      <li key={s} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 py-2.5 text-[15px] font-semibold text-link hover:underline"
                  >
                    Visit live site
                    <Arrow external />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </li>
          );
        })}

        <li data-reveal>
          <article className="flex h-full flex-col justify-between gap-5 rounded-xl bg-night p-7 text-white ring-1 ring-line">
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-xs text-[#B9C6E0]">Next on this list</span>
              <h3 className="font-display text-[26px] font-extrabold leading-tight">Your project</h3>
              <p className="text-[15px] text-[#D5DDEE]">
                Tell me what you need. I reply within 24 hours with questions and a fixed price.
              </p>
            </div>
            <Link
              href="/#contact"
              className="self-start rounded-lg bg-white px-5 py-3.5 text-[15px] font-semibold text-[#0E1B33] transition-colors hover:bg-[#E6ECFB]"
            >
              Start a project
            </Link>
          </article>
        </li>
      </ul>

      <div className="mt-7">
        <SectionHeading title="Case studies" intro="My own projects, showing how I build, fix and automate." size="md" />
      </div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-6">
        {caseStudies.map((c) => (
          <li key={c.title} data-reveal>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgb(14_27_51/0.35)]">
              <div className="overflow-hidden border-b border-line">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 700px) 100vw, 380px"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="font-mono text-xs text-muted">
                  {c.kind} · {c.stack}
                </span>
                <h3 className="font-display text-[19px] font-bold">{c.title}</h3>
                <p className="flex-1 text-[15px] text-body">{c.summary}</p>
                {c.external ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 py-2.5 text-[15px] font-semibold text-link hover:underline"
                  >
                    {c.cta}
                    <Arrow external />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <Link href={c.href} className="mt-1 inline-flex items-center gap-1.5 py-2.5 text-[15px] font-semibold text-link hover:underline">
                    {c.cta}
                    <Arrow />
                  </Link>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {external ? <path d="M7 17L17 7M8 7h9v9" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
    </svg>
  );
}
