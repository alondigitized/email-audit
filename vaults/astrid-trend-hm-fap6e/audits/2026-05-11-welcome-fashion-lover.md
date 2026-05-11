---
slug: 2026-05-11-welcome-fashion-lover
type: email
date: 2026-05-11
persona: astrid-trend-hm-fap6e
score: "4/10"
sender: H&M Fashion News
subject: Welcome, Fashion Lover
tags: [email, score-4, sender/h-m-fashion-news]
---
# Welcome, Fashion Lover
**Score:** 4/10 · **Type:** Email audit · **2026-05-11**
## Executive summary

- This is H&M's welcome email for new newsletter subscribers, and it's doing the bare minimum. It confirms enrollment, promises "early access to exclusive offers, special collections & more," and asks you to "Explore Now" — all in a visually clean, black-and-white editorial frame. That aesthetic works for H&M, but it's doing zero work to retain you. There's no offer, no teaser of what "early access" actually means, and no reason to click today versus next week.
- The welcome email is arguably the most-opened email a brand will ever send — open rates routinely run 3-5x normal. H&M is wasting that leverage on a generic holding page. No discount, no featured collection, no social proof, no product. Just a vague promise and a box button.
- Judgement: acceptable execution of a missed opportunity. The design is on-brand; the strategy is not.

## Recommendations

- 1. **Lead with a real welcome offer.** 10-15% off the first purchase, or free shipping on the first order, would immediately justify the subscription and drive a first transaction. No offer = no urgency = no click.
- 2. **Replace "H&M NEWSLETTER" with a benefit headline.** Something like "Your exclusive member access starts now" turns a label into a promise.
- 3. **Make the CTA specific.** "Shop New Arrivals" or "See Member Offers" beats the catch-all "Explore Now."
- 4. **Add a product teaser row.** Even 3 editorial product tiles beneath the hero would answer "early access to what?" and give the reader something to click.
- 5. **Trim the footer.** App download links and store finder have no business in a welcome email above the legal block.
- **Subject Alt A:** `Welcome — here's your first member perk`
- **Subject Alt B:** `You're in. Exclusive access starts now`
- **Preheader Alt A:** `Early access to new drops + member-only offers — shop whenever you're ready`
- **Preheader Alt B:** `Your H&M member benefits, starting today. See what's new.`

## Full review
## 1. Take

This is H&M's welcome email for new newsletter subscribers, and it's doing the bare minimum. It confirms enrollment, promises "early access to exclusive offers, special collections & more," and asks you to "Explore Now" — all in a visually clean, black-and-white editorial frame. That aesthetic works for H&M, but it's doing zero work to retain you. There's no offer, no teaser of what "early access" actually means, and no reason to click today versus next week.

The welcome email is arguably the most-opened email a brand will ever send — open rates routinely run 3-5x normal. H&M is wasting that leverage on a generic holding page. No discount, no featured collection, no social proof, no product. Just a vague promise and a box button.

Judgement: acceptable execution of a missed opportunity. The design is on-brand; the strategy is not.

## 2. What stood out

The editorial black-and-white hero photo is the best thing in this email — it communicates fashion credibility without needing a word. But everything below it collapses quickly. The headline reads "H&M NEWSLETTER," which is not a headline — it's a label. The subhead ("Welcome — you now have early access to exclusive offers, special collections & more") is functional but passive; it tells you what you get without showing you any of it. The lone CTA, "EXPLORE NOW," goes nowhere in particular: it could link to the homepage, the sale section, or a member-only page, and the email gives no hint.

The footer is notably long — Android/iOS download links, Find Store, Contact, then a dense paragraph of legal text, then Unsubscribe and View in Browser as the final visible text. On mobile that's a lot of scrolling past noise. No loyalty/member benefit is highlighted despite the email copy referencing "H&M member" access. If this person is a member, that's the strongest hook you have — it's mentioned only in the fine print.

## 3. What I'd change

1. **Lead with a real welcome offer.** 10-15% off the first purchase, or free shipping on the first order, would immediately justify the subscription and drive a first transaction. No offer = no urgency = no click.
2. **Replace "H&M NEWSLETTER" with a benefit headline.** Something like "Your exclusive member access starts now" turns a label into a promise.
3. **Make the CTA specific.** "Shop New Arrivals" or "See Member Offers" beats the catch-all "Explore Now."
4. **Add a product teaser row.** Even 3 editorial product tiles beneath the hero would answer "early access to what?" and give the reader something to click.
5. **Trim the footer.** App download links and store finder have no business in a welcome email above the legal block.

- **Subject Alt A:** `Welcome — here's your first member perk`
- **Subject Alt B:** `You're in. Exclusive access starts now`
- **Preheader Alt A:** `Early access to new drops + member-only offers — shop whenever you're ready`
- **Preheader Alt B:** `Your H&M member benefits, starting today. See what's new.`

---

## 4. Business Impact Score (1-10)

**4/10**

- Sender is a brand I recognize / am subscribed to
- Primary CTA is unambiguous (clear button copy + visible button)
- Visual hierarchy is clear — eye lands on the hero first
- No render bugs

---

## 5. Open Likelihood (persona-grounded)

- **Score:** 4/10
- **Signals counted:** Sender display name is recognizable; no spam signals; no ALL CAPS/exclamation abuse.
- **Rationale:** "Welcome, Fashion Lover" is a generic subject — no concrete offer, no urgency, no personalization beyond a generic category label. It would open on brand recognition alone, not subject line merit.

---

## 6. Click-Through Likelihood (persona-grounded)

- **Score:** 2/10
- **Signals counted:** No friction (no broken images); brand voice is consistent and trusted.
- **Rationale:** No offer reduces price, no product detail is visible, CTA is vague, no time bound — almost nothing in the body compels a click. You opened, you read "exclusive offers," and you have no reason to click today versus ignoring it.

---

## 7. Subject

- **Subject:** `Welcome, Fashion Lover`
- **Length:** 22 chars
- **Scores (1-10):** Clarity `6`, Curiosity `3`, Personalization `3`, Urgency `1`, Specificity `2`

---

## 8. Preview

- **Preview:** `(none / leaking junk)` — no visible preheader copy; the email relies on the subject alone.
- **Length:** 0 chars
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

## Technical Audit — H&M "Welcome, Fashion Lover"

---

### 1. Technical Summary

The email renders with a well-structured responsive CSS framework, but the embedded JSON-LD schema block contains multiple unfilled template fields and a stale 2018 timestamp, which will suppress Gmail Action eligibility. Font loading relies on `@import`, a pattern blocked in most email clients.

---

### 2. Link & Tracking Issues

**JSON-LD PromotionCard has empty `url` field:**
```json
{"@type":"PromotionCard","url":"","image":""}
```
If this schema is intended to generate a Gmail promotion card, an empty `url` renders it inert.

**Cannot audit click-tracking links** — HTML source is truncated before any `<a href>` tags appear in the body. Confirm all destination URLs use consistent UTM parameters (see §6).

---

### 3. Rendering & Accessibility

**`@import` font loading is unreliable in email:**
```css
@import url(https://fabric.hmgroup.com/fabric-fonts/0/northstar/css/fonts.css);
@import url(https://s1-cdn.hm.com/global/hm-fonts/4.0.1/oces.css);
```
Gmail, Outlook, and Apple Mail strip or ignore `@import` in `<style>` blocks. If the template lacks explicit fallback font stacks, rendered text will degrade uncontrollably. Verify `font-family` declarations include web-safe fallbacks (`Arial`, `sans-serif`).

**Alt text on images** — Cannot confirm from truncated source. Flag for full-source check; missing `alt` attributes on product images break screen reader flow and degrade rendering in image-blocking clients.

**Duplicate media query declarations** — Several classes are declared twice in `optimize-css` (e.g., `.set_font_heading_xsmall`, `.flex-text-headline-text`, `.set_font_body_text_preamble`). This is benign but indicates template concatenation without deduplication.

---

### 4. Personalization & Merge Tokens

**Subject line not personalized:**
Subject: `Welcome, Fashion Lover` — no first-name token. For a welcome email, this is a likely missed personalization opportunity, but more critically:

**JSON-LD `subjectLine` is empty:**
```json
{"@type":"EmailMessage","subjectLine":""}
```
This field should mirror the actual subject. An empty value will prevent Gmail from generating an email action card.

**No unfilled `{{ }}` or `[[ ]]` merge tokens visible** in the truncated source — cannot fully confirm; check full source for escaped or unrendered tokens.

---

### 5. Compliance

**CAN-SPAM / GDPR unsubscribe** — Source is truncated before the footer; unsubscribe link presence cannot be confirmed from the provided excerpt. Must verify the rendered footer contains a one-click unsubscribe mechanism and physical mailing address.

**Sending domain:** `autoemail@autoemail.hm.com` — subdomain is consistent with ESP routing. Confirm SPF, DKIM, and DMARC records are published for `autoemail.hm.com` specifically (not just the root `hm.com`), as subdomain delegation is a common SPF/DMARC alignment failure point.

**`<script>` tag in `<head>`:**
```html
<script type="application/ld+json">...</script>
```
This is valid for Gmail structured data and not a compliance issue, but the stale data (see §2) reduces its value.

---

### 6. Email-to-Site Continuity

**Stale `availabilityStarts` date in JSON-LD:**
```json
{"availabilityStarts":"2018-12-31T23:59:59+0000"}
```
This timestamp is ~7.5 years old. If this template is being reused without updating the schema block, it signals that the JSON-LD is never refreshed — meaning any promotional card data (discount codes, promo URLs) is also likely stale or empty. Gmail may suppress the promotion tab card entirely due to this.

**UTM continuity** — Cannot audit from truncated source. Full source review should confirm all outbound links include `utm_source=email&utm_medium=email&utm_campaign=<campaign_id>` and that the landing page does not redirect in a way that strips query parameters.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | JSON-LD schema has empty `url`, `image`, `discountCode`, `description`, and stale 2018 date | Update template to populate all fields dynamically at send time or remove the schema block entirely |
| High | `@import` font loading stripped by major clients | Move to `<link>` preload tags in `<head>` with explicit fallback font stacks on all `font-family` declarations |
| High | Unsubscribe link not confirmed | Verify footer is present in full source and contains functional one-click unsubscribe |
| Medium | Empty `subjectLine` in `EmailMessage` schema | Inject actual subject line into the schema at render time |
| Medium | SPF/DKIM alignment on `autoemail.hm.com` subdomain | Run `dig TXT autoemail.hm.com` to confirm SPF record; verify DKIM selector matches ESP configuration |
| Low | Duplicate CSS class declarations in `optimize-css` | Deduplicate at template build step to reduce email payload size |
