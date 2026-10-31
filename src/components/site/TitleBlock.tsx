type Props = {
  title: string;
  location?: string;
  scope?: string;
  year?: number;
  sheet?: string;
  tone?: "light" | "dark";
  className?: string;
  /** Elemen untuk judul (mis. "h2" di daftar portofolio). */
  titleAs?: "p" | "h2" | "h3";
};

// "Kop gambar": blok keterangan seperti di pojok lembar gambar kerja (DED).
// Baris atas: nama proyek dan lokasi. Baris bawah: lingkup, tahun, jenis gambar.
export function TitleBlock({ title, location, scope, year, sheet, tone = "light", className = "", titleAs = "p" }: Props) {
  const Title = titleAs;
  const dark = tone === "dark";
  const border = dark ? "border-white/20" : "border-line";
  const divide = dark ? "divide-white/20" : "divide-line";
  const muted = dark ? "text-white/60" : "text-ink-soft";
  const main = dark ? "text-white" : "text-ink";
  const meta = [
    { k: "Lingkup", v: scope },
    { k: "Tahun", v: year ? String(year) : undefined },
    { k: "Gambar", v: sheet },
  ].filter((m): m is { k: string; v: string } => Boolean(m.v));

  return (
    <div className={`border ${border} ${dark ? "bg-navy-950/80" : "bg-paper"} ${className}`}>
      <div className="px-3.5 py-3">
        <Title className={`text-[15px] font-bold leading-snug ${main}`}>{title}</Title>
        {location && <p className={`mt-0.5 text-xs ${muted}`}>{location}</p>}
      </div>
      {meta.length > 0 && (
        <dl className={`grid border-t ${border} divide-x ${divide}`} style={{ gridTemplateColumns: `repeat(${meta.length}, minmax(0, auto))` }}>
          {meta.map((m) => (
            <div key={m.k} className="min-w-0 px-3.5 py-2">
              <dt className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${muted}`}>{m.k}</dt>
              <dd className={`mt-0.5 truncate text-xs font-semibold tabular-nums ${main}`}>{m.v}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
