import { copy, education, experience, toolbox } from "@/content/site";
import { SectionHead } from "./Eyebrow";

type Entry = { when: string; title: string; place: string; text: string };

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-site px-5 py-24 sm:px-8">
      <SectionHead id="about-title" eyebrow="About me" title="Engineer by day, freelancer by night" />
      <div className="mx-auto mt-6 flex max-w-[720px] flex-col gap-4 text-center text-[17px] text-body">
        {copy.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-12 lg:grid-cols-2">
        <Column title="Experience" entries={experience} />
        <Column title="Education and awards" entries={education} />
      </div>

      <div className="mt-14" data-reveal>
        <h3 className="text-center text-[13px] font-bold uppercase tracking-[0.16em] text-muted">Tools I use most</h3>
        <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
          {toolbox.map((t) => (
            <li key={t} className="rounded-full border border-line bg-surface px-4 py-2 text-[14px] font-medium text-body">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Column({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div data-reveal>
      <h3 className="flex items-center gap-4 font-display text-2xl font-semibold">
        {title}
        <span aria-hidden="true" className="h-px w-16 bg-accent" />
      </h3>
      <ul className="mt-6 flex flex-col gap-5">
        {entries.map((e) => (
          <li key={e.title} className="card p-6">
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-link">{e.when}</p>
            <p className="mt-2 font-display text-lg font-semibold">{e.title}</p>
            <p className="text-[14px] text-muted">{e.place}</p>
            <p className="mt-3 text-[15px] text-body">{e.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
