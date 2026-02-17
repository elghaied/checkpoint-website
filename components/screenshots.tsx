"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const screenshots = [
  {
    id: "list",
    label: "Tracking List",
    src: "/images/screenshot-list.png",
    alt: "Checkpoint tracking list showing manga, manhwa entries with chapter progress and cover art",
    description:
      "Your entire reading list at a glance. Filter by format, search by title, and see how many chapters you're behind on each series.",
  },
  {
    id: "search",
    label: "Smart Search",
    src: "/images/screenshot-search.png",
    alt: "Checkpoint search modal showing AniList results with alternative name detection",
    description:
      "When auto-detection doesn't find a match, search manually or use Google to find alternative names. The unrecognized name is saved for future detection.",
  },
  {
    id: "edit",
    label: "Edit & Manage",
    src: "/images/screenshot-edit.png",
    alt: "Checkpoint edit modal for managing manga entry details and alternative names",
    description:
      "Edit any entry — change the title, update progress, switch format, or manage alternative names. Delete entries you no longer need.",
  },
]

export function Screenshots() {
  const [active, setActive] = useState(screenshots[0])

  return (
    <section id="screenshots" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            See it in action
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A clean dark-themed side panel that stays out of your way.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="mb-8 flex justify-center gap-2">
          {screenshots.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                active.id === s.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Screenshot display */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/5">
            <Image
              src={active.src}
              alt={active.alt}
              width={400}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="mb-4 text-2xl font-bold text-foreground">{active.label}</h3>
            <p className="max-w-md leading-relaxed text-muted-foreground">{active.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
