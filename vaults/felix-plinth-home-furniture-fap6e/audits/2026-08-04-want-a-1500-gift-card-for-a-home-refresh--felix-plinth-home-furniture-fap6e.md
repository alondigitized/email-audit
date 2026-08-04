---
slug: 2026-08-04-want-a-1500-gift-card-for-a-home-refresh--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-04
persona: felix-plinth-home-furniture-fap6e
score: "6/10"
sender: Pottery Barn Design Services
subject: Want a $1500 gift card for a home refresh?
tags: [email, score-6, sender/pottery-barn-design-services]
---
# Want a $1500 gift card for a home refresh?
**Score:** 6/10 · **Type:** Email audit · **2026-08-04**
## Full review
## Technical Audit

## Technical Audit — Pottery Barn "Design Crew Sweepstakes" Email

### 1. Technical Summary
Standard Salesforce Marketing Cloud (SFMC) transactional template (`click.e.potterybarn.com`, `image.e.potterybarn.com`) with heavy third-party tracking, several dead/legacy footer assets, and a broken inline `<style>` block containing leftover server-side code. Automated QA scored 57% pass with 3 warning categories and no hard failures detected (only because the unsubscribe/auth checks are inconclusive, not because they pass — see §5).

### 2. Link & Tracking Issues
- 51 links route through the `click.e.potterybarn.com/?qs=...` SFMC click-tracking redirector with opaque base64-style payloads (e.g. `qs=ABB7InYiOjEsImQiOjQ5NTh9AAsAAAAAA5HeUS9b5KqCATlf...`). QA skipped HTTP probing on all of these (expected — redirect domains).
- Additional third-party tracking/beacon pixels present as `<img>` tags:
  - `https://secure.leadback.advertising.com/adcedge/lb?site=695501&srvc=1&betr=...` (AOL/Verizon legacy ad-retargeting pixel)
  - `https://d.turn.com/r/dd/id/L21rdC84NjEvY2lkLzE3NDc3ODk3MzMvdC8y/cat/1` (Turn/Amobee tracking pixel)
  - `https://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true&sv_sveme=lila-hearth-potterybarn-fap6e@etell.app` (open-tracking beacon)
- No visible `utm_source`/`utm_medium`/`utm_campaign` query params on any link — all attribution is embedded inside the opaque `qs` blob rather than in cleartext, so email-to-site attribution can't be verified from source alone (see §6).

### 3. Rendering & Accessibility
- **Broken `<style>` block**: the second `<style>` tag in `<head>` contains literal, non-CSS PHP code —
  ```
  header('Content-Type: image/jpeg');
  header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
  header("Cache-Control: post-check=0, pre-check=0", false);
  header("Pragma: no-cache");
  ```
  This is server-side code that leaked into the compiled HTML and sits inside a CSS context. Mail clients will either silently drop it as invalid CSS or, in stricter parsers, may render it as visible text. This is a template-build defect, not intentional styling.
- Empty `<!-- begin dynamic ampScript slot --><!-- end dynamic ampScript slot -->` at the very top of the source — an SFMC AMPscript block that resolved to nothing. Benign if intentional, but worth confirming it wasn't meant to inject content (e.g., a personalized banner) that failed to render.
- 30 images flagged with missing `alt` text (all product/hero slices, footer slices, and tracking pixels). Screen readers and blocked-image fallback views will show nothing for the entire hero/body content.
- 2 images loaded over plain `http://` (not `https://`): `Foot_NonMem_PB.jpg` and a 2022-dated `slices_02.jpg` in a credit-card footer banner — both likely blocked or flagged by mail clients enforcing mixed-content/TLS policies, and both point at what appears to be a stale 2022 campaign path reused in the current footer include.
- Legacy XHTML 1.0 Strict doctype with MSO/Outlook conditional patterns (`mso-table-lspace`, `ExternalClass`, `yshortcuts`) — standard for Outlook compatibility, no issue.

### 4. Personalization & Merge Tokens
- Subscriber email is embedded in cleartext inside two URLs rather than as an opaque token:
  - `https://www.potterybarn.com/customer-service/coreemail.html?email=lila-hearth-potterybarn-fap6e@etell.app`
  - `sv_sveme=lila-hearth-potterybarn-fap6e@etell.app` in the open-tracking pixel
  This indicates the merge field resolved correctly for this send, but exposes raw PII (email address) in a URL — which gets logged in server access logs, browser history, and any referrer headers if the destination page fires third-party requests.
- No other visible AMPscript/merge placeholders (e.g., `%%FirstName%%`) leaked unrendered in the truncated source — personalization appears to have resolved correctly elsewhere.

### 5. Compliance (CAN-SPAM, unsubscribe, authentication)
- `List-Unsubscribe` header: **not found**. Cannot confirm one-click unsubscribe capability at the header level (QA notes this may be a relay-capture limitation rather than a true absence — flag as unconfirmed, not a hard failure).
- `List-Unsubscribe-Post` (RFC 8058): **not found** — one-click unsubscribe per RFC 8058 cannot be confirmed.
- `Authentication-Results` header (SPF/DKIM/DMARC): **not found** — sender authentication status is unverifiable from this capture.
- Body-level unsubscribe link/physical address not visible in the truncated HTML — footer wasn't included in the provided source, so CAN-SPAM footer compliance can't be assessed from this evidence.

### 6. Email-to-Site Continuity
- All primary CTAs route through the SFMC click-tracker (`click.e.potterybarn.com`) with opaque `qs` payloads — actual landing page destinations and UTM parameters are not visible in cleartext, so landing-page alignment can't be verified from source alone.
- The footer includes at least one asset (`0311_Key_CC_Email_BrandBanner/slices_02.jpg`, path-dated 2022) served alongside 2026-dated assets, suggesting a stale/shared footer include rather than a campaign-specific one — worth confirming the linked destination for that banner still resolves correctly.

### 7. Recommendations
1. Remove the leaked `header(...)` PHP calls from the second `<style>` block — this is a build artifact, not valid CSS, and should be scrubbed from the template source.
2. Add descriptive `alt` text to all content images (hero/product slices) at minimum; decorative/tracking pixels can use `alt=""` explicitly rather than omitting the attribute.
3. Migrate the two `http://` image sources to `https://`, or remove them if the 2022 banner asset is no longer active.
4. Avoid embedding raw subscriber email addresses in cleartext URL query params (`coreemail.html?email=...`, `sv_sveme=...`); use a hashed/opaque subscriber ID instead to avoid PII exposure in logs and referrers.
5. Confirm `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually present on the raw outbound MIME (this audit's relay may simply not be capturing them) — verify via a raw header dump rather than relying on this capture.
6. If SPF/DKIM/DMARC results are genuinely absent (not just unrecorded by the relay), confirm authentication is correctly configured at the sending MTA — this affects inbox placement independent of content.
## Recent history

- [[2026-08-04-ends-tomorrow-bed-bath-on-sale-d89c7d11-64c1-4c58-807b---felix-plinth-home-furniture-fap6e]] — 7/10 (2026-08-04)
- [[2026-08-04-messy-room-try-smart-storage-furniture-bf7e1c48-2dd8-4d09-8b9d---felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-04)
- [[2026-08-04-new-new-more-new-nursery-picks-9d58b171-034e-4b22-ab13---felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-04)

