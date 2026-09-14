---
slug: 2026-09-14-3-hair-cream-styling-slays--vera-glow-beauty-fap6e
type: email
date: 2026-09-14
persona: vera-glow-beauty-fap6e
score: "5/10"
sender: e.l.f. Hair
subject: 3 hair cream styling slays 💁‍♀️
tags: [email, score-5, sender/e-l-f-hair]
---
# 3 hair cream styling slays 💁‍♀️
**Score:** 5/10 · **Type:** Email audit · **2026-09-14**
## Full review
## Technical Audit

1. Technical Summary
Email fails 73% of automated checks: four merge-tokenized product/account links resolve to malformed relative-path URLs, plain-text fallback is empty, and unsubscribe/authentication headers are unverifiable via the current relay.

2. Link & Tracking Issues
- 4 of 12 probed links return "unknown url type" errors, all sharing the pattern of a relative path plus an unencoded/partially-encoded query string appended after the Braze redirect resolves:
  - `/products/power-grip-primer?Size=Regular+0.8+oz+%2F+24+ml` ("Shop Now")
  - `/products/cream-glide-lip-liner?Color=Pinky+Swear+-+Beige+Pink` ("Shop Now")
  - `/account/login?return_to=%2Faccount` ("Receipt scanning" link)
  - `/pages/mobile-app?source_caller=ui&af_reengagement_window=30d&shortlink=email&is_retargeting=true&utm_source=broadcast&pid=Email&ut…` ("Download the e.l.f. app" link, query string also appears truncated)
  - These are relative paths, not absolute URLs — the Braze click-tracking redirect (`links.elfcosmetics.com/f/a/...`) is not resolving them to a full destination host, or the destination target itself was saved as a relative path in the ESP.
- Remaining 8 probed links resolved without error; 28 lower-priority (footer/social/utility) links were deprioritized and not probed — no data on their validity.

3. Rendering & Accessibility
- One image lacks alt text: `src="https://links.elfcosmetics.com/q/kr1OSO83TAHUfM8_8jjYww~~/AAQRxRA~/WFqe1cqWgfyJBB51AFcrp8dPSvrWYd4fCc2gTDUiq89UAE_VETecG"` — no `alt` attribute present.
- Header logo image does carry `alt="e.l.f." title="e.l.f."` — correctly labeled.
- Responsive CSS (`@media max-width:660px`, `.stack .column`, `.mobile_hide`/`.desktop_hide`) and MSO/Outlook conditional blocks are present and structured normally — no issues found.
- Preheader text present and hidden correctly (`display:none !important` div with "Featuring 3-in-Wonder Magic Styling Cream.").

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{...}}`, `%%...%%`) found in the visible HTML source provided.
- The four broken links above appear to be personalization/variant outputs (size, color, account return-path) that didn't get correctly templated into absolute URLs — this is the likely root cause of the link failures in §2, not a separate token-rendering bug.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header: not found by the QA scan. Note QA flags this may be a relay-capture limitation (AgentMail) rather than a confirmed absence — cannot be conclusively judged from this data alone.
- `List-Unsubscribe-Post` (RFC 8058, one-click unsubscribe): not found — same relay caveat applies.
- `Authentication-Results` (SPF/DKIM): not found — same relay caveat applies.
- An unsubscribe link is confirmed present in the footer per QA notes ("an unsubscribe link is always included"), though it was not one of the 12 probed links so its destination validity is unconfirmed.
- Recommend re-verifying header presence via a direct raw-source capture (not through AgentMail relay) before treating these as true failures.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Only the mobile-app link exposes visible UTM/attribution params in this data (`utm_source=broadcast`, `source_caller=ui`, `af_reengagement_window=30d`, `pid=Email`, plus an `af_...` AppsFlyer chain) — and that link is itself broken (§2), so continuity cannot be verified end-to-end.
- No UTM parameters are visible on the two product deep links or the account link — cannot confirm whether tracking parameters are stripped by the broken-link condition or were never present; unresolvable from truncated source.
- Landing page alignment cannot be assessed since none of the flagged destination paths resolve to a live URL.

7. Recommendations
- Fix the redirect/templating logic generating the four broken links so they resolve to absolute URLs (`https://www.elfcosmetics.com/...`) before send — this is a hard blocker (CAN-SPAM-adjacent risk only inasmuch as broken links reduce list health/complaint-driven signals, primarily a functional bug).
- Add `alt` text to the image at `.../WFqe1cqWgfyJBB51AFcrp8dPSvrWYd4fCc2gTDUiq89UAE_VETecG`.
- Generate a non-empty plain-text MIME alternative (currently 0 chars) — required for CAN-SPAM-conscious deliverability and spam-filter scoring.
- Re-run header capture outside the AgentMail relay to get a definitive read on `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` before escalating as compliance failures.
- Once links are fixed, re-probe the mobile-app link fully (query string was truncated in this scan) and confirm UTM parameters survive the redirect to the landing page.
## Recent history

- [[2026-09-14-did-you-hear-the-big-news-hp2v61000001a0a0b59f998c--vera-glow-beauty-fap6e]] — 6/10 (2026-09-14)
- [[2026-09-14-did-you-hear-the-big-news--vera-glow-beauty-fap6e]] — 5/10 (2026-09-14)
- [[2026-09-14-save-more-when-you-stock-up-5745af2e-ee5f-4616-90e8---vera-glow-beauty-fap6e]] — 5/10 (2026-09-14)

