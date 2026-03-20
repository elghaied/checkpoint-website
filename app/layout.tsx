import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://checkpoint.gshell.fr'),
  title: 'Checkpoint — Manga Tracker for Chrome | Track Manga, Manhwa & Manhua Progress',
  description:
    'Free Chrome extension that tracks your manga, manhwa, and manhua reading progress with one click. Tags, custom lists, tri-state filtering, chapter notifications, CSV import. 100% local, no accounts, open source.',
  keywords: [
    'manga tracker',
    'manhwa tracker',
    'manhua tracker',
    'chrome extension',
    'reading progress tracker',
    'manga reading list',
    'manhwa reading list',
    'manga bookmark',
    'track manga chapters',
    'manga chapter tracker',
    'webtoon tracker',
    'anilist',
    'mangadex',
    'one piece tracker',
    'solo leveling tracker',
    'manga progress tracker',
    'manga extension',
    'free manga tracker',
    'manga tag system',
    'manga list organizer',
    'csv manga import',
    'chrome side panel extension',
    'tri-state filter manga',
  ],
  authors: [{ name: 'elghaied' }],
  creator: 'elghaied',
  icons: {
    icon: '/checkpoint.ico',
    shortcut: '/checkpoint.ico',
  },
  openGraph: {
    title: 'Checkpoint — Manga Tracker for Chrome | Track Manga, Manhwa & Manhua Progress',
    description:
      'Free Chrome extension to track your manga, manhwa, and manhua reading progress across any website. One click. No accounts.',
    url: 'https://checkpoint.gshell.fr',
    siteName: 'Checkpoint',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Checkpoint — Manga Reading Progress Tracker Chrome Extension',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checkpoint — Manga Tracker for Chrome | Track Manga, Manhwa & Manhua Progress',
    description:
      'Free Chrome extension to track manga reading across any website. One click. No accounts.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://checkpoint.gshell.fr',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
