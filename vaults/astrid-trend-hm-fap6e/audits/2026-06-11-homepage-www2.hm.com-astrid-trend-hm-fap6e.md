---
slug: 2026-06-11-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-06-11
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-06-11
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-06-11
**Score:** 1/10 · **Type:** Site journey · **2026-06-11**
## Executive summary

- Okay, so I literally got served an "Access Denied" error — the entire page is just a white screen with a block message and a reference hash. There is no H&M brand here at all. I don't know if this is a geo-block, a bot-detection firewall, or a CDN misconfiguration, but from where I'm standing, H&M just slammed the door in my face before I could see a single product.

## What's working

- The page text is legible — I can at least read "Access Denied" and the reference number with zero ambiguity.

## What's weak

- **The entire homepage:** There is no brand presence, no imagery, no nav, no copy, no product — just an Akamai CDN block page reading "You don't have permission to access http://www2.hm.com/en_us/index.html on this server."
- **No recovery path:** There's no link back to a working URL, no redirect to hm.com, no "try again" button, nothing. I'm just stranded.
- **Naked error internals exposed:** The raw error URL (`https://errors.edgesuite.net/18.3f0c2d17.1781172006.950b288`) is pasted in plain text — that's just sloppy and trust-eroding.
- **Zero brand identity:** Browser-default black serif font on white. This looks like 1999 Apache. I'd have no idea what brand this was if I didn't already know the URL.

## Recommendations

- **Fix the CDN allowlist or bot-detection rules** so that a normal mobile browser session can actually reach the homepage — a hard block on the index is a conversion-zero event.
- **If a block is intentional (geo/bot), serve a branded error page** — H&M logo, a clean message like "This page isn't available in your region," and a redirect to a working locale.
- **Add a fallback CTA on error pages** — at minimum a "Go to hm.com" button so the user isn't totally abandoned.
- **Suppress raw CDN reference URLs from the user-facing page** — they communicate nothing useful to a shopper and erode trust.

## Full review
## 1. Executive Summary

Okay, so I literally got served an "Access Denied" error — the entire page is just a white screen with a block message and a reference hash. There is no H&M brand here at all. I don't know if this is a geo-block, a bot-detection firewall, or a CDN misconfiguration, but from where I'm standing, H&M just slammed the door in my face before I could see a single product.

## 2. Business Impact Score (1-10)

**1/10**
- − hero copy matches persona: no hero exists — only an error header reading "Access Denied"
- − returning-shopper hook visible: none
- − concrete offer above the fold: none
- − primary CTA above the fold: none
- − clear visual hierarchy: the only hierarchy is a browser-default serif H1 and two lines of plain text
- − no render bugs: the page IS the bug — an Akamai CDN error with a reference hash
- − demographic signals: none
- − current campaign / season: none
- − loyalty / membership benefits: none
- − honest offer: there is no offer at all

Score 1/10 — the only point is baseline (page loaded, technically). Every single rubric signal is absent.

## 3. What's Working

- The page text is legible — I can at least read "Access Denied" and the reference number with zero ambiguity.

## 4. What's Weak

- **The entire homepage:** There is no brand presence, no imagery, no nav, no copy, no product — just an Akamai CDN block page reading "You don't have permission to access http://www2.hm.com/en_us/index.html on this server."
- **No recovery path:** There's no link back to a working URL, no redirect to hm.com, no "try again" button, nothing. I'm just stranded.
- **Naked error internals exposed:** The raw error URL (`https://errors.edgesuite.net/18.3f0c2d17.1781172006.950b288`) is pasted in plain text — that's just sloppy and trust-eroding.
- **Zero brand identity:** Browser-default black serif font on white. This looks like 1999 Apache. I'd have no idea what brand this was if I didn't already know the URL.

## 5. Recommendations

- **Fix the CDN allowlist or bot-detection rules** so that a normal mobile browser session can actually reach the homepage — a hard block on the index is a conversion-zero event.
- **If a block is intentional (geo/bot), serve a branded error page** — H&M logo, a clean message like "This page isn't available in your region," and a redirect to a working locale.
- **Add a fallback CTA on error pages** — at minimum a "Go to hm.com" button so the user isn't totally abandoned.
- **Suppress raw CDN reference URLs from the user-facing page** — they communicate nothing useful to a shopper and erode trust.

## 6. Bottom Line

I'm closing this tab immediately — there is literally nothing to browse, no product, no brand, just a wall.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white background
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is at least readable and not garbled
- **Weaknesses:**
  - This is a CDN block page, not an H&M page — zero brand, zero product, zero purpose for me as a shopper
  - No recovery path or redirect is provided

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The raw internal reference URL (`https://errors.edgesuite.net/18.3f0c2d17.1781172006.950b288`) is exposed to the end user — not manipulative, but unprofessional and mildly unsettling from a trust standpoint

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists whatsoever
- − Easy to reach my category: no navigation rendered at all
- − Eye-catching imagery in my category: no imagery of any kind
- − Promo banner I would use: no banners
- − Page renders cleanly: fails — the entire page is an Akamai error block
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is a technical error message, which absolutely does not match my register
- − Trust signals visible: none — raw CDN error URL is the opposite of trust-building
- − New / hot rail in my category: none
- − No dark patterns: no dark patterns, but a hard block is a dark pattern of its own kind

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** There is not a single engaging element on this page. It's a brick wall, and I would bounce in under two seconds.

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

**Score:** `1/10`
**Rationale:** Conversion is a zero — I can't buy, browse, or sign up for anything. The page is a CDN block with no exit ramp.

## 11. Evidence

- **Hero / primary value prop:** "Access Denied" — H1 in browser-default serif, no brand styling
- **Error detail line:** "You don't have permission to access "http://www2.hm.com/en_us/index.html" on this server."
- **Reference code:** `Reference #18.3f0c2d17.1781172006.950b288`
- **External error URL:** `https://errors.edgesuite.net/18.3f0c2d17.1781172006.950b288`
- **Everything else (nav, hero image, categories, promos, loyalty, product rails, footer):** entirely absent — not rendered
- **Bugs / friction:** The entire page is the bug — Akamai CDN returned a 403 block instead of the H&M homepage; no brand UI, no recovery CTA, raw internal error URL surfaced to the user
## Recent history

- [[2026-06-04-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-06-04)
- [[2026-05-28-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-28)
- [[2026-05-23-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-23)

