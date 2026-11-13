export function SectionHead({ id, eyebrow, title, intro, center = true }: { id?: string; eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 ${center ? "mx-auto max-w-[640px] items-center text-center" : "max-w-[560px]"}`}>
      <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-link">{eyebrow}</p>
      <h2 id={id} className="font-display text-[32px] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[42px]">
        {title}
      </h2>
      {intro && <p className="text-body">{intro}</p>}
    </div>
  );
}
