import { Globe, ShieldCheck, Code, Zap } from "lucide-react"

const highlights = [
  { icon: ShieldCheck, text: "100% local — no accounts, no tracking" },
  { icon: Globe, text: "Works on any manga reading website" },
  { icon: Code, text: "Open source — MIT licensed" },
  { icon: Zap, text: "Lightweight — only runs when you need it" },
]

export function SupportedSites() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Works everywhere you read
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Checkpoint uses smart heuristics to extract metadata from any manga reading page.
            Tested on the most popular sites.
          </p>
        </div>

        {/* Supported sites */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-6">
          {["MangaDex", "Webtoon", "Tapas", "MangaPlus", "And many more..."].map((site) => (
            <span
              key={site}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground"
            >
              {site}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.text} className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <h.icon className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
