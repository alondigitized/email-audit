---
slug: 2026-05-19-homepage-www.aa.com-curt-aadvantage-aa-fap6e
type: site
date: 2026-05-19
persona: curt-aadvantage-aa-fap6e
score: "1/10"
sender: www.aa.com
subject: Homepage snapshot · www.aa.com · 2026-05-19
tags: [site-journey, score-1, sender/www-aa-com]
---
# Homepage snapshot · www.aa.com · 2026-05-19
**Score:** 1/10 · **Type:** Site journey · **2026-05-19**
## Executive summary

- What I see is not a homepage — it's an Akamai EdgeSuite "Access Denied" wall. AA's CDN blocked the request before a single pixel of their actual site loaded. For a road warrior who pays four figures a year for the Citi AAdvantage Executive card partly for the Admirals Club access, landing on a permission-denied screen when I just want to check award availability is exactly the kind of IT dysfunction I've learned to forgive AA for — until now, when it's the front door.

## What's working

- Nothing. There is literally nothing to call out here except that the error page loads fast and the font is legible. That's the floor.

## What's weak

- The CDN (Akamai EdgeSuite) returned a hard "Access Denied" instead of the homepage — the most fundamental failure possible.
- No fallback, no redirect, no branded error page — just a raw server error with a reference ID that means nothing to a customer.
- The reference ID `#18.103b2f17.1779188193.1d49821` is exposed in plain text with no guidance on what to do next — no "try again," no support link, nothing.
- AA already has a rep for IT problems. Serving this to a customer on a mobile device and expecting them to just try again is a bad look at any status level.

## Recommendations

- **Add a branded, mobile-friendly error page** that intercepts CDN 403 blocks and serves something that at minimum shows the AA logo, a plain-English message ("We're having trouble verifying your connection — try again or open the app"), and a deeplink to the iOS/Android app.
- **Don't expose raw EdgeSuite reference IDs** to end users — route them to aa.com/help with the reference pre-populated if they need to contact support.
- **Test bot-detection thresholds against real mobile Safari user-agents** — if a legitimate customer on an iPhone gets a 403, the WAF rules are miscalibrated.
- **Instrument this failure path** — if ExP members are hitting access-denied on the homepage, someone in Dallas needs a dashboard alert, not a Reddit post.

## Full review
## 1. Executive Summary

What I see is not a homepage — it's an Akamai EdgeSuite "Access Denied" wall. AA's CDN blocked the request before a single pixel of their actual site loaded. For a road warrior who pays four figures a year for the Citi AAdvantage Executive card partly for the Admirals Club access, landing on a permission-denied screen when I just want to check award availability is exactly the kind of IT dysfunction I've learned to forgive AA for — until now, when it's the front door.

## 2. Business Impact Score (1-10)

**1/10**

- − hero copy/imagery matching my persona: not present — only "Access Denied" in a Times New Roman serif
- − returning-shopper hook: zero
- − concrete offer above the fold: zero
- − unmistakable primary CTA: zero
- − clear visual hierarchy: an H1 and three lines of plain text, not intentional
- − no render bugs: this IS a render bug — the entire site failed to render
- − demographic signals: none
- − current campaign / season: none
- − loyalty benefits visible: none
- − honest offer: not applicable — there is no offer

Score starts at 1, no criteria true. **Score: 1/10.**

## 3. What's Working

- Nothing. There is literally nothing to call out here except that the error page loads fast and the font is legible. That's the floor.

## 4. What's Weak

- The CDN (Akamai EdgeSuite) returned a hard "Access Denied" instead of the homepage — the most fundamental failure possible.
- No fallback, no redirect, no branded error page — just a raw server error with a reference ID that means nothing to a customer.
- The reference ID `#18.103b2f17.1779188193.1d49821` is exposed in plain text with no guidance on what to do next — no "try again," no support link, nothing.
- AA already has a rep for IT problems. Serving this to a customer on a mobile device and expecting them to just try again is a bad look at any status level.

## 5. Recommendations

- **Add a branded, mobile-friendly error page** that intercepts CDN 403 blocks and serves something that at minimum shows the AA logo, a plain-English message ("We're having trouble verifying your connection — try again or open the app"), and a deeplink to the iOS/Android app.
- **Don't expose raw EdgeSuite reference IDs** to end users — route them to aa.com/help with the reference pre-populated if they need to contact support.
- **Test bot-detection thresholds against real mobile Safari user-agents** — if a legitimate customer on an iPhone gets a 403, the WAF rules are miscalibrated.
- **Instrument this failure path** — if ExP members are hitting access-denied on the homepage, someone in Dallas needs a dashboard alert, not a Reddit post.

## 6. Bottom Line

I closed the browser and opened the AA app, which is what I do every single time aa.com embarrasses itself — but this time I'm also mentally docking AA another point on "why am I still Executive Platinum here."

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white background
- **Primary CTA:** None — visible above the fold? **No**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is at least readable — high contrast, large H1
- **Weaknesses:**
  - This is a CDN block page, not a homepage — zero brand presence, zero intent-matching
  - No AA logo, no navigation, no recovery path whatsoever

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None
- **Honesty check:** The only text on the page is an access denial and an Akamai reference ID. It's not manipulative — it's just completely broken.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists
- − Easy to reach my category: no navigation exists
- − Eye-catching imagery in my category: no imagery exists
- − Promo banner I would use: no banners exist
- − Page renders cleanly: hard no — this is a CDN 403 error
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: only copy is a system error string
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the entire page is a failure state, not a dark pattern per se, but I'm bouncing immediately

**Score:** `1/10` — 1 base point, zero criteria met.
**Rationale:** Nothing loaded. There is no content to engage with. I bounced in under two seconds.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: not applicable (airline)
- − Specific product page one tap away: none
- − Sizing / fit info accessible: not applicable
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — a raw Akamai error is the opposite of a trust signal

**Score:** `1/10` — 1 base point, zero criteria met.
**Rationale:** Conversion requires content. There is none. The only action available is to close the tab.

## 11. Evidence

- **Hero / primary value prop:** "Access Denied" — H1 in serif, Akamai EdgeSuite block page
- **Body copy:** "You don't have permission to access 'http://www.aa.com/' on this server."
- **Reference line:** `Reference #18.103b2f17.1779188193.1d49821`
- **Error URL:** `https://errors.edgesuite.net/18.103b2f17.1779188193.1d49821`
- **Featured categories:** None
- **Promotional banners or strips:** None
- **Loyalty / rewards section:** None
- **Editorial / lifestyle modules:** None
- **New-arrivals or best-seller rails:** None
- **Footer credibility:** None
- **Bugs / friction / clarity issues visible in screenshot:** The entire viewport is a CDN-level 403 block — no AA branding, no navigation, no recovery path, no fallback UI. This is a complete homepage failure, not a partial render issue.
## Recent history

- [[2026-05-18-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-18)
- [[2026-05-17-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-17)
- [[2026-05-15-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-15)

