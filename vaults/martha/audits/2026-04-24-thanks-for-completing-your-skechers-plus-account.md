---
slug: 2026-04-24-thanks-for-completing-your-skechers-plus-account
type: email
date: 2026-04-24
persona: martha
score: "6/10"
sender: SKECHERS PLUS
subject: Thanks for completing your Skechers Plus account
tags: [email, score-6, sender/skechers-plus]
---
# Thanks for completing your Skechers Plus account
**Score:** 6/10 · **Type:** Email audit · **2026-04-24**
## Executive summary

- **As Martha Stroll, 34, mom of two, mobile-first shopper**
- This is a transactional welcome email that's trying to double as a promotional push — and it mostly pulls it off. The 1,000 bonus points hook is strong and immediately rewarding. But as a mom shopping for two kids and maybe herself, I felt kind of invisible by section two. The product recommendations are adult shoes, the "KIDS" link is buried at the bottom nav, and nobody acknowledged that I just joined a rewards program that I'll probably use heavily for family purchases. It's a decent welcome; it just doesn't know who I am yet.
- Solid mechanics, missed personalization opportunity. The bonus points will drive a return visit, but the product carousel won't convert me today.

## What's working

- **1,000 bonus points = $5 reward** is front and center and crystal clear. I love this. As a rewards-program loyalist, this is the hook that makes me feel like signing up was worth it. It's stated plainly — no fine print games in the hero.
- **Benefits grid** (Free Shipping & Returns, Birthday Rewards, Premier Offers, Extended 90-Day Returns) is exactly what I want to see in a welcome email. Tells me what I'm actually getting.
- **"Redeem Now" CTA** is prominent and well-placed right under the points offer.
- **In-store 10% off offer** — I actually appreciate that this exists because I do occasionally take the kids shoe shopping in person. Smart to surface it here.
- The overall layout is clean and readable at mobile size. No zooming required.

## What's weak

- **Product carousel doesn't match me at all.** Six shoes shown — all adult women's or men's styles. I'm shopping for a 5-year-old and a 9-year-old. Not a single kids' shoe in sight. If Skechers had any signal that I'm a mom (which they likely do from my purchase history or stated preferences during sign-up), this is a wasted module.
- **"We Think You'll Like These…" header is doing the heavy lifting and failing.** Nothing in that row says "curated for Martha." It's clearly a generic product block.
- **Kids section is a text link buried in the bottom nav.** That's where my actual buying intent lives right now, and it's an afterthought.
- **"Shop Women's" and "Shop Men's" buttons skip "Shop Kids."** Two CTA buttons and neither routes me toward my primary shopping mission. That's a miss.
- **The texting opt-in ("Let's Get Texting")** — fine, but I don't want another alert channel I didn't ask for. A welcome email isn't the moment.
- **In-store exclusive section** feels like it belongs in a separate email. It's not urgent to me online right now and it dilutes the flow.
- **Fine print block at the bottom is visually heavy** — lots of gray text, and while I appreciate transparency about point limits, it crowds the footer badly.

## Recommendations

- 1. **Add a "Shop Kids" CTA button** alongside Shop Women's and Shop Men's — or prioritize it higher if behavior data suggests family shoppers are a significant segment.
- 2. **Swap at least 2–3 carousel slots for kids' shoes** — velcro sneakers, light-ups, something for boys and girls. Even one row of kids' picks would have made me feel seen.
- 3. **Personalize the product section header** — even "Styles We're Loving Right Now" is better than "We Think You'll Like These," which promises curation and delivers generic.
- 4. **Move the in-store offer below the fold** or break it into its own follow-up email. Keep this welcome email focused on the points reward and getting me to shop now.
- 5. **Add a Family Bundles or "Shop for Everyone" section.** Moms buying across multiple family members are high-AOV customers — lean into it.
- | Priority | Item |
- |---|---|
- | **Critical** | Add plain-text version — minimum 200 chars mirroring key body content |
- | **Critical** | Fix Return Path pixel: prepend `https://` to `pixel.app.returnpath.net/pixel.gif` |
- | **High** | Migrate all `http://image.emails.skechers.com` and `http://www.ink1000.com` src attributes to `https://` |
- | **High** | Audit `partner_uid=122277199` and `mi_u=8108404282` — confirm these are ESP merge tokens, not hardcoded literals |
- | **High** | Verify DMARC/SPF/DKIM alignment on `emails.skechers.com` via `dig TXT _dmarc.emails.skechers.com` |
- | **Medium** | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to orphaned `<meta content="...">` tags |
- | **Medium** | Replace `* { -webkit-text-size-adjust: none }` with a scoped rule on the body wrapper only |
- | **Medium** | Add `alt` attributes to the three confirmed missing-alt images |
- | **Low** | Confirm campaign ID `TRG_US_EN_PLUSWELCOME_1_10312025` is intentional for this send date or update to current campaign slug |
- | **Low** | Consolidate duplicate social icon blocks — load one set and rely on CSS to show/hide, eliminating double HTTP requests |

## Full review
---

## Email Review: Skechers Plus Account Completion

**As Martha Stroll, 34, mom of two, mobile-first shopper**

---

### 1. Executive Summary

This is a transactional welcome email that's trying to double as a promotional push — and it mostly pulls it off. The 1,000 bonus points hook is strong and immediately rewarding. But as a mom shopping for two kids and maybe herself, I felt kind of invisible by section two. The product recommendations are adult shoes, the "KIDS" link is buried at the bottom nav, and nobody acknowledged that I just joined a rewards program that I'll probably use heavily for family purchases. It's a decent welcome; it just doesn't know who I am yet.

---

### 2. Business Impact Score: **6/10**

Solid mechanics, missed personalization opportunity. The bonus points will drive a return visit, but the product carousel won't convert me today.

---

### 3. What's Working

- **1,000 bonus points = $5 reward** is front and center and crystal clear. I love this. As a rewards-program loyalist, this is the hook that makes me feel like signing up was worth it. It's stated plainly — no fine print games in the hero.
- **Benefits grid** (Free Shipping & Returns, Birthday Rewards, Premier Offers, Extended 90-Day Returns) is exactly what I want to see in a welcome email. Tells me what I'm actually getting.
- **"Redeem Now" CTA** is prominent and well-placed right under the points offer.
- **In-store 10% off offer** — I actually appreciate that this exists because I do occasionally take the kids shoe shopping in person. Smart to surface it here.
- The overall layout is clean and readable at mobile size. No zooming required.

---

### 4. What's Weak

- **Product carousel doesn't match me at all.** Six shoes shown — all adult women's or men's styles. I'm shopping for a 5-year-old and a 9-year-old. Not a single kids' shoe in sight. If Skechers had any signal that I'm a mom (which they likely do from my purchase history or stated preferences during sign-up), this is a wasted module.
- **"We Think You'll Like These…" header is doing the heavy lifting and failing.** Nothing in that row says "curated for Martha." It's clearly a generic product block.
- **Kids section is a text link buried in the bottom nav.** That's where my actual buying intent lives right now, and it's an afterthought.
- **"Shop Women's" and "Shop Men's" buttons skip "Shop Kids."** Two CTA buttons and neither routes me toward my primary shopping mission. That's a miss.
- **The texting opt-in ("Let's Get Texting")** — fine, but I don't want another alert channel I didn't ask for. A welcome email isn't the moment.
- **In-store exclusive section** feels like it belongs in a separate email. It's not urgent to me online right now and it dilutes the flow.
- **Fine print block at the bottom is visually heavy** — lots of gray text, and while I appreciate transparency about point limits, it crowds the footer badly.

---

### 5. Recommendations

1. **Add a "Shop Kids" CTA button** alongside Shop Women's and Shop Men's — or prioritize it higher if behavior data suggests family shoppers are a significant segment.
2. **Swap at least 2–3 carousel slots for kids' shoes** — velcro sneakers, light-ups, something for boys and girls. Even one row of kids' picks would have made me feel seen.
3. **Personalize the product section header** — even "Styles We're Loving Right Now" is better than "We Think You'll Like These," which promises curation and delivers generic.
4. **Move the in-store offer below the fold** or break it into its own follow-up email. Keep this welcome email focused on the points reward and getting me to shop now.
5. **Add a Family Bundles or "Shop for Everyone" section.** Moms buying across multiple family members are high-AOV customers — lean into it.

---

### 6. Bottom Line

I appreciated the clear points reward and the clean layout, but the product content was for someone else. The welcome email treated me like a stranger who wears women's sneakers — not like a mom who just enrolled in a rewards program she'll use for her whole family. I'll click "Redeem Now" for the points, probably land on the homepage, then navigate to kids on my own. The email didn't help me get there. Mid-tier welcome experience: functional, not memorable.

---

### 7. Subject Line Analysis

- **Subject:** `Thanks for completing your Skechers Plus account`
- **Length:** 50 characters
- **Scores (1-10):** Clarity `8`, Curiosity `3`, Personalization `4`, Urgency `2`, Specificity `6`
- **Strengths:**
  - Immediately confirms the action I took — no confusion about what this email is
  - "Skechers Plus" brand name is present; I know this is my rewards program
- **Weaknesses:**
  - Zero incentive in the subject — I don't know about the 1,000 points until I open it, which is a missed tease
  - "Completing your account" sounds like admin, not a reward — it doesn't make me excited to open
- **Alt A:** `Your 1,000 bonus points are waiting — welcome to Skechers Plus`
- **Alt B:** `Welcome to Skechers Plus! Here's your $5 reward to start`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — no meaningful preheader visible; likely defaulting to alt text or nav content
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (none to note)
- **Weaknesses:**
  - The 1,000-point reward — the single most compelling element of this email — is completely absent from the preview text, wasting prime inbox real estate
  - Missing preheader means the subject line has to work alone, and it's not strong enough to
- **Alt A:** `You've earned 1,000 bonus points — that's $5 toward your next pair.`
- **Alt B:** `Free shipping, birthday rewards, 90-day returns — and 1,000 points on us. Welcome!`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** I recognize the Skechers Plus name so I know this is tied to my account — that gets a passive open. But "Thanks for completing your account" reads like a confirmation email, not something exciting. If I'm in weekend scroll mode, I probably open it out of mild obligation, not genuine interest. The missing preheader doesn't help pull me in.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** Once I'm inside, the 1,000 bonus points are a real hook and "Redeem Now" will get my thumb — but I'll likely bounce when I land somewhere generic. The product carousel doesn't show me anything for my kids, so I'm not clicking those shoes. I'd rate my chance of clicking through to an actual purchase at low; this is more of a "I'll come back later" email for me.

---

### 11. Evidence

- **Overall purpose:** Transactional welcome email confirming Skechers Plus enrollment, with promotional layering (bonus points, product discovery, in-store offer)
- **Hero / primary value proposition:** 1,000 bonus points = $5 reward, with a "Redeem Now" CTA — clear, prominent, well-executed
- **Membership / benefits section:** Four-tile grid — Free Shipping & Returns, Birthday Rewards, Premier Offers, Extended 90-Day Returns — with a "Shop Now" button; well-designed and scannable
- **Product discoverability / recommendation modules:** Six-shoe carousel labeled "We Think You'll Like These" — all adult styles (women's and men's), no kids; two CTA buttons for Women's and Men's only; no kids routing at this level
- **Utility / secondary modules:** In-store Exclusive 10% off block with "Find Your Store" CTA; text opt-in module; bottom navigation links (Women, Men, Kids, Clothing, New Arrivals, Sale); app download, curbside pickup, AfterPay/Klarna pay-later, and store finder icons
- **Bugs / friction / clarity issues:** No visible broken images or overlapping text. The fine print block at the footer is dense and small but not illegible. The "IN-STORE EXCLUSIVE" label renders clearly. No visible merge token failures or missing content placeholders detected in the render.

---

## Technical Audit

## Technical Audit — Skechers Plus Welcome Email

**From:** `no-reply@emails.skechers.com` | **Subject:** Thanks for completing your Skechers Plus account

---

### 1. Technical Summary

The email has a critical plain-text omission and a systemic HTTP/HTTPS mismatch affecting 15+ image assets. Several tracking pixel parameters appear hardcoded rather than merge-token-driven, which would corrupt identity resolution in the ESP and DMP layers.

---

### 2. Link & Tracking Issues

**Hardcoded subscriber IDs in tracking pixels — high severity**

Three third-party pixels carry what appear to be static subscriber identifiers rather than merge tokens:

- `beacon.krxd.net` — `partner_uid=122277199` (Krux/Salesforce DMP subid pixel)
- `http://www.ink1000.com/...` — `mi_u=8108404282`
- A second Krux beacon passes `partner_uid=adf27fee67323d52536b18110294bf793c265b830082caba4b1a32664832189a` (SHA-256 hash — likely correct for hashed-email matching, but verify it's dynamically substituted)

If `partner_uid=122277199` and `mi_u=8108404282` are literals in the template, every recipient sends the same ID to Krux and ink1000, collapsing identity resolution to a single user.

**Stale campaign ID**

`campaignid=TRG_US_EN_PLUSWELCOME_1_10312025` appears in both Krux pixels. The suffix `10312025` encodes October 31, 2025 — roughly six months before today's send date (2026-04-24). Confirm this is intentional (evergreen campaign reuse) vs. a template that wasn't updated for the current run.

**Return Path pixel — missing protocol**

```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0...">
```

No `http://` or `https://` prefix. This is a broken URL; the pixel will not fire, defeating inbox-placement monitoring.

**25 click-redirect links unverifiable** — QA correctly skipped probing `click.emails.skechers.com` redirects; UTM parameters on destination pages cannot be confirmed from this source.

---

### 3. Rendering & Accessibility

**HTTP image sources — systemic**

15 images are served over plain HTTP, including the Skechers logo and all footer assets:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/*.png           (14 footer images)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif                               (tracking pixel)
http://cl.S10.exct.net/LiveContent.aspx?qs=...                                   (dynamic content image)
```

Gmail, Outlook.com, and Apple Mail proxy all external images through HTTPS; non-HTTPS sources are either blocked or rewritten, breaking display. The logo will fail to render in any client that enforces mixed-content blocking.

**Missing alt text — three confirmed images**

| Asset | Evidence |
|---|---|
| `o.gif` (ink1000 pixel) | QA WARN — `alt=""` absent |
| `49468f73-4651-4af3-bea2-61d1ae5db486.png` | QA WARN — no alt attribute |
| `LiveContent.aspx` (dynamic image) | QA WARN — no alt attribute |

Social/app-store images carry alt text but duplicate across mobile and desktop sections (Instagram, Facebook, YouTube icons appear twice in QA output), indicating two parallel footer blocks both loaded unconditionally before CSS hides one — doubles download weight and screen-reader traversal.

**Malformed meta tags**

```html
<meta content="text/html; charset=utf-8" />          <!-- missing http-equiv -->
<meta content="IE=Edge" />                            <!-- missing http-equiv -->
```

Both tags omit `http-equiv`. Without it, charset declaration and IE compatibility mode targeting are silently ignored.

**Text scaling suppressed**

```css
* { -webkit-text-size-adjust: none; }
```

Applied universally (not scoped to a wrapper). This blocks OS-level text scaling for users with low vision on iOS/macOS. WCAG 1.4.4 failure risk.

---

### 4. Personalization & Merge Tokens

The preheader references a `$5 reward` as a hardcoded string — confirm this is correct for all recipients and not a conditional offer that should be token-driven.

The `$5` value and any reward expiry date visible in the email body (not shown in truncated source) should be verified as merge fields rather than literals if reward amounts vary by segment.

No unresolved/broken merge tokens (`%%`, `{{`, `[%`) visible in the truncated source.

---

### 5. Compliance

**Plain-text fallback — FAIL (critical)**

QA confirmed: `Text version is 0 chars`. CAN-SPAM does not mandate plain-text, but a zero-length plaintext part triggers aggressive spam filters (SpamAssassin `MIME_HTML_ONLY` penalty) and fails accessibility requirements for screen-reader-only environments. This is the single highest-risk finding.

**Authentication — unknown**

`Authentication-Results` header not captured via AgentMail relay; SPF/DKIM pass/fail status cannot be confirmed from available data. The sending domain `emails.skechers.com` should be verified for DMARC alignment (`p=` policy and alignment mode).

**Physical address / unsubscribe** — HTML is truncated; these elements cannot be confirmed present, but standard Skechers templates include them. Verify in full source that both appear above the `</body>` close.

---

### 6. Email-to-Site Continuity

Cannot verify UTM parameters on 25 redirected click links. The campaign ID `TRG_US_EN_PLUSWELCOME_1_10312025` in pixel payloads does not match a 2026-04-24 send date — if this ID is used as the UTM campaign value on landing pages, attribution in GA4/Adobe will be misrouted to the October 2025 campaign bucket.

---

### 7. Recommendations

| Priority | Item |
|---|---|
| **Critical** | Add plain-text version — minimum 200 chars mirroring key body content |
| **Critical** | Fix Return Path pixel: prepend `https://` to `pixel.app.returnpath.net/pixel.gif` |
| **High** | Migrate all `http://image.emails.skechers.com` and `http://www.ink1000.com` src attributes to `https://` |
| **High** | Audit `partner_uid=122277199` and `mi_u=8108404282` — confirm these are ESP merge tokens, not hardcoded literals |
| **High** | Verify DMARC/SPF/DKIM alignment on `emails.skechers.com` via `dig TXT _dmarc.emails.skechers.com` |
| **Medium** | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to orphaned `<meta content="...">` tags |
| **Medium** | Replace `* { -webkit-text-size-adjust: none }` with a scoped rule on the body wrapper only |
| **Medium** | Add `alt` attributes to the three confirmed missing-alt images |
| **Low** | Confirm campaign ID `TRG_US_EN_PLUSWELCOME_1_10312025` is intentional for this send date or update to current campaign slug |
| **Low** | Consolidate duplicate social icon blocks — load one set and rely on CSS to show/hide, eliminating double HTTP requests |
## Recent history

- [[2026-04-23-tokenrip-pre-provisioned-account-for-martha]] — 1/10 (2026-04-23)
- [[2026-04-19-where-the-road-ends-adventure-begins-e5076c2c-333e-4658-b7be-]] — 5/10 (2026-04-19)
- [[2026-04-18-last-call-to-use-your-20-off-welcome-offer]] — 6/10 (2026-04-18)

