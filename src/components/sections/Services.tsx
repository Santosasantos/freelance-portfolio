import { services, stats, type Service } from "@/content/site";

const icons: Record<Service["icon"], React.ReactNode> = {
  wrench: <path d="M14.5 6.5a4 4 0 0 0-5.2 5.2L3.5 17.5a2.1 2.1 0 0 0 3 3l5.8-5.8a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.3-.7-.7-2.3z" />,
  bug: (
    <>
      <rect x="8" y="7" width="8" height="12" rx="4" />
      <path d="M9.5 4.5L11 7M14.5 4.5L13 7M4 11h4M16 11h4M4.5 17H8M16 17h3.5M12 11v8" />
    </>
  ),
  layout: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M9.5 9.5v10" />
    </>
  ),
  bolt: <path d="M13 3L5 13.5h6L10 21l8.5-11H12.5z" />,
};

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative z-40 mx-auto max-w-site px-5 pb-24 pt-6 sm:px-8">
      <h2 id="services-title" className="sr-only">
        Services and starting prices
      </h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5">
        {services.map((s) => (
          <li key={s.name} data-reveal>
            <article className="card card-glow flex h-full flex-col items-start gap-3 p-7">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-link">
                <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {icons[s.icon]}
                </svg>
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold">{s.name}</h3>
              <p className="flex-1 text-[15px] text-body">{s.pitch}</p>
              <p className="mt-2 font-display text-lg font-semibold text-link">{s.price}</p>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]" data-reveal>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent p-8">
          <span className="font-display text-[84px] font-extrabold leading-none text-link">2+</span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-2xl font-semibold leading-tight">Years of professional experience</p>
            <p className="mt-2 text-[15px] text-body">Full-time software engineer, freelancing in the evenings and at weekends.</p>
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="card flex flex-col items-center justify-center gap-1 px-4 py-6 text-center">
              <dd className="order-1 font-display text-[30px] font-bold leading-tight tabular-nums sm:text-[34px]">{s.value}</dd>
              <dt className="order-2 text-[14px] text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
