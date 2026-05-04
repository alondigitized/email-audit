---
slug: 2026-05-04-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-04
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-04
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-04
**Score:** 1/10 · **Type:** Site journey · **2026-05-04**
## Executive summary

- The screenshot shows an "Access Denied" error, not the H&M homepage. I'll review exactly what's visible.
- I opened www2.hm.com and got hit with a blank white screen and a big black "Access Denied" header. There's no brand, no product, no imagery — just a server error message from Akamai's CDN and a reference ID. This isn't H&M's homepage, it's a wall.
- **1/10**
- − Hero copy speaks to my persona: no hero exists
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: none
- − Clear visual hierarchy: the only hierarchy is an error heading
- − No render bugs: the entire page IS a bug — "Access Denied" from `errors.edgesuite.net`
- − Demographic signals match: no content whatsoever
- − Current campaign/season: no content whatsoever
- − Loyalty/membership benefits: none
- − Honest offer: no offer to evaluate
- Score starts at 1, zero criteria met. **1/10**.

## What's working

- Nothing. The page loaded (technically a response was received), so DNS resolved.

## What's weak

- **The entire page** is an Akamai CDN "Access Denied" block — visitor sees zero H&M branding, zero product, zero CTA.
- **Reference error string** (`#18.4bd7ce17.1777917671.498480f`) is exposed raw to the user with no helpful redirect or fallback messaging.
- **No retry link or redirect** — the page offers no way forward. Dead end.
- **White void** below the error message fills the rest of the screen, making it look like the site is broken or gone.

## Recommendations

- **Immediately fix the CDN access rule** blocking `www2.hm.com/en_us/index.html` — this is a P0 incident, not a design issue.
- **Add a graceful 403 fallback page** with the H&M logo, a "Sorry, something went wrong" message, and a link to `www.hm.com` so users aren't stranded.
- **Set up synthetic monitoring** on the homepage URL so a CDN block like this triggers an alert within minutes, not after customers report it.
- **Audit the Akamai WAF/CDN rules** that are firing — the reference ID points to an EdgeSuite rule; that rule should never fire on the brand's own homepage for organic traffic.

## Full review
The screenshot shows an "Access Denied" error, not the H&M homepage. I'll review exactly what's visible.

---

## 1. Executive Summary

I opened www2.hm.com and got hit with a blank white screen and a big black "Access Denied" header. There's no brand, no product, no imagery — just a server error message from Akamai's CDN and a reference ID. This isn't H&M's homepage, it's a wall.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: no hero exists
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA above the fold: none
- − Clear visual hierarchy: the only hierarchy is an error heading
- − No render bugs: the entire page IS a bug — "Access Denied" from `errors.edgesuite.net`
- − Demographic signals match: no content whatsoever
- − Current campaign/season: no content whatsoever
- − Loyalty/membership benefits: none
- − Honest offer: no offer to evaluate

Score starts at 1, zero criteria met. **1/10**.

## 3. What's Working

- Nothing. The page loaded (technically a response was received), so DNS resolved.

## 4. What's Weak

- **The entire page** is an Akamai CDN "Access Denied" block — visitor sees zero H&M branding, zero product, zero CTA.
- **Reference error string** (`#18.4bd7ce17.1777917671.498480f`) is exposed raw to the user with no helpful redirect or fallback messaging.
- **No retry link or redirect** — the page offers no way forward. Dead end.
- **White void** below the error message fills the rest of the screen, making it look like the site is broken or gone.

## 5. Recommendations

- **Immediately fix the CDN access rule** blocking `www2.hm.com/en_us/index.html` — this is a P0 incident, not a design issue.
- **Add a graceful 403 fallback page** with the H&M logo, a "Sorry, something went wrong" message, and a link to `www.hm.com` so users aren't stranded.
- **Set up synthetic monitoring** on the homepage URL so a CDN block like this triggers an alert within minutes, not after customers report it.
- **Audit the Akamai WAF/CDN rules** that are firing — the reference ID points to an EdgeSuite rule; that rule should never fire on the brand's own homepage for organic traffic.

## 6. Bottom Line

I'm out — I can't browse, let alone buy, when the site is literally serving me "Access Denied."

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** none — blank white page
- **Primary CTA:** none — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error text is at least legible (high contrast, readable font)
- **Weaknesses:**
  - No H&M branding whatsoever — I wouldn't know whose site this is without the URL bar
  - Zero path forward for the visitor

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The raw Akamai error URL (`https://errors.edgesuite.net/18.4bd7ce17...`) is exposed to users — that's confusing and looks sketchy, not manipulative exactly, but definitely erodes trust.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, no content
- − Easy to reach my category: no navigation rendered
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — CDN block is the render
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: only text is a server error
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the dead-end error page with no escape route counts as friction

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every single engagement signal is absent. The CDN block means no content was delivered — there is literally nothing to engage with.

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
**Rationale:** There is no conversion surface of any kind — this is a server error page. Zero commerce signals reached the viewport.

## 11. Evidence

- **Hero / primary value prop:** Not present — replaced by Akamai "Access Denied" error block
- **Featured categories:** Not present
- **Promotional banners or strips:** Not present
- **Loyalty / rewards section:** Not present
- **Editorial / lifestyle modules:** Not present
- **New-arrivals or best-seller rails:** Not present
- **Footer credibility (reviews, awards, policies):** Not present — page is blank below the error
- **Bugs / friction / clarity issues visible in screenshot:**
  - Large bold "Access Denied" heading rendered in plain browser default font — no H&M branding
  - Error message: *"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."*
  - Raw reference ID exposed: `Reference #18.4bd7ce17.1777917671.498480f`
  - Raw CDN error URL exposed: `https://errors.edgesuite.net/18.4bd7ce17.1777917671.498480f`
  - Remainder of viewport is completely white and empty
## Recent history

- [[2026-05-03-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-03)
- [[2026-05-02-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-02)

