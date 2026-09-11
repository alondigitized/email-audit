---
slug: 2026-09-11-registry-essentials-to-create-your-dream-nursery
type: email
date: 2026-09-11
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Kids
subject: Registry essentials to create your dream nursery →
tags: [email, score-7, sender/crate-kids]
---
# Registry essentials to create your dream nursery →
**Score:** 7/10 · **Type:** Email audit · **2026-09-11**
## Full review
## Technical Audit

1. Technical Summary
Standard Crate & Barrel/Scene7 (Zeta/MessageGears "mi.crateandbarrel.com") template with heavy image reliance and multiple tracking pixels; core rendering markup passes but compliance headers and alt-text coverage fail automated checks.

2. Link & Tracking Issues
- 90 tracking/click-redirect links were skipped from HTTP validation (destination reachability unconfirmed) — cannot verify these do not 404.
- Multiple third-party tracking pixels present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (×6), `sr.rlcdn.com/448796.gif` (×5, LiveRamp/RelevantAudience), `mi.crateandbarrel.com/p/up/...o.gif`, and `dv.crateandbarrel.com/o/...` (Cordial/dotdigital-style tracking domains) — consistent with expected ESP tracking, no anomalies found.
- No issues found with primary CTA link structure in the visible source.

3. Rendering & Accessibility
- 45 `<img>` elements missing `alt` attributes, spanning both content images (`image.mail.crateandbarrel.com/lib/...`) and tracking pixels (`sr.rlcdn.com`, `mi.crateandbarrel.com`). Content images missing alt text is a genuine accessibility/screen-reader gap; tracking pixels missing alt is expected/non-issue.
- Template includes standard Outlook (`mso`) conditional fixes, `-ms-text-size-adjust`, and mobile media queries at 460px breakpoint — no malformed conditional comments observed.
- Note: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` is a leftover unfilled template placeholder (typo "IMPUT" for "INPUT") — cosmetic in source only, not rendered, but indicates an unconfigured template field.

4. Personalization & Merge Tokens
No merge tokens or personalization fields (e.g. `{{first_name}}`) visible in the truncated source. No issues found in the available markup.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- List-Unsubscribe header not found — cannot confirm RFC 2369 one-click unsubscribe support at the header level (may be relay-stripped rather than absent at origin).
- List-Unsubscribe-Post header not found — RFC 8058 one-click unsubscribe cannot be confirmed.
- Authentication-Results header not found — SPF/DKIM/DMARC pass/fail status unknown via this relay.
- Footer/unsubscribe link presence in-body could not be confirmed from truncated HTML — recommend reviewing full source for a body-level unsubscribe link, which CAN-SPAM requires regardless of header support.

6. Email-to-Site Continuity (UTM params, landing page alignment)
Truncated source does not include visible CTA href values with UTM parameters — cannot assess destination/query-param alignment from available data. Flagging as unverified, not a confirmed defect.

7. Recommendations
- Add descriptive `alt` text to the 27 unique content images (nursery/registry product photography); tracking pixels can retain empty `alt=""` intentionally.
- Investigate why List-Unsubscribe / List-Unsubscribe-Post headers aren't reaching the AgentMail relay — confirm at source (ESP) whether headers are sent and whether relay is stripping them.
- Confirm Authentication-Results (SPF/DKIM/DMARC) directly at the receiving MTA or via a raw-header capture outside the relay, since absence here is inconclusive.
- Spot-check a sample of the 90 skipped tracking links manually for valid redirects/landing pages, given automated probing was skipped.
- Remove/complete the leftover `[IMPUT HERE CLIENT FONT IMPORT SCRIPT...]` placeholder comment as a template-hygiene cleanup.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

