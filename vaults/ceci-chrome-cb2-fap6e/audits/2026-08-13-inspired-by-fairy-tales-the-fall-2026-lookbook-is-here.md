---
slug: 2026-08-13-inspired-by-fairy-tales-the-fall-2026-lookbook-is-here
type: email
date: 2026-08-13
persona: ceci-chrome-cb2-fap6e
score: "5/10"
sender: Crate & Kids
subject: Inspired by fairy tales—the Fall 2026 Lookbook is here!
tags: [email, score-5, sender/crate-kids]
---
# Inspired by fairy tales—the Fall 2026 Lookbook is here!
**Score:** 5/10 · **Type:** Email audit · **2026-08-13**
## Full review
## Technical Audit

**1. Technical Summary**
Standard responsive HTML email built on the MessagingIQ (MI) template framework with Scene7/Crate & Barrel asset delivery; core structure renders correctly, but automated QA flags missing accessibility attributes and unconfirmed compliance/auth headers at the transport layer.

**2. Link & Tracking Issues**
- 81 tracking/click-redirect links were skipped by the automated HTTP prober (domain pattern indicates MI click-tracking wrappers) — destination validity cannot be confirmed from this pass; recommend a manual click-through pass on primary CTAs before send.
- Standard multi-vendor tracking pixel stack present: MI open pixel (`mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png`, 6 instances), MI conversion pixel (`mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif`), LiveRamp/RampID pixel (`sr.rlcdn.com/448796.gif`, 5 sequential instances with `n=1`–`n=5`), and a `dv.crateandbarrel.com` pixel with `mi_mid` and `cp_tp=v` params. No broken or malformed pixel URLs detected.
- No issues found with link syntax/structure in the visible source (all `href` attributes well-formed where inspected).

**3. Rendering & Accessibility**
- **35 images missing `alt` text**, spanning hero/lifestyle imagery (`image.mail.crateandbarrel.com/lib/...`), Scene7 assets (`s7d5.scene7.com/is/content/Crate/...`), and tracking pixels. Content images without alt text degrade screen-reader experience and fail to convey the message when images are blocked (common in Outlook/Gmail default states). Tracking-pixel `alt=""` (empty, not missing) is the correct pattern — these should be explicitly set rather than omitted.
- Template includes standard MSO conditional comments, Outlook `mso-*` fixes, and `x-apple-disable-message-reformatting` — no structural rendering red flags in the head.
- One embedded comment artifact: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` — a leftover template placeholder with a typo ("IMPUT"), indicating font-import step may have been skipped in build; confirm intentional.
- `<title>Crate & Barrel</title>` does not match the sender persona "Crate & Kids" — inconsistent with subject line branding at the tab/preview level.

**4. Personalization & Merge Tokens**
- No unresolved merge tags (e.g. `{{...}}`, `%%...%%`, `[FIRSTNAME]`) detected in the truncated source.
- No issues found — no personalization tokens present in the visible markup to validate.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- **List-Unsubscribe header not found** — could not be confirmed in headers as captured by the relay; if genuinely absent, this is a CAN-SPAM/Gmail-Yahoo 2024 bulk-sender requirement gap. Note: QA flags this as possibly a relay-capture limitation rather than confirmed absence — verify against raw SMTP headers directly from ESP.
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click unsubscribe cannot be confirmed; same relay-capture caveat applies.
- **Authentication-Results header not found** — SPF/DKIM pass/fail status unknown via this relay; cannot confirm domain authentication compliance from this data alone.
- Recommend re-validating all three via direct ESP header export or a raw-header capture tool (e.g., MXToolbox, mail-tester.com) rather than relying on AgentMail relay capture, since the WARN language suggests a capture-path limitation rather than a confirmed defect.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
- Cannot confirm UTM parameter presence/consistency — the 81 tracking links were skipped by the prober and the truncated HTML doesn't expose resolved destination URLs. Recommend re-running the audit against un-truncated source or resolved link destinations to verify UTM tagging (`utm_source`, `utm_medium`, `utm_campaign`) and landing-page alignment with the "Fall 2026 Lookbook" theme.
- No issues found in visible `href` structure — insufficient data to assess continuity beyond that.

**7. Recommendations**
1. Add descriptive `alt` text to the 25 unique content images (currently missing); set `alt=""` explicitly on the 10 tracking-pixel instances (MI, RampID, `dv.crateandbarrel.com`) to signal intentional decorative status.
2. Directly verify `List-Unsubscribe` / `List-Unsubscribe-Post` and `Authentication-Results` (SPF/DKIM/DMARC) via raw SMTP headers or a dedicated header-inspection tool — do not treat the relay WARN as confirmed absence.
3. Resolve and spot-check a sample of the 81 skipped tracking links for correct destination and UTM tagging.
4. Fix the `<title>` tag to reflect "Crate & Kids" branding for tab/preview consistency with the sender name.
5. Confirm whether the `<!--[IMPUT HERE...]-->` placeholder comment indicates a missing font-import step in the build pipeline.
## Recent history

- [[2026-08-13-on-now-up-to-25-off-your-bedroom-refresh]] — 5/10 (2026-08-13)
- [[2026-08-12-can-t-wait-for-halloween-neither-can-we]] — 5/10 (2026-08-12)
- [[2026-08-12-collected-not-expected-august-sale-ends-tonight]] — 7/10 (2026-08-12)

