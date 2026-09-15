---
slug: 2026-09-15-20-off-kohl-s-cash-for-our-kohl-s-rewards-members--ines-counter-department-store-fap6e
type: email
date: 2026-09-15
persona: ines-counter-department-store-fap6e
score: "5/10"
sender: Kohl’s
subject: "20% off + Kohl's Cash for our Kohl's Rewards members 🤩"
tags: [email, score-5, sender/kohl-s]
---
# 20% off + Kohl's Cash for our Kohl's Rewards members 🤩
**Score:** 5/10 · **Type:** Email audit · **2026-09-15**
## Full review
## Technical Audit

1. **Technical Summary**
Multi-domain tracking-heavy Kohl's email with no unsubscribe/authentication headers detected and multiple untagged tracking pixels.

2. **Link & Tracking Issues**
- 61 tracking/click-redirect links (`click.chp.kohls.com`, `click.s.kohls.com`) skipped HTTP probing — link validity unconfirmed.
- Open-tracking pixel: `click.s.kohls.com/open.aspx?7FC62LQ4ZGAEXACF6PN7CLX4FU.60269&d=60269&bmt=0`.
- Additional beacons: `mi.kohls.com/p/up/88954bbbbcab3c0e/o.gif` and Adobe Audience Manager pixel `kohls.demdex.net/event?d_sid=13245196`.
- Example tracked link param structure: `click.s.kohls.com/?qs=ABB7InYiOjEsImQiOjUwMDB9...` (opaque base64-style payload, cannot verify destination without probing).

3. **Rendering & Accessibility**
- 9 images missing `alt` text (QA-flagged), including tracking pixels (`f7d9db48...`, `o.gif`, `event`) and open-rate beacons (`2a5adc5a...png`, `f441d45d...png`, `c2f81e9a...png`, `415c8a18...png`, `69494b48...png`, `78308d1d...png`, `916d6fa0...png`). Tracking pixels lack `alt=""`/`aria-hidden="true"` in most cases — only `event` and `o.gif` have `alt=""` set, others have no alt attribute at all.
- `<meta name="robots" content="noindex, nofollow">` and `<meta name="referrer" content="no-referrer">` present — expected for transactional/marketing email, not a defect.
- Malformed markup: stray `</custom>` closing tag after the `open.aspx` tracking `<img>` with no matching opening tag — invalid HTML that may cause unpredictable DOM handling in web-based email clients.
- Responsive breakpoint at `max-width: 500px` present with `.container`, `.w_50pc`/`.w_60pc`/`.w_35pc` fluid-width classes — standard mobile-responsive pattern, no issue found.

4. **Personalization & Merge Tokens**
No unresolved merge tokens (e.g. `{{first_name}}`, `%%FIELD%%`) found in the truncated source. No issues found in the visible content.

5. **Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header not found — may be a capture gap in the AgentMail relay rather than absence in the original send, but cannot be confirmed either way from available data.
- `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe) header not found — same caveat.
- No physical mailing address detected in the truncated HTML — CAN-SPAM requires one; not confirmed absent since source is truncated, but flagged per QA output.
- `Authentication-Results` header not found — SPF/DKIM pass/fail status cannot be verified from available data.

6. **Email-to-Site Continuity (UTM params, landing page alignment)**
- Tracking links use Kohl's proprietary redirect params (`mi_cid`, `mi_mid`, `mi_u`, `mi_ecmp`, `mi_kc_redm_end_dte`, `email_name=260915_DG_Email_Tuesday`) rather than standard UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) — cannot verify landing-page UTM alignment since all 61 click links were skipped by the automated probe.
- Landing page destinations unverified — no probe data available to confirm links resolve to live, matching pages.

7. **Recommendations**
- Add `alt=""` and `aria-hidden="true"` to all remaining tracking-pixel/beacon `<img>` tags missing alt attributes (7 of 9 flagged images).
- Remove the orphaned `</custom>` closing tag near the `open.aspx` pixel to produce valid HTML.
- Confirm with the sending platform whether `List-Unsubscribe`/`List-Unsubscribe-Post` headers and a physical address are present in the actual outbound send — current findings may reflect relay capture gaps rather than true absence, so verify against raw SMTP headers before treating as a compliance violation.
- Re-run link-destination probing directly against a sample of the 61 skipped tracking URLs to confirm they resolve and that final landing pages align with campaign intent.
## Recent history

- [[2026-09-14-just-in-1-000-new-fall-arrivals--ines-counter-department-store-fap6e]] — 5/10 (2026-09-14)
- [[2026-09-14-did-you-hear-the-big-news-hp2v61000001a0a0b59fab8c--ines-counter-department-store-fap6e]] — 4/10 (2026-09-14)
- [[2026-09-14-target-graying-and-thinning-hair-with-this-new-k18-serum-hp2v61000001a0a003255ca2--ines-counter-department-store-fap6e]] — 6/10 (2026-09-14)

