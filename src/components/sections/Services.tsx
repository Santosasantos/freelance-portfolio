import { services } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-y border-line bg-surface">
      <div className="mx-auto flex max-w-site flex-col gap-9 px-4 py-20 sm:px-6">
        <SectionHeading
          id="services-title"
          title="Services and starting prices"
          intro="Fixed prices agreed before work starts. You always know what you are paying for."
        />
        <ul className="flex flex-col overflow-hidden rounded-xl border border-line" data-reveal>
          {services.map((s, i) => (
            <li
              key={s.name}
              className={`flex flex-wrap items-start gap-x-8 gap-y-3 px-5 py-6 transition-colors hover:bg-page sm:px-7 ${i > 0 ? "border-t border-line" : ""}`}
            >
              <div className="min-w-0 flex-[1_1_220px]">
                <h3 className="mb-1 font-display text-xl font-bold">{s.name}</h3>
                <p className="text-[15px] text-muted">{s.summary}</p>
              </div>
              <ul className="min-w-0 flex-[2_1_340px] list-disc pl-5 text-[15px] text-body marker:text-field">
                {s.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <div className="flex flex-[0_0_120px] flex-col">
                <span className="font-mono text-xs text-muted">{s.priceLabel}</span>
                <span className="font-display text-[30px] font-extrabold leading-[1.1] tabular-nums">{s.price}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">
          Prices are starting points. Every project gets a fixed quote before work starts.
        </p>
      </div>
    </section>
  );
}
