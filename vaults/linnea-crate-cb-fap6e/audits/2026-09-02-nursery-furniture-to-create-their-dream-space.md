---
slug: 2026-09-02-nursery-furniture-to-create-their-dream-space
type: email
date: 2026-09-02
persona: linnea-crate-cb-fap6e
score: "6/10"
sender: Crate & Kids
subject: Nursery furniture to create their dream space →
tags: [email, score-6, sender/crate-kids]
---
# Nursery furniture to create their dream space →
**Score:** 6/10 · **Type:** Email audit · **2026-09-02**
## Full review
## Technical Audit

Technical Summary: This Crate & Kids email uses standard ESP infrastructure (mail.crateandbarrel.com relay, mi.crateandbarrel.com tracking) with heavy pixel/redirect tracking; the automated QA scan (57% pass rate) surfaced widespread missing alt attributes and gaps in unsubscribe/authentication header capture at the relay layer.

**Link & Tracking Issues**
- 96 tracking/click-redirect links were present but skipped by the automated HTTP probe (not independently validated as live/non-broken).
- Multiple beacon/pixel endpoints fire redundantly: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (same tracking pixel loaded 6 times), `sr.rlcdn.com/448796.gif` (LiveRamp/RampID pixel fired 5 times with sequential `n=1`–`n=5` params), plus a `dv.crateandbarrel.com` open pixel and `mi.crateandbarrel.com/p/up/.../o.gif` open-tracking pixel.
- No broken/malformed link syntax identified in the visible source.

**Rendering & Accessibility**
- 47 `<img>` elements are missing `alt` attributes, spanning primary content images (`image.mail.crateandbarrel.com/lib/.../*.jpg`), Scene7 animated hero/product assets (`s7d5.scene7.com/.../BabyAwarenessCTV/...`), and even tracking pixels/spacers (acceptable for pixels, but content images lack accessible text for screen readers).
- Extensive legacy MSO/Outlook conditional comments and `ExternalClass`/`ReadMsgBody` resets are present — standard for this ESP template, no structural errors observed in the truncated source.
- `viewport` and `x-apple-disable-message-reformatting` meta tags are correctly set for responsive/mobile rendering.

**Personalization & Merge Tokens**
- No unresolved merge tags (e.g. `%%`, `{{`, `[FIRSTNAME]`) or literal placeholder text found in the visible/truncated source.
- No issues found.

**Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header not detected — one-click unsubscribe support cannot be confirmed from available headers (may be a relay-capture gap rather than a true absence).
- `List-Unsubscribe-Post` (RFC 8058) header not detected, meaning true one-click unsubscribe compliance is unverified.
- `Authentication-Results` header (SPF/DKIM/DMARC status) not captured — sender authentication posture is unknown from this data.
- Note: all three gaps are flagged by QA as likely artifacts of the AgentMail relay not surfacing these headers, not necessarily evidence the sender omitted them — cannot be confirmed either way from this dataset.

**Email-to-Site Continuity (UTM params, landing page alignment)**
- Truncated HTML source does not expose destination URL query strings (links are wrapped in `mi.crateandbarrel.com` click-tracking redirects), so UTM parameter presence/consistency cannot be verified from available evidence.
- No issues found based on available data (insufficient evidence to confirm or deny).

**Recommendations**
1. Add descriptive `alt` text to the 30+ content/hero images missing it (Scene7 hero animations and product photography) for screen-reader accessibility and image-blocked rendering fallback.
2. Consolidate redundant tracking pixels — the same `f3c0d22992a01946.png` pixel fires 6× and the `rlcdn.com/448796.gif` fires 5× with sequential counters, adding unnecessary payload weight and requests per open.
3. Obtain raw SMTP headers directly from the sending ESP (rather than via the AgentMail relay) to confirm `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` are actually present and correctly configured, since the relay is not capturing them.
4. Resolve full click-tracking URLs to confirm UTM parameters and final landing-page destinations are intact and aligned with the "Nursery furniture" campaign theme.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

