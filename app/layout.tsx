import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  metadataBase: new URL('https://checkpoint.gshell.fr'),
  title: 'Checkpoint — Track Your Manga, Manhwa & Manhua Reading Progress',
  description:
    'Checkpoint is a free Chrome extension that tracks your manga, manhwa, and manhua reading progress across any website. One click saves where you left off — no accounts, no manual updates. Features auto-detection, alternative name matching, new chapter notifications, and import/export.',
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
  ],
  authors: [{ name: 'elghaied' }],
  creator: 'elghaied',
  icons: {
    icon: '/checkpoint.ico',
    shortcut: '/checkpoint.ico',
  },
  openGraph: {
    title: 'Checkpoint — Track Your Manga, Manhwa & Manhua Reading Progress',
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
    title: 'Checkpoint — Track Your Manga, Manhwa & Manhua Reading Progress',
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
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
