---
slug: 2026-09-13-last-day-to-earn-a-100-1250-gift-card--ines-counter-department-store-fap6e
type: email
date: 2026-09-13
persona: ines-counter-department-store-fap6e
score: "6/10"
sender: Neiman Marcus
subject: Last day to earn a $100–$1250 gift card
tags: [email, score-6, sender/neiman-marcus]
---
# Last day to earn a $100–$1250 gift card
**Score:** 6/10 · **Type:** Email audit · **2026-09-13**
## Full review
## Technical Audit

# Technical Email Audit — Neiman Marcus "Last day to earn a $100–$1250 gift card"

## 1. Technical Summary
This is an SFMC (Salesforce Marketing Cloud) AMPscript-templated HTML email with standard Outlook/mobile CSS resets; automated QA passed 62% of checks with 0 hard issues and 3 warnings, primarily around unsubscribe/authentication header visibility rather than confirmed defects.

## 2. Link & Tracking Issues
- 30 tracking/click-redirect links were skipped by the automated HTTP prober (QA: "30 tracking link(s) skipped: Tracking/click-redirect domains") — these resolve through an SFMC click-tracking redirector, so live-link validity could not be confirmed by this audit and should be manually click-tested before send.
- No broken or malformed `href` values were identifiable in the truncated source provided.

## 3. Rendering & Accessibility
- Uses `<meta name="x-apple-disable-message-reformatting">` and Outlook-conditional-friendly `mso-table-lspace/rspace` resets — standard, no issues.
- `.ExternalClass` / `.ReadMsgBody` resets present for Outlook.com/Windows Mail — no issues.
- Responsive breakpoints defined at 480px, 520px, and 600px via `@media` blocks (`.ImgSize`, `.ImgSize2x2`, `.TxtSize`) — no issues found in provided markup.
- No `alt` attributes visible on `<img>` tags in the truncated source — cannot confirm accessibility compliance for images; flagged as unconfirmed due to truncation rather than a confirmed defect.
- Hamburger-nav mobile menu relies on `.navbar-checkbox:checked` CSS-only interaction — this pattern is unsupported in many mobile email clients (Gmail app, Outlook mobile) that strip `<input>`/checkbox hacks; likely degrades gracefully to the non-interactive fallback (`.contentInteractive { display: none !important }`), which appears to be intentionally handled.

## 4. Personalization & Merge Tokens
- Header comment block declares multiple required AMPscript variables: `@email`, `@base_refid`, `@refid`, `@user` (via `Lookup("NM_Subscriber_New_Consolidated"...)`), `@emailid`, `@uEm` (via `Lookup("NM_CRM_Feed"...)`), `@cmdid`.
- Comment explicitly instructs "CHOOSE ONE SCENARIO BELOW" for setting `@user` (e.g., `SET @user = HASHED_EMAIL_SHA256`) — this indicates the shipped source is a template with an unresolved/ambiguous personalization branch. If the wrong scenario is active (or none selected) at send time, `@user`/hashed-email tracking values could be blank or mismatched.
- Multiple Lookup() calls against `NM_Subscriber_New_Consolidated` and `NM_CRM_Feed` data extensions are present; failure of any lookup to match (e.g., a subscriber not in `NM_CRM_Feed`) would leave `@uEm`/`@cmdid` null — no evidence in the provided source of a fallback/default value for these tokens.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **[WARN]** `List-Unsubscribe` header not found by QA — may indicate the header isn't present, or isn't being surfaced through the AgentMail relay used for testing. Cannot confirm compliance status from this alone.
- **[WARN]** `List-Unsubscribe-Post` header (RFC 8058 one-click unsubscribe) not found — same caveat; if genuinely absent, this is a Gmail/Yahoo bulk-sender requirement gap as of their 2024 policies.
- **[WARN]** `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status could not be verified via this relay.
- Recommend re-validating these three items against raw headers from the actual ESP send (not just the relay capture), since all three are flagged as relay-visibility warnings rather than confirmed absences.
- No visible in-body unsubscribe link/footer text in the truncated HTML provided — cannot confirm CAN-SPAM footer compliance (physical address, unsubscribe link) from the truncated source.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- No destination URLs or UTM parameters were visible in the truncated HTML source (all 30 links are behind the tracking redirector, per QA). Cannot verify UTM tagging or landing-page alignment without the fully-expanded/untracked destination URLs.

## 7. Recommendations
1. Re-run header checks against a direct ESP send capture (not the AgentMail relay) to confirm actual presence/absence of `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results`/SPF/DKIM/DMARC — current warnings are relay-visibility gaps, not confirmed failures.
2. Manually click-test a sample of the 30 tracking-redirect links (skipped by automated probe) to confirm final destinations resolve correctly, especially the primary CTA(s) tied to the $100–$1250 gift card offer.
3. Confirm which AMPscript personalization "SCENARIO" (per the top-of-file comment) is active in the production send definition, and verify `@uEm`/`@cmdid`/`@user` fallback behavior when `NM_CRM_Feed` or `NM_Subscriber_New_Consolidated` lookups miss.
4. Obtain the full (non-truncated) HTML to verify `alt` text coverage on images and confirm UTM parameter presence/consistency on destination URLs.
## Recent history

- [[2026-09-13-save-20-as-a-kohl-s-rewards-member--ines-counter-department-store-fap6e]] — 5/10 (2026-09-13)
- [[2026-09-12-take-20-off-find-fall-home-picks-at-prices-you-ll-love--ines-counter-department-store-fap6e]] — 5/10 (2026-09-12)
- [[2026-09-12-etro-s-fall-2026-collection--ines-counter-department-store-fap6e]] — 6/10 (2026-09-12)

