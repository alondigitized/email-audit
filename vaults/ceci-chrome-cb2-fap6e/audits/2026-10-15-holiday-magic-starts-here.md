---
slug: 2026-10-15-holiday-magic-starts-here
type: email
date: 2026-10-15
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Barrel Kids
subject: Holiday magic starts here ✨
tags: [email, score-7, sender/crate-barrel-kids]
---
# Holiday magic starts here ✨
**Score:** 7/10 · **Type:** Email audit · **2026-10-15**
## Full review
## Technical Audit

## 1. Technical Summary
The email is a table-based XHTML 1.0 Transitional template with a mobile breakpoint at 460px. The main confirmed issue is widespread missing `alt` text, on about 24 content images and about 14 tracking pixels. Header-based compliance and authentication checks couldn't be completed (see section 5). The HTML source is truncated, so findings are limited to the visible head and the QA output.

## 2. Link & Tracking Issues
- **Not verifiable:** 78 links were skipped as tracking or click-redirect domains, so destination status, redirect chains and final URLs weren't probed. No broken links are confirmed.
- **Third-party pixels:** `https://sr.rlcdn.com/448796.gif?...&n=1` through `n=5` fire five times. The `rlcdn.com` domain belongs to a third-party data-matching network, and the pixels carry the identifier `s=56aaa2787a67...`. They are not first-party, and they add requests and privacy surface. This is a design observation, not a defect.
- **Pixel proliferation:** `https://mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=...` is repeated 6 times. There are also `.../p/up/50c75a732e99b42a/o.gif` and `https://dv.crateandbarrel.com/o/2cb21a63-...?mi_cid=...&mi_mid=...`. Repeating the same pixel adds no measurement value and increases the chance of image-blocking artifacts.
- **Identifier in URLs:** `mi_u=56aaa2787a67...` is the same value as the rlcdn `s=` parameter, so one recipient identifier is shared across first-party and third-party endpoints.

## 3. Rendering & Accessibility
- **Missing alt text (confirmed, ~38 QA warnings):**
  - Content images on `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/...`, for example `eeb8adae-...jpg`, `34b6fa88-...gif`, `56e15cdf-...jpg`, `faa4865f-...jpg`, and about 15 more.
  - Scene7 assets: `2026%5F0926%5FCBK%5FFamilyHoildayAnthem%5F03.gif`, `...%5F07.gif`, `2026%5F0926%5FCBK%5FClearance%5FSecondaryStory.gif` and `2026%5F1002%5FCBK%5FCozyWinterEdit%5FTertiaryVideo`.
  - The spacer `25%5FMI%5FBottom%5FSpacer%5F40px%5FWhite`.
  - With images blocked, or in a screen reader, linked hero and product images will have no accessible name. Spacers and pixels should carry `alt=""` so they're explicitly decorative.
- **Zoom disabled:** `<meta name="viewport" ... maximum-scale=1>` prevents pinch-zoom on mobile, which is an accessibility problem.
- **Text scaling disabled:** The global rule `*{-webkit-text-size-adjust:none; ... line-height:100%}` blocks user text-size adjustment. `html` and `body` also set `-webkit-text-size-adjust:none` in places and `100%` in others, so the declarations conflict.
- **Invalid markup in the head:**
  - `<title>Crate & Barrel</title>` has an unescaped ampersand in an XHTML doctype and should be `&amp;`.
  - The template placeholder comment `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` was left in the source.
  - `format-detection` is declared three times, with conflicting values.
  - There is a duplicate charset declaration (`http-equiv` and `meta charset`).
  - `<meta charset="utf-8">` isn't self-closed under the XHTML doctype.
- **Global overrides:** `p{margin:0 auto; text-align:center}` and `*{max-height:1000000px}` apply email-wide and could cause unintended centering in client-specific rendering. This is unconfirmed without the body.
- **Good:** `lang="en"` is set and the VML/Office namespaces and MSO conditionals are present.

## 4. Personalization & Merge Tokens
No issues found. No unresolved merge tokens such as `{{...}}`, `%%...%%` or `[FIRST_NAME]` appear in the visible source. The body is truncated, so this is not a full check.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **Unconfirmed, not failures:**
  - `List-Unsubscribe` and `List-Unsubscribe-Post` (RFC 8058) weren't found.
  - `Authentication-Results` wasn't found, so SPF, DKIM and DMARC status is unknown.
  - QA itself notes the AgentMail relay may strip or not capture these headers.
- **Footer not visible:** The visible source doesn't include the physical postal address or the visible unsubscribe link, so CAN-SPAM body requirements can't be confirmed either way.
- **Sender consistency:** `crateandbarrelkids@mail.crateandbarrel.com` is a subdomain of the brand domain. Alignment can't be verified without the headers.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not verifiable. All 78 tracked links were skipped, so landing URLs, UTM parameters and redirect targets weren't inspected. No continuity problems are confirmed.

## 7. Recommendations
1. Add descriptive `alt` text to all content and hero images, and `alt=""` to spacers and tracking pixels (about 38 flagged instances).
2. Remove `maximum-scale=1` from the viewport meta tag, and drop `text-size-adjust:none` from the `*` rule.
3. Change `<title>Crate & Barrel</title>` to `&amp;`, remove the leftover `IMPUT HERE` placeholder comment, and dedupe the `format-detection` and charset meta tags.
4. Collapse the duplicate `mi.crateandbarrel.com` pixel (6 copies) and review whether the 5 `rlcdn.com` pixels are needed.
5. Re-run the audit against raw `.eml` with full headers, and with the untruncated HTML, to confirm `List-Unsubscribe`, `List-Unsubscribe-Post`, SPF/DKIM/DMARC and the footer address and unsubscribe link.
6. Resolve a sample of the 78 tracked links through their redirects to check UTM parameters and landing page alignment.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

