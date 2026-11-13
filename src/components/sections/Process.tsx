import { process } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-y border-line bg-surface">
      <div className="mx-auto flex max-w-site flex-col gap-9 px-4 py-20 sm:px-6">
        <SectionHeading id="process-title" title="How we work" intro="Five steps, from your first message to handover." />
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-5" data-reveal>
          {process.map((p, i) => (
            <li key={p.step} className="flex flex-col gap-2 border-t-2 border-ink pt-4">
              <span className="font-mono text-[13px] text-muted">Step {i + 1}</span>
              <h3 className="font-display text-lg font-bold">{p.step}</h3>
              <p className="text-[15px] text-body">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
