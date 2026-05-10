---
slug: 2026-05-10-your-cart-expires-soon-ypguefz8stqbliqbghjtva-g
type: email
date: 2026-05-08
persona: walker
score: "8/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-8, sender/skechers]
---
# Your cart expires soon!
**Score:** 8/10 · **Type:** Email audit · **2026-05-08**
## Executive summary

- Alright, so Skechers is reminding me I left something in my cart — and honestly, good on them for that. I've been eyeing those Max Cushioning Glide-Step Slip-ins for a while, so seeing that blue shoe front and center with a big "YOU LIKED THESE" headline felt like a nudge from a store associate who actually knows me. That part worked. I didn't need much convincing to scroll further.
- But then something shifted. Right below my shoe, they started showing me what looks like women's styles — pinks, light colors, clearly not for me. That's a head-scratcher. If you know I put a men's Slip-in in my cart, why are you showing me shoes my wife might like? Felt like the page forgot who it was talking to halfway through.
- The 20% off banner caught my eye — I'm not going to pretend it didn't — but the fine print at the bottom mentions Mother's Day Sale, and now I'm second-guessing whether that discount even applies to me buying for myself. Nobody told me my cart item was getting 20% off. That's the kind of small confusion that makes me close the app and think about it later. I'd probably go back and complete the order, but I'd poke around to verify that discount first. Wouldn't forward this one — nothing about it says "hey, tell your buddies."

## Recommendations

- 1. **Make the 20% off explicitly apply to the cart item** — put a line directly under "COMPLETE YOUR ORDER" that says something like "Use code SAVE20 — 20% off your Glide-Step today." Right now the offer floats in a separate banner and I don't know if it's connected to my cart or a different promotion entirely.
- 2. **Swap the secondary product tiles for men's styles only** — if you know I'm a male Slip-ins shopper, every product you show me should be from Men's. Women's bestsellers are noise.
- 3. **Add a hard deadline** — "Your cart expires in 48 hours" or "Offer ends Sunday" beats "expires soon" every time. Give me a specific date so I know whether I can wait until tomorrow.
- 4. **Surface the Skechers Plus benefit** — even a single line: "As a Plus member, your points apply at checkout." That's the kind of thing that tips a loyal customer over the edge.
- 5. **Clean up the Mother's Day framing** — if the 20% off is genuinely available to me shopping for myself, say so clearly. "20% off any pair — no occasion required" removes the doubt.
- **Subject Alt A:** `Walker, your Slip-ins are still waiting`
- **Subject Alt B:** `20% off — but your cart won't last`
- **Preheader Alt A:** `Your Max Cushioning Glide-Step is in the cart. Grab 20% off before it's gone.`
- **Preheader Alt B:** `Plus member perk inside — complete your order before your cart clears.`
- | Priority | Action |
- |---|---|
- | **High** | Escalate to Attentive to enable TLS on `skechers.attentivemail.com` click-redirect endpoints; all 49 tracking links are HTTP |
- | **High** | Normalize `image.emails.skechers.com` to HTTPS throughout — remove the HTTP references on static library assets to eliminate mixed-content blocking |
- | **Medium** | Confirm the CloudFront offer banner (`20offonepair.png`, generated 2026-04-02) is still valid for the May send window; if offer images are generated once and reused, add a TTL check to the send pipeline |
- | **Medium** | Add `<title>Skechers — Your cart expires soon</title>` |
- | **Medium** | Scope the link-decoration reset to a narrower selector (e.g., `.email-footer a`) rather than `#MessageViewBody a` globally |
- | **Medium** | Resolve 2–3 Attentive redirect chains and confirm `utm_source`, `utm_medium`, `utm_campaign` are present at final destination |
- | **Low** | Implement a conditional segment in the preheader: suppress "Join Skechers Plus" copy for subscribers already in the Plus tier |
- | **Low** | Verify cart session deep-link behavior with a live click test against a real cart-abandonment session |

## Full review
## 1. Take

Alright, so Skechers is reminding me I left something in my cart — and honestly, good on them for that. I've been eyeing those Max Cushioning Glide-Step Slip-ins for a while, so seeing that blue shoe front and center with a big "YOU LIKED THESE" headline felt like a nudge from a store associate who actually knows me. That part worked. I didn't need much convincing to scroll further.

But then something shifted. Right below my shoe, they started showing me what looks like women's styles — pinks, light colors, clearly not for me. That's a head-scratcher. If you know I put a men's Slip-in in my cart, why are you showing me shoes my wife might like? Felt like the page forgot who it was talking to halfway through.

The 20% off banner caught my eye — I'm not going to pretend it didn't — but the fine print at the bottom mentions Mother's Day Sale, and now I'm second-guessing whether that discount even applies to me buying for myself. Nobody told me my cart item was getting 20% off. That's the kind of small confusion that makes me close the app and think about it later. I'd probably go back and complete the order, but I'd poke around to verify that discount first. Wouldn't forward this one — nothing about it says "hey, tell your buddies."

---

## 2. What stood out

That hero section is doing real work. The Glide-Step in blue is front and center, the shoe is clearly a Slip-in with visible cushioning tech, and "COMPLETE YOUR ORDER" is a button I can actually tap on a phone without squinting. Skechers knows me — I've been a Plus member for years — and this email at least nailed the product match in the hero. What bothered me is that I had to scroll to find the 20% off, and by then I'd already waded through a row of women's shoes that had nothing to do with my cart. That product grid underneath my item reads like a "you might also like" section that misfired — either the recommendation engine wasn't filtering by gender or someone accidentally dumped the bestsellers list without segmenting it. Either way, it diluted the message. And not a single mention of my Skechers Plus membership anywhere — no member price, no points reminder, no "as a Plus member, here's your deal." That's a loyalty program miss I notice every time. The "soon" in the subject line creates some urgency, but once I'm in the email there's no clock, no "expires in 24 hours," nothing that tells me *when* soon actually is. Text size was fine on phone, layout was clean, no broken images — technically solid, just strategically patchy.

---

## 3. What I'd change

1. **Make the 20% off explicitly apply to the cart item** — put a line directly under "COMPLETE YOUR ORDER" that says something like "Use code SAVE20 — 20% off your Glide-Step today." Right now the offer floats in a separate banner and I don't know if it's connected to my cart or a different promotion entirely.

2. **Swap the secondary product tiles for men's styles only** — if you know I'm a male Slip-ins shopper, every product you show me should be from Men's. Women's bestsellers are noise.

3. **Add a hard deadline** — "Your cart expires in 48 hours" or "Offer ends Sunday" beats "expires soon" every time. Give me a specific date so I know whether I can wait until tomorrow.

4. **Surface the Skechers Plus benefit** — even a single line: "As a Plus member, your points apply at checkout." That's the kind of thing that tips a loyal customer over the edge.

5. **Clean up the Mother's Day framing** — if the 20% off is genuinely available to me shopping for myself, say so clearly. "20% off any pair — no occasion required" removes the doubt.

- **Subject Alt A:** `Walker, your Slip-ins are still waiting`
- **Subject Alt B:** `20% off — but your cart won't last`
- **Preheader Alt A:** `Your Max Cushioning Glide-Step is in the cart. Grab 20% off before it's gone.`
- **Preheader Alt B:** `Plus member perk inside — complete your order before your cart clears.`

---

## 4. Business Impact Score (1-10)

**8/10**

- Hero copy explicitly references persona's focus area (men's Slip-in Glide-Step in hero)
- Sender recognized and subscribed (Skechers)
- Concrete offer visible (20% off a single pair)
- Primary CTA unambiguous ("COMPLETE YOUR ORDER" — clear button)
- Visual hierarchy clear (hero shoe + CTA land first)
- No render bugs (clean layout, no broken images, no overlapping text)
- Email reflects current campaign/season (Mother's Day, May 2026)

*Not counted:* Demographic signals undercut by women's product tiles in secondary grid; no loyalty/Plus member benefits visible; offer honesty unclear due to Mother's Day fine print restricting the 20% off.

---

## 5. Open Likelihood (persona-grounded)

- **Score:** 7/10
- **Signals counted:** Recognizable sender display name (SKECHERS); subject is concrete with urgency ("expires soon"); subject is relevant to persona's focus area (cart abandonment for a product I viewed); under 50 characters (23 chars); no spam signals (no ALL CAPS, no !!!, no "FREE!!!"); time-bounded urgency ("expires soon" reads as credible for cart recovery)
- **Rationale:** "Your cart expires soon!" from Skechers is a clean, low-noise subject line that earns the open — short, no tricks, and I already know what's in that cart. What holds it back from a higher score: no personalization (not "Walker" or "your Slip-ins"), no preview text visible that could add detail, and "soon" is vague enough that I might not feel the urgency at 6am scrolling through my inbox.

---

## 6. Click-Through Likelihood (persona-grounded)

- **Score:** 8/10
- **Signals counted:** Hero offer visible without scrolling on mobile (Slip-in shoe + "COMPLETE YOUR ORDER" above the fold); primary CTA in my category (men's Slip-ins); CTA copy is specific ("COMPLETE YOUR ORDER" — verb + noun); offer reduces price (20% off a single pair); one specific product linked in hero (Max Cushioning Glide-Step - Advert); brand voice consistent and trusted; no friction (clean layout, no interstitial, button is tappable)
- **Rationale:** The abandoned cart framing with a product I already chose does most of the heavy lifting — I'm predisposed to click. The 20% off pushes me further. What almost cost a point: no hard deadline makes me feel like I can come back later, and the women's tiles create enough visual noise that I had to consciously re-focus on my shoe.

---

## 7. Subject

- **Subject:** `Your cart expires soon!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `9`, Curiosity `4`, Personalization `2`, Urgency `7`, Specificity `4`

---

## 8. Preview

- **Preview:** `(none / leaking junk)` — visible top-left text reads `SKO-097005`, consistent with a template/campaign identifier bleeding into the preheader slot; no intentional preheader copy visible in the render
- **Length:** 9 characters (if the campaign ID is what inbox clients pull)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

I have all the data needed. Let me compile the technical audit now.

---

## Technical Audit — Skechers "Your cart expires soon!" (2026-05-04)
**From:** `hello@msgs.skechers.com` (Attentive) · **Size:** 108,809 bytes

---

### 1. Technical Summary

Email is delivered via Attentive (`msgs.skechers.com`/`em7876.msgs.skechers.com`) on a standard 600px table layout with a single responsive breakpoint. Authentication passes on all three checks, but 49 of 60 URLs in the message use unencrypted HTTP — including every click-tracking link — and image assets have inconsistent protocol usage across the same CDN domain.

---

### 2. Link & Tracking Issues

**HTTP click-tracking links — all 49 CTA/nav anchors (critical)**
Every clickable link (web version, logo, product CTAs, nav links, unsubscribe) routes through:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu5avyAvDTfG...
```
HTTP, not HTTPS. Modern security gateways (Proofpoint, Mimecast) rewrite or flag mixed-protocol redirects. The destination browser session inherits no security indicator until after redirect resolution.

**Mixed-protocol image CDN**
`image.emails.skechers.com` is referenced inconsistently:
- HTTP: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/...` (static library assets — logo, icons, footer images)
- HTTPS: `https://image.emails.skechers.com/lib/fe3115707564047a731c78/m/...` (hero and product images)

Same host, different protocols across the same send. Email clients that block mixed-content will suppress the HTTP images.

Product images (`images.skechers.com`) and the dynamic offer banner (CloudFront) are correctly HTTPS throughout.

**Stale dynamic offer image**
The 20% off banner is served from:
```
https://d3ptznaucccg76.cloudfront.net/MTQ0Mjo6MjBvZmZvbmVwYWlyLnBuZzo6MjAyNi0wNC0wMlQyMDo0OTozMC4xMjI3MDEzNTBa.png
```
The filename is base64-encoded and decodes to `1442::20offonepair.png::2026-04-02T20:49:30.122701350Z`. The asset was generated **2026-04-02**, over a month before this send (2026-05-04). If offer validity is time-bounded, using a month-old generated image is a risk — there is no confirmed expiry enforcement on this asset.

**UTM parameters — unverifiable**
All destination URLs are fully encoded inside the Attentive `upn=` parameter. UTM attribution cannot be confirmed without resolving the redirect chain for at least 2–3 CTAs manually.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag (confirmed)**
```html
<title></title>
```
Outlook on Windows surfaces `<title>` in the title bar and accessibility tree. A blank title degrades screen reader context with no fallback.

**Global link decoration suppression (confirmed)**
```css
#MessageViewBody a { color: inherit; text-decoration: none; }
```
Strips underline and color differentiation from every inline text anchor in the body. CTA buttons using explicit `style=` overrides are unaffected, but the "web version" link and footer text links are rendered invisibly as plain text for users relying on WCAG 1.4.1 visual cues.

**Preheader padding technique**
The hidden preheader uses both U+034F (combining grapheme joiner) and U+00AD (soft hyphen) as whitespace padding characters to suppress inbox client overflow. This is a common pattern but `U+00AD` in particular can render as a visible hyphen in some aggressive plain-text fallback clients (very low prevalence — flag for awareness, not action).

**Responsive breakpoint**
Single `max-width:620px` breakpoint with `.stack .column` stacking — standard and correct for this template width. No issues found.

---

### 4. Personalization & Merge Tokens

No unresolved tokens (`{{first_name}}`, `%%EMAIL%%`, etc.) visible — correct for a deployed send.

One notable concern: the preheader reads **"Join Skechers Plus today for free shipping!"** This reads as an acquisition message sent universally regardless of loyalty tier. If this send reached existing Skechers Plus members (as it did in this test), the preheader actively misrepresents their status. This is not a broken token — it is a missing conditional segment.

The dynamic offer image (see §2) includes no recipient-level personalization signal in its filename. It cannot be confirmed whether the 20% offer is tailored per-recipient or a flat broadcast.

---

### 5. Compliance (CAN-SPAM / Unsubscribe / Authentication)

| Requirement | Status |
|---|---|
| Physical mailing address (CAN-SPAM §5(a)(5)) | **PASS** — "SKECHERS USA, Inc., Customer Service 225 S Sepulveda Blvd Manhattan Beach, California 90266" confirmed in footer |
| One-click unsubscribe in body | **PASS** — "Unsubscribe" anchor present in footer, routed through Attentive tracking |
| `List-Unsubscribe` header | **PASS** — `https://skechers.attentive-unsubscribe.com/email/unsubscribe?token=...` present |
| `List-Unsubscribe-Post` (RFC 8058 one-click) | **PASS** — `List-Unsubscribe-Post: List-Unsubscribe=One-Click` confirmed in headers |
| Sender identity consistent | **PASS** — `hello@msgs.skechers.com` / "SKECHERS" branding consistent |
| SPF | **PASS** — `em7876.msgs.skechers.com` designates `134.128.86.186` as permitted sender |
| DKIM | **PASS** — signed `header.i=@msgs.skechers.com` |
| DMARC | **PASS** — `header.from=msgs.skechers.com` |

No compliance deficiencies found in this send.

---

### 6. Email-to-Site Continuity

**UTM chain unverifiable** — all 49 CTA links are opaque Attentive redirects. Expected parameters for a cart abandonment trigger:
- `utm_source=email`
- `utm_medium=triggered` (or `transactional`)
- `utm_campaign=cart_abandonment`
- `utm_content=<cta_slot>` if distinguishing hero CTA from product grid

Without resolving end-destination URLs, analytics attribution for this send cannot be verified.

**Cart session deep-link** — the email must resolve to the recipient's specific cart, not a generic cart page. This is a session/cookie concern on the skechers.com side. No HTML-level evidence either confirms or rules this out; it requires a live click test with a real session.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **High** | Escalate to Attentive to enable TLS on `skechers.attentivemail.com` click-redirect endpoints; all 49 tracking links are HTTP |
| **High** | Normalize `image.emails.skechers.com` to HTTPS throughout — remove the HTTP references on static library assets to eliminate mixed-content blocking |
| **Medium** | Confirm the CloudFront offer banner (`20offonepair.png`, generated 2026-04-02) is still valid for the May send window; if offer images are generated once and reused, add a TTL check to the send pipeline |
| **Medium** | Add `<title>Skechers — Your cart expires soon</title>` |
| **Medium** | Scope the link-decoration reset to a narrower selector (e.g., `.email-footer a`) rather than `#MessageViewBody a` globally |
| **Medium** | Resolve 2–3 Attentive redirect chains and confirm `utm_source`, `utm_medium`, `utm_campaign` are present at final destination |
| **Low** | Implement a conditional segment in the preheader: suppress "Join Skechers Plus" copy for subscribers already in the Plus tier |
| **Low** | Verify cart session deep-link behavior with a live click test against a real cart-abandonment session |
## Recent history

- [[2026-05-08-did-you-forget-something]] — 8/10 (2026-05-08)
- [[2026-05-08-the-styles-taking-over-your-feed-1134578b-f07b-4590-8544-]] — 8/10 (2026-05-08)
- [[2026-05-08-almost-over-10-off]] — 8/10 (2026-05-08)

