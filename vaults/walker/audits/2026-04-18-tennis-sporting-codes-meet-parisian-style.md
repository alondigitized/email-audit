---
slug: 2026-04-18-tennis-sporting-codes-meet-parisian-style
type: email
date: 2026-04-18
persona: walker
score: "4/10"
sender: adidas
subject: Tennis sporting codes meet Parisian style
tags: [email, score-4, sender/adidas]
---
# Tennis sporting codes meet Parisian style
**Score:** 4/10 · **Type:** Email audit · **2026-04-18**
## Executive summary

- Low conversion potential. Beautiful photography with zero purchase mechanics.

## What's working

- **Hero image** — The tennis/Parisian editorial is visually confident and on-brand. Warm tones, aspirational energy, clear sport context.
- **Girls on the Run module** — Cause content is emotionally resonant and the photo of the two girls is the most human moment in the entire email. It adds brand dimension beyond pure commerce.
- **Navigation bar** — "Explore the latest adidas best sellers" banner at the top is a reasonable recovery net if the main content fails to convert.

## What's weak

- **No product CTA on the hero module.** "Paris Tennis Collection" is a headline, not a door. There is no button, no "Shop Now" link, no product grid — readers have nowhere to go.
- **No products shown.** A collection launch email that shows zero products is a wasted send. The reader cannot see what they would be buying.
- **Loyalty module is vague.** "Donate points for good" is a nice idea but the copy doesn't tell you how many points, what it costs, or what impact it has. It asks for action with no specificity.
- **The layout is too sparse.** Two modules, neither with a strong CTA, makes the email feel unfinished. There's a lot of dead white space.
- **Subject line and body are misaligned.** "Parisian style" implies fashion-forward product, but the email body is 50% cause marketing — a bait-and-switch that could erode trust with repeat openers.

## Recommendations

- 1. **Add a shop CTA button directly under or overlaid on the hero.** "Shop the Paris Tennis Collection" is enough.
- 2. **Insert a 3–4 product tile grid** between the hero and the cause module. Show actual product with price.
- 3. **Sharpen the points module.** Add a specific number ("You have X points") and a concrete impact line ("100 points = $1 donated"). Pull this from the loyalty data.
- 4. **Either commit to the cause story or don't.** If Girls on the Run deserves prominence, give it its own send. Combining a product launch with cause marketing in one sparse email dilutes both.
- 5. **Add a secondary CTA at the bottom** before the footer — a final "Shop Tennis" escape hatch for scroll-completers.
- | Priority | Action |
- |---|---|
- | **Critical** | Regenerate/re-encode the broken redirect for asset `cbdffb0b`. The `dv.adidas.com/o/` handler is producing a relative path; confirm the payload encoding pipeline and re-test end-to-end before any resend. |
- | **High** | Upgrade all `http://image.link.adidas.com/…` and `http://click.comms.adidas.com/…` references to HTTPS. Four arrow icons and one tracking pixel are affected. |
- | **High** | Add a plain-text `multipart/alternative` part. Minimum viable: stripped-down copy + all destination URLs in readable form. |
- | **Medium** | Add explicit `alt` attributes to all content images; use `alt=""` for decorative/tracking pixels. |
- | **Medium** | Pull raw headers from a live send and confirm `Authentication-Results` shows SPF pass + DKIM pass with correct domain alignment. |
- | **Low** | Probe the 24 skipped tracking links to audit UTM completeness and confirm no additional broken destinations. |

## Full review
## 2. Business Impact Score: 4 / 10

Low conversion potential. Beautiful photography with zero purchase mechanics.

---

## 3. What's Working

- **Hero image** — The tennis/Parisian editorial is visually confident and on-brand. Warm tones, aspirational energy, clear sport context.
- **Girls on the Run module** — Cause content is emotionally resonant and the photo of the two girls is the most human moment in the entire email. It adds brand dimension beyond pure commerce.
- **Navigation bar** — "Explore the latest adidas best sellers" banner at the top is a reasonable recovery net if the main content fails to convert.

---

## 4. What's Weak

- **No product CTA on the hero module.** "Paris Tennis Collection" is a headline, not a door. There is no button, no "Shop Now" link, no product grid — readers have nowhere to go.
- **No products shown.** A collection launch email that shows zero products is a wasted send. The reader cannot see what they would be buying.
- **Loyalty module is vague.** "Donate points for good" is a nice idea but the copy doesn't tell you how many points, what it costs, or what impact it has. It asks for action with no specificity.
- **The layout is too sparse.** Two modules, neither with a strong CTA, makes the email feel unfinished. There's a lot of dead white space.
- **Subject line and body are misaligned.** "Parisian style" implies fashion-forward product, but the email body is 50% cause marketing — a bait-and-switch that could erode trust with repeat openers.

---

## 5. Recommendations

1. **Add a shop CTA button directly under or overlaid on the hero.** "Shop the Paris Tennis Collection" is enough.
2. **Insert a 3–4 product tile grid** between the hero and the cause module. Show actual product with price.
3. **Sharpen the points module.** Add a specific number ("You have X points") and a concrete impact line ("100 points = $1 donated"). Pull this from the loyalty data.
4. **Either commit to the cause story or don't.** If Girls on the Run deserves prominence, give it its own send. Combining a product launch with cause marketing in one sparse email dilutes both.
5. **Add a secondary CTA at the bottom** before the footer — a final "Shop Tennis" escape hatch for scroll-completers.

---

## 6. Bottom Line

This email looks good but does nothing. Strong editorial photography is wasted without conversion infrastructure. Fix the missing CTAs and product tiles first; everything else is secondary.

---

## 7. Subject Line Analysis

- **Subject:** `Tennis sporting codes meet Parisian style`
- **Length:** 40 characters
- **Scores (1-10):** Clarity `6`, Curiosity `5`, Personalization `1`, Urgency `1`, Specificity `4`
- **Strengths:**
  - Evokes a clear aesthetic intersection (sport + European fashion) that differentiates from generic sale lines
  - Moderate length, reads cleanly in mobile preview
- **Weaknesses:**
  - Zero urgency or incentive — nothing compels an open beyond mild curiosity
  - "Sporting codes" is jargon; most consumers won't know what it means
- **Alt A:** `The Paris Tennis Collection is here — shop the drop`
- **Alt B:** `Serve looks, not just aces: adidas Paris Tennis`

---

## 8. Evidence

| Module | What I See |
|---|---|
| **Overall purpose** | Paris Tennis Collection launch with a secondary cause-marketing insert |
| **Hero / primary value prop** | Full-width editorial photo of a woman with a tennis racket; headline "Paris Tennis Collection"; two-line body copy about "fusion of sporting codes, Parisian style, and exceptional performance." No CTA button visible. |
| **Loyalty / cause module** | "Donate Points for Good" — photo of two children, copy references Girls on the Run partnership and donating points via the adidas app. No points balance shown, no donation amount specified. |
| **Product discoverability** | None. No product tiles, no price points, no recommendation grid. |
| **Utility / secondary modules** | Top banner: "Explore the latest adidas best sellers / SHOP NOW." Footer: My Account, Privacy Statement, Support, Unsubscribe, adidas.com. Standard legal copy. |
| **Bugs / friction / clarity issues** | No visible rendering bugs. The sparse layout and complete absence of product imagery is a strategic gap, not a technical one. |

---

## Technical Audit

## Technical Audit — adidas "Tennis Sporting Codes / Parisian Style"

---

### 1. Technical Summary

One broken click-tracking link will silently drop recipients to a dead destination. A missing plain-text part and several HTTP image sources are the other critical infrastructure gaps.

---

### 2. Link & Tracking Issues

**[FAIL] Broken internal redirect — unknown URL scheme**

The click-wrapper resolves to a relative-style path that the redirect service does not recognize:

```
unknown url type: '/g/cbdffb0b-0fc8-4be6-973c-bf2875c9c4d0?txn=1aed7780-...'
```

Wrapped URL: `https://dv.adidas.com/o/cbdffb0b-...&cp_tp=v3.eJx1z79...`

The outer `dv.adidas.com/o/` handler decoded the payload and produced a relative path (`/g/…`) instead of an absolute `https://` URL. Recipients clicking this link will receive an error or land nowhere. The affected asset ID is `cbdffb0b-0fc8-4be6-973c-bf2875c9c4d0`.

**[WARN] 24 tracking links skipped** — click-redirect domains were not probed; broken destinations beyond the one above cannot be confirmed or excluded.

---

### 3. Rendering & Accessibility

**[WARN] Images served over HTTP (not HTTPS) — blocked in most modern clients**

The arrow icon (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) is referenced four times via plain HTTP:

```
src: http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```

Gmail, Outlook.com, and Apple Mail proxy or block mixed-content images. All four instances will render as broken images for a significant portion of recipients.

A pixel/beacon is also served over HTTP:

```
src: http://click.comms.adidas.com/CI0/0102019d9e1f6e35-.../O8-_srVEJork...
```

This will fail to fire in clients that enforce HTTPS-only image loading, undermining open tracking accuracy.

**[WARN] Missing alt text on two images**

- `cbdffb0b-0fc8-4be6-973c-bf2875c9c4d0` — no `alt` attribute
- `O8-_srVEJorkobTpFMuXl7x_3...452` — no `alt` attribute (tracking pixel; `alt=""` is acceptable but must be explicit)

Images-off rendering in Outlook Desktop will show blank boxes for the first asset, which likely covers a CTA or hero image.

**[INFO] Custom fonts fall back to system fonts correctly** — `@font-face` declarations for `AdihausDIN` and `AdineuePRO` both specify `local('Arial')` / `local('Helvetica')` with `mso-font-alt: Arial`. Fallback chain is sound.

**[INFO] `DOCTYPE HTML 4.01 Transitional`** — industry-standard for email; no issue.

---

### 4. Personalization & Merge Tokens

No merge token syntax (e.g., `{{first_name}}`, `%%FIRST_NAME%%`) is visible in the truncated source. Cannot confirm whether personalization fields are present and resolving, or absent by design. No unfired/escaped tokens detected in the provided excerpt.

---

### 5. Compliance

**[FAIL] Plain-text alternative part is missing**

```
Text version is 0 chars
```

CAN-SPAM does not mandate a plain-text part, but its absence:
- Raises spam-filter scores on SpamAssassin and similar engines (missing `multipart/alternative`)
- Breaks accessibility for screen-reader-dependent mail clients that prefer text parts
- Violates best-practice requirements for many B2C ESPs

**[WARN] SPF/DKIM authentication status unverifiable**

`Authentication-Results` header was not captured via AgentMail relay. Sending domain is `us-news.comms.adidas.com`; DKIM alignment requires the `d=` tag to align with the `From:` domain (`adidas.com` or a subdomain). Cannot confirm pass/fail without live header inspection.

**[INFO] `ROBOTS: NOINDEX, NOFOLLOW`** present — correct for email web-view pages.

**[INFO] `referrer: no-referrer`** meta tag present — reduces referrer leakage to landing pages.

Unsubscribe link presence cannot be confirmed from the truncated source; footer was cut off. Must be verified manually.

---

### 6. Email-to-Site Continuity

The broken link (`cbdffb0b-0fc8-4be6-973c-bf2875c9c4d0`) prevents any UTM attribution analysis for that destination — the redirect fails before parameters would be appended.

For the 24 skipped tracking links, UTM parameter completeness (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) cannot be verified. A manual spot-check of decoded destinations is required.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **Critical** | Regenerate/re-encode the broken redirect for asset `cbdffb0b`. The `dv.adidas.com/o/` handler is producing a relative path; confirm the payload encoding pipeline and re-test end-to-end before any resend. |
| **High** | Upgrade all `http://image.link.adidas.com/…` and `http://click.comms.adidas.com/…` references to HTTPS. Four arrow icons and one tracking pixel are affected. |
| **High** | Add a plain-text `multipart/alternative` part. Minimum viable: stripped-down copy + all destination URLs in readable form. |
| **Medium** | Add explicit `alt` attributes to all content images; use `alt=""` for decorative/tracking pixels. |
| **Medium** | Pull raw headers from a live send and confirm `Authentication-Results` shows SPF pass + DKIM pass with correct domain alignment. |
| **Low** | Probe the 24 skipped tracking links to audit UTM completeness and confirm no additional broken destinations. |
## Recent history

- [[2026-04-17-use-it-or-lose-it-10-off]] — 5/10 (2026-04-17)
- [[2026-04-17-fresh-friday-deals-inside]] — 5/10 (2026-04-17)
- [[2026-04-17-your-items-are-waiting]] — 5/10 (2026-04-17)

