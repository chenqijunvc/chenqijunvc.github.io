# Information Architecture Audit — chenqijunvc.github.io

## Executive Summary

A personal portfolio site with ~20 live pages and 7 stale redirect pages. The content is substantive and well-differentiated, but the IA has accumulated cruft from previous iterations: orphan redirect pages, redundant labels, hidden content, and inconsistent URL directory semantics.

---

## 1. Audience & Mental Models

**Primary audience:** Professional contacts — allocators, recruiters, conference organizers, and collaborators.

**What they want to know:**
- Who is Vince Chen and what does he do? → About
- What has he built and managed? → Track Record / Work detail pages
- What does he think about investing? → Writing / Research
- Where has he been featured? → Media
- How to reach him? → Contact

**Current IA matches this fairly well** — the site is organized around these questions.

---

## 2. Sitemap (Current)

```
/                               home (landing + career arc + featured writing)
├── /about                      bio, what I built, credentials
├── /track-record               what I built (cards), ETF suite, recognition
│   ├── /work/investment-systems    detail page (linked from card)
│   ├── /work/portfolio-management  detail page (linked from card)
│   └── /work/research              detail page (linked from card)
│       ├── /contributions/pure-alpha           (linked from /work/research)
│       └── /contributions/free-cash-flow-research (linked from /work/research)
├── /work/publications          blog/post index  [labeled "Writing" in nav]
├── /record/media               TV interviews, PSN award
├── /record/timeline            chronological milestone list
└── /contact                    contact form
```

### Orphan & redirect pages (7 stale files, should be deleted):

| File | Target |
|---|---|
| `/publications.md` | → `/work/publications` |
| `/leadership-and-operations.md` | → `/contributions/institutional-platform` (which → `/work/investment-systems`) |
| `/my-responsibility.md` | → same chain |
| `/products-and-portfolios.md` | → same chain |
| `/selected-work.md` | → same chain |
| `/what-i-built.md` | → same chain |
| `/contributions/institutional-platform.md` | → `/work/investment-systems` |

### Internal reference files (3, should not be published):

| File | Content |
|---|---|
| `/ai_image_prompts.md` | AI image generation prompts |
| `/code-styling-documentation.md` | CSS design reference |
| `/image_mapping_guide.md` | Image mapping reference |

---

## 3. Issues Found

### Critical

**I1 — Stale redirect pages.** 7 redirect files clutter the root and one subdirectory. They serve zero users (anyone hitting them gets redirected instantly). Delete them.

**I2 — Internal reference files published.** `ai_image_prompts.md`, `code-styling-documentation.md`, `image_mapping_guide.md` are developer notes that should not be on the live site.

### High

**H1 — Label inconsistency (Writing / Publications / Selected Writing).**
- Nav item: **"Writing"**
- URL: `/work/publications`
- H1 on page: **"Publications"**
- Home page refers to: **"Selected Writing"** / **"All Writing"**
- Three different labels for the same destination. Choose one and use it everywhere. "Writing" is the strongest nav label (active verb → clear).

**H2 — `/record/timeline` is a chronological ledger (流水账).** The user explicitly dislikes this format. The timeline duplicates content already on the home page career arc and the track-record page. Either delete it or replace with a concise one-page table.

**H3 — About page has no internal links.** The about page describes "What I Built" but links nowhere. The Track Record page is the sole gateway to the `/work/` detail pages. About should link to `/work/research` and/or `/track-record`.

### Medium

**M1 — `/contributions/` directory is a dead end.** It's not in the nav and only reachable via `/work/research`. These are substantial pages (Pure Alpha framework, FCF research) that are effectively hidden. Either promote them to `/work/` or link them from more places.

**M2 — URL directory semantics are inconsistent.** Content is split across:
- `/work/` — systems, portfolio management, research, publications
- `/contributions/` — pure alpha, FCF research, institutional platform (redirect)
- `/record/` — timeline, media

The `/record/` directory label suggests archival/log content — not ideal for a personal site. `/work/` is stronger. Consider consolidating: move `contributions/` content into `/work/`, rename `record/` to something more intentional.

**M3 — No footer navigation.** Users who reach a detail page (e.g. `/work/portfolio-management`) have only the top nav and back button. A footer with Explore / Contact links would reduce dead-end feel.

### Low

**L1 — `/posts/index.html` exists but is not linked from anywhere.** It's a legacy pagination page. Should either link to it from the Writing page or remove it.

---

## 4. Recommended Structure

Delete: 7 stale redirects + 3 internal reference docs that should never be published.

```
/                               home
├── /about                      bio, what I built, credentials
├── /track-record               what I built (cards → /work/), ETF suite, recognition
│   ├── /work/investment-systems
│   ├── /work/portfolio-management
│   ├── /work/research
│   ├── /work/pure-alpha              ← moved from /contributions/
│   └── /work/free-cash-flow-research ← moved from /contributions/
├── /writing                    blog/post index  [labeled "Writing"]
├── /media                      TV interviews, PSN award  [renamed from /record/media]
└── /contact
```

Delete: `/record/timeline` (content is redundant with home + track-record).

### Nav (unchanged — 6 items is correct):
Home · About · Track Record · Writing · Media · Contact

### Labels (fix inconsistency):
- Nav: "Writing" → stays
- URL: `/writing` (cleaner than `/work/publications`)
- H1: "Writing"
- Home page: "Writing" (not "Selected Writing")

---

## 5. Actions

| # | Action | Effort |
|---|---|---|
| 1 | Delete 7 stale redirect files | 1 min |
| 2 | Move 3 internal reference files to a `_src/` or `.notes/` directory | 1 min |
| 3 | Delete `/record/timeline.md` | 1 min |
| 4 | Rename `/record/` → `/media/` (and update nav) | 5 min |
| 5 | Move `/contributions/pure-alpha.md` and `/contributions/free-cash-flow-research.md` to `/work/` | 5 min |
| 6 | Rename `/work/publications.md` → `/writing.md` (update nav, internal links) | 10 min |
| 7 | Fix label consistency: one name everywhere | 5 min |
| 8 | Add internal links from About page to work/ pages | 5 min |
| 9 | Add footer nav to layout | 15 min |
| 10 | Delete `/posts/index.html` (legacy) | 1 min |
