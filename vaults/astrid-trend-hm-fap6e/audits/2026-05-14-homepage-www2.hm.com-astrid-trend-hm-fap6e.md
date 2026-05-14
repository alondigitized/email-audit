---
slug: 2026-05-14-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-14
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-14
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-14
**Score:** 1/10 · **Type:** Site journey · **2026-05-14**
## Executive summary

- Okay so I literally got hit with a big bold "Access Denied" screen — no homepage, no products, no anything. H&M's CDN (Akamai EdgeSuite) blocked the request before a single pixel of their actual site loaded. Whatever brand identity or campaign they're running right now, I have zero idea, because this is all I got.

## What's working

- The page loads instantly — Akamai's error response is at least fast.

## What's weak

- **The entire homepage** — a CDN "Access Denied" wall is the hardest possible bounce. No image, no nav, no CTA, nothing.
- **No fallback or redirect** — a brand H&M's size should have a graceful error page with a logo and a "go to homepage" link, not a raw Akamai text dump.
- **Reference code is meaningless to me** — `#18.5ef00f17.1778782121.17407f6c` tells me nothing and looks like a scam page.
- **Zero trust signals** — not even H&M branding is present to confirm I'm on the right site.

## Recommendations

- **Add a branded error/fallback page** — if Akamai blocks a request, serve a styled H&M-branded 403 with nav links so the session isn't a dead end.
- **Investigate the geo/bot policy** — the block may be triggered by a headless browser user-agent or geo rule; H&M should audit what legitimate shoppers are getting caught in this filter.
- **Add a "Try the main site" redirect CTA** on the error page pointing to www.hm.com so blocked users aren't just stranded.
- **Surface H&M's support or status page URL** in the error copy so users know the brand is aware and there's a path forward.

## Full review
## 1. Executive Summary

Okay so I literally got hit with a big bold "Access Denied" screen — no homepage, no products, no anything. H&M's CDN (Akamai EdgeSuite) blocked the request before a single pixel of their actual site loaded. Whatever brand identity or campaign they're running right now, I have zero idea, because this is all I got.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: not applicable — no hero loaded
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: none
- − Clear visual hierarchy: the only hierarchy here is a serif error headline
- − No render bugs: this IS the render bug — full page block
- − Demographic signals match my persona: none
- − Page reflects current campaign/season: none
- − Loyalty/membership benefits visible: none
- − Offer feels honest: not scoreable — no offer exists

Score starts at 1; no rubric criterion is TRUE. Score stays at **1/10**.

## 3. What's Working

- The page loads instantly — Akamai's error response is at least fast.

## 4. What's Weak

- **The entire homepage** — a CDN "Access Denied" wall is the hardest possible bounce. No image, no nav, no CTA, nothing.
- **No fallback or redirect** — a brand H&M's size should have a graceful error page with a logo and a "go to homepage" link, not a raw Akamai text dump.
- **Reference code is meaningless to me** — `#18.5ef00f17.1778782121.17407f6c` tells me nothing and looks like a scam page.
- **Zero trust signals** — not even H&M branding is present to confirm I'm on the right site.

## 5. Recommendations

- **Add a branded error/fallback page** — if Akamai blocks a request, serve a styled H&M-branded 403 with nav links so the session isn't a dead end.
- **Investigate the geo/bot policy** — the block may be triggered by a headless browser user-agent or geo rule; H&M should audit what legitimate shoppers are getting caught in this filter.
- **Add a "Try the main site" redirect CTA** on the error page pointing to www.hm.com so blocked users aren't just stranded.
- **Surface H&M's support or status page URL** in the error copy so users know the brand is aware and there's a path forward.

## 6. Bottom Line

I'm leaving immediately — there is literally nothing here except a server error, and I'm not going to debug an Akamai reference code to go shopping.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** none — white page with plain black serif text
- **Primary CTA:** none — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `2` (the h1 is at least visually dominant), On-brand `1`
- **Strengths:**
  - The error message is at least legible
- **Weaknesses:**
  - Zero H&M branding — I could be on any random server error page
  - No path forward, no CTA, no recovery link

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The reference URL (`https://errors.edgesuite.net/...`) is technically accurate but looks sketchy to a normal shopper — could read as a phishing or compromised page

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero at all
- − Easy to reach my category: no navigation present
- − Eye-catching imagery in my category: no imagery
- − Promo banner I would use: none
- − Page renders cleanly: no — this is a full CDN block, the worst possible render failure
- − Imagery includes someone like me: none
- − Copy register matches mine: a raw server error message is no one's register
- − Trust signals visible: none — no reviews, badges, or policy copy
- − New / hot rail in my category: none
- − No dark patterns: the block itself is a dark pattern in effect — I can't proceed

**Score:** `1/10` — zero "+" bullets, score stays at baseline 1.
**Rationale:** The page is a complete access failure. There is no engagement possible because no content was served.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: none
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — no "+" bullets.
**Rationale:** Conversion is impossible when the homepage never loads; every rubric criterion is a hard zero.

## 11. Evidence

- **Hero / primary value prop:** `Access Denied` — Akamai EdgeSuite CDN block message in plain black serif h1
- **Error body copy:** "You don't have permission to access `http://www2.hm.com/en_us/index.html` on this server."
- **Reference line:** `Reference #18.5ef00f17.1778782121.17407f6c`
- **Error detail URL:** `https://errors.edgesuite.net/18.5ef00f17.1778782121.17407f6c`
- **Featured categories:** none loaded
- **Promotional banners or strips:** none loaded
- **Loyalty / rewards section:** none loaded
- **Editorial / lifestyle modules:** none loaded
- **New-arrivals or best-seller rails:** none loaded
- **Footer credibility:** none loaded
- **Bugs / friction / clarity issues visible:** the entire page is the bug — a CDN-level 403 block with no branded fallback, no H&M logo, no navigation, and no recovery path for the user
## Recent history

- [[2026-05-13-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-13)
- [[2026-05-10-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-10)
- [[2026-05-09-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-09)

