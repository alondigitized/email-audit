---
slug: 2026-09-15-don-t-miss-this-earn-125k-bonus-points-a-150-statement-credit-brooke-ends-9-30
type: email
date: 2026-09-15
persona: brooke-bonvoy-marriott-fap6e
score: "6/10"
sender: Marriott Bonvoy
subject: "Don't Miss This: Earn 125K Bonus Points + a $150 Statement Credit, Brooke. Ends 9/30"
tags: [email, score-6, sender/marriott-bonvoy]
---
# Don't Miss This: Earn 125K Bonus Points + a $150 Statement Credit, Brooke. Ends 9/30
**Score:** 6/10 · **Type:** Email audit · **2026-09-15**
## Full review
## Technical Audit

1. Technical Summary
The email fails widely on technical QA: all sampled tracked links (including UNSUBSCRIBE) return 403, plain-text fallback is empty, and unsubscribe compliance headers are absent.

2. Link & Tracking Issues
- 6 of 12 probed tracked links return HTTP 403 via the ESP redirector (email-marriott.com/T/...), including both "find & reserve" CTAs and both "Marriott Bonvoy" header links.
- "MY ACCOUNT" link fails with `unknown url type: '/loyalty/myAccount/default.mi?enrollmentSourceCode=INCK&nck=1028103536&ck=11585360&lk=1000301947'` — the destination appears to be a relative path passed into the tracking wrapper without a resolvable scheme/host.
- UNSUBSCRIBE link also returns 403 — see Compliance section; this compounds the missing List-Unsubscribe header issue.
- 33 additional links were not probed (deprioritized footer/utility/social); status unknown.

3. Rendering & Accessibility
- Three images missing `alt` text: tracking pixel `8a9dff261df04c4100004c5a42963aa1`, `CS0653179-icon_more-points_top.png`, `CS0653179-icon_late-checkout_top.png`.
- Multiple `@font-face` sources use `http://` instead of `https://` (e.g. `http://cache.marriott.com/aka-fonts/MarriottDigital/AldineforMarriott-Roman.woff`), which will be blocked as mixed content in clients that render remote CSS over HTTPS.
- No other structural rendering issues identified in the provided source (MSO conditional comments, viewport meta, and Apple reformatting-disable meta are present and correctly formed).

4. Personalization & Merge Tokens
- Subject line includes resolved first-name token ("Brooke") with no unresolved `{{...}}` or `%%...%%` placeholders visible — merge appears to have resolved correctly in the provided data.
- No merge-token artifacts found in the truncated HTML source provided.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- List-Unsubscribe header: not found.
- List-Unsubscribe-Post header (RFC 8058, one-click unsubscribe): not found — combined with the missing List-Unsubscribe header, this is a CAN-SPAM/RFC 8058 gap if confirmed absent at the actual SMTP layer (note: QA flags this may be a relay-capture artifact rather than a true absence).
- The in-body UNSUBSCRIBE link itself is broken (403), which is a functional CAN-SPAM issue independent of the header question — recipients have no working unsubscribe mechanism via either path.
- Authentication-Results header not found; SPF/DKIM pass/fail status cannot be confirmed from available data.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot verify UTM parameter presence/alignment — all sampled destination links resolve through the ESP redirector (`email-marriott.com/T/...`) and return 403 before reaching a final landing URL, so downstream query strings are not observable.
- No issues found regarding tracking-domain-to-landing-page hostname alignment, as no successful redirect was captured.

7. Recommendations
- Priority 1: Fix the 403s on the ESP redirect domain (email-marriott.com/T/...) — this is blocking all primary CTAs and the unsubscribe link; likely a campaign/link-set publishing or token-expiry issue on the ESP side.
- Priority 1: Repair the "MY ACCOUNT" link — the wrapped destination is a bare relative path (`/loyalty/myAccount/...`) instead of a fully-qualified URL, causing the redirector to reject it.
- Priority 1: Restore a non-empty plain-text MIME part (currently 0 chars) for deliverability and accessibility.
- Priority 2: Add `List-Unsubscribe` and `List-Unsubscribe-Post` headers (or confirm with the sending platform that they exist server-side and are only being dropped by the relay capture).
- Priority 3: Add `alt` text to the three flagged images.
- Priority 3: Change the two `http://` font URLs to `https://` to avoid mixed-content blocking.
## Recent history

- [[2026-08-18-new-members-earn-up-to-125k-points-automatic-elite-status]] — 6/10 (2026-08-18)
- [[2026-08-14-brooke-s-account-update-20-000-points-await]] — 6/10 (2026-08-14)
- [[2026-08-12-brooke-for-a-limited-time-earn-150-000-bonus-points]] — 8/10 (2026-08-12)

