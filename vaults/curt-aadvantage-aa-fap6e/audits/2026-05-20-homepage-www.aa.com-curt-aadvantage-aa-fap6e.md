---
slug: 2026-05-20-homepage-www.aa.com-curt-aadvantage-aa-fap6e
type: site
date: 2026-05-20
persona: curt-aadvantage-aa-fap6e
score: "1/10"
sender: www.aa.com
subject: Homepage snapshot · www.aa.com · 2026-05-20
tags: [site-journey, score-1, sender/www-aa-com]
---
# Homepage snapshot · www.aa.com · 2026-05-20
**Score:** 1/10 · **Type:** Site journey · **2026-05-20**
## Executive summary

- What kind of brand is this? Right now, it's the kind that locks me out at the door. The page I'm looking at is a full-screen Akamai "Access Denied" error — no AA branding, no navigation, no hero, nothing. For a guy who flies 150K miles a year on this airline, getting a CDN block on the homepage is both infuriating and embarrassing. This is the digital equivalent of the Admirals Club door not scanning your card.

## What's working

- The error message is legible — Times New Roman, black on white, no layout breakage. At least I know exactly what happened.
- The Akamai reference ID (`#18.d3b2f17.1779275100.32c4de7c`) is visible, which means if I were on the phone with IT support I'd have a reference number to hand them.

## What's weak

- **The entire homepage** — there is no homepage. An Executive Platinum member opening aa.com on their phone gets an Akamai 403. This is the single worst possible first impression.
- **No branded error page** — AA doesn't even own this failure. It's a naked Akamai server error page. No AA logo, no "sorry, try again," no fallback CTA, no redirect to the app.
- **No recovery path** — zero links, zero navigation, zero "go here instead." A dead end, full stop.
- **The error URL is exposed** (`errors.edgesuite.net`) — leaks infrastructure details to anyone who notices. Minor, but sloppy.

## Recommendations

- **Build and deploy a branded 403/blocked-region fallback page** — if Akamai fires, it should serve an AA-styled page that says "Having trouble? Try the AA app" with a deep-link to the App Store, not a raw server error.
- **Whitelist crawler / testing IPs in the Akamai config** — if this is a bot-detection false positive (likely, given a headless browser capture), adjust the WAF rules so legitimate mobile user-agent strings aren't blocked.
- **Add a retry/redirect on the error page** — even a JavaScript `setTimeout` redirect back to `aa.com` after 5 seconds would be better than a permanent dead end.
- **Surface the AA app download CTA on any error state** — I'd tap that. The app is actually decent.

## Full review
## 1. Executive Summary

What kind of brand is this? Right now, it's the kind that locks me out at the door. The page I'm looking at is a full-screen Akamai "Access Denied" error — no AA branding, no navigation, no hero, nothing. For a guy who flies 150K miles a year on this airline, getting a CDN block on the homepage is both infuriating and embarrassing. This is the digital equivalent of the Admirals Club door not scanning your card.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to persona: *No hero exists — only an error heading.*
- − Returning-shopper hook visible: *No loyalty CTA, no member recognition, nothing.*
- − Concrete offer above the fold: *None.*
- − Unmistakable primary CTA: *None.*
- − Visual hierarchy clear: *Only one piece of content — the error message.*
- − No render bugs: *The page IS the bug. Akamai 403 block is a render failure.*
- − Demographic signals match persona: *N/A.*
- − Current campaign / season reflected: *N/A.*
- − Loyalty / membership benefits visible: *None.*
- − Offer feels honest: *N/A.*

Score starts at 1 (baseline); zero additional signals counted. The one point is for the page at least loading *something*.

## 3. What's Working

- The error message is legible — Times New Roman, black on white, no layout breakage. At least I know exactly what happened.
- The Akamai reference ID (`#18.d3b2f17.1779275100.32c4de7c`) is visible, which means if I were on the phone with IT support I'd have a reference number to hand them.

## 4. What's Weak

- **The entire homepage** — there is no homepage. An Executive Platinum member opening aa.com on their phone gets an Akamai 403. This is the single worst possible first impression.
- **No branded error page** — AA doesn't even own this failure. It's a naked Akamai server error page. No AA logo, no "sorry, try again," no fallback CTA, no redirect to the app.
- **No recovery path** — zero links, zero navigation, zero "go here instead." A dead end, full stop.
- **The error URL is exposed** (`errors.edgesuite.net`) — leaks infrastructure details to anyone who notices. Minor, but sloppy.

## 5. Recommendations

- **Build and deploy a branded 403/blocked-region fallback page** — if Akamai fires, it should serve an AA-styled page that says "Having trouble? Try the AA app" with a deep-link to the App Store, not a raw server error.
- **Whitelist crawler / testing IPs in the Akamai config** — if this is a bot-detection false positive (likely, given a headless browser capture), adjust the WAF rules so legitimate mobile user-agent strings aren't blocked.
- **Add a retry/redirect on the error page** — even a JavaScript `setTimeout` redirect back to `aa.com` after 5 seconds would be better than a permanent dead end.
- **Surface the AA app download CTA on any error state** — I'd tap that. The app is actually decent.

## 6. Bottom Line

I'm closing this tab and opening the AA app — which I should've done in the first place.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** No image. White background, black serif text only.
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `2`, On-brand `1`
- **Strengths:**
  - The error message is immediately readable — no ambiguity about what happened.
- **Weaknesses:**
  - Zero AA branding, zero recovery path, zero value delivered.
  - "Access Denied" is about as hostile a greeting as you can give a road warrior who just wants to book a flight.

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None
- **Honesty check:** The page is technically honest — it really is denying me access — but there's no explanation of why, no apology, and no alternative. That's not honesty, that's abandonment.

## 9. Engagement Likelihood

- − Hero relates to my focus area: No hero exists.
- − Easy to reach my category: No navigation at all.
- − Eye-catching imagery in my category: No imagery whatsoever.
- − Promo banner I would use: None present.
- − Page renders cleanly: The page rendered a 403 error block. That counts as a hard render failure.
- − Imagery includes someone like me: N/A.
- − Copy register matches mine: The only copy is a server error. Doesn't match any human register.
- − Trust signals visible: Zero — this actually destroys trust.
- − New / hot rail in my category: None.
- − No dark patterns: The page has no patterns at all, dark or otherwise — but getting blocked is itself an unwanted pattern.

**Score:** `1/10` — 1 baseline, zero "+" signals.
**Rationale:** There is nothing to engage with. A 403 error is an immediate bounce trigger; I'm Executive Platinum and the site just told me I don't have permission to exist here.

## 10. Conversion Likelihood

- − CTA in my category: None.
- − Unambiguous CTA copy: None.
- − Active price reduction or member pricing: None.
- − Time-bounded credible deadline: None.
- − Reachable free-shipping threshold: N/A (airline).
- − Specific product page one tap away: None.
- − Sizing / fit info accessible: N/A.
- − Returns / exchanges mentioned: None.
- − Reviews / ratings visible: None.
- − Trust / security signals: None — in fact, the opposite.

**Score:** `1/10` — 1 baseline, zero "+" signals.
**Rationale:** You cannot convert on a page that refuses to load. There is no path to action, no product, no offer, and no trust — just an Akamai error ID on a white screen.

## 11. Evidence

Visible modules in scroll order:

- **"Access Denied" error heading** — large bold serif H1, the only content on the page
- **Error explanation copy** — `You don't have permission to access "http://www.aa.com/" on this server.`
- **Reference ID line** — `Reference #18.d3b2f17.1779275100.32c4de7c`
- **Akamai error URL** — `https://errors.edgesuite.net/18.d3b2f17.1779275100.32c4de7c`
- **Blank white space** — the remaining ~80% of the viewport is empty
- **Bugs / friction / clarity issues visible in screenshot:**
  - Critical: Full-page 403 block served by Akamai CDN, not a branded AA error page
  - Critical: No fallback navigation, no app download CTA, no retry mechanism
  - Minor: Raw infrastructure URL exposed in the error output
## Recent history

- [[2026-05-19-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-19)
- [[2026-05-18-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-18)
- [[2026-05-17-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-17)

