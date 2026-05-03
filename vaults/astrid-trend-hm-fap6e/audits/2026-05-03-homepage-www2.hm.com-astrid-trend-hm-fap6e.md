---
slug: 2026-05-03-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-03
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-03
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-03
**Score:** 1/10 · **Type:** Site journey · **2026-05-03**
## Executive summary

- Okay so I literally cannot shop here right now — what loaded on my phone is a big bold **"Access Denied"** error from Akamai's CDN, not H&M's actual homepage. No hero, no product, no nothing. From where I'm sitting this isn't a brand experience, it's a wall. Whatever geo-blocking or bot-detection H&M has set up just treated me like a crawler and slammed the door.
- **1/10**
- − Hero copy or imagery speaks to my persona: no content loaded at all
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: none — just a plain error string
- − No render bugs: FAIL — the entire page is a CDN block error (`Access Denied`, Reference `#18.9a0ed217.1777831265.30c877a2`)
- − Demographic signals match my persona: irrelevant, nothing rendered
- − Current campaign/season reflected: nothing rendered
- − Loyalty/membership benefits: nothing rendered
- − Honest offer: nothing rendered
- Score starts at 1, zero criteria TRUE. **1/10.**

## What's working

- Nothing. The page that rendered is an Akamai EdgeSuite access denial. There are zero brand elements to evaluate positively.

## What's weak

- **Full page block** — the CDN returned HTTP 403 and rendered a plain-text error page. No stylesheet, no imagery, no H&M branding whatsoever.
- **Zero error recovery UX** — no redirect suggestion, no "try again" link, no friendly copy. Just raw server language (`Reference #18.9a0ed217...`) that means nothing to a shopper.
- **Trust completely destroyed** — if I hit this on my phone, my first instinct is the site is down or my account is flagged. I'm not coming back today.

## Recommendations

- **Fix the CDN access control rules** — legitimate mobile browser user-agents are getting blocked. Akamai's bot-management rules are firing on real shoppers.
- **If a block must happen, serve a branded error page** — show the H&M logo, a short "something went wrong" message, and a retry CTA. Don't expose raw EdgeSuite reference IDs.
- **Add a fallback redirect** — `www2.hm.com` should 301 to `www.hm.com` rather than hard-blocking. The www2 subdomain blocking real traffic is a configuration problem that needs to be caught in monitoring.

## Full review
## 1. Executive Summary

Okay so I literally cannot shop here right now — what loaded on my phone is a big bold **"Access Denied"** error from Akamai's CDN, not H&M's actual homepage. No hero, no product, no nothing. From where I'm sitting this isn't a brand experience, it's a wall. Whatever geo-blocking or bot-detection H&M has set up just treated me like a crawler and slammed the door.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery speaks to my persona: no content loaded at all
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: none — just a plain error string
- − No render bugs: FAIL — the entire page is a CDN block error (`Access Denied`, Reference `#18.9a0ed217.1777831265.30c877a2`)
- − Demographic signals match my persona: irrelevant, nothing rendered
- − Current campaign/season reflected: nothing rendered
- − Loyalty/membership benefits: nothing rendered
- − Honest offer: nothing rendered

Score starts at 1, zero criteria TRUE. **1/10.**

## 3. What's Working

- Nothing. The page that rendered is an Akamai EdgeSuite access denial. There are zero brand elements to evaluate positively.

## 4. What's Weak

- **Full page block** — the CDN returned HTTP 403 and rendered a plain-text error page. No stylesheet, no imagery, no H&M branding whatsoever.
- **Zero error recovery UX** — no redirect suggestion, no "try again" link, no friendly copy. Just raw server language (`Reference #18.9a0ed217...`) that means nothing to a shopper.
- **Trust completely destroyed** — if I hit this on my phone, my first instinct is the site is down or my account is flagged. I'm not coming back today.

## 5. Recommendations

- **Fix the CDN access control rules** — legitimate mobile browser user-agents are getting blocked. Akamai's bot-management rules are firing on real shoppers.
- **If a block must happen, serve a branded error page** — show the H&M logo, a short "something went wrong" message, and a retry CTA. Don't expose raw EdgeSuite reference IDs.
- **Add a fallback redirect** — `www2.hm.com` should 301 to `www.hm.com` rather than hard-blocking. The www2 subdomain blocking real traffic is a configuration problem that needs to be caught in monitoring.

## 6. Bottom Line

I'm gone — you can't browse a page that won't load, and there's zero reason for me to stick around staring at "Access Denied."

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white page with plain black system text
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:** None observable.
- **Weaknesses:**
  - The only visible "headline" is a CDN error message — no brand identity whatsoever
  - No recovery path; a confused shopper has no next step

## 8. Promotional & Urgency Cues

- **Active promos:** none — page did not render
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The raw Akamai reference URL (`https://errors.edgesuite.net/18.9a0ed217.1777831265.30c877a2`) is exposed to end users — that's a technical leak that looks sketchy and erodes trust instantly

## 9. Engagement Likelihood

- − Hero relates to my focus area: no content rendered
- − Easy to reach my category: no nav rendered
- − Eye-catching imagery in my category: none
- − Promo banner I would use: none
- − Page renders cleanly: hard no — full CDN block, Access Denied
- − Imagery includes someone like me: none
- − Copy register matches mine: the only copy is server error text — not my vibe
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: a full access denial is about as dark as it gets for a shopper

**Score:** `1/10` — zero "+" bullets, floor score.
**Rationale:** There is nothing to engage with. A CDN wall is an immediate bounce trigger for any mobile shopper, let alone a Gen Z one who will just open Zara next.

## 10. Conversion Likelihood

- − CTA in my category: none rendered
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: none
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — the opposite, a server-level rejection

**Score:** `1/10` — zero "+" bullets.
**Rationale:** Conversion is impossible when the page won't load. No product, no CTA, no path to cart.

## 11. Evidence

Visible modules in the screenshot (in full-page order):

- **Access Denied heading** — large bold `<h1>` system text, no H&M styling
- **Error body copy** — `You don't have permission to access "http://www2.hm.com/en_us/index.html" on this server.`
- **Reference ID** — `Reference #18.9a0ed217.1777831265.30c877a2`
- **Akamai EdgeSuite error URL** — `https://errors.edgesuite.net/18.9a0ed217.1777831265.30c877a2`
- **Remainder of viewport** — completely blank white, no footer, no nav, no imagery
- **Bug / friction:** The entire homepage is a hard CDN 403 block. No H&M brand elements loaded. This is a critical render failure that would register as a full bounce for any real user hitting this URL.
## Recent history

- [[2026-05-02-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-02)

