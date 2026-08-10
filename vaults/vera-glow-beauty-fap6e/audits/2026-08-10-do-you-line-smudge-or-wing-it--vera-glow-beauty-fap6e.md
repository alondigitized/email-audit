---
slug: 2026-08-10-do-you-line-smudge-or-wing-it--vera-glow-beauty-fap6e
type: email
date: 2026-08-10
persona: vera-glow-beauty-fap6e
score: "5/10"
sender: ILIA
subject: Do you line, smudge, or wing it?
tags: [email, score-5, sender/ilia]
---
# Do you line, smudge, or wing it?
**Score:** 5/10 · **Type:** Email audit · **2026-08-10**
## Full review
## Technical Audit

## 1. Technical Summary
This is a Klaviyo-built HTML email (MJML/Klaviyo markup) from ILIA Beauty with standard MSO conditionals and responsive CSS; automated QA passed 57% of checks with 0 hard issues and 3 warnings, concentrated in compliance headers and missing alt text.

## 2. Link & Tracking Issues
- No broken/malformed links identified in the visible source.
- QA probing coverage was partial: 12 material links identified, only 2 probed, 10 deprioritized (footer/utility/social) — full click-through validation of all CTAs was not performed. Treat unprobed links as unverified.
- Tracked redirect link present: `https://trk.send.iliabeauty.com/o/01KZP9G5ZBZ2AB4BSX79RSSKMM` (Klaviyo open/click tracking pixel/link) — functioning as expected for this ESP pattern.

## 3. Rendering & Accessibility
- **Missing alt text (confirmed via QA):**
  - `https://d3k81ch9hvuctc.cloudfront.net/company/SguDsz/images/c9cefca7-6b18-443a-896b-9e98ec5d842a.jpeg`
  - `https://trk.send.iliabeauty.com/o/01KZP9G5ZBZ2AB4BSX79RSSKMM` (this is the tracking pixel — missing alt is low-impact but the first image is likely content-bearing hero/product art and should have descriptive alt text for screen readers and image-blocked clients).
- MSO conditional comments (`<!--[if mso]>`, `<!--[if lte mso 11]>`) and Outlook-specific fixes (`mso-table-lspace`, `.mj-outlook-group-fix`) are present, indicating Outlook rendering was accounted for.
- Preheader text block present and correctly hidden (`display:none;font-size:1px;color:#ffffff;...`) with zero-width-space padding — standard, no issues.
- Responsive breakpoints defined at `480px` and `min-width:480px` via media queries — mobile stacking (`kl-row.colstack`) is implemented.
- Custom web fonts loaded via `@import url(https://static-forms.klaviyo.com/fonts/api/v1/SguDsz/custom_fonts.css)` and Google Fonts — `@import` in `<style>` is not reliably supported by Outlook/Windows Mail and some webmail clients strip `<style>` blocks entirely (e.g., Gmail in some contexts); no fallback web-safe stack confirmed beyond `Helvetica, Arial` for headings, which is an adequate fallback.

## 4. Personalization & Merge Tokens
- No Klaviyo merge tags (e.g., `{{ first_name }}`, `{% ... %}`) are visible in the truncated source provided.
- No issues found — but note the source is truncated, so body content (where personalization tags most often live) was not fully reviewed.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** (QA WARN) — may be a capture artifact of the AgentMail relay rather than a true absence, but cannot be confirmed as present from available data.
- **List-Unsubscribe-Post header not found** (QA WARN) — RFC 8058 one-click unsubscribe support is unconfirmed; if genuinely absent, this affects Gmail/Yahoo bulk sender requirements.
- **Authentication-Results header not found** (QA WARN) — SPF/DKIM pass/fail status could not be verified via the AgentMail relay; this is a visibility gap, not a confirmed authentication failure.
- Unsubscribe link presence: QA notes "an unsubscribe link is always included" in its probing methodology, implying one exists in the footer, but it was not one of the 2 probed links, so its destination/validity is unconfirmed.
- From address `info@iliabeauty.com` and subject line are present and non-deceptive on their face.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- No CTA destination URLs with UTM parameters were visible in the truncated source, so UTM presence/consistency (e.g., `utm_source`, `utm_medium`, `utm_campaign`) cannot be confirmed either way.
- Cannot assess landing page alignment without visible destination URLs.

## 7. Recommendations
1. Add descriptive `alt` text to the CloudFront hero/content image (`c9cefca7-6b18-443a-896b-9e98ec5d842a.jpeg`); leave the tracking pixel's alt empty/decorative (`alt=""`) rather than unset, which is the accessibility-correct pattern for tracking pixels.
2. Confirm directly with the ESP (Klaviyo) or via raw SMTP headers (outside the AgentMail relay) whether `List-Unsubscribe` and `List-Unsubscribe-Post` (RFC 8058) headers are actually being sent — required for Gmail/Yahoo bulk sender compliance as of their 2024 sender guidelines. Do not treat the QA WARN as proof of absence given the known relay-capture limitation.
3. Similarly verify SPF/DKIM/DMARC pass status via a raw-header capture path (e.g., mail-tester.com or direct MX log) since `Authentication-Results` wasn't observable through the current pipeline.
4. Extend link probing to cover all 12 material links (or at minimum all primary CTAs) rather than 2, to catch broken/redirect-loop links before send.
5. Obtain and review the full (untruncated) HTML to verify UTM parameter presence/consistency across CTAs and confirm no merge-tag artifacts are left unrendered.
## Recent history

- [[2026-08-10-17-vs-185-there-is-no-difference--vera-glow-beauty-fap6e]] — 7/10 (2026-08-10)
- [[2026-08-10-brighten-your-grays-with-zotos-7a1270d1-a8af-489b-a06a---vera-glow-beauty-fap6e]] — 5/10 (2026-08-10)
- [[2026-08-10-time-for-something-new-hp2v610000019febda8266b8--vera-glow-beauty-fap6e]] — 7/10 (2026-08-10)

