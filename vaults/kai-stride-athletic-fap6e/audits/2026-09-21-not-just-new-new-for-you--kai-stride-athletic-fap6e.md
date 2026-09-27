---
slug: 2026-09-21-not-just-new-new-for-you--kai-stride-athletic-fap6e
type: email
date: 2026-09-21
persona: kai-stride-athletic-fap6e
score: "4/10"
sender: lululemon
subject: Not just new—new for you
tags: [email, score-4, sender/lululemon]
---
# Not just new—new for you
**Score:** 4/10 · **Type:** Email audit · **2026-09-21**
## Full review
## Technical Audit

1. Technical Summary
The email is a standard SFMC-templated marketing send with a properly structured HTML head, but automated QA flags gaps in unsubscribe header compliance, four images missing alt text, and an unverifiable authentication chain.

2. Link & Tracking Issues
No issues found in the truncated HTML source itself. QA noted 55 tracking/click-redirect links were skipped from HTTP probing (expected behavior for click-tracking domains, not a confirmed defect) — link destinations could not be independently verified as a result.

3. Rendering & Accessibility
- Missing alt text on 4 images: `SFMC_Email_Masthead_Yogotype_PureWhite_FFFFFF` (masthead logo) and `SFMC_Email_Footer_Arrow-Right` (appears 3×, likely footer nav chevrons). Screen readers will announce these as unlabeled or skip them entirely.
- Dark-mode targeting rules present (`u + .body .cta-white-fixed a`, Outlook/Gmail dark-mode selectors, `color-scheme`/`supported-color-schemes` meta) — no issues found.
- `x-apple-disable-message-reformatting` and Outlook conditional VML namespaces are correctly declared.

4. Personalization & Merge Tokens
No merge tokens/personalization fields visible in the truncated source. Cannot confirm absence of unresolved tokens (e.g. `%%FirstName%%`) beyond the visible portion — flag as unverified rather than issue-free.

5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not detected — may be a relay artifact (AgentMail) rather than a true sender omission, but as observed this fails one-click unsubscribe discoverability.
- `List-Unsubscribe-Post` (RFC 8058) not detected — one-click unsubscribe via mailto/HTTP POST cannot be confirmed supported.
- `Authentication-Results` header absent — SPF/DKIM/DMARC pass/fail status cannot be verified from this capture.
- Note: all three are likely relay-side capture gaps (AgentMail) rather than confirmed sender-side violations; cannot distinguish from source alone.

6. Email-to-Site Continuity (UTM params, landing page alignment)
Not verifiable — the truncated HTML source does not expose destination URLs for the 55 tracking links (skipped by QA probe), so UTM parameter presence/consistency and landing-page alignment cannot be assessed from available evidence.

7. Recommendations
- Add descriptive `alt` text to the masthead logo image and the 3 footer arrow icons.
- Confirm with deliverability/ESP tooling (not this relay) whether `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually present on the raw sent message — current absence may be a capture artifact of the AgentMail relay rather than a real compliance gap.
- Independently verify `Authentication-Results` (SPF/DKIM/DMARC) via a direct mail-server capture rather than relay logs.
- If UTM/link-destination review is needed, source raw (non-tracking-wrapped) URLs from ESP export rather than the rendered HTML, since 55/55 links were tracking-redirect domains unprobeable via HTTP.
## Recent history

- [[2026-09-20-switch-up-how-you-style-your-adidas-z-n-e--kai-stride-athletic-fap6e]] — 3/10 (2026-09-20)
- [[2026-09-19-up-to-50-off-fall-savings-on-your-favorites--kai-stride-athletic-fap6e]] — 5/10 (2026-09-19)
- [[2026-09-18-adidas-anthony-edwards-3-believe-that--kai-stride-athletic-fap6e]] — 4/10 (2026-09-18)

