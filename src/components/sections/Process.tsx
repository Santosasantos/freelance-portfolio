import { process } from "@/content/site";
import { SectionHead } from "./Eyebrow";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-y border-line bg-sunken/40">
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8">
        <SectionHead id="process-title" eyebrow="How it works" title="From first message to handover" />
        <ol className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-5">
          {process.map((p, i) => (
            <li key={p.step} className="card flex flex-col gap-2 p-6" data-reveal>
              <span aria-hidden="true" className="font-display text-[40px] font-extrabold leading-none text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{p.step}</h3>
              <p className="text-[15px] text-body">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
