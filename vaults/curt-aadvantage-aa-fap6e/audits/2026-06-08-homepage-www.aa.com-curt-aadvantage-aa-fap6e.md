---
slug: 2026-06-08-homepage-www.aa.com-curt-aadvantage-aa-fap6e
type: site
date: 2026-06-08
persona: curt-aadvantage-aa-fap6e
score: "1/10"
sender: www.aa.com
subject: Homepage snapshot · www.aa.com · 2026-06-08
tags: [site-journey, score-1, sender/www-aa-com]
---
# Homepage snapshot · www.aa.com · 2026-06-08
**Score:** 1/10 · **Type:** Site journey · **2026-06-08**
## Executive summary

- The screenshot captured an Akamai/EdgeSuite "Access Denied" error page — not the actual aa.com homepage. I'm scoring and reviewing exactly what's visible in the image.
- What I'm looking at is a white error page — bold "Access Denied," a permission-denied message, and an Akamai EdgeSuite reference number. There is no airline homepage here, no branding, no navigation, no offers. This is a bot-blocker or CDN firewall gate, and it fired before aa.com even loaded. As someone who's been Executive Platinum long enough to remember paper boarding passes, this is a bad first impression regardless of who's to blame.

## What's working

- Nothing. The page loaded and rendered the error text legibly — that's the floor. I can read the reference number if I need to call someone, which is cold comfort.

## What's weak

- **The block itself** — aa.com's Akamai WAF flagged my request and returned a 403 before any content was served. As a road warrior opening the site to check flight status or burn miles, I hit a wall immediately.
- **Zero recovery path** — There's no "try again," no link back to a mobile-friendly entry point, no customer service number, no suggestion to log in via the app instead. Dead end.
- **No branding whatsoever** — Not an AA-branded error page. It's a raw Akamai EdgeSuite default. The brand didn't even bother to skin this failure state.
- **Reference ID dumped on screen with no explanation** — The string `18.103b2f17.1780913512.40804e2` means nothing to a traveler. It would matter to an IT escalation, not to me standing in an airport trying to check my upgrade.

## Recommendations

- **Brand the error page** — Skin the 403 fallback with AA colors, the AA logo, and a single CTA: "Open the American Airlines app" or "Call 1-800-433-7300." Takes one sprint to implement and immediately recovers stranded users.
- **Add a retry link** — A simple "Try again" or "Go to aa.com" button would recover a large percentage of transient bot-score false positives without requiring IT intervention.
- **Tune the WAF bot scoring for mobile user-agents** — If the crawl/screenshot pipeline is getting blocked, real mobile users on carrier networks with unusual headers are getting blocked too. Audit the EdgeSuite rules to reduce false-positive 403s on legitimate mobile traffic.
- **Instrument and alert on 403 rate by user type** — Executive Platinum members hitting a 403 on the homepage is a loyalty problem, not just a traffic problem. Segment error rates by known logged-in vs. anonymous and set an alert threshold.

## Full review
The screenshot captured an Akamai/EdgeSuite "Access Denied" error page — not the actual aa.com homepage. I'm scoring and reviewing exactly what's visible in the image.

---

## 1. Executive Summary

What I'm looking at is a white error page — bold "Access Denied," a permission-denied message, and an Akamai EdgeSuite reference number. There is no airline homepage here, no branding, no navigation, no offers. This is a bot-blocker or CDN firewall gate, and it fired before aa.com even loaded. As someone who's been Executive Platinum long enough to remember paper boarding passes, this is a bad first impression regardless of who's to blame.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy/imagery speaks to my persona: not applicable — there is no hero, only an error message
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy clear: the error headline is the only hierarchy — unintentional
- − No render bugs: the page IS a render failure — an Access Denied block is a hard blocker
- − Demographic signals match persona: none
- − Current campaign/season: none
- − Loyalty/membership benefits: none
- − Offer feels honest: not applicable

Score starts at 1 and zero rubric criteria are met. Score: **1/10**.

- Sub-bullet: No signals scored. The sole visible content is `Access Denied`, a one-line explanation, and an Akamai reference ID. Every rubric criterion is absent. The baseline 1 stands alone.

## 3. What's Working

- Nothing. The page loaded and rendered the error text legibly — that's the floor. I can read the reference number if I need to call someone, which is cold comfort.

## 4. What's Weak

- **The block itself** — aa.com's Akamai WAF flagged my request and returned a 403 before any content was served. As a road warrior opening the site to check flight status or burn miles, I hit a wall immediately.
- **Zero recovery path** — There's no "try again," no link back to a mobile-friendly entry point, no customer service number, no suggestion to log in via the app instead. Dead end.
- **No branding whatsoever** — Not an AA-branded error page. It's a raw Akamai EdgeSuite default. The brand didn't even bother to skin this failure state.
- **Reference ID dumped on screen with no explanation** — The string `18.103b2f17.1780913512.40804e2` means nothing to a traveler. It would matter to an IT escalation, not to me standing in an airport trying to check my upgrade.

## 5. Recommendations

- **Brand the error page** — Skin the 403 fallback with AA colors, the AA logo, and a single CTA: "Open the American Airlines app" or "Call 1-800-433-7300." Takes one sprint to implement and immediately recovers stranded users.
- **Add a retry link** — A simple "Try again" or "Go to aa.com" button would recover a large percentage of transient bot-score false positives without requiring IT intervention.
- **Tune the WAF bot scoring for mobile user-agents** — If the crawl/screenshot pipeline is getting blocked, real mobile users on carrier networks with unusual headers are getting blocked too. Audit the EdgeSuite rules to reduce false-positive 403s on legitimate mobile traffic.
- **Instrument and alert on 403 rate by user type** — Executive Platinum members hitting a 403 on the homepage is a loyalty problem, not just a traffic problem. Segment error rates by known logged-in vs. anonymous and set an alert threshold.

## 6. Bottom Line

I'd close this tab, open the AA app, and send a snarky tweet about AA's IT — which, honestly, tracks.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background only
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `2`, On-brand `1`
- **Strengths:**
  - The error text is at least legible and unambiguous — I know something went wrong
- **Weaknesses:**
  - Zero American Airlines branding; this could be any site's CDN error
  - No actionable next step — the reference number is useless to an end user

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The error message is technically honest — I do not have permission to access this URL via this request — but it's unbranded, unexplained, and offers no escalation path. That's not manipulation, it's just abandonment.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists — hard stop
- − Easy to reach my category: no navigation of any kind
- − Eye-catching imagery in my category: white page, bold black text, nothing
- − Promo banner I would use: none
- − Page renders cleanly: technically the error rendered cleanly, but a 403 is a failure state by definition
- − Imagery includes someone like me: none
- − Copy register matches mine: the Akamai boilerplate is terse and technical, not traveler-focused
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the dead-end error with no recovery path is its own kind of dark pattern — forced exit

**Score:** `1/10` — 1 baseline, zero criteria met.
- **Rationale:** The page is a CDN block, not a homepage. There is nothing to engage with. I would bounce to the app in under five seconds.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: the only "action" text is the Access Denied headline
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: not applicable
- − Specific product page one tap away: none
- − Sizing / fit info accessible: not applicable
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: ironically, the only "security signal" is that aa.com blocked me

**Score:** `1/10` — 1 baseline, zero criteria met.
- **Rationale:** There is nothing to convert on. A 403 error page has no offer, no CTA, and no path forward — conversion rate is effectively zero.

## 11. Evidence

- **Hero / primary value prop:** "Access Denied" — bold H1, rendered in default browser serif font, no styling
- **Body copy:** "You don't have permission to access 'http://www.aa.com/' on this server."
- **Reference block:** `Reference #18.103b2f17.1780913512.40804e2` — Akamai error ID, plain text
- **Attribution URL:** `https://errors.edgesuite.net/18.103b2f17.1780913512.40804e2` — EdgeSuite error lookup link, unlinked (plain text, not a hyperlink)
- **Featured categories:** none
- **Promotional banners or strips:** none
- **Loyalty / rewards section:** none
- **Editorial / lifestyle modules:** none
- **New-arrivals or best-seller rails:** none
- **Footer credibility:** none
- **Bugs / friction / clarity issues visible in screenshot:** The entire viewport is a fatal render failure — aa.com's Akamai CDN returned a 403 Access Denied before any page content was served. No AA branding, no recovery path, no visible navigation. This is a broken experience at the network layer.
## Recent history

- [[2026-06-01-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-06-01)
- [[2026-05-23-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-23)
- [[2026-05-22-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-22)

