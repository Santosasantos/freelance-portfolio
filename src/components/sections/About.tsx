import { SectionHeading } from "./SectionHeading";

const stack = [
  { group: "Front end", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"] },
  { group: "Back end", items: ["Laravel", "PHP", "Java", "Spring Boot", "REST APIs"] },
  { group: "Data", items: ["MySQL", "PostgreSQL", "Supabase", "Python", "pandas"] },
  { group: "Quality", items: ["Playwright", "pytest", "JUnit", "axe-core", "Git"] },
];

export function About() {
  return (
    <section aria-labelledby="about-title" className="mx-auto flex max-w-site flex-wrap gap-x-14 gap-y-10 px-4 pb-20 sm:px-6">
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4" data-reveal>
        <SectionHeading id="about-title" title="About me" size="md" />
        <p className="max-w-[60ch] text-[17px] leading-relaxed text-body">
          I am a software engineer with more than two years of experience building enterprise systems in Java and
          Spring Boot, used by more than 10,000 people. That work taught me to write code that is tested,
          secure and easy for the next person to read.
        </p>
        <p className="max-w-[60ch] text-[17px] leading-relaxed text-body">
          On freelance projects I bring the same habits to smaller jobs: a fixed price before I start, a preview
          link while I work, and a plain-English note of what I changed when I hand it back.
        </p>
      </div>
      <dl className="grid min-w-0 flex-[1_1_420px] grid-cols-[repeat(auto-fill,minmax(min(100%,190px),1fr))] gap-x-8 gap-y-6" data-reveal>
        {stack.map((s) => (
          <div key={s.group} className="flex flex-col gap-2.5 border-t-2 border-ink pt-3">
            <dt className="font-mono text-[13px] text-muted">{s.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <li key={i} className="rounded-md bg-surface px-2.5 py-1 text-sm ring-1 ring-line">
                    {i}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
