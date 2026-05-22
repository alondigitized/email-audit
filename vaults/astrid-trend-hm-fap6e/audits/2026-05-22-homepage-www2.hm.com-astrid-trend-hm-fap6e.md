---
slug: 2026-05-22-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-22
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-22
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-22
**Score:** 1/10 · **Type:** Site journey · **2026-05-22**
## Executive summary

- Okay so I literally got a white error page — "Access Denied" from Akamai's edge network. There is zero H&M branding, zero product, zero anything. This isn't an H&M homepage experience, it's a CDN block page, and as a shopper I am immediately closing this tab.

## What's working

- Nothing. There is no H&M content visible whatsoever.

## What's weak

- **The entire page is an Akamai "Access Denied" error** — the site blocked the crawler/browser outright. No nav, no hero, no product, no brand.
- **Zero brand presence** — no H&M logo, no color palette, nothing that signals fashion retailer.
- **Reference dump is customer-hostile** — the only content is `Reference #18.1c0c2d17.1779444517.ac14dae` and a raw Akamai error URL. That means nothing to a regular shopper and creates instant distrust.
- **White void below the error** — the rest of the several-thousand-pixel page is completely blank, which makes the experience feel even more broken.

## Recommendations

- **Fix bot-detection / geo-access rules** — whatever IP or user-agent triggered this block needs to be investigated. Real shoppers on mobile will hit the same wall if the rule is too aggressive.
- **Add a branded fallback error page** — if access must be denied, at least show the H&M logo, a friendly "something went wrong" message, and a link to the main site. Even error states are brand moments.
- **Surface a soft redirect for blocked regions** — if this is a geographic access issue (`www2` vs. `www`), auto-redirect to the correct regional URL rather than serving a raw CDN block.
- **Test the mobile user-agent flow** — a 24-year-old shopping on her phone should never hit an Akamai wall on a major retailer's homepage. QA the mobile path explicitly.

## Full review
## 1. Executive Summary

Okay so I literally got a white error page — "Access Denied" from Akamai's edge network. There is zero H&M branding, zero product, zero anything. This isn't an H&M homepage experience, it's a CDN block page, and as a shopper I am immediately closing this tab.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero, no copy, no imagery at all
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: none
- − Visual hierarchy is clear: the only visible hierarchy is an "Access Denied" h1 and two lines of Akamai reference text
- − No render bugs: the entire page IS a render failure — broken access, blank white canvas
- − Demographic signals match my persona: none
- − Page reflects current campaign / season: none
- − Loyalty / membership benefits visible: none
- − Offer feels honest: N/A — no offer exists

  + Starting score of 1 per rubric (floor). No criteria met. Score stays at 1.

## 3. What's Working

- Nothing. There is no H&M content visible whatsoever.

## 4. What's Weak

- **The entire page is an Akamai "Access Denied" error** — the site blocked the crawler/browser outright. No nav, no hero, no product, no brand.
- **Zero brand presence** — no H&M logo, no color palette, nothing that signals fashion retailer.
- **Reference dump is customer-hostile** — the only content is `Reference #18.1c0c2d17.1779444517.ac14dae` and a raw Akamai error URL. That means nothing to a regular shopper and creates instant distrust.
- **White void below the error** — the rest of the several-thousand-pixel page is completely blank, which makes the experience feel even more broken.

## 5. Recommendations

- **Fix bot-detection / geo-access rules** — whatever IP or user-agent triggered this block needs to be investigated. Real shoppers on mobile will hit the same wall if the rule is too aggressive.
- **Add a branded fallback error page** — if access must be denied, at least show the H&M logo, a friendly "something went wrong" message, and a link to the main site. Even error states are brand moments.
- **Surface a soft redirect for blocked regions** — if this is a geographic access issue (`www2` vs. `www`), auto-redirect to the correct regional URL rather than serving a raw CDN block.
- **Test the mobile user-agent flow** — a 24-year-old shopping on her phone should never hit an Akamai wall on a major retailer's homepage. QA the mobile path explicitly.

## 6. Bottom Line

I'm already gone — I closed this tab and opened Zara before that reference number even finished loading.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** none — entirely blank white page
- **Primary CTA:** none — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error text is at least legible (high contrast black on white)
- **Weaknesses:**
  - No H&M content exists — this is a CDN block page, not a homepage
  - Zero visual identity, zero CTA, zero product

## 8. Promotional & Urgency Cues

- **Active promos:** none visible
- **Urgency / scarcity:** none visible
- **Loyalty hooks:** none visible
- **Honesty check:** The Akamai reference URL (`https://errors.edgesuite.net/18.1c0c2d17...`) is surfaced raw to the user — that's a technical artifact that should never be customer-facing. It looks sketchy, not trustworthy.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — the entire page failed to render H&M content
- − Imagery includes someone like me: none
- − Copy register matches mine: the only copy is a server error message
- − Trust signals visible: none — a raw Akamai error URL actively destroys trust
- − New / hot rail in my category: none
- − No dark patterns: N/A, but an opaque CDN block with no explanation is its own kind of dark pattern

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every single engagement criterion failed. The page served a CDN access-denied error with zero H&M content, making any engagement physically impossible.

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
- − Trust / security signals: none — the opposite; a raw CDN error URL erodes trust

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** There is literally nothing to convert on. The page is a white error screen; no product, no CTA, no pricing, no trust signals exist in the viewport.

## 11. Evidence

Modules visible on the homepage (in scroll order):

- **Access Denied h1** — bold, top-left, Akamai-generated error heading; the only above-the-fold "headline"
- **Error body copy** — two lines: "You don't have permission to access `http://www2.hm.com/en_us/index.html` on this server." followed by a reference ID
- **Raw Akamai error URL** — `https://errors.edgesuite.net/18.1c0c2d17.1779444517.ac14dae` — customer-facing technical artifact
- **Blank white page body** — the remaining ~90% of the screenshot is empty white space; no modules, no footer, nothing
- **Bugs / friction:** The entire H&M homepage failed to load. This is a hard render failure — Akamai blocked access entirely. No nav, no hero, no product rail, no footer, no brand color, no logo was served. This is the most severe possible homepage failure state.
## Recent history

- [[2026-05-21-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-21)
- [[2026-05-20-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 2/10 (2026-05-20)
- [[2026-05-19-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 2/10 (2026-05-19)

