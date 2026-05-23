---
slug: 2026-05-23-homepage-www.aa.com-curt-aadvantage-aa-fap6e
type: site
date: 2026-05-23
persona: curt-aadvantage-aa-fap6e
score: "1/10"
sender: www.aa.com
subject: Homepage snapshot · www.aa.com · 2026-05-23
tags: [site-journey, score-1, sender/www-aa-com]
---
# Homepage snapshot · www.aa.com · 2026-05-23
**Score:** 1/10 · **Type:** Site journey · **2026-05-23**
## Executive summary

- I opened aa.com on my phone and got an Akamai edge block — a white screen with "Access Denied" in browser-default Times New Roman, a cryptic reference number, and an errors.edgesuite.net URL. This is not a homepage; it's a CDN firewall rejection. As someone who has tolerated AA's IT department through three mergers and two app rewrites, I have zero surprise — but also zero patience.

## What's working

- The error message is technically legible — at least I know the site blocked me rather than hanging forever
- The Akamai reference number (`#18.103b2f17.1779533910.19845bea`) gives me something to paste into a support ticket, which is more than AA's app usually gives me

## What's weak

- The entire homepage did not load — I see "Access Denied" where my flight search widget should be
- Zero brand presence: no AA logo, no eagle, no Admirals Club callout, nothing
- No fallback or retry CTA — just a dead end with a raw error URL
- This is the first thing a road warrior sees when Akamai blocks the scrape pipeline; for a real customer on a corporate VPN or a hotel Wi-Fi, this is an instant bounce with no recovery path
- Browser-default serif font on a white void is about as far from "premium airline" as you can get

## Recommendations

- AA needs a human-readable error page with the brand header, a "Try Again" CTA, and a link to the app — this blank access-denied screen loses real bookings
- Add a VPN/firewall advisory message so travelers on corporate or hotel networks understand why they're blocked and have a path forward
- Route bot-detection blocks to a CAPTCHA challenge rather than a hard 403 — even United does this better
- Fix the Akamai geo/IP ruleset to stop blocking legitimate mobile User-Agents that look like crawlers — this is a revenue leak

## Full review
## 1. Executive Summary

I opened aa.com on my phone and got an Akamai edge block — a white screen with "Access Denied" in browser-default Times New Roman, a cryptic reference number, and an errors.edgesuite.net URL. This is not a homepage; it's a CDN firewall rejection. As someone who has tolerated AA's IT department through three mergers and two app rewrites, I have zero surprise — but also zero patience.

## 2. Business Impact Score (1-10)

**1/10**

- − hero copy matches persona: no hero, no copy, just a system error
- − returning-shopper hook: none
- − concrete offer above fold: none
- − primary CTA above fold: none
- − visual hierarchy: none (plain browser-default HTML)
- − no render bugs: the page IS a render failure
- − demographic signals match: irrelevant
- − current campaign/season: none
- − loyalty/membership benefits: none
- − honest offer: not applicable — there is no offer

Only the baseline point (start at 1) applies. Nothing else is true.

## 3. What's Working

- The error message is technically legible — at least I know the site blocked me rather than hanging forever
- The Akamai reference number (`#18.103b2f17.1779533910.19845bea`) gives me something to paste into a support ticket, which is more than AA's app usually gives me

## 4. What's Weak

- The entire homepage did not load — I see "Access Denied" where my flight search widget should be
- Zero brand presence: no AA logo, no eagle, no Admirals Club callout, nothing
- No fallback or retry CTA — just a dead end with a raw error URL
- This is the first thing a road warrior sees when Akamai blocks the scrape pipeline; for a real customer on a corporate VPN or a hotel Wi-Fi, this is an instant bounce with no recovery path
- Browser-default serif font on a white void is about as far from "premium airline" as you can get

## 5. Recommendations

- AA needs a human-readable error page with the brand header, a "Try Again" CTA, and a link to the app — this blank access-denied screen loses real bookings
- Add a VPN/firewall advisory message so travelers on corporate or hotel networks understand why they're blocked and have a path forward
- Route bot-detection blocks to a CAPTCHA challenge rather than a hard 403 — even United does this better
- Fix the Akamai geo/IP ruleset to stop blocking legitimate mobile User-Agents that look like crawlers — this is a revenue leak

## 6. Bottom Line

I'm opening the app instead — which, given AA's track record, is saying something.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background only
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error is at least immediately legible; no spinner of death
- **Weaknesses:**
  - This is a CDN firewall rejection page, not a homepage — zero brand, zero content, zero function
  - No recovery path whatsoever

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The only text visible is a server error and an Akamai edge URL — not manipulative, just completely broken. For an Executive Platinum member who pays the Citi AAdvantage Executive annual fee specifically to get lounge access, landing on this screen is an insult I've just come to expect.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists — it's an error page
- − Easy to reach my category: no navigation rendered
- − Eye-catching imagery in my category: none
- − Promo banner I would use: none
- − Page renders cleanly: hard no — this IS the render failure
- − Imagery includes someone like me: none
- − Copy register matches mine: "Access Denied" is direct, I'll give it that, but not in the way they intended
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns — there's nothing here to be dark

**Score:** `1/10` — only the baseline; zero criteria met.
- **Rationale:** The page failed to load. Engagement likelihood is zero because there is nothing to engage with. I closed it and opened the app.

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
- − Trust / security signals: none — the only URL visible is `errors.edgesuite.net`, which is the opposite of trust

**Score:** `1/10` — baseline only; no criteria met.
- **Rationale:** Nothing pulled me toward action because there was no action to take. The Akamai block is a full conversion kill — any person who doesn't already know to try the app or clear their VPN is gone.

## 11. Evidence

Modules visible on the homepage (in scroll order):

- **"Access Denied" h1** — browser-default bold serif, top-left, no styling
- **Error body copy** — "You don't have permission to access 'http://www.aa.com/' on this server."
- **Reference number** — `#18.103b2f17.1779533910.19845bea` — raw, no explanation
- **Akamai error URL** — `https://errors.edgesuite.net/18.103b2f17.1779533910.19845bea` — no link, no CTA
- **Remainder of viewport** — empty white space for the entire scroll length
- **Bugs / friction visible:** The entire page is the bug. AA's CDN (Akamai EdgeSuite) returned a 403 that completely replaced the homepage. No AA chrome, no logo, no fallback content, no retry mechanism. A paying Executive Platinum customer on a new IP would see exactly this.
## Recent history

- [[2026-05-22-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-22)
- [[2026-05-21-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-21)
- [[2026-05-20-homepage-www.aa.com-curt-aadvantage-aa-fap6e]] — 1/10 (2026-05-20)

