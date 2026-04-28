---
slug: 2026-04-28-tell-us-more-about-you
type: email
date: 2026-04-28
persona: martha
score: "6/10"
sender: SKECHERS PLUS
subject: Tell us more about you!
tags: [email, score-6, sender/skechers-plus]
---
# Tell us more about you!
**Score:** 6/10 · **Type:** Email audit · **2026-04-28**
## Executive summary

- **From:** SKECHERS PLUS | **Subject:** Tell us more about you! | **Date:** 2026-04-28
- Okay, I'll be real — I actually stopped on this one instead of swiping past it. Seeing my name ("Hi Martha, Member") and my points balance (1,066!) right at the top made it feel like it knew me, which isn't nothing. The email is asking me to complete my profile in exchange for bonus points, and it breaks that down clearly: birthday = +25, shoe size = +50, zip code = +25. That's a clean, specific ask. But the moment I scrolled past the hero, it fell apart for me. The "Styles we think you'll love" recommendations are all adult shoes with no kids in sight, and a mom who shops for her 5-year-old and 9-year-old first is going to feel like the algorithm doesn't actually know her at all. The app download pitch for 750 bonus points is genuinely tempting though — that's real money in Skechers points if I'm already in the loyalty program.
- Solid mechanics, weak targeting. The profile-completion flow is smart loyalty engineering, but the product module completely undermines the "personalization" promise by showing me zero kids' content.

## What's working

- **Name + points balance up top.** I saw "Hi Martha" and "1,066 points" and immediately felt like a person, not a list entry. That's the hook that kept me reading.
- **Points breakdown is crystal clear.** Three specific actions, three specific point rewards. I didn't have to guess what I'd get or wonder if it was worth my time. +50 for shoe size is actually the one I'd fill in first because "personalized recommendations" sounds useful when I'm hunting for kids' shoes.
- **750 bonus points for the app is compelling.** I already shop on my phone, and if the app makes checkout faster (I hate re-entering info), this is a real reason to download. The visual "EARN. REDEEM. SHOP." call-out is punchy and readable.
- **Mobile layout looks clean.** The blue header is bold, text is legible, and the button tap target on "COMPLETE PROFILE" looks big enough that I won't accidentally miss it with my thumb.

## What's weak

- **"Styles we think you'll love" shows me adult shoes.** There are three products in that row and they all look like adult sneakers — blue/navy, grey, white. If the whole email is promising me personalization, how does the product module not know I'm a kids-first shopper? This single section undermines the entire premise of the email.
- **No kids' content anywhere in the hero or product area.** KIDS appears as a nav text link at the very bottom. My 5-year-old needs velcro sneakers and my son is growing out of his again — this email had no idea.
- **The email is asking me to do work.** "Complete your profile" is a brand ask, not a customer gift. The points soften it, but the framing is still "help us" not "here's something for you."
- **The reward code at the top looks masked or truncated** — I can see it says something about having "enough points for $0 Reward" with what looks like Xs blocking the actual code. That's confusing. Is there a reward I can use right now or not?
- **The text SMS opt-in module at the bottom ("Text SKECHERS to 62638")** is buried and kind of feels like a second ask when I've already been asked to fill in my profile.

## Recommendations

- **Swap at least one product in the recommendation row for a kid's shoe** — or better yet, if I've ever browsed or purchased in the kids category, lead the product module with that. A Twinkle Toes for my daughter or a Nitro for my son would've made me click immediately.
- **Reframe the hero copy from a brand ask to a customer benefit.** Instead of "Help us get to know you," try "Get recommendations that actually match your family." Same action, completely different emotional framing.
- **Fix or clarify the reward teaser at the top.** If I have redeemable points, show me the actual value and a button to use them. Don't tease me with a masked code and then pivot to asking me to complete a profile.
- **Lead with kids nav in the "Shop Additional Styles" section** — or dedicate a visual module to it. Right now WOMEN is first and KIDS is third in a text-only nav strip. Flip the order or add a kids' visual block for shoppers like me.
- **Consider making the app download secondary,** not a full competing section. The profile CTA and the app download are both asks — picking one and reinforcing the other as a supporting benefit would feel less like two separate emails duct-taped together.
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | iGoDigital recommendation links fail due to `…` in URL | Remove truncation artifact from `href` values; ensure all recommendation URLs are fully encoded ASCII before send |
- | **P0** | Empty first-name greeting (`"Hi ,"`) | Add ESP fallback: `{{first_name \| default: "there"}}` or equivalent merge syntax |
- | **P1** | Plain-text body is 0 chars | Enable ESP auto-text-generation or author a `text/plain` part |
- | **P1** | 12+ footer/content images on HTTP | Update all `image.emails.skechers.com` `src` attributes to `https://` — this is likely an ESP template configuration issue, not per-image |
- | **P1** | ink1000 open pixel on HTTP | Switch to `https://www.ink1000.com/...` or remove if duplicating ESP's own open tracking |
- | **P2** | Product recommendation images missing `alt` text | Add descriptive `alt` text (product name) for each iGoDigital `<img>`; empty `alt=""` is acceptable only for decorative/tracking pixels |
- | **P2** | Social/icon images missing `alt` text | Add `alt="Instagram"`, `alt="Facebook"`, etc. on all nav icons |
- | **P2** | Confirm SPF/DKIM via raw header export | Pull a delivered copy header from a seed inbox and verify `Authentication-Results` |
- | **P3** | Duplicate `@media` breakpoint blocks in `<head>` | Consolidate into a single `<style>` block to reduce specificity ambiguity |
- | **P3** | Confirm UTM parameters are appended in redirect chain | Unwrap one `click.emails.skechers.com` URL to verify `utm_source=email&utm_medium=skechers_plus&utm_campaign=TRG_US_EN_PLUSWELCOME_3` (or equivalent) is present |

## Full review
---

## Email Review — Martha Stroll Persona
**From:** SKECHERS PLUS | **Subject:** Tell us more about you! | **Date:** 2026-04-28

---

### 1. Executive Summary

Okay, I'll be real — I actually stopped on this one instead of swiping past it. Seeing my name ("Hi Martha, Member") and my points balance (1,066!) right at the top made it feel like it knew me, which isn't nothing. The email is asking me to complete my profile in exchange for bonus points, and it breaks that down clearly: birthday = +25, shoe size = +50, zip code = +25. That's a clean, specific ask. But the moment I scrolled past the hero, it fell apart for me. The "Styles we think you'll love" recommendations are all adult shoes with no kids in sight, and a mom who shops for her 5-year-old and 9-year-old first is going to feel like the algorithm doesn't actually know her at all. The app download pitch for 750 bonus points is genuinely tempting though — that's real money in Skechers points if I'm already in the loyalty program.

---

### 2. Business Impact Score: **6/10**

Solid mechanics, weak targeting. The profile-completion flow is smart loyalty engineering, but the product module completely undermines the "personalization" promise by showing me zero kids' content.

---

### 3. What's Working

- **Name + points balance up top.** I saw "Hi Martha" and "1,066 points" and immediately felt like a person, not a list entry. That's the hook that kept me reading.
- **Points breakdown is crystal clear.** Three specific actions, three specific point rewards. I didn't have to guess what I'd get or wonder if it was worth my time. +50 for shoe size is actually the one I'd fill in first because "personalized recommendations" sounds useful when I'm hunting for kids' shoes.
- **750 bonus points for the app is compelling.** I already shop on my phone, and if the app makes checkout faster (I hate re-entering info), this is a real reason to download. The visual "EARN. REDEEM. SHOP." call-out is punchy and readable.
- **Mobile layout looks clean.** The blue header is bold, text is legible, and the button tap target on "COMPLETE PROFILE" looks big enough that I won't accidentally miss it with my thumb.

---

### 4. What's Weak

- **"Styles we think you'll love" shows me adult shoes.** There are three products in that row and they all look like adult sneakers — blue/navy, grey, white. If the whole email is promising me personalization, how does the product module not know I'm a kids-first shopper? This single section undermines the entire premise of the email.
- **No kids' content anywhere in the hero or product area.** KIDS appears as a nav text link at the very bottom. My 5-year-old needs velcro sneakers and my son is growing out of his again — this email had no idea.
- **The email is asking me to do work.** "Complete your profile" is a brand ask, not a customer gift. The points soften it, but the framing is still "help us" not "here's something for you."
- **The reward code at the top looks masked or truncated** — I can see it says something about having "enough points for $0 Reward" with what looks like Xs blocking the actual code. That's confusing. Is there a reward I can use right now or not?
- **The text SMS opt-in module at the bottom ("Text SKECHERS to 62638")** is buried and kind of feels like a second ask when I've already been asked to fill in my profile.

---

### 5. Recommendations

- **Swap at least one product in the recommendation row for a kid's shoe** — or better yet, if I've ever browsed or purchased in the kids category, lead the product module with that. A Twinkle Toes for my daughter or a Nitro for my son would've made me click immediately.
- **Reframe the hero copy from a brand ask to a customer benefit.** Instead of "Help us get to know you," try "Get recommendations that actually match your family." Same action, completely different emotional framing.
- **Fix or clarify the reward teaser at the top.** If I have redeemable points, show me the actual value and a button to use them. Don't tease me with a masked code and then pivot to asking me to complete a profile.
- **Lead with kids nav in the "Shop Additional Styles" section** — or dedicate a visual module to it. Right now WOMEN is first and KIDS is third in a text-only nav strip. Flip the order or add a kids' visual block for shoppers like me.
- **Consider making the app download secondary,** not a full competing section. The profile CTA and the app download are both asks — picking one and reinforcing the other as a supporting benefit would feel less like two separate emails duct-taped together.

---

### 6. Bottom Line

I'd probably tap "Complete Profile" because the points math is easy and I'm already invested in Skechers Plus. But I'd feel a little annoyed that the email promised to learn about me and then immediately suggested shoes my kids would never wear. This is a good loyalty mechanic wrapped in a personalization promise it doesn't deliver on yet. Fix the product rec module and reframe the copy as customer-benefit-first, and this becomes an 8.

---

### 7. Subject Line Analysis

- **Subject:** `Tell us more about you!`
- **Length:** 27 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `4`, Urgency `2`, Specificity `3`
- **Strengths:**
  - Short and direct — no inbox truncation risk
  - Implies I'll get something in return (even if the subject doesn't say it)
- **Weaknesses:**
  - Feels like a survey invite, which makes me think "not now"
  - Zero mention of points, rewards, or any benefit — the real hook is buried in the email
- **Alt A:** `Martha, earn up to 100 points — 3 quick questions`
- **Alt B:** `Complete your profile → get better shoe picks (+ 100 pts)`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` *(no meaningful preheader visible — inbox likely showed fallback copy or body text)*
- **Length:** N/A
- **Scores (1-10):** Complements subject `2`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - N/A — nothing useful to reinforce here
- **Weaknesses:**
  - Missed opportunity to state the points reward right in the inbox view — the entire email's value prop fits in 80 characters
  - Without a preview text, the subject line "Tell us more about you!" reads as a survey and my thumb moves on
- **Alt A:** `Tell us your birthday + shoe size → earn 100 bonus points`
- **Alt B:** `You have 1,066 points — fill in 3 details, earn 100 more`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** I recognize "SKECHERS PLUS" as a sender I trust and my inbox has trained me that their emails sometimes have real deals. But "Tell us more about you!" reads like a survey, and on a weekend with two kids demanding my attention, a survey is a swipe-left. I opened it here because I recognized the brand — not because the subject pulled me in.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** The points breakdown is specific enough that I'd tap "Complete Profile" — +50 points for my shoe size takes 10 seconds. But I would NOT click any of the product cards because they're showing me adult shoes I'm not in the market for right now, and the kids' nav link at the bottom isn't compelling enough to drag me back up into browsing mode.

---

### 11. Evidence

- **Overall purpose:** Skechers Plus member profile-completion campaign, gamified with incremental point rewards for three data inputs (birthday, shoe size, zip code).
- **Hero / primary value prop:** Bold blue banner — "HELP US GET TO KNOW YOU! (AND EARN POINTS TOO!)" — with three icon-driven rows showing specific point values. CTA button: "COMPLETE PROFILE."
- **Membership / benefits section:** Points balance (1,066) and a reward code teaser appear in the top utility bar. App download module promises 750 bonus points for installing.
- **Product discoverability / recommendation modules:** "Styles we think you'll love..." row shows three adult shoe silhouettes — navy, grey, white. No kids' products visible. Below that, text-only nav: WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE.
- **Utility / secondary modules:** SMS opt-in, app download (App Store + Google Play), Curbside Pickup, Shop Now Pay Later (Afterpay, Klarna), Find a Store, social follow icons (Facebook, Instagram).
- **Bugs / friction / clarity issues:** The reward code in the top bar appears masked with what looks like Xs — unclear if there's a usable code or if it's a display error. This creates confusion about whether I have something I can actually redeem right now.

---

## Technical Audit

## Technical Audit — Skechers PLUS Welcome Email ("Tell us more about you!")

### 1. Technical Summary

Multiple broken product recommendation links, a misfired personalization token, a fully absent plain-text body, and a wide mixed-content (HTTP) image surface combine to produce a materially degraded send. The 40% QA pass rate reflects real production defects, not marginal edge cases.

---

### 2. Link & Tracking Issues

**FAIL — iGoDigital recommendation links contain unencoded Unicode (3 URLs)**

The QA probe could not follow any of the three product recommendation links because the URL strings contain a literal ellipsis character (`\u2026`, `…`) in position 59. This is an ASCII encoding boundary violation — the HTTP client refuses to dispatch the request.

Evidence:
```
https://100007688.recs.igodigital.com/rr/v2/5bfd72be23e5401729d17e23/i/1/8108404282?item=pr…
https://100007688.recs.igodigital.com/rr/v2/5bfd72be23e5401729d17e23/i/2/8108404282?item=pr…
https://100007688.recs.igodigital.com/rr/v2/5bfd72be23e5401729d17e23/i/3/8108404282?item=pr…
```

Root cause: the HTML source was truncated before reaching the full URL, and the `…` was inserted as a display artifact — but if this ellipsis appears in the live rendered `href`, every click on the three recommended products returns an error or dead page.

**WARN — 26 tracking/redirect links not probed**

All click-tracked links route through `click.emails.skechers.com`. These were skipped by the HTTP prober. No redirect chain validation was performed; confirm final destination URLs independently.

**INFO — Open pixel uses HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```
Open-tracking pixel on a non-HTTPS domain. Covered further under mixed content below.

---

### 3. Rendering & Accessibility

**WARN — 13 images missing `alt` text**

Affected images include:
- All three iGoDigital product recommendation images (`alias=` is empty)
- `o.gif` (ink1000 open pixel — blank alt is acceptable for tracking pixels, but should be `alt=""` explicitly)
- `49468f73...png`, social icons (Instagram, Facebook, YouTube), app store badges, Curbside Pickup, AfterPay, Find A Store icons

Screen reader users and image-blocked clients (common in B2B/government email) receive no fallback text for product images or functional nav icons.

**WARN — 15 images served over HTTP (mixed content)**

All `image.emails.skechers.com` assets and the ink1000 pixel use `http://`. Gmail, Outlook.com, and Apple Mail proxy or block non-HTTPS images. In practice, most of the footer icon strip will render broken in modern clients.

Affected domains:
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/...` (12 images)
- `http://www.ink1000.com/...` (1 pixel)

The open-tracking pixel from Skechers' own ESP (`click.emails.skechers.com/open.aspx`) is HTTPS — correct. The ink1000 secondary tracker is not.

**WARN — Duplicate/conflicting media query breakpoints**

The `<head>` declares two separate `<style>` blocks with overlapping `@media` rules:
- Block 1: `max-width: 375px`, `max-width: 640px`, `max-width: 680px`
- Block 2: `max-width: 480px`

`.mobile-hidden` and `.show` are redefined across both blocks. Cascading order is deterministic but fragile; a future template edit could silently override the intended breakpoint behavior.

---

### 4. Personalization & Merge Tokens

**FAIL — Empty greeting token**

The QA system detected a rendered greeting of the form `"Hi ,"` — the subscriber first-name merge field resolved to an empty string.

This is a profile-data or send-time suppression failure: either (a) the subscriber record has a null/empty `first_name` field and no fallback value was configured in the ESP template, or (b) the fallback token syntax is missing entirely. The greeting slot should be templated as, for example:

```
Hi {{IF first_name}}{{first_name}}{{ELSE}}there{{ENDIF}},
```

No other unresolved merge tokens were detected in the visible HTML fragment.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**WARN — SPF/DKIM status unknown**

`Authentication-Results` header was not present in the sample provided (expected via AgentMail relay). Cannot confirm DKIM signing or SPF alignment for `emails.skechers.com`. If authentication is broken, inbox placement degrades and DMARC enforcement may quarantine or reject.

Action: verify via a raw header export that `dkim=pass` and `spf=pass` are present on delivered copies.

**FAIL — Plain-text body absent (0 characters)**

No `text/plain` MIME part was generated. CAN-SPAM does not mandate a text part, but:
- Many ISP spam filters use text/HTML ratio as a signal; an HTML-only email increases spam score
- RFC 2822 best practice is multipart/alternative
- Some corporate mail gateways strip HTML and display nothing

The ESP should generate a plain-text version automatically from the HTML, or one should be authored explicitly.

**INFO — Preheader correctly suppressed**

```html
<div class="preheader" style="font-size:1px;display:none !important">Earn points when you complete your profile</div>
```

Preheader text is present and hidden correctly via inline style + class. No issues.

**INFO — Physical address and unsubscribe link**

Not visible in the truncated HTML source. Assumed present in the footer given this is a known commercial sender — flag for manual confirmation on the full render.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

The HTML source is truncated; full URL inspection of CTA links was not possible. However:

- The 26 tracked links all pass through `click.emails.skechers.com` — UTM parameters, if present, would be appended at that redirect layer. Cannot confirm `utm_source`, `utm_medium`, `utm_campaign` are included without unwrapping the redirect chain.
- Campaign identifier `TRG_US_EN_PLUSWELCOME_3_09082025` appears in both the iGoDigital beacon and the Krux/Salesforce DMP pixel — consistent campaign tagging at the pixel level is good.
- The three broken iGoDigital recommendation links (see §2) mean clicks on those product tiles will not reach the intended PDP. This is a direct revenue-path breakage.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | iGoDigital recommendation links fail due to `…` in URL | Remove truncation artifact from `href` values; ensure all recommendation URLs are fully encoded ASCII before send |
| **P0** | Empty first-name greeting (`"Hi ,"`) | Add ESP fallback: `{{first_name \| default: "there"}}` or equivalent merge syntax |
| **P1** | Plain-text body is 0 chars | Enable ESP auto-text-generation or author a `text/plain` part |
| **P1** | 12+ footer/content images on HTTP | Update all `image.emails.skechers.com` `src` attributes to `https://` — this is likely an ESP template configuration issue, not per-image |
| **P1** | ink1000 open pixel on HTTP | Switch to `https://www.ink1000.com/...` or remove if duplicating ESP's own open tracking |
| **P2** | Product recommendation images missing `alt` text | Add descriptive `alt` text (product name) for each iGoDigital `<img>`; empty `alt=""` is acceptable only for decorative/tracking pixels |
| **P2** | Social/icon images missing `alt` text | Add `alt="Instagram"`, `alt="Facebook"`, etc. on all nav icons |
| **P2** | Confirm SPF/DKIM via raw header export | Pull a delivered copy header from a seed inbox and verify `Authentication-Results` |
| **P3** | Duplicate `@media` breakpoint blocks in `<head>` | Consolidate into a single `<style>` block to reduce specificity ambiguity |
| **P3** | Confirm UTM parameters are appended in redirect chain | Unwrap one `click.emails.skechers.com` URL to verify `utm_source=email&utm_medium=skechers_plus&utm_campaign=TRG_US_EN_PLUSWELCOME_3` (or equivalent) is present |
## Recent history

- [[2026-04-28-welcome-to-sally-beauty]] — 5/10 (2026-04-28)
- [[2026-04-27-your-skechers-plus-cheat-sheet]] — 5/10 (2026-04-26)
- [[2026-04-26-bogo-50-off-mother-s-day-must-haves-25-off-apparel-139d1dff-9ea8-4204-bec5-]] — 5/10 (2026-04-26)

