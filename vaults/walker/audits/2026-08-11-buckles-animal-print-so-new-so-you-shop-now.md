---
slug: 2026-08-11-buckles-animal-print-so-new-so-you-shop-now
type: email
date: 2026-08-11
persona: walker
score: "3/10"
sender: Crocs
subject: Buckles? Animal Print? So New. So You. Shop Now.
tags: [email, score-3, sender/crocs]
---
# Buckles? Animal Print? So New. So You. Shop Now.
**Score:** 3/10 · **Type:** Email audit · **2026-08-11**
## Executive summary

- A red high heel shoe with a buckle and a leopard print ballet flat — that's this whole email, and neither one is going in my closet. I don't wear ballet flats, and I've never once bought a shoe because it had "bolder buckle" written in cursive script across it. This one's not even trying to hide that it's aimed at women.
- No offer, no price, nothing about comfort or support that I actually care about — just "step into all-day comfort" tossed in as a throwaway line under a shoe with a strap and buckle that looks like it'd take me longer to put on than my current slip-ons. Compare that to the 08-10 "sale is on sale" email, where at least there was a number to chew on. This one's a straight delete, not even a skim.

## What's working

- The layout's clean enough — big hero image, clear "new" badge, easy scroll.
- "Made with Iconic Crocs Comfort" is the one line that speaks my language, buried as it is.
- No render bugs — everything loaded, nothing overlapping.

## What's weak

- Both hero products are women's ballet-flat styles with buckles and animal print — nothing here is a men's casual or walking shoe.
- No offer, no price, no percentage off anywhere in this email.
- "Bold shade. Bolder buckle." is cute copywriting but tells me nothing useful — not fit, not sizing, not comfort.
- Four button choices (Clogs, Jibbitz, Sale, Sandals) but the shoes shown match none of them cleanly — feels disconnected from the product I'd actually shop for.

## Recommendations

- 1. If Crocs wants my click, lead with a men's clog or sandal and an actual discount — this new-arrival ballet flat push isn't for guys like me at all.
- 2. Segment the list — send this one to whoever's buying women's styles, and send me the comfort clog and sale emails instead.
- 3. Put a real price or percentage in the subject and hero, not just "so new, so you."
- 4. Swap the vague preview text (it's just repeated blank characters — didn't even render as words) for something with a hook, like a specific product or deal.
- **Subject Alt A:** `New Markdowns: Men's Clogs Up to 40% Off`
- **Subject Alt B:** `Comfort You Know, Prices You'll Like`
- **Preheader Alt A:** `Classic clogs and sandals, now on sale for a limited time.`
- **Preheader Alt B:** `All-day cushion, arch support, real savings inside.`

## Full review
## 1. Overview

A red high heel shoe with a buckle and a leopard print ballet flat — that's this whole email, and neither one is going in my closet. I don't wear ballet flats, and I've never once bought a shoe because it had "bolder buckle" written in cursive script across it. This one's not even trying to hide that it's aimed at women.

No offer, no price, nothing about comfort or support that I actually care about — just "step into all-day comfort" tossed in as a throwaway line under a shoe with a strap and buckle that looks like it'd take me longer to put on than my current slip-ons. Compare that to the 08-10 "sale is on sale" email, where at least there was a number to chew on. This one's a straight delete, not even a skim.

## 2. What worked

- The layout's clean enough — big hero image, clear "new" badge, easy scroll.
- "Made with Iconic Crocs Comfort" is the one line that speaks my language, buried as it is.
- No render bugs — everything loaded, nothing overlapping.

## 3. What didn't

- Both hero products are women's ballet-flat styles with buckles and animal print — nothing here is a men's casual or walking shoe.
- No offer, no price, no percentage off anywhere in this email.
- "Bold shade. Bolder buckle." is cute copywriting but tells me nothing useful — not fit, not sizing, not comfort.
- Four button choices (Clogs, Jibbitz, Sale, Sandals) but the shoes shown match none of them cleanly — feels disconnected from the product I'd actually shop for.

## 4. What I'd change

1. If Crocs wants my click, lead with a men's clog or sandal and an actual discount — this new-arrival ballet flat push isn't for guys like me at all.
2. Segment the list — send this one to whoever's buying women's styles, and send me the comfort clog and sale emails instead.
3. Put a real price or percentage in the subject and hero, not just "so new, so you."
4. Swap the vague preview text (it's just repeated blank characters — didn't even render as words) for something with a hook, like a specific product or deal.
   - **Subject Alt A:** `New Markdowns: Men's Clogs Up to 40% Off`
   - **Subject Alt B:** `Comfort You Know, Prices You'll Like`
   - **Preheader Alt A:** `Classic clogs and sandals, now on sale for a limited time.`
   - **Preheader Alt B:** `All-day cushion, arch support, real savings inside.`

## 5. Business Impact Score (1-10)

**3/10**
- Sender is a brand you recognize / are subscribed to
- Primary CTA is unambiguous (clear button copy + visible button)
- Visual hierarchy is clear — the eye lands on the offer/hero first
- No render bugs (no overlapping text, broken images, lorem-ipsum, layout breakage)

## 6. Open Likelihood (persona-grounded)

- **Score:** `3/10`
- **Signals counted:** Sender display name is recognizable; Subject is under ~50 chars; No spam signals
- **Rationale:** I know the Crocs name so I'd at least register the sender, but the subject's just wordplay with no offer or relevance to me, and the preview text is unreadable junk characters.

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `2/10`
- **Signals counted:** Hero offer is visible without scrolling on mobile; Brand voice is consistent and trusted
- **Rationale:** There's nothing here in my category — no men's shoe, no price, no comfort detail — so even with a clean layout I've got zero reason to tap through.

## 8. Subject

- **Subject:** `Buckles? Animal Print? So New. So You. Shop Now.`
- **Length:** 49
- **Scores (1-10):** Clarity `3`, Curiosity `4`, Personalization `2`, Urgency `2`, Specificity `3`

## 9. Preview

- **Preview:** `(none / leaking junk)`
- **Length:** N/A (rendered as repeated blank/encoded characters)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

# Technical Email Audit — Crocs "Buckles? Animal Print?" Campaign

## 1. Technical Summary
The email uses a standard responsive MJML-style template with web fonts, Adobe Demdex tracking pixel, and MSO/Outlook conditional hacks; the main defects are eight `http://` (non-HTTPS) image sources and one untagged tracking pixel.

## 2. Link & Tracking Issues
- Adobe Demdex open-tracking pixel present: `https://demandwarecrocs.demdex.net/event?d_dpid=196107&c_emailopened=Yes&d_dpuid=...&campaignID=us_20260811_collection_classics-balletflat_x&...` — served over HTTPS, correctly hidden (`visibility:hidden;display:none`, 1x1).
- QA flagged 26 tracking/click-redirect links skipped from HTTP probing (expected behavior for redirect-domain links — not a defect, just unverified reachability).
- No broken or malformed `href` values found in the visible source.

## 3. Rendering & Accessibility
- Tracking pixel `<img>` (event: src=`demandwarecrocs.demdex.net/event?...`) has no `alt` attribute. Low-severity since it's a hidden 1x1 pixel, but worth adding `alt=""` for strict HTML validation.
- Outlook/Gmail compatibility hacks present and correctly structured: `x-apple-disable-message-reformatting`, `#MessageViewBody`/`#MessageWebViewDiv` resets, `u + .email-body #new-gmail-hack`, MSO-safe `@media` block for mobile breakpoints (≤639px).
- `@font-face` (TT Crocs, weights 400/700/900) declared with `woff2`/`woff` fallback and `font-display: swap` — safe degradation if fonts fail to load.
- Preheader text implemented via hidden `div.preheader` + zero-width-joiner padding string — correctly suppressed from body render (`display:none !important`).

## 4. Personalization & Merge Tokens
No unresolved merge tags (e.g. `{{first_name}}`, `%%FIELD%%`) or empty personalization blocks found in the visible/truncated source. No issues found.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- From address `email@crocs-email.com` present in header data provided.
- Physical mailing address, unsubscribe link, and List-Unsubscribe/DKIM/SPF headers are not present in the truncated HTML/QA payload — cannot confirm compliance. **This needs verification against the untruncated footer and raw email headers before sign-off**, as CAN-SPAM requires a visible unsubscribe mechanism and postal address in the body, not just headers.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Campaign ID embedded in the tracking pixel indicates the intended campaign: `campaignID=us_20260811_collection_classics-balletflat_x`, matching preheader copy ("Classic Ballet is here for it").
- The subject line references "Buckles? Animal Print?" (broader collection) while the pixel's campaignID and preheader reference "classics-balletflat" specifically — worth confirming this is intentional (multi-product send under one campaign) rather than a mismatched/stale campaign tag.
- No visible CTA `href` UTM parameters in the truncated source to verify against landing pages — 26 tracking links were skipped by the prober, so UTM/landing-page alignment could not be automatically confirmed.

## 7. Recommendations
1. Convert the 5 non-HTTPS image sources to `https://` — mixed content on `image.crocs-email.com`:
   - App Store badge (`9c36c0ef-333c-4e6c-bec8-9e0ac799d475.png`)
   - Google Play badge (`13246762-1111-4174-bca8-2f84a6bf62a5.png`)
   - "Find Your Store" (`c4df71ec-309f-44f4-b10a-27bb864eeb78.png`)
   - Instagram icon (`e18949ff-2d29-4a62-9176-a67132186a90.png`)
   - Facebook icon (`80f68cd8-0090-4258-b202-50e422ad1b5c.png`)
   - TikTok icon (`51d8144e-818a-4a00-a812-5cf0429b2429.png`)
   - YouTube icon (`1187ef58-07fe-4985-8349-93e338d86694.png`)
   
   (7 flagged, not 8 — recheck count.) These risk being blocked by mail clients enforcing HTTPS-only image loading (e.g., Outlook, Gmail proxy).
2. Add `alt=""` to the Demdex tracking pixel `<img>` for markup hygiene.
3. Confirm CAN-SPAM footer elements (unsubscribe link, physical address) and authentication headers (SPF/DKIM/DMARC) against the full email — not present in the truncated payload reviewed here.
4. Verify the campaign-ID/preheader ("classics-balletflat") vs. subject-line ("Buckles? Animal Print?") mismatch is intentional before this ships to a broader segment.
## Recent history

- [[2026-08-11-quilted-comfort-in-every-step]] — 6/10 (2026-08-11)
- [[2026-08-11-up-to-30-off-your-go-to-school-gear]] — 5/10 (2026-08-11)
- [[2026-08-11-top-shoes-80-and-under-for-the-new-school-year]] — 4/10 (2026-08-11)

