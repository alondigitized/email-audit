---
slug: 2026-05-17-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-05-17
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-05-17
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-05-17
**Score:** 1/10 · **Type:** Site journey · **2026-05-17**
## Executive summary

- I opened Marriott.com on my phone and got a white wall of nothing — literally an **"Access Denied"** error served by Akamai's edge network. No hero, no booking widget, no Bonvoy sign-in, no brand presence whatsoever. Whatever I'm looking at, it is not a hotel homepage; it's a CDN block page that communicates exactly one thing: you are not welcome here.

## What's working

- Nothing is working. The page loaded in the sense that text rendered — that's the ceiling here.

## What's weak

- **The entire page is an access denied block** — Akamai's WAF rejected the request before any Marriott content was served. A Titanium member trying to check point balances or book a Ritz anniversary stay hits a dead end.
- **No fallback UX** — not even a "try again" button or a redirect to a working URL. Just a reference hash and an edgesuite.net error link.
- **Zero brand presence** — no Marriott logo, no Bonvoy branding, no color, no typography. If I didn't know what site I navigated to, I'd have no idea.
- **The error URL exposed in plain text** (`https://errors.edgesuite.net/...`) is a technical artifact that erodes trust and looks unfinished.

## Recommendations

- **Fix the bot-detection false positive** — if real members on mobile browsers are hitting this block, that is a P0 conversion issue. Akamai rules need tuning to pass through legitimate mobile traffic.
- **Add a branded fallback error page** — even if the block is intentional (geo-restriction, scraper defense), replace the raw Akamai template with a Marriott-styled page that includes a logo, an apology, and a direct link to the app or a support number.
- **Surface a Bonvoy sign-in prompt as the fallback CTA** — if the block is session-based, encourage authentication as the resolution path ("Sign in to your Bonvoy account to continue").
- **Log and monitor this error class** — a Titanium member who hits this on their first app-equivalent tap is gone. Track the error reference IDs and audit how frequently real users land here.

## Full review
## 1. Executive Summary

I opened Marriott.com on my phone and got a white wall of nothing — literally an **"Access Denied"** error served by Akamai's edge network. No hero, no booking widget, no Bonvoy sign-in, no brand presence whatsoever. Whatever I'm looking at, it is not a hotel homepage; it's a CDN block page that communicates exactly one thing: you are not welcome here.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: no hero exists — only a plain-text error heading
- − Returning-shopper hook visible: no loyalty CTA, no member recognition, nothing
- − Concrete offer above the fold: no offer, no price, no promotion
- − Unmistakable primary CTA: no button, no CTA of any kind
- − Visual hierarchy is clear: the only hierarchy is "Access Denied" in a bold serif — not intentional brand design
- − No render bugs: this entire page IS the bug — Akamai WAF block, reference `#18.2ea7cb17.1779042486.47ad4dd3`
- − Demographic signals match persona: no imagery, no copy, no signals at all
- − Page reflects current campaign / season: nothing
- − Loyalty / membership benefits visible: nothing
- − Offer feels honest: N/A — there is no offer

Score starts at 1 (baseline) and zero criteria are met.

## 3. What's Working

- Nothing is working. The page loaded in the sense that text rendered — that's the ceiling here.

## 4. What's Weak

- **The entire page is an access denied block** — Akamai's WAF rejected the request before any Marriott content was served. A Titanium member trying to check point balances or book a Ritz anniversary stay hits a dead end.
- **No fallback UX** — not even a "try again" button or a redirect to a working URL. Just a reference hash and an edgesuite.net error link.
- **Zero brand presence** — no Marriott logo, no Bonvoy branding, no color, no typography. If I didn't know what site I navigated to, I'd have no idea.
- **The error URL exposed in plain text** (`https://errors.edgesuite.net/...`) is a technical artifact that erodes trust and looks unfinished.

## 5. Recommendations

- **Fix the bot-detection false positive** — if real members on mobile browsers are hitting this block, that is a P0 conversion issue. Akamai rules need tuning to pass through legitimate mobile traffic.
- **Add a branded fallback error page** — even if the block is intentional (geo-restriction, scraper defense), replace the raw Akamai template with a Marriott-styled page that includes a logo, an apology, and a direct link to the app or a support number.
- **Surface a Bonvoy sign-in prompt as the fallback CTA** — if the block is session-based, encourage authentication as the resolution path ("Sign in to your Bonvoy account to continue").
- **Log and monitor this error class** — a Titanium member who hits this on their first app-equivalent tap is gone. Track the error reference IDs and audit how frequently real users land here.

## 6. Bottom Line

I'm closing the tab immediately — not because Marriott isn't my program, but because the site literally told me I'm not allowed in.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background, plain black system text only
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is technically legible
- **Weaknesses:**
  - This is a raw CDN error page — no brand, no UX, no path forward
  - The reference number and edgesuite URL are meaningless to a consumer and look broken

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — not a single Bonvoy mention, no points balance, no member rate language
- **Honesty check:** The page is technically honest in that it tells me access was denied — but there's no explanation of why, no recourse, and no brand context. For a Titanium member who expects elite recognition, this is a trust-destroying experience.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero — just an error heading
- − Easy to reach my category: no navigation exists whatsoever
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banner
- − Page renders cleanly: **no** — this is a hard CDN block, not a rendered page
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is "Access Denied" and a reference hash — not my register
- − Trust signals visible: none — if anything, the exposed edgesuite URL reads as a broken backend
- − New / hot rail in my category: nothing
- − No dark patterns: technically no dark patterns, but getting blocked without recourse is its own form of friction

**Score:** `1/10` — zero "+" criteria met; baseline of 1.

**Rationale:** There is no page to engage with. A hard WAF block with no fallback UX means a 100% bounce rate for anyone who hits this state.

## 10. Conversion Likelihood

- − CTA in my category: no CTA exists
- − Unambiguous CTA copy: no copy
- − Active price reduction or member pricing: nothing
- − Time-bounded credible deadline: nothing
- − Reachable free-shipping threshold: N/A for hotels, and irrelevant regardless
- − Specific product page one tap away: no navigation
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: nothing
- − Reviews / ratings visible: nothing
- − Trust / security signals: none — the opposite, actually

**Score:** `1/10` — zero "+" criteria met; baseline of 1.

**Rationale:** Conversion is impossible when the user can't access the site. Zero path to booking, zero path to Bonvoy sign-in, zero path to anything.

## 11. Evidence

Modules visible on the page (in scroll order):

- **Error heading:** Large bold serif text — "Access Denied"
- **Error body copy:** "You don't have permission to access `http://www.marriott.com/default.mi` on this server."
- **Reference ID:** `Reference #18.2ea7cb17.1779042486.47ad4dd3`
- **Error URL:** `https://errors.edgesuite.net/18.2ea7cb17.1779042486.47ad4dd3`
- **Remaining viewport:** Completely blank white space for the rest of the scroll height
- **Bugs / friction:** The entire render is a bug — Akamai WAF block page, no Marriott branding, no fallback navigation, no member sign-in prompt, no retry mechanism. This is a complete homepage failure state.
## Recent history

- [[2026-05-15-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-15)

