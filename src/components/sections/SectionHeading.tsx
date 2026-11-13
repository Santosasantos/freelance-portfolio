export function SectionHeading({ id, title, intro, size = "lg" }: { id?: string; title: string; intro?: string; size?: "lg" | "md" }) {
  return (
    <div className="flex max-w-[620px] flex-col gap-2.5">
      <h2
        id={id}
        className={`font-display font-extrabold leading-[1.15] tracking-[-0.02em] ${size === "lg" ? "text-[30px] sm:text-4xl" : "text-[26px] sm:text-[28px]"}`}
      >
        {title}
      </h2>
      {intro && <p className="text-[17px] text-body">{intro}</p>}
    </div>
  );
}
