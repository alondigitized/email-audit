---
slug: 2026-03-29-test-mkg-us-ecmpur-u-best-ecom-en-03292026-b-v2the-styles-everyone-s-searching-f
type: email
date: 2026-03-27
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_B_V2The Styles Everyone's Searching For"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_B_V2The Styles Everyone's Searching For
**Score:** 6/10 · **Type:** Email audit · **2026-03-27**
## Executive summary

- This is a product-discovery email anchored by a BOGO 50% off offer, sent to ecommerce purchasers. The email does a lot of heavy lifting: it leads with a hard promotional hook, then sequences through multiple category modules — searched styles, Sandals, Hands-Free Slip-Ins, Each Fit, and a personalized "New & For You" block — before closing on markdowns. The structure is logical but the sheer volume of modules creates fatigue. The offer itself is clear; the personalization signal ("New & For You") is buried too deep to drive meaningful lift. Subject line carries a [Test] prefix that should never reach a live send.
- Strong offer, diluted execution. The BOGO hook has real pull for an ecommerce purchaser segment, but the email tries to be a catalog rather than a conversion driver.

## What's working

- **BOGO 50% OFF hero** is visually prominent and immediately scannable. The value prop lands in under a second.
- **"Must Searched Styles" framing** is smart social-proof language that aligns with the subject line — creates curiosity and urgency.
- **Sequential category flow** (Sandals → Slip-Ins → Each Fit) gives browsing customers a logical path through the catalog.
- **"Shop the Latest Markdowns" closer** is a smart safety net — catches price-sensitive shoppers who didn't convert on full-price inventory above.
- Product photography appears clean and consistent across modules.

## What's weak

- **Subject line has [Test] prefix** — a live-send with this would be a significant deliverability and brand credibility error.
- **"New & For You" personalization block is too far down.** For a purchased-customer segment, personalized recs should be higher — they're the strongest retention lever and are currently buried past three category modules.
- **Too many modules, no clear hierarchy after the hero.** Sandals, Slip-Ins, Each Fit, New & For You, and Markdowns all compete equally. There's no visual or copy signal telling the reader what to prioritize.
- **Module headers are small and low-contrast** at render size — easy to miss during a fast scroll.
- **Preview text is broken** — raw URL and token strings are visible instead of a compelling teaser line. This damages open rates before the email is even opened.

## Recommendations

- 1. **Strip the [Test] prefix before any live deployment** — non-negotiable quality gate.
- 2. **Fix the preview text immediately.** Replace the raw URL/token string with a concise, offer-reinforcing line (e.g., "BOGO 50% off — shop the styles everyone's searching for").
- 3. **Move "New & For You" to the second module** — right after the hero. Purchased-customer segments respond to personalization; lead with it.
- 4. **Cut one mid-funnel category module.** Three middle modules (Sandals, Slip-Ins, Each Fit) is one too many for a promotional email. Consolidate or remove the weakest performer.
- 5. **Increase module header size/weight** to improve scannability on mobile.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | All `image.emails.skechers.com` assets served over HTTP | Update CDN/template to use `https://image.emails.skechers.com` — no asset migration needed, just scheme change |
- | **High** | Subject line has no delimiter between campaign ID variable and display subject | Fix template merge: ensure `[Test]: ` prefix does not absorb the campaign code variable |
- | **High** | Authentication headers not captured | Pull raw headers from a delivered seed message; confirm SPF pass, DKIM `d=emails.skechers.com`, DMARC pass |
- | **Medium** | `ink1000.com` pixel loads over HTTP | Switch to HTTPS or remove if redundant with SFMC open tracking |
- | **Medium** | 4 images missing `alt` text | Add descriptive `alt` for meaningful images; `alt=""` for decorative/tracking pixels |
- | **Medium** | Plain-text part is 71% URLs | Generate a human-readable plain-text version; strip or truncate raw redirect URLs |
- | **Low** | `* { -webkit-text-size-adjust: none }` | Change to `-webkit-text-size-adjust: 100%` to preserve user zoom without causing Outlook font inflation |
- | **Low** | `List-Unsubscribe` header and footer address | Confirm present in full source; required for bulk sender compliance |

## Full review
## Email Review: "The Styles Everyone's Searching For" — Skechers BOGO Email

---

### 1. Executive Summary

This is a product-discovery email anchored by a BOGO 50% off offer, sent to ecommerce purchasers. The email does a lot of heavy lifting: it leads with a hard promotional hook, then sequences through multiple category modules — searched styles, Sandals, Hands-Free Slip-Ins, Each Fit, and a personalized "New & For You" block — before closing on markdowns. The structure is logical but the sheer volume of modules creates fatigue. The offer itself is clear; the personalization signal ("New & For You") is buried too deep to drive meaningful lift. Subject line carries a [Test] prefix that should never reach a live send.

---

### 2. Business Impact Score: **6 / 10**

Strong offer, diluted execution. The BOGO hook has real pull for an ecommerce purchaser segment, but the email tries to be a catalog rather than a conversion driver.

---

### 3. What's Working

- **BOGO 50% OFF hero** is visually prominent and immediately scannable. The value prop lands in under a second.
- **"Must Searched Styles" framing** is smart social-proof language that aligns with the subject line — creates curiosity and urgency.
- **Sequential category flow** (Sandals → Slip-Ins → Each Fit) gives browsing customers a logical path through the catalog.
- **"Shop the Latest Markdowns" closer** is a smart safety net — catches price-sensitive shoppers who didn't convert on full-price inventory above.
- Product photography appears clean and consistent across modules.

---

### 4. What's Weak

- **Subject line has [Test] prefix** — a live-send with this would be a significant deliverability and brand credibility error.
- **"New & For You" personalization block is too far down.** For a purchased-customer segment, personalized recs should be higher — they're the strongest retention lever and are currently buried past three category modules.
- **Too many modules, no clear hierarchy after the hero.** Sandals, Slip-Ins, Each Fit, New & For You, and Markdowns all compete equally. There's no visual or copy signal telling the reader what to prioritize.
- **Module headers are small and low-contrast** at render size — easy to miss during a fast scroll.
- **Preview text is broken** — raw URL and token strings are visible instead of a compelling teaser line. This damages open rates before the email is even opened.

---

### 5. Recommendations

1. **Strip the [Test] prefix before any live deployment** — non-negotiable quality gate.
2. **Fix the preview text immediately.** Replace the raw URL/token string with a concise, offer-reinforcing line (e.g., "BOGO 50% off — shop the styles everyone's searching for").
3. **Move "New & For You" to the second module** — right after the hero. Purchased-customer segments respond to personalization; lead with it.
4. **Cut one mid-funnel category module.** Three middle modules (Sandals, Slip-Ins, Each Fit) is one too many for a promotional email. Consolidate or remove the weakest performer.
5. **Increase module header size/weight** to improve scannability on mobile.

---

### 6. Bottom Line

The offer is right, the segment is right, and the product photography holds up. But this email is fighting itself — too many equal-weight modules dilute the BOGO urgency, and the broken preview text throws away click potential before the email is even opened. A leaner structure with personalization promoted higher would meaningfully improve conversion for this ecommerce-purchaser list.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Promotional product-discovery email for ecommerce purchasers; BOGO 50% off is the primary commercial hook |
| **Hero / primary value prop** | BOGO 50% OFF with "SHOP NOW" CTA — clear, prominent, well-executed |
| **Membership / benefits** | None visible — this is a pure commerce email, no loyalty or membership layer |
| **Product discoverability** | Five distinct modules: Must Searched Styles, Sandals, Hands-Free Slip-Ins, Each Fit, New & For You — comprehensive but volume creates scroll fatigue |
| **Utility / secondary modules** | "Shop the Latest Markdowns" footer module serves as a price-sensitive fallback — appropriate placement |
| **Bugs / friction / clarity issues** | (1) [Test] prefix in subject line visible; (2) Preview text renders as raw URL/token string — broken and unprofessional; no other visible rendering bugs in the email body itself |

---

## Technical Audit

## Technical Audit — MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_B_V2

**From:** SKECHERS `<no-reply@emails.skechers.com>`
**Subject:** [Test]: MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_B_V2The Styles Everyone's Searching For

---

### 1. Technical Summary

The email has a systemic HTTP (non-HTTPS) image hosting problem affecting 15+ assets across the `image.emails.skechers.com` CDN, and authentication headers were not captured via the AgentMail relay, leaving SPF/DKIM status unverifiable. A third-party pixel (`ink1000.com`) also loads over HTTP.

---

### 2. Link & Tracking Issues

**Plain-text body is URL-heavy**
- 4,047 of 5,704 plain-text characters (71%) are URLs, per QA deliverability check.
- High URL density in the text/plain MIME part can trigger spam filters (SpamAssassin `MIME_HTML_MOSTLY`, Postini heuristics).

**22 click-tracking links use redirect wrapper**
- All CTA links pass through `click.emails.skechers.com` with encrypted `qs=` payloads — expected for SFMC, but the QA probe could not verify final destination URLs. Any broken redirect will silently drop the user.

**Third-party tracking pixels**
- Krux/Salesforce DMP match pixels: `beacon.krxd.net/1x1_usermatch.gif` and `beacon.krxd.net/1x1_ad_impression.gif` — both load over HTTPS, no issue.
- Return Path seed pixel: `pixel.app.returnpath.net/pixel.gif` — HTTPS, no issue.
- **`http://www.ink1000.com/p/up/.../o.gif`** — loads over plain HTTP, missing `alt=""` attribute is present but the HTTP scheme risks blocking by Gmail/Outlook image proxy. See Section 3.

---

### 3. Rendering & Accessibility

**Mixed content — HTTP image sources (15 assets)**

All assets served from `http://image.emails.skechers.com` will be blocked or proxied by major clients (Gmail rewrites to its own proxy; Outlook may display broken images). Affected assets:

| Asset | Role |
|---|---|
| `dde00662...290c.png` | Skechers logo |
| `49468f73...b486.png` | (no alt text) |
| `0ec56c9f...115.png` | "Available on the App Store" |
| `9bb508d0...f.png` | "Android App on Google Play" |
| `00100b23...b2.png` | (no alt text) |
| `07cb60b5...7.png` | "AfterPay" |
| `fc08601a...05.png` | (no alt text) |
| `b782e0aa...dc.png` | Instagram |
| `d76a5487...4.png` | Twitter |
| `a5c4cae0...a2.png` | Facebook |
| `573ab181...99.png` | Pinterest |
| `8c5738fc...a7.png` | YouTube |
| `o.gif` (ink1000) | tracking pixel |

All `http://image.emails.skechers.com` URLs should be `https://`. This is a CDN config issue — the assets almost certainly exist at HTTPS already.

**Missing alt text (4 images)**
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no `alt` attribute
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — no `alt` attribute
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — no `alt` attribute
- `o.gif` (ink1000 pixel) — no `alt` attribute (should be `alt=""`)

Decorative/unknown images without `alt=""` fail WCAG 1.1.1 and will be announced by screen readers as filename strings.

**`-webkit-text-size-adjust: none`**
- Applied globally via `* { -webkit-text-size-adjust: none; }`. This disables user-agent font scaling on iOS/Safari, which is a WCAG 1.4.4 failure for users who rely on browser zoom.

**Subject line concatenation artifact**
- Subject reads: `[Test]: MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_B_V2The Styles Everyone's Searching For` — the internal campaign ID and the display subject are not separated by a space or delimiter. This appears to be a template rendering bug where the `[Test]:` prefix was prepended without trimming the campaign variable.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%FIRST_NAME%%`, `{{{name}}}`) visible in the truncated source. No issues found from available data.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Authentication — status unknown**
- `Authentication-Results` header was not captured through the AgentMail relay. SPF, DKIM, and DMARC pass/fail cannot be confirmed. This must be verified from raw message headers in the inbox.
- Sending domain: `emails.skechers.com`. DKIM should be signed under this subdomain; verify `d=` tag matches.

**CAN-SPAM physical address**
- Not visible in the truncated source — must confirm the footer contains a valid postal address. Standard for Skechers emails but unverifiable from the provided excerpt.

**Unsubscribe mechanism**
- Not visible in truncated source. Must confirm `List-Unsubscribe` header is present and a one-click unsubscribe link exists in the footer (required for Gmail/Yahoo bulk sender compliance as of 2024).

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

All CTAs pass through `click.emails.skechers.com` with encrypted `qs=` redirect payloads — UTM parameters are embedded within those encrypted tokens and cannot be inspected directly from the source. QA probes were skipped for these 22 links.

**Unverifiable items:**
- Whether UTM `utm_campaign` value matches campaign ID `MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_B`
- Whether landing pages are live and correctly resolve to the BOGO 50% offer referenced in the preheader (`Buy One, Get One 50% Off Our Most Loved Styles`)
- Whether promo codes or offer states are consistent between email and landing page

Manual click-through verification of at least the primary CTA is required before send.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | All `image.emails.skechers.com` assets served over HTTP | Update CDN/template to use `https://image.emails.skechers.com` — no asset migration needed, just scheme change |
| **High** | Subject line has no delimiter between campaign ID variable and display subject | Fix template merge: ensure `[Test]: ` prefix does not absorb the campaign code variable |
| **High** | Authentication headers not captured | Pull raw headers from a delivered seed message; confirm SPF pass, DKIM `d=emails.skechers.com`, DMARC pass |
| **Medium** | `ink1000.com` pixel loads over HTTP | Switch to HTTPS or remove if redundant with SFMC open tracking |
| **Medium** | 4 images missing `alt` text | Add descriptive `alt` for meaningful images; `alt=""` for decorative/tracking pixels |
| **Medium** | Plain-text part is 71% URLs | Generate a human-readable plain-text version; strip or truncate raw redirect URLs |
| **Low** | `* { -webkit-text-size-adjust: none }` | Change to `-webkit-text-size-adjust: 100%` to preserve user zoom without causing Outlook font inflation |
| **Low** | `List-Unsubscribe` header and footer address | Confirm present in full source; required for bulk sender compliance |
## Recent history

- [[2026-03-29-test-mkg-us-ecmpur-u-best-ecom-en-03292026-bthe-styles-everyone-s-searching-for]] — 6/10 (2026-03-27)
- [[2026-03-29-this-style-has-limited-availability]] — 5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-a-v2fresh-spring-styles-to-step-up-you]] — 5/10 (2026-03-27)

