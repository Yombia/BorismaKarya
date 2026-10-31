type Props = {
  index?: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "split";
  action?: React.ReactNode;
};

// Judul section ala lembar gambar kerja: "01 — Layanan".
export function SectionHeading({ index, label, title, intro, tone = "light", align = "left", action }: Props) {
  const dark = tone === "dark";
  return (
    <div className={align === "split" ? "grid gap-6 md:grid-cols-12 md:items-end" : ""}>
      <div className={align === "split" ? "md:col-span-7" : "max-w-3xl"}>
        <p className={`eyebrow flex items-center gap-3 ${dark ? "text-gold-500" : "text-gold-600"}`}>
          <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-gold-500" : "bg-gold-600"}`} />
          {index && <span className="tabular-nums">{index}</span>}
          {index && <span aria-hidden="true">—</span>}
          <span>{label}</span>
        </p>
        <h2
          className={`mt-4 text-[clamp(1.875rem,3vw,2.75rem)] font-bold leading-[1.12] ${dark ? "text-white" : "text-ink"}`}
        >
          {title}
        </h2>
        {intro && (
          <p className={`mt-4 max-w-[62ch] text-[1.0625rem] leading-[1.7] ${dark ? "text-white/70" : "text-ink-soft"}`}>
            {intro}
          </p>
        )}
      </div>
      {action && <div className={align === "split" ? "md:col-span-5 md:justify-self-end" : "mt-6"}>{action}</div>}
    </div>
  );
}
