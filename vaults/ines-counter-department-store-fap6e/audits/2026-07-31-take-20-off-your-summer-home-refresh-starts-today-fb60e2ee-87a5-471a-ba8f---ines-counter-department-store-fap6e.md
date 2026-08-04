---
slug: 2026-07-31-take-20-off-your-summer-home-refresh-starts-today-fb60e2ee-87a5-471a-ba8f---ines-counter-department-store-fap6e
type: email
date: 2026-07-31
persona: ines-counter-department-store-fap6e
score: "5/10"
sender: "Kohl's Friends & Family"
subject: Take 20% off ... your summer home refresh starts today ☀️
tags: [email, score-5, sender/kohl-s-friends-family]
---
# Take 20% off ... your summer home refresh starts today ☀️
**Score:** 5/10 · **Type:** Email audit · **2026-07-31**
## Full review
## Technical Audit

## Technical Audit: Kohl's Friends & Family — "Take 20% off" (260731_DG_Email_Fri_PM)

**1. Technical Summary**
Standard Cheetah Digital/CoherentPath (`chp.kohls.com`) ESP template with MSO/Outlook conditionals and responsive media queries; automated QA passed 43% of checks, flagging gaps in unsubscribe headers, sender authentication, physical address, and image alt text.

**2. Link & Tracking Issues**
- 59 tracking/click-redirect links were skipped by the automated HTTP probe (unable to confirm destination validity or redirect chains).
- Multiple tracking pixels fire on open: `click.chp.kohls.com/o/9e1e...` (1x1, carries encoded `cp_tp` payload), `mi.kohls.com/p/up/88954bbbbcab3c0e/o.gif`, `click.s.kohls.com/open.aspx?OWI6EK7LYIDEZEJNB7RAJNN3JY.60262`, and an Adobe Audience Manager call to `kohls.demdex.net/event?d_sid=13245196`. This is a heavier-than-typical open-tracking stack (4 separate beacons) but not itself a defect.
- No broken/malformed `href` values found in the visible source.

**3. Rendering & Accessibility**
- Doctype is HTML 4.01 Transitional — outdated but standard practice for email client compatibility (not a defect).
- `<meta name="viewport">` sets `user-scalable=0`, which disables pinch-zoom — an accessibility concern for low-vision users.
- 9 images missing `alt` text, all tracking pixels/beacons (`o.gif`, `event`, and six `mi.kohls.com/p/rp/*.png` re-engagement pixels). Since these are non-visual tracking assets, missing alt is low-impact but should still carry `alt=""` with `role="presentation"` for strict HTML validation — one instance (`click.chp.kohls.com/o/...`) is malformed with a stray `</custom>` closing tag with no matching opener, immediately after it in the source.
- Malformed markup: `<img ... /></custom>` — an unmatched closing tag inside the open-tracking `<div>`. Not visually impactful but is invalid HTML.

**4. Personalization & Merge Tokens**
No merge tags (e.g. `{{first_name}}`, `*|FNAME|*`) observed in the visible/truncated HTML. Cannot fully confirm absence beyond the truncation point.

**5. Compliance (CAN-SPAM, unsubscribe, authentication)**
- `List-Unsubscribe` header: not found — may be a relay-capture artifact (AgentMail) rather than true absence; cannot confirm from headers alone.
- `List-Unsubscribe-Post` (RFC 8058, one-click unsubscribe): not found — same caveat.
- No physical mailing address detected in the truncated body — CAN-SPAM requires one; the footer containing it may be beyond the truncation cutoff, so this should be verified against the full HTML before treating as a confirmed violation.
- `Authentication-Results` header (SPF/DKIM/DMARC): not found — status unknown, likely also a relay-capture gap rather than a sending-domain failure.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
- Primary CTA links route through the `click.chp.kohls.com` ESP redirect domain with opaque `mi_mid`, `mi_cid`, `cp_cid`, and encoded `cp_tp` tracking blobs rather than plain UTM parameters (`utm_source`/`utm_medium`/`utm_campaign`) — standard for this ESP.
- Because all 59 tracking links were skipped by the automated probe, actual landing-page URLs and any UTM params appended post-redirect could not be verified in this pass.
- The `<meta name="referrer" content="no-referrer">` tag suppresses referrer data from any outbound navigation in the message — if the ESP relies on referrer headers (rather than query params) for attribution, this could suppress campaign attribution on landing.

**7. Recommendations**
- Fix the stray `</custom>` tag near the `click.chp.kohls.com` open pixel.
- Add `alt=""` to the 9 tracking/beacon images for HTML validity.
- Remove `user-scalable=0` from the viewport meta to preserve pinch-zoom accessibility.
- Re-run the link probe against the 59 skipped tracking URLs (follow redirects) to confirm final landing URLs and UTM alignment.
- Confirm `List-Unsubscribe`/`List-Unsubscribe-Post` and `Authentication-Results` are present in raw headers at the source (pre-relay) — current findings may reflect AgentMail relay capture rather than actual sender configuration.
- Confirm a physical mailing address exists in the full (non-truncated) footer.
## Recent history

- [[2026-07-31-hot-on-social-for-a-reason-hp2v610000019fb8538905c0--ines-counter-department-store-fap6e]] — 8/10 (2026-07-31)
- [[2026-07-31-fashion-finds-matching-sets--ines-counter-department-store-fap6e]] — 5/10 (2026-07-31)
- [[2026-07-31-special-20-savings-are-sweet-kohl-s-cash-is-the-cherry-on-top--ines-counter-department-store-fap6e]] — 6/10 (2026-07-31)

