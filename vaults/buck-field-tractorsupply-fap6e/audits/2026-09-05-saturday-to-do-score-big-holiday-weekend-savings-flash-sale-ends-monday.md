---
slug: 2026-09-05-saturday-to-do-score-big-holiday-weekend-savings-flash-sale-ends-monday
type: email
date: 2026-09-05
persona: buck-field-tractorsupply-fap6e
score: "7/10"
sender: Tractor Supply Company
subject: "Saturday To-Do: Score BIG Holiday Weekend Savings! Flash Sale Ends MONDAY"
tags: [email, score-7, sender/tractor-supply-company]
---
# Saturday To-Do: Score BIG Holiday Weekend Savings! Flash Sale Ends MONDAY
**Score:** 7/10 · **Type:** Email audit · **2026-09-05**
## Full review
## Technical Audit

Technical Audit — Tractor Supply "Saturday To-Do" Flash Sale Email

**1. Technical Summary**
Automated QA passed only 19% of checks (10 issues, 3 warnings), driven primarily by systemic link-probe timeouts on the click-tracking domain and missing authentication/unsubscribe headers.

**2. Link & Tracking Issues**
- 9 of 12 probed material links failed with "read operation timed out" — all routed through the tracking redirector `https://e.ez.tractorsupply.com/click?...` (Responsys/Oracle ESP click-tracking). Affected links include the masthead logo ("Tractor Supply Co."), hero banner ("090526_FW36LaborDayPromoFlashSale_090526_FW36_HeroFlashSale," two instances), the flash-sale banner (two instances), two product links ("Simpson Pressure Washers," "Cub Cadet enduro"), and "MoreDeals" (two instances). Timeouts indicate the redirector endpoint is slow/unresponsive or the payload tokens are malformed rather than the destination pages themselves being down — but as reported, none of these could be confirmed to resolve.
- The unsubscribe link (`.../click?ZdJHdbpswGIa5...`) returned a hard **403 Forbidden**, not a timeout — this is a distinct and more serious failure than the others (see Compliance).
- Open-tracking pixel present: `https://e.ez.tractorsupply.com/open?ZPM3BSgMxEIDh...` — functioning as expected for an ESP open-tracking beacon.
- `<meta content="no-referrer" name="referrer">` is set in `<head>`, which will strip referrer data from any outbound click — worth flagging if downstream analytics depend on referrer headers.

**3. Rendering & Accessibility**
- Three images missing `alt` text, all tracking/pixel assets rather than content images: `o.gif` (mi.tractorsupply.com), the Everest Engagement tracking pixel (`eaAnalyticsTSC.everestengagement.com`), and the ESP open-tracking beacon. Low user-facing impact (invisible 1x1 pixels) but worth adding empty `alt=""` for strict HTML validity/screen-reader hygiene.
- Standard Outlook/Gmail/Apple Mail CSS resets present (`.ExternalClass`, `mso-table-lspace`, `x-apple-data-detectors`, `.a6S`, viewport/format-detection meta tags) — no issues found in the boilerplate compatibility layer itself.
- Doctype is HTML 4.01 Transitional, consistent with legacy ESP template tooling (Responsys); not a defect, just dated.

**4. Personalization & Merge Tokens**
No merge-token or personalization syntax (e.g., `%%FIELD%%`, `{{token}}`, unresolved placeholders) visible in the truncated source. No issues found.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- **Unsubscribe link returns 403** — this is a functional CAN-SPAM risk: if the link is actually broken/blocked for recipients (not just the automated prober), the mailing fails the CAN-SPAM requirement for a working opt-out mechanism. Needs manual verification against a real inbox before escalating, since automated probes can be blocked by bot-detection independent of real user access.
- `List-Unsubscribe` header not detected — cannot confirm one-click unsubscribe support at the mail-header level (may be a capture limitation of the relay rather than a true absence).
- `List-Unsubscribe-Post` (RFC 8058) header not detected — same caveat; if genuinely absent, Gmail/Yahoo bulk-sender requirements (in effect since Feb 2024) are not met.
- `Authentication-Results` header (SPF/DKIM/DMARC) not detected — cannot confirm sender authentication passed; flagged as unknown rather than failing, given relay capture limitations.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
- Campaign identifier `090526_TSC_WKY_FW36LaborDayPromoFlashSale` is embedded in the Everest Engagement pixel URL and echoed in multiple link-text names (e.g., `090526_FW36LaborDayPromoFlashSale_HeroFlashSale`), showing consistent internal campaign tagging across creative slots.
- Because 9/10 destination links are wrapped in opaque `click?` redirect tokens, true landing-page URLs and any UTM parameters on the final destination cannot be verified from source alone — this is a blind spot in the audit, not a confirmed absence of UTMs.
- No issues found in naming-convention consistency of the click-tracking IDs themselves.

**7. Recommendations**
- Re-run the link prober against the `e.ez.tractorsupply.com/click` redirector in isolation to determine whether timeouts are a transient ESP-side issue or a systemic block (e.g., bot/UA filtering) — 9/10 timeouts on the same host points to the redirector, not the campaign.
- Manually verify the unsubscribe link's 403 from a real client/browser session; if confirmed broken for actual recipients, this is a CAN-SPAM compliance issue requiring immediate fix.
- Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` headers and `Authentication-Results` (SPF/DKIM/DMARC) directly against raw SMTP headers rather than the relay capture, since all three were reported as "not found" with an explicit caveat about relay limitations.
- Add `alt=""` to the three tracking-pixel `<img>` tags for HTML validity.
- Obtain full (untruncated) HTML source to verify UTM parameters on final landing-page destinations, since redirect-wrapped links currently block that check.
## Recent history

- [[2026-08-17-exclusive-animal-days-savings-are-live]] — 9/10 (2026-08-17)
- [[2026-08-14-animal-days-in-store-event-is-tomorrow-8-15]] — 8/10 (2026-08-14)
- [[2026-08-10-animal-days-starts-now-save-big-on-tsc-exclusives]] — 9/10 (2026-08-10)

