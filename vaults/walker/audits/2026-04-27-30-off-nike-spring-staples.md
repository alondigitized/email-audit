---
slug: 2026-04-27-30-off-nike-spring-staples
type: email
date: 2026-04-26
persona: walker
score: "4/10"
sender: Shoe Carnival
subject: 30% off Nike Spring Staples
tags: [email, score-4, sender/shoe-carnival]
---
# 30% off Nike Spring Staples
**Score:** 4/10 · **Type:** Email audit · **2026-04-26**
## Executive summary

- **From:** Shoe Carnival | **Subject:** 30% off Nike Spring Staples
- Well, I opened this thing expecting a Nike deal — that's what the subject line promised me. What I got was a yard sale. Nike, New Balance, Puma, Adidas, Skechers sandals, a Jordan sweepstakes... it's all jumbled together like they couldn't decide what they were selling. I'll give them credit: I spotted a Skechers section about halfway down, and the $10-off coupon at the bottom is genuinely useful. But nothing in this email made me feel like Shoe Carnival knows who I am or what I buy. This is a blast-to-everyone email wearing a personalization costume.

## What's working

- **The Skechers Sandal Sale block is present.** Starting at $39.98 and showing 2X points — that gets my attention. That's the one section that actually speaks to me.
- **The $10 off coupon ($74.98+) with a barcode.** Simple, actionable, works in-store too. I can actually picture myself pulling this up at the register. That's practical, and I like practical.
- **"Trending styles for you" section.** At least they're trying to personalize. I can't make out the exact shoes at this size, but the intent is there.

## What's weak

- **The subject said Nike. The email said everything.** That's a bait-and-switch. The Nike section is first but it's buried under the words "SPORTY SPRING STAPLES" — not exactly how I talk about buying shoes. The rest of the email is four other brands. Pick a lane.
- **"PLAY. SHOOT. WIN." Jordan sweepstakes.** I'm 62. I don't play basketball and I'm not entering a sweepstakes to win a pair of Jordans. This section belongs in a completely different email going to a completely different customer. It wastes space and makes me feel like I'm on the wrong mailing list.
- **Women in athletic wear, kids' pricing.** The athletic section image appears to show a woman in workout gear, and there's a "Kids starting at $39.98" callout. I'm a single guy browsing Men's. Where's the men's content?
- **Text is tiny.** Looking at this on my phone, almost everything below the hero requires pinching to zoom. Not great.
- **The preview text was a tracking URL.** That's embarrassing. More on that below.
- **No slip-in or comfort tech callout.** I'm a Skechers loyalist specifically because of Slip-ins. They have a Skechers sandal section but nothing that says "comfort" or "hands-free." That's the whole reason I buy.

## Recommendations

- 1. **Segment me by what I actually buy.** If Shoe Carnival has my purchase history, lead with men's comfort shoes — Skechers Slip-ins, walking shoes, wide width options. Not a women's athletic shot and a kids' price point.
- 2. **The Skechers block should be higher.** If they know I'm a Skechers buyer, move that section to the hero or at least second position. Don't make me scroll past Nike and New Balance to find what I care about.
- 3. **Kill the Jordan sweepstakes for this segment.** Or at minimum, put it at the very bottom below the coupon. It dilutes the message and makes the email feel untargeted.
- 4. **Bigger text, fewer sections.** Four sale categories plus a sweepstakes plus a personalization strip plus a coupon is too much for one email. On my phone this is exhausting to read.
- 5. **Fix the preheader.** A click-tracking URL as preview text is unprofessional and wastes prime inbox real estate.
- | Priority | Action |
- |---|---|
- | **P0** | Strip U+200B from all four tracking URLs in the template before any resend. Audit the upstream copy source (template builder or brief doc) for invisible Unicode. Add an ASCII-safety lint step to the pre-send QA pipeline. |
- | **P1** | Verify `Authentication-Results` headers on a seed send through the AgentMail relay. Confirm SPF includes `emltrk.com` ESP infrastructure and DKIM `d=` aligns with `shoecarnival.com`. |
- | **P1** | Add descriptive `alt` text to all three product images. Set `alt=""` on both tracking pixels. |
- | **P2** | Confirm `[UNIQUE]` token in the suppression pixel is substituted at send time; validate against a rendered test copy. |
- | **P2** | Fix the `<meta>` charset tag to include `http-equiv="Content-Type"`. |
- | **P3** | Reconcile `skechers` in the `utm_campaign` value if Nike-only attribution reporting is required. |
- | **P3** | Evaluate dark-mode stylesheet addition if Apple Mail / iOS Mail rendering is within scope. |

## Full review
---

# Walker Miles | Email Review
**From:** Shoe Carnival | **Subject:** 30% off Nike Spring Staples

---

## 1. Executive Summary

Well, I opened this thing expecting a Nike deal — that's what the subject line promised me. What I got was a yard sale. Nike, New Balance, Puma, Adidas, Skechers sandals, a Jordan sweepstakes... it's all jumbled together like they couldn't decide what they were selling. I'll give them credit: I spotted a Skechers section about halfway down, and the $10-off coupon at the bottom is genuinely useful. But nothing in this email made me feel like Shoe Carnival knows who I am or what I buy. This is a blast-to-everyone email wearing a personalization costume.

---

## 2. Business Impact Score

**4 / 10**

The coupon saves it from a 3. But the scattered layout, wrong-brand hero, and irrelevant lifestyle imagery leave a lot of revenue on the table for someone like me.

---

## 3. What's Working

- **The Skechers Sandal Sale block is present.** Starting at $39.98 and showing 2X points — that gets my attention. That's the one section that actually speaks to me.
- **The $10 off coupon ($74.98+) with a barcode.** Simple, actionable, works in-store too. I can actually picture myself pulling this up at the register. That's practical, and I like practical.
- **"Trending styles for you" section.** At least they're trying to personalize. I can't make out the exact shoes at this size, but the intent is there.

---

## 4. What's Weak

- **The subject said Nike. The email said everything.** That's a bait-and-switch. The Nike section is first but it's buried under the words "SPORTY SPRING STAPLES" — not exactly how I talk about buying shoes. The rest of the email is four other brands. Pick a lane.
- **"PLAY. SHOOT. WIN." Jordan sweepstakes.** I'm 62. I don't play basketball and I'm not entering a sweepstakes to win a pair of Jordans. This section belongs in a completely different email going to a completely different customer. It wastes space and makes me feel like I'm on the wrong mailing list.
- **Women in athletic wear, kids' pricing.** The athletic section image appears to show a woman in workout gear, and there's a "Kids starting at $39.98" callout. I'm a single guy browsing Men's. Where's the men's content?
- **Text is tiny.** Looking at this on my phone, almost everything below the hero requires pinching to zoom. Not great.
- **The preview text was a tracking URL.** That's embarrassing. More on that below.
- **No slip-in or comfort tech callout.** I'm a Skechers loyalist specifically because of Slip-ins. They have a Skechers sandal section but nothing that says "comfort" or "hands-free." That's the whole reason I buy.

---

## 5. Recommendations

1. **Segment me by what I actually buy.** If Shoe Carnival has my purchase history, lead with men's comfort shoes — Skechers Slip-ins, walking shoes, wide width options. Not a women's athletic shot and a kids' price point.
2. **The Skechers block should be higher.** If they know I'm a Skechers buyer, move that section to the hero or at least second position. Don't make me scroll past Nike and New Balance to find what I care about.
3. **Kill the Jordan sweepstakes for this segment.** Or at minimum, put it at the very bottom below the coupon. It dilutes the message and makes the email feel untargeted.
4. **Bigger text, fewer sections.** Four sale categories plus a sweepstakes plus a personalization strip plus a coupon is too much for one email. On my phone this is exhausting to read.
5. **Fix the preheader.** A click-tracking URL as preview text is unprofessional and wastes prime inbox real estate.

---

## 6. Bottom Line

I might clip that $10-off coupon and use it if I'm in the area. I won't actively shop for anything, because nothing in this email targeted *me* specifically — it just happened to include Skechers somewhere in the middle. If this email were laser-focused on men's comfort footwear with a real Skechers Slip-in offer at the top, I'd be clicking within 30 seconds. As built, I scrolled through, shrugged, and moved on.

---

## 7. Subject Line Analysis

- **Subject:** `30% off Nike Spring Staples`
- **Length:** 30 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `2`, Urgency `3`, Specificity `6`
- **Strengths:**
  - Short and scannable — I read it in one glance on my phone
  - The 30% figure is concrete and credible
- **Weaknesses:**
  - Promises Nike, delivers a multi-brand yard sale — erodes trust when you open it
  - Zero personalization; "Spring Staples" is vague marketing language that means nothing to me
- **Alt A:** `Walker, your Skechers sandal sale starts now — up to 30% off`
- **Alt B:** `Men's comfort shoes on sale: 30% off + $10 off coupon inside`

---

## 8. Preview Text Analysis

- **Preview:** `Shoe Carnival https://click.email.shoecarnival.com/?qs=ABB7InYiOjEsImQiOjQ4NTh9AAwAAAAAAERH0nlmPvRDd9gE2rKHdknvCrt9bhJz9Hv4sUaqCJvXtf4AhOpHJWdtkRt_84LJVzNoaXLFvyF3oS765JVQVPA2ZOk93C9UY`
- **Length:** ~200+ characters (URL dominates)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None visible — this is a straight failure
- **Weaknesses:**
  - A raw click-tracking URL leaked into the preheader, making the preview completely unreadable
  - Wastes the single best piece of real estate outside the subject line
- **Alt A:** `Up to 30% off + $10 off your next purchase — in store or online`
- **Alt B:** `Skechers, Nike & more on sale this week. Grab your $10 coupon.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** I know Shoe Carnival — I've been there a few times — and "30% off" is the kind of number that makes me glance twice. But Nike isn't my brand, and the preview text was a garbled URL that told me nothing. I probably opened it more out of habit than excitement, and mostly because the 30% figure was concrete.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** The Skechers sandal block and the $10 coupon are the only two things that came close to making me tap — but the sandal image is small, the copy doesn't mention comfort or Slip-ins, and the overall email is so scattered I lost steam by the time I scrolled there. I'd probably screenshot the coupon barcode at most.

---

## 11. Evidence

- **Overall purpose:** Multi-brand spring sale promotion with a coupon as secondary hook
- **Hero / primary value proposition:** "Save on Sporty Spring Staples — Up to 30% off" with Nike branding; large enough to read, but mismatches the subject-line promise once you see the full email
- **Membership / benefits section:** Skechers block includes "SHOP 2X PTS" badge — good signal for loyalty members, but easy to miss at this size and position
- **Product discoverability / recommendation modules:** "Here are some trending styles for you" strip with shoe thumbnails — appreciated the attempt, but shoes are too small to identify at mobile size; "Shop All Styles" CTA is generic
- **Utility / secondary modules:** "$10 OFF $74.98+" in-store and online coupon with barcode and promo code EXTRA10 — this is the clearest, most actionable element in the entire email
- **Bugs / friction / clarity issues:** Preview text leaked a full click-tracking URL — visually visible in the inbox before open; all body text below the hero renders quite small on mobile; the "Kids starting at $39.98" sub-label inside the athletic section appears next to adult pricing in a way that's visually confusing at a glance

---

## Technical Audit

## Technical Audit — Shoe Carnival: "30% off Nike Spring Staples"

---

### 1. Technical Summary

Four tracking/redirect links are broken due to a zero-width space character (U+200B) embedded in UTM parameter values, rendering click tracking and redirect resolution non-functional for those links. Authentication header status is unverified at ingest, leaving deliverability disposition unknown.

---

### 2. Link & Tracking Issues

**CRITICAL — Zero-width space in tracking URLs (4 links)**

All four failing links share the same root cause: a U+200B (ZERO WIDTH SPACE) appears at character position 85–86 inside the `utm_campaign` parameter value, immediately after the trailing `AM` in `SCA_20260426_nike_skechers_athletics_AM​`.

Evidence (QA FAIL):
```
https://ieezzy5m.emltrk.com/v2/ieezzy5m?rd&i=72180589&t=utm_campaign=SCA_20260426_nike_skechers_athletics_AM​
https://ieezzy5m.emltrk.com/v2/ieezzy5m?rl&i=72180589&t=...AM​
https://ieezzy5m.emltrk.com/v2/ieezzy5m?p&i=72180589&t=...AM​
https://ieezzy5m.emltrk.com/v2/ieezzy5m?f&i=72180589&t=...AM​
```

The character is invisible in most editors and is not ASCII-safe. When the tracking server attempts to URL-decode or forward the click, it will either throw a codec error (as observed) or silently truncate the parameter. Most likely origin: copy-paste from a rich-text source (Google Docs, Notion, Word) into the campaign template or ESP URL builder. All four affected link types (`rd`=redirect, `rl`=read, `p`=pixel, `f`=forward) indicate this is a template-level injection, not isolated to one CTA.

**INFO — 25 tracking links skipped**

Tracking/redirect domains were not probed for HTTP status. No actionable issue confirmed, but live link validation against `ieezzy5m.emltrk.com` should be performed in a send-environment check.

---

### 3. Rendering & Accessibility

**WARN — 6 images missing `alt` text**

Images with empty or absent `alt` attributes:

| Image | URL fragment |
|---|---|
| Product image | `98349_308794_1.jpg` (demandware.static) |
| Product image | `105076_412723_1.jpg` (demandware.static) |
| Product image | `179490_408416_1.jpg` (demandware.static) |
| Content image | `09617974-358d-42df-9ab2-0e156cf11d2e.jpg` (image.email.shoecarnival.com) |
| Open-tracking pixel | `ieezzy5m.emltrk.com/v2/ieezzy5m?i=72180589...` |
| Suppression pixel | `0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]` |

Product images lacking `alt` degrade accessibility for screen reader users and break the readable fallback in image-off clients (Outlook default, Gmail Data Saver). Tracking pixels should carry `alt=""` (empty, not absent) to satisfy validators silently.

**MINOR — `<meta>` charset tag malformed**

```html
<meta content="text/html;" charset="utf-8" />
```

The `http-equiv="Content-Type"` attribute is missing. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

Most clients tolerate this, but it is a spec violation that could affect strict parsers.

**MINOR — Dark mode not supported**

```html
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
```

The email declares light-mode only. No `@media (prefers-color-scheme: dark)` block is present. Apple Mail, iOS Mail, and Outlook for Mac will not adapt. This is a known intentional choice in many ESP templates but should be flagged if dark-mode rendering is a requirement.

---

### 4. Personalization & Merge Tokens

The HTML source provided is truncated and no merge/substitution tokens are visible in the excerpt. Cannot confirm token syntax or fallback values. The open-pixel URL contains `[UNIQUE]` as a literal placeholder token:

```
https://0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]
```

If `[UNIQUE]` is the ESP's substitution syntax and it resolved correctly in the final send, no issue. If this is in the raw template as-is and was not substituted at send time, the suppression/dedup pixel will not function correctly. Verify against a rendered seed send.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**WARN — SPF/DKIM status unverifiable**

```
Authentication-Results header not found: Expected via AgentMail relay — SPF/DKIM status unknown
```

The email was relayed through AgentMail but no `Authentication-Results` header was captured. This prevents confirming DMARC alignment. Sending domain is `email.shoecarnival.com`; the ESP (`ieezzy5m.emltrk.com` / `emltrk.com`) must be authorized in the `shoecarnival.com` SPF record and DKIM-sign with a `d=shoecarnival.com` or aligned subdomain. Without confirmed headers, deliverability posture is unknown.

**INFO — CAN-SPAM / unsubscribe mechanics not confirmable from truncated source**

Physical mailing address and one-click unsubscribe cannot be verified from the provided excerpt. These should be confirmed present in the footer during full-source review.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

The campaign token `SCA_20260426_nike_skechers_athletics_AM` embeds both `nike` and `skechers` in a send whose subject line promotes Nike exclusively. If the tracking parameter flows through to Google Analytics or any attribution system, the `skechers` term in the campaign name will create noise in Nike-specific reporting. This is a data hygiene issue, not a broken link, but it will skew attribution.

The U+200B corruption (see §2) means the `utm_campaign` value as delivered to the ESP's tracking server is malformed. Even if clicks resolve, the campaign dimension in analytics will not match the intended `SCA_20260426_nike_skechers_athletics_AM` string — it will contain or be truncated by the invisible character.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Strip U+200B from all four tracking URLs in the template before any resend. Audit the upstream copy source (template builder or brief doc) for invisible Unicode. Add an ASCII-safety lint step to the pre-send QA pipeline. |
| **P1** | Verify `Authentication-Results` headers on a seed send through the AgentMail relay. Confirm SPF includes `emltrk.com` ESP infrastructure and DKIM `d=` aligns with `shoecarnival.com`. |
| **P1** | Add descriptive `alt` text to all three product images. Set `alt=""` on both tracking pixels. |
| **P2** | Confirm `[UNIQUE]` token in the suppression pixel is substituted at send time; validate against a rendered test copy. |
| **P2** | Fix the `<meta>` charset tag to include `http-equiv="Content-Type"`. |
| **P3** | Reconcile `skechers` in the `utm_campaign` value if Nike-only attribution reporting is required. |
| **P3** | Evaluate dark-mode stylesheet addition if Apple Mail / iOS Mail rendering is within scope. |
## Recent history

- [[2026-04-26-did-you-forget-something]] — 6/10 (2026-04-26)
- [[2026-04-26-your-items-are-waiting]] — 5/10 (2026-04-26)
- [[2026-04-26-last-day-10-off]] — 4/10 (2026-04-26)

