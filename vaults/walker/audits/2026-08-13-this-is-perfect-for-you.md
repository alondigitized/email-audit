---
slug: 2026-08-13-this-is-perfect-for-you
type: email
date: 2026-08-13
persona: walker
score: "4/10"
sender: SKECHERS
subject: This is perfect for you!
tags: [email, score-4, sender/skechers]
---
# This is perfect for you!
**Score:** 4/10 · **Type:** Email audit · **2026-08-13**
## Full review
## Technical Audit

1. Technical Summary
The email fails on both broken links (401/400 responses) and lacks a plain-text MIME part, alongside widespread non-HTTPS image sourcing.

2. Link & Tracking Issues
- Product image link returns HTTP 401: `https://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu5avyAvDTfGQTJtnEIgsZidubkhEbGZfHSB0rtDphj4IE...` (link text: "Image of Men's OG Anunoby Limited Edition: SKX Nexus NYC Blue (Pre-Order) Basket")
- Unsubscribe link returns HTTP 400: `https://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu5avyAvDTfGQbua6CZqR1ErPMp2bSFS3jZfyDWjlmxsiKiFGWozVAXb47j...`
- All links route through Attentive's click-tracking redirector (`skechers.attentivemail.com/ls/click`) with opaque `upn=` tokens — standard ESP wrapping, no anomalies in structure itself beyond the two failures above.
- Open-tracking pixel present and reachable: `https://skechers.attentivemail.com/wf/open?upn=u001.7nMkDPHKJYuSqu77FUwRx5aYih1RC1JYvx63s2buCgNSgkIy6cGBHVfYW4dC4A4p7IEY` (image missing `alt=""`, flagged separately below).

3. Rendering & Accessibility
- 12 image assets served over `http://` instead of `https://` (e.g., `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png`, plus app-store, payment, social, and store-locator icons). Mixed-content blocking in modern mail clients may render these as broken images.
- Two images missing `alt` text: `402150_SLBK_GIF` (src: `https://images.skechers.com/image;width=800%2Cformat=auto/402150_SLBK_GIF`) and `a6ec5198-5437-4eaa-8613-eacc775726f9.jpg`.
- Tracking pixel (`/wf/open`) also missing `alt` text — low-impact since it's non-visual, but flag for consistency.
- Responsive CSS media query at `max-width:620px` present with proper `.mobile_hide`/`.desktop_hide` toggling and stacked-column fallback — no structural issues found.

4. Personalization & Merge Tokens
No issues found — no unresolved merge tags (e.g., `{{first_name}}`, `%%FIELD%%`) present in the truncated HTML.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- Unsubscribe link is present in the markup but returns HTTP 400 when probed — functionally broken unsubscribe mechanism is a CAN-SPAM compliance risk (unsubscribe must work, not just be present).
- Sender uses a dedicated subdomain (`hello@msgs.skechers.com`) consistent with ESP-managed authentication (SPF/DKIM typically configured at subdomain level), but authentication headers (SPF/DKIM/DMARC results) are not present in the supplied source/QA data — cannot confirm pass/fail.
- Physical mailing address not visible in the truncated HTML provided — cannot confirm CAN-SPAM footer requirement from available evidence.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot assess: all outbound links are wrapped in Attentive's opaque `upn=` redirector tokens rather than exposing destination URLs with UTM parameters directly in the source. Final landing-page UTM alignment cannot be verified without following redirects.

7. Recommendations
- Fix or re-generate the broken product image link (401) and unsubscribe link (400) — both currently fail on click, and the unsubscribe failure is a compliance issue, not just UX.
- Migrate all 12 `http://image.emails.skechers.com/...` asset references to `https://` to avoid mixed-content blocking in mail clients.
- Add descriptive `alt` text to `402150_SLBK_GIF` and `a6ec5198-5437-4eaa-8613-eacc775726f9.jpg`.
- Add a plain-text MIME alternative — current plain-text part is 0 chars, which hurts deliverability/spam scoring and breaks plain-text-preferring clients.
## Recent history

- [[2026-08-13-did-you-forget-something]] — 4/10 (2026-08-13)
- [[2026-08-12-your-cart-expires-soon]] — 5/10 (2026-08-12)
- [[2026-08-12-up-to-40-off-select-nike-you-need]] — 3/10 (2026-08-12)

