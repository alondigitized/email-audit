---
slug: 2026-08-22-long-weekend-essentials
type: email
date: 2026-08-22
persona: walker
score: "6/10"
sender: SKECHERS
subject: Long Weekend Essentials
tags: [email, score-6, sender/skechers]
---
# Long Weekend Essentials
**Score:** 6/10 · **Type:** Email audit · **2026-08-22**
## Full review
## Technical Audit

# Technical Audit — "Long Weekend Essentials" (SKECHERS)

## 1. Technical Summary
Email uses standard SFMC-style tracking/beacon pixels and responsive table-based HTML with vendor-prefixed mobile CSS; automated QA reports 0 hard failures but flags 13 warnings, all related to insecure (`http://`) asset sources and missing `alt` attributes.

## 2. Link & Tracking Issues
- **Malformed tracking pixel URL (bug):** `<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" width="1" height="1" />` has no `http://`/`https://` scheme. Most mail clients will not resolve this as an absolute URL, so this Return Path deliverability pixel likely never fires.
- **31 tracking/click-redirect links skipped by automated HTTP probe** (expected behavior for redirect domains — not a defect, just unverified reachability).
- Open-tracking pixel (`click.emails.skechers.com/open.aspx...`) and three `beacon.krxd.net` pixels (Kantar/Cint match + ad-impression beacons) are present and correctly use `https://`.
- Second-party tracking pixel `http://www.ink1000.com/p/up/.../o.gif` uses **unencrypted HTTP** (see §3) — flagged separately below.

## 3. Rendering & Accessibility
- **7 images use `http://` instead of `https://`**, including the primary Skechers logo (`image.emails.skechers.com/.../dde00662-....png`) and all footer/app-badge/social icons. Many corporate mail clients (Outlook, Gmail image proxying) will block or fail to render mixed-content HTTP images, risking a broken logo/footer for recipients.
- **2 images missing `alt` text:**
  - `o.gif` (ink1000.com tracking pixel — low impact, it's a 1×1 pixel)
  - `49468f73-4651-4af3-bea2-61d1ae5db486.png` (a content image in the `/m/11/` asset path — higher impact if this is a promotional/product graphic rather than decorative)
- Extensive vendor CSS resets (Outlook/Apple Mail/Gmail `.ExternalClass`, `x-apple-data-detectors`, `-ms-interpolation-mode`) and three responsive breakpoints (375px, 480px, 640px) are present and correctly structured — no issues found there.

## 4. Personalization & Merge Tokens
No merge/personalization tokens (e.g. `%%FirstName%%`, AMPscript `%%=...=%%`) are visible in the available HTML. Cannot confirm token resolution or fallback behavior — the source was truncated before the main body content where personalization would typically appear.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
Cannot assess — the provided HTML is truncated before the footer, where the unsubscribe link, physical mailing address, and CAN-SPAM boilerplate would normally live. No SMTP/DKIM/SPF/DMARC headers were provided in this payload, so authentication cannot be evaluated. **Recommend re-running this audit against the full HTML/header set** before signing off on compliance.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Campaign identifier `MKG_US_NONPUR_U_MULTI_ENGAGEDL14D_EN_08222026` is consistently applied across the Kantar ad-impression beacon and the ink1000 deliverability pixel (`mi_ecmp=`), indicating consistent campaign tagging at the tracking-pixel level.
- No product/CTA click-through URLs were visible in the truncated source (all 31 click links were redirect-wrapped and skipped by the prober), so **UTM parameter presence/consistency on actual CTA links to skechers.com could not be verified** — this is the highest-priority gap to close in a follow-up pass with full HTML.

## 7. Recommendations
1. Fix the scheme-less `pixel.app.returnpath.net` pixel URL — add `https://` so the deliverability beacon actually fires.
2. Migrate all `http://image.emails.skechers.com/...` and `http://www.ink1000.com/...` asset references to `https://` to avoid mixed-content blocking of the logo, footer icons, and app badges.
3. Add descriptive `alt` text to `49468f73-4651-4af3-bea2-61d1ae5db486.png` (confirm whether it's decorative or content-bearing first).
4. Re-run this audit against the untruncated HTML to evaluate unsubscribe/CAN-SPAM footer, merge-token resolution, and UTM tagging on actual product CTA links — these could not be assessed from the provided excerpt.
## Recent history

- [[2026-08-19-the-new-caf-slipper-is-here]] — 5/10 (2026-08-19)
- [[2026-08-19-intro-to-style-sneaker-trends]] — 4/10 (2026-08-19)
- [[2026-08-19-did-you-forget-something]] — 5/10 (2026-08-19)

