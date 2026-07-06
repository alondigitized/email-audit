---
slug: 2026-07-06-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-07-06
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-07-06
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-07-06
**Score:** 1/10 · **Type:** Site journey · **2026-07-06**
## Executive summary

- This isn't a homepage — it's an Akamai EdgeSuite "Access Denied" block page. Marriott.com returned a 403 from its CDN/WAF layer before serving a single pixel of actual content. As someone who logs into Bonvoy on my phone multiple times a week, hitting this on my first tap is an immediate trust-killer and a hard bounce.

## What's working

- The error text is at least legible — I can read "Access Denied" and the reference number immediately, which is better than a spinning loader that never resolves.

## What's weak

- The entire homepage failed to load. Marriott's CDN/WAF (Akamai EdgeSuite, reference `#18.2ba7cb17.1783332137.649cdfd2`) blocked the request outright — no fallback, no retry prompt, no brand presence whatsoever.
- There is zero Bonvoy branding, no logo, no colors — I could be on any random blocked server.
- No actionable recovery path is offered. No "try again," no link to the app, no customer service number. Dead end.
- The HTTP origin shown is `http://www.marriott.com/default.mi` — the crawler hit the unencrypted HTTP endpoint, which is almost certainly triggering bot-detection rules on Akamai's WAF.

## Recommendations

- **Fix the bot/WAF detection gap first** — requests to `http://` (not `https://`) are likely being flagged as automated scraping; enforce an HTTPS redirect at the CDN edge before the WAF evaluates the request.
- **Add a branded 403/error fallback page** — even if the WAF blocks the request, serve a Marriott-branded page with the logo, a "Try the Bonvoy app" deep link, and a support number so loyal members don't feel like they hit a dead end.
- **Include a Bonvoy sign-in recovery path** on any error state — "Sign in to Bonvoy" with an app store link costs nothing and retains the member relationship even during an outage.
- **Instrument this failure mode** — a Titanium member hitting an Access Denied on the homepage is a loyalty-erosion event; it should fire an alert in your monitoring stack, not just sit silently in CDN logs.

## Full review
## 1. Executive Summary

This isn't a homepage — it's an Akamai EdgeSuite "Access Denied" block page. Marriott.com returned a 403 from its CDN/WAF layer before serving a single pixel of actual content. As someone who logs into Bonvoy on my phone multiple times a week, hitting this on my first tap is an immediate trust-killer and a hard bounce.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy matches persona: no hero exists — only a plain-text error
- − Returning-shopper hook: none
- − Concrete offer above fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: the only hierarchy is an H1 reading "Access Denied"
- − No render bugs: this IS a render bug — the page never loaded
- − Demographic signals match persona: N/A
- − Current campaign/season reflected: N/A
- − Loyalty/membership visible: none
- − Honest offer: N/A — no offer presented

Score is the minimum 1; zero criteria from the rubric are satisfied.

## 3. What's Working

- The error text is at least legible — I can read "Access Denied" and the reference number immediately, which is better than a spinning loader that never resolves.

## 4. What's Weak

- The entire homepage failed to load. Marriott's CDN/WAF (Akamai EdgeSuite, reference `#18.2ba7cb17.1783332137.649cdfd2`) blocked the request outright — no fallback, no retry prompt, no brand presence whatsoever.
- There is zero Bonvoy branding, no logo, no colors — I could be on any random blocked server.
- No actionable recovery path is offered. No "try again," no link to the app, no customer service number. Dead end.
- The HTTP origin shown is `http://www.marriott.com/default.mi` — the crawler hit the unencrypted HTTP endpoint, which is almost certainly triggering bot-detection rules on Akamai's WAF.

## 5. Recommendations

- **Fix the bot/WAF detection gap first** — requests to `http://` (not `https://`) are likely being flagged as automated scraping; enforce an HTTPS redirect at the CDN edge before the WAF evaluates the request.
- **Add a branded 403/error fallback page** — even if the WAF blocks the request, serve a Marriott-branded page with the logo, a "Try the Bonvoy app" deep link, and a support number so loyal members don't feel like they hit a dead end.
- **Include a Bonvoy sign-in recovery path** on any error state — "Sign in to Bonvoy" with an app store link costs nothing and retains the member relationship even during an outage.
- **Instrument this failure mode** — a Titanium member hitting an Access Denied on the homepage is a loyalty-erosion event; it should fire an alert in your monitoring stack, not just sit silently in CDN logs.

## 6. Bottom Line

I'm closing this tab and opening the Bonvoy app — Marriott just wasted my tap.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background only
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is technically readable and unambiguous about the failure state.
- **Weaknesses:**
  - No brand identity whatsoever — logo, color, or typography that signals Marriott is completely absent.
  - No recovery path; a dead white page with a reference number is the entire experience.

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — no Bonvoy mention anywhere on screen
- **Honesty check:** The only visible text is a WAF block error. There's nothing manipulative here because there's nothing at all — which is arguably worse for a loyalty-program brand that depends on habitual re-engagement.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, no travel content, nothing about points or stays
- − Easy to reach my category: no navigation rendered
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — CDN block page, not the actual site
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is a technical error string
- − Trust signals visible: none — a 403 error is an anti-trust signal
- − New / hot rail in my category: none
- − No dark patterns: the Access Denied page has no dark patterns, but it also offers no path forward — effectively a dark pattern by omission

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Zero engagement criteria are satisfied. The page never loaded, so there is nothing to engage with. The baseline score of 1 reflects only that the error text is technically visible.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: N/A — hotel booking, and none shown
- − Specific product page one tap away: none
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — opposite; a WAF block is an active distrust signal

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** No conversion path exists because the page failed to load. If I weren't already a Titanium member who knows the app exists, this experience would end any purchase intent entirely.

## 11. Evidence

Visible modules in scroll order (the entire viewport is the error state):

- **WAF/CDN block page (H1: "Access Denied")** — Akamai EdgeSuite 403, fills the entire viewport
- **Error body copy:** `You don't have permission to access "http://www.marriott.com/default.mi" on this server.`
- **Reference number:** `#18.2ba7cb17.1783332137.649cdfd2`
- **Error origin URL:** `https://errors.edgesuite.net/18.2ba7cb17.1783332137.649cdfd2`
- **Remaining viewport:** blank white space — no homepage content loaded at all
- **Bugs / friction / clarity issues visible in screenshot:** The entire page is the bug. The CDN blocked the request before Marriott's actual homepage could render. No logo, no nav, no hero, no Bonvoy branding, no CTAs, no content of any kind was served.
## Recent history

- [[2026-06-08-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-06-08)
- [[2026-06-01-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-06-01)
- [[2026-05-23-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-23)

