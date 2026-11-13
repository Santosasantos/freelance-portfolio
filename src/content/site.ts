// All site copy lives here, so text can be edited without touching layout.

export const site = {
  name: "Md Rabiul Islam",
  role: "Full-stack developer",
  email: "rabiul.devs@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~017684c12e41be0877",
  github: "https://github.com/Santosasantos",
  location: "Dhaka, Bangladesh",
  timezone: "GMT+6",
  description:
    "Full-stack developer for fast websites, bug fixes and automation. React, Next.js, Laravel and Python. Fixed prices, tested code, delivered on time.",
};

export type Service = {
  name: string;
  summary: string;
  outcomes: string[];
  priceLabel: "from" | "price";
  price: string;
};

export const services: Service[] = [
  {
    name: "Quick fix",
    summary: "One broken thing: a form, a layout glitch, a small bug.",
    outcomes: ["One issue found and fixed", "Tested on phone and desktop", "Short note on what changed"],
    priceLabel: "from",
    price: "$25",
  },
  {
    name: "Bug fix and improvement",
    summary: "Several bugs, speed or mobile problems, accessibility fixes.",
    outcomes: [
      "Repaired and tested on phone and desktop",
      "Accessibility checked against WCAG AA",
      "Written summary of what changed",
    ],
    priceLabel: "from",
    price: "$60",
  },
  {
    name: "Page or small site build",
    summary: "A landing page, business site or portfolio built from your design.",
    outcomes: [
      "Responsive build in Next.js or Laravel",
      "Contact or booking form wired up",
      "Deployed, with the source code handed over",
    ],
    priceLabel: "from",
    price: "$120",
  },
  {
    name: "Automation",
    summary: "Python scripts and Excel reports that replace manual work.",
    outcomes: [
      "One command turns a messy export into a clean report",
      "Every change logged, nothing altered silently",
      "Tests and a one-page guide included",
    ],
    priceLabel: "price",
    price: "Quote",
  },
];

export type ClientProject = {
  client: string;
  role: string;
  summary: string;
  url: string;
  stack: string[];
  tint: "blue" | "teal" | "violet" | "amber" | "rose";
};

export const clientWork: ClientProject[] = [
  {
    client: "Abir Hasan",
    role: "Computer vision researcher",
    summary:
      "One-page academic portfolio with an admin panel to edit every section, publications and a CV download.",
    url: "https://portfolio-abir-hossain.vercel.app/",
    stack: ["Next.js 15", "Supabase", "Admin panel"],
    tint: "blue",
  },
  {
    client: "Lamia Tasnim",
    role: "Mental health advocate",
    summary:
      "Publications, awards and experience, a contact form with email notifications, and an admin panel with media uploads.",
    url: "https://lamia-tasnim-portfolio.vercel.app/",
    stack: ["Next.js", "Supabase", "Resend"],
    tint: "teal",
  },
  {
    client: "Md Amir Hossen",
    role: "Economist and researcher",
    summary: "Research experience, submitted papers with PDF links, skills, a contact form and CV download.",
    url: "https://portfolio-db-amir-one.vercel.app/",
    stack: ["Next.js", "Supabase", "Contact form"],
    tint: "violet",
  },
  {
    client: "Bidhita Islam Chowdhury",
    role: "Applied mathematics lecturer",
    summary: "Education timeline, publications with DOI links, awards, skills and a message form.",
    url: "https://portfolio-project-bidhita-islam.vercel.app/",
    stack: ["Next.js", "Message form"],
    tint: "amber",
  },
  {
    client: "Md Ammar Hossain",
    role: "Social science researcher",
    summary: "Publications, awards, training, a blog and a contact section.",
    url: "https://portfolio-ammar-hossen.vercel.app/",
    stack: ["Next.js", "Blog"],
    tint: "rose",
  },
];

export type CaseStudyCard = {
  kind: "Build" | "Fix" | "Automate";
  stack: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  external: boolean;
};

export const caseStudies: CaseStudyCard[] = [
  {
    kind: "Build",
    stack: "Next.js, TypeScript, Tailwind",
    title: "Lumen Dental Studio",
    summary: "A dental clinic site with online booking, a service switcher and a live appointment summary.",
    image: "/images/lumen.jpg",
    imageAlt: "Lumen Dental Studio website shown on desktop and phone",
    href: "https://lumen-dental-studio-pi.vercel.app/",
    cta: "Visit live site",
    external: true,
  },
  {
    kind: "Fix",
    stack: "Playwright, axe-core",
    title: "Responsive and accessibility fixes",
    summary:
      "Broken tablet layout and invisible mobile menu repaired. Contrast failures went from 10 to 0 against WCAG AA.",
    image: "/images/case-tablet.jpg",
    imageAlt: "Before and after of a tablet layout that was broken and then fixed",
    href: "/work/responsive-accessibility-fixes",
    cta: "Read the case study",
    external: false,
  },
  {
    kind: "Automate",
    stack: "Python, pandas, Excel",
    title: "Sales report automation",
    summary:
      "A 494-row messy export becomes a clean Excel report with live formulas, charts and an issues log. 26 tests.",
    image: "/images/py-report.jpg",
    imageAlt: "A messy sales export next to the clean Excel report it becomes",
    href: "/work/sales-report-automation",
    cta: "Read the case study",
    external: false,
  },
];

export const process = [
  { step: "Brief", text: "You describe the project. I reply within 24 hours with questions and a fixed price." },
  { step: "Agree", text: "We confirm scope, price and deadline in writing." },
  { step: "Build", text: "You get a preview link to review as the work progresses." },
  { step: "Revise", text: "One round of revisions is included in the price." },
  { step: "Handover", text: "Source code, a short setup guide, and a 7-day bug-fix window after delivery." },
];

export const budgets = ["Under $60", "$60 to $120", "$120 to $500", "Over $500", "Not sure yet"];
