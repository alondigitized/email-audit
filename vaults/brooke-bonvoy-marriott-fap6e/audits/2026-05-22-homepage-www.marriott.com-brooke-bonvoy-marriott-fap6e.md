---
slug: 2026-05-22-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-05-22
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-05-22
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-05-22
**Score:** 1/10 · **Type:** Site journey · **2026-05-22**
## Executive summary

- I opened Marriott.com on my phone and got a full-screen **"Access Denied"** error — not a homepage, not a fallback, not even a sorry-we're-down page. Just a bare Akamai EdgeSuite block page with a reference number. As a Titanium member who's about to redeem a 50K cert before it expires, this is a hard stop. Marriott is a $22B loyalty ecosystem and their homepage is serving me an access control rejection with zero recovery path.

## What's working

- Nothing is working. The page delivered an Akamai CDN access denial. There is no content, no navigation, no brand presence to evaluate positively.

## What's weak

- **The entire page** — what loaded is `"Access Denied / You don't have permission to access 'http://www.marriott.com/default.mi' on this server."` That's the whole viewport.
- **No fallback UX** — there's no "try again," no redirect to a regional domain, no brand logo, no way back in. A Titanium member hitting this mid-redemption-session would just bounce to a competitor.
- **HTTP instead of HTTPS** — the blocked URL shown is `http://www.marriott.com` (no S), which suggests a redirect or scrape configuration sent an unencrypted request that Akamai's WAF blocked. That's an infrastructure-level embarrassment.
- **Akamai branding bleeds through** — the error URL (`errors.edgesuite.net`) is fully visible, exposing CDN vendor details to end users. Not a good look for a luxury hospitality brand.
- **Zero Bonvoy presence** — I'm a Titanium member. My account, my points balance, my suite night awards — none of it matters because I never got past the gate.

## Recommendations

- **Fix the access control rule immediately** — an Akamai WAF or geo/bot rule is blocking the homepage. Marriott should audit their EdgeSuite configuration and whitelist legitimate user-agents/IPs hitting the default.mi entry point.
- **Build a branded error fallback** — if a block must happen, serve a Marriott-branded 403/maintenance page with the Bonvoy logo, a "Try again" button, and a customer care number — not a raw Akamai default.
- **Force HTTPS at the edge** — the blocked URL shown in the error is `http://` not `https://`. Fix the redirect chain so no traffic hits the WAF on a plain HTTP URL.
- **Add a status page link** — Marriott.com should have a status.marriott.com that a blocked user can be directed to, so Titanium members aren't left guessing whether it's their connection or a site-wide outage.

## Full review
---

## 1. Executive Summary

I opened Marriott.com on my phone and got a full-screen **"Access Denied"** error — not a homepage, not a fallback, not even a sorry-we're-down page. Just a bare Akamai EdgeSuite block page with a reference number. As a Titanium member who's about to redeem a 50K cert before it expires, this is a hard stop. Marriott is a $22B loyalty ecosystem and their homepage is serving me an access control rejection with zero recovery path.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to persona: no hero exists — blocked
- − Returning-shopper hook visible: no loyalty CTA, no member balance, nothing
- − Concrete offer above fold: zero
- − Unmistakable primary CTA: zero
- − Clear visual hierarchy: a big bold "Access Denied" is not hierarchy, it's a failure state
- − No render bugs: this IS a render failure — Akamai block page, broken images, entire page missing
- − Demographic signals match persona: irrelevant, nothing rendered
- − Current campaign / season reflected: no
- − Loyalty / membership benefits visible: no
- − Offer feels honest: there is no offer to evaluate

  - Only criterion I start with is the base score of 1. No additional rubric signals are TRUE.

## 3. What's Working

- Nothing is working. The page delivered an Akamai CDN access denial. There is no content, no navigation, no brand presence to evaluate positively.

## 4. What's Weak

- **The entire page** — what loaded is `"Access Denied / You don't have permission to access 'http://www.marriott.com/default.mi' on this server."` That's the whole viewport.
- **No fallback UX** — there's no "try again," no redirect to a regional domain, no brand logo, no way back in. A Titanium member hitting this mid-redemption-session would just bounce to a competitor.
- **HTTP instead of HTTPS** — the blocked URL shown is `http://www.marriott.com` (no S), which suggests a redirect or scrape configuration sent an unencrypted request that Akamai's WAF blocked. That's an infrastructure-level embarrassment.
- **Akamai branding bleeds through** — the error URL (`errors.edgesuite.net`) is fully visible, exposing CDN vendor details to end users. Not a good look for a luxury hospitality brand.
- **Zero Bonvoy presence** — I'm a Titanium member. My account, my points balance, my suite night awards — none of it matters because I never got past the gate.

## 5. Recommendations

- **Fix the access control rule immediately** — an Akamai WAF or geo/bot rule is blocking the homepage. Marriott should audit their EdgeSuite configuration and whitelist legitimate user-agents/IPs hitting the default.mi entry point.
- **Build a branded error fallback** — if a block must happen, serve a Marriott-branded 403/maintenance page with the Bonvoy logo, a "Try again" button, and a customer care number — not a raw Akamai default.
- **Force HTTPS at the edge** — the blocked URL shown in the error is `http://` not `https://`. Fix the redirect chain so no traffic hits the WAF on a plain HTTP URL.
- **Add a status page link** — Marriott.com should have a status.marriott.com that a blocked user can be directed to, so Titanium members aren't left guessing whether it's their connection or a site-wide outage.

## 6. Bottom Line

I'm closing this tab and opening the app — I am not sitting here staring at an Akamai error page when I have a Ritz-Carlton redemption to book.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white page, no imagery loaded
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is at least legible (large, black, high contrast)
- **Weaknesses:**
  - This is a CDN block page, not a homepage — zero brand presence, zero navigation, zero recovery path
  - The Akamai reference URL (`errors.edgesuite.net/18.2ba7cb17.1779445904.4b548008`) is raw and exposed, which reads as unprofessional for a luxury brand

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — Bonvoy is completely absent from this screen
- **Honesty check:** The only text on the page is a denial message — nothing manipulative, but also nothing at all. The reference number suggests bot-detection or geo-blocking misfired on a real user request.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero loaded whatsoever
- − Easy to reach my category: no navigation exists
- − Eye-catching imagery in my category: zero images loaded
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — this is a CDN error page, the most unclean render possible
- − Imagery includes someone like me: no imagery at all
- − Copy register matches mine: "Access Denied" does not match any reading register
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns, but an access denial with no recovery path is its own kind of friction

**Score:** `1/10` — no "+" signals, base score only.
**Rationale:** Every engagement criterion requires content that did not load. This is a total failure-to-serve scenario; there is nothing to engage with.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: not applicable — hotel bookings, but moot, nothing loaded
- − Specific product page one tap away: none
- − Sizing / fit info accessible: not applicable
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — the exposed `http://` URL in the error actually undermines trust

**Score:** `1/10` — base score only.
**Rationale:** There is no path to conversion because there is no page — a WAF block intercepted the request before any Marriott content was served, making it literally impossible to book, sign in, or interact with Bonvoy.

## 11. Evidence

Visible modules in scroll order (entire viewport):

- **Block page header:** Large bold "Access Denied" — full-width, top of page
- **Error body copy:** `"You don't have permission to access 'http://www.marriott.com/default.mi' on this server."`
- **Reference number:** `Reference #18.2ba7cb17.1779445904.4b548008`
- **CDN error URL:** `https://errors.edgesuite.net/18.2ba7cb17.1779445904.4b548008` — Akamai EdgeSuite vendor URL exposed in plain text
- **Remainder of viewport:** Completely blank white — no images, no nav, no footer, no Marriott branding of any kind

**Bugs / friction visible in screenshot:**
- Entire homepage failed to load — Akamai WAF or EdgeSuite rule blocked the request
- HTTP (not HTTPS) URL shown in the error message suggests a redirect misconfiguration upstream
- No branded error page — Marriott is serving raw CDN vendor default error output to end users
- Zero recovery affordance — no button, no link, no phone number, no retry mechanism
## Recent history

- [[2026-05-21-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-21)
- [[2026-05-20-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-20)
- [[2026-05-19-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-19)

