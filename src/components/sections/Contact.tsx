import { copy, site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line">
      <div className="mx-auto grid max-w-site gap-x-14 gap-y-10 px-5 py-20 sm:px-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <div>
          <h2 id="contact-title" className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Tell me about <span className="hl">your project</span>
          </h2>
          <p className="mt-5 max-w-[44ch] text-lg text-body">{copy.contactIntro}</p>
          <p className="mt-8 text-lg">
            Prefer email?
            <br />
            <a className="link break-all font-display text-2xl font-semibold" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-6 text-body">
            You can also{" "}
            <a className="link" href={site.upwork} target="_blank" rel="noopener noreferrer">
              hire me through Upwork
            </a>{" "}
            or look at{" "}
            <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">
              my code on GitHub
            </a>
            .
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
