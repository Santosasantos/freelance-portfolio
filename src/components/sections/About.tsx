import { copy } from "@/content/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-sunken">
      <div className="mx-auto grid max-w-site gap-x-14 gap-y-6 px-5 py-20 sm:px-8 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
        <h2 id="about-title" className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
          A bit about me
        </h2>
        <div className="flex max-w-[62ch] flex-col gap-5 text-lg text-body" data-reveal>
          {copy.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
