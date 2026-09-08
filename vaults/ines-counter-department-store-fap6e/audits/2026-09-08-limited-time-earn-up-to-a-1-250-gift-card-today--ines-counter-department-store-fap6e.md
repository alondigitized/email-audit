---
slug: 2026-09-08-limited-time-earn-up-to-a-1-250-gift-card-today--ines-counter-department-store-fap6e
type: email
date: 2026-09-08
persona: ines-counter-department-store-fap6e
score: "7/10"
sender: Neiman Marcus
subject: "Limited Time: Earn up to a $1,250 gift card today"
tags: [email, score-7, sender/neiman-marcus]
---
# Limited Time: Earn up to a $1,250 gift card today
**Score:** 7/10 · **Type:** Email audit · **2026-09-08**
## Full review
## Technical Audit

## 1. Technical Summary
This Neiman Marcus promotional email is built on a standard Salesforce Marketing Cloud (AMPscript) template with responsive/mobile media queries; the QA pass shows a 62% automated pass rate driven by missing unsubscribe and authentication headers rather than HTML-source defects.

## 2. Link & Tracking Issues
- 31 tracking/click-redirect links were present but skipped by the automated HTTP prober (expected behavior for redirect-domain links, not necessarily a defect) — destination validity for these links is therefore unconfirmed and should be spot-checked manually.
- The provided HTML excerpt is truncated before the `<body>`/link markup, so link hrefs, `%%[ ]%%`/AMPscript-driven redirect construction, and click-tracking domain patterns could not be directly inspected in this review.

## 3. Rendering & Accessibility
- No issues found in the visible `<head>`/CSS block: includes `x-apple-disable-message-reformatting`, `.ExternalClass` resets, iOS blue-link override (`a[x-apple-data-detectors]`), and mobile breakpoints at 480px/520px/600px with column-stacking rules (`.ImgSize`, `.ImgSize2x2`, `.TxtSize`).
- Cannot confirm `alt` text or `role`/ARIA attributes on images or interactive elements — this content falls outside the truncated excerpt.

## 4. Personalization & Merge Tokens
- The template header comment declares required AMPscript variables: `@email`, `@base_refid`, `@refid`, `@user` (via `Lookup("NM_Subscriber_New_Consolidated", ...)`), `@emailid`, `@uEm` (via `Lookup("NM_CRM_Feed", ...)`), and `@cmdid`.
- A commented-out alternate assignment `SET @user = HASHED_EMAIL_SHA256` sits alongside the lookup-based `@user` definition — the comment "CHOOSE ONE SCENARIO BELOW" indicates two mutually exclusive personalization paths exist in source; confirm which scenario is active in the deployed send definition to avoid `@user` resolving to null/unhashed value if the wrong block was left uncommented.
- Cannot verify actual token interpolation (e.g., first-name merge, gift-card amount personalization) in the body since the excerpt is truncated before those content blocks.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header**: not found in the delivered message (QA WARN). Note this may be an artifact of the AgentMail relay not surfacing the header rather than the sender omitting it — cannot distinguish from available data.
- **List-Unsubscribe-Post header (RFC 8058)**: not found, meaning one-click unsubscribe support is unconfirmed. Combined with the missing `List-Unsubscribe` header, this is a compliance gap if confirmed at the raw-MIME level, since major mailbox providers (Gmail/Yahoo) require both for bulk senders.
- **Authentication-Results header**: not found, so SPF/DKIM/DMARC pass/fail status could not be verified from this data.
- Recommend re-checking these three items directly against the raw MIME headers at the originating MTA (not just post-relay), since AgentMail relay handling is called out as a likely confound in all three warnings.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot evaluate — the truncated HTML excerpt does not include CTA `href` values, so UTM parameter presence/consistency and landing-page alignment cannot be assessed from available evidence.

## 7. Recommendations
1. Re-verify `List-Unsubscribe` / `List-Unsubscribe-Post` / `Authentication-Results` directly against raw source MIME headers (not the AgentMail-relayed copy) to rule out a relay-side capture gap before treating this as a sender-side compliance issue.
2. Confirm which `@user` personalization scenario (lookup-based vs. `HASHED_EMAIL_SHA256`) is uncommented in the live send definition — audit only saw both present in source with a manual "choose one" instruction, which is a risk if left ambiguous.
3. Manually spot-check a sample of the 31 skipped tracking links (destination resolves, no redirect loop/404) since automated probing intentionally excludes them.
4. Re-run this audit against the full (untruncated) HTML source to evaluate link/UTM continuity and accessibility attributes, which were out of scope here due to truncation.
## Recent history

- [[2026-09-08-save-up-to-80-on-clearance-at-new-lower-prices--ines-counter-department-store-fap6e]] — 5/10 (2026-09-08)
- [[2026-09-07-1-000-styles-to-add-to-your-fall-lineup--ines-counter-department-store-fap6e]] — 6/10 (2026-09-07)
- [[2026-09-07-labor-day-sale-10-off-your-25-purchase-ends-tonight--ines-counter-department-store-fap6e]] — 4/10 (2026-09-07)

