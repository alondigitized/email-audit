---
slug: 2026-05-10-save-10-or-more-starting-now
type: email
date: 2026-05-07
persona: walker
score: "4/10"
sender: DSW
subject: Save $10 or more…starting NOW 
tags: [email, score-4, sender/dsw]
---
# Save $10 or more…starting NOW 
**Score:** 4/10 · **Type:** Email audit · **2026-05-07**
## Executive summary

- First thing I notice: this isn't from Skechers. It's DSW. I shop there occasionally, but I'm not their rewards member — I'm a Skechers Plus guy. So right out of the gate, DSW is treating me like a stranger, not a known customer. The subject said I'd save ten bucks or more, which got my attention because I'm always looking for a deal, but I open this thing and the first thing they're selling me is a free cooler tote bag? I had to squint to figure out where the actual shoe savings are.
- Then I scroll down to the "So New, So You" section and every single shoe they're showing me is a women's style — strappy heels, espadrilles, wedge sandals. Not a single men's slip-in or comfort sneaker in sight. There's a "MEN" tab in the navigation bar but the entire email body is aimed at someone who is not me. The size selector goes from 5 to 11 and includes "Shop Wide Calf" — that's not my aisle.
- I'd mark this as read without clicking. Wouldn't forward it either — nobody I know is shopping for women's heels. DSW can do better than sending me a women's new-arrivals email with a free tote dangling out front.

## Recommendations

- 1. **Segment the send.** If DSW has my browsing history showing men's shoes, this email body should reflect that — men's comfort walkers, wide-width sneakers, casual slip-ons. The women's new-arrivals grid is dead weight to me and actively signals "wrong audience."
- 2. **Make the savings the hero, not the tote.** The subject says "Save $10 or more" — that should be the first thing I see. Lead with the dollar-off threshold and what it applies to for men's shoes, then the tote is a secondary incentive.
- 3. **Add a men's CTA above the fold.** One "Shop Men's" button near the hero would do it. Right now there's nothing.
- 4. **Replace the tote image with a shoe.** A comfort sneaker or slip-on in the hero would connect the offer to something I actually came here for.
- 5. **Clean up the preview text.** All those invisible padding characters after the real content show up as whitespace noise in some inbox clients and look sloppy.
- **Subject Alt A:** `Men's New Arrivals: Save $10+ on Comfort Styles`
- **Subject Alt B:** `Your $10 Off Starts Now — New Men's Shoes Inside`
- **Preheader Alt A:** `Wide widths, slip-ons & walkers — free tote with $75+`
- **Preheader Alt B:** `Shop men's comfort shoes + grab a free tote in stores`
- | Priority | Finding | Fix |
- |---|---|---|
- | High | `maximum-scale=1` blocks zoom | Remove or set `maximum-scale=5` |
- | High | `text-size-adjust: none` breaks OS scaling | Change to `text-size-adjust: 100%` everywhere |
- | Medium | `Src:` capitalized in all 10 `@font-face` blocks | Lowercase to `src:` |
- | Medium | Full link audit needed | Extract complete href list and verify UTM coverage + no broken URLs |
- | Medium | Footer compliance unverified | Confirm physical address, unsubscribe link, and List-Unsubscribe header |
- | Low | DKIM/SPF/DMARC on `e.dsw.com` unverified | Inspect delivery headers or run `dig TXT` checks |

## Full review
## 1. Take

First thing I notice: this isn't from Skechers. It's DSW. I shop there occasionally, but I'm not their rewards member — I'm a Skechers Plus guy. So right out of the gate, DSW is treating me like a stranger, not a known customer. The subject said I'd save ten bucks or more, which got my attention because I'm always looking for a deal, but I open this thing and the first thing they're selling me is a free cooler tote bag? I had to squint to figure out where the actual shoe savings are.

Then I scroll down to the "So New, So You" section and every single shoe they're showing me is a women's style — strappy heels, espadrilles, wedge sandals. Not a single men's slip-in or comfort sneaker in sight. There's a "MEN" tab in the navigation bar but the entire email body is aimed at someone who is not me. The size selector goes from 5 to 11 and includes "Shop Wide Calf" — that's not my aisle.

I'd mark this as read without clicking. Wouldn't forward it either — nobody I know is shopping for women's heels. DSW can do better than sending me a women's new-arrivals email with a free tote dangling out front.

---

## 2. What stood out

The hero module is clean and I can read it without zooming — green background, bold "FREE COOLER TOTE," and a clear picture of the bag. That part works visually. The "while supplies last" fine print is small, but the core offer is readable. Problem is, the subject line promised me savings on shoes, and instead the above-the-fold story is about a canvas tote with a $75 minimum. The bait-and-switch feeling is mild but it's there. When I scroll past that, I hit the "So New, So You" grid and there's nothing there for a 62-year-old man — pink strappy heels, delicate sandals, espadrilles. I can see the word "MEN" in the nav bar but nothing in the body reflects it. The size-shop section and "Shop Wide Calf" button just reinforce that this send wasn't segmented for me at all. On the positive side, the layout doesn't break, text isn't overlapping, the DSW logo is sharp, and the "Buy Now, Pay Later with Afterpay" callout is something I actually appreciate at my price point. But the DSW VIP perks block at the bottom doesn't help me — I'm not in their program.

---

## 3. What I'd change

1. **Segment the send.** If DSW has my browsing history showing men's shoes, this email body should reflect that — men's comfort walkers, wide-width sneakers, casual slip-ons. The women's new-arrivals grid is dead weight to me and actively signals "wrong audience."

2. **Make the savings the hero, not the tote.** The subject says "Save $10 or more" — that should be the first thing I see. Lead with the dollar-off threshold and what it applies to for men's shoes, then the tote is a secondary incentive.

3. **Add a men's CTA above the fold.** One "Shop Men's" button near the hero would do it. Right now there's nothing.

4. **Replace the tote image with a shoe.** A comfort sneaker or slip-on in the hero would connect the offer to something I actually came here for.

5. **Clean up the preview text.** All those invisible padding characters after the real content show up as whitespace noise in some inbox clients and look sloppy.

- **Subject Alt A:** `Men's New Arrivals: Save $10+ on Comfort Styles`
- **Subject Alt B:** `Your $10 Off Starts Now — New Men's Shoes Inside`
- **Preheader Alt A:** `Wide widths, slip-ons & walkers — free tote with $75+`
- **Preheader Alt B:** `Shop men's comfort shoes + grab a free tote in stores`

---

## 4. Business Impact Score (1-10)

**4/10**

- Sender is a recognizable brand (DSW is a known shoe retailer)
- One concrete offer is visible (Free Cooler Tote with $75+ purchase, code COOLER)
- No render bugs — layout is clean, no broken images or overlapping text
- Email reflects current season (cooler tote is a summer-appropriate gift-with-purchase)

---

## 5. Open Likelihood (persona-grounded)

- **Score:** 5/10
- **Signals counted:** Sender display name is recognizable (DSW); Preview text is real copy (mentions Free Cooler Tote, not view-in-browser junk); Subject is under ~50 chars ("Save $10 or more…starting NOW" ≈ 30 chars); No heavy spam signals (no ALL-CAPS stacking or !!!); Subject has some urgency ("starting NOW")
- **Rationale:** The subject's dollar-off promise is concrete enough to get a curious tap from me, and DSW is a real brand I recognize. But "Save $10 or more" is vague on what I'm saving on, and there's zero personalization hinting this is about men's shoes or comfort styles — so my finger hovers.

---

## 6. Click-Through Likelihood (persona-grounded)

- **Score:** 3/10
- **Signals counted:** Hero offer is visible without scrolling on mobile; Offer reduces price / has value-add (free tote with $75+); Brand voice is consistent and trusted (clean DSW design); No major friction in layout
- **Rationale:** The moment I see an email full of women's heels and espadrilles, my finger moves off every CTA. There's no men's category link, no slip-in or comfort product to click through to, and the savings threshold requires me to hunt for eligible men's styles myself. That's too much work.

---

## 7. Subject

- **Subject:** `Save $10 or more…starting NOW `
- **Length:** 31 characters (excluding trailing space)
- **Scores (1-10):** Clarity `5`, Curiosity `5`, Personalization `1`, Urgency `6`, Specificity `3`

---

## 8. Preview

- **Preview:** `+ Get your FREE Cooler Tote in stores` (followed by extensive invisible whitespace padding characters)
- **Length:** 37 characters of real copy; ~120+ total with padding
- **Scores (1-10):** Complements subject `6`, Specificity `5`, Clarity `6`, Inbox-fit `3`

---

## Technical Audit

## Technical Audit — DSW "Save $10 or more…starting NOW"

---

### 1. Technical Summary

Email is built on Braze with a standard XHTML 1.0 Transitional table layout. The visible source contains two confirmed accessibility violations and one invalid CSS property that may silently fail in strict parsers; the truncated HTML prevents full link, compliance, and personalization verification.

---

### 2. Link & Tracking Issues

**Cannot fully verify** — HTML is truncated before any `<a href>` elements appear. Items to confirm in full source:

- Verify all CTA links carry consistent UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`)
- Confirm click-tracking wrapper domain matches expected Braze click-track subdomain (e.g., `click.e.dsw.com`)
- Check that no raw `dsw.com` domain links bypass the tracking wrapper

**Sending domain**: `dsw@e.dsw.com` — ESP subdomain pattern is correct. DKIM/SPF/DMARC cannot be verified from HTML alone; confirm via header inspection.

---

### 3. Rendering & Accessibility

**Issue 1 — Zoom disabled (WCAG 1.4.4 violation)**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
`maximum-scale=1` blocks user zoom on iOS. Remove or change to `maximum-scale=5`.

**Issue 2 — Text size adjustment disabled globally**
```css
* {
  -ms-text-size-adjust: none;
  text-size-adjust: none;
}
```
Setting `text-size-adjust: none` on the universal selector (`*`) prevents OS-level text scaling for users who depend on it. The standard email-safe value is `100%`, not `none`. Change both to `100%`.

**Issue 3 — Invalid CSS property casing in `@font-face`**
```css
@font-face {
  Src: url("https://braze-images.com/...") format('woff');
}
```
`Src:` is capitalized across all 10 `@font-face` blocks. CSS property names are case-insensitive per spec but some strict mail client renderers (Lotus Notes, older Android WebView) will reject the rule entirely, causing fallback fonts to render. Correct to lowercase `src:`.

**No issues found**: XHTML DOCTYPE is appropriate for email; dark mode implementation (`color-scheme`, `.dm-*` classes, `@media (prefers-color-scheme: dark)`) is correctly structured; Gmail-specific hacks (`.a6S`, `div[style*="margin: 16px 0"]`, `img.g-img div`) are standard and intentional.

---

### 4. Personalization & Merge Tokens

**Cannot verify** — no Liquid/Braze merge tags (`{{` or `{%`) appear in the visible HTML portion. Full source must be checked for:

- Unrendered tokens (e.g., `{{first_name | default: ''}}` appearing as literal text if personalization fails)
- Conditional blocks (`{% if %}`) that could produce blank sections on missing attributes

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot fully verify** — footer is beyond the truncation point. Confirm presence of:

- Physical mailing address (required, CAN-SPAM §5(a)(5))
- One-click unsubscribe link (required; also required for List-Unsubscribe header under Google/Yahoo 2024 sender requirements)
- `List-Unsubscribe` and `List-Unsubscribe-Post: List-Unsubscribe=One-Click` headers in the SMTP envelope

**Sending domain authentication**: `e.dsw.com` subdomain should have SPF, DKIM (min 2048-bit), and a DMARC policy of at least `p=quarantine`. Verify via `dig TXT _dmarc.dsw.com` and header `Authentication-Results`.

---

### 6. Email-to-Site Continuity

**Cannot verify** — no destination URLs visible in truncated source. When full source is available, confirm:

- All links include `utm_source=email&utm_medium=email` (or equivalent)
- `utm_campaign` value matches the campaign slug in Braze
- Landing pages load over HTTPS with no certificate warnings
- Product/promo URLs resolve (no 404s) at send time

---

### 7. Recommendations

| Priority | Finding | Fix |
|---|---|---|
| High | `maximum-scale=1` blocks zoom | Remove or set `maximum-scale=5` |
| High | `text-size-adjust: none` breaks OS scaling | Change to `text-size-adjust: 100%` everywhere |
| Medium | `Src:` capitalized in all 10 `@font-face` blocks | Lowercase to `src:` |
| Medium | Full link audit needed | Extract complete href list and verify UTM coverage + no broken URLs |
| Medium | Footer compliance unverified | Confirm physical address, unsubscribe link, and List-Unsubscribe header |
| Low | DKIM/SPF/DMARC on `e.dsw.com` unverified | Inspect delivery headers or run `dig TXT` checks |
## Recent history

- [[2026-05-07-current-kids-bestsellers]] — 2/10 (2026-05-07)
- [[2026-05-06-inside-your-mid-week-boost]] — 7/10 (2026-05-06)
- [[2026-05-06-finally-a-gift-she-ll-actually-use]] — 5/10 (2026-05-06)

