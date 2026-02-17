import Link from "next/link"
import { BookOpen, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
       
                    <img src="/checkpoint-logo.svg" alt="Checkpoint logo" className="h-5 w-5" />

          <span className="text-sm font-semibold text-foreground">Checkpoint</span>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            <li>
              <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Features
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#contribute" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Contribute
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/elghaied/checkpoint"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-muted-foreground">
          MIT License &middot; Made by{" "}
          <a
            href="https://github.com/elghaied"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-2 hover:text-primary"
          >
            elghaied
          </a>
        </p>
      </div>
    </footer>
  )
}
