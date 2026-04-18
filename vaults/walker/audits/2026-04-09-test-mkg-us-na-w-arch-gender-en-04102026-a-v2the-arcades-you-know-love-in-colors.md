---
slug: 2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-a-v2the-arcades-you-know-love-in-colors
type: email
date: 2026-04-09
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_A_V2The Arcades You Know & Love in Colors You’ll Adore"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_A_V2The Arcades You Know & Love in Colors You’ll Adore
**Score:** 5/10 · **Type:** Email audit · **2026-04-09**
## Executive summary

- A product-focused color launch email for the Skechers Arcade family, covering three sub-categories in one send. The visual merchandising is strong — the color array in the hero is the right lead for a "color drop" story. However, this email has a critical pre-flight failure: the subject line carries a live `[Test]:` prefix, and the preview text renders as a raw URL. If this represents a deployment candidate, it's not ready to send. Setting that aside, the email is structurally sound but underperforms on hierarchy — three product modules carry roughly equal visual weight, which flattens urgency and splits attention.
- Strong product photography and logical category architecture drag an otherwise below-average score upward. The test prefix and broken preview text alone would make this a zero-revenue send if deployed live.

## What's working

- **Hero color story lands.** The "ARCADE COLOR DROP" headline paired with a fan of colorful low-tops is immediately legible. The product is the hero, and the color variety is the reason to click — those two things align.
- **Three-module sub-category structure is sensible.** Arcade Sandals and Arcade Hands Free Slip-Ins get dedicated sections, which is appropriate for a gender-targeted send covering multiple silhouettes.
- **Top banner promotes an offer.** A "BUY ONE, GET ONE 50% OFF" banner is visible at the very top — promo visibility exists, even if it's easy to scroll past.
- **Photography quality is high.** Clean product shots on white, with a lifestyle image reinforcing the casual/spring positioning. No broken images visible.

## What's weak

- **`[Test]:` prefix is live in the subject line.** This is the single most disqualifying issue in the send. It signals an accidental deployment or a QA artifact that wasn't stripped.
- **Preview text is a raw URL.** Instead of teaser copy, the inbox preview shows `https://view.emails.skechers.com/...` — a complete wasted impression on the second most-read element of any email.
- **Three modules compete equally.** Arcade, Arcade Sandals, and Arcade Hands Free Slip-Ins each occupy similar vertical real estate. There's no clear lead product or "shop the hero" moment. The send dilutes its own momentum.
- **CTAs are small and passive.** The "SHOP NOW" buttons are present but visually minimal — they don't create urgency or specificity (e.g., "Shop the Color Drop" would outperform).
- **No price anchoring or scarcity signal.** Beyond the BOGO banner, there's no price context or limited-availability framing anywhere in the body to convert browsers into buyers.

## Recommendations

- 1. **Strip the `[Test]:` prefix before any live deployment.** Non-negotiable.
- 2. **Replace the URL preview text with a one-line hook** — something like "New Arcade colors just dropped — BOGO 50% off."
- 3. **Promote one hero SKU or colorway** above the fold rather than showing the full spread immediately. Let the color fan be a scroll reward, not the entire entry point.
- 4. **Increase CTA specificity and size.** "Shop Arcade Color Drop" > "Shop Now." Make buttons harder to miss.
- 5. **Bring the BOGO offer into the body.** The top banner is easy to miss. A brief offer reminder inside the first module would reinforce the promotional context.
- | Priority | Issue | Action |
- |---|---|---|
- | **BLOCKER** | `[Test]:` prefix + campaign code in subject line | Remove test prefix; fix subject template so `_A_V2` does not concatenate directly into consumer-facing subject text |
- | **HIGH** | All `image.emails.skechers.com` assets on HTTP | Change all `src` URLs to `https://image.emails.skechers.com/...` |
- | **HIGH** | ink1000 tracker on HTTP | Update to `https://` or confirm CDN SSL support |
- | **HIGH** | Krux `partner_uid=75909571` static value | Verify this is an AMPscript/SFMC merge tag; if hardcoded, replace with dynamic subscriber ID |
- | **HIGH** | ReturnPath pixel lacks `https://` | Add `https://` scheme to ReturnPath pixel src |
- | **MEDIUM** | 3 content images missing `alt` text | Add descriptive `alt` attributes for accessibility and images-off fallback |
- | **MEDIUM** | SPF/DKIM unverified | Pull full headers from a test send and confirm DMARC pass before production deployment |
- | **LOW** | CSS-only mobile/desktop toggle | Validate rendering in Gmail Android (non-media-query environment) |

## Full review
## Email Review: Skechers Arcade Color Drop

---

### 1. Executive Summary

A product-focused color launch email for the Skechers Arcade family, covering three sub-categories in one send. The visual merchandising is strong — the color array in the hero is the right lead for a "color drop" story. However, this email has a critical pre-flight failure: the subject line carries a live `[Test]:` prefix, and the preview text renders as a raw URL. If this represents a deployment candidate, it's not ready to send. Setting that aside, the email is structurally sound but underperforms on hierarchy — three product modules carry roughly equal visual weight, which flattens urgency and splits attention.

---

### 2. Business Impact Score: **5/10**

Strong product photography and logical category architecture drag an otherwise below-average score upward. The test prefix and broken preview text alone would make this a zero-revenue send if deployed live.

---

### 3. What's Working

- **Hero color story lands.** The "ARCADE COLOR DROP" headline paired with a fan of colorful low-tops is immediately legible. The product is the hero, and the color variety is the reason to click — those two things align.
- **Three-module sub-category structure is sensible.** Arcade Sandals and Arcade Hands Free Slip-Ins get dedicated sections, which is appropriate for a gender-targeted send covering multiple silhouettes.
- **Top banner promotes an offer.** A "BUY ONE, GET ONE 50% OFF" banner is visible at the very top — promo visibility exists, even if it's easy to scroll past.
- **Photography quality is high.** Clean product shots on white, with a lifestyle image reinforcing the casual/spring positioning. No broken images visible.

---

### 4. What's Weak

- **`[Test]:` prefix is live in the subject line.** This is the single most disqualifying issue in the send. It signals an accidental deployment or a QA artifact that wasn't stripped.
- **Preview text is a raw URL.** Instead of teaser copy, the inbox preview shows `https://view.emails.skechers.com/...` — a complete wasted impression on the second most-read element of any email.
- **Three modules compete equally.** Arcade, Arcade Sandals, and Arcade Hands Free Slip-Ins each occupy similar vertical real estate. There's no clear lead product or "shop the hero" moment. The send dilutes its own momentum.
- **CTAs are small and passive.** The "SHOP NOW" buttons are present but visually minimal — they don't create urgency or specificity (e.g., "Shop the Color Drop" would outperform).
- **No price anchoring or scarcity signal.** Beyond the BOGO banner, there's no price context or limited-availability framing anywhere in the body to convert browsers into buyers.

---

### 5. Recommendations

1. **Strip the `[Test]:` prefix before any live deployment.** Non-negotiable.
2. **Replace the URL preview text with a one-line hook** — something like "New Arcade colors just dropped — BOGO 50% off."
3. **Promote one hero SKU or colorway** above the fold rather than showing the full spread immediately. Let the color fan be a scroll reward, not the entire entry point.
4. **Increase CTA specificity and size.** "Shop Arcade Color Drop" > "Shop Now." Make buttons harder to miss.
5. **Bring the BOGO offer into the body.** The top banner is easy to miss. A brief offer reminder inside the first module would reinforce the promotional context.

---

### 6. Bottom Line

Solid visual execution of a color launch concept, but operationally compromised. The test prefix and broken preview text make this unshippable as-is. Fix the deployment issues, consolidate the hierarchy around a single hero product, and make the BOGO offer work harder inside the email — not just in a banner that gets scrolled past.

---

### 7. Evidence

| Element | Observation |
|---|---|
| **Overall purpose** | Spring color launch for the Arcade shoe family, BOGO 50% off offer support |
| **Hero / primary value prop** | "ARCADE COLOR DROP" headline with multi-color sneaker flat-lay — clear and visually strong |
| **Membership / benefits** | Not present — no loyalty, adiClub equivalent, or member-specific messaging |
| **Product modules** | Three: Arcade (hero), Arcade Sandals, Arcade Hands Free Slip-Ins — all present with product photography and CTAs |
| **Utility / secondary modules** | Standard footer with social icons and account links — no editorial content or styling guidance |
| **Bugs / friction / clarity issues** | `[Test]:` prefix in subject line visible; preview text renders as a raw tracking URL — both are visible in-inbox before the email is even opened |

---

## Technical Audit

## Technical Audit — Skechers Arcade Gender Email
**Campaign:** `MKG_US_NA_W_ARCH_GENDER_EN_04102026_A_V2`
**From:** no-reply@emails.skechers.com

---

### 1. Technical Summary

Salesforce Marketing Cloud send with standard click/open tracking via `click.emails.skechers.com` and supplemental Krux DMP + ink1000 pixels. Two blocking issues: a `[Test]:` prefix in the live subject line and pervasive HTTP (non-HTTPS) image sourcing across all footer and logo assets.

---

### 2. Link & Tracking Issues

**Subject line corruption — HIGH**
The subject line reads: `[Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_A_V2The Arcades You Know & Love...`
The internal campaign code `_A_V2` is directly concatenated with the consumer subject text, with no space or separator before "The". This exposes the internal test prefix and campaign ID to subscribers.

**ink1000 tracker pixel — HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=MKG_US_NA_W_ARCH_GENDER_EN_04102026_A
```
Served over HTTP. Will be blocked or upgraded by clients with mixed-content enforcement. Also missing `alt=""` attribute.

**Krux `partner_uid` appears hardcoded**
```
beacon.krxd.net/1x1_usermatch.gif?...&partner_uid=75909571
```
This subscriber ID value does not appear to be a dynamic SFMC merge tag (no `%%` AMPscript delimiters). If hardcoded, every recipient's Krux match fires with the same static ID — corrupting DMP data.

**ReturnPath pixel — protocol-relative/HTTP**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
No `https://` scheme. Mixed-content blocking will suppress inbox placement monitoring for this send.

**26 click links** all route through `click.emails.skechers.com` — standard SFMC redirect, no issues beyond the inability to probe destination URLs in automated QA.

---

### 3. Rendering & Accessibility

**HTTP image sources — 13 images**
All assets served from `http://image.emails.skechers.com/` will be blocked or silently upgraded by Gmail, Outlook.com, and Apple Mail. Affected assets include:
- Skechers logo: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- App Store badge: `...0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`
- Google Play badge: `...9bb508d0-4b38-483d-8459-cf54186a0b9f.png`
- AfterPay logo: `...07cb60b5-512b-494d-892d-67dc067289b7.png`
- All 5 social icons (Instagram, Twitter, Facebook, Pinterest, YouTube)
- 3 additional unnamed assets

The image CDN domain almost certainly supports HTTPS — this is a template configuration issue, not an infrastructure limitation.

**Missing alt text — 4 images**
Images without `alt` attributes (beyond decorative trackers):
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no alt
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — no alt
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — no alt
- `o.gif` (ink1000 tracker) — no alt (acceptable for a tracker, but still flagged by checkers)

Images-off rendering will show broken image icons for the three unnamed PNG assets.

**Mobile/desktop toggle via CSS `display`**
The email uses `.mobile-content { display: block }` / `.desktop-content { display: none }` toggled by `@media (min-width: 768px)`. This pattern is suppressed in Gmail (strips `<style>` blocks in some Android clients) — desktop content may remain hidden in non-media-query environments.

---

### 4. Personalization & Merge Tokens

No broken or unresolved merge tokens visible in the truncated source (no `%%variable%%` literals exposed in rendered HTML). The `[Test]:` subject prefix is a send-configuration issue, not a token failure.

---

### 5. Compliance

**SPF/DKIM — UNKNOWN**
Authentication-Results header not present in the review relay. SPF/DKIM/DMARC pass status cannot be confirmed. This must be verified against a live header trace before production send.

**Unsubscribe / physical address** — HTML is truncated; footer compliance elements are not visible in the provided source. These must be confirmed present in the full template.

**CAN-SPAM** — Sender domain `emails.skechers.com` aligns with From domain. No visible deceptive headers.

---

### 6. Email-to-Site Continuity

Campaign code `MKG_US_NA_W_ARCH_GENDER_EN_04102026_A` is consistent across the open pixel, ink1000 `mi_ecmp` parameter, and Krux ad impression `campaignid`. UTM attribution on click destinations cannot be directly verified (all links are redirect-wrapped), but the tracking ID is coherent.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **BLOCKER** | `[Test]:` prefix + campaign code in subject line | Remove test prefix; fix subject template so `_A_V2` does not concatenate directly into consumer-facing subject text |
| **HIGH** | All `image.emails.skechers.com` assets on HTTP | Change all `src` URLs to `https://image.emails.skechers.com/...` |
| **HIGH** | ink1000 tracker on HTTP | Update to `https://` or confirm CDN SSL support |
| **HIGH** | Krux `partner_uid=75909571` static value | Verify this is an AMPscript/SFMC merge tag; if hardcoded, replace with dynamic subscriber ID |
| **HIGH** | ReturnPath pixel lacks `https://` | Add `https://` scheme to ReturnPath pixel src |
| **MEDIUM** | 3 content images missing `alt` text | Add descriptive `alt` attributes for accessibility and images-off fallback |
| **MEDIUM** | SPF/DKIM unverified | Pull full headers from a test send and confirm DMARC pass before production deployment |
| **LOW** | CSS-only mobile/desktop toggle | Validate rendering in Gmail Android (non-media-query environment) |
## Recent history

- [[2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-athe-arcades-you-know-love-in-colors-yo]] — 5/10 (2026-04-09)
- [[2026-04-09-test-mkg-us-na-u-best-wide-en-04102026-v2say-bye-to-tight-hello-to-just-right]] — 5/10 (2026-04-09)
- [[2026-04-09-test-mkg-us-na-u-best-wide-en-04102026say-bye-to-tight-hello-to-just-right]] — 6/10 (2026-04-09)

