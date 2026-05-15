---
slug: 2026-05-15-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-15
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-15
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-15
**Score:** 1/10 · **Type:** Site journey · **2026-05-15**
## Executive summary

- Okay so I literally cannot believe this — I opened www2.hm.com and got hit with a giant **"Access Denied"** wall from Akamai's CDN. No hero, no campaign, no products, nothing. The entire page is a plain white error screen with a reference hash and an edgesuite.net URL. This isn't an H&M homepage review — it's a review of a CDN block page, which is genuinely one of the worst first impressions a brand can serve.

## What's working

- The error message is at least legible — the text renders in plain black-on-white so I can read that I've been blocked (cool, great, love that for me).

## What's weak

- **The entire homepage** is replaced by an Akamai "Access Denied" CDN block — `Reference #18.30153b17.1778868810.7481eed1` is the only "content" visible.
- **Zero brand presence** — no H&M logo, no color, no typography, no campaign. Someone new to the brand would have no idea what H&M even sells.
- **No fallback or recovery path** — no link back to the homepage, no "try again" button, nothing to redirect me anywhere useful.
- **Trust is immediately destroyed** — being told "you don't have permission" on a public retail site reads as hostile, not as a temporary hiccup.

## Recommendations

- **Fix the CDN geo/IP allowlist** so the US storefront (`en_us`) is accessible from standard residential IPs — this block suggests a misconfigured Akamai rule is treating normal traffic as a threat.
- **Implement a branded error page** for any 403/block state — if a block must happen, serve an H&M-styled fallback with a logo and a redirect to `hm.com` rather than a raw Akamai dump page.
- **Add a retry CTA** on any error state ("Go to H&M homepage") so users aren't completely stranded.
- **Monitor CDN error rates** — if this is happening in sweeps, it's likely impacting real shoppers and costing conversion at the top of the funnel.

## Full review
## 1. Executive Summary

Okay so I literally cannot believe this — I opened www2.hm.com and got hit with a giant **"Access Denied"** wall from Akamai's CDN. No hero, no campaign, no products, nothing. The entire page is a plain white error screen with a reference hash and an edgesuite.net URL. This isn't an H&M homepage review — it's a review of a CDN block page, which is genuinely one of the worst first impressions a brand can serve.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: no hero exists
- − Returning-shopper hook: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: hard no — it's a system error dump
- − No render bugs: the entire page IS a render failure (Access Denied error served instead of site)
- − Demographic signals match my persona: none
- − Current campaign / season reflected: none
- − Loyalty / membership visible: none
- − Offer feels honest: N/A — there is no offer

Score starts at 1 and nothing adds to it. Stays at **1/10**.

## 3. What's Working

- The error message is at least legible — the text renders in plain black-on-white so I can read that I've been blocked (cool, great, love that for me).

## 4. What's Weak

- **The entire homepage** is replaced by an Akamai "Access Denied" CDN block — `Reference #18.30153b17.1778868810.7481eed1` is the only "content" visible.
- **Zero brand presence** — no H&M logo, no color, no typography, no campaign. Someone new to the brand would have no idea what H&M even sells.
- **No fallback or recovery path** — no link back to the homepage, no "try again" button, nothing to redirect me anywhere useful.
- **Trust is immediately destroyed** — being told "you don't have permission" on a public retail site reads as hostile, not as a temporary hiccup.

## 5. Recommendations

- **Fix the CDN geo/IP allowlist** so the US storefront (`en_us`) is accessible from standard residential IPs — this block suggests a misconfigured Akamai rule is treating normal traffic as a threat.
- **Implement a branded error page** for any 403/block state — if a block must happen, serve an H&M-styled fallback with a logo and a redirect to `hm.com` rather than a raw Akamai dump page.
- **Add a retry CTA** on any error state ("Go to H&M homepage") so users aren't completely stranded.
- **Monitor CDN error rates** — if this is happening in sweeps, it's likely impacting real shoppers and costing conversion at the top of the funnel.

## 6. Bottom Line

I'm leaving immediately — there is genuinely nothing here to browse, and being told "access denied" on a fashion site I wanted to shop makes me just open a competitor instead.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white page
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - Text is at least readable (black serif on white, no layout overlap)
- **Weaknesses:**
  - This is a CDN error, not a hero — there is zero brand content above the fold
  - No recovery path whatsoever; the page is a dead end

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The access denial itself is jarring — being blocked on a public-facing retail URL with no explanation beyond a reference hash feels broken and adversarial, even if unintentional.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero at all
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — the page is a CDN 403 block
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: error copy is not a copy register
- − Trust signals visible: none — the opposite of trust
- − New / hot rail in my category: none
- − No dark patterns: the block itself could read as one

**Score:** `1/10` — 1 base, zero signals hit.
**Rationale:** Nothing on this page invites engagement; it actively signals "go away." I would bounce in under two seconds.

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

**Score:** `1/10` — base score only, zero criteria met.
**Rationale:** There is no conversion path of any kind; the page terminates the session before a single product is surfaced.

## 11. Evidence

Modules visible in screenshot (in scroll order):

- **Access Denied heading** — large bold serif H1, the only prominent element on the page
- **Error body copy** — `You don't have permission to access "http://www2.hm.com/en_us/index.html" on this server.`
- **Reference ID** — `Reference #18.30153b17.1778868810.7481eed1`
- **CDN error URL** — `https://errors.edgesuite.net/18.30153b17.1778868810.7481eed1` (Akamai EdgeSuite block page)
- **Remainder of page** — completely blank white, no content, no footer, no nav, no imagery
- **Bugs / friction:** The entire homepage failed to load — a CDN 403 block was served in place of any retail content. This is a critical rendering failure, not a minor UI issue.
## Recent history

- [[2026-05-14-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-14)
- [[2026-05-13-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-13)
- [[2026-05-10-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-10)

