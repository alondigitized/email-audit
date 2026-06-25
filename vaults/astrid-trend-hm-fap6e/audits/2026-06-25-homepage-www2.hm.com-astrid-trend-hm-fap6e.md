---
slug: 2026-06-25-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-06-25
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-06-25
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-06-25
**Score:** 1/10 · **Type:** Site journey · **2026-06-25**
## Executive summary

- I opened what I thought was H&M's site and got hit with a stark white "**Access Denied**" wall — Akamai/EdgeSuite blocked the request entirely. There is zero brand presence, zero product, zero content. Whatever this domain is trying to serve, it isn't serving it to me right now.

## What's working

- Nothing. There is no H&M content on this page to evaluate.

## What's weak

- **The entire page is an Akamai "Access Denied" error** — the CDN blocked the request before any brand asset loaded. A shopper hitting this bounces instantly.
- **No fallback or redirect** — there's no "Try hm.com instead" link, no brand logo, no soft landing. Just a reference number and an error URL.
- **Completely unbranded error state** — if this is what mobile users or geo-blocked visitors see, it's a silent conversion killer with no recovery path offered.

## Recommendations

- **Fix the CDN access rule** that is blocking `www2.hm.com/en_us/index.html` — the error references Akamai EdgeSuite with a specific reference ID (`#18.31153b17.1782381606.5731fe69`), which the infrastructure team can trace immediately.
- **Add a branded fallback page** for any access-denied or geo-block scenario — at minimum, redirect to `hm.com` with a message so the shopper isn't stranded.
- **Implement a custom error template** through the CDN so even a block page carries the H&M logo and a support link rather than raw server text.
- **Monitor this URL in synthetic testing** — if this is hitting real users, the revenue impact is direct and immediate.

## Full review
## 1. Executive Summary

I opened what I thought was H&M's site and got hit with a stark white "**Access Denied**" wall — Akamai/EdgeSuite blocked the request entirely. There is zero brand presence, zero product, zero content. Whatever this domain is trying to serve, it isn't serving it to me right now.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery speaks to my persona: no hero exists, just an error
- − Returning-shopper hook: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy: none — a single unstyled `<h1>` and two lines of error text
- − No render bugs: FAIL — the entire page is an access-denial error
- − Demographic signals match persona: none
- − Current campaign / season: none
- − Loyalty / membership benefits: none
- − Honest offer: irrelevant — there is no offer

Score is 1 (the floor) because zero rubric criteria are satisfied. The page is a CDN block page, not a homepage.

## 3. What's Working

- Nothing. There is no H&M content on this page to evaluate.

## 4. What's Weak

- **The entire page is an Akamai "Access Denied" error** — the CDN blocked the request before any brand asset loaded. A shopper hitting this bounces instantly.
- **No fallback or redirect** — there's no "Try hm.com instead" link, no brand logo, no soft landing. Just a reference number and an error URL.
- **Completely unbranded error state** — if this is what mobile users or geo-blocked visitors see, it's a silent conversion killer with no recovery path offered.

## 5. Recommendations

- **Fix the CDN access rule** that is blocking `www2.hm.com/en_us/index.html` — the error references Akamai EdgeSuite with a specific reference ID (`#18.31153b17.1782381606.5731fe69`), which the infrastructure team can trace immediately.
- **Add a branded fallback page** for any access-denied or geo-block scenario — at minimum, redirect to `hm.com` with a message so the shopper isn't stranded.
- **Implement a custom error template** through the CDN so even a block page carries the H&M logo and a support link rather than raw server text.
- **Monitor this URL in synthetic testing** — if this is hitting real users, the revenue impact is direct and immediate.

## 6. Bottom Line

I'd close the tab in under two seconds — there is literally nothing to browse, just an ugly server error staring back at me.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white background
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - None identifiable
- **Weaknesses:**
  - The only visible "headline" is a CDN error message — no brand, no product, no path forward
  - Zero visual identity; could be any broken server anywhere on the internet

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The error message is honest in that it accurately reports the access failure, but there is nothing for a shopper to act on — no redirect, no contact, no recovery

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero whatsoever
- − Easy to reach my category: no navigation rendered
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: FAIL — entire page is an error state
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is "Access Denied" and a reference number — not relatable
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: no dark patterns, but an error wall is worse

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every single engagement signal is absent. The CDN block means the page never even attempted to render brand content, so there is nothing to engage with.

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

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** There is no pathway to conversion of any kind — no product, no CTA, no offer — because the page failed to load entirely.

## 11. Evidence

Modules visible on the page (in scroll order):

- **CDN error heading:** Large bold `Access Denied` H1 — the only visually dominant element
- **Error body copy:** "You don't have permission to access `http://www2.hm.com/en_us/index.html` on this server."
- **Reference number:** `#18.31153b17.1782381606.5731fe69`
- **Error source URL:** `https://errors.edgesuite.net/18.31153b17.1782381606.5731fe69`
- **Remainder of viewport:** Completely blank white space, no other modules loaded
- **Bugs / friction / clarity issues visible:** The entire render is the bug — Akamai EdgeSuite blocked the request before H&M's own application served a single byte of content
## Recent history

- [[2026-06-11-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-06-11)
- [[2026-06-04-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-06-04)
- [[2026-05-28-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-28)

