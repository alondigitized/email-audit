---
slug: 2026-10-14-up-to-50-off-the-semi-annual-bedroom-nursery-event
type: email
date: 2026-10-14
persona: linnea-crate-cb-fap6e
score: "6/10"
sender: Crate & Barrel Kids SALE
subject: "Up to 50% off: The Semi-Annual Bedroom & Nursery Event!"
tags: [email, score-6, sender/crate-barrel-kids-sale]
---
# Up to 50% off: The Semi-Annual Bedroom & Nursery Event!
**Score:** 6/10 · **Type:** Email audit · **2026-10-14**
## Full review
## Technical Audit

## 1. Technical Summary
The email is a table-based XHTML 1.0 Transitional template with a responsive breakpoint at 460px. Roughly 30 images are flagged for missing alt text, and the compliance and authentication headers could not be checked because of the relay. The HTML was truncated, so the footer, unsubscribe link and body markup were not reviewed. The QA score was 57% pass, 0 issues, 3 warnings.

## 2. Link & Tracking Issues
- **Unverifiable links:** 71 links were skipped as tracking or click-redirect domains, so destination status, redirect chains and final URLs are unverified. This is a coverage gap, not a confirmed defect.
- **Third-party pixel:** `https://sr.rlcdn.com/448796.gif?s=dbe8da71…&n=1` through `n=5` is five instances of a LiveRamp pixel.
  - Its `s=` value shares a prefix with the first-party `mi_u=dbe8da718e2997cc…` on `mi.crateandbarrel.com`. That suggests the same recipient-level hashed identifier is sent to a third party.
  - Repeating the same pixel five times is redundant requests.
  - I only compared prefixes, because the QA output truncates the values.
- **Open-tracking pixels:** `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` and `dv.crateandbarrel.com/o/b1355de9-…?mi_cid=…&mi_mid=…` are two open-tracking pixels. Both are normal for this kind of email, but neither has alt text.

## 3. Rendering & Accessibility
- **Missing alt text (about 30 images):**
  - Content images: 14 images on `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/…` (for example `6cda691d-….jpg`, `3735a837-….gif`, `1d17d250-….jpg`), plus `…/m/47/bbf6f9d4-….png`. Also `s7d5.scene7.com/…2026%5F0926%5FCBK%5FClearance%5FSecondaryStory.gif`.
  - If the images carry the offers or product names, image-blocked clients and screen readers lose that content.
  - Tracking pixels: `rlcdn.com` (5), `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6), `o.gif` and `dv.crateandbarrel.com`. These should have `alt=""`. The QA output can't tell a missing attribute from an empty one, so confirm in the source.
- **Pinch-zoom disabled:** `<meta name="viewport" content="…maximum-scale=1">` blocks pinch-zoom, which is a WCAG 1.4.4 concern.
- **Text resizing disabled:** the `*{-webkit-text-size-adjust:none}` rule and the body `-webkit-text-size-adjust:none` also prevent text resizing.
- **Title:** `<title>Crate & Barrel</title>` has an unescaped `&` under an XHTML doctype, which should be `&amp;`. The title is also generic and doesn't match the subject line.
- **Redundant and leftover markup:**
  - Duplicate `format-detection` metas.
  - Duplicate `charset` declarations.
  - Template remnant `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->`.
  - Global `p{margin:0 auto; text-align:center}`, which can leak into any unstyled paragraph.
- **Dark mode:** `color-scheme: light` is declared, so dark mode is intentionally unsupported.

## 4. Personalization & Merge Tokens
No issues found in the visible source. No unresolved tokens such as `%%…%%`, `{{…}}` or `[FIRST_NAME]` appeared in the truncated portion. The rest of the body wasn't available to check.

## 5. Compliance
- **List-Unsubscribe and List-Unsubscribe-Post (RFC 8058):** both headers were not found. The QA tool says this may be a relay capture limitation, so it is unconfirmed. If real, it matters because Gmail and Yahoo bulk-sender rules require one-click unsubscribe for senders of this volume.
- **Authentication-Results:** not found, so SPF, DKIM and DMARC status is unknown. The relay is the stated cause. The sending domain `mail.crateandbarrel.com` is a branded subdomain, which is consistent with proper authentication, but I can't confirm it.
- **Footer:** the visible unsubscribe link and physical address (CAN-SPAM) fall outside the truncated source and weren't verified.

## 6. Email-to-Site Continuity
Not assessable. The 71 links are wrapped in redirect domains, so the UTM parameters and landing URLs can't be seen in the data provided.

## 7. Recommendations
1. Re-run the audit against the raw message with full headers. Check `List-Unsubscribe`, `List-Unsubscribe-Post`, and SPF/DKIM/DMARC alignment before treating them as defects.
2. Resolve a sample of the 71 tracked links to their final URLs, to check for redirect errors and to verify UTMs and landing-page alignment.
3. Add descriptive alt text to the 15 content images, and set `alt=""` on all tracking pixels.
4. Remove `maximum-scale=1` from the viewport meta.
5. Escape the title as `Crate &amp; Barrel` and match it to the subject line.
6. Deduplicate the five `rlcdn.com` pixels. Confirm that sending a hashed recipient ID to LiveRamp is disclosed in the privacy policy.
7. Clean up the template remnants and duplicate metas.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

