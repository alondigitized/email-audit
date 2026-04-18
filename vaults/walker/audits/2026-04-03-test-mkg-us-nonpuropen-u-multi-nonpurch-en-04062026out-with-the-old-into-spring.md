---
slug: 2026-04-03-test-mkg-us-nonpuropen-u-multi-nonpurch-en-04062026out-with-the-old-into-spring
type: email
date: 2026-04-03
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUROPEN_U_MULTI_NONPURCH_EN_04062026Out with the Old & Into Spring 🌸"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NONPUROPEN_U_MULTI_NONPURCH_EN_04062026Out with the Old & Into Spring 🌸
**Score:** 5/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A competent but generic seasonal sale email targeting non-purchasers. The "Spring Cleaning" theme is coherent, the offer is clear, and the three-category structure covers the catalog efficiently. The problem: nothing here earns attention from someone who has never converted. There's no hook for the non-purchaser — no social proof, no urgency mechanism beyond "20% off," no reason why now is different from any prior email they ignored. It's a house email dressed up as acquisition.
- Functional execution on a weak strategic brief. Won't hurt, but unlikely to reactivate lapsed or unconverted prospects without a more compelling reason to act.

## What's working

- **Offer is immediately legible.** 20% off appears at the very top in a banner before the hero — no hunting required.
- **Three-way category split (Women / Men / Kids)** is efficient. Each gets its own product image and CTA, covering multi-demo households in one send.
- **Visual hierarchy is clean.** Spring Cleaning hero → category modules → 50% off closer. The escalating discount structure (20% at top, 50% at bottom) rewards scroll depth.
- **Category nav bar at the bottom** is a nice utility module — practical for anyone who wants to browse beyond the primary CTA.

## What's weak

- **The hero model image is underlit and compositionally flat.** The "Spring Cleaning" headline is large but the visual energy doesn't match seasonal optimism — the model looks posed against a neutral wall, not spring.
- **50% off at the bottom undermines the 20% off at the top.** If the deeper discount exists, leading with the smaller number feels like a bait-and-switch in reverse. The recipient who scrolls learns the lede is buried.
- **No product specificity in any module.** Each category shows one or two generic silhouettes with zero product names, prices, or style callouts. For a non-purchaser who doesn't already have brand affinity, this isn't enough to trigger desire.
- **"Spring Cleaning" as a theme is inert.** It's a clearance metaphor — fine for existing customers making room for new styles, but it signals old inventory to prospects, not fresh aspiration.
- **No social proof, no editorial voice.** No ratings, no "bestseller" labels, no copy beyond category names. The email reads like a flyer, not a brand communication.

## Recommendations

- 1. **Lead with the 50% off offer, not 20%.** Or structure it as a tiered reveal: "Up to 50% off" in the hero. Don't bury the strongest offer.
- 2. **Name at least one product per category.** Even a single hero shoe with a name and star rating makes the product modules feel curated rather than filler.
- 3. **Replace "Spring Cleaning" with aspirational spring framing** for this non-purchaser segment. "Your Spring Starts Here" or "New Season, New Favorites" speaks to acquisition, not clearance.
- 4. **Add one urgency signal.** A sale end date, inventory callout ("selling fast"), or countdown would give fence-sitters a reason to act today vs. later.
- 5. **Test a social proof module.** A single row — "4.8 stars · 12,000+ reviews" or a customer quote — would meaningfully differentiate this from competing promotional email in the same inbox.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | All `image.emails.skechers.com` URLs served over HTTP | Update CDN/image hosting to enforce HTTPS; update all `src=` values to `https://` |
- | **High** | `ink1000.com` tracking pixel over HTTP | Switch to HTTPS endpoint or remove if redundant with SFMC open tracking |
- | **High** | `[Test]:` subject prefix and campaign ID in subject line | Strip before production deployment |
- | **Medium** | 4 images missing `alt` text | Add descriptive `alt` for content images; `alt=""` for decorative/pixel images |
- | **Medium** | SPF/DKIM status unconfirmed | Verify authentication headers via header inspection on delivered copy |
- | **Medium** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve legibility of small text on iOS |
- | **Low** | CSS `display:none` mobile/desktop switching | Test on Outlook 2019/365; consider VML fallback or conditional comment approach if broken |
- | **Low** | CTA UTM params unverifiable from source | Click-test 3–5 links in staging to confirm UTM injection and landing page alignment |
- | **Low** | `List-Unsubscribe` header presence | Confirm SFMC is injecting header for this sending configuration |

## Full review
## Review: Skechers "Out with the Old & Into Spring" — Non-Purchaser Reactivation

---

### 1. Executive Summary

A competent but generic seasonal sale email targeting non-purchasers. The "Spring Cleaning" theme is coherent, the offer is clear, and the three-category structure covers the catalog efficiently. The problem: nothing here earns attention from someone who has never converted. There's no hook for the non-purchaser — no social proof, no urgency mechanism beyond "20% off," no reason why now is different from any prior email they ignored. It's a house email dressed up as acquisition.

---

### 2. Business Impact Score: **5/10**

Functional execution on a weak strategic brief. Won't hurt, but unlikely to reactivate lapsed or unconverted prospects without a more compelling reason to act.

---

### 3. What's Working

- **Offer is immediately legible.** 20% off appears at the very top in a banner before the hero — no hunting required.
- **Three-way category split (Women / Men / Kids)** is efficient. Each gets its own product image and CTA, covering multi-demo households in one send.
- **Visual hierarchy is clean.** Spring Cleaning hero → category modules → 50% off closer. The escalating discount structure (20% at top, 50% at bottom) rewards scroll depth.
- **Category nav bar at the bottom** is a nice utility module — practical for anyone who wants to browse beyond the primary CTA.

---

### 4. What's Weak

- **The hero model image is underlit and compositionally flat.** The "Spring Cleaning" headline is large but the visual energy doesn't match seasonal optimism — the model looks posed against a neutral wall, not spring.
- **50% off at the bottom undermines the 20% off at the top.** If the deeper discount exists, leading with the smaller number feels like a bait-and-switch in reverse. The recipient who scrolls learns the lede is buried.
- **No product specificity in any module.** Each category shows one or two generic silhouettes with zero product names, prices, or style callouts. For a non-purchaser who doesn't already have brand affinity, this isn't enough to trigger desire.
- **"Spring Cleaning" as a theme is inert.** It's a clearance metaphor — fine for existing customers making room for new styles, but it signals old inventory to prospects, not fresh aspiration.
- **No social proof, no editorial voice.** No ratings, no "bestseller" labels, no copy beyond category names. The email reads like a flyer, not a brand communication.

---

### 5. Recommendations

1. **Lead with the 50% off offer, not 20%.** Or structure it as a tiered reveal: "Up to 50% off" in the hero. Don't bury the strongest offer.
2. **Name at least one product per category.** Even a single hero shoe with a name and star rating makes the product modules feel curated rather than filler.
3. **Replace "Spring Cleaning" with aspirational spring framing** for this non-purchaser segment. "Your Spring Starts Here" or "New Season, New Favorites" speaks to acquisition, not clearance.
4. **Add one urgency signal.** A sale end date, inventory callout ("selling fast"), or countdown would give fence-sitters a reason to act today vs. later.
5. **Test a social proof module.** A single row — "4.8 stars · 12,000+ reviews" or a customer quote — would meaningfully differentiate this from competing promotional email in the same inbox.

---

### 6. Bottom Line

This email will generate some clicks from people already predisposed to Skechers. It won't reactivate true non-purchasers. The structure is sound but the content is thin and the offer hierarchy is counterproductive. Fix the discount lead and add product specificity — those are quick wins before the next send.

---

### 7. Evidence

**Overall purpose:** Seasonal spring sale promotion targeting non-purchasers / non-openers, driving first or renewed purchase across all major categories.

**Hero / primary value proposition:** "Spring Cleaning" headline with 20% off banner above. Single model in athletic wear. Spring energy is stated, not felt. CTA is "SHOP NOW" — generic.

**Membership / benefits section:** Not present. No loyalty, no member-exclusive framing.

**Product discoverability / recommendation modules:** Three category tiles — Women, Men, Kids — each with one product image and a "SHOP NOW" CTA. No product names, prices, or curated picks visible.

**Utility / secondary modules:** Category navigation bar (Women, Men, Kids, Clothing, New Arrivals, Sale) at the bottom. Practical, though positioned where most users have already dropped off.

**Bugs / friction / clarity issues:** No broken images or rendering failures visible. The 50% off banner at the bottom appears disconnected from the 20% off header — the relationship between the two offers is never explained in visible copy, which could create confusion about what actually applies to what.

---

## Technical Audit

## Technical Audit — Skechers "Out with the Old & Into Spring" (MKG_US_NONPUROPEN_U_MULTI_NONPURCH_EN_04062026)

---

### 1. Technical Summary

This is a test-flagged send (subject prefix `[Test]:` still present) with 26 click-tracked links and multiple tracking pixels across three third-party domains. The primary technical risk is pervasive use of HTTP (non-HTTPS) image sources — including the Skechers logo itself — which will be blocked or broken in security-enforcing clients.

---

### 2. Link & Tracking Issues

**Subject line test prefix not stripped**
Subject reads `[Test]: MKG_US_NONPUROPEN_U_MULTI_NONPURCH_EN_04062026Out with the Old & Into Spring 🌸`. The `[Test]:` prefix and the internal campaign ID (`MKG_US_...`) are both visible to recipients. If this is a production send, both must be removed.

**26 click-redirect links unverifiable**
All CTAs route through `click.emails.skechers.com` with encrypted `qs=eyJ...` payloads (base64-encoded). Destination URLs and UTM parameters cannot be directly inspected. QA skipped HTTP probing on all 26 — no broken link confirmation possible without decryption or live-click testing.

**Third-party tracking pixels present (3 domains)**
- `beacon.krxd.net` — two Krux/Salesforce Audience Studio user-match pixels, including one with a SHA-256 hashed `partner_uid` and one with a plaintext subscriber ID (`7187828`). These fire on open.
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — third-party open-tracking pixel over plain HTTP (see §3).
- `pixel.app.returnpath.net/pixel.gif` — Validity (formerly Return Path) inbox reputation pixel. Served over HTTP in source.

**Krux ad-impression beacon**
```
beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&advertiserid=100007688&campaignid=MKG_US_NONPUROPEN_U_MULTI_NONPURCH_EN_04062026
```
Campaign ID in beacon matches email — tracking alignment confirmed. However, this pixel fires for all opens including unsubscribed/inactive re-engagement targets depending on list segmentation; verify suppression list is applied before send.

---

### 3. Rendering & Accessibility

**Pervasive HTTP image sources (critical)**
All images hosted on `image.emails.skechers.com` are served over HTTP, not HTTPS. This includes the Skechers logo and all footer/social/payment badge images. Security-enforcing clients (Gmail, Outlook with HTTPS enforcement, corporate proxies) will block these, causing a fully broken image experience.

Affected sources (representative):
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  ← Skechers logo
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-eec2-471a-898d-0ca1cea7e115.png  ← App Store badge
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-4b38-483d-8459-cf54186a0b9f.png  ← Google Play badge
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-782c-4fb6-967b-d1dfa5ecbfdc.png  ← Instagram
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-512b-494d-892d-67dc067289b7.png  ← AfterPay
```
(Full list: 13 HTTP image warnings from QA)

**ink1000.com open-tracking pixel over HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9012945763&mi_ecmp=...
```
Plain HTTP — will be blocked or trigger mixed-content warnings. Also missing `alt=""`.

**Missing alt text — 4 images**
- `o.gif` (ink1000 pixel) — no `alt` attribute
- `49468f73-...png` — no `alt` attribute
- `00100b23-...png` — no `alt` attribute
- `fc08601a-...png` — no `alt` attribute

Images with functional purpose (navigation, content) require descriptive alt text for screen readers and image-blocked rendering. Decorative/pixel images should use `alt=""`.

**Mobile/desktop visibility toggle via CSS block display**
```css
.mobile-content { display: block; }
.desktop-content { display: none; }
@media screen and (min-width: 768px) {
  .mobile-content { display: none !important; }
  .desktop-content { display: block !important; }
}
```
CSS `display:none` toggling is not reliably supported in Outlook Desktop (which ignores `@media` queries). Outlook users may see mobile layout regardless of screen size. Verify with Litmus/Email on Acid on Outlook 2019/365.

**`-webkit-text-size-adjust: none`**
Applied globally via `* { -webkit-text-size-adjust: none; }`. This disables iOS auto-resize of small text, which can make legally required footer text (unsubscribe, address) unreadable on small viewports. The value `100%` is the safe alternative.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%FIELD%%` or `{{field}}`) are visible in the truncated source — dynamic content appears to have rendered.

The ink1000.com pixel contains `mi_u=9012945763` — a resolved subscriber ID. The Krux beacons contain a resolved SHA-256 hash and a plaintext subscriber ID (`7187828`). Personalization substitution is functioning for this test contact.

**No issues found** beyond the test-send artifacts noted in §2.

---

### 5. Compliance

**SPF/DKIM authentication status unknown**
QA was unable to confirm `Authentication-Results` headers via the AgentMail relay. SPF/DKIM/DMARC alignment for `emails.skechers.com` cannot be verified from this audit. Confirm via inbox header inspection or mail authentication reporting dashboard.

**CAN-SPAM requirements (unverifiable from truncated source)**
The HTML is truncated before the footer. The following are required and must be present:
- Physical mailing address
- Clear unsubscribe mechanism
- Unsubscribe must function within 10 business days

Verify these are present in the complete HTML footer.

**Unsubscribe header**
No `List-Unsubscribe` header was surfaced in the QA data. Confirm the ESP is injecting this at the SMTP layer (Salesforce Marketing Cloud typically does, but should be verified for this sending domain).

---

### 6. Email-to-Site Continuity

All 26 CTAs use opaque encrypted click-tracking URLs (`qs=eyJ...` — JWT or AES-encrypted payloads via `click.emails.skechers.com`). This means:
- UTM parameters are injected server-side at click-time by the ESP redirect layer — this is standard for SFMC and expected behavior.
- Destination URLs and UTM values **cannot be audited** from the HTML source alone.

The `mi_ecmp` campaign ID in the ink1000 pixel (`MKG_US_NONPUROPEN_U_MULTI_NONPURCH_EN_04062026`) matches the naming convention — cross-channel campaign ID consistency confirmed where visible.

**Action required:** Spot-check 3–5 CTA links post-decryption (click through in a test environment) to confirm UTM params (`utm_campaign`, `utm_medium`, `utm_source`) are present and landing pages match the promoted offer.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | All `image.emails.skechers.com` URLs served over HTTP | Update CDN/image hosting to enforce HTTPS; update all `src=` values to `https://` |
| **High** | `ink1000.com` tracking pixel over HTTP | Switch to HTTPS endpoint or remove if redundant with SFMC open tracking |
| **High** | `[Test]:` subject prefix and campaign ID in subject line | Strip before production deployment |
| **Medium** | 4 images missing `alt` text | Add descriptive `alt` for content images; `alt=""` for decorative/pixel images |
| **Medium** | SPF/DKIM status unconfirmed | Verify authentication headers via header inspection on delivered copy |
| **Medium** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve legibility of small text on iOS |
| **Low** | CSS `display:none` mobile/desktop switching | Test on Outlook 2019/365; consider VML fallback or conditional comment approach if broken |
| **Low** | CTA UTM params unverifiable from source | Click-test 3–5 links in staging to confirm UTM injection and landing page alignment |
| **Low** | `List-Unsubscribe` header presence | Confirm SFMC is injecting header for this sending configuration |
## Recent history

- [[2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-bout-with-the-old-into-spring]] — 6/10 (2026-04-03)
- [[2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-a-v2give-your-work-shoes-a-glow-up]] — 5/10 (2026-04-03)
- [[2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-agive-your-work-shoes-a-glow-up]] — 5/10 (2026-04-03)

