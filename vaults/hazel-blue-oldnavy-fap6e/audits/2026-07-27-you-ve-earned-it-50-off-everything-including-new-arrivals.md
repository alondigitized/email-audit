---
slug: 2026-07-27-you-ve-earned-it-50-off-everything-including-new-arrivals
type: email
date: 2026-07-27
persona: hazel-blue-oldnavy-fap6e
score: "7/10"
sender: Old Navy Haul into Fall
subject: "You've earned it — 50% off everything* including NEW arrivals"
tags: [email, score-7, sender/old-navy-haul-into-fall]
---
# You've earned it — 50% off everything* including NEW arrivals
**Score:** 7/10 · **Type:** Email audit · **2026-07-27**
## Full review
## Technical Audit

# Technical Audit: "You've earned it — 50% off everything*" (Old Navy)

## 1. Technical Summary
The email is a standard Gap Inc./Old Navy ESP template (XHTML 1.0 Transitional, MSO conditional comments, responsive breakpoint at 639px) with one confirmed broken redirect link and several compliance headers missing or unverifiable from the relay.

## 2. Link & Tracking Issues
- **Broken tracked link (HTTP 400)**: `https://mi.oldnavy.com/p/cp/0b03a64563bcff52/c?mi_u=473097083&EV=ONUSFF6AMCPATHTFREQTESTSLPCTRLJOB535661PERSX367627...&url=https%3A%2F%2Fmi.oldnavy.com%2Fp%2Frp%2F266650ae62bdbfd2%2Furl&url_sig=...` (link text captured as "Display images to show real-time content"). This is a multi-hop redirect (click → `mi.oldnavy.com/p/cp/...` → nested encoded `mi.oldnavy.com/p/rp/...` URL) and the outer hop returns 400.
- **88 additional tracking/redirect links** were skipped by the automated prober (expected — click-redirect domains generally block synthetic HTTP probes), so their live status is unconfirmed rather than passing.
- **Two tracking pixels** present in the hidden preheader div:
  - Open-tracking: `https://click.email.oldnavy.com/open.aspx?PNTMJ3Z2FQTU7LDEB3OMORCOVY.60269&d=60269&bmt=0`
  - Third-party verification pixel (commented `<!--DV TRACKING PIXEL-->`, DoubleVerify): `https://cp.oldnavy.com/o/514c6b7c-e120-443b-9c91-75f90f4c87f2?mi_mid=...`

## 3. Rendering & Accessibility
- `img` alt attribute missing on the DoubleVerify pixel (`514c6b7c-e120-443b-9c91-75f90f4c87f2`) — low impact since it's a 1x1 hidden pixel, but flagged by QA.
- The broken link's captured text ("Display images to show real-time content") indicates it's an image-based CTA whose alt text is being surfaced as the link label — if images are blocked, recipients see a non-descriptive, action-irrelevant string rather than a meaningful CTA label.
- Responsive structure is otherwise sound: single media-query breakpoint at `max-width: 639px`, `.wrapper` fixed at 640px desktop, MSO-specific `line-height`/Outlook height-fix conditional block present, `.ExternalClass` and `.ReadMsgBody` resets in place for Outlook/Gmail quirks. No structural rendering issues found in the visible markup.

## 4. Personalization & Merge Tokens
No unresolved merge tags (e.g., `%%FIRSTNAME%%`, `{{first_name}}`) are present in the visible HTML. The `mi_mid` parameter on the tracking pixel (`019fa14c-e900-7000-aa5d-27b52c0fb711`) is an opaque subscriber ID rather than exposed PII, which is correct practice. No issues found in the visible source (note: source is truncated, so body content beyond the shown snippet wasn't assessed).

## 5. Compliance (CAN-SPAM, unsubscribe, authentication)
- **List-Unsubscribe header**: not found — may be a relay capture gap rather than a true absence at origin, but cannot be confirmed either way from available data.
- **List-Unsubscribe-Post header (RFC 8058)**: not found — one-click unsubscribe support unverified.
- **Physical mailing address**: not detected anywhere in the scanned content — CAN-SPAM requires this in the footer; either it's absent or located past the truncation point and needs manual confirmation.
- **Authentication-Results header**: not found via the AgentMail relay — SPF/DKIM/DMARC pass/fail status cannot be verified from this capture.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Links use Gap Inc.'s proprietary tracking schema (`mi_u`, `mi_mid`, `DI`, `CD`, `EV` campaign-code string, `ilp_brand=ON`) rather than standard `utm_source`/`utm_medium`/`utm_campaign` parameters — expected for this ESP stack, not itself an issue, but means attribution can't be validated against a generic UTM convention.
- Landing-page alignment cannot be confirmed for the broken link (Section 2) since the destination returns HTTP 400 before reaching any landing page.
- Plain-text alternative is 78.8% URL characters (18,411/23,362), which materially degrades the plain-text fallback's readability and may hurt deliverability scoring on some filters.

## 7. Recommendations
1. Fix or remove the broken redirect (`mi.oldnavy.com/p/cp/0b03a64563bcff52/c...`) — currently returns HTTP 400 and drops the associated CTA.
2. Confirm at the ESP/MTA level (not just this relay capture) that `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually being sent — required for Gmail/Yahoo bulk sender compliance as of their 2024 requirements.
3. Verify a physical mailing address is present in the footer (outside the truncated portion) to satisfy CAN-SPAM; if absent, add one.
4. Add `alt` text to all `img` tags, including tracking pixels, for consistency with accessibility linting even where visually inconsequential.
5. Reduce URL density in the plain-text alternative (currently 78.8%) by trimming redundant/duplicate tracking links or shortening query strings.
6. Re-run the QA probe against a raw SMTP capture (with full headers) rather than the relay-forwarded copy to get a definitive Authentication-Results (SPF/DKIM/DMARC) reading.
## Recent history

- [[2026-07-26-half-off-everything-16-wow-jeans-permission-to-go-cart-wild-be95a7b0-8001-4030-a024-]] — 8/10 (2026-07-26)
- [[2026-07-26-this-is-huge-here-s-fifty-percent-off-everything-even-new-arrivals-16-wow-jeans]] — 8/10 (2026-07-26)
- [[2026-07-25-not-a-drill-16-wow-jeans]] — 5/10 (2026-07-25)

