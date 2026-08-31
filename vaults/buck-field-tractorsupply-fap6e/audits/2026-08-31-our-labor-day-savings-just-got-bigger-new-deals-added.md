---
slug: 2026-08-31-our-labor-day-savings-just-got-bigger-new-deals-added
type: email
date: 2026-08-31
persona: buck-field-tractorsupply-fap6e
score: "8/10"
sender: Tractor Supply Company
subject: Our Labor Day Savings Just Got BIGGER - New DEALS added!
tags: [email, score-8, sender/tractor-supply-company]
---
# Our Labor Day Savings Just Got BIGGER - New DEALS added!
**Score:** 8/10 · **Type:** Email audit · **2026-08-31**
## Full review
## Technical Audit

1. Technical Summary
Widespread link-tracking failures (timeouts on nearly all click-tracked URLs), one confirmed 403 on the unsubscribe link, missing compliance/authentication headers, and several images without alt text.

2. Link & Tracking Issues
- 10 of 12 probed `e.ez.tractorsupply.com/click?...` redirect links returned read-operation timeouts, including primary CTAs: "Tractor Supply Co.", "Loyalty", "MI_Loyalty", both "083126_FW36_Hero" hero links, and both "Value1FW36"/"Value2FW36" deal links. The click-tracking redirector (`e.ez.tractorsupply.com`) is either unresponsive or geo/rate-limiting the QA prober — evidence: `[FAIL] Link error: The read operation timed out` on each.
- The unsubscribe/preference-center link returned a hard **403 Forbidden**: `https://e.ez.tractorsupply.com/click?ZdJJdb5wwFI...` (link text: "Update your preferences or unsubscribe"). This is a functional failure, not just a timeout, and is a compliance-relevant broken link (see Section 5).
- Open-tracking pixel present: `https://e.ez.tractorsupply.com/open?ZPM3PSg...` — pattern consistent with the same redirector, so if that infrastructure is degraded, open tracking is also at risk.
- 35 of 47 material links were not probed (footer/utility/social deprioritized) — findings below are scoped to the 12 probed links only; unprobed links are unverified.

3. Rendering & Accessibility
- Three images missing `alt` text:
  - `https://mi.tractorsupply.com/p/cp/76ddd2c9608d17c7/o.gif?mi_u=60740592613` (tracking pixel — low impact but should still carry `alt=""`)
  - `https://eaAnalyticsTSC.everestengagement.com/ea/o8uREqbKQf/?e=...&c=083126_TSC_WKY_FW36LaborDayPromo` (tracking pixel)
  - `https://e.ez.tractorsupply.com/open?ZPM3PSg...` (open-tracking pixel)
  - These are all tracking pixels, not content images, so screen-reader impact is minimal, but missing `alt=""` (empty, explicit) is still an accessibility/HTML-validity gap versus omitting the attribute entirely.
- Standard boilerplate CSS resets for Outlook/Gmail/Apple Mail/Yahoo are present and correctly structured (ExternalClass reset, MSO table spacing fixes, `-webkit-text-size-adjust`, `x-apple-disable-message-reformatting`) — no issues found in the client-compatibility layer itself.
- HTML uses legacy HTML 4.01 Transitional doctype with XML namespaces for Outlook VML (`xmlns:v`, `xmlns:o`) — standard for MSO-targeted responsive email, not a defect.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `{{first_name}}`, `%%FIELD%%`) visible in the truncated source.
- Tracking parameters embed per-recipient identifiers (`mi_u=60740592613`, `e=60740592613`) consistently across pixels, suggesting personalization/identity resolution is functioning at the pixel level.
- Full personalization logic isn't visible in the truncated HTML — no issues found in the visible portion.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **Unsubscribe link returns 403** — this is a CAN-SPAM risk: if the link is broken for real recipients (not just the QA prober), the required functioning opt-out mechanism is not honoring requests. Evidence: `[FAIL] Broken link (403)` on link text "Update your preferences or unsubscribe."
- `List-Unsubscribe` header not detected — `[WARN] List-Unsubscribe header not found`. Note the QA tool flags this may be a relay-side capture gap (AgentMail), not necessarily absent from the actual sent message — recommend verifying against raw headers from the original ESP send.
- `List-Unsubscribe-Post` (RFC 8058, one-click unsubscribe) not detected — same caveat applies.
- `Authentication-Results` header (SPF/DKIM/DMARC) not found — `[WARN] ... SPF/DKIM status unknown`. Same relay-capture caveat; cannot confirm actual authentication posture from this data alone.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot verify UTM parameter alignment or landing-page destination matching — all destination URLs are wrapped in the `e.ez.tractorsupply.com/click?...` redirector with opaque encoded tokens, and the majority of these timed out before resolving to a final landing URL.
- Given the redirector failures in Section 2, end-to-end continuity from email click to landing page cannot be confirmed for the CTAs tested (hero banner, both value/deal links, loyalty links).

7. Recommendations
- Escalate the `e.ez.tractorsupply.com` click-tracking redirector to the ESP (looks like an Oracle Responsys/CJM `ez.tractorsupply.com` instance) — 10/12 timeouts plus one 403 indicates a redirector-level outage or aggressive bot/rate-limiting affecting real subscribers, not just this QA probe.
- Treat the 403 on the unsubscribe link as highest priority — verify manually from a live inbox send (not just the QA snapshot) given CAN-SPAM opt-out obligations.
- Pull raw SMTP headers from the actual ESP send (not the AgentMail relay capture) to confirm `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` are genuinely present — current WARNs may be a relay-visibility artifact rather than a real gap.
- Add empty `alt=""` attributes to the three tracking pixels for HTML/accessibility hygiene.
- Once the redirector is confirmed healthy, re-run link probing to confirm UTM/landing-page continuity on the hero and value-deal CTAs before relying on this send's click data.
## Recent history

- [[2026-08-17-exclusive-animal-days-savings-are-live]] — 9/10 (2026-08-17)
- [[2026-08-14-animal-days-in-store-event-is-tomorrow-8-15]] — 8/10 (2026-08-14)
- [[2026-08-10-animal-days-starts-now-save-big-on-tsc-exclusives]] — 9/10 (2026-08-10)

