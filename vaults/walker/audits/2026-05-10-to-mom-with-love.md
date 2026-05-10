---
slug: 2026-05-10-to-mom-with-love
type: email
date: 2026-05-04
persona: walker
score: "8/10"
sender: Shoe Carnival
subject: To Mom, With Love 💌
tags: [email, score-8, sender/shoe-carnival]
---
# To Mom, With Love 💌
**Score:** 8/10 · **Type:** Email audit · **2026-05-04**
## Executive summary

- Wrong customer, wrong email. The whole thing is a Mother's Day gift push — women's sandals, a mom-and-daughter photo, BOGO on women's and kids' shoes. I'm a 62-year-old guy who came here to look at Slip-ins, not buy sandals for somebody's mother. The subject line should've told me that before I even tapped it, but "To Mom, With Love" is vague enough that I figured maybe there was something in here for me. There wasn't.
- That said, Shoe Carnival did the basics right inside the email. The twenty-dollar-off offer was right up front, easy to read, with a clear coupon button. The layout didn't fall apart on my phone. I'll give them credit for that. But none of that execution saves it when the content is 100% aimed at women.
- I'm marking this read and moving on. I wouldn't click anything in here for myself, and I wouldn't forward it — my wife doesn't shop Shoe Carnival either. Dead end for me.

## Recommendations

- 1. **Stop sending Mother's Day emails to male subscribers without a men's module.** Even a single row — "Treat yourself while you're shopping for her — Men's comfort footwear on sale too" — would have saved this email for me. One module, one CTA, done.
- 2. **Fix the preheader immediately.** A tracking URL is leaking where the preview text should be. It looks like spam and probably cost them opens. The $20 off offer copy or the BOGO headline should be there instead.
- 3. **Add the minimum purchase context to the subject or preheader.** "$20 Off — No Code Needed" or "Use Code WELOVEMOM at Checkout" would convert better than a sentimental subject with no offer signal.
- 4. **Make the urgency real.** "Limited Time" means nothing. Put an end date on it — "Offer ends Sunday" — so I know whether I need to act today or can sleep on it.
- 5. **Move the Shoe Perks gift grab higher.** It's a fun engagement mechanic but it's buried below the fold. If you want people to play, put it in the top third.
- **Subject Alt A:** `Save $20 this weekend — for her (and maybe you)`
- **Subject Alt B:** `$20 off + BOGO Free sandals — Mom's Day deal`
- **Preheader Alt A:** `$20 off $99.98+ in store or online — code WELOVEMOM at checkout`
- **Preheader Alt B:** `BOGO Free women's sandals + play the Shoe Perks Gift Grab now`
- | Priority | Issue | Fix |
- |---|---|---|
- | High | Malformed IE meta tag | Add `http-equiv="X-UA-Compatible"` attribute |
- | High | Full source required | Re-submit complete HTML for link, compliance, and token review |
- | Medium | Dark mode opt-out | Add `prefers-color-scheme: dark` overrides or use solid backgrounds on all images |
- | Medium | Multiple `<style>` blocks | Consolidate into one `<style>` block to prevent Gmail stripping |
- | Medium | DKIM subdomain alignment | Verify DKIM signing covers `email.shoecarnival.com`, not just root domain |
- | Low | `.mobileshow`/`.mobilehide` toggle | Audit show/hide class pairs across all breakpoints for Gmail mobile |

## Full review
---

## 1. Take

Wrong customer, wrong email. The whole thing is a Mother's Day gift push — women's sandals, a mom-and-daughter photo, BOGO on women's and kids' shoes. I'm a 62-year-old guy who came here to look at Slip-ins, not buy sandals for somebody's mother. The subject line should've told me that before I even tapped it, but "To Mom, With Love" is vague enough that I figured maybe there was something in here for me. There wasn't.

That said, Shoe Carnival did the basics right inside the email. The twenty-dollar-off offer was right up front, easy to read, with a clear coupon button. The layout didn't fall apart on my phone. I'll give them credit for that. But none of that execution saves it when the content is 100% aimed at women.

I'm marking this read and moving on. I wouldn't click anything in here for myself, and I wouldn't forward it — my wife doesn't shop Shoe Carnival either. Dead end for me.

---

## 2. What stood out

The hero offer — $20 off $99.98 or more with the code WELOVEMOM — is the best thing in this email. Big, clear, right at the top, with a "Get Coupon" button that actually looks like a button. I can read it without squinting. The BOGO Free module for sandals has good contrast and the teal background makes it pop. And the Shoe Perks gift grab at the bottom is a cute idea, though that section is so far down I'd be surprised if most people even make it there.

What pushed me away: every single product in here is women's. Sandals starting at $29.98 — for her. BOGO Free — Women's & Kids'. Hero image is a mom and her daughter. There is not one image of a men's shoe, not a single line about men's comfort, no slip-in, no memory foam, nothing that says "hey Walker, we thought of you too." And then the preview text — the thing I see in my inbox before I even open the email — is a raw tracking URL. That looked like spam. I almost didn't open it at all.

The Afterpay module at the bottom feels awkward for this audience. I don't buy shoes in four installments. And the fine print block is dense enough that I'd never read it on a phone.

---

## 3. What I'd change

1. **Stop sending Mother's Day emails to male subscribers without a men's module.** Even a single row — "Treat yourself while you're shopping for her — Men's comfort footwear on sale too" — would have saved this email for me. One module, one CTA, done.

2. **Fix the preheader immediately.** A tracking URL is leaking where the preview text should be. It looks like spam and probably cost them opens. The $20 off offer copy or the BOGO headline should be there instead.

3. **Add the minimum purchase context to the subject or preheader.** "$20 Off — No Code Needed" or "Use Code WELOVEMOM at Checkout" would convert better than a sentimental subject with no offer signal.

4. **Make the urgency real.** "Limited Time" means nothing. Put an end date on it — "Offer ends Sunday" — so I know whether I need to act today or can sleep on it.

5. **Move the Shoe Perks gift grab higher.** It's a fun engagement mechanic but it's buried below the fold. If you want people to play, put it in the top third.

- **Subject Alt A:** `Save $20 this weekend — for her (and maybe you)`
- **Subject Alt B:** `$20 off + BOGO Free sandals — Mom's Day deal`
- **Preheader Alt A:** `$20 off $99.98+ in store or online — code WELOVEMOM at checkout`
- **Preheader Alt B:** `BOGO Free women's sandals + play the Shoe Perks Gift Grab now`

---

## 4. Business Impact Score (1-10)

**8/10**

- Sender is a brand you recognize / are subscribed to (Shoe Carnival is a known national chain)
- One concrete offer is visible ($20 off $99.98+)
- Primary CTA is unambiguous ("Get Coupon" button, clearly styled)
- Visual hierarchy is clear (eye goes straight to the $20 OFF hero)
- No render bugs (clean layout, all images loaded, no overlap or broken sections)
- Email reflects current campaign / season (Mother's Day, May 10 send — on point)
- Offer feels honest (code shown, minimum purchase displayed, barcode at bottom matches offer)

*Not counted:* focus area (men's comfort/slip-ins) not referenced; demographic signals wrong (all female models, women's products); loyalty benefits not applicable (Walker is Skechers Plus, not Shoe Perks).

---

## 5. Open Likelihood (persona-grounded)

- **Score:** 5/10
- **Signals counted:** Sender display name is recognizable (Shoe Carnival); subject is under ~50 chars (21 chars); no spam signals (no ALL CAPS, no stacked !!!); cadence feels right (no indication of over-sending).
- **Rationale:** The subject is clean and short, but it signals zero relevance for a 62-year-old male — no offer, no product, no urgency. The leaking URL as preview text is a near-miss on the spam filter for someone like me; I almost skipped it entirely.

---

## 6. Click-Through Likelihood (persona-grounded)

- **Score:** 7/10
- **Signals counted:** Hero offer is visible without scrolling on mobile; CTA copy is specific ("Get Coupon" = verb + noun); offer reduces price ($20 off); offer is time-bounded ("LIMITED TIME" visible in hero banner); brand voice is consistent and trusted; no friction (email renders cleanly, no broken images or "view in browser" gates).
- **Rationale:** The mechanical execution is solid — I could click "Get Coupon" and understand exactly what I'm getting. What holds me back is that every CTA leads to women's products, so there's nothing to buy for myself. Score reflects strong execution dragged down by complete category mismatch.

---

## 7. Subject

- **Subject:** `To Mom, With Love 💌`
- **Length:** 21 characters
- **Scores (1-10):** Clarity `8`, Curiosity `3`, Personalization `1`, Urgency `2`, Specificity `3`

---

## 8. Preview

- **Preview:** `Shoe Carnival https://click.email.shoecarnival.com/?qs=ABB7InYiOjEsImQiOjQ4NjZ9AAwAAAAAAG39YEwElTx17oauhBUl_16omzUFVNTiLIeba1QNx12fT1FBsfwNkyHFZvIYU51uGpDmbCfjGgtJzweJqFwg_CNSu35os3Xvx` (leaking junk)
- **Length:** 180+ characters; effectively unusable as marketing copy
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

## Technical Audit — Shoe Carnival "To Mom, With Love" Email

---

### 1. Technical Summary

The email uses a standard HTML 4.01 Transitional table-based layout with multi-breakpoint responsive CSS. The provided source is truncated at the body content, limiting full link, compliance, and token analysis — issues below are confirmed from the visible head/CSS; body-level findings are flagged as unverifiable.

---

### 2. Link & Tracking Issues

**Unverifiable due to truncation** — no `<a href>` tags are present in the provided source. Cannot confirm:
- UTM parameter presence or consistency
- Click-tracking wrapper domains
- Broken or unresolved redirect URLs

**Action required:** Supply full HTML source or export link report from ESP to complete this section.

---

### 3. Rendering & Accessibility

**Confirmed issues:**

- **Malformed IE compatibility meta tag** — `<meta content="IE=edge" />` is missing the required `http-equiv` attribute. Correct form: `<meta http-equiv="X-UA-Compatible" content="IE=edge">`. Without `http-equiv`, this tag has no effect in Outlook/IE rendering engines.

- **Dark mode not supported** — `<meta name="color-scheme" content="light">` and `<meta name="supported-color-schemes" content="light">` explicitly opt out of dark mode. No `prefers-color-scheme: dark` media query is present. This will cause uncontrolled color inversion in Apple Mail dark mode on iOS/macOS for images with transparent backgrounds.

- **Multiple disconnected `<style>` blocks** — Five separate `<style>` elements in `<head>`. Gmail strips all but one `<style>` block in some rendering contexts (specifically the promotions tab); consolidating into a single block is safer.

- **`display:none` Gmail hack exposes color value** — `.mobilehide { display: none; color: #ffffff; }` — the color hack for Gmail's display:none stripping is present, but `a.mobileshow` is also set to `display: none` without a corresponding `.show` override at the same breakpoint in the first media query. Verify `.show` reliably overrides `.mobilehide` in Gmail mobile.

- **Alt text unverifiable** — all `<img>` tags are in the truncated body. Cannot confirm alt attributes are populated.

- **`role` and `aria-label` on layout tables** — unverifiable from truncated source. Screen reader compatibility requires `role="presentation"` on decorative tables.

---

### 4. Personalization & Merge Tokens

**Unverifiable due to truncation** — no merge syntax (e.g., `{{first_name}}`, `[%FIRST_NAME%]`, `*|FNAME|*`) is visible in the provided fragment. Cannot confirm:
- Whether tokens are present in subject line beyond the emoji
- Whether fallback/default values are configured for empty fields
- Whether tokens are correctly scoped (recipient-level vs. batch-level)

Subject line `To Mom, With Love 💌` contains no personalization tokens — confirm this is intentional for a broadcast send.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unverifiable from truncated source:**
- Physical mailing address (required by CAN-SPAM §5) — not present in visible HTML
- Unsubscribe link and one-click unsubscribe (`List-Unsubscribe-Post` header) — not visible
- Authentication headers (SPF, DKIM, DMARC) — not included in provided data

**Sender domain note:** Sending domain is `email.shoecarnival.com` (subdomain). Confirm DKIM is signed on this subdomain specifically, not just the root `shoecarnival.com`. Subdomain alignment failures are a common SPF/DMARC misconfiguration.

**Action required:** Provide email headers and full body HTML to complete compliance verification.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

**Unverifiable due to truncation** — no CTA links are present in the visible source. Cannot confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) are appended to destination URLs.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | Malformed IE meta tag | Add `http-equiv="X-UA-Compatible"` attribute |
| High | Full source required | Re-submit complete HTML for link, compliance, and token review |
| Medium | Dark mode opt-out | Add `prefers-color-scheme: dark` overrides or use solid backgrounds on all images |
| Medium | Multiple `<style>` blocks | Consolidate into one `<style>` block to prevent Gmail stripping |
| Medium | DKIM subdomain alignment | Verify DKIM signing covers `email.shoecarnival.com`, not just root domain |
| Low | `.mobileshow`/`.mobilehide` toggle | Audit show/hide class pairs across all breakpoints for Gmail mobile |
## Recent history

- [[2026-05-04-your-items-are-waiting]] — 8/10 (2026-05-04)
- [[2026-05-04-up-to-25-off-adidas-reebok-more]] — 8/10 (2026-05-04)
- [[2026-05-04-there-s-still-time-to-get-20-off-select-styles]] — 7/10 (2026-05-04)

