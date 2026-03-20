"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MangaSectionHeader } from "@/components/manga-section-header"

const faqs = [
  {
    q: "Is Checkpoint actually free?",
    a: "Yes. Completely free, open source under MIT, no paid tiers, no ads, no upsell. It will stay that way.",
  },
  {
    q: "Does it need an account?",
    a: "Nope. All data is stored locally in your browser. No sign-up, no login, no server.",
  },
  {
    q: "Which sites does it work on?",
    a: "Virtually any manga reading site. Uses smart page metadata extraction. Tested on MangaDex, Webtoon, Tapas, MangaPlus, and dozens of generic manga reader sites.",
  },
  {
    q: "What if a title isn\u2019t detected?",
    a: "Checkpoint shows a search modal where you can type the title manually or use \u2018Find Alternative Names\u2019 to search Google. Once you pick the right match, the undetected name is saved as an alternative so it\u2019s recognized automatically next time.",
  },
  {
    q: "How do tags and lists work?",
    a: "Custom tags with auto-assigned colors. Built-in lists: Reading, Completed, Plan to Read. Create custom lists too. Tri-state filtering: click once for include (AND), twice for include (OR), three times for exclude.",
  },
  {
    q: "Can I import my existing reading list?",
    a: "Yes. CSV bulk import with batch matching against AniList and MangaDex with confidence scoring. Also full JSON backup/restore for moving between machines.",
  },
  {
    q: "How do chapter notifications work?",
    a: "Checks AniList and MangaDex APIs every 60 minutes for titles with notifications enabled. Accuracy depends on API data quality.",
  },
  {
    q: "Is my data private?",
    a: "Yes. All local. Only network requests are to AniList and MangaDex for metadata lookups. No telemetry, no analytics, no data collection.",
  },
  {
    q: "What\u2019s the side panel?",
    a: "Chrome\u2019s Side Panel API \u2014 opens as a panel on the side of your browser, not a popup or new tab. Read while managing your list.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <MangaSectionHeader number="03" label="FAQ" title="QUESTIONS? ANSWERS." />

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-2 border-border rounded-sm px-4 data-[state=open]:border-l-primary data-[state=open]:border-l-4"
            >
              <AccordionTrigger className="text-left font-bold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }),
      }}
    />
  )
}
