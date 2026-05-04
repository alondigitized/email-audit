---
slug: 2026-05-04-extra-20-off-ends-tonight
type: email
date: 2026-05-04
persona: walker
score: "6/10"
sender: Famous Footwear
subject: Extra 20% off ENDS TONIGHT ⏳
tags: [email, score-6, sender/famous-footwear]
---
# Extra 20% off ENDS TONIGHT ⏳
**Score:** 6/10 · **Type:** Email audit · **2026-05-04**
## Executive summary

- Not my store, not my shoes, not my deal. Famous Footwear is blasting out a multi-brand, multi-gender sale that has something for everybody — which means it really doesn't feel designed for anybody like me. There's a Skechers block buried about halfway down, which is the one thing that would've made me stop scrolling, but you have to wade through a bunch of women's sandals and Crocs to get there. The preview text is a raw tracking URL — I don't know what that is but it looked like gibberish in my inbox and nearly made me hit delete before I even opened the thing.

## What's working

- The **hero offer is impossible to miss** — "20% off" in big text at the top, and it reads clearly on a phone without zooming. Good. The **Skechers block is in there**, and as a Skechers guy that's the one thing that earns a second look from me. The **"ends tonight" urgency** is real and specific — that kind of deadline gets me to act faster than "limited time only" nonsense. The email loaded clean with no broken images, which sounds basic but I've seen plenty that don't.

## What's weak

- **The preview text is a URL.** Not a teaser, not a product name — a long string of letters and numbers that looked like spam. That almost cost them the open right there. On my phone, the subject says "Extra 20% off ENDS TONIGHT" and then right next to it is a web address. That's not inviting, that's suspicious.
- **Women's shoes lead the body.** The "40% off Women's Arrivals" section is near the top with models in sandals. I'm a 62-year-old guy browsing for myself — I skipped right past that. It made me feel like the wrong person got this email.
- **Too many brands, too little focus.** Crocs, Skechers, Nike, Brooks — they're all stacked in their own little boxes. It looks like a clearance rack flyer, not a curated offer. I don't want to shop a flyer, I want someone to show me something I'd actually wear.
- **No acknowledgment I'm a customer.** No "Hi Walker" or "Member deal" — just a generic blast. I give Famous Footwear my business and they treat me like a cold prospect.

## Recommendations

- 1. **Fix the preview text immediately.** Put "Men's comfort styles included — extra 20% off" or even just the offer summary. Anything real beats a tracking link.
- 2. **Lead with men's content** for male-skewing segments, or at minimum put the hero block above the women's section.
- 3. **Surface the Skechers block higher** — if you know I buy Skechers, that's your hook. Let the brand I trust do the heavy lifting.
- 4. **Add one product call-out.** Show me a specific shoe with a before/after price. "Slip-ins, was $79, now $63" — that's what makes me tap.
- 5. **Acknowledge the loyalty relationship** even with something small — a "Members get an extra 5%" line costs nothing and makes me feel seen.
- | Priority | Issue | Fix |
- |---|---|---|
- | **High** | 2× HTTP LiveContent images (`cl.S7.exct.net`) | Switch SFMC LiveContent blocks to HTTPS endpoint — confirm with ESP support whether `https://cl.S7.exct.net/...` is available |
- | **High** | Logo and primary CTA images have empty `alt` | Add descriptive alt text: `alt="Famous Footwear"`, `alt="Shop Extra 20% Off"`, etc. |
- | **Medium** | 4× iGoDigital recommendation images have no alt | Add generic fallback: `alt="Recommended for you"` |
- | **Medium** | Plain-text alternative is 80% URLs | Regenerate plain-text from body copy, not from HTML link dump |
- | **Low** | `<meta content="text/html; charset=UTF-8">` missing `http-equiv` | Add `http-equiv="Content-Type"` |
- | **Low** | `user-scalable=0` deprecated | Change to `user-scalable=no` |
- | **Verify** | UTM parameters in click URLs | Resolve one sample redirect URL and confirm GA4 parameters are present |
- | **Verify** | List-Unsubscribe-Post header | Pull raw email headers and confirm one-click unsubscribe is present for Gmail/Yahoo compliance |

## Full review
---

## 1. Executive Summary

Not my store, not my shoes, not my deal. Famous Footwear is blasting out a multi-brand, multi-gender sale that has something for everybody — which means it really doesn't feel designed for anybody like me. There's a Skechers block buried about halfway down, which is the one thing that would've made me stop scrolling, but you have to wade through a bunch of women's sandals and Crocs to get there. The preview text is a raw tracking URL — I don't know what that is but it looked like gibberish in my inbox and nearly made me hit delete before I even opened the thing.

---

## 2. Business Impact Score

**6/10**

- Sender is a recognizable retail chain (Famous Footwear, I know the stores)
- One concrete offer is visible — 20% off, big and legible at the top
- Primary CTA buttons are present and clear
- No visible render bugs — email loaded clean
- Email reflects current urgency ("ends tonight" framing matches the subject)
- Offer feels straightforward — no asterisk clutter visible at a glance

*Not counted:* Subject doesn't call out men's or comfort; women's products dominate the visual; no loyalty perks shown for me (I'm Skechers Plus, not a Famous Footwear member); demographic signals are off.

---

## 3. What's Working

The **hero offer is impossible to miss** — "20% off" in big text at the top, and it reads clearly on a phone without zooming. Good. The **Skechers block is in there**, and as a Skechers guy that's the one thing that earns a second look from me. The **"ends tonight" urgency** is real and specific — that kind of deadline gets me to act faster than "limited time only" nonsense. The email loaded clean with no broken images, which sounds basic but I've seen plenty that don't.

---

## 4. What's Weak

**The preview text is a URL.** Not a teaser, not a product name — a long string of letters and numbers that looked like spam. That almost cost them the open right there. On my phone, the subject says "Extra 20% off ENDS TONIGHT" and then right next to it is a web address. That's not inviting, that's suspicious.

**Women's shoes lead the body.** The "40% off Women's Arrivals" section is near the top with models in sandals. I'm a 62-year-old guy browsing for myself — I skipped right past that. It made me feel like the wrong person got this email.

**Too many brands, too little focus.** Crocs, Skechers, Nike, Brooks — they're all stacked in their own little boxes. It looks like a clearance rack flyer, not a curated offer. I don't want to shop a flyer, I want someone to show me something I'd actually wear.

**No acknowledgment I'm a customer.** No "Hi Walker" or "Member deal" — just a generic blast. I give Famous Footwear my business and they treat me like a cold prospect.

---

## 5. Recommendations

1. **Fix the preview text immediately.** Put "Men's comfort styles included — extra 20% off" or even just the offer summary. Anything real beats a tracking link.
2. **Lead with men's content** for male-skewing segments, or at minimum put the hero block above the women's section.
3. **Surface the Skechers block higher** — if you know I buy Skechers, that's your hook. Let the brand I trust do the heavy lifting.
4. **Add one product call-out.** Show me a specific shoe with a before/after price. "Slip-ins, was $79, now $63" — that's what makes me tap.
5. **Acknowledge the loyalty relationship** even with something small — a "Members get an extra 5%" line costs nothing and makes me feel seen.

---

## 6. Bottom Line

I'd open it — the subject is clear and a one-night deadline gets my attention. But I wouldn't click. I'd scroll past the women's section, squint at the Skechers block in the middle, wonder if my size is in stock, and close the app. Famous Footwear is fine but they treated me like a stranger. If the Skechers section had been at the top with a specific shoe I recognized, I'd have tapped straight through.

---

## 7. Subject Line Analysis

- **Subject:** `Extra 20% off ENDS TONIGHT ⏳`
- **Length:** 29 characters (with emoji)
- **Scores (1-10):** Clarity `8`, Curiosity `5`, Personalization `2`, Urgency `8`, Specificity `5`
- **Strengths:**
  - Short, reads perfectly on mobile — fits the preview line without truncating
  - Urgency is credible and specific ("tonight," not "soon")
- **Weaknesses:**
  - Zero personalization — could be sent to anyone buying anything anywhere
  - "Extra 20% off" what? Off everything? Off select styles? The vagueness makes me wonder if my stuff qualifies
- **Alt A:** `Walker, your extra 20% off ends tonight`
- **Alt B:** `Men's Skechers — extra 20% off, tonight only`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — rendered as a raw tracking URL (`https://click.email.famousfootwear.com/?qs=ABB7...`)
- **Length:** 200+ characters of URL garbage
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None visible
- **Weaknesses:**
  - Raw tracking URL is the first thing I see next to the subject — looks like a phishing attempt or a broken email
  - Wastes the entire preheader opportunity; subject lands a good urgency punch and the preview kills the momentum
- **Alt A:** `Men's styles included — shop Skechers, Nike, and more before midnight`
- **Alt B:** `Your 20% off works sitewide — Skechers Slip-ins and more, ends tonight`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** Sender display name recognizable, subject is concrete (specific % + deadline), subject under 50 chars, time-bounded urgency that feels credible
- **Rationale:** The subject line does its job — I know Famous Footwear and "ends tonight" gets attention. But the preview URL almost made me delete it unread, and there's no signal this was sent to me specifically versus the whole list.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `4/10`
- **Signals counted:** Hero offer visible without scrolling, offer reduces price, time-bounded deadline with credible urgency
- **Rationale:** I can see the 20% off right away and the clock is ticking — that's enough to keep me scrolling. But the email never shows me a specific men's comfort shoe or Skechers Slip-in at a clear before/after price, which is the one thing that would've made me actually tap a button.

---

## 11. Evidence

- **Overall purpose:** Multi-brand sitewide sale announcement with a one-day urgency window ending "tonight"
- **Hero / primary value proposition:** "20% off" in large text near the top — clean and legible
- **Membership / benefits section:** None visible. No Famous Footwear Rewards callout, no member-exclusive pricing. Walker's Skechers Plus membership is irrelevant here.
- **Product discoverability / recommendation modules:** Email is organized in brand blocks — Women's Arrivals, Crocs (25% off), Skechers (25% off), Nike (30% off), Brooks ($64.99 price point), and what appears to be an athletic apparel block. Each has a small product grid. No individual product callouts or "picked for you" recommendations.
- **Utility / secondary modules:** Appears to have a standard footer with store-locator type content and legal/unsubscribe text. No loyalty balance, no order tracking, no "back in stock" nudge.
- **Bugs / friction / clarity issues:** Preview text is a full tracking URL — the most visible issue in this entire send. Women's content leads the body before men's. The Skechers block (which is the one relevant hook for me) sits below the fold at roughly the third or fourth scroll. No broken images or overlapping text visible in the render itself.

---

## Technical Audit

## Technical Audit — Famous Footwear "Extra 20% Off ENDS TONIGHT"

**From:** famousfootwear@email.famousfootwear.com
**Subject:** Extra 20% off ENDS TONIGHT ⏳

---

### 1. Technical Summary

The email is structurally sound and sends via a recognized ESP (Salesforce Marketing Cloud / ExactTarget), but carries two confirmed HTTP mixed-content violations and a systemic alt-text gap across ~35 images that will degrade rendering in privacy-hardened clients and fail basic accessibility audits.

---

### 2. Link & Tracking Issues

**30 click-tracking links via `click.email.famousfootwear.com`** — all routed through a redirect proxy; destination URLs not probed by QA. Unable to confirm UTM parameter consistency or final landing page status without resolving the redirects.

**Open pixel uses HTTP, not HTTPS:**
```
src="https://click.email.famousfootwear.com/open.aspx?YI2CQND3..."
```
This one is HTTPS — no issue here.

**Plain-text body is URL-heavy:** QA flags 12,485 of 15,516 characters (80%) as URLs. This ratio can trigger spam filters on some MTAs that score plain-text alternatives.

---

### 3. Rendering & Accessibility

**Critical — 2 HTTP image sources (mixed content):**
```
src: http://cl.S7.exct.net/LiveContent.aspx?qs=ABB7InYiOjEsImQiOjQ4NjZ9...  (image ID 920205575250)
src: http://cl.S7.exct.net/LiveContent.aspx?qs=ABB7InYiOjEsImQiOjQ4NjZ9...  (image ID 920155575454)
```
Modern clients (Gmail, Apple Mail, Outlook.com) block HTTP image loads when the page shell is served over HTTPS. These images — likely LiveContent dynamic/personalized blocks from SFMC — will render as broken images for a significant portion of recipients. Must be upgraded to HTTPS equivalents or replaced.

**35 images with empty `alt=""` attributes:** Includes the logo (`3b6a7dc1...`), hero image (`fd389a3a...gif`), all product images, and four recommendation engine images from `7222883.recs.igodigital.com`. Decorative images correctly use `alt=""`, but product images and CTA images should carry descriptive alt text for screen readers and for clients with images disabled.

**Logo link `alt` is empty:**
```html
<a href="https://click.email.famousfootwear.com/?qs=ABB7...">
  <img src="...3b6a7dc1-6955-49f8-868a-bf62a15122ee.png" alt="" />
</a>
```
A linked image with no alt is read by screen readers as the raw URL string — should be `alt="Famous Footwear"`.

**`<meta content="text/html; charset=UTF-8" />` is malformed** — missing the `http-equiv` attribute:
```html
<!-- broken -->
<meta content="text/html; charset=UTF-8" />
<!-- correct -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Most clients tolerate this, but it is a standards violation.

**`user-scalable=0` in viewport meta** — deprecated value; should be `user-scalable=no`. Some mobile browsers ignore the `0` form.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the truncated source. The iGoDigital recommendation block (`7222883.recs.igodigital.com/rr/v2/64595da29c77916e41c5a42c/i/1-4/990267198170`) appears to be rendering server-side product images — no fallback alt text if the rec engine returns no result.

---

### 5. Compliance

**Sending domain:** `famousfootwear@email.famousfootwear.com` — subdomain consistent with expected SFMC envelope configuration.

**Unsubscribe:** Not confirmed in the truncated source, but SFMC templates require a physical address and unsubscribe link by default. Cannot verify placement or one-click List-Unsubscribe header (`List-Unsubscribe-Post`) from HTML alone — requires header inspection.

**CAN-SPAM physical address:** Not visible in the provided HTML truncation. Must be present in footer.

**Authentication headers (DKIM/SPF/DMARC):** Not evaluable from HTML source alone; requires raw email headers. SFMC sends on behalf of `email.famousfootwear.com` — alignment should be verified at the envelope level.

---

### 6. Email-to-Site Continuity

All 30 CTA links route through `click.email.famousfootwear.com` redirect proxy — UTM parameters cannot be confirmed without resolving the redirects. No UTM parameters are visible in the pre-redirect href strings, which means either (a) they are embedded in the encrypted `qs=` parameter, or (b) they are absent. If absent, attribution will be lost in GA4/analytics.

The `preheader` text references "athletics, women's sandals" — alignment with actual landing page content cannot be confirmed from the source provided.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **High** | 2× HTTP LiveContent images (`cl.S7.exct.net`) | Switch SFMC LiveContent blocks to HTTPS endpoint — confirm with ESP support whether `https://cl.S7.exct.net/...` is available |
| **High** | Logo and primary CTA images have empty `alt` | Add descriptive alt text: `alt="Famous Footwear"`, `alt="Shop Extra 20% Off"`, etc. |
| **Medium** | 4× iGoDigital recommendation images have no alt | Add generic fallback: `alt="Recommended for you"` |
| **Medium** | Plain-text alternative is 80% URLs | Regenerate plain-text from body copy, not from HTML link dump |
| **Low** | `<meta content="text/html; charset=UTF-8">` missing `http-equiv` | Add `http-equiv="Content-Type"` |
| **Low** | `user-scalable=0` deprecated | Change to `user-scalable=no` |
| **Verify** | UTM parameters in click URLs | Resolve one sample redirect URL and confirm GA4 parameters are present |
| **Verify** | List-Unsubscribe-Post header | Pull raw email headers and confirm one-click unsubscribe is present for Gmail/Yahoo compliance |
## Recent history

- [[2026-05-03-the-us94-official-licensed-product-collection]] — 6/10 (2026-05-03)
- [[2026-05-03-final-hours-bogo-50-off]] — 7/10 (2026-05-03)
- [[2026-05-03-hours-left-for-bogo-50-off-c0-ce-12862-09a87f96-i-0]] — 8/10 (2026-05-03)

