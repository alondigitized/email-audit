---
slug: 2026-08-14-shop-the-finn-collection-starting-at-379
type: email
date: 2026-08-14
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Kids
subject: ⭐⭐⭐⭐⭐ Shop the Finn Collection, starting at $379
tags: [email, score-7, sender/crate-kids]
---
# ⭐⭐⭐⭐⭐ Shop the Finn Collection, starting at $379
**Score:** 7/10 · **Type:** Email audit · **2026-08-14**
## Full review
## Technical Audit

1. Technical Summary
Standard ESP-generated (Movable Ink/Salesforce-style) transactional HTML with heavy tracking instrumentation; core rendering and compliance markup is present, but alt-text coverage and unsubscribe/authentication header visibility have gaps.

2. Link & Tracking Issues
- 84 tracking/click-redirect links detected and skipped by the automated HTTP probe (domain-based redirect wrappers, likely `mi.crateandbarrel.com`/similar click-tracking domains) — destination URLs behind these redirects were not verified for validity.
- Beacon/pixel tracking present: Movable Ink open pixel (`mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png`, 6 instances) and LiveRamp/RLCDN pixel (`sr.rlcdn.com/448796.gif`, 5 sequential instances `n=1`–`n=5`) — multiple sequential fires may indicate duplicate beacon injection rather than a rendering issue per se, worth confirming with the ESP.
- Additional dynamic-visitor pixel: `dv.crateandbarrel.com/o/34065a9e-...?mi_mid=...&cp_tp=v`.

3. Rendering & Accessibility
- 33 distinct images (plus repeated tracking pixels) are missing `alt` attributes, including primary content images (e.g., `9ac34be9...jpg`, `ecb8e458...jpg`, `4ea42a45...jpg`) and a spacer image (`25_MI_Bottom_Spacer_40px_White`) that should at minimum have `alt=""` to be marked decorative. This impacts screen-reader users and image-blocked email clients, where no fallback text will render.
- MSO/Outlook conditional comments, `-webkit-text-size-adjust`, `x-apple-disable-message-reformatting`, and mobile media queries (`max-width:460px`) are correctly implemented, indicating standard cross-client rendering support.
- Malformed HTML comment found in `<head>`: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` — appears to be a leftover unfilled ESP template placeholder (typo "IMPUT" for "INPUT"), not a functional bug but indicates the template wasn't fully cleaned before send.

4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `%%`, `{{`, `[%`) or literal placeholder tokens visible in the truncated source. No issues found in the visible markup.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — one-click unsubscribe support cannot be confirmed at the header level; this may be a relay/capture artifact (per QA note) rather than a true absence, but should be verified against the raw MIME source.
- `List-Unsubscribe-Post` header (RFC 8058) not detected — if genuinely absent, the message does not support true one-click unsubscribe per Gmail/Yahoo 2024 bulk sender requirements.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status cannot be verified from available data.
- In-body unsubscribe link/footer was not visible in the truncated HTML sample provided, so CAN-SPAM footer compliance (physical address, unsubscribe link) cannot be confirmed from this excerpt.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- All observed CTA/product links are wrapped in click-tracking redirects (skipped by probe), so UTM parameter presence and final landing-page alignment could not be verified in this pass.
- No issues found in the visible tracking-pixel query strings (`mi_u`, `mi_mid`, `cp_tp` params are internal ESP/tracking identifiers, not UTM campaign params — expected for this platform).

7. Recommendations
- Add `alt` text to all 33 content images; add `alt=""` explicitly to the spacer/decorative image and tracking pixels to suppress redundant screen-reader announcements.
- Confirm via raw MIME headers (not just relay capture) whether `List-Unsubscribe` and `List-Unsubscribe-Post` are actually present — if truly absent, add both for RFC 8058 one-click unsubscribe compliance ahead of Gmail/Yahoo bulk-sender enforcement.
- Verify SPF/DKIM/DMARC alignment directly against `crateandbarrel.com`/`mail.crateandbarrel.com` sending infrastructure, since `Authentication-Results` wasn't captured by the relay.
- Remove the leftover template placeholder comment (`IMPUT HERE CLIENT FONT IMPORT SCRIPT`) from the `<head>` before future sends.
- Spot-check a sample of the 84 skipped tracking links by following redirects manually to confirm they resolve to live, UTM-tagged landing pages rather than 404s or missing UTM parameters.
## Recent history

- [[2026-08-14-a-collection-with-impeccable-energy-16b92712-4438-4698-9759-]] — 5/10 (2026-08-14)
- [[2026-08-14-the-high-chair-they-ll-use-until-middle-school-really-in-our-exclusive-color]] — 6/10 (2026-08-14)
- [[2026-08-14-the-quality-craftsmanship-is-amazing]] — 5/10 (2026-08-14)

