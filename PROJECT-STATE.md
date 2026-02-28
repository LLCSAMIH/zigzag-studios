# ZigZag Studio — Project State

**Last updated:** Feb 28, 2026
**Deploy:** zigzag-studios.vercel.app
**Domain:** zigzagstudio.com (configured in OG/sitemap)

---

## Tech Stack

- **Framework:** Next.js 16.1.6 (Turbopack) + React 19
- **Styling:** Tailwind CSS v4 (inline @theme in globals.css)
- **Package manager:** bun
- **Animation:** motion/react (Aceternity UI Lens component)
- **Fonts:** Plus Jakarta Sans (sans) + Playfair Display (serif)
- **Deploy:** Vercel (auto-deploy from main)

## Color System

| Variable | Value | Role |
|----------|-------|------|
| `--gray100` | `#1C2E3E` | Dark navy (primary bg) |
| `--gray200` | `#2E4457` | Card backgrounds |
| `--gray250` | `#3D5568` | Muted borders |
| `--gray300` | `#C9D1D8` | Muted text, dividers |
| `--gray900` | `#F4F6F8` | Off-white (primary text on dark) |
| `--accent` | `#F26101` | Orange accent |
| Silver sections | `#F0F2F5` | Alternating light sections |

**Note:** Color naming is inverted — gray100 = darkest, gray900 = lightest.

## Pages

| Route | Sections |
|-------|----------|
| `/` | HeroSection, WhyVisualsSection, WhyDiscoveryCallSection, HomePortfolioPreview, HomeServicesOverview, MatterportSection, RealtorsLoveSection, HomeHowItWorksSection, HomeCTASection, ServiceAreasSection |
| `/about` | PageHero, AboutStory, StatsSection |
| `/portfolio` | PageHero, PortfolioGrid, PortfolioShowcase |
| `/services` | PageHero, ServicesSection (accordion), Matterport embed, PricingSection, ProcessSection, FAQSection |
| `/contact` | PageHero, ContactSection |

FooterCTA + FooterBar in layout.tsx (shared, outside lens).

## Layout Structure (`src/app/layout.tsx`)

```
<TransitionProvider>
  <GlobalLens>
    <TopBar />
    {children}
  </GlobalLens>
  <FooterCTA />
  <FooterBar />
  <BottomNav />
  <ServicePanel />
</TransitionProvider>
```

## Key Components (31 total)

### Homepage Sections
| Component | Purpose |
|-----------|---------|
| `HeroSection` | Static hero: headline, subtext, dual CTAs (Discovery Call + Portfolio) |
| `WhyVisualsSection` | Comparison table: pain vs benefit rows |
| `WhyDiscoveryCallSection` | 3 benefits + CTA |
| `HomePortfolioPreview` | Category-tabbed portfolio with 3 filter tabs |
| `HomeServicesOverview` | 3x3 service card grid with icons |
| `MatterportSection` | 3D tour iframe embed |
| `RealtorsLoveSection` | 5 benefits + Google Reviews placeholder |
| `HomeHowItWorksSection` | 3-step process rows + CTA |
| `HomeCTASection` | "Ready to Sell / Your Next Listing Faster?" CTA |
| `ServiceAreasSection` | NJ / NY / PA location grid |

### Shared Components
| Component | Purpose |
|-----------|---------|
| `PageHero` | Reusable hero for inner pages |
| `BottomNav` | Fixed bottom pill nav with sliding indicator |
| `GlobalLens` | Aceternity UI lens magnification (desktop only) |
| `TopBar` | Fixed top bar with logo + tagline |
| `ServicePanel` | Floating contact panel (3-dot trigger) |
| `FooterCTA` | "Get Professional Photos That Drive Results" + Discovery Call |
| `FooterBar` | Copyright, links, "Capture + Create", BEIRUX credit |
| `TransitionLink` | Link component with page transitions |
| `MatterportEmbed` | Reusable responsive iframe wrapper |

### Data Files (`src/data/`)

- `services.ts` — 9 services (with icon field)
- `portfolio.ts` — 10 projects, 5 categories + homepageCategories
- `pricing.ts` — 3 pricing tiers
- `process.ts` — 3 process steps
- `faq.ts` — 8 FAQ items
- `stats.ts` — About page stats

### Unused Components (on disk, not imported)
- `HomeAboutTeaser` — original about teaser (replaced by new homepage)
- `QuoteSection` — original quote section (replaced by HomeCTASection)
- `ClientsSection` — client logo grid
- `InsightsSection` — blog card carousel

## CTA Language (site-wide)

All CTAs updated to "Schedule Your Free Discovery Call" / "Schedule a Discovery Call" pattern. Links to `/contact`. Pricing CTAs preserve `?package=` query param.

## Service Areas (site-wide)

Somerset · Hoboken · NYC · Brooklyn · Philadelphia · Bergen County & Beyond

Referenced in: HeroSection, ContactSection, ServiceAreasSection, layout.tsx metadata, JSON-LD areaServed.

## SEO

- JSON-LD `LocalBusiness` with `areaServed`, `telephone`, `email`
- OG title/description updated with service areas
- sitemap.xml, robots.txt unchanged

---

## Pending Decisions — ASK JEAN

- [ ] Apply new sales-focused tone to `/about`, `/portfolio`, `/contact` pages?
- [ ] Contact form: keep mailto or integrate real booking system (Google Calendar + email notifications)?
- [ ] Google Reviews: ready to integrate live feed via Google Places API?
- [ ] Social media links (Instagram, YouTube, Facebook): still `href="#"` — need real URLs
- [ ] Matterport: is `mVUh1bR82Tj` the right tour to showcase, or should we swap it?
