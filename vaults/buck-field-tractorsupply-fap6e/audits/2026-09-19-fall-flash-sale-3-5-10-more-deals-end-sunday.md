---
slug: 2026-09-19-fall-flash-sale-3-5-10-more-deals-end-sunday
type: email
date: 2026-09-19
persona: buck-field-tractorsupply-fap6e
score: "7/10"
sender: Tractor Supply Company
subject: "Fall FLASH SALE: $3, $5, $10 & More! Deals end Sunday 🚨"
tags: [email, score-7, sender/tractor-supply-company]
---
# Fall FLASH SALE: $3, $5, $10 & More! Deals end Sunday 🚨
**Score:** 7/10 · **Type:** Email audit · **2026-09-19**
## Full review
## Technical Audit

1. **Technical Summary**
The email fails widespread QA link probing (19% pass rate) due to timeouts across all flash-sale tile links, has a 403-broken unsubscribe/preferences link, and is missing standard authentication and unsubscribe compliance headers.

2. **Link & Tracking Issues**
- 9 of 9 probed flash-sale tile CTAs (`FW38FlashSaleTile1` through `Tile9`) timed out on the redirect hop through `e.ez.tractorsupply.com/click?...` — "The read operation timed out." This affects every primary sale-tile CTA in the email, i.e. the core conversion path.
- The "Update your preferences or unsubscribe" link returned **HTTP 403** at `https://e.ez.tractorsupply.com/click?ZdNHfbpswFAZwnsVSe1UyY8BAJbShpKSLEqa0GVm5iezjQ0YKhNqg...` — a broken compliance-critical link.
- Open-tracking pixel present: `https://e.ez.tractorsupply.com/open?ZPM2xSkMxFIDhPMuZGzlJk5Okk1IEEblLxcGl5J4kpRhtzE0HK767COr8wf_fzmd-keWYa5KjRx6nvpxbqx-` (loads via `<img>`, standard ESP open-tracking).
- 34 non-material (footer/social/utility) links were not probed; scope of this finding is limited to the 12 material links tested.

3. **Rendering & Accessibility**
- Three tracking/pixel images are missing `alt` attributes:
  - `https://mi.tractorsupply.com/p/cp/76ddd2c9608d17c7/o.gif?mi_u=60740592613`
  - `https://eaAnalyticsTSC.everestengagement.com/ea/o8uREqbKQf/?e=60740592613&c=091926_TSC_WKY_FW38TopDealsFlashSale_South`
  - `e.ez.tractorsupply.com/open?...` pixel
  These are 1x1 tracking pixels, not content images, so the missing alt text has negligible accessibility impact but should still be `alt=""` for strict HTML validity.
- Head markup includes standard Litmus/Outlook/Gmail rendering resets (`.ExternalClass`, `mso-table-lspace`, `x-apple-data-detectors`, `@media` mobile breakpoints at 639px/580px) — no issues found in the visible fragment.
- `<meta name="ROBOTS" content="NOINDEX, NOFOLLOW">` and `<meta name="referrer" content="no-referrer">` present — intentional for hosted email pages; no issues found.

4. **Personalization & Merge Tokens**
No merge tokens or personalization variables are visible in the truncated HTML source provided. No issues found based on available evidence.

5. **Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- **List-Unsubscribe header**: not found. May be a relay-capture artifact (AgentMail) rather than a true absence — flag for header-level verification against the raw SMTP source.
- **List-Unsubscribe-Post header (RFC 8058)**: not found, meaning one-click unsubscribe cannot be confirmed as supported.
- **Authentication-Results header**: not found — SPF/DKIM pass/fail status cannot be verified from this capture.
- In-body unsubscribe link exists ("Update your preferences or unsubscribe") but currently returns 403, which is a functional CAN-SPAM compliance failure independent of the header findings above — a broken unsubscribe mechanism is a direct violation risk.

6. **Email-to-Site Continuity (UTM params, landing page alignment)**
- Click URLs use an opaque encoded/compressed token format (`e.ez.tractorsupply.com/click?<blob>`) rather than transparent UTM query parameters, so campaign-parameter alignment with the landing page cannot be verified from the URL alone.
- Tracking pixel `c=` parameter shows campaign code `091926_TSC_WKY_FW38TopDealsFlashSale_South`, consistent with the link-text naming convention (`091926_FW38TopDealsFlashSale_FW38FlashSaleTileN`), indicating consistent internal campaign tagging.
- Cannot confirm landing-page alignment for any tile CTA since all 9 timed out before resolving to a destination URL.

7. **Recommendations**
- Priority 1: Investigate the redirect/tracking domain (`e.ez.tractorsupply.com`) for the timeout affecting all 9 flash-sale tile links — this is a full-funnel outage on the email's primary CTAs, not an isolated link error.
- Priority 1: Fix the 403 on the unsubscribe/preferences link — this is a compliance exposure, not just a UX bug.
- Verify List-Unsubscribe / List-Unsubscribe-Post / Authentication-Results headers against the raw SMTP source directly (bypassing the AgentMail relay capture) to rule out a capture artifact vs. an actual header omission.
- Add empty `alt=""` to the three tracking-pixel `<img>` tags for HTML validity (low priority, minimal user impact).
- Once tile links resolve, re-audit destination URLs for UTM/campaign-parameter consistency with the landing pages.
## Recent history

- [[2026-08-17-exclusive-animal-days-savings-are-live]] — 9/10 (2026-08-17)
- [[2026-08-14-animal-days-in-store-event-is-tomorrow-8-15]] — 8/10 (2026-08-14)
- [[2026-08-10-animal-days-starts-now-save-big-on-tsc-exclusives]] — 9/10 (2026-08-10)

