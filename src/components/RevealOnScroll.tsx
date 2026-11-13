"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fades in elements marked data-reveal as they scroll into view.
// Only items below the fold are hidden first, so the page is complete without JavaScript
// and in screenshots of the first screen.
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const below = items.filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    below.forEach((el) => el.classList.add("reveal-pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("reveal-done");
          el.classList.remove("reveal-pending");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    below.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      below.forEach((el) => el.classList.remove("reveal-pending"));
    };
  }, [pathname]);

  return null;
}
