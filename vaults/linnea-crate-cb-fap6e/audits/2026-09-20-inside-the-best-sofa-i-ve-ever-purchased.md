---
slug: 2026-09-20-inside-the-best-sofa-i-ve-ever-purchased
type: email
date: 2026-09-20
persona: linnea-crate-cb-fap6e
score: "5/10"
sender: Crate & Barrel
subject: "Inside: \"The best sofa I've ever purchased\""
tags: [email, score-5, sender/crate-barrel]
---
# Inside: "The best sofa I've ever purchased"
**Score:** 5/10 · **Type:** Email audit · **2026-09-20**
## Full review
## Technical Audit

1. Technical Summary

Standard ESP-generated (MessageInsight/Zeta-style) HTML email with heavy tracking instrumentation, sent via a third-party relay (AgentMail); source is well-formed for Outlook/Apple Mail compatibility but fails baseline accessibility and header-level compliance checks.

2. Link & Tracking Issues

- 65 tracking/click-redirect links detected and skipped by automated probing (domain-obscured redirects, likely `mi.crateandbarrel.com` or similar click-tracking domain) — destinations could not be verified as live.
- Pixel tracking present from at least three distinct vendors: MessageInsight open pixels (`mi.crateandbarrel.com/p/rp/*.png`, `mi.crateandbarrel.com/p/up/*/o.gif`), LiveRamp/RLCDN (`sr.rlcdn.com/448796.gif`, fired 5x with incrementing `n=` params), and a Deliver/dv.crateandbarrel.com pixel (`dv.crateandbarrel.com/o/547e748e-...`).
- No issues found with malformed/broken static asset URLs in the visible source.

3. Rendering & Accessibility

- 28 `<img>` elements missing `alt` text, spanning primary product imagery (Scene7 assets), lifestyle content images, and all tracking pixels. Tracking pixels lacking alt is expected/benign; the content images (e.g., `SP25_CB_UphBestsellers_leather_01`, `202504_CB_PerformanceRugs_Ruler`, multiple `image.mail.crateandbarrel.com/lib/.../m/1/*.jpg`) missing alt text is a real screen-reader/accessibility gap.
- Markup includes standard MSO conditional comments, VML namespace declarations, and `-ms-text-size-adjust`/`-webkit-text-size-adjust` resets consistent with cross-client rendering fixes — no structural issues found.
- Media queries target 460px (mobile) and 640/768px (desktop image max-width) — no gaps identified in the provided source.

4. Personalization & Merge Tokens

- No unresolved merge tokens (e.g., `{{first_name}}`, `%%FIELD%%`) found in the visible source.
- `mi_u`, `mi_cid`, `mi_mid` query parameters present on tracking/pixel URLs appear to be per-recipient identifiers correctly populated (non-empty hex/base64 values) — no broken personalization tokens detected.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)

- `List-Unsubscribe` header not found in the captured message — this header may simply not have been captured by the AgentMail relay rather than genuinely absent; cannot confirm compliance status from this data alone.
- `List-Unsubscribe-Post` header (RFC 8058, one-click unsubscribe) also not found — same caveat applies.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status cannot be verified via the relay capture.
- No unsubscribe link was included in the truncated HTML source provided, so in-body unsubscribe/physical-address compliance cannot be assessed from what was supplied.

6. Email-to-Site Continuity (UTM params, landing page alignment)

- Cannot assess: no destination/landing URLs were resolved (all 65 tracking links were skipped by the HTTP probe), so UTM parameter presence/consistency and landing-page alignment cannot be verified from the available data.

7. Recommendations

- Add descriptive `alt` text to the 6 unique content images missing it (leave tracking pixels/redirect gifs empty-alt, which is correct practice).
- Confirm with the relay/ESP whether `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually being sent at origin — if they are stripped by AgentMail's relay rather than absent at source, this is a capture-tooling issue, not a sender compliance issue; re-verify by capturing raw headers pre-relay.
- Confirm `Authentication-Results` (SPF/DKIM/DMARC) status via a direct MTA capture rather than the relay, since absence here is inconclusive.
- Re-run link resolution with tracking-domain probing enabled (or resolve one sample redirect through each of the 65 tracking links) to confirm destination URLs carry correct UTM parameters and land on matching product pages, since this could not be validated in the current pass.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

