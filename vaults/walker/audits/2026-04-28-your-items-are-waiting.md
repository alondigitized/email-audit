---
slug: 2026-04-28-your-items-are-waiting
type: email
date: 2026-04-28
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-5, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 5/10 · **Type:** Email audit · **2026-04-28**
## Executive summary

- **From:** SKECHERS `<hello@msgs.skechers.com>`
- **Subject:** Your Items Are Waiting!
- Alright, so this is one of those abandoned cart emails — Skechers noticed I looked at a pair and didn't pull the trigger. Fair enough, I get it. The headline lands: "WE NOTICED YOU NOTICING US… YOUR CART IS STILL WAITING…" Actually made me chuckle a little. The shoe they're reminding me about — the GO RUN Glide-Step Arch Fit Slip-in — is the kind of thing I'd actually consider. But then I scroll down and they show me four pairs of **women's shoes** as "great options I'll love." That killed the mood entirely. Skechers knows I'm a guy. This felt like the computer just forgot who I was. The 20% off offer is buried underneath all that. Good bones, bad execution for someone like me.
- The cart recovery mechanic is solid and the discount could close the deal — but the wrong-gender product recs and lack of any loyalty/Plus member acknowledgment leave real money on the table.

## What's working

- **The opener is disarming.** "We noticed you noticing us" is self-aware humor that works on me. Doesn't feel pushy or corporate.
- **The product photo is clear and prominent.** I can see exactly what shoe I was looking at — the GO RUN Glide-Step Arch Fit Slip-in. Good large image, readable product name.
- **The 20% off offer.** That's real money. I'm not flashy about it, but I appreciate a deal, especially as a Plus member. That's the nudge I might need.
- **"Complete Your Order" button is clear.** Blue, centered, no confusion about what to do.

## What's weak

- **All four "recommended" products are women's shoes.** I can see them clearly — red sneakers, pink ones, women's walking shoes. I'm a 62-year-old man. This is the kind of thing that makes me think these emails are just spam blasts with no real thought behind them. I'd probably just close it after seeing that.
- **No mention of my Skechers Plus membership.** They know I'm a member. They could say "as a Plus member, here's your exclusive offer" and it would feel personal. Instead I'm treated like a stranger off the street.
- **The 20% off banner is too small and buried.** I had to scroll past all those wrong-gender shoes to find it. If that's the hook, lead with it or put it closer to the cart item.
- **The navigation section (Women, Men, Kids, Clothing…) feels like dead weight.** I'm on my phone. I don't need a full site map in my email. It adds scroll fatigue.
- **"LET'S GET TEXTING" module.** I don't want to text a brand. That's not how I work. Feels aimed at a 25-year-old.
- **Text in some sections is small.** The product names under the recommended items, the fine print — I'd need to zoom in and I won't bother.

## Recommendations

- 1. **Fix the product recommendations immediately.** Show me men's Slip-ins or comfort walkers. If they know I was looking at a men's running shoe, they should be recommending men's products — full stop.
- 2. **Move the 20% off offer above the recommendations section**, maybe right below the cart item. That's the conversion driver; don't make me hunt for it.
- 3. **Add a one-line loyalty acknowledgment.** Something like "Walker, as a Plus member you get first dibs on this deal." Costs nothing, feels personal.
- 4. **Cut the navigation block.** It adds noise for mobile readers. The CTA buttons are enough.
- 5. **Bigger tap targets and slightly larger font** on the product cards for phone users my age.
- | Priority | Issue | Action |
- |---|---|---|
- | High | All tracking links use `http://` | Configure Attentive to enforce HTTPS on click-tracking domain; verify TLS certificate on `skechers.attentivemail.com` |
- | High | Image `src` uses `http://` | Serve all images over HTTPS; update CDN/image host config |
- | Medium | `<title>` is empty | Set to a meaningful value (e.g., `"Skechers — Items in your cart"`) |
- | Medium | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` to the charset declaration |
- | Medium | Link underlines suppressed globally | Ensure link color contrast ratio ≥ 3:1 against surrounding text, or restore `text-decoration: underline` |
- | Medium | UTM attribution unconfirmed | Spot-check decoded Attentive redirect URLs to verify UTM params are present and correct |
- | Low | Preheader Unicode padding characters | Monitor spam folder placement rates; switch to a single invisible `<div>` spacer if deliverability degrades |
- | Verify | Unsubscribe + physical address | Confirm footer contains functional one-click unsubscribe and CAN-SPAM address — requires full HTML |
- | Verify | DMARC alignment for `msgs.skechers.com` | Pull raw headers from a test send and confirm SPF/DKIM/DMARC all pass |

## Full review
---

## Email Review — Walker Miles, 62, Boomer Male

**From:** SKECHERS `<hello@msgs.skechers.com>`
**Subject:** Your Items Are Waiting!

---

### 1. Executive Summary

Alright, so this is one of those abandoned cart emails — Skechers noticed I looked at a pair and didn't pull the trigger. Fair enough, I get it. The headline lands: "WE NOTICED YOU NOTICING US… YOUR CART IS STILL WAITING…" Actually made me chuckle a little. The shoe they're reminding me about — the GO RUN Glide-Step Arch Fit Slip-in — is the kind of thing I'd actually consider. But then I scroll down and they show me four pairs of **women's shoes** as "great options I'll love." That killed the mood entirely. Skechers knows I'm a guy. This felt like the computer just forgot who I was. The 20% off offer is buried underneath all that. Good bones, bad execution for someone like me.

---

### 2. Business Impact Score: 5/10

The cart recovery mechanic is solid and the discount could close the deal — but the wrong-gender product recs and lack of any loyalty/Plus member acknowledgment leave real money on the table.

---

### 3. What's Working

- **The opener is disarming.** "We noticed you noticing us" is self-aware humor that works on me. Doesn't feel pushy or corporate.
- **The product photo is clear and prominent.** I can see exactly what shoe I was looking at — the GO RUN Glide-Step Arch Fit Slip-in. Good large image, readable product name.
- **The 20% off offer.** That's real money. I'm not flashy about it, but I appreciate a deal, especially as a Plus member. That's the nudge I might need.
- **"Complete Your Order" button is clear.** Blue, centered, no confusion about what to do.

---

### 4. What's Weak

- **All four "recommended" products are women's shoes.** I can see them clearly — red sneakers, pink ones, women's walking shoes. I'm a 62-year-old man. This is the kind of thing that makes me think these emails are just spam blasts with no real thought behind them. I'd probably just close it after seeing that.
- **No mention of my Skechers Plus membership.** They know I'm a member. They could say "as a Plus member, here's your exclusive offer" and it would feel personal. Instead I'm treated like a stranger off the street.
- **The 20% off banner is too small and buried.** I had to scroll past all those wrong-gender shoes to find it. If that's the hook, lead with it or put it closer to the cart item.
- **The navigation section (Women, Men, Kids, Clothing…) feels like dead weight.** I'm on my phone. I don't need a full site map in my email. It adds scroll fatigue.
- **"LET'S GET TEXTING" module.** I don't want to text a brand. That's not how I work. Feels aimed at a 25-year-old.
- **Text in some sections is small.** The product names under the recommended items, the fine print — I'd need to zoom in and I won't bother.

---

### 5. Recommendations

1. **Fix the product recommendations immediately.** Show me men's Slip-ins or comfort walkers. If they know I was looking at a men's running shoe, they should be recommending men's products — full stop.
2. **Move the 20% off offer above the recommendations section**, maybe right below the cart item. That's the conversion driver; don't make me hunt for it.
3. **Add a one-line loyalty acknowledgment.** Something like "Walker, as a Plus member you get first dibs on this deal." Costs nothing, feels personal.
4. **Cut the navigation block.** It adds noise for mobile readers. The CTA buttons are enough.
5. **Bigger tap targets and slightly larger font** on the product cards for phone users my age.

---

### 6. Bottom Line

I'd probably open this because I vaguely remembered looking at that shoe. The cart recovery angle is smart. But when I see women's sneakers being recommended to me, I lose trust that anyone at Skechers actually knows me — even after years of being a member. If the recs were men's Slip-ins and the 20% was front and center, I might have clicked immediately. As is, maybe I click the "Complete Your Order" button out of habit, but the rest of the email felt like it was meant for somebody else.

---

### 7. Subject Line Analysis

- **Subject:** `Your Items Are Waiting!`
- **Length:** 22 characters
- **Scores (1-10):** Clarity `8`, Curiosity `5`, Personalization `4`, Urgency `6`, Specificity `4`
- **Strengths:**
  - Short, direct, and reads cleanly on a phone preview
  - "Waiting" implies mild scarcity without being obnoxious about it
- **Weaknesses:**
  - "Items" is generic — doesn't name the product or category, so it could be anyone's cart for anything
  - Zero personalization — no name, no product hint, no loyalty signal
- **Alt A:** `Walker, your Slip-ins are still in your cart`
- **Alt B:** `20% off — but your cart won't wait forever`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — no intentional preheader visible; inbox likely showed the SKU or "SMS-#####" header code from the top of the email
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None evident
- **Weaknesses:**
  - A wasted second impression — the subject line alone has to carry all the open-rate weight
  - The internal code or view-in-browser text bleeding into preview kills credibility
- **Alt A:** `Your GO RUN Glide-Step is waiting — grab 20% off before it's gone`
- **Alt B:** `You left something behind. Here's 20% to bring it home.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "Your Items Are Waiting" is familiar enough that I'd recognize this as a cart email from a brand I actually shop with — Skechers is in my inbox regularly and I trust them. But the subject gives me nothing specific to get excited about, and without a strong preheader, it's just another notification I might tap on out of mild curiosity rather than genuine interest.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** The hero shoe and the "Complete Your Order" button would have me close to clicking — but scrolling into four women's product recommendations snapped me out of it. That mismatch made me feel like the email wasn't really for me, and I started second-guessing whether it was even worth buying. The 20% off is a good closer but it shows up too late and too small to rescue the experience.

---

### 11. Evidence

- **Overall purpose:** Abandoned cart recovery email targeting a user who viewed the Skechers Slip-ins GO RUN Glide-Step Arch Fit
- **Hero / primary value proposition:** Large product image of the abandoned item + "COMPLETE YOUR ORDER" CTA — clear and on point
- **Membership / benefits section:** None visible. No Plus member acknowledgment anywhere in the email
- **Product discoverability / recommendation modules:** "HERE'S SOME MORE GREAT OPTIONS WE THINK YOU'LL LOVE" — four product cards visible, all clearly women's footwear (pink/red colorways, Women's labels visible on product names)
- **Utility / secondary modules:** 20% OFF single pair banner; Shop All Best Sellers CTA; category nav links (Women, Men, Kids, Clothing, New Arrivals, Sale); App download; Curbside Pickup; Buy Now Pay Later (Afterpay/Klarna); Find a Store; Social follow links
- **Bugs / friction / clarity issues:** No visible broken images or rendering errors. The product recommendation section showing women's shoes to a male customer is the most significant content error visible in the render. Fine-print text at the footer (Mother's Day sale terms) is very small and would require zooming on mobile.

---

## Technical Audit

## Technical Audit — Skechers "Your Items Are Waiting!" Abandoned Cart Email

---

### 1. Technical Summary

Email is sent via Attentive (`msgs.skechers.com` / `attentivemail.com`) with all links routed through Attentive's click-tracking redirect. Several HTTP-only link issues and a missing charset declaration attribute are present; the truncated source prevents full compliance verification.

---

### 2. Link & Tracking Issues

**HTTP redirect hops — confirmed issue.**
All tracked links use `http://` (not `https://`) for the Attentive click-tracking domain:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor...
```
The web-version link and the logo link both share this pattern. The initial redirect hop is unencrypted; any HTTPS enforcement depends entirely on Attentive's redirect completing the upgrade. If the redirect chain breaks mid-hop, the subscriber lands on a plaintext URL.

**Image source protocol — HTTP.**
The image `src` begins `http://image.emails…` (truncated). If this resolves over HTTP, Gmail and Outlook may proxy/strip it, and modern clients will generate a mixed-content warning.

**Destination URLs not auditable.**
All `href` values are Attentive UPN-encoded redirects; final destination URLs (and whether they carry UTM params) cannot be verified from the HTML source alone. Requires redirect chain inspection or Attentive campaign config review.

---

### 3. Rendering & Accessibility

**Empty `<title>` element.**
```html
<title></title>
```
Some accessibility tools and screen readers surface the `<title>` as the document name. An empty value is unhelpful and produces a blank tab label in the browser/web-view version.

**Missing `http-equiv` on charset `<meta>` tag.**
```html
<meta content="text/html; charset=utf-8" />
```
Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without `http-equiv`, the declaration is non-functional in some legacy rendering engines (Outlook on Windows).

**Link underlines suppressed globally.**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
Removing underlines from all links inside the message body fails WCAG 2.1 SC 1.4.1 (Use of Color) — links must be distinguishable from surrounding text by more than color alone.

**Image alt text unverifiable** — source is truncated before `<img>` attributes appear. If any product images or the logo `<img>` lack `alt` text, they will be silent for screen readers and broken in image-blocked clients.

**Preheader padding technique.**
The preheader uses a mix of U+034F (combining grapheme joiner `͏`) and soft-hyphen (`­`) characters to suppress preview overflow. This is a widespread ESP pattern and renders correctly in major clients, but some spam filters penalize unusual Unicode density — worth monitoring deliverability metrics.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `{{first_name}}`, `{{{product_name}}}`) are visible in the truncated HTML. However, the preheader text is generic:
> *"You left something in your cart, get it before it's gone!"*

No cart item name or image is referenced in the preheader despite this being a cart-abandonment trigger. Whether dynamic product blocks exist below the fold cannot be confirmed from the truncated source; verify in the full render that Attentive's dynamic product feed is populating correctly (no fallback/empty blocks).

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unsubscribe link and physical address — unverifiable.**
The HTML source is truncated before the footer. CAN-SPAM mandates a working opt-out mechanism and a valid physical postal address. Cannot confirm presence or correctness from the supplied excerpt — full source required.

**Authentication headers — not provided.**
SPF, DKIM, and DMARC results are not included. The sending domain `msgs.skechers.com` is a dedicated subdomain (good practice for ESP isolation), but authentication pass/fail status cannot be assessed without raw message headers.

**From domain alignment.**
`From: SKECHERS <hello@msgs.skechers.com>` — subdomain of `skechers.com`. DMARC alignment requires DKIM or SPF to align with the `From` domain (`msgs.skechers.com` or `skechers.com`). Verify DMARC policy on `skechers.com` covers this subdomain.

---

### 6. Email-to-Site Continuity

**UTM parameters — unverifiable from HTML.**
All destination URLs are opaque behind Attentive UPN redirects. It cannot be confirmed from the HTML whether UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) are appended at redirect time. Check Attentive campaign settings and confirm GA4/analytics is receiving attributed sessions from this send.

**Landing page alignment — unverifiable.**
Without knowing the decoded destination URLs, it cannot be confirmed that CTA links resolve to the correct cart-recovery or product pages (vs. the homepage or a stale product URL).

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | All tracking links use `http://` | Configure Attentive to enforce HTTPS on click-tracking domain; verify TLS certificate on `skechers.attentivemail.com` |
| High | Image `src` uses `http://` | Serve all images over HTTPS; update CDN/image host config |
| Medium | `<title>` is empty | Set to a meaningful value (e.g., `"Skechers — Items in your cart"`) |
| Medium | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` to the charset declaration |
| Medium | Link underlines suppressed globally | Ensure link color contrast ratio ≥ 3:1 against surrounding text, or restore `text-decoration: underline` |
| Medium | UTM attribution unconfirmed | Spot-check decoded Attentive redirect URLs to verify UTM params are present and correct |
| Low | Preheader Unicode padding characters | Monitor spam folder placement rates; switch to a single invisible `<div>` spacer if deliverability degrades |
| Verify | Unsubscribe + physical address | Confirm footer contains functional one-click unsubscribe and CAN-SPAM address — requires full HTML |
| Verify | DMARC alignment for `msgs.skechers.com` | Pull raw headers from a test send and confirm SPF/DKIM/DMARC all pass |
## Recent history

- [[2026-04-28-the-styles-everyone-s-searching-for]] — 6/10 (2026-04-28)
- [[2026-04-28-take-15-or-more-off-now]] — 4/10 (2026-04-28)
- [[2026-04-28-enjoy-20-off-select-styles]] — 4/10 (2026-04-28)

