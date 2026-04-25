---
slug: 2026-04-25-samba-is-where-soccer-heritage-meets-modern-culture
type: email
date: 2026-04-25
persona: walker
score: "2/10"
sender: adidas
subject: Samba is where soccer heritage meets modern culture
tags: [email, score-2, sender/adidas]
---
# Samba is where soccer heritage meets modern culture
**Score:** 2/10 · **Type:** Email audit · **2026-04-25**
## Executive summary

- **From:** adidas | **Subject:** Samba is where soccer heritage meets modern culture
- Wrong brand, wrong shoe, wrong message — three strikes and I'm already reaching for delete. This adidas email landed in my inbox and I genuinely had to think for a second about why they're even emailing me. The whole thing is built around the Samba — a retro soccer sneaker repositioned as a streetwear status symbol — and everything about the visuals, the copy, and the offer screams "this is for someone 30 years younger than me." The double-points promotion is for FIFA World Cup jerseys, not shoes. There's almost no CTA in the body. I don't wear adidas regularly, I'm not chasing soccer culture, and I'm not buying jerseys. This email didn't just miss me — it didn't even try to find me.
- For my profile specifically, this is nearly a throwaway. Zero comfort messaging, zero men's casual content, no price hook, and a product that has nothing to do with why I buy shoes. The only sliver of relevance is the double-points loyalty angle — but it's for jerseys, not the shoe they spent the whole email pushing.

## What's working

- **The top banner is clean and immediately clickable.** "Explore the latest adidas best sellers — SHOP NOW" is simple and direct. At least there's one obvious tap target up top.
- **The "Earn Double Points" section has a hook.** If I were an active adiClub member, doubling points is the kind of thing I'd actually pay attention to. Loyalty perks matter to me.

## What's weak

- **Nothing here speaks to a 62-year-old male.** Young people, urban settings, street style. The lifestyle photography looks like it belongs in a music video. I don't see myself anywhere in this email.
- **The Samba story is all cultural, zero comfort.** "Soccer legacy turned style legend" — that's nice history, but I need to know if my feet will feel good in them. No mention of cushioning, arch support, ease of wear. Nothing.
- **There's a huge white space gap in the middle of the email.** After the Samba body copy, there's what feels like an empty void before the second image appears. On my phone I'd think the email was broken and probably close it.
- **No CTA button for the main product.** The whole top half of the email is about the Samba shoe, but there's no button saying "Shop Sambas" or "See Men's Styles." Just... copy. I'd have no idea where to tap.
- **The double-points offer is for FIFA jerseys, not shoes.** So I read through a shoe email and the loyalty reward is for something completely different. That's confusing.
- **Small body text throughout.** I'm reading this on my phone and that Samba copy is tiny. I'd have to pinch-zoom just to get through two sentences.

## Recommendations

- 1. **Add a CTA button below the Samba section.** "Shop Men's Sambas" — something. Don't make me hunt for where to go.
- 2. **Either connect the double-points offer to the shoe, or drop the Samba story.** Pick a lane. Two unrelated offers in one email split my attention and I end up acting on neither.
- 3. **Fix the white space gap.** On mobile that dead zone between the Samba copy and the second image looks like a rendering failure. I'd assume something's wrong and bail.
- 4. **This email should not be in my inbox.** If adidas has any sense of who I am as a customer, I should be getting walking shoes, cushioned trainers, maybe Grand Court styles — not streetwear sneaker culture content.
- | Priority | Issue | Fix |
- |----------|-------|-----|
- | P0 | Broken click destination (`/g/1e17e27e...`) | Re-render template; ensure redirect target is an absolute URL. Verify `txn` token substitution logic. |
- | P0 | Zero-byte plain-text fallback | Generate a stripped-text version with at minimum the subject, primary CTA text, and unsubscribe URL. |
- | P1 | 8× HTTP image sources | Update `image.link.adidas.com` and `click.comms.adidas.com` tracking pixel to HTTPS. Check CDN/ESP configuration. |
- | P1 | Missing `alt` on hero image | Add descriptive alt text. Set `alt=""` on the tracking pixel. |
- | P2 | Authentication-Results missing | Confirm SPF include for `comms.adidas.com` in adidas.com DNS; confirm DKIM signing key covers the sending subdomain. |
- | P2 | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block. Add HTTPS WOFF2 sources if custom rendering is required. |
- | P3 | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` to the charset declaration. |

## Full review
---

## Walker Miles | Email Review
**From:** adidas | **Subject:** Samba is where soccer heritage meets modern culture

---

### 1. Executive Summary

Wrong brand, wrong shoe, wrong message — three strikes and I'm already reaching for delete. This adidas email landed in my inbox and I genuinely had to think for a second about why they're even emailing me. The whole thing is built around the Samba — a retro soccer sneaker repositioned as a streetwear status symbol — and everything about the visuals, the copy, and the offer screams "this is for someone 30 years younger than me." The double-points promotion is for FIFA World Cup jerseys, not shoes. There's almost no CTA in the body. I don't wear adidas regularly, I'm not chasing soccer culture, and I'm not buying jerseys. This email didn't just miss me — it didn't even try to find me.

---

### 2. Business Impact Score: 2/10

For my profile specifically, this is nearly a throwaway. Zero comfort messaging, zero men's casual content, no price hook, and a product that has nothing to do with why I buy shoes. The only sliver of relevance is the double-points loyalty angle — but it's for jerseys, not the shoe they spent the whole email pushing.

---

### 3. What's Working

- **The top banner is clean and immediately clickable.** "Explore the latest adidas best sellers — SHOP NOW" is simple and direct. At least there's one obvious tap target up top.
- **The "Earn Double Points" section has a hook.** If I were an active adiClub member, doubling points is the kind of thing I'd actually pay attention to. Loyalty perks matter to me.

---

### 4. What's Weak

- **Nothing here speaks to a 62-year-old male.** Young people, urban settings, street style. The lifestyle photography looks like it belongs in a music video. I don't see myself anywhere in this email.
- **The Samba story is all cultural, zero comfort.** "Soccer legacy turned style legend" — that's nice history, but I need to know if my feet will feel good in them. No mention of cushioning, arch support, ease of wear. Nothing.
- **There's a huge white space gap in the middle of the email.** After the Samba body copy, there's what feels like an empty void before the second image appears. On my phone I'd think the email was broken and probably close it.
- **No CTA button for the main product.** The whole top half of the email is about the Samba shoe, but there's no button saying "Shop Sambas" or "See Men's Styles." Just... copy. I'd have no idea where to tap.
- **The double-points offer is for FIFA jerseys, not shoes.** So I read through a shoe email and the loyalty reward is for something completely different. That's confusing.
- **Small body text throughout.** I'm reading this on my phone and that Samba copy is tiny. I'd have to pinch-zoom just to get through two sentences.

---

### 5. Recommendations

1. **Add a CTA button below the Samba section.** "Shop Men's Sambas" — something. Don't make me hunt for where to go.
2. **Either connect the double-points offer to the shoe, or drop the Samba story.** Pick a lane. Two unrelated offers in one email split my attention and I end up acting on neither.
3. **Fix the white space gap.** On mobile that dead zone between the Samba copy and the second image looks like a rendering failure. I'd assume something's wrong and bail.
4. **This email should not be in my inbox.** If adidas has any sense of who I am as a customer, I should be getting walking shoes, cushioned trainers, maybe Grand Court styles — not streetwear sneaker culture content.

---

### 6. Bottom Line

I have no reason to click. The shoe is not for me, the imagery is not for me, the loyalty offer is for a product category I don't buy. If I weren't writing this review, I'd have deleted it by the time I got to the word "legend." Adidas missed badly on targeting here.

---

### 7. Subject Line Analysis

- **Subject:** `Samba is where soccer heritage meets modern culture`
- **Length:** 52 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `1`, Urgency `1`, Specificity `5`
- **Strengths:**
  - Clear product name (Samba) right up front — I know exactly what this is about
  - Coherent sentence structure, reads easily
- **Weaknesses:**
  - Zero urgency — no reason to open now vs. never
  - "Modern culture" is meaningless to me; sounds like it's aimed at a 22-year-old
- **Alt A:** `Samba OG: The shoe that started it all — now in new colorways`
- **Alt B:** `Walker, the Samba just got a refresh — see what's new`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — I could not see a proper preheader in the render; the email appears to have no intentional preview text set
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None visible)
- **Weaknesses:**
  - Missing entirely — a wasted opportunity to extend the pitch before the open
  - With no preheader, the subject line has to carry all the weight, and it doesn't do enough alone
- **Alt A:** `Born in 1950. Still turning heads — shop the Samba OG now.`
- **Alt B:** `Double adiClub points on FIFA jerseys + new Samba colorways inside`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** "Soccer heritage meets modern culture" tells me immediately this isn't about comfort shoes or anything I'd normally shop for. I recognize the adidas brand but they're not my go-to — I'm a Skechers guy — so there's no loyalty pull keeping me curious enough to open.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `2/10`
- **Rationale:** Once I'm inside, the lack of a CTA button for the main product and the completely youth-oriented imagery gives me nowhere obvious to tap and nothing I actually want — the double-points offer is for jerseys I don't buy, and the Samba is a style shoe that doesn't address comfort at all.

---

### 11. Evidence

- **Overall purpose:** Brand storytelling for the adidas Samba OG + a limited-time double-points adiClub promotion tied to FIFA World Cup 26 jersey purchases
- **Hero / primary value proposition:** Samba lifestyle imagery with brief heritage copy ("Born on an icy German field in the 1950s…") — cultural positioning, no product specs or comfort claims
- **Membership / benefits section:** "Earn Double Points" block — clear enough in plain language, but the disconnect from the shoe being featured is glaring
- **Product discoverability:** Near zero — no dedicated product tiles, no price shown, no men's-specific guidance, no CTA button on the shoe itself; only the top banner "SHOP NOW" offers a clickable path
- **Utility / secondary modules:** Footer nav (My Account, Support, Unsubscribe) — standard, functional
- **Bugs / friction / clarity issues:**
  - Large blank white space gap visible mid-email between the Samba copy block and the second lifestyle image — looks broken on mobile
  - Body copy text is visually small; would require zooming on a phone to read comfortably
  - No CTA button linked directly to the Samba product despite it being the email's main subject

---

## Technical Audit

## Technical Audit — adidas "Samba" Email

**From:** adidas@us-news.comms.adidas.com
**Subject:** Samba is where soccer heritage meets modern culture

---

### 1. Technical Summary

One confirmed broken click destination and a zero-byte plain-text fallback are the two blocking issues. Eight HTTP-sourced images and missing alt text on two assets are elevated-risk warnings that will degrade rendering across major clients.

---

### 2. Link & Tracking Issues

**[FAIL] Broken redirect destination**
The click-tracking router at `https://dv.adidas.com/o/1e17e27e-a162-4542-80d8-179d8233b455?cp_tp=v3...` resolves to a relative path as its exit URL:

```
unknown url type: '/g/1e17e27e-a162-4542-80d8-179d8233b455?txn=c9e01380-40c0-11f1-a094-ee21950ab87d'
```

A relative path is not a valid redirect target for a click-tracking router expecting an absolute URL. Recipients who click this link will hit an error. The `txn` parameter suggests this is a transaction/session token that was substituted but the base domain was dropped during template rendering.

**[WARN] 36 tracking links not probed**
All outbound links pass through `click.comms.adidas.com` or `dv.adidas.com` redirect chains. Destination health could not be verified; the broken link above is the only one that surfaced a resolvable error.

---

### 3. Rendering & Accessibility

**[WARN] 8× HTTP image src — likely blocked**
The arrow icon (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) is embedded eight times using a non-HTTPS source:

```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```

Gmail, Outlook, and Apple Mail all proxy or actively block mixed-content images. The tracking pixel also uses HTTP:

```
http://click.comms.adidas.com/CI0/0102019dc563debb-...
```

**[WARN] Missing alt text on two images**
- Hero image: `dv.adidas.com/o/1e17e27e-a162-4542-80d8-179d8233b455?cp_tp=v3...` — no `alt` attribute. Image-disabled or screen-reader recipients get nothing.
- Tracking pixel: `click.comms.adidas.com/CI0/0102019dc563debb-...` — no `alt=""` (empty string required for decorative/tracking images).

**Duplicate `@font-face` blocks**
`AdihausDIN` (400, 700) and `AdineuePRO` (400, 600) are declared identically in two separate `<style>` blocks. Both blocks use `local()` sources only — the brand fonts will never load from a CDN; they always fall back to Arial/Helvetica. This is wasted bytes and a rendering expectation mismatch if the design assumes custom letterforms.

**Missing `http-equiv` on charset meta**
```html
<meta content="text/html; charset=UTF-8" />
```
Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Without `http-equiv`, some legacy Outlook and webmail clients will not correctly honor the declared charset.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `{{first_name}}`, `*|FNAME|*`) are visible in the available HTML. The broken `txn` parameter in Section 2 may indicate a partially-resolved token. Full body unavailable for complete confirmation.

---

### 5. Compliance

**[FAIL] Plain-text fallback is 0 characters**
The multipart/alternative text part is empty. This is a CAN-SPAM best-practice violation and a spam-filter signal — SpamAssassin and similar tools score HTML-only messages negatively. Major ESPs flag zero-byte text parts as a sending-quality issue.

**[WARN] Authentication-Results header not present**
SPF and DKIM pass/fail status could not be confirmed via the AgentMail relay. Sending domain is `us-news.comms.adidas.com`; DMARC alignment requires that the `Return-Path` domain or DKIM `d=` tag aligns with `adidas.com`. If the relay does not re-sign or if SPF is scoped only to `comms.adidas.com`, DMARC could fail on strict alignment policies.

---

### 6. Email-to-Site Continuity

Cannot fully verify UTM coverage across all 36 tracked links due to redirect chaining. The one probed destination is broken (see Section 2), so continuity is severed for at least that CTA. No UTM parameter structure is visible in the source without resolving the redirect chains.

---

### 7. Recommendations

| Priority | Issue | Fix |
|----------|-------|-----|
| P0 | Broken click destination (`/g/1e17e27e...`) | Re-render template; ensure redirect target is an absolute URL. Verify `txn` token substitution logic. |
| P0 | Zero-byte plain-text fallback | Generate a stripped-text version with at minimum the subject, primary CTA text, and unsubscribe URL. |
| P1 | 8× HTTP image sources | Update `image.link.adidas.com` and `click.comms.adidas.com` tracking pixel to HTTPS. Check CDN/ESP configuration. |
| P1 | Missing `alt` on hero image | Add descriptive alt text. Set `alt=""` on the tracking pixel. |
| P2 | Authentication-Results missing | Confirm SPF include for `comms.adidas.com` in adidas.com DNS; confirm DKIM signing key covers the sending subdomain. |
| P2 | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block. Add HTTPS WOFF2 sources if custom rendering is required. |
| P3 | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` to the charset declaration. |
## Recent history

- [[2026-04-25-last-call-extra-25-off-clearance-ends-tonight-online]] — 4/10 (2026-04-25)
- [[2026-04-25-your-cart-expires-soon]] — 5/10 (2026-04-25)
- [[2026-04-25-did-you-forget-something]] — 6/10 (2026-04-25)

