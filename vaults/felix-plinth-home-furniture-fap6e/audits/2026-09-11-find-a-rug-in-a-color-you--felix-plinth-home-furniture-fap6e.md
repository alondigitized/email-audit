---
slug: 2026-09-11-find-a-rug-in-a-color-you--felix-plinth-home-furniture-fap6e
type: email
date: 2026-09-11
persona: felix-plinth-home-furniture-fap6e
score: "6/10"
sender: Pottery Barn
subject: Find a rug in a color you ❤️
tags: [email, score-6, sender/pottery-barn]
---
# Find a rug in a color you ❤️
**Score:** 6/10 · **Type:** Email audit · **2026-09-11**
## Full review
## Technical Audit

1. Technical Summary
Standard Salesforce Marketing Cloud (MI-style) email with click-tracking redirects and open-pixel tracking; automated checks show missing List-Unsubscribe headers, no SPF/DKIM auth results, and widespread missing alt text.

2. Link & Tracking Issues
- 60 tracking/redirect links (e.g., `https://click.e.potterybarn.com/u/?qs=...`) were skipped by HTTP probing since they're click-redirect domains — not independently verified as live.
- Open-tracking pixel served over plaintext HTTP: `http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true&sv_sveme=lila-hearth-potterybarn-fap6e@etell.app` — this URL embeds the recipient's raw email address in a query string over an unencrypted connection.
- Secondary tracking pixel: `https://d.turn.com/r/dd/id/L21rdC84NjEvY2lkLzE3NDc3ODk3MzMvdC8y/cat/1` (third-party, turn.com).
- Additional click-tracking endpoint present: `https://clickcp.potterybarn.com/o/7663d50c-dafc-4ed8-bf7e-39103f24687d?mi_cid=677b44e6831b79f3&mi_mid=01a09169-6a80-7000`.

3. Rendering & Accessibility
- 46+ `<img>` tags missing `alt` attributes, including all product slice images (`slices_01.jpg` through `slices_18.jpg` across multiple modules) and hero/footer banners — screen readers and blocked-image fallback will show nothing.
- Two images loaded over insecure HTTP rather than HTTPS, which mail clients may block or flag:
  - `http://edm.potterybarn.com/pb/thekey/CC_Banner/PB/Foot_NonMem_PB.jpg`
  - `http://edm.potterybarn.com/pb/2022/0311_Key_CC_Email_BrandBanner/slices_02.jpg`
- `<style>` block contains stray PHP-style `header(...)` calls (`header('Content-Type: image/jpeg')`, cache-control headers) sitting inside a CSS `<style>` tag — inert as CSS but indicates a templating/build artifact leaking into the markup; won't render or execute but is dead code that should be stripped.
- Uses MSO/VML conditional comments and standard table-based layout patterns appropriate for legacy email client support (no issues).

4. Personalization & Merge Tokens
- No visible unresolved merge tags (e.g., `%%...%%` or `{{...}}`) in the truncated source.
- Recipient identity is passed via tracking query params rather than templated merge fields: `email=lila-hearth-potterybarn-fap6e@etell.app` (coreemail.html link) and `sv_sveme=lila-hearth-potterybarn-fap6e@etell.app` (open pixel) — both expose PII in plaintext URLs, the second over unencrypted HTTP.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- List-Unsubscribe header: not found — may be a relay capture gap (AgentMail) rather than a true absence; cannot confirm one-click unsubscribe compliance from headers alone.
- List-Unsubscribe-Post header (RFC 8058): not found — one-click unsubscribe support unconfirmed.
- Authentication-Results header (SPF/DKIM/DMARC): not found — sender authentication status unknown from this capture.
- A footer unsubscribe/preference link (`coreemail.html?email=...`) is present in-body as a fallback, but this transmits the subscriber email as a plain URL parameter.

6. Email-to-Site Continuity (UTM params, landing page alignment)
- All outbound merchandising/CTA links route through `click.e.potterybarn.com` tracking redirects rather than direct UTM-tagged URLs, so destination/landing-page alignment cannot be verified without following the 60 skipped redirects.
- Product deep-links use standard `potterybarn.com/pbimgs/...` paths for images (not tracked), consistent with the brand domain.

7. Recommendations
- Add `alt` text to all content-bearing images (slice/product images, banners); decorative-only images can use `alt=""`.
- Migrate the two remaining `http://` image sources to HTTPS.
- Remove the stray `header(...)` PHP fragments from the `<style>` block — dead code from a template artifact.
- Serve the open-tracking pixel over HTTPS instead of HTTP, particularly since it carries the recipient's email address in the query string.
- Confirm List-Unsubscribe / List-Unsubscribe-Post headers and Authentication-Results (SPF/DKIM/DMARC) are actually present at the raw SMTP level, since their absence here may be a relay-capture limitation rather than a true compliance gap.
## Recent history

- [[2026-09-11-your-fall-tablescaping-guide-is-here--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-09-11)
- [[2026-09-11-the-heritage-german-steel-your-kitchen-needs--felix-plinth-home-furniture-fap6e]] — 7/10 (2026-09-11)
- [[2026-09-11-our-baby-registry-everything-you-need-all-the-perks--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-09-11)

