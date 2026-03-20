import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Story } from "@/components/story"
import { Features } from "@/components/features"
import { Screenshots } from "@/components/screenshots"
import { Privacy } from "@/components/privacy"
import { FAQ, FAQSchema } from "@/components/faq"
import { Contribute } from "@/components/contribute"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      {/* Structured Data for SEO */}
      <FAQSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Checkpoint",
            applicationCategory: "BrowserApplication",
            operatingSystem: "Chrome",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Free Chrome extension that tracks your manga, manhwa, and manhua reading progress with one click. Tags, custom lists, tri-state filtering, chapter notifications, CSV import. 100% local, no accounts, open source.",
            softwareVersion: "0.3.0",
            author: {
              "@type": "Person",
              name: "elghaied",
              url: "https://github.com/elghaied",
            },
            url: "https://github.com/elghaied/checkpoint",
            downloadUrl:
              "https://chromewebstore.google.com/detail/checkpoint/bomngiemgfgjnlpanapgbeimmihnjaka",
            screenshot: "/images/list-view.png",
            featureList: [
              "One-click reading progress tracking",
              "Auto-detection of manga title and chapter",
              "Custom tags with auto-assigned colors",
              "Custom lists (Reading, Completed, Plan to Read)",
              "Tri-state tag filtering (AND/OR/Exclude)",
              "New chapter notifications via AniList and MangaDex",
              "CSV bulk import with confidence scoring",
              "Full JSON backup and restore",
              "Chrome Side Panel UI",
              "Alternative name matching",
              "100% local storage, no accounts required",
              "Open source, MIT licensed",
            ],
          }),
        }}
      />

      <Header />

      <main>
        <Hero />
        <Story />
        <Features />
        <Screenshots />
        <Privacy />
        <FAQ />
        <Contribute />
      </main>

      <Footer />
    </>
  )
}
