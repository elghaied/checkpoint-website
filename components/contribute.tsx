import { Button } from "@/components/ui/button"
import { GitFork, Github, Code2, Users } from "lucide-react"

const steps = [
  {
    icon: GitFork,
    title: "Fork the repo",
    description:
      "Clone the source code from GitHub and set up your local development environment in minutes.",
  },
  {
    icon: Code2,
    title: "Build a feature",
    description:
      "Pick an open issue or bring your own idea — new site support, UI improvements, bug fixes, anything goes.",
  },
  {
    icon: Users,
    title: "Submit a PR",
    description:
      "Open a pull request and the community will review it. Every contribution, big or small, is welcome.",
  },
]

export function Contribute() {
  return (
    <section id="contribute" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
            Open Source
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built by the community, for the community
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Checkpoint is completely open source under the MIT license. Whether you want to fix a
            bug, add support for a new manga site, or build an entirely new feature — everyone is
            welcome to participate.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="mb-1 font-mono text-xs text-muted-foreground">
                {"Step "}
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a
                href="https://github.com/elghaied/checkpoint"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a
                href="https://github.com/elghaied/checkpoint/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 className="h-5 w-5" />
                Browse Issues
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No contribution is too small. Documentation, translations, and ideas all count.
          </p>
        </div>
      </div>
    </section>
  )
}
