import { copy, services } from "@/content/site";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto grid max-w-site gap-x-14 gap-y-10 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_270px]">
      <div>
        <h2 id="services-title" className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
          What I can do for you
        </h2>
        <p className="mt-4 max-w-[52ch] text-lg text-body">{copy.servicesIntro}</p>

        <ul className="mt-10 border-t border-line">
          {services.map((s) => (
            <li key={s.name} className="border-b border-line py-7" data-reveal>
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] sm:text-[28px]">{s.name}</h3>
                <span aria-hidden="true" className="min-w-6 flex-1 -translate-y-1 border-b-2 border-dotted border-field/70" />
                <span className="whitespace-nowrap font-display text-2xl font-semibold tabular-nums sm:text-[28px]">{s.price}</span>
              </div>
              <p className="mt-2.5 max-w-[60ch] text-body">{s.pitch}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* A sticky note. Fixed colours: it is paper, so it looks the same in both themes. */}
      <p
        className="max-w-[300px] -rotate-2 self-start bg-[#FFE98A] p-6 font-hand text-[27px] leading-[1.15] text-[#1A1A17] shadow-[0_10px_24px_-12px_rgb(0_0_0/0.4)] lg:mt-44"
      >
        {copy.note}
      </p>
    </section>
  );
}
