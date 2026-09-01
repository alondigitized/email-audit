---
slug: 2026-09-01-be-the-first-to-shop-10-40-panties
type: email
date: 2026-09-01
persona: lacey-belle-vs-fap6e
score: "7/10"
sender: Panty Party at PINK
subject: Be the First to Shop 10/$40 Panties 🩲
tags: [email, score-7, sender/panty-party-at-pink]
---
# Be the First to Shop 10/$40 Panties 🩲
**Score:** 7/10 · **Type:** Email audit · **2026-09-01**
## Full review
## Technical Audit

1. Technical Summary
Standard SFMC-templated PINK/VS email with functioning mobile-responsive markup, but ships with a broken CTA link, multiple non-HTTPS tracking pixels, and no visible unsubscribe/authentication headers in the captured payload.

2. Link & Tracking Issues
- Broken link (400): SMS signup CTA — "Lets text. Sign up for SMS and be the first to know about new offers and more." → `https://vspink.attn.tv/p/LSA/landing-page` returns HTTP 400.
- 54 tracking/click-redirect links (click.e1.victoriassecret.com, dotomi.com, etc.) were skipped by the automated HTTP probe per policy — not independently verified, flagged for awareness only.
- Multiple third-party ad-tracking pixels load over plain `http://` rather than `https://`:
  - `http://mi.victoriassecret.com/p/up/bc3d99b3ec2e075f/o.gif?...`
  - `http://login.dotomi.com/ucm/UCMController?...`
  - `http://ads.dotomi.com/cookieredir/2482/pub1.php` through `pub10.php`
  Mixed-content/non-HTTPS image sources may be blocked by mail clients that enforce TLS, silently degrading tracking accuracy.

3. Rendering & Accessibility
- Missing `alt` attributes on all tracking pixel `<img>` tags (o.gif, dotomi UCMController image, pub1–pub10.php, and `5bcec3ac-502d-4d8f-b48c-0a3d20e6e3c2.png`). The pixels are 1x1 trackers so alt text is not visually meaningful, but the content image (`5bcec3ac-...png`) missing alt text is a genuine accessibility gap for screen readers.
- Media queries and MSO conditional comments for Outlook are present and structured correctly; no malformed CSS or missing `<!--[if mso]-->` fallback detected in the truncated source.

4. Personalization & Merge Tokens
- An `AMPScript v0` block is present but empty (`<!-- Ampscript v0 START --> <!-- Ampscript v0 END -->`) — no visible personalization/merge tokens rendered in the captured HTML. Cannot confirm whether this indicates a stripped/unresolved dynamic content block or an intentionally empty placeholder without the original template source.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- List-Unsubscribe header not found in the captured message — may be a limitation of the AgentMail relay capture rather than the sender's actual headers; cannot confirm absence at the source.
- List-Unsubscribe-Post header (RFC 8058, one-click unsubscribe) not found — same caveat as above.
- Authentication-Results header (SPF/DKIM/DMARC) not found — SPF/DKIM/authentication status cannot be verified from this capture.
- No unsubscribe link or physical mailing address visible in the truncated HTML source provided; cannot confirm CAN-SPAM footer compliance without the full email body.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- SMS signup CTA destination (`vspink.attn.tv/p/LSA/landing-page`) is broken (400), breaking the intended email-to-landing-page flow for that CTA.
- Email campaign is tagged with `mi_ecmp=20260901_PK_6063_FILEBAL` and `dtmc_email_category=20260901_PK_6063_FILEBAL` in tracking pixel query strings, consistent internal campaign tagging between pixel vendors.
- Insufficient visibility into primary shop-now/product CTA URLs (truncated before rendering) to assess UTM parameter alignment with landing pages.

7. Recommendations
- Fix or remove the SMS signup CTA link (`vspink.attn.tv/p/LSA/landing-page`, currently 400).
- Serve all tracking pixels over HTTPS (mi.victoriassecret.com, login.dotomi.com, ads.dotomi.com/cookieredir) to prevent blocking by TLS-enforcing mail clients.
- Add `alt=""` to decorative/tracking pixel images (already effectively empty content, but formalizes accessibility intent) and a descriptive `alt` attribute to the content image `5bcec3ac-502d-4d8f-b48c-0a3d20e6e3c2.png`.
- Verify List-Unsubscribe / List-Unsubscribe-Post and Authentication-Results headers exist at the true send source, since their absence here may be an artifact of the AgentMail relay rather than the sender.
- Confirm whether the empty AMPScript block is expected or reflects a personalization token that failed to resolve.
## Recent history

- [[2026-08-19-last-day-25-off-when-you-spend-75]] — 6/10 (2026-08-19)
- [[2026-08-18-final-hours-40-off-extra-10-off-for-members]] — 7/10 (2026-08-18)
- [[2026-08-18-40-off-extra-10-off-for-members]] — 6/10 (2026-08-18)

