import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/url";
import "./globals.css";

const body = localFont({
  src: "./fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-body",
  weight: "200 800",
  display: "swap",
});
const display = localFont({
  src: "./fonts/sora-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "100 800",
  display: "swap",
});

const title = `${site.name} | Full-stack developer for websites, fixes and automation`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = { themeColor: "#08090D" };

// Applies a saved theme before first paint, so there is no flash of the wrong theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${body.variable} ${display.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:text-ink focus:px-4 focus:py-3 focus:font-semibold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealOnScroll />
      </body>
    </html>
  );
}
