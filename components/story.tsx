export function Story() {
  return (
    <section
      id="story"
      className="manga-clip-both relative bg-[var(--background-inset)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative max-w-2xl">
          {/* Giant quotation mark */}
          <span className="absolute -top-16 -left-6 text-[12rem] font-display font-bold leading-none text-primary/10 select-none pointer-events-none">
            &ldquo;
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-[0.95] tracking-[-0.03em] mb-8">
            I KEPT LOSING MY PLACE
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I&apos;ve been reading manga and manhwa for years. Hundreds of titles
              across dozens of sites. And I kept losing track of them.
            </p>
            <p>
              Browser bookmarks got wiped. Notes apps got abandoned. Tracking
              websites wanted me to sign up, manually search for every title, and
              update my progress by hand every single time I read a chapter. I just
              wanted something that sits in my browser, figures out what I&apos;m
              reading, and remembers where I stopped.
            </p>
            <p>
              So I built it. Checkpoint does exactly one thing well: it keeps track
              of what you&apos;re reading so you don&apos;t have to. It&apos;s free,
              it&apos;s open source, and your data never leaves your machine.
            </p>
          </div>

          <p className="mt-8 inline-block manga-badge rounded-sm bg-primary/10 px-3 py-2 text-sm text-primary">
            — Built by a reader who got tired of losing chapter 47 of three
            different series in the same week
          </p>
        </div>
      </div>
    </section>
  )
}
