---
slug: 2026-07-20-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-07-20
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-07-20
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-07-20
**Score:** 1/10 · **Type:** Site journey · **2026-07-20**
## Executive summary

- I opened Marriott.com on my phone and got slapped with an **Access Denied** wall — Akamai/Edgesuite blocked the request entirely, serving a raw error page instead of the homepage. There is no brand, no hero, no booking engine, no Bonvoy hook — nothing. This is a complete failed load, full stop.

## What's working

- Nothing. The only thing rendering correctly is the error text itself, which is at least legible.

## What's weak

- **The entire page failed to load** — Akamai's edge CDN blocked the request with a 403-equivalent "Access Denied" from `errors.edgesuite.net`, serving a bare HTML error page with no Marriott branding, no retry mechanism, no fallback.
- **No graceful error handling** — a brand with Marriott's resources should serve a branded 403/maintenance page, not a raw CDN vendor error. This looks like a bot/WAF block, and even if I'm a real Titanium member, I have zero recourse from this screen.
- **No sign-in prompt or Bonvoy redirect** — if the WAF flagged me as suspicious, at minimum a "sign in to continue" CTA would let me authenticate out of it. Instead I'm dead-ended.
- **Reference number is exposed but useless** — `Reference #18.12a7cb17.1784541720.560e28fd` is shown but there's no support link, no phone number, no "back to home" button. Customer service dead end.

## Recommendations

- **Implement a branded fallback error page** — when Akamai blocks a request, the response should still render with Marriott logo, a "something went wrong" message, and a "Try again" CTA plus the Bonvoy app deep link. Raw vendor error pages are brand-damaging.
- **Add a WAF bypass path for authenticated Bonvoy members** — Titanium/Ambassador members signing in via cookie or token should be exempted from aggressive bot-detection rules that trip on mobile UA strings.
- **Surface a support contact on the error page** — at minimum, the 1-800 Marriott number or a "Chat with us" link so a blocked guest can recover rather than abandon.
- **Test the mobile user-agent against WAF rules in staging** — this kind of block on a plain mobile browser load suggests WAF rules are misconfigured or overly aggressive; a weekly canary test from a clean mobile session would catch it before guests do.

## Full review
## 1. Executive Summary

I opened Marriott.com on my phone and got slapped with an **Access Denied** wall — Akamai/Edgesuite blocked the request entirely, serving a raw error page instead of the homepage. There is no brand, no hero, no booking engine, no Bonvoy hook — nothing. This is a complete failed load, full stop.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery speaks to my persona: no homepage loaded
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy clear: n/a — only an error message
- − No render bugs: FAIL — the entire page is a CDN block error
- − Demographic signals match persona: none
- − Reflects current campaign/season: none
- − Loyalty/membership benefits visible: none
- − Offer feels honest: n/a

Score starts at 1, zero additional criteria met. **1/10**.

## 3. What's Working

- Nothing. The only thing rendering correctly is the error text itself, which is at least legible.

## 4. What's Weak

- **The entire page failed to load** — Akamai's edge CDN blocked the request with a 403-equivalent "Access Denied" from `errors.edgesuite.net`, serving a bare HTML error page with no Marriott branding, no retry mechanism, no fallback.
- **No graceful error handling** — a brand with Marriott's resources should serve a branded 403/maintenance page, not a raw CDN vendor error. This looks like a bot/WAF block, and even if I'm a real Titanium member, I have zero recourse from this screen.
- **No sign-in prompt or Bonvoy redirect** — if the WAF flagged me as suspicious, at minimum a "sign in to continue" CTA would let me authenticate out of it. Instead I'm dead-ended.
- **Reference number is exposed but useless** — `Reference #18.12a7cb17.1784541720.560e28fd` is shown but there's no support link, no phone number, no "back to home" button. Customer service dead end.

## 5. Recommendations

- **Implement a branded fallback error page** — when Akamai blocks a request, the response should still render with Marriott logo, a "something went wrong" message, and a "Try again" CTA plus the Bonvoy app deep link. Raw vendor error pages are brand-damaging.
- **Add a WAF bypass path for authenticated Bonvoy members** — Titanium/Ambassador members signing in via cookie or token should be exempted from aggressive bot-detection rules that trip on mobile UA strings.
- **Surface a support contact on the error page** — at minimum, the 1-800 Marriott number or a "Chat with us" link so a blocked guest can recover rather than abandon.
- **Test the mobile user-agent against WAF rules in staging** — this kind of block on a plain mobile browser load suggests WAF rules are misconfigured or overly aggressive; a weekly canary test from a clean mobile session would catch it before guests do.

## 6. Bottom Line

I'm gone — I'm opening the Marriott Bonvoy app instead, because whatever is happening on the website right now is a complete non-starter.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white page
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error text is at least legible and not truncated
- **Weaknesses:**
  - This is a CDN vendor error page, not a Marriott page — zero brand presence
  - No recovery path, no retry, no navigation out

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — not even a Bonvoy logo
- **Honesty check:** The reference number `#18.12a7cb17.1784541720.560e28fd` and the `errors.edgesuite.net` URL are exposed raw to the user, which is mildly embarrassing for a luxury-tier hotel brand — it reveals the CDN vendor and internal request ID with zero context or user-friendly translation.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no page loaded
- − Easy to reach my category: no nav visible
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: none
- − Page renders cleanly: hard no — CDN block error
- − Imagery includes someone like me: none
- − Copy register matches mine: n/a — only error copy
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the page itself is a forced dead-end with no exit path, which counts as a dark pattern
- **Score:** `1/10` — 1 base, zero criteria met.
- **Rationale:** There is nothing to engage with. The WAF block prevents any content from rendering, making bounce the only option.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: n/a
- − Specific product page one tap away: none
- − Sizing / fit info accessible: n/a
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — the opposite, actually
- **Score:** `1/10` — base score only, zero criteria met.
- **Rationale:** Conversion is impossible when no page loads. The only action available is closing the tab.

## 11. Evidence

Visible modules in scroll order (based solely on what the screenshot shows):

- **Access Denied heading** — large bold `<h1>`-style text, "Access Denied"
- **Error explanation line** — `You don't have permission to access "http://www.marriott.com/default.mi" on this server.`
- **Reference ID** — `Reference #18.12a7cb17.1784541720.560e28fd`
- **CDN error URL** — `https://errors.edgesuite.net/18.12a7cb17.1784541720.560e28fd`
- **Blank white canvas** — the rest of the page is entirely empty white space; no footer, no nav, no logo, no imagery

**Bugs / friction / clarity issues visible in the screenshot:**
- Full CDN vendor block (Akamai Edgesuite 403) served instead of homepage content — critical outage-level failure for any visitor hitting this URL
- No branded fallback, no Marriott logo, no recovery path
## Recent history

- [[2026-07-13-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-07-13)
- [[2026-07-06-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-07-06)
- [[2026-06-08-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-06-08)

