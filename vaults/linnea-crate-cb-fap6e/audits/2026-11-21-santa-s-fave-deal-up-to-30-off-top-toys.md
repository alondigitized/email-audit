---
slug: 2026-11-21-santa-s-fave-deal-up-to-30-off-top-toys
type: email
date: 2026-11-21
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Barrel Kids SALE
subject: "Santa's fave deal: Up to 30% off top toys!"
tags: [email, score-7, sender/crate-barrel-kids-sale]
---
# Santa's fave deal: Up to 30% off top toys!
**Score:** 7/10 · **Type:** Email audit · **2026-11-21**
## Full review
## Technical Audit

## 1. Technical Summary
The email is a table-based XHTML 1.0 Transitional template with MSO/VML fallbacks and 102 tracked links. The QA run reports a 57% pass rate (0 errors, 3 warnings). The main confirmed problems are missing alt text on roughly 55 images and a viewport tag that blocks zoom. The header-based compliance and authentication checks could not be evaluated.

## 2. Link & Tracking Issues
- **Unverifiable links:** 102 links were skipped as tracking/click-redirect domains, so their destinations, status codes and redirect chains are unverified.
- **Third-party pixels:** `https://sr.rlcdn.com/448796.gif?s=dbe8da71…&n=1` through `n=5` are five repeated LiveRamp pixels. Each one is an extra third-party request, and clients that block remote content will not load them.
- **Identifier in image URLs:** the `mi_u=dbe8da718e2997cce014546f16c5722eaa3c322f28d40f0a8386f8fd101…` parameter appears on `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png`, and a matching hex string appears in the rlcdn `s=` parameter. It looks like a hashed recipient identifier, but I can't confirm that from the truncated source. If it is one, it is sent to a third-party domain on every image load.
- **Repeated asset:** `f3c0d22992a01946.png` is loaded 6 times (`mi.crateandbarrel.com/p/rp/`). This is probably a dynamic-content slot reused per module.

## 3. Rendering & Accessibility
- **Missing alt text, confirmed by QA.** About 55 `<img>` tags are flagged. These split into two groups:
  - **Content images (a real issue):** the `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/*.jpg|gif|png` assets, including `bbf6f9d4-…png`, `d3119bec-…jpg` and animated `c1cafb52-…gif` and `7cf1a4d1-…gif`. Also the Scene7 asset `2026%5F1105%5FCBK%5FPersonalizedGiftShop%5FSeconda…`. With images blocked or a screen reader, these modules have no accessible text, and the email may read as blank if images are off.
  - **Spacers and pixels (minor):** `25%5FMI%5FBottom%5FSpacer%5F50px%5FWhite`, `…40px…`, the `o.gif` and `c7ac8c1b-…` (`dv.crateandbarrel.com`) tracking images, and the rlcdn pixels should carry `alt=""` so assistive tech skips them.
- **Zoom disabled:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">` blocks pinch-zoom, which is a WCAG 1.4.4 concern.
- **Text resizing disabled:** the universal selector `*{-webkit-text-size-adjust:none;-ms-text-size-adjust:none;…}` disables text-size adjustment for every element.
- **Invalid markup:** `<title>Crate & Barrel</title>` has an unescaped `&`, which is invalid under the XHTML doctype and should be `&amp;`.
- **Duplicate meta tags:** `format-detection` is declared 4 times, once combined and then as separate `date`, `address` and `telephone` tags.
- **Leftover template comment:** `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` is still in the source. It is harmless, but it adds bytes and shows an unfinished template.
- The truncated source cannot confirm several things, including total size (Gmail clips at about 102KB), whether `role="presentation"` is used on layout tables, and whether there is a text part.

## 4. Personalization & Merge Tokens
No issues found. No unresolved merge tokens such as `%%…%%`, `{{…}}` or `[FIRST_NAME]` appear in the visible source. The only placeholder is the leftover comment noted above. The rest of the HTML was truncated, so it was not checked.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe not found (WARN):** the QA note says the header may not be captured by the AgentMail relay, so this is **unconfirmed**, not a verified defect.
- **List-Unsubscribe-Post not found (WARN):** no RFC 8058 one-click signal was seen. This is also unconfirmed, for the same reason.
- **Authentication-Results not found (WARN):** SPF, DKIM and DMARC status is unknown. The sender domain `mail.crateandbarrel.com` is a dedicated subdomain, which is consistent with proper setup, but there is no evidence either way.
- **Footer:** the visible footer unsubscribe link and physical address are not in the truncated portion, so I can't confirm them.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not assessable. All 102 links went through tracking redirects and were not resolved, and the final landing URLs and any UTM parameters are not visible. No continuity problems are confirmed.

## 7. Recommendations
1. **Add descriptive `alt` text** to all content images (the `image.mail.crateandbarrel.com/.../m/1/*` assets and the Scene7 gift-shop banner). Set `alt=""` on spacers and tracking pixels. This is the highest-priority fix.
2. **Remove `maximum-scale=1`** from the viewport meta, and drop the `*{-webkit-text-size-adjust:none}` rule.
3. **Escape the title:** change it to `Crate &amp; Barrel`. Remove the duplicate `format-detection` tags and the leftover `[IMPUT HERE…]` comment.
4. **Check headers on the raw message** rather than the relay copy. Confirm `List-Unsubscribe`, `List-Unsubscribe-Post: List-Unsubscribe=One-Click` and SPF/DKIM/DMARC alignment. Until then, treat these three warnings as unresolved.
5. **Resolve a sample of the tracked links** with a real redirect-following check, so landing URLs and UTMs can be verified.
6. **Consolidate the five rlcdn pixels** into a single request if the vendor allows it.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

