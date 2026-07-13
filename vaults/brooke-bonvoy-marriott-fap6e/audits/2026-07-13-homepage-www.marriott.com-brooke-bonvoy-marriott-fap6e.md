---
slug: 2026-07-13-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-07-13
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-07-13
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-07-13
**Score:** 1/10 · **Type:** Site journey · **2026-07-13**
## Executive summary

- What I'm seeing is not the Marriott homepage — it's a stark white "Access Denied" error page served by Akamai EdgeSuite, with a reference number and an error URL. There is zero Marriott branding, zero content, zero navigation. As a Titanium member who's spent tens of thousands of dollars earning status, getting a bot-block on marriott.com is genuinely embarrassing for the brand — and a signal their WAF is over-triggering.

## What's working

- The Akamai error reference number (`#18.2ba7cb17.1783936945.2b340dbb`) is at least actionable if you're calling support — though no customer should ever need it.

## What's weak

- **The entire page is inaccessible.** Marriott's WAF or CDN is blocking the request before any content renders — no nav, no hero, no search widget, nothing.
- **Zero Bonvoy presence.** No sign-in prompt, no points balance hook, no "Welcome back, Titanium member" — the one thing that should be front-and-center for a loyalty-first brand is completely absent.
- **No fallback UX.** A brand with Marriott's engineering resources should have a graceful error page with at minimum a logo, a search form, and a 1-800 number. This is a raw Akamai error in default browser font.
- **No recovery path.** There is no link, button, or redirect offered to help me get to a working page.

## Recommendations

- **Fix the WAF rule that's blocking real users.** A Titanium member browsing marriott.com on a phone should never hit an EdgeSuite 403. Audit the rule that's firing and either tighten the match pattern or add a challenge (CAPTCHA) rather than a hard block.
- **Build a branded error page.** Even when access is denied, serve a custom 403 that has the Marriott/Bonvoy logo, a simple search widget, and a phone number — not a raw browser-default error message.
- **Add a soft challenge before a hard block.** If the concern is bot traffic, a JS challenge or CAPTCHA is far less damaging than silently denying legitimate members access to book and manage their stays.
- **Monitor for repeat WAF false-positives by member tier.** Titanium and Ambassador members bouncing off a 403 is a retention risk — instrument it.

## Full review
## 1. Executive Summary

What I'm seeing is not the Marriott homepage — it's a stark white "Access Denied" error page served by Akamai EdgeSuite, with a reference number and an error URL. There is zero Marriott branding, zero content, zero navigation. As a Titanium member who's spent tens of thousands of dollars earning status, getting a bot-block on marriott.com is genuinely embarrassing for the brand — and a signal their WAF is over-triggering.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero, no content whatsoever
- − Returning-shopper hook visible: zero loyalty/member CTA
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy is clear: only text visible is an error message
- − No render bugs: this IS the bug — the entire page failed to load
- − Demographic signals match my persona: n/a
- − Page reflects current campaign/season: n/a
- − Loyalty/membership benefits visible without scrolling: none
- − Offer feels honest: access was denied outright — score 1 (baseline only)

## 3. What's Working

- The Akamai error reference number (`#18.2ba7cb17.1783936945.2b340dbb`) is at least actionable if you're calling support — though no customer should ever need it.

## 4. What's Weak

- **The entire page is inaccessible.** Marriott's WAF or CDN is blocking the request before any content renders — no nav, no hero, no search widget, nothing.
- **Zero Bonvoy presence.** No sign-in prompt, no points balance hook, no "Welcome back, Titanium member" — the one thing that should be front-and-center for a loyalty-first brand is completely absent.
- **No fallback UX.** A brand with Marriott's engineering resources should have a graceful error page with at minimum a logo, a search form, and a 1-800 number. This is a raw Akamai error in default browser font.
- **No recovery path.** There is no link, button, or redirect offered to help me get to a working page.

## 5. Recommendations

- **Fix the WAF rule that's blocking real users.** A Titanium member browsing marriott.com on a phone should never hit an EdgeSuite 403. Audit the rule that's firing and either tighten the match pattern or add a challenge (CAPTCHA) rather than a hard block.
- **Build a branded error page.** Even when access is denied, serve a custom 403 that has the Marriott/Bonvoy logo, a simple search widget, and a phone number — not a raw browser-default error message.
- **Add a soft challenge before a hard block.** If the concern is bot traffic, a JS challenge or CAPTCHA is far less damaging than silently denying legitimate members access to book and manage their stays.
- **Monitor for repeat WAF false-positives by member tier.** Titanium and Ambassador members bouncing off a 403 is a retention risk — instrument it.

## 6. Bottom Line

I'm not browsing anything — I can't even get to the site — so I'm opening the app instead and logging this as a bug I'll probably tweet about.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** none — blank white page below the error text
- **Primary CTA:** none — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error text is at least legible and machine-readable (reference number present)
- **Weaknesses:**
  - Not a Marriott page in any meaningful sense — no branding, no identity
  - Provides zero path forward for the user

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The block itself feels borderline adversarial — a legitimate Titanium member trying to access marriott.com on their phone is being treated like a bot with no explanation, no recourse, and no branded experience whatsoever.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists
- − Easy to reach my category: no navigation exists
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: catastrophic failure — the page did not render at all
- − Imagery includes someone like me: impossible to assess, no imagery
- − Copy register matches mine: only copy is an error message
- − Trust signals visible: none — opposite of trust
- − New / hot rail in my category: none
- − No dark patterns: the hard block with no recourse is itself a dark pattern
- **Score:** `1/10` — should equal 1 + count of "+" bullets above (zero "+").
- **Rationale:** There is nothing to engage with. A 403 error page is the lowest possible engagement experience — it communicates "go away," not "welcome back."

## 10. Conversion Likelihood

- − CTA in my category: none visible
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: n/a for hotels, and nothing shown anyway
- − Specific product page one tap away: none
- − Sizing / fit info accessible: n/a
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — the opposite; I was denied access
- **Score:** `1/10` — 1 + zero "+" bullets.
- **Rationale:** You cannot convert from a 403. I would have zero path to book a stay, redeem points, or even sign in — and as someone who checks award availability weekly, this would send me directly to the app.

## 11. Evidence

Visible modules (in scroll order, based on what is actually rendered in the screenshot):

- **Error heading:** "Access Denied" — large bold H1, browser-default serif font
- **Error body copy:** "You don't have permission to access 'http://www.marriott.com/default.mi' on this server."
- **Reference line:** `Reference #18.2ba7cb17.1783936945.2b340dbb`
- **EdgeSuite URL:** `https://errors.edgesuite.net/18.2ba7cb17.1783936945.2b340dbb`
- **Remainder of viewport:** completely blank white — no footer, no nav, no content
- **Bugs / friction:** The entire page is the bug. Akamai WAF returned a 403 Access Denied before any Marriott content was served. No branded fallback. No recovery action offered to the user.
## Recent history

- [[2026-07-06-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-07-06)
- [[2026-06-08-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-06-08)
- [[2026-06-01-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-06-01)

