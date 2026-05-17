---
slug: 2026-05-17-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-17
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-17
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-17
**Score:** 1/10 · **Type:** Site journey · **2026-05-17**
## Executive summary

- Okay, so I didn't get H&M — I got a wall. The page that loaded is a bare Akamai CDN "Access Denied" error, nothing but black system text on white, with a reference ID and an edgesuite.net error URL. There's zero brand presence, zero product, zero anything. As a shopper who just tried to browse H&M on my phone, this is an instant bounce.

## What's working

- Nothing. There is no H&M content on this screen whatsoever.

## What's weak

- **The entire page is a 403 Access Denied block** — Akamai's edge network rejected the request entirely, so no homepage rendered at all.
- **Zero brand identity** — no H&M logo, no nav, no color, no typography; I'd have no idea which site I was trying to reach if the URL weren't in the error text.
- **No fallback or redirect** — there's no "try this link instead" or graceful degradation, just a raw reference ID (`#18.2ff00f17.1779041309.dabdd82`) and a dead edgesuite.net error URL.
- **Mobile experience is nonexistent** — plain unstyled browser-default text on white, no attempt at even a branded error page.

## Recommendations

- **Fix the bot/WAF policy** — the Akamai block is likely a geo or user-agent rule; `www2.hm.com` is probably a locale-specific subdomain that trips the CDN filter for certain clients. Route shoppers directly to `www.hm.com` with a locale redirect rather than exposing the `www2` subdomain publicly.
- **Build a branded 403/error page** — even if access is blocked, serve an H&M-styled page with the logo, a "Something went wrong — try hm.com" CTA, and a contact link. The current state looks like a server misconfiguration to any real shopper.
- **Test mobile access flows on `www2`** — if this subdomain is used for any real mobile traffic, audit it against Akamai WAF rules before campaigns drive volume to it.
- **Monitor for recurrence** — a CDN block on the homepage is a silent revenue killer; add synthetic uptime monitoring that fires an alert any time the root path returns non-2xx.

## Full review
## 1. Executive Summary

Okay, so I didn't get H&M — I got a wall. The page that loaded is a bare Akamai CDN "Access Denied" error, nothing but black system text on white, with a reference ID and an edgesuite.net error URL. There's zero brand presence, zero product, zero anything. As a shopper who just tried to browse H&M on my phone, this is an instant bounce.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery matching my persona: no hero exists — only an error message
- − Returning-shopper hook: none visible
- − Concrete offer above the fold: none visible
- − Primary CTA: none visible
- − Visual hierarchy: not applicable — page is a plain system error
- − No render bugs: FAIL — the entire page is a render failure (Akamai 403 block)
- − Demographic signals: none
- − Current campaign/season: none
- − Loyalty/membership benefits: none
- − Honest offer: not applicable

Score starts at 1 and zero criteria are met. The page itself is the bug.

## 3. What's Working

- Nothing. There is no H&M content on this screen whatsoever.

## 4. What's Weak

- **The entire page is a 403 Access Denied block** — Akamai's edge network rejected the request entirely, so no homepage rendered at all.
- **Zero brand identity** — no H&M logo, no nav, no color, no typography; I'd have no idea which site I was trying to reach if the URL weren't in the error text.
- **No fallback or redirect** — there's no "try this link instead" or graceful degradation, just a raw reference ID (`#18.2ff00f17.1779041309.dabdd82`) and a dead edgesuite.net error URL.
- **Mobile experience is nonexistent** — plain unstyled browser-default text on white, no attempt at even a branded error page.

## 5. Recommendations

- **Fix the bot/WAF policy** — the Akamai block is likely a geo or user-agent rule; `www2.hm.com` is probably a locale-specific subdomain that trips the CDN filter for certain clients. Route shoppers directly to `www.hm.com` with a locale redirect rather than exposing the `www2` subdomain publicly.
- **Build a branded 403/error page** — even if access is blocked, serve an H&M-styled page with the logo, a "Something went wrong — try hm.com" CTA, and a contact link. The current state looks like a server misconfiguration to any real shopper.
- **Test mobile access flows on `www2`** — if this subdomain is used for any real mobile traffic, audit it against Akamai WAF rules before campaigns drive volume to it.
- **Monitor for recurrence** — a CDN block on the homepage is a silent revenue killer; add synthetic uptime monitoring that fires an alert any time the root path returns non-2xx.

## 6. Bottom Line

I'm bouncing immediately — there's literally nothing here, and I'd assume the site is broken or the link is wrong.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white background with plain black system text
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is at least technically legible (no broken characters or overlap)
- **Weaknesses:**
  - Completely off-brand — no H&M identity whatsoever
  - No actionable path forward for the shopper; dead end

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The page itself is the problem — there's no content to be manipulative with, but serving a raw Akamai error to a shopper who clicked an H&M link is a trust-eroding experience in its own right.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero — Akamai error page only
- − Easy to reach my category: no navigation exists
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: hard fail — CDN-blocked, no content loaded
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: not applicable — only a system error string
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: the page doesn't even get to dark patterns; it's inaccessible

**Score:** `1/10` — every criterion fails because no actual page content loaded.
**Rationale:** A 403 from Akamai is a total non-starter; engagement is impossible when the site never renders.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: none
- − Specific product page one tap away: none
- − Sizing / fit info accessible: none
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none

**Score:** `1/10` — zero conversion signals because zero content was delivered.
**Rationale:** No product, no CTA, no brand — there is nothing to convert on.

## 11. Evidence

Visible modules on the page (in scroll order):

- **"Access Denied" heading** — large bold H1, plain browser-default serif font, black on white
- **Error body text** — `You don't have permission to access "http://www2.hm.com/en_us/index.html" on this server.`
- **Reference ID line** — `Reference #18.2ff00f17.1779041309.dabdd82`
- **Error URL line** — `https://errors.edgesuite.net/18.2ff00f17.1779041309.dabdd82`
- **Remainder of viewport** — entirely blank white; no footer, no nav, no branding, no content

**Bugs / friction visible in screenshot:**
- Complete page-load failure — Akamai WAF or geo-block returned 403 before any H&M content could render
- No branded error handling; raw CDN error exposed directly to the end user
- No redirect or fallback URL offered to the blocked visitor
## Recent history

- [[2026-05-15-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-15)
- [[2026-05-14-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-14)
- [[2026-05-13-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-13)

