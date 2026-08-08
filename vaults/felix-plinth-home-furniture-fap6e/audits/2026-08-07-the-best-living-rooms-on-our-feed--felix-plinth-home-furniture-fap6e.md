---
slug: 2026-08-07-the-best-living-rooms-on-our-feed--felix-plinth-home-furniture-fap6e
type: email
date: 2026-08-07
persona: felix-plinth-home-furniture-fap6e
score: "5/10"
sender: CB2 Free Design Services
subject: The best living rooms on our feed
tags: [email, score-5, sender/cb2-free-design-services]
---
# The best living rooms on our feed
**Score:** 5/10 · **Type:** Email audit · **2026-08-07**
## Full review
## Technical Audit

# Technical Audit: CB2 "The best living rooms on our feed"

## 1. Technical Summary
Legacy table-based HTML email (XHTML 1.0 Transitional doctype, MSO conditional comments) built for broad client compatibility, but it fails baseline authentication/compliance header checks and ships a large volume of insecure third-party tracking calls. QA pass rate: 57% (0 hard issues, 3 warning categories).

## 2. Link & Tracking Issues
- **63 tracking/click-redirect links were skipped from HTTP probing** — QA could not verify these resolve successfully; destination integrity is unconfirmed.
- **10 sequential insecure tracking pixels** to `ads.dotomi.com/cookieredir/2437/pub1.php` through `pub10.php` (all `http://`, not `https://`) with an identical cookie param (`d98e199bf5027afea04b790655b3dee2=1`). This is an unusually high number of duplicate ad-sync pixels in one send and each is a candidate for client-side image blocking.
- **`http://login.dotomi.com/ucm/UCMController`** — also plain HTTP, same non-HTTPS blocking risk.
- Two additional first/third-party tracking pixels present: `https://mi.cb2.com/p/up/.../o.gif` (open tracking) and `https://dv.cb2.com/o/...?cp_tp=v3.eJz...` (payload appears to be a base64-encoded zlib blob — opaque, cannot be validated from source alone).

**Evidence:** QA INFO warnings — "63 tracking link(s) skipped," 10× "Image uses http://" for `ads.dotomi.com`/`login.dotomi.com`.

## 3. Rendering & Accessibility
- **13 content images missing `alt` text** (all `image.mail.cb2.com/lib/fe9213727564027a72/m/1/*.jpg`), plus the tracking pixels above. Screen readers and clients rendering with images-off will show no fallback text for any product imagery.
- Email relies on multiple custom `@font-face` fonts (Lineto Brown, GT Sectra, HNW05) loaded from `cb2.com`/`crateandbarrel.com`. Most major email clients (Outlook desktop, Gmail web/app) do not support `@font-face`; no fallback stack beyond `Helvetica, sans-serif` is visible on the `a` selector shown — confirm system-font fallbacks exist on all text-bearing selectors, not just links.
- Responsive/MSO handling otherwise looks standard: `x-apple-disable-message-reformatting`, MSO `OfficeDocumentSettings`/`PixelsPerInch` block, and mobile media queries at 418px/690px/768px breakpoints are present — no issues found here.

**Evidence:** QA — 13× "Image missing alt text" for `image.mail.cb2.com` assets.

## 4. Personalization & Merge Tokens
No merge tags, personalization placeholders, or dynamic-content tokens (e.g. `{{first_name}}`, `%%FIELD%%`) are present in the provided HTML source. No issues found — note the source is truncated, so this cannot be confirmed for the full document.

## 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)
- **`List-Unsubscribe` header not found** — may be a relay capture gap (AgentMail) rather than a true absence, but cannot be confirmed one-click unsubscribe is offered at the header level.
- **`List-Unsubscribe-Post` (RFC 8058) not found** — one-click unsubscribe via `POST` cannot be confirmed as supported.
- **`Authentication-Results` header not found** — SPF/DKIM pass/fail status is unknown from available data; cannot confirm domain authentication for `mail.cb2.com`.
- Footer-level unsubscribe link/physical address (CAN-SPAM body requirements) is not visible in the truncated HTML — cannot confirm or deny compliance from source provided.

**Evidence:** QA COMPLIANCE and DELIVERABILITY warnings (List-Unsubscribe, List-Unsubscribe-Post, Authentication-Results all not found).

## 6. Email-to-Site Continuity
Cannot be assessed: all outbound links in the source are tracking/click-redirect URLs that QA explicitly skipped (63 links), so no resolved landing-page URLs or UTM parameters are available for inspection in the provided data.

## 7. Recommendations
1. Confirm `Authentication-Results` (SPF/DKIM/DMARC) is actually present on the raw MTA-received headers, not just the relay-forwarded copy — if genuinely absent, this is a deliverability risk.
2. Add `List-Unsubscribe` and `List-Unsubscribe-Post` headers to enable one-click unsubscribe (RFC 8058) — required by Gmail/Yahoo bulk sender rules.
3. Add descriptive `alt` text to the 13 content images for accessibility and images-off rendering.
4. Migrate the 10 `pub1–pub10.php` dotomi pixels and `UCMController`/`cookieredir` calls to HTTPS to avoid mixed-content image blocking in modern clients.
5. Investigate whether all 10 near-identical dotomi pixel calls are intentional (possible tag-duplication bug) — resolve a sample of the 63 skipped tracking links to confirm destinations and UTM alignment with CB2 landing pages.
## Recent history

- [[2026-08-07-must-see-dining-chairs--felix-plinth-home-furniture-fap6e]] — 8/10 (2026-08-07)
- [[2026-08-07-bestsellers-for-your-nursery-starting-at-30--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-07)
- [[2026-08-07-nursery-faves-at-prices-you-ll-love--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-08-07)

