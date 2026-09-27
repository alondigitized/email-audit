---
slug: 2026-09-22-best-sellers-up-to-40-off-just-one-more-day--felix-plinth-home-furniture-fap6e
type: email
date: 2026-09-22
persona: felix-plinth-home-furniture-fap6e
score: "6/10"
sender: CB2
subject: Best sellers up to 40% off. Just one more day.
tags: [email, score-6, sender/cb2]
---
# Best sellers up to 40% off. Just one more day.
**Score:** 6/10 · **Type:** Email audit · **2026-09-22**
## Full review
## Technical Audit

1. Technical Summary
The email contains one unresolved merge token and lacks visible unsubscribe/authentication headers in the captured data; the remaining markup is standard ESP-generated transactional/marketing boilerplate with mixed HTTP/HTTPS tracking assets.

2. Link & Tracking Issues
- 63 tracking/click-redirect links were skipped by automated HTTP probing (redirect domains not resolvable via direct probe) — cannot confirm destination validity from this data alone; recommend manual click-through QA.
- Several tracking pixels/redirects use plain `http://` instead of `https://`, which mail clients (Gmail, Outlook) commonly block or strip: `http://login.dotomi.com/ucm/UCMController?...`, and `http://ads.dotomi.com/cookieredir/2437/pub1.php` through `pub10.php`. These will likely fail to fire in HTTPS-enforcing clients, undercounting attribution/retargeting data.

3. Rendering & Accessibility
- 8 content/tracking images are missing `alt` text, including customer-facing product images (`81e24408-...jpg`, `611ecaf0-...jpg`, `d21fdaa8-...jpg`, `f24f2811-...jpg`, `4da36968-...jpg`, `a6c2bef0-...jpg`, `e3b6fa8f-...png`, `4addc93d-...jpg`). Screen readers and images-blocked-by-default clients (common in Outlook) will show nothing meaningful in place of these images.
- The tracking pixel/redirect images (dotomi UCM, pub1–pub10, o.gif, dv.cb2.com/o/...) also lack `alt` — expected for tracking pixels, not a real issue.
- No structural/table-based rendering errors detected in the provided source; standard MSO conditional comments and media queries are present for Outlook/mobile fallback.

4. Personalization & Merge Tokens
- 1 unresolved raw merge token found: `%%reviews_skulist%%`. This will render literally in the recipient's inbox, indicating a failed personalization/data-feed merge at send time. This is the single confirmed FAIL and should block send until the ESP data feed is fixed.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — may be a capture limitation of the AgentMail relay rather than a genuine absence; cannot confirm compliance status from this data. Recommend verifying directly against the original ESP-sent headers.
- `List-Unsubscribe-Post` (RFC 8058, one-click unsubscribe) not detected — same caveat; if genuinely absent, this fails Gmail/Yahoo's 2024+ bulk sender requirements.
- `Authentication-Results` header (SPF/DKIM/DMARC) not detected — same relay-capture caveat; cannot confirm authentication status from this data alone.
- No in-body unsubscribe link/footer was present in the truncated HTML provided, so footer-based CAN-SPAM elements (physical address, unsubscribe link) can't be assessed from this excerpt.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot assess UTM parameter presence or landing-page alignment: the 63 tracking/redirect links were skipped by the automated probe, and the truncated HTML excerpt does not expose final CTA destination URLs. Flagging as unverified rather than fabricating a pass/fail.

7. Recommendations
- Fix the ESP data feed/template logic so `%%reviews_skulist%%` resolves before send — this is the one hard failure blocking a clean send.
- Migrate the dotomi tracking/redirect assets (UCMController, pub1–pub10.php) from `http://` to `https://` to prevent silent tracking loss in HTTPS-enforcing clients.
- Add descriptive `alt` text to the 8 content images for accessibility and blocked-image fallback.
- Re-verify `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` against the original ESP send (not the AgentMail-relayed copy) to rule out a capture artifact before treating these as real compliance gaps.
- Manually spot-check a sample of the 63 skipped tracking links for correct redirect targets and UTM parameters, since automated probing couldn't verify them.
## Recent history

- [[2026-09-22-a-montessori-inspired-toddler-space--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-09-22)
- [[2026-09-22-what-responsible-design-means-to-us--felix-plinth-home-furniture-fap6e]] — 4/10 (2026-09-22)
- [[2026-09-22-it-s-officially-fall-time-to-get-cozy-db324f50-cd5d-4d8a-b901---felix-plinth-home-furniture-fap6e]] — 7/10 (2026-09-22)

