---
slug: 2026-11-18-our-biggest-sale-of-the-year-starts-now-up-to-50-off-black-friday
type: email
date: 2026-11-18
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Barrel SALE
subject: Our biggest sale of the year starts now! Up to 50% off Black Friday →
tags: [email, score-7, sender/crate-barrel-sale]
---
# Our biggest sale of the year starts now! Up to 50% off Black Friday →
**Score:** 7/10 · **Type:** Email audit · **2026-11-18**
## Full review
## Technical Audit

## 1. Technical Summary
The HTML is a table-based XHTML 1.0 Transitional template with MSO conditionals. The QA run scored it 57% with 0 errors and 3 warnings. The confirmed defects are missing alt text on about 43 images and a viewport meta tag that blocks zoom. The compliance and authentication warnings come from the AgentMail relay and can't be confirmed from this data.

## 2. Link & Tracking Issues
- **Unverified links:** 83 links were skipped as tracking/click-redirect domains and never probed. Destination status, redirect chains, and broken links are unverified, so there is no evidence of a defect and none of correctness.
- **Pixel stacking:** `https://sr.rlcdn.com/448796.gif?s=dbe8da71…&n=1` through `&n=5` is the same LiveRamp pixel fired five times. Each fire is an extra third-party request on open.
- **Identifiers in URLs:** The `s=` value on `sr.rlcdn.com` and the `mi_u=` value on `mi.crateandbarrel.com/p/rp/*.png` and `/p/up/50c75a732e99b42a/o.gif` are per-recipient tokens (the `s=` value looks like a hash). The `mi_u=` and `s=` values begin with the same string (`dbe8da718e29…`), so the two systems share one recipient identifier. Recipient-level identifiers in image URLs are a privacy exposure if the email is forwarded or archived.
- **Pixel with no alt:** `https://dv.crateandbarrel.com/o/fa35e73b-…?mi_cid=…` is a tracking pixel with no alt text. This is a minor issue.

## 3. Rendering & Accessibility
- **Missing alt text:** About 43 images are flagged. The QA output looks truncated, so the real count may be higher. They fall into three groups:
  - **Content images:** about 28 on `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/*.jpg` and `/m/47/bbf6f9d4-….png`. These carry no alt, so with images blocked the content is unreadable and screen readers announce filenames.
  - **Dynamic Movable Ink images:** 7 on `mi.crateandbarrel.com/p/rp/*.png`.
  - **Pixels:** 6 pixel/tracking images. These should carry `alt=""`.
- **Zoom blocked:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />` prevents pinch-zoom. This fails WCAG 1.4.4.
- **Unescaped ampersand:** `<title>Crate & Barrel</title>` has a bare `&` under an XHTML doctype. It should be `&amp;`.
- **Dead CSS rule:** `@media (min-width:768px){img{max-width:600px}}` is overridden by the later `@media (min-width:640px){img{max-width:640px}}`. Both match at 768px and above, so the 600px rule never applies.
- **Leftover template comment:** `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` is left in the source.
- **Duplicate meta tags:** `format-detection` is declared three times, once combined and twice separately. This is redundant, not harmful.
- **Language attribute:** `lang="en"` is present, which is correct.

## 4. Personalization & Merge Tokens
No issues found. No unresolved merge tokens (`{{…}}`, `%%…%%`, `[FIRST_NAME]`) appear in the visible source. The HTML is truncated, so the body was not fully checked.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **`List-Unsubscribe` and `List-Unsubscribe-Post`:** The QA tool did not find either header. Its own note says the AgentMail relay may not capture them, so this is **unconfirmed, not a verified violation**. If the headers are really absent, the email lacks RFC 8058 one-click unsubscribe, which Gmail and Yahoo require of bulk senders.
- **`Authentication-Results`:** The header is not present. SPF, DKIM and DMARC status is **unknown**, and the sending domain (`mail.crateandbarrel.com`) needs checking against the raw message headers.
- **Footer:** The visible in-body unsubscribe link and physical address are not in the truncated source, so they can't be verified.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not verifiable. The 83 click-tracked links were not resolved, so UTM parameters and landing-page destinations are unknown. No evidence of a defect.

## 7. Recommendations
1. Add descriptive `alt` text to all content images on `image.mail.crateandbarrel.com`. Add a fallback alt to the Movable Ink `mi.crateandbarrel.com/p/rp/*.png` images. Use `alt=""` on pixels (`o.gif`, `448796.gif`, `dv.crateandbarrel.com/o/…`).
2. Remove `maximum-scale=1` from the viewport meta tag.
3. Replace `&` with `&amp;` in `<title>`.
4. Collapse the five `sr.rlcdn.com/448796.gif` pixel fires into one.
5. Re-check `List-Unsubscribe`, `List-Unsubscribe-Post` and `Authentication-Results` against the raw `.eml` from a direct (non-relay) inbox. This will confirm or clear the 3 warnings.
6. Run the tracking-link probe with redirect-following enabled to confirm destinations and UTM parameters.
7. Strip the `IMPUT HERE CLIENT FONT…` comment and the dead `max-width:600px` rule from the template.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

