---
slug: 2026-08-29-the-great-pumpkin-is-coming--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-29
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Pottery Barn
subject: The Great Pumpkin is coming 🎃
tags: [email, score-5, sender/pottery-barn]
---
# The Great Pumpkin is coming 🎃
**Score:** 5/10 · **Type:** Email audit · **2026-08-29**
## Full review
## Technical Audit

# Technical Audit: Pottery Barn "The Great Pumpkin is coming 🎃"

**1. Technical Summary**
Standard EDM-vendor (Bronto/Message Systems-style) HTML email with heavy tracking pixel/redirect infrastructure; primary defects are missing image alt text across nearly every asset and two legacy insecure (`http://`) image sources.

**2. Link & Tracking Issues**
- 54 tracking/click-redirect links (`click.e.potterybarn.com`, `clickcp.potterybarn.com`, etc.) were present but skipped from HTTP probing per QA policy — not independently verified as live.
- Open-tracking beacon uses plaintext HTTP: `http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true&sv_sveme=lila-hearth-potterybarn-fap6e@etell.app`. Note this beacon also embeds the recipient's raw email address in a query string over an unencrypted connection.
- Third-party pixel `https://d.turn.com/r/dd/id/L21rdC84NjEvY2lkLzE3NDc3ODk3MzMvdC8y/cat/1` present (Turn/data-collection tracker).
- `<meta name="referrer" content="no-referrer">` is set, which will strip referrer data from any outbound link clicks — verify this doesn't break downstream attribution on the landing pages if referrer-based analytics are used there.

**3. Rendering & Accessibility**
- Pervasive missing `alt` attributes — 40+ instances flagged by QA across nav banner, product slices, footer legal images, and the "Peanuts x Great Pumpkin" collab imagery. This fails WCAG 1.1.1 and degrades the message when images are blocked (a common default in Outlook/Gmail).
- Two images served over insecure `http://` (not `https://`), which many mail clients (Gmail, Outlook) will block or flag by default:
  - `http://edm.potterybarn.com/pb/thekey/CC_Banner/PB/Foot_NonMem_PB.jpg`
  - `http://edm.potterybarn.com/pb/2022/0311_Key_CC_Email_BrandBanner/slices_02.jpg`
- Head contains a `<style>` block with stray PHP-style `header(...)` calls (`header('Content-Type: image/jpeg'); ...`) sitting inside a CSS `<style>` tag — these are inert as CSS (invalid syntax, silently ignored by renderers) but indicate leftover/misplaced server-side code accidentally baked into the template.
- Uses `<meta name="viewport">` and media queries for responsive scaling; standard MSO conditional comments present for Outlook compatibility — no issues found there.

**4. Personalization & Merge Tokens**
- Recipient email is merge-populated correctly in tracking URLs (e.g., `...sv_sveme=lila-hearth-potterybarn-fap6e@etell.app`, `coreemail.html?email=lila-hearth-potterybarn-fap6e@etell.app`) — no broken/unresolved merge tags (`{{...}}`, `%%...%%`) observed in the visible source.
- No issues found with token resolution in the truncated source.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header not detected — cannot confirm one-click unsubscribe support at the header level (QA notes this may be an AgentMail relay capture limitation rather than a confirmed absence).
- `List-Unsubscribe-Post` (RFC 8058) not detected — one-click unsubscribe compliance unconfirmed.
- `Authentication-Results` header not found — SPF/DKIM pass/fail status could not be verified via this relay.
- Unsubscribe/preference-center link itself was not visible in the truncated HTML segment provided — cannot confirm a working footer unsubscribe link exists in-body (CAN-SPAM requires this regardless of header support).

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
- Primary nav/logo link routes through `click.e.potterybarn.com` redirect wrapper rather than a direct UTM-tagged URL — actual destination and UTM parameters are opaque without following the redirect (consistent with the 54 skipped tracking links).
- Product deep links resolve to direct `potterybarn.com` PDP paths (e.g., `/pbimgs/.../farmhouse-platform-bed-1-l.jpg` implies matching `/products/farmhouse-platform-bed/`-style pages) — these are image assets only in the excerpt, not the anchor hrefs, so continuity to the actual PDP URLs could not be confirmed from this source.
- No UTM parameters were visible in the non-redirect-wrapped URLs present in the excerpt.

**7. Recommendations**
1. Add descriptive `alt` text to all content-bearing images (product shots, banners); decorative-only images (spacers, 1x1 pixels) should use `alt=""` rather than omitting the attribute.
2. Migrate the two `http://` image sources to `https://` to prevent client-side blocking/mixed-content warnings.
3. Remove the stray `header('Content-Type: image/jpeg'); ...` PHP snippet embedded in the `<style>` block — it's dead code from a misconfigured template merge and should be cleaned from the source even though it doesn't currently break rendering.
4. Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually being sent from the origin ESP (Bronto/Message Systems) — re-test via a direct raw-header capture rather than through the AgentMail relay to rule out a relay-side capture gap before treating this as a compliance defect.
5. Serve the open-tracking beacon over HTTPS to avoid transmitting the recipient's email address in a query string over plaintext HTTP.
## Recent history

- [[2026-08-29-faux-florals-three-words-labor-day-clearance--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-29)
- [[2026-08-29-statement-ceiling-fans-for-less--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-29)
- [[2026-08-28-now-and-future-classics--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-28)

