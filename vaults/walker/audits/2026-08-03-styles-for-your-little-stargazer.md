---
slug: 2026-08-03-styles-for-your-little-stargazer
type: email
date: 2026-08-03
persona: walker
score: "4/10"
sender: Crocs
subject: Styles for Your Little Stargazer!
tags: [email, score-4, sender/crocs]
---
# Styles for Your Little Stargazer!
**Score:** 4/10 · **Type:** Email audit · **2026-08-03**
## Executive summary

- Kids' clogs. That's the whole email — a kid-sized Echo II with a glow-in-the-dark cosmic background, "small feet, stellar style," and the recommended section is all Classic Clogs, Baya Clogs, and a sandal that's clearly styled for someone younger than me. I don't have a "little stargazer" at home anymore, so there's nothing here pulling me in.
- This is the same pattern I flagged back on 2026-07-21 with "Hallway to Playground" — Crocs keeps rotating through kid and toddler product lines and mailing the whole list, me included. No mention of arch support, no men's casual anything, no price. I'm marking this read and moving on, definitely not forwarding it — unless it's to my daughter, who actually has little kids.

## What's working

- The hero image is clean and eye-catching — that starburst background actually looks premium, not cheap.
- Layout is simple, big text, easy to read on my phone without zooming.
- "Now Launching for Kids" heading is at least honest about who this is for, so I know in two seconds this isn't mine.

## What's weak

- Zero relevance to me — kids' shoes, kids' sizing, nothing for a grown man's feet.
- No price or offer anywhere in the whole email, just "new style" — nothing to act on even if I wanted to.
- The "Recommended for You" section is supposedly personalized but shows two more kids' items and generic clogs — doesn't feel like it knows anything about me.
- No mention of comfort, cushioning, arch support — the stuff that actually gets me to click on a shoe email.

## Recommendations

- 1. Segment kids' product launches away from adult/senior customers who've never bought kids' sizes — I shouldn't be getting this one at all.
- 2. If Crocs must send it to me, add a line like "Shopping for grandkids? Here's what to get" to at least acknowledge I'm not the target buyer.
- 3. Put an actual offer or price on screen — an email with no dollar figure gives me no reason to click through.
- 4. Fix "Recommended for You" so it actually reflects past browsing/purchases instead of just more kids' clogs.
- **Subject Alt A:** `New Kid-Sized Echo II — Get It Before They Grow`
- **Subject Alt B:** `Shopping for the Grandkids? New Styles Just Landed`
- **Preheader Alt A:** `Echo II in Moonburst, now in kid sizes`
- **Preheader Alt B:** `Small feet, big style — see the new kids' lineup`

## Full review
## 1. Overview

Kids' clogs. That's the whole email — a kid-sized Echo II with a glow-in-the-dark cosmic background, "small feet, stellar style," and the recommended section is all Classic Clogs, Baya Clogs, and a sandal that's clearly styled for someone younger than me. I don't have a "little stargazer" at home anymore, so there's nothing here pulling me in.

This is the same pattern I flagged back on 2026-07-21 with "Hallway to Playground" — Crocs keeps rotating through kid and toddler product lines and mailing the whole list, me included. No mention of arch support, no men's casual anything, no price. I'm marking this read and moving on, definitely not forwarding it — unless it's to my daughter, who actually has little kids.

## 2. What worked

- The hero image is clean and eye-catching — that starburst background actually looks premium, not cheap.
- Layout is simple, big text, easy to read on my phone without zooming.
- "Now Launching for Kids" heading is at least honest about who this is for, so I know in two seconds this isn't mine.

## 3. What didn't

- Zero relevance to me — kids' shoes, kids' sizing, nothing for a grown man's feet.
- No price or offer anywhere in the whole email, just "new style" — nothing to act on even if I wanted to.
- The "Recommended for You" section is supposedly personalized but shows two more kids' items and generic clogs — doesn't feel like it knows anything about me.
- No mention of comfort, cushioning, arch support — the stuff that actually gets me to click on a shoe email.

## 4. What I'd change

1. Segment kids' product launches away from adult/senior customers who've never bought kids' sizes — I shouldn't be getting this one at all.
2. If Crocs must send it to me, add a line like "Shopping for grandkids? Here's what to get" to at least acknowledge I'm not the target buyer.
3. Put an actual offer or price on screen — an email with no dollar figure gives me no reason to click through.
4. Fix "Recommended for You" so it actually reflects past browsing/purchases instead of just more kids' clogs.
   - **Subject Alt A:** `New Kid-Sized Echo II — Get It Before They Grow`
   - **Subject Alt B:** `Shopping for the Grandkids? New Styles Just Landed`
   - **Preheader Alt A:** `Echo II in Moonburst, now in kid sizes`
   - **Preheader Alt B:** `Small feet, big style — see the new kids' lineup`

## 5. Business Impact Score (1-10)
**4/10**
- Sender is a brand you recognize / are subscribed to
- Primary CTA is unambiguous (clear button copy + visible button)
- Visual hierarchy is clear — the eye lands on the offer/hero first
- No render bugs (no overlapping text, broken images, lorem-ipsum, layout breakage)

## 6. Open Likelihood (persona-grounded)
   - **Score:** `3/10`
   - **Signals counted:** Sender display name is recognizable; Subject is under ~50 chars (mobile-friendly); No spam signals (ALL CAPS, !!! exclamations)
   - **Rationale:** The Crocs name gets it opened out of habit, but "Little Stargazer" flags this as a kids' send before I even click in — nothing about the subject applies to me.

## 7. Click-Through Likelihood (persona-grounded)
   - **Score:** `2/10`
   - **Signals counted:** Hero offer is visible without scrolling on mobile; No friction — no "view in browser" first, no broken-image gaps
   - **Rationale:** Nothing in the hero, product grid, or CTAs is in my category — it's kids' clogs and sandals top to bottom, so there's no reason for me to tap through.

## 8. Subject
   - **Subject:** `Styles for Your Little Stargazer!`
   - **Length:** 34
   - **Scores (1-10):** Clarity `5`, Curiosity `4`, Personalization `2`, Urgency `2`, Specificity `4`

## 9. Preview
   - **Preview:** `(none / leaking junk)`
   - **Length:** N/A
   - **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

# Technical Audit: Crocs "Styles for Your Little Stargazer!" Email

## 1. Technical Summary
Standard responsive HTML email (Apple Mail/Outlook MSO hacks, mobile media queries) using Adobe Audience Manager (demdex.net) for open tracking and a Salesforce/iGoDigital recommendation engine for personalized product blocks. Automated QA reports a 100% pass rate (0 errors), but 11 warnings surfaced around alt text and mixed-content image sources.

## 2. Link & Tracking Issues
- 29 tracking/click-redirect links were skipped by the automated HTTP probe by design (redirect-wrapped tracking domains aren't resolved). **No confirmed broken links** — this is expected tooling behavior, not a defect. Recommend manual spot-check of a sample to confirm final destinations resolve correctly.
- Open-tracking pixel confirmed present and correctly hidden: `<img style="visibility:hidden;display:none" height="1" width="1" src="https://demandwarecrocs.demdex.net/event?d_dpid=196107&c_emailopened=Yes...campaignID=us_20260803_collection_echo-kids_x...">` — functioning as expected.

## 3. Rendering & Accessibility
- **5 images missing alt text**:
  - Tracking pixel (`demandwarecrocs.demdex.net/event?...`) — acceptable, purely functional/hidden.
  - 4 product recommendation images (`https://10745993.recs.igodigital.com/rr/v2/685c6ddd06fd7c003f1cd785/i/1-4/walker@agentmail.to?category=Recommended for You`) — no alt text, meaning if images are blocked (common default in Outlook/Gmail), recipients see no fallback description for the recommended products. Should have descriptive alt text (e.g., product name) or at minimum `alt=""` if decorative.
- **6 images loaded over plain `http://`** instead of `https://`: two app-store badges and four social icons (Instagram, Facebook, TikTok, YouTube), all served from `http://image.crocs-email.com/lib/fe66157070650c797512/m/1/...`. Modern mail clients and browsers increasingly block or flag non-HTTPS image loads, risking broken/missing icons in the footer.

## 4. Personalization & Merge Tokens
- No unresolved merge tags (e.g., `%%...%%`, `{{...}}`) observed in the visible source — personalization appears to have resolved correctly.
- However, the recipient's literal email address (`walker@agentmail.to`) is embedded directly in the `src` path of the 4 recommendation images rather than passed as an opaque token/ID. This is the standard iGoDigital pattern for fetching per-subscriber product feeds, but it means the raw email address is exposed in plain text in the HTML source and in any proxy/CDN logs that cache these image requests. Confirm this is intentional per your ESP's data-handling policy rather than a token-mapping bug, since it's also the value being flagged as the "missing alt text" label — worth double-checking the alt attribute isn't literally set to the raw address rather than being empty.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- Sender identity present and correctly formatted: `From: Crocs <email@crocs-email.com>`.
- Cannot confirm physical mailing address, unsubscribe link, or `List-Unsubscribe` header — the provided HTML source is truncated before the footer, and no raw email headers were supplied. **Recommend verifying these CAN-SPAM-required elements exist in the untruncated source/headers before this audit can confirm full compliance.**

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Tracking pixel campaign ID (`campaignID=us_20260803_collection_echo-kids_x`) indicates a defined campaign taxonomy exists for this send.
- Because all 29 click links are redirect-wrapped and were skipped by the probe, **UTM parameter values and final landing-page URLs could not be verified** in this pass. Recommend manually following at least the primary CTA link to confirm it lands on the Echo II Kids ("Moonburst") collection page with matching UTM source/medium/campaign values.

## 7. Recommendations
1. Add descriptive `alt` text to the 4 `igodigital.com` recommendation images (or explicit `alt=""` if purely decorative); leave the tracking pixel as-is.
2. Update the 6 footer image sources (app store badges, social icons) from `http://` to `https://` to prevent mixed-content blocking.
3. Confirm the recommendation-image alt attribute does not literally render the subscriber's email address — avoid exposing PII via the accessible name/HTML source.
4. Verify CAN-SPAM footer elements (physical address, unsubscribe link) and `List-Unsubscribe` header are present in the full, untruncated send.
5. Manually spot-check a sample of the 29 skipped tracking links to confirm correct destination URLs and UTM alignment with landing pages.
## Recent history

- [[2026-07-25-back-to-school-bestsellers]] — 5/10 (2026-07-25)
- [[2026-07-25-want-10-off-tap-for-deets]] — 8/10 (2026-07-25)
- [[2026-07-24-new-for-the-miles-you-stack]] — 7/10 (2026-07-24)

