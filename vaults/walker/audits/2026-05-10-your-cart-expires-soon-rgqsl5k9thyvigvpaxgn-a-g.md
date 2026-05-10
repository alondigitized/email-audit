---
slug: 2026-05-10-your-cart-expires-soon-rgqsl5k9thyvigvpaxgn-a-g
type: email
date: 2026-05-06
persona: walker
score: "8/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-8, sender/skechers]
---
# Your cart expires soon!
**Score:** 8/10 · **Type:** Email audit · **2026-05-06**
## Executive summary

- Well, there it is. I'd put those Arch Fit Slip-ins in my cart a few days back, then got distracted — game was on, I forgot about it — and here's Skechers following up. That's actually smart. I'm not annoyed. The headline even got a small laugh out of me: "You liked these and you weren't wrong." Yeah, alright. Fair enough.
- But then they put a bunch of women's shoes right below my product and I had to stop and think: did I end up on the wrong email? One of them looked like it had a floral pattern on it. My wife's birthday isn't until September. I'm here to finish buying my own shoes.
- I'd click "Complete Your Order." Probably won't forward this to anybody — it's about my cart, not a deal worth sharing. Tap the button, finish the transaction, done.

## Recommendations

- 1. **Swap the secondary product row for men's styles.** Every product below the hero should be a men's Slip-in or comfort walking shoe. Showing women's styles in a men's cart recovery email signals the personalization broke down.
- 2. **Acknowledge the Plus membership near the offer.** "As a Skechers Plus member, your 20% is ready and waiting" beats a generic discount banner. That line alone might be worth 10 extra percentage points of conversion.
- 3. **Put a real deadline on the urgency.** "Expires soon" is soft. "Your cart expires in 24 hours" or "expires tonight at midnight" gives me something concrete to react to. I might scroll past "soon" — I won't ignore a specific time.
- 4. **Fix what looks like an internal code at the top of the email.** There's a "SKE-399505" string sitting above the logo. If that's appearing in my inbox preview line, it's the very first thing I see — and it means nothing to me.
- 5. **Add one line of comfort tech copy under the hero shoe.** Something like "Memory foam insole. Hands-free Slip-in entry." reminds me exactly why I wanted it.
- **Subject Alt A:** `Left something behind? It's still here.`
- **Subject Alt B:** `Your Slip-ins are waiting — 20% off inside`
- **Preheader Alt A:** `Complete your order on the Arch Fit Glide-Step Pro — offer ends tonight`
- **Preheader Alt B:** `Your Plus member discount is ready — don't let your cart expire`
- 1. **Immediate** — Switch all Attentive tracking links from `http://` to `https://`. Confirm with Attentive account settings.
- 2. **High** — Fix charset meta tag: add `http-equiv="Content-Type"` or use `<meta charset="utf-8">`.
- 3. **High** — Add `role="presentation"` to all structural `<table>` elements.
- 4. **High** — Verify full HTML source for CAN-SPAM physical address + unsubscribe link.
- 5. **Medium** — Inspect decoded destination URLs to confirm UTM params and cart-session token presence.
- 6. **Medium** — Populate `<title>` tag with meaningful text.
- 7. **Medium** — Audit `alt` attributes on all product images in the truncated body.
- 8. **Low** — Review link contrast ratios; the `color:#434343` "web version" link on white is 5.74:1 (passes AA) but inline CTAs styled with `color:inherit` should be spot-checked.

## Full review
## 1. Take

Well, there it is. I'd put those Arch Fit Slip-ins in my cart a few days back, then got distracted — game was on, I forgot about it — and here's Skechers following up. That's actually smart. I'm not annoyed. The headline even got a small laugh out of me: "You liked these and you weren't wrong." Yeah, alright. Fair enough.

But then they put a bunch of women's shoes right below my product and I had to stop and think: did I end up on the wrong email? One of them looked like it had a floral pattern on it. My wife's birthday isn't until September. I'm here to finish buying my own shoes.

I'd click "Complete Your Order." Probably won't forward this to anybody — it's about my cart, not a deal worth sharing. Tap the button, finish the transaction, done.

## 2. What stood out

Seeing the Arch Fit Glide-Step Pro displayed big in the hero — the exact shoe I was looking at — is exactly what should happen in a cart email. That's the play: put the thing I wanted right in front of me and make it easy to finish. "Complete Your Order" is a clear, dark button that I can tap without squinting. Then the 20% off banner below it was a genuine surprise — I didn't know that was available and it gave me a real reason to go ahead instead of waiting.

But the secondary row of products undoes some of that good work. Those are clearly women's shoes, at least two of them. If you're going to show me additional styles, show me more men's Slip-ins or walking shoes — not something my wife would be shopping for. That row sent the message that this email wasn't built specifically for me, just assembled from a template with whatever was available.

The bigger miss for me, honestly, is that I'm a Skechers Plus member and there's no mention of it anywhere. Zero. The 20% off just sits there like it's available to any stranger who wanders in. If they'd said "Your Plus member discount is ready," that would've closed this immediately. Instead I feel like I'm shopping at a store I've been loyal to for years and the cashier doesn't recognize me.

The "Let's Get Texting" section near the bottom is actually a nice touch for how I shop — simpler than using an app.

## 3. What I'd change

1. **Swap the secondary product row for men's styles.** Every product below the hero should be a men's Slip-in or comfort walking shoe. Showing women's styles in a men's cart recovery email signals the personalization broke down.

2. **Acknowledge the Plus membership near the offer.** "As a Skechers Plus member, your 20% is ready and waiting" beats a generic discount banner. That line alone might be worth 10 extra percentage points of conversion.

3. **Put a real deadline on the urgency.** "Expires soon" is soft. "Your cart expires in 24 hours" or "expires tonight at midnight" gives me something concrete to react to. I might scroll past "soon" — I won't ignore a specific time.

4. **Fix what looks like an internal code at the top of the email.** There's a "SKE-399505" string sitting above the logo. If that's appearing in my inbox preview line, it's the very first thing I see — and it means nothing to me.

5. **Add one line of comfort tech copy under the hero shoe.** Something like "Memory foam insole. Hands-free Slip-in entry." reminds me exactly why I wanted it.

- **Subject Alt A:** `Left something behind? It's still here.`
- **Subject Alt B:** `Your Slip-ins are waiting — 20% off inside`
- **Preheader Alt A:** `Complete your order on the Arch Fit Glide-Step Pro — offer ends tonight`
- **Preheader Alt B:** `Your Plus member discount is ready — don't let your cart expire`

## 4. Business Impact Score (1-10)

**8/10**

- Sender is a brand Walker recognizes and is subscribed to (SKECHERS)
- One concrete offer visible (20% OFF A SINGLE PAIR)
- Primary CTA is unambiguous ("COMPLETE YOUR ORDER," dark prominent button)
- Visual hierarchy is clear — eye lands on hero shoe, then offer
- No render bugs — layout is clean and readable
- Hero copy explicitly references Walker's focus area (Slip-ins shown as hero product)
- Email reflects current season (Mother's Day Sale referenced in footer copy)

Missing: No loyalty/member benefits visible; demographic signals mixed (secondary product row shows women's styles in a men's cart email).

## 5. Open Likelihood (persona-grounded)

- **Score:** 7/10
- **Signals counted:** Sender display name recognizable; subject is concrete (cart expiry); subject is relevant to persona's focus area (his cart = his Slip-ins); subject is under 50 chars (23 chars); no spam signals; personalization via "your cart"; time-bounded urgency ("expires soon").
- **Rationale:** "Your cart expires soon!" is a near-perfect trigger subject for a cart abandonment — short, personal, and urgent. The drag is that the preview text appears to be an internal code string ("SKE-399505") rather than real marketing copy, which likely surfaces as garbage in the inbox preview line and costs a point.

## 6. Click-Through Likelihood (persona-grounded)

- **Score:** 7/10
- **Signals counted:** Hero offer visible without scrolling on mobile; primary CTA is in Walker's exact category (his Slip-ins, his cart); CTA copy is specific (verb + noun: "COMPLETE YOUR ORDER"); offer reduces price (20% off); one specific product hero-linked (Arch Fit Glide-Step Pro); brand voice is consistent and trusted.
- **Rationale:** The direct path from hero product to CTA is clean and the shoe is exactly what Walker was shopping for — that's a strong pull. What holds it back: no loyalty member callout, no comfort tech details to close the deal, and the women's secondary row introduces doubt that this email was actually built for him.

## 7. Subject

- **Subject:** `Your cart expires soon!`
- **Length:** 23 chars
- **Scores (1-10):** Clarity `8`, Curiosity `5`, Personalization `6`, Urgency `8`, Specificity `7`

## 8. Preview

- **Preview:** `(none / leaking junk)` — "SKE-399505" renders visibly at the top of the email above the logo; if this is the preheader, the inbox preview line shows an internal code rather than marketing copy
- **Length:** 10 chars
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

## Technical Audit — Skechers "Your cart expires soon" (2026-05-10)

---

### 1. Technical Summary

Standard Attentive-platform table-based email. Primary issues are non-HTTPS tracking links, a malformed charset meta tag, and layout tables missing accessibility attributes. The HTML is truncated, so compliance footer items (unsubscribe, physical address) could not be fully verified.

---

### 2. Link & Tracking Issues

**HTTP tracking links (all links affected)**
Every CTA routes through `http://skechers.attentivemail.com/ls/click?upn=...` using plain HTTP, not HTTPS. This can trigger browser/client security warnings and fails modern mixed-content checks.
- Evidence: `href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu5avyAvDTfG..."`
- Fix: Attentive supports `https://` on this redirect domain — confirm with ESP and switch all links.

**UTM verification blocked**
Final destination URLs are not visible in the truncated source — all links are Attentive redirect tokens. Cannot confirm whether UTM params (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) are appended at redirect resolution. Needs spot-check against a decoded destination URL.

---

### 3. Rendering & Accessibility

**Malformed charset meta tag**
```html
<meta content="text/html; charset=utf-8" />
```
Missing the required `http-equiv="Content-Type"` attribute. Without it, legacy Outlook renderers (Word-based) do not parse the charset declaration. Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
```
or the HTML5 short form `<meta charset="utf-8">`.

**Layout tables missing `role="presentation"`**
All structural `<table>` elements (`nl-container`, `row-1`, `row-content`, etc.) lack `role="presentation"`. Screen readers will announce them as data tables, creating noisy navigation for assistive-technology users.

**Global link decoration suppression**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This strips underlines and inherits foreground color for all links sitewide. Links styled with low-contrast foreground colors (e.g., `color:#434343` on white) will be undetectable to low-vision users. WCAG 1.4.1 requires non-color visual distinction for inline links.

**Empty `<title>` tag**
```html
<title></title>
```
Some AT tools and tab-previewing email clients read the `<title>`. Should be populated (e.g., "Your Skechers cart is about to expire").

**Image `alt` attributes** — cannot confirm from truncated source. Must verify all `<img>` tags carry descriptive `alt` text; product images in cart-recovery emails are particularly critical for screen-reader users.

---

### 4. Personalization & Merge Tokens

No dynamic merge tokens are visible in the portion of HTML provided. A cart-abandonment email should minimally inject:
- Customer first name (salutation)
- Abandoned product name(s) and image(s)
- Cart URL with session/cart identifier

If those tokens exist only in the truncated lower body, no issue. If absent, the email is sending a generic abandon trigger without cart context, which materially undermines the recovery flow and suggests a data-pipeline or template-wiring issue on the ESP side.

---

### 5. Compliance (CAN-SPAM / Unsubscribe / Authentication)

**Cannot confirm from truncated source:**
- Physical mailing address (CAN-SPAM §5(a)(5)) — required
- One-click unsubscribe link (CAN-SPAM §5(a)(3)) — required
- List-Unsubscribe header presence — requires header inspection, not HTML

**Authentication (requires header inspection, not inferable from HTML):**
- `SPF` record on `msgs.skechers.com` should authorize Attentive's sending IPs
- `DKIM` signature aligned to `msgs.skechers.com` or `skechers.com`
- `DMARC` policy on `skechers.com` should cover the subdomain
- Verify with: `dig txt msgs.skechers.com` and raw email header inspection

---

### 6. Email-to-Site Continuity (UTM / Landing Page Alignment)

All links are opaque Attentive redirect tokens — final destination and UTM parameters are unverifiable from this source. Minimum required for cart recovery:

| Parameter | Expected value |
|---|---|
| `utm_source` | `email` or `attentive` |
| `utm_medium` | `email` |
| `utm_campaign` | cart-abandonment campaign slug |
| `utm_content` | specific CTA identifier |

Cart CTA links must also carry a cart/session token so the landing page can restore the cart. Confirm this is present by decoding one redirect URL end-to-end.

---

### 7. Recommendations

1. **Immediate** — Switch all Attentive tracking links from `http://` to `https://`. Confirm with Attentive account settings.
2. **High** — Fix charset meta tag: add `http-equiv="Content-Type"` or use `<meta charset="utf-8">`.
3. **High** — Add `role="presentation"` to all structural `<table>` elements.
4. **High** — Verify full HTML source for CAN-SPAM physical address + unsubscribe link.
5. **Medium** — Inspect decoded destination URLs to confirm UTM params and cart-session token presence.
6. **Medium** — Populate `<title>` tag with meaningful text.
7. **Medium** — Audit `alt` attributes on all product images in the truncated body.
8. **Low** — Review link contrast ratios; the `color:#434343` "web version" link on white is 5.74:1 (passes AA) but inline CTAs styled with `color:inherit` should be spot-checked.
## Recent history

- [[2026-05-06-sneakers-under-50-75-100]] — 8/10 (2026-05-06)
- [[2026-05-06-4-trends-to-try-in-may]] — 7/10 (2026-05-06)
- [[2026-05-06-become-a-new-balance-member]] — 4/10 (2026-05-06)

