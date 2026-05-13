---
slug: 2026-05-13-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-13
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-13
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-13
**Score:** 1/10 · **Type:** Site journey · **2026-05-13**
## Executive summary

- I opened www2.hm.com and got hit with a wall of black-and-white error text — "Access Denied." No hero, no products, no brand presence whatsoever. This isn't a homepage experience; it's a CDN block served by Akamai, and from where I'm standing it looks like the site rejected my visit entirely before a single pixel of H&M loaded.

## What's working

- The page loads instantly — there's no spinner or timeout, so the CDN is at least responding fast.

## What's weak

- **"Access Denied" headline in raw browser serif font** — zero brand identity, looks like a 1999 Apache error page.
- **Raw Akamai reference URL** (`https://errors.edgesuite.net/18.a4f10f17...`) exposed to the user — technical, alarming, tells me nothing actionable.
- **No fallback UI** — no H&M logo, no "try again" button, no redirect to a working URL. I have nowhere to go.
- **No copy explaining what happened** — "You don't have permission" sounds like I did something wrong, which is confusing and off-putting.
- **Completely blank lower half of the page** — just white space beneath four lines of error text, miles of nothing.

## Recommendations

- **Add a branded error page** — swap the Akamai default for an H&M-styled 403/error page with the logo, a friendly message ("Hmm, something went wrong on our end"), and a "Go to H&M homepage" CTA button.
- **Suppress the raw reference URL** from the user-facing layer — log it server-side, don't expose it as the only breadcrumb a shopper sees.
- **Route bot/scraper detection to a CAPTCHA or redirect** rather than a hard block, so real mobile users don't get caught in the same net.
- **Add a retry mechanism or countdown** ("We're fixing this — try again in 30 seconds") so users don't just bounce to Zara.

## Full review
## 1. Executive Summary

I opened www2.hm.com and got hit with a wall of black-and-white error text — "Access Denied." No hero, no products, no brand presence whatsoever. This isn't a homepage experience; it's a CDN block served by Akamai, and from where I'm standing it looks like the site rejected my visit entirely before a single pixel of H&M loaded.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to persona: there is no hero — only an error message
- − Returning-shopper hook visible: none
- − Concrete offer above fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: a plain system error page has no designed hierarchy
- − No render bugs: the page IS a bug — Akamai "Access Denied" with a raw reference number
- − Demographic signals match persona: none
- − Current campaign/season reflected: none
- − Loyalty/membership visible: none
- − Honest offer: no offer at all

Starting score 1, zero signals met — **1/10**.

## 3. What's Working

- The page loads instantly — there's no spinner or timeout, so the CDN is at least responding fast.

## 4. What's Weak

- **"Access Denied" headline in raw browser serif font** — zero brand identity, looks like a 1999 Apache error page.
- **Raw Akamai reference URL** (`https://errors.edgesuite.net/18.a4f10f17...`) exposed to the user — technical, alarming, tells me nothing actionable.
- **No fallback UI** — no H&M logo, no "try again" button, no redirect to a working URL. I have nowhere to go.
- **No copy explaining what happened** — "You don't have permission" sounds like I did something wrong, which is confusing and off-putting.
- **Completely blank lower half of the page** — just white space beneath four lines of error text, miles of nothing.

## 5. Recommendations

- **Add a branded error page** — swap the Akamai default for an H&M-styled 403/error page with the logo, a friendly message ("Hmm, something went wrong on our end"), and a "Go to H&M homepage" CTA button.
- **Suppress the raw reference URL** from the user-facing layer — log it server-side, don't expose it as the only breadcrumb a shopper sees.
- **Route bot/scraper detection to a CAPTCHA or redirect** rather than a hard block, so real mobile users don't get caught in the same net.
- **Add a retry mechanism or countdown** ("We're fixing this — try again in 30 seconds") so users don't just bounce to Zara.

## 6. Bottom Line

I'm gone — I didn't even get to see H&M's homepage, so there's nothing to browse, nothing to tap, and the "Access Denied" message made me feel like I did something wrong.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white background
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to me `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - Page loads without hanging or timing out
- **Weaknesses:**
  - Entire above-the-fold is a system error with no H&M branding, no navigation, no recovery path
  - "You don't have permission" copy is accusatory and confusing for a regular shopper

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The raw Akamai error URL (`https://errors.edgesuite.net/18.a4f10f17.1778695678.10a57eb`) is exposed in plain text — not manipulative, but technically alarming and entirely unhelpful to a shopper. The "you don't have permission" phrasing could feel like the brand is deliberately blocking me, which is worse than a neutral "something went wrong."

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero at all, just an error block
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery whatsoever
- − Promo banner I would use: none
- − Page renders cleanly: hard no — the page IS a render failure
- − Imagery includes someone like me: none
- − Copy register matches mine: an Akamai error string does not match any human register
- − Trust signals visible: none
- − New/hot rail in my category: none
- − No dark patterns: the accusatory "You don't have permission" copy is a soft dark pattern — it implies user fault

**Score:** `1/10` — 1 base, zero criteria met.
**Rationale:** There is literally nothing to engage with. This is a total dead end; I would open a new tab for ASOS or Zara before I'd troubleshoot an H&M CDN block on my phone.

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
- − Trust / security signals: none — if anything the raw CDN error URL signals the opposite of security

**Score:** `1/10` — 1 base, zero criteria met.
**Rationale:** There is no funnel here — the site never loaded, so conversion is impossible. The experience actively erodes trust rather than building it.

## 11. Evidence

Visible modules in scroll order:

- **"Access Denied" headline** — large bold serif text, top of page, nothing else above it
- **Error body copy** — "You don't have permission to access `http://www2.hm.com/en_us/index.html` on this server."
- **Reference ID** — `Reference #18.a4f10f17.1778695678.10a57eb`
- **Raw Akamai error URL** — `https://errors.edgesuite.net/18.a4f10f17.1778695678.10a57eb`
- **Blank white page** — remainder of the viewport and full scroll length is empty white space; no footer, no nav, no brand elements
- **Bugs / friction:** The entire page is a hard CDN block (Akamai EdgeSuite 403). No H&M UI rendered. No branded fallback. No recovery CTA. Likely a bot-detection or geo/IP restriction triggered during the crawl — but from a shopper's perspective it is indistinguishable from a broken site.
## Recent history

- [[2026-05-10-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-10)
- [[2026-05-09-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-09)
- [[2026-05-08-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-08)

