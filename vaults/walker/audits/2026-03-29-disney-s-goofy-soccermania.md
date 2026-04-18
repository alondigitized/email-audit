---
slug: 2026-03-29-disney-s-goofy-soccermania
type: email
date: 2026-03-23
persona: walker
score: "3/10"
sender: adidas
subject: "Disney's Goofy Soccermania"
tags: [email, score-3, sender/adidas]
---
# Disney's Goofy Soccermania
**Score:** 3/10 · **Type:** Email audit · **2026-03-23**
## Executive summary

- This email announces a Disney x adidas Originals kids' collection with genuine brand equity to spend, then squanders it. The IP partnership is barely visible, there are zero product tiles, and the single CTA is a generic promotional banner. A collector's-item collab is reduced to a one-paragraph announcement email.
- Compelling premise, near-zero execution. The email builds no commercial momentum — no product exposure, no second CTA, no reason to click beyond a discount code buried at the top.

## What's working

- **Promo banner is clear.** "Save 30% on eligible styles with code MARCH." + SHOP NOW is legible and high-contrast at the top.
- **Headline lands.** "DISNEY'S GOOFY SOCCERMANIA" is bold and well-sized — the collection name registers immediately.
- **Hero image has energy.** Outdoor soccer scene with a kid, a goal, and co-branded adidas Originals + Disney logos feels authentic to the target (parents of young kids).

## What's weak

- **No products shown.** Not a single item from the collection is visible. For a product launch email, this is a critical failure.
- **Goofy is nowhere.** The email is literally named after Goofy, but the character doesn't appear anywhere — not in the hero, not in a product shot, not in a graphic. The Disney license is invisible beyond a small logo in the photo.
- **One CTA for the entire email.** The only clickable path is the top banner SHOP NOW. There's no dedicated "Shop the Collection" button beneath the copy.
- **Hero image is awkwardly cropped.** The top of the image cuts off partway through the scene — we see legs, a ball, and a goal, but the framing feels like a mistake rather than a deliberate crop.
- **Body copy is generic.** "Chase their goals, both on and off the field" reads like filler. For a Disney collab, the copy should lean harder into character, fun, and IP-specific storytelling.
- **Extreme length (too short).** The email ends after one paragraph. There's no product grid, no "complete the look," no secondary module.

## Recommendations

- 1. **Add a product grid.** Show 3–6 items from the Soccermania range with images, names, and prices. This is a product launch email — the products must be visible.
- 2. **Put Goofy front and center.** Use character art or a lifestyle shot featuring Goofy prominently. The IP is the hook; use it.
- 3. **Add a dedicated collection CTA.** Below the body copy, add a full-width button: "Shop Goofy Soccermania." The discount banner CTA should be secondary.
- 4. **Fix the hero crop.** Either use a wider/taller image that properly frames the scene, or reframe to a cleaner composition.
- 5. **Sharpen the copy.** Lean into the Goofy personality — silly, optimistic, chaotic fun. "Chase their goals" is forgettable. "Goofy would wear this to training. That's the point." isn't.
- | Priority | Action |
- |---|---|
- | **P0** | Fix the broken `/g/` deep-link CTA — identify the unresolved asset/product ID in the Movable Ink or DV rendering config before resend |
- | **P0** | Add a plain-text MIME part — even a stripped-down version of the key copy and CTA URLs is sufficient to resolve the deliverability risk |
- | **P1** | Migrate the two HTTP arrow image URLs to HTTPS (`https://image.link.adidas.com/...`) |
- | **P1** | Add `alt=""` to the tracking pixel and a descriptive `alt` to the content image missing attribution |
- | **P2** | Verify SPF/DKIM pass on `us-news.comms.adidas.com` via raw header inspection before next send |
- | **P2** | Confirm UTM params are appended downstream of `click.comms.adidas.com` redirects via click-through test on a seed address |
- | **P3** | Add `http-equiv="Content-Type"` to the charset `<meta>` tag |
- | **P3** | Deduplicate the `@font-face` blocks to a single canonical `<style>` block |

## Full review
### 1. Executive Summary

This email announces a Disney x adidas Originals kids' collection with genuine brand equity to spend, then squanders it. The IP partnership is barely visible, there are zero product tiles, and the single CTA is a generic promotional banner. A collector's-item collab is reduced to a one-paragraph announcement email.

---

### 2. Business Impact Score: **3 / 10**

Compelling premise, near-zero execution. The email builds no commercial momentum — no product exposure, no second CTA, no reason to click beyond a discount code buried at the top.

---

### 3. What's Working

- **Promo banner is clear.** "Save 30% on eligible styles with code MARCH." + SHOP NOW is legible and high-contrast at the top.
- **Headline lands.** "DISNEY'S GOOFY SOCCERMANIA" is bold and well-sized — the collection name registers immediately.
- **Hero image has energy.** Outdoor soccer scene with a kid, a goal, and co-branded adidas Originals + Disney logos feels authentic to the target (parents of young kids).

---

### 4. What's Weak

- **No products shown.** Not a single item from the collection is visible. For a product launch email, this is a critical failure.
- **Goofy is nowhere.** The email is literally named after Goofy, but the character doesn't appear anywhere — not in the hero, not in a product shot, not in a graphic. The Disney license is invisible beyond a small logo in the photo.
- **One CTA for the entire email.** The only clickable path is the top banner SHOP NOW. There's no dedicated "Shop the Collection" button beneath the copy.
- **Hero image is awkwardly cropped.** The top of the image cuts off partway through the scene — we see legs, a ball, and a goal, but the framing feels like a mistake rather than a deliberate crop.
- **Body copy is generic.** "Chase their goals, both on and off the field" reads like filler. For a Disney collab, the copy should lean harder into character, fun, and IP-specific storytelling.
- **Extreme length (too short).** The email ends after one paragraph. There's no product grid, no "complete the look," no secondary module.

---

### 5. Recommendations

1. **Add a product grid.** Show 3–6 items from the Soccermania range with images, names, and prices. This is a product launch email — the products must be visible.
2. **Put Goofy front and center.** Use character art or a lifestyle shot featuring Goofy prominently. The IP is the hook; use it.
3. **Add a dedicated collection CTA.** Below the body copy, add a full-width button: "Shop Goofy Soccermania." The discount banner CTA should be secondary.
4. **Fix the hero crop.** Either use a wider/taller image that properly frames the scene, or reframe to a cleaner composition.
5. **Sharpen the copy.** Lean into the Goofy personality — silly, optimistic, chaotic fun. "Chase their goals" is forgettable. "Goofy would wear this to training. That's the point." isn't.

---

### 6. Bottom Line

This email has a Disney x adidas kids' collab to sell and almost nothing to show for it. No products, no character, no second CTA. It reads like a placeholder or a teaser that was accidentally sent as the launch. The 30% off code is the only commercial lever, and it's not tied to the collection at all. Needs a full rebuild with product modules and IP-forward creative.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Launch/announce the Goofy Soccermania kids' collection |
| **Hero / primary value prop** | Outdoor soccer photo with co-branding; reads as lifestyle but crops awkwardly, no Goofy character visible |
| **Promo banner** | "Save 30% with code MARCH" — clear but generic, not tied to the collab |
| **Membership / benefits** | Not present |
| **Product discovery modules** | Absent — no tiles, no items, no prices |
| **Secondary CTA / utility** | Not present; one SHOP NOW button in the banner is the only link in the body |
| **Footer** | Standard utility links (My Account, Privacy, Support, Unsubscribe, adidas.com/us) + legal copy — clean |
| **Visible bugs / friction** | Hero image crop is visually awkward (top of scene cut off); no other hard rendering bugs visible |

---

## Technical Audit

## Technical Audit — adidas "Disney's Goofy Soccermania"

**From:** adidas `<adidas@us-news.comms.adidas.com>`
**Date:** 2026-03-29

---

### 1. Technical Summary

The email has one broken CTA link caused by an unresolved internal deep-link type, a missing plain-text MIME part (hard CAN-SPAM/deliverability risk), and three HTTP (non-HTTPS) image sources that will be blocked by most modern email clients. Authentication posture cannot be confirmed due to missing `Authentication-Results` headers in the relay.

---

### 2. Link & Tracking Issues

**[FAIL] Broken deep link on at least one CTA**
The QA probe returned `unknown url type: '/g/693dafb9-0332-4901-a29d-08d47cc741d6'`, indicating the click-tracking layer received a path it couldn't resolve. The outer redirect URL is:
```
https://dv.adidas.com/o/693dafb9-0332-4901-a29d-08d47cc741d6
  ?cp_tp=v3.eJzj...
  &cp_cid=d63aafc3fa4b9098
  &mi_mid=019d1afe-cf00-7000-9962-8ce957af6ac5
```
The `/g/` path prefix suggests a product or content deep-link type that failed to resolve in the Movable Ink/DV rendering layer. Recipients clicking this CTA land on an error or redirect loop rather than the intended product page.

**[WARN] 18 click-redirect links unverifiable**
All 18 links route through `click.comms.adidas.com` — the QA probe skipped HTTP probing on these. Final landing page destinations (including UTM integrity) cannot be confirmed without click-through testing in a live or seed environment.

---

### 3. Rendering & Accessibility

**[WARN] Two images served over HTTP**
The "arrow" asset is referenced twice via non-HTTPS URL:
```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Gmail, Outlook.com, and iOS Mail block mixed-content images by default. This asset will not render for a significant portion of recipients.

**[WARN] Missing `alt` text on two images**
- `dv.adidas.com/o/693dafb9-0332-4901-a29d-08d47cc741d6` — appears to be a content image; no `alt` attribute
- `click.comms.adidas.com/CI0/...2Q1-rifl8gMUCoY9FtL_U0vxZ...` — likely a tracking pixel but should have `alt=""`

**[INFO] Duplicate `@font-face` declarations**
`AdihausDIN` and `AdineuePRO` are each declared twice across two separate `<style>` blocks with inconsistent fallback lists (first block includes `Calibri`/`Sans Serif`; second drops them). This is harmless but indicates template assembly inconsistency. Neither declaration loads a remote font file — both fall back to local system fonts only, which is acceptable for email.

**[INFO] `<meta charset>` missing `http-equiv`**
```html
<meta content="text/html; charset=UTF-8" />
```
Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Without `http-equiv`, some legacy clients (older Outlook, Lotus Notes) may not apply the charset declaration.

---

### 4. Personalization & Merge Tokens

No issues found. The `mi_mid` (message ID) and `cp_cid` (contact ID) parameters visible in the tracking URLs appear populated with non-placeholder values. No unresolved `{{token}}` or `%%token%%` patterns detected in the truncated source.

---

### 5. Compliance

**[FAIL] Plain-text MIME part is empty (0 characters)**
CAN-SPAM does not technically mandate a text part, but a zero-length text body causes Outlook's junk filter and SpamAssassin to assign a high spam score. More critically, Gmail and Apple Mail use the text part for smart features (calendar extraction, package tracking); its absence degrades inbox placement. This is a send-time defect that should be treated as a blocker.

**[WARN] SPF/DKIM/DMARC authentication status unconfirmed**
The `Authentication-Results` header was not captured via the AgentMail relay. Sending domain is `us-news.comms.adidas.com`; DKIM alignment requires a `d=us-news.comms.adidas.com` (or parent domain `adidas.com`) signature. Cannot confirm pass/fail without raw header access.

**No issues found** on: `ROBOTS: NOINDEX, NOFOLLOW` (present), `referrer: no-referrer` (present), unsubscribe link presence (not verifiable from truncated source but standard for adidas sends).

---

### 6. Email-to-Site Continuity

**[UNVERIFIABLE] UTM parameter presence on final destinations**
All 18 trackable CTAs pass through `click.comms.adidas.com` redirects. Because the probe skipped HTTP resolution on these domains, it's unknown whether UTM params (`utm_source`, `utm_medium`, `utm_campaign`) are appended to the final adidas.com landing pages. Without this, analytics attribution for this campaign will be incomplete.

**[FAIL] Broken CTA breaks site continuity entirely for that link**
The `/g/`-type deep link (see §2) means at least one CTA does not reach its intended product or collection page.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix the broken `/g/` deep-link CTA — identify the unresolved asset/product ID in the Movable Ink or DV rendering config before resend |
| **P0** | Add a plain-text MIME part — even a stripped-down version of the key copy and CTA URLs is sufficient to resolve the deliverability risk |
| **P1** | Migrate the two HTTP arrow image URLs to HTTPS (`https://image.link.adidas.com/...`) |
| **P1** | Add `alt=""` to the tracking pixel and a descriptive `alt` to the content image missing attribution |
| **P2** | Verify SPF/DKIM pass on `us-news.comms.adidas.com` via raw header inspection before next send |
| **P2** | Confirm UTM params are appended downstream of `click.comms.adidas.com` redirects via click-through test on a seed address |
| **P3** | Add `http-equiv="Content-Type"` to the charset `<meta>` tag |
| **P3** | Deduplicate the `@font-face` blocks to a single canonical `<style>` block |
## Recent history

- [[2026-03-22-take-your-first-step-into-comfort]] — 5/10 (2026-03-22)
- [[2026-03-20-newest-drop-this-is-only-the-start]] — 6/10 (2026-03-20)
- [[2026-03-20-more-skechers-plus-benefits-are-waiting]] — 5/10 (2026-03-20)

