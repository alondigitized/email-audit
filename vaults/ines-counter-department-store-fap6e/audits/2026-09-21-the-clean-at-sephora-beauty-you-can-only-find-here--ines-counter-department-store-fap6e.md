---
slug: 2026-09-21-the-clean-at-sephora-beauty-you-can-only-find-here--ines-counter-department-store-fap6e
type: email
date: 2026-09-21
persona: ines-counter-department-store-fap6e
score: "6/10"
sender: Sephora Insider
subject: The Clean at Sephora beauty you can only find here 😍
tags: [email, score-6, sender/sephora-insider]
---
# The Clean at Sephora beauty you can only find here 😍
**Score:** 6/10 · **Type:** Email audit · **2026-09-21**
## Full review
## Technical Audit

1. Technical Summary
Email fails plain-text MIME fallback and lacks verifiable unsubscribe/authentication headers; several image assets are missing alt text.

2. Link & Tracking Issues
- No broken/malformed link URLs identified in the truncated source; 12 material links were probed per QA, 41 deprioritized (footer/utility/social) per the probe methodology.
- Tracking pixel present: `https://mi.sephora.com/p/up/f6716d0a0f52104e/o.gif?mi_u=4970269939971072&mi_ecmp=20260921_Clean_and_Only_at_Sephora` — functions correctly as an open-tracking beacon but is missing `alt=""` (should be null/empty alt, not absent, per accessibility item below).
- No issues found with link destinations in the visible source.

3. Rendering & Accessibility
- 4 images missing `alt` attributes (QA FAIL/WARN):
  - `https://app.sephora.com/O/AQEAAZcF2gAndjYxMDAwMDAxYS0wYzQxLWIwYjUtOGEzNC04ZW...` (content image, no alt — screen readers get no fallback)
  - `2021_Navs_Header_06.jpg` (nav header image, no alt)
  - `o.gif` tracking pixel (should have `alt=""` explicitly, not simply omitted)
  - `EN_NEWSCENTS_Barcode.jpg` (barcode image, no alt)
- `<meta name="robots" content="no index" />` is present — correct/expected for transactional/marketing email markup, not an issue.
- Extensive Outlook/mso conditional CSS and `.ExternalClass`/`-webkit-text-size-adjust` resets are present, consistent with standard multi-client email rendering support; no malformed CSS observed in the truncated sample.
- Head contains standard MSO/VML namespace declarations (`xmlns:v`, `xmlns:o`) for Outlook desktop rendering — no issues found.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) visible in the truncated source.
- No issues found in the visible markup; full body was truncated, so downstream personalization blocks were not reviewable.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** (QA WARN) — may be a relay artifact (AgentMail) rather than absence from Sephora's actual send; cannot confirm one-click unsubscribe compliance from this header alone.
- **List-Unsubscribe-Post header not found** (QA WARN) — RFC 8058 one-click unsubscribe support unconfirmed.
- **Authentication-Results header not found** (QA WARN) — SPF/DKIM/DMARC pass/fail status cannot be verified from available headers.
- QA notes an unsubscribe link is always included in the probe set regardless of ranking, implying a body unsubscribe link exists, but its exact URL/text was not present in the truncated HTML for direct verification.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking pixel query param `mi_ecmp=20260921_Clean_and_Only_at_Sephora` confirms campaign-level tagging is present via the Epsilon/Harmony ESP tracking domain (`mi.sephora.com`).
- No CTA/product link UTM parameters visible in the truncated source to verify email-to-landing-page attribution continuity.
- No issues found based on available evidence; full CTA URLs needed for a complete check.

7. Recommendations
- Add descriptive `alt` text to the two content/informational images (`2021_Navs_Header_06.jpg`, `EN_NEWSCENTS_Barcode.jpg`) and the app.sephora.com content image; set `alt=""` explicitly on the tracking pixel.
- Generate and attach a non-empty plain-text MIME part (`text/plain`) — current fallback is 0 chars, which hurts deliverability and accessibility for text-only clients.
- Verify `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually present on the raw send (check via a header-preserving relay or direct MTA capture) since the AgentMail relay may be stripping them rather than the sender omitting them.
- Verify `Authentication-Results` (SPF/DKIM/DMARC) directly at the receiving MTA rather than via relay, to confirm authentication status independent of the QA tool's visibility gap.
- Provide full (non-truncated) HTML and header source for a complete link/UTM and merge-token audit.
## Recent history

- [[2026-09-21-want-up-to-a-500-gift-card--ines-counter-department-store-fap6e]] — 7/10 (2026-09-21)
- [[2026-09-21-epic-deals-start-today--ines-counter-department-store-fap6e]] — 5/10 (2026-09-21)
- [[2026-09-20-40-off-is-here-today-gone-tomorrow-2924e847-3f8c-457c-bfd9---ines-counter-department-store-fap6e]] — 5/10 (2026-09-20)

