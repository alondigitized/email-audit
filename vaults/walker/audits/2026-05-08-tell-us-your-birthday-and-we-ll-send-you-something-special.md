---
slug: 2026-05-08-tell-us-your-birthday-and-we-ll-send-you-something-special
type: email
date: 2026-05-08
persona: walker
score: "5/10"
sender: Crocs
subject: Tell us your birthday and we’ll send you something special
tags: [email, score-5, sender/crocs]
---
# Tell us your birthday and we’ll send you something special
**Score:** 5/10 · **Type:** Email audit · **2026-05-08**
## Executive summary

- Well, here's one I wasn't expecting in my inbox this morning — Crocs wants to know my birthday so they can send me "something special." That's a pretty thin pitch to get me to log in and hand over personal information. I wear Skechers, not Crocs, so right off the bat this doesn't feel like it was sent to the right guy. The email looks clean enough on my phone — nothing broken — but it's mostly asking me to do work (log in, update my profile) in exchange for a mystery reward they won't even name. That's not how you get a 62-year-old to click.

## What's working

- The email is clean and loads fine on my phone, which matters to me. The "Celebrate Your Big Day in a BIG Way" headline is friendly and easy to read — no tiny fonts, no clutter. I appreciate that they mentioned the Crocs Club perks (40% off Jibbitz) in a clear callout. The "Pair Down Your Preferences" section is actually a good idea — I do get too much email from brands that doesn't apply to me, so the concept of telling them what I want sounds appealing. And honestly the Crocs logo is instantly recognizable, so I know who sent it.

## What's weak

- The ask is backwards. They want me to log in and give them my birthday before telling me what I'll get. "Something special" isn't a reason for me to do anything — just tell me if it's 20% off, a free pair, whatever. I'm not logging into any account for a mystery prize.
- The hero image shows a young family outdoors in a colorful lifestyle scene. That's not me. Nobody in that image looks remotely like a 62-year-old man. And Jibbitz charms? I don't even know what those are off the top of my head — they're the little decorations for kids' Crocs. That's not my world.
- There's no men's comfort product shown. No slip-ins, no men's casual shoes, nothing that says "hey Walker, we have something for you." The whole email reads like it was sent to the entire list without a second thought about who's on it.
- No concrete offer anywhere. Not a dollar amount, not a percentage, not a deadline. "Something special" is a marketing placeholder, not a reason to act.

## Recommendations

- 1. **Name the birthday offer upfront.** "Add your birthday and get 20% off your next order" beats "something special" every time. Don't make me guess.
- 2. **Show me a men's product.** I see zero men's shoes in this email. Even a small image of a men's casual clog or sandal would've pulled me in.
- 3. **Skip the Jibbitz push for men 60+.** Segment the audience. Charms are a kids/teens offer. Leading with that in the perks section loses guys like me immediately.
- 4. **One ask per email.** Birthday capture AND preferences AND account signup AND app download is too many things. Pick one.
- 5. **Fix the preheader.** All those weird characters in the preview text made this look like a broken email before I even opened it.
- **P0 — Fix before send:**
- 1. Upgrade all 8 `http://image.crocs-email.com/...` sources to `https://`. This is a one-line template fix; broken images in Gmail/Apple Mail are user-visible.
- **P1 — Fix this cycle:**
- 2. Add `alt=""` to the tracking pixel `<img>` to satisfy accessibility validators.
- 3. Reduce URL density in the plain-text part — strip redundant click-redirect URLs or replace with short canonical URLs. Target under 60% URL ratio to clear deliverability filters.
- 4. Decode a sample `qs` payload and confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are being appended on redirect to crocs.com. If not, configure the click-tracking platform to inject them.
- **P2 — Review:**
- 5. Pull a delivered copy and inspect headers for SPF pass, DKIM signature, and DMARC alignment before confirming send-domain health.
- 6. Verify footer includes physical address and unsubscribe link (source was truncated; cannot confirm).

## Full review
## Walker Miles Reviews: Crocs Birthday Email

---

### 1. Executive Summary

Well, here's one I wasn't expecting in my inbox this morning — Crocs wants to know my birthday so they can send me "something special." That's a pretty thin pitch to get me to log in and hand over personal information. I wear Skechers, not Crocs, so right off the bat this doesn't feel like it was sent to the right guy. The email looks clean enough on my phone — nothing broken — but it's mostly asking me to do work (log in, update my profile) in exchange for a mystery reward they won't even name. That's not how you get a 62-year-old to click.

---

### 2. Business Impact Score

**5/10**

- Sender is a brand I recognize (Crocs — even if it's not my go-to)
- No render bugs — everything loaded, no broken images, text is readable
- Loyalty / member benefits are visible (Crocs Club, 40% off Jibbitz packs)
- Offer feels honest — no obvious bait-and-switch, just vague
- Visual hierarchy is reasonably clear — eye goes to the hero first

---

### 3. What's Working

The email is clean and loads fine on my phone, which matters to me. The "Celebrate Your Big Day in a BIG Way" headline is friendly and easy to read — no tiny fonts, no clutter. I appreciate that they mentioned the Crocs Club perks (40% off Jibbitz) in a clear callout. The "Pair Down Your Preferences" section is actually a good idea — I do get too much email from brands that doesn't apply to me, so the concept of telling them what I want sounds appealing. And honestly the Crocs logo is instantly recognizable, so I know who sent it.

---

### 4. What's Weak

The ask is backwards. They want me to log in and give them my birthday before telling me what I'll get. "Something special" isn't a reason for me to do anything — just tell me if it's 20% off, a free pair, whatever. I'm not logging into any account for a mystery prize.

The hero image shows a young family outdoors in a colorful lifestyle scene. That's not me. Nobody in that image looks remotely like a 62-year-old man. And Jibbitz charms? I don't even know what those are off the top of my head — they're the little decorations for kids' Crocs. That's not my world.

There's no men's comfort product shown. No slip-ins, no men's casual shoes, nothing that says "hey Walker, we have something for you." The whole email reads like it was sent to the entire list without a second thought about who's on it.

No concrete offer anywhere. Not a dollar amount, not a percentage, not a deadline. "Something special" is a marketing placeholder, not a reason to act.

---

### 5. Recommendations

1. **Name the birthday offer upfront.** "Add your birthday and get 20% off your next order" beats "something special" every time. Don't make me guess.
2. **Show me a men's product.** I see zero men's shoes in this email. Even a small image of a men's casual clog or sandal would've pulled me in.
3. **Skip the Jibbitz push for men 60+.** Segment the audience. Charms are a kids/teens offer. Leading with that in the perks section loses guys like me immediately.
4. **One ask per email.** Birthday capture AND preferences AND account signup AND app download is too many things. Pick one.
5. **Fix the preheader.** All those weird characters in the preview text made this look like a broken email before I even opened it.

---

### 6. Bottom Line

This email didn't target me and didn't give me a reason to click. I'd read the subject, see "something special" with no details, and move on. If they'd told me "add your birthday, get 15% off men's shoes," I might've stopped. As it stands, it's a data-capture email dressed up as a reward, and I've been around long enough to recognize that. Not clicking.

---

### 7. Subject Line Analysis

- **Subject:** `Tell us your birthday and we'll send you something special`
- **Length:** 57 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `2`, Urgency `2`, Specificity `3`
- **Strengths:**
  - Friendly, conversational tone — doesn't feel pushy
  - Clear about what they're asking (tell us your birthday)
- **Weaknesses:**
  - "Something special" is deliberately vague — removes the main reason to open for someone like me
  - No targeting signal — same subject line could go to a 16-year-old girl or a 62-year-old man
- **Alt A:** `Birthday coming up? Crocs Club has a gift waiting for you`
- **Alt B:** `Add your birthday — get [X]% off your next pair`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — renders as "Crocs" followed by a string of invisible spacer characters (`&zwnj;` repeated), contributing nothing
- **Length:** Effectively 5 visible characters ("Crocs")
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - At minimum the brand name appears, so it doesn't show raw HTML gibberish visibly in most clients
- **Weaknesses:**
  - Zero additional information — I see the subject and then... "Crocs." That tells me nothing new
  - Completely wasted preheader real estate — a second chance to give me a reason to open, blown entirely
- **Alt A:** `Members get exclusive birthday perks — just add your birthday to your profile`
- **Alt B:** `Log in, add your birthday, and we'll surprise you with something worth opening`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Signals counted:** Sender display name recognizable (Crocs), subject is concrete about the action requested, no spam signals (no ALL CAPS or !!! stacking)
- **Rationale:** I recognize Crocs and the subject isn't offensive or spammy, so I might glance at it. But the vague payoff and a dead preheader don't give me any reason to stop scrolling. Three out of ten opening signals is a middling result — I'd probably open it once just to see what "something special" means, then regret the time spent.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `2/10`
- **Signals counted:** Brand voice is consistent and trusted (Crocs is a real brand, no red flags)
- **Rationale:** Once I'm inside the email, there's no specific dollar offer, no men's product, no clear button that says "get my deal," and the main ask is to log in and hand over my birthday. That's friction I don't need. The only thing keeping this from a 1 is that Crocs is a legitimate brand I trust not to scam me — but trust alone doesn't make me click.

---

### 11. Evidence

- **Overall purpose:** Birthday data capture — get subscribers to log in to Crocs.com and add their birthdate in exchange for a future unspecified offer
- **Hero / primary value proposition:** "Celebrate Your Big Day in a BIG Way" — log in and add birthday for a special offer. No dollar amount, no product shown, no button visible in the hero
- **Membership / benefits section:** Crocs Club blue banner and "Creating An Account Has Perks" callout — mentions 40% off Jibbitz packs and order tracking as account benefits
- **Product discoverability / recommendation modules:** "Pair Down Your Preferences" module with an image of beige/tan classic Crocs clogs — framed as email preference personalization, not a product push
- **Utility / secondary modules:** Category footer nav (Women, Men, Kids, Jibbitz Charms with "Shop Now" links), App Store / Google Play download buttons, social media icons
- **Bugs / friction / clarity issues:** No visible broken images or layout crashes. The "Pair Down Your Preferences" copy is small and a bit dense on mobile. The main CTA for birthday capture has no visible button — I can see the text instruction but no tappable element stands out as the clear next step. Fine print at the bottom is very small.

---

## Technical Audit

## Technical Audit — Crocs Birthday Preference Email

---

### 1. Technical Summary

The email is structurally sound with proper responsive breakpoints and Apple/Gmail client workarounds, but carries 8 HTTP (non-HTTPS) image sources that will be blocked or proxied by modern clients, and a plain-text body that is URL-heavy enough to trigger deliverability filters.

---

### 2. Link & Tracking Issues

**QA flagged 37 tracking links skipped** — all CTAs route through `click.crocs-email.com/?qs=<opaque base64>`. The destination URL and any UTM parameters are encoded inside the `qs` blob and cannot be statically verified without decoding.

**No bare UTM parameters are visible** on any `href` in the source. This is expected for a redirect-based click tracker, but means QA cannot confirm UTM coverage without decoding the `qs` payloads or auditing the click-tracking platform's redirect config.

**Plain-text part is 79.8% URLs** (7,349 / 9,204 chars). Spam filters penalize plain-text parts that are predominantly machine-generated URLs. This ratio exceeds the 70% warning threshold.

---

### 3. Rendering & Accessibility

**8 image `src` attributes use `http://` instead of `https://`:**

| Alt text | Filename |
|---|---|
| *(missing)* | `3bf2b026-9650-4bab-a555-717c3e4cbe36.png` |
| Download on the App Store | `7462caab-b5fb-4f36-ad57-598effe0e45e.png` |
| Get it on Google Play | `f744a0ca-a299-4bd9-a0dc-e259d2d5f780.png` |
| Instagram | `072197b5-fcef-4784-809b-3453b8b7abea.png` |
| TikTok | `ddc4ffa6-81a7-4dda-b456-d3314351e7d0.png` |
| YouTube | `1ba1d5d1-3ccc-4ae1-9d8a-a7e54e1b9bb4.png` |
| Facebook | `92f76fa0-21d5-4955-9faa-763e761e496a.png` |

All sourced from `http://image.crocs-email.com/...`. Gmail, Outlook.com, and Apple Mail proxy or block mixed-content image loads; these images will render broken for a significant portion of recipients.

**Tracking pixel missing `alt` attribute:**
```html
<img style="visibility:hidden;display:none" height="1" width="1"
  src="https://demandwarecrocs.demdex.net/event?...">
```
While invisible, a missing `alt` on any `<img>` generates accessibility tool warnings and can flag spam heuristics. Should be `alt=""`.

**`@import` in `<style>` for Typekit font:**
```css
@import url("https://use.typekit.net/vqb8ega.css");
```
`@import` inside `<style>` blocks is ignored by Outlook (all versions) and several webmail clients. The font stack correctly falls back to `sans-serif` via `proxima-nova, sans-serif`, so this is low-severity but the font will not render in Outlook.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the truncated source. The `d_dpuid` and `c_subscriberID` parameters in the tracking pixel appear to be live hashed/numeric values, not placeholder tokens:

```
d_dpuid=9153f33fe5cdf59baf088bb835d3b39ef90f188bd8540a4faba92899227ced00
c_subscriberID=400467828
```

The email body is truncated in the provided source; full source review is needed to confirm no unresolved tokens exist in the birthday-capture form section or footer.

---

### 5. Compliance

**CAN-SPAM / CASL:**
The HTML is truncated before the footer — unsubscribe link, physical mailing address, and preference center link cannot be confirmed present. These are mandatory. A full-source audit is required.

**Sender domain:** `email@crocs-email.com` is a dedicated sending subdomain, which is correct practice. SPF/DKIM/DMARC alignment cannot be verified from HTML source alone; authentication headers must be checked on a delivered copy.

**Preheader implementation is correct:**
```html
<div class="preheader" style="font-size:1px;display:none !important">
```
Uses both CSS hiding and a `display:none` style — standard pattern, no issue.

---

### 6. Email-to-Site Continuity

All CTAs use opaque click-redirect URLs (`click.crocs-email.com/?qs=...`). UTM parameter coverage on the final destination (crocs.com) cannot be verified from the HTML source. The QA tool skipped all 37 tracking links, so no broken-link detection ran against them.

The `campaignID` embedded in the tracking pixel is `us_x_trigger_welcome-communicationpreference_x`, which is consistent with a birthday/preference capture trigger flow — no discontinuity detectable from available data.

---

### 7. Recommendations

**P0 — Fix before send:**
1. Upgrade all 8 `http://image.crocs-email.com/...` sources to `https://`. This is a one-line template fix; broken images in Gmail/Apple Mail are user-visible.

**P1 — Fix this cycle:**
2. Add `alt=""` to the tracking pixel `<img>` to satisfy accessibility validators.
3. Reduce URL density in the plain-text part — strip redundant click-redirect URLs or replace with short canonical URLs. Target under 60% URL ratio to clear deliverability filters.
4. Decode a sample `qs` payload and confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are being appended on redirect to crocs.com. If not, configure the click-tracking platform to inject them.

**P2 — Review:**
5. Pull a delivered copy and inspect headers for SPF pass, DKIM signature, and DMARC alignment before confirming send-domain health.
6. Verify footer includes physical address and unsubscribe link (source was truncated; cannot confirm).
## Recent history

- [[2026-05-08-i-can-t-believe-these-are-crocs]] — 5/10 (2026-05-08)
- [[2026-05-08-every-great-story-starts-somewhere]] — 4/10 (2026-05-08)
- [[2026-05-07-spotlight-skyward-x-2]] — 7/10 (2026-05-07)

