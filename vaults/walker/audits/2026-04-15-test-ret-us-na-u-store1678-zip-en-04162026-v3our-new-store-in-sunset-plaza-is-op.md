---
slug: 2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026-v3our-new-store-in-sunset-plaza-is-op
type: email
date: 2026-04-15
persona: walker
score: "2/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3Our New Store In Sunset Plaza Is Opening Tomorrow!"
tags: [email, score-2, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3Our New Store In Sunset Plaza Is Opening Tomorrow!
**Score:** 2/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- The body content alone would score ~6. The subject/preview failures drag this to a 2. In production, this email would generate confusion, distrust, and likely spam complaints rather than store traffic.

## What's working

- **Clear store identity.** Address and phone number are prominent in the hero. The "GET DIRECTIONS" CTA is well-placed immediately under the location info.
- **Strong promotional stack.** Buy 2, Get the 3rd Pair Free + a free tote bag (no purchase necessary, $25 value) is a compelling open-week combination — real incentive to visit.
- **Category modules are clean.** Women/Men/Girls/Boys photo tiles with "SHOP NOW" give shoppers a quick visual path into the catalog.
- **Utility modules are complete.** App download, text sign-up, curbside pickup, Afterpay/Klarna, and Find a Store are all present — covers the expected utility checklist.

## What's weak

- **Subject line is a QA disaster.** `[Test]:` prefix and the full internal campaign token (`RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3`) are exposed to the recipient verbatim.
- **Preview text is raw JSON-LD.** The schema.org Organization markup renders as the preheader snippet. No recipient-facing copy was set. In an inbox, this reads as broken code.
- **"GET DIRECTIONS" is the CTA for the B2G3 offer.** The promotional offer module uses a Directions button, not a Shop Now or Redeem button. That's a UX mismatch — the offer is in-store, but the CTA should still drive clarity on how to act on the deal.
- **Hero image is generic.** The outdoor lifestyle photography doesn't signal "grand opening" or St. Louis. A store facade or opening-event visual would anchor the moment better.
- **No urgency deadline on the free tote.** The offer is positioned as a bonus but lacks a clear end date in the visible render, reducing urgency.

## Recommendations

- 1. **Fix subject and preview immediately.** Strip `[Test]:` and the campaign code token from the subject. Set explicit preview text: e.g., "Grand opening tomorrow — free tote + buy 2 get 3rd free."
- 2. **Swap the B2G3 CTA.** Replace "GET DIRECTIONS" with "SHOP IN STORE" or "SEE OFFER DETAILS" under the promotional banner.
- 3. **Add a deadline to the tote offer.** Even "Opening week only" would close the urgency gap.
- 4. **Consider a store/event image in the hero.** A Sunset Plaza exterior or ribbon-cutting visual makes the opening moment feel real and local.
- 5. **QA checklist before any production send** must include: subject line preview, preview text render, and CTA-destination alignment.
- | Priority | Action |
- |---|---|
- | **Critical** | Remove `[Test]:` prefix from subject line before production send |
- | **Critical** | Fix campaign token concatenation in subject (`_V3Our New…` → `_V3 Our New…` or strip token entirely) |
- | **High** | Migrate all `image.emails.skechers.com` asset URLs from `http://` to `https://` — affects logo, all footer icons, at minimum 10 images |
- | **High** | Migrate `ink1000.com` open pixel to `https://` |
- | **High** | Add `https://` scheme to Return Path pixel (`pixel.app.returnpath.net/pixel.gif`) — currently a broken relative URL |
- | **Medium** | Add `alt=""` to tracking pixel (`o.gif`) and descriptive alt text to the unnamed content image (`49468f73-…png`) |
- | **Medium** | Confirm SPF/DKIM authentication passes on `emails.skechers.com` for production relay |
- | **Medium** | Manually verify UTM parameter pass-through on at least one CTA link post-redirect |
- | **Low** | Scope the `-webkit-text-size-adjust: none` reset to specific selectors rather than applying it globally via `*` |
- | **Low** | Confirm CAN-SPAM footer (physical address + unsubscribe) is present in full HTML — not verifiable from truncated source |

## Full review
## 2. Business Impact Score: **2 / 10**

The body content alone would score ~6. The subject/preview failures drag this to a 2. In production, this email would generate confusion, distrust, and likely spam complaints rather than store traffic.

---

## 3. What's Working

- **Clear store identity.** Address and phone number are prominent in the hero. The "GET DIRECTIONS" CTA is well-placed immediately under the location info.
- **Strong promotional stack.** Buy 2, Get the 3rd Pair Free + a free tote bag (no purchase necessary, $25 value) is a compelling open-week combination — real incentive to visit.
- **Category modules are clean.** Women/Men/Girls/Boys photo tiles with "SHOP NOW" give shoppers a quick visual path into the catalog.
- **Utility modules are complete.** App download, text sign-up, curbside pickup, Afterpay/Klarna, and Find a Store are all present — covers the expected utility checklist.

---

## 4. What's Weak

- **Subject line is a QA disaster.** `[Test]:` prefix and the full internal campaign token (`RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3`) are exposed to the recipient verbatim.
- **Preview text is raw JSON-LD.** The schema.org Organization markup renders as the preheader snippet. No recipient-facing copy was set. In an inbox, this reads as broken code.
- **"GET DIRECTIONS" is the CTA for the B2G3 offer.** The promotional offer module uses a Directions button, not a Shop Now or Redeem button. That's a UX mismatch — the offer is in-store, but the CTA should still drive clarity on how to act on the deal.
- **Hero image is generic.** The outdoor lifestyle photography doesn't signal "grand opening" or St. Louis. A store facade or opening-event visual would anchor the moment better.
- **No urgency deadline on the free tote.** The offer is positioned as a bonus but lacks a clear end date in the visible render, reducing urgency.

---

## 5. Recommendations

1. **Fix subject and preview immediately.** Strip `[Test]:` and the campaign code token from the subject. Set explicit preview text: e.g., "Grand opening tomorrow — free tote + buy 2 get 3rd free."
2. **Swap the B2G3 CTA.** Replace "GET DIRECTIONS" with "SHOP IN STORE" or "SEE OFFER DETAILS" under the promotional banner.
3. **Add a deadline to the tote offer.** Even "Opening week only" would close the urgency gap.
4. **Consider a store/event image in the hero.** A Sunset Plaza exterior or ribbon-cutting visual makes the opening moment feel real and local.
5. **QA checklist before any production send** must include: subject line preview, preview text render, and CTA-destination alignment.

---

## 6. Bottom Line

The offer stack is legitimate and the layout is functional. But this email cannot be sent as-is — the subject line and preview text are broken in ways that will immediately signal to recipients (and spam filters) that something is wrong. Fix the production QA failures first; then the body content is serviceable for a grand-opening send.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3Our New Store In Sunset Plaza Is Opening Tomorrow!`
- **Length:** 95 characters
- **Scores (1-10):** Clarity `1`, Curiosity `2`, Personalization `3`, Urgency `4`, Specificity `5`
- **Strengths:**
  - The trailing consumer-facing copy ("Our New Store In Sunset Plaza Is Opening Tomorrow!") is direct and specific — location + timing in one line.
  - Urgency is implied by "Tomorrow."
- **Weaknesses:**
  - `[Test]:` prefix and the full internal campaign slug make this unsendable and destroy credibility instantly.
  - At 95 characters, even without the garbage prefix, this is too long for most mobile inbox previews.
- **Alt A:** `Our Sunset Plaza Store Opens Tomorrow — Free Tote + Buy 2 Get 3rd Free`
- **Alt B:** `Grand Opening Tomorrow: Skechers Sunset Plaza, St. Louis`

---

## 8. Evidence

- **Overall purpose:** Local store grand opening announcement driving foot traffic to the new Skechers Sunset Plaza location in St. Louis.
- **Hero / primary value proposition:** "Opening Tomorrow — Skechers Sunset Plaza" with full address and phone number, anchored by a "GET DIRECTIONS" button. Strong location signal, generic lifestyle imagery.
- **Membership / benefits section:** None visible. No loyalty or rewards module present.
- **Product discoverability / recommendation modules:** Four category tiles (Women, Men, Girls, Boys) with lifestyle photography and SHOP NOW CTAs. A text-link row below covers Women / Men / Kids / Clothing / New Arrivals / Sale.
- **Utility / secondary modules:** Text-to-join SMS opt-in, app download (App Store + Google Play), curbside pickup, Afterpay/Klarna payment options, and Find a Store — full expected utility stack.
- **Bugs / friction / clarity issues (visible in render):**
  - Subject line exposes `[Test]:` prefix and raw internal campaign token.
  - Preview text is raw JSON-LD schema markup, not consumer copy.
  - "GET DIRECTIONS" CTA is mismatched to the B2G3 promotional module.

---

## Technical Audit

## Technical Audit — Skechers Store Opening Email
**Campaign:** `RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3` | **Reviewed:** 2026-04-15

---

### 1. Technical Summary

This email is built on Salesforce Marketing Cloud and served through `emails.skechers.com`. It contains two blocking issues requiring resolution before live deployment: a `[Test]:` subject line prefix that was not stripped, and widespread use of HTTP (non-HTTPS) image URLs that will be blocked or replaced with broken images in most modern email clients.

---

### 2. Link & Tracking Issues

**`[Test]:` prefix left in subject line**
The delivered subject reads: `[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3Our New Store In Sunset Plaza Is Opening Tomorrow!`
- The `[Test]:` prefix was not removed before send.
- The campaign token `RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3` is concatenated directly to the subject copy with no separator (`_V3Our New Store…`), indicating a template string assembly error.

**26 tracked links — pass-through unverifiable**
All 26 click links route through `click.emails.skechers.com`. QA probing was skipped on this domain. UTM parameter presence on destination URLs cannot be confirmed. Should be validated manually or via click-trace check against landing pages.

**Return Path seed pixel — missing protocol**
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
No `https://` or `http://` scheme is present. Browsers and email clients will treat this as a relative URL, making the pixel non-functional. The Return Path deliverability seed loop will not record an open for this send.

**ink1000.com pixel — HTTP**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8004129222&mi_ecmp=RET_US_NA_U_STORE1678_ZIP_EN_04162026"
```
Served over plain HTTP. Gmail, Outlook.com, and Apple Mail proxy or block non-HTTPS resources. This pixel will fail to fire on a significant portion of opens.

**Krux (Salesforce DMP) user-match beacons**
Three `beacon.krxd.net` pixels are present — one with a SHA-256 hashed email value and one with a raw subscriber ID (`partner_uid=32884357`). These are served over HTTPS and functional, but the presence of a plaintext subscriber ID in a pixel URL is worth confirming against DMP data governance policy.

---

### 3. Rendering & Accessibility

**HTTP image sources — 10+ assets affected**
All `image.emails.skechers.com` content assets are served over HTTP:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/00100b23-...png  (Curbside Pickup)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/fc08601a-...png  (Find A Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
```
Gmail proxies all HTTP image URLs through its own cache servers; Apple Mail on iOS 15+ blocks mixed content outright. The logo and all footer icons are at risk of rendering broken.

**Missing alt text — 2 images**
- `o.gif` (ink1000 tracking pixel) — `alt` attribute absent
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — `alt` attribute absent

Tracking pixels should use `alt=""` explicitly. The content image missing alt text is a WCAG 2.1 Level A failure (Success Criterion 1.1.1) and causes degraded experience when images are disabled.

**`-webkit-text-size-adjust: none`**
The global reset `* { -webkit-text-size-adjust: none; }` prevents iOS Mail from auto-sizing small text. For recipients who rely on browser/OS text scaling for accessibility, this suppresses that behavior globally.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens or visible placeholder strings (e.g., `%%FIRST_NAME%%`, `{{var}}`) are present in the HTML source excerpt. The preheader "Buy 2 Pairs, Get the 3rd Free + a Free Tote" is hardcoded and renders correctly. The open-tracking pixel URL in SFMC format (`open.aspx?7DWWZZSLU6RULGVYELU5SJGVXA.100219`) appears subscriber-specific as expected.

The subscriber-level `mi_u=8004129222` value on the ink1000 pixel confirms per-recipient tokenization is functioning on that beacon.

---

### 5. Compliance

**SPF/DKIM status unknown**
QA finding: `Authentication-Results header not found — SPF/DKIM status unknown`. This is most likely an artifact of how the test message was relayed through AgentMail, not a production sending infrastructure failure — but it cannot be confirmed from the available data. Production sends must be verified to pass SPF and DKIM alignment on `emails.skechers.com` before deployment.

**CAN-SPAM / unsubscribe**
The HTML source is truncated and the footer is not visible in the provided excerpt. Physical mailing address and one-click unsubscribe mechanism are required under CAN-SPAM. These cannot be confirmed or denied from the truncated source — the full HTML should be checked to ensure both are present in the footer.

**Subject line test prefix**
As noted in §2, the `[Test]:` prefix is present in the live subject line of this test send. If this template is used for the production deployment without removing it, the subject prefix constitutes a false or misleading header under CAN-SPAM §5(a)(2).

---

### 6. Email-to-Site Continuity

All outbound links pass through the `click.emails.skechers.com` redirect domain. The Krux impression pixel confirms the campaign ID `RET_US_NA_U_STORE1678_ZIP_EN_04162026` is being passed to the DMP. Whether UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are appended to final destination URLs after the redirect is not verifiable from this data — this must be confirmed by manually following at least one CTA link through to the landing page and inspecting the URL in-browser.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **Critical** | Remove `[Test]:` prefix from subject line before production send |
| **Critical** | Fix campaign token concatenation in subject (`_V3Our New…` → `_V3 Our New…` or strip token entirely) |
| **High** | Migrate all `image.emails.skechers.com` asset URLs from `http://` to `https://` — affects logo, all footer icons, at minimum 10 images |
| **High** | Migrate `ink1000.com` open pixel to `https://` |
| **High** | Add `https://` scheme to Return Path pixel (`pixel.app.returnpath.net/pixel.gif`) — currently a broken relative URL |
| **Medium** | Add `alt=""` to tracking pixel (`o.gif`) and descriptive alt text to the unnamed content image (`49468f73-…png`) |
| **Medium** | Confirm SPF/DKIM authentication passes on `emails.skechers.com` for production relay |
| **Medium** | Manually verify UTM parameter pass-through on at least one CTA link post-redirect |
| **Low** | Scope the `-webkit-text-size-adjust: none` reset to specific selectors rather than applying it globally via `*` |
| **Low** | Confirm CAN-SPAM footer (physical address + unsubscribe) is present in full HTML — not verifiable from truncated source |
## Recent history

- [[2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026-v2our-new-store-in-plaza-at-sunset-hi]] — 5/10 (2026-04-15)
- [[2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026our-new-store-in-plaza-at-sunset-hills]] — 5/10 (2026-04-15)
- [[2026-04-15-test-ret-us-na-u-store1669-zip-en-04162026our-new-store-in-johnstown-is-opening-]] — 3/10 (2026-04-15)

