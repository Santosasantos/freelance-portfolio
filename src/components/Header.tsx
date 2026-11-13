"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/content/site";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
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
      <header className="sticky top-0 z-40 border-b border-line bg-page">
        <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight text-ink" aria-label={`${site.name}, home`}>
            Rabiul<span className="text-link">.</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-[15px] font-medium text-body transition-colors hover:text-ink">
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/#contact"
              className="rounded-full bg-accent px-5 py-2.5 text-[15px] font-semibold text-white transition hover:brightness-110"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink"
            >
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside the header so it can cover the screen. */}
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[65px] z-30 overflow-y-auto bg-page md:hidden">
          <nav aria-label="Mobile" className="flex flex-col px-5 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-5 font-display text-3xl font-semibold text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-8 rounded-full bg-accent px-6 py-4 text-center text-lg font-semibold text-white"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
