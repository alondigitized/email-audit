---
slug: 2026-06-08-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e
type: site
date: 2026-06-08
persona: brooke-bonvoy-marriott-fap6e
score: "1/10"
sender: www.marriott.com
subject: Homepage snapshot · www.marriott.com · 2026-06-08
tags: [site-journey, score-1, sender/www-marriott-com]
---
# Homepage snapshot · www.marriott.com · 2026-06-08
**Score:** 1/10 · **Type:** Site journey · **2026-06-08**
## Executive summary

- I opened marriott.com and what loaded is not a homepage — it's a raw **"Access Denied"** block from Akamai EdgeSuite, with a reference ID and a plain black-and-white error message. There is zero branding, zero Bonvoy, zero hotel imagery. Marriott's bot-detection fired and served this instead of the actual site, which means any automated capture of this URL is currently getting the wall, not the welcome mat.

## What's working

- The error message is technically legible — I can read "Access Denied" and the reference number, so if I needed to report the block to IT support I have a usable trace ID (`#18.2ba7cb17.1780912930.5f5f9211`)

## What's weak

- **The entire page is wrong.** I hit marriott.com and got a blank white Akamai block page, not Marriott's homepage. Titanium member about to book a St. Regis stay and the site thinks I'm a bot.
- **Zero brand presence.** No Marriott logo, no Bonvoy wordmark, no "Sign In" — nothing that signals this is even the right destination.
- **No recovery path.** The error page offers no "try again," no redirect, no support link. Dead end.
- **Reference URL is edgesuite.net** (Akamai's generic CDN error domain), which looks sketchy — a less tech-savvy user might assume they've landed on a phishing or malware page and never come back.

## Recommendations

- **Fix the bot-detection false-positive rate** — a Titanium member on a mobile browser should never see Access Denied. Marriott's Akamai rules are over-triggering and blocking real customers.
- **Add a branded fallback page** — if a block must fire, show the Marriott/Bonvoy logo and a "Something went wrong, try again or call 1-800-XXX-XXXX" message, not a bare Akamai template.
- **Surface a recovery CTA** — at minimum a "Reload page" button or link back to the home URL so the user doesn't abandon entirely.
- **Log and alert on member-session blocks** — if a signed-in Bonvoy member triggers the WAF, that should be an immediate escalation signal, not a silent denial.

## Full review
## 1. Executive Summary

I opened marriott.com and what loaded is not a homepage — it's a raw **"Access Denied"** block from Akamai EdgeSuite, with a reference ID and a plain black-and-white error message. There is zero branding, zero Bonvoy, zero hotel imagery. Marriott's bot-detection fired and served this instead of the actual site, which means any automated capture of this URL is currently getting the wall, not the welcome mat.

## 2. Business Impact Score (1-10)

**1/10**

- − Hero copy or imagery speaks to my persona: no — only "Access Denied" text is present
- − Returning-shopper hook visible: no
- − Concrete offer above the fold: no
- − Unmistakable primary CTA above the fold: no
- − Visual hierarchy is clear: technically yes, but it's error-page hierarchy — nothing to navigate
- − No render bugs: there IS a render bug — the entire site failed to render; an Akamai block page loaded instead
- − Demographic signals match persona: no
- − Page reflects current campaign / season: no
- − Loyalty / membership benefits visible: no
- − Offer feels honest: no offer present at all

Score = 1 (base) + 0 signals = **1/10**

## 3. What's Working

- The error message is technically legible — I can read "Access Denied" and the reference number, so if I needed to report the block to IT support I have a usable trace ID (`#18.2ba7cb17.1780912930.5f5f9211`)

## 4. What's Weak

- **The entire page is wrong.** I hit marriott.com and got a blank white Akamai block page, not Marriott's homepage. Titanium member about to book a St. Regis stay and the site thinks I'm a bot.
- **Zero brand presence.** No Marriott logo, no Bonvoy wordmark, no "Sign In" — nothing that signals this is even the right destination.
- **No recovery path.** The error page offers no "try again," no redirect, no support link. Dead end.
- **Reference URL is edgesuite.net** (Akamai's generic CDN error domain), which looks sketchy — a less tech-savvy user might assume they've landed on a phishing or malware page and never come back.

## 5. Recommendations

- **Fix the bot-detection false-positive rate** — a Titanium member on a mobile browser should never see Access Denied. Marriott's Akamai rules are over-triggering and blocking real customers.
- **Add a branded fallback page** — if a block must fire, show the Marriott/Bonvoy logo and a "Something went wrong, try again or call 1-800-XXX-XXXX" message, not a bare Akamai template.
- **Surface a recovery CTA** — at minimum a "Reload page" button or link back to the home URL so the user doesn't abandon entirely.
- **Log and alert on member-session blocks** — if a signed-in Bonvoy member triggers the WAF, that should be an immediate escalation signal, not a silent denial.

## 6. Bottom Line

I'm leaving — there is literally nothing here to look at, and I've got the Marriott app on my phone anyway.

## 7. Hero & Above-the-Fold Analysis

- **Hero copy (verbatim):** `Access Denied`
- **Hero image:** None — blank white page with black system-font text
- **Primary CTA:** None — visible above the fold? no
- **Scores (1-10):** Clarity `2`, Relevance to you `1`, Visual hierarchy `1`, On-brand `1`
- **Strengths:**
  - The error text is readable at a glance — no ambiguity about what happened
- **Weaknesses:**
  - No Marriott branding whatsoever; could be any server error on any site
  - Zero path forward — no link, no button, no explanation for the user

## 8. Promotional & Urgency Cues

- **Active promos:** none
- **Urgency / scarcity:** none
- **Loyalty hooks:** none — Bonvoy is completely absent
- **Honesty check:** The Akamai reference URL (`errors.edgesuite.net/...`) looks like a third-party domain, which could genuinely alarm users who don't know what EdgeSuite is; that's an unintentional trust destroyer

## 9. Engagement Likelihood

- − Hero relates to my focus area: no hero exists — it's an error page
- − Easy to reach my category: no navigation present
- − Eye-catching imagery in my category: no imagery at all
- − Promo banner I would use: none visible
- − Page renders cleanly: no — the site failed to load; this is a CDN block, which is a render failure
- − Imagery includes someone like me: no imagery
- − Copy register matches mine: "Access Denied" is not a register anyone shops in
- − Trust signals visible: none; the edgesuite.net domain is an active trust negative
- − New / hot rail in my category: none
- − No dark patterns: no active dark patterns, but a total access denial is the ultimate bounce trigger

**Score:** `1/10` — 1 base + 0 positive signals.
**Rationale:** There is no content to engage with. The page is functionally a wall.

## 10. Conversion Likelihood

- − CTA in my category: none
- − Unambiguous CTA copy: none
- − Active price reduction or member pricing: none
- − Time-bounded credible deadline: none
- − Reachable free-shipping threshold: N/A — hotel site, but no room-rate or points offer either
- − Specific product page one tap away: none
- − Sizing / fit info accessible: N/A
- − Returns / exchanges mentioned: none
- − Reviews / ratings visible: none
- − Trust / security signals: none — actually a trust negative (unknown domain in error URL)

**Score:** `1/10` — 1 base + 0 positive signals.
**Rationale:** A conversion requires a page. There is no page.

## 11. Evidence

Visible modules in scroll order (based strictly on screenshot):

- **H1 "Access Denied"** — large bold serif, top-left, first thing the eye hits
- **Body text line 1:** `You don't have permission to access "http://www.marriott.com/default.mi" on this server.`
- **Body text line 2 (reference ID):** `Reference #18.2ba7cb17.1780912930.5f5f9211`
- **Body text line 3 (error URL):** `https://errors.edgesuite.net/18.2ba7cb17.1780912930.5f5f9211`
- **Remaining viewport:** completely blank white — no images, no nav, no footer, no Bonvoy branding
- **Bugs / friction visible:** The entire page is the bug — Akamai CDN firewall block served in place of the Marriott homepage; no recovery UI, no branding, no functional content whatsoever
## Recent history

- [[2026-06-01-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-06-01)
- [[2026-05-23-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-23)
- [[2026-05-22-homepage-www.marriott.com-brooke-bonvoy-marriott-fap6e]] — 1/10 (2026-05-22)

