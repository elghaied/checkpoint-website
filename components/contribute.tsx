import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const GITHUB_URL = "https://github.com/elghaied/checkpoint"
const ISSUES_URL = "https://github.com/elghaied/checkpoint/issues"

export function Contribute() {
  return (
    <section id="contribute" className="border-t-2 border-border py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase tracking-[-0.03em]">
            WANT TO MAKE IT BETTER?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Checkpoint is open source and MIT licensed. Bug fixes, new features,
            documentation, ideas — every contribution counts. Come say hi on GitHub.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button asChild className={cn("manga-btn-primary h-10 px-5 text-xs")}>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
          <a
            href={ISSUES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary font-bold hover:underline"
          >
            Browse open issues
          </a>
        </div>
      </div>
    </section>
  )
}
