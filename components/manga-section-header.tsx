interface MangaSectionHeaderProps {
  number: string
  label: string
  title: string
}

export function MangaSectionHeader({ number, label, title }: MangaSectionHeaderProps) {
  return (
    <div className="relative mb-12">
      {/* Decorative background number */}
      <span className="absolute -top-8 -left-4 text-[8rem] font-display font-bold leading-none text-foreground/[0.03] select-none pointer-events-none">
        {number}
      </span>

      {/* Red bar + label */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-1 bg-primary" />
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {label}
        </span>
      </div>

      {/* Title */}
      <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-[0.95] tracking-[-0.03em]">
        {title}
      </h2>
    </div>
  )
}
