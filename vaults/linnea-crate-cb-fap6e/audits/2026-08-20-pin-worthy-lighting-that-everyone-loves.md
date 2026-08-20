---
slug: 2026-08-20-pin-worthy-lighting-that-everyone-loves
type: email
date: 2026-08-20
persona: linnea-crate-cb-fap6e
score: "5/10"
sender: Crate & Kids
subject: Pin-worthy lighting that everyone loves
tags: [email, score-5, sender/crate-kids]
---
# Pin-worthy lighting that everyone loves
**Score:** 5/10 · **Type:** Email audit · **2026-08-20**
## Full review
## Technical Audit

## Technical Summary
The email is a standard MI (Message Engine)/Scene7-hosted HTML template from Crate & Barrel; automated QA passed 57% of checks with 0 hard issues and 3 categories of warnings (compliance headers, deliverability headers, accessibility).

## Link & Tracking Issues
- 88 tracking/click-redirect links were present but skipped by the automated HTTP prober (expected behavior for redirect-domain links — not itself a defect, but means destination validity is unconfirmed).
- Beacon/pixel tracking observed from multiple vendors: `mi.crateandbarrel.com/p/rp/...` (5 instances of the same pixel `f3c0d22992a01946.png`), `sr.rlcdn.com/448796.gif` (5 sequential instances, `n=1`–`n=5` — LiveRamp/RampID identity sync), and `mi.crateandbarrel.com/p/up/...o.gif` (open pixel). No functional issue found, but the repeated `n=1..5` RampID calls warrant confirming this is intentional multi-fire tracking rather than a template duplication bug.
- No broken/malformed `href` values found in the visible source.

## Rendering & Accessibility
- 43 images are missing `alt` text, including primary content images (e.g., `042025_CBK_LightingTypes_02_Pendant_Hero_v1`, `20250226_CBK_Lighting_TableLamps_Hero_v1`) and CTA images (`042025_CBK_LightingTypes_CTA_ShopNow`, used 4 times). This affects screen-reader users and clients with images blocked by default (images render as blank with no fallback text).
- Tracking pixels (`f3c0d22992a01946.png`, `448796.gif`, `o.gif`, `153506a5-...`) also flagged for missing `alt` — cosmetically irrelevant since they're 1×1 beacons, but flagging `alt=""` on them would be a quick fix to clean up the pass rate.
- Head contains standard Outlook/MSO conditional comments, `x-apple-disable-message-reformatting`, and mobile breakpoints at 460px/640px/768px — no structural rendering defects found in the provided markup.
- Stray template artifact in source: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` — a leftover placeholder comment (typo "IMPUT") indicating the font-import step may not have been completed by the ESP template process. Worth confirming intended fonts are actually loading rather than falling back to defaults.

## Personalization & Merge Tokens
No merge tokens (e.g., `%%FIRSTNAME%%`, `{{...}}`) or personalization variables were observed in the provided source excerpt. No issues found in the visible portion; full source was truncated so this is not a complete guarantee.

## Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header**: not found by automated check — flagged as WARN. Note this may be an artifact of the AgentMail relay not surfacing the header rather than the sender omitting it; cannot confirm sender-side compliance from this data alone.
- **List-Unsubscribe-Post (RFC 8058, one-click unsubscribe)**: not found — same caveat as above.
- **Authentication-Results (SPF/DKIM)**: not found — deliverability/authentication status unknown via this relay.
- Recommend re-verifying these three headers directly against the raw source (not through the AgentMail relay) before treating them as sender defects, since all three warnings share the same "may not be captured by relay" caveat from the QA tool itself.

## Email-to-Site Continuity (UTM params, landing page alignment)
The HTML excerpt provided does not expose the actual outbound `href` destination URLs (only image/pixel `src` values were included in the truncated source and QA data) — cannot confirm UTM parameter presence or landing-page alignment from the data available. Recommend a follow-up check against the untruncated source to validate click-through UTM tagging.

## Recommendations
1. Add descriptive `alt` text to the 38 content/CTA images missing it, and `alt=""` to the 5 decorative tracking pixels to suppress false-positive warnings.
2. Confirm SPF/DKIM/Authentication-Results and List-Unsubscribe headers directly from the sending MTA rather than the AgentMail relay, since the relay itself flags it may not capture these headers.
3. Remove or complete the leftover `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` placeholder comment in the `<head>`.
4. Validate the 88 skipped tracking links manually (or via a probe that follows redirects) to confirm none are dead or misrouted, since automated HTTP checks skipped them entirely.
5. Obtain the untruncated HTML source to verify UTM parameters and landing-page continuity, which could not be assessed from the truncated excerpt provided.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

