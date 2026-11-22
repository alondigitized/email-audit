---
slug: 2026-11-22-up-to-40-off-most-loved-kitchen-brands-black-friday-is-here--felix-plinth-home-furniture-fap6e
type: email
date: 2026-11-22
persona: felix-plinth-home-furniture-fap6e
score: "7/10"
sender: Crate & Barrel SALE
subject: Up to 40% off most-loved kitchen brands! Black Friday is here →
tags: [email, score-7, sender/crate-barrel-sale]
---
# Up to 40% off most-loved kitchen brands! Black Friday is here →
**Score:** 7/10 · **Type:** Email audit · **2026-11-22**
## Full review
## Technical Audit

## 1. Technical Summary
The email's HTML has valid language and viewport tags, but 58 images lack alt text, 7 of which are third-party tracking pixels. The HTML source was truncated and 101 tracked links weren't probed, so compliance, link and UTM checks are mostly unverifiable from this data. The automated QA shows a 57% pass rate with 0 errors and 3 warnings.

## 2. Link & Tracking Issues
- **Unverified:** 101 links were skipped as tracking/click-redirect domains, so none were resolved. Destination validity, redirect chains and broken links are unconfirmed.
- **Third-party pixels:** 5 `https://sr.rlcdn.com/448796.gif?s=dbe8da71…&n=1` to `n=5` requests (LiveRamp/RapLeaf domain) load in addition to the ESP's own open pixels, `https://mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif?mi_u=…` and `https://dv.crateandbarrel.com/o/e4263dc3-…?mi_cid=…&mi_mid=…`. That is 7 tracking pixels in total.
- **Per-recipient identifier:** the `s=` value in the rlcdn URLs is a 64-character hex string, and the `mi_u=` value is reused across the `mi.crateandbarrel.com/p/rp/*.png` image URLs. Both look like per-recipient identifiers embedded in image URLs. Whether they are hashed emails can't be determined from this data.
- **Duplicate pixel calls:** the same rlcdn pixel fires 5 times with only `n` changing.

## 3. Rendering & Accessibility
- **Missing alt text, 58 images:**
  - 44 on `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/*.jpg` (plus one `m/47/bbf6f9d4-….png`).
  - 7 dynamic images at `mi.crateandbarrel.com/p/rp/*.png`, for example `560d850e7e517ede.png`.
  - 7 tracking pixels, which should carry `alt=""` and don't.
  - If the product and content images are linked, screen readers and images-off clients will have no accessible name for those links.
- **Zoom disabled:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />` blocks pinch-zoom, a WCAG 1.4.4 concern.
- **Invalid markup:**
  - `<title>Crate & Barrel</title>` has an unescaped `&` under an XHTML 1.0 Transitional doctype.
  - `<meta charset>` is declared twice, once as `http-equiv` and once as the HTML5 form.
  - `format-detection` is declared 3 times with conflicting values.
- **Leftover template placeholder:** the source contains `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->`. It sits in a comment, so it has no rendering impact.
- **Global CSS:** `*{line-height:100%}` and `p{margin:0 auto; text-align:center}` apply to every element and can override line heights unexpectedly.

## 4. Personalization & Merge Tokens
No issues found in the visible source. No unresolved merge tokens such as `{{…}}`, `%%…%%` or `[FIRST_NAME]` appeared in the truncated HTML. The rest of the body wasn't available to check.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **`List-Unsubscribe` header not found:** the QA tool notes the AgentMail relay may strip it, so this is unconfirmed.
- **`List-Unsubscribe-Post` header not found (RFC 8058):** same caveat. One-click unsubscribe support can't be confirmed.
- **`Authentication-Results` not found:** SPF, DKIM and DMARC status is unknown. The sender is `crateandbarrel@mail.crateandbarrel.com`, a subdomain aligned with the brand domain, but alignment can't be verified.
- **Footer not visible:** the physical postal address and in-body unsubscribe link couldn't be checked because the source was truncated.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not assessable. The click URLs are ESP tracking redirects that weren't resolved, so UTM parameters and landing page alignment with the "Up to 40% off most-loved kitchen brands" offer are unverified.

## 7. Recommendations
1. Add descriptive `alt` text to all 51 content images. Add `alt=""` to the 7 tracking pixels.
2. Remove `maximum-scale=1` from the viewport meta tag.
3. Escape the title as `Crate &amp; Barrel`. Remove the duplicate `charset` and `format-detection` tags and the leftover placeholder comment.
4. Re-run the audit with the full raw message, including headers, to confirm `List-Unsubscribe`, `List-Unsubscribe-Post` and `Authentication-Results` (SPF/DKIM/DMARC). Also check the footer for the address and unsubscribe link.
5. Resolve a sample of the 101 tracked links by following the redirects, to verify destinations, UTM parameters and landing page alignment.
6. Review whether the 5 duplicate `sr.rlcdn.com` pixels are needed. Consolidating them would cut third-party requests.
## Recent history

- [[2026-11-22-up-to-70-off-for-every-room--felix-plinth-home-furniture-fap6e]] — 7/10 (2026-11-22)
- [[2026-11-22-5x8-shag-rugs-under-75--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-11-22)
- [[2026-11-22-happening-now-early-black-friday-furniture-more-minus-the-wait--felix-plinth-home-furniture-fap6e]] — 7/10 (2026-11-22)

