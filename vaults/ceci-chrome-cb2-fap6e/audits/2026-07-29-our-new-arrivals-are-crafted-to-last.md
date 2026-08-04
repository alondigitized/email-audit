---
slug: 2026-07-29-our-new-arrivals-are-crafted-to-last
type: email
date: 2026-07-29
persona: ceci-chrome-cb2-fap6e
score: "5/10"
sender: Crate & Kids
subject: Our new arrivals are crafted to last→
tags: [email, score-5, sender/crate-kids]
---
# Our new arrivals are crafted to last→
**Score:** 5/10 · **Type:** Email audit · **2026-07-29**
## Full review
## Technical Audit

## 1. Technical Summary
Salesforce Marketing Cloud–style template (mi.crateandbarrel.com tracking domain) with a heavy pixel-tracking load, no alt text on any image asset, and missing unsubscribe/authentication headers at the relay layer.

## 2. Link & Tracking Issues
- 81 tracking/click-redirect links were present but skipped by the automated HTTP probe (`81 tracking link(s) skipped`) — destination URLs and redirect chains are unverified.
- Tracking pixel `https://mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=56aaa2787a6773d0f164733102dce5192f75df7c634bb941bb640686964` is loaded **6 times** with an identical `mi_u` param — redundant duplicate requests.
- LiveRamp pixel `https://sr.rlcdn.com/448796.gif?s=...&n=1` through `n=5` fires 5 sequential instances (n=1–5), consistent with a multi-partner data-onboarding chain.
- Additional open/view pixels present: `https://mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` and `https://dv.crateandbarrel.com/o/7ca67cd7-620c-49d4-915a-b1030ae86a26?mi_mid=019fabd0-8f80-7000-9604-7dc054f6b8d5&cp_tp=v`.

## 3. Rendering & Accessibility
- 32 distinct image references are missing `alt` text per the automated scan, including all content images under `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/...` and the Scene7 hero asset (`s7d5.scene7.com/is/content/Crate/00%5FEmail/...WholeHomeNewArrivals...`). This affects screen readers and image-blocked clients.
- `<title>Crate & Barrel</title>` does not match the sending persona `"Crate & Kids"` — mismatched metadata that can surface in webmail tab titles.
- Unremoved template scaffolding in `<head>`: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` (note the typo "IMPUT") — a leftover build placeholder, cosmetically inert but indicates an unfinished template pass.
- Doctype/CSS defensive coding (XHTML 1.0 Transitional, MSO conditional comments, `.ExternalClass`/`.ReadMsgBody` resets, mobile breakpoint classes at 460px) is standard and complete — no issues found.

## 4. Personalization & Merge Tokens
No unresolved merge tags (e.g. `{{FirstName}}`, `%%field%%`) are visible in the provided HTML excerpt. Note the source is truncated, so downstream body content (where personalization typically lives) could not be fully inspected.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not found — may be a relay-capture limitation rather than a true absence; flagged as WARN, not confirmed absent.
- `List-Unsubscribe-Post` (RFC 8058) not found — one-click unsubscribe cannot be confirmed as supported.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status is unknown via the AgentMail relay.
- Footer unsubscribe link/physical address were not present in the truncated excerpt, so CAN-SPAM footer compliance could not be directly verified from source.

## 6. Email-to-Site Continuity
CTA `href` attributes are not present in the truncated HTML excerpt, so UTM parameters and landing-page alignment cannot be verified from the provided source. Image assets consistently resolve to known Crate & Barrel infrastructure (`image.mail.crateandbarrel.com`, `s7d5.scene7.com`), with no off-domain asset hosting observed.

## 7. Recommendations
1. Add `alt` text to all 32 flagged image elements, prioritizing the hero (`...WholeHomeNewArrivals...HERO...`) and any CTA-adjacent images.
2. Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually sent (vs. a relay-capture gap) to support RFC 8058 one-click unsubscribe.
3. Verify `Authentication-Results` (SPF/DKIM/DMARC) at the sending MTA independent of this relay.
4. Remove the leftover `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` placeholder comment.
5. Correct `<title>` to reflect the `Crate & Kids` persona instead of `Crate & Barrel`.
6. Deduplicate the 6x-repeated `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` pixel if unintentional.
7. Manually resolve a sample of the 81 skipped tracking links to confirm UTM parameters and landing-page alignment, since the automated probe could not verify them.
## Recent history

- [[2026-07-29-new-our-cotswolds-inspired-lookbook]] — 9/10 (2026-07-29)
- [[2026-07-28-24-hours-left-for-the-furniture-event-4e2024a6-dbb3-4419-b365-]] — 9/10 (2026-07-28)
- [[2026-07-28-so-much-new]] — 7/10 (2026-07-28)

