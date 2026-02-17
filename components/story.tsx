export function Story() {
  return (
    <section id="story" className="border-y border-border bg-secondary/30 py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why I built Checkpoint
          </h2>
        </div>

        <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
          <p>
            {"I've been reading manga and manhwa for many years. Over time, I lost track of — or even forgot — many titles I was following. I saved them in browser bookmarks, in notes apps, even on tracking websites. But bookmarks got deleted by accident, notes got lost, and tracking websites required signing in and manually updating my list."}
          </p>

          <p>
            I wanted something that sits right in my browser, works on any reading site, and
            requires zero effort to keep updated. One click to save my progress. No accounts, no
            manual updates, no context switching.
          </p>

          <p>
            {"That's why Checkpoint exists. It's a local-first Chrome side panel extension built for readers who just want to keep reading without worrying about losing their place. Your data stays on your machine, it can be exported anytime, and it works everywhere."}
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-foreground">
            {"— Built by a reader, for readers"}
          </p>
        </div>
      </div>
    </section>
  )
}
