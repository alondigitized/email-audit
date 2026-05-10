---
slug: 2026-05-10-your-cart-expires-soon
type: email
date: 2026-05-04
persona: walker
score: "8/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-8, sender/skechers]
---
# Your cart expires soon!
**Score:** 8/10 · **Type:** Email audit · **2026-05-04**
## Executive summary

- Well, I'll be honest — "your cart expires soon" caught my eye in the inbox because I did actually poke around on the Skechers site recently. When I opened it and saw a picture of a Slip-in right there front and center, I felt like they actually paid attention. That GO RUN Glide-Step with Arch Fit is exactly the kind of shoe I browse. "YOU LIKED THESE AND YOU WEREN'T WRONG" is a little cute, a little smug, but I didn't hate it. It didn't feel like someone was shouting at me.
- That said, a few things bugged me. The 20% off module showed up kind of tucked in the middle like an afterthought — I wasn't sure if that applied to my cart item or was a completely separate promotion. And I'm a Skechers Plus member; where's my deal? Doesn't feel like they know that about me. The navigation section below — WOMEN, MEN, KIDS, CLOTHING — that's fine for a desktop but on my phone that's a lot of tapping around for no reason.
- Would I click? Yes — "COMPLETE YOUR ORDER" was easy to find and the shoe in the hero was exactly right. Would I forward it to a buddy? No. This is just for me.

## Recommendations

- 1. **Connect the 20% OFF to the cart item** — Right now the discount module floats in the middle with no visible tie to the GO RUN Slip-in. Say "20% OFF your GO RUN Glide-Step — use at checkout" so I know the deal is for me, not some random pair.
- 2. **Acknowledge I'm a Skechers Plus member** — A single line like "As a Plus member, your 20% is already applied" would make me feel seen. Right now I feel like a stranger.
- 3. **Put a real deadline on "expires soon"** — "Your cart expires in 48 hours" or "expires by Sunday" is more compelling than vague. Boomers like me want specifics.
- 4. **Clean up the product grid to men's only** — I don't need to see women's Slip-ins. Show me three or four men's alternatives, not a mixed-gender assortment.
- 5. **Surface the Mother's Day Sale if it's happening** — It's buried in 8-point fine print. Either make it a callout in the body or drop it. Don't tease a sale I can barely read.
- **Subject Alt A:** `Your Slip-ins are waiting — 20% off today`
- **Subject Alt B:** `Don't lose these: GO RUN Slip-ins expire soon`
- **Preheader Alt A:** `You've got 48 hours — Plus member pricing inside`
- **Preheader Alt B:** `That Arch Fit pair won't last. Here's 20% off to seal it.`
- | Priority | Action |
- |---|---|
- | High | Confirm all Attentive tracking URLs resolve to `https://` final destinations; if the redirect itself is HTTP, escalate to Attentive support to enable TLS on click redirects |
- | High | Verify full HTML for physical address and unsubscribe link; both are CAN-SPAM hard requirements |
- | Medium | Add meaningful value to `<title>` tag (e.g., `Skechers — Your cart expires soon`) |
- | Medium | Scope the link decoration reset to `.body-text a` or similar rather than `#MessageViewBody a` globally, preserving accessibility for inline text links |
- | Medium | Resolve the Attentive redirect chain for 2–3 CTAs and confirm UTM parameters are present and correct |
- | Low | Obtain raw email headers and run through mail-tester.com to confirm SPF/DKIM/DMARC pass rates |
- | Low | Conduct a rendered test send and verify all dynamic cart fields (product name, price, expiry) populate correctly before next deployment |

## Full review
## 1. Take

Well, I'll be honest — "your cart expires soon" caught my eye in the inbox because I did actually poke around on the Skechers site recently. When I opened it and saw a picture of a Slip-in right there front and center, I felt like they actually paid attention. That GO RUN Glide-Step with Arch Fit is exactly the kind of shoe I browse. "YOU LIKED THESE AND YOU WEREN'T WRONG" is a little cute, a little smug, but I didn't hate it. It didn't feel like someone was shouting at me.

That said, a few things bugged me. The 20% off module showed up kind of tucked in the middle like an afterthought — I wasn't sure if that applied to my cart item or was a completely separate promotion. And I'm a Skechers Plus member; where's my deal? Doesn't feel like they know that about me. The navigation section below — WOMEN, MEN, KIDS, CLOTHING — that's fine for a desktop but on my phone that's a lot of tapping around for no reason.

Would I click? Yes — "COMPLETE YOUR ORDER" was easy to find and the shoe in the hero was exactly right. Would I forward it to a buddy? No. This is just for me.

---

## 2. What stood out

The hero did its job. A clean product photo of a Slip-in with the Arch Fit callout, and a button that says "COMPLETE YOUR ORDER" in a color that pops. I didn't have to hunt for what Skechers wanted me to do. For a 62-year-old squinting at his phone, that matters more than people think.

What pulled me back was the product grid below the hero — it showed a mix of men's and women's shoes, and a couple of them looked like women's. I'm in the Men's section every time I visit; showing me women's Slip-ins doesn't help me and clutters the email. The 20% off block looked like a generic banner — I couldn't tell if it was tied to my cart or just a site-wide thing slapped in. Fine print at the very bottom mentions a Mother's Day Sale, which I almost missed entirely. If there's a sale happening, lead with it or at least make it readable. And not a single mention that I'm a Skechers Plus member — I've been loyal to this brand for years, and this email reads like it was sent to someone who wandered in off the street.

---

## 3. What I'd change

1. **Connect the 20% OFF to the cart item** — Right now the discount module floats in the middle with no visible tie to the GO RUN Slip-in. Say "20% OFF your GO RUN Glide-Step — use at checkout" so I know the deal is for me, not some random pair.
2. **Acknowledge I'm a Skechers Plus member** — A single line like "As a Plus member, your 20% is already applied" would make me feel seen. Right now I feel like a stranger.
3. **Put a real deadline on "expires soon"** — "Your cart expires in 48 hours" or "expires by Sunday" is more compelling than vague. Boomers like me want specifics.
4. **Clean up the product grid to men's only** — I don't need to see women's Slip-ins. Show me three or four men's alternatives, not a mixed-gender assortment.
5. **Surface the Mother's Day Sale if it's happening** — It's buried in 8-point fine print. Either make it a callout in the body or drop it. Don't tease a sale I can barely read.

- **Subject Alt A:** `Your Slip-ins are waiting — 20% off today`
- **Subject Alt B:** `Don't lose these: GO RUN Slip-ins expire soon`
- **Preheader Alt A:** `You've got 48 hours — Plus member pricing inside`
- **Preheader Alt B:** `That Arch Fit pair won't last. Here's 20% off to seal it.`

---

## 4. Business Impact Score (1-10)

**8/10**

- Subject/hero copy references Slip-ins — Walker's primary focus area ✓
- Sender (Skechers) is recognized and trusted ✓
- Concrete offer visible: 20% OFF A SINGLE PAIR ✓
- Primary CTA is unambiguous: "COMPLETE YOUR ORDER" with clear button ✓
- Visual hierarchy is clear — hero shoe and CTA land first ✓
- No render bugs — email loads clean, no broken images or overlapping text ✓
- Offer reads honest — 20% off is clear, no obvious bait-and-switch in the hero ✓
- Demographic signals weak — no lifestyle models, product grid mixes men's and women's ✗
- Current season/campaign (Mother's Day) barely visible — fine print only ✗
- Loyalty/member benefits not surfaced for a Skechers Plus member ✗

---

## 5. Open Likelihood (persona-grounded)

- **Score:** 9/10
- **Signals counted:** Sender display name recognizable (SKECHERS); subject is concrete (references a specific action — cart expiration); preview text complements subject ("YOU LIKED THESE AND YOU WEREN'T WRONG" — inferred from hero, does not repeat subject); preview is real marketing copy; subject is 23 chars, well under 50; no spam signals (no ALL CAPS or excessive punctuation in subject); "Your cart" implies per-recipient personalization; "expires soon" is time-bounded urgency that feels credible for an abandoned-cart trigger.
- **Rationale:** The combination of a recognizable brand, personal urgency ("your cart"), and a short clean subject line is a strong open driver. The vague "expires soon" without a hard deadline is the one miss — a specific window would push this to a near-certain open.

---

## 6. Click-Through Likelihood (persona-grounded)

- **Score:** 9/10
- **Signals counted:** Hero offer and CTA visible without scrolling on mobile; primary CTA ("COMPLETE YOUR ORDER") is in Walker's exact category — a men's Slip-in; CTA copy is specific (verb + noun); 20% OFF offer reduces price; specific product hero (GO RUN Glide-Step Arch Fit) is linked; "Arch Fit" product detail is visible and relevant to comfort-focused shopper; brand is trusted; no friction — no view-in-browser gate, images load clean.
- **Rationale:** The product shown in the hero is the right shoe for this persona, the CTA is unambiguous, and a 20% off offer seals the case. The two misses — no specific expiry deadline in the body, and no visible reviews or social proof — keep this off a perfect score.

---

## 7. Subject

- **Subject:** `Your cart expires soon!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `8`, Curiosity `5`, Personalization `7`, Urgency `8`, Specificity `4`

---

## 8. Preview

- **Preview:** `YOU LIKED THESE AND YOU WEREN'T WRONG.` *(inferred from email hero — inbox preview not directly visible in screenshot)*
- **Length:** 38 characters
- **Scores (1-10):** Complements subject `8`, Specificity `4`, Clarity `7`, Inbox-fit `7`

---

## Technical Audit

## Technical Audit — Skechers Cart Abandonment Email

---

### 1. Technical Summary

Email is sent via Attentive (`msgs.skechers.com` / `skechers.attentivemail.com`) with standard table-based layout and responsive CSS breakpoints. All click-tracking links use unencrypted HTTP, and several accessibility and compliance items cannot be fully assessed from the truncated source.

---

### 2. Link & Tracking Issues

**HTTP tracking URLs (confirmed critical)**
Every link in the visible source routes through `http://skechers.attentivemail.com/ls/click?upn=...` — HTTP, not HTTPS. Example:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu5avyAvDTfGT...
```
Modern email clients and security gateways flag mixed-content or unencrypted redirects. This also breaks security indicators in the destination browser tab until the final HTTPS redirect resolves.

**UTM parameters — unverifiable**
The destination URLs are fully encoded inside the Attentive `upn=` parameter. UTM attribution cannot be confirmed without resolving the redirect chain end-to-end. Manual spot-check of 2–3 final destinations is required.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
Some clients (notably Outlook on Windows) surface the `<title>` in the window title bar or accessibility tree. An empty title degrades screen reader context.

**Global link decoration suppression**
```css
#MessageViewBody a { color: inherit; text-decoration: none; }
```
This strips all visual link affordance from every anchor in the message body. Users relying on color/underline to identify links (WCAG 1.4.1) are impacted. CTA buttons with explicit inline styles are unaffected, but any inline text links lose differentiation entirely.

**Image `alt` text — unverifiable from truncation**
The `<img>` tags are cut off before the `alt` attribute appears. Must verify all images carry meaningful `alt` text (logo minimum: `alt="Skechers"`) and that purely decorative images use `alt=""`.

**Responsive breakpoint**
Single breakpoint at `max-width:620px` with `.stack .column` stacking — standard and correct for a 600px fixed-width template.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`{{first_name}}`, `%%EMAIL%%`, etc.) are visible in the truncated source, which is correct for a deployed send. However, for a cart abandonment email, expected dynamic content includes:

- Recipient first name in greeting
- Abandoned product name, image, price
- Cart expiry timestamp referenced in the subject line

These fields cannot be confirmed as populated without a rendered test send. If any were null/fallback at deploy time, they would silently render blank — no visible broken token in the HTML.

---

### 5. Compliance (CAN-SPAM / Unsubscribe / Authentication)

**Truncation prevents full assessment.** The following require verification against the full HTML source:

| Requirement | Status |
|---|---|
| Physical mailing address (CAN-SPAM §5(a)(5)) | Not visible in truncated source — must confirm |
| One-click unsubscribe link | Not visible in truncated source — must confirm |
| Sender identification ("From" matches message content) | `hello@msgs.skechers.com` / Skechers branding — consistent |
| List-Unsubscribe header | Requires raw email headers — not assessable from HTML |

**Authentication headers** (SPF, DKIM, DMARC) are not derivable from HTML. Verify via raw message headers or a mail-tester.com report. Attentive typically handles DKIM signing on `msgs.skechers.com` — confirm `msgs.skechers.com` has a valid `DKIM` signature and that Skechers' DMARC policy (`skechers.com`) covers the subdomain.

---

### 6. Email-to-Site Continuity

**UTM chain unverifiable** — see Link & Tracking section. Required parameters for a cart abandonment flow:

- `utm_source=email`
- `utm_medium=transactional` (or `triggered`)
- `utm_campaign=cart_abandonment`
- `utm_content=<variant>` if A/B tested

Without confirming the final destination URL after the Attentive redirect, there is no way to assert these are present or correctly attributed in analytics.

**Cart state continuity** — the email must deep-link to the recipient's specific cart session, not a generic cart or homepage. This is a session/cookie concern on the site side, not the email HTML, but should be included in QA testing.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| High | Confirm all Attentive tracking URLs resolve to `https://` final destinations; if the redirect itself is HTTP, escalate to Attentive support to enable TLS on click redirects |
| High | Verify full HTML for physical address and unsubscribe link; both are CAN-SPAM hard requirements |
| Medium | Add meaningful value to `<title>` tag (e.g., `Skechers — Your cart expires soon`) |
| Medium | Scope the link decoration reset to `.body-text a` or similar rather than `#MessageViewBody a` globally, preserving accessibility for inline text links |
| Medium | Resolve the Attentive redirect chain for 2–3 CTAs and confirm UTM parameters are present and correct |
| Low | Obtain raw email headers and run through mail-tester.com to confirm SPF/DKIM/DMARC pass rates |
| Low | Conduct a rendered test send and verify all dynamic cart fields (product name, price, expiry) populate correctly before next deployment |
## Recent history

- [[2026-05-04-did-you-forget-something]] — 8/10 (2026-05-04)
- [[2026-05-10-to-mom-with-love]] — 8/10 (2026-05-04)
- [[2026-05-04-your-items-are-waiting]] — 8/10 (2026-05-04)

