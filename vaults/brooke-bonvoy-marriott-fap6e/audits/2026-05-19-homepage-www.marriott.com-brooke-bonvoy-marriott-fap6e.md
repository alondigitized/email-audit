---
slug: 2026-05-19-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-05-19
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-05-19
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-05-19
**Score:** 1/10 · **Type:** Site journey · **2026-05-19**
## Executive summary

- The page never loaded — what I'm looking at is a bare "Access Denied" error from Akamai EdgeSuite, not the Marriott homepage. There is no hero, no nav, no booking widget, no Bonvoy loyalty hook — literally nothing but a reference number on a white screen. This isn't a brand experience; it's a CDN wall.

## What's working

- Nothing. The page did not load. There is no content to evaluate positively.

## What's weak

- **Hard CDN block ("Access Denied")** — Akamai rejected the request entirely; no homepage content was served. This is a complete failure at the entry point.
- **No fallback / graceful error page** — Marriott served a raw EdgeSuite error page with no branding, no redirect, and no helpful messaging. Not even a "try again" link.
- **White void below the error** — the remaining ~2000px is blank white. No recovery content whatsoever.
- **Reference URL exposed** — `https://errors.edgesuite.net/18.2ba7cb17.1779186633.2b775379` is a raw debugging artifact visible to real users. Terrible look for a luxury hospitality brand.

## Recommendations

- **Fix the CDN block immediately** — the Akamai rule or WAF policy blocking `http://www.marriott.com/default.mi` is killing organic traffic; this is a P0 incident, not a UX tweak.
- **Build a branded error page** — even when the CDN must block, serve a Marriott-styled 403 with the logo, a "Visit Marriott.com" button, and a support contact, not a raw EdgeSuite dump.
- **Add an HTTP→HTTPS redirect upstream of the WAF** — the error URL references `http://` (not `https://`), suggesting the block may be triggered by a plain-HTTP request hitting a rule that expects secure traffic; a simple redirect would bypass this for most users.
- **Monitor for Bonvoy member impact** — if this block is geo- or session-triggered, Titanium/Ambassador members hitting it during a booking window is a churn risk; add synthetic monitoring on the homepage with loyalty-member session cookies.

## Full review
## 1. Executive Summary

The page never loaded — what I'm looking at is a bare "Access Denied" error from Akamai EdgeSuite, not the Marriott homepage. There is no hero, no nav, no booking widget, no Bonvoy loyalty hook — literally nothing but a reference number on a white screen. This isn't a brand experience; it's a CDN wall.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy targets my persona: no hero exists
- − Returning-shopper hook visible: no loyalty/member CTA
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: none
- − No render bugs: **FAIL** — the entire page is a hard error ("Access Denied" + Akamai reference #18.2ba7cb17.1779186633.2b775379)
- − Demographic signals match: n/a
- − Current campaign / season visible: none
- − Loyalty / membership benefits visible: none
- − Honest offer: n/a

Score: 1 (the baseline — zero rubric signals present; the only "point" is that the page technically rendered text).

## 3. What's Working

- Nothing. The page did not load. There is no content to evaluate positively.

## 4. What's Weak

- **Hard CDN block ("Access Denied")** — Akamai rejected the request entirely; no homepage content was served. This is a complete failure at the entry point.
- **No fallback / graceful error page** — Marriott served a raw EdgeSuite error page with no branding, no redirect, and no helpful messaging. Not even a "try again" link.
- **White void below the error** — the remaining ~2000px is blank white. No recovery content whatsoever.
- **Reference URL exposed** — `https://errors.edgesuite.net/18.2ba7cb17.1779186633.2b775379` is a raw debugging artifact visible to real users. Terrible look for a luxury hospitality brand.

## 5. Recommendations

- **Fix the CDN block immediately** — the Akamai rule or WAF policy blocking `http://www.marriott.com/default.mi` is killing organic traffic; this is a P0 incident, not a UX tweak.
- **Build a branded error page** — even when the CDN must block, serve a Marriott-styled 403 with the logo, a "Visit Marriott.com" button, and a support contact, not a raw EdgeSuite dump.
- **Add an HTTP→HTTPS redirect upstream of the WAF** — the error URL references `http://` (not `https://`), suggesting the block may be triggered by a plain-HTTP request hitting a rule that expects secure traffic; a simple redirect would bypass this for most users.
- **Monitor for Bonvoy member impact** — if this block is geo- or session-triggered, Titanium/Ambassador members hitting it during a booking window is a churn risk; add synthetic monitoring on the homepage with loyalty-member session cookies.

## 6. Bottom Line

I closed the tab in about two seconds — you cannot book a room, check your Bonvoy balance, or do anything useful when the site won't even load.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white page
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is at least legible (no broken font rendering)
- **Weaknesses:**
  - Zero brand presence — no Marriott logo, no Bonvoy mark, nothing
  - The "hero" is a CDN error string that belongs in a server log, not a customer-facing page

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — my Titanium status, my 50K free-night certs, my points balance — all invisible
- **Honesty check:** The only text on the page is a denial message and a raw debugging URL. It's not manipulative, but it is deeply unhelpful and completely un-branded.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero — CDN error page
- − Easy to reach my category: no navigation rendered
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: **hard no** — full "Access Denied" block
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: error copy is system-generated, not brand voice
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically yes, but only because there's nothing here at all

**Score:** `1/10` — only the "start at 1" baseline; every single engagement criterion failed.

- **Rationale:** When the page doesn't load, engagement is zero by definition. I have no reason to scroll, tap, or interact with a blank error screen.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: n/a (hospitality, not retail — but no rate or fee info either)
- − Specific product page one tap away: none
- − Sizing / fit info accessible: n/a
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — zero conversion signals present.

- **Rationale:** A blocked CDN response cannot convert anyone. The booking funnel never starts.

## 11. Evidence

Visible modules on the page (in scroll order):

- **Hard error header:** `Access Denied` — bold, ~32px, top-left, no Marriott branding
- **Error body copy:** "You don't have permission to access 'http://www.marriott.com/default.mi' on this server."
- **Reference number:** `Reference #18.2ba7cb17.1779186633.2b775379`
- **Raw EdgeSuite error URL:** `https://errors.edgesuite.net/18.2ba7cb17.1779186633.2b775379`
- **Blank white space:** occupies the remaining ~90% of the viewport — no content, no nav, no footer
- **Bugs / friction:** The entire page IS the bug. Akamai/EdgeSuite blocked the request before any Marriott content was served. No homepage modules, no Bonvoy sign-in, no booking widget, no hero — nothing.
## Recent history

- [[2026-05-18-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-18)
- [[2026-05-17-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-17)
- [[2026-05-15-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-15)

