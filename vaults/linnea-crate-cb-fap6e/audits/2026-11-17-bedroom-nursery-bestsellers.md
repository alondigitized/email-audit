---
slug: 2026-11-17-bedroom-nursery-bestsellers
type: email
date: 2026-11-17
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Barrel Kids
subject: ★★★★★ Bedroom & nursery bestsellers →
tags: [email, score-7, sender/crate-barrel-kids]
---
# ★★★★★ Bedroom & nursery bestsellers →
**Score:** 7/10 · **Type:** Email audit · **2026-11-17**
## Full review
## Technical Audit

## 1. Technical Summary
The email uses a standard XHTML table layout with MI (Movable Ink) dynamic content, and its main confirmed defects are accessibility ones: about 60 images with missing alt text, and a viewport that blocks zoom. The compliance and authentication warnings come from the capture path (AgentMail relay), not from the email. The HTML source is truncated, so footer and unsubscribe markup could not be inspected.

## 2. Link & Tracking Issues
- **Link probing is incomplete.** 106 links were skipped as tracking/click-redirect domains. Destination status, redirect chains and landing-page health are **unverified**.
- **Third-party pixels.** `https://sr.rlcdn.com/448796.gif?s=dbe8da71…15f5a8&n=1` through `n=5` is a LiveRamp pixel fired five times. The `s=` value begins with the same hash as the first-party `mi_u=dbe8da718e2997cce014546f16c5722eaa3c322f28d40f0a8386f8fd1…` parameter. This suggests a per-recipient hashed identifier is being passed to a third party. Whether that matches the sender's privacy disclosures can't be confirmed from this data.
- **Duplicate pixels.** `https://mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` appears 6 times, plus separate `o.gif` and `dv.crateandbarrel.com/o/…` beacons. These add requests and blocked-image failure points without adding information.
- **Stale asset reference.** One image is hosted on `s7d5.scene7.com/.../2026_1002_CBK_GiftGuide/...Gif`, outside the ESP image host. The path suggests an October asset in a Nov 17 send. This is a lower-confidence observation.

## 3. Rendering & Accessibility
- **Missing alt text:** about 60 `<img>` elements are flagged. Most are content images on `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/*.jpg`. Examples:
  - `73298d08-6817-4027-9fae-8644d316b283.jpg`
  - `84df5f56-cdee-4270-81b8-1498b1a341b6.jpg`
  - `8c4ce5d9-cf7b-4fbe-ba17-b9e2435a0e16.gif`
- **Images blocked by default:** if these are the product and category images, a recipient whose client blocks images sees blank space and screen readers read nothing useful.
- **Tracking pixels:** about 14 of the flags are pixels (`f3c0d22992a01946.png`, `448796.gif`, `o.gif`). They should carry `alt=""`. The QA check doesn't say whether the attribute is absent or empty.
- **Zoom disabled:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">` prevents pinch-zoom on mobile.
- **Text resizing:** `*{-webkit-text-size-adjust:none}` and `html{-webkit-text-size-adjust:none}` conflict with the `100%` declarations elsewhere and disable user text scaling in WebKit.
- **Invalid markup under the XHTML doctype:** `<title>Crate & Barrel</title>` has an unescaped ampersand. The title is also generic rather than the subject line.
- **Dead CSS:** `@media (min-width:768px){img{max-width:600px}}` is overridden by the later `@media (min-width:640px){img{max-width:640px}}` at equal specificity. Duplicate `format-detection` metas also appear.
- **Leftover template text:** `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` is still in the source. It is harmless but sloppy.

## 4. Personalization & Merge Tokens
No issues found. No unrendered merge tokens (`%%…%%`, `{{…}}`) appear in the visible source. Per-recipient values (`mi_u`, `mi_mid`, `mi_cid`) are populated.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **`List-Unsubscribe` and `List-Unsubscribe-Post` (RFC 8058):** not found. This is **unconfirmed**, because the QA tool itself notes the AgentMail relay may strip these headers. Gmail and Yahoo bulk-sender rules require one-click support, so check this against the raw original message.
- **`Authentication-Results`:** not captured, so SPF, DKIM and DMARC are **unknown**. The From domain `mail.crateandbarrel.com` can't be assessed from this data.
- **Footer:** the visible in-body unsubscribe link and postal address are not in the truncated source, so they could not be verified.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Can't be assessed. All 106 click links were skipped, and the truncated source shows no `utm_*` parameters or destination URLs. Only the Movable Ink identifiers (`mi_cid`, `mi_mid`, `mi_u`) are visible, and nothing confirms whether they persist on the landing page.

## 7. Recommendations
1. Add descriptive `alt` text to all content images, and `alt=""` to the pixels and decorative images. The subject promises "bestsellers", so product images need names.
2. Remove `maximum-scale=1` from the viewport meta and drop `-webkit-text-size-adjust:none`.
3. Deduplicate the `f3c0d22992a01946.png` and `rlcdn` pixels to one call each, and review the passing of the hashed identifier to LiveRamp.
4. Escape the title as `Crate &amp; Barrel` (or use the subject), and remove the stale template comment and dead CSS rules.
5. For QA, verify the headers (`List-Unsubscribe`, `List-Unsubscribe-Post`, `Authentication-Results`) from the original message outside the relay. Also probe a sample of the skipped tracking links to the final landing page so UTM and redirect behavior can be checked.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

