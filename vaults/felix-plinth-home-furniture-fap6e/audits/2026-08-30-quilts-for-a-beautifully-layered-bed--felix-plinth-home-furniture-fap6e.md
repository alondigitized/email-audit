---
slug: 2026-08-30-quilts-for-a-beautifully-layered-bed--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-30
persona: felix-plinth-home-furniture-fap6e
score: "6/10"
sender: Pottery Barn
subject: Quilts for a beautifully layered bed
tags: [email, score-6, sender/pottery-barn]
---
# Quilts for a beautifully layered bed
**Score:** 6/10 · **Type:** Email audit · **2026-08-30**
## Full review
## Technical Audit

## 1. Technical Summary
Standard MSO/webkit HTML email with a fluid single-column layout; QA scan shows no functional deliverability blockers, but multiple accessibility (missing alt text) and two legacy `http://` image assets need remediation.

## 2. Link & Tracking Issues
- 54 tracking/click-redirect links (`click.e.potterybarn.com`, `clickcp.potterybarn.com`, etc.) were skipped by the automated HTTP probe by design — no pass/fail data available, not a confirmed defect.
- Open-tracking pixel served over plain HTTP: `http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true&sv_sveme=lila-hearth-potterybarn-fap6e@etell.app` — mixed-content risk, may be blocked by strict mail clients.
- The same pixel URL embeds the recipient email address (`sv_sveme=`) in cleartext query string — PII exposed in an unencrypted request.
- Secondary tracking pixel also embeds recipient email in cleartext (HTTPS this time): `https://www.potterybarn.com/customer-service/coreemail.html?email=lila-hearth-potterybarn-fap6e@etell.app`.

## 3. Rendering & Accessibility
- 33 `<img>` elements are missing `alt` text across header, hero, product, and footer slices (full list in QA output) — screen readers and blocked-image fallback will show nothing for these images.
- Two images load over `http://` instead of `https://`: `Foot_NonMem_PB.jpg` (`http://edm.potterybarn.com/pb/thekey/CC_Banner/PB/Foot_NonMem_PB.jpg`) and `slices_02.jpg` (`http://edm.potterybarn.com/pb/2022/0311_Key_CC_Email_BrandBanner/slices_02.jpg`) — likely to be blocked/flagged as mixed content in HTTPS-only clients.
- `<style>` block in `<head>` contains stray PHP-style `header()` calls (`header('Content-Type: image/jpeg'); ...`) — invalid CSS syntax left in from a copy-paste error; harmless to rendering since it's inside a comment-free CSS block most clients will simply ignore/strip, but indicates unclean template hygiene.
- `<title></title>` is empty — no fallback text for browser tab/preview in webmail clients that render the email in-browser.

## 4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `{{`, `%%`, `[[`) found in the truncated source.
- Recipient identifier is passed as a resolved literal value (`lila-hearth-potterybarn-fap6e@etell.app`) in tracking/open-pixel URLs rather than an opaque token — confirms personalization merge executed correctly, but see PII exposure note in Section 2.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — QA notes this may be a relay-capture limitation (AgentMail) rather than a true absence; cannot confirm compliance status from header data alone.
- `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe) not detected — same caveat as above.
- `Authentication-Results` header (SPF/DKIM/DMARC outcome) not present in the captured data — authentication status is unknown, not necessarily failing.
- In-body unsubscribe/footer link was not included in the truncated HTML source, so it cannot be verified directly; recommend confirming presence of a working unsubscribe link and physical mailing address in the untruncated footer.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Header/nav CTA routes through the click-tracking redirector (`click.e.potterybarn.com/u/?qs=...`) rather than a direct UTM-tagged URL — final landing URL and UTM parameters can't be verified without following the redirect (out of scope for static HTML review).
- Product image links (e.g., `farmhouse-platform-bed-1-l.jpg`, `remmy-swivel-chair-1-l.jpg`) point to direct `potterybarn.com` PDP image assets, not tracked click-through links in the truncated excerpt — if these are meant to be clickable CTAs, confirm they're wrapped in tracked `<a>` tags in the full source rather than left as bare images.

## 7. Recommendations
1. Add descriptive `alt` text to all 33 flagged images, prioritizing product images (bed, chair, dining table, mattress) for accessibility compliance.
2. Migrate the two `http://` image sources to `https://` to prevent mixed-content blocking.
3. Move the open-tracking pixel from `http://svopn.potterybarn.com` to HTTPS and avoid passing recipient email addresses in plaintext query strings on both tracking pixels.
4. Remove the stray PHP `header()` statements from the `<style>` block in `<head>` — leftover dead code from an unrelated template.
5. Populate `<title>` with a non-empty value for browser-rendered/webmail contexts.
6. Verify (outside this static scan) that `List-Unsubscribe`/`List-Unsubscribe-Post` headers and an `Authentication-Results` (SPF/DKIM) record are actually present at the raw SMTP level, since the relay may simply not be surfacing them to this tool.
## Recent history

- [[2026-08-30-furniture-cushions-you-gotta-see-these-f64e47d2-071b-4d3e-abaa---felix-plinth-home-furniture-fap6e]] — 4/10 (2026-08-30)
- [[2026-08-29-so-much-is-on-sale-right-now--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-29)
- [[2026-08-29-nightstands-that-do-it-all--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-29)

