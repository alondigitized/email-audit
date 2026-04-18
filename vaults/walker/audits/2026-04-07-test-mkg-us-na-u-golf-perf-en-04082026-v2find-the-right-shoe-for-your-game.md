---
slug: 2026-04-07-test-mkg-us-na-u-golf-perf-en-04082026-v2find-the-right-shoe-for-your-game
type: email
date: 2026-04-07
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_GOLF_PERF_EN_04082026_V2Find the right shoe for your game"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NA_U_GOLF_PERF_EN_04082026_V2Find the right shoe for your game
**Score:** 6/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A focused golf performance email with solid creative assets and a clear category message. The visual storytelling is strong in the hero, but the email loses discipline quickly — pickleball and running modules dilute the golf narrative and undercut the "find the right shoe for your game" premise. The product featured in the second module is the most purchase-ready moment, but it gets less visual real estate than the lifestyle shot. The preview text is broken and wastes one of email marketing's highest-value fields.
- Strong creative foundation, weakened by category drift and a squandered preview text.

## What's working

- **Hero image is compelling.** A professional golfer mid-swing with clean course imagery communicates performance credibility immediately. "MASTER YOUR COURSE STYLE" is sharp and on-brand.
- **SKECHERS GOLF sub-brand is clearly established** at the top — this reads like a specialty email, not a generic blast.
- **Second module shows a specific product** (appears to be a GO:GOLF / BLADE TOUR-B shoe) with enough detail to drive consideration. The GO:GOLF logo adds authority.
- **Footer navigation is clean and complete** — WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE — easy to escape to the site.
- **Two distinct SHOP NOW CTAs** in the top two modules create natural action points without feeling overwhelming.

## What's weak

- **Preview text is a raw URL.** The inbox preview reads as a raw `https://view.emails.skechers.com` link — an immediate trust and engagement killer before the recipient even opens.
- **Category drift is significant.** After two golf modules, the email pivots to PICKLEBALL PICKS and RUNNING READY. This breaks the golf narrative entirely and makes the subject line ("Find the right shoe for your game") feel like a bait-and-switch.
- **"MORE PERFORMANCE FOOTWEAR" module underdelivers.** The header is there, the CTA is there, but no products are visible — just negative space and a button. It asks for click-through without earning it.
- **Hero body copy is too small to read at glance.** The descriptive text under "MASTER YOUR COURSE STYLE" is rendered at a size that disappears on mobile and requires effort even on desktop.
- **No price, offer, or urgency signal anywhere.** This is a pure lifestyle/brand email — there's no discount, no limited stock callout, no seasonal hook. That's a choice, but it lowers conversion intent.

## Recommendations

- 1. **Fix preview text immediately.** Replace the broken URL with a line like: *"Skechers Golf — performance footwear built for your best round."* This is a zero-cost fix with outsized impact on open rate.
- 2. **Cut or move the Pickleball and Running modules.** If cross-category exposure is a strategic must, relegate it to a single "Also from Skechers" footer row — not two prominent mid-email placements. Let the golf story breathe.
- 3. **Give the featured product more surface area.** The hero lifestyle shot and the specific shoe module should be closer to 50/50. Right now the shoe gets the short end.
- 4. **Add one friction-reducing element** — a brief "Free shipping on golf orders" line or a seasonal hook ("Spring round season is here") to bridge browsing intent to purchase intent.
- 5. **Make the "MORE PERFORMANCE FOOTWEAR" module earn its spot.** Show 2–3 product tiles with images; a naked CTA button is not a module, it's a placeholder.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Authentication-Results missing | Confirm SPF/DKIM pass on actual delivered message; do not send to full list without verified DMARC alignment |
- | **P0** | `[Test]:` prefix in subject | Strip test flag and fix subject-line template before production send |
- | **P0** | Subject line concatenation (`V2Find`) | Add space delimiter or strip campaign version token from consumer-facing subject |
- | **P1** | 14 images served over HTTP | Update all `image.emails.skechers.com` and `ink1000.com` `src` attributes to `https://` |
- | **P1** | Return Path pixel missing protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
- | **P2** | 4 images missing `alt` text | Add descriptive `alt` attributes to unnamed PNGs; use `alt=""` only for purely decorative spacers |
- | **P2** | 26 CTAs unverifiable | Run redirect-decode QA pass to confirm UTM params (`utm_source`, `utm_medium`, `utm_campaign`) are appended on all destination URLs |
- | **P3** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user accessibility settings on iOS |
- | **P3** | Plain-text URL ratio (71%) | Review plain-text mirror; reduce URL density to lower spam-filter surface area |

## Full review
## Email Review: Skechers Golf — "Find the right shoe for your game"

---

### 1. Executive Summary

A focused golf performance email with solid creative assets and a clear category message. The visual storytelling is strong in the hero, but the email loses discipline quickly — pickleball and running modules dilute the golf narrative and undercut the "find the right shoe for your game" premise. The product featured in the second module is the most purchase-ready moment, but it gets less visual real estate than the lifestyle shot. The preview text is broken and wastes one of email marketing's highest-value fields.

---

### 2. Business Impact Score: **6 / 10**

Strong creative foundation, weakened by category drift and a squandered preview text.

---

### 3. What's Working

- **Hero image is compelling.** A professional golfer mid-swing with clean course imagery communicates performance credibility immediately. "MASTER YOUR COURSE STYLE" is sharp and on-brand.
- **SKECHERS GOLF sub-brand is clearly established** at the top — this reads like a specialty email, not a generic blast.
- **Second module shows a specific product** (appears to be a GO:GOLF / BLADE TOUR-B shoe) with enough detail to drive consideration. The GO:GOLF logo adds authority.
- **Footer navigation is clean and complete** — WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE — easy to escape to the site.
- **Two distinct SHOP NOW CTAs** in the top two modules create natural action points without feeling overwhelming.

---

### 4. What's Weak

- **Preview text is a raw URL.** The inbox preview reads as a raw `https://view.emails.skechers.com` link — an immediate trust and engagement killer before the recipient even opens.
- **Category drift is significant.** After two golf modules, the email pivots to PICKLEBALL PICKS and RUNNING READY. This breaks the golf narrative entirely and makes the subject line ("Find the right shoe for your game") feel like a bait-and-switch.
- **"MORE PERFORMANCE FOOTWEAR" module underdelivers.** The header is there, the CTA is there, but no products are visible — just negative space and a button. It asks for click-through without earning it.
- **Hero body copy is too small to read at glance.** The descriptive text under "MASTER YOUR COURSE STYLE" is rendered at a size that disappears on mobile and requires effort even on desktop.
- **No price, offer, or urgency signal anywhere.** This is a pure lifestyle/brand email — there's no discount, no limited stock callout, no seasonal hook. That's a choice, but it lowers conversion intent.

---

### 5. Recommendations

1. **Fix preview text immediately.** Replace the broken URL with a line like: *"Skechers Golf — performance footwear built for your best round."* This is a zero-cost fix with outsized impact on open rate.
2. **Cut or move the Pickleball and Running modules.** If cross-category exposure is a strategic must, relegate it to a single "Also from Skechers" footer row — not two prominent mid-email placements. Let the golf story breathe.
3. **Give the featured product more surface area.** The hero lifestyle shot and the specific shoe module should be closer to 50/50. Right now the shoe gets the short end.
4. **Add one friction-reducing element** — a brief "Free shipping on golf orders" line or a seasonal hook ("Spring round season is here") to bridge browsing intent to purchase intent.
5. **Make the "MORE PERFORMANCE FOOTWEAR" module earn its spot.** Show 2–3 product tiles with images; a naked CTA button is not a module, it's a placeholder.

---

### 6. Bottom Line

This email knows what it wants to be — a Skechers Golf performance play — but it blinks halfway through. Fix the preview text (broken and embarrassing), commit to the golf narrative for the full scroll, and give the featured product room to close the sale. The bones are good; the execution needs one more editorial pass.

---

### 7. Evidence

**Overall purpose:** Drive traffic to Skechers Golf footwear, specifically performance/course-style product. Positioned around spring golf season.

**Hero / primary value proposition:** "MASTER YOUR COURSE STYLE" over a pro golfer lifestyle image. Strong visual, weak supporting copy legibility. No offer or urgency.

**Membership / benefits section:** None present.

**Product discoverability / recommendation modules:** One named product module (GO:GOLF / BLADE TOUR-B with logo) with SHOP NOW CTA. One vacuous "MORE PERFORMANCE FOOTWEAR" module with no products shown. PICKLEBALL PICKS and RUNNING READY rows appear below — each with imagery but off-topic relative to the email's stated purpose.

**Utility / secondary modules:** Standard footer nav (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE). Social icons. Standard unsubscribe/legal block.

**Bugs / friction / clarity issues:** Preview text renders as a raw URL in the inbox — visually confirmed from the subject/preview line. No other broken images or overlapping elements visible in the render.

---

## Technical Audit

## Technical Audit — Skechers Golf Performance Email
**Campaign:** `MKG_US_NA_U_GOLF_PERF_EN_04082026_V2`
**Captured:** 2026-04-07

---

### 1. Technical Summary

This test-tagged email has two systemic infrastructure defects: all image assets are served over HTTP (not HTTPS), and the Authentication-Results header is absent. Either issue alone is sufficient to suppress rendering or trigger spam filtering in major clients.

---

### 2. Link & Tracking Issues

**Subject line concatenation bug**
The subject reads `[Test]: MKG_US_NA_U_GOLF_PERF_EN_04082026_V2Find the right shoe for your game` — the campaign version token (`V2`) is concatenated directly against the subject copy with no delimiter or space. This indicates a template variable was not stripped or space-padded before assembly.

**`[Test]:` prefix present**
The subject line retains a test-environment prefix. If this send reached a live segment, subscribers saw internal campaign nomenclature.

**Return Path pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` prefix. In email client context this resolves as a relative path and will not fire. Inbox placement monitoring data from this send is unreliable.

**26 click-redirect links unprobed**
All CTAs route through `click.emails.skechers.com` with encrypted `qs=` payloads. Destination URLs and UTM parameters could not be verified by automated QA. Manual spot-check of decoded destinations is required before certifying link integrity.

**Krux DMP user-match pixels**
Two `beacon.krxd.net` user-match pixels fire in the hidden preheader block, one carrying a SHA-256 hashed subscriber UID:
```
partner_uid=af077ed316c5f351a19c6339a11ba29c13eca11083c2a7fd78f2d46c353dbb4f
```
Confirm this cross-device sync is covered under current privacy policy disclosures and consent signals for this segment.

---

### 3. Rendering & Accessibility

**HTTP image sources — systemic (14 assets)**
Every image served from `image.emails.skechers.com` uses `http://`. Gmail, Outlook.com, and Apple Mail proxy or block non-HTTPS resources by default. Affected assets include the Skechers logo, app store badges, all social icons, and footer imagery:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
... (10 additional)
```
Movable Ink open pixel also HTTP: `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif`

**Missing alt text — 4 images**
The following images have no `alt` attribute, breaking text-fallback rendering when images are blocked:
- `o.gif` (Movable Ink open pixel — acceptable for tracking pixels, but flag nonetheless)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

App store and social icon images do have alt text (`"Available on the App Store"`, `"Instagram"`, etc.) — no issue there.

**`-webkit-text-size-adjust: none`**
Set globally via `* { -webkit-text-size-adjust: none; }`. This disables iOS auto-font-scaling entirely rather than setting it to `100%`, which can render body copy too small on older iPhones without explicit `font-size` declarations on every text element.

---

### 4. Personalization & Merge Tokens

No unfired merge token syntax (e.g., `%%`, `{{`, `[[`) detected in the visible HTML. The campaign ID embedded in tracking pixel URLs (`MKG_US_NA_U_GOLF_PERF_EN_04082026`) is consistent and correctly formed.

The subject line campaign-code concatenation (see §2) is a build-time string error, not a runtime merge token failure.

---

### 5. Compliance

**Authentication-Results header absent**
SPF and DKIM pass/fail status is unverifiable from the captured message. Sending domain is `emails.skechers.com`; DMARC alignment cannot be confirmed. This is the highest-priority deliverability risk.

**CAN-SPAM / unsubscribe**
HTML is truncated so footer unsubscribe link could not be directly verified, but the presence of a standard Skechers footer structure in the CSS (`.bottom-nav`, `.legal`) is consistent with prior audited sends. Confirm physical mailing address and one-click unsubscribe are present in the full source.

**Privacy — third-party sync pixels**
Krux (`beacon.krxd.net`) and Movable Ink (`ink1000.com`) pixels fire before any user interaction. Ensure consent-gating is applied where required (CCPA/CPRA for CA subscribers).

---

### 6. Email-to-Site Continuity

All 26 CTAs pass through `click.emails.skechers.com` encrypted redirects — destination URLs and UTM parameter presence cannot be confirmed without decoding. The campaign ID `MKG_US_NA_U_GOLF_PERF_EN_04082026` appears correctly in open-tracking pixels, suggesting the ESP job was configured with the correct campaign identifier. UTM parameter verification requires manual link decode or a redirect-following QA pass against live links.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Authentication-Results missing | Confirm SPF/DKIM pass on actual delivered message; do not send to full list without verified DMARC alignment |
| **P0** | `[Test]:` prefix in subject | Strip test flag and fix subject-line template before production send |
| **P0** | Subject line concatenation (`V2Find`) | Add space delimiter or strip campaign version token from consumer-facing subject |
| **P1** | 14 images served over HTTP | Update all `image.emails.skechers.com` and `ink1000.com` `src` attributes to `https://` |
| **P1** | Return Path pixel missing protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
| **P2** | 4 images missing `alt` text | Add descriptive `alt` attributes to unnamed PNGs; use `alt=""` only for purely decorative spacers |
| **P2** | 26 CTAs unverifiable | Run redirect-decode QA pass to confirm UTM params (`utm_source`, `utm_medium`, `utm_campaign`) are appended on all destination URLs |
| **P3** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user accessibility settings on iOS |
| **P3** | Plain-text URL ratio (71%) | Review plain-text mirror; reduce URL density to lower spam-filter surface area |
## Recent history

- [[2026-04-07-test-mkg-us-na-u-golf-perf-en-04082026find-the-right-shoe-for-your-game]] — 6/10 (2026-04-07)
- [[2026-04-07-test-ret-us-na-u-store1408-zip-en-04092026celebrate-our-birthday-in-buffalo]] — 5/10 (2026-04-07)
- [[2026-04-07-you-ll-love-starting-spring-in-skechers-sandals]] — 6.5/10 (2026-04-07)

