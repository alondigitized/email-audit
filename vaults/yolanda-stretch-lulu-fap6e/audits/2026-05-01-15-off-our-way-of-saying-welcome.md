---
slug: 2026-05-01-15-off-our-way-of-saying-welcome
type: email
date: 2026-05-01
persona: yolanda-stretch-lulu-fap6e
score: "5/10"
sender: lululemon
subject: "15% off: Our way of saying welcome"
tags: [email, score-5, sender/lululemon]
---
# 15% off: Our way of saying welcome
**Score:** 5/10 · **Type:** Email audit · **2026-05-01**
## Executive summary

- A competent welcome-offer email hampered by a friction-heavy redemption flow. The 15% discount is the right hook for a new subscriber, the brand aesthetic is clean, and the deadline is visible. But the four-step "how it works" instruction block — including a copy-paste-this-link instruction — is the kind of UX that kills conversion before a customer ever reaches checkout. The "Sign up and Shop Now" CTA label is also a logic error: the recipient already signed up. A single click-to-apply offer would outperform this version materially.
- The offer is solid; the execution borrows from a much older playbook. The friction actively fights the conversion it's trying to drive.

## What's working

- **Headline clarity.** "Jump in with 15% off." is punchy, benefit-first, and visually dominant. Zero ambiguity about what you're getting.
- **Brand consistency.** Clean white layout, strong athletic hero image, and tight typography are all unmistakably lululemon — high trust signal for a new subscriber.
- **Deadline visibility.** "Promo offer ends Thursday, May 14, 2026, at 11:59pm PT" is specific and sets a real expiry clock.
- **Dual CTA placement.** Buttons appear both above and below the how-it-works block — good practice for a taller email.
- **Product teaser.** The "Early Access: 2-In-1 Mini Dress" module adds browseable inventory below the fold.

## What's weak

- **The "How it works" block is four steps.** A welcome offer should be one step: click, get discount applied. Step 1 literally instructs the recipient to copy a link and paste it into a browser — a pattern from 2008. This will hemorrhage clicks.
- **CTA label is wrong.** "Sign up and Shop Now" implies the user hasn't signed up yet. They have — they're receiving this email. This creates cognitive friction ("wait, did my account not save?") right at the conversion point.
- **Recommended for You is blind.** This is a first-time contact — there's no purchase history. Whatever is populating "Early Access: 2-In-1 Mini Dress" is a guess at best. A better default is a bestseller or category-based prompt, framed honestly ("Our most-loved right now").
- **App download module is filler.** Burying an app download ask in a welcome/offer email splits attention at the worst possible moment. Save it for post-purchase.
- **Step 4 mentions "if you accidentally sign out."** Signaling that signing out is a real risk that kills the offer erodes trust and makes the whole flow feel fragile.

## Recommendations

- 1. **Collapse the redemption to one step.** Link the button directly to a cart or landing page that auto-applies the discount. Remove the copy-paste instruction entirely.
- 2. **Rewrite the CTA.** Change "Sign up and Shop Now" → "Shop Now — 15% Off Applied" or "Claim My 15% Off."
- 3. **Reframe the recommendation module.** Swap "Recommended for you" → "Our bestsellers" or "Start here." Don't pretend to know a new subscriber's taste.
- 4. **Cut or delay the app module.** Move it to a post-purchase follow-up where it's a natural next step, not an attention split.
- 5. **Add urgency to the CTA area.** The deadline is in body copy but not near the button. Echo "Expires May 14" directly under the CTA button.
- 6. **Remove the "if you sign out" caveat.** Replace with a single help-link sentence; don't surface the failure case as an instruction.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Primary CTA 403 | Fix `cpnId=WELCOME15LIAXZ4MO9ZA` endpoint — confirm promo code is active and the URL is publicly accessible without a session cookie |
- | P0 | Homepage link 403 | Verify `www.lululemon.com` resolves correctly from target locale; check for geo-redirect misconfiguration |
- | P1 | All 5 font 403s | Audit CDN/R2 bucket policy on `globalstaticassets.lululemon.com/fonts/` — likely a CORS or signed-URL expiry issue |
- | P1 | List-Unsubscribe headers | Confirm headers are present in raw MTA delivery; if stripped by relay, verify at SFMC send log level |
- | P2 | Logo alt text missing | Add `alt="lululemon"` to masthead yogotype image |
- | P2 | Arrow alt text missing | Add `alt=""` (empty) to the three `SFMC_Email_Footer_Arrow-Right` images |
- | P3 | SPF/DKIM confirmation | Pull full headers from a delivered copy and verify `Authentication-Results` shows pass for both |
- | P3 | UTM validation | Confirm GA4 is receiving correct campaign parameters from post-click sessions |

## Full review
---

## lululemon — "15% off: Our way of saying welcome" — Email Review

---

### 1. Executive Summary

A competent welcome-offer email hampered by a friction-heavy redemption flow. The 15% discount is the right hook for a new subscriber, the brand aesthetic is clean, and the deadline is visible. But the four-step "how it works" instruction block — including a copy-paste-this-link instruction — is the kind of UX that kills conversion before a customer ever reaches checkout. The "Sign up and Shop Now" CTA label is also a logic error: the recipient already signed up. A single click-to-apply offer would outperform this version materially.

---

### 2. Business Impact Score: **5 / 10**

The offer is solid; the execution borrows from a much older playbook. The friction actively fights the conversion it's trying to drive.

---

### 3. What's Working

- **Headline clarity.** "Jump in with 15% off." is punchy, benefit-first, and visually dominant. Zero ambiguity about what you're getting.
- **Brand consistency.** Clean white layout, strong athletic hero image, and tight typography are all unmistakably lululemon — high trust signal for a new subscriber.
- **Deadline visibility.** "Promo offer ends Thursday, May 14, 2026, at 11:59pm PT" is specific and sets a real expiry clock.
- **Dual CTA placement.** Buttons appear both above and below the how-it-works block — good practice for a taller email.
- **Product teaser.** The "Early Access: 2-In-1 Mini Dress" module adds browseable inventory below the fold.

---

### 4. What's Weak

- **The "How it works" block is four steps.** A welcome offer should be one step: click, get discount applied. Step 1 literally instructs the recipient to copy a link and paste it into a browser — a pattern from 2008. This will hemorrhage clicks.
- **CTA label is wrong.** "Sign up and Shop Now" implies the user hasn't signed up yet. They have — they're receiving this email. This creates cognitive friction ("wait, did my account not save?") right at the conversion point.
- **Recommended for You is blind.** This is a first-time contact — there's no purchase history. Whatever is populating "Early Access: 2-In-1 Mini Dress" is a guess at best. A better default is a bestseller or category-based prompt, framed honestly ("Our most-loved right now").
- **App download module is filler.** Burying an app download ask in a welcome/offer email splits attention at the worst possible moment. Save it for post-purchase.
- **Step 4 mentions "if you accidentally sign out."** Signaling that signing out is a real risk that kills the offer erodes trust and makes the whole flow feel fragile.

---

### 5. Recommendations

1. **Collapse the redemption to one step.** Link the button directly to a cart or landing page that auto-applies the discount. Remove the copy-paste instruction entirely.
2. **Rewrite the CTA.** Change "Sign up and Shop Now" → "Shop Now — 15% Off Applied" or "Claim My 15% Off."
3. **Reframe the recommendation module.** Swap "Recommended for you" → "Our bestsellers" or "Start here." Don't pretend to know a new subscriber's taste.
4. **Cut or delay the app module.** Move it to a post-purchase follow-up where it's a natural next step, not an attention split.
5. **Add urgency to the CTA area.** The deadline is in body copy but not near the button. Echo "Expires May 14" directly under the CTA button.
6. **Remove the "if you sign out" caveat.** Replace with a single help-link sentence; don't surface the failure case as an instruction.

---

### 6. Bottom Line

lululemon's brand equity does a lot of heavy lifting here, but the email's conversion potential is being squandered by outdated redemption mechanics. Fix the one-click flow and the CTA label, and this email would be genuinely strong. As-is, a meaningful segment of interested subscribers will drop off at the "paste this link" instruction.

---

### 7. Subject Line Analysis

- **Subject:** `15% off: Our way of saying welcome`
- **Length:** 37 characters
- **Scores (1-10):** Clarity `8`, Curiosity `3`, Personalization `3`, Urgency `4`, Specificity `7`
- **Strengths:**
  - Offer is front-loaded and unambiguous — no guesswork for the reader
  - "Our way of saying welcome" adds a faint warmth that softens the transactional tone
- **Weaknesses:**
  - Zero curiosity gap — entire email is spoiled in the subject line
  - No personalization and no urgency signal; feels like a broadcast, not a welcome
- **Alt A:** `Welcome — here's 15% off your first order (expires May 14)`
- **Alt B:** `You're in. Now get 15% off before your first cart gets away`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — webview render; no inbox-client preheader is visible, and the email's first visible text block is the in-email body copy. Based on the visible layout, the preheader is likely the hero subhead or boilerplate.
- **Length:** N/A from render
- **Scores (1-10):** Complements subject `N/A`, Specificity `N/A`, Clarity `N/A`, Inbox-fit `2`
- **Strengths:**
  - (Cannot assess from webview render alone)
- **Weaknesses:**
  - No crafted preheader is visible in this render; if the browser/view-in-browser text is leaking, that's a wasted impression
  - The subject line already says "15% off welcome" — the preheader should add, not repeat
- **Alt A:** `Your 15% off expires May 14 — one click to apply it at checkout`
- **Alt B:** `Shop bestsellers, new arrivals, and fan favorites — all 15% off your first order`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "15% off" is a concrete number in the subject — that always outperforms vague welcome messages. The lululemon sender name is recognized and trusted. But the subject has no curiosity gap and no hint of time pressure, so I open this more out of mild interest than urgency. I'd open it, but not immediately.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** The offer is real, but the moment I hit the four-step "how it works" block and see "copy and paste this link into your browser," I lose confidence in the flow. The CTA also reads "Sign up and Shop Now" when I already signed up — that's a hesitation moment. I'd likely tab away to look for a simpler path and not return.

---

### 11. Evidence

- **Overall purpose:** Welcome email with a 15% first-order discount for new account holders.
- **Hero / primary value proposition:** Full-width athletic lifestyle image; headline "Jump in with 15% off." with supporting body copy confirming terms (full-price items, excludes bags/gift cards/The Studio). Strong visual execution.
- **Membership / benefits section:** Not present — this email is purely offer-driven, not membership-benefit-led.
- **Product discoverability / recommendation modules:** One "Recommended for you" module — "Early Access: 2-In-1 Mini Dress" with a red/coral product image. Single product, no carousel or grid. Feels thin and unanchored for a zero-history recipient.
- **Utility / secondary modules:** "Download the App" with social links (Instagram, Facebook, Twitter, Pinterest, YouTube); "Shop What's New" text link. Both are below-fold and feel like filler given the primary offer hasn't converted yet.
- **Bugs / friction / clarity issues (visible in render):**
  - "Sign up and Shop Now" CTA label is logically inconsistent with a post-signup welcome email.
  - Step 1 of the redemption flow instructs the reader to manually copy-paste a URL — visible in the rendered text.
  - Step 4 warns about accidental sign-out invalidating the offer — surfaces a failure mode as UX instruction, which reads as a red flag.
  - No visible countdown or urgency element near either CTA button despite a real deadline existing in body copy.

---

## Technical Audit

## Technical Audit — lululemon "15% off: Our way of saying welcome"

---

### 1. Technical Summary

The email has a critical broken CTA link that blocks the primary conversion action, plus five font 403s that degrade typography on clients that support web fonts. Compliance headers are unverifiable at the relay layer, and two decorative images lack alt text.

---

### 2. Link & Tracking Issues

**Critical — broken primary CTA:**
```
[FAIL 403] https://shop.lululemon.com/account/login?mode=promo-code&create=true&cpnId=WELCOME15LIAXZ4MO9ZA
```
The welcome offer redemption URL returns 403. This is the single most important link in a welcome/promo email — it is completely non-functional for recipients who click directly (bypass tracking redirect). Cause is likely a misconfigured promo code ID (`LIAXZ4MO9ZA`) or an access-controlled endpoint that requires a session cookie not present on a cold click.

**Critical — broken homepage link:**
```
[FAIL 403] https://www.lululemon.com (link text: "www.lululemon.com")
```
The bare domain in the footer also 403s. Likely a misconfigured redirect or geo-block interfering with the probe, but worth confirming in-browser from the target locale.

**Info — 31 tracking links skipped:**
All click-redirect URLs (via `e.lululemon.com` or equivalent ESP redirect domain) were not probed. Broken destination URLs under redirects would not be caught by this scan.

---

### 3. Rendering & Accessibility

**Font 403s (5 failures):**
```
[FAIL 403] https://globalstaticassets.lululemon.com/fonts/Saans-Light.woff
[FAIL 403] https://globalstaticassets.lululemon.com/fonts/Saans-Regular.woff
[FAIL 403] https://globalstaticassets.lululemon.com/fonts/Saans-Medium.woff
[FAIL 403] https://globalstaticassets.lululemon.com/fonts/Saans-SemiBold.woff
[FAIL 403] https://globalstaticassets.lululemon.com/fonts/KHGiga-Light.woff
```
All five custom fonts fail to load. The CSS stack falls back to `Helvetica Neue, sans-serif` and `Times New Roman, serif` respectively — acceptable degradation, but the brand-specific Saans and KHGiga typefaces will not render anywhere. The 403 likely indicates a missing or expired CDN signed-URL / CORS policy on the asset bucket, not a wrong filename.

**Missing alt text (3 images):**
```
SFMC_Email_Masthead_Yogotype_PureWhite_FFFFFF  — logo/masthead, no alt
SFMC_Email_Footer_Arrow-Right (×3)             — navigation arrows, no alt
```
The masthead logo should carry `alt="lululemon"`. The arrow images, if purely decorative, should have `alt=""` explicitly set (empty string, not absent) to signal decorative intent to screen readers. Currently absent `alt` attributes cause screen readers to announce the raw filename.

**Dark mode:**
CSS contains proper `color-scheme: light dark` meta and targeted selectors for Gmail and Outlook.com dark mode. No issues found in the source.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`{{`, `%%`, `[[`, or similar) visible in the truncated source. Promo code `WELCOME15LIAXZ4MO9ZA` appears hardcoded rather than personalized — consistent with a batch welcome send. No issues found.

---

### 5. Compliance

**List-Unsubscribe header — unverifiable:**
```
[WARN] List-Unsubscribe header not found
[WARN] List-Unsubscribe-Post header not found (RFC 8058)
```
Both headers are absent at the AgentMail relay capture layer. This may be a relay artifact (headers stripped in transit) rather than a true absence. However, Google and Yahoo's 2024 bulk-sender requirements mandate `List-Unsubscribe` and RFC 8058 one-click `List-Unsubscribe-Post` for senders above 5k/day. lululemon almost certainly qualifies. Needs verification against raw SMTP headers at the MTA level — if genuinely missing, this is a deliverability risk.

**SPF/DKIM/DMARC — unverifiable:**
```
[WARN] Authentication-Results header not found
```
Same relay caveat. The sending domain `e.lululemon.com` is a standard Salesforce Marketing Cloud ESP subdomain; DKIM is almost certainly configured. Confirm via MXToolbox or header inspection on a live delivered copy.

**CAN-SPAM:** Physical mailing address and unsubscribe link are standard inclusions in lululemon footer templates; not contradicted by the source fragment. No issues found based on available evidence.

---

### 6. Email-to-Site Continuity

**Primary CTA is broken (see §2)** — continuity is moot until the 403 is resolved.

**UTM parameters:** All 31 tracked links go through the ESP redirect domain, so UTM passthrough cannot be confirmed from this scan. Standard SFMC practice appends UTMs at redirect resolution time; verify in GA4 that `utm_source=email`, `utm_medium=email`, and `utm_campaign=welcome15` (or equivalent) are arriving on post-click sessions.

**Promo code in URL vs. clipboard:** The redemption flow uses a URL-embedded `cpnId` rather than a copy-paste code. If the 403 is fixed, this is a cleaner UX than requiring manual code entry — but the code must also work when entered manually at checkout for customers who screenshot the email.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Primary CTA 403 | Fix `cpnId=WELCOME15LIAXZ4MO9ZA` endpoint — confirm promo code is active and the URL is publicly accessible without a session cookie |
| P0 | Homepage link 403 | Verify `www.lululemon.com` resolves correctly from target locale; check for geo-redirect misconfiguration |
| P1 | All 5 font 403s | Audit CDN/R2 bucket policy on `globalstaticassets.lululemon.com/fonts/` — likely a CORS or signed-URL expiry issue |
| P1 | List-Unsubscribe headers | Confirm headers are present in raw MTA delivery; if stripped by relay, verify at SFMC send log level |
| P2 | Logo alt text missing | Add `alt="lululemon"` to masthead yogotype image |
| P2 | Arrow alt text missing | Add `alt=""` (empty) to the three `SFMC_Email_Footer_Arrow-Right` images |
| P3 | SPF/DKIM confirmation | Pull full headers from a delivered copy and verify `Authentication-Results` shows pass for both |
| P3 | UTM validation | Confirm GA4 is receiving correct campaign parameters from post-click sessions |
