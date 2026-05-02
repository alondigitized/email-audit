---
slug: 2026-05-02-save-25-these-active-looks-are-in-it-for-the-long-run
type: email
date: 2026-05-02
persona: rosie-coupon-kohls-fap6e
score: "5/10"
sender: "Kohl's Friends & Family"
subject: Save 25% | These active looks are in it for the long run 🏃‍♀️‍➡️
tags: [email, score-5, sender/kohl-s-friends-family]
---
# Save 25% | These active looks are in it for the long run 🏃‍♀️‍➡️
**Score:** 5/10 · **Type:** Email audit · **2026-05-02**
## Executive summary

- A sprawling, multi-module Kohl's Friends & Family email anchored on a 25% off sale with an active/athletic wear focus. The hero section is clean and on-theme, but the email quickly loses discipline — pivoting from activewear to home goods to clearance to a charity section to an app download, all within a single scroll. The sale mechanic (25% off) is the clearest thing in the email; almost everything else competes for attention. This is a volume send with moderate targeting, not a precision shot.
- Strong discount driving a real event, but the lack of editorial restraint and the off-theme home goods detour suppress conversion potential for anyone who opened because of the active-wear hook.

## What's working

- **"Friends & Family Save 25%" is prominently placed** in the hero — the offer is unmistakable within the first scroll.
- **Time urgency is present** — there's a "Time's running out to get your gifts by Mother's Day" countdown/callout near the top, which creates a legitimate reason to act now.
- **$19.99 price anchor** in the TEK GEAR section establishes accessible entry pricing and reduces friction.
- **TEK GEAR branding** is on-theme with the subject line — athletic visual, clean product shot.
- **Category navigation tiles** (Women, Men, Kids, Shoes) make it easy to self-select into the right active gear funnel.

## What's weak

- **Home goods mid-section breaks the active narrative entirely.** "Refresh your home without busting your budget" — bedding, home decor — is jarring after two activewear modules. Recipients who opened for athletic wear are now looking at throw pillows.
- **Clearance 85% module undercuts the 25% Friends & Family framing.** If I can get 85% off in clearance, why am I excited about 25% off full-price active? Positioning tension is visible.
- **The charity section ("Empowering Healthy Futures for the Next Generation")** is admirable, but it interrupts the purchase funnel at exactly the wrong moment — between the hero offer and the CTA tiles. It reads as padding, not brand equity.
- **Module overload.** Activewear hero → price anchor → charity → activewear categories → home goods → clearance → Kohl's Cash → app download → jewelry. Every module competes. The email has no clear second act after the hero.
- **No product-level personalization visible** — this appears to be a broadcast with no tailoring to browsing or purchase history.

## Recommendations

- 1. **Cut to three modules max for an active-wear focus send:** Hero offer → Active category tiles → Kohl's Cash/loyalty hook. Kill home goods and clearance from this version.
- 2. **Move the Kohl's Cash callout higher.** It's a Kohl's loyalty differentiator — put it in the hero sub-line, not buried mid-scroll.
- 3. **Make the Mother's Day urgency louder.** The countdown/callout is there but visually small relative to the Friends & Family badge. Swap those priorities.
- 4. **Separate the clearance module into its own send** or place it in a footer strip — 85% vs. 25% is a positioning collision, not a upsell.
- 5. **Remove or relocate the charity section.** It belongs in a brand-equity send or a newsletter context — not mid-funnel in a promotional email.
- | Priority | Issue | Action |
- |---|---|---|
- | High | `</custom>` invalid closing tag | Replace with `</div>` in the open-pixel wrapper |
- | High | `List-Unsubscribe` / `List-Unsubscribe-Post` headers missing | Confirm AgentMail relay forwards these headers; required for Gmail/Yahoo bulk sender compliance |
- | High | `user-scalable=0` in viewport | Remove `maximum-scale=1, user-scalable=0` — accessibility violation (WCAG 1.4.4) |
- | Medium | 10 tracking pixels missing `aria-hidden="true"` | Add `alt="" aria-hidden="true"` to all 1×1 tracking images |
- | Medium | `Authentication-Results` not captured | Verify relay preserves SPF/DKIM headers; audit DMARC alignment for `s.kohls.com` |
- | Medium | Triple open-pixel instrumentation | Audit whether all three open-pixel systems are intentional; deduplication reduces metric inflation |
- | Medium | UTM continuity unconfirmed | Probe 3–5 click-redirect URLs to verify UTM params survive the redirect chain |
- | Low | Empty `<title>` | Add a descriptive title (e.g., "Kohl's — Save 25% on Active Styles") |
- | Low | Google Fonts triple-loaded | Consolidate into a single `<link>` tag per family; remove `@import` duplication |
- | Low | `mi_kc_redm_end_dte=` empty | Investigate the unfilled token in the MessageInsight pixel URL |

## Full review
---

## Kohl's Friends & Family — "Active Looks" Email Review

---

### 1. Executive Summary

A sprawling, multi-module Kohl's Friends & Family email anchored on a 25% off sale with an active/athletic wear focus. The hero section is clean and on-theme, but the email quickly loses discipline — pivoting from activewear to home goods to clearance to a charity section to an app download, all within a single scroll. The sale mechanic (25% off) is the clearest thing in the email; almost everything else competes for attention. This is a volume send with moderate targeting, not a precision shot.

---

### 2. Business Impact Score: **5/10**

Strong discount driving a real event, but the lack of editorial restraint and the off-theme home goods detour suppress conversion potential for anyone who opened because of the active-wear hook.

---

### 3. What's Working

- **"Friends & Family Save 25%" is prominently placed** in the hero — the offer is unmistakable within the first scroll.
- **Time urgency is present** — there's a "Time's running out to get your gifts by Mother's Day" countdown/callout near the top, which creates a legitimate reason to act now.
- **$19.99 price anchor** in the TEK GEAR section establishes accessible entry pricing and reduces friction.
- **TEK GEAR branding** is on-theme with the subject line — athletic visual, clean product shot.
- **Category navigation tiles** (Women, Men, Kids, Shoes) make it easy to self-select into the right active gear funnel.

---

### 4. What's Weak

- **Home goods mid-section breaks the active narrative entirely.** "Refresh your home without busting your budget" — bedding, home decor — is jarring after two activewear modules. Recipients who opened for athletic wear are now looking at throw pillows.
- **Clearance 85% module undercuts the 25% Friends & Family framing.** If I can get 85% off in clearance, why am I excited about 25% off full-price active? Positioning tension is visible.
- **The charity section ("Empowering Healthy Futures for the Next Generation")** is admirable, but it interrupts the purchase funnel at exactly the wrong moment — between the hero offer and the CTA tiles. It reads as padding, not brand equity.
- **Module overload.** Activewear hero → price anchor → charity → activewear categories → home goods → clearance → Kohl's Cash → app download → jewelry. Every module competes. The email has no clear second act after the hero.
- **No product-level personalization visible** — this appears to be a broadcast with no tailoring to browsing or purchase history.

---

### 5. Recommendations

1. **Cut to three modules max for an active-wear focus send:** Hero offer → Active category tiles → Kohl's Cash/loyalty hook. Kill home goods and clearance from this version.
2. **Move the Kohl's Cash callout higher.** It's a Kohl's loyalty differentiator — put it in the hero sub-line, not buried mid-scroll.
3. **Make the Mother's Day urgency louder.** The countdown/callout is there but visually small relative to the Friends & Family badge. Swap those priorities.
4. **Separate the clearance module into its own send** or place it in a footer strip — 85% vs. 25% is a positioning collision, not a upsell.
5. **Remove or relocate the charity section.** It belongs in a brand-equity send or a newsletter context — not mid-funnel in a promotional email.

---

### 6. Bottom Line

This is a competent Kohl's promotional email that won't embarrass anyone, but won't exceed plan either. The active theme in the subject is real, the offer is clear, and the Mother's Day hook adds genuine urgency — but the email tries to do too much and ends up being an everything-store email with an active wear label on it. Tighter curation would lift click-through meaningfully.

---

### 7. Subject Line Analysis

- **Subject:** `Save 25% | These active looks are in it for the long run 🏃‍♀️‍➡️`
- **Length:** 58 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `3`, Urgency `4`, Specificity `6`
- **Strengths:**
  - Discount is front-loaded ("Save 25%") — scannable in a crowded inbox
  - The fitness pun ("in it for the long run") is light and on-brand without being cringe
- **Weaknesses:**
  - No urgency signal (no deadline, no "ends soon" — Mother's Day angle is completely absent from subject)
  - Personalization is zero — "active looks" is broad enough to apply to anyone
- **Alt A:** `Friends & Family: 25% off active styles — Mother's Day ends soon`
- **Alt B:** `Your 25% off drops today — shop active, shoes & more`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the preview text is not visible in the render; likely showing "View this email in your browser" or the nav bar
- **Length:** N/A
- **Scores (1-10):** Complements subject `2`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None visible)
- **Weaknesses:**
  - If the preheader is the browser-view link, it wastes prime inbox real estate immediately after the subject
  - No reinforcement of the Mother's Day deadline or the $19.99 anchor
- **Alt A:** `Friends & Family ends soon — athletic styles from $19.99, plus earn Kohl's Cash`
- **Alt B:** `Mother's Day is close — 25% off TEK GEAR, shoes & activewear today`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** "Save 25%" front-loaded in the subject is attention-worthy for a deal-aware shopper, and the pun lands without trying too hard. But there's no personalization and no deadline in the subject — this reads like a mass blast, and I've learned not to expect curated results from Kohl's sends of this type.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** The TEK GEAR section and the category tiles are clean enough to click, but by the time I've scrolled through the charity section and seen home goods interjected into an active-wear email, the momentum is gone. Nothing feels targeted; it's a store flyer with one athletic photo on the cover.

---

### 11. Evidence

- **Overall purpose:** Drive Friends & Family sale traffic (25% off), with Mother's Day as the urgency frame; secondary goal is loyalty reinforcement (Kohl's Cash) and app download.
- **Hero / primary value proposition:** "Friends & Family Save 25%" badge with a countdown/Mother's Day urgency line. TEK GEAR product shot with a $19.99 price point. Clear, competent.
- **Membership / benefits section:** Kohl's Cash is called out (amount unclear in render) but positioned mid-to-late in the scroll — misses the hero placement it deserves as a Kohl's loyalty differentiator.
- **Product discoverability / recommendation modules:** Active category tiles (Women, Men, Kids, Shoes) are clean and functional. TEK GEAR is the named brand anchor.
- **Utility / secondary modules:** Home goods ("Refresh your home") module, clearance strip (up to 85% off), app download section, jewelry/accessories callout.
- **Bugs / friction / clarity issues:** No visible broken images or overlapping text. The email renders cleanly. The only "bug" is editorial — home goods appearing mid-scroll in an activewear subject-line email is a relevance mismatch, not a rendering error.

---

## Technical Audit

## Technical Audit — Kohl's "Save 25% | Active Looks" Email

**From:** `kohls@s.kohls.com` | **Subject:** Save 25% | These active looks are in it for the long run 🏃‍♀️‍➡️

---

### 1. Technical Summary

Standard bulk promotional email using a table-based layout with MSO/VML conditional comments and Google Fonts. No critical blockers found; the main concerns are missing relay-level compliance headers, absent alt text on tracking pixels, and an invalid HTML tag in the open-pixel block.

---

### 2. Link & Tracking Issues

**22 tracking links skipped by QA probe.** All click links route through `click.chp.kohls.com` and `click.s.kohls.com` — redirect domains that were not probed for destination validity. Final landing URLs and UTM parameter integrity cannot be confirmed from the source alone.

**Three distinct tracking/pixel systems present simultaneously:**
- `click.chp.kohls.com/o/...` — primary open pixel (1×1, no alt)
- `mi.kohls.com/p/up/...` — secondary open pixel via MessageInsight (`o.gif`, no alt)
- `click.s.kohls.com/open.aspx?...` — third open pixel (different subdomain/system)
- `kohls.demdex.net/event?...` — Adobe Audience Manager sync pixel

Triple open-pixel instrumentation is unusual and will inflate open-rate metrics if any two fire on the same open event.

**Malformed HTML tag:** The open-pixel `<div>` block contains `</custom>` as its closing tag instead of `</div>`:
```html
<img src="https://click.s.kohls.com/open.aspx?..." width="1" height="1" alt=""></custom>
```
This is invalid HTML and will cause unpredictable DOM behavior in strict-rendering clients.

---

### 3. Rendering & Accessibility

**`<title>` element is empty.** `<title></title>` — some email clients (notably Apple Mail) display the title in thread previews; an empty title is a missed fallback.

**`user-scalable=0` in viewport meta** — `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />` — disables pinch-to-zoom, which is an accessibility violation (WCAG 1.4.4). Should be removed or changed to `user-scalable=yes`.

**11 images missing alt text** (confirmed by QA). All are tracking pixels or reporting pings, so `alt=""` with `aria-hidden="true"` is the correct fix — only `o.gif` already carries `aria-hidden="true"`. The others do not:
- `61eca08a...` (click.chp.kohls.com)
- `event` (kohls.demdex.net)
- `2a5adc5a...`, `f441d45d...`, `c2f81e9a...`, `415c8a18...`, `69494b48...`, `78308d1d...`, `916d6fa0...` (mi.kohls.com reporting pings)

Screen readers will attempt to announce these pixel URLs without `aria-hidden="true"`.

**Google Fonts loaded three times** — once via `<link>`, once via `<link>`, and once via `@import` inside a `<style>` block — for both Roboto and Montserrat. This adds unnecessary DNS lookups and request overhead, and the duplication is inside the `<!--[if !mso]><!-->` guard so it fires on all non-Outlook clients.

**Incomplete `mi_kc_redm_end_dte` merge token** visible in a raw image URL:
```
...&mi_kc_redm_end_dte=&mi_kc_event_pen...
```
The `mi_kc_redm_end_dte` parameter has an empty value, suggesting an unfilled dynamic token passed through to a tracking pixel. Not user-visible, but indicates a merge/personalization gap in the reporting pipeline.

---

### 4. Personalization & Merge Tokens

No user-facing merge tokens visible in the truncated source (no `{{first_name}}`, `%%EMAIL%%`, or equivalent). The `mi_u=604230016` parameter in MessageInsight pixel URLs appears to be a static recipient ID (or a test/seed value) — if this is a seed address audit, the value is expected. No broken/unfilled visible merge tokens in body copy.

The empty `mi_kc_redm_end_dte=` token noted above is in a tracking pixel URL and is the only confirmed unfilled token.

---

### 5. Compliance

**`List-Unsubscribe` header not found** (QA WARN). Absence of this header means Gmail and Apple Mail will not render their native one-click unsubscribe UI. For a sender of Kohl's volume, this is expected to be set at the MTA/ESP level — the likely explanation is that the AgentMail relay is not forwarding or preserving it. Confirm at the relay layer.

**`List-Unsubscribe-Post` header not found** (QA WARN, RFC 8058). One-click unsubscribe (required by Gmail/Yahoo bulk sender policy for >5k/day senders) depends on this header alongside `List-Unsubscribe`. Same root cause as above — likely a relay forwarding gap.

**`Authentication-Results` header not found** (QA WARN). SPF/DKIM/DMARC pass/fail status cannot be verified from the captured headers. The `kohls@s.kohls.com` sending domain should have DKIM alignment with `s.kohls.com`; relay must preserve or re-inject authentication results.

**`<meta name="robots" content="noindex, nofollow" />` and `<meta name="referrer" content="no-referrer" />` are present** — correct practice for email HTML to suppress search indexing and referrer leakage.

**Physical address / CAN-SPAM footer** — not visible in the truncated source. Assumed to be present below the fold; should be verified in the full HTML.

---

### 6. Email-to-Site Continuity

All 22 click links pass through `click.chp.kohls.com` or `click.s.kohls.com` redirect domains. UTM parameter presence on final landing URLs cannot be confirmed without resolving those redirects. No raw `kohls.com` URLs with visible UTM strings appear in the truncated source. Recommend probing a sample of destination URLs to confirm `utm_source`, `utm_medium`, and `utm_campaign` are appended post-redirect.

The `email_name=260502_DG_Email_Saturday` parameter visible on several `mi.kohls.com` reporting pixels is consistent with a 2026-05-02 Saturday send, which aligns with the capture date. No continuity mismatch detected at the metadata level.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | `</custom>` invalid closing tag | Replace with `</div>` in the open-pixel wrapper |
| High | `List-Unsubscribe` / `List-Unsubscribe-Post` headers missing | Confirm AgentMail relay forwards these headers; required for Gmail/Yahoo bulk sender compliance |
| High | `user-scalable=0` in viewport | Remove `maximum-scale=1, user-scalable=0` — accessibility violation (WCAG 1.4.4) |
| Medium | 10 tracking pixels missing `aria-hidden="true"` | Add `alt="" aria-hidden="true"` to all 1×1 tracking images |
| Medium | `Authentication-Results` not captured | Verify relay preserves SPF/DKIM headers; audit DMARC alignment for `s.kohls.com` |
| Medium | Triple open-pixel instrumentation | Audit whether all three open-pixel systems are intentional; deduplication reduces metric inflation |
| Medium | UTM continuity unconfirmed | Probe 3–5 click-redirect URLs to verify UTM params survive the redirect chain |
| Low | Empty `<title>` | Add a descriptive title (e.g., "Kohl's — Save 25% on Active Styles") |
| Low | Google Fonts triple-loaded | Consolidate into a single `<link>` tag per family; remove `@import` duplication |
| Low | `mi_kc_redm_end_dte=` empty | Investigate the unfilled token in the MessageInsight pixel URL |
## Recent history

- [[2026-05-01-you-just-scored-15-off-thanks-for-signing-up-for-our-emails]] — 6.5/10 (2026-05-01)
- [[2026-05-01-welcome-to-kohl-s-rewards]] — 6/10 (2026-05-01)
- [[2026-05-01-a-little-sephora-shopping-intel]] — 6/10 (2026-05-01)

