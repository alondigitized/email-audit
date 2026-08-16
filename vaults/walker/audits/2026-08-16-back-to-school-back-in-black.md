---
slug: 2026-08-16-back-to-school-back-in-black
type: email
date: 2026-08-16
persona: walker
score: "5/10"
sender: Shoe Carnival
subject: Back to School? Back in Black🖤
tags: [email, score-5, sender/shoe-carnival]
---
# Back to School? Back in Black🖤
**Score:** 5/10 · **Type:** Email audit · **2026-08-16**
## Full review
## Technical Audit

# Technical Email QA Audit — Shoe Carnival "Back to School? Back in Black" (2026-08-16)

## 1. Technical Summary
Email uses a standard responsive ESP template (Cheetah/Bronto-style breakpoints) served from `email.shoecarnival.com`; automated QA reported a 100% pass rate with only alt-text warnings and unprobed tracking redirects — no hard errors found in the truncated source.

## 2. Link & Tracking Issues
- 27 tracking/redirect links (`*.emltrk.com` domain) were skipped by the automated HTTP probe by design — these are click-tracking redirects, not directly verifiable without a live send. No broken links confirmed, but destination resolution is unverified.
- One tracking pixel URL still contains an unresolved literal merge token: `https://0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]` — the `[UNIQUE]` placeholder was not substituted in this snapshot. Confirm this is expected in the QA test harness and not present in a live send.
- One tracking pixel src (`ieezzy5m.emltrk.com/...?i=72180589&t=utm_campaign=SCA_20260816_black_color_story_AM`) embeds a UTM value directly in the pixel's `t=` param rather than a standard link — not an error, but worth confirming this is the intended tracking schema.

## 3. Rendering & Accessibility
- **4 images missing `alt` text**, per QA:
  - `9521013e-7444-4804-9257-f83e6db7b8bc.jpg` (content image)
  - `a97db5d3-cfac-4b76-923a-ca38510bf3a6.jpg` (content image)
  - `ieezzy5m` tracking pixel
  - `0di86k1v` tracking pixel
  Content images should carry descriptive `alt`; tracking pixels should carry `alt=""` (empty, not absent) to be properly ignored by screen readers.
- Malformed charset meta tag: `<meta content="text/html;" charset="utf-8" />` — missing `http-equiv="Content-Type"`; should read `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`. As written it's a non-standard/invalid meta declaration.
- `<meta content="IE=edge" />` is similarly missing `http-equiv="X-UA-Compatible"`, so it has no effect as an X-UA-Compatible directive.
- Doctype/namespace mismatch: HTML 4.01 Transitional DTD declared, but `<html>` carries `xmlns="http://www.w3.org/1999/xhtml"` (an XHTML attribute) — cosmetically inconsistent, unlikely to break rendering in modern clients but not spec-clean.
- Standard Outlook/Gmail/Yahoo/Apple/Samsung CSS resets (`.ExternalClass`, `mso-*`, autolink fixes, `x-apple-data-detectors`) are present and correctly scoped — no issues found.
- Responsive breakpoints at 660px/450px/320px are defined with mobile show/hide classes — structure looks standard; full-source review would be needed to confirm no orphaned classes, but nothing broken is visible in the truncated markup.

## 4. Personalization & Merge Tokens
- Only one unresolved token detected: `d=[UNIQUE]` in the `0di86k1v` tracking pixel (see Section 2). No other merge-tag placeholders (`{{...}}`, `%%...%%`, etc.) appear in the truncated source.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- No unsubscribe link, physical mailing address, or footer content is present in the truncated HTML — cannot confirm CAN-SPAM footer compliance from the provided source. Recommend reviewing the untruncated footer directly.
- No SMTP/authentication headers (SPF, DKIM, DMARC) were provided in this payload — cannot verify authentication pass/fail. Sending domain `email.shoecarnival.com` is a dedicated ESP subdomain, which is consistent with proper DKIM/SPF delegation practice, but this is not confirmed by header data.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- One UTM value observed: `utm_campaign=SCA_20260816_black_color_story_AM` (embedded in the `ieezzy5m` pixel's `t=` param, not a standard clickthrough link). No standard `utm_source`/`utm_medium`/`utm_content` link parameters were visible in the truncated source to verify against landing pages.
- All 27 outbound links route through `emltrk.com` redirects, so final landing-page UTM/query-string alignment cannot be verified without following the redirects live.

## 7. Recommendations
1. Fix the malformed `<meta charset>` and `<meta IE=edge>` tags (add missing `http-equiv` attributes).
2. Add descriptive `alt` text to the two content images; set `alt=""` on the two tracking pixels.
3. Confirm the `d=[UNIQUE]` token in the `0di86k1v` pixel resolves correctly in production sends (not just QA snapshot).
4. Request the full (untruncated) HTML to verify CAN-SPAM footer (unsubscribe link + physical address) and confirm SPF/DKIM/DMARC pass via raw headers — not assessable from this payload.
5. Spot-check a sample of the 27 `emltrk.com` redirect links live to confirm they resolve to the intended landing pages with matching UTM parameters.
## Recent history

- [[2026-08-16-new-members-only-colors]] — 4/10 (2026-08-16)
- [[2026-08-16-don-t-wait-last-day-for-bogo-50-off]] — 3/10 (2026-08-16)
- [[2026-08-16-top-running-styles-on-sale-now]] — 5/10 (2026-08-16)

