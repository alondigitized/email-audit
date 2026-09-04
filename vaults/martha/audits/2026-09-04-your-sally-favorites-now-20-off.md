---
slug: 2026-09-04-your-sally-favorites-now-20-off
type: email
date: 2026-09-04
persona: martha
score: "4/10"
sender: Sally Beauty
subject: Your Sally favorites, now 20% off
tags: [email, score-4, sender/sally-beauty]
---
# Your Sally favorites, now 20% off
**Score:** 4/10 · **Type:** Email audit · **2026-09-04**
## Full review
## Technical Audit

## 1. Technical Summary
Single technically-broken element (HTTP-only tracking pixel) plus several missing-alt tracking pixels; the truncated HTML sample does not include the unsubscribe footer, `List-Unsubscribe` headers, or primary CTA links, so compliance and continuity checks below are marked unverifiable rather than pass/fail.

## 2. Link & Tracking Issues
- **51 tracking/click-redirect links were skipped** by the automated HTTP probe (QA INFO note) — these are redirect-domain links (e.g., Evergage/CJ/Sally affiliate wrappers) that couldn't be validated for 200-status resolution. Not a confirmed defect, but destination validity is unconfirmed.
- **Non-HTTPS image source**: `http://login.dotomi.com/ucm/UCMController?dtm_com=2&dtm_cid=2990&dtm_cmagic=f6b5f8&dtm_fid=103&dtm_format=6&cli_promo_id` — served over plain HTTP. Most mail clients (Gmail, Outlook, Apple Mail) block or proxy-rewrite non-HTTPS image requests, so this dotomi retargeting pixel will likely fail to fire for a large share of opens.
- Evergage tracking pixels (`summary.png` ×4) and mon-trk.com pixel and myvisualiq.net impression pixel are HTTPS — no issue there.

## 3. Rendering & Accessibility
- **7 images missing `alt` text** (QA WARN, all tracking/analytics pixels, not content images):
  - `summary.png` (Evergage, ×4, campaign `BNWsT/ryZG1`, positions 1–4)
  - `003aZ00000s0I5yQAE` (mon-trk.com pixel)
  - `impression_pixel` (myvisualiq.net)
  - `UCMController` (dotomi.com)
  Since these are 1×1 tracking pixels, missing alt has no user-facing screen-reader impact, but flagging for template hygiene (empty `alt=""` is the correct pattern for decorative/tracking images, vs. omitting the attribute entirely).
- `@font-face` declarations for Open Sans reference `fonts.gstatic.com` with `local()` fallbacks first — standard, no issue. Note actual body font is later set to `'Founders Grotesk', Helvetica, sans-serif` in the `a` selector, while only Open Sans is declared via `@font-face` — Founders Grotesk has no `@font-face`/web-safe fallback defined in the visible CSS, so it will silently fall back to Helvetica in most clients. Confirm this is intentional (i.e., Founders Grotesk is meant to load elsewhere, or Helvetica fallback is accepted).
- `-ms-interpolation-mode:bicubic` and other legacy Outlook/IE hacks present — expected for this template style, no issue.

## 4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `{{...}}`, `%%...%%`, `[FIRSTNAME]`) found in the visible source.
- The Evergage pixel URLs embed `userId=martha.st` in plaintext query strings (`https://sallyholdings.us-4.evergage.com/api/dataset/sallybeauty_prod/campaign/BNWsT/ryZG1/{1-4}/summary.png?userId=martha.st`). This is a personalization identifier exposed in an unencrypted, cacheable image URL — flag for review since it may constitute a PII-in-URL logging/referrer-leak concern depending on data classification policy.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **Unable to verify**: the truncated HTML sample cuts off before any footer/unsubscribe block, physical mailing address, or `List-Unsubscribe`/`List-Unsubscribe-Post` headers. None of these are visible in the provided source, so pass/fail cannot be confirmed from this excerpt — request the full HTML/header set to complete this section.
- Sending domain `em.sallybeauty.com` is a dedicated subdomain (common ESP pattern for SPF/DKIM alignment), which is a good sign but SPF/DKIM/DMARC results were not included in the QA data and can't be confirmed here.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- **Unable to verify**: no CTA/destination URLs (non-tracking-redirect) were included in the visible source or QA output, so UTM parameter presence/consistency and landing-page alignment cannot be assessed from this excerpt.

## 7. Recommendations
1. Change the dotomi.com pixel to `https://` (or drop it if HTTPS isn't supported by that vendor) — it's currently non-functional in HTTPS-enforcing clients.
2. Add `alt=""` to the 7 tracking pixels flagged by QA to follow decorative-image convention (low priority, cosmetic/hygiene only).
3. Confirm whether `userId=martha.st` (or equivalent identifier pattern) in Evergage pixel URLs is an approved practice under current data-handling policy; consider hashing or moving to a POST-based beacon if not.
4. Verify Founders Grotesk has a proper `@font-face`/CDN declaration elsewhere in the full template — currently only Open Sans is declared, so Founders Grotesk may be silently falling back to Helvetica for all recipients.
5. Re-run link validation against the full (untruncated) HTML to confirm the 51 skipped tracking links resolve correctly, and to check unsubscribe headers, footer compliance, and UTM/landing-page alignment, none of which were present in this excerpt.
## Recent history

- [[2026-08-19-your-fall-beauty-routine-starts-here]] — 5/10 (2026-08-19)
- [[2026-08-19-summer-is-slipping-away-ceada132-cbea-4818-9fec-]] — 5/10 (2026-08-19)
- [[2026-08-17-more-beauty-more-savings]] — 4/10 (2026-08-17)

