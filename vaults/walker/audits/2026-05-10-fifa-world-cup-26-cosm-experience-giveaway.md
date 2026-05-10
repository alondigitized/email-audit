---
slug: 2026-05-10-fifa-world-cup-26-cosm-experience-giveaway
type: email
date: 2026-05-10
persona: walker
score: "6/10"
sender: adidas
subject: FIFA WORLD CUP 26™ COSM EXPERIENCE GIVEAWAY
tags: [email, score-6, sender/adidas]
---
# FIFA WORLD CUP 26™ COSM EXPERIENCE GIVEAWAY
**Score:** 6/10 · **Type:** Email audit · **2026-05-10**
## Executive summary

- Adidas sent me — a 62-year-old guy who shops Skechers for slip-on comfort shoes — an email about winning tickets to watch soccer at some high-tech dome called Cosm. I don't follow MLS, I'm not an adidas customer, and a sweepstakes for a "viewing experience" is about as far from my shopping habits as it gets. The email looks clean and professional, I'll give them that. But I shouldn't be on this list at all.
- **6/10**
- Signals counted as TRUE:
- Sender is a recognizable brand (adidas is a household name, even if I buy Skechers)
- One concrete offer is visible (10 tickets + food and beverage credit)
- Visual hierarchy is clear — the Cosm logo dominates, then the headline, then the body copy
- No render bugs visible — clean layout, no broken images or overlapping text
- Email reflects a current campaign / season (FIFA World Cup 2026 is real and upcoming)
- Offer feels honest — no buried gotcha visible, the sweepstakes premise is straightforward
- Signals missing: not my focus area (zero shoes, zero comfort tech), no clear CTA button (just text instructions to "select a match"), no demographic match (no men my age, no lifestyle imagery I recognize), no Skechers Plus or any loyalty hook for me.

## What's working

- The **Cosm logo and dark hero** is striking — even on a small phone screen it reads fast. The headline "WIN A FIFA WORLD CUP 26™ IMMERSIVE VIEWING EXPERIENCE" is plain English, no jargon. I understood immediately what the prize is. The body copy is short and doesn't waste my time. The fine print is tucked at the bottom where it belongs. For the audience this *should* be going to — a younger adidas loyalist who cares about soccer — this is probably a solid email.

## What's weak

- **This isn't my email.** I'm a Skechers guy. I don't have an "adCru" membership. I probably got on the adidas list from a purchase years ago or a data partner, and nobody cleaned it. The subject line is **ALL CAPS** which feels shouty and triggers my spam instincts. There's no CTA button — the email just tells me to "select the match and day" like I should already know where to go. The body text is small and the contrast against that dark hero background on my phone requires zooming in to read. And honestly, soccer? I might catch a Super Bowl but I'm not a World Cup guy.

## Recommendations

- 1. **Pull me off this segment.** Walker Miles should not be in the FIFA World Cup sweepstakes audience. Someone like me needs a Skechers comfort email, not an adidas sports event.
- 2. **Add a real CTA button.** "Enter Now" or "Pick Your Match" as a tappable button — not a paragraph that tells me to do something without showing me where to tap.
- 3. **Drop the ALL CAPS subject.** Title case reads less aggressive and dodges spam filters.
- 4. **Lighten the body text size** — if you're going after a broader age range, accessibility matters.
- 5. **Add a deadline.** "Enter by May 31" would add urgency and make this feel more real.
- | Priority | Action |
- |---|---|
- | P0 | Fix the `dv.adidas.com/o/82e8a954-...` redirect — the destination path must be an absolute URL, not a relative one. Verify the giveaway landing page loads end-to-end before resend. |
- | P0 | Add a plain-text fallback (`text/plain` MIME part) with at minimum the CTA URL and unsubscribe link as raw text. |
- | P1 | Upgrade both HTTP image sources to HTTPS (`image.link.adidas.com` and `click.comms.adidas.com`) to prevent mixed-content blocking. |
- | P1 | Add `alt` text to the content image (`82e8a954-...`); set `alt=""` explicitly on the tracking pixel. |
- | P2 | Fix `<meta content="text/html; charset=UTF-8" />` → add `http-equiv="Content-Type"`. |
- | P2 | Deduplicate the `@font-face` blocks — keep one canonical declaration per font family/weight with the full fallback stack. |

## Full review
---

## 1. Executive Summary

Adidas sent me — a 62-year-old guy who shops Skechers for slip-on comfort shoes — an email about winning tickets to watch soccer at some high-tech dome called Cosm. I don't follow MLS, I'm not an adidas customer, and a sweepstakes for a "viewing experience" is about as far from my shopping habits as it gets. The email looks clean and professional, I'll give them that. But I shouldn't be on this list at all.

---

## 2. Business Impact Score (1-10)

**6/10**

Signals counted as TRUE:
- Sender is a recognizable brand (adidas is a household name, even if I buy Skechers)
- One concrete offer is visible (10 tickets + food and beverage credit)
- Visual hierarchy is clear — the Cosm logo dominates, then the headline, then the body copy
- No render bugs visible — clean layout, no broken images or overlapping text
- Email reflects a current campaign / season (FIFA World Cup 2026 is real and upcoming)
- Offer feels honest — no buried gotcha visible, the sweepstakes premise is straightforward

Signals missing: not my focus area (zero shoes, zero comfort tech), no clear CTA button (just text instructions to "select a match"), no demographic match (no men my age, no lifestyle imagery I recognize), no Skechers Plus or any loyalty hook for me.

---

## 3. What's Working

The **Cosm logo and dark hero** is striking — even on a small phone screen it reads fast. The headline "WIN A FIFA WORLD CUP 26™ IMMERSIVE VIEWING EXPERIENCE" is plain English, no jargon. I understood immediately what the prize is. The body copy is short and doesn't waste my time. The fine print is tucked at the bottom where it belongs. For the audience this *should* be going to — a younger adidas loyalist who cares about soccer — this is probably a solid email.

---

## 4. What's Weak

**This isn't my email.** I'm a Skechers guy. I don't have an "adCru" membership. I probably got on the adidas list from a purchase years ago or a data partner, and nobody cleaned it. The subject line is **ALL CAPS** which feels shouty and triggers my spam instincts. There's no CTA button — the email just tells me to "select the match and day" like I should already know where to go. The body text is small and the contrast against that dark hero background on my phone requires zooming in to read. And honestly, soccer? I might catch a Super Bowl but I'm not a World Cup guy.

---

## 5. Recommendations

1. **Pull me off this segment.** Walker Miles should not be in the FIFA World Cup sweepstakes audience. Someone like me needs a Skechers comfort email, not an adidas sports event.
2. **Add a real CTA button.** "Enter Now" or "Pick Your Match" as a tappable button — not a paragraph that tells me to do something without showing me where to tap.
3. **Drop the ALL CAPS subject.** Title case reads less aggressive and dodges spam filters.
4. **Lighten the body text size** — if you're going after a broader age range, accessibility matters.
5. **Add a deadline.** "Enter by May 31" would add urgency and make this feel more real.

---

## 6. Bottom Line

Wrong guy, wrong brand, wrong category. I'd likely delete this without clicking. The production quality is fine but it has zero business being in my inbox. If adidas tightened their list hygiene and sent this to actual soccer fans with an adidas purchase history, this could be a solid sweepstakes email. For me? Pass.

---

## 7. Subject Line Analysis

- **Subject:** `FIFA WORLD CUP 26™ COSM EXPERIENCE GIVEAWAY`
- **Length:** 44 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `1`, Urgency `3`, Specificity `7`
- **Strengths:**
  - Packs the key nouns fast — FIFA, Cosm, Giveaway — no wasted words
  - Under 50 chars, will not truncate on most mobile clients
- **Weaknesses:**
  - ALL CAPS reads aggressive and borderline spammy
  - Zero personalization — could be addressed to anyone, anywhere
- **Alt A:** `You could win: FIFA World Cup 26™ experience at Cosm`
- **Alt B:** `Win 10 tickets to watch the World Cup at Cosm — enter now`

---

## 8. Preview Text Analysis

- **Preview:** `adCru members, experience the FIFA World Cup 26™ from a whole new perspective`
- **Length:** 76 characters
- **Scores (1-10):** Complements subject `5`, Specificity `4`, Clarity `6`, Inbox-fit `5`
- **Strengths:**
  - Opens with the membership group name — signals this is targeted (even if execution is off)
  - Real copy, not a "view in browser" leak
- **Weaknesses:**
  - "From a whole new perspective" is vague marketing fluff — doesn't add to what the subject already said
  - Repeats the FIFA/World Cup theme without adding a hook (e.g., the food credit or seat count)
- **Alt A:** `Enter for 10 tickets, food credit + a friend group — adCru only`
- **Alt B:** `Win a group of 10: match tickets + food credit at Cosm`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** 5/10
- **Signals counted:** Sender display name recognizable (adidas), subject is concrete (specific event + giveaway), preview text is real copy, subject is under 50 chars
- **Rationale:** I'd recognize "adidas" in my inbox, and "giveaway" does make me glance twice. But the ALL CAPS and soccer angle would make me hesitate — this doesn't feel like it's for me, and I'd probably swipe to delete before opening.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** 3/10
- **Signals counted:** Hero offer visible above the fold (no scrolling needed to see the prize), brand voice is consistent and professional
- **Rationale:** Once I opened it, I can see the prize clearly, and adidas looks legit. But there's no real button to tap — I'd have to figure out where to go on my own — and the whole thing is about soccer at a place I've never heard of. Nothing in here speaks to my actual reasons for shopping.

---

## 11. Evidence

- **Overall purpose:** Sweepstakes/giveaway entry for a FIFA World Cup 2026 immersive viewing experience at Cosm venues (Los Angeles mentioned)
- **Hero / primary value proposition:** Win 10 tickets for you and your crew + food and beverage credit to a next-gen sports viewing venue during a World Cup match
- **Membership / benefits section:** References "adCru members" at the top of the body copy — implies this is a member-only communication, though what adCru is goes unexplained
- **Product discoverability / recommendation modules:** None. No shoes, no apparel, no product links visible anywhere in the email
- **Utility / secondary modules:** Footer contains My Account, Privacy Statement, Support, Unsubscribe, adidas.com links. Legal fine print about winners, data handling, and trademark attribution visible at the very bottom in small gray text
- **Bugs / friction / clarity issues:** No visible broken images or layout bugs. The body text is small against a light background — readable on desktop, slightly tight on a phone. No visible CTA button — the "select the match and day" instruction is plain text with no tappable element shown in the screenshot. The ™ symbol in the subject renders correctly.

---

## Technical Audit

## Technical Audit — adidas FIFA World Cup 26 COSM Experience Giveaway

---

### 1. Technical Summary

One CTA link is confirmed broken (redirect resolves to a relative path), and the email has no plain-text fallback — both are blocking-level issues. Secondary findings include mixed-content HTTP image sources, missing alt text on two images, a malformed charset meta tag, and duplicated `@font-face` declarations.

---

### 2. Link & Tracking Issues

**[FAIL] Broken CTA redirect**
The click-tracking wrapper at `dv.adidas.com/o/82e8a954-...` resolves to an internal path `/g/82e8a954-1527-49b1-8bbc-b8913b8bb2d5?txn=7c0c0380-4c9b-11f1-9e52-ce3c64faeb84` — a relative URL, not an absolute destination. QA probe flagged it as `unknown url type`. Any subscriber clicking this CTA reaches a dead end.

**[WARN] 16 click-redirect links not probed**
All 16 tracking links route through `click.comms.adidas.com`. They were skipped in HTTP probe; destination reachability is unverified.

---

### 3. Rendering & Accessibility

**[WARN] Malformed charset meta tag**
```html
<meta content="text/html; charset=UTF-8" />
```
Missing the required `http-equiv` attribute. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Without it, some legacy clients may misparse character encoding.

**[WARN] Duplicate `@font-face` declarations**
`AdihausDIN` (400 + 700) and `AdineuePRO` (400 + 600) are each declared twice across two separate `<style>` blocks with slightly differing fallback stacks (`Calibri`/`Sans Serif` in block 1, omitted in block 2). The second declaration wins; the inconsistency wastes bytes and creates maintenance risk.

**[WARN] Mixed-content HTTP image**
```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Appears twice (same asset, duplicate `<img>` tag). Modern clients on HTTPS connections will block or warn on HTTP image loads — the arrow graphic will silently fail to render in Gmail, Outlook.com, and Apple Mail.

**[WARN] Missing alt text — 2 images**

| Image | Source pattern |
|---|---|
| `82e8a954-...` (tracked image) | `dv.adidas.com/o/82e8a954-...` |
| `Pj7eK0qbk...` (1×1 pixel or small asset) | `click.comms.adidas.com/CI0/...` |

Empty `alt=""` is acceptable for decorative images, but these appear to be a content image and a tracking pixel respectively. The content image needs descriptive alt text; the tracking pixel should have `alt=""` explicitly set (not omitted).

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`{{`, `%%`, `*|`) detected in the visible HTML. No issues found.

---

### 5. Compliance

**[FAIL] Plain-text fallback absent**
QA confirms the `text/plain` MIME part is 0 characters. CAN-SPAM does not technically mandate a plain-text part, but:
- Several ESPs and B2B mail gateways strip HTML-only messages as spam.
- RFC 2822 best practice requires a plain-text alternative in `multipart/alternative`.
- This inflates spam scoring across multiple filters.

Physical mailing address and unsubscribe mechanism are expected in the footer (not visible in truncated source) — cannot confirm presence from the provided excerpt.

---

### 6. Email-to-Site Continuity

**[FAIL] Primary CTA broken — no landing page reached**
Because the `dv.adidas.com/o/82e8a954-...` redirect resolves to a relative path, the giveaway landing page is unreachable. UTM parameter carrythrough cannot be evaluated since the destination URL is never reached.

**[WARN] Tracking pixel over HTTP**
```
http://click.comms.adidas.com/CI0/0102019e1312faf9-.../Pj7eK0qb...
```
Open-tracking pixel served over HTTP. Clients that block mixed content will suppress the open event — open rate data for this send will be artificially suppressed.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Fix the `dv.adidas.com/o/82e8a954-...` redirect — the destination path must be an absolute URL, not a relative one. Verify the giveaway landing page loads end-to-end before resend. |
| P0 | Add a plain-text fallback (`text/plain` MIME part) with at minimum the CTA URL and unsubscribe link as raw text. |
| P1 | Upgrade both HTTP image sources to HTTPS (`image.link.adidas.com` and `click.comms.adidas.com`) to prevent mixed-content blocking. |
| P1 | Add `alt` text to the content image (`82e8a954-...`); set `alt=""` explicitly on the tracking pixel. |
| P2 | Fix `<meta content="text/html; charset=UTF-8" />` → add `http-equiv="Content-Type"`. |
| P2 | Deduplicate the `@font-face` blocks — keep one canonical declaration per font family/weight with the full fallback stack. |
## Recent history

- [[2026-05-10-whoa-momma-15-off-ends-tonight]] — 7/10 (2026-05-10)
- [[2026-05-10-two-sandal-styles-one-great-price]] — 8/10 (2026-05-10)
- [[2026-05-10-treat-yourself-this-mother-s-day-217852f9-b6c5-4dd2-a22a-]] — 8/10 (2026-05-10)

