---
slug: 2026-04-29-welcome-to-the-team
type: email
date: 2026-04-29
persona: walker
score: "3/10"
sender: Nike
subject: Welcome to the team
tags: [email, score-3, sender/nike]
---
# Welcome to the team
**Score:** 3/10 · **Type:** Email audit · **2026-04-29**
## Executive summary

- **Nike | "Welcome to the team" | 2026-04-29**
- This is Nike's standard membership welcome email, and I'll be straight with you — I'm not sure why I'm on Nike's list in the first place. I'm a Skechers guy. But setting that aside and looking at this as any 62-year-old male opening a "welcome" from a big shoe brand: it feels like it was built for a 24-year-old gym rat, not me. The hero image is somebody doing something athletic in a very athletic way, there's not a single mention of comfort or casual footwear, and they want me to download four different apps. Four. I've got enough apps. The free shipping banner is the only thing that felt practical, and it was the first thing I saw — credit where it's due. Otherwise this email is more about Nike's ecosystem than anything in it for me.
- For a customer like me? Very low. No product. No offer. No comfort angle. Just "here's our app suite." I'm not clicking any of those four app icons.

## What's working

- **Free shipping banner up top.** "Free Shipping for Members on $50+" — that I noticed immediately. Small text but it's right at the top. Price-conscious me appreciated that.
- **The middle lifestyle photo** of the guy in the green jacket and khaki pants was the first human in this email I could relate to. He looked like someone my age who dresses casually. That was a brief moment of recognition.
- **Clean layout.** Nothing is cluttered. The sections are clear and I could follow the flow without squinting too hard.

## What's weak

- **Zero product.** It's a welcome email with no actual shoes. I don't know what Nike wants me to buy. There's no "here's what we think you'd like" — just "here's our infrastructure."
- **App overload.** Nike Training, Nike Run Club, NTC, SNKRS App — four app tiles at the bottom. I'm not downloading any of these. SNKRS sounds like it's for kids hunting limited sneakers. Training and Run Club assume I'm working out at the gym level. None of this is me.
- **The hero image.** Athletic person in what looks like a sprint or stretch. Intense, young, performance-focused. Immediately tells me this brand doesn't know who I am.
- **"Make it your own" is vague.** "Insights from icons, athletes, and tastemakers" — that's marketing speak I don't trust. I don't know what it means in practical terms.
- **No personalization signal.** They don't say my name. They don't reference anything I've looked at or bought. It's a completely cold welcome, which makes "insider access" feel like a lie.
- **CTA count is too high.** Shop, Member Settings, Explore the Nike App, then four more app icons. That's seven separate things to click. I'm paralyzed.

## Recommendations

- 1. **Pick one action.** New member welcome should have one CTA — probably "Shop Now" or "See What's New for You." Not seven.
- 2. **Show me a shoe.** Even one product image with a comfort callout would anchor this email.
- 3. **Drop the app grid.** Pitch the Nike app once, prominently, or not at all. Four separate app icons looks like an app store, not a welcome.
- 4. **Use my name.** "Welcome to the team" is fine as a subject, but the body should open with personalization. "Hey Walker" goes a long way.
- 5. **Know your audience.** If I'm in the database as a casual/comfort buyer, show me casual comfort shoes — not performance athletes.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Unsubscribe link absent from body | Confirm HTML was not truncated; if confirmed missing, block send — CAN-SPAM violation |
- | P0 | Plain-text fallback is 0 chars | Generate and attach a plain-text part at the ESP level |
- | P1 | Tracking pixel over HTTP | Change open-tracking URL scheme to `https://` at ESP config |
- | P1 | `List-Unsubscribe` headers missing | Verify headers survive AgentMail relay; enable RFC 8058 one-click at ESP if not already set |
- | P2 | Tracking pixel alt attribute | Explicitly set `alt=""` on the open-tracking `<img>` element |
- | P2 | UTM continuity unverified | Spot-check CTA redirect destinations for UTM parameter presence |

## Full review
---

## Walker Miles — Email Review
**Nike | "Welcome to the team" | 2026-04-29**

---

### 1. Executive Summary

This is Nike's standard membership welcome email, and I'll be straight with you — I'm not sure why I'm on Nike's list in the first place. I'm a Skechers guy. But setting that aside and looking at this as any 62-year-old male opening a "welcome" from a big shoe brand: it feels like it was built for a 24-year-old gym rat, not me. The hero image is somebody doing something athletic in a very athletic way, there's not a single mention of comfort or casual footwear, and they want me to download four different apps. Four. I've got enough apps. The free shipping banner is the only thing that felt practical, and it was the first thing I saw — credit where it's due. Otherwise this email is more about Nike's ecosystem than anything in it for me.

---

### 2. Business Impact Score: 3/10

For a customer like me? Very low. No product. No offer. No comfort angle. Just "here's our app suite." I'm not clicking any of those four app icons.

---

### 3. What's Working

- **Free shipping banner up top.** "Free Shipping for Members on $50+" — that I noticed immediately. Small text but it's right at the top. Price-conscious me appreciated that.
- **The middle lifestyle photo** of the guy in the green jacket and khaki pants was the first human in this email I could relate to. He looked like someone my age who dresses casually. That was a brief moment of recognition.
- **Clean layout.** Nothing is cluttered. The sections are clear and I could follow the flow without squinting too hard.

---

### 4. What's Weak

- **Zero product.** It's a welcome email with no actual shoes. I don't know what Nike wants me to buy. There's no "here's what we think you'd like" — just "here's our infrastructure."
- **App overload.** Nike Training, Nike Run Club, NTC, SNKRS App — four app tiles at the bottom. I'm not downloading any of these. SNKRS sounds like it's for kids hunting limited sneakers. Training and Run Club assume I'm working out at the gym level. None of this is me.
- **The hero image.** Athletic person in what looks like a sprint or stretch. Intense, young, performance-focused. Immediately tells me this brand doesn't know who I am.
- **"Make it your own" is vague.** "Insights from icons, athletes, and tastemakers" — that's marketing speak I don't trust. I don't know what it means in practical terms.
- **No personalization signal.** They don't say my name. They don't reference anything I've looked at or bought. It's a completely cold welcome, which makes "insider access" feel like a lie.
- **CTA count is too high.** Shop, Member Settings, Explore the Nike App, then four more app icons. That's seven separate things to click. I'm paralyzed.

---

### 5. Recommendations

1. **Pick one action.** New member welcome should have one CTA — probably "Shop Now" or "See What's New for You." Not seven.
2. **Show me a shoe.** Even one product image with a comfort callout would anchor this email.
3. **Drop the app grid.** Pitch the Nike app once, prominently, or not at all. Four separate app icons looks like an app store, not a welcome.
4. **Use my name.** "Welcome to the team" is fine as a subject, but the body should open with personalization. "Hey Walker" goes a long way.
5. **Know your audience.** If I'm in the database as a casual/comfort buyer, show me casual comfort shoes — not performance athletes.

---

### 6. Bottom Line

I opened it because "Welcome to the team" felt friendly. I scrolled it because it's short. I'm not clicking anything because nothing in here is for me. If I were a Nike loyalist who actually wanted their app ecosystem, maybe — but even then, this email is heavy on infrastructure and light on product. For a 62-year-old who wants comfortable shoes he can slip on, this is a miss.

---

### 7. Subject Line Analysis

- **Subject:** `Welcome to the team`
- **Length:** 19 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `2`, Urgency `1`, Specificity `1`
- **Strengths:**
  - Friendly, low-pressure tone — doesn't feel like a sales blast
  - Short and clean, renders perfectly in mobile inbox
- **Weaknesses:**
  - Zero specificity — "the team" could be any brand in any category
  - No personalization and no urgency; easy to defer and forget
- **Alt A:** `Walker, your Nike Member perks just unlocked`
- **Alt B:** `Your first member benefit: free shipping on $50+`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — I did not see a meaningful preheader rendering; the subject line was carrying alone
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None to call out)
- **Weaknesses:**
  - A wasted slot — the free shipping line from the banner would have been a perfect preheader
  - Subject line has to do all the work alone in the inbox
- **Alt A:** `Free shipping on $50+ orders, plus exclusive member access`
- **Alt B:** `Members get free shipping + personalized picks — here's yours`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** "Welcome to the team" is friendly enough that I'd probably open it out of curiosity — I want to know what team and what benefits I supposedly have. But I'm a Skechers guy getting a Nike email, so there's already mild confusion about why this landed in my inbox. The sender is clearly Nike, which is a known brand, so I'm not worried it's spam — I just don't know what they want from me.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `2/10`
- **Rationale:** Once I'm inside, I see no product, no offer aimed at me, and a forest of app icons that mean nothing to my shopping habits. The "Shop" button is the only practical CTA and even that isn't tied to anything specific — shop what exactly? I'd close the email without clicking.

---

### 11. Evidence

- **Overall purpose:** New member onboarding / ecosystem introduction
- **Hero / primary value prop:** "Insider access" — member benefits including free shipping at $50+, product recommendations, email notifications. CTAs: Shop / Member Settings.
- **Membership / benefits section:** Clearly stated in the "Insider access" copy block. Free shipping threshold is the only concrete benefit named.
- **Product discoverability / recommendation modules:** None. No product imagery. No category links. No personalized recommendations.
- **Utility / secondary modules:** "Make it your own" app pitch + four-tile app grid (Nike Training, Nike Run Club, NTC, SNKRS). Footer with Nike.com, privacy, unsubscribe.
- **Bugs / friction / clarity issues:** No visible rendering bugs. Text is legible at mobile size. The four app icons are very small — tap targets may be marginal on a phone screen for someone my age.

---

## Technical Audit

## Technical Audit — Nike "Welcome to the team"

**From:** nike@notifications.nike.com | **Date:** 2026-04-29

---

### 1. Technical Summary

The email has two hard failures: no unsubscribe mechanism in the body (CAN-SPAM violation) and no plain-text fallback. Secondary issues include a tracking pixel served over HTTP and missing `List-Unsubscribe` headers, likely due to AgentMail relay stripping them.

---

### 2. Link & Tracking Issues

**[WARN] Tracking pixel served over HTTP**
- `src: http://url3775.click.notifications.nike.com/wf/open?upn=u001.7nMkDPHKJYuSqu77FUwRx5aYih1RC1JYvx63s2buCgMMW5g7nz-2Btdjq2D`
- Non-HTTPS open-tracking pixel will be blocked by Gmail, Outlook, and Apple Mail in image-blocking or "load images securely" modes, causing open rate undercounting.
- Fix: All tracking URLs must use `https://`.

---

### 3. Rendering & Accessibility

**[WARN] Alt text missing on tracking pixel**
- The open-tracking `<img>` element has no `alt` attribute. While a 1×1 pixel typically carries `alt=""` intentionally, the QA check flags it as absent — confirm the attribute is explicitly set (even as empty string) to suppress screen reader noise.

**Custom font via external URLs**
- `@font-face` loads 6 Nike Futura variants from `https://www.nike.com/assets/ncss/`. This will render correctly in clients that support web fonts (Apple Mail, some webmail), but will silently fall back to Helvetica Neue/Arial in Outlook, Gmail app, and most mobile clients. Not a bug, but the fallback stack (`Helvetica Neue, Arial, sans-serif`) is confirmed present in body copy — acceptable.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `{{first_name}}`, `*|FNAME|*`) are visible in the truncated HTML. No issues found in the provided source.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**[FAIL] No unsubscribe link found in body**
- QA scan found zero opt-out links in the HTML body. CAN-SPAM §5(a)(3) requires a clearly visible, functional unsubscribe mechanism. This is a hard legal failure for a commercial email.
- The HTML is truncated — verify whether the footer was cut off before flagging as a production defect, but the QA parser found nothing.

**[FAIL] Plain-text alternative missing**
- Text part is 0 characters. RFC 2046 multipart/alternative best practice requires a plain-text version. Some spam filters (SpamAssassin) penalize HTML-only messages, and it degrades accessibility for screen reader users on text-mode clients.

**[WARN] `List-Unsubscribe` header not captured**
- Neither `List-Unsubscribe` nor `List-Unsubscribe-Post` (RFC 8058 one-click) headers were found. QA notes this may be an AgentMail relay stripping issue rather than a sending platform omission — confirm headers are present on the raw SMTP envelope before attributing to Nike's ESP. Gmail and Apple Mail use these headers to surface native unsubscribe UI; missing them increases spam complaint rates.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

All click-tracking runs through `url3775.click.notifications.nike.com` redirect URLs. UTM parameter state cannot be verified from the truncated source alone — the destination URLs after redirect are not visible. No issues confirmed; recommend spot-checking 2–3 CTA links post-redirect to verify `utm_source`, `utm_medium`, and `utm_campaign` are appended to nike.com landing pages.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Unsubscribe link absent from body | Confirm HTML was not truncated; if confirmed missing, block send — CAN-SPAM violation |
| P0 | Plain-text fallback is 0 chars | Generate and attach a plain-text part at the ESP level |
| P1 | Tracking pixel over HTTP | Change open-tracking URL scheme to `https://` at ESP config |
| P1 | `List-Unsubscribe` headers missing | Verify headers survive AgentMail relay; enable RFC 8058 one-click at ESP if not already set |
| P2 | Tracking pixel alt attribute | Explicitly set `alt=""` on the open-tracking `<img>` element |
| P2 | UTM continuity unverified | Spot-check CTA redirect destinations for UTM parameter presence |
## Recent history

- [[2026-04-29-here-s-your-one-time-code]] — 6/10 (2026-04-29)
- [[2026-04-29-59-98-nike-worth-the-hype]] — 3/10 (2026-04-29)
- [[2026-04-29-did-you-forget-something]] — 6/10 (2026-04-29)

