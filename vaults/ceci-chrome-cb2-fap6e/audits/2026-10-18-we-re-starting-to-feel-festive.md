---
slug: 2026-10-18-we-re-starting-to-feel-festive
type: email
date: 2026-10-18
persona: ceci-chrome-cb2-fap6e
score: "6/10"
sender: Crate & Barrel Kids
subject: We’re starting to feel festive 🎄🎅🏻🦌☃️❄️
tags: [email, score-6, sender/crate-barrel-kids]
---
# We’re starting to feel festive 🎄🎅🏻🦌☃️❄️
**Score:** 6/10 · **Type:** Email audit · **2026-10-18**
## Full review
## Technical Audit

## 1. Technical Summary
The email has no confirmed hard failures, but it has widespread missing image `alt` attributes (50+ images) and several accessibility-hostile CSS settings. Compliance and authentication could not be verified because the relay didn't capture the headers, and the HTML source was truncated, so the footer and link targets were not inspected.

## 2. Link & Tracking Issues
- **Link health is unverified.** 93 links were skipped as "Tracking/click-redirect domains", so none were HTTP-probed. Destination status, redirect chains and UTM parameters are all unconfirmed.
- **Five identical LiveRamp pixels.** `https://sr.rlcdn.com/448796.gif?...&n=1` through `&n=5` are the same third-party pixel repeated with only `n` changing. They add requests and third-party exposure, and none has `alt`.
- **Movable Ink pixels and images.** `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=...` appears 6 times, plus `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` and `dv.crateandbarrel.com/o/3a0cf74f-...?mi_cid=...&mi_mid=...`. The `mi_u` value is a per-recipient identifier and was substituted correctly, not left as a raw token.

## 3. Rendering & Accessibility
- **Missing alt text (the main finding).** About 55 `<img>` elements are flagged, most from `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/*.jpg|gif|png`. Without `alt`, screen readers announce filenames, and with images blocked the email shows nothing.
  - The animated GIF `CK%5FH26%5FKidsHolidayMagic%5F24x13%5FEdit4.gif` is also flagged.
  - Spacers need `alt=""` rather than no attribute: `25%5FMI%5FBottom%5FSpacer%5F40px%5FWhite` and `042025%5FCBK%5FKidsBeds1%5FRule%5FSpacer%5F40px` (twice).
  - The tracking pixels (`o.gif`, `448796.gif`, `f3c0d22992a01946.png`) should also carry `alt=""` plus `width="1" height="1"`.
  - I can't tell whether some flagged images already have `alt=""`. If the checker counts empty `alt` as missing, the decorative-image count is overstated.
- **Zoom blocked.** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />` stops pinch-zoom.
- **Text resize disabled.** `*{-webkit-text-size-adjust:none; ... max-height:1000000px}` and `html { -webkit-text-size-adjust:none; }` disable iOS text scaling. The global `*{line-height:100%}` also forces tight line spacing.
- **Conflicting image max-width rules.** `@media (min-width:768px){img{max-width:600px}}` is followed by `@media (min-width:640px){img{max-width:640px}}`. The later rule wins at equal specificity, so the 600px cap never applies at 768px and up.
- **Markup hygiene (low severity):**
  - `<title>Crate & Barrel</title>` has an unescaped `&`, which is invalid XHTML, and the title is generic.
  - There are duplicate `<meta charset>` and Content-Type tags, and four overlapping `format-detection` tags.
  - A leftover template comment reads `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->`.
- `lang="en"` and the VML/Office namespaces are present.

## 4. Personalization & Merge Tokens
No issues found in the visible source. No unrendered `{{ }}`, `%%…%%` or `[FIRSTNAME]`-style tokens appear in the truncated HTML. The footer and later sections were not visible, so this is not a full check.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe and List-Unsubscribe-Post not found.** The QA tool says the AgentMail relay may be stripping them, so I can't confirm they are absent at the sender. If they are absent, the email fails Gmail/Yahoo bulk-sender one-click unsubscribe requirements (RFC 8058).
- **Authentication-Results not found.** SPF, DKIM and DMARC status is unknown. The From domain `mail.crateandbarrel.com` is consistent with the image host `image.mail.crateandbarrel.com`, but that doesn't prove alignment.
- **Footer not inspected.** The unsubscribe link and physical postal address are in the truncated portion, so I can't verify them.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not assessable. The 93 tracked links were skipped and the visible source doesn't show final URLs or UTM parameters.

## 7. Recommendations
1. Add meaningful `alt` text to every content image. Use `alt=""` on spacers and add `alt=""` with `width="1" height="1"` on the tracking pixels.
2. Remove `maximum-scale=1` from the viewport meta. Replace `-webkit-text-size-adjust:none` with `100%` and drop the global `line-height:100%`.
3. Fix the `max-width` media query order or specificity so the 600px and 640px caps behave as intended.
4. Re-run QA on the raw `.eml`, not the relay copy, to confirm `List-Unsubscribe`, `List-Unsubscribe-Post` and `Authentication-Results`.
5. Re-run QA on the full HTML and follow one redirect per tracked link to confirm landing pages and UTM parameters.
6. Clean up the markup: escape `&` in `<title>`, dedupe the meta tags, and remove the template placeholder comment.
7. Fix the QA summary. It reports "0 issue(s), 3 warning(s)" while listing 55+ warnings. Counting alt-text warnings under "INFO" understates their severity.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

