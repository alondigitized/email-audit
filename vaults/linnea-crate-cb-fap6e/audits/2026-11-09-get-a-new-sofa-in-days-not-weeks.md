---
slug: 2026-11-09-get-a-new-sofa-in-days-not-weeks
type: email
date: 2026-11-09
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Barrel
subject: Get a new sofa in days, not weeks →
tags: [email, score-7, sender/crate-barrel]
---
# Get a new sofa in days, not weeks →
**Score:** 7/10 · **Type:** Email audit · **2026-11-09**
## Full review
## Technical Audit

## 1. Technical Summary
The email is built on a Movable Ink–style XHTML table template. The QA run found 0 hard failures and 3 warnings (57% pass rate), and the main issues are 42 images flagged for missing alt text and the absence of unsubscribe and authentication headers in the captured data. The HTML was truncated, so the body, footer and link attributes could not be fully inspected.

## 2. Link & Tracking Issues
- **81 tracking links could not be verified.** The QA probe skipped them as click-redirect domains, so destination validity and redirect chains are unconfirmed.
- **Five identical third-party pixels** load from `https://sr.rlcdn.com/448796.gif?s=dbe8da71…&n=1` through `n=5`. This is a LiveRamp identity-sync pixel with a hashed identifier, repeated five times, which adds requests and third-party exposure.
- **A personalization hash is passed in image URLs.** `mi_u=dbe8da718e2997cce014546f16c5722eaa3c322f28d40f0a8386f8fd101…` appears on `mi.crateandbarrel.com/p/rp/*.png` and `/p/up/50c75a732e99b42a/o.gif`. This is expected for dynamic content, but the images won't render personalized if the client proxies or blocks them.
- **Open-tracking pixels:** `https://mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` and `https://dv.crateandbarrel.com/o/02f2f010-eb6c-4fa8-9f8c-334cef9ce044?mi_cid=…&mi_mid=…`.

## 3. Rendering & Accessibility
- **42 images lack alt text.** This includes the `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/*.jpg` content images, the Scene7 image `202503%5FCB%5FUphBestsellers%5FInStock%5Fretreat%5F03`, and 7 `mi.crateandbarrel.com/p/rp/*.png` images. If any of these carry the sofa or product content, image-blocking clients and screen readers will get nothing.
- **Tracking pixels have no `alt=""`.** The 5 `rlcdn` pixels, `o.gif` and the `dv.` pixel should carry an explicit empty alt so screen readers skip them.
- **Viewport:** `maximum-scale=1` in `<meta name="viewport">` blocks pinch-zoom, which is a WCAG 1.4.4 concern.
- **Invalid markup:** `<title>Crate & Barrel</title>` has an unescaped `&` in an XHTML 1.0 Transitional doctype.
- **Redundant or conflicting `format-detection` meta tags.** There are four, with overlapping values such as `date=no` and `address=no` repeated.
- **Template leftover:** the comment `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` was left in production.
- **Global rule:** `*{-webkit-text-size-adjust:none; … line-height:100%}` overrides line-height everywhere and disables text-size adjustment.

## 4. Personalization & Merge Tokens
No issues found. No unresolved merge tokens (`{{…}}`, `%%…%%`, `[FIRST_NAME]`) were visible in the truncated source. The part of the body I couldn't see was not checked.

## 5. Compliance
- **`List-Unsubscribe` not found [WARN].** QA notes it may be stripped by the AgentMail relay, so this is unconfirmed rather than a proven sender defect.
- **`List-Unsubscribe-Post` not found [WARN].** RFC 8058 one-click support is unconfirmed, and Gmail and Yahoo bulk-sender rules require it.
- **`Authentication-Results` not found [WARN].** SPF, DKIM and DMARC alignment could not be assessed. The From domain `mail.crateandbarrel.com` is a subdomain, so alignment is plausible but unverified.
- **Not verifiable from the truncated HTML:** the in-body unsubscribe link and the physical postal address (CAN-SPAM).

## 6. Email-to-Site Continuity
Not verifiable. All 81 links are wrapped in click-redirect domains, so UTM parameters and landing-page URLs were not exposed. The subject promises "a new sofa in days, not weeks", and I could not confirm that any link lands on an in-stock or quick-ship sofa page. A Scene7 asset named `…UphBestsellers_InStock…` suggests the content is aligned, but that is only inferred from the filename.

## 7. Recommendations
1. Add descriptive `alt` text to the product and hero images, and `alt=""` to all pixels and spacers.
2. Re-run the audit with full headers to confirm `List-Unsubscribe`, `List-Unsubscribe-Post` and `Authentication-Results` (SPF/DKIM/DMARC).
3. Follow the redirects on the 81 tracking links and confirm that they resolve, that UTMs are preserved and that the sofa links land on the right pages.
4. Deduplicate the five `rlcdn` pixels, or confirm that each is intentional.
5. Escape `&` as `&amp;` in `<title>`, remove `maximum-scale=1`, merge the duplicate `format-detection` tags and delete the leftover template comment.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

