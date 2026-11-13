import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
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
        accent: v("accent"),
        good: v("good"),
        "good-dot": v("good-dot"),
        bad: v("bad"),
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "74rem" },
    },
  },
  plugins: [],
};

export default config;
