"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Checkpoint free?",
    answer:
      "Yes, Checkpoint is completely free and open source under the MIT License. There are no paid tiers, ads, or hidden costs.",
  },
  {
    question: "Does Checkpoint require an account?",
    answer:
      "No. All your data is stored locally in your browser using Chrome storage. There is no sign-up, no login, and no server involved.",
  },
  {
    question: "Which manga reading sites does Checkpoint support?",
    answer:
      "Checkpoint works on virtually any manga reading website. It uses smart heuristics to extract the title and chapter from the page. It has been tested on MangaDex, Webtoon, Tapas, MangaPlus, and many generic manga reader sites.",
  },
  {
    question: "What happens if a title isn't detected automatically?",
    answer:
      "Checkpoint shows a search modal where you can manually type the correct title. You can also use the \"Find Alternative Names\" button to search Google. Once you select the correct match, the original undetected name is saved as an alternative so it's recognized automatically next time.",
  },
  {
    question: "Can I back up my reading list?",
    answer:
      "Absolutely. Checkpoint has built-in import and export functionality. You can save your entire list to a file for backup, or share it with friends.",
  },
  {
    question: "How do new chapter notifications work?",
    answer:
      "Checkpoint periodically checks AniList and MangaDex APIs for the latest chapter counts. You can enable notifications per title by clicking the bell icon. Note: this feature depends on API data quality, which can sometimes be incomplete for ongoing series.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. All data is stored locally in your browser. Checkpoint only makes network requests to AniList and MangaDex for metadata lookups. There is no tracking, analytics, or telemetry.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Everything you need to know about Checkpoint.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

/* JSON-LD structured data for SEO */
export function FAQSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
