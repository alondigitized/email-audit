---
slug: 2026-05-10-your-items-are-waiting
type: email
date: 2026-05-07
persona: walker
score: "7/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-7, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 7/10 · **Type:** Email audit · **2026-05-07**
## Executive summary

- Alright, so Skechers caught me window-shopping and left the cart light blinking. I appreciate that — it's a little nudge, not a lecture. The hero shoe is right there, the black Slip-in, and the button says "Complete Your Order" plain as day. No mystery, no games. That part I like. My eyes went straight to the shoe and the button, and for a guy browsing on his phone who just wants to finish what he started, that's exactly how it should work.
- But here's where it loses me a little. I'm a Skechers Plus member. I've been buying from these folks for years, and there's not a single mention of that anywhere in this email. Twenty percent off is sitting down there below the fold like an afterthought, and I couldn't even tell you if my Slip-in qualifies or if it's buried in some exclusion fine print I can't read without squinting. And the Mother's Day sale language in the footer? I noticed it. I'm not shopping for my wife's gift — I'm shopping for my feet.
- Bottom line: I'd probably click "Complete Your Order" just to get back to where I was, but the email didn't make me feel known. It made me feel tracked.

## Recommendations

- 1. **Move the 20% off above the fold, next to the "Complete Your Order" button.** Right now the offer and the action are separated by product recs. Put them together: "Complete your order — 20% off applies." That's a one-two punch.
- 2. **Acknowledge the membership.** A single line — "As a Skechers Plus member, your discount is ready" — would make this feel personal instead of generic. It's the difference between a nudge from a store that knows me and a bulk blast.
- 3. **Cut the footer navigation dump.** Women / Men / Kids / Clothing / New Arrivals / Sale stacked as plain links adds nothing. If I wanted to browse, I'd go to the site. Keep one secondary CTA max.
- 4. **Show the price.** I put that shoe in my cart for a reason, but I don't remember what it cost. Show me the original price and the discounted price side by side. That's the reminder that closes the sale.
- 5. **Drop the Afterpay/Klarna block for this segment.** I'm not your installment-plan shopper. That real estate should be a trust signal — return policy, free shipping threshold — something I actually care about.
- 6. **Check the product name targeting.** "Kynley" doesn't read as a men's style name to me. If there's any chance this pull is wrong, that's a problem.
- **Subject Alt A:** `Your Slip-ins are still in the cart, Walker`
- **Subject Alt B:** `Your cart's ready — 20% off inside`
- **Preheader Alt A:** `Complete your order and save 20% on your Max Cushioning Slip-ins today.`
- **Preheader Alt B:** `Your Skechers Plus discount is waiting — grab it before it's gone.`
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP click-tracking + image URLs | Verify Attentive account is configured for HTTPS redirect; update image CDN origin to HTTPS |
- | High | Unsubscribe + physical address not confirmed | Obtain full HTML source; confirm both are present and functional before next send |
- | Medium | Empty `<title>` | Set `<title>Skechers — Your Cart is Waiting</title>` |
- | Medium | Link underlines removed | Scope the CSS rule more narrowly or remove it; do not suppress `text-decoration` globally |
- | Medium | First-name personalization absent | Add `{{first_name |default:"there"}}` to subject and/or preheader |
- | Low | Layout tables missing `role="presentation"` | Add `role="presentation"` to all non-data tables |
- | Low | Authentication headers | Confirm DKIM/SPF/DMARC pass on `msgs.skechers.com` via raw headers or Attentive dashboard |

## Full review
## 1. Take

Alright, so Skechers caught me window-shopping and left the cart light blinking. I appreciate that — it's a little nudge, not a lecture. The hero shoe is right there, the black Slip-in, and the button says "Complete Your Order" plain as day. No mystery, no games. That part I like. My eyes went straight to the shoe and the button, and for a guy browsing on his phone who just wants to finish what he started, that's exactly how it should work.

But here's where it loses me a little. I'm a Skechers Plus member. I've been buying from these folks for years, and there's not a single mention of that anywhere in this email. Twenty percent off is sitting down there below the fold like an afterthought, and I couldn't even tell you if my Slip-in qualifies or if it's buried in some exclusion fine print I can't read without squinting. And the Mother's Day sale language in the footer? I noticed it. I'm not shopping for my wife's gift — I'm shopping for my feet.

Bottom line: I'd probably click "Complete Your Order" just to get back to where I was, but the email didn't make me feel known. It made me feel tracked.

## 2. What stood out

The hero module is clean and functional — shoe front and center, readable product name, unambiguous blue button. For someone browsing on a phone, that's the right call. I didn't have to hunt for what they wanted me to do. The "We Noticed You Noticing Us" headline is a little too cute for my taste; I'm 62, I don't need marketing flirting with me, just tell me my cart's ready. Below the hero I see a row of "you might also love" shoes — mix of men's and women's styles from what I can tell, small thumbnails, hard to read the labels on a phone screen. The "Shop All Best Sellers" bar feels like it's trying to pull me away from the cart item they just showed me, which is a strange choice. Then there's 20% off a single pair — fine, good — but it's sandwiched between the product recs and a whole bottom half of the email that feels like a website footer masquerading as a message: Women, Men, Kids, Clothing, New Arrivals, Sale links stacked down the page, a text-us promo, app download badges, Afterpay and Klarna logos. I bank with a credit union and I pay for things when I buy them. All that buy-now-pay-later stuff is noise. The navigation-link dump at the bottom reads like they copied the site footer into the email and called it done. No Skechers Plus badge, no member price, nothing that says they know I'm a returning customer.

## 3. What I'd change

1. **Move the 20% off above the fold, next to the "Complete Your Order" button.** Right now the offer and the action are separated by product recs. Put them together: "Complete your order — 20% off applies." That's a one-two punch.
2. **Acknowledge the membership.** A single line — "As a Skechers Plus member, your discount is ready" — would make this feel personal instead of generic. It's the difference between a nudge from a store that knows me and a bulk blast.
3. **Cut the footer navigation dump.** Women / Men / Kids / Clothing / New Arrivals / Sale stacked as plain links adds nothing. If I wanted to browse, I'd go to the site. Keep one secondary CTA max.
4. **Show the price.** I put that shoe in my cart for a reason, but I don't remember what it cost. Show me the original price and the discounted price side by side. That's the reminder that closes the sale.
5. **Drop the Afterpay/Klarna block for this segment.** I'm not your installment-plan shopper. That real estate should be a trust signal — return policy, free shipping threshold — something I actually care about.
6. **Check the product name targeting.** "Kynley" doesn't read as a men's style name to me. If there's any chance this pull is wrong, that's a problem.

- **Subject Alt A:** `Your Slip-ins are still in the cart, Walker`
- **Subject Alt B:** `Your cart's ready — 20% off inside`
- **Preheader Alt A:** `Complete your order and save 20% on your Max Cushioning Slip-ins today.`
- **Preheader Alt B:** `Your Skechers Plus discount is waiting — grab it before it's gone.`

## 4. Business Impact Score (1-10)

**7/10**

- Sender is a brand I recognize and am subscribed to
- Concrete offer is visible (20% off a single pair)
- Primary CTA is unambiguous ("Complete Your Order," clear blue button)
- Visual hierarchy is clear — eye lands on shoe + button first
- No render bugs visible
- Hero product is a Slip-in, which matches my comfort-tech preference
- Offer appears honest (fine print visible though small)

*Not counted:* No demographic male-first signals (Women listed first in nav); no loyalty/member benefits visible; Mother's Day footer copy is seasonally irrelevant to me as a male shopper.

## 5. Open Likelihood (persona-grounded)

- **Score:** 8/10
- **Signals counted:** Sender display name recognizable (SKECHERS); subject is concrete ("Your Items Are Waiting!"); subject is relevant to my persona (my actual cart); subject is under 50 chars (23 chars); no spam signals; personalization hint ("Your Items" implies my cart specifically); time-bounded urgency (items "waiting" = act now).
- **Rationale:** An abandoned cart subject from a brand I already buy from hits almost every inbox open trigger. The "Your Items" framing tells me immediately this is about something I chose, not a cold blast — that's the strongest open signal here.

## 6. Click-Through Likelihood (persona-grounded)

- **Score:** 8/10
- **Signals counted:** Hero offer visible without scrolling on mobile; primary CTA is in my category (Slip-ins); CTA copy is specific ("Complete Your Order" = verb + noun + context); offer reduces price (20% off); one specific product/hero linked (the Kynley slip-in); brand voice is consistent and trusted; no friction — clean render, no broken images.
- **Rationale:** The cart-recovery mechanic does the heavy lifting — I already chose this shoe, so the barrier to clicking is low. The 20% off sweetens it, though I'd click faster if the discounted price were shown right next to the button rather than buried below the fold.

## 7. Subject

- **Subject:** `Your Items Are Waiting!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `8`, Curiosity `5`, Personalization `6`, Urgency `7`, Specificity `5`

## 8. Preview

- **Preview:** `(none visible in render — preheader not surfaced in webview screenshot)`
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

## Technical Audit — Skechers "Your Items Are Waiting!" Abandoned Cart Email

---

### 1. Technical Summary

Table-based layout built on Attentive's ESP infrastructure (`msgs.skechers.com`). Two confirmed infrastructure-level issues: all links and image assets served over HTTP, and the document `<title>` is blank. Compliance elements (unsubscribe, physical address) are not verifiable from the truncated source provided.

---

### 2. Link & Tracking Issues

**HTTP click-tracking URLs (confirmed)**
All links route through `http://skechers.attentivemail.com/ls/click?upn=...` — plaintext HTTP, not HTTPS. Example:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor..."
```
Modern ESPs default to HTTPS redirects. HTTP exposes click-tracking tokens in transit and may trigger browser/client security warnings.

**HTTP image host (confirmed)**
Product images load from `http://image.emails.skechers.com/...` — plaintext HTTP. Gmail and Outlook proxy images through their own CDNs, but the origin request is unencrypted. Mixed-content warnings can suppress image rendering in strict clients.

**UTM parameters not verifiable**
All outbound links are wrapped in Attentive's redirect. UTM params at the final destination cannot be confirmed from this source. Recommend spot-checking decoded destinations for `utm_source`, `utm_medium`, `utm_campaign` presence.

---

### 3. Rendering & Accessibility

**Empty `<title>` element (confirmed)**
```html
<head><title></title>...
```
Screen readers and some email clients (particularly Outlook on Windows) announce the document title. A blank title degrades accessibility and assistive-technology UX.

**Link underlines suppressed globally (confirmed)**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This removes underlines from all links inside Gmail's `#MessageViewBody` wrapper. Users relying on visual link cues (low vision, cognitive accessibility) cannot distinguish links from body text.

**No `role="presentation"` on layout tables**
Layout tables lack `role="presentation"`. Screen readers may attempt to parse table structure, announcing row/cell counts. Not blocking, but a WCAG 1.3.1 gap.

**Image `alt` text not verifiable**
The `<img>` tag is truncated before the `alt` attribute. Cannot confirm whether product images carry descriptive alt text. If alt is empty or missing, image-off clients and screen readers receive no content signal.

**Preheader spacer technique (noted, not a defect)**
Uses U+034F (COMBINING GRAPHEME JOINER `͏`) and soft hyphens (`­`) as invisible padding — standard Attentive pattern, no action required.

---

### 4. Personalization & Merge Tokens

**No first-name token visible (confirmed in available source)**
Subject line is `Your Items Are Waiting!` and preheader is `You left something in your cart...` — neither contains a subscriber name merge token. Abandoned cart flows on Attentive support `{{first_name}}`; its absence is a confirmed gap, not a rendering failure.

**No cart item tokens visible in available source**
The truncated source does not show product name, price, or image merge tokens in the body copy. Cannot confirm whether dynamic cart content is injected lower in the email. Flag for full-source re-check.

---

### 5. Compliance

**Sending domain:** `msgs.skechers.com` via Attentive
**Authentication headers:** Not provided — DKIM, SPF, and DMARC alignment on `msgs.skechers.com` cannot be verified from HTML source alone. Recommend checking raw message headers or Attentive's authentication dashboard.

**Unsubscribe link:** Not visible in truncated source. CAN-SPAM requires a clear, functioning opt-out mechanism. Cannot confirm presence or placement from the provided HTML.

**Physical mailing address:** Not visible in truncated source. CAN-SPAM § 5(a)(5) requires a valid postal address. Cannot confirm from available HTML.

**Preheader legal padding:** No legal copy embedded in preheader — compliant.

---

### 6. Email-to-Site Continuity

**UTM passthrough unconfirmed**
Attentive click redirects obscure the final destination URL. Without decoding the `upn=` parameter, UTM attribution to the cart/PDP landing page cannot be verified. If UTMs are missing at destination, this email's traffic will be misattributed in analytics.

**No cart deep-link confirmation**
The CTA should deep-link to the specific abandoned cart session, not the homepage or a generic cart URL. Cannot confirm from truncated source — verify the decoded destination URL maps to `skechers.com/cart` or a session-specific cart restore URL.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP click-tracking + image URLs | Verify Attentive account is configured for HTTPS redirect; update image CDN origin to HTTPS |
| High | Unsubscribe + physical address not confirmed | Obtain full HTML source; confirm both are present and functional before next send |
| Medium | Empty `<title>` | Set `<title>Skechers — Your Cart is Waiting</title>` |
| Medium | Link underlines removed | Scope the CSS rule more narrowly or remove it; do not suppress `text-decoration` globally |
| Medium | First-name personalization absent | Add `{{first_name |default:"there"}}` to subject and/or preheader |
| Low | Layout tables missing `role="presentation"` | Add `role="presentation"` to all non-data tables |
| Low | Authentication headers | Confirm DKIM/SPF/DMARC pass on `msgs.skechers.com` via raw headers or Attentive dashboard |
## Recent history

- [[2026-05-07-your-cart-expires-soon]] — 8/10 (2026-05-07)
- [[2026-05-07-a-little-something-for-mom-and-you-with-bogo-50-off-861df8d6-2ce7-4cfc-847e-]] — 7/10 (2026-05-07)
- [[2026-05-10-save-10-or-more-starting-now]] — 4/10 (2026-05-07)

