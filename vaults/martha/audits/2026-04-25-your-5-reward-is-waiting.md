---
slug: 2026-04-25-your-5-reward-is-waiting
type: email
date: 2026-04-25
persona: martha
score: "6/10"
sender: SKECHERS PLUS
subject: Your $5 reward is waiting!
tags: [email, score-6, sender/skechers-plus]
---
# Your $5 reward is waiting!
**Score:** 6/10 · **Type:** Email audit · **2026-04-25**
## Executive summary

- Okay, this one actually got my attention — not because of what's in the email itself, but because of what it's *about*. A $5 reward notification is exactly the kind of email I open. It's my money. I earned it. Skechers even put my name at the top, which I appreciated. But once I'm inside, the email does almost nothing with the goodwill it just created. The redemption instructions are fine but the "inspiration" section shows three pairs of adult women's sneakers that I was not shopping for. My kids are the reason I have this many points. Not a single children's shoe in sight. I'd click Redeem Now and then bounce — there's nothing here pulling me deeper into the site.
- The transactional hook is strong enough to drive a redemption click from me. But the upsell opportunity is completely wasted. A mom who's been buying kids' shoes and racking up points is right here — and they served her grown-up sneakers she didn't ask for. This email does its job (notifying me), but leaves real revenue on the table.

## What's working

- **Personal greeting with membership tier.** "Hi Martha, Member" at the very top — I notice that. It doesn't feel like mass blast spam. Small thing, huge difference.
- **Reward amount is front and center.** "$5 REWARD" in the hero is big, bold, and clear. No hunting for the number. I know exactly what I have.
- **Two redemption paths are explained clearly.** Online vs. In Store, with separate CTAs for each. That's genuinely useful — I shop both ways.
- **"REDEEM NOW" appears multiple times.** As a mom reading this on my phone between breakfast dishes, I don't want to scroll to find the button. It's right there.
- **Skechers Plus perks reminder** at the bottom — free shipping and returns. Relevant to me every time.

## What's weak

- **The "inspiration" section is completely off-target for me.** Three adult women's slip-ons. I've been buying sneakers for a kindergartner and a 4th-grader. If you know I'm a loyalty member named Martha, you also know what I've been ordering. Show me the next pair of light-up shoes my daughter will lose her mind over. Show me the sporty lace-ups my son will actually want to wear to school.
- **No kids category is featured prominently.** KIDS is buried in a text-link list at the bottom with WOMEN, MEN, CLOTHING, etc. It's not even bolded differently. That's the category driving my purchases and it gets the same visual weight as SALE.
- **The reward redemption flow feels slightly clunky.** The email tells me to go to my loyalty dashboard, tap "Redeem," then use the reward. That's three steps before I've even gotten to the shoe I want. I'm going to hit "REDEEM NOW" and hope the app makes it obvious.
- **No urgency on the reward.** Does this $5 expire? When? I don't see a date. As a rewards program shopper, I know these things expire and I'm trained to look for that information. Its absence makes me uneasy rather than relaxed.

## Recommendations

- 1. **Swap the inspiration product tiles for kids' picks** — or at minimum add a kids' row below the adult row. A mom who earned these points buying kids' shoes does not want to see adult slip-ons as her upsell.
- 2. **Add a reward expiration date** (or a clear "no expiration" line). Uncertainty doesn't build trust — it just makes me open a second browser tab to check.
- 3. **Promote KIDS higher in the navigation block.** Right now it's fifth in a six-item text list. Make it second, or give it its own visual row if kids' purchases make up a meaningful slice of this member's history.
- 4. **Add one line of personalized copy below the CONGRATS banner** — something like "You've earned these points shopping for your family. Here's what's new for them." That would make me feel seen in a way that "REDEEM NOW" alone does not.
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | Empty greeting name | Add a merge-tag fallback: `%%=IF(EMPTY(FirstName), "Skechers Plus member", FirstName)=%%` |
- | **P0** | Return Path pixel broken URL | Prepend `https://` to `pixel.app.returnpath.net/...` |
- | **P1** | 15 HTTP image URLs | Update `image.emails.skechers.com` asset references to `https://` — this is a single hostname change, likely a template-level fix |
- | **P1** | ink1000 open pixel over HTTP | Confirm with vendor whether HTTPS endpoint is available; swap or remove |
- | **P2** | Missing alt text on product rec images | iGoDigital recommendation blocks should inject product name as alt text; contact integration owner |
- | **P2** | UTM verification | Manually follow "Redeem Now" CTA and confirm `utm_source=email&utm_medium=loyalty&utm_campaign=TRG_US_EN_REWARDAVAIL_1_04012026` (or equivalent) is present on landing page |
- | **P3** | Malformed `<meta>` tags | Add `http-equiv` attributes to both charset and IE-compat meta tags |

## Full review
---

## Email Review — Martha Stroll, 34, Mom of Two

---

### 1. Executive Summary

Okay, this one actually got my attention — not because of what's in the email itself, but because of what it's *about*. A $5 reward notification is exactly the kind of email I open. It's my money. I earned it. Skechers even put my name at the top, which I appreciated. But once I'm inside, the email does almost nothing with the goodwill it just created. The redemption instructions are fine but the "inspiration" section shows three pairs of adult women's sneakers that I was not shopping for. My kids are the reason I have this many points. Not a single children's shoe in sight. I'd click Redeem Now and then bounce — there's nothing here pulling me deeper into the site.

---

### 2. Business Impact Score: **6/10**

The transactional hook is strong enough to drive a redemption click from me. But the upsell opportunity is completely wasted. A mom who's been buying kids' shoes and racking up points is right here — and they served her grown-up sneakers she didn't ask for. This email does its job (notifying me), but leaves real revenue on the table.

---

### 3. What's Working

- **Personal greeting with membership tier.** "Hi Martha, Member" at the very top — I notice that. It doesn't feel like mass blast spam. Small thing, huge difference.
- **Reward amount is front and center.** "$5 REWARD" in the hero is big, bold, and clear. No hunting for the number. I know exactly what I have.
- **Two redemption paths are explained clearly.** Online vs. In Store, with separate CTAs for each. That's genuinely useful — I shop both ways.
- **"REDEEM NOW" appears multiple times.** As a mom reading this on my phone between breakfast dishes, I don't want to scroll to find the button. It's right there.
- **Skechers Plus perks reminder** at the bottom — free shipping and returns. Relevant to me every time.

---

### 4. What's Weak

- **The "inspiration" section is completely off-target for me.** Three adult women's slip-ons. I've been buying sneakers for a kindergartner and a 4th-grader. If you know I'm a loyalty member named Martha, you also know what I've been ordering. Show me the next pair of light-up shoes my daughter will lose her mind over. Show me the sporty lace-ups my son will actually want to wear to school.
- **No kids category is featured prominently.** KIDS is buried in a text-link list at the bottom with WOMEN, MEN, CLOTHING, etc. It's not even bolded differently. That's the category driving my purchases and it gets the same visual weight as SALE.
- **The reward redemption flow feels slightly clunky.** The email tells me to go to my loyalty dashboard, tap "Redeem," then use the reward. That's three steps before I've even gotten to the shoe I want. I'm going to hit "REDEEM NOW" and hope the app makes it obvious.
- **No urgency on the reward.** Does this $5 expire? When? I don't see a date. As a rewards program shopper, I know these things expire and I'm trained to look for that information. Its absence makes me uneasy rather than relaxed.

---

### 5. Recommendations

1. **Swap the inspiration product tiles for kids' picks** — or at minimum add a kids' row below the adult row. A mom who earned these points buying kids' shoes does not want to see adult slip-ons as her upsell.
2. **Add a reward expiration date** (or a clear "no expiration" line). Uncertainty doesn't build trust — it just makes me open a second browser tab to check.
3. **Promote KIDS higher in the navigation block.** Right now it's fifth in a six-item text list. Make it second, or give it its own visual row if kids' purchases make up a meaningful slice of this member's history.
4. **Add one line of personalized copy below the CONGRATS banner** — something like "You've earned these points shopping for your family. Here's what's new for them." That would make me feel seen in a way that "REDEEM NOW" alone does not.

---

### 6. Bottom Line

I'd open this, hit "REDEEM NOW," and leave. The reward notification does its job. Everything after the CTA is a missed opportunity. Skechers knows who I am — they're just not using that to sell me anything relevant. For a brand that could be my go-to for two growing kids, this is a B- transaction email trying to be a C+ marketing email.

---

### 7. Subject Line Analysis

- **Subject:** `Your $5 reward is waiting!`
- **Length:** 26 characters
- **Scores (1-10):** Clarity `9`, Curiosity `5`, Personalization `6`, Urgency `6`, Specificity `8`
- **Strengths:**
  - Extremely clear — I know exactly what I'm getting before I open it
  - The dollar amount does the work; no vague "something special awaits"
- **Weaknesses:**
  - "Is waiting" is mild; doesn't push me to act *now* vs. later
  - No personalization token — "Martha, your $5 reward is waiting!" would feel more direct
- **Alt A:** `Martha, your $5 reward expires soon — redeem it today`
- **Alt B:** `You earned it: $5 reward ready to use at Skechers`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the inbox is showing raw JSON-LD schema markup instead of a real preheader
- **Length:** N/A (structured data blob, not human-readable text)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None — this is a technical failure, not a strategic choice
- **Weaknesses:**
  - A subscriber who sees schema code next to the subject line gets a weird, broken first impression before they even open
  - All the lift the subject line could get from a preheader is completely lost
- **Alt A:** `Redeem at checkout online or in-store — no expiration stress.`
- **Alt B:** `Head to your rewards dashboard to apply it before you shop.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `8/10`
- **Rationale:** "$5 reward is waiting" hits me exactly where I live — I track my Skechers points because the kids go through shoes fast and every discount counts. The subject line is unambiguous enough that I'm not second-guessing whether this is spam. I open it.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** I click "REDEEM NOW" because I want to bank the reward before I forget — but I don't browse further because the product recommendation block doesn't show me anything for my kids, which is 80% of why I'm on Skechers.com in the first place. Transactional click: yes. Discovery click: no.

---

### 11. Evidence

- **Overall purpose:** Loyalty reward notification — inform me that I've accumulated enough points to unlock a $5 reward and drive me to redeem it online or in-store.
- **Hero / primary value proposition:** Dark teal banner, large bold "YOU'VE REACHED A $5 REWARD!" — prominent, well-executed, no ambiguity about the offer.
- **Membership / benefits section:** Brief personalized header ("Hi Martha, Member") above the hero. Skechers Plus free shipping and returns callout at the footer. Both are present but thin — no tier details, no point balance shown.
- **Product discoverability / recommendation modules:** "NEED INSPIRATION?" block with three product tiles — Skechers Slip-ins adult women's styles. Completely adult-focused. No kids' products despite this being a family-heavy shopper.
- **Utility / secondary modules:** App download (App Store + Google Play), Curbside Pickup, Buy Now Pay Later (Afterpay + Klarna), Find A Store, Text opt-in (SKECHERS to 83526). Standard utility footer — present and readable.
- **Bugs / friction / clarity issues:**
  - Preview text is rendering raw JSON-LD schema markup in the inbox — this is the most visible issue and affects first impressions before the email is even opened.
  - No reward expiration date is visible anywhere in the email body.
  - Navigation category list (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE) is plain text with no visual differentiation — easy to skim past entirely.

---

## Technical Audit

## Technical Audit — Skechers Plus "Your $5 reward is waiting"

---

### 1. Technical Summary

The email has one broken personalization token (empty name field), a Validity/Return Path tracking pixel with a malformed URL, and a systemic HTTP image-serving issue affecting 15 assets that will be blocked or proxied by Gmail and other modern clients. Authentication header visibility is incomplete due to relay handling.

---

### 2. Link & Tracking Issues

**[FAIL] Return Path pixel missing protocol**
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
No `https://` prefix. Email clients treat this as a relative path, silently breaking the inbox placement signal.

**[WARN] Third-party open pixel served over HTTP**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8108404282&mi_ecmp=..."
```
Non-HTTPS origin; Gmail and Apple Mail will block or proxy-rewrite this pixel, corrupting open-rate attribution for this sender.

**[INFO] 26 click links not probed**
All CTAs route through `click.emails.skechers.com` redirects — UTM parameter presence and destination URL health unverified. No broken links confirmed, but no confirmation either.

---

### 3. Rendering & Accessibility

**[WARN] 15 content images served over HTTP**
All assets under `image.emails.skechers.com` use `http://`. Gmail proxies HTTP images through its own CDN, which can corrupt image URLs or trigger "images blocked" warnings. Affected includes core UI assets:
- Skechers logo: `http://image.emails.skechers.com/.../dde00662-....png`
- Skechers Plus badge: `http://image.emails.skechers.com/.../cf11553b-....png`
- "Redeem Now" CTA image: `http://image.emails.skechers.com/.../bb17d15b-....jpg`
- All social and footer icons (Instagram, Twitter, Facebook, Pinterest, YouTube)
- App store badges (iOS, Android)

**[WARN] 5 images missing alt text**
- `o.gif` (ink1000 open tracker) — acceptable for a pixel, but formally non-compliant
- `f593e748-9289-4351-9a49-0e7158ebeee0.jpg` — unidentified content image, likely product photo
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unidentified footer asset
- Two iGoDigital product recommendation images (`/rr/v2/.../i/2/` and `/rr/v2/.../i/3/`) — personalized product images with no alt text degrades screen reader experience

**[WARN] Malformed meta tags**
Both `<meta>` tags in `<head>` are missing the `http-equiv` attribute:
```html
<meta content="text/html; charset=utf-8" />            <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                              <!-- missing http-equiv="X-UA-Compatible" -->
```
Low severity in modern clients but formally invalid and may cause charset misdetection in older Outlook builds.

**[INFO] Duplicate responsive style blocks**
Two `<style>` blocks define overlapping rules for `.mobile-hidden` and `.show` — one targets `max-width: 480px`, the other `max-width: 640px`. Redundant but not harmful in practice.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty greeting name — broken subscriber record**
QA detected `"Hi ,"` — the first-name merge token resolved to an empty string. This indicates either a null/empty `%%FirstName%%` value in the subscriber record or a failed template substitution. No fallback default (e.g., `"Hi, Skechers Plus member"`) is in place.

No other unresolved tokens detected in the truncated HTML.

---

### 5. Compliance

**[WARN] Authentication-Results header not captured**
SPF and DKIM pass/fail status is unknown — the email passed through the AgentMail relay without forwarding the original `Authentication-Results` header. Actual authentication cannot be confirmed from this capture. The sending domain `emails.skechers.com` is a dedicated ESP subdomain which typically has SPF/DKIM configured, but this specific send could not be verified.

**[INFO] CAN-SPAM structural elements**
Physical mailing address and unsubscribe mechanism are expected in the footer (HTML truncated at body — not confirmed present, not confirmed absent). QA overall pass rate of 67% with only 1 hard failure suggests footer compliance items likely passed automated checks.

---

### 6. Email-to-Site Continuity

All 26 CTAs are wrapped in `click.emails.skechers.com` click-tracking redirects — destination URLs and UTM parameter coverage cannot be confirmed without following redirects. The campaign identifier `TRG_US_EN_REWARDAVAIL_1_04012026` appears consistently across three tracking beacons (Krxd impression pixel, Krxd user-match pixel, ink1000 pixel), indicating campaign tagging is at least internally consistent at the ESP layer.

UTM parameter presence on destination URLs (e.g., `utm_campaign`, `utm_medium`, `utm_source`) is **unverified** — this should be spot-checked manually on the "Redeem Now" and primary CTA links.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | Empty greeting name | Add a merge-tag fallback: `%%=IF(EMPTY(FirstName), "Skechers Plus member", FirstName)=%%` |
| **P0** | Return Path pixel broken URL | Prepend `https://` to `pixel.app.returnpath.net/...` |
| **P1** | 15 HTTP image URLs | Update `image.emails.skechers.com` asset references to `https://` — this is a single hostname change, likely a template-level fix |
| **P1** | ink1000 open pixel over HTTP | Confirm with vendor whether HTTPS endpoint is available; swap or remove |
| **P2** | Missing alt text on product rec images | iGoDigital recommendation blocks should inject product name as alt text; contact integration owner |
| **P2** | UTM verification | Manually follow "Redeem Now" CTA and confirm `utm_source=email&utm_medium=loyalty&utm_campaign=TRG_US_EN_REWARDAVAIL_1_04012026` (or equivalent) is present on landing page |
| **P3** | Malformed `<meta>` tags | Add `http-equiv` attributes to both charset and IE-compat meta tags |
## Recent history

- [[2026-04-24-thanks-for-completing-your-skechers-plus-account]] — 6/10 (2026-04-24)
- [[2026-04-23-tokenrip-pre-provisioned-account-for-martha]] — 1/10 (2026-04-23)
- [[2026-04-19-where-the-road-ends-adventure-begins-e5076c2c-333e-4658-b7be-]] — 5/10 (2026-04-19)

