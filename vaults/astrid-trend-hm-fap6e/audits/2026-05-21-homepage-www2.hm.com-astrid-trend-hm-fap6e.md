---
slug: 2026-05-21-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-21
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-21
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-21
**Score:** 1/10 · **Type:** Site journey · **2026-05-21**
## Executive summary

- Okay so I literally just got hit with a big bold "Access Denied" error page — zero homepage, zero products, zero vibe. This isn't an H&M brand experience at all, it's an Akamai edge server blocking me. There is nothing to shop, nothing to scroll, and no H&M content visible whatsoever.

## What's working

- Nothing. The page loaded (technically), so DNS resolved. That's the only positive I can find.

## What's weak

- **The entire page** — what's visible is a plain-text Akamai EdgeSuite "Access Denied" error: `"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."` No branding, no nav, no imagery.
- **Reference error string** — `Reference #18.30153b17.1779358162.1b15d9dc` is exposed raw on the page, which reads as broken and zero-polish to a shopper.
- **Error URL exposed** — `https://errors.edgesuite.net/18.30153b17.1779358162.1b15d9dc` is sitting there publicly, which is just sloppy UX.
- **Zero recovery path** — no "go back", no redirect to hm.com, no brand-softened 403 page. I'm just stranded.

## Recommendations

- **Serve a branded 403/blocked page** — if bot detection or geo-blocking is intentional, at minimum show the H&M logo and a "Try hm.com" redirect button instead of a raw server error.
- **Suppress internal reference IDs from the user-facing error** — exposing Akamai reference strings adds zero value to a shopper and signals infrastructure problems.
- **Implement a graceful fallback redirect** — if `www2.hm.com` is a legacy subdomain, 301 it to `www.hm.com` rather than leaving visitors on a dead end.
- **Test bot/CDN rules against mobile user-agents** — if this capture was from a mobile-emulated browser, the CDN rule is too aggressive and is blocking real shoppers.

## Full review
## 1. Executive Summary

Okay so I literally just got hit with a big bold "Access Denied" error page — zero homepage, zero products, zero vibe. This isn't an H&M brand experience at all, it's an Akamai edge server blocking me. There is nothing to shop, nothing to scroll, and no H&M content visible whatsoever.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: no hero, just an error message
- − Returning-shopper hook visible: nothing
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy clear: the only "hierarchy" is an h1 that says "Access Denied"
- − No render bugs: this entire page IS a render bug — blocked by Akamai CDN
- − Demographic signals match persona: no content at all
- − Page reflects current campaign/season: no
- − Loyalty/membership visible: no
- − Offer feels honest: no offer exists

Starting at 1, zero criteria met — score stays at 1.

## 3. What's Working

- Nothing. The page loaded (technically), so DNS resolved. That's the only positive I can find.

## 4. What's Weak

- **The entire page** — what's visible is a plain-text Akamai EdgeSuite "Access Denied" error: `"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."` No branding, no nav, no imagery.
- **Reference error string** — `Reference #18.30153b17.1779358162.1b15d9dc` is exposed raw on the page, which reads as broken and zero-polish to a shopper.
- **Error URL exposed** — `https://errors.edgesuite.net/18.30153b17.1779358162.1b15d9dc` is sitting there publicly, which is just sloppy UX.
- **Zero recovery path** — no "go back", no redirect to hm.com, no brand-softened 403 page. I'm just stranded.

## 5. Recommendations

- **Serve a branded 403/blocked page** — if bot detection or geo-blocking is intentional, at minimum show the H&M logo and a "Try hm.com" redirect button instead of a raw server error.
- **Suppress internal reference IDs from the user-facing error** — exposing Akamai reference strings adds zero value to a shopper and signals infrastructure problems.
- **Implement a graceful fallback redirect** — if `www2.hm.com` is a legacy subdomain, 301 it to `www.hm.com` rather than leaving visitors on a dead end.
- **Test bot/CDN rules against mobile user-agents** — if this capture was from a mobile-emulated browser, the CDN rule is too aggressive and is blocking real shoppers.

## 6. Bottom Line

I'm gone — there is literally nothing to browse, and I'm not re-typing a URL just to give a brand a second chance.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** No image — white background with plain serif error text
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:** None visible.
- **Weaknesses:**
  - The only above-the-fold content is a blocking error from Akamai's CDN — no H&M branding at all.
  - No recovery path or redirect is offered.

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None
- **Honesty check:** The page exposes a raw server reference ID and an Akamai error URL — not manipulative, but deeply broken-feeling and zero brand trust.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, just an error
- − Easy to reach my category: no nav visible at all
- − Eye-catching imagery in my category: none
- − Promo banner I would use: none
- − Page renders cleanly: hard no — CDN-blocked 403 error is the entire page
- − Imagery includes someone like me: none
- − Copy register matches mine: "Access Denied" is not a Gen Z copy register
- − Trust signals visible: none
- − New/hot rail in my category: none
- − No dark patterns: the forced block wall is as dark as it gets

**Score:** `1/10` — 1 base point, zero criteria met.
- **Rationale:** There is no page to engage with. A 403 error from Akamai with zero brand presence means instant bounce — there's nothing to interact with.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: none
- − Sizing/fit info accessible: none
- − Returns/exchanges mentioned: none
- − Reviews/ratings visible: none
- − Trust/security signals: none

**Score:** `1/10` — 1 base point, zero criteria met.
- **Rationale:** There is no CTA, no product, and no path to purchase — conversion is impossible on this page.

## 11. Evidence

Visible modules on the page (in scroll order):

- **Blocking error header** — large bold `Access Denied` h1, the only above-the-fold content
- **Error explanation text** — `"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."`
- **Internal reference ID** — `Reference #18.30153b17.1779358162.1b15d9dc` rendered as plain text
- **Akamai error URL** — `https://errors.edgesuite.net/18.30153b17.1779358162.1b15d9dc` rendered as plain text
- **Blank white page body** — the rest of the viewport is empty white space, no other modules load
- **Bugs / friction:** The entire page is a bug — Akamai CDN is returning a 403 Access Denied instead of the H&M homepage. No brand assets, no navigation, no fallback, no redirect. Zero shopping experience delivered.
## Recent history

- [[2026-05-20-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 2/10 (2026-05-20)
- [[2026-05-19-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 2/10 (2026-05-19)
- [[2026-05-18-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-18)

