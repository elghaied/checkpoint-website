import { MousePointerClick, ScanSearch, Bookmark, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: MousePointerClick,
    step: "01",
    title: "Read on any website",
    description:
      "Navigate to your manga, manhwa, or manhua on any reading site — MangaDex, Webtoon, Tapas, MangaPlus, or any generic reader.",
  },
  {
    icon: ScanSearch,
    step: "02",
    title: "Click to save progress",
    description:
      "Open the Checkpoint side panel and click the + button. The title and chapter are auto-detected from the page you're reading.",
  },
  {
    icon: Bookmark,
    step: "03",
    title: "Stay on top of your list",
    description:
      "Your progress is saved locally. Search, filter, and manage your list. Get notified when new chapters drop.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-secondary/30 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Three simple steps — no sign-ups, no syncing, no friction.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.step} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden translate-x-1/2 md:block">
                  <ArrowRight className="h-5 w-5 text-muted-foreground/40" />
                </div>
              )}

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <step.icon className="h-7 w-7 text-primary" />
              </div>

              <span className="mb-2 text-xs font-mono font-semibold tracking-widest text-primary">
                STEP {step.step}
              </span>

              <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>

              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
