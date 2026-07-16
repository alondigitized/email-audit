---
slug: 2026-07-16-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-07-16
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-07-16
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-07-16
**Score:** 1/10 · **Type:** Site journey · **2026-07-16**
## Executive summary

- Okay so I literally opened H&M's homepage and got hit with a giant "Access Denied" error page — no branding, no hero, no products, nothing. This isn't a brand experience, it's a CDN firewall rejection from Akamai's edge network. There is nothing to evaluate here as a shopping homepage.

## What's working

- Nothing is working. The only element on the page is an Akamai EdgeSuite error message, which means the site didn't load at all.

## What's weak

- **"Access Denied" full-page error** — the CDN blocked the request entirely; no fallback page, no brand-consistent error state, no redirect to the main site
- **Zero visual branding** — no H&M logo, no color palette, nothing that signals I'm even in the right place
- **No recovery path** — no button, no link, no "try again" CTA; I'm just stranded on a white page with a reference ID
- **Akamai reference string exposed raw** (`https://errors.edgesuite.net/18.cee9c717...`) — this is a backend error fingerprint leaked to the user, which feels sloppy and unpolished
- **Completely blank below the error block** — the rest of the viewport is pure white, making the experience feel broken and abandoned

## Recommendations

- **Build a brand-consistent error fallback** — if Akamai blocks a request, redirect to a styled 403/maintenance page with the H&M logo, a short human message ("We're having trouble loading right now"), and a link back to the main site
- **Suppress raw CDN error URLs** — `errors.edgesuite.net` strings should never be visible to end users; configure a custom error page at the CDN layer
- **Add a "Go to Homepage" CTA** on the error page so users aren't fully stranded — one tap back to `hm.com` saves the bounce
- **Implement geo/bot detection gracefully** — if www2 blocks certain traffic, make the rejection silent and redirect rather than hard-blocking with a 403

## Full review
## 1. Executive Summary

Okay so I literally opened H&M's homepage and got hit with a giant "Access Denied" error page — no branding, no hero, no products, nothing. This isn't a brand experience, it's a CDN firewall rejection from Akamai's edge network. There is nothing to evaluate here as a shopping homepage.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery speaks to my persona: no hero, no copy, no imagery at all
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Primary CTA visible: none
- − Visual hierarchy clear: a bold "Access Denied" h1 is the only hierarchy — that's not intentional design
- − No render bugs: this IS a render failure — the page itself is a broken state
- − Demographic signals match my persona: none visible
- − Page reflects current campaign/season: none visible
- − Loyalty/membership benefits: none visible
- − Offer feels honest: N/A — there is no offer

Scoring: starts at 1, no criteria are TRUE. **Score: 1/10**

## 3. What's Working

- Nothing is working. The only element on the page is an Akamai EdgeSuite error message, which means the site didn't load at all.

## 4. What's Weak

- **"Access Denied" full-page error** — the CDN blocked the request entirely; no fallback page, no brand-consistent error state, no redirect to the main site
- **Zero visual branding** — no H&M logo, no color palette, nothing that signals I'm even in the right place
- **No recovery path** — no button, no link, no "try again" CTA; I'm just stranded on a white page with a reference ID
- **Akamai reference string exposed raw** (`https://errors.edgesuite.net/18.cee9c717...`) — this is a backend error fingerprint leaked to the user, which feels sloppy and unpolished
- **Completely blank below the error block** — the rest of the viewport is pure white, making the experience feel broken and abandoned

## 5. Recommendations

- **Build a brand-consistent error fallback** — if Akamai blocks a request, redirect to a styled 403/maintenance page with the H&M logo, a short human message ("We're having trouble loading right now"), and a link back to the main site
- **Suppress raw CDN error URLs** — `errors.edgesuite.net` strings should never be visible to end users; configure a custom error page at the CDN layer
- **Add a "Go to Homepage" CTA** on the error page so users aren't fully stranded — one tap back to `hm.com` saves the bounce
- **Implement geo/bot detection gracefully** — if www2 blocks certain traffic, make the rejection silent and redirect rather than hard-blocking with a 403

## 6. Bottom Line

I'm gone — you can't browse a 403 error page, and there's zero reason to stay.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** none — blank white page
- **Primary CTA:** none — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:** none observable
- **Weaknesses:**
  - The only text visible is an error message — there is no intentional hero at all
  - No brand identity, no imagery, no navigation; a completely dead viewport

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The raw Akamai error reference (`https://errors.edgesuite.net/18.cee9c717.1784196006.172ff066`) is exposed verbatim — not manipulative, but absolutely unpolished and not something a user should ever see

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no promo banner
- − Page renders cleanly: hard no — this is a CDN block error, not a page
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is "Access Denied" and a reference ID
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: a forced error wall is about as dark a pattern as it gets

**Score:** `1/10` — 1 base point, zero criteria met.

- **Rationale:** The page is a complete CDN failure state. There is nothing to engage with, and the experience would send me directly to a competitor.

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

**Score:** `1/10` — 1 base point, zero criteria met.

- **Rationale:** There is nothing on this page that could convert anyone — no product, no CTA, no offer; the page's only function is to tell me I can't be here.

## 11. Evidence

Modules visible on the page (in scroll order):

- **Error heading:** bold `Access Denied` h1 in default browser serif — no brand styling
- **Error body line 1:** `You don't have permission to access "http://www2.hm.com/en_us/index.html" on this server.`
- **Error body line 2:** `Reference #18.cee9c717.1784196006.172ff066`
- **Error body line 3:** raw Akamai error URL `https://errors.edgesuite.net/18.cee9c717.1784196006.172ff066`
- **Remainder of viewport:** completely blank white — no footer, no nav, no fallback content
- **Bugs / friction / clarity issues visible:** the entire page IS the bug — Akamai EdgeSuite returned a 403 and no brand-configured error fallback exists; no recovery CTA, no branding, raw CDN reference string exposed to end user
## Recent history

- [[2026-07-09-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-07-09)
- [[2026-07-02-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-07-02)
- [[2026-06-25-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-06-25)

