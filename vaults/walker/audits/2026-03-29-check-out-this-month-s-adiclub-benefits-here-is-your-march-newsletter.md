---
slug: 2026-03-29-check-out-this-month-s-adiclub-benefits-here-is-your-march-newsletter
type: email
date: 2026-03-24
persona: walker
score: "4/10"
sender: adidas
subject: "Check out this month's adiClub benefits, here is your March Newsletter"
tags: [email, score-4, sender/adidas]
---
# Check out this month's adiClub benefits, here is your March Newsletter
**Score:** 4/10 · **Type:** Email audit · **2026-03-24**
## Executive summary

- A cluttered, low-conviction newsletter that tries to do too much and lands softly on all of it. The Climacool giveaway is the strongest hook but gets buried under competing modules. The "Exclusive Superstar Icon Kit" and "Win a Barnminster Travel Kit" contests fragment attention further, making this feel like three separate emails stitched together. The bottom "Stay in the Know" section is a wall of grey text that most recipients will skip entirely.
- High volume of asks, low clarity on any single one. Engagement rate will be diluted by the module sprawl.

## What's working

- **The Climacool hero** is visually strong — the shoe product shot is clean and the headline "Your Chance to Win: The Climacool Kit" is direct and benefit-led.
- **Top promo bar** ("Save 30% on eligible orders with code MARCH") is immediately visible and actionable — the clearest CTA in the entire email.
- **Brand voice** is consistent and the dark/high-contrast visual treatment feels premium.

## What's weak

- **Too many contest modules.** Climacool win + Superstar Icon Kit + Barnminster Travel Kit = three separate sweepstakes in one scroll. No hierarchy between them.
- **"Stay in the Know" block** is a dense paragraph of small grey text with no visual break or subheads. It reads like fine print, not content.
- **CTA labels are generic and repetitive** — "Shop or Enter" repeated verbatim across modules creates no urgency or differentiation.
- **The Superstar module** appears very small with low visual weight relative to the Climacool hero — the product image is thumbnail-sized and doesn't justify being a standalone module.
- **Subject line is weak.** "Check out this month's adiClub benefits" is bland; "here is your March Newsletter" is redundant. Neither creates urgency.

## Recommendations

- 1. **Pick one hero contest and commit to it.** Lead with Climacool and move the secondary giveaways to a single stacked "More to Win" row — don't give each equal billing.
- 2. **Rewrite the top-of-email headline.** "Your adiClub Newsletter" tells recipients nothing — replace with a value-forward line like "3 Ways to Win This March."
- 3. **Replace the "Stay in the Know" paragraph** with 2–3 scannable bullets or a simple icon/text row. Nobody reads a grey text block.
- 4. **Differentiate CTAs.** "Enter to Win," "Claim Your Kit," "Shop Now" — each should match the specific module action.
- 5. **Drop the Barnminster module or give it more visual weight.** As rendered, it's a mid-email orphan with weak imagery.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Broken destination URL (`/g/61d35233...`) | Fix the raw destination in the ESP to an absolute `https://` URL; re-send or trigger a correction email if already deployed |
- | **P0** | Plain-text fallback is 0 chars | Populate the `text/plain` MIME part — minimum: subject line, CTA URLs, and unsubscribe link |
- | **P1** | 6× HTTP arrow images + 1× HTTP tracking pixel | Update all `image.link.adidas.com` and `click.comms.adidas.com` image sources to `https://` |
- | **P1** | Missing `Authentication-Results` | Confirm SPF/DKIM alignment on `us-news.comms.adidas.com` at ESP level; surface headers in monitoring |
- | **P2** | Two images missing alt text | Add descriptive alt for content image; add `alt=""` (empty) for tracking pixel |
- | **P2** | Duplicate `@font-face` blocks | Remove duplicate declarations from template; audit template merge logic |
- | **P3** | Meta charset missing `http-equiv` | Correct to `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` |

## Full review
### 1. Executive Summary

A cluttered, low-conviction newsletter that tries to do too much and lands softly on all of it. The Climacool giveaway is the strongest hook but gets buried under competing modules. The "Exclusive Superstar Icon Kit" and "Win a Barnminster Travel Kit" contests fragment attention further, making this feel like three separate emails stitched together. The bottom "Stay in the Know" section is a wall of grey text that most recipients will skip entirely.

---

### 2. Business Impact Score: **4/10**

High volume of asks, low clarity on any single one. Engagement rate will be diluted by the module sprawl.

---

### 3. What's Working

- **The Climacool hero** is visually strong — the shoe product shot is clean and the headline "Your Chance to Win: The Climacool Kit" is direct and benefit-led.
- **Top promo bar** ("Save 30% on eligible orders with code MARCH") is immediately visible and actionable — the clearest CTA in the entire email.
- **Brand voice** is consistent and the dark/high-contrast visual treatment feels premium.

---

### 4. What's Weak

- **Too many contest modules.** Climacool win + Superstar Icon Kit + Barnminster Travel Kit = three separate sweepstakes in one scroll. No hierarchy between them.
- **"Stay in the Know" block** is a dense paragraph of small grey text with no visual break or subheads. It reads like fine print, not content.
- **CTA labels are generic and repetitive** — "Shop or Enter" repeated verbatim across modules creates no urgency or differentiation.
- **The Superstar module** appears very small with low visual weight relative to the Climacool hero — the product image is thumbnail-sized and doesn't justify being a standalone module.
- **Subject line is weak.** "Check out this month's adiClub benefits" is bland; "here is your March Newsletter" is redundant. Neither creates urgency.

---

### 5. Recommendations

1. **Pick one hero contest and commit to it.** Lead with Climacool and move the secondary giveaways to a single stacked "More to Win" row — don't give each equal billing.
2. **Rewrite the top-of-email headline.** "Your adiClub Newsletter" tells recipients nothing — replace with a value-forward line like "3 Ways to Win This March."
3. **Replace the "Stay in the Know" paragraph** with 2–3 scannable bullets or a simple icon/text row. Nobody reads a grey text block.
4. **Differentiate CTAs.** "Enter to Win," "Claim Your Kit," "Shop Now" — each should match the specific module action.
5. **Drop the Barnminster module or give it more visual weight.** As rendered, it's a mid-email orphan with weak imagery.

---

### 6. Bottom Line

This email reads like a monthly digest built by committee — too many modules, no dominant CTA, and a text-heavy footer that drags the experience down. The 30% discount code deserved to be a far bigger story. As structured, most of the value is lost in the noise.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | adiClub member newsletter for March — discount + multiple contest entries |
| **Hero / primary value prop** | Climacool Kit giveaway — strong visual, direct headline, but CTA button is small |
| **Membership / benefits** | Implied via "adiClub" branding, but no member-specific benefits or points callout visible |
| **Product discoverability** | Minimal — Superstar shoe is shown but dwarfed; no product grid or recommendations |
| **Utility / secondary modules** | "Stay in the Know" paragraph + social row at footer — low readability, low engagement potential |
| **Bugs / friction** | No broken images; all text renders cleanly. The Barnminster module image is small but not broken. No visible rendering defects. |

---

## Technical Audit

## Technical Audit — adidas adiClub March Newsletter

**From:** adidas `<adidas@us-news.comms.adidas.com>`
**Date:** 2026-03-29

---

### 1. Technical Summary

The email has a confirmed broken destination link, six repeated HTTP (non-HTTPS) image sources that will be blocked by modern clients, and a zero-byte plain-text fallback — each a distinct deliverability or rendering failure. Overall QA pass rate is 62%.

---

### 2. Link & Tracking Issues

**[FAIL] Broken destination URL — relative path used instead of absolute**
The click-redirect for one CTA resolves to an internal path `/g/61d35233-df4f-4193-8809-05341234a275` rather than a valid absolute URL. The ESP wraps it as:
```
https://dv.adidas.com/o/61d35233-df4f-4193-8809-05341234a275?txn=d424f580-2b86-11f1-857b-9a305ea1f7ea
```
The QA error (`unknown url type: '/g/...'`) indicates the raw destination stored in the ESP is a relative path — the outer redirect will fail to resolve it for recipients. The specific transaction ID (`txn=d424f580-2b86-11f1-857b-9a305ea1f7ea`) confirms this is a live send, not a test seed.

**[WARN] 34 tracking/click-redirect links not probed**
All outbound links pass through `click.comms.adidas.com` or `dv.adidas.com` redirect chains. Destination URL integrity beyond the broken link above is unverified.

---

### 3. Rendering & Accessibility

**[WARN] Six HTTP (non-HTTPS) image sources — same asset repeated**
The arrow icon (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) appears six times with an insecure source:
```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Gmail, Outlook.com, and Apple Mail on iOS will block mixed-content images by default. The asset should be served over `https://`.

**[WARN] HTTP tracking pixel**
```
http://click.comms.adidas.com/CI0/0102019d1d6705db-7d4b80a5-8e7a-4303-b7c8-464a90b26726-000000/...
```
Open-tracking pixel served over HTTP — also missing alt text. Most clients will block this, suppressing open-rate data.

**[WARN] Two images missing `alt` text**
- `61d35233-df4f-4193-8809-05341234a275` (content image, no alt)
- `waEFykn6qxjiPEs_Rp2US1OXc4xLAN7laoOB122-ceU=449` (tracking pixel, no alt)
Images-off rendering will show empty boxes for the content image.

**[NOTE] Duplicate `@font-face` declarations**
`AdihausDIN` and `AdineuePRO` are declared twice across two separate `<style>` blocks with slightly different fallback stacks (`local('Calibri'), local('Sans Serif')` present in block 1, absent in block 2). This is harmless but indicates template merge artifact — extra CSS weight.

**[NOTE] Malformed meta charset tag**
```html
<meta content="text/html; charset=UTF-8" />
```
Missing `http-equiv="Content-Type"` attribute. Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Browsers and some webview renderers may not honor charset without the `http-equiv`.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`{{`, `%%`, `[[`) visible in the available HTML source. ESP-level identifiers (`mi_mid`, `cp_cid`) appear correctly substituted in tracking URLs. No issues found on available source.

---

### 5. Compliance

**[FAIL] Plain-text fallback is 0 characters**
CAN-SPAM (and its equivalents) require a usable plain-text alternative to be present in the MIME multipart structure. A zero-byte text/plain part fails this requirement and increases spam-filter scoring.

**[WARN] Authentication-Results header not found**
SPF and DKIM pass/fail status is unverifiable from the received copy — the `Authentication-Results` header was absent from the AgentMail relay data. Sending domain is `us-news.comms.adidas.com`; DMARC alignment should be confirmed at the ESP level before assuming pass.

**[NOTE] Unsubscribe and physical address**
Not verifiable from truncated source — footer was cut. These must be present and functional for CAN-SPAM compliance.

---

### 6. Email-to-Site Continuity

**[WARN] `referrer` meta tag suppresses referrer data**
```html
<meta name="referrer" content="no-referrer" />
```
This is appropriate for the email webview itself (prevents leaking the email URL), but if any link opens in a webview rather than the system browser, referrer will be stripped and UTM attribution via `document.referrer` on the landing page will fail. Confirm all CTAs open in the external browser (`target="_blank"` or equivalent mobile handler).

**[NOTE] UTM parameter coverage on 34 click-redirect links unverified**
All links pass through `click.comms.adidas.com` — destination-level UTM params (`utm_source`, `utm_medium`, `utm_campaign`) could not be confirmed due to click-redirect architecture. If UTMs are appended post-redirect by the ESP, verify the broken link above also receives them once fixed.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Broken destination URL (`/g/61d35233...`) | Fix the raw destination in the ESP to an absolute `https://` URL; re-send or trigger a correction email if already deployed |
| **P0** | Plain-text fallback is 0 chars | Populate the `text/plain` MIME part — minimum: subject line, CTA URLs, and unsubscribe link |
| **P1** | 6× HTTP arrow images + 1× HTTP tracking pixel | Update all `image.link.adidas.com` and `click.comms.adidas.com` image sources to `https://` |
| **P1** | Missing `Authentication-Results` | Confirm SPF/DKIM alignment on `us-news.comms.adidas.com` at ESP level; surface headers in monitoring |
| **P2** | Two images missing alt text | Add descriptive alt for content image; add `alt=""` (empty) for tracking pixel |
| **P2** | Duplicate `@font-face` blocks | Remove duplicate declarations from template; audit template merge logic |
| **P3** | Meta charset missing `http-equiv` | Correct to `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` |
## Recent history

- [[2026-03-29-last-day-to-redeem-your-voucher]] — 5/10 (2026-03-23)
- [[2026-03-23-your-first-pair-just-became-2-bogo-50-off]] — 5/10 (2026-03-23)
- [[2026-03-29-disney-s-goofy-soccermania]] — 3/10 (2026-03-23)

