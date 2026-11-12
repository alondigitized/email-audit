---
slug: 2026-11-12-dinnerware-serveware-more-up-to-30-off-2x-rewards
type: email
date: 2026-11-12
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Barrel SALE
subject: Dinnerware, serveware & more up to 30% off + 2x Rewards →
tags: [email, score-7, sender/crate-barrel-sale]
---
# Dinnerware, serveware & more up to 30% off + 2x Rewards →
**Score:** 7/10 · **Type:** Email audit · **2026-11-12**
## Full review
## Technical Audit

## 1. Technical Summary
The HTML is a table-based XHTML 1.0 Transitional email with `lang="en"`, VML/MSO fallbacks and a 460px mobile breakpoint. The automated QA found no hard failures (57% pass, 0 issues, 3 warnings), but ~44 images have no `alt` attribute. The header-based compliance and auth checks were inconclusive, and the 85 tracking links were not probed.

## 2. Link & Tracking Issues
- **Unverified destinations:** QA skipped 85 tracking/click-redirect links, so none of the destination URLs, redirect chains or status codes were validated.
- **Third-party pixels:** Five `https://sr.rlcdn.com/448796.gif?s=…&n=1` to `n=5` pixels (LiveRamp) sit alongside the first-party pixels `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif` and `dv.crateandbarrel.com/o/c9f2474c-…`. This is a lot of tracking for one email. Several carry a per-recipient `mi_u=56aaa278…` token in the query string.
- **Inconsistent image hosts:** One image is served from `s7d5.scene7.com` (`…2026%5F0920%5FCB%5FThanksgivingGuide%5FTertiary%2D…`) while the rest use `image.mail.crateandbarrel.com`. The filename dates from 2026-09-20, so it looks like a reused asset.

## 3. Rendering & Accessibility
- **Missing `alt` (QA-confirmed, 44 images):**
  - 29 are content images on `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/…` (for example `bf3053a9-…jpg`, `d21416db-…gif`, `810221f7-…jpg`).
  - 7 are `mi.crateandbarrel.com/p/rp/*.png`. These look like dynamically rendered content blocks, which is my inference from the URL pattern.
  - 1 is the `scene7.com` image.
  - The remaining 7 are tracking pixels (`rlcdn` ×5, `o.gif`, `dv.…`). They should carry `alt=""` explicitly.
  - With images blocked, screen readers and some clients will read filenames or nothing for these.
- **Zoom blocked:** `<meta name="viewport" content="… maximum-scale=1">` disables pinch-zoom, a WCAG 1.4.4 concern.
- **Text resizing disabled:** The global rule `*{-webkit-text-size-adjust:none; … line-height:100%}` stops user text scaling on iOS. It also forces 100% line-height on every element, which hurts legibility.
- **Invalid markup:** `<title>Crate & Barrel</title>` has an unescaped `&` under an XHTML doctype. It is tolerated by clients but invalid.
- **Duplicates and leftovers:**
  - The `Content-Type` and `meta charset` tags are both declared.
  - `format-detection` appears three times, with conflicting values (`telephone=no,address=no,email=no,date=no,url=no`, then `date=no`, `address=no` and `telephone=no`).
  - The template comment `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` and an empty `<!---->` are left in the shipped source.
- **Unusual breakpoint:** The mobile breakpoint is `max-width:460px`, and `.mobile{width:460px!important}` fixes a width wider than many small phone viewports (360–430px). Whether this causes horizontal scroll can't be confirmed from the truncated source or from QA.

## 4. Personalization & Merge Tokens
No issues found. No unrendered merge tokens (`{{…}}`, `%%…%%`, `[FIRSTNAME]`) are visible in the truncated source or in the QA output. Coverage of the full body is limited.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **`List-Unsubscribe` and `List-Unsubscribe-Post` (RFC 8058):** Both are reported missing. QA notes the AgentMail relay may strip them, so this is **unconfirmed**, not a verified sender defect. This matters for Gmail/Yahoo bulk-sender requirements, so verify against raw headers from a direct-delivery copy.
- **`Authentication-Results`:** Not captured, so SPF/DKIM/DMARC alignment is unknown. The envelope looks aligned (`crateandbarrel@mail.crateandbarrel.com`), but this is unverified.
- **Footer, unsubscribe link and physical address:** The source is truncated before the footer, so these could not be checked.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not assessable. All 85 links are behind click-tracking redirects that QA did not resolve, and the truncated source doesn't show final URLs or UTM parameters. No continuity problems are confirmed, and none are ruled out.

## 7. Recommendations
1. **Add `alt` to all 44 flagged images.** Use descriptive text on content images and `alt=""` on the tracking pixels (`rlcdn`, `o.gif`, `dv.…`). For the Movable Ink blocks (`mi.crateandbarrel.com/p/rp/…`), set alt text in the template if the platform allows.
2. **Remove `maximum-scale=1` from the viewport meta tag**, and drop `text-size-adjust:none` from the universal selector.
3. **Verify the headers on the raw message.** Check `List-Unsubscribe`, `List-Unsubscribe-Post` and `Authentication-Results` outside the relay before treating them as defects.
4. **Resolve a sample of the 85 tracking links.** Follow redirects with a browser-like client and confirm the landing pages, UTM parameters and promo (30% off / 2x Rewards) match.
5. **Clean the template:** escape `&` in `<title>`, remove the duplicate charset and `format-detection` metas, and strip the `IMPUT HERE` placeholder comment.
6. **Review the five `rlcdn` pixels** (`n=1` to `n=5`) for redundancy and privacy impact.
7. **Test the 460px breakpoint and fixed `.mobile` width** on 360–414px devices.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

