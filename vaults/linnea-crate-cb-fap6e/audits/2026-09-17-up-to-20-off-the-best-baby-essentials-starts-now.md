---
slug: 2026-09-17-up-to-20-off-the-best-baby-essentials-starts-now
type: email
date: 2026-09-17
persona: linnea-crate-cb-fap6e
score: "6/10"
sender: Crate & Kids SALE
subject: Up to 20% off the BEST baby essentials starts now →
tags: [email, score-6, sender/crate-kids-sale]
---
# Up to 20% off the BEST baby essentials starts now →
**Score:** 6/10 · **Type:** Email audit · **2026-09-17**
## Full review
## Technical Audit

1. Technical Summary
Standard SFMC/MarketingCloud-style multi-part HTML email; no functional link/rendering breakage, but automated QA flags missing unsubscribe headers, missing authentication headers, and widespread missing alt text.

2. Link & Tracking Issues
- 81 tracking/click-redirect links were skipped by the automated HTTP probe (redirect domains not resolved), so destination validity for those CTAs is unconfirmed.
- Multiple third-party pixel/beacon calls present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `sr.rlcdn.com/448796.gif` (5 instances, LiveRamp/RLCDN), and `dv.crateandbarrel.com/o/4b05db6c-...` (likely a DoubleVerify or similar verification pixel). These are expected ESP/measurement pixels, not errors, but represent significant third-party tracking surface (6+ distinct tracking calls).
- No broken/malformed href syntax observed in the visible source.

3. Rendering & Accessibility
- No alt text found on any content image (29+ distinct image assets flagged), including the primary hero/product images (`bbf6f9d4-...png`, `3dd92cdb-...jpg`, `Venus_tertiary_640_Fnl.gif`) and spacer images (`25_MI_Bottom_Spacer_40px_White`). This fails WCAG 1.1.1 and will render as blank/broken to screen-reader users and in image-blocked clients.
- Tracking pixels (rlcdn, mi.crateandbarrel.com, dv.crateandbarrel.com) also lack alt text, which is standard/acceptable for 1x1 beacons but inflates the missing-alt count.
- Head contains extensive MSO/Outlook conditional fixes, `-webkit-text-size-adjust` resets, and responsive breakpoints (460px, 640px, 768px) — no structural rendering issues detected in the truncated source.
- Note the literal typo in a code comment: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` — cosmetic/template artifact, not functional.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `%%FIELD%%`, `{{...}}`, `[FIRSTNAME]`) visible in the truncated source. No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — QA notes this may be a relay-capture limitation (AgentMail) rather than a true absence; cannot confirm one-click unsubscribe compliance from this data alone.
- `List-Unsubscribe-Post` header (RFC 8058) not detected, same caveat.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status is unverifiable via this relay; this is a QA-pipeline limitation, not confirmed evidence of an actual authentication failure.
- In-body unsubscribe/footer link not visible in the truncated HTML — cannot confirm CAN-SPAM footer compliance (physical address, unsubscribe link) from the excerpt provided.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking links were skipped by the probe (see §2), so UTM parameter presence/consistency and landing-page alignment cannot be verified from available data. No confirmed issues, but also no confirmed pass — flagged as unverified rather than clean.

7. Recommendations
- Add descriptive `alt` text to all content/product images (hero, product shots, collab banner); leave tracking pixels/spacers alt="" (already implicit but should be explicit empty string, not absent, for cleaner AT parsing).
- Re-run header capture outside the AgentMail relay (e.g., raw SMTP capture or ESP send log) to confirm `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` are actually present in the live send — current absence is inconclusive, not confirmed.
- Sample a handful of the 81 skipped tracking links manually (resolve redirects) to confirm final destinations are live and carry expected UTM parameters.
- Fix the leftover template placeholder comment (`IMPUT HERE CLIENT FONT IMPORT SCRIPT`) before next send cycle — indicates an unedited ESP template boilerplate line.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

