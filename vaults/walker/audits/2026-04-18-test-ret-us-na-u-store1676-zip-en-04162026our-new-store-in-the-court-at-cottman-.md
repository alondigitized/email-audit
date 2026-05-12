---
slug: 2026-04-18-test-ret-us-na-u-store1676-zip-en-04162026our-new-store-in-the-court-at-cottman-
type: email
date: 2026-04-15
persona: walker
score: "5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026Our New Store In The Court at Cottman Is Opening Tomorrow!"
tags: [email, score-5, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026Our New Store In The Court at Cottman Is Opening Tomorrow!
**Score:** 5/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- Strong offer buried under operational embarrassments. Would perform better if the test artifacts were stripped and the creative leaned harder into grand-opening energy.

## What's working

- **Clear primary CTA**: "Opening Tomorrow" hero with address and "Get Directions" button is immediately actionable.
- **Compelling offer**: Buy 2, Get 3rd Pair Free (04/17–04/19) + Free Tote Bag creates genuine urgency and a layered incentive.
- **Tote bag visual**: The bag photo adds tactile appeal and differentiates the in-store visit from online shopping.
- **Category grid (Women/Men/Girls/Boys)**: Provides visual depth and cross-sells product lines without overwhelming.

## What's weak

- **Subject line is broken**: The live subject contains `[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026` prepended to the real subject. This went to real recipients looking like an internal QA artifact.
- **Preview text is raw JSON**: The preheader shows `[{ "@context": "http://schema.org/", "@type": "Organization", "logo":...` — structured data leaked into the visible preview pane. This is a significant professionalism failure visible before the email is even opened.
- **No personalization visible**: No recipient name, no reference to proximity to the store, nothing that makes a local event feel targeted.
- **Offer fine print is tiny**: The "Offer valid only at Skechers The Court at Cottman Store" restriction is present but visually negligible — legal exposure and customer confusion risk.
- **Generic category section feels copy-pasted**: Women/Men/Girls/Boys shop modules are the same boilerplate used in promotional blasts; they dilute the grand-opening narrative.
- **No social proof or event excitement**: No "first 100 customers get X," no opening-day event details, no local energy — this reads more like a standard promo than a grand opening.

## Recommendations

- 1. **Fix the QA pipeline immediately** — subject line and preview text issues are production failures. Strip `[Test]:` prefixes and validate preheader text before send.
- 2. **Replace JSON preheader** with copy like: *"Be one of the first to shop our brand-new Philadelphia store — plus a free tote, no purchase needed."*
- 3. **Add a count-down or event hook** — grand openings are time-limited events; lean into scarcity: "Doors open at 10AM tomorrow."
- 4. **Add one personalization token** — even city/zip is enough to make a local email feel relevant.
- 5. **Tighten the category grid** or remove it — a grand opening email should close on the event CTA, not funnel into generic e-commerce browsing.
- 6. **Make the tote bag offer the visual hero** — it's actually more interesting than the shoe photography used in the banner, and the "no purchase necessary" hook is strong.
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | Subject line has `[Test]:` prefix and raw campaign ID concatenated in | Remove test prefix; fix template variable spacing before production |
- | **P0** | 12 images served over HTTP | Update CDN origin URLs to HTTPS on `image.emails.skechers.com` |
- | **P1** | Ink1000 pixel uses HTTP | Update to `https://www.ink1000.com/...` or remove if redundant |
- | **P1** | Return Path pixel missing URL scheme | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif` |
- | **P1** | SPF/DKIM not verified | Obtain full received headers from a seed inbox send and confirm alignment |
- | **P2** | `49468f73...png` missing alt text | Add descriptive `alt` attribute |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` for accessibility |
- | **P3** | UTM passthrough unconfirmed | Trace 2–3 CTA redirect chains to verify `utm_campaign/source/medium` on landing URLs |
- | **P3** | Duplicate media query blocks | Consolidate into single `<style>` block |

## Full review
## 2. Business Impact Score: **5/10**

Strong offer buried under operational embarrassments. Would perform better if the test artifacts were stripped and the creative leaned harder into grand-opening energy.

---

## 3. What's Working

- **Clear primary CTA**: "Opening Tomorrow" hero with address and "Get Directions" button is immediately actionable.
- **Compelling offer**: Buy 2, Get 3rd Pair Free (04/17–04/19) + Free Tote Bag creates genuine urgency and a layered incentive.
- **Tote bag visual**: The bag photo adds tactile appeal and differentiates the in-store visit from online shopping.
- **Category grid (Women/Men/Girls/Boys)**: Provides visual depth and cross-sells product lines without overwhelming.

---

## 4. What's Weak

- **Subject line is broken**: The live subject contains `[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026` prepended to the real subject. This went to real recipients looking like an internal QA artifact.
- **Preview text is raw JSON**: The preheader shows `[{ "@context": "http://schema.org/", "@type": "Organization", "logo":...` — structured data leaked into the visible preview pane. This is a significant professionalism failure visible before the email is even opened.
- **No personalization visible**: No recipient name, no reference to proximity to the store, nothing that makes a local event feel targeted.
- **Offer fine print is tiny**: The "Offer valid only at Skechers The Court at Cottman Store" restriction is present but visually negligible — legal exposure and customer confusion risk.
- **Generic category section feels copy-pasted**: Women/Men/Girls/Boys shop modules are the same boilerplate used in promotional blasts; they dilute the grand-opening narrative.
- **No social proof or event excitement**: No "first 100 customers get X," no opening-day event details, no local energy — this reads more like a standard promo than a grand opening.

---

## 5. Recommendations

1. **Fix the QA pipeline immediately** — subject line and preview text issues are production failures. Strip `[Test]:` prefixes and validate preheader text before send.
2. **Replace JSON preheader** with copy like: *"Be one of the first to shop our brand-new Philadelphia store — plus a free tote, no purchase needed."*
3. **Add a count-down or event hook** — grand openings are time-limited events; lean into scarcity: "Doors open at 10AM tomorrow."
4. **Add one personalization token** — even city/zip is enough to make a local email feel relevant.
5. **Tighten the category grid** or remove it — a grand opening email should close on the event CTA, not funnel into generic e-commerce browsing.
6. **Make the tote bag offer the visual hero** — it's actually more interesting than the shoe photography used in the banner, and the "no purchase necessary" hook is strong.

---

## 6. Bottom Line

The offer is genuinely good and the core information is there. But the broken subject line and JSON preheader are the kind of production errors that erode brand trust and signal poor QA discipline. Fix those first. Then tighten the creative to feel like a local event, not a national blast with a store address dropped in.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026Our New Store In The Court at Cottman Is Opening Tomorrow!`
- **Length:** 97 characters (real consumer-facing portion: ~58 characters)
- **Scores (1-10):** Clarity `3`, Curiosity `4`, Personalization `4`, Urgency `6`, Specificity `7`
- **Strengths:**
  - "Opening Tomorrow" creates genuine time-bound urgency
  - Location name (The Court at Cottman) adds specificity for local recipients
- **Weaknesses:**
  - Internal test prefix `[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026` renders the subject unreadable in most inboxes; completely destroys first impression
  - No offer teaser in subject — the Buy 2 Get 3rd Free hook is buried and could have driven significantly higher open rates
- **Alt A:** `Our new Philadelphia store opens tomorrow — Buy 2, Get the 3rd Free`
- **Alt B:** `Opening tomorrow: Skechers at The Court at Cottman + a free tote bag`

---

## 8. Evidence

| Module | What's Visible |
|---|---|
| **Overall purpose** | Grand opening announcement for a specific Skechers retail location |
| **Hero / primary value prop** | "Opening Tomorrow" at 2201 Cottman Ave, Suite 130, Philadelphia PA 19152 with "Get Directions" CTA |
| **Offer module** | Buy 2 Get 3rd Pair Free (04/17–04/19) with date range clearly shown; secondary Free Tote Bag offer visible with tote bag image |
| **Category browse** | Four category tiles: Women, Men, Girls, Boys — each with product photography and "Shop Now" CTA |
| **Utility / secondary** | "Shop Additional Styles" text links (Women, Men, Kids, Clothing, New Arrivals, Sale); SMS opt-in ("Let's Get Texting"), Curbside Pickup, Afterpay/Klarna financing badges, Find a Store, social icons (Instagram, Facebook, Twitter) |
| **Bugs / friction** | Subject line contains raw QA/test metadata; preview text renders raw JSON schema markup visible in inbox; offer fine print is very small and may be missed by recipients |

---

## Technical Audit

## Technical Audit — Skechers Store Opening Email

**From:** SKECHERS STORES `<no-reply@emails.skechers.com>`
**Subject:** `[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026Our New Store In The Court at Cottman Is Opening Tomorrow!`

---

### 1. Technical Summary

The email has a significant mixed-content problem: all images sourced from `image.emails.skechers.com` use HTTP, which modern email clients and security proxies will block. A secondary tracking pixel also uses HTTP. No SPF/DKIM verification was available via the relay.

---

### 2. Link & Tracking Issues

**26 click-wrap links** route through `click.emails.skechers.com` — standard SFMC redirect, not individually probeable, but domain is expected.

**Three tracking pixels present:**

| Pixel | Domain | Issue |
|---|---|---|
| Open beacon | `click.emails.skechers.com/open.aspx` | HTTPS — OK |
| Krux/Salesforce DMP usermatch | `beacon.krxd.net` | HTTPS — OK |
| Ink1000 pixel | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` | **HTTP — blocked by most clients** |
| Return Path seed | `pixel.app.returnpath.net/pixel.gif` | Missing scheme (relative URL) — will break |

The Return Path pixel at `pixel.app.returnpath.net/pixel.gif` has **no scheme** — it will resolve as a relative path and 404. If inbox placement seeding depends on this firing, the data will be silently lost.

---

### 3. Rendering & Accessibility

**Mixed content (HTTP images) — 12 affected assets:**

All production images are served over HTTP from `image.emails.skechers.com`. Gmail (since 2013), Outlook.com, and Apple Mail proxy or block non-HTTPS images. Affected assets include the Skechers logo, store imagery, App Store/Google Play badges, social icons, and feature icons (Curbside Pickup, AfterPay, Find A Store).

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  ← logo
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png  ← missing alt
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  ← App Store
... (9 additional assets)
```

**Missing alt text — 2 confirmed:**
- `o.gif` (Ink1000 pixel) — low severity for a tracking pixel, but technically flagged
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content image with no alt; if this is a hero or product image, images-off rendering will be blank with no fallback text

**CSS: duplicate media query blocks** — `max-width: 375px` and `max-width: 640px` blocks are defined twice (once in the main `<style>` block, once in a secondary `<style>` tag for `max-width: 480px`). Redundant rules, no functional breakage, but adds parse weight.

**`-webkit-text-size-adjust: none`** — set globally on `*`. This prevents iOS from scaling up small text even when the user has accessibility font size enabled. Should be `100%`, not `none`.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the truncated HTML (no `%%var%%`, `{{field}}`, or `[FIRSTNAME]` literals left exposed). Campaign ID `RET_US_NA_U_STORE1676_ZIP_EN_04162026` is present and consistent across the Krux impression pixel and Ink1000 pixel — correct.

**Subject line issue:** `[Test]:` prefix is present in the live send subject — `[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026Our New Store...`. The campaign ID is concatenated directly into the subject with no space separator before "Our New Store", indicating a template formatting bug:

```
[Test]: {CAMPAIGN_ID}{SUBJECT_LINE}
```

Should be `[Test]: Our New Store...` or the ID removed entirely before production send.

---

### 5. Compliance

**CAN-SPAM:** Cannot fully verify from truncated HTML — physical mailing address and unsubscribe link presence not confirmed in the visible source. Standard Skechers/SFMC footers typically include these; flagged for manual verification of the footer block.

**Authentication:**
- SPF/DKIM status unknown — `Authentication-Results` header not captured via AgentMail relay. Sender domain is `emails.skechers.com`; DKIM alignment should be verifiable against SFMC's signing domain. Needs header-level inspection on a live received copy.
- No BIMI record evidence present (no `VMC` or `default._bimi` reference), though not required.

---

### 6. Email-to-Site Continuity

26 tracked links pass through `click.emails.skechers.com` — UTM parameter passthrough cannot be confirmed without probing the redirect chain. The campaign code `RET_US_NA_U_STORE1676_ZIP_EN_04162026` is present in pixel calls but it is not confirmed whether `utm_campaign` is appended to destination URLs. This should be spot-checked on 2–3 CTAs by following the redirect chain manually.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | Subject line has `[Test]:` prefix and raw campaign ID concatenated in | Remove test prefix; fix template variable spacing before production |
| **P0** | 12 images served over HTTP | Update CDN origin URLs to HTTPS on `image.emails.skechers.com` |
| **P1** | Ink1000 pixel uses HTTP | Update to `https://www.ink1000.com/...` or remove if redundant |
| **P1** | Return Path pixel missing URL scheme | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif` |
| **P1** | SPF/DKIM not verified | Obtain full received headers from a seed inbox send and confirm alignment |
| **P2** | `49468f73...png` missing alt text | Add descriptive `alt` attribute |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` for accessibility |
| **P3** | UTM passthrough unconfirmed | Trace 2–3 CTA redirect chains to verify `utm_campaign/source/medium` on landing URLs |
| **P3** | Duplicate media query blocks | Consolidate into single `<style>` block |
