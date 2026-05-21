---
slug: 2026-05-21-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-05-21
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-05-21
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-05-21
**Score:** 1/10 · **Type:** Site journey · **2026-05-21**
## Executive summary

- I opened marriott.com on my phone and got hit with a cold "Access Denied" wall — no hero, no search widget, no Bonvoy sign-in, nothing. What renders is a plain white Akamai edge error page, reference `#18.2ba7cb17.1779359403.409dd80f`. For a brand that stakes its loyalty program on frictionless member experiences, this is a genuinely embarrassing front door.

## What's working

- Nothing is working. The only visible content is an error string and a reference hash.

## What's weak

- **The entire page** — what renders is a bare Akamai "Access Denied" response with no branding, no fallback content, no retry CTA, and no Marriott visual identity whatsoever.
- **Zero recovery path** — there is no "go back," "try again," or "visit our homepage" link. A member who hits this is just stranded.
- **No Bonvoy recognition** — Titanium members who navigate here expecting their points dashboard or a member rate get a server error with a raw CDN reference ID. That's humiliating for a program that promises premium treatment.
- **No brand presence** — Marriott's logo, color palette, and typography are completely absent. A user who didn't type the URL themselves wouldn't even know which site blocked them.

## Recommendations

- **Add a branded error-fallback page at the CDN/edge layer** — Akamai allows custom error pages; even a simple Marriott-branded 403 with the logo and a "Sign in to Bonvoy" button would be miles better than this.
- **Surface a bot/geo-check interstitial instead of a hard block** — if this is a bot-detection or geo-IP issue, replace the hard deny with a CAPTCHA or a "verify you're human" step so real members aren't blocked silently.
- **Add a retry + contact link** — at minimum, a "Return to Marriott.com" button and a customer service number so stranded travelers can recover.
- **Test mobile access from multiple regions and networks before campaign launches** — a homepage that fires an Akamai 403 on mobile is a loyalty-killing bug that should never make it to production.

## Full review
## 1. Executive Summary

I opened marriott.com on my phone and got hit with a cold "Access Denied" wall — no hero, no search widget, no Bonvoy sign-in, nothing. What renders is a plain white Akamai edge error page, reference `#18.2ba7cb17.1779359403.409dd80f`. For a brand that stakes its loyalty program on frictionless member experiences, this is a genuinely embarrassing front door.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero at all, error page only
- − Returning-shopper hook visible: no Bonvoy sign-in, no member CTA
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy is clear: one unstyled h1 and two lines of plain text — no hierarchy
- − No render bugs: the entire page IS the render bug ("Access Denied" from Akamai EdgeSuite)
- − Demographic signals match persona: irrelevant, nothing to match
- − Page reflects current campaign / season: no content at all
- − Loyalty / membership benefits visible: none
- − Offer feels honest: no offer exists to evaluate

Score starts at 1; zero additional criteria are met. `1/10`.

## 3. What's Working

- Nothing is working. The only visible content is an error string and a reference hash.

## 4. What's Weak

- **The entire page** — what renders is a bare Akamai "Access Denied" response with no branding, no fallback content, no retry CTA, and no Marriott visual identity whatsoever.
- **Zero recovery path** — there is no "go back," "try again," or "visit our homepage" link. A member who hits this is just stranded.
- **No Bonvoy recognition** — Titanium members who navigate here expecting their points dashboard or a member rate get a server error with a raw CDN reference ID. That's humiliating for a program that promises premium treatment.
- **No brand presence** — Marriott's logo, color palette, and typography are completely absent. A user who didn't type the URL themselves wouldn't even know which site blocked them.

## 5. Recommendations

- **Add a branded error-fallback page at the CDN/edge layer** — Akamai allows custom error pages; even a simple Marriott-branded 403 with the logo and a "Sign in to Bonvoy" button would be miles better than this.
- **Surface a bot/geo-check interstitial instead of a hard block** — if this is a bot-detection or geo-IP issue, replace the hard deny with a CAPTCHA or a "verify you're human" step so real members aren't blocked silently.
- **Add a retry + contact link** — at minimum, a "Return to Marriott.com" button and a customer service number so stranded travelers can recover.
- **Test mobile access from multiple regions and networks before campaign launches** — a homepage that fires an Akamai 403 on mobile is a loyalty-killing bug that should never make it to production.

## 6. Bottom Line

I'm bouncing immediately and opening the Marriott app instead — this site literally won't let me in.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — white background only
- **Primary CTA:** None — visible above the fold? **no**
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is at least legible (high-contrast black text on white)
- **Weaknesses:**
  - No Marriott branding, no recovery path, no context for why access was denied — this is a raw CDN error, not a designed experience

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none — no Bonvoy mention anywhere
- **Honesty check:** The reference URL `https://errors.edgesuite.net/...` is exposed in plain text, which is a minor info-disclosure signal (reveals CDN vendor), but the bigger manipulation concern is that this error silently locks out legitimate members with zero explanation.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists, just an error heading
- − Easy to reach my category: no navigation at all
- − Eye-catching imagery in my category: no imagery
- − Promo banner I would use: no promo banners
- − Page renders cleanly: hard no — this IS the render failure, an Akamai 403
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: "You don't have permission to access this server" is not Millennial points-optimizer copy
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the hard block with no exit path is functionally a dark pattern — you're trapped

**Score:** `1/10` — 1 base, zero criteria met.
**Rationale:** There is nothing to engage with. The entire viewport is a white error screen with a raw server message — I'm out in under two seconds.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: N/A — hotel site, but no rate/offer visibility at all
- − Specific product page one tap away: none
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — a CDN error URL is the opposite of trust

**Score:** `1/10` — 1 base, zero criteria met.
**Rationale:** Nothing on this screen moves me toward a booking, a Bonvoy sign-in, or any action. The only tap available is the back button.

## 11. Evidence

Visible modules on the page (in scroll order):

- **"Access Denied" h1** — large black bold heading, no Marriott styling
- **Error body copy** — `You don't have permission to access "http://www.marriott.com/default.mi" on this server.`
- **Reference ID line** — `Reference #18.2ba7cb17.1779359403.409dd80f`
- **CDN error URL** — `https://errors.edgesuite.net/18.2ba7cb17.1779359403.409dd80f` rendered as visible plain text
- **Blank white canvas** — the remainder of the viewport is empty white space, extending the full page height
- **Bugs / friction:** The entire page is the bug — a hard Akamai 403 with zero branded recovery path, no logo, no navigation, no fallback content, and no way for a legitimate Bonvoy Titanium member to proceed.
## Recent history

- [[2026-05-20-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-20)
- [[2026-05-19-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-19)
- [[2026-05-18-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-18)

