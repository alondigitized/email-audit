---
slug: 2026-07-07-ready-to-ship-furniture-more-for-a-quick-new-look--felix-plinth-home-furniture-fap6e
type: email
date: 2026-07-07
persona: felix-plinth-home-furniture-fap6e
score: "7/10"
sender: Pottery Barn
subject: Ready-to-ship furniture & more for a quick new look
tags: [email, score-7, sender/pottery-barn]
---
# Ready-to-ship furniture & more for a quick new look
**Score:** 7/10 · **Type:** Email audit · **2026-07-07**
## Full review
## Technical Audit

## Technical Audit — Pottery Barn "Ready-to-ship furniture" Email

### 1. Technical Summary

Two CTAs return 403 errors (one is a high-value credit card apply link), and the HTML contains PHP `header()` function calls embedded inside a `<style>` block — a template assembly defect that injects syntactically invalid content into every recipient's email. Accessibility coverage is also critically low, with 40+ images missing alt text.

---

### 2. Link & Tracking Issues

**FAIL — Broken link (403): Credit card apply CTA**
```
https://clickcp.potterybarn.com/c/da01b407-b21c-4618-a71b-f83bef0dd682
  ?brandCode=POTTERYBARNCB&marketingChannelCode=APPLYANDBUY
  &external_id=PB_Email_MemberBanner&cm_ite=PB_header_nonmember
```
The `APPLYANDBUY` CTA — a primary conversion target in the header — returns HTTP 403. All clicks on this block dead-end.

**FAIL — Broken link (403): Cross-brand spacer asset**
```
http://edm.westelm.com/we/evergreen/spacer_0.gif
```
A West Elm asset domain appearing in a Pottery Barn send indicates stale template reuse. The URL also uses HTTP, compounding the issue (see §3).

**INFO — 22 click-tracking links unverified**
All links through `click.e.potterybarn.com` were skipped by the probe. Destination health of product CTAs is unconfirmed.

---

### 3. Rendering & Accessibility

**CRITICAL — PHP code embedded in `<style>` block**

The following server-side PHP appears verbatim inside a `<style>` tag:
```css
header('Content-Type: image/jpeg');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
```
This is not valid CSS. It was likely intended to accompany a dynamic image generation script and was accidentally merged into the email template. Email clients will either ignore it or surface parsing errors. This is a template assembly defect.

**WARN — 40+ images missing `alt` text**

Affected images span all major content zones: hero banners (`F26_Top_NewArrivals.jpg`), 18 product slices (`slices_01.jpg`–`slices_18.jpg`), footer slices, product thumbnails, and tracking pixels. Renders as a blank email for image-off clients and fails screen reader accessibility.

**WARN — 3 HTTP image sources (may be blocked)**
```
http://edm.westelm.com/we/evergreen/spacer_0.gif
http://edm.potterybarn.com/pb/thekey/CC_Banner/PB/Foot_NonMem_PB.jpg
http://edm.potterybarn.com/pb/2022/0311_Key_CC_Email_BrandBanner/slices_02.jpg
```
Modern email clients (Outlook 365, Gmail) block mixed-content HTTP image loads by default.

**WARN — Open-tracking pixel over HTTP**
```
http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true&sv_sveme=...
```
Open-rate data from this pixel will be suppressed or unreliable in HTTPS-enforcing clients.

**WARN — Empty `<title>` element**
`<title></title>` — omitted title harms screen reader navigation and is surfaced by some clients (e.g., Apple Mail tab label).

**WARN — `maximum-scale=1` in viewport meta**
Prevents user-initiated zoom on mobile, which is a WCAG 1.4.4 failure.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the truncated source. Recipient address (`lila-hearth-potterybarn-fap6e@etell.app`) is correctly injected into tracking pixel URLs, confirming the merge pipeline fired. The broken CC link includes `&external_id=PB_Email_MemberBanner&cm_ite=PB_header_nonmember`, indicating member-state branching is attempted — the 403 may be an auth/session issue on the clickcp endpoint rather than a merge failure.

---

### 5. Compliance

**WARN — `List-Unsubscribe` header absent**

Not captured by the AgentMail relay. If genuinely missing from the SMTP envelope, this violates CAN-SPAM requirements and Gmail/Yahoo bulk sender policy (enforced since Feb 2024).

**WARN — `List-Unsubscribe-Post` header absent (RFC 8058)**

One-click unsubscribe is required for bulk senders on Gmail and Yahoo. Absence of this header means Gmail will not surface the one-click unsubscribe UI, degrading deliverability reputation.

**WARN — `Authentication-Results` header not captured**

SPF/DKIM pass/fail status is unknown. Sender domain is `e.potterybarn.com` (ESP subdomain); authentication should be verifiable but was not surfaced through the relay.

**OK — `robots` meta**: `noindex, nofollow` present — correct.

---

### 6. Email-to-Site Continuity

All product links route through `click.e.potterybarn.com` click-tracking redirects; UTM parameter injection at the redirect layer cannot be confirmed without following the hops. No raw `potterybarn.com` destination URLs with UTM strings are visible in the source.

The CC apply link (`clickcp.potterybarn.com`) is fully broken (403), so that conversion path has zero continuity regardless of UTM state.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | PHP code in `<style>` block | Identify template merge step that injected `header()` calls; strip before render |
| P0 | CC apply link 403 | Debug `clickcp.potterybarn.com` endpoint — check auth token expiry or route misconfiguration |
| P1 | `List-Unsubscribe` / `List-Unsubscribe-Post` missing | Confirm headers at SMTP envelope level; add RFC 8058 `List-Unsubscribe-Post: List-Unsubscribe=One-Click` |
| P1 | 40+ images missing `alt` | Add descriptive `alt` to all content images; `alt=""` is acceptable for pure spacers |
| P1 | 3 HTTP image sources | Upgrade all `src` values to `https://`; retire or re-host the West Elm asset |
| P2 | West Elm spacer in PB template | Audit template library for cross-brand asset bleed; replace with `https://edm.potterybarn.com` hosted spacer |
| P2 | Open-tracking pixel over HTTP | Upgrade `svopn.potterybarn.com` pixel to HTTPS |
| P2 | SPF/DKIM authentication status | Verify passing authentication on `e.potterybarn.com` sending domain via MX Toolbox or ESP dashboard |
| P3 | `maximum-scale=1` in viewport | Remove or set `maximum-scale=5` to allow user zoom (WCAG 1.4.4) |
| P3 | Empty `<title>` | Add descriptive title, e.g. `<title>Pottery Barn — Ready-to-ship furniture</title>` |
## Recent history

- [[2026-07-07-inside-8-x-10-outdoor-rugs--felix-plinth-home-furniture-fap6e]] — 7/10 (2026-07-07)
- [[2026-07-07-clearance-ends-tonight--felix-plinth-home-furniture-fap6e]] — 8/10 (2026-07-07)
- [[2026-07-06-one-day-left-warehouse-sale--felix-plinth-home-furniture-fap6e]] — 7/10 (2026-07-06)

