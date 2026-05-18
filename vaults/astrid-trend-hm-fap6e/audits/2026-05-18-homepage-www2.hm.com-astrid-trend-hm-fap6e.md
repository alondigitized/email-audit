---
slug: 2026-05-18-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-18
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-18
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-18
**Score:** 1/10 · **Type:** Site journey · **2026-05-18**
## Executive summary

- Okay, so I literally cannot shop here right now — the page is just a giant "Access Denied" error from Akamai's edge network, zero content, zero brand. There's no homepage, no hero, no products — nothing. H&M's CDN blocked the request before a single pixel of merch loaded.

## What's working

- Nothing. The page served a hard error. There is literally one thing on screen and it's an access denial.

## What's weak

- **The entire page load** — blocked at the CDN level (Akamai EdgeSuite, Reference #18.31153b17.1779099011.54124384). No brand, no nav, no product.
- **No graceful fallback** — a brand like H&M should have a branded error page, not a raw white-on-black text dump that looks like 2003 server admin output.
- **Zero recovery path for the user** — there's no "go back," no link, no redirect to a working URL. Dead end.

## Recommendations

- **Fix the CDN/WAF rule blocking this URL pattern** — `www2.hm.com/en_us/index.html` is being denied at the edge; audit the Akamai access controls immediately.
- **Implement a branded 403/error page** — even if the block is intentional (geo-fencing, bot detection), serve a styled fallback with the H&M logo, a brief message, and a redirect to the correct regional URL.
- **Add a redirect from www2 to www** — if `www2` is a legacy subdomain that shouldn't receive live traffic, 301 it to `www.hm.com` so users land somewhere functional.
- **Monitor CDN errors in real-time** — a homepage block like this is lost revenue by the second; it should trigger an alert within minutes.

## Full review
## 1. Executive Summary

Okay, so I literally cannot shop here right now — the page is just a giant "Access Denied" error from Akamai's edge network, zero content, zero brand. There's no homepage, no hero, no products — nothing. H&M's CDN blocked the request before a single pixel of merch loaded.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to persona: no hero exists
- − Returning-shopper hook: none visible
- − Concrete offer above fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy: none (just a browser error page)
- − No render bugs: FAIL — the entire page is a render failure
- − Demographic signals match persona: none
- − Current campaign / season reflected: none
- − Loyalty / membership visible: none
- − Offer feels honest: N/A — no offer shown

Baseline score of 1 (start value). Zero criteria met.

## 3. What's Working

- Nothing. The page served a hard error. There is literally one thing on screen and it's an access denial.

## 4. What's Weak

- **The entire page load** — blocked at the CDN level (Akamai EdgeSuite, Reference #18.31153b17.1779099011.54124384). No brand, no nav, no product.
- **No graceful fallback** — a brand like H&M should have a branded error page, not a raw white-on-black text dump that looks like 2003 server admin output.
- **Zero recovery path for the user** — there's no "go back," no link, no redirect to a working URL. Dead end.

## 5. Recommendations

- **Fix the CDN/WAF rule blocking this URL pattern** — `www2.hm.com/en_us/index.html` is being denied at the edge; audit the Akamai access controls immediately.
- **Implement a branded 403/error page** — even if the block is intentional (geo-fencing, bot detection), serve a styled fallback with the H&M logo, a brief message, and a redirect to the correct regional URL.
- **Add a redirect from www2 to www** — if `www2` is a legacy subdomain that shouldn't receive live traffic, 301 it to `www.hm.com` so users land somewhere functional.
- **Monitor CDN errors in real-time** — a homepage block like this is lost revenue by the second; it should trigger an alert within minutes.

## 6. Bottom Line

I'm gone instantly — there is literally nothing to browse, and I'm not going to troubleshoot H&M's server problems when ZARA loads in two seconds.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background, plain black serif text error message
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:** (none applicable)
- **Weaknesses:**
  - The only "headline" is a system-generated access denial — could not be less on-brand for a fashion retailer
  - No brand identity whatsoever; this could be any broken server anywhere

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The error message itself is brutally honest — it tells me exactly what the reference ID is (18.31153b17.1779099011.54124384) and where the error originates (errors.edgesuite.net). Dark pattern: none. Bigger problem: no page.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, no content at all
- − Easy to reach my category: no nav rendered
- − Eye-catching imagery in my category: no imagery
- − Promo banner I would use: no promo banners
- − Page renders cleanly: hard no — CDN-level 403 error
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is a server error message
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns, but a dead page is worse
- **Score:** `1/10` — 1 baseline, zero criteria met.
- **Rationale:** There is nothing to engage with. A blank error page produces a 100% bounce rate for any visitor.

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
- **Score:** `1/10` — baseline only, zero criteria met.
- **Rationale:** Conversion is impossible when there's no page — I can't tap, cart, or sign up on a CDN error screen.

## 11. Evidence

Visible modules on screen, in scroll order:

- **Error headline:** Large bold "Access Denied" text — entire above-the-fold content
- **Error body copy:** "You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."
- **Reference number:** `#18.31153b17.1779099011.54124384`
- **Edge error URL:** `https://errors.edgesuite.net/18.31153b17.1779099011.54124384`
- **Remainder of viewport:** Entirely white / blank — no images, nav, footer, or any H&M brand element
- **Bugs / friction:** The entire page is the bug — Akamai CDN returned HTTP 403 before any H&M content could load; no branded fallback exists
## Recent history

- [[2026-05-17-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-17)
- [[2026-05-15-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-15)
- [[2026-05-14-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-14)

