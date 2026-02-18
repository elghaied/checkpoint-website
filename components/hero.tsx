import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Chrome, Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #e94560, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Copy */}
        <div className="flex max-w-xl flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
            Free Chrome Extension
          </span>

          <h1 className="text-balance text-4xl leading-tight font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Never lose track of your manga again
          </h1>

          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Checkpoint saves your reading progress for manga, manhwa, and manhua across any website.
            One click. No accounts. No manual updates.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
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
                View Source
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            100% free &middot; Open source &middot; No sign-up required
          </p>
        </div>

        {/* Hero visual */}
        <div className="relative flex-1">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/5">
            <Image
              src="/images/hero-manga.png"
              alt="A reader tracking their manga progress with Checkpoint"
              width={500}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
