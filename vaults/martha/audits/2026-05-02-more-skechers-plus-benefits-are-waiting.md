---
slug: 2026-05-02-more-skechers-plus-benefits-are-waiting
type: email
date: 2026-05-02
persona: martha
score: "6/10"
sender: SKECHERS PLUS
subject: More Skechers Plus Benefits are waiting
tags: [email, score-6, sender/skechers-plus]
---
# More Skechers Plus Benefits are waiting
**Score:** 6/10 · **Type:** Email audit · **2026-05-02**
## Executive summary

- Okay so this one is actually about *me* — my Skechers Plus membership. They're telling me I'm a Silver member and nudging me toward Gold, showing the benefits side by side. I appreciated that framing. But the email quickly loses focus: it pivots into generic product recs, a birthday section (irrelevant right now), and a full department nav. For a loyalty email, it's trying to do too much and ends up feeling like a blast they threw my name on rather than something built for my situation.
- The loyalty angle is genuinely useful but the product recommendations don't land for me, and the CTA hierarchy is a mess. Missed opportunity to actually drive me up to Gold.

## What's working

- **Silver vs. Gold tier comparison** is the strongest moment in the email. Seeing the two columns side by side — Achievement Gift, Memberversary Gift, Holiday Bonus on Silver vs. Double Points on Gold — immediately tells me what I'm leaving on the table. That's motivating.
- **Personalization at the top** — "Hi Martha" and showing my current points balance ("1000 — you have enough points for a $5 reward! Use code: REDEM25") is actually relevant and actionable. That's the kind of thing that makes me open my wallet.
- **Earn 10 Points per $1** reminder with a shoe example ("A pair of Skechers® Hands Free Slip-Ins® could earn you over 1000 Points") is concrete and easy to understand.
- **Shop Now** CTA after the points section is well placed.

## What's weak

- **"We Thought You'd Like These…" is completely misaligned.** Six pairs of adult athletic sneakers — nothing for a 5-year-old girl, nothing for a 9-year-old boy. These are clearly not pulled from my browsing or purchase history. It feels like filler. I buy for my kids at least as often as I buy for myself and this section completely ignores that.
- **Subject line vs. actual content mismatch.** "More Skechers Plus Benefits are waiting" made me think I was unlocking something new. I'm not — I'm seeing a tier comparison. The actual hook should be my points balance and the $5 reward code.
- **The preview text is a disaster.** JSON-LD schema markup leaked into the preheader. That's the first thing I see in my inbox next to the subject line and it looks like spam or a broken email. Almost made me skip it.
- **Birthday section feels out of place.** I haven't told them my birthday (or if I did, it's not my birthday right now), so "Celebrate Your Birthday" with a blue-and-yellow cake illustration just reads as generic filler.
- **Too many nav links at the bottom.** Women, Men, Kids, Clothing, New Arrivals, Sale — this is a department store footer, not a loyalty email. It dilutes the one job this email should be doing: getting me to engage with my membership or redeem my reward.
- **No kids content whatsoever.** For a mom who shops primarily for her kids, this is a glaring miss.

## Recommendations

- 1. **Lead with the reward code above the fold.** "Martha, you have $5 waiting — use REDEM25 at checkout" is more compelling than a tier comparison. Tier education belongs below that hook.
- 2. **Pull real product recommendations** based on my purchase history. If I've bought kids' shoes before, show me kids' shoes — specifically light-up sneakers or velcro styles for a 5-year-old, durable lace-ups for a 9-year-old.
- 3. **Fix the preheader immediately.** The leaked JSON is a branding embarrassment and tanks open rates. Even a generic "Your Silver benefits + what Gold unlocks" would be 10x better.
- 4. **Trim the birthday section** or suppress it when it's not relevant to the current month. Alternatively, let me add my birthday in-email so it feels like a benefit, not a placeholder.
- 5. **Simplify the CTA structure.** One primary CTA ("Redeem Your $5") and one secondary ("See What Gold Unlocks"). Everything else is noise.
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | Empty `%%First Name%%` merge token | Add AMPscript fallback: `SET @fname = IIF(EMPTY(First_Name), "Plus Member", First_Name)` |
- | **P0** | Return Path pixel — no protocol | Change to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
- | **P1** | All image CDN URLs use HTTP | Update `image.emails.skechers.com` asset URLs to `https://` — or enforce HTTPS at the CDN level |
- | **P1** | Krux `campaignid` is 6 months stale | Update to current campaign ID or use a dynamic token |
- | **P2** | 3 images missing alt text | Add descriptive alt text to `49468f73...png`, `o.gif`, and `LiveContent.aspx` img |
- | **P2** | Raw subscriber ID in Krux beacon | Replace `partner_uid=122277199` with hashed value only; audit against privacy policy |
- | **P3** | `<meta>` charset missing `http-equiv` | Add `http-equiv="Content-Type"` attribute |
- | **P3** | Duplicate media query blocks | Deduplicate 375px/640px breakpoints to reduce payload size |

## Full review
---

## 1. Executive Summary

Okay so this one is actually about *me* — my Skechers Plus membership. They're telling me I'm a Silver member and nudging me toward Gold, showing the benefits side by side. I appreciated that framing. But the email quickly loses focus: it pivots into generic product recs, a birthday section (irrelevant right now), and a full department nav. For a loyalty email, it's trying to do too much and ends up feeling like a blast they threw my name on rather than something built for my situation.

---

## 2. Business Impact Score: **6/10**

The loyalty angle is genuinely useful but the product recommendations don't land for me, and the CTA hierarchy is a mess. Missed opportunity to actually drive me up to Gold.

---

## 3. What's Working

- **Silver vs. Gold tier comparison** is the strongest moment in the email. Seeing the two columns side by side — Achievement Gift, Memberversary Gift, Holiday Bonus on Silver vs. Double Points on Gold — immediately tells me what I'm leaving on the table. That's motivating.
- **Personalization at the top** — "Hi Martha" and showing my current points balance ("1000 — you have enough points for a $5 reward! Use code: REDEM25") is actually relevant and actionable. That's the kind of thing that makes me open my wallet.
- **Earn 10 Points per $1** reminder with a shoe example ("A pair of Skechers® Hands Free Slip-Ins® could earn you over 1000 Points") is concrete and easy to understand.
- **Shop Now** CTA after the points section is well placed.

---

## 4. What's Weak

- **"We Thought You'd Like These…" is completely misaligned.** Six pairs of adult athletic sneakers — nothing for a 5-year-old girl, nothing for a 9-year-old boy. These are clearly not pulled from my browsing or purchase history. It feels like filler. I buy for my kids at least as often as I buy for myself and this section completely ignores that.
- **Subject line vs. actual content mismatch.** "More Skechers Plus Benefits are waiting" made me think I was unlocking something new. I'm not — I'm seeing a tier comparison. The actual hook should be my points balance and the $5 reward code.
- **The preview text is a disaster.** JSON-LD schema markup leaked into the preheader. That's the first thing I see in my inbox next to the subject line and it looks like spam or a broken email. Almost made me skip it.
- **Birthday section feels out of place.** I haven't told them my birthday (or if I did, it's not my birthday right now), so "Celebrate Your Birthday" with a blue-and-yellow cake illustration just reads as generic filler.
- **Too many nav links at the bottom.** Women, Men, Kids, Clothing, New Arrivals, Sale — this is a department store footer, not a loyalty email. It dilutes the one job this email should be doing: getting me to engage with my membership or redeem my reward.
- **No kids content whatsoever.** For a mom who shops primarily for her kids, this is a glaring miss.

---

## 5. Recommendations

1. **Lead with the reward code above the fold.** "Martha, you have $5 waiting — use REDEM25 at checkout" is more compelling than a tier comparison. Tier education belongs below that hook.
2. **Pull real product recommendations** based on my purchase history. If I've bought kids' shoes before, show me kids' shoes — specifically light-up sneakers or velcro styles for a 5-year-old, durable lace-ups for a 9-year-old.
3. **Fix the preheader immediately.** The leaked JSON is a branding embarrassment and tanks open rates. Even a generic "Your Silver benefits + what Gold unlocks" would be 10x better.
4. **Trim the birthday section** or suppress it when it's not relevant to the current month. Alternatively, let me add my birthday in-email so it feels like a benefit, not a placeholder.
5. **Simplify the CTA structure.** One primary CTA ("Redeem Your $5") and one secondary ("See What Gold Unlocks"). Everything else is noise.

---

## 6. Bottom Line

I wouldn't delete this — the tier comparison and points balance info are genuinely useful. But I'd skim past most of it. The product recs feel random, the birthday section isn't for me right now, and the leaked JSON in the preview almost stopped me from opening it at all. The bones of a good loyalty email are here; the execution is half-baked.

---

## 7. Subject Line Analysis

- **Subject:** `More Skechers Plus Benefits are waiting`
- **Length:** 38 characters
- **Scores (1-10):** Clarity `6`, Curiosity `4`, Personalization `3`, Urgency `3`, Specificity `3`
- **Strengths:**
  - Clean, readable at a glance — no emoji clutter or gimmicks
  - References the loyalty program by name, which is relevant to members
- **Weaknesses:**
  - "Benefits are waiting" is vague — waiting for what? What benefits, specifically?
  - Zero urgency and no personalization — could be sent to any member at any time
- **Alt A:** `Martha, your $5 reward is ready — plus Gold perks you're missing`
- **Alt B:** `You're 500 points from Gold — here's what unlocks`

---

## 8. Preview Text Analysis

- **Preview:** `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/cf08f473-a0fa-46dd-b25d-e95a9abb53fb.png" },{ "@context":`
- **Length:** ~180+ characters of leaked JSON-LD markup
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None — there is no intentional preheader here)
- **Weaknesses:**
  - Structured data markup leaked directly into the visible preheader — looks like a broken or spam email from the inbox view
  - Completely destroys any chance of the subject line doing its job; first impression is "this email is broken"
- **Alt A:** `You have $5 to spend — plus see what Gold membership unlocks for you`
- **Alt B:** `Silver is good. Gold is better — see your benefits side by side`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** The subject line is mildly interesting to me as a loyalty member, but the leaked JSON in the preview text is alarming — on my phone it looks like a broken email or potential phishing. I probably hesitate and might skip it. The only reason I open it is because I recognize the SKECHERS sender and I know I have an account.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** Once I'm inside, the points balance and $5 reward code actually pull me toward a click — that's real money and I'm price-sensitive. But the product recs are off-base for my life, which cools my momentum. I'd probably click "View Your Dashboard" or "Shop Now" to redeem the reward, but I'd bounce quickly if the landing page doesn't surface kids' shoes.

---

## 11. Evidence

- **Overall purpose:** Skechers Plus membership education email — comparing Silver vs. Gold tiers and nudging the member to engage with their loyalty account.
- **Hero / primary value proposition:** Silver-vs-Gold tier comparison table, followed by a reminder of points-to-dollar conversion. The actual hero should be the $5 reward code surfaced at the very top — it's there but undersized.
- **Membership / benefits section:** The Silver/Gold columns are the strongest module. Silver shows: Achievement Gift (1 Skechers Shoe), Memberversary Gift (25% off + 500 Bonus Points), Holiday Bonus (300 Bonus Points). Gold adds Double Points. Clear and scannable — works well.
- **Product discoverability / recommendation modules:** "We Thought You'd Like These…" shows six adult sneaker styles (Slip-ins, sport, comfort). No kids' shoes. Names are partially visible (D'Lites, Sport Squad, Glide-Step, Arch Fit, etc.). Entirely off-target for my household shopping patterns.
- **Utility / secondary modules:** Earn Points reminder, Birthday section (birthday cake illustration, "Add Your Birthday" CTA), Shop Additional Styles nav (Women, Men, Kids, Clothing, New Arrivals, Sale), Download App / Curbside Pickup / Shop Now Pay Later (Afterpay, Klarna) / Find a Store, Follow Us (social icons).
- **Bugs / friction / clarity issues (visible):** The leaked JSON-LD schema in the preheader is the most visible issue — it shows up as raw code text in the inbox preview, which is jarring and looks broken before the email is even opened.

---

## Technical Audit

## Technical Audit — SKECHERS PLUS "More Benefits are waiting"

---

### 1. Technical Summary

One confirmed broken personalization token produces a malformed greeting, and all image assets are served over unencrypted HTTP despite being on a domain that supports HTTPS. The Return Path delivery-monitoring pixel has a bare hostname with no protocol, making it a broken relative URL.

---

### 2. Link & Tracking Issues

**Broken pixel — missing protocol:**
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
No `http://` or `https://` prefix. Email clients treat this as a relative path; the Return Path inbox-placement beacon never fires. This silently breaks delivery monitoring.

**26 click-tracking links unverifiable:** All CTAs route through `click.emails.skechers.com` redirects. Destination URLs and UTM integrity cannot be confirmed without following the redirects — flagged for manual spot-check.

**Stale campaign ID in Krux impression pixel:**
```
campaignid=TRG_US_EN_PLUSWELCOME_4_10312025
```
The `10312025` suffix encodes October 31, 2025. Sending in May 2026 means Krux audience attribution is mapping this send to a 6-month-old campaign bucket.

**Third-party data-sync pixels present:**
Two `beacon.krxd.net` user-match beacons sync subscriber identity to Krux/Oracle DMP. These should be verified against current data-sharing agreements, particularly under CCPA.

---

### 3. Rendering & Accessibility

**HTTP image sources (13 images blocked by modern mail clients):**

All assets on `image.emails.skechers.com` and one on `ink1000.com` use `http://`, not `https://`. Gmail, Outlook.com, and Apple Mail proxy or block non-HTTPS images:

| Asset | Protocol | Alt text |
|---|---|---|
| `dde00662...png` (Skechers logo) | HTTP | "Skechers" ✓ |
| `49468f73...png` | HTTP | **missing** |
| `0ec56c9f...png` (App Store) | HTTP | ✓ |
| `9bb508d0...png` (Google Play) | HTTP | ✓ |
| `00100b23...png` (Curbside) | HTTP | ✓ |
| `07cb60b5...png` (AfterPay) | HTTP | ✓ |
| `fc08601a...png` (Find A Store) | HTTP | ✓ |
| `b782e0aa...png` (Instagram) | HTTP | ✓ |
| `a5c4cae0...png` (Facebook) | HTTP | ✓ |
| `8c5738fc...png` (YouTube) | HTTP | ✓ |
| `o.gif` (ink1000 tracking) | HTTP | **missing** |
| `LiveContent.aspx` (SFMC live content) | HTTP | **missing** |

**`<meta>` charset tag malformed:**
```html
<meta content="text/html; charset=utf-8" />
```
Missing `http-equiv="Content-Type"`. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Most clients tolerate this, but it can cause character-encoding fallback in legacy Outlook.

**Duplicate responsive breakpoints:** The 375px and 640px media queries are declared twice with identical rules (once in the main `<style>` block and once without comment). Redundant but not harmful.

---

### 4. Personalization & Merge Tokens

**FAIL — Empty name merge token (broken greeting):**

The QA check confirms the greeting renders as `"Hi ,"` — the subscriber first-name token resolved to an empty string. The merge tag (likely `%%First Name%%` or equivalent SFMC AMPscript) either:
- is pulling from an unpopulated field, or
- lacks a fallback default (e.g., `"there"` or `"Plus Member"`)

This is the highest-severity issue in the send. It degrades personalization and signals to subscribers that data hygiene is poor.

---

### 5. Compliance

**CAN-SPAM / unsubscribe:** The full HTML is truncated; the footer unsubscribe block is not visible in the provided source. Cannot confirm presence of physical mailing address or one-click unsubscribe link. Flagged for manual verification.

**CCPA data-sync exposure:** The two Krux beacons pass hashed subscriber identifiers to a third-party DMP:
```
partner_uid=adf27fee67323d52536b18...  (SHA-256 hash)
partner_uid=122277199                   (raw subscriber ID)
```
Sharing a raw internal subscriber ID (`122277199`) alongside a hashed email to an external DMP should be reviewed against your current privacy policy disclosures.

**Authentication headers:** Not assessable from HTML source alone. Sender domain `emails.skechers.com` should have SPF, DKIM, and DMARC configured — verify via MX Toolbox or header inspection from a live received copy.

---

### 6. Email-to-Site Continuity

UTM parameter verification is blocked because all 26 CTA links route through `click.emails.skechers.com` redirects. Manual click-through of at least the primary CTA ("Shop Now" / loyalty benefits page) is required to confirm:
- UTM source/medium/campaign params are appended to the final destination URL
- The landing page reflects "Plus" tier messaging consistent with the email subject line
- Loyalty tier state is visible post-click for logged-in users (cookie/session continuity)

No direct destination URLs are available in the truncated source to audit.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | Empty `%%First Name%%` merge token | Add AMPscript fallback: `SET @fname = IIF(EMPTY(First_Name), "Plus Member", First_Name)` |
| **P0** | Return Path pixel — no protocol | Change to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
| **P1** | All image CDN URLs use HTTP | Update `image.emails.skechers.com` asset URLs to `https://` — or enforce HTTPS at the CDN level |
| **P1** | Krux `campaignid` is 6 months stale | Update to current campaign ID or use a dynamic token |
| **P2** | 3 images missing alt text | Add descriptive alt text to `49468f73...png`, `o.gif`, and `LiveContent.aspx` img |
| **P2** | Raw subscriber ID in Krux beacon | Replace `partner_uid=122277199` with hashed value only; audit against privacy policy |
| **P3** | `<meta>` charset missing `http-equiv` | Add `http-equiv="Content-Type"` attribute |
| **P3** | Duplicate media query blocks | Deduplicate 375px/640px breakpoints to reduce payload size |
## Recent history

- [[2026-05-02-summer-essentials-just-in-5fe20d42-5ce5-4202-9b6a-]] — 5/10 (2026-05-02)
- [[2026-05-01-your-skechers-plus-monthly-summary-is-here]] — 6/10 (2026-05-01)
- [[2026-05-01-just-dropped-your-beauty-refresh]] — 5/10 (2026-05-01)

