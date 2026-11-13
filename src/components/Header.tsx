"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/content/site";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "How we work" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-surface">
        <div className="mx-auto flex max-w-site h-16 items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex flex-col leading-tight" aria-label={`${site.name}, home`}>
            <span className="font-display text-lg font-extrabold tracking-tight text-ink">{site.name}</span>
            <span className="font-mono text-xs text-muted">{site.role}</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-[15px] font-medium text-ink hover:text-link">
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/#contact"
              className="rounded-lg bg-accent px-[18px] py-[11px] text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Start a project
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink"
            >
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside the header so it can cover the screen. */}
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[65px] z-30 overflow-y-auto bg-surface md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-4 font-display text-2xl font-bold text-ink hover:bg-sunken"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-lg bg-accent px-5 py-4 text-center text-lg font-semibold text-white hover:bg-accent-hover"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
