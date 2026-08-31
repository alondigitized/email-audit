---
slug: 2026-08-31-meet-the-apartment-collection
type: email
date: 2026-08-31
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Barrel
subject: Meet the Apartment Collection! 🏢
tags: [email, score-7, sender/crate-barrel]
---
# Meet the Apartment Collection! 🏢
**Score:** 7/10 · **Type:** Email audit · **2026-08-31**
## Full review
## Technical Audit

## 1. Technical Summary
This is a standard MessageInsights/Cheetah Digital-templated HTML email (Crate & Barrel "Apartment Collection") with heavy MSO/Outlook conditional markup, responsive breakpoints, and multiple third-party tracking pixels; automated QA passed 57% of checks with 0 hard issues and 3 warning categories, driven primarily by missing header-level compliance data and near-universal missing `alt` attributes.

## 2. Link & Tracking Issues
- 87 tracking/click-redirect links were present but skipped by the automated HTTP probe (expected behavior for redirect-domain links; cannot confirm final destination validity from this data alone).
- Multiple tracking pixels/beacons detected: `mi.crateandbarrel.com/p/rp/*.png` (7 instances, MessageInsights open tracking), `mi.crateandbarrel.com/p/up/.../o.gif` (open pixel), `sr.rlcdn.com/448796.gif` (5 instances, LiveRamp/RampID sync pixels), and `dv.crateandbarrel.com/o/39d7bc1a-...?mi_mid=...&cp_tp=v` (conversion/view-through pixel). None of these are functional defects, but the volume (5x identical LiveRamp calls) is worth flagging for page-weight/load review.
- No broken or malformed `href` values found in the visible source.

## 3. Rendering & Accessibility
- **43 images are missing `alt` text** (per QA), spanning both content images (`image.mail.crateandbarrel.com/lib/...`) and tracking pixels (`mi.crateandbarrel.com`, `sr.rlcdn.com`, `dv.crateandbarrel.com`). Content images missing alt text is a real accessibility/deliverability gap (screen readers and image-blocked clients render nothing); tracking-pixel `alt` omissions are cosmetically flagged by the scanner but not functionally significant.
- Template includes standard defensive CSS for Outlook/MSO (`mso-table-lspace`, conditional `<!--[if mso]>` blocks, `.ExternalClass` resets) and Apple Mail formatting suppression (`x-apple-disable-message-reformatting`, `format-detection` meta tags) — no issues found here.
- Media queries target `max-width:460px` (mobile) and `min-width:640px/768px` (desktop image caps) — standard responsive pattern, no conflicts observed in the visible source.

## 4. Personalization & Merge Tokens
No merge tokens (e.g., `{{first_name}}`, AMPscript, Handlebars, or Liquid syntax) are visible in the truncated HTML provided. Cannot confirm absence of unrendered tokens in the body copy since the source was cut off before main content — flag for manual verification if a broken/literal token string is visually observed in the rendered email.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — may be an artifact of the AgentMail relay not surfacing the header rather than a true absence; cannot confirm one-click unsubscribe support without raw header access.
- **List-Unsubscribe-Post header not found (RFC 8058)** — same caveat; if genuinely absent, this email will not qualify for Gmail/Yahoo one-click unsubscribe under their 2024 bulk sender requirements.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status cannot be verified from available data.
- Visible unsubscribe link/footer text was not present in the truncated HTML — cannot confirm CAN-SPAM footer compliance (physical address, functional unsubscribe link) from the source provided.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
No destination URLs or UTM parameters are visible in the truncated HTML (all 87 tracking links were redirect-wrapped and skipped by the probe). Cannot assess landing page alignment or UTM tagging consistency from the data provided — recommend re-running with full link resolution if continuity validation is needed.

## 7. Recommendations
1. Add descriptive `alt` text to the 30 content images (`image.mail.crateandbarrel.com/lib/...`) at minimum; tracking pixels can remain `alt=""` intentionally but should be marked as decorative rather than flagged as missing.
2. Verify `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually being sent by capturing raw SMTP/MIME headers outside the AgentMail relay — if genuinely absent, add RFC 8058 one-click unsubscribe support.
3. Obtain raw `Authentication-Results` (SPF/DKIM/DMARC) from mail server logs to confirm sender authentication is passing, since relay-side capture is unavailable.
4. Re-run link resolution with tracking-redirect domains allow-listed or unwrapped to confirm all 87 click links resolve to valid, live pages and to validate UTM/landing-page continuity.
5. Consider deduplicating the 5 identical LiveRamp (`sr.rlcdn.com/448796.gif`) beacon calls if not intentional (e.g., per-block firing).
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

