---
slug: 2026-05-20-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-05-20
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-05-20
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-05-20
**Score:** 1/10 · **Type:** Site journey · **2026-05-20**
## Executive summary

- I opened Marriott.com on my phone and got hit with a hard "Access Denied" from Akamai's edge network — not a homepage, not a booking widget, not my Titanium dashboard. Nothing. As a Bonvoy Titanium member who books this brand dozens of nights a year, being blocked at the door before seeing a single pixel of content is a catastrophic first impression. The brand doesn't exist here; only a server error does.

## What's working

- Nothing is working. The page did not load.

## What's weak

- **The entire page is an Akamai "Access Denied" block** — Reference `#18.2ba7cb17.1779273378.3651bca1`. My phone's IP or user-agent got flagged as a bot/threat. I'm a Titanium member trying to check rates for a St. Regis stay and I can't even get in the door.
- **No fallback or graceful degradation** — No "sorry, try again" messaging, no redirect to a pared-down version, no suggestion to use the app. Just a raw server error page.
- **Zero brand presence** — Not a single Marriott logo, color, or word. If I didn't know the URL I'd think I was on the wrong site entirely.
- **No help path** — The error gives me a reference number and an Akamai URL with no actionable next step. Most users would just bounce.

## Recommendations

- **Tune the WAF/bot-detection rules** — Mobile traffic from a standard browser should never hit a hard 403. Akamai's managed ruleset is clearly over-blocking legitimate users; review the geo and UA patterns triggering this rule.
- **Build a branded error page** — If a block must happen, serve a Marriott-designed 403 with the logo, a "Try the app" deep-link, and a support number — not a bare Akamai template.
- **Test mobile UAs explicitly in synthetic monitoring** — This kind of block should have been caught in pre-deployment checks. Add a mobile-Safari synthetic test to the uptime suite.
- **Implement a soft challenge (CAPTCHA or JS challenge) before hard-blocking** — Even if the session looks suspicious, give the user a chance to prove they're human before serving a wall.

## Full review
## 1. Executive Summary

I opened Marriott.com on my phone and got hit with a hard "Access Denied" from Akamai's edge network — not a homepage, not a booking widget, not my Titanium dashboard. Nothing. As a Bonvoy Titanium member who books this brand dozens of nights a year, being blocked at the door before seeing a single pixel of content is a catastrophic first impression. The brand doesn't exist here; only a server error does.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy speaks to my persona: no hero at all, just an Akamai error string
- − Returning-shopper hook: no loyalty CTA, no member greeting, nothing
- − Concrete offer above the fold: none
- − Primary CTA visible: none
- − Visual hierarchy clear: raw black-on-white error text, zero designed hierarchy
- − No render bugs: FAIL — the page is literally a CDN block page, the worst render bug possible
- − Demographic signals match persona: none
- − Current campaign/season: none
- − Loyalty/membership benefits visible: none
- − Offer feels honest: n/a, there is no offer

Zero rubric criteria met. Score stays at the floor.

## 3. What's Working

- Nothing is working. The page did not load.

## 4. What's Weak

- **The entire page is an Akamai "Access Denied" block** — Reference `#18.2ba7cb17.1779273378.3651bca1`. My phone's IP or user-agent got flagged as a bot/threat. I'm a Titanium member trying to check rates for a St. Regis stay and I can't even get in the door.
- **No fallback or graceful degradation** — No "sorry, try again" messaging, no redirect to a pared-down version, no suggestion to use the app. Just a raw server error page.
- **Zero brand presence** — Not a single Marriott logo, color, or word. If I didn't know the URL I'd think I was on the wrong site entirely.
- **No help path** — The error gives me a reference number and an Akamai URL with no actionable next step. Most users would just bounce.

## 5. Recommendations

- **Tune the WAF/bot-detection rules** — Mobile traffic from a standard browser should never hit a hard 403. Akamai's managed ruleset is clearly over-blocking legitimate users; review the geo and UA patterns triggering this rule.
- **Build a branded error page** — If a block must happen, serve a Marriott-designed 403 with the logo, a "Try the app" deep-link, and a support number — not a bare Akamai template.
- **Test mobile UAs explicitly in synthetic monitoring** — This kind of block should have been caught in pre-deployment checks. Add a mobile-Safari synthetic test to the uptime suite.
- **Implement a soft challenge (CAPTCHA or JS challenge) before hard-blocking** — Even if the session looks suspicious, give the user a chance to prove they're human before serving a wall.

## 6. Bottom Line

I closed the tab and opened the Bonvoy app — I'm not fighting a server error to book a 50K night cert.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background only
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:** The error message is at least readable (large, high-contrast text)
- **Weaknesses:** Communicates nothing about Marriott; provides zero path forward for the user

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The Akamai reference URL (`https://errors.edgesuite.net/18.2ba7cb17.1779273378.3651bca1`) is technically visible but offers zero transparency about *why* I was blocked. That feels opaque and punitive for a loyalty member doing nothing wrong.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists, just an error string
- − Easy to reach my category: no navigation rendered at all
- − Eye-catching imagery in my category: none
- − Promo banner I would use: none
- − Page renders cleanly: hard no — CDN block page, not even a Marriott asset loaded
- − Imagery includes someone like me: none
- − Copy register matches mine: "Access Denied" and a hex reference ID are not speaking to a 36-year-old Titanium member
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: FAIL — being denied access without explanation is about as dark as it gets

**Score:** `1/10` — should equal 1 + count of "+" bullets above.
**Rationale:** Every single engagement criterion failed because the page never loaded. There is nothing to engage with, and the error gives me no reason to retry on web versus leaving for the app.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: n/a
- − Specific product page one tap away: none
- − Sizing / fit info accessible: n/a
- − Returns / exchanges mentioned: n/a
- − Reviews / ratings visible: none
- − Trust / security signals: none — an Akamai error page actively destroys trust

**Score:** `1/10` — should equal 1 + count of "+" bullets.
**Rationale:** There is nothing to convert on. The session ended at the wall; I converted zero intent into zero action on this domain.

## 11. Evidence

Modules visible in the screenshot (in full-page scroll order):

- **"Access Denied" H1** — large serif bold, top-left, first thing I see
- **Error explanation line** — `You don't have permission to access "http://www.marriott.com/default.mi" on this server.`
- **Reference number** — `Reference #18.2ba7cb17.1779273378.3651bca1`
- **Akamai error URL** — `https://errors.edgesuite.net/18.2ba7cb17.1779273378.3651bca1`
- **Remainder of viewport** — blank white, nothing rendered
- **Bugs / friction:** The entire page is a single render failure. No Marriott UI, no navigation, no booking widget, no loyalty module, no imagery loaded. This is a CDN-level block (Akamai EdgeSuite) serving a hard 403 to what should be a standard mobile browser session.
## Recent history

- [[2026-05-19-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-19)
- [[2026-05-18-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-18)
- [[2026-05-17-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-17)

