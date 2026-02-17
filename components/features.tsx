import {
  BookOpen,
  Bell,
  Search,
  Download,
  Tags,
  LayoutGrid,
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "One-Click Tracking",
    description:
      "Navigate to any manga page and click to save your progress. Checkpoint auto-detects the title and chapter number.",
  },
  {
    icon: Search,
    title: "Smart Name Matching",
    description:
      "Different sites use different names for the same manga. Checkpoint handles alternative names so detection works everywhere.",
  },
  {
    icon: Bell,
    title: "New Chapter Alerts",
    description:
      "Enable per-title notifications to get alerted when new chapters are released. Powered by AniList and MangaDex APIs.",
  },
  {
    icon: LayoutGrid,
    title: "Organized by Format",
    description:
      "Filter your list by Manga (JP), Manhwa (KR), or Manhua (CN). Switch tabs to quickly find what you're looking for.",
  },
  {
    icon: Tags,
    title: "Alternative Names",
    description:
      "Add custom alternative names to any entry. If auto-detection fails, paste the name and Checkpoint will remember it for next time.",
  },
  {
    icon: Download,
    title: "Export & Import",
    description:
      "Back up your entire reading list to a file, or import it on another machine. Share lists with friends who read the same titles.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to track your reading
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Built by a manga reader who was tired of losing track. Checkpoint is local-first,
            privacy-friendly, and works on every website.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-card/80"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
