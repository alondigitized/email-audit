---
slug: 2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-b-v2one-pair-of-sandals-won-t-cut-it
type: email
date: 2026-04-06
persona: walker
score: "6.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V2One Pair of Sandals Won’t Cut It"
tags: [email, score-7, sender/skechers]
---
# [Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V2One Pair of Sandals Won’t Cut It
**Score:** 6.5/10 · **Type:** Email audit · **2026-04-06**
## Executive summary

- A solid seasonal sandal push anchored by a strong promotional offer (Buy One Get One 50% off) and clean gender segmentation. The email does a competent job of covering the sandal category broadly, but the layout loses focus in the bottom half — a tonal shift to "Walking in Style" sneakers undermines the sandal-season thesis, and the site-navigation footer module adds clutter without converting value.
- Strong top half, diluted bottom half. The offer is clear and the hero works, but the email is trying to do too much.

## What's working

- **Hero is unambiguous.** "SANDAL SEASON" in large display type, with the BOGO 50% offer immediately below — zero ambiguity about the ask.
- **Gender segmentation is clean.** Women / Men / Kids each get a dedicated section with product imagery and a category CTA. Logical, scannable, efficient.
- **Offer stays visible.** The promotional banner at the top ensures even a quick scroll keeps the deal in view.
- **Product imagery is functional.** Sandal shots are clear and category-appropriate.

## What's weak

- **Category drift.** The "Walking in Style" module breaks the sandal-season narrative. Sneakers mid-email feel like a separate send stitched in — it signals a lack of editorial focus.
- **"Keep It Casual" module is vague.** It sits beside "Walking in Style" but the product shown (a blue sneaker) doesn't reinforce sandals at all. Two non-sandal modules in a row is a structural problem.
- **"Only at Skechers" module is noisy.** The yellow/orange background creates high contrast that feels out-of-brand and visually loud after the cleaner top half.
- **Footer navigation bar is low-value.** The text link row (Women / Men / Kids / Clothing / New Arrivals / Sale) duplicates what the email body already covered. At this scroll depth, it's friction, not utility.
- **Preview text is broken.** The visible preview reads as a raw URL string — a clear pre-send QA failure that damages first impression in the inbox.

## Recommendations

- 1. **Cut or move the sneaker modules.** "Walking in Style" and "Keep It Casual" belong in a separate email. If cross-category coverage is a business requirement, move them below the fold and keep the sandal story intact through the first 2/3 of the email.
- 2. **Fix preview text before any live send.** The URL string in preview is the first thing recipients read. It must be replaced with compelling copy that reinforces the BOGO offer.
- 3. **Simplify the "Only at Skechers" module.** Reduce visual noise — either tone down the background color or restructure it as a lighter editorial callout.
- 4. **Remove the redundant nav footer.** That real estate is better used for a final CTA or a trust signal (free shipping, easy returns).
- 5. **Add one urgency signal.** The BOGO offer has no expiration visible anywhere in the email. Even a "this weekend only" line would lift urgency meaningfully.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | `[Test]:` subject prefix + malformed subject (no space before display text) | Strip test flag; fix concatenation before production send |
- | **High** | 13 HTTP image sources (`image.emails.skechers.com`) | Update CDN config or template URLs to HTTPS across all assets |
- | **High** | Movable Ink pixel over HTTP (`ink1000.com`) | Change scheme to HTTPS |
- | **Medium** | Campaign ID mismatch (`B` vs `B_V2`) in Krux and Movable Ink pixels | Align all pixel `campaignid`/`mi_ecmp` values to `B_V2` |
- | **Medium** | SPF/DKIM unverifiable | Confirm DMARC alignment for `emails.skechers.com`; review DNS records |
- | **Medium** | `mi_u` and Krux `partner_uid` may be static test values | Audit template to confirm both are SFMC merge fields |
- | **Medium** | 3 content images missing descriptive alt text | Add meaningful alt text; use `alt=""` for tracking pixels only |
- | **Low** | `maximum-scale=1` in viewport | Remove or replace with `maximum-scale=5` to restore user zoom |
- | **Low** | `-webkit-text-size-adjust: none` | Change to `100%` |
- | **Low** | Malformed `<meta>` tags (missing `http-equiv`) | Add correct `http-equiv` attributes to charset and IE-compat metas |

## Full review
## 1. Executive Summary

A solid seasonal sandal push anchored by a strong promotional offer (Buy One Get One 50% off) and clean gender segmentation. The email does a competent job of covering the sandal category broadly, but the layout loses focus in the bottom half — a tonal shift to "Walking in Style" sneakers undermines the sandal-season thesis, and the site-navigation footer module adds clutter without converting value.

---

## 2. Business Impact Score: **6.5 / 10**

Strong top half, diluted bottom half. The offer is clear and the hero works, but the email is trying to do too much.

---

## 3. What's Working

- **Hero is unambiguous.** "SANDAL SEASON" in large display type, with the BOGO 50% offer immediately below — zero ambiguity about the ask.
- **Gender segmentation is clean.** Women / Men / Kids each get a dedicated section with product imagery and a category CTA. Logical, scannable, efficient.
- **Offer stays visible.** The promotional banner at the top ensures even a quick scroll keeps the deal in view.
- **Product imagery is functional.** Sandal shots are clear and category-appropriate.

---

## 4. What's Weak

- **Category drift.** The "Walking in Style" module breaks the sandal-season narrative. Sneakers mid-email feel like a separate send stitched in — it signals a lack of editorial focus.
- **"Keep It Casual" module is vague.** It sits beside "Walking in Style" but the product shown (a blue sneaker) doesn't reinforce sandals at all. Two non-sandal modules in a row is a structural problem.
- **"Only at Skechers" module is noisy.** The yellow/orange background creates high contrast that feels out-of-brand and visually loud after the cleaner top half.
- **Footer navigation bar is low-value.** The text link row (Women / Men / Kids / Clothing / New Arrivals / Sale) duplicates what the email body already covered. At this scroll depth, it's friction, not utility.
- **Preview text is broken.** The visible preview reads as a raw URL string — a clear pre-send QA failure that damages first impression in the inbox.

---

## 5. Recommendations

1. **Cut or move the sneaker modules.** "Walking in Style" and "Keep It Casual" belong in a separate email. If cross-category coverage is a business requirement, move them below the fold and keep the sandal story intact through the first 2/3 of the email.
2. **Fix preview text before any live send.** The URL string in preview is the first thing recipients read. It must be replaced with compelling copy that reinforces the BOGO offer.
3. **Simplify the "Only at Skechers" module.** Reduce visual noise — either tone down the background color or restructure it as a lighter editorial callout.
4. **Remove the redundant nav footer.** That real estate is better used for a final CTA or a trust signal (free shipping, easy returns).
5. **Add one urgency signal.** The BOGO offer has no expiration visible anywhere in the email. Even a "this weekend only" line would lift urgency meaningfully.

---

## 6. Bottom Line

The top third of this email is doing its job well. The BOGO hook is sharp and the gender-segmented sandal sections are clean. But the email loses coherence once it pivots to sneakers — a recipient who clicked in for sandals is now being asked to think about something else entirely. Tighten the focus, fix the preview text, and this is an 8.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Promote Sandal Season with a BOGO 50% off offer, gender-segmented category CTAs |
| **Hero / primary value prop** | "SANDAL SEASON" display header + BOGO 50% banner. Clear and prominent. Works. |
| **Membership / benefits** | Not present |
| **Product discoverability** | Three gender lanes (Women, Men, Kids) each with sandal imagery and a shop CTA. Adequate but not deep — no individual product callouts or bestseller badges |
| **Utility / secondary modules** | "Walking in Style" sneaker module, "Keep It Casual" sneaker module, "Only at Skechers" exclusives block, text nav footer, social icons, legal footer |
| **Bugs / friction / clarity issues** | Preview text renders as a raw URL — visible QA failure. No other broken images or rendering errors observed. |

---

## Technical Audit

## Technical Audit — Skechers Sandals Email (MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V2)

---

### 1. Technical Summary

A Skechers SFMC sandals promotional email (B_V2 variant) with a retained `[Test]:` subject prefix and 13 image assets served over unencrypted HTTP, creating mixed-content blocking exposure across major clients. Campaign ID inconsistency between the subject line variant identifier and embedded tracking pixels will cause attribution fragmentation.

---

### 2. Link & Tracking Issues

**Campaign ID mismatch across pixels**
Subject line and creative identify this as variant `B_V2`, but both the Krux ad impression pixel and the Movable Ink pixel reference the base variant `B`:
- Krux: `campaignid=MKG_US_NA_U_SAND_GENDER_EN_04072026_B`
- Movable Ink: `mi_ecmp=MKG_US_NA_U_SAND_GENDER_EN_04072026_B`

Any reporting that splits on `B` vs `B_V2` will misattribute these opens/impressions.

**Movable Ink pixel over HTTP**
`http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9012945763&mi_ecmp=...`
Plain HTTP — will be blocked by Gmail, Outlook, and Apple Mail in mixed-content mode.

**26 click-through URLs** routed through `click.emails.skechers.com/?qs=eyJ...` (SFMC encrypted redirect, HTTPS). UTM parameter contents are not inspectable from the source; downstream UTM alignment cannot be confirmed without redirect resolution.

**Krux user-match pixels**: Two beacons present — one with a SHA-256 `partner_uid`, one with raw numeric `partner_uid=7187828`. Confirm the numeric value is a merge token and not a hardcoded test subscriber ID.

---

### 3. Rendering & Accessibility

**HTTP image sources — 13 affected assets**
All `image.emails.skechers.com` assets are served over HTTP. Affected images include the Skechers logo, app store badges, social icons, and multiple content images:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-eec2-471a-898d-0ca1cea7e115.png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-4b38-483d-8459-cf54186a0b9f.png  (Google Play)
... and 9 additional assets
```
These will be blocked or display broken in clients that enforce mixed-content policies.

**Missing alt text — 4 images**
- `o.gif` (Movable Ink pixel) — no `alt=""`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no alt
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — no alt
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — no alt

Content images require descriptive alt text; decorative/tracking pixels require `alt=""`.

**Viewport `maximum-scale=1`**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Disables user pinch-to-zoom on mobile — accessibility barrier (WCAG 1.4.4).

**`-webkit-text-size-adjust: none`**
Applied globally in `<style>`. Suppresses automatic font scaling on iOS; should be `100%` instead of `none`.

**Malformed `<meta>` tags**
Both of the following are missing their `http-equiv` attribute:
- Charset: `<meta content="text/html; charset=utf-8" />` → should be `http-equiv="Content-Type"`
- IE compat: `<meta content="IE=Edge" />` → should be `http-equiv="X-UA-Compatible"`

These are ignored by most clients today but represent malformed markup.

---

### 4. Personalization & Merge Tokens

**Movable Ink subscriber ID**
`mi_u=9012945763` in the Movable Ink pixel appears as a rendered static value in the provided source. Verify this is a dynamic SFMC merge field (e.g., `%%subscriberid%%`) and not a hardcoded test value that survived into production templates.

**Krux numeric subscriber ID**
`partner_uid=7187828` in the second Krux beacon — same concern as above; confirm it resolves per-subscriber.

No unrendered AMPscript or Handlebars-style merge tokens (`%%`, `{{`) are visible in the truncated source.

---

### 5. Compliance

**`[Test]:` prefix in subject line**
```
Subject: [Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V2One Pair of Sandals Won't Cut It
```
Test flag was not stripped before send. Also note there is no space between the internal campaign ID and the display subject ("B_V2**One** Pair...").

**SPF/DKIM authentication**
`Authentication-Results` header not detected via AgentMail relay. SPF/DKIM pass/fail status for `emails.skechers.com` is unverifiable. Confirm DMARC alignment is configured for this subdomain.

**Footer / CAN-SPAM**
HTML is truncated; unsubscribe mechanism and physical mailing address cannot be confirmed from provided source. Must be verified against the full render.

---

### 6. Email-to-Site Continuity

All 26 click links use SFMC's encrypted redirect (`?qs=eyJ...` base64 payload). UTM parameters — if present — are encoded inside the redirect and cannot be confirmed from the HTML source alone. QA probe was skipped on all 26. Recommend decrypting or following a sample of links to verify `utm_source`, `utm_medium`, and `utm_campaign` values are set correctly, and that `utm_campaign` matches the `B_V2` variant identifier (not bare `B`).

Preheader copy references "BOGO 50% Off or 20% Off 1 Pair" — offer alignment with landing page cannot be confirmed without link resolution.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | `[Test]:` subject prefix + malformed subject (no space before display text) | Strip test flag; fix concatenation before production send |
| **High** | 13 HTTP image sources (`image.emails.skechers.com`) | Update CDN config or template URLs to HTTPS across all assets |
| **High** | Movable Ink pixel over HTTP (`ink1000.com`) | Change scheme to HTTPS |
| **Medium** | Campaign ID mismatch (`B` vs `B_V2`) in Krux and Movable Ink pixels | Align all pixel `campaignid`/`mi_ecmp` values to `B_V2` |
| **Medium** | SPF/DKIM unverifiable | Confirm DMARC alignment for `emails.skechers.com`; review DNS records |
| **Medium** | `mi_u` and Krux `partner_uid` may be static test values | Audit template to confirm both are SFMC merge fields |
| **Medium** | 3 content images missing descriptive alt text | Add meaningful alt text; use `alt=""` for tracking pixels only |
| **Low** | `maximum-scale=1` in viewport | Remove or replace with `maximum-scale=5` to restore user zoom |
| **Low** | `-webkit-text-size-adjust: none` | Change to `100%` |
| **Low** | Malformed `<meta>` tags (missing `http-equiv`) | Add correct `http-equiv` attributes to charset and IE-compat metas |
## Recent history

- [[2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-bone-pair-of-sandals-won-t-cut-it]] — 6.5/10 (2026-04-06)
- [[2026-04-06-out-with-the-old-into-spring]] — 6/10 (2026-04-06)
- [[2026-04-06-your-cart-expires-soon]] — 5.5/10 (2026-04-06)

