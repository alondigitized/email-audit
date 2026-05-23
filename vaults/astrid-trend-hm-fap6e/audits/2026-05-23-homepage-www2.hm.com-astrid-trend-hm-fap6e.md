---
slug: 2026-05-23-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-23
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-23
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-23
**Score:** 1/10 · **Type:** Site journey · **2026-05-23**
## Executive summary

- Okay so I literally cannot shop here — what loaded is a cold, white "Access Denied" error screen served by Akamai's CDN, not an H&M homepage at all. There is zero brand presence, zero product, zero offer. From where I'm standing this brand doesn't exist right now.

## What's working

- Nothing. The only thing that rendered correctly is the Akamai error reference number, which is useful exactly zero percent for shopping.

## What's weak

- **The entire page** — H&M's CDN blocked the request with an "Access Denied" error (`Reference #18.2ff00f17.1779530962.1c022a60`). No imagery, no navigation, no brand identity rendered.
- **No fallback / redirect** — a brand at H&M's scale should have a graceful fallback (redirect to hm.com, geo-redirect, maintenance page). Instead users hit a bare server error.
- **Zero trust signals** — if I didn't already know H&M, I'd assume this URL was a scam link and close immediately.

## Recommendations

- **Fix the CDN geo/bot block immediately** — the Akamai rule is clearly misconfigured for this subdomain; route `www2.hm.com` traffic to the canonical `hm.com` homepage instead of a 403 wall.
- **Add a branded 403/maintenance page** — if a block is ever intentional, show the H&M logo, a short message ("We're updating things — shop at hm.com"), and a direct link to the working domain.
- **Monitor subdomain health in synthetic tests** — a subdomain serving 403s to real users should fire an alert within minutes, not sit broken long enough to be audited.
- **Redirect legacy `www2` traffic to `www.hm.com`** — `www2` is a legacy pattern; a permanent 301 would eliminate this failure class entirely.

## Full review
## 1. Executive Summary

Okay so I literally cannot shop here — what loaded is a cold, white "Access Denied" error screen served by Akamai's CDN, not an H&M homepage at all. There is zero brand presence, zero product, zero offer. From where I'm standing this brand doesn't exist right now.

## 2. Business Impact Score (1-10)

**1/10**
- − hero copy speaks to my persona: no hero exists
- − returning-shopper hook: none
- − concrete offer above the fold: none
- − primary CTA: none
- − clear visual hierarchy: plain black text on white, no hierarchy at all
- − no render bugs: this IS a render bug — CDN block is the entire page
- − demographic signals: none
- − current campaign / season: none
- − loyalty / membership benefits: none
- − honest offer: N/A — no offer whatsoever

Score starts at 1; zero criteria met. Stays at **1/10**.

## 3. What's Working

- Nothing. The only thing that rendered correctly is the Akamai error reference number, which is useful exactly zero percent for shopping.

## 4. What's Weak

- **The entire page** — H&M's CDN blocked the request with an "Access Denied" error (`Reference #18.2ff00f17.1779530962.1c022a60`). No imagery, no navigation, no brand identity rendered.
- **No fallback / redirect** — a brand at H&M's scale should have a graceful fallback (redirect to hm.com, geo-redirect, maintenance page). Instead users hit a bare server error.
- **Zero trust signals** — if I didn't already know H&M, I'd assume this URL was a scam link and close immediately.

## 5. Recommendations

- **Fix the CDN geo/bot block immediately** — the Akamai rule is clearly misconfigured for this subdomain; route `www2.hm.com` traffic to the canonical `hm.com` homepage instead of a 403 wall.
- **Add a branded 403/maintenance page** — if a block is ever intentional, show the H&M logo, a short message ("We're updating things — shop at hm.com"), and a direct link to the working domain.
- **Monitor subdomain health in synthetic tests** — a subdomain serving 403s to real users should fire an alert within minutes, not sit broken long enough to be audited.
- **Redirect legacy `www2` traffic to `www.hm.com`** — `www2` is a legacy pattern; a permanent 301 would eliminate this failure class entirely.

## 6. Bottom Line

I closed the tab the second I saw "Access Denied" — there is literally nothing to browse.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** none — blank white page
- **Primary CTA:** none — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:** (none applicable)
- **Weaknesses:**
  - The only copy on screen is a CDN error message — communicates total inaccessibility
  - No brand element, color, or logo present whatsoever

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The error message itself is technically honest — it does tell me I'm blocked — but a brand the size of H&M leaving a bare CDN 403 live is a trust-destroyer regardless of cause.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists
- − Easy to reach my category: no navigation rendered
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — CDN block = complete render failure
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is an error string
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: no dark patterns, but a CDN block wall is worse than a dark pattern

**Score:** `1/10` — zero "+" criteria met; base score of 1.
**Rationale:** There is no content to engage with. A blank error page has a 100% bounce rate for any user who isn't a developer debugging infrastructure.

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

**Score:** `1/10` — zero "+" criteria; base score of 1.
**Rationale:** Conversion is impossible when the page is a server error. No path to cart exists.

## 11. Evidence

Visible modules in scroll order:

- **CDN error heading:** `Access Denied` — large bold serif, top-left, no branding
- **Error body copy:** "You don't have permission to access `http://www2.hm.com/en_us/index.html` on this server."
- **Reference ID:** `Reference #18.2ff00f17.1779530962.1c022a60`
- **Akamai error URL:** `https://errors.edgesuite.net/18.2ff00f17.1779530962.1c022a60`
- **Remainder of page:** completely blank white space extending the full viewport height
- **Bugs / friction visible:** The entire page is a CDN 403 block — no H&M content, navigation, images, or functionality rendered at all. This is a critical production incident, not a minor UX issue.
## Recent history

- [[2026-05-22-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-22)
- [[2026-05-21-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-21)
- [[2026-05-20-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 2/10 (2026-05-20)

