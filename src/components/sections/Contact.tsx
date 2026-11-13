import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto flex max-w-site flex-wrap gap-x-14 gap-y-10 px-4 py-20 sm:px-6">
      <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-5">
        <h2 id="contact-title" className="font-display text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-4xl">
          Start a project
        </h2>
        <p className="text-[17px] text-body">Tell me what you need. I reply within one working day.</p>
        <dl className="flex flex-col rounded-xl border border-line bg-surface font-mono text-sm">
          <Item label="Email">
            <a className="link break-all" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </Item>
          <Item label="Upwork">
            <a className="link" href={site.upwork} target="_blank" rel="noopener noreferrer">
              Hire me on Upwork
            </a>
          </Item>
          <Item label="GitHub">
            <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">
              github.com/Santosasantos
            </a>
          </Item>
          <Item label="Hours">
            <span>Evenings and weekends, {site.timezone}</span>
          </Item>
        </dl>
      </div>
      <div className="min-w-0 flex-[1_1_440px]">
        <ContactForm />
      </div>
    </section>
  );
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-1.5 border-line px-[18px] py-3.5 [&:not(:first-child)]:border-t">
      <dt className="text-muted">{label}</dt>
      <dd className="min-w-0">{children}</dd>
    </div>
  );
}
