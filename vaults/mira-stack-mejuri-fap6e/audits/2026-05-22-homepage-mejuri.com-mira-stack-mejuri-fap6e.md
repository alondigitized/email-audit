---
slug: 2026-05-22-homepage-mejuri.com-mira-stack-mejuri-fap6e
type: site
date: 2026-05-22
persona: mira-stack-mejuri-fap6e
score: "1/10"
sender: mejuri.com
subject: Homepage snapshot · mejuri.com · 2026-05-22
tags: [site-journey, score-1, sender/mejuri-com]
---
# Homepage snapshot · mejuri.com · 2026-05-22
**Score:** 1/10 · **Type:** Site journey · **2026-05-22**
## Executive summary

- Okay, something is very off here — what loaded on my screen is basically a blown-up, motion-blurred close-up of what looks like someone's hair or a textured surface, with a tiny sliver of blue at the top left. There is no legible text, no navigation, no CTA, nothing I can actually read or tap. This is either a catastrophic render failure or a video hero that froze mid-frame and captured as a single garbled image. For a brand I associate with clean, minimalist fine-jewelry photography, this is a terrible first impression.

## What's working

- Nothing I can see is working. The screenshot has not rendered any usable UI.

## What's weak

- **The entire viewport is a broken render** — looks like a video hero captured mid-play as a single blurry frame; I can see what appears to be close-up hair texture with motion blur and a grain artifact throughout.
- **Zero legible text** — no headline, no nav bar, no promo strip, no CTA. Nothing.
- **No Mejuri brand marks visible** — no logo, no wordmark, no color palette I associate with the brand.
- **A sliver of blue at top-left** that might be a nav element, but it's clipped and unreadable.

## Recommendations

- **Fix the video hero capture fallback** — if the hero is a looping video, the static OG/screenshot should be the poster frame, not a random mid-play blur. Ship a proper static fallback image.
- **Ensure the nav renders before the hero video loads** — the nav bar should be the first thing painted; if it's invisible at capture time, it's likely invisible during slow-load sessions too, which kills wayfinding.
- **Add a visible text overlay with a z-index guarantee** — even if the video fails, the headline and CTA should be on a separate layer that always renders.
- **Test on Chrome mobile at 3G throttle** — this screenshot looks exactly like what happens when a browser starts rendering a video but the full asset hasn't landed yet.

## Full review
## 1. Executive Summary

Okay, something is very off here — what loaded on my screen is basically a blown-up, motion-blurred close-up of what looks like someone's hair or a textured surface, with a tiny sliver of blue at the top left. There is no legible text, no navigation, no CTA, nothing I can actually read or tap. This is either a catastrophic render failure or a video hero that froze mid-frame and captured as a single garbled image. For a brand I associate with clean, minimalist fine-jewelry photography, this is a terrible first impression.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy: none visible. No text rendered at all.
- − Returning-shopper hook: not visible.
- − Concrete offer above the fold: not visible.
- − Primary CTA: not visible.
- − Visual hierarchy: there is none — just an undifferentiated blur.
- − Render bugs: the entire viewport appears broken — no layout, no text, no nav.
- − Demographic signals: cannot assess.
- − Current campaign / season: cannot assess.
- − Loyalty / membership: not visible.
- − Honest offer: moot — nothing rendered.

I'm giving the baseline 1 because the brand name is presumably in the URL, but zero rubric signals are present.

## 3. What's Working

- Nothing I can see is working. The screenshot has not rendered any usable UI.

## 4. What's Weak

- **The entire viewport is a broken render** — looks like a video hero captured mid-play as a single blurry frame; I can see what appears to be close-up hair texture with motion blur and a grain artifact throughout.
- **Zero legible text** — no headline, no nav bar, no promo strip, no CTA. Nothing.
- **No Mejuri brand marks visible** — no logo, no wordmark, no color palette I associate with the brand.
- **A sliver of blue at top-left** that might be a nav element, but it's clipped and unreadable.

## 5. Recommendations

- **Fix the video hero capture fallback** — if the hero is a looping video, the static OG/screenshot should be the poster frame, not a random mid-play blur. Ship a proper static fallback image.
- **Ensure the nav renders before the hero video loads** — the nav bar should be the first thing painted; if it's invisible at capture time, it's likely invisible during slow-load sessions too, which kills wayfinding.
- **Add a visible text overlay with a z-index guarantee** — even if the video fails, the headline and CTA should be on a separate layer that always renders.
- **Test on Chrome mobile at 3G throttle** — this screenshot looks exactly like what happens when a browser starts rendering a video but the full asset hasn't landed yet.

## 6. Bottom Line

I'd bounce instantly — I literally cannot tell I'm on Mejuri from this screenshot, and I'm not going to sit around waiting for a broken hero to resolve.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `[none visible]`
- **Hero image:** Extreme close-up, motion-blurred texture that appears to be human hair; no product, no model face, no jewelry visible.
- **Primary CTA:** `[none visible]` — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to me `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:** None discernible from this render.
- **Weaknesses:**
  - No text, no CTA, no logo — zero communication happening.
  - The blurred hair close-up is visually disorienting and gives no cue about the product category.

## 8. Promotional & Urgency Cues

- **Active promos:** none visible
- **Urgency / scarcity:** none visible
- **Loyalty hooks:** none visible
- **Honesty check:** N/A — nothing rendered to evaluate.

## 9. Engagement Likelihood

- − Hero relates to my focus area: cannot tell — no readable content
- − Easy to reach my category: no navigation visible at all
- − Eye-catching imagery in my category: the only image is a blurry hair close-up, no jewelry
- − Promo banner I would use: none visible
- − Page renders cleanly: hard no — this is the definition of a render failure
- − Imagery includes someone like me: a hair close-up is not a style signal
- − Copy register matches mine: no copy present
- − Trust signals visible: none
- − New / hot rail in my category: none visible
- − No dark patterns: moot — nothing loaded to darken

**Score:** `1/10` — 1 baseline, zero "+" signals.
**Rationale:** The page failed to render any meaningful UI in the viewport; there is nothing to engage with, and I would have already swiped away.

## 10. Conversion Likelihood

- − CTA in my category: none visible
- − Unambiguous CTA copy: none visible
- − Active price reduction or member pricing: none visible
- − Time-bounded credible deadline: none visible
- − Reachable free-shipping threshold: none visible
- − Specific product page one tap away: none visible
- − Sizing / fit info accessible: none visible
- − Returns / exchanges mentioned: none visible
- − Reviews / ratings visible: none visible
- − Trust / security signals: none visible

**Score:** `1/10` — 1 baseline, zero "+" signals.
**Rationale:** There is literally nothing to convert on — no product, no CTA, no offer, nothing. If this is what the hero renders to on a real device session, Mejuri is hemorrhaging customers at the very top of the funnel.

## 11. Evidence

Visible modules in the screenshot (scroll order):

- **Hero / primary value prop** — broken render; appears to be a video hero captured mid-frame as a blurred hair close-up; no overlay text or CTA present
- **Featured categories** — not visible
- **Promotional banners or strips** — not visible
- **Loyalty / rewards section** — not visible
- **Editorial / lifestyle modules** — not visible
- **New-arrivals or best-seller rails** — not visible
- **Footer credibility** — not visible
- **Bugs / friction visible in screenshot:**
  - Entire viewport is a single blurry, motion-artifact image — consistent with a video hero frozen at a non-poster frame
  - No navigation bar rendered
  - No text of any kind legible
  - Small blue artifact in top-left corner that may be a partial nav element, but is clipped and unreadable
  - No Mejuri logo or wordmark visible anywhere in frame
## Recent history

- [[2026-05-21-homepage-mejuri.com-mira-stack-mejuri-fap6e]] — 4/10 (2026-05-21)
- [[2026-05-20-homepage-mejuri.com-mira-stack-mejuri-fap6e]] — 2/10 (2026-05-20)
- [[2026-05-19-homepage-mejuri.com-mira-stack-mejuri-fap6e]] — 2/10 (2026-05-19)

