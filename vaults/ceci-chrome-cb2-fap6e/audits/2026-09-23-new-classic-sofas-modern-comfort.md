---
slug: 2026-09-23-new-classic-sofas-modern-comfort
type: email
date: 2026-09-23
persona: ceci-chrome-cb2-fap6e
score: "7/10"
sender: Crate & Barrel
subject: New! Classic sofas, modern comfort →
tags: [email, score-7, sender/crate-barrel]
---
# New! Classic sofas, modern comfort →
**Score:** 7/10 · **Type:** Email audit · **2026-09-23**
## Full review
## Technical Audit

# Technical Audit — Crate & Barrel "New! Classic sofas, modern comfort" Email

## 1. Technical Summary
The email uses a legacy XHTML transitional table-based layout (Movable Ink/MI templating framework with Scene7 and MI-hosted image pipelines) with heavy tracking instrumentation; automated QA returned a 57% pass rate with 0 hard failures and 3 warning categories, concentrated in accessibility and mail-header compliance.

## 2. Link & Tracking Issues
- 68 tracking/click-redirect links were present but skipped by the automated HTTP probe (click-tracking/redirect domains), so destination validity could not be confirmed programmatically — no direct evidence of broken links, but coverage is incomplete.
- Multiple third-party tracking pixels detected: `mi.crateandbarrel.com/p/rp/*.png` (Movable Ink open/render tracking, 7 instances), `sr.rlcdn.com/448796.gif` (LiveRamp/RLCDN, 5 sequential instances with `n=1`–`n=5`), and `mi.crateandbarrel.com/p/up/.../o.gif` — consistent with standard ESP engagement tracking, no anomalies found.
- No issues found beyond the above coverage gap.

## 3. Rendering & Accessibility
- 33 images flagged missing `alt` text across content images (`image.mail.crateandbarrel.com/lib/...`), hero/promo assets (`s7d5.scene7.com/is/image/...`, `s7d5.scene7.com/is/content/...`), and all tracking pixels (`mi.crateandbarrel.com/p/rp/*`, `sr.rlcdn.com/448796.gif`, `dv.crateandbarrel.com/o/...`). Content images lacking alt text is an accessibility/screen-reader defect; tracking pixels lacking alt text is expected and not a real issue.
- Head markup includes redundant/legacy directives: three separate `<meta name="format-detection" content="...">` tags (`date=no`, `address=no`, `telephone=no`) duplicating the combined tag already set above them — dead weight, not a functional bug.
- Template contains a leftover placeholder comment: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` (also misspelled "IMPUT") — indicates an unfilled template token, though it renders inertly as a comment.
- Extensive MSO/Outlook conditional comments and `-ms-text-size-adjust`/`-webkit-text-size-adjust` resets are present and correctly structured for cross-client rendering — no issues found there.

## 4. Personalization & Merge Tokens
- No unresolved merge tags (e.g. `{{...}}`, `%%...%%`, `[[...]]`) or broken personalization tokens found in the visible HTML source provided.
- No issues found.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- `List-Unsubscribe` header not found in the captured headers — QA flags this may be a relay artifact (AgentMail) rather than a true absence; cannot confirm CAN-SPAM one-click compliance from header data alone. Recommend checking raw MIME headers directly rather than the relay-forwarded copy.
- `List-Unsubscribe-Post` (RFC 8058) also not found, consistent with the above — one-click unsubscribe support unconfirmed.
- `Authentication-Results` header (SPF/DKIM/DMARC) not found via the AgentMail relay — authentication status is unknown, not confirmed failing. This is a monitoring/visibility gap, not necessarily a deliverability problem.
- In-body unsubscribe link presence/placement could not be assessed from the truncated HTML source provided (truncation cuts off before body content) — flagging as unverifiable rather than absent.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Cannot assess: the provided HTML source is truncated before the CTA/link markup, so UTM parameters and landing-page URL structure are not visible in this excerpt. Full HTML would be needed to verify UTM consistency and landing-page alignment.
- No issues found in the visible portion (head/style block only).

## 7. Recommendations
1. Add descriptive `alt` text to the 15 content/hero images (skip tracking pixels — empty `alt=""` is correct there per WCAG for purely decorative/tracking elements).
2. Verify `List-Unsubscribe` / `List-Unsubscribe-Post` / `Authentication-Results` against raw source headers (not the AgentMail relay copy) to rule out a capture artifact before treating this as a real compliance gap.
3. Re-run the tracking-link probe with redirect-following enabled (or manual spot-check) to confirm the 68 skipped links resolve correctly, since they weren't validated.
4. Remove the dead placeholder comment (`IMPUT HERE CLIENT...`) and consolidate the three redundant `format-detection` meta tags during next template cleanup.
5. Obtain the full (untruncated) HTML to audit CTA `href` UTM parameters and confirm landing-page continuity — currently unverifiable.
## Recent history

- [[2026-08-19-color-palettes-that-just-feel-goop]] — 5/10 (2026-08-19)
- [[2026-08-19-the-design-desk-zanna-roberts-rassi-s-twin-room-makeovers]] — 6/10 (2026-08-19)
- [[2026-08-19-new-fall-2026-inspired-by-the-english-countryside]] — 7/10 (2026-08-19)

