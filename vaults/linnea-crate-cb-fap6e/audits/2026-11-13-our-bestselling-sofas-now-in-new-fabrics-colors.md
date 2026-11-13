---
slug: 2026-11-13-our-bestselling-sofas-now-in-new-fabrics-colors
type: email
date: 2026-11-13
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Barrel
subject: Our bestselling sofas, now in new fabrics & colors
tags: [email, score-7, sender/crate-barrel]
---
# Our bestselling sofas, now in new fabrics & colors
**Score:** 7/10 · **Type:** Email audit · **2026-11-13**
## Full review
## Technical Audit

## 1. Technical Summary
The email is a large, template-built (Movable Ink, `mi.crateandbarrel.com`) XHTML 1.0 Transitional message. The main confirmed problems are widespread missing `alt` text and a viewport setting that blocks zoom. Header-level compliance and authentication checks could not be verified. The QA run scored a 57% pass rate with 0 errors and 3 warnings. The HTML source was truncated, so footer and link-level checks are incomplete.

## 2. Link & Tracking Issues
- **Unverified links:** 87 tracking links were skipped by the HTTP probe because they are click-redirect domains. Destination validity, redirect chains and 404s are untested, which is a coverage gap rather than a confirmed defect.
- **Third-party pixels:** five `https://sr.rlcdn.com/448796.gif?s=dbe8da71…&n=1` to `n=5` beacons are present. These are LiveRamp pixels, and the identical `s=` token appears in all five.
- **More tracking images:** `https://mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif?mi_u=…` and `https://dv.crateandbarrel.com/o/7bb8392e-…?mi_cid=…&mi_mid=…` are additional tracking or open pixels.
- **Per-recipient identifier:** the `mi_u=dbe8da718e29…` hash is a persistent identifier carried in image URLs. This matters for privacy and for caching or proxying.

## 3. Rendering & Accessibility
- **Missing alt text:** about 50 `<img>` elements are flagged, including the content images:
  - `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/*.jpg` and `*.gif` (about 30)
  - `s7d5.scene7.com/is/image/Crate/SP25_CB_UphBestsellers_leather_01`
  - the Scene7 `2026%5F0920%5FCB%5FThanksgivingGuide%5FTertiary…` image
  - `mi.crateandbarrel.com/p/rp/*.png` (7)

  With images blocked, screen readers and image-off clients get no product or CTA context. The decorative and tracking pixels (`rlcdn.com`, `o.gif`, `dv.crateandbarrel.com`) should carry `alt=""` explicitly. The flagged file names are used as the accessible name when alt is absent.
- **Zoom blocked:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">` disables pinch-zoom. This is a WCAG 1.4.4 concern.
- **Text resizing disabled:** `-webkit-text-size-adjust:none` appears in the global `*{}` rule and on `html` and `body`, and `*{line-height:100%}` is set globally. Both hurt text resizing and readability.
- **Template leftovers and invalid markup:**
  - The placeholder comment `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` is still in the source.
  - There are empty rules (`td,th,div,p,a { }`).
  - `<meta charset>` and `http-equiv` Content-Type are both declared.
  - `format-detection` is declared four times.
  - The `<title>Crate & Barrel</title>` has an unescaped `&`, which is invalid under the XHTML doctype.

  None of these is likely to break rendering.
- **Document language:** `lang="en"` is present.

## 4. Personalization & Merge Tokens
No issues found. No unresolved merge tokens such as `%%…%%` or `{{…}}` are visible in the truncated source. The footer and greeting could not be inspected.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe:** the header was not found. The QA tool notes it may be stripped by the AgentMail relay, so this is unconfirmed.
- **List-Unsubscribe-Post (RFC 8058):** the header was not found, with the same relay caveat. Gmail and Yahoo require one-click unsubscribe for bulk senders, so verify at the origin.
- **Authentication-Results:** the header was not captured, so SPF, DKIM and DMARC status is unknown. The `From` domain `mail.crateandbarrel.com` is a dedicated subdomain, which is consistent with a properly configured ESP.
- **Footer:** the physical address and in-body unsubscribe link are outside the truncated HTML and could not be checked.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not verifiable from the data provided. All 87 links were wrapped in tracking redirects and not resolved, so UTM parameters, final landing URLs and destination status are unknown.

## 7. Recommendations
1. Add descriptive `alt` text to all content images, with product or CTA names. Set `alt=""` on the tracking and decorative pixels (`rlcdn.com`, `o.gif`, `dv.crateandbarrel.com`).
2. Remove `maximum-scale=1` from the viewport meta. Replace `-webkit-text-size-adjust:none` with `100%`.
3. Confirm `List-Unsubscribe` and `List-Unsubscribe-Post: List-Unsubscribe=One-Click` on the raw message at the origin. Capture SPF, DKIM and DMARC from a direct (non-relay) copy.
4. Resolve the tracking redirects with a follow-redirects probe to verify landing pages and UTM parameters.
5. Clean the template: escape `&amp;` in the title, remove the duplicate meta tags and the `IMPUT HERE` comment, and drop the empty CSS rules.
6. Review whether the five `rlcdn.com` beacons are intended, given the privacy and deliverability trade-offs.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

