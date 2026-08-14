---
slug: 2026-08-14-this-is-not-your-grandma-s-cardigan
type: email
date: 2026-08-14
persona: lacey-belle-vs-fap6e
score: "7/10"
sender: PINK
subject: This Is NOT Your Grandma’s Cardigan 🧶
tags: [email, score-7, sender/pink]
---
# This Is NOT Your Grandma’s Cardigan 🧶
**Score:** 7/10 · **Type:** Email audit · **2026-08-14**
## Full review
## Technical Audit

## 1. Technical Summary
The email renders on a legacy table-based HTML4 template with standard responsive breakpoints; automated QA found one broken tracking link, missing unsubscribe/authentication headers, and multiple non-HTTPS tracking pixels — a 43% pass rate overall.

## 2. Link & Tracking Issues
- **Broken link (400):** SMS signup CTA ("Lets text. Sign up for SMS...") pointing to `https://vspink.attn.tv/p/LSA/landing-page` returns HTTP 400. This link is non-functional and should be fixed before send.
- 56 additional tracking/click-redirect links were skipped by the automated HTTP probe (expected behavior for redirect domains — not a confirmed failure, but unverified).
- Open-tracking pixel present and duplicated: `https://click.e1.victoriassecret.com/open.aspx?GSADEOOQIILEHDMCKUP3ANJIEY.70252&d=70252&bmt=0` appears twice in the source (once before `<table>`, once inside the header block) — redundant but not breaking.

## 3. Rendering & Accessibility
- Uses HTML 4.01 Transitional doctype with legacy Outlook (`mso`) conditional comments and standard `ExternalClass`/`ReadMsgBody` resets — consistent with typical ESP-generated mail client compatibility patterns. No issues found in the CSS reset/media query structure itself.
- **Missing `alt` text** on multiple `<img>` tags: `o.gif` (mi.victoriassecret.com pixel), the `dotomi.com` UCM pixel, and `pub1.php`–`pub10.php` cookie-redirect pixels. These are 1x1 tracking pixels, so the accessibility impact is minimal, but empty `alt=""` should still be present for spec compliance (some already have `alt=""`, others have none).
- One content image, `5bcec3ac-502d-4d8f-b48c-0a3d20e6e3c2.png` (served from `image.e1.victoriassecret.com`), is missing `alt` text — this one is a visible content/photo asset, not a pixel, so it does have a real accessibility impact for screen reader users.

## 4. Personalization & Merge Tokens
- No AMPscript merge tokens are populated in the visible source — the `<div id="AMPScript">` block contains only `<!-- Ampscript v0 START/END -->` comments with no content, indicating either a stripped preview/QA render or no personalization used in this send. Cannot confirm token resolution from truncated source.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — may be a relay/capture artifact of the AgentMail pipeline rather than a true absence at the source ESP; flag for header-capture verification.
- **List-Unsubscribe-Post header not found** (RFC 8058) — one-click unsubscribe support cannot be confirmed.
- **Authentication-Results header not found** — SPF/DKIM pass/fail status is unknown via the AgentMail relay; cannot confirm sender authentication for this message.
- In-body unsubscribe link/footer was not present in the truncated HTML sample provided, so footer-level CAN-SPAM compliance (physical address, unsubscribe link) cannot be verified from this excerpt.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- The broken SMS CTA link (`vspink.attn.tv/p/LSA/landing-page`, 400 error) breaks continuity for any subscriber attempting to complete the SMS opt-in flow referenced in the email copy.
- Tracking/redirect chains (dotomi.com cookie redirects, e1.victoriassecret.com click tracking) were not resolved to final landing pages by the automated probe, so UTM parameter alignment on final destinations cannot be confirmed from available data.

## 7. Recommendations
1. Fix or replace the SMS signup link (`https://vspink.attn.tv/p/LSA/landing-page`) — currently returns HTTP 400.
2. Verify List-Unsubscribe / List-Unsubscribe-Post headers are actually being sent by the ESP and not merely dropped by the AgentMail relay; confirm via raw header capture at point of receipt.
3. Confirm SPF/DKIM/DMARC authentication status independently (e.g., via mail-tester or direct MTA log) since Authentication-Results is not visible through this relay.
4. Add `alt=""` to all tracking pixels missing it, and add descriptive `alt` text to the content image `5bcec3ac-502d-4d8f-b48c-0a3d20e6e3c2.png`.
5. Migrate remaining `http://` tracking pixel sources (mi.victoriassecret.com, dotomi.com) to HTTPS to avoid mixed-content blocking in modern mail clients.
## Recent history

- [[2026-08-14-shop-20-off-before-it-s-gone]] — 7/10 (2026-08-14)
- [[2026-08-13-today-s-your-one-chance-for-25-off]] — 7/10 (2026-08-13)
- [[2026-08-13-new-campus-fleece-stay-cozy-friends]] — 8/10 (2026-08-13)

