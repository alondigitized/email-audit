---
slug: 2026-09-19-get-4x-points-on-all-fragrance-until-9-23-with-code-newscents--vera-glow-beauty-fap6e
type: email
date: 2026-09-19
persona: vera-glow-beauty-fap6e
score: "5/10"
sender: Sephora Insider
subject: Get 4X points on all fragrance until 9/23 with code NEWSCENTS
tags: [email, score-5, sender/sephora-insider]
---
# Get 4X points on all fragrance until 9/23 with code NEWSCENTS
**Score:** 5/10 · **Type:** Email audit · **2026-09-19**
## Full review
## Technical Audit

1. Technical Summary
This is a Sephora promotional email (4X points on fragrance, code NEWSCENTS). QA checks show missing accessibility attributes, an absent plain-text MIME part, and unconfirmed authentication/unsubscribe headers at the relay layer.

2. Link & Tracking Issues
- No issues found in the truncated HTML source itself (link structure not fully visible in the excerpt provided).
- 12 material links were probed for click-likelihood by automated QA; 50 were skipped as lower-priority (footer/utility/social). No broken-link failures were reported among probed links.
- Open-tracking pixel present: `https://mi.sephora.com/p/up/f6716d0a0f52104e/o.gif?mi_u=4970293024993920&mi_ecmp=20260919_Beauty_for_All_NonRouges` — functioning as expected for an Epsilon/Harmony-based ESP, but flagged below for missing `alt`.

3. Rendering & Accessibility
- 4 images missing `alt` text (QA FAIL/WARN):
  - `https://app.sephora.com/O/AQEAAZcF2gAndjYxMDAwMDAxYS0wYjljLWZiOWUtNzkwYi1hOGM5NjkxMjVjY2M...` (no alt attribute)
  - `2021_Navs_Header_06.jpg` (nav header image, likely conveys navigation labels — missing alt harms screen-reader nav)
  - `o.gif` tracking pixel — should carry `alt=""` (decorative/empty) rather than being omitted entirely, to avoid screen readers announcing the raw filename/URL
  - `EN_NEWSCENTS_Barcode.jpg` (the promo barcode image — missing alt is a functional accessibility gap since the barcode/code is likely not otherwise present as text)
- Head contains legacy XHTML 1.0 Transitional DOCTYPE and extensive Outlook/MSO conditional CSS (`.ExternalClass`, `mso-table-lspace`, VML namespaces) — standard for Outlook desktop compatibility, not a defect.
- `<meta name="robots" content="no index" />` present — correct for transactional/marketing email, prevents indexing if the HTML is ever web-hosted.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) visible in the provided source excerpt.
- No issues found.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected (WARN) — may be a relay/capture artifact (AgentMail) rather than absent at origin; cannot confirm CAN-SPAM one-click compliance from this data alone.
- `List-Unsubscribe-Post` header (RFC 8058) not detected (WARN) — one-click unsubscribe support unconfirmed.
- `Authentication-Results` header not found (WARN) — SPF/DKIM pass/fail status cannot be verified via the AgentMail relay capture.
- An unsubscribe link is confirmed present in-body per QA note ("an unsubscribe link is always included" in the probed/skipped link set), so CAN-SPAM's body-level unsubscribe requirement appears met even though header-level one-click support is unverified.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking pixel campaign param `mi_ecmp=20260919_Beauty_for_All_NonRouges` — campaign label references "Beauty for All / NonRouges," which is inconsistent with the subject line's fragrance/NEWSCENTS focus. Worth confirming this isn't a mismatched/reused campaign tag from a different send.
- No landing page URLs with UTM parameters were present in the truncated source to evaluate further; full HTML needed to confirm UTM consistency between CTA links and the fragrance/NEWSCENTS promotion landing page.

7. Recommendations
- Add descriptive `alt` text to `2021_Navs_Header_06.jpg` and `EN_NEWSCENTS_Barcode.jpg` (functional/informational images); add `alt=""` to the tracking pixel and `app.sephora.com/O/...` image if decorative.
- Investigate why the plain-text MIME part is 0 chars — supply a proper multipart/alternative text fallback for deliverability and accessibility.
- Verify `List-Unsubscribe` / `List-Unsubscribe-Post` and `Authentication-Results` (SPF/DKIM/DMARC) directly at the sending MTA rather than relying solely on the AgentMail relay capture, since these may simply not be forwarded by the relay.
- Confirm the `mi_ecmp` campaign tag (`Beauty_for_All_NonRouges`) is intentional for this fragrance-specific send and not a leftover/mismatched tag from another campaign.
- Obtain the full (non-truncated) HTML to verify CTA link UTM parameters against the actual NEWSCENTS landing page.
## Recent history

- [[2026-09-18-new-thirst-burst-lip-bffs--vera-glow-beauty-fap6e]] — 6/10 (2026-09-18)
- [[2026-09-18-yes-please-grab-up-to-50-off-hp2v61000001a0b545fd54a7--vera-glow-beauty-fap6e]] — 6/10 (2026-09-18)
- [[2026-09-18-boo-tiful-nails-have-arrived-7f6bc525-66bf-46e8-95a3---vera-glow-beauty-fap6e]] — 5/10 (2026-09-18)

