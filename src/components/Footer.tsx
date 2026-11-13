import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-6 text-sm text-muted sm:px-6">
        <span>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </span>
        <span className="flex flex-wrap gap-x-5 gap-y-2">
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
