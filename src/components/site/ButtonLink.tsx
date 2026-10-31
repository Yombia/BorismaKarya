import Link from "next/link";

type Variant = "gold" | "navy" | "outline-light" | "outline-dark" | "text-dark" | "text-light";

const styles: Record<Variant, string> = {
  gold: "h-12 px-5 bg-gold-500 text-navy-950 hover:bg-[#d4a668]",
  navy: "h-12 px-5 bg-navy-900 text-white hover:bg-navy-800",
  "outline-light": "h-12 px-5 border border-white/30 text-white hover:border-white hover:bg-white/5",
  "outline-dark": "h-12 px-5 border border-ink/20 text-ink hover:border-ink",
  "text-dark": "h-auto px-0 text-ink underline-offset-4 hover:underline",
  "text-light": "h-auto px-0 text-white underline-offset-4 hover:underline",
};

type Props = {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({ href, variant = "navy", external, className = "", children }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[15px] font-semibold transition-colors ${styles[variant]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
