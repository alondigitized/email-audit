---
slug: 2026-08-17-new-500-new-fall-arrivals-just-landed
type: email
date: 2026-08-17
persona: ceci-chrome-cb2-fap6e
score: "5/10"
sender: Crate & Kids
subject: NEW! 500+ new fall arrivals just landed
tags: [email, score-5, sender/crate-kids]
---
# NEW! 500+ new fall arrivals just landed
**Score:** 5/10 · **Type:** Email audit · **2026-08-17**
## Full review
## Technical Audit

1. Technical Summary
This is a standard ESP-generated marketing email (Cheetah Digital/Salesforce Marketing Cloud-style markup) with heavy tracking/pixel instrumentation but no fatal rendering blockers; the main technical gaps are missing image alt text and unverifiable compliance/authentication headers.

2. Link & Tracking Issues
- 75 tracking/click-redirect links were present but skipped by automated HTTP probe (redirect domains not resolved), so destination validity is unconfirmed.
- Multiple third-party tracking pixels present: `mi.crateandbarrel.com/p/rp/...` and `mi.crateandbarrel.com/p/up/...` (open/click tracking), `sr.rlcdn.com/448796.gif` (LiveRamp/RLCDN, fired 5x with incrementing `n=` param), `dv.crateandbarrel.com/o/...` (likely DoubleVerify or similar verification pixel).
- No broken/malformed href syntax found in the visible source.

3. Rendering & Accessibility
- 29 `<img>` elements missing `alt` text, including all content/product images (`bbf6f9d4...png`, `4c0b559c...gif`, and 13+ `.jpg` product images) — screen readers will announce nothing for these.
- Tracking pixels (`f3c0d22992a01946.png`, `448796.gif`, `o.gif`, `dv.crateandbarrel.com/o/...`) also lack alt text, which is expected/acceptable for 1x1 tracking images but was flagged generically by the QA tool.
- HTML includes standard Outlook/MSO conditional comments, `x-apple-disable-message-reformatting`, and mobile media queries (max-width:460px) — indicates responsive/dark-mode-safe build practices are in place.
- `color-scheme`/`supported-color-schemes` both set to `light` only — no explicit dark-mode palette provided, so client-side dark-mode inversion may distort colors (not confirmed from truncated source, flagging as a possible risk).

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `%%FIRSTNAME%%`, `{{...}}`) visible in the truncated source.
- Personalization/identity tracking present via `mi_u=` and `mi_mid=` query params on tracking pixels (e.g. `mi_mid=01a00f97-c600-7000-a979-0d949d9ab158`), consistent with per-recipient hashed identifiers — no raw PII observed in URLs.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not found — cannot confirm one-click unsubscribe support at the header level (may be a relay-capture limitation rather than a true absence).
- `List-Unsubscribe-Post` header (RFC 8058) not found — same caveat.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status cannot be verified from available data.
- No in-body unsubscribe link or physical mailing address visible in the truncated HTML source provided; cannot confirm CAN-SPAM footer compliance without the untruncated body/footer section.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- No UTM parameters visible on any link in the truncated source — click links route through redirect/tracking domains, so UTM presence (if any) is likely appended server-side at redirect and not observable here.
- Cannot confirm landing page alignment (destination content matching "500+ new fall arrivals" subject/CTA) since all 75 destination links were skipped by the probe.

7. Recommendations
- Add descriptive `alt` text to all 16 distinct content/product images; leave tracking pixels (`o.gif`, `448796.gif`, `f3c0d22992a01946.png`, `dv.crateandbarrel.com/o/...`) with empty `alt=""` rather than omitted, per WCAG guidance for decorative images.
- Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually present on the raw MIME (re-check via raw source/EML rather than relay-parsed headers) — RFC 8058 one-click unsubscribe is a Gmail/Yahoo bulk-sender requirement as of 2024.
- Re-verify SPF/DKIM/DMARC alignment directly against the raw email headers, since `Authentication-Results` was not captured by the current relay.
- Sample a subset of the 75 skipped tracking links with a manual/authenticated probe to confirm they resolve to live, non-404 destinations and carry expected UTM parameters.
- Consider adding `supported-color-schemes`/CSS overrides for dark mode to prevent unintended color inversion in dark-mode email clients.
## Recent history

- [[2026-08-17-heirloom-inspired-rugs-that-stand-up-to-real-life-b9903dc0-f90a-4f44-bd73-]] — 5/10 (2026-08-17)
- [[2026-08-16-get-stay-organized-with-these-bestsellers]] — 5/10 (2026-08-16)
- [[2026-08-16-their-room-isn-t-complete-without]] — 5/10 (2026-08-16)

