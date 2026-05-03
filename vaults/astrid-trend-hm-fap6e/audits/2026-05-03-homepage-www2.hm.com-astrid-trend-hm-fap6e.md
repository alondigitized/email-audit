---
slug: 2026-05-03-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-05-03
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-05-03
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-05-03
**Score:** 1/10 · **Type:** Site journey · **2026-05-03**
## Executive summary

- I literally cannot even get in — the page served me an **"Access Denied"** error from Akamai's edge network instead of the H&M homepage. There is zero brand experience here: no imagery, no offers, no nav, nothing. As far as my phone is concerned, H&M's site does not exist right now.
- **1/10**
- − Hero copy or imagery speaks to my persona: no hero at all, just a system error
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy clear: none — a plain text error page
- − No render bugs: the page IS a bug (access denied from CDN)
- − Demographic signals match my persona: none
- − Page reflects current campaign/season: none
- − Loyalty/membership benefits visible: none
- − Offer feels honest: N/A — no offer exists
- Score starts at 1; zero additional signals fire. **1/10**.

## What's working

- Nothing. The page rendered quickly — I'll give it that — but "fast to a wall" is not a win.

## What's weak

- **The entire experience:** The CDN (Akamai edgesuite) is blocking my request outright. The error reads: *"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."* That's a hard bounce before a single pixel of brand UI loads.
- **No fallback or graceful redirect:** No branded error page, no "try hm.com instead," no customer-service link. Just a reference number and a blank white void.
- **Zero trust signals:** A user hitting this on mobile would assume the site is down or sketchy — not a great look for a brand that wants me to drop $60 on a haul.

## Recommendations

- **Fix the CDN allowlist / geo-routing rule** so mobile user agents on the www2 subdomain aren't blocked at the edge — this is table stakes, ship it today.
- **Add a branded 403 page** with a redirect to `www.hm.com` and a link to the app; even error states should reinforce brand identity.
- **Set up uptime monitoring on www2** specifically — if this subdomain is meant to serve traffic and it's silently returning 403s, you're losing real customers with no alerting.
- **Audit the Akamai config** for www2 vs www routing — the reference ID (`#18.47d7ce17.1777777247.35745055`) suggests a WAF or access-control rule is misfiring, likely on specific IP ranges or user-agent strings.

## Full review
## 1. Executive Summary

I literally cannot even get in — the page served me an **"Access Denied"** error from Akamai's edge network instead of the H&M homepage. There is zero brand experience here: no imagery, no offers, no nav, nothing. As far as my phone is concerned, H&M's site does not exist right now.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery speaks to my persona: no hero at all, just a system error
- − Returning-shopper hook visible: none
- − Concrete offer above the fold: none
- − Unmistakable primary CTA: none
- − Visual hierarchy clear: none — a plain text error page
- − No render bugs: the page IS a bug (access denied from CDN)
- − Demographic signals match my persona: none
- − Page reflects current campaign/season: none
- − Loyalty/membership benefits visible: none
- − Offer feels honest: N/A — no offer exists

Score starts at 1; zero additional signals fire. **1/10**.

## 3. What's Working

- Nothing. The page rendered quickly — I'll give it that — but "fast to a wall" is not a win.

## 4. What's Weak

- **The entire experience:** The CDN (Akamai edgesuite) is blocking my request outright. The error reads: *"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."* That's a hard bounce before a single pixel of brand UI loads.
- **No fallback or graceful redirect:** No branded error page, no "try hm.com instead," no customer-service link. Just a reference number and a blank white void.
- **Zero trust signals:** A user hitting this on mobile would assume the site is down or sketchy — not a great look for a brand that wants me to drop $60 on a haul.

## 5. Recommendations

- **Fix the CDN allowlist / geo-routing rule** so mobile user agents on the www2 subdomain aren't blocked at the edge — this is table stakes, ship it today.
- **Add a branded 403 page** with a redirect to `www.hm.com` and a link to the app; even error states should reinforce brand identity.
- **Set up uptime monitoring on www2** specifically — if this subdomain is meant to serve traffic and it's silently returning 403s, you're losing real customers with no alerting.
- **Audit the Akamai config** for www2 vs www routing — the reference ID (`#18.47d7ce17.1777777247.35745055`) suggests a WAF or access-control rule is misfiring, likely on specific IP ranges or user-agent strings.

## 6. Bottom Line

I bounced immediately — there is literally nothing to browse, and I'm not going to troubleshoot H&M's server config on my lunch break.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white page
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error message is at least technically legible
- **Weaknesses:**
  - This is a raw Akamai system error, not an H&M page — no brand presence whatsoever
  - No redirect or recovery path offered

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** The error itself is the problem — it feels like the site is broken or blocking me, which erodes trust before any shopping even starts.

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero, no fashion content, nothing
- − Easy to reach my category: no navigation exists
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: no banners
- − Page renders cleanly: fails — a CDN 403 error is a hard render failure
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: the only copy is a system error message
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns, but a blank error wall is worse

**Score:** `1/10` — every signal is absent.
- **Rationale:** A CDN block page is the worst possible engagement outcome — I have nothing to interact with and no reason to stay.

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

**Score:** `1/10` — no conversion signals present.
- **Rationale:** There is no product, no offer, no CTA — conversion is impossible from this state.

## 11. Evidence

Visible modules on the page (in scroll order):

- **"Access Denied" header** — large bold system-generated heading, not H&M branded
- **Error body text** — *"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."*
- **Reference ID** — `#18.47d7ce17.1777777247.35745055` (Akamai CDN error reference)
- **Error URL** — `https://errors.edgesuite.net/18.47d7ce17.1777777247.35745055`
- **Blank white space** — rest of the viewport is empty
- **Bugs / friction:** The entire page is a bug — CDN/WAF access denial served instead of the homepage; no brand UI loaded; no fallback redirect; no branded error state.
## Recent history

- [[2026-05-02-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-02)

