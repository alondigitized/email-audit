---
slug: 2026-05-06-become-a-new-balance-member
type: email
date: 2026-05-06
persona: walker
score: "4/10"
sender: New Balance
subject: Become a New Balance member
tags: [email, score-4, sender/new-balance]
---
# Become a New Balance member
**Score:** 4/10 · **Type:** Email audit · **2026-05-06**
## Executive summary

- This is a cold acquisition email from New Balance asking me — a non-member — to create a free account. The pitch is built around membership perks: free shipping, birthday rewards, member-only offers, 3D foot scan, event invitations, and early access. Clean layout, no broken visuals. But here's my problem right out of the gate: I'm a 62-year-old Skechers Plus guy. This landed in my inbox from a brand I recognize but don't have a relationship with. And it's asking me to commit to signing up before it's even shown me a single shoe I'd want to buy. That's backwards. Lead with the product, then hook me on the club.

## What's working

- The benefit grid is clear. Six tiles — Free Shipping & Returns, Special Offers, Birthday Rewards, 3D Foot Scan, Event Invitations, Early Access — are laid out cleanly and I can read them without squinting. The "Join" button is prominent and the "Learn more" secondary option is there if I need convincing. No broken images, no garbled text. That's the baseline, and they hit it.
- The free shipping angle is the strongest hook for someone like me. I hate paying for shipping. If I was already shopping New Balance, that alone might push me to sign up.

## What's weak

- **Wrong person in the hero.** The lead image shows a young woman in a blue athletic outfit with other young people behind her. At 62, I'm not seeing myself anywhere in this email. Not a single model who looks like they've got a few decades on them. That's a miss.
- **Ask before the sell.** They're asking me to join a club before I've seen one product I want. That's like a store greeter handing you a loyalty card before you've walked through the door. Show me the shoes first.
- **The 3D foot scan is interesting but vague.** I actually care about fit — my feet aren't what they were. But "3D foot scan" with no explanation of how it works or what I have to do doesn't move me. Is it in-store only? Can I do it at home? I don't know.
- **Email invitations to what?** "Event invitations" — I have no idea what that means. New Balance races? Store openings? That tile is completely empty for me without more context.
- **Subject line is generic.** "Become a New Balance member" could be sent to literally anyone. There's nothing in it that says this is for me specifically.

## Recommendations

- 1. **Lead with a shoe, then the club.** Show me a specific men's comfort runner or walking shoe I'd actually want, then close with "Join to get free shipping on orders like this."
- 2. **Get a model who looks like me.** Swap or supplement the hero with someone 55-65. I buy more shoes than 25-year-olds — market to me.
- 3. **Add a concrete welcome perk.** "Join today and get 15% off your first order" would get me to tap immediately. Right now there's no urgency.
- 4. **Explain the 3D scan.** One line — "In-store or at home, scan your foot for a perfect fit recommendation" — and that tile goes from confusing to compelling.
- 5. **Time-bound the offer.** "Join by Sunday" or "Limited-time welcome offer" gives me a reason to act now instead of closing the app and forgetting about it.
- | Priority | Issue | Fix |
- |---|---|---|
- | P0 | `.bgwhite` background image URL is a literal placeholder (`XXXXX`) | Replace with production CDN URL before send |
- | P0 | All `@font-face` blocks missing `src:` | Add `src: url('...')` or remove blocks and rely on fallbacks intentionally |
- | P1 | `.bg1` defined twice (`#ffffff` vs `#58546d`) | Remove or rename duplicate; audit all elements using `.bg1` |
- | P1 | Dark mode `a { color: !important }` clobbers CTA button text | Scope dark mode override to `a:not([class*="cta"])` or apply per-component overrides |
- | P2 | `<meta content="IE=edge">` missing `http-equiv` | Add `http-equiv="X-UA-Compatible"` |
- | P2 | `http://` background image URL | Change to `https://` |
- | P3 | Malformed `@font-face` double `font-family` property | Fix line concatenation error in template source |
- | — | Run audit on full HTML | Compliance, UTM, and personalization checks are incomplete on truncated source |

## Full review
---

## 1. Executive Summary

This is a cold acquisition email from New Balance asking me — a non-member — to create a free account. The pitch is built around membership perks: free shipping, birthday rewards, member-only offers, 3D foot scan, event invitations, and early access. Clean layout, no broken visuals. But here's my problem right out of the gate: I'm a 62-year-old Skechers Plus guy. This landed in my inbox from a brand I recognize but don't have a relationship with. And it's asking me to commit to signing up before it's even shown me a single shoe I'd want to buy. That's backwards. Lead with the product, then hook me on the club.

---

## 2. Business Impact Score

**4/10**

- ✅ Sender is a brand I recognize (New Balance is a household name)
- ✅ One concrete offer is implied (free membership — no cost to join)
- ✅ Primary CTA is unambiguous — "Join" button is clearly visible
- ✅ No render bugs — everything looks clean and loads fine

Criteria that were NOT true:
- ✗ Subject/hero copy doesn't reference my focus area (comfort tech, slip-ins, men's casual)
- ✗ Visual hierarchy buries the offer behind a generic hero image
- ✗ Demographic signals are off — hero image shows a young woman in athletic wear, not anyone who looks like me
- ✗ No loyalty/member pricing or Skechers Plus crossover — I'm already loyal elsewhere
- ✗ Nothing season-specific or time-bounded
- ✗ Offer honesty is fine but 3D foot scan feels abstract without context

---

## 3. What's Working

The benefit grid is clear. Six tiles — Free Shipping & Returns, Special Offers, Birthday Rewards, 3D Foot Scan, Event Invitations, Early Access — are laid out cleanly and I can read them without squinting. The "Join" button is prominent and the "Learn more" secondary option is there if I need convincing. No broken images, no garbled text. That's the baseline, and they hit it.

The free shipping angle is the strongest hook for someone like me. I hate paying for shipping. If I was already shopping New Balance, that alone might push me to sign up.

---

## 4. What's Weak

**Wrong person in the hero.** The lead image shows a young woman in a blue athletic outfit with other young people behind her. At 62, I'm not seeing myself anywhere in this email. Not a single model who looks like they've got a few decades on them. That's a miss.

**Ask before the sell.** They're asking me to join a club before I've seen one product I want. That's like a store greeter handing you a loyalty card before you've walked through the door. Show me the shoes first.

**The 3D foot scan is interesting but vague.** I actually care about fit — my feet aren't what they were. But "3D foot scan" with no explanation of how it works or what I have to do doesn't move me. Is it in-store only? Can I do it at home? I don't know.

**Email invitations to what?** "Event invitations" — I have no idea what that means. New Balance races? Store openings? That tile is completely empty for me without more context.

**Subject line is generic.** "Become a New Balance member" could be sent to literally anyone. There's nothing in it that says this is for me specifically.

---

## 5. Recommendations

1. **Lead with a shoe, then the club.** Show me a specific men's comfort runner or walking shoe I'd actually want, then close with "Join to get free shipping on orders like this."
2. **Get a model who looks like me.** Swap or supplement the hero with someone 55-65. I buy more shoes than 25-year-olds — market to me.
3. **Add a concrete welcome perk.** "Join today and get 15% off your first order" would get me to tap immediately. Right now there's no urgency.
4. **Explain the 3D scan.** One line — "In-store or at home, scan your foot for a perfect fit recommendation" — and that tile goes from confusing to compelling.
5. **Time-bound the offer.** "Join by Sunday" or "Limited-time welcome offer" gives me a reason to act now instead of closing the app and forgetting about it.

---

## 6. Bottom Line

I'm not clicking. Not because the email is broken — it's not — but because it gives me no reason to act today. New Balance hasn't shown me a single shoe I want, the people in the photos look nothing like me, and joining a loyalty program for a brand I don't regularly shop feels like a chore. If they'd led with a sharp men's comfort shoe and sweetened the join with a discount, I'd at least hover over that button.

---

## 7. Subject Line Analysis

- **Subject:** `Become a New Balance member`
- **Length:** 31 characters
- **Scores (1-10):** Clarity `7`, Curiosity `3`, Personalization `1`, Urgency `1`, Specificity `3`
- **Strengths:**
  - Short and mobile-friendly — well under 50 chars, renders clean on my phone
  - Brand name front-loaded so I know who it's from
- **Weaknesses:**
  - Zero urgency — nothing compelling me to open now vs. never
  - No hook for my persona — "member" is generic, doesn't reference comfort, walking, men's, or any benefit I care about
- **Alt A:** `Walker, free shipping on every New Balance order — join today`
- **Alt B:** `Your feet deserve better. Join New Balance for free.`

---

## 8. Preview Text Analysis

- **Preview:** `Create your free account today. Learn more.`
- **Length:** 42 characters (before the filler characters begin)
- **Scores (1-10):** Complements subject `3`, Specificity `3`, Clarity `6`, Inbox-fit `3`
- **Strengths:**
  - "Free account" clarifies there's no cost — removes one objection before I even open
  - Short enough to read before it gets cut off
- **Weaknesses:**
  - "Learn more" is a dead CTA phrase in a preheader — it adds nothing and wastes precious real estate
  - Essentially just restates the subject (join → create account) with no added benefit or hook; the trailing filler characters are visible noise
- **Alt A:** `Free shipping, birthday rewards + 3D fit scan — it's free to join`
- **Alt B:** `Members get free shipping on every order. Takes 60 seconds.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** 3/10
- **Signals counted:**
  - Sender display name is recognizable (New Balance is a known brand)
  - Subject is concrete (it names the action: become a member)
  - Subject is under 50 chars
- **Rationale:** I recognize New Balance, so I don't mark it spam, but nothing in the subject or preview gives me a reason to open right now. There's no offer, no urgency, no personalization — it reads like a mass acquisition blast, which is exactly what it is.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** 3/10
- **Signals counted:**
  - No friction — email loads cleanly, no broken images
  - Offer reduces price (free shipping is a real benefit)
  - Brand voice is consistent and trusted
- **Rationale:** The "Join" button is right there and free shipping is a legitimate hook, but there's no shoe, no discount off my first purchase, no deadline — and the models look nothing like me. I close the app without tapping.

---

## 11. Evidence

- **Overall purpose:** Cold membership acquisition — getting non-members to create a free New Balance account
- **Hero / primary value proposition:** "Become a member" headline over a lifestyle group shot; "Join" and "Learn more" CTAs directly below
- **Membership / benefits section:** Six-tile benefit grid — Free Shipping & Returns, Special Offers, Birthday Rewards, 3D Foot Scan, Event Invitations, Early Access — with small supporting images and short copy for each
- **Product discoverability / recommendation modules:** None. Not a single product is shown. No shoes, no apparel, no pricing.
- **Utility / secondary modules:** Footer with Routing, Mailing, Unsubscribe links; social icons; legal address block
- **Bugs / friction / clarity issues:** No visible render bugs. The trailing filler characters in the preview text are visible in the inbox view but don't damage the in-email experience. The hero image skews young and female — not a bug, but a targeting miss that's visible and notable.

---

## Technical Audit

## Technical Audit — New Balance "Become a Member"

**From:** `newbalance@email.newbalance.com` | **Subject:** Become a New Balance member

---

### 1. Technical Summary

The HTML shell has several CSS authoring defects — a duplicate class collision, malformed `@font-face` blocks without `src:` declarations, and a broken meta tag — that will silently degrade rendering. The source is truncated, so compliance and link-tracking sections reflect what is visible; items marked ⚠️ require full-source verification.

---

### 2. Link & Tracking Issues

**⚠️ Cannot fully verify — source truncated.** No link markup is visible in the provided excerpt.

**Confirmed issue — HTTP background image:**
```css
.bgwhite { background-image: url('http://image.XXXXX.png'); }
```
Two problems: (1) the domain is a placeholder (`XXXXX`) that was never substituted, meaning this background image will 404 in production; (2) the URL uses `http://` rather than `https://`, which will trigger mixed-content warnings in clients that render inside a secure context (Gmail, Outlook.com).

---

### 3. Rendering & Accessibility

**`@font-face` blocks are invalid — all custom fonts will silently fall back.**
Every `@font-face` rule declares `font-family`, `font-weight`, and `font-style` but omits `src:`. Without a source URL the browser/client cannot fetch the font file. Affected faces: `proxima-nova` (all weights/styles), `linotype-didot`, `proxima-nova-extra-condensed`, `proxima-nova-condensed`, `ITC Garamond Book Condensed`. The fallback chain (`Arial, sans-serif` / `Times New Roman, serif`) will render instead.

**Malformed `@font-face` block — duplicate `font-family` property:**
```css
@font-face {
  font-family: proxima-nova,sans-serif;
  font-weight: 700;
  font-style: italic;font-family: proxima-nova,sans-serif;  /* ← injected second declaration */
}
```
The second `font-family` is crammed onto the same line without a newline, creating invalid CSS. Any parser applying strict rules will discard the entire block.

**`.bg1` class defined twice with conflicting values:**
```css
/* First definition (line ~15): */
.bg1 { background-color: #ffffff; }

/* Second definition (line ~120): */
.bg1 { background: #58546d; }   /* purple-gray — overrides */
```
Elements using `.bg1` expecting a white background will render with `#58546d` (dark purple-gray) due to cascade order. This is likely a template merge error.

**Dark mode `!important` override blankets all link colors:**
```css
@media (prefers-color-scheme: dark) {
  a { color: #cf0a2c !important; }
}
```
This forces NB red on every `<a>` in dark mode, including CTA button text links that use `.cta1a`/`.cta1b` (white text on dark background). Button text will become red-on-dark-background in dark mode, failing WCAG 4.5:1 contrast.

**`<meta>` tag missing `http-equiv` attribute:**
```html
<meta content="IE=edge" />
```
Should be `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`. As written, this tag is a no-op and will not trigger IE edge-rendering mode.

**Single responsive breakpoint at 414px only:**
```css
@media only screen and (max-width:414px) { .image1 { ... } }
```
Only `.image1` is responsive. No breakpoints exist for other layout elements. This is a design-scope note, but it means the email is not fluid on non-414px mobile viewports.

---

### 4. Personalization & Merge Tokens

**⚠️ Cannot verify — source truncated.** No merge/personalization tokens (e.g., `%%FIRSTNAME%%`, `{{first_name}}`, `[FIRST NAME]`) are visible in the visible excerpt. Subject line "Become a New Balance member" contains no personalization token, which is expected for a generic acquisition/welcome send.

---

### 5. Compliance

**⚠️ Cannot verify — source truncated.** The following CAN-SPAM requirements could not be confirmed from the excerpt alone:
- Physical mailing address present in footer
- Functioning unsubscribe link (one-click or clear opt-out mechanism)
- Unsubscribe link must be operable for ≥ 30 days post-send

No sending-domain authentication headers (SPF, DKIM, DMARC) are inspectable from HTML source alone. These must be verified against received mail headers or DNS records for `email.newbalance.com`.

---

### 6. Email-to-Site Continuity

**⚠️ Cannot verify — no `<a href>` tags visible in truncated source.** UTM parameter coverage on CTA links and landing page alignment cannot be assessed. Recommend re-running audit against full HTML export.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| P0 | `.bgwhite` background image URL is a literal placeholder (`XXXXX`) | Replace with production CDN URL before send |
| P0 | All `@font-face` blocks missing `src:` | Add `src: url('...')` or remove blocks and rely on fallbacks intentionally |
| P1 | `.bg1` defined twice (`#ffffff` vs `#58546d`) | Remove or rename duplicate; audit all elements using `.bg1` |
| P1 | Dark mode `a { color: !important }` clobbers CTA button text | Scope dark mode override to `a:not([class*="cta"])` or apply per-component overrides |
| P2 | `<meta content="IE=edge">` missing `http-equiv` | Add `http-equiv="X-UA-Compatible"` |
| P2 | `http://` background image URL | Change to `https://` |
| P3 | Malformed `@font-face` double `font-family` property | Fix line concatenation error in template source |
| — | Run audit on full HTML | Compliance, UTM, and personalization checks are incomplete on truncated source |
## Recent history

- [[2026-05-05-move-fast-for-mother-s-day]] — 7/10 (2026-05-05)
- [[2026-05-05-footwear-favorites]] — 5/10 (2026-05-05)
- [[2026-05-05-found-sleek-sandals-more]] — 7/10 (2026-05-05)

