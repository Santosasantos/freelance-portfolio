# Md Rabiul Islam: freelance portfolio

The site I send to clients: services with starting prices, live client work, case studies, and a contact form that emails me.

## Stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS, dark by default with a light theme toggle
- Self-hosted fonts: Sora, Manrope
- Contact form → `/api/contact` → email through [Resend](https://resend.com)

## Edit the content

All copy lives in two files, so text changes never touch layout:

- `src/content/site.ts`: contact details, services and prices, client work, case-study cards, process steps
- `src/content/case-studies.ts`: the two case-study pages

Images are in `public/images/`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
npm run typecheck
```

## Environment variables (set in Vercel, never commit them)

| Name | Required | What it does |
|---|---|---|
| `RESEND_API_KEY` | Yes, for the form | Sends contact form messages |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public address, used for canonical links, sitemap and social previews |
| `CONTACT_TO` | No | Where form messages go. Defaults to rabiul.devs@gmail.com (the Resend account email). The site itself shows rabiul@santoosa-santos.tech |
| `CONTACT_FROM` | No | Sender address on a domain verified in Resend. Without it, Resend's test sender is used, which only delivers to the email the Resend account was created with |

Without `RESEND_API_KEY` the form still validates, then tells the visitor to email me directly.

## What's built in

- Accessibility: skip link, labelled form fields with error messages, keyboard menu (Escape closes), WCAG AA contrast in both themes, reduced-motion support
- SEO: titles and descriptions per page, Open Graph image, JSON-LD (ProfessionalService), `sitemap.xml`, `robots.txt`
- Contact form protection: server-side validation, hidden spam trap, 5 messages per 10 minutes per visitor
- Security headers: `nosniff`, `DENY` framing, strict referrer policy

## Tested

Checked with Playwright and axe-core at 390, 768 and 1440 px wide in light and dark: no accessibility violations, no horizontal scroll, every internal link and anchor resolves, menu, theme switch, form validation and API responses behave as expected, and the page reads without JavaScript.
