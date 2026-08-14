---
slug: 2026-08-14-beautiful-bestselling-for-every-room
type: email
date: 2026-08-14
persona: linnea-crate-cb-fap6e
score: "5/10"
sender: Crate & Barrel
subject: Beautiful & bestselling for every room
tags: [email, score-5, sender/crate-barrel]
---
# Beautiful & bestselling for every room
**Score:** 5/10 · **Type:** Email audit · **2026-08-14**
## Full review
## Technical Audit

## 1. Technical Summary
Standard Bronto/MessageIQ-templated HTML email with heavy image reliance and multiple tracking pixels; core rendering markup is well-formed for legacy Outlook/mobile clients, but automated QA flags missing accessibility attributes and unconfirmed compliance/authentication headers at the transport layer.

## 2. Link & Tracking Issues
- 77 tracking/click-redirect links were present but skipped from HTTP probing (redirect-wrapped domains, not independently verifiable from source alone).
- Multiple tracking pixels detected: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` (open tracking), `sr.rlcdn.com/448796.gif` (5 instances, LiveRamp/RampID third-party pixel), and a Bronto delivery pixel at `dv.crateandbarrel.com/o/1703e6e9-...`. No functional issue — expected ESP/ad-tech instrumentation — but the volume (7+ distinct trackers) is notable for third-party data-sharing surface.
- No broken or malformed href patterns identified in the visible source truncation.

## 3. Rendering & Accessibility
- **32 images missing `alt` attributes**, including all primary content images (`image.mail.crateandbarrel.com/lib/...`) and all tracking pixels. Content images lacking alt text will render as blank space with no fallback text for screen readers or when images are blocked (common in Outlook/corporate mail clients by default).
- Template includes correct legacy-client accommodations: `mso-table-lspace/rspace`, `ReadMsgBody`/`ExternalClass` resets, `x-apple-disable-message-reformatting`, and responsive breakpoints at 460px/640px/768px — no structural rendering issues found in the provided markup.
- `color-scheme`/`supported-color-schemes` both set to `light` only — no dark-mode-specific styling, meaning Apple Mail/Outlook dark mode may auto-invert colors unpredictably (not confirmed as a bug from source alone, flagging as a risk).

## 4. Personalization & Merge Tokens
No issues found — no unresolved merge tags (e.g. `{{`, `%%`, `[FIRSTNAME]`) or broken personalization syntax visible in the provided source.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — either absent or not captured by the relay; cannot confirm one-click unsubscribe support at the header level. CAN-SPAM requires a functioning unsubscribe mechanism, but this can still be satisfied via an in-body link (not visible in truncated source) — recommend confirming.
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click unsubscribe via mailto/HTTP POST cannot be confirmed as supported.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status is unknown from available data; this is a relay-capture gap, not necessarily a sender misconfiguration.
- Physical mailing address / footer unsubscribe link were not visible in the truncated HTML — cannot confirm CAN-SPAM footer compliance from source alone.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not verifiable — the 77 tracking/redirect links were skipped from HTTP probing, so destination URLs, UTM parameters, and landing-page alignment cannot be confirmed from available data.

## 7. Recommendations
1. Add descriptive `alt` text to all 26 content images (product/lifestyle images); tracking pixels (`mi.crateandbarrel.com`, `sr.rlcdn.com`, `dv.crateandbarrel.com`) should use `alt=""` (empty, not missing) to be properly treated as decorative by assistive tech.
2. Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually sent at the SMTP layer (not just missing from this relay capture) — verify via a raw header dump from a direct inbox delivery, since AgentMail relay may simply be stripping them.
3. Verify SPF/DKIM/DMARC alignment for `mail.crateandbarrel.com` via a direct delivery test, since `Authentication-Results` wasn't captured here.
4. Re-run link/UTM audit against the 77 skipped tracking redirects with redirect-following enabled to confirm final landing-page URLs and UTM consistency.
5. Consider adding `supported-color-schemes`/`color-scheme` handling for `dark` to prevent unintended auto-darkening in Apple Mail/Outlook.
## Recent history

- [[2026-08-13-the-kitchen-brand-design-lovers-need]] — 9/10 (2026-08-13)
- [[2026-08-13-the-easiest-update-new-bedding]] — 4/10 (2026-08-13)
- [[2026-08-13-not-sure-which-sheets-let-us-help]] — 6/10 (2026-08-13)

