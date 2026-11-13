import Image from "next/image";
import Link from "next/link";
import { Typing } from "@/components/Typing";
import { copy, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft light behind the photo. */}
      <div aria-hidden="true" className="pointer-events-none absolute right-[-10%] top-[-20%] h-[720px] w-[720px] rounded-full bg-accent/25 blur-[140px]" />
      <div className="relative mx-auto grid max-w-site items-end gap-x-10 gap-y-6 px-5 pt-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:pt-10">
        <div className="pb-4 lg:pb-28 lg:pt-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-link">Hello</p>
          <h1 className="mt-4 font-display text-[38px] font-bold leading-[1.15] tracking-[-0.025em] sm:text-[54px]">
            I&apos;m {site.name}, a
            <span className="sr-only"> web developer, bug fixer and automation builder.</span>
            <span className="block min-h-[1.2em] text-link">
              <Typing words={copy.roles} />
            </span>
          </h1>
          <p className="mt-6 max-w-[54ch] text-[17px] text-body">{copy.heroIntro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/#contact" className="rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-[0_12px_36px_-10px_rgb(var(--accent)/0.8)] transition hover:brightness-110">
              Start a project →
            </Link>
            <Link href="/#work" className="rounded-full border border-line px-8 py-4 font-semibold text-ink transition-colors hover:border-accent">
              See my work
            </Link>
          </div>
          <p className="mt-9 flex items-center gap-3 text-[15px] text-muted">
            <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-good-dot opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-good-dot" />
            </span>
            Available for new projects · {site.location} ({site.timezone})
          </p>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[560px] lg:h-[620px]">
          <span aria-hidden="true" className="absolute inset-x-0 top-[26%] z-0 select-none text-center font-display text-[54px] font-extrabold uppercase leading-none tracking-tight text-ink sm:text-[92px] lg:text-[104px]">
            Developer
          </span>
          <Image
            src="/images/rabiul-cut.png"
            alt={`Portrait of ${site.name}`}
            width={900}
            height={1176}
            priority
            sizes="(max-width: 640px) 90vw, 480px"
            className="absolute bottom-0 left-1/2 z-10 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
          />
          <span aria-hidden="true" className="outline-text absolute inset-x-0 bottom-[9%] z-20 select-none text-center font-display text-[54px] font-extrabold uppercase leading-none tracking-tight sm:text-[92px] lg:text-[104px]">
            Developer
          </span>
          <div aria-hidden="true" className="absolute inset-x-[-20%] bottom-0 z-30 h-24 bg-gradient-to-t from-page to-transparent" />
        </div>
      </div>
    </section>
  );
}
