---
slug: 2026-09-09-buy-more-earn-more-get-a-100-1-250-gift-card-with-your-purchase--ines-counter-department-store-fap6e
type: email
date: 2026-09-09
persona: ines-counter-department-store-fap6e
score: "7/10"
sender: Neiman Marcus
subject: "Buy More, Earn More: Get a $100–$1,250 gift card with your purchase"
tags: [email, score-7, sender/neiman-marcus]
---
# Buy More, Earn More: Get a $100–$1,250 gift card with your purchase
**Score:** 7/10 · **Type:** Email audit · **2026-09-09**
## Full review
## Technical Audit

## Technical Audit — Neiman Marcus "Buy More, Earn More" Email

### 1. Technical Summary
This is an SFMC/AMPscript-templated HTML email (XHTML 1.0 Transitional doctype) with standard Outlook/iOS reset CSS and a mobile breakpoint stack; automated QA passed 62% with 0 failing issues and 3 warnings, all related to unrecoverable email headers rather than HTML defects.

### 2. Link & Tracking Issues
- QA flagged 30 tracking/click-redirect links that were skipped during HTTP probing (by design — redirect/tracking domains aren't followed). No broken or malformed links were confirmed since these could not be probed; this is a coverage gap, not a confirmed defect.
- The HTML source provided is truncated before the `<body>` content, so no `<a href>` values are visible in this review. Cannot confirm UTM parameter presence/correctness on individual CTAs from the available source — flagging as unverified rather than fabricating a finding.

### 3. Rendering & Accessibility
- No issues found in the visible `<head>`/style block: `x-apple-disable-message-reformatting` and iOS blue-link reset (`a[x-apple-data-detectors]`) are present, viewport meta is set correctly (`width=device-width, initial-scale=1, maximum-scale=1`), and mobile breakpoints (`480px`, `520px`, `600px`) with `.ImgSize`/`.TxtSize` fluid-width rules are properly scoped under `@media only screen and (max-width: ...)`.
- Legacy Outlook/ExternalClass/ReadMsgBody resets are present, indicating standard cross-client support.
- Cannot assess `alt` text, color contrast, or table structure — not present in the truncated source.

### 4. Personalization & Merge Tokens
- The template header comment block declares required AMPscript variables: `@email`, `@base_refid`, `@refid`, `@user` (via `Lookup("NM_Subscriber_New_Consolidated", "EMAIL_ID", "EMAIL_ADDRESS", @email)`), `@emailid`, `@uEm` (via `Lookup("NM_CRM_Feed", "uEm", ...)`), and `@cmdid` (via `Lookup("NM_CRM_Feed", "cmdid", ...)`).
- The comment instructs "CHOOSE ONE SCENARIO BELOW" and includes a commented-out `SET @user = HASHED_EMAIL_SHA256` line — this indicates the template ships with multiple personalization scenarios and the sender must select/uncomment the correct one before send. If this comment block ships live (as shown here), it suggests the scenario-selection step may not have been finalized/cleaned prior to send — worth confirming with the ESP/CRM team that the correct lookup path was active for this send.
- Cannot confirm whether merge fields rendered correctly in-body (e.g., fallback values for failed lookups) since the personalized body content is not in the truncated source.

### 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header**: not found by automated check (WARN). Per QA notes this may be an artifact of the AgentMail relay not capturing/forwarding the header rather than the sender omitting it — cannot confirm root cause from header data alone.
- **List-Unsubscribe-Post (RFC 8058)**: not found (WARN). If genuinely absent, one-click unsubscribe (required by Google/Yahoo bulk sender rules as of Feb 2024) would not be supported.
- **Authentication-Results (SPF/DKIM)**: not found (WARN), so SPF/DKIM pass/fail status is unknown from this data — likely also a relay-capture gap per QA notes, not necessarily a sending-domain misconfiguration.
- No visible unsubscribe link/footer in the truncated HTML to cross-check against the header-level findings.
- **Recommendation-relevant**: these are all "not found" rather than "found and failing" — treat as inconclusive pending direct inspection of raw headers from the original SMTP transaction (bypassing the relay).

### 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Not assessable: no CTA URLs are present in the truncated HTML source, so UTM parameter presence/consistency and landing-page alignment cannot be verified in this pass.

### 7. Recommendations
1. Re-run header capture directly against the originating SMTP relay (not via AgentMail) to get authoritative `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` values — the current warnings are inconclusive, not confirmed failures.
2. If `List-Unsubscribe-Post` is genuinely missing at the source, add RFC 8058 one-click unsubscribe support to stay compliant with Gmail/Yahoo bulk sender requirements.
3. Confirm with the SFMC/CRM team which personalization "scenario" (plain lookup vs. `HASHED_EMAIL_SHA256`) was intended to be active — the shipped comment block shows both options with the hashed variant commented out, and the "CHOOSE ONE SCENARIO" instruction still present suggests this may be leftover template scaffolding rather than a deliberate final state.
4. Supply the full (untruncated) HTML body — including CTA `<a>` tags and footer — to verify tracking-link UTM parameters and landing-page continuity, and to directly confirm/deny an unsubscribe link's presence in-body.
## Recent history

- [[2026-09-09-find-new-fall-faves-for-the-whole-family--ines-counter-department-store-fap6e]] — 5/10 (2026-09-09)
- [[2026-09-08-fall-s-monochromatic-moves--ines-counter-department-store-fap6e]] — 6/10 (2026-09-08)
- [[2026-09-08-it-s-your-last-chance-to-get-50-off-select-beauty--ines-counter-department-store-fap6e]] — 6/10 (2026-09-08)

