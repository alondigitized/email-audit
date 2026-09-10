---
slug: 2026-09-10-fruit-of-the-loom-x-zara--mei-tag-fast-fashion-fap6e
type: email
date: 2026-09-10
persona: mei-tag-fast-fashion-fap6e
score: "5/10"
sender: Zara
subject: FRUIT OF THE LOOM™ x ZARA
tags: [email, score-5, sender/zara]
---
# FRUIT OF THE LOOM™ x ZARA
**Score:** 5/10 · **Type:** Email audit · **2026-09-10**
## Full review
## Technical Audit

# Technical Audit: "FRUIT OF THE LOOM™ x ZARA" Email

## 1. Technical Summary
The email is a standard Responsys-generated HTML table layout with functional mobile media queries, but it fails on core deliverability/compliance signals (no unsubscribe headers, empty plain-text part) and has widespread accessibility gaps (24 images with no alt text).

## 2. Link & Tracking Issues
- Tracking pixel present with obfuscated query params: `https://news.zara.com/pub/as?_ri_=X0Gzc2X%3DCQjkPkSTRQG0MyvTLn7ewvinK5yzczdzchCjOzddAEHzcjHzbgTsN1GENwKzdkjAWkpaKKOlA6hs` — standard Responsys `_ri_`/open-tracking pixel, functioning as expected.
- QA reports 12 material links probed, 4 skipped (footer/social/utility, deprioritized by design) — no broken or malformed hrefs flagged in the probed set.
- Full link inventory wasn't visible in the truncated source provided, so destination-URL validation is incomplete; recommend re-running with the untruncated HTML to confirm no dead links among the skipped footer/social set.

## 3. Rendering & Accessibility
- `<meta name="viewport" ... user-scalable=no />` disables pinch-to-zoom — a WCAG 2.1 (1.4.4) failure and accessibility anti-pattern for users with low vision.
- **24 images missing `alt` text** (img_01b.jpg through img_18.jpg, latredes142.jpg, rrss1b–rrss6b.jpg, download_en_b.jpg, and the tracking pixel `as`). Screen readers will announce nothing or fall back to filenames for all product imagery and social icons.
- Hidden-preheader technique uses a long run of `&#8199;&#847;` (zero-width space/combining-grapheme-joiner) characters — functional but bloats the DOM; screen readers may vocalize stray whitespace on some clients.
- Mobile responsive rules (`.width90`, `.fullwidth`, `.banner`, etc.) are present and scoped correctly under `@media (max-width: 640px)`, no issues found there.
- MSO/Outlook conditional handling (`<!--[if !mso 9]><!-->`, `mso-table-lspace/rspace`) is present and correctly structured.

## 4. Personalization & Merge Tokens
No merge tokens (e.g., `${FirstName}`, `%%FIELD%%`) are visible in the provided HTML excerpt. No issues found in the visible portion — note the source was truncated, so this section can't be fully confirmed.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **[FAIL-equivalent] No physical mailing address detected** — CAN-SPAM requires a valid physical postal address in every commercial email.
- **List-Unsubscribe header not found** — required for one-click unsubscribe support in Gmail/Yahoo bulk sender rules; may be present in the raw SMTP headers but not captured by the relay.
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click (POST) unsubscribe unsupported without it.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status cannot be verified via this relay; recommend checking directly at the sending MTA (news.zara.com / Responsys) rather than treating this as a confirmed auth failure.
- An in-body unsubscribe link is confirmed present per QA notes ("an unsubscribe link is always included"), so the HTML-level unsubscribe mechanism itself is not missing — the gap is specifically at the header/transport level.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Not verifiable from the truncated source — no CTA `href` values were included in the excerpt. Recommend re-checking with full HTML to confirm UTM parameters are present and that landing pages match the campaign code (`2026_09_10_Norte_all_fruitoftheloom_10_09`).

## 7. Recommendations
1. Add `alt` attributes to all 24 flagged images (empty `alt=""` is acceptable for purely decorative assets like social icons; descriptive alt text for product imagery).
2. Remove `user-scalable=no` (and `maximum-scale=1.0`) from the viewport meta tag to restore pinch-to-zoom.
3. Generate a non-empty plain-text MIME part — current fallback is 0 chars, which hurts deliverability and violates accessibility/plain-text best practices.
4. Confirm List-Unsubscribe and List-Unsubscribe-Post headers are set at the MTA level and pass through the send pipeline (may be a relay-capture artifact rather than a true absence — verify against raw headers at the source).
5. Add a visible physical mailing address to the footer per CAN-SPAM §7704(a)(5).
6. Verify SPF/DKIM/DMARC alignment directly against the sending domain (news.zara.com) since Authentication-Results wasn't captured by this relay.
7. Re-run link and UTM checks against the full (non-truncated) HTML to close out sections 2 and 6.
## Recent history

- [[2026-09-10-in-focus-the-new-classics--mei-tag-fast-fashion-fap6e]] — 5/10 (2026-09-10)
- [[2026-09-09-game-day-looks-for-your-highlight-reel--mei-tag-fast-fashion-fap6e]] — 5/10 (2026-09-09)
- [[2026-09-09-this-is-it-up-to-50-off-sitewide--mei-tag-fast-fashion-fap6e]] — 5/10 (2026-09-09)

