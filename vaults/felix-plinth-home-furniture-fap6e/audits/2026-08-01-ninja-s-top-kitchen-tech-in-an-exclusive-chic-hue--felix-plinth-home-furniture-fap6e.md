---
slug: 2026-08-01-ninja-s-top-kitchen-tech-in-an-exclusive-chic-hue--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-01
persona: felix-plinth-home-furniture-fap6e
score: "7/10"
sender: Crate & Barrel
subject: Ninja’s top kitchen tech in an exclusive, chic hue ☕
tags: [email, score-7, sender/crate-barrel]
---
# Ninja’s top kitchen tech in an exclusive, chic hue ☕
**Score:** 7/10 · **Type:** Email audit · **2026-08-01**
## Full review
## Technical Audit

## 1. Technical Summary
Table-based HTML email (XHTML 1.0 Transitional doctype, MSO conditional comments, responsive breakpoints at 460px/640px/768px) built on a client ESP template. Automated QA reports a 57% pass rate, driven by missing image alt text and unverifiable compliance/authentication headers — 0 hard failures, 3 warning categories.

## 2. Link & Tracking Issues
- 70 tracking/click-redirect links were present but skipped by the automated HTTP prober (redirect domains not resolved), so final destination URLs could not be verified in this pass.
- Multiple tracking pixels confirmed in source: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 occurrences, identical `mi_u=` hash), `sr.rlcdn.com/448796.gif` (5 occurrences, incrementing `n=1`–`n=5` — LiveRamp/RLCDN data-onboarding pixel), and `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`.
- A conversion/view-through pixel at `dv.crateandbarrel.com/o/5d724fdd-5d50-4aa5-a13b-d2a4a30e15f0?mi_mid=019fbd32-0600-7000-9233-b9f3f0c69b95&cp_tp=v` carries a per-send message ID.

## 3. Rendering & Accessibility
- 33 `<img>` elements flagged missing `alt` text — 20 are content images (product/lifestyle photography, including one Scene7 asset `2026_0711_CB_FallNewArrivals...`) that will be silent or announce raw filenames to screen readers; the remaining 13 are tracking pixels (`mi.crateandbarrel.com`, `sr.rlcdn.com`, `dv.crateandbarrel.com`) where `alt=""` should be used to mark them decorative.
- Unresolved template placeholder left in `<head>`: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` (note typo "IMPUT") — indicates a build step that was never completed or confirmed unnecessary before send.
- Redundant `format-detection` meta tags: one combined tag (`telephone=no,address=no,email=no,date=no,url=no`) followed by three separate single-attribute duplicates — no functional impact, but evidence of an uncleaned template merge.
- MSO/Outlook fallback styles and mobile media queries are present and structured correctly; no rendering-breaking issues found.

## 4. Personalization & Merge Tokens
- No traditional merge tokens (e.g. `%%FIRSTNAME%%`, `{{first_name}}`) appear in the supplied `<head>`/boilerplate source.
- Tracking URLs embed hashed subscriber/message identifiers (`mi_u=dbe8da718e2997cce014546f16c5722eaa3c322f28d40f0a8386f8fd1015f5a8`, `mi_mid=019fbd32-0600-7000-9233-b9f3f0c69b95`) used for individual-level open/click tracking, not visible content personalization.
- Body content was truncated in the supplied source, so dynamic/personalized content blocks could not be assessed.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not found — may be an AgentMail relay capture gap or a genuine absence; cannot confirm without raw headers.
- `List-Unsubscribe-Post` header not found — RFC 8058 one-click unsubscribe support unconfirmed.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status for this send is unknown from available data.
- Unsubscribe link and physical-address footer were not present in the truncated HTML supplied, so CAN-SPAM footer requirements cannot be assessed from this evidence.

## 6. Email-to-Site Continuity
- Cannot confirm UTM parameter structure or landing-page alignment — all 70 outbound links route through tracking/redirect domains and were skipped by the HTTP prober, so destination `crateandbarrel.com` URLs and query strings are unknown from this data.

## 7. Recommendations
1. Add descriptive `alt` text to the 20 flagged content images; set `alt=""` on the 13 flagged tracking-pixel images.
2. Remove or resolve the leftover `[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]` placeholder comment before next send.
3. Confirm with the ESP whether `List-Unsubscribe`/`List-Unsubscribe-Post` are actually sent and RFC 8058-compliant — verify via raw header capture rather than relay logs.
4. Obtain a raw `Authentication-Results` header (SPF/DKIM/DMARC) directly from the receiving MTA to confirm authentication status.
5. Manually resolve a sample of the 70 tracking/redirect links to confirm they land on live, matching pages with consistent UTM tagging.
## Recent history

- [[2026-08-01-on-sale-shipping-free--felix-plinth-home-furniture-fap6e]] — 8/10 (2026-08-01)
- [[2026-08-01-cat-trees-on-sale-instant-savings-endless-options-45fbd63e-53cd-4f14-95c6---felix-plinth-home-furniture-fap6e]] — 7/10 (2026-08-01)
- [[2026-07-31-rooms-for-your-mood-board-f5ae6680-4426-4d38-9750---felix-plinth-home-furniture-fap6e]] — 6/10 (2026-07-31)

