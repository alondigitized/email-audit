---
slug: 2026-07-28-new-essentials-to-set-your-table--felix-plinth-home-furniture-fap6e
type: email
date: 2026-07-28
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: Pottery Barn
subject: New essentials to set your table
tags: [email, score-5, sender/pottery-barn]
---
# New essentials to set your table
**Score:** 5/10 · **Type:** Email audit · **2026-07-28**
## Full review
## Technical Audit

# Technical Audit — Pottery Barn "New essentials to set your table"

## 1. Technical Summary
This is a legacy table-based HTML email (XHTML 1.0 Transitional doctype, Salesforce Marketing Cloud / Cheetah-style `e.potterybarn.com` tracking domain) with broadly missing image alt text, several non-HTTPS assets, and no unsubscribe/authentication headers visible via the relay.

## 2. Link & Tracking Issues
- **54 tracking/redirect links** route through `click.e.potterybarn.com/u/?qs=...` (opaque, base64-style tokens) — automated HTTP probing was skipped for all of them, so destination validity is unconfirmed.
- **Third-party ad pixel**: `https://d.turn.com/r/dd/id/L21rdC84NjEvY2lkLzE3NDc3ODk3MzMvdC8y/cat/1` — an Amobee/Turn audience-tracking beacon embedded as an `<img>`, no alt text.
- **Open-tracking pixel over plain HTTP**: `http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true&sv_sveme=lila-hearth-potterybarn-fap6e@etell.app` — unencrypted request, and see PII note below.
- **Second open/click pixel**: `https://clickcp.potterybarn.com/o/ab6788b1-2c64-4e6b-b8b0-7a9f84b7b39f?mi_mid=...` (mi_mid = Marketing Cloud message ID) — functions as expected for MC-based sends.

## 3. Rendering & Accessibility
- **~45 images missing `alt` attributes**, including all product tiles (`slices_01.jpg`–`slices_18.jpg`), hero banners (`F26_TOP_SummerSalePartC_NoUrgency.jpg`, `S26_Bottom_UpTo60OffOutdoor.jpg`), and the nav logo. Screen readers and image-blocked inboxes will render this email as effectively blank.
- **Empty `<title></title>`** in `<head>` — no fallback label for clients that surface it.
- **Invalid markup inside `<style>` block**: literal PHP code —
  ```
  header('Content-Type: image/jpeg'); header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0"); header("Cache-Control: post-check=0, pre-check=0", false); header("Pragma: no-cache");
  ```
  is present as plain text inside a CSS `<style>` tag. This is inert (won't execute or break rendering) but indicates a copy/paste error from server-side code leaking into the template — should be stripped.
- **External Google Fonts `<link>`** (`fonts.googleapis.com/css2?family=Montserrat`) — most major clients (Gmail, Outlook) strip external stylesheet `<link>` tags, so this asset will not load for a large share of recipients; dead weight, not a functional break.
- **4 non-HTTPS image sources** flagged (`edm.westelm.com/we/evergreen/spacer_0.gif`, `edm.potterybarn.com/pb/thekey/.../Foot_NonMem_PB.jpg`, `edm.potterybarn.com/pb/2022/.../slices_02.jpg`, plus the `svopn.potterybarn.com` pixel above) — may be blocked or flagged by mail clients enforcing mixed-content policies.
- **Cross-brand asset**: the evergreen spacer gif is served from `edm.westelm.com` (a sibling Williams-Sonoma Inc. brand domain) rather than a Pottery Barn asset host — shared infra, not a functional defect, but worth flagging as inconsistent domain hygiene.

## 4. Personalization & Merge Tokens
- No unresolved merge-tag artifacts (e.g., `{{FirstName}}`, `%%EMAIL%%`) found in the visible source.
- **Recipient email address is exposed in plaintext in two URLs**: `https://www.potterybarn.com/customer-service/coreemail.html?email=lila-hearth-potterybarn-fap6e@etell.app` and the `svopn.potterybarn.com` open pixel (`sv_sveme=...`). Passing PII as an unencoded query parameter risks leaking it via referrer headers, proxy/CDN logs, or browser history — flag for the compliance/security owner even though functionally this is common ESP practice.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **`List-Unsubscribe` header**: not captured by the relay — cannot confirm one-click unsubscribe support at the header level. *(Caveat: this may be an AgentMail relay capture limitation rather than the sender's actual configuration.)*
- **`List-Unsubscribe-Post` (RFC 8058)**: also not captured — same caveat applies; if genuinely absent, Gmail/Yahoo one-click unsubscribe (required for bulk senders since Feb 2024) would not function.
- **`Authentication-Results` (SPF/DKIM/DMARC)**: not present via relay — authentication status unknown, cannot confirm alignment.
- **In-body unsubscribe link / physical address**: not visible in the truncated HTML source (footer content beyond `coreemail.html` link was cut off) — inconclusive, not a confirmed violation.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- All primary navigation/product links are wrapped in the `click.e.potterybarn.com/u/?qs=...` Marketing Cloud redirect rather than exposing plain UTM query strings — standard for this ESP, but means UTM/landing-page alignment cannot be verified without following the 54 skipped redirects.
- The one unwrapped, directly-resolvable link (`www.potterybarn.com/customer-service/coreemail.html?email=...`) points to a live PB domain path, consistent with brand.
- No UTM parameters were observed anywhere in the visible markup — if analytics attribution depends on UTM tagging (vs. MC's internal `mi_mid`/`cp_tp` tracking), this should be confirmed with the ESP team since it is not evident from source-level QA.

## 7. Recommendations
1. Add descriptive `alt` text to all product/banner images (~45 instances) — highest-impact accessibility fix.
2. Remove the stray PHP `header()` statements from the `<style>` block — dead/leaked code.
3. Convert the 4 flagged `http://` image and pixel sources to `https://`.
4. Confirm with the ESP/deliverability team whether `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually being sent (may just be a relay-capture gap) and whether SPF/DKIM/DMARC pass — request raw headers outside the relay to verify.
5. Review whether embedding the recipient's raw email address in tracking/pixel URLs meets current privacy requirements; consider hashing or tokenizing.
6. Populate the empty `<title>` tag.
7. Spot-check a sample of the 54 `click.e.potterybarn.com` redirect links manually to confirm they resolve to live, correct landing pages.
## Recent history

- [[2026-07-27-baking-dishes-up-to-80-off-last-chance--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-07-27)
- [[2026-07-27-nightstands-starting-at-349--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-07-27)
- [[2026-07-27-kitchen-mats-under-30--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-07-27)

