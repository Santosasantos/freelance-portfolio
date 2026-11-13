import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-8 text-[15px] text-muted sm:px-8">
        <span>
          © {new Date().getFullYear()} {site.name}. Made in Dhaka.
        </span>
        <span className="flex flex-wrap gap-x-6 gap-y-2">
          <a className="link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="link" href={site.upwork} target="_blank" rel="noopener noreferrer">
            Upwork
          </a>
          <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}
