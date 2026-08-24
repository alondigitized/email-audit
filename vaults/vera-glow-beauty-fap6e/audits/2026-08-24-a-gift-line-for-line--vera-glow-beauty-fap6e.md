---
slug: 2026-08-24-a-gift-line-for-line--vera-glow-beauty-fap6e
type: email
date: 2026-08-24
persona: vera-glow-beauty-fap6e
score: "7/10"
sender: ILIA
subject: A gift—line for line
tags: [email, score-7, sender/ilia]
---
# A gift—line for line
**Score:** 7/10 · **Type:** Email audit · **2026-08-24**
## Full review
## Technical Audit

## Technical Audit: ILIA "A gift—line for line"

### 1. Technical Summary
This is a Klaviyo-generated MJML/table-based HTML email (host: `static-forms.klaviyo.com`, tracking domain `trk.send.iliabeauty.com`) with standard MSO conditional comments and responsive breakpoints at 480px. Two accessibility gaps and two missing compliance headers were confirmed by automated QA; link and UTM structure could not be fully verified because the provided HTML source is truncated before the body content/CTAs.

### 2. Link & Tracking Issues
- QA probe covered 12 of 27 total links (15 deprioritized as footer/utility/social); an unsubscribe link was confirmed present in that set.
- The tracking pixel/open-tracking redirect `https://trk.send.iliabeauty.com/o/01M0T5MD42BDDHJ9D4MEMF2DP1` is present and is one of the two elements flagged for missing `alt` text (see §3) — as an invisible tracking pixel this has no user-facing rendering impact, but the missing `alt=""` is still a markup defect worth fixing for HTML validity.
- Cannot verify individual CTA href targets, redirect chains, or click-tracking wrapper domains — the supplied HTML source is truncated before the body's link markup.

### 3. Rendering & Accessibility
- **Missing alt text (2 instances, confirmed by QA):**
  - `c9cefca7-6b18-443a-896b-9e98ec5d842a.jpeg` (CloudFront-hosted product/hero image, `src: https://d3k81ch9hvuctc.cloudfront.net/company/SguDsz/images/c9cefca7-6b18-443a-896b-9e98ec5d842a.jpeg`) — no `alt` attribute, fails for screen readers and when images are blocked.
  - The open-tracking pixel at `https://trk.send.iliabeauty.com/o/01M0T5MD42BDDHJ9D4MEMF2DP1` — should carry `alt=""` (empty, not omitted) since it's non-content, to avoid screen readers announcing the raw filename/URL if a client renders it.
- Preheader text block (`display:none` div) uses the standard zero-width-space padding technique correctly — no issues.
- MSO conditional blocks (`<!--[if mso]>`, `<!--[if lte mso 11]>`) and Outlook `mj-outlook-group-fix` class are present and correctly structured for Outlook desktop rendering.
- `<title>` tag is empty (`<title> </title>`) — not a functional bug (subject line is separate) but worth noting for email clients/webmail tabs that surface it.
- Font loading depends on two external `@import` calls (`static-forms.klaviyo.com/fonts/...` and `fonts.googleapis.com`) with `"Montserrat", "Helvetica", sans-serif` fallback stack defined — acceptable degradation path if either import is blocked, which is common in corporate/webmail clients that strip external `@import`.

### 4. Personalization & Merge Tokens
No merge tags (e.g. `{{ first_name }}`, Klaviyo `{% %}` liquid syntax) are visible in the supplied source. Cannot confirm whether the body content (truncated) contains personalization tokens or unresolved fallback syntax — flag for re-check against the untruncated source.

### 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** (QA WARN) — may be a capture limitation of the AgentMail relay rather than a true absence; cannot confirm sender-side omission from this data alone.
- **List-Unsubscribe-Post header not found** (QA WARN) — RFC 8058 one-click unsubscribe cannot be confirmed as supported.
- **Authentication-Results header not found** (QA WARN) — SPF/DKIM pass/fail status is unknown via this relay; not evidence of misconfiguration, but blocks verification.
- An in-body unsubscribe link is present per the QA link probe (footer/utility, deprioritized but included) — satisfies CAN-SPAM's requirement for a visible opt-out mechanism independent of header-level support.
- Sender address `info@iliabeauty.com` is a valid-looking domain-matched From address — no spoofing/mismatch indicators in what's visible.

### 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot assess — no CTA `href` values are present in the truncated HTML source provided. Re-run this check against the full HTML to confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are present and that landing page targets resolve (not 404/redirect loops).

### 7. Recommendations
1. Add `alt=""` to the tracking pixel and a descriptive `alt` attribute to the CloudFront hero/product image (`c9cefca7...jpeg`).
2. Re-verify `List-Unsubscribe` / `List-Unsubscribe-Post` headers against raw SMTP headers (not just the AgentMail relay capture) to confirm true CAN-SPAM/RFC 8058 compliance rather than a monitoring gap.
3. Confirm SPF/DKIM/DMARC alignment via a direct header capture (e.g. `Authentication-Results` from a non-relay inbox) since the current relay doesn't surface it.
4. Supply the full (untruncated) HTML body for link/UTM and merge-token verification — sections 2, 4, and 6 above are incomplete due to source truncation.
5. Populate the `<title>` tag with non-empty content for better client/tab identification.
## Recent history

- [[2026-08-24-sephora-app-fest-hp2v61000001a033f22d8388--vera-glow-beauty-fap6e]] — 7/10 (2026-08-24)
- [[2026-08-24-sephora-app-fest--vera-glow-beauty-fap6e]] — 7/10 (2026-08-24)
- [[2026-08-23-pick-your-pore-fect-toner--vera-glow-beauty-fap6e]] — 5/10 (2026-08-23)

