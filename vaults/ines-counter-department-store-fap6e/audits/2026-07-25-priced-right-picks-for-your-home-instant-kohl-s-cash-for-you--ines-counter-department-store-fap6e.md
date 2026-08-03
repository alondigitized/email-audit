---
slug: 2026-07-25-priced-right-picks-for-your-home-instant-kohl-s-cash-for-you--ines-counter-department-store-fap6e
type: email
date: 2026-07-25
persona: ines-counter-department-store-fap6e
score: "6/10"
sender: Kohl’s
subject: "Priced-right picks for your home 🏡  INSTANT Kohl's Cash for you  🤑"
tags: [email, score-6, sender/kohl-s]
---
# Priced-right picks for your home 🏡  INSTANT Kohl's Cash for you  🤑
**Score:** 6/10 · **Type:** Email audit · **2026-07-25**
## Full review
## Technical Audit

## Technical Audit: Kohl's "Priced-right picks for your home" Email

### 1. Technical Summary
Standard Kohl's/Coherent Path (`s.kohls.com`) transactional-style marketing template with heavy multi-vendor tracking (Coherent Path, Kohl's `mi.kohls.com`, Adobe AAM). QA pass rate is 43%, driven mainly by missing accessibility alt text and unconfirmed compliance/auth headers rather than broken links.

### 2. Link & Tracking Issues
- 5+ distinct tracking pixels/beacons fire on open, from at least 3 vendors:
  - `https://click.chp.kohls.com/o/3449a4e5-da92-479a-be06-af04494d20d4?mi_mid=...&cp_tp=v3.eJyN...` (Coherent Path, encrypted `cp_tp` payload)
  - `https://mi.kohls.com/p/up/88954bbbbcab3c0e/o.gif?mi_u=604230016&mi_ecmp=1018355_2026725`
  - `https://click.s.kohls.com/open.aspx?TDD7GU4DSDQUVJL6W6Z77P5CHY.60262&d=60262&bmt=0`
  - `https://kohls.demdex.net/event?d_sid=13245196` (Adobe Audience Manager)
  - 7+ region/click pixels at `https://mi.kohls.com/p/rp/*.png?...&email_name=260725_DG_Email_Sat_PM&...`
- Malformed markup: the `click.s.kohls.com/open.aspx` beacon `<img>` is followed by a stray `</custom>` closing tag with no matching opening tag — invalid HTML that should be removed.
- QA flagged 59 tracking/redirect links as "skipped" (HTTP probe intentionally not followed for click-redirect domains) — this is expected tooling behavior, not evidence of broken links; destination URLs cannot be verified from the truncated source.

### 3. Rendering & Accessibility
- `<meta name="viewport" content="... maximum-scale=1, user-scalable=0">` disables pinch-to-zoom — an accessibility issue (fails WCAG 1.4.4 Resize Text) for low-vision users.
- 8 images confirmed missing `alt` text (QA): the Coherent Path open beacon, the AAM event pixel, and 6 `mi.kohls.com/p/rp/*.png` region-tracking pixels. Inconsistent with the `mi.kohls.com/p/up/...o.gif` pixel, which correctly uses `alt="" aria-hidden="true"` — the same pattern should be applied to the others (all are 1x1 non-content pixels, so the fix is trivial and has no visual impact).
- Empty `<title></title>` — no preheader/title text set.
- Web fonts (Roboto, Montserrat) loaded via `<link>`/`@import` only inside the `<!--[if !mso]>` block — correctly excluded from Outlook, with a reasonable `Montserrat, Arial, Helvetica, sans-serif` fallback stack on `<body>`. No issue found here.
- MSO conditional comments and `mso-*` styles present for Outlook table rendering — no issues found.

### 4. Personalization & Merge Tokens
No unresolved merge tags (e.g. `{{first_name}}`, `%%FIRSTNAME%%`) found in the visible HTML. Personalization is implemented via opaque subscriber/campaign identifiers (`mi_mid=019f9812-d980-7000-873b-cd4d8a1743bb`, `mi_cid=67791fba63db790b`, `cp_cid=8ba359f132e3c109`) rather than visible content merge fields — no broken-token evidence to report. Note: HTML was truncated before the main content/CTA blocks, so body-copy personalization could not be fully assessed.

### 5. Compliance (CAN-SPAM, unsubscribe, authentication)
- `List-Unsubscribe` header: not found (QA WARN). QA notes this may be a relay capture limitation of AgentMail rather than a confirmed sender-side omission — recommend re-verifying against raw SMTP headers before treating as a violation.
- `List-Unsubscribe-Post` (RFC 8058, one-click unsubscribe): not found (QA WARN) — same relay caveat applies.
- No physical mailing address detected in the scanned content (QA WARN) — CAN-SPAM requires one; likely located in the footer, which falls outside the truncated HTML window, so this should be confirmed against the full source rather than treated as a definitive absence.
- `Authentication-Results` header (SPF/DKIM/DMARC): not found (QA WARN) — SPF/DKIM pass/fail status is unknown from this capture; also flagged as a possible AgentMail relay gap rather than a sender misconfiguration.

### 6. Email-to-Site Continuity (UTM params, landing page alignment)
- No standard `utm_source`/`utm_medium`/`utm_campaign` query parameters are present on any link in the visible source. All tracked links route through opaque redirect domains (`click.chp.kohls.com`, `click.s.kohls.com`) with encrypted/encoded payloads (`cp_tp=v3.eJyN...`) rather than transparent UTM tagging.
- Because the HTML was truncated before the primary CTA/product links, final landing-page URLs and any UTM parameters appended after the Coherent Path redirect could not be verified in this review.

### 7. Recommendations
1. Add `alt=""` (or `role="presentation"`) consistently to all 8 flagged tracking/beacon images to match the pattern already used on the `mi.kohls.com/p/up/...o.gif` pixel.
2. Remove the orphaned `</custom>` closing tag near the `click.s.kohls.com/open.aspx` beacon.
3. Remove `maximum-scale=1, user-scalable=0` from the viewport meta tag to restore pinch-zoom for accessibility.
4. Re-verify `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` against raw SMTP headers (not just the AgentMail-relayed copy) before escalating as compliance violations — QA itself flags these as possibly relay-side capture gaps.
5. Confirm presence of a physical mailing address and unsubscribe link in the (untruncated) footer to close out the CAN-SPAM check.
6. If UTM-based attribution is needed for on-site analytics, confirm the Coherent Path redirect chain (`cp_tp` payload) ultimately appends UTM parameters at the final landing URL — not verifiable from the truncated source provided.
## Recent history

- [[2026-07-25-have-a-chic-vacation--ines-counter-department-store-fap6e]] — 7/10 (2026-07-25)
- [[2026-07-25-save-the-date-beauty-insider-celebration-starts-8-1-hp2v610000019f9adcf79498--ines-counter-department-store-fap6e]] — 8/10 (2026-07-25)
- [[2026-07-25-something-special-awaits-this-is-what-your-hair-wants--ines-counter-department-store-fap6e]] — 5/10 (2026-07-25)

