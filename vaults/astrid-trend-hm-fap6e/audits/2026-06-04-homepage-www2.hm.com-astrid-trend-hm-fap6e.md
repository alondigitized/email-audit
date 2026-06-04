---
slug: 2026-06-04-homepage-www2.hm.com-astrid-trend-hm-fap6e
type: site
date: 2026-06-04
persona: astrid-trend-hm-fap6e
score: "1/10"
sender: www2.hm.com
subject: Homepage snapshot · www2.hm.com · 2026-06-04
tags: [site-journey, score-1, sender/www2-hm-com]
---
# Homepage snapshot · www2.hm.com · 2026-06-04
**Score:** 1/10 · **Type:** Site journey · **2026-06-04**
## Executive summary

- Oh wow, H&M literally blocked me from their site — I pulled up www2.hm.com and got hit with a raw "Access Denied" error page from Akamai's edge network. There's zero branding, zero product, zero anything. This is not a shopping experience — it's a server rejection notice.

## What's working

- The error message is technically legible — I can read it without squinting
- The reference number (`#18.31153b17.1780567202.1b4c78d6`) is there if I want to contact support, which I absolutely do not

## What's weak

- **The entire homepage is missing** — what I'm looking at is an Akamai "Access Denied" block page, not H&M's site
- **No branding whatsoever** — not a single H&M logo, color, or typeface visible
- **No fallback UX** — no "sorry, try the main site" link, no redirect to hm.com, nothing to keep me from just closing the tab
- **Cold system font and black-on-white error text** — looks like something from 2003, which, no
- **No path forward** — there's a raw errors.edgesuite.net URL dumped on the page that means absolutely nothing to a shopper
- **Zero engagement hooks** — no nav, no search, no category tiles, nothing to tap

## Recommendations

- **Redirect www2 to the canonical hm.com** — if www2 is a legacy or regional subdomain, there's no reason a real user should land on a 403; send me to the actual homepage immediately
- **Add a branded error page** if blocking is intentional — at minimum, H&M red, logo, and a "Visit hm.com →" button so I don't just bounce forever
- **Fix the CDN/WAF access rule** — an Akamai edge block on what looks like a standard GET request to the index is a misconfigured bot-protection rule; real users are getting caught in it
- **Add monitoring on www2 traffic** — if this subdomain is live in any marketing links or old bookmarks, every hit is a lost session

## Full review
## 1. Executive Summary

Oh wow, H&M literally blocked me from their site — I pulled up www2.hm.com and got hit with a raw "Access Denied" error page from Akamai's edge network. There's zero branding, zero product, zero anything. This is not a shopping experience — it's a server rejection notice.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery explicitly speaks to my persona: no hero, no imagery at all
- − A returning-shopper hook is visible: none
- − One concrete offer visible above the fold: none
- − One unmistakable primary CTA above the fold: none
- − Visual hierarchy is clear: the only hierarchy is "Access Denied" in giant bold serif — not exactly inspiring
- − No render bugs: this IS the bug — the page itself is broken/blocked
- − Demographic signals match my persona: nothing demographic here
- − Page reflects current campaign / season: no campaign, no season
- − Loyalty / membership benefits visible: none
- − Offer feels honest: N/A — there's no offer

+ only the base point of 1 for existing at all

## 3. What's Working

- The error message is technically legible — I can read it without squinting
- The reference number (`#18.31153b17.1780567202.1b4c78d6`) is there if I want to contact support, which I absolutely do not

## 4. What's Weak

- **The entire homepage is missing** — what I'm looking at is an Akamai "Access Denied" block page, not H&M's site
- **No branding whatsoever** — not a single H&M logo, color, or typeface visible
- **No fallback UX** — no "sorry, try the main site" link, no redirect to hm.com, nothing to keep me from just closing the tab
- **Cold system font and black-on-white error text** — looks like something from 2003, which, no
- **No path forward** — there's a raw errors.edgesuite.net URL dumped on the page that means absolutely nothing to a shopper
- **Zero engagement hooks** — no nav, no search, no category tiles, nothing to tap

## 5. Recommendations

- **Redirect www2 to the canonical hm.com** — if www2 is a legacy or regional subdomain, there's no reason a real user should land on a 403; send me to the actual homepage immediately
- **Add a branded error page** if blocking is intentional — at minimum, H&M red, logo, and a "Visit hm.com →" button so I don't just bounce forever
- **Fix the CDN/WAF access rule** — an Akamai edge block on what looks like a standard GET request to the index is a misconfigured bot-protection rule; real users are getting caught in it
- **Add monitoring on www2 traffic** — if this subdomain is live in any marketing links or old bookmarks, every hit is a lost session

## 6. Bottom Line

I'm leaving immediately and just going to type hm.com in a new tab — this "homepage" is literally an error message and I have zero reason to stay.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** none — blank white page with unstyled Times New Roman text
- **Primary CTA:** none — visible above the fold? no
- **Scores (1-10):** Clarity `1`, Relevance to me `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error text is technically readable
- **Weaknesses:**
  - There is no hero, no brand, no CTA — the entire above-the-fold is a server error in default browser typography
  - Nothing here signals H&M to a first-time or returning visitor

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none
- **Honesty check:** Dumping a raw Akamai reference URL (`https://errors.edgesuite.net/18.31153b17...`) on an end-user page is confusing and anxiety-inducing — looks like a security incident to someone who doesn't know what an edge CDN is

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists
- − Easy to reach my category: no navigation at all
- − Eye-catching imagery in my category: no imagery
- − Promo banner I would use: no banners
- − Page renders cleanly: no — the page IS the render failure
- − Imagery includes someone like me: no people, no images
- − Copy register matches mine: "Access Denied" and a reference hash is not a register I shop in
- − Trust signals visible: none
- − New / hot rail in my category: none
- − No dark patterns: technically no dark patterns, but an involuntary hard block is the hardest pattern of all

**Score:** `1/10` — there is nothing here to engage with; I would bounce in under two seconds.
- **Rationale:** Every single engagement signal is absent. The page is a CDN block error with no path forward, no branding, and no content.

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
- − Trust / security signals: none — an Akamai 403 is the opposite of a trust signal

**Score:** `1/10` — zero conversion drivers present.
- **Rationale:** There is literally nothing to convert on. No product, no CTA, no offer — just a server rejection and a raw error URL.

## 11. Evidence

Modules visible on the page (in scroll order):

- **"Access Denied" H1** — the only above-fold content; unstyled default browser serif, no H&M branding
- **Error body copy** — `"You don't have permission to access 'http://www2.hm.com/en_us/index.html' on this server."`
- **Reference number line** — `Reference #18.31153b17.1780567202.1b4c78d6`
- **Akamai error URL** — `https://errors.edgesuite.net/18.31153b17.1780567202.1b4c78d6` dumped as plain text
- **Remainder of page** — completely blank white; no footer, no nav, no content of any kind

**Bugs / friction visible:**
- The entire page is a 403 block from Akamai's edge network — no H&M UI rendered at all
- No redirect or fallback link to hm.com
- Raw infrastructure URL exposed to end users
- Zero brand presence on any part of the visible screen
## Recent history

- [[2026-05-28-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-28)
- [[2026-05-23-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-23)
- [[2026-05-22-homepage-www2.hm.com-astrid-trend-hm-fap6e]] — 1/10 (2026-05-22)

