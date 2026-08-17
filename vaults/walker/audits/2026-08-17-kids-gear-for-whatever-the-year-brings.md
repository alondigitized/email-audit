---
slug: 2026-08-17-kids-gear-for-whatever-the-year-brings
type: email
date: 2026-08-17
persona: walker
score: "3/10"
sender: adidas
subject: "Kids' gear for whatever the year brings"
tags: [email, score-3, sender/adidas]
---
# Kids' gear for whatever the year brings
**Score:** 3/10 · **Type:** Email audit · **2026-08-17**
## Executive summary

- Kids' backpacks and back-to-school clothes — that's about as far from my life as adidas gets. I'm 62, my kids are grown, and I don't have grandkids buying school gear off my email. No shoe I'd wear, no offer I'd use, nothing that even nudges my radar.
- Compared to that loafer email from yesterday ("A new era of Originals style") which at least had a dressy shoe I could picture on my own feet, this one's a total swing and miss — kids leaping around a gym, a clear backpack stuffed with school supplies. I scrolled through out of habit more than interest and there's not a single line here for a guy shopping cushioned walking shoes.
- Straight to "mark as read," no click, definitely not forwarding this to anyone — unless I know a parent with a kid starting school, and even then I'd just text them "adidas has a backpack sale" rather than forward the whole thing.

## What's working

- The "Shop Now" banner up top is at least a clear, tappable button.
- No jerseys or soccer players this time, so it's a notch above some of their worse sends.
- Images are crisp, nothing broken or glitchy on my end.

## What's weak

- Zero footwear for men, zero mention of comfort, cushioning, arch support — nothing in my category at all.
- Models and products are entirely kids' — backpacks, lunch bags, matching sets — I have no use for any of it.
- No actual discount or price anywhere, just "explore the latest" and "shop trending" — vague marketing filler.
- The hero photo is kids horsing around in a gym, which doesn't even clearly sell a product at a glance.

## Recommendations

- 1. This one just isn't for me — segment your list. If adidas knows I've never clicked kids' or jersey emails, stop sending them to me. That's the single biggest lift here, and it's not a copy fix.
- 2. If they're going to send comfort-brand shoppers anything, put an actual adult footwear offer front and center with a real discount number.
- 3. "Explore the latest adidas best sellers" is generic — swap it for a specific product or price so there's a reason to click.
- **Subject Alt A:** `Back-to-school picks for the kids on your list`
- **Subject Alt B:** `New backpacks, sneakers, and gear for fall`
- **Preheader Alt A:** `Backpacks, lunch bags, and sneakers ready for the first bell`
- **Preheader Alt B:** `Everything on the school supply list, minus the hassle`

## Full review
## 1. Overview

Kids' backpacks and back-to-school clothes — that's about as far from my life as adidas gets. I'm 62, my kids are grown, and I don't have grandkids buying school gear off my email. No shoe I'd wear, no offer I'd use, nothing that even nudges my radar.

Compared to that loafer email from yesterday ("A new era of Originals style") which at least had a dressy shoe I could picture on my own feet, this one's a total swing and miss — kids leaping around a gym, a clear backpack stuffed with school supplies. I scrolled through out of habit more than interest and there's not a single line here for a guy shopping cushioned walking shoes.

Straight to "mark as read," no click, definitely not forwarding this to anyone — unless I know a parent with a kid starting school, and even then I'd just text them "adidas has a backpack sale" rather than forward the whole thing.

## 2. What worked

- The "Shop Now" banner up top is at least a clear, tappable button.
- No jerseys or soccer players this time, so it's a notch above some of their worse sends.
- Images are crisp, nothing broken or glitchy on my end.

## 3. What didn't

- Zero footwear for men, zero mention of comfort, cushioning, arch support — nothing in my category at all.
- Models and products are entirely kids' — backpacks, lunch bags, matching sets — I have no use for any of it.
- No actual discount or price anywhere, just "explore the latest" and "shop trending" — vague marketing filler.
- The hero photo is kids horsing around in a gym, which doesn't even clearly sell a product at a glance.

## 4. What I'd change

1. This one just isn't for me — segment your list. If adidas knows I've never clicked kids' or jersey emails, stop sending them to me. That's the single biggest lift here, and it's not a copy fix.
2. If they're going to send comfort-brand shoppers anything, put an actual adult footwear offer front and center with a real discount number.
3. "Explore the latest adidas best sellers" is generic — swap it for a specific product or price so there's a reason to click.
   - **Subject Alt A:** `Back-to-school picks for the kids on your list`
   - **Subject Alt B:** `New backpacks, sneakers, and gear for fall`
   - **Preheader Alt A:** `Backpacks, lunch bags, and sneakers ready for the first bell`
   - **Preheader Alt B:** `Everything on the school supply list, minus the hassle`

## 5. Business Impact Score (1-10)

**3/10**
- One concrete offer visible (none really, "Shop Now" button counts as a visible CTA at least)
- Primary CTA is unambiguous (clear button copy + visible button)
- No render bugs (no overlapping text, broken images, lorem-ipsum, layout breakage)

## 6. Open Likelihood (persona-grounded)

- **Score:** `2/10`
- **Signals counted:** Sender display name is recognizable; Subject is under ~50 chars (mobile-friendly)
- **Rationale:** I know the adidas name, but "Kids' gear for whatever the year brings" tells me instantly this isn't for me — nothing concrete, nothing in my category.

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `2/10`
- **Signals counted:** Hero offer is visible without scrolling on mobile; No friction — no "view in browser" first, no broken-image gaps
- **Rationale:** Nothing here is in my category, so even a clean layout with an easy-to-find button doesn't get me to tap.

## 8. Subject

- **Subject:** `Kids' gear for whatever the year brings`
- **Length:** 40
- **Scores (1-10):** Clarity `6`, Curiosity `3`, Personalization `2`, Urgency `2`, Specificity `3`

## 9. Preview

- **Preview:** `Get the essentials for the classroom, playground, and more.`
- **Length:** 61
- **Scores (1-10):** Complements subject `6`, Specificity `4`, Clarity `6`, Inbox-fit `5`

---

## Technical Audit

# Technical Email QA Report — adidas "Kids' gear for whatever the year brings"

**1. Technical Summary**
Email is a standard MI/Salesforce-style responsive HTML template with functional tracking links and mobile breakpoints, but ships with a missing plain-text MIME part and several non-HTTPS image/tracking-pixel sources.

**2. Link & Tracking Issues**
- 18 tracking/click-redirect links (`click.comms.adidas.com`) were skipped by the automated HTTP probe as expected redirector behavior — no confirmed breakage, but unverified.
- One tracking pixel resolves over plain HTTP: `http://click.comms.adidas.com/CI0/010201a00e50ec97-9726949e-f1e3-4b30-8df1-1b6ad5cad56d-000000/mC4YjySG9suJfj1U6QClaajfe...` — mixed-content pixel, may be blocked by mail clients enforcing HTTPS-only image loading, causing open-tracking undercounts.

**3. Rendering & Accessibility**
- Non-HTTPS image source (repeated 3x in source, same asset): `http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` ("arrow" asset) — will be blocked/proxied by clients that enforce HTTPS image loading (Gmail, Outlook), risking broken/missing arrow icons.
- Missing `alt` text on two images:
  - `1d35456a-e110-427d-9fe7-ae013ebef1b6` (`https://dv.adidas.com/o/1d35456a-e110-427d-9fe7-ae013ebef1b6?cp_tp=...`)
  - Tracking pixel `mC4YjySG9suJfj1U6QClaajfeFyeeSMCDfGhhFnrjH4=452` (also the HTTP-source pixel above)
  - Missing alt text degrades accessibility for screen-reader users and image-blocked inboxes (no fallback text shown).
- Template includes standard MSO/Outlook conditional-safe patterns (`ReadMsgBody`, `ExternalClass` resets) and mobile breakpoints at 640/480/414/320px — no structural rendering issues found in the visible source.

**4. Personalization & Merge Tokens**
No merge tokens or personalization variables visible in the truncated source (e.g., no unresolved `{{...}}` or AMPscript artifacts). No issues found.

**5. Compliance (CAN-SPAM, unsubscribe, authentication headers)**
- `From` domain is a dedicated subdomain (`us-news.comms.adidas.com`), consistent with ESP-managed sending infrastructure — no header anomalies observed in the provided data.
- Unsubscribe link and physical-address footer are not visible in the truncated HTML — cannot confirm CAN-SPAM footer compliance from the given excerpt; recommend checking the untruncated footer block.
- No SPF/DKIM/DMARC header data was provided in this QA payload — authentication status not assessable from available evidence.

**6. Email-to-Site Continuity (UTM params, landing page alignment)**
Truncated source does not expose the destination URLs behind the 18 tracking links (all routed through `click.comms.adidas.com` redirectors), so UTM parameter presence/consistency and landing-page alignment cannot be verified from available evidence.

**7. Recommendations**
- Add a non-empty plain-text MIME alternative (currently 0 chars) — required for spam-filter scoring and text-only/accessibility clients.
- Migrate the `arrow` image and the tracking pixel to `https://` sources to prevent blocked/broken rendering in HTTPS-enforcing clients.
- Add descriptive (or empty `alt=""` if purely decorative) `alt` attributes to the two flagged images.
- Confirm the footer (outside the truncated excerpt) contains a working unsubscribe link and physical mailing address for CAN-SPAM compliance.
- Resolve the 18 skipped tracking-link redirects to confirm final destination URLs carry correct UTM parameters and land on matching pages.
## Recent history

- [[2026-08-16-bogo-50-off]] — 4/10 (2026-08-16)
- [[2026-08-16-your-search-stops-here]] — 8/10 (2026-08-16)
- [[2026-08-16-bogo-50-off-ends-tonight-gooooo]] — 3/10 (2026-08-16)

