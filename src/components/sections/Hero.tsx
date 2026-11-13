import Image from "next/image";
import Link from "next/link";
import { copy, site } from "@/content/site";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-site items-start gap-x-12 gap-y-14 px-5 pb-20 pt-12 sm:px-8 md:grid-cols-[minmax(0,1fr)_280px] md:pt-20 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div>
        <p className="origin-left -rotate-2 font-hand text-[38px] leading-none text-link">{copy.hello}</p>
        <h1 className="mt-4 font-display text-[42px] font-bold leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-[72px]">
          I build websites, <span className="hl">fix the broken ones</span>, and automate the boring work.
        </h1>
        <p className="mt-7 max-w-[56ch] text-lg text-body sm:text-xl sm:leading-relaxed">{copy.heroIntro}</p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Link
            href="/#contact"
            className="rounded-full bg-ink px-7 py-4 text-lg font-semibold text-page transition-opacity hover:opacity-85"
          >
            Tell me about your project
          </Link>
          <Link href="/#work" className="link py-2 text-lg">
            or see my work
          </Link>
        </div>
        <p className="mt-9 flex items-start gap-3 text-base text-muted">
          <span aria-hidden="true" className="mt-[9px] h-2.5 w-2.5 shrink-0 rounded-full bg-good-dot" />
          {copy.heroStatus}
        </p>
      </div>

      {/* A printed photo, slightly crooked. It stays white in dark mode, like a real print. */}
      <figure className="w-[260px] rotate-[2.5deg] justify-self-center bg-white p-3 pb-2 shadow-[0_2px_4px_rgb(0_0_0/0.08),0_18px_40px_-14px_rgb(0_0_0/0.35)] md:mt-10 md:w-full md:justify-self-end">
        <Image
          src="/images/rabiul.jpg"
          alt={`Portrait of ${site.name}`}
          width={1000}
          height={1339}
          priority
          sizes="320px"
          className="aspect-[4/5] w-full object-cover object-[center_15%]"
        />
        <figcaption className="pt-2 text-center font-hand text-[26px] leading-tight text-[#1A1A17]">Dhaka, GMT+6</figcaption>
      </figure>
    </section>
  );
}
