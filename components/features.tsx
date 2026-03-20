"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { MangaSectionHeader } from "@/components/manga-section-header"
import { useInView } from "@/hooks/use-in-view"
import {
  Upload,
  HardDrive,
  PanelRight,
  Languages,
  Lock,
  Code,
} from "lucide-react"

/* Tri-state filter pill demo for the ORGANIZE hero block */
const triStates = [
  { label: "AND", bg: "bg-[var(--state-and)]", text: "text-white" },
  { label: "OR", bg: "bg-[var(--state-or)]", text: "text-white" },
  { label: "EXCLUDE", bg: "bg-[var(--state-exclude)]", text: "text-white" },
] as const

function FilterPillDemo() {
  const [state, setState] = useState(0)
  const current = triStates[state]

  return (
    <div className="mt-6 flex items-center gap-3">
      <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Try it:</span>
      <button
        onClick={() => setState((s) => (s + 1) % 3)}
        className={cn(
          "rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors",
          current.bg,
          current.text
        )}
      >
        Action · {current.label}
      </button>
      <button
        onClick={() => setState((s) => (s + 1) % 3)}
        className={cn(
          "rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors",
          current.bg,
          current.text
        )}
      >
        Romance · {current.label}
      </button>
      <span className="text-xs text-muted-foreground">&larr; click to cycle</span>
    </div>
  )
}

const heroBlocks = [
  {
    label: "CORE",
    labelColor: "text-primary",
    borderLeft: "border-l-primary",
    borderRight: "border-r-primary",
    title: "ONE CLICK. ANY SITE. DONE.",
    body: "Open the side panel, hit the + button, and Checkpoint figures out the rest. It reads page metadata to detect the title and chapter number \u2014 no manual entry, no copy-pasting URLs. It works on MangaDex, Webtoon, Tapas, MangaPlus, raw scanlation sites, and basically anything with a chapter number in the page.",
    detail:
      "And if a site uses a weird title? Add an alternative name once, and Checkpoint recognizes it forever.",
    image: "/images/general-view.png",
    imageAlt: "Checkpoint detecting and adding a manga title",
  },
  {
    label: "ORGANIZE",
    labelColor: "text-cyan",
    borderLeft: "border-l-cyan",
    borderRight: "border-r-cyan",
    title: "ORGANIZE IT YOUR WAY",
    body: "Create custom tags with auto-assigned colors. Sort your library into Reading, Completed, Plan to Read, or make your own lists. Then filter across everything with a tri-state system that actually makes sense: click once for AND (green), twice for OR (blue), three times to Exclude (red). Combine tags, genres, and format tabs to find exactly what you\u2019re looking for.",
    detail: null,
    image: "/images/filters.png",
    imageAlt: "Tag filtering with tri-state controls",
  },
  {
    label: "ALERTS",
    labelColor: "text-accent",
    borderLeft: "border-l-accent",
    borderRight: "border-r-accent",
    title: "KNOW WHEN NEW CHAPTERS DROP",
    body: "Enable notifications on any title and Checkpoint checks AniList and MangaDex every 60 minutes in the background. When a new chapter is out, you\u2019ll know. No more refreshing release calendars or checking five different sites.",
    detail:
      "Fair warning: notification accuracy depends on API data, which isn\u2019t always perfect for ongoing series. But it catches most updates.",
    image: "/images/settings-view.png",
    imageAlt: "Notification settings for tracked manga",
  },
]

const bentoItems = [
  {
    icon: Upload,
    title: "CSV Bulk Import",
    desc: "Got a spreadsheet? Upload a CSV and Checkpoint batch-matches your titles against AniList and MangaDex with confidence scoring. Review matches, confirm the good ones, fix the rest.",
    span: "col-span-12 md:col-span-7",
  },
  {
    icon: HardDrive,
    title: "Backup & Restore",
    desc: "Full JSON export of your entire library. Import it on another machine. Your data, portable and yours.",
    span: "col-span-12 md:col-span-5",
  },
  {
    icon: PanelRight,
    title: "Side Panel UI",
    desc: "Lives in Chrome\u2019s side panel \u2014 always one click away while you\u2019re reading. No new tabs, no popups, no context switching.",
    span: "col-span-12 md:col-span-4",
  },
  {
    icon: Languages,
    title: "Alternative Names",
    desc: "\u2018Solo Leveling\u2019 on one site, \u2018Na Honjaman Level-Up\u2019 on another. Checkpoint remembers all the names for the same title.",
    span: "col-span-12 md:col-span-8",
  },
  {
    icon: Lock,
    title: "100% Local",
    desc: "No accounts. No servers. No tracking. Everything lives in Chrome\u2019s local storage on your machine.",
    span: "col-span-12 md:col-span-5",
  },
  {
    icon: Code,
    title: "Open Source",
    desc: "MIT licensed. Read the code, fork it, contribute. The whole thing is on GitHub.",
    span: "col-span-12 md:col-span-7",
  },
]

export function Features() {
  const { ref, inView } = useInView()

  return (
    <section id="features" className="py-24 md:py-32" ref={ref}>
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 manga-enter",
          inView && "in-view"
        )}
      >
        <MangaSectionHeader number="01" label="Features" title="THE GOOD STUFF" />

        {/* Tier 1: Hero blocks */}
        <div className="space-y-12 mb-20">
          {heroBlocks.map((block, i) => (
            <div
              key={block.title}
              className={cn(
                "manga-panel-offset flex flex-col gap-8 rounded-sm bg-card p-6 md:p-8",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Text side */}
              <div className="flex-1">
                <span
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.15em]",
                    block.labelColor
                  )}
                >
                  {block.label}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] mt-2 mb-4">
                  {block.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {block.body}
                </p>
                {block.detail && (
                  <p className="mt-4 text-sm text-muted-foreground/80 italic">
                    {block.detail}
                  </p>
                )}
                {/* Live filter pill demo for ORGANIZE block */}
                {block.label === "ORGANIZE" && <FilterPillDemo />}
              </div>

              {/* Image side */}
              <div
                className={cn(
                  "flex-1",
                  i % 2 === 0
                    ? cn("lg:border-l-2 lg:pl-6", block.borderLeft)
                    : cn("lg:border-r-2 lg:pr-6", block.borderRight)
                )}
              >
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  width={600}
                  height={400}
                  className="w-full rounded-sm"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tier 2: Bento grid */}
        <div className="grid grid-cols-12 gap-4">
          {bentoItems.map((item) => (
            <div
              key={item.title}
              className={cn(
                "manga-panel-offset rounded-sm bg-card p-6",
                item.span
              )}
            >
              <item.icon className="h-6 w-6 text-primary mb-3" />
              <h4 className="font-display text-lg font-bold uppercase mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
