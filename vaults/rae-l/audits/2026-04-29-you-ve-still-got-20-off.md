---
slug: 2026-04-29-you-ve-still-got-20-off
type: email
date: 2026-04-29
persona: rae-l
score: "5.5/10"
sender: SKECHERS
subject: "You've still got 20% off!"
tags: [email, score-6, sender/skechers]
---
# You've still got 20% off!
**Score:** 5.5/10 · **Type:** Email audit · **2026-04-29**
## Executive summary

- This is a retention/urgency email from Skechers targeting a new or prospective customer who received a first-purchase discount that's about to expire. The email leans hard on the 20% off code and follows it up with a product carousel, a Skechers Plus upsell, and a deep navigation stack. The core offer is clear but the email's structure sprawls beyond the obvious win — by the time you scroll past the product rows, you're in a generic store directory that dilutes whatever urgency the top built.
- The offer is real and the top section communicates it well, but execution below the fold is generic, the product thumbnails are too small to inspire desire, and the email doesn't convert urgency into a single decisive action.

## What's working

- **Hero clarity.** "There's still time! 20% OFF YOUR FIRST PURCHASE" is legible, prominent, and anchors the reason to open immediately.
- **Code is visible.** `WEL20-ZIM2NWMLH5` appears right under the offer, removing friction at the point of motivation.
- **Skechers Plus module.** The pink band mid-email is a clean upsell with icons (free shipping, birthday perks, 365-day returns) — good secondary hook for someone who's already interested.
- **Utility footer.** App download, Curbside Pickup, Shop Now Pay Later, and Find a Store give the email real-world utility beyond a single click path.

## What's weak

- **Product thumbnails are tiny.** The hero product row (Slip-ins, Day Comfort, etc.) and the second product row are rendered so small that individual shoes are nearly impossible to distinguish. This actively undermines purchase intent.
- **The product selection feels random.** There's no apparent logic to why these 6-8 shoes are shown to this persona — no gender, category, or style filtering is evident.
- **"SHOP OUR TOP COLLECTIONS" is filler.** The grid of collection tiles (Hands-Free Slip-ins, Cozy Fit, Max Cushioning, Arch Fit) competes with the urgency message without adding new information.
- **Over-indexed on navigation.** Women / Men / Kids / Clothing / New Arrivals / Sale as a stacked text list at the bottom is a last-ditch site-map fallback, not a persuasion tool. It signals the email ran out of ideas.
- **No deadline shown.** The subject says "still got 20% off" and the hero says "there's still time" — but nowhere in the visible render is an expiration date or countdown. The urgency is asserted, not substantiated.
- **SMS opt-in block feels shoehorned.** "LET'S GET TEXTING" appears in the middle of the navigation section without clear context — it disrupts the scroll flow without earning attention.

## Recommendations

- 1. **Show the deadline.** Add "Expires [date]" directly beneath the promo code. Asserted urgency is weak; a specific cutoff converts.
- 2. **Make product images bigger.** At minimum, double the thumbnail height in the hero product row. Nobody buys a shoe they can't see.
- 3. **Personalize or filter the product grid.** Even a simple gender/category split ("For Her" / "For Him") or "top picks in your size" framing makes the grid feel targeted rather than generic.
- 4. **Cut the site-map nav section.** Replace it with one strong secondary CTA ("See all sale styles →") rather than six text links that blur the call to action.
- 5. **Reposition the Skechers Plus module.** Move it below the hero but before the product carousel — capture the engaged reader before they scroll past. Right now it appears after a lot of product noise.
- 6. **SMS opt-in needs its own block.** If it's worth including, give it breathing room and a benefit hook, not a one-liner buried in nav.
- | Priority | Action |
- |---|---|
- | **P0** | Fix doubled-domain merge error: audit the template variable bound to `http://www.skechers.com/www.Skechers.com` and correct the fallback value or variable reference before any future send. |
- | **P0** | Add protocol to Return Path pixel src: `https://pixel.app.returnpath.net/pixel.gif?r=...` |
- | **P1** | Upgrade all `http://image.emails.skechers.com` and `http://image.emails.nl.skechers.com` asset URLs to HTTPS — this is a bulk find-and-replace in the SFMC template. |
- | **P1** | Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present in raw SMTP delivery; if AgentMail relay strips them, inspect at the SMTP layer, not the relay copy. |
- | **P1** | Add descriptive `alt` text to content images; set `alt=""` explicitly on all tracking/decorative pixels. |
- | **P2** | Resolve the MovableInk pixel to HTTPS: `https://www.ink1000.com/...` |
- | **P2** | Spot-check a sample of the 26 click-redirect destinations to confirm UTM params are preserved end-to-end. |
- | **P3** | Reconsider `text-size-adjust: none` on `*` — scope it to specific elements where text reflow would break layout, rather than suppressing globally. |
- | **P3** | Verify Kraken audience-sync pixel with cleartext subscriber ID (`partner_uid=122908675`) is disclosed in privacy policy and compliant with applicable state/GDPR consent requirements. |

## Full review
---

## 1. Executive Summary

This is a retention/urgency email from Skechers targeting a new or prospective customer who received a first-purchase discount that's about to expire. The email leans hard on the 20% off code and follows it up with a product carousel, a Skechers Plus upsell, and a deep navigation stack. The core offer is clear but the email's structure sprawls beyond the obvious win — by the time you scroll past the product rows, you're in a generic store directory that dilutes whatever urgency the top built.

---

## 2. Business Impact Score: **5.5 / 10**

The offer is real and the top section communicates it well, but execution below the fold is generic, the product thumbnails are too small to inspire desire, and the email doesn't convert urgency into a single decisive action.

---

## 3. What's Working

- **Hero clarity.** "There's still time! 20% OFF YOUR FIRST PURCHASE" is legible, prominent, and anchors the reason to open immediately.
- **Code is visible.** `WEL20-ZIM2NWMLH5` appears right under the offer, removing friction at the point of motivation.
- **Skechers Plus module.** The pink band mid-email is a clean upsell with icons (free shipping, birthday perks, 365-day returns) — good secondary hook for someone who's already interested.
- **Utility footer.** App download, Curbside Pickup, Shop Now Pay Later, and Find a Store give the email real-world utility beyond a single click path.

---

## 4. What's Weak

- **Product thumbnails are tiny.** The hero product row (Slip-ins, Day Comfort, etc.) and the second product row are rendered so small that individual shoes are nearly impossible to distinguish. This actively undermines purchase intent.
- **The product selection feels random.** There's no apparent logic to why these 6-8 shoes are shown to this persona — no gender, category, or style filtering is evident.
- **"SHOP OUR TOP COLLECTIONS" is filler.** The grid of collection tiles (Hands-Free Slip-ins, Cozy Fit, Max Cushioning, Arch Fit) competes with the urgency message without adding new information.
- **Over-indexed on navigation.** Women / Men / Kids / Clothing / New Arrivals / Sale as a stacked text list at the bottom is a last-ditch site-map fallback, not a persuasion tool. It signals the email ran out of ideas.
- **No deadline shown.** The subject says "still got 20% off" and the hero says "there's still time" — but nowhere in the visible render is an expiration date or countdown. The urgency is asserted, not substantiated.
- **SMS opt-in block feels shoehorned.** "LET'S GET TEXTING" appears in the middle of the navigation section without clear context — it disrupts the scroll flow without earning attention.

---

## 5. Recommendations

1. **Show the deadline.** Add "Expires [date]" directly beneath the promo code. Asserted urgency is weak; a specific cutoff converts.
2. **Make product images bigger.** At minimum, double the thumbnail height in the hero product row. Nobody buys a shoe they can't see.
3. **Personalize or filter the product grid.** Even a simple gender/category split ("For Her" / "For Him") or "top picks in your size" framing makes the grid feel targeted rather than generic.
4. **Cut the site-map nav section.** Replace it with one strong secondary CTA ("See all sale styles →") rather than six text links that blur the call to action.
5. **Reposition the Skechers Plus module.** Move it below the hero but before the product carousel — capture the engaged reader before they scroll past. Right now it appears after a lot of product noise.
6. **SMS opt-in needs its own block.** If it's worth including, give it breathing room and a benefit hook, not a one-liner buried in nav.

---

## 6. Bottom Line

The discount is legitimate and the hero communicates it cleanly — that's the strongest thing here. But the email then fills the remaining scroll with product thumbnails too small to sell, a generic collections grid, and a site-map footer that reads like a default template. Tightening to: Hero → Two strong products → Skechers Plus upsell → Single CTA would likely outperform this wall of content on click-through rate.

---

## 7. Subject Line Analysis

- **Subject:** `You've still got 20% off!`
- **Length:** 26 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `5`, Urgency `6`, Specificity `6`
- **Strengths:**
  - Short, scannable, and immediately communicates a concrete benefit (20%)
  - "Still got" implies the recipient is on the clock — mild but genuine urgency
- **Weaknesses:**
  - No deadline anchor — urgency is implied but not substantiated
  - Curiosity is low; there's no hook that makes you wonder what's inside beyond what the subject already tells you
- **Alt A:** `Your 20% off expires soon — here's what to grab`
- **Alt B:** `Last chance: 20% off your first Skechers order`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the preview visible at the top of the render appears to be an order-number-style code (`SKE-23234` or similar) rather than intentional preheader copy
- **Length:** ~10 characters (indeterminate junk)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None visible
- **Weaknesses:**
  - The preheader slot is wasted on what appears to be a tracking or template artifact, not marketing copy
  - Inbox clients will display this numeric string next to the subject, which looks like a broken email
- **Alt A:** `Use code WEL20 at checkout — offer ending soon`
- **Alt B:** `Your welcome discount is waiting. Don't leave it on the table.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** "You've still got 20% off" is clear enough to earn a look if I vaguely remember signing up, but the broken preheader junk in the preview slot would make me hesitate — it reads like a spam artifact, which undercuts trust before the email even opens. I'd open it on brand recognition alone (Skechers is familiar), not because the subject-preview combo compelled me.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** The hero CTA ("SHOP NOW") is visible and the code is right there, but the product thumbnails are too small to trigger desire for any specific item, and without a deadline I don't feel urgency to act now versus later — which usually means never. The Skechers Plus module is an interesting secondary hook but it's positioned too late in the scroll to catch a casual reader.

---

## 11. Evidence

- **Overall purpose:** Urgency re-engagement email to convert a first-time visitor or lapsed prospect using a welcome discount before it expires.
- **Hero / primary value proposition:** "There's still time! 20% OFF YOUR FIRST PURCHASE" with promo code `WEL20-ZIM2NWMLH5` and a "SHOP NOW" button. Cyan/teal background makes it pop.
- **Product carousel:** Two rows of product thumbnails below the hero — roughly 4-5 shoes per row. Products include Slip-ins, Day Comfort Coleman, and Spring Bloom styles. Thumbnails are visually undersized.
- **Collections grid:** "SHOP OUR TOP COLLECTIONS" — four tiles: Hands-Free Slip-ins, Cozy Fit, Max Cushioning, Arch Fit. Functional but generic.
- **Skechers Plus upsell:** Pink/magenta band with "Not a member? Sign up to get" — icons for Access to Members-Only Deals, Free Shipping & Returns (365 days), Birthday Surprises. CTA: "JOIN NOW."
- **Navigation stack:** Text links for Women / Men / Kids / Clothing / New Arrivals / Sale. Standard but low-conversion module.
- **SMS opt-in:** "LET'S GET TEXTING — join Skechers for exclusive offers!" Placed mid-nav, no visual separation.
- **Utility footer:** Download the App (App Store / Google Play badges), Curbside Pickup, Shop Now Pay Later (Afterpay logo visible), Find a Store.
- **Legal footer:** "SKECHERS PLUS MEMBERS OFFER" fine print visible; standard unsubscribe and address block present.
- **Visible bugs/friction:** The top-right area shows what appears to be a raw identifier/code string rendering as preheader content — the only clearly visible artifact. No broken images, overlapping text, or empty placeholder fields detected at this zoom level.

---

## Technical Audit

## Technical Audit — Skechers "You've still got 20% off!" (TRG_US_EN_NONMEMWELCOME_2_12022025)

---

### 1. Technical Summary

One confirmed broken destination URL caused by a doubled-domain merge error; 13 image assets served over plain HTTP. Compliance headers (List-Unsubscribe, Authentication-Results) are absent from the relay-captured copy, creating one-click unsubscribe and deliverability blind spots.

---

### 2. Link & Tracking Issues

**[FAIL — Critical] Doubled-domain merge error**
`http://www.skechers.com/www.Skechers.com`
A template variable was not resolved; the fallback value itself contains the domain, producing a malformed path. Any click on that CTA returns a 404 or redirect loop.

**[WARN] Return Path pixel missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
No `http://` or `https://` prefix. Most clients will treat this as a relative path and fail to fire the deliverability beacon.

**[WARN] 26 tracking/click-redirect links not probed**
All outbound links route through `click.emails.skechers.com`. Destination health could not be verified by the automated checker. Manual spot-check of final destinations is required.

**[WARN] Open-pixel served over HTTP**
`http://click.emails.skechers.com/open.aspx?VYB3BKY3KWEEPLB52KO6NZBU4E.100217...`
Modern Gmail and Apple Mail proxy or block plain-HTTP tracking pixels.

---

### 3. Rendering & Accessibility

**[WARN] 13 image assets served over HTTP** — full list:

| Asset | URL |
|---|---|
| Favicon | `http://image.emails.nl.skechers.com/lib/.../70bf5f91-13bc-45d7-9386-0be3d0c2a11a.png` |
| Skechers logo (`dde00662`) | `http://image.emails.skechers.com/lib/.../dde00662-...png` |
| Product image (`49468f73`) | `http://image.emails.skechers.com/lib/.../49468f73-...png` |
| App Store badge (`0ec56c9f`) | `http://image.emails.skechers.com/lib/.../0ec56c9f-...png` |
| Google Play badge (`9bb508d0`) | `http://image.emails.skechers.com/lib/.../9bb508d0-...png` |
| Image `00100b23` | `http://image.emails.skechers.com/lib/.../00100b23-...png` |
| AfterPay (`07cb60b5`) | `http://image.emails.skechers.com/lib/.../07cb60b5-...png` |
| Image `fc08601a` | `http://image.emails.skechers.com/lib/.../fc08601a-...png` |
| Instagram icon | `http://image.emails.skechers.com/lib/.../b782e0aa-...png` |
| Facebook icon | `http://image.emails.skechers.com/lib/.../a5c4cae0-...png` |
| YouTube icon | `http://image.emails.skechers.com/lib/.../8c5738fc-...png` |
| MovableInk pixel | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` |

Apple Mail (via MPP) and some corporate proxies block mixed-content images; the logo and social icons will render as broken images in those environments.

**[WARN] 5 images missing `alt` text**
- `o.gif` (MovableInk pixel) — should be `alt=""` (not omitted)
- `bcc16007-f391-423b-868f-cb0ad4f03490.jpg` — product image, no alt
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no alt
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — no alt
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — no alt

Decorative/tracking images must carry `alt=""` explicitly; content images require descriptive alt text for screen readers and image-blocking clients.

**[WARN] `text-size-adjust: none` applied globally**
```css
* { text-size-adjust: none; -webkit-text-size-adjust: none; ... }
```
Suppresses user-configured font scaling in all clients, including assistive technology and accessibility zoom settings.

**[INFO] Dark mode CSS is a no-op**
The `@media (prefers-color-scheme: dark)` block sets backgrounds to `#ffffff` — identical to light mode. No dark-mode adaptation is active.

---

### 4. Personalization & Merge Tokens

**[FAIL] Unresolved merge token — broken URL**
`http://www.skechers.com/www.Skechers.com` — the path segment `www.Skechers.com` is characteristic of an ESP merge variable fallback that itself contains the domain string. Check the template variable bound to this CTA's href.

No other unresolved `%%variable%%`, `{{variable}}`, or `[variable]` tokens were detected in the truncated source.

---

### 5. Compliance

**[WARN] `List-Unsubscribe` header absent from relay copy**
RFC 2369 requires this header for commercial email. Its absence in the captured headers means either (a) the AgentMail relay stripped it, or (b) the sending configuration omits it. Gmail and Apple Mail surface the one-click unsubscribe UI from this header; without it, ISP-level unsubscribe handling is unavailable.

**[WARN] `List-Unsubscribe-Post` header absent**
Required by RFC 8058 for one-click machine unsubscribe (Google/Yahoo 2024 bulk sender mandate). Non-compliance increases spam folder placement risk for high-volume sends.

**[WARN] `Authentication-Results` header not captured**
SPF, DKIM, and DMARC pass/fail status cannot be confirmed. The sending domain `emails.skechers.com` is a subdomain delegated to Salesforce Marketing Cloud; alignment must be verified at the ESP level. If DKIM is signing on behalf of `skechers.com` and the `From:` domain is `emails.skechers.com`, relaxed DMARC alignment should still pass — but this needs direct header confirmation.

**[INFO] Physical address and unsubscribe link**
Both appear to be present in the email body per standard SFMC template patterns; CAN-SPAM baseline requirements appear structurally met at the template level (could not fully verify in truncated source).

---

### 6. Email-to-Site Continuity

**[FAIL] Broken destination URL eliminates one CTA entirely**
`http://www.skechers.com/www.Skechers.com` — the landing page for at least one CTA does not exist.

**[WARN] UTM parameter coverage unverifiable**
All outbound links pass through `click.emails.skechers.com` click-tracking redirects. Whether UTM params (`utm_source`, `utm_medium`, `utm_campaign`) are appended to final destination URLs could not be confirmed without resolving the redirects. Campaign ID `TRG_US_EN_NONMEMWELCOME_2_12022025` is present in Kraken/Lotame beacons and the MovableInk pixel, confirming ESP-side campaign tagging exists.

**[INFO] Kraken/Lotame audience sync beacons present**
Three `beacon.krxd.net` pixels fire on open, including a SHA-256 hashed UID match (`partner_uid=7e8656d1...`) and a cleartext subscriber ID (`partner_uid=122908675`). Confirm these are covered under the sender's privacy policy and applicable consent framework.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix doubled-domain merge error: audit the template variable bound to `http://www.skechers.com/www.Skechers.com` and correct the fallback value or variable reference before any future send. |
| **P0** | Add protocol to Return Path pixel src: `https://pixel.app.returnpath.net/pixel.gif?r=...` |
| **P1** | Upgrade all `http://image.emails.skechers.com` and `http://image.emails.nl.skechers.com` asset URLs to HTTPS — this is a bulk find-and-replace in the SFMC template. |
| **P1** | Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present in raw SMTP delivery; if AgentMail relay strips them, inspect at the SMTP layer, not the relay copy. |
| **P1** | Add descriptive `alt` text to content images; set `alt=""` explicitly on all tracking/decorative pixels. |
| **P2** | Resolve the MovableInk pixel to HTTPS: `https://www.ink1000.com/...` |
| **P2** | Spot-check a sample of the 26 click-redirect destinations to confirm UTM params are preserved end-to-end. |
| **P3** | Reconsider `text-size-adjust: none` on `*` — scope it to specific elements where text reflow would break layout, rather than suppressing globally. |
| **P3** | Verify Kraken audience-sync pixel with cleartext subscriber ID (`partner_uid=122908675`) is disclosed in privacy policy and compliant with applicable state/GDPR consent requirements. |
## Recent history

- [[2026-04-28-you-glossier-sweatshirt-perfection]] — 5/10 (2026-04-28)
- [[2026-04-28-join-the-freshest-club-in-town]] — 6/10 (2026-04-28)
- [[2026-04-28-confirm-your-email-for-extra-25-off]] — 5/10 (2026-04-28)

