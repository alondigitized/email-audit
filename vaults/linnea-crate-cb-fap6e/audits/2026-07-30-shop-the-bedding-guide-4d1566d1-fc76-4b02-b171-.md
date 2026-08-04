---
slug: 2026-07-30-shop-the-bedding-guide-4d1566d1-fc76-4b02-b171-
type: email
date: 2026-07-30
persona: linnea-crate-cb-fap6e
score: "6/10"
sender: Crate & Kids
subject: Shop The Bedding Guide
tags: [email, score-6, sender/crate-kids]
---
# Shop The Bedding Guide
**Score:** 6/10 · **Type:** Email audit · **2026-07-30**
## Full review
## Technical Audit

## Technical Audit: "Shop The Bedding Guide" (Crate & Kids)

### 1. Technical Summary
The email uses a standard responsive MSO/VML-hybrid template (`max-width:460px` breakpoint, Outlook conditional comments) with heavy third-party tracking. Automated QA passed at 57% with 0 errors and 3 warning categories, driven almost entirely by missing `alt` attributes and unverifiable header-level compliance data.

### 2. Link & Tracking Issues
- 91 tracking/click-redirect links were present but skipped by the automated HTTP probe (redirect domains not resolved) — destination URLs and final landing pages cannot be verified from this pass.
- Multiple tracking pixel/beacon endpoints fire in the same document:
  - `mi.crateandbarrel.com/p/rp/f3c0d22992a01946.png?mi_u=...` — repeated **6 times** with an identical `mi_u` hash, consistent with per-section (or per-render) open/engagement tracking rather than a single global beacon.
  - `sr.rlcdn.com/448796.gif?s=...&n=1` through `n=5` — LiveRamp/RLCDN identity-resolution pixels, sequentially numbered (`n=1`–`n=5`), fired 5 times in one send.
  - `mi.crateandbarrel.com/p/up/50c75a732e99b42a/o.gif?mi_u=...` — additional MI open-tracking pixel.
  - `dv.crateandbarrel.com/o/1a853515-...?mi_mid=019fb1d2-...&cp_tp=v` — conversion/dynamic-content pixel carrying a `mi_mid` message ID.
  - No `<img>` `alt` fallback on any of these pixels (expected for 1x1 beacons — not a defect on its own).

### 3. Rendering & Accessibility
- **36 content images and 13 tracking-pixel images (49 total `<img>` occurrences) are missing `alt` text**, per the QA scan — this fails WCAG 1.1.1 for screen-reader/image-blocked rendering and will show blank/broken-image placeholders with no fallback copy for the 36 content images.
- One product image filename is delivered from Scene7 with literal `%5F` (underscore) URL-encoding still present in the visible src (`CK%5FF26%5FBackToSChool%5F4x5%5FTertiary%5F440.gif`) — functions correctly as a URL but indicates the encoded string was not cleaned before use.
- A template placeholder comment was left in shipped code: `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` — cosmetic (doesn't render) but indicates the build wasn't fully cleaned of scaffolding/typo ("IMPUT") before send.
- Standard Outlook/MSO handling (`mso-table-lspace`, VML namespace, `[if gte mso 9]` font fixes) and iOS-safe meta tags (`x-apple-disable-message-reformatting`, `format-detection`) are correctly present.
- Mobile breakpoint at 460px is defined with expected class hooks (`.hide`, `.showmobile`, `.f10`–`.f20`), but full mobile rendering can't be confirmed from the truncated source.

### 4. Personalization & Merge Tokens
No merge tags (e.g., `{{first_name}}`, `%%FIELD%%`) are visible in the provided HTML excerpt. The only per-recipient dynamic value observed is the repeated `mi_u=dbe8da71...` hash used consistently across all MI/RLCDN tracking pixels, which functions as a recipient identifier rather than an on-page personalization token. Cannot fully confirm absence of merge fields since the source is truncated before the body content renders.

### 5. Compliance (CAN-SPAM, unsubscribe, authentication)
- `List-Unsubscribe` header not detected — cannot confirm RFC 2369 one-click support at the header level (QA notes this may be an artifact of the AgentMail relay not surfacing the header rather than the sender omitting it).
- `List-Unsubscribe-Post` header not detected — if genuinely absent, this send does not support RFC 8058 one-click unsubscribe, which Gmail/Yahoo increasingly require for bulk senders.
- `Authentication-Results` header not detected — SPF/DKIM/DMARC pass/fail status is unverifiable from this capture; likely a relay-visibility gap rather than a sender authentication failure, but cannot be confirmed either way.
- No visible unsubscribe link/footer in the truncated HTML provided — cannot verify CAN-SPAM footer compliance (physical address, unsubscribe mechanism) from the given excerpt.

### 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not verifiable — all 91 click-through links route through tracking/redirect domains that the QA probe explicitly skipped, so no UTM parameters or final landing-page URLs are available for this send. No destination-side data to compare against.

### 7. Recommendations
1. Add `alt` text to all 36 content `<img>` tags at minimum (tracking pixels can remain empty/`alt=""` by convention).
2. Remove the leftover `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` placeholder comment before future sends.
3. Confirm with the ESP/relay whether `List-Unsubscribe` / `List-Unsubscribe-Post` headers are actually being sent but stripped by the AgentMail relay, versus genuinely absent — request raw header capture at the MTA to distinguish relay visibility from a real compliance gap.
4. Same for `Authentication-Results` — validate SPF/DKIM/DMARC status directly against the sending domain (`mail.crateandbarrel.com`) rather than relying on relay-forwarded headers.
5. Re-run link/UTM validation against unwrapped redirect targets (resolve the 91 skipped tracking links) to confirm landing-page and UTM continuity before this data can be assessed.
6. Clean the URL-encoded filename artifact (`%5F`) in the Scene7 asset reference during asset export.
## Recent history

- [[2026-07-30-new-meet-the-beatrix-collection]] — 8/10 (2026-07-30)
- [[2026-07-30-up-to-60-off-the-summer-sale-only-for-a-limited-time]] — 8/10 (2026-07-30)
- [[2026-07-29-that-modern-cozy-vibe-you-love]] — 5/10 (2026-07-29)

