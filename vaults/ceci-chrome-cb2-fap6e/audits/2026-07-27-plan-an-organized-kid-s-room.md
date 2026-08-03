---
slug: 2026-07-27-plan-an-organized-kid-s-room
type: email
date: 2026-07-27
persona: ceci-chrome-cb2-fap6e
score: "6/10"
sender: Crate & Kids
subject: Plan an organized kid’s room
tags: [email, score-6, sender/crate-kids]
---
# Plan an organized kid’s room
**Score:** 6/10 · **Type:** Email audit · **2026-07-27**
## Full review
## Technical Audit

# Technical Email Audit — "Plan an organized kid's room" (Crate & Kids)

## 1. Technical Summary
Legacy table-based HTML email (XHTML transitional doctype, MSO conditional comments, standard responsive media queries). Automated QA returned a 57% pass rate with 0 hard failures and 3 warning categories: missing unsubscribe/authentication headers and widespread missing image alt text.

## 2. Link & Tracking Issues
- 82 tracking/click-redirect links were skipped by the automated HTTP prober (unable to verify final destination validity or redirect chains for these).
- Tracking pixel `https://mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=...` appears **6 times** with identical query params — likely a template duplication rather than intentional; worth confirming with the ESP (Cheetah/Bluecore-style MI platform) since redundant pixel fires can inflate open metrics or slow rendering.
- `https://sr.rlcdn.com/448796.gif?...&n=1` through `n=5` — 5 sequential LiveRamp (RampID) tracking pixels. Sequential `n=` params suggest intentional multi-fire tracking, not a bug, but represents 5 additional third-party requests per open.
- Additional single-fire pixels: `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` and `dv.crateandbarrel.com/o/2b15e0de-...?mi_mid=...&cp_tp=v`.

## 3. Rendering & Accessibility
- **30 images missing `alt` text**, per QA scan, spanning both the `image.mail.crateandbarrel.com` content images and `s7d5.scene7.com` spacer/rule images (e.g. `25_MI_Bottom_Spacer_40px_White`, `042025_CBK_KidsBeds1_Rule_Spacer_40px`). Decorative spacers should use `alt=""`; content images need descriptive alt text for screen readers and blocked-image fallback.
- Duplicate/redundant `<meta>` declarations in `<head>`: `charset` is set twice (`http-equiv="Content-Type"` and standalone `charset="utf-8"`), and `format-detection` is declared once combined (`telephone=no,address=no,email=no,date=no,url=no`) and then again 3 more times individually. No functional break, but indicates un-cleaned template markup.
- Unresolved ESP template placeholder left in source: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` (note: typo "IMPUT"). It's inside an HTML comment so not user-visible, but confirms this template wasn't fully finalized before send.
- `<title>Crate & Barrel</title>` does not match the sending name "Crate & Kids" — a metadata mismatch that can affect browser tab/webmail preview title, not a rendering-breaking issue.

## 4. Personalization & Merge Tokens
No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) detected in the visible/truncated HTML. **Caveat:** source was truncated before body content rendered, so personalization elsewhere in the email could not be verified — flagging as inconclusive rather than "no issues."

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not found — required for CAN-SPAM/major-mailbox-provider compliance; may be a capture artifact of the AgentMail relay rather than an actual absence.
- `List-Unsubscribe-Post` header not found — without it, RFC 8058 one-click unsubscribe cannot be confirmed as supported.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status is unknown from this capture.

All three are flagged **WARN**, not confirmed failures — likely reflects the relay not surfacing these headers rather than the sender omitting them. Recommend verifying directly against raw SMTP headers from the original send.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot confirm — the 82 tracking/redirect links were skipped by the HTTP prober, and the truncated HTML excerpt doesn't expose the destination URLs or UTM query strings for the CTA/product links. No landing-page alignment check was possible with the data available.

## 7. Recommendations
1. Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` (RFC 8058) headers are present in the actual sent message, not just this relay capture.
2. Verify SPF/DKIM alignment directly against send-time headers since `Authentication-Results` wasn't captured.
3. Add `alt` text to the 30 flagged images — empty `alt=""` for spacer/rule graphics, descriptive text for product imagery.
4. Investigate the 6x duplicate fire of `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` — likely a template loop bug.
5. Remove the leftover placeholder comment (`IMPUT HERE CLIENT FONT IMPORT SCRIPT`) and consolidate duplicate `charset`/`format-detection` meta tags.
6. Re-run link/UTM validation against the full (untruncated) HTML to confirm the 82 skipped tracking links resolve to the correct, UTM-tagged landing pages.
## Recent history

- [[2026-07-27-can-t-wait-to-get-home-neither-can-we]] — 9/10 (2026-07-27)
- [[2026-07-26-bestsellers-new-arrivals-from-nuna-c0256d8f-bdfe-4d10-be84-]] — 8/10 (2026-07-26)
- [[2026-07-26-last-day-for-up-to-200-off-select-breville-c38d6633-4046-499b-b5dd-]] — 9/10 (2026-07-26)

