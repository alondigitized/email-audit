---
slug: 2026-08-05-your-checklist-for-reducing-plastic-in-your-kitchen
type: email
date: 2026-08-05
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Barrel
subject: Your checklist for reducing plastic in your kitchen
tags: [email, score-7, sender/crate-barrel]
---
# Your checklist for reducing plastic in your kitchen
**Score:** 7/10 · **Type:** Email audit · **2026-08-05**
## Full review
## Technical Audit

# Technical Audit: Crate & Barrel — "Your checklist for reducing plastic in your kitchen"

## 1. Technical Summary
Table-based HTML email built on a legacy XHTML 1.0 Transitional / MSO-conditional template with responsive breakpoints at 460px/640px/768px. Automated QA returned a 57% pass rate, 0 hard issues, and 3 warnings, concentrated in email-header compliance/authentication and missing image alt text.

## 2. Link & Tracking Issues
- 75 tracking/click-redirect links were present but skipped by the automated HTTP probe (tracking-domain wrappers are not resolved), so destination validity cannot be confirmed programmatically.
- Multiple distinct tracking pixels fire on open:
  - `https://mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=...` — same pixel ID repeated 6× in the source.
  - `https://mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif?mi_u=...`
  - `https://sr.rlcdn.com/448796.gif?s=...&n=1` through `n=5` — LiveRamp/Salesforce DMP retargeting beacon, fired 5 times with an incrementing `n` param.
  - `https://dv.crateandbarrel.com/o/994eb809-25f2-4fa7-be48-b9e58c7189e2?mi_mid=019fd014-0200-7000-a321-8bb98b31e162&cp_tp=v` — includes a recipient identifier (`mi_mid`).
- Content images are served from `image.mail.crateandbarrel.com/lib/fe9013727564027a7c/...` (CDN, not a tracking redirect).

## 3. Rendering & Accessibility
- 30 image elements are missing `alt` text across the source (content images, the 6 repeated `mi.crateandbarrel.com` pixels, the 5 `sr.rlcdn.com` pixels, and the `o.gif`/`dv.crateandbarrel.com` pixels). While tracking pixels are cosmetically irrelevant, the content images (`bbf6f9d4-...png`, `f2c7a5a6-...gif`, and ~25 `.jpg` assets) lacking alt text is a real accessibility gap — screen readers get no fallback, and if images are blocked (common in Outlook/enterprise mail) recipients see nothing.
- The `<head>` contains an unresolved ESP template placeholder left in production: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` (note the typo "IMPUT"). This is a leftover build-token comment, not visible to recipients, but indicates the template wasn't fully cleaned before send.
- Standard Outlook/MSO compatibility scaffolding is present and correctly structured (`xmlns:v`/`xmlns:o`, `<!--[if gte mso 9]>` font-fix block, `<!--[if mso]>` `OfficeDocumentSettings>`).

## 4. Personalization & Merge Tokens
No unresolved merge tags (e.g. `{{...}}`, `%%...%%`, `[[...]]`) are visible in the retrieved source. Note the source is truncated, so this cannot be confirmed for the full document. The `dv.crateandbarrel.com` pixel carries a recipient ID (`mi_mid`) but this is tracking, not a display-facing merge token.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header**: not found. Modern mailbox providers (Gmail, Yahoo) require this for bulk senders to avoid deliverability penalties.
- **List-Unsubscribe-Post header**: not found — RFC 8058 one-click unsubscribe is not confirmed supported.
- **Authentication-Results header**: not found — SPF/DKIM/DMARC pass/fail status cannot be verified from available data.
- Caveat: QA flags these as warnings rather than confirmed failures, since the audit is reading headers as captured by the AgentMail relay — the relay may simply not be forwarding/preserving these headers even if present at the originating MTA. This should be verified against a direct raw-header capture before treating it as a sender-side defect.
- In-body unsubscribe link/physical address (CAN-SPAM body requirements) cannot be assessed — not present in the truncated HTML excerpt.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot be assessed from the available data: all outbound links route through the 75 tracking/click-redirect URLs that the automated probe explicitly skipped, so neither final landing-page URLs nor UTM parameters are visible. Manual click-through resolution of a link sample is needed to confirm landing-page alignment.

## 7. Recommendations
- Add descriptive `alt` text to the ~30 content images identified above (accessibility + blocked-image fallback).
- Confirm SPF/DKIM/DMARC status via a raw header capture at the true ingestion point, not just through the AgentMail relay, before concluding authentication is misconfigured.
- Confirm whether `List-Unsubscribe` / `List-Unsubscribe-Post` are present at the source MTA; add RFC 8058 one-click support if genuinely absent.
- Remove the leftover `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` template placeholder from the head.
- Manually resolve a sample of the 75 tracking links to verify final landing-page URLs and UTM parameter consistency, since these were not covered by the automated probe.
## Recent history

- [[2026-08-04-tell-us-what-you-think-for-a-1000-gift-card-e7fca17b-9e3f-4ca3-b148-]] — 9/10 (2026-08-04)
- [[2026-08-04-your-chance-to-win-a-1-000-gift-card]] — 7/10 (2026-08-04)
- [[2026-08-04-ends-tomorrow-bed-bath-on-sale-d89c7d11-64c1-4c58-807b-]] — 9/10 (2026-08-04)

