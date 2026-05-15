---
slug: 2026-05-15-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-05-15
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-05-15
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-05-15
**Score:** 1/10 · **Type:** Site journey · **2026-05-15**
## Executive summary

- I opened Marriott.com and got an Akamai **"Access Denied"** error — the site blocked the request before serving any content. As a Titanium member who lives in this app, this is an unacceptable first impression. There is no homepage to review; there is only a blank white error screen with a reference number and an edgesuite.net URL.

## What's working

- The error text is at least readable — white background, black serif, no illegible contrast issues.

## What's weak

- **The entire homepage is absent.** Marriott's CDN/WAF (Akamai EdgeSuite) returned a 403 before a single pixel of brand content loaded.
- **No fallback or soft redirect** — a member who hits this URL gets a raw server error with a reference hash instead of a graceful "try again" or app-store redirect.
- **The error page is unbranded** — no Marriott logo, no nav, no "sign in to continue." I have no way to recover as a user.
- **Reference string `18.2ea7cb17.1778869910.33513b6d`** is meaningless to a consumer — pure back-end exposure.

## Recommendations

- **Implement a branded 403/maintenance page** — at minimum a Marriott logo, a one-line explanation ("We're having trouble loading this page"), and a link to the app or a retry button. This is shippable in a day.
- **Route mobile/headless traffic to a soft fallback** instead of a hard Akamai block — the bot-detection rules are catching legitimate users.
- **Surface the Bonvoy app download CTA** on any error state — if the site is down, at least capture the session intent.
- **Add a member sign-in deep-link** to the error page so Titanium members can drop straight into their account dashboard instead of a dead end.

## Full review
## 1. Executive Summary

I opened Marriott.com and got an Akamai **"Access Denied"** error — the site blocked the request before serving any content. As a Titanium member who lives in this app, this is an unacceptable first impression. There is no homepage to review; there is only a blank white error screen with a reference number and an edgesuite.net URL.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery speaks to my persona: no hero, no imagery
- − Returning-shopper hook visible: no loyalty CTA, no member balance
- − Concrete offer visible above the fold: none
- − Primary CTA visible: none
- − Visual hierarchy clear: no hierarchy — raw error text only
- − No render bugs: the page IS a render failure (Akamai 403)
- − Demographic signals match my persona: none
- − Page reflects current campaign/season: none
- − Loyalty/membership benefits visible: none
- − Offer feels honest: N/A — no offer exists

Score starts at 1; zero additional rubric criteria are satisfied.

## 3. What's Working

- The error text is at least readable — white background, black serif, no illegible contrast issues.

## 4. What's Weak

- **The entire homepage is absent.** Marriott's CDN/WAF (Akamai EdgeSuite) returned a 403 before a single pixel of brand content loaded.
- **No fallback or soft redirect** — a member who hits this URL gets a raw server error with a reference hash instead of a graceful "try again" or app-store redirect.
- **The error page is unbranded** — no Marriott logo, no nav, no "sign in to continue." I have no way to recover as a user.
- **Reference string `18.2ea7cb17.1778869910.33513b6d`** is meaningless to a consumer — pure back-end exposure.

## 5. Recommendations

- **Implement a branded 403/maintenance page** — at minimum a Marriott logo, a one-line explanation ("We're having trouble loading this page"), and a link to the app or a retry button. This is shippable in a day.
- **Route mobile/headless traffic to a soft fallback** instead of a hard Akamai block — the bot-detection rules are catching legitimate users.
- **Surface the Bonvoy app download CTA** on any error state — if the site is down, at least capture the session intent.
- **Add a member sign-in deep-link** to the error page so Titanium members can drop straight into their account dashboard instead of a dead end.

## 6. Bottom Line

I'm bouncing instantly — there is literally nothing to look at, and as someone who books through this site multiple times a month, this kind of invisible failure is the fastest way to push me to a competitor OTA.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white background
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - Text is technically legible (high contrast, no overlap)
- **Weaknesses:**
  - This is an Akamai edge error, not a brand page — zero Marriott identity present
  - No recovery path whatsoever; the only actionable item is a raw error URL

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — my Titanium status, point balance, and free-night certs are invisible
- **Honesty check:** The error exposes an internal reference ID and a third-party CDN domain (`errors.edgesuite.net`) to end users, which is sloppy but not manipulative

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists
- − Easy to reach my category: no navigation rendered
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — Akamai 403 is a complete render failure
- − Imagery includes someone like me: none
- − Copy register matches mine: "Access Denied" is not a copy register, it's an error string
- − Trust signals visible: none
- − New/hot rail in my category: none
- − No dark patterns: technically no dark patterns, but a raw CDN block is its own kind of hostile UX

**Score:** `1/10` — 1 (base) + 0 positive signals.
**Rationale:** Every engagement criterion fails because the page never loaded; the only "signal" is that the text is readable, which doesn't satisfy any rubric criterion.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: N/A (hotel, not retail — but no rate or offer of any kind is shown)
- − Specific property page one tap away: none
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — 1 (base) + 0 positive signals.
**Rationale:** There is no content to convert on. The page blocked all rendering at the CDN layer and surfaced nothing Bonvoy-relevant — no search bar, no "Book Now," no member sign-in.

## 11. Evidence

Modules visible in scroll order:

- **Error heading:** `Access Denied` — H1, bold, serif font, top-left
- **Error body line 1:** `You don't have permission to access "http://www.marriott.com/default.mi" on this server.`
- **Error body line 2:** `Reference #18.2ea7cb17.1778869910.33513b6d`
- **Error body line 3:** `https://errors.edgesuite.net/18.2ea7cb17.1778869910.33513b6d`
- **Remainder of viewport:** Completely blank white — no footer, no nav, no imagery, no scripts rendered
- **Visible bugs / friction:**
  - Full CDN 403 block — no homepage content served
  - No Marriott branding on the error page
  - No retry, redirect, or recovery CTA
  - Internal reference hash and third-party CDN URL exposed to consumers
