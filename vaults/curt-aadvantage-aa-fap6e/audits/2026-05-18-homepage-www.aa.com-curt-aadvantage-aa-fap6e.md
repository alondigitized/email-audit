---
slug: 2026-05-18-homepage-www.aa.com-curt-aadvantage-aa-fap6e
type: site
date: 2026-05-18
persona: curt-aadvantage-aa-fap6e
score: "1/10"
sender: www.aa.com
subject: Homepage snapshot · www.aa.com · 2026-05-18
tags: [site-journey, score-1, sender/www-aa-com]
---
# Homepage snapshot · www.aa.com · 2026-05-18
**Score:** 1/10 · **Type:** Site journey · **2026-05-18**
## Executive summary

- The screenshot shows an Akamai/EdgeSuite "Access Denied" block — not the actual AA.com homepage. I'll score and review exactly what's visible.
- I pulled up www.aa.com on my phone and got a brick wall — a barebones Akamai EdgeSuite "Access Denied" page. No branding, no logo, no booking widget, nothing. Whatever AA is trying to run in their CDN/WAF config decided my request was unwelcome, and instead of a graceful fallback I got a raw server error page that looks like something from 2003. For a carrier I've given my loyalty to for twenty-plus years, this is an embarrassing first impression.

## What's working

- Nothing is working. The page loads fast — I'll give Akamai that. The error text is at least legible.

## What's weak

- **The entire homepage is absent.** What I see is an Akamai EdgeSuite 403 block with the message "You don't have permission to access 'http://www.aa.com/' on this server." No AA branding, no logo, no nav, no booking widget.
- **No graceful error fallback.** AA apparently has no branded fallback page for CDN blocks. A carrier of this size should serve a "we'll be right back" page with at minimum a phone number and the AA logo.
- **The error reference string is raw and unexplained.** `Reference #18.d3b2f17.1779101661.2528583a` means nothing to a passenger. There's no "what to do next" guidance — call us, try again, use the app.
- **HTTP not HTTPS in the blocked URL.** The error shows `http://www.aa.com/` — if the crawler hit the non-SSL origin and got blocked, that's a separate infrastructure problem on top of the 403.

## Recommendations

- **Ship a branded Akamai error page immediately.** This is a configuration change, not a dev sprint — Akamai EdgeSuite supports custom error HTML. Slap the AA logo, a "Something went wrong" message, a link to the AA app, and a 1-800 number on it. Done in a day.
- **Route mobile User-Agents through a validated allow-list in the WAF rules.** If legitimate mobile traffic is hitting a 403, that's a WAF misconfiguration leaking revenue. Audit the Akamai rules for mobile UA strings and geo-IP blocks.
- **Force HTTPS at the CDN edge so error pages never expose `http://` URLs.** The blocked URL in the error string should never read `http://`.
- **Set up synthetic monitoring on the homepage from mobile IPs.** I shouldn't be the one discovering this; an uptime check should have fired before I ever opened the app.

## Full review
The screenshot shows an Akamai/EdgeSuite "Access Denied" block — not the actual AA.com homepage. I'll score and review exactly what's visible.

---

## 1. Executive Summary

I pulled up www.aa.com on my phone and got a brick wall — a barebones Akamai EdgeSuite "Access Denied" page. No branding, no logo, no booking widget, nothing. Whatever AA is trying to run in their CDN/WAF config decided my request was unwelcome, and instead of a graceful fallback I got a raw server error page that looks like something from 2003. For a carrier I've given my loyalty to for twenty-plus years, this is an embarrassing first impression.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to your persona: no hero exists, just an error message
- − Returning-shopper hook visible: none — no loyalty, no AAdvantage balance, nothing
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy is clear: one H1 error string, no hierarchy to speak of
- − No render bugs: the entire page IS the render bug — Akamai block reference `#18.d3b2f17.1779101661.2528583a` is the only content
- − Demographic signals match persona: N/A
- − Page reflects current campaign / season: N/A
- − Loyalty / membership benefits visible: none
- − Offer feels honest: N/A — there is no offer

Starting score of 1; zero criteria met. Score stays at **1**.

## 3. What's Working

- Nothing is working. The page loads fast — I'll give Akamai that. The error text is at least legible.

## 4. What's Weak

- **The entire homepage is absent.** What I see is an Akamai EdgeSuite 403 block with the message "You don't have permission to access 'http://www.aa.com/' on this server." No AA branding, no logo, no nav, no booking widget.
- **No graceful error fallback.** AA apparently has no branded fallback page for CDN blocks. A carrier of this size should serve a "we'll be right back" page with at minimum a phone number and the AA logo.
- **The error reference string is raw and unexplained.** `Reference #18.d3b2f17.1779101661.2528583a` means nothing to a passenger. There's no "what to do next" guidance — call us, try again, use the app.
- **HTTP not HTTPS in the blocked URL.** The error shows `http://www.aa.com/` — if the crawler hit the non-SSL origin and got blocked, that's a separate infrastructure problem on top of the 403.

## 5. Recommendations

- **Ship a branded Akamai error page immediately.** This is a configuration change, not a dev sprint — Akamai EdgeSuite supports custom error HTML. Slap the AA logo, a "Something went wrong" message, a link to the AA app, and a 1-800 number on it. Done in a day.
- **Route mobile User-Agents through a validated allow-list in the WAF rules.** If legitimate mobile traffic is hitting a 403, that's a WAF misconfiguration leaking revenue. Audit the Akamai rules for mobile UA strings and geo-IP blocks.
- **Force HTTPS at the CDN edge so error pages never expose `http://` URLs.** The blocked URL in the error string should never read `http://`.
- **Set up synthetic monitoring on the homepage from mobile IPs.** I shouldn't be the one discovering this; an uptime check should have fired before I ever opened the app.

## 6. Bottom Line

I closed the tab and opened the AA app — which is honestly where I live anyway — but this is a $0 revenue moment for a route I was about to book, and that's inexcusable.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None. White background, black system font, Akamai error text.
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - Text is at least readable; no overlapping elements
- **Weaknesses:**
  - Zero AA branding — a first-time visitor wouldn't know whose site this is
  - No actionable next step; dead end for any user

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — no AAdvantage mention, no EP recognition, nothing
- **Honesty check:** The error is technically honest — I was denied — but providing a raw Akamai reference number with no explanation is a terrible user experience and borders on deceptive by omission (no explanation of *why* or what to do)

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero; error page only
- − Easy to reach my category: no navigation rendered
- − Eye-catching imagery in my category: no imagery whatsoever
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — the page is a 403 error
- − Imagery includes someone like me: N/A
- − Copy register matches mine: the copy is a raw server error; it matches no human register
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns, but a blocked page is the ultimate bounce trigger

**Score:** `1/10` — zero "+" criteria met; base score of 1.
**Rationale:** There is nothing to engage with. I bounced immediately and went to the app.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: N/A
- − Specific product page one tap away: none
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — zero "+" criteria met; base score of 1.
**Rationale:** A 403 error page has a 0% conversion rate by definition. There is no path to a ticket, no path to my AAdvantage account, nothing.

## 11. Evidence

Visible modules in the screenshot, in scroll order:

- **H1 error headline:** "Access Denied" in bold serif font, top-left, no AA branding
- **Body error line 1:** "You don't have permission to access 'http://www.aa.com/' on this server."
- **Body error line 2:** "Reference #18.d3b2f17.1779101661.2528583a"
- **Body error line 3:** Raw EdgeSuite error URL: `https://errors.edgesuite.net/18.d3b2f17.1779101661.2528583a`
- **Remainder of page:** Completely blank white space — no footer, no nav, no fallback content
- **Bugs / friction:** The entire visible surface is a CDN-level 403 block. No AA UI rendered at all. The `http://` (non-HTTPS) in the blocked URL string suggests the request may have hit an unencrypted origin path before being denied.
## Recent history

- [[2026-05-17-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-17)
- [[2026-05-15-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-15)

