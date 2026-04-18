---
slug: 2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-a-v2-make-walking-a-breeze-with-go-wal
type: email
date: 2026-04-01
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V2 Make Walking a Breeze with GO Walk"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V2 Make Walking a Breeze with GO Walk
**Score:** 6/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- Solid mechanics, mediocre focus. The offer will convert, but the email isn't building the GO Walk brand — it's just a multi-category sale blast with a walking headline.

## What's working

- **50% OFF banner is impossible to miss** — top-of-email placement, high contrast. This is the strongest revenue driver and it's front-loaded correctly.
- **Hero image is active and aspirational** — the lifestyle shot of someone in motion sells the walking narrative effectively.
- **Gender split (Women's / Men's) is clean** — separate modules with dedicated shop CTAs reduce friction and let shoppers self-select quickly.
- **"Prefer to Run?" crossover section** is smart merchandising — it captures intent spillover without burying the lede.

## What's weak

- **Subject/email misalignment** — subject promises GO Walk specifically; the email delivers a broad multi-category sale. Subscribers who clicked for walking content hit a diffuse catalog experience.
- **Hero headline "GET YOUR STEPS IN" is generic** — no product name, no differentiation, no reason to believe Skechers over a competitor.
- **Too many categories for one send** — Walking → Women's → Men's → Athletic → Casual is four pivots. Each dilutes the one before it.
- **CTAs are all generic "SHOP"** — no urgency language tied to the 50% offer, no product-specific labels. The discount banner doesn't carry into the module CTAs.
- **"Keep It Casual" section feels tacked on** — at this point in the email, the reader has already been asked to shop three different ways. The casual module reads as inventory-clearing, not intentional curation.

## Recommendations

- 1. **Discipline the scope.** If the send is about GO Walk, the Women's and Men's modules should show GO Walk SKUs, not generic category shots. Everything else should be a secondary upsell at most.
- 2. **Carry the 50% OFF message into every CTA.** Change generic "SHOP" buttons to "SHOP 50% OFF" or "GET 50% OFF." The offer disappears after the header.
- 3. **Give the hero a product claim.** "Get Your Steps In" + "The #1 walking shoe in America" or "Cushioned for all-day comfort" would add conviction. Vague aspirational language isn't differentiating.
- 4. **Cut or collapse the casual module.** Two gender splits + running is already a full email. The casual section adds length without adding purpose relative to the stated campaign theme.
- 5. **Test a single-gender version.** A multi-gender send to a segmented list would likely outperform this on relevance and click-through.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Subject `[Test]:` prefix | Remove before production send |
- | **P0** | 16 HTTP image URLs | Change `http://image.emails.skechers.com` → `https://image.emails.skechers.com` across the template |
- | **P0** | HTTP ink1000.com tracker | Update to `https://` or replace with an HTTPS-capable open tracker |
- | **P1** | SPF/DKIM unverifiable | Validate authentication via direct inbox receive; confirm DMARC alignment for `emails.skechers.com` |
- | **P1** | 4 images missing alt text | Add `alt=""` to decorative images; add descriptive alt to functional images |
- | **P1** | Hardcoded subscriber IDs in beacons | Confirm `mi_u=8091927189` and `partner_uid=102541952` are merge tokens, not test literals |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `-webkit-text-size-adjust: 100%` |
- | **P2** | UTM parameter verification | Manually spot-check 3–5 CTA destination URLs after redirect resolution |

## Full review
## 2. Business Impact Score: **6/10**

Solid mechanics, mediocre focus. The offer will convert, but the email isn't building the GO Walk brand — it's just a multi-category sale blast with a walking headline.

---

## 3. What's Working

- **50% OFF banner is impossible to miss** — top-of-email placement, high contrast. This is the strongest revenue driver and it's front-loaded correctly.
- **Hero image is active and aspirational** — the lifestyle shot of someone in motion sells the walking narrative effectively.
- **Gender split (Women's / Men's) is clean** — separate modules with dedicated shop CTAs reduce friction and let shoppers self-select quickly.
- **"Prefer to Run?" crossover section** is smart merchandising — it captures intent spillover without burying the lede.

---

## 4. What's Weak

- **Subject/email misalignment** — subject promises GO Walk specifically; the email delivers a broad multi-category sale. Subscribers who clicked for walking content hit a diffuse catalog experience.
- **Hero headline "GET YOUR STEPS IN" is generic** — no product name, no differentiation, no reason to believe Skechers over a competitor.
- **Too many categories for one send** — Walking → Women's → Men's → Athletic → Casual is four pivots. Each dilutes the one before it.
- **CTAs are all generic "SHOP"** — no urgency language tied to the 50% offer, no product-specific labels. The discount banner doesn't carry into the module CTAs.
- **"Keep It Casual" section feels tacked on** — at this point in the email, the reader has already been asked to shop three different ways. The casual module reads as inventory-clearing, not intentional curation.

---

## 5. Recommendations

1. **Discipline the scope.** If the send is about GO Walk, the Women's and Men's modules should show GO Walk SKUs, not generic category shots. Everything else should be a secondary upsell at most.
2. **Carry the 50% OFF message into every CTA.** Change generic "SHOP" buttons to "SHOP 50% OFF" or "GET 50% OFF." The offer disappears after the header.
3. **Give the hero a product claim.** "Get Your Steps In" + "The #1 walking shoe in America" or "Cushioned for all-day comfort" would add conviction. Vague aspirational language isn't differentiating.
4. **Cut or collapse the casual module.** Two gender splits + running is already a full email. The casual section adds length without adding purpose relative to the stated campaign theme.
5. **Test a single-gender version.** A multi-gender send to a segmented list would likely outperform this on relevance and click-through.

---

## 6. Bottom Line

The 50% off offer will carry this email past the finish line, but it's doing all the work. The GO Walk branding is headline-deep — below the fold, this is just a sale email. Tighter scope, persistent offer messaging, and a product-specific hero would meaningfully improve conversion and brand recall.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Multi-gender GO Walk walking shoe promotion, Spring 2026, anchored by a 50% discount |
| **Hero / primary value prop** | "GET YOUR STEPS IN" over lifestyle walking imagery; 50% OFF banner above it; strong visual but no product specificity |
| **Membership / benefits** | None visible — no loyalty, no adiClub-equivalent, no member exclusivity messaging |
| **Product discoverability** | Women's and Men's category modules with product imagery; "Prefer to Run? Shop More Athletic Styles" crossover section; "Keep It Casual" lifestyle section |
| **Utility / secondary modules** | Standard Skechers footer with navigation links and legal copy |
| **Bugs / friction / clarity issues** | No visible broken images or rendering errors. Email preview text in the subject line exposes a raw URL string (`https://view.emails.skechers.com/?vawpToken=...`) — this is visible to recipients in their inbox preview and looks unprofessional, though it doesn't affect the rendered body |

---

## Technical Audit

## Technical Audit — Skechers GO Walk (MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V2)

---

### 1. Technical Summary

This is a test-flagged send (`[Test]:` subject prefix) with 16 images served over HTTP rather than HTTPS, 4 images missing alt text, and SPF/DKIM authentication status unverifiable through the AgentMail relay. No broken links detected, but the HTTP image issue is systemic and production-blocking.

---

### 2. Link & Tracking Issues

**No broken links detected.** All 26 click-tracked links resolve through `click.emails.skechers.com` redirects (QA probe skipped per policy).

**Third-party tracking beacons present:**
- `beacon.krxd.net/1x1_usermatch.gif` — Krux/Salesforce DMP user-match pixel (×2)
- `beacon.krxd.net/1x1_ad_impression.gif` — ad impression pixel
- `pixel.app.returnpath.net/pixel.gif` — Return Path inbox monitoring
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — third-party open tracker (HTTP, see §3)

**Potentially hardcoded subscriber IDs in test send:**
- `ink1000.com` pixel: `mi_u=8091927189` — verify this is a merge token (`%%subscriber_id%%`) and not a literal value
- Krux `subid` beacon: `partner_uid=102541952` — same concern; confirm this resolves dynamically at send time

---

### 3. Rendering & Accessibility

**HTTP images (16 warnings) — all from `image.emails.skechers.com`:**

Gmail, Apple Mail, and Outlook 2016+ block mixed-content images by default. The following assets are all served via `http://` and will break rendering in security-enforced clients:

| Image | Asset |
|---|---|
| Skechers logo | `dde00662-169f-447d-b0e2-fc65f6c2290c.png` |
| Footer image | `49468f73-4651-4af3-bea2-61d1ae5db486.png` |
| App Store badge | `0ec56c9f-eec2-471a-898d-0ca1cea7e115.png` |
| Google Play badge | `9bb508d0-4b38-483d-8459-cf54186a0b9f.png` |
| (unnamed) | `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` |
| AfterPay logo | `07cb60b5-512b-494d-892d-67dc067289b7.png` |
| (unnamed) | `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` |
| Social icons | Instagram, Twitter, Facebook, Pinterest, YouTube |

Root: all `http://image.emails.skechers.com/lib/fe3115707564047a731c78/...` — the subdomain supports HTTPS; this is a template configuration issue.

**ink1000.com open tracker also uses HTTP:**
`http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — this pixel will be blocked in the same clients.

**Missing alt text (4 images):**
- `o.gif` (ink1000.com tracker)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Decorative images should use `alt=""`. Functional images (logos, badges) need descriptive alt text for screen reader and image-off rendering.

**CSS note:** `* { -webkit-text-size-adjust: none; }` is applied globally. The value `none` prevents iOS Mail from scaling text at all — `100%` is the correct value to prevent unwanted auto-scaling while preserving accessibility.

---

### 4. Personalization & Merge Tokens

No exposed/unresolved merge tokens visible in the truncated HTML. Campaign ID (`MKG_US_NA_U_MULTI_GENDER_EN_04022026_A`) is correctly populated in the Krux impression pixel. As noted above, `mi_u` and Krux `partner_uid` values warrant confirmation that they are dynamic at send time.

---

### 5. Compliance

**Authentication — WARN:** SPF/DKIM results are not available via the AgentMail relay. Authentication status for `emails.skechers.com` must be confirmed against a direct inbox receive (Gmail > Show Original) before production send.

**Subject line:** `[Test]:` prefix must be removed. Sending with this prefix to a live list is a CAN-SPAM cosmetic violation (misleading subject) and will trigger spam filters.

**Unsubscribe / physical address:** Not visible in the truncated HTML. Standard Skechers footers include both — verify the template footer block is present and the unsubscribe URL is not pointing to a test/sandbox endpoint.

---

### 6. Email-to-Site Continuity

UTM parameters on the 26 click-tracked URLs could not be verified (redirects were skipped by QA probe). Before production send, spot-check destination URLs for:
- `utm_source`, `utm_medium`, `utm_campaign` on all CTA links
- `utm_campaign` value should match `MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V2`, not the variant A without `_V2`

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Subject `[Test]:` prefix | Remove before production send |
| **P0** | 16 HTTP image URLs | Change `http://image.emails.skechers.com` → `https://image.emails.skechers.com` across the template |
| **P0** | HTTP ink1000.com tracker | Update to `https://` or replace with an HTTPS-capable open tracker |
| **P1** | SPF/DKIM unverifiable | Validate authentication via direct inbox receive; confirm DMARC alignment for `emails.skechers.com` |
| **P1** | 4 images missing alt text | Add `alt=""` to decorative images; add descriptive alt to functional images |
| **P1** | Hardcoded subscriber IDs in beacons | Confirm `mi_u=8091927189` and `partner_uid=102541952` are merge tokens, not test literals |
| **P2** | `-webkit-text-size-adjust: none` | Change to `-webkit-text-size-adjust: 100%` |
| **P2** | UTM parameter verification | Manually spot-check 3–5 CTA destination URLs after redirect resolution |
## Recent history

- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-a-v2make-walking-a-breeze-this-nationa]] — 5/10 (2026-04-01)
- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-amake-walking-a-breeze-this-national-w]] — 5/10 (2026-04-01)
- [[2026-04-01-just-restocked-real-madrid-bring-back-jerseys-0102019d49964fe3-7b88df2]] — 5/10 (2026-04-01)

