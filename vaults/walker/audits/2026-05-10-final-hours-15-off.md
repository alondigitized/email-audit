---
slug: 2026-05-10-final-hours-15-off
type: email
date: 2026-05-10
persona: walker
score: "8/10"
sender: DSW 1-Day Only
subject: [Final Hours] $15 off
tags: [email, score-8, sender/dsw-1-day-only]
---
# [Final Hours] $15 off
**Score:** 8/10 · **Type:** Email audit · **2026-05-10**
## Executive summary

- Fifteen bucks off at DSW — yeah, I noticed that. The countdown timer's ticking, the tiered deal is right there in big bold numbers, and I know DSW carries Skechers so it's not a brand I'd write off. The offer structure made sense to me: spend $49, save $15. That's real money, simple math.
- But the second I got past that hero offer, I felt like I walked into the women's section by accident. Every product image is heels and strappy sandals. The "Shop by Size" grid starts at 5 and tops out at 11 — those aren't my sizes. The whole "Mother of All Sales" pitch makes sense for this weekend, but nobody seemed to think about the guys in the list who might also want to grab a pair. I've got a "SHOP MEN" link up in the navigation, sure, but it's tiny text and I'm squinting at this on my phone.
- I'd probably click SHOP MEN from the top nav just to see if there's anything in my size on sale — but I wouldn't feel welcomed by this email. I wouldn't forward it to a buddy. Marked as read, maybe used the code if something caught my eye in the men's section.

## Recommendations

- 1. **Segment the send or split the hero.** A "SHOP MEN" hero module — even a secondary one below the main offer — would have told me this email was for me too. Even one pair of men's comfort shoes in the product grid changes the feel entirely.
- 2. **Swap the "SO NEW, SO YOU" product row for a mixed-gender one.** Four women's heels and no men's shoes sends Walker straight to the nav bar instead of the CTA button.
- 3. **Surface the code earlier and larger.** MOTHERSDAY is buried in sub-copy below the main offer. On a phone I almost missed it.
- 4. **Rethink the size grid for segmented sends.** Men's sizes are 8–13. Showing a 5–11 grid to a men's list segment is a targeting miss.
- 5. **Trim the fine print.** The wall of text at the bottom is intimidating. Condense it — I don't need to read an essay to understand "$15 off $49."
- **Subject Alt A:** `Final hours: $15 off your next pair`
- **Subject Alt B:** `Spend $49, save $15 — ends tonight`
- **Preheader Alt A:** `Tiered savings on men's & women's styles — use code MOTHERSDAY`
- **Preheader Alt B:** `$15, $20, or $60 off — pick your pair before midnight`
- | Priority | Issue | Fix |
- |---|---|---|
- | High | `Src:` → `src:` in all 9 `@font-face` blocks | Lowercase the property name across the template |
- | High | Missing `http-equiv` on charset and IE meta tags | Add the attribute; confirm encoding on special characters post-fix |
- | Medium | Font format coverage | Add `woff2` variants; remove `.ttf`-only fallbacks or supplement with `woff` |
- | Medium | Full-source audit required | Provide untruncated HTML to confirm `alt` text, Liquid token safety, and CAN-SPAM footer |
- | Low | UTM param coverage | Confirm Braze campaign settings are appending UTM params to all CTA links |

## Full review
## 1. Take

Fifteen bucks off at DSW — yeah, I noticed that. The countdown timer's ticking, the tiered deal is right there in big bold numbers, and I know DSW carries Skechers so it's not a brand I'd write off. The offer structure made sense to me: spend $49, save $15. That's real money, simple math.

But the second I got past that hero offer, I felt like I walked into the women's section by accident. Every product image is heels and strappy sandals. The "Shop by Size" grid starts at 5 and tops out at 11 — those aren't my sizes. The whole "Mother of All Sales" pitch makes sense for this weekend, but nobody seemed to think about the guys in the list who might also want to grab a pair. I've got a "SHOP MEN" link up in the navigation, sure, but it's tiny text and I'm squinting at this on my phone.

I'd probably click SHOP MEN from the top nav just to see if there's anything in my size on sale — but I wouldn't feel welcomed by this email. I wouldn't forward it to a buddy. Marked as read, maybe used the code if something caught my eye in the men's section.

---

## 2. What stood out

The countdown timer at the top — "07:06:28" — actually got my attention. I'm not immune to urgency, and pairing that with a clean tiered offer ($15/$20/$60 depending on how much I spend) made the math easy. No tricks, no mystery discount, just a clear scale. That part I liked. The VIP perks strip reminded me that loyalty programs exist, though I'm a Skechers Plus guy, not a DSW VIP member, so it felt like an ad for something I'm not part of.

What pushed me away was the product module. Those shoes — the heeled slides, the strappy sandals, the kitten heels — I've bought stuff like that for my wife but I'm not shopping for myself here. And the "Shop by Size" section starting at 5 sealed it: this grid was built for women. There's also a lot of small print at the bottom of this email — I mean a LOT — and on a phone screen that's just a blur I scroll past. The text throughout is small enough that I'd be pinching to zoom on several sections. Big red flag for me at my age.

---

## 3. What I'd change

1. **Segment the send or split the hero.** A "SHOP MEN" hero module — even a secondary one below the main offer — would have told me this email was for me too. Even one pair of men's comfort shoes in the product grid changes the feel entirely.
2. **Swap the "SO NEW, SO YOU" product row for a mixed-gender one.** Four women's heels and no men's shoes sends Walker straight to the nav bar instead of the CTA button.
3. **Surface the code earlier and larger.** MOTHERSDAY is buried in sub-copy below the main offer. On a phone I almost missed it.
4. **Rethink the size grid for segmented sends.** Men's sizes are 8–13. Showing a 5–11 grid to a men's list segment is a targeting miss.
5. **Trim the fine print.** The wall of text at the bottom is intimidating. Condense it — I don't need to read an essay to understand "$15 off $49."

- **Subject Alt A:** `Final hours: $15 off your next pair`
- **Subject Alt B:** `Spend $49, save $15 — ends tonight`
- **Preheader Alt A:** `Tiered savings on men's & women's styles — use code MOTHERSDAY`
- **Preheader Alt B:** `$15, $20, or $60 off — pick your pair before midnight`

---

## 4. Business Impact Score (1-10)

**8/10**

- Sender is a brand I recognize (DSW, known shoe retailer)
- One concrete offer is visible ($15/$20/$60 tiered structure)
- Primary CTA is unambiguous (visible button: "SHOP MORE NEW ARRIVALS," plus nav links)
- Visual hierarchy is clear — countdown and offer land before anything else
- No render bugs (email renders cleanly, no broken images or overlapping text)
- Email reflects current campaign/season (Mother's Day timing is accurate)
- Loyalty / member benefits visible (DSW VIP strip present)

*Not counted:* Subject/hero does not reference my focus area (men's comfort/slip-ins), demographic signals mismatch (all product imagery is women's shoes, women's size grid).

---

## 5. Open Likelihood (persona-grounded)

- **Score:** 8/10
- **Signals counted:** Sender display name recognizable (DSW 1-Day Only), subject is concrete ($15 off is a specific dollar figure), preview text complements subject (adds "mother of all sales" context not in subject), preview text is real copy (not view-in-browser junk), subject is under 50 chars (21 chars — mobile-friendly), no spam signals (no ALL CAPS stacking, no !!!, brackets are acceptable), time-bounded urgency credible (Final Hours + countdown in body).
- **Rationale:** DSW is a shoe store I know, and "$15 off" in the subject line is concrete enough that a price-conscious guy like me clicks out of curiosity. The preview text doesn't repeat the subject — it adds something — which is exactly how a good preheader should work.

---

## 6. Click-Through Likelihood (persona-grounded)

- **Score:** 7/10
- **Signals counted:** Hero offer visible without scrolling on mobile (countdown + tiered deal is above the fold), CTA copy is a verb + noun ("SHOP MORE NEW ARRIVALS"), offer reduces price (tiered discounts), offer is time-bounded with credible deadline (countdown timer), brand voice consistent (DSW is a trusted retailer), no friction (clean render, no broken images or modal walls).
- **Rationale:** The discount mechanics are solid and the urgency is real — I'd probably tap something. But because everything I can see in the body points to women's shoes, I'm clicking the tiny "SHOP MEN" nav link out of necessity, not because the email invited me there. That's a reluctant click, not an excited one.

---

## 7. Subject

- **Subject:** `[Final Hours] $15 off`
- **Length:** 21 characters
- **Scores (1-10):** Clarity `6`, Curiosity `6`, Personalization `2`, Urgency `8`, Specificity `5`

---

## 8. Preview

- **Preview:** `Last chance to shop the mother of all sales…` *(followed by long string of invisible whitespace-padding characters)*
- **Length:** ~45 chars of readable copy; padded with filler characters to suppress inbox preview bleed-through
- **Scores (1-10):** Complements subject `7`, Specificity `5`, Clarity `7`, Inbox-fit `5`

---

## Technical Audit

## DSW "Final Hours $15 Off" — Technical Audit

---

### 1. Technical Summary

Email is sent via Braze (sender subdomain `e.dsw.com`, font CDN `braze-images.com`). The source is structurally sound for a table-based email, but contains several CSS syntax errors and meta-tag attribute omissions that could degrade rendering in strict clients.

---

### 2. Link & Tracking Issues

No click-tracking URLs are visible in the truncated source — expected behavior for Braze (links are rewritten at send time). Cannot confirm UTM parameter injection without full source. **Flag for QA team**: verify post-send that all CTA hrefs resolve through the Braze click-tracking domain and carry UTM params before redirect.

---

### 3. Rendering & Accessibility

**`Src:` (capitalized) in all `@font-face` declarations — invalid CSS.**
All nine `@font-face` blocks use `Src:` instead of the required lowercase `src:`. Strictly conformant CSS parsers (Outlook desktop, some WebKit builds) will skip the declaration entirely, falling back to system fonts. This affects every custom font in the email.

```css
/* found in source — invalid */
Src: url("https://braze-images.com/.../original.woff") format('woff');
/* should be */
src: url("https://braze-images.com/.../original.woff") format('woff');
```

**Missing `http-equiv` attribute on two `<meta>` tags.**
```html
<!-- source -->
<meta content="text/html; charset=utf-8" />
<meta content="IE=Edge" />

<!-- correct -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```
Without `http-equiv`, both declarations are no-ops. The charset declaration is particularly important — without it, Outlook may misinterpret encoding on special characters.

**Font format coverage is incomplete.**
- Futura PT variants: `.woff` only — no `woff2`. Modern clients will load unnecessarily large files.
- HelveticaNow variants: `.ttf` only — no `woff` or `woff2`. `.ttf` is the largest format; Gmail and Outlook on Mac/iOS support `woff2`.

**Near-black hex values (`#000001`, `#00000F`) appear intentional** — a known workaround to prevent Gmail dark mode from overriding black text/backgrounds. No issue, but document it for future maintainers.

**`alt` text on images**: Cannot confirm coverage in the truncated source. Must be verified in full HTML.

---

### 4. Personalization & Merge Tokens

No Braze Liquid tags (`{{ }}` or `{%  %}`) are visible in the provided excerpt. Cannot audit for unfired tokens, missing defaults, or conditional logic errors without the full source. **QA requirement**: render a test send with a real subscriber record and inspect for literal `{{` strings in the rendered output.

---

### 5. Compliance

**Cannot confirm** from the truncated source:
- CAN-SPAM physical mailing address in footer
- One-click unsubscribe link (`List-Unsubscribe-Post: List-Unsubscribe=One-Click` header)
- DKIM/DMARC authentication on `e.dsw.com`

Sending subdomain `e.dsw.com` must have a published SPF record and valid DKIM signature aligned to `dsw.com` to avoid Gmail/Yahoo bulk sender penalties (enforced since 2024). Verify with:

```
dig TXT e.dsw.com          # SPF
dig TXT braze._domainkey.e.dsw.com  # DKIM selector (typical Braze pattern)
```

---

### 6. Email-to-Site Continuity

Cannot evaluate landing page alignment or UTM param carrythrough without full-source CTA `href` values. Audit checklist for QA:
- All CTA links should include `utm_source=email&utm_medium=email&utm_campaign=<campaign-id>&utm_content=<cta-label>`
- Destination pages should not require login to reveal the offer (breaks anonymous click flow)
- Offer expiry shown in email must match expiry enforced on the landing/cart page

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | `Src:` → `src:` in all 9 `@font-face` blocks | Lowercase the property name across the template |
| High | Missing `http-equiv` on charset and IE meta tags | Add the attribute; confirm encoding on special characters post-fix |
| Medium | Font format coverage | Add `woff2` variants; remove `.ttf`-only fallbacks or supplement with `woff` |
| Medium | Full-source audit required | Provide untruncated HTML to confirm `alt` text, Liquid token safety, and CAN-SPAM footer |
| Low | UTM param coverage | Confirm Braze campaign settings are appending UTM params to all CTA links |
## Recent history

- [[2026-05-10-fifa-world-cup-26-cosm-experience-giveaway]] — 6/10 (2026-05-10)
- [[2026-05-10-whoa-momma-15-off-ends-tonight]] — 7/10 (2026-05-10)
- [[2026-05-10-two-sandal-styles-one-great-price]] — 8/10 (2026-05-10)

