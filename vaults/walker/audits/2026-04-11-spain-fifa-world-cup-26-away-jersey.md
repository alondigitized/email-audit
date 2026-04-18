---
slug: 2026-04-11-spain-fifa-world-cup-26-away-jersey
type: email
date: 2026-04-01
persona: walker
score: "5/10"
sender: adidas
subject: Spain FIFA World Cup 26™ Away Jersey
tags: [email, score-5, sender/adidas]
---
# Spain FIFA World Cup 26™ Away Jersey
**Score:** 5/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- Strong creative foundation dragged down by a headline encoding bug and no commerce path.

## What's working

- **Hero image**: The dual-model shot wearing the Away Jersey is cinematic and well-composed. The Spain kit reads instantly — crest, number 10, the "España" lettering — and the aesthetic is premium without being cold.
- **Brand voice**: The body copy is intentionally literary ("crafted to bring the soul of Spanish history into a single and elegant design… historic manuscript details"). It's a credible tone for a heritage national team jersey at World Cup.
- **Layout clarity**: Single-column, uncluttered. No competing promotions pulling attention away from the product. The "Explore the latest adidas best sellers" nav banner at top is minimal enough not to compete.
- **Footer**: Clean, well-organized links (Account, Privacy, Support, Unsubscribe, adidas.com).

## What's weak

- **Headline encoding failure**: The headline reads **"SPAIN FIFA WORLD CUP 26â¸¢ AWAY JERSEY"** — the trademark symbol (™) has rendered as garbled characters. This is visible to every recipient and immediately signals broken quality in what is supposed to be a premium product launch.
- **No CTA button**: The only commerce prompt in the entire email is the inline text "Shop online or at your local adidas store." — buried at the end of body copy, no button, no link styling, no visual emphasis. There is nothing to click.
- **No pricing or product specifics**: No MSRP, no size availability, no mention of release/availability date. The jersey is the hero but the reader has no purchase context.
- **Copy length vs. conversion intent**: Three paragraphs of atmospheric prose with no payoff button is a journalistic structure, not a commerce one. The copy earns the read but loses the sale.
- **Nav banner competes with itself**: "Explore the latest adidas best sellers / SHOP NOW" at the very top redirects traffic away from the Spain jersey before the hero even loads.

## Recommendations

- 1. **Fix the encoding bug before resend.** The ™ symbol in the headline renders as `â¸¢`. This needs to be corrected and the email resent or a follow-up sent. This is the highest-priority fix — it undermines every other premium signal in the email.
- 2. **Add a primary CTA button.** Place a high-contrast "Shop the Spain Away Jersey" button directly below the hero image and again after the body copy. This email has no commerce trigger.
- 3. **Add price and availability.** Even a single line — "Available now. $X USD" — gives the reader a reason to act now rather than later.
- 4. **Relocate or suppress the "best sellers" banner.** Let the Spain jersey own the open. Move that nav element to the footer.
- 5. **Tighten body copy by ~40%.** Keep the manuscript/heritage angle but cut it to one punchy paragraph. Use the recovered space for product details or a secondary image showing a detail shot of the jersey.
- | Priority | Issue | Action |
- |---|---|---|
- | **Critical** | Broken `/g/` redirect on `dv.adidas.com` link | Regenerate transaction ID or re-publish the redirect entry; verify all 29 links resolve |
- | **High** | Plain-text fallback is 0 chars | Generate a stripped-text version with at minimum subject, key CTA URLs, and unsubscribe link |
- | **High** | 7 images over HTTP | Update `image.link.adidas.com` and `click.comms.adidas.com` asset references to HTTPS |
- | **Medium** | Missing `alt` attributes on 2 images | Add descriptive `alt` text to product image; set `alt=""` on the tracking pixel |
- | **Low** | SPF/DKIM status unconfirmed | Capture full authentication headers on next test send and verify DMARC alignment |

## Full review
## 2. Business Impact Score: 5/10

Strong creative foundation dragged down by a headline encoding bug and no commerce path.

---

## 3. What's Working

- **Hero image**: The dual-model shot wearing the Away Jersey is cinematic and well-composed. The Spain kit reads instantly — crest, number 10, the "España" lettering — and the aesthetic is premium without being cold.
- **Brand voice**: The body copy is intentionally literary ("crafted to bring the soul of Spanish history into a single and elegant design… historic manuscript details"). It's a credible tone for a heritage national team jersey at World Cup.
- **Layout clarity**: Single-column, uncluttered. No competing promotions pulling attention away from the product. The "Explore the latest adidas best sellers" nav banner at top is minimal enough not to compete.
- **Footer**: Clean, well-organized links (Account, Privacy, Support, Unsubscribe, adidas.com).

---

## 4. What's Weak

- **Headline encoding failure**: The headline reads **"SPAIN FIFA WORLD CUP 26â¸¢ AWAY JERSEY"** — the trademark symbol (™) has rendered as garbled characters. This is visible to every recipient and immediately signals broken quality in what is supposed to be a premium product launch.
- **No CTA button**: The only commerce prompt in the entire email is the inline text "Shop online or at your local adidas store." — buried at the end of body copy, no button, no link styling, no visual emphasis. There is nothing to click.
- **No pricing or product specifics**: No MSRP, no size availability, no mention of release/availability date. The jersey is the hero but the reader has no purchase context.
- **Copy length vs. conversion intent**: Three paragraphs of atmospheric prose with no payoff button is a journalistic structure, not a commerce one. The copy earns the read but loses the sale.
- **Nav banner competes with itself**: "Explore the latest adidas best sellers / SHOP NOW" at the very top redirects traffic away from the Spain jersey before the hero even loads.

---

## 5. Recommendations

1. **Fix the encoding bug before resend.** The ™ symbol in the headline renders as `â¸¢`. This needs to be corrected and the email resent or a follow-up sent. This is the highest-priority fix — it undermines every other premium signal in the email.
2. **Add a primary CTA button.** Place a high-contrast "Shop the Spain Away Jersey" button directly below the hero image and again after the body copy. This email has no commerce trigger.
3. **Add price and availability.** Even a single line — "Available now. $X USD" — gives the reader a reason to act now rather than later.
4. **Relocate or suppress the "best sellers" banner.** Let the Spain jersey own the open. Move that nav element to the footer.
5. **Tighten body copy by ~40%.** Keep the manuscript/heritage angle but cut it to one punchy paragraph. Use the recovered space for product details or a secondary image showing a detail shot of the jersey.

---

## 6. Bottom Line

This email has the bones of an excellent product launch — category is right, hero is right, voice is right. But it ships with a visible broken headline and zero clickable commerce path. It reads like a brand awareness piece that forgot it needed to sell something. Fix the encoding, add the button, add a price. As-is, this email creates desire and then leaves the reader with nowhere to go.

---

## 7. Evidence

**Overall purpose:** Product launch announcement for the adidas Spain FIFA World Cup 26 Away Jersey, targeting existing adidas subscribers in the US market.

**Hero / primary value proposition:** Full-width cinematic image of two models wearing the Away Jersey. Strong visual. The España wordmark, crest, and number 10 are clearly legible. Value proposition is heritage + craftsmanship (manuscript patterns, Spanish history), not performance or price.

**Membership / benefits section:** None present.

**Product discoverability / recommendation modules:** None. No product grid, no cross-sell, no "you may also like." Single product focus throughout.

**Utility / secondary modules:** Top nav banner ("Explore the latest adidas best sellers / SHOP NOW"). Footer with account management links and legal.

**Bugs / friction / clarity issues (visible in render):**
- Headline displays `SPAIN FIFA WORLD CUP 26â¸¢ AWAY JERSEY` — the ™ trademark symbol is encoding-broken and visible to recipients.
- No CTA button anywhere in the email body. The only action text is unlinked/unstyled inline copy.

---

## Technical Audit

## Technical Audit — adidas Spain FIFA World Cup 26™ Away Jersey

**From:** adidas@us-news.comms.adidas.com

---

### 1. Technical Summary

One CTA link is broken with an unresolvable redirect target, and the email has no plain-text fallback (0 chars). Additionally, six arrow images and one tracking pixel are served over HTTP, risking mixed-content blocking in modern clients.

---

### 2. Link & Tracking Issues

**[FAIL] Broken redirect — click link resolves to unknown URL type**

The primary click-redirect URL resolves to a `/g/` path that the redirect server cannot process:

```
Redirect target: /g/8cb19f32-940b-45e6-80ba-ebc52fd498b7?txn=62af5480-3541-11f1-b221-ae5aeed300aa
Outer URL:       https://dv.adidas.com/o/8cb19f32-940b-45e6-80ba-ebc52fd498b7?cp_tp=v3.eJzj...
```

The `/o/` → `/g/` redirect failure indicates either a misconfigured redirect rule or an expired/invalid transaction ID (`txn=62af5480-3541-11f1-b221-ae5aeed300aa`). Affected subscribers clicking this link land nowhere.

**[WARN] 29 tracking links not probed**

All 29 remaining links route through click-redirect domains and were not HTTP-verified. No further failures confirmed, but coverage is incomplete.

---

### 3. Rendering & Accessibility

**[WARN] Missing alt text — 2 images**

- Product/hero image: `https://dv.adidas.com/o/8cb19f32-940b-45e6-80ba-ebc52fd498b7?cp_tp=v3.eJzj...`
- Tracking pixel: `http://click.comms.adidas.com/CI0/0102019d46cb2fb1-9a0b9191-8d31-497b-968f-066aea23f59b-000000/rm6dveK7JYIAowGB0P-6ynw26...`

Blank `alt=""` is acceptable for purely decorative images; a missing `alt` attribute entirely fails WCAG 1.1.1 for screen readers and renders broken image placeholders when images are blocked.

**[WARN] 7 images served over HTTP (not HTTPS)**

Same arrow image repeated 6 times + 1 tracking pixel:

```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg  (×6)
http://click.comms.adidas.com/CI0/...rm6dveK7JYIAowGB0P-6ynw26...  (×1)
```

Gmail, Outlook.com, and iOS Mail enforce mixed-content policies that silently block HTTP image loads, replacing them with broken placeholders. The arrow image appears to be a UI element (directional cue) used in multiple CTAs.

---

### 4. Personalization & Merge Tokens

No issues found. No unresolved merge tokens or raw placeholder strings are visible in the truncated HTML source.

---

### 5. Compliance

**[FAIL] Plain-text fallback is empty (0 chars)**

CAN-SPAM does not explicitly mandate a text part, but major ESPs (including Salesforce Marketing Cloud, which this send pattern resembles) flag zero-length text alternatives as a spam signal. SpamAssassin scores `MIME_HTML_ONLY` positively for spam. This also breaks accessibility for plain-text-only email clients.

**[WARN] Authentication-Results header not present**

SPF/DKIM verification status is unknown — the header was not captured via the AgentMail relay. The sending domain `us-news.comms.adidas.com` is a delegated ESP subdomain; DMARC alignment should be verified independently against adidas.com's published DMARC policy (`_dmarc.adidas.com`).

---

### 6. Email-to-Site Continuity

**[FAIL] CTA destination unreachable**

The broken `/g/` redirect (noted in §2) means at least one CTA does not deliver to a landing page. Unable to confirm whether this is the primary jersey CTA or a secondary link without the full HTML.

**[WARN] UTM parameters not independently verifiable**

Tracking parameters are base64/encoded inside the `cp_tp` query string on `dv.adidas.com` links. UTM coverage and correct campaign/source/medium values cannot be confirmed without decoding and probing each of the 29 links.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Critical** | Broken `/g/` redirect on `dv.adidas.com` link | Regenerate transaction ID or re-publish the redirect entry; verify all 29 links resolve |
| **High** | Plain-text fallback is 0 chars | Generate a stripped-text version with at minimum subject, key CTA URLs, and unsubscribe link |
| **High** | 7 images over HTTP | Update `image.link.adidas.com` and `click.comms.adidas.com` asset references to HTTPS |
| **Medium** | Missing `alt` attributes on 2 images | Add descriptive `alt` text to product image; set `alt=""` on the tracking pixel |
| **Low** | SPF/DKIM status unconfirmed | Capture full authentication headers on next test send and verify DMARC alignment |
## Recent history

- [[2026-03-31-test-mkg-us-na-u-new-wide-en-04022026your-favorites-fit-for-your-feet]] — 5/10 (2026-03-31)
- [[2026-04-01-test-mkg-us-retpur-u-trend-retail-en-04012026-byour-next-spring-favorites-are-wa]] — 5/10 (2026-03-31)
- [[2026-04-01-test-mkg-us-retpur-u-trend-retail-en-04012026-ayour-next-spring-favorites-are-wa]] — 5.5/10 (2026-03-31)

