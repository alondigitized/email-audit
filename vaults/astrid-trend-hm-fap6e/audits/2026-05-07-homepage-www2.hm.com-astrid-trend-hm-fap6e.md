---
slug: 2026-05-07-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-07
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-07
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-07
**Score:** 1/10 · **Type:** Site journey · **2026-05-07**
## Executive summary

- Okay so I literally cannot tell what H&M is pushing right now because the site won't even let me in — I'm getting a full "Access Denied" block, served by Akamai's edge network. No hero, no campaign, no product, nothing. Whatever this brand is trying to sell today, it's not selling it to me.

## What's working

- Nothing. There is no homepage content to evaluate. The only text on screen is an Akamai edge error.

## What's weak

- **Access Denied error (Akamai EdgeSuite):** The entire homepage is blocked — the message reads *"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."* No fallback, no redirect, no helpful copy.
- **No soft landing or brand presence:** Not even a logo or a "something went wrong" branded page. It's a raw server error on a white background — completely off-brand for a global fashion retailer.
- **Error reference is exposed raw:** The string `Reference #18.e5f00f17.1778176866.2f1ca1e` and the edgesuite.net URL are dumped directly onto screen. That's not a user-facing message, it's a server log artifact.
- **No retry or alternative path offered:** No button to try again, no link to hm.com, no search bar. A dead end.

## Recommendations

- **Stand up a branded error page:** If the CDN blocks a request, serve a custom 403 page with the H&M logo, a human-readable explanation ("We're having trouble loading this page"), and a CTA to the main domain.
- **Route www2 subdomain properly:** Investigate why www2.hm.com is throwing a 403 for what appears to be a normal browser request — this is a routing or geo-block misconfiguration that is actively costing traffic.
- **Suppress internal reference strings from end users:** Error IDs like the Akamai ref number should be logged server-side, not shown to shoppers on screen.
- **Add a fallback redirect:** If www2 is deprecated or region-locked, redirect silently to www.hm.com rather than blocking with no escape.

## Full review
## 1. Executive Summary

Okay so I literally cannot tell what H&M is pushing right now because the site won't even let me in — I'm getting a full "Access Denied" block, served by Akamai's edge network. No hero, no campaign, no product, nothing. Whatever this brand is trying to sell today, it's not selling it to me.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero visible at all
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: none — it's a blank white error screen
- − No render bugs: FAIL — the entire page is a server-level access denial
- − Demographic signals match my persona: none present
- − Page reflects current season/campaign: none present
- − Loyalty / membership benefits: none
- − Honest offer: moot — no offer exists

Score starts at 1; no criteria pass. **1/10.**

## 3. What's Working

- Nothing. There is no homepage content to evaluate. The only text on screen is an Akamai edge error.

## 4. What's Weak

- **Access Denied error (Akamai EdgeSuite):** The entire homepage is blocked — the message reads *"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."* No fallback, no redirect, no helpful copy.
- **No soft landing or brand presence:** Not even a logo or a "something went wrong" branded page. It's a raw server error on a white background — completely off-brand for a global fashion retailer.
- **Error reference is exposed raw:** The string `Reference #18.e5f00f17.1778176866.2f1ca1e` and the edgesuite.net URL are dumped directly onto screen. That's not a user-facing message, it's a server log artifact.
- **No retry or alternative path offered:** No button to try again, no link to hm.com, no search bar. A dead end.

## 5. Recommendations

- **Stand up a branded error page:** If the CDN blocks a request, serve a custom 403 page with the H&M logo, a human-readable explanation ("We're having trouble loading this page"), and a CTA to the main domain.
- **Route www2 subdomain properly:** Investigate why www2.hm.com is throwing a 403 for what appears to be a normal browser request — this is a routing or geo-block misconfiguration that is actively costing traffic.
- **Suppress internal reference strings from end users:** Error IDs like the Akamai ref number should be logged server-side, not shown to shoppers on screen.
- **Add a fallback redirect:** If www2 is deprecated or region-locked, redirect silently to www.hm.com rather than blocking with no escape.

## 6. Bottom Line

I bounced instantly — there's nothing here, just a permission error, and I'm not debugging H&M's CDN config on my lunch break.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white page
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to me `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - None applicable.
- **Weaknesses:**
  - The only content visible is a server error; zero brand presence or merchandising
  - Raw technical strings (Akamai reference ID, edgesuite.net URL) exposed directly to the user

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The error page itself is honest in a brutal way — it's unambiguously telling me I can't get in — but there's no brand spin or fine print because there's no brand content at all.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: none present
- − Page renders cleanly: no — page is a 403 block page, not the intended homepage
- − Imagery includes someone like me: none
- − Copy register matches mine: the only copy is a server error message
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns, but also no page
- **Score:** `1/10`
- **Rationale:** Every single engagement signal is absent because the actual homepage never loaded; a CDN access denial is the only thing rendered.

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
- **Score:** `1/10`
- **Rationale:** Conversion is impossible when the storefront door is locked and there's no handle — the site never gave me anything to react to.

## 11. Evidence

Visible modules in scroll order:

- **"Access Denied" heading (H1):** large bold serif text, top-left of screen — the only headline on the page
- **Error message paragraph:** *"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."*
- **Reference ID:** `Reference #18.e5f00f17.1778176866.2f1ca1e` — raw Akamai trace ID, plaintext
- **Error URL:** `https://errors.edgesuite.net/18.e5f00f17.1778176866.2f1ca1e` — exposed edge network URL, plaintext
- **Blank white canvas below:** no further content, no footer, no nav, no imagery — the rest of the viewport is empty white space

**Bugs / friction visible:**
- Critical: 403 Access Denied from Akamai EdgeSuite — homepage entirely inaccessible
- No branded error handling; raw server strings exposed to end user
- No escape path, redirect, or alternative navigation offered
## Recent history

- [[2026-05-06-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-06)
- [[2026-05-05-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-05)
- [[2026-05-04-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-04)

