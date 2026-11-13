import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-site flex-col items-start gap-5 px-4 py-24 sm:px-6">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="font-display text-4xl font-extrabold tracking-tight">This page does not exist</h1>
      <p className="text-lg text-body">The link may be old or mistyped.</p>
      <Link href="/" className="rounded-lg bg-accent px-6 py-[15px] font-semibold text-white hover:bg-accent-hover">
        Go to the home page
      </Link>
    </section>
  );
}
