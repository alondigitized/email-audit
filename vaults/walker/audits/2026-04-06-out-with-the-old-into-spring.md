---
slug: 2026-04-06-out-with-the-old-into-spring
type: email
date: 2026-04-06
persona: walker
score: "6/10"
sender: SKECHERS
subject: Out with the Old & Into Spring
tags: [email, score-6, sender/skechers]
---
# Out with the Old & Into Spring
**Score:** 6/10 · **Type:** Email audit · **2026-04-06**
## Executive summary

- A clean, seasonally themed promotional email anchored by a 20% off offer and organized by gender/age segments. The structure is logical and the creative is on-brand, but the email leans heavily on product imagery with minimal copy, leaving the value proposition underdeveloped. A second discount block (50% off) appears low in the email with no clear connection to the headline offer, which creates mild confusion about what the actual deal is.
- Functional but forgettable. The segmented browsing structure (Women / Men / Kids) is useful, but the email doesn't do enough to earn a click — there's no urgency, no featured product story, and the dual-discount structure dilutes focus.

## What's working

- **"Spring Cleaning" headline** is timely and immediately legible — the creative earns attention.
- **20% off** is prominently placed in the header banner with a clear CTA button.
- **Tri-segment layout (Women / Men / Kids)** is a smart navigation shortcut — it respects the reader's time and reduces decision fatigue.
- **Lifestyle imagery** is bright and seasonally appropriate; the models are active and aspirational without being over-styled.
- **Kids section** adds reach and likely broadens household conversion intent.

## What's weak

- **Dual discount confusion**: A "50% off" block appears near the bottom with its own "Shop Now" CTA. No explanation of whether this stacks with, replaces, or is separate from the 20% header offer. This is a trust and clarity problem.
- **Zero product specificity**: No named styles, no featured hero product, no "new arrivals" callout. The email is essentially a category navigator with a discount badge — there's no product story to anchor desire.
- **Thin copy throughout**: The only value messaging is the headline discount. No supporting copy sells the seasonal angle, explains the sale scope, or creates urgency (no end date visible).
- **"Shop Now" repetition**: Every section uses the same CTA label. No differentiation — e.g., "Shop Women's" — reduces scannability and makes the email feel templated.
- **Bottom navigation strip** (Women / Men / Clothing / New Arrivals / etc.) is small and low-contrast — it's useful but nearly invisible at this rendering size.

## Recommendations

- 1. **Resolve the dual discount**: Either consolidate to one offer or clearly label them (e.g., "Up to 50% off select styles + 20% off everything else"). Ambiguity kills conversion.
- 2. **Add one hero product per segment**: Even a single named style with a price creates desire and specificity. Right now it's just lifestyle photography with no product hook.
- 3. **Differentiate CTAs**: "Shop Women's," "Shop Men's," "Shop Kids'" — small change, meaningful improvement to scannability.
- 4. **Add urgency**: An expiry date on the 20% offer ("Ends Sunday") would measurably improve click rates on a promotional email.
- 5. **Increase copy weight in the hero**: One line beneath "Spring Cleaning" explaining what's on sale (all styles? new arrivals? clearance?) would remove ambiguity.
- | Priority | Issue | Fix |
- |---|---|---|
- | High | All `image.emails.skechers.com` image URLs use `http://` | Migrate to `https://` — this is a CDN config change, not a template fix |
- | High | ink1000.com pixel is `http://` | Switch to HTTPS or remove if redundant with SFMC open tracking |
- | High | DKIM/SPF not verifiable | Confirm authentication headers are present in delivered mail; validate DMARC alignment |
- | Medium | 4 images missing alt text | Add descriptive alt text to all non-tracking images |
- | Medium | `maximum-scale=1` in viewport | Change to `user-scalable=yes` or remove restriction (WCAG compliance) |
- | Medium | UTM params unverifiable | Resolve a sample `click.emails.skechers.com` redirect and confirm UTMs propagate to landing page |
- | Low | `-webkit-text-size-adjust: none` | Change to `100%` to avoid mobile readability issues |
- | Low | Krxd identity-sync pixels | Confirm CCPA/privacy policy disclosure covers DMP audience matching |

## Full review
## Skechers — "Out with the Old & Into Spring" Email Review

---

### 1. Executive Summary

A clean, seasonally themed promotional email anchored by a 20% off offer and organized by gender/age segments. The structure is logical and the creative is on-brand, but the email leans heavily on product imagery with minimal copy, leaving the value proposition underdeveloped. A second discount block (50% off) appears low in the email with no clear connection to the headline offer, which creates mild confusion about what the actual deal is.

---

### 2. Business Impact Score: **6 / 10**

Functional but forgettable. The segmented browsing structure (Women / Men / Kids) is useful, but the email doesn't do enough to earn a click — there's no urgency, no featured product story, and the dual-discount structure dilutes focus.

---

### 3. What's Working

- **"Spring Cleaning" headline** is timely and immediately legible — the creative earns attention.
- **20% off** is prominently placed in the header banner with a clear CTA button.
- **Tri-segment layout (Women / Men / Kids)** is a smart navigation shortcut — it respects the reader's time and reduces decision fatigue.
- **Lifestyle imagery** is bright and seasonally appropriate; the models are active and aspirational without being over-styled.
- **Kids section** adds reach and likely broadens household conversion intent.

---

### 4. What's Weak

- **Dual discount confusion**: A "50% off" block appears near the bottom with its own "Shop Now" CTA. No explanation of whether this stacks with, replaces, or is separate from the 20% header offer. This is a trust and clarity problem.
- **Zero product specificity**: No named styles, no featured hero product, no "new arrivals" callout. The email is essentially a category navigator with a discount badge — there's no product story to anchor desire.
- **Thin copy throughout**: The only value messaging is the headline discount. No supporting copy sells the seasonal angle, explains the sale scope, or creates urgency (no end date visible).
- **"Shop Now" repetition**: Every section uses the same CTA label. No differentiation — e.g., "Shop Women's" — reduces scannability and makes the email feel templated.
- **Bottom navigation strip** (Women / Men / Clothing / New Arrivals / etc.) is small and low-contrast — it's useful but nearly invisible at this rendering size.

---

### 5. Recommendations

1. **Resolve the dual discount**: Either consolidate to one offer or clearly label them (e.g., "Up to 50% off select styles + 20% off everything else"). Ambiguity kills conversion.
2. **Add one hero product per segment**: Even a single named style with a price creates desire and specificity. Right now it's just lifestyle photography with no product hook.
3. **Differentiate CTAs**: "Shop Women's," "Shop Men's," "Shop Kids'" — small change, meaningful improvement to scannability.
4. **Add urgency**: An expiry date on the 20% offer ("Ends Sunday") would measurably improve click rates on a promotional email.
5. **Increase copy weight in the hero**: One line beneath "Spring Cleaning" explaining what's on sale (all styles? new arrivals? clearance?) would remove ambiguity.

---

### 6. Bottom Line

This email does the basics correctly — seasonal creative, clear discount, segmented navigation — but it doesn't try hard enough to sell. The 50% offer buried at the bottom is actually the stronger deal and should be leading. As structured, this reads like a catalog link email wearing a promotional costume.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Seasonal promotional email driving site traffic across Women/Men/Kids categories with a 20% discount offer |
| **Hero / primary value prop** | "Spring Cleaning — 20% Off" banner with Shop Now CTA; lifestyle model imagery; offer is clear but lacks expiry or scope detail |
| **Membership / benefits** | None visible — no loyalty program, rewards, or member-exclusive framing present |
| **Product discoverability** | Three lifestyle image blocks (Women, Men, Kids) each with a Shop Now CTA; no individual products named or shown as standalone items |
| **Utility / secondary modules** | Bottom nav strip with category links (Women, Men, Clothing, New Arrivals, Fan Faves); small but functional |
| **Bugs / friction / clarity issues** | 50% off block near bottom with no contextual relationship to the 20% header offer — appears as a separate, unexplained deal; all CTAs labeled identically "Shop Now" regardless of section |

---

## Technical Audit

## Technical Audit — Skechers "Out with the Old & Into Spring"

**From:** no-reply@emails.skechers.com | **Date:** 2026-04-06

---

### 1. Technical Summary

The email renders with standard table-based layout and functional responsive breakpoints, but has a pervasive HTTP (non-HTTPS) image hosting problem affecting nearly all images on `image.emails.skechers.com`, plus several missing alt attributes and unverifiable authentication status.

---

### 2. Link & Tracking Issues

- **26 click-tracking links** route through `click.emails.skechers.com` with opaque encrypted `?qs=` payloads — redirect destinations are not inspectable without live resolution. UTM parameters cannot be confirmed from source alone.
- **Third-party pixel beacons** present from `beacon.krxd.net` (Salesforce DMP/Krux) with hashed `partner_uid` values (`9153f33f...`, `121173391`). These are identity-sync pixels for audience matching — confirm consent/privacy policy coverage.
- **Open pixel** at `click.emails.skechers.com/open.aspx?T63HN4TXR2ZU7BBDCHO5LMXEYE.100215` — standard SFMC open tracking, no issue.
- **ink1000.com pixel** (`http://www.ink1000.com/p/up/...`) is HTTP, not HTTPS — may be blocked by modern email clients (see Section 3).

---

### 3. Rendering & Accessibility

**HTTP image sources (high risk):** 14 images served over `http://image.emails.skechers.com/`. Gmail, Outlook 2019+, and Apple Mail proxy or block mixed-content HTTP assets, causing broken images for a significant portion of recipients.

Affected assets include:
- Skechers logo: `dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- App Store badge: `0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`
- Google Play badge: `9bb508d0-4b38-483d-8459-cf54186a0b9f.png`
- All social icons: Instagram, Twitter, Facebook, Pinterest, YouTube
- AfterPay logo: `07cb60b5-512b-494d-892d-67dc067289b7.png`
- ink1000.com tracking pixel: `o.gif`
- 3 additional unnamed images

**Missing alt text** on 4 images:
- `o.gif` (ink1000 pixel — acceptable for tracking pixel, but flag)
- `49468f73...png`
- `00100b23...png`
- `fc08601a...png`

These unnamed images without alt text will silently break in image-blocked environments.

**`-webkit-text-size-adjust: none`** is set globally — this suppresses iOS auto-sizing but can make text unreadably small on some mobile configurations. Prefer `100%` over `none`.

**`maximum-scale=1` in viewport meta** — prevents user zoom on mobile, which is an accessibility regression (WCAG 1.4.4).

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `%%FIRST_NAME%%`, `{{name}}`) visible in the truncated source. The preheader ("Fresh Styles + Savings - BOGO 50% off or 20% off 1 pair") appears static. Campaign ID `MKG_US_NONPUROPEN_U_NEW_NONPURCH_EN_04062026` is embedded in two pixel URLs, confirming segment targeting is set, but no subscriber-level personalization tokens are confirmed present.

---

### 5. Compliance

- **SPF/DKIM status unknown** — `Authentication-Results` header not found via AgentMail relay. Cannot confirm DKIM signature from `emails.skechers.com` or SPF alignment. If DMARC is enforced on `skechers.com`, a missing/failing DKIM would cause delivery failures at major ISPs.
- **CAN-SPAM:** Physical mailing address and unsubscribe mechanism are expected in footer — not visible in truncated source, but standard for SFMC deployments. Confirm presence in full source.
- **Krxd beacon pixels** perform cross-site identity matching (`partner_uid` hashed subscriber ID). Ensure this usage is disclosed in privacy policy and complies with applicable state privacy laws (CCPA/CPRA for CA recipients).

---

### 6. Email-to-Site Continuity

All 26 destination links are wrapped in `click.emails.skechers.com/?qs=` encrypted redirects — UTM parameters cannot be verified from HTML source. **Risk:** if UTM params are not appended by the redirect handler, all session attribution will fall back to direct traffic in analytics. This should be validated by resolving a sample link and inspecting the final URL.

Campaign identifier `MKG_US_NONPUROPEN_U_NEW_NONPURCH_EN_04062026` is consistent across both tracking pixels, indicating the campaign tag is set correctly at the send level.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | All `image.emails.skechers.com` image URLs use `http://` | Migrate to `https://` — this is a CDN config change, not a template fix |
| High | ink1000.com pixel is `http://` | Switch to HTTPS or remove if redundant with SFMC open tracking |
| High | DKIM/SPF not verifiable | Confirm authentication headers are present in delivered mail; validate DMARC alignment |
| Medium | 4 images missing alt text | Add descriptive alt text to all non-tracking images |
| Medium | `maximum-scale=1` in viewport | Change to `user-scalable=yes` or remove restriction (WCAG compliance) |
| Medium | UTM params unverifiable | Resolve a sample `click.emails.skechers.com` redirect and confirm UTMs propagate to landing page |
| Low | `-webkit-text-size-adjust: none` | Change to `100%` to avoid mobile readability issues |
| Low | Krxd identity-sync pixels | Confirm CCPA/privacy policy disclosure covers DMP audience matching |
## Recent history

- [[2026-04-06-your-cart-expires-soon]] — 5.5/10 (2026-04-06)
- [[2026-04-06-did-you-forget-something]] — 5/10 (2026-04-06)
- [[2026-04-06-anthony-edwards-2-pink-available-now]] — 6/10 (2026-04-06)

