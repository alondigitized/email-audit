---
slug: 2026-05-08-meet-the-grad-look
type: email
date: 2026-05-08
persona: rae-l
score: "8/10"
sender: Glossier
subject: Meet The Grad Look!
tags: [email, score-8, sender/glossier]
---
# Meet The Grad Look!
**Score:** 8/10 · **Type:** Email audit · **2026-05-08**
## Executive summary

- A clean, on-theme graduation campaign from Glossier that leans into the May occasion well. The email bundles three products under a seasonal narrative ("The Grad Look"), layers in a concrete free-gift incentive, and maintains Glossier's signature minimal aesthetic throughout. It's a competent send for a loyal beauty subscriber — but visible text-truncation bugs in two product modules undercut the polish, and the primary savings claim ("Shop + save") never actually states what you save. Open and click potential are solid for the target demographic; this is a reliably mid-to-high performer for the brand's core audience.

## What's working

- **Seasonal hook is airtight.** "The Grad Look" is a natural, believable occasion for a trio bundle. Graduation in May is perfectly timed and the hero image (joyful young woman, implied celebration) lands the vibe without being heavy-handed.
- **Free gift module is the email's strongest closer.** The red "FREE GIFT" badge at the bottom gives the email a real incentive beyond vague "save" language. "Get a free Glossier You Mini with Graduation Set purchase" is specific and actionable.
- **Brand aesthetic is consistent.** White space, clean typography, and product-forward imagery are all very Glossier. No clutter, no visual noise. Each product module has a clear name, a brief descriptor, and a "Shop now" CTA.
- **Product trio logic works.** Boy Brow + Futuredew Gold + Ultralip is a coherent, buildable makeup story for the occasion.

## What's weak

- **Text truncation is a real visible bug.** In the Futuredew Gold module, "instant su-kissed glow" is mid-word-cut and "all-natur' balance" is clipped. The Ultralip copy reads "like a of a gloss," which appears to be either a truncation error or a broken merge. These are visible on render and erode the brand's polished image.
- **"Shop + save" promises savings it never delivers.** The hero CTA implies a discount but no amount, percentage, or price is shown anywhere in the email. For a customer deciding whether to click, this is friction — it feels like a tease, not an offer.
- **No urgency mechanism.** Graduation season implies a natural deadline, but nothing in the email names one. "Limited time" or a date would increase conversion pressure without hurting authenticity.
- **No social proof.** Glossier has a devoted community and strong UGC culture. No reviews, star ratings, or "fan favorite" callouts appear — a missed opportunity on the product modules.

## Recommendations

- 1. **Fix the text truncation** in Futuredew Gold and Ultralip before resend or future similar layouts. The two-column product module is clipping right-column copy on this render.
- 2. **Make the savings concrete.** Change "Shop + save" to "Shop the Trio — save $X" or show the bundle price vs. buying individually. If there's no actual discount, rename the CTA to "Shop the Set."
- 3. **Add a graduation deadline.** Even "offer ends May 31" would lift urgency without being spammy.
- 4. **Pull a review or two into the product modules.** Even a 5-star snippet on Boy Brow ("my holy grail for brows") would increase click confidence.
- 5. **Promote the free gift earlier.** It's the email's most concrete hook — consider surfacing it in the hero or at least as a second CTA above the fold, not only at the bottom.
- | Priority | Issue | Action |
- |---|---|---|
- | High | Invalid `<span rel="stylesheet" href="...ctrk.klclick...">` | Replace with a standard 1×1 tracking `<img>` (Klaviyo's default open-tracking pixel) or remove if redundant |
- | High | Truncated HTML — footer not audited | Provide full source to confirm CAN-SPAM address + unsubscribe block |
- | Medium | UTM parameters unconfirmed | Pull a test send, click all CTAs, and verify `utm_source`, `utm_medium`, `utm_campaign` are present on landing page URLs |
- | Medium | `alt` text on images unconfirmed | Audit full source; every linked image must have descriptive `alt` |
- | Low | SPF/DKIM/DMARC for `eml.glossier.com` | Verify alignment in DNS and check a delivered message's authentication headers |

## Full review
---

## Email Review — Glossier: "Meet The Grad Look!"

---

### 1. Executive Summary

A clean, on-theme graduation campaign from Glossier that leans into the May occasion well. The email bundles three products under a seasonal narrative ("The Grad Look"), layers in a concrete free-gift incentive, and maintains Glossier's signature minimal aesthetic throughout. It's a competent send for a loyal beauty subscriber — but visible text-truncation bugs in two product modules undercut the polish, and the primary savings claim ("Shop + save") never actually states what you save. Open and click potential are solid for the target demographic; this is a reliably mid-to-high performer for the brand's core audience.

---

### 2. Business Impact Score

**8/10**

Rubric criteria TRUE:
- Subject and hero copy explicitly reference the campaign's seasonal focus area (graduation beauty)
- Sender (Glossier) is a widely recognized, subscribed brand
- Concrete offer is visible — free Glossier You Mini with Graduation Set purchase
- Primary CTA ("Shop + save") is visually prominent with a clear button
- Visual hierarchy is clear — hero and "Shop + save" lands first, product modules follow
- Demographic signals match the target — young woman hero image, occasion-specific makeup framing
- Email reflects the current campaign season — May graduation timing is perfect

Criteria NOT met: render bugs (text truncation visible in Futuredew and Ultralip modules); no loyalty/member pricing shown; "Shop + save" omits the actual savings amount, which is borderline bait-and-switch.

---

### 3. What's Working

**Seasonal hook is airtight.** "The Grad Look" is a natural, believable occasion for a trio bundle. Graduation in May is perfectly timed and the hero image (joyful young woman, implied celebration) lands the vibe without being heavy-handed.

**Free gift module is the email's strongest closer.** The red "FREE GIFT" badge at the bottom gives the email a real incentive beyond vague "save" language. "Get a free Glossier You Mini with Graduation Set purchase" is specific and actionable.

**Brand aesthetic is consistent.** White space, clean typography, and product-forward imagery are all very Glossier. No clutter, no visual noise. Each product module has a clear name, a brief descriptor, and a "Shop now" CTA.

**Product trio logic works.** Boy Brow + Futuredew Gold + Ultralip is a coherent, buildable makeup story for the occasion.

---

### 4. What's Weak

**Text truncation is a real visible bug.** In the Futuredew Gold module, "instant su-kissed glow" is mid-word-cut and "all-natur' balance" is clipped. The Ultralip copy reads "like a of a gloss," which appears to be either a truncation error or a broken merge. These are visible on render and erode the brand's polished image.

**"Shop + save" promises savings it never delivers.** The hero CTA implies a discount but no amount, percentage, or price is shown anywhere in the email. For a customer deciding whether to click, this is friction — it feels like a tease, not an offer.

**No urgency mechanism.** Graduation season implies a natural deadline, but nothing in the email names one. "Limited time" or a date would increase conversion pressure without hurting authenticity.

**No social proof.** Glossier has a devoted community and strong UGC culture. No reviews, star ratings, or "fan favorite" callouts appear — a missed opportunity on the product modules.

---

### 5. Recommendations

1. **Fix the text truncation** in Futuredew Gold and Ultralip before resend or future similar layouts. The two-column product module is clipping right-column copy on this render.
2. **Make the savings concrete.** Change "Shop + save" to "Shop the Trio — save $X" or show the bundle price vs. buying individually. If there's no actual discount, rename the CTA to "Shop the Set."
3. **Add a graduation deadline.** Even "offer ends May 31" would lift urgency without being spammy.
4. **Pull a review or two into the product modules.** Even a 5-star snippet on Boy Brow ("my holy grail for brows") would increase click confidence.
5. **Promote the free gift earlier.** It's the email's most concrete hook — consider surfacing it in the hero or at least as a second CTA above the fold, not only at the bottom.

---

### 6. Bottom Line

A solid seasonal send that earns its place in a graduation-adjacent inbox. The occasion hook and free gift are genuine strengths; the truncation bugs and vague savings claim are real weaknesses. For a loyal Glossier subscriber, this is a credible click driver — for a cold or casual subscriber, the missing specificity is a drop-off risk.

---

### 7. Subject Line Analysis

- **Subject:** `Meet The Grad Look!`
- **Length:** 20 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `1`, Urgency `3`, Specificity `5`
- **Strengths:**
  - Short and mobile-friendly; comfortably under 50 chars
  - Clean seasonal framing — "Grad Look" signals the occasion immediately
- **Weaknesses:**
  - Zero personalization; could address the reader's name or a past category
  - No urgency or offer hint — doesn't communicate the free gift or any savings in the subject
- **Alt A:** `Your Grad Look: Shop the Trio + Get a Free Gift`
- **Alt B:** `The 3-product Grad Look — free fragrance inside`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — preview text is not determinable from this webview render; inbox-level preheader not visible in the screenshot
- **Length:** N/A
- **Scores (1-10):** Complements subject `N/A`, Specificity `N/A`, Clarity `N/A`, Inbox-fit `N/A`
- **Strengths:** Cannot assess
- **Weaknesses:** If no deliberate preheader is set, inbox clients will leak "View this email in your browser" or the first line of body copy — a missed open-rate opportunity
- **Alt A:** `An easy trio for the ceremony, the photos, and everything after.`
- **Alt B:** `Free Glossier You Mini with your Graduation Set — shop the look.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Sender recognizable (Glossier), subject concrete (grad occasion named), subject relevant to beauty subscriber's focus area, subject under 50 chars, no spam signals (no ALL CAPS or !!! stacking)
- **Rationale:** For a Glossier subscriber, the sender alone is enough to earn an open — it's a trusted brand with strong brand recall. The subject is clean and occasion-relevant, but it offers no incentive hint and no personalization to add lift.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** Hero offer visible without scrolling, primary CTA in the subscriber's category (beauty/makeup), offer provides real value (free gift with purchase), one specific product set featured (The Grad Look trio), product detail visible (names + brief descriptors per module), brand voice is consistent and trusted
- **Rationale:** Glossier's brand loyalty is a strong click driver, and the free gift module is a genuine incentive. What holds it back: no price specifics on "Shop + save," no urgency, and the truncation bugs create a subtle trust dip in the middle modules.

---

### 11. Evidence

- **Overall purpose:** Seasonal product bundle push around graduation; introduces "The Grad Look" trio and drives purchase via a free gift incentive
- **Hero / primary value proposition:** "The Grad Look" — an easy, breezy makeup trio for graduation ceremonies; CTA "Shop + save" (savings amount not specified)
- **Membership / benefits section:** None visible
- **Product discovery modules:** Three dedicated product modules — Boy Brow ("the everyday brow essential for all brows"), Futuredew Gold ("secret to an instant sun-kissed glow" — truncated), Ultralip ("the ultimate 3-in-1 lipstick" — copy appears truncated/corrupted). Each has a "Shop now" CTA.
- **Utility / secondary modules:** Free gift callout at the bottom — "Get a free Glossier You Mini with Graduation Set purchase" with a red FREE GIFT badge and fragrance sampling description. Standard footer with address, privacy policy, and unsubscribe links.
- **Bugs / friction / clarity issues:**
  - Futuredew Gold copy: "instant su-kissed glow" — word cut mid-character; "all-natur' balance" — truncated
  - Ultralip copy: "like a of a gloss" — missing word or render break
  - These appear to be layout/column-width rendering issues where right-side text in two-column modules is being clipped at the render boundary

---

## Technical Audit

## Technical Audit — Glossier "Meet The Grad Look!"

---

### 1. Technical Summary

Email is deployed via Klaviyo (ESP domain: `ctrk.klclick.com`), built with a drag-and-drop builder (Stripo-style class naming). One structurally invalid tracking element is present in `<body>`; the HTML is truncated so footer compliance and full link inventory cannot be fully confirmed.

---

### 2. Link & Tracking Issues

**Invalid tracking element placement/type:**

```html
<span rel="stylesheet" href="https://ctrk.klclick.com/l/01KR2E710NVDCVRXY08S6Y33V7_0"></span>
```

- `rel="stylesheet"` is not a valid attribute on `<span>`. No browser or email client will fetch this as a stylesheet.
- This appears to be Klaviyo open-tracking or click-tracking injected via a non-standard element. The canonical pattern for open tracking is a 1×1 `<img>`; for click tracking, an `<a>` wrapper. This span will silently do nothing in most clients.
- **Risk:** open-rate attribution may be broken if this was intended as the tracking pixel.

Full link audit is blocked by HTML truncation — cannot confirm whether all CTAs pass through `ctrk.klclick.com` or whether any raw destination URLs are exposed.

---

### 3. Rendering & Accessibility

- **Preheader padding technique:** Uses a mix of U+034F (combining grapheme joiner `͏`) and U+00AD (soft hyphen `­`) to suppress inbox preview bleed. Both are valid suppression characters; no issue.
- **MSO/Outlook conditional comments** are present and correctly structured (`mso 16`, `gte mso 9`, `[if mso]`). ✓
- **iOS meta tags** (`x-apple-disable-message-reformatting`, `format-detection=telephone=no`) are present. ✓
- **`alt` text on images** cannot be audited — HTML is truncated before image tags appear. Must be verified in full source; missing `alt` on linked images is a common accessibility and spam-filter risk.
- **Gmail dark-mode / body hack** (`.body img ~ div div { display: none }`) is present — standard. ✓
- The `<span rel="stylesheet">` (noted above) will produce a DOM anomaly in strict parsers; low rendering risk in practice but should be corrected regardless.

---

### 4. Personalization & Merge Tokens

No merge tokens (e.g., `{{first_name}}`) are visible in the truncated source. Subject line ("Meet The Grad Look!") carries no personalization. No issues found with unfired or raw tokens in the visible HTML.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot fully audit** — HTML is truncated before the footer. Required elements that must be present in the full source:

- Physical mailing address (CAN-SPAM §5(a)(5))
- Unsubscribe link with ≤10 business day honor period (CAN-SPAM §5(a)(3))

**Sending domain:** `eml.glossier.com` (subdomain of `glossier.com`).

- SPF, DKIM, and DMARC alignment for `eml.glossier.com` cannot be confirmed from HTML alone — must be checked against DNS records and received headers of a delivered sample.
- `From` display name `"Glossier"` with address `gTEAM@eml.glossier.com`: the subdomain is ESP-routed which is standard, but the `gTEAM` local-part is unusual and could increase sender reputation scrutiny on first contact.

---

### 6. Email-to-Site Continuity (UTM / Landing Page Alignment)

All visible links pass through `ctrk.klclick.com` (Klaviyo redirect). Final destination URLs and UTM parameter presence cannot be confirmed from the truncated source.

**Must verify in full source:**

- All CTA links should resolve to `glossier.com` (not a staging or CDN domain).
- UTM parameters (`utm_source=email&utm_medium=email&utm_campaign=grad-look` or equivalent) should be appended by Klaviyo at redirect time or baked into destination URLs.
- If UTM params are absent, the campaign will not be attributable in GA4/site analytics.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | Invalid `<span rel="stylesheet" href="...ctrk.klclick...">` | Replace with a standard 1×1 tracking `<img>` (Klaviyo's default open-tracking pixel) or remove if redundant |
| High | Truncated HTML — footer not audited | Provide full source to confirm CAN-SPAM address + unsubscribe block |
| Medium | UTM parameters unconfirmed | Pull a test send, click all CTAs, and verify `utm_source`, `utm_medium`, `utm_campaign` are present on landing page URLs |
| Medium | `alt` text on images unconfirmed | Audit full source; every linked image must have descriptive `alt` |
| Low | SPF/DKIM/DMARC for `eml.glossier.com` | Verify alignment in DNS and check a delivered message's authentication headers |
## Recent history

- [[2026-05-07-great-gift-alert-free-4-pc-rabanne-gift-with-select-online-50-purchase-terms-app]] — 8/10 (2026-05-07)
- [[2026-05-07-a-little-something-for-mom-and-you-with-bogo-50-off-035a65ea-450d-491b-b3ea-]] — 4/10 (2026-05-07)
- [[2026-05-07-father-s-day-finds]] — 8/10 (2026-05-07)

