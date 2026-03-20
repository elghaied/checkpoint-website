const GITHUB_URL = "https://github.com/elghaied/checkpoint"

const statements = [
  "No accounts. No sign-ups. No passwords to forget.",
  "No servers. Your data lives in Chrome\u2019s local storage and nowhere else.",
  "No tracking. No analytics. No telemetry.",
  "No ads. No premium tier. No \u2018upgrade for more features.\u2019",
  "Full export. JSON backup anytime. Your data is always portable.",
  "Open source. Every line of code is readable on GitHub.",
]

export function Privacy() {
  return (
    <section id="privacy" className="py-24 md:py-32 bg-[var(--background-inset)]">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-[0.95] tracking-[-0.03em] mb-12">
          YOUR LIBRARY. YOUR MACHINE.{" "}
          <span className="text-outline-primary">PERIOD.</span>
        </h2>

        <div className="space-y-0">
          {statements.map((s, i) => (
            <p
              key={i}
              className="py-4 text-lg text-muted-foreground border-b border-border last:border-b-0"
            >
              {s}
            </p>
          ))}
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-primary font-bold hover:underline"
        >
          Read the source code yourself &rarr;
        </a>
      </div>
    </section>
  )
}
