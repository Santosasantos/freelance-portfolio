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
        link: v("link"),
        good: v("good"),
        "good-dot": v("good-dot"),
        bad: v("bad"),
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      maxWidth: { site: "68rem" },
    },
  },
  plugins: [],
};

export default config;
