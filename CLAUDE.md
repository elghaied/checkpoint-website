# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Checkpoint** is a Next.js landing page/marketing website for a Chrome extension that tracks manga/manhwa/manhua reading progress. The site is deployed on Vercel at checkpoint-manga.vercel.app.

## Commands

Uses **pnpm** as the package manager.

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Run production server
pnpm lint       # Run ESLint
```

No test suite is configured.

## Architecture

Single-page marketing site built with Next.js App Router (no routing beyond the root page).

```
app/
  layout.tsx      # Root layout: metadata, fonts, Vercel Analytics, ThemeProvider
  page.tsx        # Composes all section components in order
  globals.css     # Tailwind v4 imports + OKLCh CSS variables (dark manga theme)
components/       # Feature section components (hero, features, faq, etc.)
  ui/             # Shadcn/ui component library (52+ components — don't modify directly)
hooks/            # use-toast, use-mobile
lib/utils.ts      # cn() helper (clsx + tailwind-merge)
public/images/    # Static assets (screenshots, OG image, hero image)
```

**Page structure** (top to bottom): Header → Hero → Features → HowItWorks → Screenshots → SupportedSites → Story → FAQ → Contribute → CTA → Footer

## Key Conventions

- **Path alias**: `@/` maps to the repo root (e.g., `@/components/ui/button`)
- **Class merging**: Always use `cn()` from `@/lib/utils` when combining Tailwind classes
- **UI components**: Add new shadcn/ui components via `pnpm dlx shadcn@latest add <component>` — never hand-edit files in `components/ui/`
- **Theme**: Dark-first design using OKLCh color variables defined in `globals.css`. Primary accent is warm amber (`oklch(0.78 0.16 65)`), secondary accent is cyan (`oklch(0.72 0.12 185)`)
- **Icons**: Lucide React only

## Notable Config

- `next.config.mjs`: TypeScript build errors are **ignored** (`ignoreBuildErrors: true`) and image optimization is disabled (`unoptimized: true`)
- Tailwind CSS v4 via PostCSS plugin (`@tailwindcss/postcss`) — no `tailwind.config.*` file; config lives in `globals.css`
- Shadcn/ui style: `new-york`, base color: `neutral`, RSC enabled
