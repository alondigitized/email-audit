---
slug: 2026-07-23-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-07-23
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-07-23
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-07-23
**Score:** 1/10 · **Type:** Site journey · **2026-07-23**
## Executive summary

- Okay, so I literally cannot review H&M right now because the page threw an **Access Denied** error from Akamai/EdgeSuite — the entire viewport is a plain white error page with zero brand presence. No hero, no nav, no products, nothing. This isn't a homepage experience, it's a wall.

## What's working

- Nothing is working. The page served a CDN access-denied block. There is no H&M brand content whatsoever to evaluate.

## What's weak

- **The entire experience** — the Akamai EdgeSuite layer blocked access and returned a plain-text error page: "You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."
- **Zero brand presence** — no H&M logo, no nav, no imagery, nothing. I landed here as a shopper and got a server error page with a reference ID. I'm out immediately.
- **No fallback / no redirect** — a brand this size should have a graceful fallback (redirect to www.hm.com, a maintenance page, anything) instead of exposing a raw CDN 403.

## Recommendations

- **Fix the CDN rule that's blocking www2.hm.com** — this looks like an IP or geo-based Akamai block leaking to real users. Route blocked traffic to the canonical www.hm.com instead of serving a 403.
- **Add a branded maintenance/error page** — if the subdomain must 403, at least return a custom error page with the H&M logo, a "looks like you hit a dead end" message, and a direct link to the live storefront.
- **Audit subdomain access policies** — www2 appears to be either a staging/legacy subdomain or a CDN origin that shouldn't be publicly crawlable; decide whether it should be public-facing at all, and if not, ensure it's fully blocked from organic discovery.

## Full review
## 1. Executive Summary

Okay, so I literally cannot review H&M right now because the page threw an **Access Denied** error from Akamai/EdgeSuite — the entire viewport is a plain white error page with zero brand presence. No hero, no nav, no products, nothing. This isn't a homepage experience, it's a wall.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery speaks to my persona: no hero exists
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: it's a white error page with three lines of text
- − No render bugs: the entire page IS a render failure (Access Denied, Akamai reference ID, EdgeSuite error URL)
- − Demographic signals match persona: n/a
- − Page reflects current campaign/season: n/a
- − Loyalty/membership visible: none
- − Offer feels honest: n/a — nothing to evaluate

Score starts at 1; zero additional criteria met. **1/10**.

## 3. What's Working

- Nothing is working. The page served a CDN access-denied block. There is no H&M brand content whatsoever to evaluate.

## 4. What's Weak

- **The entire experience** — the Akamai EdgeSuite layer blocked access and returned a plain-text error page: "You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."
- **Zero brand presence** — no H&M logo, no nav, no imagery, nothing. I landed here as a shopper and got a server error page with a reference ID. I'm out immediately.
- **No fallback / no redirect** — a brand this size should have a graceful fallback (redirect to www.hm.com, a maintenance page, anything) instead of exposing a raw CDN 403.

## 5. Recommendations

- **Fix the CDN rule that's blocking www2.hm.com** — this looks like an IP or geo-based Akamai block leaking to real users. Route blocked traffic to the canonical www.hm.com instead of serving a 403.
- **Add a branded maintenance/error page** — if the subdomain must 403, at least return a custom error page with the H&M logo, a "looks like you hit a dead end" message, and a direct link to the live storefront.
- **Audit subdomain access policies** — www2 appears to be either a staging/legacy subdomain or a CDN origin that shouldn't be publicly crawlable; decide whether it should be public-facing at all, and if not, ensure it's fully blocked from organic discovery.

## 6. Bottom Line

I bounced the instant this loaded — there is literally nothing to engage with, just a server error page, so I'm heading to Zara instead.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — plain white background
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:** (none — no brand content rendered)
- **Weaknesses:**
  - Raw CDN error is the entire viewport — zero brand identity
  - Exposes internal reference ID and EdgeSuite error URL to end users

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The page surface-exposes a backend reference URL (`https://errors.edgesuite.net/18.31153b17.1784800803.63b4c1ed`) — not a dark pattern per se, but leaking infrastructure error details to the public is poor practice and erodes trust if a shopper screenshots it.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero rendered
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — Access Denied error page
- − Imagery includes someone like me: none
- − Copy register matches mine: the only copy is a server error message
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns, but a 403 error wall is an instant bounce trigger

**Score:** `1/10` — zero "+" bullets, score stays at the floor of 1.

- **Rationale:** The page delivered a CDN access-denied block with no brand content. There is nothing to engage with and no reason to scroll.

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

**Score:** `1/10` — zero "+" bullets.

- **Rationale:** Zero conversion signals exist because zero brand content was served. The page is a hard stop for any conversion funnel.

## 11. Evidence

Visible modules in the screenshot (in full, top to bottom):

- **Access Denied heading** — large bold `<h1>` text, the only headline on the page
- **Error message body** — "You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."
- **Reference ID line** — "Reference #18.31153b17.1784800803.63b4c1ed"
- **EdgeSuite error URL** — "https://errors.edgesuite.net/18.31153b17.1784800803.63b4c1ed"
- **Remainder of viewport** — completely blank white space stretching the full scroll length

**Bugs / friction / clarity issues visible in the screenshot:**
- Full CDN 403 error served in place of homepage — critical availability failure
- Raw infrastructure error URL exposed to end user
- No redirect, no fallback page, no branding whatsoever
## Recent history

- [[2026-07-16-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-07-16)
- [[2026-07-09-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-07-09)
- [[2026-07-02-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-07-02)

