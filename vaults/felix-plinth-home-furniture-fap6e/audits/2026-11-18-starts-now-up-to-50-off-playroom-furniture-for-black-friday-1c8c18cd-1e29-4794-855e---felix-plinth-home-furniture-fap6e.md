---
slug: 2026-11-18-starts-now-up-to-50-off-playroom-furniture-for-black-friday-1c8c18cd-1e29-4794-855e---felix-plinth-home-furniture-fap6e
type: email
date: 2026-11-18
persona: felix-plinth-home-furniture-fap6e
score: "7/10"
sender: Crate & Barrel Kids SALE
subject: "Starts now: Up to 50% off playroom furniture for Black Friday →"
tags: [email, score-7, sender/crate-barrel-kids-sale]
---
# Starts now: Up to 50% off playroom furniture for Black Friday →
**Score:** 7/10 · **Type:** Email audit · **2026-11-18**
## Full review
## Technical Audit

## 1. Technical Summary
The HTML source is a standard XHTML 1.0 Transitional table layout with MSO/VML fallbacks. The 57% QA pass rate comes from 0 errors and 3 warnings. The main confirmed problem is missing alt text on about 30 content and spacer images. Header-level compliance and authentication could not be verified because the relay didn't capture the headers.

## 2. Link & Tracking Issues
- **Unverified links:** 89 tracking links were skipped because they are click-redirect domains, so the QA run never probed them. Destination validity, redirect chains and 404s are unknown.
- **Third-party pixels:** 13 tracking pixels are embedded, and all 13 lack alt attributes.
  - 6 are `https://mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=…`, the same pixel repeated.
  - 5 are `https://sr.rlcdn.com/448796.gif?s=…&n=1` through `n=5`. This is a third-party domain, and the pixels differ only in the `n` parameter.
  - 1 is `https://mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif?mi_u=…`.
  - 1 is `https://dv.crateandbarrel.com/o/f233873b-…?mi_cid=…&mi_mid=…`.
- **Per-recipient IDs:** the `mi_u` / `s=` values are per-recipient hashes in image URLs. Image proxies and prefetchers (Apple MPP, Gmail) will trigger them, which inflates open metrics.

## 3. Rendering & Accessibility
- **Missing alt text:** 43 images were flagged. About 13 are tracking pixels, where `alt=""` is acceptable. About 30 are content or spacer images, and examples are:
  - `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/f9756180-…jpg`
  - `s7d5.scene7.com/is/content/Crate/…WoolRugs…Img.gif`
  - `s7d5.scene7.com/is/image/Crate/25%5FMI%5FBottom%5FSpacer%5F40px%5FWhite`

  If the images are blocked or read by a screen reader, there is no text fallback. If the source uses `alt=""`, the QA check is over-flagging, but the truncated HTML can't confirm that.
- **Zoom blocked:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />` disables pinch-zoom. This is a WCAG 1.4.4 concern.
- **Text resizing disabled:** the CSS sets `*{-webkit-text-size-adjust:none; … line-height:100%}` and `body{-webkit-text-size-adjust:none}`. This blocks user text scaling in WebKit clients, and the `line-height:100%` default is tight.
- **Invalid markup:** `<title>Crate & Barrel</title>` has an unescaped ampersand, which is invalid under the XHTML doctype. The title also doesn't match the subject line.
- **Template leftovers:** the HTML contains an unfilled `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` comment. `meta format-detection` is declared 3 times with overlapping values.
- **Conflicting rules:** `@media (min-width:768px){img{max-width:600px}}` is overridden by the later `@media (min-width:640px){img{max-width:640px}}`, which also matches at 768px and above. The 600px rule is dead code.

## 4. Personalization & Merge Tokens
No issues found. The visible HTML shows no unrendered merge tokens such as `%%…%%` or `{{…}}`. The source is truncated, so the body and footer were not checked.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe:** the header was not found. The QA tool notes it "may not be captured by AgentMail relay", so this is unconfirmed rather than a confirmed sender defect.
- **List-Unsubscribe-Post (RFC 8058):** not found, with the same caveat. This matters for Gmail and Yahoo bulk-sender rules.
- **Authentication-Results:** not found, so SPF, DKIM and DMARC status is unknown. The From domain is `mail.crateandbarrel.com`. Alignment can't be assessed from the data available.
- **Footer:** the visible HTML doesn't include the unsubscribe link or postal address. The source is truncated, so neither is confirmed present or absent.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not verifiable. The 89 tracked links resolve through redirect domains and weren't followed, so UTM propagation and landing-page match for "Up to 50% off playroom furniture" are unconfirmed.

## 7. Recommendations
1. Add descriptive `alt` text to the ~30 content images. Use `alt=""` on spacers and tracking pixels.
2. Remove `maximum-scale=1`, and drop `-webkit-text-size-adjust:none` in favor of `100%`.
3. Escape the title as `Crate &amp; Barrel`, and strip the leftover template comment and duplicate meta tags.
4. Capture the raw headers (`List-Unsubscribe`, `List-Unsubscribe-Post`, `Authentication-Results`) by pulling the original message rather than the relay copy, then re-run the compliance checks.
5. Follow a sample of the 89 redirect links with a redirect-following probe. This confirms the final URL, status code and UTM retention.
6. Store the full HTML (the source here was truncated) so the footer, unsubscribe link and postal address checks can run.
## Recent history

- [[2026-11-18-starts-now-up-to-50-off-playroom-furniture-for-black-friday--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-11-18)
- [[2026-11-18-early-black-friday-is-up-to-70-off--felix-plinth-home-furniture-fap6e]] — 7/10 (2026-11-18)
- [[2026-11-18-pantry-cabinets-final-hours-early-black-friday--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-11-18)

