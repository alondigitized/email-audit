---
slug: 2026-06-01-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-06-01
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-06-01
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-06-01
**Score:** 1/10 · **Type:** Site journey · **2026-06-01**
## Executive summary

- I opened marriott.com on my phone and got hit with a full-page **Access Denied** error from Akamai's EdgeSuite CDN. No hero, no nav, no search widget, no Bonvoy sign-in — just a reference number and a white void. For a loyalty member who books on mobile constantly, this is a legitimately bad look, and it doesn't matter that it's probably a bot-detection false positive firing on a headless browser; from my seat it reads as a broken brand.

## What's working

- Nothing is working. The only honest bullet here is that the text is legible — the error message itself renders cleanly in a readable sans-serif font, so at least I know *something* loaded.

## What's weak

- **The entire homepage failed to load.** What I see is `"Access Denied — You don't have permission to access http://www.marriott.com/default.mi on this server."` — the Akamai EdgeSuite error, not Marriott's actual UI.
- **No fallback or branded error state.** Instead of a styled Marriott 403/error page (with a sign-in prompt or a redirect), the CDN's raw default template is displayed — no logo, no color, no brand identity whatsoever.
- **No recovery path for the user.** There is no "Try again," "Sign in," or "Go to Marriott.com" link. A confused mobile user has nowhere to tap.
- **Reference number is meaningless to a consumer.** `#18.2ba7cb17.1780308181.17c654c7` is useful for Marriott's ops team, not for me trying to book a hotel tonight.

## Recommendations

- **Build a branded error intercept page.** If Akamai blocks a request, the fallback should still render the Bonvoy logo, a warm apologetic message, and a "Sign in to continue" CTA — not a raw ISP-style error wall.
- **Add a retry/redirect mechanism.** A simple "Tap here to reload" button with a fresh session token would recover the majority of false-positive CDN blocks without losing the booking.
- **Audit bot-detection thresholds on mobile user-agents.** If a real member on a real phone is hitting a 403, the Akamai rules are misconfigured and it's costing direct bookings.
- **Expose a static emergency homepage.** Even a lightweight cached version with the search widget and a Bonvoy sign-in link would be better than this blank wall.

## Full review
## 1. Executive Summary

I opened marriott.com on my phone and got hit with a full-page **Access Denied** error from Akamai's EdgeSuite CDN. No hero, no nav, no search widget, no Bonvoy sign-in — just a reference number and a white void. For a loyalty member who books on mobile constantly, this is a legitimately bad look, and it doesn't matter that it's probably a bot-detection false positive firing on a headless browser; from my seat it reads as a broken brand.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery: none visible — error page only
- − Returning-shopper hook: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy: none — single block of plain text
- − No render bugs: FAIL — the entire page is an error render
- − Demographic signals: none
- − Current campaign / season: none
- − Loyalty / membership benefits: none
- − Honest offer: n/a — there is no offer

Starting from 1, zero criteria are met — score stays at **1**.

## 3. What's Working

- Nothing is working. The only honest bullet here is that the text is legible — the error message itself renders cleanly in a readable sans-serif font, so at least I know *something* loaded.

## 4. What's Weak

- **The entire homepage failed to load.** What I see is `"Access Denied — You don't have permission to access http://www.marriott.com/default.mi on this server."` — the Akamai EdgeSuite error, not Marriott's actual UI.
- **No fallback or branded error state.** Instead of a styled Marriott 403/error page (with a sign-in prompt or a redirect), the CDN's raw default template is displayed — no logo, no color, no brand identity whatsoever.
- **No recovery path for the user.** There is no "Try again," "Sign in," or "Go to Marriott.com" link. A confused mobile user has nowhere to tap.
- **Reference number is meaningless to a consumer.** `#18.2ba7cb17.1780308181.17c654c7` is useful for Marriott's ops team, not for me trying to book a hotel tonight.

## 5. Recommendations

- **Build a branded error intercept page.** If Akamai blocks a request, the fallback should still render the Bonvoy logo, a warm apologetic message, and a "Sign in to continue" CTA — not a raw ISP-style error wall.
- **Add a retry/redirect mechanism.** A simple "Tap here to reload" button with a fresh session token would recover the majority of false-positive CDN blocks without losing the booking.
- **Audit bot-detection thresholds on mobile user-agents.** If a real member on a real phone is hitting a 403, the Akamai rules are misconfigured and it's costing direct bookings.
- **Expose a static emergency homepage.** Even a lightweight cached version with the search widget and a Bonvoy sign-in link would be better than this blank wall.

## 6. Bottom Line

I bounced the instant this loaded — there is literally nothing to interact with, and I'm already opening the Marriott app instead.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background only
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error text is at least immediately readable — no ambiguity about the page state
- **Weaknesses:**
  - Zero brand presence; could be any server error from any company
  - No actionable next step for a user who just wanted to search hotels

## 8. Promotional & Urgency Cues

- **Active promos:** None
- **Urgency / scarcity:** None
- **Loyalty hooks:** None — my Titanium status, my points balance, my free-night certs — all invisible
- **Honesty check:** The error page itself isn't manipulative, but blocking a legitimate member from accessing a homepage and offering no recovery path is functionally deceptive — it looks like the site is down when it may not be

## 9. Engagement Likelihood

- − Hero relates to my focus area: No hero exists
- − Easy to reach my category: No navigation exists
- − Eye-catching imagery in my category: No imagery
- − Promo banner I would use: No banners
- − Page renders cleanly: No — the page is a CDN error, not the actual site
- − Imagery includes someone like me: No imagery
- − Copy register matches mine: Irrelevant — only error text is present
- − Trust signals visible: None
- − New / hot rail in my category: None
- − No dark patterns: The hard block with no recovery option IS a dark pattern of sorts

**Score:** `1/10` — 1 (base) + 0 confirmed criteria.
**Rationale:** Every engagement signal is zeroed out by the access denial. There is nothing to engage with — no nav, no content, no CTA.

## 10. Conversion Likelihood

- − CTA in my category: None
- − Unambiguous CTA copy: None
- − Active price reduction or member pricing: None
- − Time-bounded credible deadline: None
- − Reachable free-shipping threshold: N/A (hotel context — no rate thresholds shown)
- − Specific product page one tap away: None
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: None
- − Reviews / ratings visible: None
- − Trust / security signals: None

**Score:** `1/10` — 1 (base) + 0 confirmed criteria.
**Rationale:** There is no conversion path of any kind — no search widget, no "Book Now," no member pricing, no redemption hook. I cannot convert on a page that won't load.

## 11. Evidence

Visible modules in scroll order, based strictly on the screenshot:

- **"Access Denied" H1** — large bold text, top-left, above the fold
- **Error explanation paragraph** — `"You don't have permission to access 'http://www.marriott.com/default.mi' on this server."`
- **Reference number line** — `Reference #18.2ba7cb17.1780308181.17c654c7`
- **EdgeSuite error URL** — `https://errors.edgesuite.net/18.2ba7cb17.1780308181.17c654c7`
- **Blank white space** — remainder of the viewport and full scroll depth is empty
- **Visible bugs / friction:** The entire page is a CDN 403 error. No Marriott branding, no navigation, no search widget, no Bonvoy sign-in, no hero content, no fallback copy. The raw Akamai default error template is the only visible UI element.
## Recent history

- [[2026-05-23-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-23)
- [[2026-05-22-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-22)
- [[2026-05-21-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-21)

