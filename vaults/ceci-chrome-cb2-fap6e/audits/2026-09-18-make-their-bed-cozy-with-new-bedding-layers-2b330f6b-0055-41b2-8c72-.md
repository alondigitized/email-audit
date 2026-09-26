---
slug: 2026-09-18-make-their-bed-cozy-with-new-bedding-layers-2b330f6b-0055-41b2-8c72-
type: email
date: 2026-09-18
persona: ceci-chrome-cb2-fap6e
score: "6/10"
sender: Crate & Kids
subject: Make their bed cozy with NEW bedding layers →
tags: [email, score-6, sender/crate-kids]
---
# Make their bed cozy with NEW bedding layers →
**Score:** 6/10 · **Type:** Email audit · **2026-09-18**
## Full review
## Technical Audit

1. Technical Summary

Standard Movable Ink/Salesforce Marketing Cloud commercial template with heavy MSO/Outlook conditional CSS and mobile media queries; core structure is sound but the automated QA pass flags gaps in authentication/compliance header capture and near-universal missing image alt text.

2. Link & Tracking Issues

82 tracking/click-redirect links were skipped by the automated HTTP probe (expected behavior for redirect-domain links, not necessarily a defect — cannot confirm live/dead status from this data). Multiple third-party tracking pixels present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (Movable Ink, ×6), `sr.rlcdn.com/448796.gif` (×5, LiveRamp/RampID), and `dv.crateandbarrel.com/o/...` (DoubleVerify or similar verification pixel). No broken/malformed URLs identified in the visible source.

3. Rendering & Accessibility

35 images flagged with missing `alt` attributes, including the hero (`bbf6f9d4-86cc-437a-aa80-391067b74306.png`), body content images, and spacer/tracking images (e.g., `25_MI_Bottom_Spacer_40px_White`, `972e7111...gif`). For content-bearing images this is an accessibility/screen-reader gap; for spacer and 1×1 tracking pixels, `alt=""` (empty, not absent) is the correct fix to avoid announcing raw filenames. Template uses standard MSO conditional fixes and `max-width` media queries at 460px/640px/768px breakpoints — no structural rendering defects found in the visible markup.

4. Personalization & Merge Tokens

No merge tokens (e.g., `%%FirstName%%`, AMPscript, or Handlebars-style placeholders) are visible in the truncated source. Cannot fully confirm absence of personalization logic since the HTML is truncated — recommend checking the untruncated body for AMPscript blocks before concluding no personalization is used.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)

- QA flags `List-Unsubscribe` header not found and `List-Unsubscribe-Post` (RFC 8058) not found — one-click unsubscribe cannot be confirmed. Per the QA note, this may be an artifact of the AgentMail relay not capturing/forwarding these headers rather than the sender omitting them; recommend verifying against raw MIME headers at the source MTA before treating as a real compliance gap.
- `Authentication-Results` header (SPF/DKIM/DMARC) not found for the same relay-related reason — sender authentication status cannot be verified from this data.
- Footer unsubscribe link presence/physical mailing address could not be confirmed from the truncated HTML — flag for manual check of the untruncated footer.

6. Email-to-Site Continuity (UTM params, landing page alignment)

Cannot confirm UTM parameter structure or landing-page alignment from the truncated source — CTA href values were not visible in the provided HTML excerpt. Recommend pulling full link list to verify UTM consistency (source/medium/campaign) and that destination URLs resolve to matching bedding/kids-collection pages.

7. Recommendations

- Add descriptive `alt` text to all content images (hero, product shots); set `alt=""` explicitly on spacer/tracking pixels.
- Verify `List-Unsubscribe` / `List-Unsubscribe-Post` and `Authentication-Results` headers directly at the source MTA (bypassing the AgentMail relay) to rule out a relay-capture issue vs. an actual compliance gap.
- Confirm footer contains a working one-click unsubscribe link and physical mailing address (not visible in truncated source).
- Re-run link/UTM audit against the full (non-truncated) HTML to validate destination URLs and tracking parameters.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

