---
slug: 2026-07-28-brooke-earn-up-to-150-000-bonus-points-toward-your-next-vacation-hp2v710000019fa9a9e20696
type: email
date: 2026-07-28
persona: brooke-bonvoy-marriott-fap6e
score: "7/10"
sender: Marriott Bonvoy
subject: Brooke, Earn up to 150,000 Bonus Points Toward Your Next Vacation
tags: [email, score-7, sender/marriott-bonvoy]
---
# Brooke, Earn up to 150,000 Bonus Points Toward Your Next Vacation
**Score:** 7/10 · **Type:** Email audit · **2026-07-28**
## Full review
## Technical Audit

# Technical Audit: Marriott Bonvoy — "Earn up to 150,000 Bonus Points"

## 1. Technical Summary
The email uses a Salesforce Marketing Cloud-style tracking-redirect layer (`email-marriott.com/T/...`) that is failing broadly — 6 of 12 probed material links return errors, including the unsubscribe link — alongside missing unsubscribe headers and a missing plain-text part.

## 2. Link & Tracking Issues
- **5 links return HTTP 403** through the `email-marriott.com/T/...` redirect wrapper: both "find & reserve" CTAs, two "Marriott Bonvoy" logo/header links, and the UNSUBSCRIBE link. Evidence: `.../T/v710000019fa9a9e2069633036e96c566a0/.../77e9a674-b741-450c-a3ea-610710a78ba2?__dU__=...&__F__=...` — the redirect service itself is rejecting these requests, not the destination.
- **"MY ACCOUNT" link fails with `unknown url type` error.** The decoded destination is a scheme-relative path: `/loyalty/myAccount/default.mi?enrollmentSourceCode=INCK&nck=1028103536&ck=10505853&lk=1000301947` — missing `https://` and host, so the redirect target itself is malformed, not just blocked.
- 12 of 45 total links were probed (33 deprioritized as footer/utility/social); 6 of the 12 probed failed — a 50% failure rate on the links most likely to be clicked.

## 3. Rendering & Accessibility
- 4 images missing `alt` text: `icon_more-points_top.png`, `icon_room-upgrades_top.png`, `icon_late-checkout_top.png` (functional benefit icons — screen readers will skip them silently), plus one open/tracking-style image (`.../O/v710000019fa9a9e2069633036e96c566a0/77e9a674b741450c00004c5a42963aa1`).
- Outlook/MSO conditional comments (`<!--[if mso]>`), `x-apple-disable-message-reformatting`, and `format-detection` meta are all correctly present — no issues found in Outlook/iOS rendering safeguards.
- Multiple `@font-face` declarations reference `http://` (non-HTTPS) font URLs alongside `https://` ones (e.g., `Aldine-Regular` and `Aldine-Regular-Italic` both load a `.woff` fallback via `http://cache.marriott.com/...`) — mixed-content risk in HTTPS mail clients that enforce it, though most clients block remote fonts by default regardless.

## 4. Personalization & Merge Tokens
No issues found. The subject line and `<title>` correctly resolve the first-name token ("Brooke, Earn up to 150,000 Bonus Points...") with no unresolved placeholders (e.g., `{{FirstName}}` or `%%FirstName%%`) visible in the provided source.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — one-click unsubscribe via mail client UI is unavailable (or was stripped before reaching the AgentMail relay).
- **List-Unsubscribe-Post header not found (RFC 8058)** — no one-click POST unsubscribe support confirmed.
- **In-body UNSUBSCRIBE link returns 403** (see §2) — combined with the missing headers above, this leaves no verified working unsubscribe path in this capture, which is a functional compliance risk under CAN-SPAM's requirement for a working opt-out mechanism.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status cannot be confirmed from this capture.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot verify. All outbound links are wrapped in an opaque tracking redirector (`__dU__` / `__F__` encoded params) rather than exposing plain UTM query parameters, and every probed CTA/logo link returned a 403 before reaching a landing page — so destination URL structure and UTM tagging can't be inspected or validated against site landing pages in this capture.

## 7. Recommendations
1. Investigate the redirect service returning 403s for `email-marriott.com/T/...` links — this is likely an IP/UA-based block on the QA prober or a genuine outage in the ExactTarget/SFMC tracking layer; re-test from an unblocked source to confirm which.
2. Fix the malformed "MY ACCOUNT" redirect target — it's missing `https://` + host before `/loyalty/myAccount/default.mi`.
3. Restore `List-Unsubscribe` and `List-Unsubscribe-Post` headers, and confirm the in-body unsubscribe link resolves — this is the highest-priority fix given CAN-SPAM exposure.
4. Add a non-empty plain-text MIME part (currently 0 chars).
5. Add `alt` text to the three benefit icons (`icon_more-points_top.png`, `icon_room-upgrades_top.png`, `icon_late-checkout_top.png`).
6. Serve the two `http://` font fallback URLs over HTTPS to eliminate mixed-content warnings.
## Recent history

- [[2026-07-24-this-summer-say-yes-to-ultimate-sophistication-at-the-st-regis-toronto]] — 9/10 (2026-07-24)
- [[2026-07-23-offer-ends-soon-earn-125k-points-1-free-night-brooke]] — 8/10 (2026-07-23)
- [[2026-07-14-earn-125k-points-1-free-night-100-in-airline-credits-brooke]] — 8/10 (2026-07-14)

