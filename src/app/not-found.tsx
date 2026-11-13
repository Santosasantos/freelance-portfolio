import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-site flex-col items-start gap-5 px-5 py-24 sm:px-8">
      <p className="font-display text-lg font-semibold text-link">404</p>
      <h1 className="font-display text-4xl font-bold tracking-tight">This page does not exist</h1>
      <p className="text-lg text-body">The link may be old or mistyped.</p>
      <Link href="/" className="rounded-full bg-accent px-7 py-4 font-semibold text-white hover:brightness-110">
        Go to the home page
      </Link>
    </section>
  );
}
