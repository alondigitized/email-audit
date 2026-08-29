---
slug: 2026-08-29-where-in-the-world-could-20-000-points-take-you-iris
type: email
date: 2026-08-29
persona: iris-indigo-ihg-fap6e
score: "7/10"
sender: IHG One Rewards
subject: 🌍 Where in the world could 20,000 points take you, Iris?
tags: [email, score-7, sender/ihg-one-rewards]
---
# 🌍 Where in the world could 20,000 points take you, Iris?
**Score:** 7/10 · **Type:** Email audit · **2026-08-29**
## Full review
## Technical Audit

1. Technical Summary
Email renders via standard MSO/webkit hybrid table markup with responsive CSS; QA shows a 57% pass rate with 3 warnings (no failing issues), concentrated in header capture, alt text, and one non-HTTPS tracking pixel.

2. Link & Tracking Issues
36 tracking/click-redirect links were skipped by the automated HTTP probe (redirect domains, not directly checkable) — cannot confirm destination validity from this pass; recommend manual click-through QA before send.
Tracking pixel `https://pxl.mon-trk.com/954cb38e-4a43-4730-b327-6b102c213a01/517541/0037y00002BeqgfAAB` — HTTPS, present, no alt text (expected for a 1x1 pixel, not a functional issue).
Second tracking pixel `http://mi.ihg.com/p/up/2b47e4754a78cfd7/o.gif?mi_u=695150425&mi_ecmp=517541&8/29/2026 12:00:00 AM` is served over **plain HTTP**, not HTTPS — flagged by QA as a potential blocked-image risk in mail clients that enforce mixed-content/TLS image loading. Recommend switching to HTTPS.

3. Rendering & Accessibility
Two images missing `alt` text per QA (both are tracking pixels, low accessibility impact by nature — no user-facing content is lost).
No missing-alt findings reported on content/hero images in the truncated source; full-file confirmation recommended since source was truncated.
Standard Outlook/MSO conditional comments and `ExternalClass`/`ReadMsgBody` resets are present — no rendering-fallback issues found in the visible CSS.

4. Personalization & Merge Tokens
Subject line includes a first-name token (`Iris`) that resolved correctly — no unresolved merge tag (e.g., `{{FirstName}}` or `%%FIRSTNAME%%`) detected in the subject.
No merge-token artifacts found in the truncated HTML body; full-body scan recommended to confirm no unresolved tokens exist below the truncation point.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
`List-Unsubscribe` header not found — QA notes this may be a relay-capture limitation (AgentMail) rather than a genuine absence; cannot confirm compliance status from headers alone. Recommend verifying against the raw SMTP headers at the source (not the relay-forwarded copy).
`List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe) not found — same caveat; if genuinely absent, this is a Gmail/Yahoo bulk-sender requirement gap as of their 2024 sender guidelines.
`Authentication-Results` header (SPF/DKIM/DMARC) not found — same relay-capture caveat; authentication status is unknown from this data and should be verified via a direct header dump rather than inferred as a failure.

6. Email-to-Site Continuity (UTM params, landing page alignment)
No UTM parameters visible in the truncated source — the 36 skipped tracking links likely carry campaign parameters, but this cannot be confirmed without the full link list. Recommend a manual pass over the unredacted URLs to verify UTM consistency and landing-page alignment.

7. Recommendations
- Convert the `mi.ihg.com` tracking pixel to HTTPS to avoid mixed-content blocking in strict mail clients.
- Re-run header capture directly against the originating MTA (not the AgentMail relay) to get a definitive read on `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` — current absence is inconclusive, not confirmed non-compliance.
- Manually verify a sample of the 36 skipped tracking/redirect links resolve correctly and land on pages matching campaign UTM parameters.
- Obtain the full (untruncated) HTML source for a complete alt-text and merge-token sweep, since this review's coverage is limited by the truncated input.
## Recent history

- [[2026-08-13-earn-140k-bonus-points-and-earn-on-everyday-spend]] — 6/10 (2026-08-13)
- [[2026-08-06-hurry-your-20-000-points-offer-checks-out-soon]] — 9/10 (2026-08-06)
- [[2026-08-06-earn-140k-bonus-points-enough-for-up-to-4-nights]] — 9/10 (2026-08-06)

