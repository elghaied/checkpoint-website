"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Chrome, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/checkpoint/bomngiemgfgjnlpanapgbeimmihnjaka"
const GITHUB_URL = "https://github.com/elghaied/checkpoint"

const steps = [
  {
    num: "01",
    title: "Read anywhere",
    desc: "MangaDex, Webtoon, Tapas, raw scanlation sites, whatever.",
  },
  {
    num: "02",
    title: "Click the + button",
    desc: "Auto-detects title and chapter from the page.",
  },
  {
    num: "03",
    title: "That's it. Seriously.",
    desc: "Saved locally forever. Pick up where you left off.",
  },
]

export function Hero() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className="manga-speed-lines manga-halftone manga-halftone-fade relative overflow-hidden py-24 md:py-32"
    >
      <div className={cn("relative z-10 mx-auto max-w-6xl px-4 manga-enter", inView && "in-view")}>
        {/* Badge */}
        <div className="mb-6">
          <span className="manga-badge inline-block rounded-sm bg-primary/10 px-3 py-1 text-xs text-primary">
            NOW WITH TAGS, LISTS & SMART FILTERING
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-[-0.03em] mb-6">
          YOUR{" "}
          <span className="text-outline-primary">MANGA</span>{" "}
          READING LIST, MINUS THE BS
        </h1>

        {/* Sub */}
        <p className="max-w-2xl text-lg text-muted-foreground mb-8">
          Checkpoint is a Chrome side panel that tracks what you&apos;re reading,
          what chapter you&apos;re on, and what&apos;s got new chapters out. Works on
          any site. No accounts. No BS.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Button asChild className={cn("manga-btn-primary h-12 px-6 text-sm")}>
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Chrome className="mr-2 h-4 w-4" />
              Add to Chrome — free forever
            </a>
          </Button>
          <Button asChild className={cn("manga-btn-secondary h-12 px-6 text-sm")}>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              See the source
            </a>
          </Button>
        </div>

        {/* Trust line */}
        <p className="text-sm text-muted-foreground mb-16">
          Open source · MIT licensed · Zero tracking · 100% local
        </p>

        {/* Hero image */}
        <div className="manga-frame mx-auto max-w-3xl">
          <Image
            src="/images/hero-manga.png"
            alt="Checkpoint Chrome extension side panel showing manga reading list"
            width={1200}
            height={800}
            priority
            className="w-full"
          />
        </div>

        {/* 3-step strip */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="border-l-2 border-primary pl-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                Step {step.num}
              </span>
              <h3 className="font-display text-lg font-bold uppercase mt-1">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
