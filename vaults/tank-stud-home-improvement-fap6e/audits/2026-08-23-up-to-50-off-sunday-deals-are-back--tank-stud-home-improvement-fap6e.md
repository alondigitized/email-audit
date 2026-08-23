---
slug: 2026-08-23-up-to-50-off-sunday-deals-are-back--tank-stud-home-improvement-fap6e
type: email
date: 2026-08-23
persona: tank-stud-home-improvement-fap6e
score: "9/10"
sender: Lowe’s Home Improvement
subject: Up to 50% OFF! Sunday Deals are back
tags: [email, score-9, sender/lowe-s-home-improvement]
---
# Up to 50% OFF! Sunday Deals are back
**Score:** 9/10 · **Type:** Email audit · **2026-08-23**
## Full review
## Technical Audit

## Technical Audit — Lowe's "Sunday Deals" Email

### 1. Technical Summary
Standard XHTML Transitional/MSO-hybrid template with responsive media queries; automated QA reports a 57% pass rate with 3 warnings and 0 hard failures, concentrated in header-level compliance signals and missing image alt attributes.

### 2. Link & Tracking Issues
- 37 tracking/redirect links were skipped by the automated HTTP prober (click-tracking or redirect domains) — link destinations and redirect chains are **unverified**, not confirmed broken.
- Tracking/impression pixels observed: `mi.lowes.com/p/cp/e657e6a7cb1cda3a/o.gif` and multiple `sli.lowes.com/imp?...` beacons (s=1090834/35/37/38 params). These are third-party engagement-tracking calls (Salesforce Marketing Cloud–style `e.lowes.com` sending domain), consistent with standard ESP infrastructure — no anomalies confirmed.
- **Privacy note:** several `sli.lowes.com/imp` URLs embed the recipient's full email address in cleartext as a query parameter (`e=cole-drywall-lowes-fap6e@etell.app`). This is common in ESP click/impression tracking but is worth flagging as a PII-in-URL exposure pattern (logged in browser history, referrer headers, proxy/CDN logs).

### 3. Rendering & Accessibility
- 7 images flagged with missing `alt` attributes:
  - Content images: `c301e24e-201b-46f9-8172-27b5acdcbf99.jpg`, `ad569dc5-361d-4d7d-8bc0-1ae6ec389f05.png` (`image.e.lowes.com/lib/fe9515707364027471/...`) — these carry visible content and should have descriptive `alt` text for screen readers/blocked-image fallback.
  - Tracking pixels: `o.gif` (mi.lowes.com) and 4× `imp` beacons (sli.lowes.com) — missing alt is not a meaningful defect for 1×1 tracking pixels; recommend `alt=""` purely to keep the QA check quiet, not a real accessibility issue.
- Font loading uses `@font-face` with `local()` fallback and `.woff` sources hosted on `lowescdn.com`, wrapped correctly in `<!--[if !mso]><!-->` conditional comments so Outlook/Word rendering engines fall back to system fonts as intended — no issue found.
- `x-apple-disable-message-reformatting` meta tag present — correctly suppresses iOS Mail auto-scaling.

### 4. Personalization & Merge Tokens
No unresolved merge tags (e.g. `%%...%%`, `{{...}}`, `*|...|*`) are present in the truncated source — personalization appears to have resolved correctly at send time. The recipient identifier is passed downstream only via the tracking-pixel query strings noted above (Section 2), not via visible on-page merge content.

### 5. Compliance (CAN-SPAM, unsubscribe, authentication)
- `List-Unsubscribe` header: not detected. QA notes this may be a relay-capture limitation (AgentMail) rather than a genuine absence — **inconclusive, not confirmed as a sender-side defect**.
- `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe): not detected, same caveat as above.
- `Authentication-Results` (SPF/DKIM/DMARC pass/fail): not detected via the relay — authentication status is **unknown**, not confirmed failing.
- No unsubscribe link or physical-address footer is visible in the truncated HTML sample provided — cannot confirm CAN-SPAM footer compliance from available evidence (truncation limits, not a finding).

### 6. Email-to-Site Continuity (UTM, landing alignment)
No UTM parameters or destination landing URLs are visible in the truncated HTML, and the 37 tracking links were skipped by the prober — **continuity cannot be verified** from available data.

### 7. Recommendations
1. Add descriptive `alt` text to the two content images (`c301e24e...jpg`, `ad569dc5...png`); set `alt=""` on the tracking pixels to clear the accessibility warning without implying they need descriptive text.
2. Re-run header capture outside the AgentMail relay (e.g., direct SMTP/MIME dump) to get a definitive read on `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` before treating them as compliance gaps.
3. Re-run the link prober against the 37 skipped tracking/redirect URLs (with redirect-following enabled) to confirm final landing pages and UTM parameter continuity with the site.
4. Confirm with Lowe's ESP whether embedding the full recipient email in `sli.lowes.com/imp` query strings is intended practice, given cleartext PII exposure in logs/referrers.
## Recent history

- [[2026-08-21-get-up-to-35-off-select-appliances--tank-stud-home-improvement-fap6e]] — 8/10 (2026-08-21)
- [[2026-08-20-a-free-gift-and-a-fun-collectible-for-members--tank-stud-home-improvement-fap6e]] — 5/10 (2026-08-20)
- [[2026-08-19-up-to-50-off-patio-clearance-ends-tomorrow--tank-stud-home-improvement-fap6e]] — 8/10 (2026-08-19)

