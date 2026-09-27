---
slug: 2026-09-22-destination-deals-save-up-to-30-right-now
type: email
date: 2026-09-22
persona: iris-indigo-ihg-fap6e
score: "6/10"
sender: IHG One Rewards
subject: "Destination Deals: Save up to 30% right now"
tags: [email, score-6, sender/ihg-one-rewards]
---
# Destination Deals: Save up to 30% right now
**Score:** 6/10 · **Type:** Email audit · **2026-09-22**
## Full review
## Technical Audit

1. **Technical Summary**
Email renders with standard MSO/mobile-responsive scaffolding, but ships a broken CTA link and lacks visible unsubscribe/authentication headers in the captured data.

2. **Link & Tracking Issues**
- **Broken link (403):** "Terms apply." link fails: `https://www.ihg.com/offers/destination-deals?cm_mmc=EMAIL-_-IHGOR-_-AMER-_-en-_-REV-_-DestinationDeals_20262583-_-SENDURLID-_-538906&mi_u=695150425&mi_ecmp=538906&trso=EMAIL_538906#below`. Returns 403 — likely a WAF/bot-block on the query string or an unresolved `SENDURLID` merge token that should have been replaced with a real send ID before delivery.
- 20 tracking/redirect links were skipped from HTTP probing per QA design (expected, not a defect).
- One pixel uses `http://` instead of `https://`: `http://mi.ihg.com/p/up/2b47e4754a78cfd7/o.gif?mi_u=695150425&mi_ecmp=538906&...` — non-HTTPS resources may be blocked by mail clients enforcing mixed-content policies.

3. **Rendering & Accessibility**
- Two images missing `alt` text: tracking pixel `0037y00002BeqgfAAB` (src: `https://pxl.mon-trk.com/954cb38e-4a43-4730-b327-6b102c213a01/538906/0037y00002BeqgfAAB`) and the `mi.ihg.com` open pixel above. Both are 1x1 tracking pixels, so the missing alt has no user-facing impact but should still be `alt=""` for strict HTML validation.
- MSO conditional comments and `ExternalClass`/`ReadMsgBody` resets are present, indicating standard Outlook/webmail compatibility handling — no issues found there.

4. **Personalization & Merge Tokens**
- The broken CTA URL contains a literal, unresolved placeholder: `SENDURLID` in `cm_mmc=...-_-SENDURLID-_-538906`. This looks like a merge-tag failure — the token should have been substituted with a unique send/message ID at render time. This is a plausible root cause of the 403 (malformed/invalid tracking parameter triggering the destination WAF).

5. **Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header not found. Cannot confirm CAN-SPAM/one-click unsubscribe compliance from header data alone; may be present in-body or stripped by the AgentMail relay rather than genuinely absent — flag as unverified, not confirmed missing.
- `List-Unsubscribe-Post` (RFC 8058) not found — one-click unsubscribe support cannot be confirmed.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status is unknown from this capture; cannot confirm sender authentication.
- Note: all three are QA-tool-side WARNs attributable to the relay's header handling, not necessarily sender-side failures — recommend verifying against raw headers at the source MTA before treating as compliance defects.

6. **Email-to-Site Continuity (UTM params, landing page alignment)**
- Tracking params use IHG's own `cm_mmc` schema (EMAIL-_-IHGOR-_-AMER-_-en-_-REV-_-DestinationDeals_...) rather than standard `utm_*` params — internal convention, not a defect.
- Landing page continuity cannot be verified because the primary offer link 403s before reaching `ihg.com/offers/destination-deals`.

7. **Recommendations**
- Fix the unresolved `SENDURLID` merge token in the "Terms apply." link before send; re-test the resulting URL for a 200 response.
- Change the `mi.ihg.com` pixel from `http://` to `https://`.
- Add `alt=""` to the two tracking pixel `<img>` tags for HTML validity.
- Verify `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` against raw source headers (outside the AgentMail relay) to confirm whether these are true compliance gaps or artifacts of the relay capture.
## Recent history

- [[2026-08-13-earn-140k-bonus-points-and-earn-on-everyday-spend]] — 6/10 (2026-08-13)
- [[2026-08-06-hurry-your-20-000-points-offer-checks-out-soon]] — 9/10 (2026-08-06)
- [[2026-08-06-earn-140k-bonus-points-enough-for-up-to-4-nights]] — 9/10 (2026-08-06)

