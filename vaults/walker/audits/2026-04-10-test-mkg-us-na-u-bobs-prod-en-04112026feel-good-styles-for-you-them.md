---
slug: 2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026feel-good-styles-for-you-them
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026Feel-Good Styles for You & Them 🐾"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026Feel-Good Styles for You & Them 🐾
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A BOBS-focused promotional email anchored around National Pet Day and a BOGO 50% off offer. The hero is on-brand and emotionally resonant — woman + puppy + BOBS charitable angle is a natural fit. The structural layout is clean and flows logically from hero to category to new arrivals. However, this email has a critical production error: the `[Test]:` tag and the raw internal campaign ID (`MKG_US_NA_U_BOBS_PROD_EN_04112026`) are both visible in the subject line, and the preview text is a raw tracking URL — all of which signal a live deployment of what should have been a test send.
- Strong creative concept, undermined by a deliverability-killing subject line and a broken preview text experience. If this went to a live list, the "[Test]:" prefix and raw URL preview likely tanked open rates and damaged sender trust.

## What's working

- **Hero concept is strong.** National Pet Day + BOBS is a natural, emotionally engaging tie-in. The lifestyle photo (woman, dog, sunny outdoors setting) reinforces warmth and the BOBS charitable mission without needing to explain it.
- **BOGO offer is prominent and legible.** "BUY ONE, GET ONE 50% OFF" is the first thing the eye hits — clear, high-conversion hook.
- **"SHOP BOBS" CTA is correctly scoped.** It directs to BOBS specifically, not the generic Skechers catalog, which keeps the user journey consistent.
- **Category grid (Women / Men) is clean.** Product photography is consistent in quality and scale. Four-up product tiles work well at this email width.
- **New Arrivals as a closer is smart.** It functions as a secondary conversion layer for recipients who scroll past the hero.

## What's weak

- **Subject line is broken for production.** `[Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026Feel-Good Styles for You & Them 🐾` — the internal test prefix and campaign code ID are raw and fully visible. This is a QA failure, not a styling choice.
- **Preview text is a raw tracking URL.** Recipients see `Skechers® https://view.emails.skechers.com/?vawpToken=...` in their inbox preview pane — this reads as spam and creates immediate distrust before the email is even opened.
- **Men's section is significantly weaker than Women's.** The Women's product grid shows four clear, well-photographed styles; the Men's section appears to show fewer, darker product shots that don't carry the same visual weight or variety.
- **New Arrivals section is vague.** The section header "NEW ARRIVALS" is present but the photography and framing doesn't clarify what's new — it doesn't connect back to the BOBS or National Pet Day theme, making the email lose narrative focus at the bottom.
- **No explicit BOBS charitable callout in the body.** The emotional hook of BOBS (they donate to animal shelters) is the single most relevant message for a National Pet Day campaign and it's invisible in the email body.

## Recommendations

- 1. **Stop the send immediately if not already deployed.** The `[Test]:` prefix and broken preview text are live defects. If this hit production, assess list impact.
- 2. **Fix the subject line** to: `Feel-Good Styles for You & Them 🐾` — clean, on-brief, no internal metadata.
- 3. **Set a real preview text.** Something like: `Celebrate National Pet Day with BOBS™ — buy one, get one 50% off.` This doubles as a teaser and a value statement.
- 4. **Add a BOBS giving callout in the hero or just below it.** One line — e.g., "Every BOBS purchase helps shelter dogs find homes." This is the campaign's emotional differentiator and it's not being used.
- 5. **Strengthen the Men's section.** Match the product count and image brightness to the Women's grid. Parity matters for audience trust.
- 6. **Tie New Arrivals back to the campaign theme.** Flag which new arrivals are BOBS styles, or use the closing module to reinforce the National Pet Day / giving message.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Campaign ID bleed in subject line | Fix SFMC template subject field — add missing space/newline separator between campaign ID variable and subject copy |
- | **P0** | `[Test]:` prefix in subject | Remove test prefix before production deployment |
- | **P1** | Return Path pixel — no protocol | Change `src="pixel.app.returnpath.net/..."` → `src="https://pixel.app.returnpath.net/..."` |
- | **P1** | All `image.emails.skechers.com` assets over HTTP | Migrate all `src` attributes from `http://` to `https://` |
- | **P1** | ink1000 tracking pixel over HTTP | Change `http://www.ink1000.com/...` to `https://` |
- | **P1** | SPF/DKIM unverifiable | Validate authentication chain through AgentMail relay; confirm DMARC `p=` policy passes |
- | **P2** | Missing alt text on 3 content images | Add descriptive `alt` values to `49468f73`, `00100b23`, `fc08601a` PNGs |
- | **P2** | `maximum-scale=1` in viewport | Remove `maximum-scale=1` to restore pinch-to-zoom (WCAG 1.4.4) |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` across all `*` and body selectors |
- | **P3** | Krux DMP hashed-email passthrough | Legal review: confirm CCPA/GDPR disclosure covers SHA-256 email sync to Krux |
- | **P3** | `<meta>` charset malformed | Add `http-equiv="Content-Type"` attribute |
- | **P3** | UTM passthrough — unauditable | Expand a test click link post-send to verify UTM params survive SFMC encryption |

## Full review
## Executive Summary

A BOBS-focused promotional email anchored around National Pet Day and a BOGO 50% off offer. The hero is on-brand and emotionally resonant — woman + puppy + BOBS charitable angle is a natural fit. The structural layout is clean and flows logically from hero to category to new arrivals. However, this email has a critical production error: the `[Test]:` tag and the raw internal campaign ID (`MKG_US_NA_U_BOBS_PROD_EN_04112026`) are both visible in the subject line, and the preview text is a raw tracking URL — all of which signal a live deployment of what should have been a test send.

---

## Business Impact Score: 5 / 10

Strong creative concept, undermined by a deliverability-killing subject line and a broken preview text experience. If this went to a live list, the "[Test]:" prefix and raw URL preview likely tanked open rates and damaged sender trust.

---

## What's Working

- **Hero concept is strong.** National Pet Day + BOBS is a natural, emotionally engaging tie-in. The lifestyle photo (woman, dog, sunny outdoors setting) reinforces warmth and the BOBS charitable mission without needing to explain it.
- **BOGO offer is prominent and legible.** "BUY ONE, GET ONE 50% OFF" is the first thing the eye hits — clear, high-conversion hook.
- **"SHOP BOBS" CTA is correctly scoped.** It directs to BOBS specifically, not the generic Skechers catalog, which keeps the user journey consistent.
- **Category grid (Women / Men) is clean.** Product photography is consistent in quality and scale. Four-up product tiles work well at this email width.
- **New Arrivals as a closer is smart.** It functions as a secondary conversion layer for recipients who scroll past the hero.

---

## What's Weak

- **Subject line is broken for production.** `[Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026Feel-Good Styles for You & Them 🐾` — the internal test prefix and campaign code ID are raw and fully visible. This is a QA failure, not a styling choice.
- **Preview text is a raw tracking URL.** Recipients see `Skechers® https://view.emails.skechers.com/?vawpToken=...` in their inbox preview pane — this reads as spam and creates immediate distrust before the email is even opened.
- **Men's section is significantly weaker than Women's.** The Women's product grid shows four clear, well-photographed styles; the Men's section appears to show fewer, darker product shots that don't carry the same visual weight or variety.
- **New Arrivals section is vague.** The section header "NEW ARRIVALS" is present but the photography and framing doesn't clarify what's new — it doesn't connect back to the BOBS or National Pet Day theme, making the email lose narrative focus at the bottom.
- **No explicit BOBS charitable callout in the body.** The emotional hook of BOBS (they donate to animal shelters) is the single most relevant message for a National Pet Day campaign and it's invisible in the email body.

---

## Recommendations

1. **Stop the send immediately if not already deployed.** The `[Test]:` prefix and broken preview text are live defects. If this hit production, assess list impact.
2. **Fix the subject line** to: `Feel-Good Styles for You & Them 🐾` — clean, on-brief, no internal metadata.
3. **Set a real preview text.** Something like: `Celebrate National Pet Day with BOBS™ — buy one, get one 50% off.` This doubles as a teaser and a value statement.
4. **Add a BOBS giving callout in the hero or just below it.** One line — e.g., "Every BOBS purchase helps shelter dogs find homes." This is the campaign's emotional differentiator and it's not being used.
5. **Strengthen the Men's section.** Match the product count and image brightness to the Women's grid. Parity matters for audience trust.
6. **Tie New Arrivals back to the campaign theme.** Flag which new arrivals are BOBS styles, or use the closing module to reinforce the National Pet Day / giving message.

---

## Bottom Line

The creative direction is sound and the offer is compelling — National Pet Day + BOBS + BOGO is a natural triple lock. But this email should not have reached recipients in its current state. The subject line and preview text failures alone would suppress open rates and potentially trigger spam filters. Fix the deployment errors first; then invest in surfacing the BOBS charitable angle that is the entire reason this campaign has emotional leverage.

---

## Evidence

**Overall purpose:** Drive BOBS footwear purchases for National Pet Day via a BOGO 50% off offer, leveraging the BOBS brand's animal-welfare mission.

**Hero / primary value proposition:** "BUY ONE, GET ONE 50% OFF" is above the fold and clearly legible. The lifestyle image is warm and on-brand. The "Celebrate National Pet Day with BOBS™" subheadline is present but the giving mission is not reinforced. CTA ("SHOP BOBS") is appropriately specific.

**Membership / benefits section:** None visible. No loyalty, rewards, or account-specific messaging present.

**Product discoverability / recommendation modules:** Two category modules — Women and Men — each with a product grid and "SHOP NOW" CTA. Women's grid is stronger (four distinct styles, good variety). Men's is lighter. New Arrivals module closes the email as a secondary discovery layer.

**Utility / secondary modules:** Navigation bar (Women, Men, Kids, Clothing, New Arrivals, Sale) is present above the footer. App download prompt and social media icons appear in the footer.

**Bugs / friction / clarity issues (visible in render):**
- `[Test]:` prefix visible in subject line — production deployment of a test send
- Internal campaign code `MKG_US_NA_U_BOBS_PROD_EN_04112026` is concatenated directly into the subject line with no space before the actual subject copy
- Preview text renders as a raw tracking URL visible in inbox — appears as potential spam to recipients

---

## Technical Audit

## Technical Audit — MKG_US_NA_U_BOBS_PROD_EN_04112026

---

### 1. Technical Summary

Two production-blocking issues are present: the subject line contains a leaked campaign ID token concatenated directly to the display text, and all image assets are served over HTTP. Seventeen additional warnings cover mixed-content images, missing alt attributes, and a protocol-stripped deliverability pixel.

---

### 2. Link & Tracking Issues

**Return Path pixel — missing protocol**
`src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"` has no `https://` prefix. Most clients interpret this as a relative URL; the seed-list deliverability pixel will fail to fire entirely.

**ink1000.com tracking pixel — HTTP**
`src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=MKG_US_NA_U_BOBS_PROD_EN_04112026"` — served over HTTP, blocked in Gmail, Apple Mail, and Outlook 365.

**26 click links — unverifiable but structurally sound**
All routed through `click.emails.skechers.com` with SFMC-encrypted `qs=` params. No broken links detected; UTM passthrough cannot be confirmed without decrypting payloads (see §6).

**Krux DMP user-match — hashed email passthrough**
`https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=c30973d6f4e31a55c5dcae7d3c3df0d73fcb04747ff44220a92abd05cee475c2` — the `sha25` partner type and 64-char hex value confirm a SHA-256-hashed subscriber email is being transmitted to the Krux DMP for audience syncing. Warrants legal/privacy review (see §5).

---

### 3. Rendering & Accessibility

**HTTP image assets — 13 images**
All `image.emails.skechers.com` assets use `http://`. Affected images include the Skechers logo, all social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), App Store/Google Play badges, and the AfterPay logo. Gmail rewrites to HTTPS via proxy; Apple Mail and Outlook 365 may block or break these images.

**Missing alt text — 3 content images**
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

The ink1000 `o.gif` tracking pixel is also flagged but `alt=""` is acceptable for decorative/invisible pixels.

**`-webkit-text-size-adjust: none` applied globally**
`* { -webkit-text-size-adjust: none; }` overrides user accessibility settings on iOS/Safari, preventing text scaling. WCAG 1.4.4 requires text to be resizable to 200% without loss of content. Should be `100%`.

**`maximum-scale=1` in viewport meta**
`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />` disables pinch-to-zoom on mobile. WCAG 1.4.4 violation.

**`<meta>` charset — missing `http-equiv`**
`<meta content="text/html; charset=utf-8" />` is malformed for XHTML 1.0 Transitional. Should be `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`.

---

### 4. Personalization & Merge Tokens

**Subject line — campaign ID token bleed (P0)**
Subject field reads: `[Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026Feel-Good Styles for You & Them 🐾`

The campaign ID `MKG_US_NA_U_BOBS_PROD_EN_04112026` is concatenated directly to the subject line with no delimiter — a missing newline or space in the SFMC template subject field. This is a production-blocking defect.

**`[Test]:` prefix present**
Confirms QA/test state. Must be stripped before deployment.

**No unresolved merge tokens detected**
Preheader renders as a plain string: `"Give Back When You BOGO 50% off or Take 20% off 1 Pair"`. No `%%variable%%` or `{{handlebars}}` tokens visible in the truncated source.

---

### 5. Compliance

**Authentication-Results header — unverifiable**
Per QA: SPF/DKIM status unknown via AgentMail relay. DMARC alignment cannot be confirmed. Sending domain is `emails.skechers.com`; authentication chain through the relay must be verified before deployment.

**CAN-SPAM / unsubscribe**
HTML is truncated — physical mailing address and unsubscribe mechanism cannot be confirmed from available source. No flag raised without evidence of absence; verify in full render.

**Krux DMP hashed-email sync — privacy flag**
SHA-256-hashed subscriber email transmitted to `beacon.krxd.net` for third-party audience matching. Under CCPA and GDPR, hashed email is still personal data. Confirm this behavioral targeting disclosure is present in the Skechers privacy policy and opt-out path.

---

### 6. Email-to-Site Continuity

SFMC's encrypted `qs=` click-tracking scheme does not expose destination URLs in plaintext — UTM parameter passthrough cannot be audited from the HTML source. UTMs must be embedded in destination URLs prior to SFMC link encryption; this should be verified in the SFMC send configuration or by manually expanding a test click link.

Campaign ID is consistent across all three tracking systems:
- ink1000: `mi_ecmp=MKG_US_NA_U_BOBS_PROD_EN_04112026`
- Krux ad impression: `campaignid=MKG_US_NA_U_BOBS_PROD_EN_04112026`
- Subject/send metadata: `MKG_US_NA_U_BOBS_PROD_EN_04112026`

No issues found with cross-system campaign ID alignment.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Campaign ID bleed in subject line | Fix SFMC template subject field — add missing space/newline separator between campaign ID variable and subject copy |
| **P0** | `[Test]:` prefix in subject | Remove test prefix before production deployment |
| **P1** | Return Path pixel — no protocol | Change `src="pixel.app.returnpath.net/..."` → `src="https://pixel.app.returnpath.net/..."` |
| **P1** | All `image.emails.skechers.com` assets over HTTP | Migrate all `src` attributes from `http://` to `https://` |
| **P1** | ink1000 tracking pixel over HTTP | Change `http://www.ink1000.com/...` to `https://` |
| **P1** | SPF/DKIM unverifiable | Validate authentication chain through AgentMail relay; confirm DMARC `p=` policy passes |
| **P2** | Missing alt text on 3 content images | Add descriptive `alt` values to `49468f73`, `00100b23`, `fc08601a` PNGs |
| **P2** | `maximum-scale=1` in viewport | Remove `maximum-scale=1` to restore pinch-to-zoom (WCAG 1.4.4) |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` across all `*` and body selectors |
| **P3** | Krux DMP hashed-email passthrough | Legal review: confirm CCPA/GDPR disclosure covers SHA-256 email sync to Krux |
| **P3** | `<meta>` charset malformed | Add `http-equiv="Content-Type"` attribute |
| **P3** | UTM passthrough — unauditable | Expand a test click link post-send to verify UTM params survive SFMC encryption |
## Recent history

- [[2026-04-10-test-ret-us-na-u-store1423-zip-en-04102026-v2sale-ends-soon-celebrate-our-birthd]] — 6/10 (2026-04-10)
- [[2026-04-10-your-perfect-first-pair-is-here]] — 5/10 (2026-04-10)
- [[2026-04-10-your-cart-expires-soon]] — 5/10 (2026-04-10)

