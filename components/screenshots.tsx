"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { MangaSectionHeader } from "@/components/manga-section-header"

const tabs = [
  {
    id: "library",
    label: "Library",
    src: "/images/list-view.png",
    alt: "Checkpoint library view showing reading list",
    desc: "Your entire reading list at a glance. Filter by format, search by title, and see how many chapters you\u2019re behind on each series.",
  },
  {
    id: "tags",
    label: "Tags",
    src: "/images/tag-view.png",
    alt: "Custom tags with color assignments",
    desc: "Custom tags with auto-assigned colors. Apply them to any title and filter across your library.",
  },
  {
    id: "filtering",
    label: "Filtering",
    src: "/images/filters.png",
    alt: "Tri-state filter controls for tags and genres",
    desc: "Tri-state filters in action. AND, OR, Exclude \u2014 combine tags, genres, and formats.",
  },
  {
    id: "import",
    label: "Import",
    src: "/images/import-csv-step-1-preview.png",
    alt: "CSV import interface with confidence scoring",
    desc: "Multi-step CSV import. Upload, match, review confidence scores, confirm.",
  },
  {
    id: "edit",
    label: "Edit",
    src: "/images/edit.png",
    alt: "Edit entry view with title, progress, and alternative names",
    desc: "Edit any entry \u2014 change the title, update progress, switch format, manage alternative names.",
  },
]

export function Screenshots() {
  const [active, setActive] = useState("library")
  const current = tabs.find((t) => t.id === active)!

  return (
    <section id="screenshots" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <MangaSectionHeader
          number="02"
          label="Screenshots"
          title="SEE WHAT YOU'RE GETTING"
        />

        <p className="text-muted-foreground mb-10 max-w-xl">
          A dark-themed side panel that stays out of your way. Here&apos;s what it
          actually looks like.
        </p>

        {/* Tab buttons */}
        <div className="flex gap-1 border-b-2 border-border mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap",
                active === tab.id
                  ? "border-b-[3px] border-primary text-foreground -mb-[2px]"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Screenshot display */}
        <div className="manga-frame mx-auto max-w-3xl">
          <Image
            src={current.src}
            alt={current.alt}
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        <p className="mt-6 text-center text-muted-foreground max-w-xl mx-auto">
          {current.desc}
        </p>
      </div>
    </section>
  )
}
