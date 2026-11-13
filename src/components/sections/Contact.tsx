import { copy, site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { SectionHead } from "./Eyebrow";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[560px] w-[560px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="relative mx-auto grid max-w-site gap-x-12 gap-y-10 px-5 py-24 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <div>
          <SectionHead id="contact-title" eyebrow="Get in touch" title="Tell me about your project" intro={copy.contactIntro} center={false} />
          <ul className="mt-8 flex flex-col gap-4">
            <Way label="Email">
              <a className="link break-all" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </Way>
            <Way label="Upwork">
              <a className="link" href={site.upwork} target="_blank" rel="noopener noreferrer">
                Hire me through Upwork
              </a>
            </Way>
            <Way label="GitHub">
              <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">
                github.com/Santosasantos
              </a>
            </Way>
            <Way label="Working hours">Evenings and weekends, {site.timezone}</Way>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Way({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="card flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-4">
      <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-muted">{label}</span>
      <span className="min-w-0 text-[15px]">{children}</span>
    </li>
  );
}
