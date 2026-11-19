---
slug: 2026-11-19-on-now-up-to-40-off-top-kitchen-brands-e6ac7d90-d23c-4f3d-933b-
type: email
date: 2026-11-19
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Barrel SALE
subject: ON NOW! Up to 40% off top kitchen brands
tags: [email, score-7, sender/crate-barrel-sale]
---
# ON NOW! Up to 40% off top kitchen brands
**Score:** 7/10 · **Type:** Email audit · **2026-11-19**
## Full review
## Technical Audit

## 1. Technical Summary
The email is a table-based XHTML 1.0 Transitional layout with Mobile Influence (`mi.crateandbarrel.com`) tracking. The QA run scored 57% with 0 errors and 3 warnings. The main confirmed problems are missing alt text on about 45 images and a viewport tag that blocks zoom. The header warnings are probably capture limits of the AgentMail relay and can't be confirmed from this data.

## 2. Link & Tracking Issues
- **Unverified links:** 84 links were skipped because they are on tracking or click-redirect domains. Destination status, redirect chains and landing-page health are unverified.
- **No broken links:** The QA run reported 0 errors, and no broken links were detected among the links it probed.
- **Third-party pixels:** Five identical `https://sr.rlcdn.com/448796.gif?s=56aaa278…&n=1` to `n=5` pixels (LiveRamp) are embedded. They are the same pixel repeated with an incrementing `n` parameter. This is a disclosure and privacy-review item, not a defect.
- **Recipient identifier:** A per-recipient `mi_u=56aaa278…` token appears on every `mi.crateandbarrel.com` image URL, and the `dv.crateandbarrel.com/o/…` pixel carries `mi_cid` and `mi_mid`. This is expected personalization, but each of these images is unique per recipient and can't be cached.

## 3. Rendering & Accessibility
- **Missing alt text (about 45 images, confirmed by QA):**
  - 31 images on `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/…`, for example `bbf6f9d4-…png`, `5a607254-…gif` and `077580ac-…jpg`.
  - 7 images on `mi.crateandbarrel.com/p/rp/…`, for example `560d850e7e517ede.png`.
  - 5 `rlcdn.com` pixels, 1 `o.gif` and 1 `dv.crateandbarrel.com` pixel.
  - The 1×1 tracking pixels should carry `alt=""`. The QA check can't tell an absent attribute from an empty one, so confirm which applies. The 31 content images and the 7 `mi.crateandbarrel.com` `rp` images are probably meaningful and need descriptive alt text. If they carry the offer, an image-blocking client shows the recipient nothing.
- **Pinch-zoom disabled:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />` stops users from zooming, which is a WCAG 1.4.4 and 1.4.10 concern.
- **Text resizing disabled:** `*{-webkit-text-size-adjust:none; …}` and `body{-webkit-text-size-adjust:none}` prevent text resizing on iOS. They also conflict with the earlier `100%` declarations.
- **Template residue:**
  - The comment `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` was left in the source.
  - There are duplicate `<meta name="format-detection">` tags (three of them) and a duplicate charset declaration (`http-equiv` plus `meta charset`).
  - `<title>Crate & Barrel</title>` has an unescaped `&`, which is invalid under the XHTML doctype. This is low severity.
- **Global `*{line-height:100%}`:** This risks tight text in clients that honor it. It is untested here.
- **HTML truncated:** The source was cut off, so I can't check body-level markup such as roles, `lang` on sections, table `role="presentation"` and the preheader.

## 4. Personalization & Merge Tokens
No issues found. The visible source has no unrendered merge tokens such as `%%…%%` or `{{…}}`. Per-recipient tokens are rendered as `mi_u`, `mi_cid` and `mi_mid` values.

## 5. Compliance
- **`List-Unsubscribe` header not found (WARN):** The QA note says the AgentMail relay may not capture it. It is unconfirmed, not a verified defect.
- **`List-Unsubscribe-Post` (RFC 8058) not found (WARN):** Same caveat. If the header is really missing, one-click unsubscribe isn't supported. Gmail and Yahoo require it for bulk senders.
- **`Authentication-Results` not found (WARN):** SPF, DKIM and DMARC status is unknown. The relay is the likely cause.
- **Physical address and in-body unsubscribe link:** Not confirmable because the HTML is truncated before the footer. QA reported no error for them.
- **Sender:** `From: "Crate & Barrel SALE" <crateandbarrel@mail.crateandbarrel.com>` uses a subdomain of the brand's own domain, which is consistent with the image and tracking hosts.

## 6. Email-to-Site Continuity
UTM parameters and landing-page alignment couldn't be verified. The 84 tracking links on click-redirect domains were skipped, so there is no data on final destinations. The final URLs would need to be resolved to confirm that UTMs survive the redirects.

## 7. Recommendations
1. Add descriptive `alt` text to the 31 `image.mail…/m/1/` content images and the 7 `mi…/p/rp/` images.
2. Set `alt=""` explicitly on the `rlcdn.com`, `o.gif` and `dv.crateandbarrel.com` pixels.
3. Change the viewport meta to `width=device-width, initial-scale=1`, without `maximum-scale=1`.
4. Remove `-webkit-text-size-adjust:none` and the conflicting duplicate declarations.
5. Re-run the audit against the raw `.eml` with full headers to confirm `List-Unsubscribe`, `List-Unsubscribe-Post` and `Authentication-Results`.
6. Resolve the 84 redirect links with a follow-redirects probe to check UTMs and landing status.
7. Clean up the template residue: the `IMPUT HERE` comment, the duplicate `meta` tags and the unescaped `&` in the title.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

