---
slug: 2026-05-02-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-02
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-02
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-02
**Score:** 1/10 · **Type:** Site journey · **2026-05-02**
## Executive summary

- I opened H&M and got hit with an "Access Denied" wall — zero homepage, zero product, zero vibe. Whatever their CDN is doing (looks like Akamai EdgeSuite blocked the request), the entire experience is dead on arrival. I can't evaluate what they're selling or pushing right now because I literally can't get in the door.
- **1/10**

## What's working

- Nothing. The page returned a hard block error — there is no brand, no content, no merchandising visible to evaluate.

## What's weak

- **The entire homepage** — an Akamai EdgeSuite "Access Denied" error is the only thing rendered. No fallback, no redirect to a working URL, no anything.
- **No graceful degradation** — even a simple "something went wrong, try hm.com" message would be better than a raw server error page.
- **Zero brand presence** — someone landing here has no idea they even reached H&M. The error page is completely unbranded.

## Recommendations

- **Fix the CDN/WAF rule blocking `www2.hm.com`** — this is the whole problem; everything else is moot until this is resolved.
- **Add a branded error page** — if a block is intentional (bot detection, geo-restriction, etc.), at least redirect to `www.hm.com` with a message instead of dumping a raw Akamai error.
- **Set up uptime monitoring on the `www2` subdomain** — this kind of hard failure should be caught immediately, not discovered by a shopper.
- **Audit bot-detection thresholds** — if legitimate mobile traffic is getting flagged, that's a conversion killer at scale.

## Full review
## 1. Executive Summary

I opened H&M and got hit with an "Access Denied" wall — zero homepage, zero product, zero vibe. Whatever their CDN is doing (looks like Akamai EdgeSuite blocked the request), the entire experience is dead on arrival. I can't evaluate what they're selling or pushing right now because I literally can't get in the door.

## 2. Business Impact Score (1-10)

**1/10**

## 3. What's Working

- Nothing. The page returned a hard block error — there is no brand, no content, no merchandising visible to evaluate.

## 4. What's Weak

- **The entire homepage** — an Akamai EdgeSuite "Access Denied" error is the only thing rendered. No fallback, no redirect to a working URL, no anything.
- **No graceful degradation** — even a simple "something went wrong, try hm.com" message would be better than a raw server error page.
- **Zero brand presence** — someone landing here has no idea they even reached H&M. The error page is completely unbranded.

## 5. Recommendations

- **Fix the CDN/WAF rule blocking `www2.hm.com`** — this is the whole problem; everything else is moot until this is resolved.
- **Add a branded error page** — if a block is intentional (bot detection, geo-restriction, etc.), at least redirect to `www.hm.com` with a message instead of dumping a raw Akamai error.
- **Set up uptime monitoring on the `www2` subdomain** — this kind of hard failure should be caught immediately, not discovered by a shopper.
- **Audit bot-detection thresholds** — if legitimate mobile traffic is getting flagged, that's a conversion killer at scale.

## 6. Bottom Line

I'm out — I literally cannot see the site, so I'm going straight to a competitor.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — plain white background with a serif error message
- **Primary CTA:** None — no button, no link, no navigation visible above the fold
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - None visible
- **Weaknesses:**
  - The only visible text is a hard server error; there is no brand, no product, no path forward for a shopper

## 8. Promotional & Urgency Cues

- **Active promos:** None visible
- **Urgency / scarcity:** None visible
- **Loyalty hooks:** None visible
- **Honesty check:** The page exposes a raw Akamai error reference number (`#18.30153b17.1777761082.a73f2e49`) and an `errors.edgesuite.net` URL — this is not manipulative, but it is a jarring technical exposure that erodes brand trust immediately

## 9. Visit-Engagement Likelihood

- **Score:** `1/10`
- **Rationale:** There is nothing to engage with — the page is a blank white screen with a server error message and no links, no content, and no brand presence whatsoever.

## 10. Conversion Likelihood

- **Score:** `1/10`
- **Rationale:** Conversion is impossible from this state; there is no product, no CTA, and no way to navigate anywhere from the blocked page.

## 11. Evidence

- **Hero / primary value prop:** MISSING — replaced by "Access Denied" Akamai error block
- **Featured categories:** Not rendered
- **Promotional banners or strips:** Not rendered
- **Loyalty / rewards section:** Not rendered
- **Editorial / lifestyle modules:** Not rendered
- **New-arrivals or best-seller rails:** Not rendered
- **Footer credibility (reviews, awards, policies):** Not rendered — page is completely empty below the error text
- **Bugs / friction / clarity issues visible in the screenshot:**
  - Critical: Full CDN block — `You don't have permission to access "http://www2.hm.com/en_us/index.html" on this server`
  - Reference: `#18.30153b17.1777761082.a73f2e49`
  - Error origin: `https://errors.edgesuite.net/18.30153b17.1777761082.a73f2e49`
  - No fallback content, redirect, or branded error state of any kind
