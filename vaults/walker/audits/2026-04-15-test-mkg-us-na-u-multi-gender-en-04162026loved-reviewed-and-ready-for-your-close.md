---
slug: 2026-04-15-test-mkg-us-na-u-multi-gender-en-04162026loved-reviewed-and-ready-for-your-close
type: email
date: 2026-04-15
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_MULTI_GENDER_EN_04162026Loved, Reviewed, and Ready for Your Closet"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_MULTI_GENDER_EN_04162026Loved, Reviewed, and Ready for Your Closet
**Score:** 5/10 · **Type:** Email audit · **2026-04-15**
## What's working

- **Editorial hook is clear.** "Most Talked About" is a well-worn but effective social proof frame. Three products, three star ratings, three short pull-quotes — the pattern is scannable and builds momentum down the page.
- **Pull-quotes are specific and human.** "Skechers are the only shoes for me" and "Rolled right out of the box" are short, credible, and emotionally legible. They feel like real reviews, not marketing copy.
- **Product shots are clean.** White-background hero imagery communicates product details without clutter.
- **Glide-Step callout.** The branded product name gets a subtle spotlight mid-email, which reinforces brand equity on a specific line.
- **Footer utility is dense but organized.** Navigation covers Women / Men / Kids / Clothing / New Arrivals / Sale, plus app download, loyalty program, store locator, and social links — all visible and readable.

## What's weak

- **Subject line is catastrophically broken.** "[Test]: MKG_US_NA_U_MULTI_GENDER_EN_04162026Loved…" is an internal QA tag that made it to a live send. This is the single biggest problem with this email — it signals to every recipient that something went wrong before they've even opened it.
- **Preview text is raw JSON schema.** The inbox preview shows raw `@context` / `@type` JSON instead of human-readable copy. Recipients see code noise as their first impression of the body.
- **No urgency or scarcity.** Nothing in the email creates a reason to act today vs. next week. No sale badge, no "limited stock," no time window.
- **No personalization signals.** "Most Talked About" is completely generic. There's no "based on what you've browsed" or even a gender/category filter implied. For a multi-gender campaign, this is a missed opportunity to feel relevant.
- **CTAs are weak and repetitive.** "Shop Easy Picks," "Shop Glide-Step" — these are functional but flat. No price anchoring, no benefit language in the button copy.
- **Header offer ("Buy One, Get One 50% Off") is buried.** The BOGO offer at the very top is small and easy to skip, yet it's arguably the strongest conversion driver in the email. It deserves more visual weight.

## Recommendations

- 1. **Fix the subject line pipeline immediately.** The test slug should never reach a live send. Implement subject line preview validation in QA that flags strings matching `[Test]:` or internal naming conventions.
- 2. **Fix the preview text.** The JSON schema fragment in the preview is broken metadata. Replace with a 90-character teaser that mirrors the subject line concept: e.g., *"Your next favorite shoes — reviewed by thousands."*
- 3. **Give the BOGO banner a second placement.** Drop a reminder strip above the footer CTA block. Shoppers who scroll past the header need a second chance to see the offer.
- 4. **Add a price or value signal to CTAs.** "Shop Easy Picks – From $65" or "Get the Glide-Step" is more compelling than the current generic labels.
- 5. **Segment or personalize the product trio.** If behavioral data is available, surface products from the category the recipient has browsed. If not, at minimum split by gender and send gender-appropriate product selections.
- 6. **Add a fourth element of urgency.** A simple "These styles move fast" badge or a low-stock indicator on one product would add friction to inaction without requiring a promotion.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Return Path pixel missing protocol scheme | Prepend `https://` to `pixel.app.returnpath.net/...` |
- | **P0** | Subject line token concatenation | Add space/delimiter between campaign ID variable and subject copy in template |
- | **P0** | `[Test]` prefix in subject | Remove before production deployment |
- | **P1** | 13 HTTP image URLs | Change all `http://image.emails.skechers.com/` to `https://`; change `http://www.ink1000.com/` to `https://` |
- | **P1** | SPF/DKIM unverified | Confirm authentication records for `emails.skechers.com` resolve correctly through send infrastructure |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` in the global `*` rule |
- | **P2** | Missing `http-equiv` on two `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` respectively |
- | **P2** | Missing `alt` on `49468f73...png` | Add descriptive `alt` text |
- | **P3** | UTM coverage | Probe click-redirect chain on a test send to confirm all 26 links carry expected UTM parameters |
- | **P3** | Krux DMP subscriber ID sync | Confirm data sharing disclosure in privacy policy |

## Full review
## 2. Business Impact Score

**5 / 10**

Competent but unmemorable. The concept is solid; the execution leaves conversion on the table.

---

## 3. What's Working

- **Editorial hook is clear.** "Most Talked About" is a well-worn but effective social proof frame. Three products, three star ratings, three short pull-quotes — the pattern is scannable and builds momentum down the page.
- **Pull-quotes are specific and human.** "Skechers are the only shoes for me" and "Rolled right out of the box" are short, credible, and emotionally legible. They feel like real reviews, not marketing copy.
- **Product shots are clean.** White-background hero imagery communicates product details without clutter.
- **Glide-Step callout.** The branded product name gets a subtle spotlight mid-email, which reinforces brand equity on a specific line.
- **Footer utility is dense but organized.** Navigation covers Women / Men / Kids / Clothing / New Arrivals / Sale, plus app download, loyalty program, store locator, and social links — all visible and readable.

---

## 4. What's Weak

- **Subject line is catastrophically broken.** "[Test]: MKG_US_NA_U_MULTI_GENDER_EN_04162026Loved…" is an internal QA tag that made it to a live send. This is the single biggest problem with this email — it signals to every recipient that something went wrong before they've even opened it.
- **Preview text is raw JSON schema.** The inbox preview shows raw `@context` / `@type` JSON instead of human-readable copy. Recipients see code noise as their first impression of the body.
- **No urgency or scarcity.** Nothing in the email creates a reason to act today vs. next week. No sale badge, no "limited stock," no time window.
- **No personalization signals.** "Most Talked About" is completely generic. There's no "based on what you've browsed" or even a gender/category filter implied. For a multi-gender campaign, this is a missed opportunity to feel relevant.
- **CTAs are weak and repetitive.** "Shop Easy Picks," "Shop Glide-Step" — these are functional but flat. No price anchoring, no benefit language in the button copy.
- **Header offer ("Buy One, Get One 50% Off") is buried.** The BOGO offer at the very top is small and easy to skip, yet it's arguably the strongest conversion driver in the email. It deserves more visual weight.

---

## 5. Recommendations

1. **Fix the subject line pipeline immediately.** The test slug should never reach a live send. Implement subject line preview validation in QA that flags strings matching `[Test]:` or internal naming conventions.
2. **Fix the preview text.** The JSON schema fragment in the preview is broken metadata. Replace with a 90-character teaser that mirrors the subject line concept: e.g., *"Your next favorite shoes — reviewed by thousands."*
3. **Give the BOGO banner a second placement.** Drop a reminder strip above the footer CTA block. Shoppers who scroll past the header need a second chance to see the offer.
4. **Add a price or value signal to CTAs.** "Shop Easy Picks – From $65" or "Get the Glide-Step" is more compelling than the current generic labels.
5. **Segment or personalize the product trio.** If behavioral data is available, surface products from the category the recipient has browsed. If not, at minimum split by gender and send gender-appropriate product selections.
6. **Add a fourth element of urgency.** A simple "These styles move fast" badge or a low-stock indicator on one product would add friction to inaction without requiring a promotion.

---

## 6. Bottom Line

The bones are fine — social proof is a strong theme, the layout scans well, and the product photography is professional. But this email shipped with two visible technical failures (subject line and preview text) that undermine every dollar spent on production. Fix those first. Then focus on personalization and urgency; this format has real potential if it's made to feel like it was sent *to someone* rather than *at everyone*.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: MKG_US_NA_U_MULTI_GENDER_EN_04162026Loved, Reviewed, and Ready for Your Closet`
- **Length:** 88 characters (excluding the test slug; the slug alone is ~52 characters making the full subject ~88 chars — the intended portion "Loved, Reviewed, and Ready for Your Closet" is 43 characters)
- **Scores (1-10):** Clarity `2`, Curiosity `3`, Personalization `3`, Urgency `2`, Specificity `3`
- **Strengths:**
  - The intended portion ("Loved, Reviewed, and Ready for Your Closet") has a nice rhythm and implies social proof
  - "Ready for Your Closet" uses second-person framing that could land well
- **Weaknesses:**
  - The `[Test]:` QA slug makes this unsendable — it will be read as an error by recipients
  - No urgency, no offer signal, no product specificity in the visible portion
- **Alt A:** `The shoes everyone's talking about — and a BOGO deal to grab them`
- **Alt B:** `Most-reviewed. Most loved. Most want them in their cart.`

---

## 8. Evidence

- **Overall purpose:** Drive traffic to Skechers bestsellers, validated by customer review quotes, with a BOGO promotional offer as the conversion incentive.
- **Hero / primary value proposition:** "Most Talked About" editorial concept. Three featured shoes presented with star ratings and one-line review excerpts. No hero image — the product trio *is* the hero.
- **Membership / benefits section:** Loyalty program ("Join Skechers+") is present in the footer utility strip alongside a store locator and app download prompt. It's not positioned prominently — more of a footer afterthought than a conversion moment.
- **Product discoverability / recommendation modules:** Three product tiles — two slip-on/comfort styles and one Glide-Step sneaker. Each has a product image, star rating, a short review quote, and a CTA button. The Glide-Step gets a branded label treatment that distinguishes it slightly from the other two.
- **Utility / secondary modules:** Navigation bar (Women, Men, Kids, Clothing, New Arrivals, Sale), app download badges (App Store / Google Play), "Coming to Klarna" payment option, social icons (Facebook, Instagram, YouTube), and a standard legal footer with unsubscribe.
- **Bugs / friction / clarity issues (visible):**
  - **Subject line contamination:** Internal test slug `[Test]: MKG_US_NA_U_MULTI_GENDER_EN_04162026` is visible to all recipients.
  - **Preview text is raw JSON-LD:** The inbox preheader displays machine-readable schema markup instead of human copy — a clear rendering/configuration error visible before open.

---

## Technical Audit

## Technical Audit — SKECHERS MKG_US_NA_U_MULTI_GENDER_EN_04162026

---

### 1. Technical Summary

The email has a systemic HTTP/mixed-content problem across 13+ image assets that will trigger blocking in major clients, a broken tracking pixel URL (missing protocol scheme), and a subject line token concatenation failure. Authentication state is unverified. No production-blocking structural errors, but several issues require remediation before deployment.

---

### 2. Link & Tracking Issues

**Return Path pixel — broken URL (no protocol scheme)**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
Missing `https://` prefix. Email clients will treat this as a relative path; the pixel will not fire. This silently breaks inbox placement monitoring.

**Ink1000 tracking pixel — HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8004129222&mi_ecmp=MKG_US_NA_U_MULTI_GENDER_EN_04162026
```
Served over HTTP. Will be blocked in Gmail. Also lacks `alt` text (confirmed by QA).

**26 click-redirect links — unprobed**
All clicks route through `click.emails.skechers.com`. QA skipped HTTP probing; destination URLs and UTM coverage are unverified.

---

### 3. Rendering & Accessibility

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; }
```
`none` disables iOS Mail's automatic text scaling entirely. This can render small text unreadable on some devices. Should be `100%`.

**Two `<meta>` tags missing `http-equiv` attribute**
```html
<meta content="text/html; charset=utf-8" />
<meta content="IE=Edge" />
```
Both are missing the required `http-equiv` attribute. Correct forms:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```
Without `http-equiv`, these declarations are ignored by some parsers.

**13 images served over HTTP — will be blocked in Gmail and Outlook**

Affected assets (full list from QA):

| Asset | URL |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/.../dde00662...png` |
| Unnamed PNG | `http://image.emails.skechers.com/.../49468f73...png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f...png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0...png` |
| Curbside Pickup | `http://image.emails.skechers.com/.../00100b23...png` |
| AfterPay | `http://image.emails.skechers.com/.../07cb60b5...png` |
| Find A Store | `http://image.emails.skechers.com/.../fc08601a...png` |
| Instagram | `http://image.emails.skechers.com/.../b782e0aa...png` |
| Facebook | `http://image.emails.skechers.com/.../a5c4cae0...png` |
| YouTube | `http://image.emails.skechers.com/.../8c5738fc...png` |

The `image.emails.skechers.com` CDN should support HTTPS — this is a URL scheme issue in the template, not a CDN limitation.

**Missing `alt` text**
- `o.gif` (ink1000 tracking pixel) — `alt=""` at minimum required
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no alt attribute present

---

### 4. Personalization & Merge Tokens

**Subject line token concatenation failure**

The delivered subject is:
```
[Test]: MKG_US_NA_U_MULTI_GENDER_EN_04162026Loved, Reviewed, and Ready for Your Closet
```

The campaign ID (`MKG_US_NA_U_MULTI_GENDER_EN_04162026`) is directly concatenated with the subject copy (`Loved, Reviewed...`) with no space or separator. This indicates either a missing delimiter in the template variable or the campaign ID field is being inlined where a different token was intended. The `[Test]` prefix further confirms this is a seed/proof send, but the concatenation issue would carry to production.

No unresolved `%%`, `{{}}`, or `*|`-style merge tokens visible in the truncated source.

---

### 5. Compliance

**`[Test]` prefix in subject line**
Present in this send; must be removed before production deployment. A subject containing `[Test]:` on a live send violates CAN-SPAM's prohibition on deceptive subject lines.

**SPF/DKIM/DMARC — unverified**
QA finding:
```
[WARN] Authentication-Results header not found: Expected via AgentMail relay — SPF/DKIM status unknown
```
Cannot confirm DMARC alignment for `emails.skechers.com`. Deliverability risk if authentication records are misconfigured.

**Third-party DMP pixel data sharing**
The Krux/Salesforce Audience Studio pixels pass subscriber identifiers to `beacon.krxd.net`:
```
partner_uid=e5a36492fb9b5fc2c87ffabb8e56d19ed0aa520638b1043bb37c2d19c42312dd  (SHA-256 hash)
partner_uid=32884357  (raw subscriber ID)
```
Verify this data sharing is disclosed in Skechers' privacy policy and covered by applicable consent mechanisms (CAN-SPAM does not govern this directly, but CCPA/state privacy laws may apply to subscriber-level ID syncs).

Unsubscribe mechanism not visible in the truncated source — assumed present in footer; flagging for confirmation.

---

### 6. Email-to-Site Continuity

UTM coverage is unverifiable because all 26 click links were not probed by QA. The campaign ID `MKG_US_NA_U_MULTI_GENDER_EN_04162026` is present in the Krux impression pixel's `campaignid` parameter, which confirms it as the canonical campaign identifier — all click URLs should carry `utm_campaign=MKG_US_NA_U_MULTI_GENDER_EN_04162026` (or a consistent derivative). This cannot be confirmed without probing the redirect chain.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Return Path pixel missing protocol scheme | Prepend `https://` to `pixel.app.returnpath.net/...` |
| **P0** | Subject line token concatenation | Add space/delimiter between campaign ID variable and subject copy in template |
| **P0** | `[Test]` prefix in subject | Remove before production deployment |
| **P1** | 13 HTTP image URLs | Change all `http://image.emails.skechers.com/` to `https://`; change `http://www.ink1000.com/` to `https://` |
| **P1** | SPF/DKIM unverified | Confirm authentication records for `emails.skechers.com` resolve correctly through send infrastructure |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` in the global `*` rule |
| **P2** | Missing `http-equiv` on two `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` respectively |
| **P2** | Missing `alt` on `49468f73...png` | Add descriptive `alt` text |
| **P3** | UTM coverage | Probe click-redirect chain on a test send to confirm all 26 links carry expected UTM parameters |
| **P3** | Krux DMP subscriber ID sync | Confirm data sharing disclosure in privacy policy |
## Recent history

- [[2026-04-15-spring-styles-20-off-the-perfect-pair]] — 5/10 (2026-04-15)
- [[2026-04-15-membership-has-its-perks]] — 6/10 (2026-04-15)
- [[2026-04-15-there-s-still-time-but-not-much]] — 5/10 (2026-04-15)

