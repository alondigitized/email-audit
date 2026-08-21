---
slug: 2026-08-21-your-cart-expires-soon
type: email
date: 2026-08-21
persona: walker
score: "3/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-3, sender/skechers]
---
# Your cart expires soon!
**Score:** 3/10 · **Type:** Email audit · **2026-08-21**
## Executive summary

- Same shoe, sixth or seventh time this week — that pink floral D'Lites - Spring Bloom, right up top under "YOU LIKED THESE. AND YOU WEREN'T WRONG." I said this yesterday and I'll say it again: I never touched that shoe, so nothing about "liked" or "weren't wrong" is true. This is the exact fiction from the "Your cart expires soon!" send I flagged before, just recycled with fresh header copy.
- Scroll past the fake cart pitch and there's actually a decent best-sellers grid — some men's slip-ins, an Arch Fit pair, even a basketball shoe — but I have to dig for it past a shoe I'd never wear and a "COMPLETE YOUR ORDER" button pointed at a cart I don't have.
- Not clicking, not forwarding. Marking as read and moving on — same as the last five of these.

## What's working

- The best-sellers row further down does have a couple of men's slip-in options mixed in, which is closer to my lane than the hero.
- Shop-by-category and store finder links are clean and easy to tap.
- Afterpay/Klarna and curbside pickup are there if I ever did want to buy, no complaints on that front.

## What's weak

- Hero shoe is a pink floral women's sneaker — nothing about it says "man, 62, comfort shopper."
- "COMPLETE YOUR ORDER" button implies an active cart I never started — same false urgency as every prior send this week.
- "You liked these and you weren't wrong" is just wrong; I never clicked or viewed that product.
- This is a rerun of the identical abandoned-cart gimmick from "Your cart expires soon!" and "Your Items Are Waiting!" — I'm losing patience with the repetition.

## Recommendations

- 1. Stop sending fake-cart emails to people who never had a cart — if Skechers can't verify browse/cart history, don't fabricate it. Swap the hero for something from my actual browse pattern (comfort/slip-in, men's).
- 2. Lead with the best-sellers grid instead of burying it — that's the part with real relevance to me.
- 3. Drop "COMPLETE YOUR ORDER" for something honest like "Shop Best Sellers" since there's no real order to complete.
- **Subject Alt A:** `Men's slip-ins are back in stock`
- **Subject Alt B:** `This week's best sellers, sorted by comfort`
- **Preheader Alt A:** `Arch Fit and slip-in styles, no lace-up required`
- **Preheader Alt B:** `See what's trending in men's comfort right now`

## Full review
## 1. Overview

Same shoe, sixth or seventh time this week — that pink floral D'Lites - Spring Bloom, right up top under "YOU LIKED THESE. AND YOU WEREN'T WRONG." I said this yesterday and I'll say it again: I never touched that shoe, so nothing about "liked" or "weren't wrong" is true. This is the exact fiction from the "Your cart expires soon!" send I flagged before, just recycled with fresh header copy.

Scroll past the fake cart pitch and there's actually a decent best-sellers grid — some men's slip-ins, an Arch Fit pair, even a basketball shoe — but I have to dig for it past a shoe I'd never wear and a "COMPLETE YOUR ORDER" button pointed at a cart I don't have.

Not clicking, not forwarding. Marking as read and moving on — same as the last five of these.

## 2. What worked

- The best-sellers row further down does have a couple of men's slip-in options mixed in, which is closer to my lane than the hero.
- Shop-by-category and store finder links are clean and easy to tap.
- Afterpay/Klarna and curbside pickup are there if I ever did want to buy, no complaints on that front.

## 3. What didn't

- Hero shoe is a pink floral women's sneaker — nothing about it says "man, 62, comfort shopper."
- "COMPLETE YOUR ORDER" button implies an active cart I never started — same false urgency as every prior send this week.
- "You liked these and you weren't wrong" is just wrong; I never clicked or viewed that product.
- This is a rerun of the identical abandoned-cart gimmick from "Your cart expires soon!" and "Your Items Are Waiting!" — I'm losing patience with the repetition.

## 4. What I'd change

1. Stop sending fake-cart emails to people who never had a cart — if Skechers can't verify browse/cart history, don't fabricate it. Swap the hero for something from my actual browse pattern (comfort/slip-in, men's).
2. Lead with the best-sellers grid instead of burying it — that's the part with real relevance to me.
3. Drop "COMPLETE YOUR ORDER" for something honest like "Shop Best Sellers" since there's no real order to complete.
   - **Subject Alt A:** `Men's slip-ins are back in stock`
   - **Subject Alt B:** `This week's best sellers, sorted by comfort`
   - **Preheader Alt A:** `Arch Fit and slip-in styles, no lace-up required`
   - **Preheader Alt B:** `See what's trending in men's comfort right now`

## 5. Business Impact Score (1-10)

**3/10**
- Sender is a brand you recognize / are subscribed to
- Primary CTA is unambiguous (clear button copy + visible button)
- No render bugs (no overlapping text, broken images, lorem-ipsum, layout breakage)

## 6. Open Likelihood (persona-grounded)

- **Score:** `2/10`
- **Signals counted:** Sender display name is recognizable; Subject is under ~50 chars (mobile-friendly)
- **Rationale:** Recognizable sender is the only real hook — the "cart expires" subject is a false urgency I've now seen repeated across multiple sends, killing any credibility.

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Signals counted:** Primary CTA is in a broad category; CTA copy is specific (a verb + a noun)
- **Rationale:** The hero and CTA point at a phantom cart with a shoe I never picked, so even a clean button doesn't earn a click — I'd have to scroll past the fiction to find anything relevant.

## 8. Subject

- **Subject:** `Your cart expires soon!`
- **Length:** 24
- **Scores (1-10):** Clarity `5`, Curiosity `4`, Personalization `2`, Urgency `6`, Specificity `3`

## 9. Preview

- **Preview:** `(none / leaking junk)`
- **Length:** 0
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

Technical Email Audit: "Your cart expires soon!" (SKECHERS)

**1. Technical Summary**
The email uses standard Attentive (attentivemail.com) tracked links and open-pixel infrastructure with responsive/MSO email markup; two link endpoints return HTTP errors and the plain-text MIME part is empty, which are the primary technical defects.

**2. Link & Tracking Issues**
- **[FAIL] 401 error** on the "Image of Men's OG Anunoby Limited Edition..." product link (`.../ls/click?upn=u001.LNc6VorXOZu5avyAvDTfGQTJtnEIgsZidubkhEbGZfHSB0rtDphj4IE...`) — this tracked redirect is unauthorized/broken and will send clicking users to an error page instead of the product.
- **[FAIL] 400 error** on the **Unsubscribe** link (`.../ls/click?upn=u001.LNc6VorXOZu5avyAvDTfGQbua6CZqR1ErPMp2bSFS3jZfyDW...`) — this is a compliance-relevant failure (see §5).
- Two links ("Complete Your Order", "You liked these and you weren't wrong.") returned 429 rate-limit responses during probing — inconclusive, not confirmed broken, recommend manual re-verification.
- All sampled links route through Attentive's `skechers.attentivemail.com/ls/click` redirect wrapper with per-recipient `upn` tokens, consistent with expected ESP tracking behavior. No open-redirect or malformed-URL issues observed in the sampled set.
- QA probed 12 of 35 material links (23 deprioritized as footer/utility/social); unprobed links are unverified, not confirmed good.

**3. Rendering & Accessibility**
- Multiple images served over **http://** instead of https (e.g., logo `dde00662-...png`, `dfcc8fd7-...jpg`, `49468f73-...png`, app-store/social icons, `a6ec5198-...jpg`), all from `image.emails.skechers.com`. Mixed content on an https-rendered client may block these images or trigger security warnings.
- **Missing alt text** on `a6ec5198-5437-4eaa-8613-eacc775726f9.jpg` and on the tracking open-pixel (`/wf/open?upn=...`) — the latter is a tracking pixel and generally not screen-reader-relevant, but the product image missing alt text is a real accessibility gap.
- Responsive CSS (`@media max-width:620px`) and MSO conditional handling for Outlook are present and structured correctly (`.stack .column`, `.desktop_hide`/`.mobile_hide` toggles, `mso-hide`).

**4. Personalization & Merge Tokens**
- No unresolved merge tags (e.g., `{{first_name}}`, `%%FIELD%%`) found in the visible HTML excerpt.
- No issues found in the reviewed source.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- **Unsubscribe link returns HTTP 400** — a functionally broken unsubscribe mechanism is a CAN-SPAM compliance risk if it persists in production (the law requires a working opt-out mechanism).
- Sending domain is `hello@msgs.skechers.com`, a dedicated subdomain — consistent with standard SPF/DKIM alignment practice, but DKIM/SPF/DMARC headers are not present in the provided source and cannot be verified from HTML alone.
- Physical mailing address / postal footer was not present in the truncated HTML excerpt — cannot confirm compliance; flag for verification against full source.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
- Links use Attentive's opaque `upn=` tracking token rather than visible UTM query parameters; UTM propagation (if any) happens after the `attentivemail.com` redirect resolves and cannot be verified from the HTML alone.
- Landing page alignment (do resolved URLs land on the correct PDP/cart page) cannot be confirmed given the 401/400/429 responses on the probed links — this is the same defect set as §2.

**7. Recommendations**
1. Fix/rotate the Attentive click-tracking wrapper for the "Men's OG Anunoby" product link (401) and the Unsubscribe link (400) before send — the unsubscribe failure is the higher-priority compliance issue.
2. Re-probe the two 429-rate-limited links ("Complete Your Order", "You liked these...") outside of automated QA to confirm they resolve correctly.
3. Serve all image assets over https (`image.emails.skechers.com` currently serves several via http://) to prevent mixed-content blocking in email clients/webmail.
4. Add alt text to `a6ec5198-5437-4eaa-8613-eacc775726f9.jpg`.
5. Generate a non-empty plain-text MIME alternative (currently 0 chars) — required for deliverability/spam-filter scoring and text-only clients.
6. Confirm full HTML includes a compliant physical mailing address and valid authentication headers (SPF/DKIM/DMARC) — not verifiable from the truncated source provided.
## Recent history

- [[2026-08-19-the-new-caf-slipper-is-here]] — 5/10 (2026-08-19)
- [[2026-08-19-intro-to-style-sneaker-trends]] — 4/10 (2026-08-19)
- [[2026-08-19-did-you-forget-something]] — 5/10 (2026-08-19)

