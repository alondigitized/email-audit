---
slug: 2026-04-08-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04092026the-right-pair-to-start-w
type: email
date: 2026-04-08
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026The right pair to start with, perfect for right now!"
tags: [email, score-4, sender/skechers]
---
# [Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026The right pair to start with, perfect for right now!
**Score:** 4/10 · **Type:** Email audit · **2026-04-08**
## Executive summary

- This is a reactivation email targeting non-purchasers (180-day lapse) with a BOGO 50% / 20% off promotion anchored to new arrivals. The offer is solid and the navigation structure is familiar Skechers boilerplate. But the email should not have been sent: the subject line leads with `[Test]:` and a raw internal campaign ID, and the preview text exposes a full tracking URL instead of copy. These are front-of-inbox failures that undermine credibility before the email is even opened.
- Strong offer, broken delivery. The structural foundation is fine but the quality-control failures are terminal for any live send.

## What's working

- **Offer clarity.** BOGO 50% off (or 20% off 1 item) is immediately legible in the hero — clean headline, good contrast, appropriate urgency for a lapsed-buyer segment.
- **Gender quad nav.** The 2×2 grid (Women's / Men's / Girls' / Boys') is an efficient way to drive self-selection without requiring the user to scroll or search.
- **Utility module.** App download, curbside pickup, BNPL, and find-a-store are all present and credibly increase conversion surface.
- **Logical flow.** Hero offer → new arrivals teaser → category nav → text nav → utility is a sensible hierarchy.

## What's weak

- **Subject line is broken.** `[Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026The right pair...` exposes the test flag and full internal campaign ID string to the recipient. This destroys professional credibility in the inbox preview before open.
- **Preview text is a raw URL.** Instead of marketing copy, the preview slot renders a tracking URL (`https://view.emails.skechers.com/?vawpToken=...`), wasting the most valuable pre-open real estate.
- **New arrivals strip is low-impact.** The four product thumbnails are too small to read, let alone desire. A non-purchaser needs something that stops the scroll — these barely register.
- **Hero image is generic.** One lifestyle product shot of what appears to be a casual canvas/boat shoe. For a 180-day non-purchaser, this risks being irrelevant. No social proof, no breadth signal.
- **No personalization signal.** Nothing in this email tells the recipient it knows anything about them — no category preference, no "styles like what you browsed," nothing. It reads as a pure broadcast to a cold list.

## Recommendations

- 1. **Stop the send / fix the subject line.** Remove `[Test]:` prefix and the raw campaign ID before any live deployment. The subject should read: *"The right pair to start with, perfect for right now!"*
- 2. **Replace the preview text.** Write a real hook that extends the subject — e.g., *"Buy one, get one 50% off — our new arrivals are a great place to start."*
- 3. **Upgrade the new arrivals strip.** Show 4–6 products at a usable size with price points. Non-purchasers need to see value, not thumbnails.
- 4. **Make the hero product earn its space.** Either use a broader product collage to signal range, or pair the hero product with social proof ("Best Seller," "4.8★ from 12k reviews").
- 5. **Introduce a light personalization hook.** Even a gender-based hero swap or "You might like…" framing would signal relevance to a cold audience.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Subject line has `[Test]` prefix and no space before copy | Strip `[Test]:` and campaign ID from subject before production send |
- | P1 | All `image.emails.skechers.com` assets served over HTTP | Switch CDN/image host URLs to HTTPS |
- | P1 | `ink1000.com` pixel served over HTTP | Replace with HTTPS endpoint or remove if redundant |
- | P1 | SPF/DKIM authentication unconfirmed | Pull delivery headers from a direct inbox test (Gmail/Outlook) and confirm DMARC pass |
- | P2 | 4 images missing alt text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` PNGs; add `alt=""` to tracking pixel `o.gif` |
- | P2 | Plain-text body is 72% URLs | Rewrite plain-text version to include readable sentence-form content |
- | P2 | Krux `partner_uid` values | Confirm these are dynamic merge fields, not hardcoded test values |
- | P3 | `<meta>` missing `http-equiv` | Correct to `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />` |
- | P3 | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user accessibility settings |
- | P3 | UTM parameters on click links | Resolve 2–3 sample redirects to confirm UTM passthrough is present and correct |

## Full review
## Skechers — Non-Purchaser Reactivation Email Review

---

### 1. Executive Summary

This is a reactivation email targeting non-purchasers (180-day lapse) with a BOGO 50% / 20% off promotion anchored to new arrivals. The offer is solid and the navigation structure is familiar Skechers boilerplate. But the email should not have been sent: the subject line leads with `[Test]:` and a raw internal campaign ID, and the preview text exposes a full tracking URL instead of copy. These are front-of-inbox failures that undermine credibility before the email is even opened.

---

### 2. Business Impact Score: **4/10**

Strong offer, broken delivery. The structural foundation is fine but the quality-control failures are terminal for any live send.

---

### 3. What's Working

- **Offer clarity.** BOGO 50% off (or 20% off 1 item) is immediately legible in the hero — clean headline, good contrast, appropriate urgency for a lapsed-buyer segment.
- **Gender quad nav.** The 2×2 grid (Women's / Men's / Girls' / Boys') is an efficient way to drive self-selection without requiring the user to scroll or search.
- **Utility module.** App download, curbside pickup, BNPL, and find-a-store are all present and credibly increase conversion surface.
- **Logical flow.** Hero offer → new arrivals teaser → category nav → text nav → utility is a sensible hierarchy.

---

### 4. What's Weak

- **Subject line is broken.** `[Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026The right pair...` exposes the test flag and full internal campaign ID string to the recipient. This destroys professional credibility in the inbox preview before open.
- **Preview text is a raw URL.** Instead of marketing copy, the preview slot renders a tracking URL (`https://view.emails.skechers.com/?vawpToken=...`), wasting the most valuable pre-open real estate.
- **New arrivals strip is low-impact.** The four product thumbnails are too small to read, let alone desire. A non-purchaser needs something that stops the scroll — these barely register.
- **Hero image is generic.** One lifestyle product shot of what appears to be a casual canvas/boat shoe. For a 180-day non-purchaser, this risks being irrelevant. No social proof, no breadth signal.
- **No personalization signal.** Nothing in this email tells the recipient it knows anything about them — no category preference, no "styles like what you browsed," nothing. It reads as a pure broadcast to a cold list.

---

### 5. Recommendations

1. **Stop the send / fix the subject line.** Remove `[Test]:` prefix and the raw campaign ID before any live deployment. The subject should read: *"The right pair to start with, perfect for right now!"*
2. **Replace the preview text.** Write a real hook that extends the subject — e.g., *"Buy one, get one 50% off — our new arrivals are a great place to start."*
3. **Upgrade the new arrivals strip.** Show 4–6 products at a usable size with price points. Non-purchasers need to see value, not thumbnails.
4. **Make the hero product earn its space.** Either use a broader product collage to signal range, or pair the hero product with social proof ("Best Seller," "4.8★ from 12k reviews").
5. **Introduce a light personalization hook.** Even a gender-based hero swap or "You might like…" framing would signal relevance to a cold audience.

---

### 6. Bottom Line

Good offer, broken execution. A BOGO 50% promotion is the right tool for a 180-day non-purchaser — it removes the financial hesitation for a first buy. But the test subject line and URL preview text are embarrassing errors that should prevent this from reaching a live list. Fix those first, then address the weak new arrivals treatment and lack of personalization.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Non-purchaser reactivation with promotional hook (BOGO / 20% off) + new arrivals discovery |
| **Hero / primary value prop** | BOGO 50% off or 20% off 1 item; single lifestyle shoe image (casual canvas/boat style); one SHOP NOW CTA |
| **Membership / benefits** | Not present |
| **Product discoverability** | New arrivals horizontal strip (4 very small thumbnails) + gender quad grid (Women's, Men's, Girls', Boys') + text nav list (Women, Men, Kids, Clothing, New Arrivals, Sale) |
| **Utility / secondary modules** | Download the App, Curbside Pickup, Shop Now Pay Later, Find a Store |
| **Bugs / friction / clarity issues** | `[Test]:` prefix and raw campaign ID string visible in subject line; full tracking URL rendered as preview text; new arrivals product images are too small to be actionable |

---

## Technical Audit

## Technical Audit — Skechers `PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026`

---

### 1. Technical Summary

This is a test send (subject prefix `[Test]:` unstripped) targeting a non-purchaser segment via Salesforce Marketing Cloud. The email has a systemic HTTP image URL problem across all footer and asset images, compounded by missing alt text on multiple images, an unverifiable authentication chain, and a plain-text body that is 72% URL characters — a combination that creates both rendering risk and spam filter exposure.

---

### 2. Link & Tracking Issues

**Multiple third-party tracking pixels present:**

| Pixel | Domain | Protocol | Notes |
|---|---|---|---|
| Open pixel | `click.emails.skechers.com/open.aspx` | HTTPS | SFMC standard |
| Usermatch (x2) | `beacon.krxd.net/1x1_usermatch.gif` | HTTPS | Salesforce/Krux DMP |
| Ad impression | `beacon.krxd.net/1x1_ad_impression.gif` | HTTPS | Krux, includes raw campaign ID |
| Inbox monitor | `pixel.app.returnpath.net/pixel.gif` | HTTPS (no protocol prefix in source) | Validity/Return Path |
| Third-party pixel | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` | **HTTP** | Flagged — see Rendering section |

**Click links:** All 26 click-redirect links route through `click.emails.skechers.com` with encrypted `qs` payloads — HTTP probing was skipped by QA. UTM passthrough cannot be confirmed from source alone (see Section 6).

**Krux pixel hardcoded IDs:** The Krux usermatch pixel contains `partner_uid=75909571` and a SHA-256 hash value. If these are test subscriber IDs hardcoded rather than dynamic merge tokens, subscriber-level identity resolution will be broken on production sends. Confirm these are `%%=...=%%` or AMPscript expressions in the actual template source.

---

### 3. Rendering & Accessibility

**HTTP image URLs — high severity:**

All images served from `image.emails.skechers.com` use `http://` rather than `https://`. Gmail, Apple Mail, and Outlook proxy/cache images and will either block or rewrite these. Affected assets confirmed by QA:

- Skechers logo: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- App Store badge: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`
- Google Play badge: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-4b38-483d-8483-cf54186a0b9f.png`
- AfterPay logo: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-512b-494d-892d-67dc067289b7.png`
- Social icons (Instagram, Twitter, Facebook, Pinterest, YouTube): all HTTP
- 3 unnamed images (`49468f73`, `00100b23`, `fc08601a`): HTTP + missing alt text

**Third-party tracking pixel over HTTP:**
`http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — non-HTTPS, no `alt` attribute. Double-flagged by QA.

**Missing alt text — 4 images total:**
- `o.gif` (ink1000 pixel)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

**Malformed charset meta tag:**
```html
<meta content="text/html; charset=utf-8" />
```
Missing `http-equiv="Content-Type"`. Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

**Text size adjustment disabled globally:**
```css
* { -webkit-text-size-adjust: none; }
```
Applying `none` to all elements (rather than `100%`) prevents iOS Mail from respecting user accessibility font size settings.

**Subject line formatting error:**
`[Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026The right pair...` — the campaign ID runs directly into the subject copy with no space, and the `[Test]` prefix is present. Both must be corrected before production deployment.

---

### 4. Personalization & Merge Tokens

No unresolved/exposed merge tokens (e.g., `%%FIRSTNAME%%`, `[FIRSTNAME]`) are visible in the truncated HTML. Preheader text ("One Pair or Two? 20% off your first pair or BOGO 50% off") is hardcoded — expected for a non-personalized promotional send.

The `partner_uid` values in the Krux pixel (noted above in Section 2) require confirmation that they are dynamic at send time.

---

### 5. Compliance

**Authentication — unverifiable:**
SPF/DKIM `Authentication-Results` header was not captured via the AgentMail relay. DMARC alignment for `emails.skechers.com` cannot be confirmed. This is a relay/capture gap, not necessarily a sending gap, but should be verified against a direct SMTP delivery log.

**Plain-text URL density:**
QA reports 3,511 of 4,843 plain-text characters (72.5%) are URLs — above the 70% threshold that triggers spam filter scrutiny with some providers (Barracuda, SpamAssassin). The plain-text version should include readable narrative content, not just link dumps.

**CAN-SPAM / unsubscribe:**
The HTML was truncated; the footer containing the physical mailing address and unsubscribe link could not be confirmed from the provided source. These must be present and functional. The `no-reply@emails.skechers.com` sender is CAN-SPAM compliant as long as the unsubscribe mechanism is operational.

---

### 6. Email-to-Site Continuity

All destination URLs are encrypted within the `qs=` parameter of `click.emails.skechers.com` redirects — UTM parameters cannot be read from source. Verify via redirect resolution that links include parameters such as `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` aligned to the campaign ID `PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026`.

The campaign ID appears consistently across the subject line, the Krux ad impression pixel (`campaignid=PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026`), and the ink1000 pixel (`mi_ecmp=...`) — internal tracking consistency is intact.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Subject line has `[Test]` prefix and no space before copy | Strip `[Test]:` and campaign ID from subject before production send |
| P1 | All `image.emails.skechers.com` assets served over HTTP | Switch CDN/image host URLs to HTTPS |
| P1 | `ink1000.com` pixel served over HTTP | Replace with HTTPS endpoint or remove if redundant |
| P1 | SPF/DKIM authentication unconfirmed | Pull delivery headers from a direct inbox test (Gmail/Outlook) and confirm DMARC pass |
| P2 | 4 images missing alt text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` PNGs; add `alt=""` to tracking pixel `o.gif` |
| P2 | Plain-text body is 72% URLs | Rewrite plain-text version to include readable sentence-form content |
| P2 | Krux `partner_uid` values | Confirm these are dynamic merge fields, not hardcoded test values |
| P3 | `<meta>` missing `http-equiv` | Correct to `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />` |
| P3 | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user accessibility settings |
| P3 | UTM parameters on click links | Resolve 2–3 sample redirects to confirm UTM passthrough is present and correct |
## Recent history

- [[2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026-v3the-right-pair-right-no]] — 5/10 (2026-04-08)
- [[2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026-v2the-right-pair-right-no]] — 4/10 (2026-04-08)
- [[2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026the-right-pair-right-now-w]] — 5/10 (2026-04-08)

