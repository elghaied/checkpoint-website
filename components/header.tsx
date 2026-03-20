"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#story", label: "Story" },
  { href: "#faq", label: "FAQ" },
  { href: "https://github.com/elghaied/checkpoint", label: "GitHub", external: true },
]

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/checkpoint/bomngiemgfgjnlpanapgbeimmihnjaka"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-primary bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/checkpoint-logo.png"
            alt="Checkpoint"
            width={28}
            height={28}
          />
          <span className="font-display text-lg font-bold uppercase tracking-tight">
            Checkpoint
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className={cn("manga-btn-primary h-9 px-4 text-xs")}>
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
              Add to Chrome — it&apos;s free
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className={cn("manga-btn-primary mt-2 h-9 text-xs")}>
              <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
                Add to Chrome — it&apos;s free
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
