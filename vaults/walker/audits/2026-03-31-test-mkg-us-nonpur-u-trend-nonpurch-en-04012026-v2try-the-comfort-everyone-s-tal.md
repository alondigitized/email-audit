---
slug: 2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026-v2try-the-comfort-everyone-s-tal
type: email
date: 2026-03-31
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_V2Try the Comfort Everyone's Talking About"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_V2Try the Comfort Everyone's Talking About
**Score:** 6/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A trend-driven acquisition email targeting non-purchasers, built around a "Trend Report" editorial frame. The concept is solid — using trend credibility to nudge first-time buyers — but the execution compresses too many categories into a short format. The hero delivers the pitch clearly; the category modules below it do real work. The main weakness is density without depth: product thumbnails are small, copy is minimal, and no single product gets enough emphasis to drive conviction.

## What's working

- **Hero concept is on-brand and clear.** "Trend Report" with BOGO 50% off is a compelling hook for a non-purchaser — pairs aspiration (trending) with a financial incentive (discount) upfront.
- **Category architecture is logical.** Hands Free Slip-Ins → Street Style → Color → Best Sellers is a sensible funnel from trend-forward to familiar, covering multiple entry points.
- **"Best Sellers" anchor at the bottom** gives hesitant shoppers a safe choice, which is smart for this segment.
- **Color module works visually.** The light blue shoe against a soft background has strong contrast and vibrancy relative to the rest of the email.

## What's weak

- **Product thumbnails are too small.** Each category module shows 2–3 shoes at a size where details are hard to read. For a non-purchaser who hasn't seen these products before, this doesn't build enough desire.
- **Headlines are functional, not persuasive.** "Hands Free Slip-Ins," "Street Style," and "Color" are category labels — not reasons to buy. There's no supporting copy to justify why these trends matter to the reader.
- **The BOGO offer disappears after the hero.** It's introduced prominently at the top but not reinforced at any point-of-decision lower in the email.
- **CTA buttons are generic.** "Shop Now" repeated across every module offers no variety or category-specific pull. A non-purchaser needs more than a generic push.
- **Best Sellers module is too sparse.** The text list of categories (Men, Women, Clothing, Kids, Sale) reads like a footer nav, not a compelling product recommendation section.

## Recommendations

- 1. **Carry the BOGO offer through the body.** Reinforce "BOGO 50% Off" in at least one mid-email placement — ideally above Best Sellers — to remind non-purchasers of the financial incentive at the moment of decision.
- 2. **Upgrade CTA copy per section.** Replace generic "Shop Now" with category-specific language: "Shop Slip-Ins," "Explore Street Style," "Find Your Color." Small lift, measurable CTR improvement.
- 3. **Add one line of copy under each category headline.** A single sentence ("The hands-free style with 3M+ fans") makes a non-purchaser feel informed, not just browsed at.
- 4. **Feature one hero product per module.** Instead of 2–3 small thumbnails, show one dominant product image per section with a product name visible. Non-purchasers need a specific product to anchor desire.
- 5. **Replace the Best Sellers text list with actual product cards.** This module currently underperforms its position — it should close the email with high-confidence, visually compelling picks.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Subject line has `[Test]:` prefix and malformed campaign code | Strip `[Test]:`, add space/delimiter between campaign code and subject copy, or remove code from subject entirely before live send |
- | **P0** | All `image.emails.skechers.com` assets served over HTTP | Update CDN base URL to `https://` — likely a template-level fix, not per-image |
- | **P1** | Return Path pixel missing `https://` protocol | Fix to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
- | **P1** | ink1000.com open pixel served over HTTP | Upgrade to HTTPS endpoint or confirm vendor supports it |
- | **P2** | 4 images missing alt text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` PNGs; empty `alt=""` is acceptable for purely decorative images |
- | **P2** | SPF/DKIM unverified | Confirm authentication headers on a delivered copy before scaling send volume |
- | **P3** | UTM parameter alignment for V2 | Spot-check 2–3 click-redirect URLs to confirm `utm_campaign` matches the V2 variant identifier |

## Full review
## 1. Executive Summary

A trend-driven acquisition email targeting non-purchasers, built around a "Trend Report" editorial frame. The concept is solid — using trend credibility to nudge first-time buyers — but the execution compresses too many categories into a short format. The hero delivers the pitch clearly; the category modules below it do real work. The main weakness is density without depth: product thumbnails are small, copy is minimal, and no single product gets enough emphasis to drive conviction.

---

## 2. Business Impact Score

**6 / 10**

---

## 3. What's Working

- **Hero concept is on-brand and clear.** "Trend Report" with BOGO 50% off is a compelling hook for a non-purchaser — pairs aspiration (trending) with a financial incentive (discount) upfront.
- **Category architecture is logical.** Hands Free Slip-Ins → Street Style → Color → Best Sellers is a sensible funnel from trend-forward to familiar, covering multiple entry points.
- **"Best Sellers" anchor at the bottom** gives hesitant shoppers a safe choice, which is smart for this segment.
- **Color module works visually.** The light blue shoe against a soft background has strong contrast and vibrancy relative to the rest of the email.

---

## 4. What's Weak

- **Product thumbnails are too small.** Each category module shows 2–3 shoes at a size where details are hard to read. For a non-purchaser who hasn't seen these products before, this doesn't build enough desire.
- **Headlines are functional, not persuasive.** "Hands Free Slip-Ins," "Street Style," and "Color" are category labels — not reasons to buy. There's no supporting copy to justify why these trends matter to the reader.
- **The BOGO offer disappears after the hero.** It's introduced prominently at the top but not reinforced at any point-of-decision lower in the email.
- **CTA buttons are generic.** "Shop Now" repeated across every module offers no variety or category-specific pull. A non-purchaser needs more than a generic push.
- **Best Sellers module is too sparse.** The text list of categories (Men, Women, Clothing, Kids, Sale) reads like a footer nav, not a compelling product recommendation section.

---

## 5. Recommendations

1. **Carry the BOGO offer through the body.** Reinforce "BOGO 50% Off" in at least one mid-email placement — ideally above Best Sellers — to remind non-purchasers of the financial incentive at the moment of decision.
2. **Upgrade CTA copy per section.** Replace generic "Shop Now" with category-specific language: "Shop Slip-Ins," "Explore Street Style," "Find Your Color." Small lift, measurable CTR improvement.
3. **Add one line of copy under each category headline.** A single sentence ("The hands-free style with 3M+ fans") makes a non-purchaser feel informed, not just browsed at.
4. **Feature one hero product per module.** Instead of 2–3 small thumbnails, show one dominant product image per section with a product name visible. Non-purchasers need a specific product to anchor desire.
5. **Replace the Best Sellers text list with actual product cards.** This module currently underperforms its position — it should close the email with high-confidence, visually compelling picks.

---

## 6. Bottom Line

This email has a workable strategy — trend editorial + discount for non-purchasers — but it doesn't execute with enough product confidence or offer reinforcement to convert someone who's never bought. It reads like a catalog browse, not a curated recommendation. With a few targeted changes (offer repetition, stronger CTAs, featured products), this could punch significantly harder for its segment.

---

## 7. Evidence

**Overall purpose:** Acquisition/conversion of non-purchasers using trend credibility and a BOGO 50% off offer as the primary conversion lever.

**Hero / primary value proposition:** "Trend Report" editorial framing with BOGO 50% off prominently displayed. Shoe imagery in the hero is strong — multiple styles shown together communicate breadth. Clear CTA button present.

**Membership / benefits section:** None visible. No loyalty, rewards, or adiClub-style module present.

**Product discoverability / recommendation modules:** Four modules — Hands Free Slip-Ins, Street Style, Color, Best Sellers. Each shows 2–3 product thumbnail images. Modules are clearly labeled but shallow on context or copy.

**Utility / secondary modules:** Best Sellers section doubles as a utility nav with text-based category links (Men, Women, Clothing, Kids, Sale). Social icons and unsubscribe footer visible at the bottom.

**Bugs / friction / clarity issues:** No broken images detected. All modules render cleanly. The subject line contains the full internal campaign code (`[Test]: MKG_US_NONPUR_U_TREND...`) — this test prefix is visible and should not reach a live send in this state.

---

## Technical Audit

## Technical Audit — Skechers NONPUR Trend Email (04012026 V2)

---

### 1. Technical Summary

The email has two systemic issues requiring resolution before production send: all images on the `image.emails.skechers.com` CDN are served over HTTP (not HTTPS), and the subject line retains a `[Test]:` prefix plus an unseparated campaign code, indicating this is either a test artifact or a template finalization failure.

---

### 2. Link & Tracking Issues

**Return Path pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` prefix. Most email clients will treat this as a relative URL and silently fail to load it, breaking inbox placement monitoring.

**ink1000.com pixel — HTTP**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8091927189&mi_ecmp=MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026"
```
Plain HTTP. Will be blocked by Gmail, Apple Mail, and Outlook on iOS/Mac. Engagement tracking via this vendor will be unreliable.

**26 click-redirect links** — all routed through `click.emails.skechers.com`. Destinations and UTM parameters could not be verified programmatically (skipped by QA prober). Manual spot-check of final destinations recommended.

---

### 3. Rendering & Accessibility

**HTTP image sources — CDN-wide**

All images hosted on `image.emails.skechers.com` use HTTP, not HTTPS:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-...png  (Twitter)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/573ab181-...png  (Pinterest)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
+ 3 additional unnamed PNGs
```
These will be blocked or proxied by clients that enforce HTTPS (Gmail image proxy will rewrite them, but Outlook desktop and Apple Mail with "Block All Remote Content" will fail silently). The logo being HTTP is the highest-severity instance.

**Missing alt text — 4 images**
- `o.gif` (ink1000 tracking pixel) — low severity for a pixel, but technically flagged
- `49468f73-...png`
- `00100b23-...png`
- `fc08601a-...png`

Images without alt text render as broken icon boxes when images are blocked, with no fallback text for screen readers.

---

### 4. Personalization & Merge Tokens

**Subject line — unsanitized campaign code**

```
[Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_V2Try the Comfort Everyone's Talking About
```

Two problems:
1. `[Test]:` prefix — staging artifact, must be stripped before live send
2. `V2Try` — the campaign code `...04012026_V2` runs directly into the subject copy with no space or delimiter, suggesting the template variable or subject-line build script did not properly terminate the code before appending the consumer-facing copy

No unresolved `%%variable%%` or `{{merge_tag}}` tokens visible in the truncated HTML.

---

### 5. Compliance

**SPF/DKIM authentication — unverified**
QA warning: `Authentication-Results header not found`. SPF/DKIM status for `emails.skechers.com` could not be confirmed via the AgentMail relay. Should be verified against the raw message headers of a real delivered copy.

**Unsubscribe / CAN-SPAM footer** — not visible in the truncated HTML provided. Cannot confirm presence of physical mailing address and one-click unsubscribe. Requires full HTML review.

---

### 6. Email-to-Site Continuity

All 26 outbound links are wrapped by `click.emails.skechers.com` redirects. UTM parameters on final destination URLs could not be inspected without resolving the redirects. Given the subject line shows `04012026_V2` as the campaign identifier, UTM `utm_campaign` values on landing pages should be verified to match (V2 variant, not V1 or the base campaign code).

No broken link errors were returned by the QA prober for the click-redirect domain itself.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Subject line has `[Test]:` prefix and malformed campaign code | Strip `[Test]:`, add space/delimiter between campaign code and subject copy, or remove code from subject entirely before live send |
| **P0** | All `image.emails.skechers.com` assets served over HTTP | Update CDN base URL to `https://` — likely a template-level fix, not per-image |
| **P1** | Return Path pixel missing `https://` protocol | Fix to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
| **P1** | ink1000.com open pixel served over HTTP | Upgrade to HTTPS endpoint or confirm vendor supports it |
| **P2** | 4 images missing alt text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` PNGs; empty `alt=""` is acceptable for purely decorative images |
| **P2** | SPF/DKIM unverified | Confirm authentication headers on a delivered copy before scaling send volume |
| **P3** | UTM parameter alignment for V2 | Spot-check 2–3 click-redirect URLs to confirm `utm_campaign` matches the V2 variant identifier |
## Recent history

- [[2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026try-the-comfort-everyone-s-talkin]] — 5.5/10 (2026-03-31)
- [[2026-03-31-why-start-with-one-pair-when-you-can-save-with-two]] — 6/10 (2026-03-31)
- [[2026-03-31-your-items-are-waiting]] — 6/10 (2026-03-31)

