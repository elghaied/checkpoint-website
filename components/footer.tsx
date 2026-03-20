import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/checkpoint/bomngiemgfgjnlpanapgbeimmihnjaka"
const GITHUB_URL = "https://github.com/elghaied/checkpoint"

const footerLinks = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#story", label: "Story" },
  { href: "#faq", label: "FAQ" },
  { href: GITHUB_URL, label: "GitHub", external: true },
]

export function Footer() {
  return (
    <footer className="border-t-[3px] border-primary">
      {/* CTA section */}
      <div className="py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold uppercase leading-[0.95] tracking-[-0.03em] mb-6">
          READY TO STOP LOSING YOUR PLACE?
        </h2>
        <Button asChild className={cn("manga-btn-primary h-12 px-8 text-sm mb-4")}>
          <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
            Add to Chrome — free forever
          </a>
        </Button>
        <p className="text-sm text-muted-foreground">
          Takes 10 seconds. No sign-up required.
        </p>
      </div>

      {/* Footer nav */}
      <div className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/checkpoint-logo.png"
              alt="Checkpoint"
              width={24}
              height={24}
            />
            <span className="font-display text-sm font-bold uppercase tracking-tight">
              Checkpoint
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            MIT License · Made by elghaied
          </p>
        </div>
      </div>
    </footer>
  )
}
