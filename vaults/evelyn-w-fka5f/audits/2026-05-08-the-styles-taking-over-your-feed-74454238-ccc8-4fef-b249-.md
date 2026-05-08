---
slug: 2026-05-08-the-styles-taking-over-your-feed-74454238-ccc8-4fef-b249-
type: email
date: 2026-05-08
persona: evelyn-w-fka5f
score: "8/10"
sender: SKECHERS
subject: The Styles Taking Over Your Feed
tags: [email, score-8, sender/skechers]
---
# The Styles Taking Over Your Feed
**Score:** 8/10 · **Type:** Email audit · **2026-05-08**
## Executive summary

- A standard mass-market Skechers promotional blast with a solid BOGO 50% off anchor and three category modules (Boat Shoes, Sneakers, Elevated Comfort). The offer is the strongest element — it's prominently placed and immediately visible. The subject line, however, leads with vague social-media language ("Taking Over Your Feed") that buries the lead entirely. This email will drive clicks from warm Skechers buyers but will lose opens from anyone not already paying attention to the brand.

## What's working

- **BOGO 50% off is front and center.** It's in a banner stripe across the hero — impossible to miss, the clearest value signal in the email.
- **Three distinct category modules** (Boat Shoes, Sneakers, Elevated Comfort) give the email structure and let a shopper self-select. Each has its own CTA, so there's no dead-end.
- **25% off apparel** module adds a secondary offer without cannibalizing the shoe focus — good sequencing.
- **Clean, tight layout.** No clutter, no broken images, consistent typography.
- **Utility section** (app download, Afterpay/Klarna, curbside pickup) is useful without being intrusive — well-placed below the fold.

## What's weak

- **Subject line is vague.** "The Styles Taking Over Your Feed" sounds like a caption, not an email. It doesn't hint at the BOGO offer — which is the actual reason to open.
- **"SHOP NOW" CTAs are generic.** Three sections, all labeled "SHOP NOW" or slight variations. A verb + a specific noun (e.g., "Shop Boat Shoes" is actually fine — but "Shop Now" on the hero is wasted real estate).
- **No time pressure.** The BOGO has no deadline visible anywhere. Without urgency, the "I'll come back to this" instinct wins.
- **No social proof.** No ratings, no review count, no "trending" or "bestseller" badge on any product shown.
- **Hero model demographics** are male-only. If this email goes to a mixed-gender list, the hero doesn't signal inclusivity. Boat shoes and casual sneakers skew lifestyle-neutral.
- **25% off apparel** feels tacked on — the offer percentage is lower than the BOGO, and apparel is a secondary category for a shoe brand. It dilutes focus slightly.

## Recommendations

- 1. **Move the offer into the subject line.** "BOGO 50% Off — The Styles Everyone's Talking About" immediately answers "why open?" The current subject is social-media fluff.
- 2. **Add a deadline.** Even "This Weekend Only" or "Offer Ends Sunday" would meaningfully lift conversion on the BOGO.
- 3. **Make the hero CTA more specific.** Change "SHOP NOW" to "Shop the BOGO" or "See All New Arrivals" to tie the button back to the actual offer.
- 4. **Add a star rating or badge** to at least one product module. A single "4.7★ from 12K reviews" line under Arch Fit would add credibility fast.
- 5. **Test a gender-split version** of the hero if list data supports it — women's models for the women's segment, men's for men's. The current hero is male-skewing.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | 14 HTTP image URLs | Update all `http://image.emails.skechers.com` src attributes to `https://` at the template level |
- | **High** | Ink1000 pixel over HTTP | Change `http://www.ink1000.com/...` to `https://` — or remove if redundant with SFMC open tracking |
- | **High** | Missing `List-Unsubscribe` / `List-Unsubscribe-Post` headers | Enable in SFMC Send Classification or Journey send settings |
- | **Medium** | Empty JSON-LD structured data | Populate `subjectLine`, `description`, `discountCode`, `availabilityStarts/Ends` from template data — or strip the empty blocks entirely |
- | **Medium** | `nl` subdomain favicon over HTTP | Correct to `https://image.emails.skechers.com/...` and align subdomain |
- | **Medium** | Outlook mobile/desktop toggle | Add `mso-hide:all` to mobile-only elements to prevent dual-render in Outlook desktop |
- | **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user-controlled font scaling on iOS |
- | **Low** | Missing alt text on `49468f73-...png` | Add descriptive `alt` attribute |
- | **Low** | Authentication-Results absent | Confirm SPF/DKIM status via direct inbox delivery test (e.g., mail-tester.com) to rule out relay-stripping artifact |

## Full review
---

## 1. Executive Summary

A standard mass-market Skechers promotional blast with a solid BOGO 50% off anchor and three category modules (Boat Shoes, Sneakers, Elevated Comfort). The offer is the strongest element — it's prominently placed and immediately visible. The subject line, however, leads with vague social-media language ("Taking Over Your Feed") that buries the lead entirely. This email will drive clicks from warm Skechers buyers but will lose opens from anyone not already paying attention to the brand.

---

## 2. Business Impact Score

**8/10**

Criteria that were TRUE:
- Sender (Skechers) is a recognizable brand
- Concrete offer is clearly visible — BOGO 50% off in the hero, 25% off apparel lower
- Primary CTA ("SHOP NOW") is unambiguous and present in the hero
- Visual hierarchy is clear — the eye lands on the BOGO banner and hero first
- No render bugs — images load, layout is clean, no broken elements visible
- Demographic signals match — male model in casual lifestyle wear
- Email reflects a current "new arrivals" / trending moment ("Just Landed: What's Hot Right Now")

Not met: subject doesn't reference a persona focus area explicitly; no loyalty/member pricing visible; fine print visible at bottom but readable.

---

## 3. What's Working

- **BOGO 50% off is front and center.** It's in a banner stripe across the hero — impossible to miss, the clearest value signal in the email.
- **Three distinct category modules** (Boat Shoes, Sneakers, Elevated Comfort) give the email structure and let a shopper self-select. Each has its own CTA, so there's no dead-end.
- **25% off apparel** module adds a secondary offer without cannibalizing the shoe focus — good sequencing.
- **Clean, tight layout.** No clutter, no broken images, consistent typography.
- **Utility section** (app download, Afterpay/Klarna, curbside pickup) is useful without being intrusive — well-placed below the fold.

---

## 4. What's Weak

- **Subject line is vague.** "The Styles Taking Over Your Feed" sounds like a caption, not an email. It doesn't hint at the BOGO offer — which is the actual reason to open.
- **"SHOP NOW" CTAs are generic.** Three sections, all labeled "SHOP NOW" or slight variations. A verb + a specific noun (e.g., "Shop Boat Shoes" is actually fine — but "Shop Now" on the hero is wasted real estate).
- **No time pressure.** The BOGO has no deadline visible anywhere. Without urgency, the "I'll come back to this" instinct wins.
- **No social proof.** No ratings, no review count, no "trending" or "bestseller" badge on any product shown.
- **Hero model demographics** are male-only. If this email goes to a mixed-gender list, the hero doesn't signal inclusivity. Boat shoes and casual sneakers skew lifestyle-neutral.
- **25% off apparel** feels tacked on — the offer percentage is lower than the BOGO, and apparel is a secondary category for a shoe brand. It dilutes focus slightly.

---

## 5. Recommendations

1. **Move the offer into the subject line.** "BOGO 50% Off — The Styles Everyone's Talking About" immediately answers "why open?" The current subject is social-media fluff.
2. **Add a deadline.** Even "This Weekend Only" or "Offer Ends Sunday" would meaningfully lift conversion on the BOGO.
3. **Make the hero CTA more specific.** Change "SHOP NOW" to "Shop the BOGO" or "See All New Arrivals" to tie the button back to the actual offer.
4. **Add a star rating or badge** to at least one product module. A single "4.7★ from 12K reviews" line under Arch Fit would add credibility fast.
5. **Test a gender-split version** of the hero if list data supports it — women's models for the women's segment, men's for men's. The current hero is male-skewing.

---

## 6. Bottom Line

Solid promotional infrastructure, weak top-of-funnel hook. The BOGO offer is genuinely good and the email delivers it cleanly — but half the list won't open because the subject doesn't tell them there's a deal. Fix the subject line and add a deadline; the rest of the email is doing its job.

---

## 7. Subject Line Analysis

- **Subject:** `The Styles Taking Over Your Feed`
- **Length:** 32 characters
- **Scores (1-10):** Clarity `5`, Curiosity `5`, Personalization `2`, Urgency `1`, Specificity `2`
- **Strengths:**
  - Short and mobile-friendly at 32 characters
  - Culturally current phrasing — "taking over your feed" reads as social-native
- **Weaknesses:**
  - No mention of the BOGO or any offer — a major buried lead
  - "Styles" is vague; doesn't signal footwear, category, or season
- **Alt A:** `BOGO 50% Off: The Styles Everyone's Buying Right Now`
- **Alt B:** `What's Hot Right Now — Buy One, Get One 50% Off`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the email render does not show a visible preheader; standard footer/utility text is likely bleeding into the preview slot
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None observable)
- **Weaknesses:**
  - No intentional preheader is visible — a missed opportunity to reinforce the BOGO offer and drive opens
  - Without a preheader, the inbox preview likely shows "View this email in your browser" or empty space
- **Alt A:** `Buy One, Get One 50% Off — Boat Shoes, Sneakers & More. Shop the New Arrivals.`
- **Alt B:** `The BOGO deal is on. New boat shoes, sneakers, and Arch Fit styles just dropped.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Signals counted:** Sender display name recognizable (Skechers), subject under 50 characters, no spam signals (no ALL CAPS or excessive punctuation)
- **Rationale:** The sender is known, but the subject line does zero promotional work — it reads like a social caption, not an offer. A casual inbox scan gives no reason to prioritize this over other mail.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Hero offer visible without scrolling (BOGO in banner), CTA is in the right category (footwear), offer reduces price (BOGO 50%), brand voice is consistent, no visible friction or render breaks
- **Rationale:** If you open it, the BOGO and clean category layout pull you toward clicking — but generic "SHOP NOW" copy and no time pressure reduce the urgency that closes that final gap.

---

## 11. Evidence

- **Overall purpose:** New arrivals promotional email anchored on a BOGO 50% off promotion across men's footwear styles.
- **Hero / primary value proposition:** Lifestyle shot of a male model with BOGO 50% off banner overlaid; headline "Just Landed: WHAT'S HOT RIGHT NOW" with subtext about trending styles. CTA: "SHOP NOW."
- **Membership / benefits section:** None visible. No loyalty tier, points, or member-exclusive pricing shown.
- **Product discoverability / recommendation modules:** Three category modules — Boat Shoes (two colorways shown), Sneakers (two colorways), Elevated Comfort/Arch Fit (two colorways). Each has a distinct CTA. Best Sellers module below with a single CTA.
- **Utility / secondary modules:** 25% off apparel with category nav (Women, Men, Kids, Clothing, New Arrivals, Sale); app download prompt; curbside pickup CTA; Afterpay/Klarna/Buy Now Pay Later logos; social follow links.
- **Bugs / friction / clarity issues:** None visible. All images render cleanly. Layout is single-column and stable. Fine print at footer is small but present — content not legible at this zoom level, but no visual breakage.

---

## Technical Audit

## Technical Audit — Skechers "The Styles Taking Over Your Feed"

---

### 1. Technical Summary

Standard XHTML 1.0 Transitional table-based layout deployed via Salesforce Marketing Cloud (SFMC). Primary issues are systemic HTTP image sourcing across 14+ assets (will cause image blocking in Gmail, Apple Mail, and Outlook.com), empty JSON-LD structured data fields, and missing compliance headers at the relay layer.

---

### 2. Link & Tracking Issues

**26 click-tracked links** route through `click.emails.skechers.com` — all HTTPS, which is correct. Destination URL integrity and UTM parameter presence cannot be confirmed from the source alone (HTTP probe skipped per QA).

**Secondary tracking pixel over HTTP:**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
  ?mi_u=8108862811&mi_ecmp=MKG_US_NONPURCLICK_U_TREND_PROD_NONPURCH_0508
```
This is a third-party analytics/identity pixel (Merkle/Connexity) served over HTTP. Modern email clients will block it entirely, making any engagement data from this pixel unreliable.

**Third-party identity-match pixel:**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_...
```
Krux DMP pixel for cross-device identity resolution. HTTPS — technically fine — but inclusion requires disclosure under GDPR/CCPA if recipients are in covered jurisdictions.

---

### 3. Rendering & Accessibility

**HTTP image sources (14 affected):** All `image.emails.skechers.com` assets use `http://`. Gmail proxies images through HTTPS and will fail to rewrite these; Apple Mail and Outlook.com will block mixed content. Affected images include the logo, app store badges, social icons, and store-finder icon:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  ← logo
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  ← App Store
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  ← Google Play
... (10 more)
```

**Favicon using a different domain over HTTP:**
```html
<link rel="icon" href="http://image.emails.nl.skechers.com/lib/...">
```
Subdomain `nl` (Netherlands?) differs from the main asset domain. Non-HTTPS.

**Missing alt text:** `49468f73-4651-4af3-bea2-61d1ae5db486.png` has no `alt` attribute. Purpose is unidentifiable from filename. Accessibility violation; also renders as broken icon in image-blocked clients.

**`-webkit-text-size-adjust: none`** is set globally. This suppresses user-controlled font scaling on iOS, which breaks accessibility for low-vision users who set larger system font sizes. Should be `100%`, not `none`.

**Outlook desktop mobile/desktop toggle gap:** Mobile-only elements using `display:none` are missing `mso-hide:all`. Outlook 2016–2021 ignores CSS `display:none` in certain contexts, potentially rendering both the mobile and desktop layout variants simultaneously.

**Empty JSON-LD structured data:**
```json
{ "@type": "EmailMessage", "subjectLine": "" }
{ "@type": "DiscountOffer", "description": "", "discountCode": "",
  "availabilityStarts": "", "availabilityEnds": "" }
```
The preheader references "BOGO 50% Off or 20% off 1 Pair" but none of this is reflected in the structured data. Gmail uses these fields to render promotional tab annotations and offer cards. Empty values will suppress that feature entirely and may cause schema validation warnings.

The `subjectLine` field is blank while the actual subject line is "The Styles Taking Over Your Feed" — a clear data-population failure in the SFMC template.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens found in the truncated source (e.g., no orphaned `%%FIRST_NAME%%` or `{{token}}` strings). No issues found in the delivered content.

---

### 5. Compliance

**`List-Unsubscribe` header: NOT FOUND**
Required by Google and Yahoo for bulk senders (>5,000/day) since February 2024. Absence increases spam complaint rate and risks deliverability throttling. SFMC supports this header via Journey/Send Classification settings.

**`List-Unsubscribe-Post` header (RFC 8058): NOT FOUND**
One-click unsubscribe is not supported. Google/Yahoo mandate this for bulk senders. Users must navigate to a landing page to unsubscribe, which raises friction and complaint rates.

**`Authentication-Results` header: NOT FOUND**
SPF/DKIM/DMARC pass/fail status is unknown. This may be an artifact of the AgentMail relay not forwarding the header, but if genuinely absent in delivered mail, it is a critical deliverability risk. Cannot confirm sender authentication posture from available data.

**CAN-SPAM physical address and unsubscribe body link:** Cannot confirm from truncated source, but Skechers emails standardly include these in the footer — no flag raised without evidence of absence.

---

### 6. Email-to-Site Continuity

The `mi_ecmp` value on the Ink1000 pixel (`MKG_US_NONPURCLICK_U_TREND_PROD_NONPURCH_0508`) confirms campaign-level tracking metadata is in use. However, because all 26 destination links are behind the SFMC click tracker and were not probed, UTM parameter presence on landing pages cannot be confirmed from this audit. This is a gap in QA coverage, not a confirmed issue.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | 14 HTTP image URLs | Update all `http://image.emails.skechers.com` src attributes to `https://` at the template level |
| **High** | Ink1000 pixel over HTTP | Change `http://www.ink1000.com/...` to `https://` — or remove if redundant with SFMC open tracking |
| **High** | Missing `List-Unsubscribe` / `List-Unsubscribe-Post` headers | Enable in SFMC Send Classification or Journey send settings |
| **Medium** | Empty JSON-LD structured data | Populate `subjectLine`, `description`, `discountCode`, `availabilityStarts/Ends` from template data — or strip the empty blocks entirely |
| **Medium** | `nl` subdomain favicon over HTTP | Correct to `https://image.emails.skechers.com/...` and align subdomain |
| **Medium** | Outlook mobile/desktop toggle | Add `mso-hide:all` to mobile-only elements to prevent dual-render in Outlook desktop |
| **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user-controlled font scaling on iOS |
| **Low** | Missing alt text on `49468f73-...png` | Add descriptive `alt` attribute |
| **Low** | Authentication-Results absent | Confirm SPF/DKIM status via direct inbox delivery test (e.g., mail-tester.com) to rule out relay-stripping artifact |
## Recent history

- [[2026-05-07-a-little-something-for-mom-and-you-with-bogo-50-off-9752848b-8413-4b76-a05e-]] — 5/10 (2026-05-07)
- [[2026-05-04-your-20-off-welcome-offer-is-waiting]] — 8/10 (2026-05-04)
- [[2026-05-03-you-ve-still-got-20-off]] — 5/10 (2026-05-03)

