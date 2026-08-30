---
slug: 2026-08-30-kids-this-week-s-arrivals--mei-tag-fast-fashion-fap6e
type: email
date: 2026-08-30
persona: mei-tag-fast-fashion-fap6e
score: "3/10"
sender: Zara
subject: Kids | This week’s arrivals
tags: [email, score-3, sender/zara]
---
# Kids | This week’s arrivals
**Score:** 3/10 · **Type:** Email audit · **2026-08-30**
## Full review
## Technical Audit

1. Technical Summary
Zara "Kids | This week's arrivals" email fails plain-text fallback and lacks confirmable unsubscribe/authentication headers; 12 material images lack alt text.

2. Link & Tracking Issues
No issues found in the truncated HTML source provided — link structure not visible in this excerpt. QA probing covered 12 of 31 total links (19 skipped per deprioritization rules); no broken/malformed URLs flagged.

3. Rendering & Accessibility
- **[FAIL-adjacent] 12 images missing alt text**, including `img_01.jpg` through `img_11.jpg` (src pattern `https://news.zara.com/assets/responsysimages/industria007/contentlibrary/campaigns/2026/08.agosto/2026_08_30_norte_kids_...`) and the open/tracking pixel `as` (`https://news.zara.com/pub/as?_ri_=...`). Missing alt text degrades screen-reader accessibility and leaves nothing visible if images are blocked.
- Preheader implementation uses hidden span with repeated `&#8199;&#847;` character-code padding — functional but bloats markup.
- MSO conditional (`<!--[if !mso 9]><!-->`) and `mso-table-lspace/rspace` resets present for Outlook compatibility — no issues found there.
- Responsive breakpoints defined via `@media (max-width: 640px)` with standard mobile utility classes — no issues found.

4. Personalization & Merge Tokens
No merge tokens or personalization variables visible in the truncated source. No issues found based on available evidence.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **[WARN] List-Unsubscribe header not found** — may be a capture limitation of the AgentMail relay rather than absence in the original send; cannot confirm compliance either way from this data.
- **[WARN] List-Unsubscribe-Post header not found (RFC 8058)** — one-click unsubscribe support unconfirmed.
- **[WARN] No physical mailing address detected** in the scanned content — CAN-SPAM requires one; not present in the truncated HTML excerpt reviewed (may reside in the untruncated footer, not confirmable here).
- **[WARN] Authentication-Results header not found** — SPF/DKIM verification status unknown via this relay.

6. Email-to-Site Continuity (UTM params, landing page alignment)
Not verifiable from the truncated HTML — no destination URLs with UTM parameters were present in the excerpt provided. No issues found based on available evidence.

7. Recommendations
- Add descriptive `alt` attributes to all 11 content images (`img_01`–`img_11`) at minimum for the primary product/category CTAs; the tracking pixel (`as`) can use `alt=""` as it's decorative.
- Provide a non-empty plain-text MIME part — current fallback is 0 chars, which hurts deliverability/spam scoring and accessibility for text-only clients.
- Re-verify List-Unsubscribe / List-Unsubscribe-Post and Authentication-Results (SPF/DKIM) directly against raw SMTP headers outside the AgentMail relay, since these WARNs may be relay-capture artifacts rather than actual sender omissions.
- Confirm a physical mailing address exists in the full (non-truncated) footer to close out CAN-SPAM compliance verification.
## Recent history

- [[2026-08-29-20-off-for-members-starts-now--mei-tag-fast-fashion-fap6e]] — 4/10 (2026-08-29)
- [[2026-08-28-don-t-sweat-these-sets--mei-tag-fast-fashion-fap6e]] — 5/10 (2026-08-28)
- [[2026-08-28-woman-this-week-s-selection--mei-tag-fast-fashion-fap6e]] — 4/10 (2026-08-28)

