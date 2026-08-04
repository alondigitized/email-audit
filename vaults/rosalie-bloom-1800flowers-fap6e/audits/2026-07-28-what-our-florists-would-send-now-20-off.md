---
slug: 2026-07-28-what-our-florists-would-send-now-20-off
type: email
date: 2026-07-28
persona: rosalie-bloom-1800flowers-fap6e
score: "9/10"
sender: 1-800-FLOWERS.COM
subject: What Our Florists Would Send—Now 20% Off 🌸
tags: [email, score-9, sender/1-800-flowers-com]
---
# What Our Florists Would Send—Now 20% Off 🌸
**Score:** 9/10 · **Type:** Email audit · **2026-07-28**
## Full review
## Technical Audit

# Technical Audit: "What Our Florists Would Send—Now 20% Off 🌸" (1-800-Flowers)

## 1. Technical Summary
Standard Oracle Responsys-style HTML email (VML/mso conditionals, `@font-face` fallbacks) with heavy third-party ad-tracking pixel load; QA flags unsubscribe/physical-address compliance headers as missing and several tracking pixels served over insecure HTTP without alt text.

## 2. Link & Tracking Issues
- 42 tracking/click-redirect links were skipped from HTTP probing (QA INFO) — link destinations unverified.
- Two `pixel.mathtag.com` beacons (`mt_id=155437`, `mt_id=155438`) served over `http://`, plus an `http://view.atdmt.com/FLO/view/361227669/direct/01/` beacon — insecure image requests, likely to be blocked or proxied by Gmail/Outlook image handling.
- `bounceexchange.com/tag/em/1622.gif` pixel appears twice in source (duplicate identical tag) — redundant network call.
- `click.dv.1800flowers.com/o/e1ddcf84-2ec6-4523-8b95-c83cbda16496?mi_mid=019fa673-4500-7000-8376-e8d813f2d939&cp_t...` used as an `<img>` src rather than an anchor — functions as an image-based click/open tracker; unresolved due to truncation.
- `mi.1800flowers.com/p/up/ada90b86b2846dd9/o.gif?mi_u=174149195&mi_ecmp=260728_EMAIL_18F_PZ_DV_12AMET_PROMO` — standard Responsys open-tracking pixel, HTTPS, no issue.

## 3. Rendering & Accessibility
- 6 images flagged with missing `alt` text: the two `mathtag.com` pixels, `view.atdmt.com` pixel, both `bounceexchange 1622.gif` instances, the `click.dv.1800flowers.com` redirect image, and the `mi.1800flowers.com` open pixel. Most are 1×1 trackers (low screen-reader impact), but best practice is `alt=""` to explicitly mark them decorative rather than omitting the attribute.
- Font loading uses `@font-face` for Playfair Display / Lato with `mso-font-alt:'Times New Roman'` fallback for Outlook — correctly implemented, no issue.
- Responsive breakpoints defined at `max-width:418px` (mobile) and `min-width:640px/768px` (desktop image caps) — no rendering issues found in the available markup.

## 4. Personalization & Merge Tokens
No unresolved/broken merge tags (e.g., literal `%%FIRSTNAME%%` or `{{token}}`) visible in the truncated source. Dynamic per-recipient identifiers are present in tracking infrastructure (`mi_mid=019fa673-4500-7000-8376-e8d813f2d939`, `mt_adid=103507`), confirming personalization is wired at the tracking layer. Cannot confirm on-page personalization (e.g., name in greeting) since body content is truncated.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication)
- `List-Unsubscribe` header not found (QA WARN) — required for bulk-sender compliance with Gmail/Yahoo.
- `List-Unsubscribe-Post` header not found (QA WARN) — RFC 8058 one-click unsubscribe unsupported as captured.
- No physical mailing address detected (QA WARN) — CAN-SPAM requirement; footer likely lies beyond the truncated source, so this should be verified against the full send rather than treated as confirmed absence.
- `Authentication-Results` header not found — SPF/DKIM/DMARC pass/fail status unknown via this relay.
- Caveat: all four items are from the AgentMail-relayed copy; verify against the raw ESP (Responsys) send headers before treating as a sender-side defect, since relay hops can strip headers.

## 6. Email-to-Site Continuity
- Campaign tagging uses proprietary Responsys params (`mi_ecmp=260728_EMAIL_18F_PZ_DV_12AMET_PROMO`, `mi_u`, `mi_mid`) rather than standard `utm_source/utm_medium/utm_campaign` — fine for Responsys-side reporting but won't populate GA-style campaign attribution unless separately mapped.
- Landing page alignment cannot be confirmed: all 42 click-through links were skipped from HTTP probing, so final destination URLs post-redirect are unverified.

## 7. Recommendations
1. Serve `view.atdmt.com` and both `pixel.mathtag.com` beacons over HTTPS to avoid client-side blocking/mixed-content suppression.
2. Add explicit `alt=""` to all tracking pixels and the `click.dv.1800flowers.com` image.
3. Remove the duplicate `bounceexchange.com/tag/em/1622.gif` pixel.
4. Verify `List-Unsubscribe` / `List-Unsubscribe-Post` headers and physical address are present in the actual ESP send (not just this relay copy) — required for Gmail/Yahoo 2024 bulk-sender rules.
5. Confirm SPF/DKIM/DMARC alignment directly from the sending domain (`em.1800flowers.com`) since `Authentication-Results` wasn't captured here.
6. Spot-check a sample of the 42 skipped tracking links to confirm they resolve to live, correctly-tagged landing pages.
## Recent history

- [[2026-07-27-you-ve-received-a-gift-from-1-800-flowers-com]] — 7/10 (2026-07-27)
- [[2026-07-26-why-making-friends-gets-harder-as-we-age-03088694-2ed6-4329-b30d-]] — 2/10 (2026-07-26)
- [[2026-07-25-celebrate-them-get-13-80-credit]] — 7/10 (2026-07-25)

