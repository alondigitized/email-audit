---
slug: 2026-03-29-the-countdown-to-fifa-world-cup-26-is-on
type: email
date: 2026-03-25
persona: walker
score: "3/10"
sender: adidas
subject: The countdown to FIFA World Cup 26™ is on
tags: [email, score-3, sender/adidas]
---
# The countdown to FIFA World Cup 26™ is on
**Score:** 3/10 · **Type:** Email audit · **2026-03-25**
## Executive summary

- A missed opportunity on a marquee moment. Adidas has a genuine cultural event — FIFA World Cup 2026 — and a full line of national team jerseys to sell, but this email delivers almost none of it. The send amounts to one atmospheric photo, three paragraphs of brand copy, and a non-clickable pseudo-CTA. A character encoding failure corrupts the trademark symbol throughout, and the top banner promoting 30% off with code MARCH creates a confusing message: are the jerseys on sale or aren't they?

## What's working

- **Hero image is compelling.** The newsstand-style display showing a wall of colorful national team jerseys (green Mexico, yellow Brazil, red/blue others) is visually arresting and communicates the global scale of the collection at a glance.
- **Brand voice is on-point.** The body copy — "carries the passion and hope of a nation" — is clean and emotionally resonant.
- **Footer is well-structured.** Account links, unsubscribe, support, and legal are cleanly laid out and readable.

## What's weak

- **Character encoding failure, repeatedly.** The trademark symbol renders as `â,¢` in every instance: the headline reads "FIFA WORLD CUP 26â,¢ HOME JERSEYS," the subhead repeats it, and the footnote truncates with a dangling `â`. This is visible, embarrassing, and undermines brand credibility on a flagship campaign.
- **No CTA button.** The call-to-action is plain text — "Shop online or at your local adidas store.*" — buried at the bottom of a copy block. There is no button, no link styling, no urgency trigger.
- **No product modules.** The entire middle of the email is blank space that should contain jersey cards. There are no individual country callouts, no product images beyond the hero, no prices, no "Shop [Country]" links.
- **Confusing dual message.** The top promotional banner ("Save 30% on eligible styles with code MARCH") sits directly above World Cup jersey content. It's unclear whether the discount applies to these jerseys. The signals conflict and dilute both messages.
- **Copy does all the work alone.** Three paragraphs describing jerseys without showing them creates no purchase intent. The email tells rather than shows.

## Recommendations

- 1. **Fix the encoding bug immediately.** The `â,¢` rendering is a production defect visible in every headline and the footnote. Resend or issue a corrected version for any future deployments.
- 2. **Add a proper CTA button.** Replace the text line with a high-contrast button: "Shop World Cup Jerseys" or "Find Your National Team." This is table stakes.
- 3. **Build a product grid below the hero.** 4–6 jersey tiles (Mexico, USA, Brazil, etc.) with country name + "Shop Now" links would immediately unlock revenue from this send.
- 4. **Separate the sale banner from the World Cup narrative.** Either remove the 30% banner from this send or explicitly state whether it applies to the jerseys. Mixed signals reduce both conversion paths.
- 5. **Add a countdown or date anchor.** The subject line says "the countdown is on" but the email has no date, no tournament timeline, no urgency mechanism. A "Tournament starts [date]" line or countdown graphic would add momentum.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Broken `dv.adidas.com` offer link | Validate offer ID `14474c62-8fdb-45c3-ab6d-d437c501bbb6` in the offer management platform; confirm redirect path type matches (`/o/` vs `/g/`) |
- | P0 | Plain-text body is empty | Add a plain-text MIME alternative with at minimum subject line, key offer text, and unsubscribe URL |
- | P1 | 6× HTTP arrow images | Update `src` to `https://image.link.adidas.com/...` (same host, protocol change only) |
- | P1 | HTTP tracking pixel | Update open-pixel `src` to HTTPS |
- | P1 | Missing alt text on linked offer image | Add descriptive `alt` (e.g., `alt="Shop FIFA World Cup 26 collection"`) so CTA is reachable when image is blocked |
- | P2 | `no-referrer` meta tag | Remove unless deliberately suppressing referrer for privacy; UTM params should carry all needed attribution |
- | P2 | DKIM/SPF alignment | Pull delivery headers from ESP for this send and confirm `dkim=pass` and `spf=pass` aligned to `adidas.com` |
- | P3 | Malformed charset meta | Change to `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` |
- | P3 | Duplicate `@font-face` blocks | Consolidate into a single block with the union of fallbacks |

## Full review
## adidas — "The countdown to FIFA World Cup 26™ is on"

---

### 1. Executive Summary

A missed opportunity on a marquee moment. Adidas has a genuine cultural event — FIFA World Cup 2026 — and a full line of national team jerseys to sell, but this email delivers almost none of it. The send amounts to one atmospheric photo, three paragraphs of brand copy, and a non-clickable pseudo-CTA. A character encoding failure corrupts the trademark symbol throughout, and the top banner promoting 30% off with code MARCH creates a confusing message: are the jerseys on sale or aren't they?

---

### 2. Business Impact Score: **3 / 10**

---

### 3. What's Working

- **Hero image is compelling.** The newsstand-style display showing a wall of colorful national team jerseys (green Mexico, yellow Brazil, red/blue others) is visually arresting and communicates the global scale of the collection at a glance.
- **Brand voice is on-point.** The body copy — "carries the passion and hope of a nation" — is clean and emotionally resonant.
- **Footer is well-structured.** Account links, unsubscribe, support, and legal are cleanly laid out and readable.

---

### 4. What's Weak

- **Character encoding failure, repeatedly.** The trademark symbol renders as `â,¢` in every instance: the headline reads "FIFA WORLD CUP 26â,¢ HOME JERSEYS," the subhead repeats it, and the footnote truncates with a dangling `â`. This is visible, embarrassing, and undermines brand credibility on a flagship campaign.
- **No CTA button.** The call-to-action is plain text — "Shop online or at your local adidas store.*" — buried at the bottom of a copy block. There is no button, no link styling, no urgency trigger.
- **No product modules.** The entire middle of the email is blank space that should contain jersey cards. There are no individual country callouts, no product images beyond the hero, no prices, no "Shop [Country]" links.
- **Confusing dual message.** The top promotional banner ("Save 30% on eligible styles with code MARCH") sits directly above World Cup jersey content. It's unclear whether the discount applies to these jerseys. The signals conflict and dilute both messages.
- **Copy does all the work alone.** Three paragraphs describing jerseys without showing them creates no purchase intent. The email tells rather than shows.

---

### 5. Recommendations

1. **Fix the encoding bug immediately.** The `â,¢` rendering is a production defect visible in every headline and the footnote. Resend or issue a corrected version for any future deployments.
2. **Add a proper CTA button.** Replace the text line with a high-contrast button: "Shop World Cup Jerseys" or "Find Your National Team." This is table stakes.
3. **Build a product grid below the hero.** 4–6 jersey tiles (Mexico, USA, Brazil, etc.) with country name + "Shop Now" links would immediately unlock revenue from this send.
4. **Separate the sale banner from the World Cup narrative.** Either remove the 30% banner from this send or explicitly state whether it applies to the jerseys. Mixed signals reduce both conversion paths.
5. **Add a countdown or date anchor.** The subject line says "the countdown is on" but the email has no date, no tournament timeline, no urgency mechanism. A "Tournament starts [date]" line or countdown graphic would add momentum.

---

### 6. Bottom Line

This email uses a major cultural marketing moment to deliver brand awareness copy when it should be driving jersey sales. The structural gaps — no product tiles, no CTA button, broken character encoding — are not minor polish issues; they are revenue leaks. The bones (hero image, brand voice) are solid, but the execution needs a rebuild before the next send in this campaign.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Announce/launch FIFA World Cup 2026 Home Jersey collection |
| **Hero / primary value prop** | Full-width newsstand image of hanging national team jerseys — visually strong, no product link |
| **Membership / benefits** | None present |
| **Product discoverability** | Absent — no product tiles, no country selection, no price points |
| **Utility / secondary modules** | Top banner: "Save 30% on eligible styles with code MARCH / SHOP NOW →" — contextually misaligned |
| **Bugs / friction** | `â,¢` encoding error in headline, subhead, and footnote; text-only CTA with no button; footnote truncated mid-character |

---

## Technical Audit

## Technical Audit — "The countdown to FIFA World Cup 26™ is on"
**From:** adidas@us-news.comms.adidas.com | **Date:** 2026-03-29

---

### 1. Technical Summary

The email has two confirmed failures: a broken offer link and a missing plain-text alternative. Six arrow images are served over HTTP and will be blocked in security-conscious clients. Authentication header status is unverified, and a `no-referrer` meta tag will silently break referrer-based attribution on the landing page.

---

### 2. Link & Tracking Issues

**[FAIL] Broken offer link**
The QA resolver encountered an unknown URL type (`/g/`) when following the offer redirect:
```
https://dv.adidas.com/o/14474c62-8fdb-45c3-ab6d-d437c501bbb6?cp_tp=v3.eJzjYuII...
```
The link resolves to a `/g/` path variant that the resolver cannot handle, indicating a possible mis-configured offer ID or redirect rule on `dv.adidas.com`. The image associated with this link (`14474c62-8fdb-45c3-ab6d-d437c501bbb6`) also has no alt text, meaning if the image fails to render, the CTA is invisible.

**[WARN] 29 tracking links not validated**
All `click.comms.adidas.com` redirect URLs were skipped during HTTP probing. Link health on final destinations is unconfirmed.

---

### 3. Rendering & Accessibility

**[WARN] Six HTTP (non-HTTPS) image references — same asset, repeated**
The arrow icon `b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` is embedded six times over HTTP:
```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Gmail, Outlook.com, and Apple Mail all block mixed-content images by default. All six instances will render as broken images.

**[WARN] Tracking pixel served over HTTP**
The open-tracking pixel at `http://click.comms.adidas.com/CI0/0102019d262e05f4-...` is also HTTP. Beyond the mixed-content block risk, this will under-count opens in HTTPS-enforcing clients.

**[WARN] Two images missing `alt` text**
- Offer image: `14474c62-8fdb-45c3-ab6d-d437c501bbb6` (linked CTA — missing alt means the link has no accessible label)
- Tracking pixel: `VRpQKzCKp7rf33xIJuwxidqFMhCG6uNcuVWCTZe5IsA=450`

**[INFO] `<meta>` charset tag malformed**
```html
<meta content="text/html; charset=UTF-8" />
```
Missing the required `http-equiv="Content-Type"` attribute. Some older parsers will not pick up the charset declaration, risking character encoding fallback.

**[INFO] Duplicate `@font-face` declarations**
`AdihausDIN` and `AdineuePRO` are declared twice across two separate `<style>` blocks with slightly different fallback lists (`local('Calibri')` in one, absent in the other). The second block overrides the first. The redundancy adds ~1 KB to the payload and the inconsistency is a maintenance risk.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens or raw placeholder syntax (e.g., `{{`, `%%`, `[%`) detected in the visible HTML. No issues found.

---

### 5. Compliance

**[FAIL] Plain-text alternative is absent**
QA reports 0 characters in the text/plain MIME part. While CAN-SPAM does not mandate a plain-text part, many spam filters (SpamAssassin, Proofpoint) penalize HTML-only messages. This also renders the email inaccessible to text-only clients.

**[WARN] Authentication-Results header not verifiable**
SPF and DKIM status could not be confirmed via the AgentMail relay. Sending domain is `us-news.comms.adidas.com`; alignment with `adidas.com` DMARC policy (`p=reject` or `p=quarantine`) should be verified via the ESP delivery logs.

**[INFO] Unsubscribe and physical address**
Not visible in the truncated source provided; assume present in footer — verify `List-Unsubscribe` header and one-click `List-Unsubscribe-Post` (RFC 8058) are present for Gmail/Yahoo bulk sender compliance.

---

### 6. Email-to-Site Continuity

**[WARN] `no-referrer` meta tag suppresses HTTP referrer**
```html
<meta name="referrer" content="no-referrer" />
```
This directive strips the `Referer` header on all clicks out of the email. If the landing page uses referrer-based attribution (e.g., as a fallback when UTM params are stripped by link shorteners), attribution will fail silently. If UTM params are present on all links this is low-risk, but the tag is unnecessary and should be removed or scoped.

**[INFO] UTM parameter coverage unverified**
29 tracking links were not probed. Confirm that all destination URLs carry consistent `utm_source`, `utm_medium`, and `utm_campaign` values, especially on the broken `dv.adidas.com` offer link once it is fixed.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Broken `dv.adidas.com` offer link | Validate offer ID `14474c62-8fdb-45c3-ab6d-d437c501bbb6` in the offer management platform; confirm redirect path type matches (`/o/` vs `/g/`) |
| P0 | Plain-text body is empty | Add a plain-text MIME alternative with at minimum subject line, key offer text, and unsubscribe URL |
| P1 | 6× HTTP arrow images | Update `src` to `https://image.link.adidas.com/...` (same host, protocol change only) |
| P1 | HTTP tracking pixel | Update open-pixel `src` to HTTPS |
| P1 | Missing alt text on linked offer image | Add descriptive `alt` (e.g., `alt="Shop FIFA World Cup 26 collection"`) so CTA is reachable when image is blocked |
| P2 | `no-referrer` meta tag | Remove unless deliberately suppressing referrer for privacy; UTM params should carry all needed attribution |
| P2 | DKIM/SPF alignment | Pull delivery headers from ESP for this send and confirm `dkim=pass` and `spf=pass` aligned to `adidas.com` |
| P3 | Malformed charset meta | Change to `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` |
| P3 | Duplicate `@font-face` blocks | Consolidate into a single block with the union of fallbacks |
## Recent history

- [[2026-03-29-check-out-this-month-s-adiclub-benefits-here-is-your-march-newsletter]] — 4/10 (2026-03-24)
- [[2026-03-29-last-day-to-redeem-your-voucher]] — 5/10 (2026-03-23)
- [[2026-03-23-your-first-pair-just-became-2-bogo-50-off]] — 5/10 (2026-03-23)

