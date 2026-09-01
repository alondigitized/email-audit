---
slug: 2026-09-01-just-in-new-deals-up-to-70-off--felix-plinth-home-furniture-fap6e
type: email
date: 2026-09-01
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Pottery Barn Sale
subject: Just in! NEW DEALS UP TO 70% OFF
tags: [email, score-5, sender/pottery-barn-sale]
---
# Just in! NEW DEALS UP TO 70% OFF
**Score:** 5/10 · **Type:** Email audit · **2026-09-01**
## Full review
## Technical Audit

## 1. Technical Summary
Standard Cheetah Digital / Cordial-style responsive HTML email with heavy use of tracking pixels and redirect links; core rendering markup is sound but compliance headers weren't captured and several legacy asset references use insecure HTTP.

## 2. Link & Tracking Issues
- All visible CTAs route through `click.e.potterybarn.com/u/?qs=...` redirect tokens (e.g. the header logo link) — standard ESP click-tracking, not inherently an issue, but 57 tracking/redirect links were skipped by the automated HTTP probe, so their final destinations are unverified.
- Multiple third-party tracking pixels are present: `d.turn.com/r/dd/id/...` (Turn/Amobee), `svopn.potterybarn.com/?sv_cid=...&sv_emopen=true` (open tracking), and `clickcp.potterybarn.com/o/a56c9fc9-...?mi_mid=...` (Cordial/marketing-cloud open tracking). These are functional but represent unverified endpoints.
- `svopn.potterybarn.com` open-tracking pixel is served over **http://**, not https — see Rendering section.

## 3. Rendering & Accessibility
- **39 images missing `alt` text**, spanning hero slices, footer slices, product images (e.g. `toscana-extendable-dining-table-60-1245-1-l.jpg`, `farmhouse-platform-bed-1-l.jpg`), and tracking pixels. Since this is an all-image, linkfarm-style layout (`GraphicHeroLinkfarm`, slices_01–13, etc.), missing alt text means screen-reader/images-off users get no content at all — this is the most significant accessibility gap.
- **2 images served over http://** instead of https:
  - `http://edm.potterybarn.com/pb/thekey/CC_Banner/PB/Foot_NonMem_PB.jpg`
  - `http://edm.potterybarn.com/pb/2022/0311_Key_CC_Email_BrandBanner/slices_02.jpg`
  - `http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true...` (open pixel)
  Mixed-content/non-HTTPS sources risk being blocked or flagged by mail clients enforcing TLS-only image loading.
- Markup includes standard MSO conditional comments, `x-apple-disable-message-reformatting`, and mobile media queries — no structural rendering defects found in the provided source.
- Note: raw `<style>` block contains stray PHP-style `header(...)` calls (`header('Content-Type: image/jpeg'); ...`) inside a `<style>` tag — these are inert as CSS/HTML (browsers/clients will ignore them as invalid CSS), but indicate a templating artifact that leaked into the compiled output. Worth flagging to the ESP team since it suggests a template include error, even though it has no functional rendering impact here.

## 4. Personalization & Merge Tokens
- Recipient email is resolved and correctly interpolated in tracking/service URLs (e.g. `coreemail.html?email=lila-hearth-potterybarn-fap6e@etell.app`, `sv_sveme=lila-hearth-potterybarn-fap6e@etell.app`) — no unresolved `{{merge}}` or `%%TOKEN%%` placeholders found in the visible source.
- No on-page personalization (e.g. first-name greeting) present in the truncated source to evaluate further.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — could not confirm one-click unsubscribe support at the header level (note: QA flags this may be an artifact of the AgentMail relay not capturing/forwarding the header rather than the sender omitting it).
- **List-Unsubscribe-Post header not found** (RFC 8058) — one-click unsubscribe compliance (required by Gmail/Yahoo bulk sender rules) cannot be confirmed from available data.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status is unknown from this capture; cannot confirm authentication compliance.
- A `coreemail.html` customer-service/preferences link is present (`potterybarn.com/customer-service/coreemail.html?email=...`), suggesting an unsubscribe/preference-center mechanism exists in-body, but visible unsubscribe link text/footer was not present in the truncated HTML provided.
- **Caveat**: all three compliance warnings stem from the capture/relay pipeline (AgentMail), not necessarily the sender's actual headers — recommend re-verifying against raw SMTP headers before treating as a sender-side violation.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Product links use path-based image assets on `www.potterybarn.com/pbimgs/...` (live domain), consistent with the sender's actual site — no domain mismatch detected.
- CTA/nav links route through the `click.e.potterybarn.com` redirect layer rather than direct UTM-tagged URLs; since 57 of these were skipped by the probe, UTM parameter presence/consistency on final landing pages could not be verified in this pass.
- No evidence of broken or mismatched domains between tracking layer and destination site in the visible source.

## 7. Recommendations
1. Add descriptive `alt` text to all 39 flagged images, prioritizing product images and the primary hero/linkfarm slices — critical since this template is image-only content with no visible fallback text.
2. Replace the 3 http:// asset/pixel URLs with https:// equivalents to avoid mixed-content blocking in image-loading clients.
3. Re-capture raw SMTP headers outside the AgentMail relay (or confirm relay is passing through `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results`) to properly verify CAN-SPAM/RFC 8058 and SPF/DKIM/DMARC compliance — do not treat current absence as confirmed sender-side non-compliance.
4. Investigate and remove the stray `header('Content-Type: ...')`/PHP-style calls embedded in the `<style>` block — likely a template-compilation leak worth reporting to the ESP/template team.
5. Run a full-resolution probe on the 57 skipped tracking/redirect links to confirm final landing-page validity and UTM parameter continuity.
## Recent history

- [[2026-09-01-on-sale-now-pergolas--felix-plinth-home-furniture-fap6e]] — 4/10 (2026-09-01)
- [[2026-08-31-on-sale-now-and-twice-the-rewards--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-31)
- [[2026-08-31-amazing-labor-day-sale-finds--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-08-31)

