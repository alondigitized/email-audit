---
slug: 2026-04-01-try-the-comfort-everyone-s-talking-about
type: email
date: 2026-04-01
persona: walker
score: "5/10"
sender: SKECHERS
subject: "Try the Comfort Everyone's Talking About"
tags: [email, score-5, sender/skechers]
---
# Try the Comfort Everyone's Talking About
**Score:** 5/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- A competent but unfocused promotional email. The "Trend Report" framing is a smart editorial hook, but it competes with an immediate 50% off banner that undercuts any aspirational positioning. The email covers a lot of ground — slip-ins, street style, color, best sellers — without committing to a clear hierarchy. The result is a scroll-through catalog that does its job adequately but won't drive urgency.
- Functional, not exceptional. Likely generates baseline click-through on BOGO/50% off, but squanders the "Trend Report" concept.

## What's working

- **Promotional clarity up top.** The 50% off offer and "SHOP NOW" CTA are immediately visible in the header banner — no ambiguity about the deal.
- **Editorial framing.** "Trend Report" gives the email a magazine-like structure that elevates it above a standard sale blast.
- **Category breadth.** Hands Free Slip-Ins, Street Style, Color, and Best Sellers cover the core assortment efficiently.
- **Strong hero imagery.** The Slip-Ins section leads with a clean, lifestyle-forward shoe shot that reads well at thumbnail scale.
- **Best Sellers section** provides social proof and a clear conversion anchor near the footer.

## What's weak

- **Dual opening messages create tone dissonance.** A premium "Trend Report" editorial header stacked directly on top of a "50% OFF" promotional banner is a mixed signal — aspirational and discount-driven at once, which weakens both.
- **CTA redundancy.** Every section has a "SHOP NOW" button with no differentiation in label or design. By the fourth instance, the buttons blend into the background.
- **"Color" section is vague.** A section named just "Color" with no supporting copy or product framing tells the recipient nothing. Color what? For whom? Why now?
- **Product copy is absent.** No product names, prices, or even brief descriptors are visible in any section. Clicks require a leap of faith.
- **Footer is dense and small.** The legal/unsubscribe block at the bottom is visually cramped and hard to parse — standard for retail email but worth noting.
- **Subject line and email body are misaligned.** The subject says "Try the Comfort Everyone's Talking About" — implying a comfort-first, product-specific message — but the email opens on a 50% off sale banner. The recipient expecting a comfort story gets a promo.

## Recommendations

- 1. **Pick a lane.** Either lead with the editorial "Trend Report" concept (full-bleed imagery, editorial copy, trend context) OR lead with the 50% off deal. Running both simultaneously dilutes both.
- 2. **Rename "Color" to something meaningful** — "Fresh Colorways," "Spring Palette," anything that tells a story.
- 3. **Add product names and prices** to at least the hero and best sellers modules. Even one anchor price point would reduce click hesitation.
- 4. **Differentiate CTAs by section.** "Shop Slip-Ins," "Shop Street Style," "See Best Sellers" — specificity lifts click rates.
- 5. **Realign subject line with opening module.** If the subject is about comfort, the first section should be Slip-Ins, not a 50% off banner.
- | Priority | Issue | Fix |
- |---|---|---|
- | **High** | All `image.emails.skechers.com` assets served over HTTP | Update template CDN base URL from `http://` to `https://` — the domain supports TLS |
- | **High** | Ink1000 tracking pixel over HTTP | Replace with `https://` equivalent or remove if vendor supports HTTPS |
- | **High** | Preheader copy references BOGO offer not present in email | Update `<div class="preheader">` to match actual email content |
- | **Medium** | Authentication-Results header missing | Verify DKIM signing is active on `emails.skechers.com` sending domain; check DMARC record |
- | **Medium** | 3 content images missing alt text (`49468f73`, `00100b23`, `fc08601a`) | Add descriptive `alt` attributes or `alt=""` if purely decorative |
- | **Low** | `-webkit-text-size-adjust: none` globally applied | Change to `100%` to preserve accessibility for users relying on font scaling |
- | **Low** | Return Path pixel missing explicit `https://` scheme | Confirm pixel URL and update to `https://pixel.app.returnpath.net/...` |

## Full review
## Skechers — "Try the Comfort Everyone's Talking About"

---

### 1. Executive Summary

A competent but unfocused promotional email. The "Trend Report" framing is a smart editorial hook, but it competes with an immediate 50% off banner that undercuts any aspirational positioning. The email covers a lot of ground — slip-ins, street style, color, best sellers — without committing to a clear hierarchy. The result is a scroll-through catalog that does its job adequately but won't drive urgency.

---

### 2. Business Impact Score: **5/10**

Functional, not exceptional. Likely generates baseline click-through on BOGO/50% off, but squanders the "Trend Report" concept.

---

### 3. What's Working

- **Promotional clarity up top.** The 50% off offer and "SHOP NOW" CTA are immediately visible in the header banner — no ambiguity about the deal.
- **Editorial framing.** "Trend Report" gives the email a magazine-like structure that elevates it above a standard sale blast.
- **Category breadth.** Hands Free Slip-Ins, Street Style, Color, and Best Sellers cover the core assortment efficiently.
- **Strong hero imagery.** The Slip-Ins section leads with a clean, lifestyle-forward shoe shot that reads well at thumbnail scale.
- **Best Sellers section** provides social proof and a clear conversion anchor near the footer.

---

### 4. What's Weak

- **Dual opening messages create tone dissonance.** A premium "Trend Report" editorial header stacked directly on top of a "50% OFF" promotional banner is a mixed signal — aspirational and discount-driven at once, which weakens both.
- **CTA redundancy.** Every section has a "SHOP NOW" button with no differentiation in label or design. By the fourth instance, the buttons blend into the background.
- **"Color" section is vague.** A section named just "Color" with no supporting copy or product framing tells the recipient nothing. Color what? For whom? Why now?
- **Product copy is absent.** No product names, prices, or even brief descriptors are visible in any section. Clicks require a leap of faith.
- **Footer is dense and small.** The legal/unsubscribe block at the bottom is visually cramped and hard to parse — standard for retail email but worth noting.
- **Subject line and email body are misaligned.** The subject says "Try the Comfort Everyone's Talking About" — implying a comfort-first, product-specific message — but the email opens on a 50% off sale banner. The recipient expecting a comfort story gets a promo.

---

### 5. Recommendations

1. **Pick a lane.** Either lead with the editorial "Trend Report" concept (full-bleed imagery, editorial copy, trend context) OR lead with the 50% off deal. Running both simultaneously dilutes both.
2. **Rename "Color" to something meaningful** — "Fresh Colorways," "Spring Palette," anything that tells a story.
3. **Add product names and prices** to at least the hero and best sellers modules. Even one anchor price point would reduce click hesitation.
4. **Differentiate CTAs by section.** "Shop Slip-Ins," "Shop Street Style," "See Best Sellers" — specificity lifts click rates.
5. **Realign subject line with opening module.** If the subject is about comfort, the first section should be Slip-Ins, not a 50% off banner.

---

### 6. Bottom Line

This email does the basics right — clear offer, decent imagery, logical category structure — but the editorial ambition of "Trend Report" never gets realized. It reads like a sale email wearing an editorial costume. Tightening the narrative around either the comfort/trend story or the promotional offer (not both) would meaningfully improve both engagement and brand impression.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Promote the Skechers spring line with a 50% off offer, wrapped in a "Trend Report" editorial format |
| **Hero / primary value prop** | Split between 50% off banner (promotional) and "Trend Report" header (editorial) — no single dominant message |
| **Membership / benefits** | Not visible in this render |
| **Product discoverability** | Four category modules: Hands Free Slip-Ins, Street Style, Color, Best Sellers — each with a single CTA, no product names or prices |
| **Utility / secondary modules** | Best Sellers acts as a social proof anchor; footer contains standard legal/opt-out links |
| **Bugs / friction** | No broken images or rendering errors visible; all CTAs and imagery appear intact |

---

## Technical Audit

## Technical Audit — Skechers "Try the Comfort Everyone's Talking About"
**Sent:** 2026-04-01 | **Campaign ID:** MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_B

---

### 1. Technical Summary

The email renders with a functional structure but has a pervasive HTTP image-serving problem affecting 13+ assets across `image.emails.skechers.com`, and a third-party pixel from `ink1000.com` that is both HTTP and missing alt text. SPF/DKIM status could not be confirmed via relay headers.

---

### 2. Link & Tracking Issues

- **26 click-redirect links** all route through `click.emails.skechers.com` with encrypted `?qs=` payloads — destination URLs cannot be audited without following redirects. No broken links confirmed, but final-destination UTM coverage is unverifiable from source alone.
- **Krux/Salesforce DMP pixels** (`beacon.krxd.net`) fire two user-match beacons with a plaintext SHA-256 hashed subscriber ID in the URL parameter (`partner_uid=9153f33fe5cdf59baf...`). Confirm this hash is salted and that DMP data-sharing is covered in the privacy policy.
- **Ink1000 tracking pixel** uses HTTP, not HTTPS:
  `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8107766165&mi_ecmp=...`
  This will be blocked by most modern email clients enforcing mixed-content rules.
- **Open pixel** (`open.aspx` on `click.emails.skechers.com`) is HTTPS — no issue.
- **Return Path pixel** (`pixel.app.returnpath.net/pixel.gif`) is served over HTTP (no `https://` scheme prefix) — likely blocked by Gmail, Apple Mail, and Outlook 365.

---

### 3. Rendering & Accessibility

**HTTP image sources blocked by clients (13 affected assets):**

| Asset | src |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/.../dde00662-....png` |
| Unnamed image | `http://image.emails.skechers.com/.../49468f73-....png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f-....png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0-....png` |
| Unnamed image | `http://image.emails.skechers.com/.../00100b23-....png` |
| AfterPay logo | `http://image.emails.skechers.com/.../07cb60b5-....png` |
| Unnamed image | `http://image.emails.skechers.com/.../fc08601a-....png` |
| Instagram icon | `http://image.emails.skechers.com/.../b782e0aa-....png` |
| Twitter icon | `http://image.emails.skechers.com/.../d76a5487-....png` |
| Facebook icon | `http://image.emails.skechers.com/.../a5c4cae0-....png` |
| Pinterest icon | `http://image.emails.skechers.com/.../573ab181-....png` |
| YouTube icon | `http://image.emails.skechers.com/.../8c5738fc-....png` |
| Ink1000 pixel | `http://www.ink1000.com/.../o.gif` |

All `image.emails.skechers.com` assets should be resolvable via HTTPS — the CDN appears to support it but the template is hardcoding `http://`.

**Missing alt text (4 images):**
- `o.gif` (ink1000 pixel) — tracking pixel, alt="" acceptable but flagged
- `49468f73-....png` — unknown decorative or content image, needs `alt=""`  or descriptive text
- `00100b23-....png` — same
- `fc08601a-....png` — same

These three unnamed content images render as broken images with no fallback text in clients that block HTTP or disable images.

**CSS mobile/desktop toggle:** The `display:none !important` / `display:block !important` pattern for `.mobile-content` / `.desktop-content` is correctly implemented with a `min-width: 768px` breakpoint. No issues.

**`-webkit-text-size-adjust: none`** is set globally — this prevents iOS from reflowing text and is an accessibility concern for users who rely on browser font scaling.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%FIRST_NAME%%`, `{{name}}`) detected in the truncated source. The subscriber ID in the ink1000 pixel (`mi_u=8107766165`) and Krux beacon (`partner_uid=121173391`) appear correctly populated.

---

### 5. Compliance

- **CAN-SPAM:** Physical address and unsubscribe mechanism not visible in the truncated source — confirm both are present in the footer (standard for Skechers templates; flagging for verification).
- **Authentication-Results header:** Not found via AgentMail relay. SPF/DKIM/DMARC pass/fail status is unknown for this delivery. If DKIM is failing, this directly impacts inbox placement.
- **Data sharing:** Krux DMP user-match pixel fires with a hashed subscriber identifier. Ensure this is disclosed in Skechers' privacy policy under "third-party data sharing."
- **Preheader mismatch:** Preheader reads *"Stock Up & Show Out with BOGO 50% Off"* but subject is *"Try the Comfort Everyone's Talking About."* These are contradictory signals — the preheader appears to be from a different campaign variant and was not updated.

---

### 6. Email-to-Site Continuity

All 26 links pass through `click.emails.skechers.com` with encrypted payloads — final destination UTMs cannot be confirmed from source. The campaign ID embedded in the ink1000 pixel (`MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_B`) matches the Krux impression pixel, indicating consistent internal campaign tagging. UTM parameter carrythrough to skechers.com landing pages should be spot-checked via redirect trace.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **High** | All `image.emails.skechers.com` assets served over HTTP | Update template CDN base URL from `http://` to `https://` — the domain supports TLS |
| **High** | Ink1000 tracking pixel over HTTP | Replace with `https://` equivalent or remove if vendor supports HTTPS |
| **High** | Preheader copy references BOGO offer not present in email | Update `<div class="preheader">` to match actual email content |
| **Medium** | Authentication-Results header missing | Verify DKIM signing is active on `emails.skechers.com` sending domain; check DMARC record |
| **Medium** | 3 content images missing alt text (`49468f73`, `00100b23`, `fc08601a`) | Add descriptive `alt` attributes or `alt=""` if purely decorative |
| **Low** | `-webkit-text-size-adjust: none` globally applied | Change to `100%` to preserve accessibility for users relying on font scaling |
| **Low** | Return Path pixel missing explicit `https://` scheme | Confirm pixel URL and update to `https://pixel.app.returnpath.net/...` |
## Recent history

- [[2026-04-01-did-you-forget-something]] — 5/10 (2026-04-01)
- [[2026-04-11-spain-fifa-world-cup-26-away-jersey]] — 5/10 (2026-04-01)
- [[2026-03-31-test-mkg-us-na-u-new-wide-en-04022026your-favorites-fit-for-your-feet]] — 5/10 (2026-03-31)

