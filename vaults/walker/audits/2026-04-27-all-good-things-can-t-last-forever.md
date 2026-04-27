---
slug: 2026-04-27-all-good-things-can-t-last-forever
type: email
date: 2026-04-27
persona: walker
score: "3/10"
sender: adidas
subject: "All good things can't last forever"
tags: [email, score-3, sender/adidas]
---
# All good things can't last forever
**Score:** 3/10 · **Type:** Email audit · **2026-04-27**
## Executive summary

- **From:** adidas | **Subject:** All good things can't last forever
- I'll be honest — I almost swiped this one straight to the trash. I'm an adidas member too, mostly because they showed up in a sale search years back, but this email felt like it was written for my college-aged nephew, not me. The "adiclub Days" urgency is there, but the whole thing is a jumble — giveaways for a Minecraft Xbox bundle, a World Cup match ball, a collectible pin or something. Where are the shoes I'd actually wear? I scrolled top to bottom and never once thought "that's for me."
- Low. The loyalty angle has potential but the execution buries it under content I don't care about.

## What's working

- **The urgency framing is clear.** "Adiclub Days End Soon" gets the point across fast. I know something is expiring.
- **Points-to-dollars breakdown** is at least legible in the lower module — I can see $20 off, $30 off, $50 off tied to point levels. That's the one thing I found useful.
- **Newsletter framing** ("Your adiclub Newsletter") tells me I asked for this, which is better than feeling spammed.

## What's weak

- **Three giveaways in a row — none relevant to me.** An exclusive adiclub collectible, a World Cup match ball, and a Minecraft Xbox bundle. I play golf, not Minecraft. This feels like content built for a 22-year-old.
- **No product.** I scrolled the entire email and saw zero shoes, zero footwear I could actually buy. For a shoe brand, that's a miss.
- **Text is very small and dense.** On a phone, the body copy in the giveaway modules is tiny. I'd have to pinch-zoom to read the fine print, and I'm not going to bother.
- **Too many asks, no clear winner.** Enter this giveaway, enter that one, redeem points, unlock vouchers — what do you want me to do? Pick one thing.
- **Subject line payoff is missing.** "All good things can't last forever" sounds like the sale is ending, but the email isn't really about a sale. It's about a loyalty program event. That disconnect is jarring.
- **STRAVA logo in the header** — I don't use STRAVA and most guys my age don't either. That partnership means nothing to me here.

## Recommendations

- 1. **Lead with a product.** Even one men's sneaker — a running shoe, a casual slip-on — would give me something to click on. Right now there's nothing to buy.
- 2. **Cut the Minecraft bundle.** Full stop. It alienates your older, loyal customers. If it has to be there, put it at the bottom.
- 3. **Make the points redemption the hero.** The "$50 off for 400 points" message is the most compelling thing in this email. Build the layout around that, not giveaways.
- 4. **Bigger text in body modules.** Minimum 16px equivalent on mobile. I shouldn't have to zoom.
- 5. **One CTA.** Either "Redeem Your Points" or "Enter the Giveaway" — not both plus two others.
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | Broken `/g/` click-redirect | Identify which CTA uses the `/g/` link type in the ESP template; re-map to `/o/` or the correct redirect path before send/resend |
- | **P0** | Plain-text part is empty | Add a text/plain MIME alternative — even a minimal stripped-text version satisfies CAN-SPAM and improves deliverability scoring |
- | **P1** | 5 HTTP image URLs | Update `image.link.adidas.com` and `click.comms.adidas.com` asset references to HTTPS in the template/CDN config |
- | **P1** | Missing `alt` on content image | Add descriptive `alt` text to the `afd52f76` asset; set `alt=""` on the tracking pixel |
- | **P2** | Malformed charset meta | Add `http-equiv="Content-Type"` to the charset `<meta>` tag |
- | **P2** | Duplicate `@font-face` blocks | Consolidate into a single block using the longer fallback stack; remove the duplicate |
- | **P2** | Verify DKIM alignment for `us-news.comms.adidas.com` | Confirm ESP is signing with a DKIM selector scoped to this subdomain; check DMARC alignment in a test send |
- | **P3** | `no-referrer` meta | Evaluate whether this is intentional; if referrer-based analytics are used on landing pages, remove or change to `origin` |

## Full review
---

## Email Review — Walker Miles, 62

**From:** adidas | **Subject:** All good things can't last forever

---

### 1. Executive Summary

I'll be honest — I almost swiped this one straight to the trash. I'm an adidas member too, mostly because they showed up in a sale search years back, but this email felt like it was written for my college-aged nephew, not me. The "adiclub Days" urgency is there, but the whole thing is a jumble — giveaways for a Minecraft Xbox bundle, a World Cup match ball, a collectible pin or something. Where are the shoes I'd actually wear? I scrolled top to bottom and never once thought "that's for me."

---

### 2. Business Impact Score: 3/10

Low. The loyalty angle has potential but the execution buries it under content I don't care about.

---

### 3. What's Working

- **The urgency framing is clear.** "Adiclub Days End Soon" gets the point across fast. I know something is expiring.
- **Points-to-dollars breakdown** is at least legible in the lower module — I can see $20 off, $30 off, $50 off tied to point levels. That's the one thing I found useful.
- **Newsletter framing** ("Your adiclub Newsletter") tells me I asked for this, which is better than feeling spammed.

---

### 4. What's Weak

- **Three giveaways in a row — none relevant to me.** An exclusive adiclub collectible, a World Cup match ball, and a Minecraft Xbox bundle. I play golf, not Minecraft. This feels like content built for a 22-year-old.
- **No product.** I scrolled the entire email and saw zero shoes, zero footwear I could actually buy. For a shoe brand, that's a miss.
- **Text is very small and dense.** On a phone, the body copy in the giveaway modules is tiny. I'd have to pinch-zoom to read the fine print, and I'm not going to bother.
- **Too many asks, no clear winner.** Enter this giveaway, enter that one, redeem points, unlock vouchers — what do you want me to do? Pick one thing.
- **Subject line payoff is missing.** "All good things can't last forever" sounds like the sale is ending, but the email isn't really about a sale. It's about a loyalty program event. That disconnect is jarring.
- **STRAVA logo in the header** — I don't use STRAVA and most guys my age don't either. That partnership means nothing to me here.

---

### 5. Recommendations

1. **Lead with a product.** Even one men's sneaker — a running shoe, a casual slip-on — would give me something to click on. Right now there's nothing to buy.
2. **Cut the Minecraft bundle.** Full stop. It alienates your older, loyal customers. If it has to be there, put it at the bottom.
3. **Make the points redemption the hero.** The "$50 off for 400 points" message is the most compelling thing in this email. Build the layout around that, not giveaways.
4. **Bigger text in body modules.** Minimum 16px equivalent on mobile. I shouldn't have to zoom.
5. **One CTA.** Either "Redeem Your Points" or "Enter the Giveaway" — not both plus two others.

---

### 6. Bottom Line

This email doesn't treat me like a 62-year-old who's been buying adidas shoes for years. It reads like a youth newsletter that accidentally landed in my inbox. I wouldn't click anything here, and I wouldn't forward it to anyone. At best I'd skim the points chart and close it.

---

### 7. Subject Line Analysis

- **Subject:** `All good things can't last forever`
- **Length:** 34 characters
- **Scores (1-10):** Clarity `4`, Curiosity `5`, Personalization `2`, Urgency `5`, Specificity `2`
- **Strengths:**
  - Conversational, not corporate — it doesn't scream "SALE ENDS NOW" like every other brand
  - Creates mild intrigue; I do wonder what's ending
- **Weaknesses:**
  - Totally vague — no mention of points, adiclub, a deal, or anything specific
  - Could be an email from anyone about anything; no brand connection in the line itself
- **Alt A:** `Walker, your adiclub points expire soon — here's how to use them`
- **Alt B:** `adiclub Days end Sunday — redeem before your points reset`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the visible preheader appears to be something about "explore the store adidas.com/adifuel" — a navigation link bleed, not intentional preheader copy
- **Length:** ~35 characters (nav bleed)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `2`, Inbox-fit `1`
- **Strengths:**
  - At least the brand URL signals it's from adidas
- **Weaknesses:**
  - A store URL as preheader is wasted real estate — it tells me nothing about why to open
  - Completely fails to complement the subject line or add any urgency/value
- **Alt A:** `Your adiclub Days reward: $50 off, $30 off, and more — ends soon`
- **Alt B:** `Redeem your points before adiclub Days close this week`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** "All good things can't last forever" is cryptic enough that I might open it out of mild curiosity, but the subject doesn't signal anything I'd find valuable — no shoe deal, no men's category mention, no clear dollar figure. The preheader leaking a store URL doesn't help. I'd probably swipe it aside without opening.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `2/10`
- **Rationale:** Once inside, the three giveaway modules (none of them relevant to me) and the absence of any actual product to shop killed whatever curiosity I had left. The points redemption module is the only thing that might get a tap, but it's buried and the CTA copy isn't visible enough to pull me in.

---

### 11. Evidence

- **Overall purpose:** Promote the end of "adiclub Days," a loyalty program event with point-redemption rewards and sweepstakes entries.
- **Hero / primary value prop:** "Adiclub Days End Soon" — urgency to act before the window closes. But no specific product or dollar offer is attached to the hero image.
- **Membership / benefits section:** Points-to-voucher breakdown is present (400 pts = $50 off, 1600 pts = $20 off, 2400 pts = $30 off) and is the most actionable content in the email. "Unlock Discounts on Vouchers" module appears below with additional copy.
- **Product discoverability / recommendation modules:** None visible. No shoes, no apparel, no personalized picks. This is a significant gap.
- **Utility / secondary modules:** STRAVA co-branding in header. Three giveaway modules (adiclub collectible, World Cup match ball, Minecraft Xbox bundle). Footer with privacy, preferences, unsubscribe.
- **Bugs / friction / clarity issues:** The preheader appears to be leaking a navigation/store URL rather than intentional preview text. Body copy in giveaway modules is visually very small — likely difficult to read on a phone without zooming. The three back-to-back giveaway blocks create visual monotony with no clear hierarchy between them.

---

## Technical Audit

## Technical Audit — adidas "All good things can't last forever"

**From:** adidas@us-news.comms.adidas.com | **ESP redirect domains:** click.comms.adidas.com, dv.adidas.com

---

### 1. Technical Summary

One click-tracking URL has an unresolvable path type (`/g/`) that will 404 on click, producing a broken experience for at least one CTA. Plain-text MIME part is absent (0 chars), which is a CAN-SPAM compliance gap and a deliverability risk.

---

### 2. Link & Tracking Issues

**[FAIL] Broken click-redirect — unknown path type `/g/`**

The QA probe returned `unknown url type: '/g/...'` for this tracking URL:

```
https://dv.adidas.com/o/afd52f76-eed0-432c-afd1-b7ae23ffeac8?cp_tp=v3...
```

The ESP's redirect handler recognizes `/o/` (outbound) but is choking on a `/g/` path internally. This is likely a misconfigured link type in the campaign template — possibly a "gift" or "gallery" deep-link variant passed through the wrong redirect slot. Any subscriber clicking that CTA will land on an error page.

**[WARN] 28 tracking links unverified**

All outbound clicks route through `click.comms.adidas.com` or `dv.adidas.com`. These were skipped by the HTTP probe (expected for redirect domains). No broken status confirmed on the remaining 27, but coverage is incomplete.

---

### 3. Rendering & Accessibility

**[WARN] 5 images served over HTTP — will be blocked by Gmail, Outlook 365, Apple Mail**

`http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` appears 4× (the "arrow" asset). Additionally:

```
http://click.comms.adidas.com/CI0/0102019dcd1e649a-a29a83a4-9908-4f40-b18a-ef51c308c15b-000000/...
```

Modern clients enforce HTTPS for external resources; these will render as broken image boxes or be silently dropped.

**[WARN] 2 images missing `alt` text**

- `afd52f76-eed0-432c-afd1-b7ae23ffeac8` (dv.adidas.com asset) — no `alt` attribute
- `ugJPsqZQQydZi7Tp8gq9KfU-H...` (click.comms.adidas.com pixel/image) — no `alt` attribute

Screen readers will announce the full URL string or skip entirely. The first is likely a content image; it needs descriptive alt text. The second appears to be a tracking pixel and should have `alt=""` explicitly set.

**[WARN] Malformed charset meta tag**

```html
<meta content="text/html; charset=UTF-8" />
```

Missing `http-equiv="Content-Type"`. The correct form for HTML 4.01 Transitional (which this doctype declares) is:

```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```

Without `http-equiv`, Outlook and legacy clients may not recognize the charset declaration, risking mojibake on special characters.

**[WARN] Duplicate `@font-face` declarations**

`AdihausDIN` (400 + 700) and `AdineuePRO` (400 + 600) are each declared twice across two separate `<style>` blocks. The second block's `src` list is shorter (drops `Calibri`, `Sans Serif`). The later declaration wins in CSS cascade, so the effective fallback stack silently loses two fonts. The duplication also adds ~1.5 KB of unnecessary CSS payload.

---

### 4. Personalization & Merge Tokens

No unfired merge tokens (e.g., `{{first_name}}`, `[FIRST NAME]`) visible in the truncated source. No issues confirmed.

---

### 5. Compliance

**[FAIL] Plain-text MIME part absent (0 chars)**

CAN-SPAM and most ESP best-practice policies require a `text/plain` alternative part. An empty text body means:

- Spam filters (SpamAssassin, Proofpoint) score the message higher as suspicious
- Subscribers on plain-text clients or accessibility tools receive nothing
- Some corporate mail gateways silently drop HTML-only messages

**[WARN] Authentication-Results header not present**

SPF and DKIM pass/fail status could not be verified via the AgentMail relay. Sending domain is `us-news.comms.adidas.com` — if DKIM is not signed for this subdomain specifically (common oversight when ESPs add subdomain senders), DMARC may fail alignment even if the root domain passes.

**No issues found:** Unsubscribe link present (footer observed in CSS class references for `.mobile-footer-padding-block`). `NOINDEX, NOFOLLOW` robots meta correctly set to prevent web archive indexing.

---

### 6. Email-to-Site Continuity

**[WARN] `<meta name="referrer" content="no-referrer" />` suppresses click referrer data**

This tag is in the `<head>`:

```html
<meta name="referrer" content="no-referrer" />
```

When a subscriber clicks any link, the browser will send no `Referer` header to the landing page. If any landing page relies on `document.referrer` or server-side referrer logging for session attribution (separate from UTM params), that signal is zeroed out. UTM parameters embedded in tracking redirect targets are unaffected — but any fallback referrer-based attribution is broken.

UTM coverage on the 28 tracked links cannot be confirmed without resolving the redirect chain. No raw destination URLs with visible UTM params are present in the truncated source.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | Broken `/g/` click-redirect | Identify which CTA uses the `/g/` link type in the ESP template; re-map to `/o/` or the correct redirect path before send/resend |
| **P0** | Plain-text part is empty | Add a text/plain MIME alternative — even a minimal stripped-text version satisfies CAN-SPAM and improves deliverability scoring |
| **P1** | 5 HTTP image URLs | Update `image.link.adidas.com` and `click.comms.adidas.com` asset references to HTTPS in the template/CDN config |
| **P1** | Missing `alt` on content image | Add descriptive `alt` text to the `afd52f76` asset; set `alt=""` on the tracking pixel |
| **P2** | Malformed charset meta | Add `http-equiv="Content-Type"` to the charset `<meta>` tag |
| **P2** | Duplicate `@font-face` blocks | Consolidate into a single block using the longer fallback stack; remove the duplicate |
| **P2** | Verify DKIM alignment for `us-news.comms.adidas.com` | Confirm ESP is signing with a DKIM selector scoped to this subdomain; check DMARC alignment in a test send |
| **P3** | `no-referrer` meta | Evaluate whether this is intentional; if referrer-based analytics are used on landing pages, remove or change to `origin` |
## Recent history

- [[2026-04-27-comfort-style-and-more-comfort]] — 4/10 (2026-04-27)
- [[2026-04-27-extra-20-off-online-ends-tonight]] — 4/10 (2026-04-27)
- [[2026-04-26-extra-20-off-online-is-going-fast]] — 4/10 (2026-04-26)

