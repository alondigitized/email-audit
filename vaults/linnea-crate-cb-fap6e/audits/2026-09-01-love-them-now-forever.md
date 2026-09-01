---
slug: 2026-09-01-love-them-now-forever
type: email
date: 2026-09-01
persona: linnea-crate-cb-fap6e
score: "5/10"
sender: Crate & Kids
subject: Love them now & forever ♥️
tags: [email, score-5, sender/crate-kids]
---
# Love them now & forever ♥️
**Score:** 5/10 · **Type:** Email audit · **2026-09-01**
## Full review
## Technical Audit

# Technical Email QA Report — "Love them now & forever ♥️" (Crate & Kids)

## 1. Technical Summary
Standard MI (Message Innovators)-templated HTML email with responsive/MSO fallback CSS; automated QA passed 57% with 0 hard issues and 3 warning categories, driven almost entirely by missing image alt text and unverifiable deliverability headers.

## 2. Link & Tracking Issues
- 92 tracking/click-redirect links were skipped by the automated HTTP probe (unresolvable without live-click simulation) — cannot confirm destination validity from static analysis alone.
- Multiple pixel trackers present and firing as expected: `mi.crateandbarrel.com/p/rp/...` (Message Innovators open pixel, 6 instances), `mi.crateandbarrel.com/p/up/.../o.gif` (unsub/preference pixel), `sr.rlcdn.com/448796.gif` ×5 (LiveRamp/RampID data pixel), and `dv.crateandbarrel.com/o/...?cp_tp=v` (likely a DoubleVerify or similar viewability pixel).
- No malformed or broken `href`/`src` syntax detected in the visible source.

## 3. Rendering & Accessibility
- **40 images missing `alt` text**, including primary hero/content creative (e.g., `bbf6f9d4-...png`, `2026_0408_CBK_MadeforMemories_Main1.gif`) as well as all tracking pixels. For content images this is a real accessibility gap (screen readers get no fallback, and blocked-image clients show nothing); for tracking pixels it's expected/inconsequential and can be excluded from remediation scope.
- Template includes standard Outlook/Apple Mail mitigations: `x-apple-disable-message-reformatting`, MSO conditional comments, `ExternalClass` resets — no gaps observed there.
- Responsive breakpoints defined at 460px, 640px, and 768px; mobile classes (`.showmobile`, `.hide`, `.block`) present and structured normally.

## 4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `{{...}}`, `%%...%%`, `[[...]]`) visible in the truncated source.
- No issues found.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — could not be captured by the AgentMail relay; unable to confirm RFC 2369 one-click unsubscribe is present at the header level (note: this may be a relay-capture limitation rather than a true sender-side absence — recommend verifying against raw headers from the original ESP send).
- **List-Unsubscribe-Post header not found (RFC 8058)** — same caveat; one-click unsubscribe support cannot be confirmed.
- **Authentication-Results header not found** — SPF/DKIM pass/fail status unknown via this relay; cannot confirm authentication posture from available data.
- An in-body unsubscribe/preference pixel (`mi.crateandbarrel.com/p/up/...`) is present, consistent with a footer unsubscribe link existing in the (truncated) body, but the footer/physical-address block itself was not visible in the provided source excerpt to confirm CAN-SPAM physical-address compliance.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot verify UTM parameter presence/consistency or landing-page alignment — all 92 outbound CTA links were skipped by the tracking-domain probe, so destination and query-string structure are unconfirmed from this data set.

## 7. Recommendations
1. Add descriptive `alt` text to the 8 unique content/hero images (the ones with human-readable filenames like `MadeforMemories_Main1.gif`); tracking pixels (`f3c0d22992a01946.png`, `448796.gif`, `o.gif`, `dv.crateandbarrel.com/o/...`) can be left empty-alt (`alt=""`) as decorative/non-content.
2. Obtain raw SMTP headers directly from the sending ESP (bypassing the AgentMail relay) to confirm `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` (SPF/DKIM/DMARC) are actually present and passing — current absence is inconclusive, not confirmed non-compliance.
3. Sample a subset of the 92 skipped tracking links manually (resolve redirects) to confirm they land on live, correctly-tagged pages before this campaign is considered fully link-verified.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

