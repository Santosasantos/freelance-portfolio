export type Figure = { src: string; alt: string; caption: string };

export type Section = { heading: string; paragraphs?: string[]; bullets?: string[]; figure?: Figure };

export type CaseStudy = {
  slug: string;
  kind: string;
  title: string;
  intro: string;
  facts: { label: string; value: string }[];
  links: { label: string; href: string }[];
  sections: Section[];
  metaDescription: string;
};

export const caseStudyPages: CaseStudy[] = [
  {
    slug: "responsive-accessibility-fixes",
    kind: "Fix",
    title: "Responsive and accessibility fixes for a Next.js clinic site",
    intro:
      "During QA of the Lumen Dental Studio site I found three bugs that real visitors would hit: a broken tablet layout, a mobile menu that opened invisible, and text that failed contrast checks. Here is what was wrong, how I fixed it and how I proved the fix.",
    metaDescription:
      "Case study: a broken tablet layout, an invisible mobile menu and 10 WCAG AA contrast failures fixed on a Next.js site, verified with Playwright and axe-core.",
    facts: [
      { label: "Stack", value: "Next.js, TypeScript, Tailwind" },
      { label: "Tested with", value: "Playwright, axe-core" },
      { label: "Contrast failures", value: "10 → 0" },
      { label: "Screen sizes checked", value: "Phone, tablet, desktop" },
    ],
    links: [
      { label: "Visit the live site", href: "https://lumen-dental-studio-pi.vercel.app/" },
      { label: "View the code", href: "https://github.com/Santosasantos/lumen-dental-studio" },
    ],
    sections: [
      {
        heading: "1. The tablet layout broke at about 800px",
        paragraphs: [
          "At tablet width the navigation tried to fit on one line and pushed into the hero, and the booking card overlapped the headline. Phones and desktops looked fine, which is why this kind of bug ships.",
          "I moved the switch to the mobile menu to a larger breakpoint, and changed the hero to a single column until there is room for two.",
        ],
        figure: {
          src: "/images/case-tablet.jpg",
          alt: "Tablet layout before and after the fix",
          caption: "Before and after at tablet width.",
        },
      },
      {
        heading: "2. The mobile menu opened, but you could not see it",
        paragraphs: [
          "Tapping the menu button changed its state but showed nothing. The header had a blur effect (backdrop-filter), and in CSS that turns the header into the reference box for anything fixed inside it. The full-screen menu was being drawn inside the header's 64 pixels.",
          "I rendered the menu outside the header element, so it covers the screen as intended. Playwright now opens the menu on a phone-sized screen and checks that it is visible.",
        ],
        figure: {
          src: "/images/case-menu.jpg",
          alt: "Mobile menu before and after the fix",
          caption: "The menu before (invisible) and after.",
        },
      },
      {
        heading: "3. Ten pieces of text failed WCAG AA contrast",
        paragraphs: [
          "An automated axe-core audit flagged 10 text elements below the 4.5:1 contrast ratio that WCAG AA requires. Their ratios were between 3.1:1 and 4.2:1, mostly light grey labels on white.",
          "I raised the text colours at the design-token level instead of patching single elements, which brought every case to between 5.5:1 and 5.7:1. The audit now reports 0 failures.",
        ],
        figure: {
          src: "/images/case-contrast.jpg",
          alt: "Contrast audit results before and after",
          caption: "Contrast audit: 10 failures before, 0 after.",
        },
      },
      {
        heading: "What you get when I fix your site",
        bullets: [
          "The cause, not only the symptom, written up in plain English",
          "Checks on phone, tablet and desktop before I hand it back",
          "An accessibility pass against WCAG AA",
          "Fixed price agreed before I start",
        ],
      },
    ],
  },
  {
    slug: "sales-report-automation",
    kind: "Automate",
    title: "Sales report automation: from messy export to clean Excel report",
    intro:
      "Many small businesses spend hours each month cleaning the same sales export before they can read it. I built a Python tool that does it in one command and produces a report people can trust, because every change it makes is logged.",
    metaDescription:
      "Case study: a Python tool that turns a messy sales export into a clean Excel report with live formulas, charts and an issues log, covered by 26 tests.",
    facts: [
      { label: "Stack", value: "Python, pandas, openpyxl" },
      { label: "Input", value: "494-row messy export" },
      { label: "Output", value: "Excel report with charts" },
      { label: "Tests", value: "26 passing" },
    ],
    links: [{ label: "View the code", href: "https://github.com/Santosasantos/sales-report-automation" }],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "The sample export (from a fictional company, Brightline Supplies) looks like what real CRM and point-of-sale systems produce: the header is not on the first row, dates come in five formats, prices are stored as text, regions are spelled differently, and there are blank rows, subtotal rows and duplicates.",
        ],
        bullets: [
          "Dates as ISO, US, “3 Mar 2026”, slash dates and Excel serial numbers, some stored as text",
          "Money and quantities stored as text with currency signs and commas",
          "Missing or wrong line totals",
          "Subtotal rows and exact duplicates mixed in with real orders",
        ],
      },
      {
        heading: "The result",
        paragraphs: [
          "One command produces an Excel workbook with a summary sheet: revenue, orders, average order value, units and cancellation rate, then monthly, regional, top-product and sales-rep tables with charts.",
          "The numbers are live Excel formulas over the clean data, not pasted values, so the client can check any figure.",
        ],
        figure: {
          src: "/images/py-report.jpg",
          alt: "The messy export next to the finished report",
          caption: "The messy export and the report it becomes.",
        },
      },
      {
        heading: "Nothing changed silently",
        paragraphs: [
          "Every fix is written to an Issues Log sheet: which row, what was wrong, what it became. A person who doubts a number can trace it back to the original export.",
        ],
        figure: {
          src: "/images/py-issues.jpg",
          alt: "The Issues Log sheet listing every change",
          caption: "The Issues Log and cleaning summary.",
        },
      },
      {
        heading: "How I checked it",
        bullets: [
          "26 automated tests cover each date format, number format and cleaning rule",
          "Report totals checked against an independent pandas calculation",
          "Workbook recalculated in LibreOffice to confirm there are no formula errors",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudyPages.find((c) => c.slug === slug);
}
