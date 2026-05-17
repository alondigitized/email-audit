---
slug: 2026-05-17-homepage-www.everlane.com-esme-radical-everlane-fap6e
type: site
date: 2026-05-17
persona: esme-radical-everlane-fap6e
score: "1/10"
sender: www.everlane.com
subject: Homepage snapshot · www.everlane.com · 2026-05-17
tags: [site-journey, score-1, sender/www-everlane-com]
---
# Homepage snapshot · www.everlane.com · 2026-05-17
**Score:** 1/10 · **Type:** Site journey · **2026-05-17**
## Executive summary

- I opened Everlane's homepage and got... a gray rectangle. Literally. The entire above-the-fold viewport is an undifferentiated dark gray — no hero image loaded, no copy is legible, no navigation is rendering in a way I can read. The only thing that rendered cleanly is a white dismissal strip at the very bottom of the screen (looks like a cookie consent or modal bar with an × button). For a brand whose entire identity is "we show you the math," failing to show me *anything* is a special kind of irony.

## What's working

- **Cookie/modal dismiss strip** — the white bar at the bottom with the × is the only element that rendered. At least it's dismissible and isn't full-screen.

## What's weak

- **The entire page.** Hero image: failed to load. Any text copy: not rendered or invisible against the dark gray background. Navigation: not readable. CTAs: zero. This isn't a weak homepage — it's a broken homepage.
- **No fallback state.** A brand at Everlane's tier should have a CSS/skeleton fallback so a failed asset load doesn't produce a gray void. There is none visible here.
- **Modal obscuring whatever might exist below.** The white strip at the bottom suggests a consent or interstitial layer that may have blocked rendering or interaction.

## Recommendations

- **Fix the render failure first.** Before any conversion optimization, the page needs to actually load. Serve a lightweight CSS hero with text fallback if the image asset fails — a colored background with the headline and CTA copy would have scored me a 4 without a single image.
- **Move the cookie/modal consent to a non-blocking overlay.** If the bottom bar is a consent gate that paused rendering, restructure it so it doesn't block the hero from painting.
- **Add an `alt`-text visible hero headline as a DOM element** (not embedded in the image) so it renders even when the image doesn't — for my persona specifically, the cost-transparency headline is the hook, and right now it's nowhere.
- **Test on throttled mobile connections.** This looks like a heavy image that timed out on a slower connection. A progressive JPEG or WebP with a LQIP placeholder would have given me *something* to look at.

## Full review
## 1. Executive Summary

I opened Everlane's homepage and got... a gray rectangle. Literally. The entire above-the-fold viewport is an undifferentiated dark gray — no hero image loaded, no copy is legible, no navigation is rendering in a way I can read. The only thing that rendered cleanly is a white dismissal strip at the very bottom of the screen (looks like a cookie consent or modal bar with an × button). For a brand whose entire identity is "we show you the math," failing to show me *anything* is a special kind of irony.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: no copy is visible whatsoever
- − Returning-shopper hook: none visible
- − Concrete offer above the fold: none visible
- − Unmistakable primary CTA: none visible
- − Visual hierarchy clear: the eye has nowhere to land — full gray field
- − No render bugs: **render catastrophically failed** — entire hero/content area is a dark gray void
- − Demographic signals match my persona: cannot assess, nothing rendered
- − Current campaign/season reflected: cannot assess
- − Loyalty/membership visible: none
- − Offer feels honest: no offer to evaluate

Starting at 1, zero additional signals confirmed by what I can see. Score stays at 1.

## 3. What's Working

- **Cookie/modal dismiss strip** — the white bar at the bottom with the × is the only element that rendered. At least it's dismissible and isn't full-screen.

## 4. What's Weak

- **The entire page.** Hero image: failed to load. Any text copy: not rendered or invisible against the dark gray background. Navigation: not readable. CTAs: zero. This isn't a weak homepage — it's a broken homepage.
- **No fallback state.** A brand at Everlane's tier should have a CSS/skeleton fallback so a failed asset load doesn't produce a gray void. There is none visible here.
- **Modal obscuring whatever might exist below.** The white strip at the bottom suggests a consent or interstitial layer that may have blocked rendering or interaction.

## 5. Recommendations

- **Fix the render failure first.** Before any conversion optimization, the page needs to actually load. Serve a lightweight CSS hero with text fallback if the image asset fails — a colored background with the headline and CTA copy would have scored me a 4 without a single image.
- **Move the cookie/modal consent to a non-blocking overlay.** If the bottom bar is a consent gate that paused rendering, restructure it so it doesn't block the hero from painting.
- **Add an `alt`-text visible hero headline as a DOM element** (not embedded in the image) so it renders even when the image doesn't — for my persona specifically, the cost-transparency headline is the hook, and right now it's nowhere.
- **Test on throttled mobile connections.** This looks like a heavy image that timed out on a slower connection. A progressive JPEG or WebP with a LQIP placeholder would have given me *something* to look at.

## 6. Bottom Line

I'm bouncing — you can't sell me radical transparency when you can't even render a homepage.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `[not visible — no text rendered]`
- **Hero image:** Dark gray void — image asset failed to load; faint ghost silhouette possibly from an unrendered image placeholder
- **Primary CTA:** `[none visible]` — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - Nothing to credit here
- **Weaknesses:**
  - Complete asset load failure with no fallback text or color
  - No CTA, no copy, no navigation readable in the viewport

## 8. Promotional & Urgency Cues

- **Active promos:** none visible
- **Urgency / scarcity:** none visible
- **Loyalty hooks:** none visible
- **Honesty check:** The irony of Everlane — the radical-transparency brand — showing me a black box is not lost on me. There is no offer to evaluate for honesty because there is no offer.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists
- − Easy to reach my category: no navigation readable
- − Eye-catching imagery in my category: gray void, no imagery
- − Promo banner I would use: none visible
- − Page renders cleanly: **hard no** — total render failure above the fold
- − Imagery includes someone like me: nothing loaded
- − Copy register matches mine: no copy visible
- − Trust signals visible: none
- − New / hot rail in my category: none visible
- − No dark patterns: the blocking modal strip is the only element present; that's a friction point

**Score:** `1/10` — every criterion is a minus.
**Rationale:** A render failure is the terminal engagement killer. I have nothing to engage with, so I don't.

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

**Score:** `1/10` — zero criteria met.
**Rationale:** Nothing converted me because nothing loaded. I would have tapped a Way-High Jeans CTA in under three seconds if one had appeared — instead I got a gray wall and a cookie banner.

## 11. Evidence

Visible modules in scroll order (what actually rendered):

- **Hero / primary value prop:** FAILED — dark gray full-bleed field, no image, no text, no CTA
- **Featured categories:** not visible
- **Promotional banners or strips:** not visible
- **Loyalty / rewards section:** not visible
- **Editorial / lifestyle modules:** not visible
- **New-arrivals or best-seller rails:** not visible
- **Footer credibility:** not visible
- **Bugs / friction / clarity issues visible in screenshot:**
  - **Critical render failure:** the entire hero area is a non-rendered dark gray — no image, no copy, no UI elements
  - **Bottom modal/consent strip:** white bar with × in the bottom-right corner is the only rendered UI element; unclear if this is blocking the rest of the page from painting
## Recent history

- [[2026-05-15-homepage-www.everlane.com-esme-radical-everlane-fap6e]] — 2/10 (2026-05-15)
- [[2026-05-14-homepage-www.everlane.com-esme-radical-everlane-fap6e]] — 2/10 (2026-05-14)
- [[2026-05-13-homepage-www.everlane.com-esme-radical-everlane-fap6e]] — 2/10 (2026-05-13)

