---
slug: 2026-08-03-our-sofas-are-famous-here-s-why
type: email
date: 2026-08-03
persona: linnea-crate-cb-fap6e
score: "7/10"
sender: Crate & Barrel
subject: Our sofas are famous. Here’s why →
tags: [email, score-7, sender/crate-barrel]
---
# Our sofas are famous. Here’s why →
**Score:** 7/10 · **Type:** Email audit · **2026-08-03**
## Full review
## Technical Audit

# Technical Email Audit — Crate & Barrel ("Our sofas are famous. Here's why →")

## 1. Technical Summary
This is a legacy MSO/XHTML 1.0 Transitional table-based HTML email built on the Bronto/Oracle CrossChannel Marketing (mi.crateandbarrel.com "MI styling") template framework, with heavy third-party pixel tracking and no verifiable unsubscribe or authentication headers in the captured payload.

## 2. Link & Tracking Issues
- 62 tracking/click-redirect links were present but skipped by the automated HTTP prober (not individually validated for reachability/404s).
- Multiple distinct tracking domains fire in this single email:
  - `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=...` — fires **6 times** (likely per content-block open tracking), all missing `alt`.
  - `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif?mi_u=...` — open-tracking pixel.
  - `dv.crateandbarrel.com/o/4fe9b327-...?mi_mid=...&cp_tp=v` — separate deliverability/view tracker.
  - `sr.rlcdn.com/448796.gif?s=...&n=1` through `n=5` — LiveRamp/Rapleaf (`rlcdn.com`) third-party identity-sync pixel, fired 5 times with incrementing `n=` sequence.
- Because all click/redirect links were skipped rather than probed, dead-link/404 status on the actual product and CTA URLs is **unverified** — flag for manual click-through QA before relying on this report for link health.

## 3. Rendering & Accessibility
- **28 images missing `alt` text** across content images (`bbf6f9d4-...png`, `f5ad3e20-...jpg`, and 10+ others) and all tracking pixels — screen readers will announce nothing or fall back to raw filenames for hero/product imagery.
- Legacy `XHTML 1.0 Transitional` doctype with `xmlns:v`/`xmlns:o` VML namespaces and `<!--[if gte mso]>`/`<!--[if mso]>` conditional blocks — standard for Outlook desktop compatibility, no issues found here.
- `<meta name="viewport" content="...maximum-scale=1">` combined with `-webkit-text-size-adjust:100%` and `*{max-height:1000000px}` resets — intentional MSO/Apple Mail hacks, no issues found.
- Responsive breakpoints defined for `max-width:460px` (mobile) and `min-width:640px/768px` (desktop `img{max-width}` bumps) — structure present; actual rendering not verified against a live client matrix (Litmus/Email on Acid), so cross-client visual regressions can't be confirmed from source alone.
- Template contains a leftover build artifact comment: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` (typo for "INPUT") — cosmetic/internal, but indicates an unfilled ESP template placeholder shipped to production.

## 4. Personalization & Merge Tokens
No merge/personalization tokens (e.g. `%%FIRSTNAME%%`, `{{first_name}}`, AMPscript, or Bronto `[%% %%]` syntax) are visible in the truncated HTML segment provided. Given the source was truncated mid-`<style>`/body, this is **not a confirmed absence** — recommend re-running the check against the full HTML payload before concluding no personalization is used.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found** — required for one-click unsubscribe support in Gmail/Yahoo per their 2024 bulk-sender requirements; may be a capture gap in the AgentMail relay rather than a true absence, but cannot be confirmed compliant from available data.
- **List-Unsubscribe-Post header not found (RFC 8058)** — without this, even if `List-Unsubscribe` exists, one-click unsubscribe cannot function; mail clients will fall back to requiring the user to click through to a web unsubscribe page.
- **Authentication-Results header not found** — SPF/DKIM/DMARC pass/fail status is unknown from this capture; cannot confirm the message is authenticating cleanly at the relay hop.
- These are all flagged as **WARN**, not confirmed failures — most likely explained by the AgentMail relay not preserving these headers rather than Crate & Barrel's ESP omitting them. Recommend validating against raw SMTP headers at the originating mail server before treating as a compliance gap.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Cannot be assessed from available data: all 62 outbound links were tracking/click-redirect URLs (`mi.crateandbarrel.com` redirect wrappers) that were skipped by the prober, so neither the final landing-page destinations nor their UTM parameter structure are visible in this report. The tracking scheme uses proprietary `mi_u=` / `mi_mid=` identifiers rather than standard `utm_source/utm_medium/utm_campaign` params at the wrapper layer — this doesn't rule out UTMs being appended after the redirect resolves, but it means continuity to the site can't be confirmed without following the redirect chain manually.

## 7. Recommendations
1. Re-run QA against the full (untruncated) HTML to confirm/deny personalization tokens and get a complete alt-text/link inventory.
2. Add `alt` text to the 12 unique content images currently missing it (tracking pixels can reasonably stay `alt=""`).
3. Manually resolve a sample of the 62 skipped tracking links to confirm they 200 and land on the intended PDP/category pages with expected UTM parameters.
4. Verify `List-Unsubscribe` / `List-Unsubscribe-Post` / `Authentication-Results` directly against raw headers at the SMTP source (not the AgentMail relay) to determine if this is a real compliance gap or a relay capture limitation.
5. Remove the unresolved template placeholder comment (`<!--[IMPUT HERE...-->`) from the production build.
## Recent history

- [[2026-08-02-new-rugs-in-breezy-blues-greens-right-this-way]] — 8/10 (2026-08-02)
- [[2026-08-02-free-shipping-on-100s-of-items-don-t-miss-out]] — 8/10 (2026-08-02)
- [[2026-08-02-school-starts-soon-up-to-20-off-essentials-985352e8-10fb-49a9-b792-]] — 8/10 (2026-08-02)

