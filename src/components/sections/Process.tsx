import { process } from "@/content/site";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="mx-auto grid max-w-site gap-x-14 gap-y-8 px-5 py-20 sm:px-8 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
      <h2 id="process-title" className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
        How a project goes
      </h2>
      <ol className="flex flex-col">
        {process.map((p, i) => (
          <li key={p.step} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-2 border-line py-5 [&:not(:first-child)]:border-t first:pt-0" data-reveal>
            <span aria-hidden="true" className="font-display text-[34px] font-bold leading-none text-field">
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold">{p.step}</h3>
              <p className="mt-1 max-w-[52ch] text-body">{p.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
