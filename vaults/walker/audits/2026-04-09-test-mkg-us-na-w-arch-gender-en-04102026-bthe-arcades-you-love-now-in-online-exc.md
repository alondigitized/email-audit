---
slug: 2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-bthe-arcades-you-love-now-in-online-exc
type: email
date: 2026-04-09
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_BThe Arcades You Love, Now in Online-Exclusive Colors!"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_BThe Arcades You Love, Now in Online-Exclusive Colors!
**Score:** 6/10 · **Type:** Email audit · **2026-04-09**
## Executive summary

- A focused, product-forward email for Skechers' Arcade franchise, promoting online-exclusive color drops with a clear BUY ONE GET ONE 50% OFF banner. The email follows a straightforward top-to-bottom product module structure — canvas sneakers, sandals, hands-free slip-ins — with consistent CTA placement. Execution is clean but the email feels mechanical: low visual energy, minimal lifestyle aspiration, and the hero sell (exclusive colors) is undersupported. The franchise breadth is a strength but the presentation undersells it.
- Competent but not compelling. Strong offer, weak creative energy. Will convert existing intent; unlikely to drive incremental discovery.

## What's working

- **BOGO 50% off** is prominently placed at the very top — the offer is impossible to miss
- **Three distinct Arcade sub-categories** (Color Drop, Sandals, Hands Free Slip-Ins) are each given their own module with a dedicated CTA, supporting both browsing and direct conversion
- **CTA buttons** are consistently placed below each section, maintaining a predictable scroll-and-shop rhythm
- Product photography is clean and on-white, showing multiple colorways per module — directly supporting the "color drop" premise

## What's weak

- **Hero imagery is underwhelming.** The first product shot is a top-down flat lay of canvas sneakers on a plain background — no lifestyle context, no energy, no visual payoff for a "color drop" moment
- **Subject line baggage is visible.** The `[Test]:` prefix in the subject and the raw URL fragment in the preview text (`https://view.emails.skechers.com/?vawpToken=...`) are sent-as-is, which breaks trust and looks unprofessional
- **"Online-exclusive" is buried.** This is the email's strongest differentiator and it doesn't appear as a visual callout anywhere in the body — only implied by headline copy
- **Sandals module feels generic.** The "ARCADE SANDALS" section uses a single lifestyle shot (denim skirt, sandals on pavement) but the rest of the module is just a product grid — the tone shifts abruptly
- **Hands Free Slip-Ins module is the weakest.** Small product thumbnails, compressed layout, and no differentiated copy — it reads like a footer product row rather than a feature section
- **Footer is dense and low-contrast.** Legal/navigation links are small and visually heavy, adding scroll friction at the end of the experience

## Recommendations

- 1. **Kill the `[Test]:` prefix before any live send.** The subject line and preview text raw URL are production-breaking issues.
- 2. **Add an "Online Exclusive" badge or callout** inside the hero module — put the scarcity/exclusivity signal where eyes land first.
- 3. **Lead the hero with a lifestyle image**, not a flat lay. A model wearing the new colors in a bright, energetic setting would match the "color drop" premise far better.
- 4. **Give Hands Free Slip-Ins a proper hero moment** — either promote it to its own CTA-first layout, or demote it to a supporting product row and let the two hero sections breathe more.
- 5. **Trim the preview text.** The raw URL leaking into inbox preview destroys first impressions.
- | Priority | Action |
- |---|---|
- | **P0** | Remove `[Test]:` prefix from subject line before any production send |
- | **P1** | Migrate all 13 `http://image.emails.skechers.com/` image sources to `https://` |
- | **P1** | Fix `http://www.ink1000.com/` tracking pixel to HTTPS |
- | **P1** | Verify/fix Return Path pixel protocol (`pixel.app.returnpath.net`) |
- | **P2** | Add `alt=""` to the 3 non-tracking images missing alt attributes |
- | **P2** | Add `http-equiv` attributes to both malformed `<meta>` tags |
- | **P2** | Replace `-webkit-text-size-adjust: none` with `100%` |
- | **P3** | Confirm `partner_uid=75909571` in Krux beacon is dynamic, not hardcoded |
- | **P3** | Verify DKIM/SPF pass on production relay before deployment |
- | **P3** | Spot-check 2–3 decoded click destination URLs for UTM integrity and landing page alignment |

## Full review
## 1. Executive Summary

A focused, product-forward email for Skechers' Arcade franchise, promoting online-exclusive color drops with a clear BUY ONE GET ONE 50% OFF banner. The email follows a straightforward top-to-bottom product module structure — canvas sneakers, sandals, hands-free slip-ins — with consistent CTA placement. Execution is clean but the email feels mechanical: low visual energy, minimal lifestyle aspiration, and the hero sell (exclusive colors) is undersupported. The franchise breadth is a strength but the presentation undersells it.

---

## 2. Business Impact Score: 6/10

Competent but not compelling. Strong offer, weak creative energy. Will convert existing intent; unlikely to drive incremental discovery.

---

## 3. What's Working

- **BOGO 50% off** is prominently placed at the very top — the offer is impossible to miss
- **Three distinct Arcade sub-categories** (Color Drop, Sandals, Hands Free Slip-Ins) are each given their own module with a dedicated CTA, supporting both browsing and direct conversion
- **CTA buttons** are consistently placed below each section, maintaining a predictable scroll-and-shop rhythm
- Product photography is clean and on-white, showing multiple colorways per module — directly supporting the "color drop" premise

---

## 4. What's Weak

- **Hero imagery is underwhelming.** The first product shot is a top-down flat lay of canvas sneakers on a plain background — no lifestyle context, no energy, no visual payoff for a "color drop" moment
- **Subject line baggage is visible.** The `[Test]:` prefix in the subject and the raw URL fragment in the preview text (`https://view.emails.skechers.com/?vawpToken=...`) are sent-as-is, which breaks trust and looks unprofessional
- **"Online-exclusive" is buried.** This is the email's strongest differentiator and it doesn't appear as a visual callout anywhere in the body — only implied by headline copy
- **Sandals module feels generic.** The "ARCADE SANDALS" section uses a single lifestyle shot (denim skirt, sandals on pavement) but the rest of the module is just a product grid — the tone shifts abruptly
- **Hands Free Slip-Ins module is the weakest.** Small product thumbnails, compressed layout, and no differentiated copy — it reads like a footer product row rather than a feature section
- **Footer is dense and low-contrast.** Legal/navigation links are small and visually heavy, adding scroll friction at the end of the experience

---

## 5. Recommendations

1. **Kill the `[Test]:` prefix before any live send.** The subject line and preview text raw URL are production-breaking issues.
2. **Add an "Online Exclusive" badge or callout** inside the hero module — put the scarcity/exclusivity signal where eyes land first.
3. **Lead the hero with a lifestyle image**, not a flat lay. A model wearing the new colors in a bright, energetic setting would match the "color drop" premise far better.
4. **Give Hands Free Slip-Ins a proper hero moment** — either promote it to its own CTA-first layout, or demote it to a supporting product row and let the two hero sections breathe more.
5. **Trim the preview text.** The raw URL leaking into inbox preview destroys first impressions.

---

## 6. Bottom Line

The bones are solid — strong offer, logical structure, multi-SKU coverage. But the creative execution doesn't match the premise of an "exclusive color drop," which should feel like an event. This email looks like a catalog page, not a launch. Fix the test artifacts before any live deployment.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Promote online-exclusive Arcade colorways with BOGO 50% off offer |
| **Hero / primary value prop** | Top banner: "BUY ONE GET ONE 50% OFF" — visible and high contrast. "ARCADE COLOR DROP" headline below with flat-lay product shot. Online exclusivity not visually reinforced |
| **Membership / benefits** | None visible |
| **Product discoverability** | Three modules: Arcade Color Drop (canvas), Arcade Sandals, Arcade Hands Free Slip-Ins. Each has a dedicated CTA. Color variety is shown but not made to feel special |
| **Utility / secondary modules** | Footer with links (Men, Women, Kids, Sale, North America language selector, social icons) |
| **Bugs / friction / clarity issues** | `[Test]:` prefix in subject line visible as email context; raw `vawpToken` URL exposed in preview text string — both are visible send-time artifacts, not visual rendering bugs |

---

## Technical Audit

## Technical Audit — Skechers ARCH_GENDER_EN_04102026_B

---

### 1. Technical Summary

This Salesforce Marketing Cloud promotional send uses Krux/Salesforce DMP pixel tracking and a multi-redirect click infrastructure. The primary technical risks are pervasive HTTP (non-HTTPS) image sourcing across `image.emails.skechers.com` and a live `[Test]:` subject prefix that must be stripped before production deployment.

---

### 2. Link & Tracking Issues

**Tracking pixel inventory (4 systems active):**
| Pixel | Domain | Protocol | Issue |
|---|---|---|---|
| Open pixel | `click.emails.skechers.com/open.aspx` | HTTPS | OK |
| Krux user-match (2x) | `beacon.krxd.net` | HTTPS | OK |
| Krux ad impression | `beacon.krxd.net` | HTTPS | OK |
| Ink1000 tracking pixel | `www.ink1000.com` | **HTTP** | Blocked in modern clients |
| Return Path seed | `pixel.app.returnpath.net` | Protocol missing in src | Likely HTTP — verify |

**Return Path pixel** (`pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0...`) is rendered without an explicit protocol prefix in the HTML source — if resolved as HTTP, it will be blocked.

**26 click-redirect links** via `click.emails.skechers.com` were skipped in probing — this is expected, but destination URL integrity (UTM params, 404s) cannot be confirmed from source alone.

**Krux `partner_uid=75909571`** appears to be a static hardcoded value rather than a dynamic merge token. Confirm this is intentional (hashed subscriber ID) or replace with the correct AMPscript/SSJS variable.

---

### 3. Rendering & Accessibility

**HTTP images (will be blocked by Gmail, Outlook 2016+, Apple Mail with image proxying):**
- `http://www.ink1000.com/.../o.gif` — tracking pixel
- `http://image.emails.skechers.com/.../dde00662-...png` — Skechers logo
- `http://image.emails.skechers.com/.../49468f73-...png` — unidentified footer image
- `http://image.emails.skechers.com/.../0ec56c9f-...png` — App Store badge
- `http://image.emails.skechers.com/.../9bb508d0-...png` — Google Play badge
- `http://image.emails.skechers.com/.../00100b23-...png` — unidentified image
- `http://image.emails.skechers.com/.../07cb60b5-...png` — AfterPay logo
- `http://image.emails.skechers.com/.../fc08601a-...png` — unidentified image
- `http://image.emails.skechers.com/.../b782e0aa-...png` — Instagram icon
- `http://image.emails.skechers.com/.../d76a5487-...png` — Twitter icon
- `http://image.emails.skechers.com/.../a5c4cae0-...png` — Facebook icon
- `http://image.emails.skechers.com/.../573ab181-...png` — Pinterest icon
- `http://image.emails.skechers.com/.../8c5738fc-...png` — YouTube icon

All 13 HTTP image sources should be updated to `https://`.

**Missing `alt` text on 4 images:**
- `o.gif` (Ink1000 tracking pixel — `alt=""` is acceptable here, but attribute must be present; currently absent)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

**Malformed meta tags:**
- `<meta content="text/html; charset=utf-8" />` — missing `http-equiv="Content-Type"` attribute
- `<meta content="IE=Edge" />` — missing `http-equiv="X-UA-Compatible"` attribute

Both are non-fatal in modern clients but technically invalid and may cause unexpected behavior in legacy renderers.

**`-webkit-text-size-adjust: none`** in global `* {}` rule disables user-initiated font scaling — a WCAG 1.4.4 (Resize Text) violation. Use `100%` instead of `none`.

---

### 4. Personalization & Merge Tokens

**`[Test]:` prefix in subject line** — `[Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_B...` must be removed before production send. This is a live issue if the email was not intended as a test.

No broken or unresolved merge tokens (e.g., `%%field%%` or `{{field}}`) visible in the provided HTML. Preheader text ("So cute you'll buy 2! - BOGO 50% off today") is hardcoded — verify this matches the intended variant B offer.

**Krux `partner_uid=75909571`** — static value; if this should be per-subscriber, it needs a merge token substitution.

---

### 5. Compliance

**SPF/DKIM:** Authentication-Results header not present in the relay capture — SPF/DKIM pass status unconfirmed. Verify once routed through the production Salesforce Marketing Cloud relay (`emails.skechers.com`).

**CAN-SPAM:** Unsubscribe link and physical mailing address not visible in the truncated source. Assumed present in the footer (standard for Skechers templates) — must be confirmed in the full HTML.

**`[Test]:` subject prefix** is a production hygiene issue — if deployed to live recipients, it damages sender credibility.

---

### 6. Email-to-Site Continuity

UTM parameters cannot be inspected directly — all 26 click URLs route through `click.emails.skechers.com/?qs=eyJ...` (base64-encoded redirect). The Krux impression beacon confirms campaign ID `MKG_US_NA_W_ARCH_GENDER_EN_04102026_B`, which is consistent with the subject line naming convention.

Destination landing page alignment (product catalog, BOGO offer, color exclusivity messaging) cannot be verified from source alone — spot-check 2–3 decoded click destinations against the preheader offer copy before send.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Remove `[Test]:` prefix from subject line before any production send |
| **P1** | Migrate all 13 `http://image.emails.skechers.com/` image sources to `https://` |
| **P1** | Fix `http://www.ink1000.com/` tracking pixel to HTTPS |
| **P1** | Verify/fix Return Path pixel protocol (`pixel.app.returnpath.net`) |
| **P2** | Add `alt=""` to the 3 non-tracking images missing alt attributes |
| **P2** | Add `http-equiv` attributes to both malformed `<meta>` tags |
| **P2** | Replace `-webkit-text-size-adjust: none` with `100%` |
| **P3** | Confirm `partner_uid=75909571` in Krux beacon is dynamic, not hardcoded |
| **P3** | Verify DKIM/SPF pass on production relay before deployment |
| **P3** | Spot-check 2–3 decoded click destination URLs for UTM integrity and landing page alignment |
## Recent history

- [[2026-04-09-test-mkg-us-nonpur180-w-arch-nonpurch-en-04102026your-perfect-first-pair-is-here]] — 5/10 (2026-04-09)
- [[2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-a-v2the-arcades-you-know-love-in-colors]] — 5/10 (2026-04-09)
- [[2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-athe-arcades-you-know-love-in-colors-yo]] — 5/10 (2026-04-09)

