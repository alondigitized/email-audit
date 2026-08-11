---
slug: 2026-08-11-up-to-30-off-your-go-to-school-gear
type: email
date: 2026-08-11
persona: walker
score: "5/10"
sender: Shoe Carnival
subject: Up to 30% off Your Go-To School Gear
tags: [email, score-5, sender/shoe-carnival]
---
# Up to 30% off Your Go-To School Gear
**Score:** 5/10 · **Type:** Email audit · **2026-08-11**
## Full review
## Technical Audit

## Technical Audit: Shoe Carnival — "Up to 30% off Your Go-To School Gear"

### 1. Technical Summary
Standard HTML4.01 Transitional email using table-based layout with extensive client-targeting CSS (Outlook/Hotmail/Yahoo/Samsung/Apple fixes). Automated QA flagged 8 missing-alt-text warnings and skipped probing 34 tracking links; no broken links, personalization, or authentication data were available in the provided source to confirm compliance.

### 2. Link & Tracking Issues
- QA skipped HTTP probing on 34 tracking/click-redirect links (`emltrk.com` domain), so link destination validity is unconfirmed — standard behavior for redirect-domain links, not itself a defect.
- One tracking pixel URL contains a **trailing invisible/zero-width character** after the UTM string: `https://ieezzy5m.emltrk.com/v2/ieezzy5m?i=72180589&t=utm_campaign=SCA_20260811_nike_adidas_AM​` — the stray character after `AM` should be stripped from the template source, as it can cause URL-parsing or dedup issues downstream.
- No broken or malformed `href` values found in the visible source.

### 3. Rendering & Accessibility
- **8 images missing `alt` text**, confirmed by QA:
  - 4 product images from `i8.amplience.net` (SKUs `144406_308584_SET`, `152229_373128_SET`, `157156_417202_SET`, `178801_393710_SET`)
  - 2 creative images from `image.email.shoecarnival.com` (`9521013e-…jpg`, `a97db5d3-…jpg`)
  - 2 tracking pixels from `emltrk.com` (`ieezzy5m`, `0di86k1v`) — these should carry `alt=""` (empty, not absent) since they are non-content/tracking images, per standard accessibility practice for decorative/invisible elements.
- Extensive vendor-specific CSS resets present (`.ExternalClass`, Apple/Samsung autolink fixes, Gmail/Outlook table padding fixes) — no defects found in what's visible.
- Media queries defined at 320px, 450px, and 600/601px/660px breakpoints — layering is present but overlapping breakpoint logic (450px and 660px both redefine `.container`/`.tableBlock` width rules) could not be fully verified without full source; flagging as worth a manual render check across clients.

### 4. Personalization & Merge Tokens
No merge tags, personalization placeholders (e.g., `{{first_name}}`), or dynamic-content blocks are present in the visible/truncated HTML. No issues found in the available source, but this cannot be fully confirmed since the source was truncated.

### 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
Unsubscribe link, physical mailing address, and authentication headers (SPF/DKIM/DMARC, `List-Unsubscribe`) are **not present in the truncated HTML/data provided** — cannot confirm or deny compliance from available evidence. Recommend re-running the audit against the full source/headers before signing off on this section.

### 6. Email-to-Site Continuity (UTM params, landing page alignment)
One UTM value is visible, embedded inside a tracking-redirect query string rather than a direct landing URL: `utm_campaign=SCA_20260811_nike_adidas_AM`. Because all outbound links route through `emltrk.com` redirects (skipped by the HTTP probe), final landing-page UTM parameters and page alignment could not be verified in this pass.

### 7. Recommendations
1. Add descriptive `alt` text to the 4 `amplience.net` product images and 2 `image.email.shoecarnival.com` creative images; add `alt=""` to the 2 `emltrk.com` tracking pixels.
2. Strip the stray trailing character from the `ieezzy5m` tracking pixel URL's `utm_campaign` value.
3. Re-run QA against the un-truncated HTML plus raw email headers to validate unsubscribe/CAN-SPAM compliance and authentication (SPF/DKIM/DMARC), which couldn't be assessed here.
4. Resolve a subset of the 34 skipped tracking links (sample a few post-send) to confirm redirect targets and final UTM parameters match live landing pages.
5. Note: the QA tool's summary line ("100% pass rate, 0 issues, 0 warnings") **contradicts** its own itemized output (8 WARNs listed) — this looks like a reporting/aggregation bug in the QA script itself and should be checked separately from the email.
## Recent history

- [[2026-08-11-top-shoes-80-and-under-for-the-new-school-year]] — 4/10 (2026-08-11)
- [[2026-08-11-wild-for-western]] — 4/10 (2026-08-11)
- [[2026-08-11-it-s-new-arrivals-daaaay]] — 3/10 (2026-08-11)

