---
slug: 2026-08-09-shop-furniture-you-ll-love-now-forever-994d8353-4799-4b28-9336-
type: email
date: 2026-08-09
persona: ceci-chrome-cb2-fap6e
score: "5/10"
sender: Crate & Kids
subject: Shop furniture you’ll love now & forever
tags: [email, score-5, sender/crate-kids]
---
# Shop furniture you’ll love now & forever
**Score:** 5/10 · **Type:** Email audit · **2026-08-09**
## Full review
## Technical Audit

## Technical Audit: Crate & Kids — "Shop furniture you'll love now & forever"

### 1. Technical Summary
Standard MI (Movable Ink/Message Central)-templated MSO/VML responsive email build with 57% automated QA pass rate; primary issues are missing image alt text across ~40 images and absent unsubscribe/authentication headers in the captured relay data.

### 2. Link & Tracking Issues
- 88 tracking/click-redirect links were present but skipped by the automated HTTP probe (expected behavior for redirect-domain links — not itself a defect, but means link destinations are unverified in this audit).
- Multiple tracking pixels present: `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png` (6 instances), `sr.rlcdn.com/448796.gif` (5 sequential instances, `n=1`–`n=5` — LiveRamp/RampID identity sync), and `mi.crateandbarrel.com/p/up/.../o.gif` (Movable Ink open pixel). Volume is typical for MI-platform sends; no broken or malformed tracking URLs identified.
- No issues found with link structure/redirect domains themselves (not probed, so cannot confirm live status).

### 3. Rendering & Accessibility
- **40 images missing `alt` text** (QA-confirmed), spanning both CDN-hosted content images (`image.mail.crateandbarrel.com/lib/...`) and Scene7 lookbook assets (`s7d5.scene7.com/is/content/Crate/...`). Tracking pixels lacking alt text (rlcdn, mi.crateandbarrel.com) are not an accessibility concern, but the content/product images are — screen reader users get no fallback text if images fail to load or are blocked.
- Template uses legacy XHTML 1.0 Transitional doctype with full MSO/VML conditional comments and Outlook-specific fixes (`mso-table-lspace`, `OfficeDocumentSettings`) — standard for Outlook desktop compatibility.
- `<title>Crate & Barrel</title>` does not match the sender brand shown in the From name ("Crate & Kids"), though this is a minor inconsistency rather than a rendering defect.
- No issues found with the responsive media queries (460px/640px/768px breakpoints are present and structured correctly).

### 4. Personalization & Merge Tokens
- No merge tags or personalization tokens (`{{...}}`, `%%...%%`, AMPscript, etc.) were visible in the truncated source. Given the truncation, this cannot be fully confirmed — flagging as inconclusive rather than "no issues found."

### 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **`List-Unsubscribe` header not found** — could not be confirmed via the AgentMail relay capture. This may be a relay/capture limitation rather than a true absence; recommend verifying against raw SMTP headers from the original send.
- **`List-Unsubscribe-Post` (RFC 8058) header not found** — one-click unsubscribe support cannot be confirmed from available data.
- **`Authentication-Results` header not found** — SPF/DKIM/DMARC pass/fail status is unknown from this capture.
- Note: all three findings stem from relay header capture limitations, not confirmed defects in the sender's actual configuration. Do not treat as confirmed non-compliance without checking raw headers at the source (mail.crateandbarrel.com is Crate & Barrel's established sending domain, making outright missing authentication unlikely).

### 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot be assessed from the truncated HTML — no destination/CTA URLs with UTM parameters were visible in the provided source excerpt. Flagging as inconclusive rather than pass/fail.

### 7. Recommendations
1. Add descriptive `alt` text to all 40 flagged content images (Scene7 lookbook and `image.mail.crateandbarrel.com` assets); tracking pixels can use `alt=""`.
2. Verify `List-Unsubscribe` / `List-Unsubscribe-Post` / `Authentication-Results` directly against raw SMTP headers from the sending MTA rather than the AgentMail relay capture, since relay header stripping is a known/expected gap.
3. Align `<title>` tag with the "Crate & Kids" sub-brand sender identity for consistency.
4. Re-run this audit against the full (untruncated) HTML to confirm UTM parameters and merge-token usage, which couldn't be verified from the excerpt provided.
## Recent history

- [[2026-08-09-durable-stylish-elegant-dinnerware-2b80310f-5123-417d-aadf-]] — 6/10 (2026-08-09)
- [[2026-08-08-90-fabrics-endless-possibilities]] — 7/10 (2026-08-08)
- [[2026-08-08-the-wine-glasses-you-ll-use-for-every-occasion]] — 7/10 (2026-08-08)

