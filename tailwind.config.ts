import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  // Dark when the visitor picks it, or when their system is dark and they have not picked light.
  darkMode: [
    "variant",
    [
      '&:is([data-theme="dark"] *)',
      '@media (prefers-color-scheme: dark) { &:not(:is([data-theme="light"] *)) }',
    ],
  ],
  theme: {
    extend: {
      colors: {
        page: v("page"),
        surface: v("surface"),
        sunken: v("sunken"),
        ink: v("ink"),
        body: v("body"),
        muted: v("muted"),
        line: v("line"),
        field: v("field"),
        accent: v("accent"),
        "accent-hover": v("accent-hover"),
        link: v("link"),
        "accent-soft": v("accent-soft"),
        good: v("good"),
        "good-dot": v("good-dot"),
        bad: v("bad"),
        night: v("night"),
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { site: "72.5rem" },
    },
  },
  plugins: [],
};

export default config;
