---
slug: 2026-09-04-kick-off-the-holiday-weekend-with-big-savings-flash-sale-starts-now
type: email
date: 2026-09-04
persona: buck-field-tractorsupply-fap6e
score: "8/10"
sender: Tractor Supply Company
subject: Kick Off the Holiday Weekend with BIG Savings - Flash Sale starts NOW
tags: [email, score-8, sender/tractor-supply-company]
---
# Kick Off the Holiday Weekend with BIG Savings - Flash Sale starts NOW
**Score:** 8/10 · **Type:** Email audit · **2026-09-04**
## Full review
## Technical Audit

## 1. Technical Summary
The email uses a standard responsive HTML table layout with MSO/Outlook conditional styling; automated QA reports a 19% pass rate driven primarily by systemic link-probe timeouts and missing compliance/authentication headers.

## 2. Link & Tracking Issues
- All 10 probed material links (Hero, Tractor Supply Co., FlashSaleBanner x2, Traveller Truck Winch, Hunting Blinds, MoreDeals x2, Update your preferences or unsubscribe) failed with "The read operation timed out" against `e.ez.tractorsupply.com/click?...` redirect URLs. This indicates the click-tracking redirector (Salesforce Marketing Cloud/ExactTarget `ez.tractorsupply.com` domain) is either unresponsive or the encoded redirect payload is malformed — evidence: identical timeout pattern across 10/12 probed links.
- The unsubscribe link itself is also routed through the same failing `e.ez.tractorsupply.com/click?` tracking redirector and timed out, which compounds the compliance risk in Section 5.
- Open-tracking pixel (`https://e.ez.tractorsupply.com/open?...`) and two analytics beacons (`mi.tractorsupply.com/p/cp/.../o.gif`, `eaAnalyticsTSC.everestengagement.com/ea/...`) are present and load as `<img>` tags but are unrelated to the click-redirector failures.
- 32 non-material (footer/social/utility) links were not probed per the tool's prioritization logic — coverage gap noted, not a defect.

## 3. Rendering & Accessibility
- Three tracking/pixel images are missing `alt` text: `o.gif` (mi.tractorsupply.com), the Everest Engagement beacon, and the `open` pixel from `e.ez.tractorsupply.com`. These are 1x1 tracking pixels, so the missing `alt` has no visible accessibility impact but should still be `alt=""` for HTML validity/screen-reader hygiene rather than omitted.
- No `alt` text issues were reported on content/hero images — no evidence of accessibility defects on user-facing imagery.
- MSO/Outlook conditional CSS, `-ms-text-size-adjust`, `ExternalClass` resets, and mobile media queries (`max-width: 639px`) are present and correctly structured for cross-client rendering — no issues found in the visible source.

## 4. Personalization & Merge Tokens
No merge tokens or personalization placeholders (e.g., `%%FIRSTNAME%%`, `{{ }}`, AMPscript `%%=...=%%`) are visible in the truncated HTML source. No issues found based on available evidence.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header**: Not found in captured headers — cannot confirm RFC 2369 mailbox-level unsubscribe support via the AgentMail relay.
- **List-Unsubscribe-Post header**: Not found — one-click unsubscribe (RFC 8058) cannot be confirmed as supported.
- **Authentication-Results header**: Not found — SPF/DKIM/DMARC pass/fail status could not be verified via the relay.
- An in-body unsubscribe link ("Update your preferences or unsubscribe") is present, satisfying the CAN-SPAM requirement for a functional opt-out mechanism in principle, but it currently fails to resolve (see Section 2), which is a functional compliance risk regardless of header-level findings.
- These three header findings are WARN-level and may reflect the AgentMail relay's header capture rather than the sender's actual configuration — flagged as inconclusive, not confirmed failures.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Destination/landing URLs cannot be verified for UTM parameters or content alignment because every probed click-through link times out before redirect resolution — this blocks any continuity check between email CTAs and their landing pages.
- The `mi=` and `e=` / `c=` query parameters visible on the two tracking-pixel URLs (`mi_u=60740592613`; `e=60740592613&c=090426_TSC_WKY_FW36LaborDayPromoFlashSale`) suggest a campaign ID (`090426_TSC_WKY_FW36LaborDayPromoFlashSale`) is being passed for internal analytics attribution, but this is not a UTM parameter and doesn't confirm destination-page tagging.

## 7. Recommendations
1. Investigate the `e.ez.tractorsupply.com` click-tracking redirector — 10/12 probed links (including the unsubscribe link) time out, which is a systemic infrastructure issue, not a content issue.
2. Prioritize fixing the unsubscribe link timeout specifically, as it carries direct CAN-SPAM compliance exposure independent of the header-level warnings.
3. Confirm with the ESP/relay (AgentMail) whether `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` are genuinely absent at the source or simply not being captured/forwarded by the relay.
4. Add empty `alt=""` attributes to the three tracking pixels (`o.gif`, Everest beacon, `open` pixel) for HTML/accessibility validity.
5. Once click links resolve, re-run continuity checks to confirm landing pages carry proper UTM/campaign tagging consistent with the `FW36LaborDayPromoFlashSale` campaign ID seen in the pixel URLs.
## Recent history

- [[2026-08-17-exclusive-animal-days-savings-are-live]] — 9/10 (2026-08-17)
- [[2026-08-14-animal-days-in-store-event-is-tomorrow-8-15]] — 8/10 (2026-08-14)
- [[2026-08-10-animal-days-starts-now-save-big-on-tsc-exclusives]] — 9/10 (2026-08-10)

