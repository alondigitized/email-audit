---
slug: 2026-04-11-welcome-to-skechers
type: email
date: 2026-04-11
persona: martha
score: "6/10"
sender: SKECHERS
subject: Welcome to Skechers!
tags: [email, score-6, sender/skechers]
---
# Welcome to Skechers!
**Score:** 6/10 · **Type:** Email audit · **2026-04-11**
## Executive summary

- Functional, but leaves conversion on the table. The offer is clear; everything else is forgettable.

## What's working

- **Offer visibility.** "Enjoy 20% OFF your first purchase" with the promo code is the dominant visual element — immediately scannable.
- **Category navigation tiles.** Street / Casual / Athletic / Work gives a fast-tap path for different buyer intents. Grid layout is clean.
- **Logical flow.** Offer → Browse by style → Membership pitch → Secondary nav → Utility links is a sensible funnel order.
- **Footer completeness.** App download, curbside pickup, Shop Now Pay Later, Find a Store — the utility block covers the key omnichannel touchpoints.
- **Skechers+ section exists.** Attempting to upsell membership in a welcome email is the right strategic move.

## What's weak

- **Hero image is generic.** The hero shows a person sitting against a plain background — no product hero, no lifestyle energy. It does not make you want to buy shoes.
- **CTA button says "SHOP NOW" — twice, before the fold.** Both the hero and the offer block use the same CTA label pointing to the same undifferentiated destination. No personalization signal, no category preference.
- **Product photography is tiny.** The four style-tile images are small and low-resolution at render size. On mobile they'd be even smaller. No lifestyle context, no product closeup.
- **Skechers+ pitch is weak visually.** The membership section has a teal background and three small icons — but the headline "Not a member? Sign up to get" trails off (benefits are icon-only, barely legible at this size). The "JOIN NOW" button is undersized relative to the section.
- **"SHOP ADDITIONAL STYLES" is a raw text nav list.** Women / Men / Kids / Clothing / New Arrivals / Sale renders as plain underlined text links — no visual hierarchy, no differentiation from footer boilerplate. Wastes prime real estate.
- **No social proof, no product recommendation.** Zero bestsellers, zero "most popular" items, no reviews. A first-time subscriber has no signal about what to actually buy.
- **Welcome moment is muted.** "Welcome to Skechers!" in a small header line above a coupon is not a brand moment. There's no warmth, no brand story, nothing that creates affinity.

## Recommendations

- 1. **Replace the hero image** with a strong product hero — a bestselling silhouette or a lifestyle image that leads with the shoes, not a neutral seated figure.
- 2. **Add a "Top Picks" or "Most Popular" product block** (3–4 tiles with name + price) between the style categories and the Skechers+ section. Give subscribers a reason to click *something specific*.
- 3. **Split the two "SHOP NOW" CTAs.** The hero CTA could be "Explore New Arrivals" and the offer CTA "Redeem 20% Off" to create distinct journeys.
- 4. **Redesign the Skechers+ block.** Spell out the benefits in readable text, not icon-only callouts. Make the JOIN NOW button the same weight as the primary offer button.
- 5. **Convert the "SHOP ADDITIONAL STYLES" links into visual category chips or icon tiles** to distinguish them from the footer and make them feel interactive.
- 6. **Add a brief welcome headline with personality** above the offer — one sentence that creates brand affinity before the discount ask.
- | Priority | Action |
- |---|---|
- | **P0** | Fix the doubled-domain merge variable. Identify the template field that resolved to `www.Skechers.com` (a domain) instead of a path, and correct the merge logic before next send. |
- | **P0** | Add `https://` scheme to the Return Path seed pixel `src` attribute. Currently fires as a broken relative URL. |
- | **P1** | Migrate all `image.emails.skechers.com` image `src` values from `http://` to `https://`. The CDN already serves assets over HTTPS (confirmed by `https://image.emails.skechers.com/...bcc16007-....jpg`); this is a template authoring error. |
- | **P1** | Add descriptive `alt` text to all content images, especially app store badges and social icons used as links. |
- | **P1** | Confirm SPF/DKIM pass on a production send. Pull `Authentication-Results` from a seed inbox to verify. |
- | **P2** | Narrow `text-size-adjust: none` from `*` to specific problem elements (e.g., `.footer`, narrow nav cells) to restore accessibility scaling. |
- | **P2** | Implement or remove the dark mode `@media` block. An empty placeholder with only white-override rules actively harms dark mode rendering. |
- | **P2** | Decode a sample `click.emails.skechers.com` destination URL and verify UTM parameters are being appended correctly for analytics attribution. |
- | **P3** | Review Krux/DMP pixel disclosure in the privacy policy and confirm CCPA opt-out propagates to SFMC suppression. |

## Full review
## 2. Business Impact Score: **6 / 10**

Functional, but leaves conversion on the table. The offer is clear; everything else is forgettable.

---

## 3. What's Working

- **Offer visibility.** "Enjoy 20% OFF your first purchase" with the promo code is the dominant visual element — immediately scannable.
- **Category navigation tiles.** Street / Casual / Athletic / Work gives a fast-tap path for different buyer intents. Grid layout is clean.
- **Logical flow.** Offer → Browse by style → Membership pitch → Secondary nav → Utility links is a sensible funnel order.
- **Footer completeness.** App download, curbside pickup, Shop Now Pay Later, Find a Store — the utility block covers the key omnichannel touchpoints.
- **Skechers+ section exists.** Attempting to upsell membership in a welcome email is the right strategic move.

---

## 4. What's Weak

- **Hero image is generic.** The hero shows a person sitting against a plain background — no product hero, no lifestyle energy. It does not make you want to buy shoes.
- **CTA button says "SHOP NOW" — twice, before the fold.** Both the hero and the offer block use the same CTA label pointing to the same undifferentiated destination. No personalization signal, no category preference.
- **Product photography is tiny.** The four style-tile images are small and low-resolution at render size. On mobile they'd be even smaller. No lifestyle context, no product closeup.
- **Skechers+ pitch is weak visually.** The membership section has a teal background and three small icons — but the headline "Not a member? Sign up to get" trails off (benefits are icon-only, barely legible at this size). The "JOIN NOW" button is undersized relative to the section.
- **"SHOP ADDITIONAL STYLES" is a raw text nav list.** Women / Men / Kids / Clothing / New Arrivals / Sale renders as plain underlined text links — no visual hierarchy, no differentiation from footer boilerplate. Wastes prime real estate.
- **No social proof, no product recommendation.** Zero bestsellers, zero "most popular" items, no reviews. A first-time subscriber has no signal about what to actually buy.
- **Welcome moment is muted.** "Welcome to Skechers!" in a small header line above a coupon is not a brand moment. There's no warmth, no brand story, nothing that creates affinity.

---

## 5. Recommendations

1. **Replace the hero image** with a strong product hero — a bestselling silhouette or a lifestyle image that leads with the shoes, not a neutral seated figure.
2. **Add a "Top Picks" or "Most Popular" product block** (3–4 tiles with name + price) between the style categories and the Skechers+ section. Give subscribers a reason to click *something specific*.
3. **Split the two "SHOP NOW" CTAs.** The hero CTA could be "Explore New Arrivals" and the offer CTA "Redeem 20% Off" to create distinct journeys.
4. **Redesign the Skechers+ block.** Spell out the benefits in readable text, not icon-only callouts. Make the JOIN NOW button the same weight as the primary offer button.
5. **Convert the "SHOP ADDITIONAL STYLES" links into visual category chips or icon tiles** to distinguish them from the footer and make them feel interactive.
6. **Add a brief welcome headline with personality** above the offer — one sentence that creates brand affinity before the discount ask.

---

## 6. Bottom Line

The email will convert some first-time buyers on the strength of the coupon alone, but it's doing nothing to build brand affinity or guide undecided subscribers toward a purchase. It reads like a template, not a welcome. Fix the hero, add a product recommendation block, and give Skechers+ a real pitch — that's a 7→9 score.

---

## 7. Evidence

**Overall purpose:** Welcome/onboarding email with a first-purchase discount incentive.

**Hero / primary value proposition:** Teal header bar with "Welcome to Skechers" text + a lifestyle photo (seated person, low energy). Below it: "Enjoy 20% OFF your first purchase" with promo code and SHOP NOW CTA. This is the strongest visual element in the email.

**Membership / benefits section:** Skechers+ block in teal, mid-email. Three icon-based benefit callouts (icons too small to read clearly), JOIN NOW button. Strategically well-placed, visually underpowered.

**Product discoverability / recommendation modules:** Four category tiles (Street, Casual, Athletic, Work) — small product images, category label, no price or product name. Below that, a plain-text link list: Women / Men / Kids / Clothing / New Arrivals / Sale. No individual product recommendations anywhere in the email.

**Utility / secondary modules:** App download badges (Apple + Google Play visible), Curbside Pickup, Shop Now Pay Later (logo bar), Find a Store — all in a compact footer block. Social follow icons (appears to include Facebook, YouTube, Pinterest, TikTok) in the footer.

**Bugs / friction / clarity issues:** The "Not a member? Sign up to get" Skechers+ headline appears to be cut off or the benefits rely entirely on small icons that are not legible at render size. No visible broken images or overlapping elements — the email renders cleanly but sparsely.

---

## Technical Audit

## Technical Audit — Skechers Welcome Email
**From:** no-reply@emails.skechers.com | **Subject:** Welcome to Skechers!

---

### 1. Technical Summary

The email has one confirmed broken experience (doubled-domain URL producing a dead link), a widespread HTTP-vs-HTTPS image mismatch across the Skechers image CDN, and unverifiable deliverability authentication. All other infrastructure (ESP click-wrapping, preheader suppression, MSO/Gmail hacks) is structurally sound.

---

### 2. Link & Tracking Issues

**CRITICAL — Doubled domain merge error (broken destination link)**
- URL: `http://www.skechers.com/www.Skechers.com`
- The path segment is a literal repetition of the domain, indicating a template merge variable resolved to `www.Skechers.com` instead of a path. This is a dead URL and will 404 for every recipient who clicks it.
- Evidence: QA `[FAIL]` — "Doubled-domain merge error in URL"

**Return Path seed pixel — missing protocol prefix**
- `<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1d...">` has no `http://` or `https://` scheme. Email clients will treat this as a relative URL; the pixel will not fire, breaking deliverability seed-list monitoring.

**27 click-redirect links — UTM passthrough unverifiable**
- All CTA links route through `click.emails.skechers.com/?qs=<base64>`. UTM parameters cannot be inspected in the source. See section 6.

**Tracking pixels — mixed vendor footprint**
- Krux/Salesforce DMP usermatch pixels (×2) and ad impression pixel (×1) present in hidden `<div>`. These are third-party data-share pixels; confirm they are disclosed in the privacy policy and consented to under applicable state privacy laws (CCPA, etc.).

---

### 3. Rendering & Accessibility

**HTTP image sources — likely blocked by major clients**

10 images are served over `http://` on `image.emails.skechers.com`. Gmail, Outlook.com, and Apple Mail proxy or block mixed-content HTTP images. Affected assets:

| Asset | src |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/.../dde00662-....png` |
| Content image | `http://image.emails.skechers.com/.../49468f73-....png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f-....png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0-....png` |
| Social: Instagram | `http://image.emails.skechers.com/.../b782e0aa-....png` |
| Social: Facebook | `http://image.emails.skechers.com/.../a5c4cae0-....png` |
| Social: YouTube | `http://image.emails.skechers.com/.../8c5738fc-....png` |
| AfterPay | `http://image.emails.skechers.com/.../07cb60b5-....png` |
| + 2 unnamed | `http://image.emails.skechers.com/.../fc08601a-....png`, `00100b23-....png` |

The ink1000 open-tracker is also HTTP: `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif`

**Missing alt text — 5 content images**
- `bcc16007-....jpg`, `49468f73-....png`, `00100b23-....png`, `fc08601a-....png`, and the ink1000 `o.gif` all have no `alt` attribute. Screen reader users and image-blocked clients receive no fallback text. Images serving as CTAs (app badges, social icons) need descriptive alt text at minimum.

**`text-size-adjust: none` on `*` selector**
- CSS rule: `* { text-size-adjust: none; -webkit-text-size-adjust: none; ... }` globally prevents user-initiated text scaling. This is an accessibility regression that conflicts with WCAG 1.4.4 (Resize Text). Scope should be limited to specific elements where reflow is a known problem, not applied universally.

**Dark mode CSS is a no-op placeholder**
- The `@media (prefers-color-scheme: dark)` block contains only two rules, both forcing white backgrounds:
  ```css
  .bg-white { background-color: #ffffff !important; }
  body { background-color: white !important; }
  ```
  The comment `/* Insert all your dark mode classes here */` confirms this was never implemented. Dark mode recipients will receive unintended color inversions on text and UI elements.

---

### 4. Personalization & Merge Tokens

**No unfired tokens visible in truncated source.** The campaign ID `TRG_US_EN_NONMEMWELCOME_1_03162026_A` is consistently populated across the Krux impression pixel and ink1000 tracker, confirming send-time variable resolution functioned. The subscriber ID (`mi_u=8108404282`, `partner_uid=122277199`) is resolved.

No issues found with merge token rendering in the visible HTML.

---

### 5. Compliance

**SPF/DKIM authentication — unverifiable**
- QA finding: `[WARN] Authentication-Results header not found`. The email was received via AgentMail relay; SPF/DKIM pass/fail status cannot be confirmed. Skechers sends from `emails.skechers.com` (Salesforce Marketing Cloud). Verify that the SPF record for `emails.skechers.com` includes SFMC sending IPs and that a DKIM signature with selector `s1024` (or equivalent) is present on live sends.

**Unsubscribe and physical address** — HTML is truncated; presence of a CAN-SPAM-compliant postal address and one-click unsubscribe mechanism cannot be confirmed from the provided source. These must be present in the footer.

**Third-party data pixels and CCPA**
- The Krux DMP usermatch pixel passes a hashed email (`sha25` variant) and subscriber ID to a third-party data broker. Confirm this is covered by the privacy policy linked from the email and that opt-out mechanisms are honored for California residents.

---

### 6. Email-to-Site Continuity

**Broken destination — one confirmed dead link**
- `http://www.skechers.com/www.Skechers.com` will land on a 404 or root redirect. The merge field that was supposed to resolve to a path (e.g., `/en-us/`) instead resolved to the full domain string again. All clicks on the affected CTA are lost.

**UTM parameters — unverifiable from source**
- All 27 CTAs route through `click.emails.skechers.com/?qs=<encrypted-blob>`. UTMs should be appended by the ESP before redirecting to `skechers.com`. Spot-check a decoded destination URL to confirm `utm_source`, `utm_medium`, `utm_campaign` (matching `TRG_US_EN_NONMEMWELCOME_1_03162026_A`), and `utm_content` are present.

**HTTP destination on broken link**
- The doubled-domain URL uses `http://` rather than `https://`. Any non-broken links using the same template variable should also be audited for protocol.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix the doubled-domain merge variable. Identify the template field that resolved to `www.Skechers.com` (a domain) instead of a path, and correct the merge logic before next send. |
| **P0** | Add `https://` scheme to the Return Path seed pixel `src` attribute. Currently fires as a broken relative URL. |
| **P1** | Migrate all `image.emails.skechers.com` image `src` values from `http://` to `https://`. The CDN already serves assets over HTTPS (confirmed by `https://image.emails.skechers.com/...bcc16007-....jpg`); this is a template authoring error. |
| **P1** | Add descriptive `alt` text to all content images, especially app store badges and social icons used as links. |
| **P1** | Confirm SPF/DKIM pass on a production send. Pull `Authentication-Results` from a seed inbox to verify. |
| **P2** | Narrow `text-size-adjust: none` from `*` to specific problem elements (e.g., `.footer`, narrow nav cells) to restore accessibility scaling. |
| **P2** | Implement or remove the dark mode `@media` block. An empty placeholder with only white-override rules actively harms dark mode rendering. |
| **P2** | Decode a sample `click.emails.skechers.com` destination URL and verify UTM parameters are being appended correctly for analytics attribution. |
| **P3** | Review Krux/DMP pixel disclosure in the privacy policy and confirm CCPA opt-out propagates to SFMC suppression. |
