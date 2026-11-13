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

export type Service = { name: string; pitch: string; price: string; icon: "wrench" | "bug" | "layout" | "bolt" };

export const services: Service[] = [
  {
    name: "Quick fix",
    icon: "wrench",
    pitch:
      "One thing is broken: a form that won't send, a button that does nothing, a layout that falls apart on phones. I find it, fix it, test it on a phone and a laptop, and tell you what was wrong.",
    price: "from $25",
  },
  {
    name: "Bug fix and tidy-up",
    icon: "bug",
    pitch:
      "A handful of problems at once: slow pages, mobile glitches, text that's hard to read. I fix them, check the site against accessibility rules (WCAG AA), and send you a written summary.",
    price: "from $60",
  },
  {
    name: "Page or small site",
    icon: "layout",
    pitch:
      "A landing page, a business site or a portfolio, built from your design in Next.js or Laravel. Forms wired up, deployed, and the source code is yours.",
    price: "from $120",
  },
  {
    name: "Automation",
    icon: "bolt",
    pitch:
      "If you clean the same spreadsheet every month, I can probably turn that into one command. Python scripts and Excel reports, with every change logged so you can trust the numbers.",
    price: "ask me",
  },
];

export type ClientProject = {
  client: string;
  role: string;
  summary: string;
  url: string;
  image: string;
  stack: string[];
};

export const clientWork: ClientProject[] = [
  {
    client: "Abir Hasan",
    role: "Computer vision researcher",
    summary:
      "One-page academic portfolio with an admin panel to edit every section, publications and a CV download.",
    url: "https://portfolio-abir-hossain.vercel.app/",
    image: "/images/client-abir.jpg",
    stack: ["Next.js 15", "Supabase", "Admin panel"],
  },
  {
    client: "Lamia Tasnim",
    role: "Mental health advocate",
    summary:
      "Publications, awards and experience, a contact form with email notifications, and an admin panel with media uploads.",
    url: "https://lamia-tasnim-portfolio.vercel.app/",
    image: "/images/client-lamia.jpg",
    stack: ["Next.js", "Supabase", "Resend"],
  },
  {
    client: "Md Amir Hossen",
    role: "Economist and researcher",
    summary: "Research experience, submitted papers with PDF links, skills, a contact form and CV download.",
    url: "https://portfolio-db-amir-one.vercel.app/",
    image: "/images/client-amir.jpg",
    stack: ["Next.js", "Supabase", "Contact form"],
  },
  {
    client: "Bidhita Islam Chowdhury",
    role: "Applied mathematics lecturer",
    summary: "Education timeline, publications with DOI links, awards, skills and a message form.",
    url: "https://portfolio-project-bidhita-islam.vercel.app/",
    image: "/images/client-bidhita.jpg",
    stack: ["Next.js", "Message form"],
  },
  {
    client: "Md Ammar Hossain",
    role: "Social science researcher",
    summary: "Publications, awards, training, a blog and a contact section.",
    url: "https://portfolio-ammar-hossen.vercel.app/",
    image: "/images/client-ammar.jpg",
    stack: ["Next.js", "Blog"],
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
  { step: "You tell me what you need", text: "A few lines is enough. I reply within 24 hours with questions and a fixed price." },
  { step: "We agree it in writing", text: "Scope, price and deadline, so nobody is guessing later." },
  { step: "I build, you watch", text: "You get a preview link and can look at the work while it's in progress." },
  { step: "You ask for changes", text: "One round of revisions is included in the price." },
  { step: "I hand it over", text: "Source code, a short setup guide, and 7 days of free fixes if anything I built misbehaves." },
];

export const copy = {
  roles: ["Web Developer.", "Bug Fixer.", "Automation Builder."],
  heroIntro:
    "I build fast websites in React, Next.js and Laravel, fix the ones that are broken, and automate messy data work with Python. Fixed prices, tested code, delivered on time.",
  servicesIntro: "Prices are where each job starts. You get a fixed quote before I touch anything.",
  workIntro: "Five researchers and academics, five live sites. Click through, they are all real.",
  studiesIntro: "Three projects of my own, written up so you can see how I think.",
  about: [
    "By day I am a software engineer, building enterprise systems in Java and Spring Boot. That job taught me to test what I write, keep things secure, and leave code the next person can read.",
    "Freelance work happens in my evenings and weekends, Dhaka time. You send something at the end of your day and it is often done when you wake up.",
  ],
  contactIntro: "A few lines is fine. Tell me what is broken or what you want built, and I will reply within one working day.",
};

export const stats = [
  { value: "5", label: "Client sites live" },
  { value: "10k+", label: "People using systems I built" },
  { value: "10 → 0", label: "Accessibility failures on one fix" },
  { value: "24h", label: "Reply time, or faster" },
];

export const experience = [
  {
    when: "Apr 2024 to now",
    title: "Software Engineer",
    place: "BRAC IT Services Ltd, Dhaka",
    text: "Back-end services in Java, Spring Boot and Grails. Built a 360-degree feedback module, cut average API response time by 30%, and added dashboards and role-based access.",
  },
  {
    when: "2024 to now",
    title: "Freelance developer",
    place: "Remote",
    text: "Portfolio sites with admin panels for researchers and academics, in Next.js and Supabase. Bug fixes and Python automation for small teams.",
  },
];

export const education = [
  {
    when: "2020 to 2025",
    title: "B.Sc. in Software Engineering",
    place: "Noakhali Science and Technology University",
    text: "CGPA 3.45 out of 4.00.",
  },
  {
    when: "Oct 2024",
    title: "Champion, BUET CSE Fest CTF",
    place: "Security competition",
    text: "Also 9th place at CTFBD Maze in Antarjal (ICT Division, 2023).",
  },
];

export const toolbox = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Laravel", "PHP", "Java", "Spring Boot", "MySQL", "PostgreSQL", "Supabase", "Python", "pandas", "Playwright"];

export const budgets = ["Under $60", "$60 to $120", "$120 to $500", "Over $500", "Not sure yet"];
