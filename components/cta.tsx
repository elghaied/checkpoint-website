import { Button } from "@/components/ui/button"
import { Chrome, Github } from "lucide-react"

export function CTA() {
  return (
    <section className="border-t border-border bg-secondary/30 py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Start tracking your reading today
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          Install Checkpoint in seconds. It&apos;s free, open source, and respects your privacy.
          Your reading list, your rules.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <a
              href="https://chromewebstore.google.com/detail/checkpoint/bomngiemgfgjnlpanapgbeimmihnjaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Chrome className="h-5 w-5" />
              Install for Chrome
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="gap-2">
            <a
              href="https://github.com/elghaied/checkpoint"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              Star on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
