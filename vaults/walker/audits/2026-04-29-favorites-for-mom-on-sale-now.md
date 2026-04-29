---
slug: 2026-04-29-favorites-for-mom-on-sale-now
type: email
date: 2026-04-29
persona: walker
score: "3/10"
sender: SKECHERS
subject: Favorites for Mom on Sale NOW
tags: [email, score-3, sender/skechers]
---
# Favorites for Mom on Sale NOW
**Score:** 3/10 · **Type:** Email audit · **2026-04-29**
## Executive summary

- I'll be straight with you — I almost deleted this one before opening it. "Favorites for Mom"? I'm not shopping for my mom; she passed years ago. And when I did open it, the whole thing is pink, flowery, Mother's Day from top to bottom. There's a Men's section buried in the middle, sure, but I had to scroll past the women's hero, a big women's shoe grid, and hunt for it. The BOGO 50% deal is actually decent — that would normally get my attention — but everything about how this email is presented says *this is not for you, Walker.* I felt like I accidentally opened my daughter's email.

## What's working

- **BOGO 50% off a single pair** is a strong offer. If I stop and actually read the banner, that's real money saved — and as a Plus member, that matters to me.
- **Men's section does exist.** I appreciated that they included it. I spotted what looks like a nice navy/white walking shoe in the Men's grid — that's my kind of shoe.
- **Clear category navigation at the bottom** (Women, Men, Kids, Clothing, New Arrivals, Sale) is useful. I can tap through to find what I actually want.
- **Curbside pickup and "Find a Store" links** — I use curbside. Good to see it called out.

## What's weak

- **The entire email is a Mother's Day campaign, and I am not a mother.** The hero is pink, there are flowers, it screams "gift for women." I feel like I was mis-targeted.
- **Men's is the third section, after Women's AND Kids'.** By the time I scroll to Men's, I've already mentally checked out.
- **The preview text is complete garbage** — it's raw JSON/schema markup leaking into my inbox. On my phone, that's the first thing I see next to the subject line and it looks like a technical error. Honestly makes me wonder if the email is spam or broken.
- **No Slip-in callout anywhere visible.** My whole reason for being a loyal Skechers customer is the Slip-ins. I don't see them featured anywhere in the Men's section from what I can tell — just generic shoe thumbnails.
- **Apparel section.** I've never once bought Skechers clothes. A 25% off apparel block takes up prime real estate below the fold and means nothing to me.
- **Text is small in the product grids.** On my phone, those little price labels and product names are hard to read without pinching to zoom.

## Recommendations

- 1. **Don't send this version to male customers.** Send me a Men's-first email, or at least a gender-segmented version where the hero features a men's shoe and the offer is framed around me, not Mom.
- 2. **Lead with the BOGO deal more explicitly in the Men's section.** "Men's Shoes — Buy One, Get One 50% Off" as a headline above the men's grid would stop my scroll.
- 3. **Feature the Slip-ins by name.** I respond to "Slip-ins" the way some guys respond to a truck ad. That's my product.
- 4. **Fix the preview text immediately.** That JSON blob is embarrassing and actively hurts open rates. Even "Buy One, Get One 50% Off — Shop Men's Favorites" would be miles better.
- 5. **Trim the apparel block** or move it to the very bottom for male recipients. It's noise for me.
- | Priority | Issue | Fix |
- |----------|-------|-----|
- | **High** | All `image.emails.skechers.com` URLs use `http://` | Update image CDN or ESP template to serve via `https://` |
- | **High** | `pixel.app.returnpath.net` missing protocol prefix | Add `https://` — current URL is broken in all clients |
- | **High** | `ink1000.com` tracking pixel uses `http://` | Update to `https://` |
- | **Medium** | `49468f73-...png` missing `alt` attribute | Add descriptive alt text |
- | **Medium** | `maximum-scale=1` blocks pinch-zoom | Remove `maximum-scale=1` from viewport meta |
- | **Medium** | `-webkit-text-size-adjust: none` on `*` | Change to `100%` |
- | **Medium** | Unverified UTM params on 33 click URLs | Decode and audit at least a sample of redirect destinations |
- | **Low** | Charset meta missing `http-equiv` | Add `http-equiv="Content-Type"` |
- | **Low** | Krux DMP pixel fires on open | Confirm consent-signal passthrough meets CCPA requirements |
- | **Info** | QA summary counter shows 0 warnings despite 14 WARN entries | Bug in QA tooling — fix summary aggregation logic |

## Full review
---

## 1. Executive Summary

I'll be straight with you — I almost deleted this one before opening it. "Favorites for Mom"? I'm not shopping for my mom; she passed years ago. And when I did open it, the whole thing is pink, flowery, Mother's Day from top to bottom. There's a Men's section buried in the middle, sure, but I had to scroll past the women's hero, a big women's shoe grid, and hunt for it. The BOGO 50% deal is actually decent — that would normally get my attention — but everything about how this email is presented says *this is not for you, Walker.* I felt like I accidentally opened my daughter's email.

---

## 2. Business Impact Score

**3 / 10**

Wrong persona, wrong message, wrong moment. The Men's content is present but deprioritized so severely it might as well not be there for someone like me.

---

## 3. What's Working

- **BOGO 50% off a single pair** is a strong offer. If I stop and actually read the banner, that's real money saved — and as a Plus member, that matters to me.
- **Men's section does exist.** I appreciated that they included it. I spotted what looks like a nice navy/white walking shoe in the Men's grid — that's my kind of shoe.
- **Clear category navigation at the bottom** (Women, Men, Kids, Clothing, New Arrivals, Sale) is useful. I can tap through to find what I actually want.
- **Curbside pickup and "Find a Store" links** — I use curbside. Good to see it called out.

---

## 4. What's Weak

- **The entire email is a Mother's Day campaign, and I am not a mother.** The hero is pink, there are flowers, it screams "gift for women." I feel like I was mis-targeted.
- **Men's is the third section, after Women's AND Kids'.** By the time I scroll to Men's, I've already mentally checked out.
- **The preview text is complete garbage** — it's raw JSON/schema markup leaking into my inbox. On my phone, that's the first thing I see next to the subject line and it looks like a technical error. Honestly makes me wonder if the email is spam or broken.
- **No Slip-in callout anywhere visible.** My whole reason for being a loyal Skechers customer is the Slip-ins. I don't see them featured anywhere in the Men's section from what I can tell — just generic shoe thumbnails.
- **Apparel section.** I've never once bought Skechers clothes. A 25% off apparel block takes up prime real estate below the fold and means nothing to me.
- **Text is small in the product grids.** On my phone, those little price labels and product names are hard to read without pinching to zoom.

---

## 5. Recommendations

1. **Don't send this version to male customers.** Send me a Men's-first email, or at least a gender-segmented version where the hero features a men's shoe and the offer is framed around me, not Mom.
2. **Lead with the BOGO deal more explicitly in the Men's section.** "Men's Shoes — Buy One, Get One 50% Off" as a headline above the men's grid would stop my scroll.
3. **Feature the Slip-ins by name.** I respond to "Slip-ins" the way some guys respond to a truck ad. That's my product.
4. **Fix the preview text immediately.** That JSON blob is embarrassing and actively hurts open rates. Even "Buy One, Get One 50% Off — Shop Men's Favorites" would be miles better.
5. **Trim the apparel block** or move it to the very bottom for male recipients. It's noise for me.

---

## 6. Bottom Line

This email was not written for me, and I knew it from the subject line. A Mother's Day sale email landing in a 62-year-old man's inbox feels like a wrong number. The underlying offer is good — BOGO 50% off is real value — but I had to work to find the men's content and nothing made me feel like a known, loyal customer. I'd probably close it and wait for the next one.

---

## 7. Subject Line Analysis

- **Subject:** `Favorites for Mom on Sale NOW`
- **Length:** 30 characters
- **Scores (1-10):** Clarity `7`, Curiosity `3`, Personalization `1`, Urgency `5`, Specificity `4`
- **Strengths:**
  - Short and readable; no truncation on mobile
  - "NOW" creates mild urgency
- **Weaknesses:**
  - Completely wrong persona signal for male recipients — "for Mom" tells me to ignore it
  - No offer specificity (no mention of BOGO, %, or Men's)
- **Alt A:** `Walker, BOGO 50% Off — Men's Faves Are On Sale`
- **Alt B:** `Men's Sale Is Live: Buy One, Get One 50% Off`

---

## 8. Preview Text Analysis

- **Preview:** `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/cf08f473-a0fa-46dd-b25d-e95a9abb53fb.png" },{...`
- **Length:** ~200+ characters (truncated by inbox)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - *(none)*
- **Weaknesses:**
  - Raw JSON schema markup is leaking as preview text — looks like a broken or spammy email on my phone
  - Provides zero selling information and actively undermines trust before the email is even opened
- **Alt A:** `Buy One, Get One 50% Off — Men's, Women's & Kids' styles on sale now.`
- **Alt B:** `Mother's Day Sale is here. BOGO 50% off your favorite styles.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** "Favorites for Mom" tells me this isn't for me — I'm not shopping for a mother's gift. I recognize Skechers as my brand, so I might give it a second glance, but the subject plus that broken preview text in my inbox looks like a misdirected or possibly broken email. I'd most likely skip it on a phone scroll.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** If I did open it, I'd find the Men's section eventually and the BOGO deal is genuinely tempting — but the Men's shoes shown are small thumbnails, there's no Slip-in callout, and I'd have to work hard to feel like this offer applies to me. The apparel block and Kids' section are dead weight. I might tap "Men" in the bottom nav and see if there's something worth buying, but that's a long shot after feeling ignored by the hero.

---

## 11. Evidence

- **Overall purpose:** Mother's Day promotional email; BOGO 50% off sale across Women's, Men's, and Kids' categories
- **Hero / primary value proposition:** Large pink/floral banner — "Mother's Day Sale: Buy One, Get One 50% Off — Buy off of a single pair" with a Shop Now CTA. Clearly feminine-coded visually.
- **Membership / benefits section:** No Skechers Plus-specific callout visible anywhere in the render
- **Product discoverability:** Three category grids — Women's first (largest and most prominent), Men's second (smaller grid, one recognizable athletic shoe visible), Kids' third. Each has a "Shop Now" CTA.
- **Utility / secondary modules:** 25% Off Apparel Sale block; Shop Additional Styles text links (Women, Men, Kids, Clothing, New Arrivals, Sale); Get Texting promo; App download; Curbside Pickup; Afterpay/Klarna; Find a Store; Social icons; full legal footer
- **Bugs / friction / clarity issues:**
  - **Preview text is broken** — raw JSON/schema.org markup is visible as the preheader in the inbox view (visible in email metadata shown)
  - Product grid text (prices, names) appears small for mobile reading
  - No visible personalization or Plus member acknowledgment

---

## Technical Audit

## Technical Audit — Skechers "Favorites for Mom on Sale NOW"

**From:** `no-reply@emails.skechers.com` | **Date:** 2026-04-29

---

### 1. Technical Summary

The email has a systemic HTTP-over-HTTPS problem across all hosted images and one broken protocol-relative tracking pixel. Two images also lack alt text. The QA summary line ("100% pass rate, 0 issues") contradicts the 14 warnings above it — that counter appears to be a tooling bug and should not be treated as a clean bill of health.

---

### 2. Link & Tracking Issues

**Broken pixel URL — missing protocol prefix**

```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```

No `https://` prefix. Most email clients will treat this as a relative path, making the Return Path seed pixel silently broken. Deliverability scoring that depends on this beacon will be inaccurate.

**Third-party DMP beacons present**

Three `beacon.krxd.net` pixels fire on open — one for user-matching and one ad-impression pixel. These pass subscriber-identifying data (`partner_uid`, `sfmc_100007688`) to Krux/Salesforce Audience Studio. Confirm this is covered by the subscriber consent policy and privacy notice.

**33 click-redirect links unverified**

All outbound links route through `click.emails.skechers.com`. QA skipped HTTP probing on all 33. UTM parameter presence on destination URLs cannot be confirmed (see §6).

---

### 3. Rendering & Accessibility

**HTTP image sources — 12 images affected**

Every image hosted on `image.emails.skechers.com` uses `http://`, not `https://`. Gmail (since 2013), Apple Mail, and modern Outlook will either block or proxy these, resulting in broken images or security warnings:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png   (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png  (no alt text)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store badge)
... (9 additional images on the same domain)
```

Also affected: the ink1000.com tracking pixel:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```

**Missing alt text — 2 images**

- `o.gif` (`ink1000.com` tracking pixel) — alt="" acceptable for tracking pixels, but absent entirely
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no alt attribute; screen readers will announce the filename

**Charset meta tag missing `http-equiv`**

```html
<meta content="text/html; charset=utf-8" />
```
Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without `http-equiv`, some legacy clients (older Outlook, Lotus Notes) may not honor the charset declaration.

**Pinch-zoom disabled on mobile**

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
`maximum-scale=1` prevents users from zooming in, which is an accessibility barrier (WCAG 1.4.4). Remove this constraint.

**Text scaling suppressed**

```css
* { -webkit-text-size-adjust: none; }
```
Blanket `none` on `*` disables iOS automatic text scaling for all elements. Use `100%` instead to preserve legibility without breaking layout.

---

### 4. Personalization & Merge Tokens

No merge tokens (e.g., `%%FIRST_NAME%%`, `{{subscriber.first_name}}`) are present in the visible HTML. The preheader is fully static:

```
"BOGO 50% off or 20% off 1 pair - Give Her the Comfort She Deserves"
```

No unrendered or broken token syntax detected in the truncated source. Footer personalization (name, loyalty tier) cannot be confirmed from the truncated HTML.

---

### 5. Compliance

**Cannot confirm from truncated source:**
- Physical mailing address (CAN-SPAM §5(a)(5)) — typically in footer, not visible in truncation
- One-click unsubscribe link — typically in footer

**Flagged:**

The Krux impression pixel encodes a campaign identifier in the query string:
```
campaignid=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04292026_B
```
If subscribers have opted out of cross-site tracking, firing this pixel on email open may conflict with CCPA/CPRA obligations. Verify consent-signal passthrough from the ESP to the DMP.

**Authentication headers** not inspectable from HTML source alone — DKIM, SPF, and DMARC alignment should be verified against received headers from a live send. The sending domain `emails.skechers.com` should be aligned with the `From:` domain under DMARC policy.

---

### 6. Email-to-Site Continuity

All 33 links pass through `click.emails.skechers.com` click-tracking redirects. Because QA skipped probing these URLs, it is not possible to confirm whether UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are appended to destination URLs.

The campaign string embedded in pixels is `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04292026_B`. If UTM params are present on click URLs, they should match this campaign identifier for consistent attribution in GA4/analytics.

**Action required:** Manually spot-check 2–3 click URLs by decoding the redirect to confirm UTM params are present and consistent.

---

### 7. Recommendations

| Priority | Issue | Fix |
|----------|-------|-----|
| **High** | All `image.emails.skechers.com` URLs use `http://` | Update image CDN or ESP template to serve via `https://` |
| **High** | `pixel.app.returnpath.net` missing protocol prefix | Add `https://` — current URL is broken in all clients |
| **High** | `ink1000.com` tracking pixel uses `http://` | Update to `https://` |
| **Medium** | `49468f73-...png` missing `alt` attribute | Add descriptive alt text |
| **Medium** | `maximum-scale=1` blocks pinch-zoom | Remove `maximum-scale=1` from viewport meta |
| **Medium** | `-webkit-text-size-adjust: none` on `*` | Change to `100%` |
| **Medium** | Unverified UTM params on 33 click URLs | Decode and audit at least a sample of redirect destinations |
| **Low** | Charset meta missing `http-equiv` | Add `http-equiv="Content-Type"` |
| **Low** | Krux DMP pixel fires on open | Confirm consent-signal passthrough meets CCPA requirements |
| **Info** | QA summary counter shows 0 warnings despite 14 WARN entries | Bug in QA tooling — fix summary aggregation logic |
## Recent history

- [[2026-04-29-welcome-to-the-team]] — 3/10 (2026-04-29)
- [[2026-04-29-here-s-your-one-time-code]] — 6/10 (2026-04-29)
- [[2026-04-29-59-98-nike-worth-the-hype]] — 3/10 (2026-04-29)

