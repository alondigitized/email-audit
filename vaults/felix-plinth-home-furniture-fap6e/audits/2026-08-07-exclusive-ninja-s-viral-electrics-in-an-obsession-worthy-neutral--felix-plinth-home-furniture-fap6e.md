---
slug: 2026-08-07-exclusive-ninja-s-viral-electrics-in-an-obsession-worthy-neutral--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-07
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Crate & Barrel
subject: Exclusive! Ninja’s viral electrics in an obsession-worthy neutral
tags: [email, score-5, sender/crate-barrel]
---
# Exclusive! Ninja’s viral electrics in an obsession-worthy neutral
**Score:** 5/10 · **Type:** Email audit · **2026-08-07**
## Full review
## Technical Audit

## 1. Technical Summary
Email renders via a legacy XHTML Transitional / table-based MSO template (Sailthru or similar ESP markup patterns — `mi.crateandbarrel.com`, `dv.crateandbarrel.com`) with heavy Outlook conditional CSS. Core technical gaps are missing image alt text at scale, absent unsubscribe/authentication headers in the captured payload, and an unresolved template placeholder left in the shipped HTML.

## 2. Link & Tracking Issues
- 75 tracking/click-redirect links were skipped by the automated HTTP probe (identified as tracking/redirect domains) — final destinations and validity of these links are **unconfirmed**, not verified working.
- Multiple tracking pixels are present and load-order dependent: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`, `sr.rlcdn.com/448796.gif` (5 sequential instances, `n=1`–`n=5` — LiveRamp/RampID identity sync pixel fired multiple times), and `dv.crateandbarrel.com/o/fcdfb9da-...?mi_mid=...&cp_tp=v` (likely a DoubleVerify/viewability pixel).
- No broken/malformed `href` values found in the visible source.

## 3. Rendering & Accessibility
- **24 unique content images and all 6+ tracking pixels are missing `alt` text**, confirmed by QA (e.g. `bbf6f9d4-86cc-437a-aa80-391067b74306.png`, `12811bf4-a614-424b-97ae-f88eb676e4fa.gif`, plus 22 more `.jpg`/`.gif` assets under `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/`). This affects screen-reader users and clients that block images by default (no fallback text shown).
- Leftover build artifact in shipped HTML: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` — a template placeholder comment (with a typo, "IMPUT") that should have been replaced or stripped before send. Not user-facing but indicates a template QA gap.
- Legacy `XHTML 1.0 Transitional` doctype with full MSO conditional block (`<!--[if gte mso 9]>`, `<!--[if mso]>`) and duplicate `format-detection` meta tags (`date=no`, `address=no`, `telephone=no` declared both combined and individually) — redundant but not breaking.
- `color-scheme`/`supported-color-schemes` locked to `light` only — no dark-mode-safe variant, so dark-mode email clients will apply their own inversion heuristics rather than a tested palette.

## 4. Personalization & Merge Tokens
No unresolved merge/personalization tags (e.g. `{{first_name}}`, `%%FIELD%%`) found in the visible source. The `mi_u=` query parameters on tracking pixels are opaque encrypted subscriber identifiers used for open tracking, not merge-field placeholders. No issues found.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — may be a capture gap in the AgentMail relay rather than absence at the source, but as received it does not meet CAN-SPAM's expectation of a functioning one-click mechanism.
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click unsubscribe (required by Gmail/Yahoo bulk sender rules as of Feb 2024) cannot be confirmed as supported.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status is unknown from this capture; cannot confirm sender authentication.
- No in-body unsubscribe link/footer was included in the truncated HTML sample provided, so footer-level compliance (physical address, unsubscribe link text) could not be assessed from source alone.

## 6. Email-to-Site Continuity
Cannot be assessed: all 75 outbound links route through tracking/click-redirect domains that were skipped by the HTTP probe, so final landing-page URLs, UTM parameters, and landing-page alignment are unverified. Recommend a manual click-through pass or un-skipping redirect-domain probing to confirm destination URLs and UTM tagging.

## 7. Recommendations
1. Add descriptive `alt` text to all 24 content images (tracking pixels can retain empty `alt=""` — that's correct practice, not a fix target).
2. Remove the leftover `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` placeholder comment from the production template.
3. Confirm List-Unsubscribe / List-Unsubscribe-Post headers are actually present at the source (check with the ESP directly, since AgentMail relay may simply be dropping them) — required for Gmail/Yahoo bulk sender compliance.
4. Resolve/confirm SPF, DKIM, and DMARC alignment via a direct header capture (bypassing the relay) since Authentication-Results wasn't observed.
5. Un-skip or separately audit the 75 redirect-domain links to confirm working destinations and UTM parameter presence before next send.
## Recent history

- [[2026-08-07-up-to-60-off-the-summer-sale-only-for-a-limited-time--felix-plinth-home-furniture-fap6e]] — 7/10 (2026-08-07)
- [[2026-08-07-don-t-miss-it-up-to-60-off-the-summer-sale--felix-plinth-home-furniture-fap6e]] — 8/10 (2026-08-07)
- [[2026-08-06-beautifully-organized-new-cabinets-more--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-06)

