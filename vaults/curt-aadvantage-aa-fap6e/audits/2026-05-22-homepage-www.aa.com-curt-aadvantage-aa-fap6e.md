---
slug: 2026-05-22-homepage-www.aa.com-curt-aadvantage-aa-fap6e
type: site
date: 2026-05-22
persona: curt-aadvantage-aa-fap6e
score: "1/10"
sender: www.aa.com
subject: Homepage snapshot · www.aa.com · 2026-05-22
tags: [site-journey, score-1, sender/www-aa-com]
---
# Homepage snapshot · www.aa.com · 2026-05-22
**Score:** 1/10 · **Type:** Site journey · **2026-05-22**
## Executive summary

- I opened aa.com on my phone and got hit with a brick wall — a full-page "Access Denied" Akamai edge error. No hero, no booking widget, no AAdvantage sign-in. Whatever bot-detection or geo-restriction rule AA has in place fired on this session and served me a completely blank white page with three lines of plain text. For the most-flown airline in my wallet, this is embarrassing.

## What's working

- Nothing. There is no homepage content to evaluate. The only thing that rendered correctly is the browser's ability to display a plain-text HTTP error from Akamai's edge network.

## What's weak

- **The entire page** is a 403 "Access Denied" screen served by `errors.edgesuite.net` — AA's CDN blocked the request before a single pixel of the actual site loaded.
- **No fallback or graceful degradation** — rather than serving even a cached shell or a branded error page, the user gets raw browser-default typography on a white canvas. No AA logo, no nav, no redirect to a mobile app, nothing.
- **Reference ID exposed but useless to end users** — `Reference #18.103b2f17.1779447663.13c227fc` means nothing to a traveler. There's no customer service number, no "try again," no link anywhere.
- **The URL shown is HTTP, not HTTPS** — `http://www.aa.com/` in the error message suggests the scrape hit a non-secure redirect that triggered the block. A real user on mobile would hit the same wall if they came in from a cached HTTP link.

## Recommendations

- **Fix the bot/WAF rule that's blocking legitimate mobile user agents** — Executive Platinum members opening aa.com on a phone should never see this. Audit the Akamai rule set that triggered Reference #18.103b2f17 and whitelist standard mobile browser UAs.
- **Build a branded 403/error fallback page** — if a block must fire, serve a page with the AA logo, a plain-language message, a "Try again" button, and the EXP customer service number. Bare Akamai errors are unacceptable for a premium travel brand.
- **Force HTTPS at the CDN edge before any WAF rules fire** — the HTTP URL in the error message suggests redirect ordering issues; fix the canonical URL enforcement so http:// always 301s before bot detection runs.
- **Test mobile homepage delivery end-to-end on every release** — this is a P0 regression. If I can't load the homepage, nothing else in the funnel matters.

## Full review
## 1. Executive Summary

I opened aa.com on my phone and got hit with a brick wall — a full-page "Access Denied" Akamai edge error. No hero, no booking widget, no AAdvantage sign-in. Whatever bot-detection or geo-restriction rule AA has in place fired on this session and served me a completely blank white page with three lines of plain text. For the most-flown airline in my wallet, this is embarrassing.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to persona: no hero rendered at all
- − Returning-shopper hook visible: blocked before any content loaded
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: none
- − Visual hierarchy clear: the only hierarchy is an h1 error message
- − No render bugs: this IS a render bug — an Akamai 403 served in place of the homepage
- − Demographic signals match persona: irrelevant, nothing loaded
- − Page reflects current campaign / season: zero content
- − Loyalty / membership benefits visible: nothing
- − Offer feels honest: moot — there is no offer

Only the base point of 1 applies. Every single rubric criterion fails because the homepage never rendered.

## 3. What's Working

- Nothing. There is no homepage content to evaluate. The only thing that rendered correctly is the browser's ability to display a plain-text HTTP error from Akamai's edge network.

## 4. What's Weak

- **The entire page** is a 403 "Access Denied" screen served by `errors.edgesuite.net` — AA's CDN blocked the request before a single pixel of the actual site loaded.
- **No fallback or graceful degradation** — rather than serving even a cached shell or a branded error page, the user gets raw browser-default typography on a white canvas. No AA logo, no nav, no redirect to a mobile app, nothing.
- **Reference ID exposed but useless to end users** — `Reference #18.103b2f17.1779447663.13c227fc` means nothing to a traveler. There's no customer service number, no "try again," no link anywhere.
- **The URL shown is HTTP, not HTTPS** — `http://www.aa.com/` in the error message suggests the scrape hit a non-secure redirect that triggered the block. A real user on mobile would hit the same wall if they came in from a cached HTTP link.

## 5. Recommendations

- **Fix the bot/WAF rule that's blocking legitimate mobile user agents** — Executive Platinum members opening aa.com on a phone should never see this. Audit the Akamai rule set that triggered Reference #18.103b2f17 and whitelist standard mobile browser UAs.
- **Build a branded 403/error fallback page** — if a block must fire, serve a page with the AA logo, a plain-language message, a "Try again" button, and the EXP customer service number. Bare Akamai errors are unacceptable for a premium travel brand.
- **Force HTTPS at the CDN edge before any WAF rules fire** — the HTTP URL in the error message suggests redirect ordering issues; fix the canonical URL enforcement so http:// always 301s before bot detection runs.
- **Test mobile homepage delivery end-to-end on every release** — this is a P0 regression. If I can't load the homepage, nothing else in the funnel matters.

## 6. Bottom Line

I closed the tab and opened the app — which is honestly what AA wants anyway, but serving me an "Access Denied" on my own airline's website is the kind of IT moment I usually forgive AA for, and I'm running low on forgiveness.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background with plain system-font text only
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is at least legible — no overlapping text
- **Weaknesses:**
  - Zero AA branding, zero navigation, zero content — this is a raw CDN error page masquerading as a homepage experience
  - No recovery path offered to the user whatsoever

## 8. Promotional & Urgency Cues

- **Active promos:** none — page did not render
- **Urgency / scarcity:** none
- **Loyalty hooks:** none — my AAdvantage number, my EXP status, my mileage balance — all invisible
- **Honesty check:** The error itself is honest in the bluntest possible way. There's no manipulation here because there's no content here.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists
- − Easy to reach my category: no navigation rendered
- − Eye-catching imagery in my category: blank white page
- − Promo banner I would use: none loaded
- − Page renders cleanly: hard no — 403 error from Akamai edge
- − Imagery includes someone like me: irrelevant, no imagery
- − Copy register matches mine: only copy is a system error
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the block itself is arguably a dark pattern for a logged-out returning traveler
- **Score:** `1/10` — 1 base point, zero signals triggered.
- **Rationale:** There is nothing to engage with. The page is a complete failure to deliver any content.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: not applicable to airline
- − Specific product page one tap away: none
- − Sizing / fit info accessible: not applicable
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — ironically, the HTTPS/security story is undermined by the HTTP URL in the error
- **Score:** `1/10` — base point only.
- **Rationale:** Conversion is impossible when the homepage doesn't load. I went straight to the app.

## 11. Evidence

- **Hero / primary value prop:** Not rendered — replaced entirely by Akamai 403 error block
- **Featured categories:** Absent
- **Promotional banners or strips:** Absent
- **Loyalty / rewards section:** Absent — no AAdvantage content of any kind
- **Editorial / lifestyle modules:** Absent
- **New-arrivals or best-seller rails:** Not applicable
- **Footer credibility:** Absent — page ends after three lines of error text and then blank white space for the remaining ~2000px of scroll height
- **Bugs / friction / clarity issues visible in screenshot:**
  - Full-page 403 "Access Denied" served by `errors.edgesuite.net` — Akamai WAF or IP/UA block triggered before any AA content loaded
  - Error references `http://www.aa.com/` (non-HTTPS), suggesting the block fires on an HTTP request before secure redirect
  - Reference ID `#18.103b2f17.1779447663.13c227fc` shown with no context or recovery instructions
  - No branded error handling — plain browser-default typography, no AA logo, no nav shell, no fallback CTA
## Recent history

- [[2026-05-21-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-21)
- [[2026-05-20-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-20)
- [[2026-05-19-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-19)

