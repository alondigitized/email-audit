---
slug: 2026-09-08-sale-extended-until-tomorrow--felix-plinth-home-furniture-fap6e
type: email
date: 2026-09-08
persona: felix-plinth-home-furniture-fap6e
score: "6/10"
sender: Article
subject: Sale extended until tomorrow
tags: [email, score-6, sender/article]
---
# Sale extended until tomorrow
**Score:** 6/10 · **Type:** Email audit · **2026-09-08**
## Full review
## Technical Audit

# Technical Email Audit — "Sale extended until tomorrow"

## 1. Technical Summary
This is a standard MSO/Outlook-compatible HTML email template with dark-mode support styles; automated QA passed 57% of checks with 0 issues and 3 warnings, primarily around missing unsubscribe headers and alt text.

## 2. Link & Tracking Issues
- Tracking infrastructure spans at least two domains: `links.email.article.com/s/eo/...` (click-tracked content links) and `post.spmailtechnol.com/q/...` (redirect/pixel tracking, third-party ESP domain — appears to be a Sparkpost/related relay rather than the sender's own domain).
- QA probed 12 material links and skipped 14 (footer/utility/social links deprioritized by design — expected behavior, not a defect).
- No broken or malformed href values were confirmed in the available HTML source (truncated — CTA `<a>` tags were not visible in the excerpt, so link destination validation is incomplete).

## 3. Rendering & Accessibility
- **Missing alt text** on 3 images (confirmed via QA):
  - `https://post.spmailtechnol.com/q/U_TIj68cC1RqStV2l9OU6g~~/AAQVbhA~/Yw67tgew0OdaheYY9qk9xAf-ZxKp8CkvxmLTjHzWdvIHtNWbj7MUX`
  - `https://links.email.article.com/s/eo/tgl1lkAdfn9ynTsW1FjBCBvGTwp4G78yhWnXwQi9LNlOKdtsGrC_aqtLyIjU9rCidl0C7C2EvhjWc-DxUuU`
  - `https://post.spmailtechnol.com/q/WoWDt8L2-0Kp46sckdUTSQ~~/AAQVbhA~/-H-zHu5il5kq9klvXK3FGXNfYFECh1rdREUAOTh85tDMSs_rrWYRh`
  This impacts screen-reader users and clients with images blocked by default.
- Template includes proper MSO conditional comments, `xhtml1-transitional` DOCTYPE, `-ms-text-size-adjust`/`-webkit-text-size-adjust` resets, and dark-mode support (`color-scheme`, `supported-color-schemes`, `@media(prefers-color-scheme:dark)`, `[data-ogsc]` for Outlook.com) — no rendering defects found in the visible source.
- Minor CSS syntax issue: `h1,h2,p,{color:#fff!important}` inside the dark-mode `<style>` block has a trailing comma before `{`, which is invalid CSS and will cause that rule to be dropped by strict parsers (though most email clients tolerate it).

## 4. Personalization & Merge Tokens
No merge tokens or personalization fields (e.g. `{{first_name}}`) are visible in the truncated source. No issues found in the reviewed portion.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — required for one-click unsubscribe support in Gmail/Yahoo bulk-sender requirements; may be a QA/relay capture limitation (AgentMail) rather than a true absence, but cannot be confirmed as present.
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click unsubscribe (POST) is not confirmed as supported.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status could not be verified via the AgentMail relay capture.
- An unsubscribe link is confirmed present in-body per QA notes ("an unsubscribe link is always included"), but its href/compliance (visible, functional, one-click) was not independently verified in the truncated source.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot be verified — no UTM parameters or landing page destinations are visible in the truncated HTML source. The click-tracked link structure (`links.email.article.com/s/eo/...`) obscures the final destination URL, so UTM/landing-page alignment cannot be confirmed from available evidence.

## 7. Recommendations
1. Add descriptive `alt` attributes to the 3 flagged images (or `alt=""` if purely decorative).
2. Fix the malformed CSS selector `h1,h2,p,{...}` (remove trailing comma) in the dark-mode style block.
3. Confirm with the sending ESP that `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually being sent (not just uncaptured by the relay) — required for Gmail/Yahoo bulk sender compliance as of their 2024 policies.
4. Verify SPF/DKIM/DMARC authentication status directly at the ESP, since header capture was inconclusive.
5. Request full (non-truncated) HTML source and header data to validate CTA link destinations, UTM parameters, and landing-page alignment — this could not be assessed from the current excerpt.
## Recent history

- [[2026-09-08-warehouse-clearout-is-here--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-09-08)
- [[2026-09-08-up-to-50-off-don-t-miss-this--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-09-08)
- [[2026-09-08-up-to-60-off-earn-2x-rewards-ends-tomorrow-d3d2dfa2-f523-45ee-b037---felix-plinth-home-furniture-fap6e]] — 5/10 (2026-09-08)

