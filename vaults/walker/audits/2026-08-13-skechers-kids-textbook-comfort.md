---
slug: 2026-08-13-skechers-kids-textbook-comfort
type: email
date: 2026-08-13
persona: walker
score: "5/10"
sender: Shoe Carnival
subject: Skechers Kids = Textbook Comfort📚
tags: [email, score-5, sender/shoe-carnival]
---
# Skechers Kids = Textbook Comfort📚
**Score:** 5/10 · **Type:** Email audit · **2026-08-13**
## Full review
## Technical Audit

# Technical Audit: Shoe Carnival — "Skechers Kids = Textbook Comfort" (2026-08-13)

## 1. Technical Summary
Standard multi-client HTML email (legacy DOCTYPE, extensive Outlook/Yahoo/Gmail/Samsung CSS hacks) served from an ESP subdomain (`email.shoecarnival.com`) with click-tracking via `emltrk.com`. Automated QA reported a 100% pass rate but surfaced 4 accessibility warnings and could not verify 21 tracking links due to redirect-domain probing limits.

## 2. Link & Tracking Issues
- 21 tracking/click-redirect links (`emltrk.com` domain) were skipped by the automated HTTP prober — destination URLs are **unverified**, not confirmed working.
- One tracking pixel URL contains a literal unresolved merge token: `https://0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]` — the `[UNIQUE]` placeholder appears to not have been substituted at send time (see §4).
- One tracking pixel URL (`ieezzy5m.emltrk.com/...&t=utm_campaign=SCA_20260813_skechers_AM​`) has a trailing zero-width space character (U+200B) appended after the campaign value — likely a template artifact, low risk but worth cleaning at the source template.

## 3. Rendering & Accessibility
- 4 images missing `alt` text (QA WARN):
  - `9521013e-7444-4804-9257-f83e6db7b8bc.jpg`
  - `a97db5d3-cfac-4b76-923a-ca38510bf3a6.jpg`
  - Tracking pixel `ieezzy5m` (emltrk.com)
  - Tracking pixel `0di86k1v` (emltrk.com)
  - The two tracking pixels missing alt text is expected/benign (1x1 beacons); the two content images (`9521013e...`, `a97db5d3...`) missing alt text is a genuine accessibility gap for screen-reader users.
- Responsive breakpoints are defined at 320px, 450px, and 660px with duplicated/overlapping rules (e.g., `.container`/`.tableBlock` width rules repeated across both the 450px and 660px blocks) — functional but redundant; not a rendering bug based on the source shown.
- Standard client-compatibility hacks present (MSO conditional-style patterns implied, ExternalClass, ReadMsgBody, Apple/Samsung autolink overrides) — no missing fixes observed in the truncated source.

## 4. Personalization & Merge Tokens
- Unresolved merge token confirmed in the HTML source: `d=[UNIQUE]` in the second `emltrk.com` pixel URL. If this bracketed placeholder was meant to be replaced by a per-recipient unique ID, it did not resolve — this pixel is likely firing with a literal, non-unique value across all recipients, which would undercount/corrupt open-tracking analytics.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- No issues found — cannot be evaluated. The provided HTML is truncated and does not include an unsubscribe link, physical mailing address, or footer content, and no email headers (SPF/DKIM/DMARC, List-Unsubscribe) were provided for review. Flagging as **unverified due to incomplete source**, not confirmed compliant or non-compliant.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Only one UTM parameter is visible in the truncated source: `utm_campaign=SCA_20260813_skechers_AM` (embedded inside a tracking-pixel URL, not a clickable CTA link). No CTA/click-link UTM parameters are visible in the truncated HTML to confirm campaign/source/medium tagging or landing-page alignment.
- The 21 click-tracking links were not probed (redirect-domain skip), so landing-page destination and UTM continuity cannot be confirmed either way.

## 7. Recommendations
1. Add descriptive `alt` text to the two content images (`9521013e-7444-4804-9257-f83e6db7b8bc.jpg`, `a97db5d3-cfac-4b76-923a-ca38510bf3a6.jpg`).
2. Fix the unresolved `[UNIQUE]` merge token in the `0di86k1v.emltrk.com` pixel URL so open-tracking data is per-recipient accurate.
3. Strip the trailing zero-width space from the `ieezzy5m.emltrk.com` tracking URL's `utm_campaign` value at the template level.
4. Re-run link verification with a prober that follows `emltrk.com` redirects to confirm the 21 skipped links resolve to correct, live landing pages with expected UTM parameters.
5. Supply full (non-truncated) HTML and raw headers in a follow-up pass to complete the Compliance (§5) review — unsubscribe link, physical address, and authentication headers could not be assessed here.
## Recent history

- [[2026-08-13-final-hours-for-an-extra-25-off]] — 6/10 (2026-08-13)
- [[2026-08-13-this-is-perfect-for-you]] — 4/10 (2026-08-13)
- [[2026-08-13-did-you-forget-something]] — 4/10 (2026-08-13)

