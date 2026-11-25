---
slug: 2026-11-25-new-items-added-up-to-50-off-black-friday-deals
type: email
date: 2026-11-25
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Barrel BLACK FRIDAY
subject: NEW ITEMS ADDED! Up to 50% off Black Friday deals!
tags: [email, score-7, sender/crate-barrel-black-friday]
---
# NEW ITEMS ADDED! Up to 50% off Black Friday deals!
**Score:** 7/10 · **Type:** Email audit · **2026-11-25**
## Full review
## Technical Audit

# Technical Audit: Crate & Barrel "NEW ITEMS ADDED! Up to 50% off Black Friday deals!"

## 1. Technical Summary
The email is table-based XHTML 1.0 Transitional with VML/MSO fallbacks and a mobile breakpoint at 460px. The QA run scored 57% with 0 errors and 3 warnings. The main confirmed defects are widespread missing `alt` attributes (43 flagged images) and a few markup and accessibility flaws. The compliance and authentication warnings are probably relay artifacts, so they are unverified.

## 2. Link & Tracking Issues
- **87 links were not probed.** All of them go through tracking and click-redirect domains, so QA never checked their destinations, status codes or redirect chains. Landing-page health is unverified.
- **Many tracking pixels fire on open.** Observed in the QA output:
  - `https://sr.rlcdn.com/448796.gif?s=dbe8da71…&n=1` through `n=5`: five LiveRamp pixel calls.
  - `https://mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif?mi_u=dbe8da71…`
  - `https://dv.crateandbarrel.com/o/072eb3a9-…?mi_cid=…&mi_mid=…`
- **Recipient identifiers appear in image and pixel URLs.** The same hash (`dbe8da718e2997cc…`) is in `mi_u=` on `mi.crateandbarrel.com` and in `s=` on the third-party `rlcdn.com` domain. This is a privacy and deliverability consideration, since third-party pixels are a common trigger for image blocking and filtering. It is not a functional bug.
- **No broken links were confirmed.** None could be, because of the skipped probes.

## 3. Rendering & Accessibility
- **43 images have no `alt` attribute at all.**
  - 36 are content or CDN images:
    - 28 under `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/m/1/…` (jpg, gif and png), plus one under `/m/47/bbf6f9d4-….png`.
    - 7 `mi.crateandbarrel.com/p/rp/*.png` images (e.g. `560d850e7e517ede.png`, `789e7381ff44be74.png`).
    - `971aa10f-db11-4b79-b1d6-d95ad4507a7c.jpg`.
  - 7 are tracking pixels (the `rlcdn.com` gifs, `o.gif` and the `dv.` pixel).
  - With images blocked, or in a screen reader, these content images carry no text. The pixels should still use `alt=""` rather than omit the attribute.
- **Animated GIFs without alt.** Several of the content images are `.gif` (`07077988-…`, `3cf6e05b-…`, `c1ce374e-…` and others). If they carry the offer text, that text is lost without images.
- **Zoom is disabled.** `<meta name="viewport" content="… initial-scale=1, maximum-scale=1" />` blocks pinch-zoom on mobile, which is a WCAG 1.4.4 concern.
- **Invalid XHTML.** `<title>Crate & Barrel</title>` has an unescaped `&` under an XHTML 1.0 doctype. The `<title>` is also generic and does not match the subject line.
- **Leftover template placeholder.** The source contains `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->`. It is harmless but sloppy, and it adds weight.
- **Redundant meta tags.** `format-detection` is declared three or more times (`telephone=no,address=no,email=no,date=no,url=no`, then `date=no`, `address=no`, `telephone=no`). This is cleanup only.
- **Positives.** `lang="en"` is set, and the MSO/VML namespaces, `mso-table-lspace` resets and `x-apple-disable-message-reformatting` are all present.

## 4. Personalization & Merge Tokens
No unrendered merge tokens (`{{…}}`, `%%…%%`, `[FIRST_NAME]`) appear in the truncated source or in the QA findings. The only per-recipient values seen are the `mi_u`, `mi_cid` and `mi_mid` identifiers. The source was truncated, so the body and footer were not fully inspected.

## 5. Compliance
- **`List-Unsubscribe` not found** and **`List-Unsubscribe-Post` (RFC 8058) not found.** Both are `[WARN]`, and the QA tool itself says the AgentMail relay may not capture them. This is unconfirmed. Large senders like this one almost certainly include these headers, so check the raw message headers before treating it as a real gap.
- **`Authentication-Results` not found,** so SPF, DKIM and DMARC status is unknown. The tool attributes this to the relay. The From domain `mail.crateandbarrel.com` is a dedicated sending subdomain, which is a good sign but not proof.
- **Footer not verified.** The truncated HTML does not show the in-body unsubscribe link or the physical postal address required by CAN-SPAM. They are likely in the cut-off portion, so this was neither confirmed nor refuted.

## 6. Email-to-Site Continuity
UTM parameters and landing-page alignment **cannot be assessed.** All 87 links are redirect-wrapped and were skipped, so the final destination URLs and any `utm_*` values are not visible. The "NEW ITEMS ADDED" and "up to 50% off" claims could not be matched to a landing page.

## 7. Recommendations
1. **Add `alt` text to all 36 content images.** The 7 `mi.crateandbarrel.com/p/rp/*.png` images and the animated GIFs matter most if they carry product or offer text. Use `alt=""` on the 7 tracking pixels.
2. **Remove `maximum-scale=1`** from the viewport meta tag.
3. **Escape the title** as `Crate &amp; Barrel` and make it descriptive.
4. **Clean the template.** Remove the `IMPUT HERE CLIENT FONT IMPORT` comment and the duplicate `format-detection` metas.
5. **Reduce third-party pixels.** Review the five `sr.rlcdn.com/448796.gif` calls, since a single call per recipient is usually enough.
6. **Verify the headers on the raw message.** Check `List-Unsubscribe`, `List-Unsubscribe-Post`, and SPF/DKIM/DMARC in `Authentication-Results`. The relay is the likely reason they are missing.
7. **Resolve the tracking redirects** in a follow-up check to confirm destinations return 200 and carry consistent UTMs.
8. **Fix the QA tooling.** Fetch the full, untruncated HTML to confirm the footer, and make the QA pipeline distinguish decorative pixels from content images so alt-text warnings are less noisy.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

