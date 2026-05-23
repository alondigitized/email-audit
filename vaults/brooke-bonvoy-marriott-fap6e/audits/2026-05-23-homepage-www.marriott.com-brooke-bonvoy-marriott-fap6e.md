---
slug: 2026-05-23-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-05-23
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-05-23
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-05-23
**Score:** 1/10 · **Type:** Site journey · **2026-05-23**
## Executive summary

- I opened www.marriott.com and got hit with a raw "Access Denied" wall — no hero, no booking widget, no loyalty bar, nothing. This isn't a Marriott experience, it's an Akamai CDN block with a reference number and an errors.edgesuite.net URL staring me in the face. As a Titanium member who books Marriott properties multiple times a month, this is a genuinely bad look — the site couldn't even load for me.

## What's working

- The error text renders legibly — at least I can read what went wrong.
- The reference number (`#18.2ba7cb17.1779532286.55cfba38`) is there if I wanted to call support, which I will absolutely be doing.

## What's weak

- **The entire homepage failed to load.** Akamai's CDN blocked the request and served a bare error page with zero brand identity.
- **No fallback experience.** A brand this size should have a graceful fallback — at minimum a branded error page with a booking phone number or app store link.
- **No loyalty context.** If my Titanium cookie was somehow triggering a bot-detection false positive, there's no path out — no "Sign in" link, no CAPTCHA, nothing.
- **Zero trust signals.** A new visitor hitting this would assume the site is down or phishing. Even I double-checked the URL.

## Recommendations

- **Add a branded CDN error page.** Akamai's default block page should be replaced with a Marriott-styled fallback that shows the logo, a "Try the Marriott Bonvoy app" CTA, and a toll-free reservations number.
- **Audit bot-detection rules for mobile user agents.** If this is a geo/UA false positive, Titanium members hitting the homepage on mobile and getting blocked is a churn risk — fix the WAF rules.
- **Instrument this failure in your observability stack.** If this is happening at scale, Bonvoy members are bouncing to Hilton Honors before anyone at Marriott notices.
- **Offer a CAPTCHA or "I'm not a robot" escape hatch** on the block page so legitimate users can self-rescue instead of abandoning entirely.

## Full review
## 1. Executive Summary

I opened www.marriott.com and got hit with a raw "Access Denied" wall — no hero, no booking widget, no loyalty bar, nothing. This isn't a Marriott experience, it's an Akamai CDN block with a reference number and an errors.edgesuite.net URL staring me in the face. As a Titanium member who books Marriott properties multiple times a month, this is a genuinely bad look — the site couldn't even load for me.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to persona: no hero loaded at all
- − Returning-shopper hook visible: none — no loyalty bar, no member CTA, no "Welcome back"
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Clear visual hierarchy: the only hierarchy is a plain-text error message
- − No render bugs: this IS a render failure — Access Denied from CDN
- − Demographic signals match persona: N/A, nothing loaded
- − Current campaign / season: N/A
- − Loyalty / membership benefits visible: none
- − Offer feels honest: N/A

Starting at 1; zero criteria triggered. Score stays at 1.

## 3. What's Working

- The error text renders legibly — at least I can read what went wrong.
- The reference number (`#18.2ba7cb17.1779532286.55cfba38`) is there if I wanted to call support, which I will absolutely be doing.

## 4. What's Weak

- **The entire homepage failed to load.** Akamai's CDN blocked the request and served a bare error page with zero brand identity.
- **No fallback experience.** A brand this size should have a graceful fallback — at minimum a branded error page with a booking phone number or app store link.
- **No loyalty context.** If my Titanium cookie was somehow triggering a bot-detection false positive, there's no path out — no "Sign in" link, no CAPTCHA, nothing.
- **Zero trust signals.** A new visitor hitting this would assume the site is down or phishing. Even I double-checked the URL.

## 5. Recommendations

- **Add a branded CDN error page.** Akamai's default block page should be replaced with a Marriott-styled fallback that shows the logo, a "Try the Marriott Bonvoy app" CTA, and a toll-free reservations number.
- **Audit bot-detection rules for mobile user agents.** If this is a geo/UA false positive, Titanium members hitting the homepage on mobile and getting blocked is a churn risk — fix the WAF rules.
- **Instrument this failure in your observability stack.** If this is happening at scale, Bonvoy members are bouncing to Hilton Honors before anyone at Marriott notices.
- **Offer a CAPTCHA or "I'm not a robot" escape hatch** on the block page so legitimate users can self-rescue instead of abandoning entirely.

## 6. Bottom Line

I'm opening the Marriott Bonvoy app instead — there's no way I'm staring at an Akamai error page when I have 150 nights to book this year.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** none — blank white page below the error text
- **Primary CTA:** none — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is at least legible
- **Weaknesses:**
  - Zero brand presence — no logo, no color, no Marriott identity whatsoever
  - No actionable next step for the user; dead end with a reference number

## 8. Promotional & Urgency Cues

- **Active promos:** none — page did not load
- **Urgency / scarcity:** none visible
- **Loyalty hooks:** none — no Bonvoy callout, no Titanium recognition, nothing
- **Honesty check:** The CDN error itself is honest in the most brutal possible way — it just tells me I can't get in. No manipulation, but also no help.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero loaded
- − Easy to reach my category: no navigation visible
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: hard no — CDN block is the opposite of clean rendering
- − Imagery includes someone like me: nothing loaded
- − Copy register matches mine: the only copy is an error string
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the block page itself is a dark pattern — no escape route
- **Score:** `1/10` — 1 base, zero "+" bullets.
- **Rationale:** There is nothing to engage with. The page is a dead end by every measure of the engagement rubric.

## 10. Conversion Likelihood

- − CTA in my category: none loaded
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: N/A for hotels, and irrelevant since nothing loaded
- − Specific product page one tap away: none
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none
- **Score:** `1/10` — 1 base, zero "+" bullets.
- **Rationale:** Conversion is impossible when the homepage never renders — I cannot book, sign in, or find a property. This is a complete top-of-funnel failure.

## 11. Evidence

Visible modules on screen (scroll order):

- **Error heading:** large bold "Access Denied" — the only visual element on the page
- **Error body:** "You don't have permission to access 'http://www.marriott.com/default.mi' on this server."
- **Reference string:** `Reference #18.2ba7cb17.1779532286.55cfba38`
- **CDN error URL:** `https://errors.edgesuite.net/18.2ba7cb17.1779532286.55cfba38` — confirms this is an Akamai WAF/CDN block, not a Marriott-served page
- **Everything below:** blank white — no content, no footer, no brand elements loaded
- **Bugs / friction visible:** The entire page is a bug. No fallback, no branded error state, no escape CTA. A Titanium member hitting this would reasonably assume the site is compromised or their account is flagged.
## Recent history

- [[2026-05-22-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-22)
- [[2026-05-21-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-21)
- [[2026-05-20-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-20)

