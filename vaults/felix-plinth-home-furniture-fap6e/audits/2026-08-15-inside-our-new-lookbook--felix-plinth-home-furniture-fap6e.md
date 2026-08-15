---
slug: 2026-08-15-inside-our-new-lookbook--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-15
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Pottery Barn
subject: Inside our NEW lookbook
tags: [email, score-5, sender/pottery-barn]
---
# Inside our NEW lookbook
**Score:** 5/10 · **Type:** Email audit · **2026-08-15**
## Full review
## Technical Audit

# Technical Audit — Pottery Barn "Inside our NEW lookbook"

**1. Technical Summary**
Email renders via a standard MSO/webkit hybrid template with tracked click-through links and open-pixel beacons; the primary technical issues are missing alt text across all images, mixed-content (http://) assets, and absent authentication/unsubscribe headers in the captured relay data.

**2. Link & Tracking Issues**
- 55 tracking/click-redirect links (`click.e.potterybarn.com`, `clickcp.potterybarn.com`) were skipped from HTTP probing per QA policy — not independently verified as live.
- Multiple open-tracking beacons present: `http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true&sv_sveme=lila-hearth-potterybarn-fap6e@etell.app` and `https://d.turn.com/r/dd/id/.../cat/1` — both served as 1x1 `<img>` tags, one over plain HTTP.
- Recipient identifier (`lila-hearth-potterybarn-fap6e@etell.app`) is exposed in cleartext in the open-tracking pixel URL query string — standard for ESP open tracking but worth noting as a plaintext PII leak in transit if intercepted.

**3. Rendering & Accessibility**
- Every image in the document is missing `alt` text (40+ instances flagged), including primary content banners (`F26_Top_NewArrivals.jpg`), product shots (`farmhouse-platform-bed-1-l.jpg`, `westin-heavenly-bed-mattress-1325h-l.jpg`, etc.) and footer nav slices. Screen readers and blocked-image fallback states will show nothing.
- Three assets load over `http://` instead of `https://`, which most mail clients (Outlook, Gmail image proxy) will block or flag as mixed content:
  - `http://edm.westelm.com/we/evergreen/spacer_0.gif`
  - `http://edm.potterybarn.com/pb/thekey/CC_Banner/PB/Foot_NonMem_PB.jpg`
  - `http://edm.potterybarn.com/pb/2022/0311_Key_CC_Email_BrandBanner/slices_02.jpg`
- Stray `<style>` block in `<head>` contains raw PHP-style `header(...)` calls (`header('Content-Type: image/jpeg'); ...`) as literal CSS text — dead/broken code artifact, harmless to rendering but indicates a template authoring error (leftover server-side snippet pasted into CSS).
- `<meta name="robots" content="noindex, nofollow">` and `<meta name="referrer" content="no-referrer">` are present — intentional for hosted-email-as-webpage view, not a defect.

**4. Personalization & Merge Tokens**
- No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) observed in the truncated source.
- Recipient email is embedded in two tracking/service URLs (`coreemail.html?email=...`, `svopn.potterybarn.com?...sv_sveme=...`) — correctly resolved to a live address rather than a literal token, indicating personalization merge succeeded for this send.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `List-Unsubscribe` header: not found in captured headers (QA WARN) — may be a capture/relay limitation rather than true absence; cannot confirm compliance from available data.
- `List-Unsubscribe-Post` (RFC 8058 one-click unsubscribe): not found — same caveat.
- `Authentication-Results` header (SPF/DKIM/DMARC outcome): not found — authentication status unknown from this capture.
- Footer unsubscribe/physical-address content was not present in the truncated HTML provided, so CAN-SPAM footer compliance (physical address, functional unsubscribe link) cannot be verified from source; recommend re-checking against the full (untruncated) HTML.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
- Outbound links use PB's proprietary click-tracking redirector (`click.e.potterybarn.com/u/?qs=...`) rather than plain UTM-tagged URLs — final landing URLs and UTM parameters are opaque and were not resolved (consistent with the 55 skipped-probe links in §2). Cannot confirm landing-page alignment without following redirects.
- One direct (non-redirector) link is visible: `https://www.potterybarn.com/customer-service/coreemail.html?email=...` — a customer-service/account link, not a UTM-tagged campaign landing page, so no continuity concern there.

**7. Recommendations**
1. Add descriptive `alt` text to all content/product images (currently 100% missing) for accessibility and image-blocked fallback rendering.
2. Migrate the three `http://` image sources to `https://` to avoid mixed-content blocking in Outlook/Gmail.
3. Remove the orphaned PHP `header(...)` snippet from the `<style>` block in `<head>` — dead code artifact from template authoring.
4. Re-verify `List-Unsubscribe`/`List-Unsubscribe-Post`/`Authentication-Results` directly against raw SMTP headers (not the relay capture) to confirm CAN-SPAM and authentication compliance, since absence here may be a capture artifact.
5. Sample-resolve a subset of the 55 `click.e.potterybarn.com` redirect links to confirm they 200 to live, correctly-tagged landing pages.
## Recent history

- [[2026-08-15-the-sofa-that-will-make-you-love-your-living-room--felix-plinth-home-furniture-fap6e]] — 7/10 (2026-08-15)
- [[2026-08-15-people-coming-for-dinner-start-here--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-15)
- [[2026-08-15-fencing-accessories-summer-markdowns-ends-tomorrow--felix-plinth-home-furniture-fap6e]] — 8/10 (2026-08-15)

