import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Screenshots } from "@/components/screenshots"
import { SupportedSites } from "@/components/supported-sites"
import { Story } from "@/components/story"
import { FAQ, FAQSchema } from "@/components/faq"
import { Contribute } from "@/components/contribute"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

// v2: Chrome Web Store links + Contribute section
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
              "A Chrome extension that tracks your manga, manhwa, and manhua reading progress across any website with one click.",
            softwareVersion: "0.3.0",
            author: {
              "@type": "Person",
              name: "elghaied",
              url: "https://github.com/elghaied",
            },
            url: "https://github.com/elghaied/checkpoint",
            downloadUrl: "https://chromewebstore.google.com/detail/checkpoint/bomngiemgfgjnlpanapgbeimmihnjaka",
            screenshot: "/images/screenshot-list.jpg",
            featureList: [
              "One-click reading progress tracking",
              "Auto-detection of manga title and chapter",
              "Alternative name matching",
              "New chapter notifications",
              "Format tabs (Manga, Manhwa, Manhua)",
              "Import and export reading lists",
              "Search and filter functionality",
              "AniList and MangaDex integration",
              "100% local storage, no accounts required",
            ],
          }),
        }}
      />

      <Header />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screenshots />
        <SupportedSites />
        <Story />
        <FAQ />
        <Contribute />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
