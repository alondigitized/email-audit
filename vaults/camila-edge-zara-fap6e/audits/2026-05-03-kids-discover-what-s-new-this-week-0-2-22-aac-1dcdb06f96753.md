---
slug: 2026-05-03-kids-discover-what-s-new-this-week-0-2-22-aac-1dcdb06f96753
type: email
date: 2026-05-03
persona: camila-edge-zara-fap6e
score: "3/10"
sender: Zara
subject: "Kids | Discover what's new this week"
tags: [email, score-3, sender/zara]
---
# Kids | Discover what's new this week
**Score:** 3/10 · **Type:** Email audit · **2026-05-03**
## Executive summary

- A Zara Kids new-arrivals editorial email — minimalist grid of editorial lifestyle photography, no explicit discount, no price callouts, and very sparse copy. It reads like a brand lookbook pushed to an inbox: beautiful imagery but almost no reason to click beyond general browsing curiosity. For a persona not primarily shopping for children's clothing, this lands as low-relevance.

## What's working

- **Clean visual execution.** The editorial photography is high-quality and on-brand for Zara's aesthetic — muted tones, lifestyle staging, consistent editorial feel.
- **No clutter.** The sparse layout doesn't fight itself; there's no visual noise.
- **App download CTA** at the bottom is clearly rendered with store badge icons — it's a secondary conversion path that's at least legible.

## What's weak

- **Zero offer.** No price, no discount, no exclusive, no free shipping threshold. Nothing economic to motivate a click.
- **No readable CTAs in the body.** Product section labels ("NEW IN A-LINE SKIRT", "MINI ME FLORAL DRESS", etc.) are in tiny caption-weight text and don't read as clickable buttons.
- **Wrong category for this persona.** Kids apparel sent to an adult male subscriber is a targeting miss — unless the subscriber has explicitly indicated a child in the household, this is spray-and-pray segmentation.
- **No urgency.** "Discover what's new this week" implies an infinite refresh window with no reason to act today.
- **Product detail is absent.** No sizing, no colorways, no availability callouts — just a photo and a micro-caption label.

## Recommendations

- 1. **Add one price anchor.** Even "From $X" per product tile materially lifts click intent vs. pure editorial.
- 2. **Make category CTAs visible.** Each product block should have a clearly rendered "Shop now" or "View all" button — not just a caption.
- 3. **Segment before sending.** Kids new-arrivals should gate on household/family signals. An adult subscriber with no child-purchase history shouldn't receive this.
- 4. **Use the preheader.** The subject is vague; the preheader is wasted space. A line like "New linen sets, floral dresses + matching styles — just landed" would add specificity before the open.
- 5. **Add one time signal.** "New this week" is ephemeral but not urgent. "New in — arrives fast, sizes selling out" creates actual scarcity.
- | Priority | Issue | Fix |
- |---|---|---|
- | High | Malformed `<div>` wrapping `<tr>` | Restructure preheader block; apply `mso-hide` to `<td>` |
- | High | Unfired macro blocks | Audit ESP template pipeline; confirm supplemental data source is bound |
- | High | Duplicate/conflicting CAMPAIGN_CODE | Emit a single, consistent code; standardize locale tag |
- | Medium | `user-scalable=no` | Remove from viewport meta |
- | Medium | `#999898` link color | Raise to ≥ 4.5:1 contrast or override in all text sections |
- | Medium | Google Fonts `<link>` | Remove or inline; drop `cyrillic` subset for US-en sends |
- | Medium | Internal Spanish comments in output HTML | Strip all `<!-- -->` template comments at render time |
- | Low | Viewport semicolons | Replace `;` separators with `,` |
- | Verify | CAN-SPAM physical address + unsubscribe | Confirm present in full source |
- | Verify | UTM coverage on all CTAs | Audit all `<a href>` in full source |

## Full review
---

## 1. Executive Summary

A Zara Kids new-arrivals editorial email — minimalist grid of editorial lifestyle photography, no explicit discount, no price callouts, and very sparse copy. It reads like a brand lookbook pushed to an inbox: beautiful imagery but almost no reason to click beyond general browsing curiosity. For a persona not primarily shopping for children's clothing, this lands as low-relevance.

---

## 2. Business Impact Score

**3/10**

Signals TRUE:
- Sender is a brand I recognize / am subscribed to
- No render bugs visible — images load, layout is clean

Signals NOT met: No concrete offer (no %/$ off, no free shipping), CTA copy is absent or invisible, no demographic match (adult male persona vs. Kids category), no loyalty/member benefits shown, no urgency, hero is editorial not offer-led.

---

## 3. What's Working

- **Clean visual execution.** The editorial photography is high-quality and on-brand for Zara's aesthetic — muted tones, lifestyle staging, consistent editorial feel.
- **No clutter.** The sparse layout doesn't fight itself; there's no visual noise.
- **App download CTA** at the bottom is clearly rendered with store badge icons — it's a secondary conversion path that's at least legible.

---

## 4. What's Weak

- **Zero offer.** No price, no discount, no exclusive, no free shipping threshold. Nothing economic to motivate a click.
- **No readable CTAs in the body.** Product section labels ("NEW IN A-LINE SKIRT", "MINI ME FLORAL DRESS", etc.) are in tiny caption-weight text and don't read as clickable buttons.
- **Wrong category for this persona.** Kids apparel sent to an adult male subscriber is a targeting miss — unless the subscriber has explicitly indicated a child in the household, this is spray-and-pray segmentation.
- **No urgency.** "Discover what's new this week" implies an infinite refresh window with no reason to act today.
- **Product detail is absent.** No sizing, no colorways, no availability callouts — just a photo and a micro-caption label.

---

## 5. Recommendations

1. **Add one price anchor.** Even "From $X" per product tile materially lifts click intent vs. pure editorial.
2. **Make category CTAs visible.** Each product block should have a clearly rendered "Shop now" or "View all" button — not just a caption.
3. **Segment before sending.** Kids new-arrivals should gate on household/family signals. An adult subscriber with no child-purchase history shouldn't receive this.
4. **Use the preheader.** The subject is vague; the preheader is wasted space. A line like "New linen sets, floral dresses + matching styles — just landed" would add specificity before the open.
5. **Add one time signal.** "New this week" is ephemeral but not urgent. "New in — arrives fast, sizes selling out" creates actual scarcity.

---

## 6. Bottom Line

Zara's design execution is on-brand and clean, but this is an editorial mailer with no commercial hook and a segmentation miss. It belongs in a lookbook, not an inbox push. Without an offer, a CTA hierarchy, or relevance to the recipient's category, it will drive low opens and lower clicks. Easily a 2-3 point score lift with a single price anchor and improved segmentation.

---

## 7. Subject Line Analysis

- **Subject:** `Kids | Discover what's new this week`
- **Length:** 38 characters
- **Scores (1-10):** Clarity `6`, Curiosity `3`, Personalization `1`, Urgency `2`, Specificity `3`
- **Strengths:**
  - Under 50 chars — mobile-friendly length
  - Category prefix "Kids |" is clear segmentation signal at a glance
- **Weaknesses:**
  - "Discover what's new" is filler — it says nothing about what's actually new
  - Zero urgency, zero offer, zero persona hook
- **Alt A:** `Kids | New linen sets + floral dresses just landed`
- **Alt B:** `New this week: Zara Kids | Styles selling fast`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — no intentional preheader visible; inbox likely shows first image alt text or nothing
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (none)
- **Weaknesses:**
  - Missing preheader is a wasted second impression opportunity — the subject already says very little, and there's no supporting copy to add context
  - Inbox clients will auto-populate junk text (alt tags, nav copy), which looks unprofessional
- **Alt A:** `Fresh arrivals for kids — linen, floral, and matching sets. Shop now.`
- **Alt B:** `New in: breezy summer styles for kids, just added this week.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** 3/10
- **Signals counted:** Sender display name recognizable, subject under 50 chars, no spam signals
- **Rationale:** Zara is a known brand so the sender clears the trust bar, but "Kids | Discover what's new this week" has no hook — no offer, no personalization, no urgency. A non-parent adult has minimal pull to open.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** 2/10
- **Signals counted:** No render/friction issues (images load cleanly), brand voice is consistent
- **Rationale:** The email opens to an editorial grid with no price anchors, no visible button CTAs, and no category relevance to this persona. There's nothing to click toward beyond general curiosity, and curiosity alone doesn't convert.

---

## 11. Evidence

- **Overall purpose:** New-arrivals editorial announcement for Zara Kids category — weekly cadence, no promotional offer.
- **Hero / primary value proposition:** Large editorial image (girl in Zara clothing, outdoor urban setting) — no copy overlay, no price, no offer.
- **Membership / benefits section:** None visible.
- **Product discoverability / recommendation modules:** 4–5 product tile rows visible, each with a small photo and a caption-sized label (e.g., "IN A-LINE SKIRT", "MINI ME FLORAL", "NEW IN STRAIGHT LEG"). No pricing, no CTA buttons, no hover states — purely editorial.
- **Utility / secondary modules:** "Download our app" module at the bottom with App Store / Google Play badge icons — the only explicit conversion CTA in the email.
- **Bugs / friction / clarity issues:** None visible — images render cleanly, layout is intact, no broken assets or overlapping text. The only friction is design-by-omission: no priced CTAs, no buttons, no preheader.

---

## Technical Audit

## Technical Audit — Zara Kids Weekly (2026-05-03)

---

### 1. Technical Summary

The email renders from a well-structured ESP template but ships with internal template scaffolding artifacts (unfired macros, Spanish-language build comments) visible in the source, and contains a malformed HTML block that will degrade rendering in strict clients. Several accessibility and tracking inconsistencies are also present.

---

### 2. Link & Tracking Issues

**Duplicate CAMPAIGN_CODE with conflicting locale suffix**
The campaign code comment appears twice with different values:
```
<!-- CAMPAIGN_CODE:zara;2026_05_03_Norte_kids_weekly_03_05;US_en-->
<!-- CAMPAIGN_CODE:zara;2026_05_03_Norte_kids_weekly_03_05;US-->
```
The first includes `US_en`, the second omits the language tag. If downstream analytics ingest this comment as a signal, one pass will record a different locale than the other. Standardize to a single declaration.

**UTM coverage not verifiable** — the HTML is truncated before any `<a href>` tags appear. A full-source check is required to confirm UTM parameters are present and consistent on all CTA links.

---

### 3. Rendering & Accessibility

**Malformed `<div>` wrapping `<tr>` elements (structural error)**
At the preheader block:
```html
<!--[if !mso 9]><!-->
<div style="mso-hide:all;">
  <tr>
    <td ...>
```
A `<div>` cannot legally wrap `<tr>` elements outside a `<table>`. Most email clients will attempt error recovery, but strict parsers (some Outlook versions, Samsung Mail) may strip or reorder the affected rows. Move the `mso-hide` style to the enclosing `<td>` or use a wrapping `<table>` instead.

**`user-scalable=no` in viewport meta**
```html
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;" />
```
This prevents pinch-to-zoom on mobile, blocking users who rely on magnification for accessibility. Remove `user-scalable=no` and `maximum-scale=1.0`.

**Non-standard viewport separator characters**
The same meta tag uses semicolons (`;`) between viewport properties. The spec requires commas. Some parsers are tolerant, but this is technically invalid and can cause misparse on older WebKit.

**Low-contrast default link color**
```css
a { color: #999898; }
```
`#999898` on `#ffffff` yields a contrast ratio of approximately 2.8:1 — well below the WCAG AA minimum of 4.5:1 for body text. Links styled with this default will fail accessibility checks.

**External Google Fonts request**
```html
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap&subset=cyrillic,cyrillic-ext" rel="stylesheet">
```
Gmail (web and Android), Outlook, and Apple Mail block external stylesheet requests; the font will silently fall back to the system sans-serif. Additionally, `&subset=cyrillic,cyrillic-ext` is included for a `US_en` send — unnecessary payload. Either inline the font-face declarations or remove the `<link>` and rely on the fallback stack declared in the media query.

---

### 4. Personalization & Merge Tokens

**Unfired macro blocks left in source (× 2 sets)**
The following comment pairs appear twice in the rendered HTML, suggesting the ESP macro engine did not execute them:
```html
<!-- Macro para traer el texto de la supplemental -->
<!-- Macro para ejecutar código RPL/html de la supplemental -->
```
If these macros were supposed to inject subject-line or preheader text from a supplemental data source, the content is silently missing. Verify whether these blocks are intentionally inert or represent a failed macro invocation.

**No unrendered `%%`/`{{`-style tokens observed** in the visible source — no dangling merge fields in the truncated portion.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Physical mailing address and unsubscribe link** — not visible in the truncated source. Both are required by CAN-SPAM. Full source must be verified before send.

**Authentication headers (SPF/DKIM/DMARC)** — not evaluable from HTML source alone. Sending domain is `news.zara.com`. Confirm DKIM signature covers this subdomain and that DMARC policy for `zara.com` is enforced.

**Spanish-language internal build comments exposed in production HTML**
```html
<!-- Recogemos los países del PAISES_SKIP en el Data Source y hacemos skip -->
<!-- Recogemos los países del PAISES_ENVIO en el Data Source y los marcamos para poder enviar -->
```
These reveal internal data-source variable names and country-skip logic to anyone who views source. Not a legal violation, but a data-hygiene and IP-exposure issue. Strip all internal template comments before deployment.

---

### 6. Email-to-Site Continuity

Cannot fully evaluate — link `href` values are in the truncated portion. Once full source is available, confirm:
- All CTAs carry consistent UTM parameters (`utm_source=email`, `utm_medium=email`, `utm_campaign` matching the campaign code)
- No redirect chains that strip UTM params before landing
- Landing pages match the kids product context (no misrouting to adult or homepage)

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | Malformed `<div>` wrapping `<tr>` | Restructure preheader block; apply `mso-hide` to `<td>` |
| High | Unfired macro blocks | Audit ESP template pipeline; confirm supplemental data source is bound |
| High | Duplicate/conflicting CAMPAIGN_CODE | Emit a single, consistent code; standardize locale tag |
| Medium | `user-scalable=no` | Remove from viewport meta |
| Medium | `#999898` link color | Raise to ≥ 4.5:1 contrast or override in all text sections |
| Medium | Google Fonts `<link>` | Remove or inline; drop `cyrillic` subset for US-en sends |
| Medium | Internal Spanish comments in output HTML | Strip all `<!-- -->` template comments at render time |
| Low | Viewport semicolons | Replace `;` separators with `,` |
| Verify | CAN-SPAM physical address + unsubscribe | Confirm present in full source |
| Verify | UTM coverage on all CTAs | Audit all `<a href>` in full source |
## Recent history

- [[2026-05-01-validation-code]] — 4/10 (2026-05-01)

