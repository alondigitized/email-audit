---
slug: 2026-03-29-test-mkg-us-nonpur-u-best-nonpurch-en-03292026everybody-wants-these-styles
type: email
date: 2026-03-27
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026Everybody Wants These Styles"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026Everybody Wants These Styles
**Score:** 6/10 · **Type:** Email audit · **2026-03-27**
## Executive summary

- A non-purchaser reactivation email built around Skechers' "most searched styles" — a credibility hook that should work harder. The structure is logical (hero offer → category carousels → personalization nudge → utility footer), but the execution is compressed and hard to scan. Product photography is clean, but the modules are stacked tightly with minimal breathing room, making it read like a catalog page rather than a curated recommendation. The BOGO 50% off offer in the header is the strongest hook and arguably underutilized — it disappears too quickly and doesn't anchor the body copy.
- Competent but not compelling. The offer is real, the categories are on-trend, but the email doesn't create urgency or a strong reason to click *now* for a non-purchaser who hasn't converted yet.

## What's working

- **Hero offer is clear**: "BOGO 50% Off" with a "Shop Now" CTA is immediately visible at the top — no ambiguity on the value proposition.
- **"Most Searched Styles" framing**: Social proof positioning is smart for a non-purchaser segment; it lowers the barrier by validating popularity.
- **Category segmentation**: Sandals, Hands Free Slip-Ins, and Arch Fit are each called out as distinct modules with their own CTAs — helps users self-select.
- **"New & For You" section**: Personalization signal (even if light) adds relevance and a discovery mechanic.
- **Clean product imagery**: White/neutral backgrounds keep the focus on product silhouettes.

## What's weak

- **Header is cluttered**: The top navigation bar (Men / Women / Kids / Sale / etc.) competes visually with the hero offer. On a small render, both fight for attention and neither wins cleanly.
- **BOGO offer doesn't recur**: After the header, the promotional hook vanishes. Non-purchasers need repeated reinforcement; the offer should anchor at least one mid-body module.
- **Module labels are too small**: "SANDALS," "HANDS FREE SLIP-INS," "ARCH FIT" — the category headers are undersized relative to the product images. They don't command attention.
- **Weak body copy throughout**: There's minimal persuasion copy visible anywhere in the email. For a non-purchaser, you need a reason to believe, not just a product grid.
- **"New & For You" feels thin**: The section exists but the product count appears limited and the personalization rationale isn't stated — why are these *for me* specifically?
- **Footer is dense**: The social icons, legal copy, and utility links are packed tightly and visually heavy for the bottom of the email.

## Recommendations

- 1. **Repeat the BOGO offer mid-email** — add a banner or inline callout so the promotional incentive stays live through the category browsing sections.
- 2. **Increase category header size** — make "Sandals," "Hands Free Slip-Ins," and "Arch Fit" visually dominant so skimmers can orient instantly.
- 3. **Add one line of persuasion copy per category** — e.g., "The slip-on that's sold millions" or "Podiatrist-certified comfort." Non-purchasers need a reason to trust, not just a photo.
- 4. **Simplify the top navigation bar** — for email, reduce nav to 2–3 high-intent links (Women / Men / Sale) so the hero offer isn't crowded.
- 5. **Make "New & For You" earn its spot** — either surface more products or replace with a stronger social proof module (ratings, reviews count, bestseller badges).
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **P0** | `[Test]:` in subject line | Strip prefix; separate campaign ID from display subject before production |
- | **P0** | 14 HTTP image sources on `image.emails.skechers.com` | Migrate CDN to HTTPS; update all `src=` URLs |
- | **P1** | HTTP open pixel (`ink1000.com`) | Move to HTTPS endpoint or replace with SFMC native open tracking |
- | **P1** | Authentication-Results missing | Obtain raw delivered headers to confirm SPF/DKIM/DMARC pass before scaling send |
- | **P1** | Malformed `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` attributes |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG 1.4.4 compliance |
- | **P2** | 4 images missing alt text | Add descriptive alt text for content images; `alt=""` for decorative |
- | **P2** | Verify Krux pixel endpoint activity | Krux/Audience Studio EOL — confirm `beacon.krxd.net` still resolves and data is used |
- | **P3** | UTM pass-through | Spot-check 2–3 click links via redirect trace to confirm UTM parameters land correctly |

## Full review
## 1. Executive Summary

A non-purchaser reactivation email built around Skechers' "most searched styles" — a credibility hook that should work harder. The structure is logical (hero offer → category carousels → personalization nudge → utility footer), but the execution is compressed and hard to scan. Product photography is clean, but the modules are stacked tightly with minimal breathing room, making it read like a catalog page rather than a curated recommendation. The BOGO 50% off offer in the header is the strongest hook and arguably underutilized — it disappears too quickly and doesn't anchor the body copy.

---

## 2. Business Impact Score: 6/10

Competent but not compelling. The offer is real, the categories are on-trend, but the email doesn't create urgency or a strong reason to click *now* for a non-purchaser who hasn't converted yet.

---

## 3. What's Working

- **Hero offer is clear**: "BOGO 50% Off" with a "Shop Now" CTA is immediately visible at the top — no ambiguity on the value proposition.
- **"Most Searched Styles" framing**: Social proof positioning is smart for a non-purchaser segment; it lowers the barrier by validating popularity.
- **Category segmentation**: Sandals, Hands Free Slip-Ins, and Arch Fit are each called out as distinct modules with their own CTAs — helps users self-select.
- **"New & For You" section**: Personalization signal (even if light) adds relevance and a discovery mechanic.
- **Clean product imagery**: White/neutral backgrounds keep the focus on product silhouettes.

---

## 4. What's Weak

- **Header is cluttered**: The top navigation bar (Men / Women / Kids / Sale / etc.) competes visually with the hero offer. On a small render, both fight for attention and neither wins cleanly.
- **BOGO offer doesn't recur**: After the header, the promotional hook vanishes. Non-purchasers need repeated reinforcement; the offer should anchor at least one mid-body module.
- **Module labels are too small**: "SANDALS," "HANDS FREE SLIP-INS," "ARCH FIT" — the category headers are undersized relative to the product images. They don't command attention.
- **Weak body copy throughout**: There's minimal persuasion copy visible anywhere in the email. For a non-purchaser, you need a reason to believe, not just a product grid.
- **"New & For You" feels thin**: The section exists but the product count appears limited and the personalization rationale isn't stated — why are these *for me* specifically?
- **Footer is dense**: The social icons, legal copy, and utility links are packed tightly and visually heavy for the bottom of the email.

---

## 5. Recommendations

1. **Repeat the BOGO offer mid-email** — add a banner or inline callout so the promotional incentive stays live through the category browsing sections.
2. **Increase category header size** — make "Sandals," "Hands Free Slip-Ins," and "Arch Fit" visually dominant so skimmers can orient instantly.
3. **Add one line of persuasion copy per category** — e.g., "The slip-on that's sold millions" or "Podiatrist-certified comfort." Non-purchasers need a reason to trust, not just a photo.
4. **Simplify the top navigation bar** — for email, reduce nav to 2–3 high-intent links (Women / Men / Sale) so the hero offer isn't crowded.
5. **Make "New & For You" earn its spot** — either surface more products or replace with a stronger social proof module (ratings, reviews count, bestseller badges).

---

## 6. Bottom Line

This email will generate some clicks but won't punch above its weight for non-purchasers. The offer is there, the categories are right — but nothing creates a "this is for me" moment that drives a first conversion. Tighten the hierarchy, repeat the offer, and give each category a single compelling proof point.

---

## 7. Evidence

**Overall purpose:** Reactivation of non-purchasers via a BOGO 50% off offer anchored to trending/most-searched styles across key Skechers comfort categories.

**Hero / primary value proposition:** BOGO 50% Off with a "Shop Now" CTA — visible in the header banner. Clear but not reinforced below the fold.

**Membership / benefits section:** None visible. No loyalty program callout, no VIP messaging — a missed opportunity for non-purchasers who haven't yet converted.

**Product discoverability / recommendation modules:** Three category modules visible — Sandals (with at least 2 product images), Hands Free Slip-Ins (2 products), Arch Fit (2 products). Each has a labeled CTA button. Layout is consistent but crowded. A "New & For You" section appears lower in the email with a small product grid.

**Utility / secondary modules:** Footer contains social media icons (Instagram, Facebook, YouTube, Pinterest, TikTok visible), an app download prompt ("Download Our App"), and a "Common Footer" section with legal/unsubscribe links. Standard execution, slightly heavy.

**Bugs / friction / clarity issues:** No broken images observed. Text is legible at standard rendering size. The preview text in the subject line (visible in metadata) is raw URL/token bleed — not visible in the email body itself, but worth flagging as a deliverability/trust issue if recipients see it in their inbox preview pane.

---

## Technical Audit

## Technical Audit — Skechers "Everybody Wants These Styles" (MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026)

---

### 1. Technical Summary

This SFMC-delivered promotional email has a critical send-blocking issue (live `[Test]:` subject prefix) and a systemic HTTP image problem affecting 14+ assets across `image.emails.skechers.com`. SPF/DKIM authentication status could not be verified via relay headers.

---

### 2. Link & Tracking Issues

**`[Test]:` subject line prefix — send blocker**
The subject reads `[Test]: MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026Everybody Wants These Styles`. The test prefix was not stripped and the campaign ID was not separated from the display subject before this send.

**26 click-tracking links unverifiable**
All CTA links route through `click.emails.skechers.com/?qs=...` with encrypted payloads. Destination URLs and UTM integrity cannot be confirmed without decrypting or following redirects. See Section 6.

**Third-party tracking pixels**
Three `beacon.krxd.net` pixels fire on open:
- User-match pixel (SHA-256 hashed UID: `28374a795c423...`)
- Subid pixel (`partner_uid=2396422`)
- Ad impression pixel (campaignid=`MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026`)

These are consistent and appear resolved (no raw merge tokens). However, their presence should be reviewed against current privacy consent requirements — Krux/Salesforce Audience Studio was deprecated; verify this endpoint is still active and compliant.

**Return Path seed pixel**
`pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0...` — served over HTTP. Validity Risk: Everest (successor to Return Path) updated pixel domains. Confirm this endpoint remains active.

---

### 3. Rendering & Accessibility

**HTTP image sources — 14 assets affected**
All product/footer images are served from `http://image.emails.skechers.com/lib/...`. Gmail, Outlook.com, and Apple Mail enforce HTTPS for remote content; HTTP images will be blocked or generate mixed-content warnings.

Affected assets include:
- Skechers logo: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- App Store badge: `…/m/11/0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`
- Google Play badge: `…/m/11/9bb508d0-4b38-483d-8459-cf54186a0b9f.png`
- AfterPay logo: `…/m/11/07cb60b5-512b-494d-892d-67dc067289b7.png`
- Social icons (Instagram, Twitter, Facebook, Pinterest, YouTube): all `http://`
- 3 additional unnamed PNGs (`49468f73`, `00100b23`, `fc08601a`)

Also: open-tracking pixel at `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` is HTTP — open tracking will fail in clients that block mixed content.

**Missing alt text — 4 images**
- `o.gif` (ink1000 open pixel) — minor, tracking pixel
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content, no alt
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — unknown content, no alt
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — unknown content, no alt

Missing alt on non-decorative images breaks screen reader accessibility and degrades images-off rendering.

**Malformed `<meta>` tags**
Two meta tags are missing their `http-equiv` attribute:
```html
<meta content="text/html; charset=utf-8" />   <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                     <!-- missing http-equiv="X-UA-Compatible" -->
```
These are inert as written. Character encoding declaration will not be honored in older parsers; IE compatibility directive will not fire.

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
This disables the user's ability to scale text on iOS, which is a WCAG 1.4.4 (Resize Text) failure. Change to `100%` to preserve zoom without layout breaking.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`%%...%%` or `{{...}}`) are visible in the HTML snippet. The Krux `partner_uid` values appear populated (hashed subscriber ID and numeric subid resolved). Campaign ID `MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026` is consistent across all tracking pixels.

No issues found beyond the test-prefix problem noted in Section 2.

---

### 5. Compliance

**Authentication-Results header missing**
SPF/DKIM pass/fail status is unknown — the header was not present via the AgentMail relay. For a `no-reply@emails.skechers.com` sender, DMARC alignment requires either SPF on `emails.skechers.com` or DKIM signed by that domain. Cannot confirm without raw headers from a delivered copy.

**`[Test]:` subject prefix**
Confirms this was not intended as a live send, but if it reached real subscribers, the test label is a CAN-SPAM / subscriber trust issue.

**Unsubscribe / CAN-SPAM** — not verifiable from the truncated HTML snippet. Full source review required to confirm: physical mailing address present, one-click unsubscribe functional, and suppression list honored.

---

### 6. Email-to-Site Continuity

All 26 destination URLs are encrypted behind `click.emails.skechers.com/?qs=` redirects — UTM parameters cannot be inspected in source. This is standard SFMC behavior, but requires spot-checking via redirect trace to confirm:
- `utm_source`, `utm_medium`, `utm_campaign` are appended to landing pages
- Campaign value matches `MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026` (or a cleaned alias)
- BOGO 50% offer messaging matches the landing page state at time of send

No issues confirmed, but UTM pass-through is unverifiable from source alone.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **P0** | `[Test]:` in subject line | Strip prefix; separate campaign ID from display subject before production |
| **P0** | 14 HTTP image sources on `image.emails.skechers.com` | Migrate CDN to HTTPS; update all `src=` URLs |
| **P1** | HTTP open pixel (`ink1000.com`) | Move to HTTPS endpoint or replace with SFMC native open tracking |
| **P1** | Authentication-Results missing | Obtain raw delivered headers to confirm SPF/DKIM/DMARC pass before scaling send |
| **P1** | Malformed `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` attributes |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG 1.4.4 compliance |
| **P2** | 4 images missing alt text | Add descriptive alt text for content images; `alt=""` for decorative |
| **P2** | Verify Krux pixel endpoint activity | Krux/Audience Studio EOL — confirm `beacon.krxd.net` still resolves and data is used |
| **P3** | UTM pass-through | Spot-check 2–3 click links via redirect trace to confirm UTM parameters land correctly |
## Recent history

- [[2026-03-29-test-mkg-us-retpur-u-best-retail-en-03292026check-out-what-s-trending-online]] — 5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-bskechers-exclusives-the-shoes-you-can]] — 5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-a-v3fresh-spring-styles-to-step-up-you]] — 5/10 (2026-03-27)

