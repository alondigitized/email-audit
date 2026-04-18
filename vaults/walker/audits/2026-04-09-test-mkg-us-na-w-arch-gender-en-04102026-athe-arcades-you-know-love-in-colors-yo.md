---
slug: 2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-athe-arcades-you-know-love-in-colors-yo
type: email
date: 2026-04-09
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_AThe Arcades You Know & Love in Colors You’ll Adore"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_AThe Arcades You Know & Love in Colors You’ll Adore
**Score:** 5/10 · **Type:** Email audit · **2026-04-09**
## Executive summary

- A clean, product-forward email built around a seasonal color story for the Skechers Arcade franchise. The layout is logical and the hero lands the offer clearly. However, the email feels narrow and compressed throughout, the product photography is small relative to available space, and the subject line carries heavy test/internal copy that would undermine deliverability and sender trust if this deployed to live recipients as-is.
- Solid bones, but execution is held back by visual compression, under-sized product imagery, and a subject line that reads like a QA artifact.

## What's working

- **Hero offer is immediately legible.** "Buy One, Get One 80% Off" is prominent in the banner — the primary incentive is not buried.
- **Color story is coherent.** The pastel/bright palette across the hero and product grid reinforces the "Color Drop" theme visually.
- **Product segmentation is logical.** Splitting Arcade Sandals and Arcade Hands Free Slip-Ins into separate named sections helps the reader find relevant styles quickly.
- **Footer is well-structured.** Navigation links, social icons, and unsubscribe are all visible and organized.

## What's weak

- **Subject line contains test artifacts.** "[Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_A" is visible in the preview and subject — this is a QA/internal identifier that should never surface to consumers.
- **Hero image is visually small.** The colorful shoe flat lay is the emotional centerpiece of the email, but it's rendered at a small scale that doesn't do the color story justice.
- **Product images in the grid modules are tiny.** Each individual shoe in the Sandals and Hands Free sections is rendered very small, making it difficult to appreciate the color variants being promoted.
- **CTA buttons are small and low-contrast.** The "Shop Now" style buttons appear narrow and subdued — they don't create urgency relative to the surrounding content.
- **Body copy is minimal to the point of being absent.** There's no supporting narrative below the headline — no callout of key colors, no benefit language, no social proof. The email relies entirely on image appeal, which is compromised by small rendering.
- **Preview text is raw URL/token.** The visible preview reads as a raw tracking URL snippet rather than meaningful copy, wasting a high-value inbox touchpoint.

## Recommendations

- 1. **Strip the test subject line prefix before any live send.** Replace `[Test]: MKG_US_NA_...` with the consumer-facing subject line.
- 2. **Fix the preview text.** Replace the raw URL with a line that reinforces the offer: e.g., *"New Arcade styles in bold spring colors — buy one, get one 80% off."*
- 3. **Increase the hero image size.** The color drop story is the hook — let it breathe. The hero should span the full email width at higher resolution.
- 4. **Increase product tile size in the grid modules.** At current scale, the shoes look like thumbnails. Larger tiles would drive more click intent.
- 5. **Make CTAs more prominent.** Increase button width, use a bolder fill color (brand blue or a contrasting accent), and consider adding urgency copy like "Shop the Drop."
- 6. **Add 1–2 lines of supporting copy.** Name specific colorways or call out a selling point (comfort, versatility) to give context to readers who don't click immediately.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` in subject line | Strip prefix; fix concatenation gap between campaign ID and subject copy |
- | **P0** | 15 HTTP image URLs | Update all `image.emails.skechers.com` and `ink1000.com` sources to `https://` |
- | **P0** | Return Path pixel — no protocol | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif` src |
- | **P1** | SPF/DKIM unverified | Capture raw headers from seeded inbox delivery; confirm DKIM pass on `emails.skechers.com` |
- | **P1** | 4 images missing alt text | Add descriptive alt for content images; `alt=""` for decorative images |
- | **P2** | Outlook mobile/desktop toggle | Add MSO conditional comments if desktop product image layout is required in Outlook |
- | **P2** | UTM continuity | Manually probe 2–3 click redirect URLs to confirm `utm_campaign`, `utm_medium`, `utm_source` are applied on landing pages |

## Full review
## Skechers Arcade Color Drop — Email Review

---

### 1. Executive Summary

A clean, product-forward email built around a seasonal color story for the Skechers Arcade franchise. The layout is logical and the hero lands the offer clearly. However, the email feels narrow and compressed throughout, the product photography is small relative to available space, and the subject line carries heavy test/internal copy that would undermine deliverability and sender trust if this deployed to live recipients as-is.

---

### 2. Business Impact Score: 5/10

Solid bones, but execution is held back by visual compression, under-sized product imagery, and a subject line that reads like a QA artifact.

---

### 3. What's Working

- **Hero offer is immediately legible.** "Buy One, Get One 80% Off" is prominent in the banner — the primary incentive is not buried.
- **Color story is coherent.** The pastel/bright palette across the hero and product grid reinforces the "Color Drop" theme visually.
- **Product segmentation is logical.** Splitting Arcade Sandals and Arcade Hands Free Slip-Ins into separate named sections helps the reader find relevant styles quickly.
- **Footer is well-structured.** Navigation links, social icons, and unsubscribe are all visible and organized.

---

### 4. What's Weak

- **Subject line contains test artifacts.** "[Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_A" is visible in the preview and subject — this is a QA/internal identifier that should never surface to consumers.
- **Hero image is visually small.** The colorful shoe flat lay is the emotional centerpiece of the email, but it's rendered at a small scale that doesn't do the color story justice.
- **Product images in the grid modules are tiny.** Each individual shoe in the Sandals and Hands Free sections is rendered very small, making it difficult to appreciate the color variants being promoted.
- **CTA buttons are small and low-contrast.** The "Shop Now" style buttons appear narrow and subdued — they don't create urgency relative to the surrounding content.
- **Body copy is minimal to the point of being absent.** There's no supporting narrative below the headline — no callout of key colors, no benefit language, no social proof. The email relies entirely on image appeal, which is compromised by small rendering.
- **Preview text is raw URL/token.** The visible preview reads as a raw tracking URL snippet rather than meaningful copy, wasting a high-value inbox touchpoint.

---

### 5. Recommendations

1. **Strip the test subject line prefix before any live send.** Replace `[Test]: MKG_US_NA_...` with the consumer-facing subject line.
2. **Fix the preview text.** Replace the raw URL with a line that reinforces the offer: e.g., *"New Arcade styles in bold spring colors — buy one, get one 80% off."*
3. **Increase the hero image size.** The color drop story is the hook — let it breathe. The hero should span the full email width at higher resolution.
4. **Increase product tile size in the grid modules.** At current scale, the shoes look like thumbnails. Larger tiles would drive more click intent.
5. **Make CTAs more prominent.** Increase button width, use a bolder fill color (brand blue or a contrasting accent), and consider adding urgency copy like "Shop the Drop."
6. **Add 1–2 lines of supporting copy.** Name specific colorways or call out a selling point (comfort, versatility) to give context to readers who don't click immediately.

---

### 6. Bottom Line

The email has the right structure and a compelling seasonal offer, but it's visually underperforming. The color drop concept demands large, vivid product imagery — and this render delivers the opposite. Combined with test artifacts in the subject and broken preview text, this email needs QA cleanup and a visual punch-up before it earns its place in a live send.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Promote the Arcade shoe franchise via a seasonal "Color Drop" featuring BOGO 80% off |
| **Hero / primary value prop** | BOGO 80% off banner + color flat lay hero; offer is clear but image is undersized |
| **Membership / benefits** | Not present in this email |
| **Product discoverability** | Two named sub-sections (Arcade Sandals, Arcade Hands Free Slip-Ins) with product grids; tiles are very small |
| **Utility / secondary modules** | Footer with navigation, social links, unsubscribe — functional and visible |
| **Bugs / friction / clarity** | Test identifier in subject line; raw tracking URL in preview text; product imagery is too small to convey the color story effectively |

---

## Technical Audit

## Technical Audit — Skechers Arcade Gender Email (MKG_US_NA_W_ARCH_GENDER_EN_04102026_A)

---

### 1. Technical Summary

The email has two critical deployment blockers: the subject line retains a `[Test]:` prefix, and 15+ images are served over HTTP, which will be blocked or broken in all major email clients enforcing HTTPS. A malformed Return Path pixel URL compounds deliverability risk.

---

### 2. Link & Tracking Issues

**Critical — Malformed Return Path pixel (no protocol):**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` prefix — renders as a relative URL path, meaning the pixel fires against the email client's base domain rather than returnpath.net. Inbox placement monitoring is effectively blind for this send.

**Warning — HTTP tracking pixel (ink1000.com):**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=MKG_US_NA_W_ARCH_GENDER_EN_04102026_A
```
Non-HTTPS. Will be blocked by Gmail and Apple Mail. Engagement attribution from this vendor will undercount.

**Info — 26 click links not probed:**
All CTA links route through `click.emails.skechers.com` redirect. QA skipped HTTP probing; destination URLs and UTM continuity unverified.

---

### 3. Rendering & Accessibility

**Critical — 15 images served over HTTP:**

Affected sources include the logo, footer icons, and all social/payment images:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-...png  (Twitter)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/573ab181-...png  (Pinterest)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
+ 3 additional unnamed PNGs
```
Gmail blocks mixed-content images. Apple Mail on iOS 15+ enforces HTTPS. The logo and entire social footer will render as broken images for a large share of recipients.

**Warning — 4 images missing `alt` text:**
- `o.gif` (ink1000 tracking pixel — alt="" acceptable here, but not set)
- `49468f73-...png`
- `00100b23-...png`
- `fc08601a-...png`

Missing alt on non-decorative images degrades image-off rendering and fails WCAG 2.1 AA (Success Criterion 1.1.1).

**Info — Mobile/desktop content toggling via CSS `display:none`:**
```css
.mobile-content { display: block; }
.desktop-content { display: none; }
@media screen and (min-width: 768px) {
  .mobile-content { display: none !important; }
  .desktop-content { display: block !important; }
}
```
Outlook (Windows) ignores `@media` queries and will render `.mobile-content` only. If product images differ between mobile/desktop blocks, Outlook subscribers see mobile-optimized layout at desktop width. Confirm whether this is acceptable or if Outlook-specific MSO conditionals are needed.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%`, `{{}}`) visible in the truncated source. Campaign ID `MKG_US_NA_W_ARCH_GENDER_EN_04102026_A` is consistently applied across all three beacons (Krux ad impression, ink1000, open pixel).

**Critical — `[Test]:` prefix in subject line:**
```
Subject: [Test]: MKG_US_NA_W_ARCH_GENDER_EN_04102026_AThe Arcades You Know & Love in Colors You'll Adore
```
Test prefix not stripped before deployment. Additionally, there is no space between the campaign ID and the readable subject (`_A` runs into `The`), suggesting a template concatenation error in the subject line build.

---

### 5. Compliance

**Warning — SPF/DKIM authentication unverifiable:**
QA flag: `Authentication-Results header not found — SPF/DKIM status unknown`. Email was reviewed via AgentMail relay without preserving authentication headers. Cannot confirm DKIM signature from `emails.skechers.com` or SPF alignment. Should be verified against a raw header capture from a live inbox delivery.

**Info — CAN-SPAM elements not visible in truncated source:**
Physical mailing address and one-click unsubscribe link presence could not be confirmed from the HTML fragment provided. These must be present per CAN-SPAM §5(a)(5). Assumed present in full template footer — verify before sign-off.

---

### 6. Email-to-Site Continuity

All 26 CTAs route through `click.emails.skechers.com` redirects using encrypted `?qs=` parameters. Destination URLs and UTM parameters were not probed. The campaign ID `MKG_US_NA_W_ARCH_GENDER_EN_04102026_A` in the Krux beacon matches the naming convention expected for UTM `utm_campaign`, but actual UTM application on landing pages cannot be confirmed without decoding the redirect chain.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` in subject line | Strip prefix; fix concatenation gap between campaign ID and subject copy |
| **P0** | 15 HTTP image URLs | Update all `image.emails.skechers.com` and `ink1000.com` sources to `https://` |
| **P0** | Return Path pixel — no protocol | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif` src |
| **P1** | SPF/DKIM unverified | Capture raw headers from seeded inbox delivery; confirm DKIM pass on `emails.skechers.com` |
| **P1** | 4 images missing alt text | Add descriptive alt for content images; `alt=""` for decorative images |
| **P2** | Outlook mobile/desktop toggle | Add MSO conditional comments if desktop product image layout is required in Outlook |
| **P2** | UTM continuity | Manually probe 2–3 click redirect URLs to confirm `utm_campaign`, `utm_medium`, `utm_source` are applied on landing pages |
## Recent history

- [[2026-04-09-test-mkg-us-na-u-best-wide-en-04102026-v2say-bye-to-tight-hello-to-just-right]] — 5/10 (2026-04-09)
- [[2026-04-09-test-mkg-us-na-u-best-wide-en-04102026say-bye-to-tight-hello-to-just-right]] — 6/10 (2026-04-09)
- [[2026-04-09-the-right-pair-to-start-with-perfect-for-right-now]] — 5/10 (2026-04-09)

