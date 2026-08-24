---
slug: 2026-08-24-new-only-at-crate-le-creuset-in-ch-teau
type: email
date: 2026-08-24
persona: linnea-crate-cb-fap6e
score: "8/10"
sender: Crate & Barrel
subject: "New & only at Crate: Le Creuset in Château"
tags: [email, score-8, sender/crate-barrel]
---
# New & only at Crate: Le Creuset in Château
**Score:** 8/10 · **Type:** Email audit · **2026-08-24**
## Full review
## Technical Audit

# Technical Audit: Crate & Barrel — "New & only at Crate: Le Creuset in Château"

## 1. Technical Summary
Email uses a standard MI (Messaging Interactive) ESP template with heavy MSO/Outlook conditional CSS; automated QA shows 0 hard failures but 3 warning categories (compliance headers, deliverability headers, accessibility) and a 57% overall pass rate driven mostly by missing `alt` attributes.

## 2. Link & Tracking Issues
- 68 tracking/click-redirect links were present but skipped by the automated HTTP prober (expected behavior for redirect-domain links — not a confirmed defect, just unverified).
- Multiple tracking pixels detected: `mi.crateandbarrel.com/p/rp/...` (repeated 6×), `mi.crateandbarrel.com/p/up/...o.gif`, `sr.rlcdn.com/448796.gif` (LiveRamp/Rakuten identity sync, fired 5× with incrementing `n=` param), and `dv.crateandbarrel.com/o/...` (likely Merkle/DV engagement pixel). Duplicate firing of the same pixel (`f3c0d22992a01946.png` ×6, `448796.gif` ×5) is typical for multi-zone MI templates but inflates the request count per open.
- No broken/malformed href syntax observed in the visible source.

## 3. Rendering & Accessibility
- **29 images missing `alt` text**, confirmed by QA, including primary hero/product creative (e.g., `2026_0824_CB_LeCreuset_Chateau_Main1.gif`) and all tracking pixels. Product/hero images lacking alt text degrade screen-reader experience and fallback rendering when images are blocked.
- Template includes standard Outlook MSO conditionals (`<!--[if mso]>`, `<o:OfficeDocumentSettings>`) and legacy `.ReadMsgBody`/`.ExternalClass` resets — good Outlook/Windows Mail compatibility coverage.
- `.appleLinks`/`.appleLinksBlack`/`.appleLinksWhite` classes present to defeat Apple Mail's auto-blue-linking — no issues found.
- Media queries target 460px and 640/768px breakpoints; mobile classes (`.showmobile`, `.hide`, `.block`) present and consistent with responsive intent.

## 4. Personalization & Merge Tokens
No issues found — no unresolved merge tags (e.g., `%%FIRSTNAME%%`, `{{...}}`, `[[...]]`) or broken personalization syntax visible in the provided source. Note: source was truncated, so tokens later in the document were not reviewed.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — could not confirm one-click unsubscribe capability at the header level; may be a relay-capture gap (AgentMail) rather than a true absence, but should be verified against the raw MTA headers.
- **List-Unsubscribe-Post header not found (RFC 8058)** — one-click unsubscribe (required by Gmail/Yahoo bulk sender rules) cannot be confirmed as supported.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status is unknown from this capture; cannot confirm sender authentication compliance.
- Footer/unsubscribe link visibility could not be assessed — not present in the truncated HTML excerpt provided.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not assessable — no CTA/product `href` values with query strings were included in the truncated HTML excerpt. Recommend re-running the audit against the full source to confirm UTM parameter presence (`utm_source`, `utm_medium`, `utm_campaign`) and destination URL validity against crateandbarrel.com.

## 7. Recommendations
1. Add descriptive `alt` text to all content images (hero, product shots) at minimum; decorative/tracking pixels can use `alt=""` to satisfy accessibility checks without adding noise.
2. Verify `List-Unsubscribe` and `List-Unsubscribe-Post` headers are actually present in the raw MTA-delivered message — if genuinely absent, this is a CAN-SPAM/Gmail-Yahoo bulk-sender-requirements risk, not just a capture artifact.
3. Confirm SPF/DKIM/DMARC alignment via a direct header capture (bypassing the AgentMail relay) since `Authentication-Results` wasn't observed here.
4. Re-audit with full (untruncated) HTML to evaluate UTM parameters and unsubscribe link placement, which weren't visible in this excerpt.
5. Consider consolidating duplicate tracking-pixel calls (6× `mi.crateandbarrel.com` rp pixel, 5× `sr.rlcdn.com`) if unintentional, to reduce per-open request overhead.
## Recent history

- [[2026-08-19-can-t-figure-it-out-let-our-designers-help-for-free]] — 5/10 (2026-08-19)
- [[2026-08-19-the-ultimate-bedroom-makeover-inspo]] — 7/10 (2026-08-19)
- [[2026-08-18-bestselling-sofas-made-even-more-beautiful]] — 6/10 (2026-08-18)

