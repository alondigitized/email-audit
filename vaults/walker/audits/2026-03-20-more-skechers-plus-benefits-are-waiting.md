---
slug: 2026-03-20-more-skechers-plus-benefits-are-waiting
type: email
date: 2026-03-20
persona: walker
score: "5/10"
sender: SKECHERS PLUS
subject: More Skechers Plus Benefits are waiting
tags: [email, score-5, sender/skechers-plus]
---
# More Skechers Plus Benefits are waiting
**Score:** 5/10 · **Type:** Email audit · **2026-03-20**
## Executive summary

- A loyalty program onboarding/nurture email that tries to do too much. It leads with a clear Skechers Plus value proposition, then immediately pivots to product recommendations, a points earn module, a birthday offer tease, and a navigation dump — all within a single send. The membership pitch is competent but the email loses focus before the reader can act on it.
- Solid loyalty mechanics, weak execution discipline. The core message is diluted by an unfocused product grid and a footer full of competing navigation links.

## What's working

- **Clear loyalty tier structure.** The side-by-side comparison of Standard vs. Elite benefits is scannable and communicates upgrade motivation effectively.
- **Points earn module is concrete.** "Earn points when you shop" with a visible CTA gives members an immediate action tied to program value.
- **Birthday offer module** adds emotional personalization — a known loyalty driver.
- **Visual hierarchy at the top is clean.** The dark hero banner with white Skechers Plus branding and "SHOP MORE SAVE MORE" headline reads quickly.

## What's weak

- **Product grid is generic and uncontextualized.** The "We Thought You'd Like These..." section shows six shoes with no labels, prices, or reasons for the recommendations. It reads as a filler module rather than a curated pick.
- **Multiple competing CTAs.** The email contains at least five separate CTAs ("View Your Dashboard," "Shop Now," "See Your Birthday," "Shop Now" again, plus navigation links) with no clear primary action.
- **Navigation bar in the footer (Men / Women / Kids / Clothing / New Arrivals) dilutes the loyalty message** — it turns a program-focused email into a generic browse prompt.
- **Preview text is broken.** The recipient sees raw JSON schema markup (`[{ "@context": "http://schema.org/"...`) instead of a compelling preview line. This is visible in the subject/preview as shown in the brief — it's a significant first impression failure.
- **"Celebrate Your Birthday" module feels incomplete.** The tier illustration appears small and the CTA is vague — it doesn't communicate what the benefit actually is.

## Recommendations

- 1. **Fix the preview text immediately.** JSON schema leaking into the inbox preview is a deliverability and brand issue — it will suppress open rates.
- 2. **Pick one primary CTA.** If this email's job is to drive dashboard engagement (the loyalty goal), make "View Your Dashboard" the single dominant button and demote everything else.
- 3. **Add context to product recommendations.** At minimum include a product name and price. Better: tie them to loyalty ("Popular with Elite members").
- 4. **Remove or compress the navigation bar.** It adds noise without contributing to the loyalty narrative.
- 5. **Make the birthday benefit explicit.** State the actual reward (e.g., "birthday bonus points" or "free gift") — vague teases underperform.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **High** | Empty first-name merge token | Add a `DefaultValue` fallback (e.g., `"Skechers Plus Member"`) to the greeting field in the AMPscript/personalization block |
- | **High** | All images served over HTTP | Migrate all `image.emails.skechers.com` asset URLs to HTTPS; update the `ink1000.com` pixel and `cl.S10.exct.net` LiveContent URL accordingly |
- | **Medium** | Missing alt text on `49468f73...png` | Add descriptive alt text to this content image |
- | **Medium** | Unverified authentication headers | Run a seed-address test to confirm SPF/DKIM/DMARC pass before deployment |
- | **Medium** | Unverified link destinations | Spot-probe REDEEM, SHOP MORE SAVE MORE, and product tile redirect targets |
- | **Low** | Third-party open pixel (`ink1000.com`) | Confirm vendor authorization; consider consolidating to first-party ESP pixel |
- | **Low** | `o.gif` missing alt attribute | Add `alt=""` explicitly to mark as decorative |

## Full review
## Skechers Plus Benefits — Email Review

---

### 1. Executive Summary

A loyalty program onboarding/nurture email that tries to do too much. It leads with a clear Skechers Plus value proposition, then immediately pivots to product recommendations, a points earn module, a birthday offer tease, and a navigation dump — all within a single send. The membership pitch is competent but the email loses focus before the reader can act on it.

---

### 2. Business Impact Score: **5/10**

Solid loyalty mechanics, weak execution discipline. The core message is diluted by an unfocused product grid and a footer full of competing navigation links.

---

### 3. What's Working

- **Clear loyalty tier structure.** The side-by-side comparison of Standard vs. Elite benefits is scannable and communicates upgrade motivation effectively.
- **Points earn module is concrete.** "Earn points when you shop" with a visible CTA gives members an immediate action tied to program value.
- **Birthday offer module** adds emotional personalization — a known loyalty driver.
- **Visual hierarchy at the top is clean.** The dark hero banner with white Skechers Plus branding and "SHOP MORE SAVE MORE" headline reads quickly.

---

### 4. What's Weak

- **Product grid is generic and uncontextualized.** The "We Thought You'd Like These..." section shows six shoes with no labels, prices, or reasons for the recommendations. It reads as a filler module rather than a curated pick.
- **Multiple competing CTAs.** The email contains at least five separate CTAs ("View Your Dashboard," "Shop Now," "See Your Birthday," "Shop Now" again, plus navigation links) with no clear primary action.
- **Navigation bar in the footer (Men / Women / Kids / Clothing / New Arrivals) dilutes the loyalty message** — it turns a program-focused email into a generic browse prompt.
- **Preview text is broken.** The recipient sees raw JSON schema markup (`[{ "@context": "http://schema.org/"...`) instead of a compelling preview line. This is visible in the subject/preview as shown in the brief — it's a significant first impression failure.
- **"Celebrate Your Birthday" module feels incomplete.** The tier illustration appears small and the CTA is vague — it doesn't communicate what the benefit actually is.

---

### 5. Recommendations

1. **Fix the preview text immediately.** JSON schema leaking into the inbox preview is a deliverability and brand issue — it will suppress open rates.
2. **Pick one primary CTA.** If this email's job is to drive dashboard engagement (the loyalty goal), make "View Your Dashboard" the single dominant button and demote everything else.
3. **Add context to product recommendations.** At minimum include a product name and price. Better: tie them to loyalty ("Popular with Elite members").
4. **Remove or compress the navigation bar.** It adds noise without contributing to the loyalty narrative.
5. **Make the birthday benefit explicit.** State the actual reward (e.g., "birthday bonus points" or "free gift") — vague teases underperform.

---

### 6. Bottom Line

The email has the right bones — loyalty comparison, points mechanic, personalization hook — but the execution is scattered. The broken preview text alone will cost opens. Tightening to one clear action and contextualizing the product module would meaningfully improve conversion.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Loyalty nurture — communicate Skechers Plus benefits and drive member engagement |
| **Hero / primary value prop** | Dark banner: "Skechers Plus — Shop More Save More" with sub-copy about reaching the next tier. Clear and on-brand. |
| **Membership / benefits section** | Standard vs. Elite tier comparison in a two-column card layout. Benefits listed with icons. Functional and scannable. |
| **Product recommendations** | Six-shoe grid, no names or prices visible, no personalization signals shown. Generic. |
| **Utility / secondary modules** | Points earn module with "Shop Now" CTA; Birthday offer module with illustration; Men/Women/Kids/Clothing/New Arrivals nav bar; social links; unsubscribe footer. |
| **Bugs / friction** | Preview text renders raw JSON-LD markup — visible in the send metadata. No other visible rendering bugs in the email body itself. |

---

## Technical Audit

## Technical Audit: More Skechers Plus Benefits Are Waiting

**From:** SKECHERS PLUS <no-reply@emails.skechers.com>

---

### 1. Technical Summary

This Skechers Plus loyalty onboarding email passes basic structural validation but carries a failed personalization token, a systemic HTTP image-serving issue across all hosted assets, and two missing alt attributes on non-decorative images. Authentication header data is unavailable through the relay, warranting a direct deliverability check.

---

### 2. Link & Tracking Issues

All 25 outbound links route through `click.emails.skechers.com` with encrypted `?qs=` payloads — consistent with an ESP click-tracking implementation (likely Salesforce Marketing Cloud). No probing was performed on these links, so redirect destination validation is incomplete.

**Action required:** Spot-check a representative sample of tracked links (REDEEM, SHOP MORE SAVE MORE, product tiles) to confirm final destination URLs are live and correct before send.

No bare/untracked links detected.

---

### 3. Rendering & Accessibility

**HTTP image sources (systemic — 13 affected images):**
All images served from `image.emails.skechers.com` use `http://` rather than `https://`. In security-conscious email clients (Gmail, Apple Mail on iOS 15+, Outlook via cached proxy), mixed-content or non-HTTPS images may be blocked or proxied, producing broken image rendering.

Affected hosts:
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/...` — logo (`dde00662-169f-447d-b0e2-fc65f6c2290c.png`)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/...` — app store badges, footer icons, social icons (10 images)
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — open-tracking pixel (third-party domain)
- `http://cl.S10.exct.net/LiveContent.aspx?qs=...` — live content/dynamic image block

**Missing alt text (2 images):**
- `o.gif` (`ink1000.com`) — open-pixel; alt="" acceptable here, but currently absent
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — appears to be a non-decorative content image based on its link wrapper; requires descriptive alt text for screen reader compliance

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty greeting slot confirmed.** The automated check detected a rendered output of `"Hi ,"` — the subscriber first-name token resolved to an empty string. This indicates either:
- A missing fallback value on the first-name merge field (e.g., `%%=v(@firstName)=%%` with no `DefaultValue`), or
- A data hygiene issue where the contact record has a blank first name with no conditional logic to substitute a generic fallback ("Hi there," / "Hi, Skechers Plus Member,")

This is a deliverable defect visible to all recipients whose profiles lack a first name.

---

### 5. Compliance

**CAN-SPAM:** Physical mailing address and unsubscribe mechanism are expected in the footer — not verifiable from the truncated HTML provided, but consistent with prior Skechers sends. Confirm both are present in the rendered footer.

**Authentication:** `Authentication-Results` header not available via the AgentMail relay. SPF/DKIM/DMARC pass status for `emails.skechers.com` cannot be confirmed from this source. Verify via direct inbox test (MXToolbox, Mail Tester, or seed address header inspection).

**Open-tracking pixel** uses a third-party domain (`ink1000.com`) over HTTP — unusual given the primary ESP infrastructure is `emails.skechers.com`. Confirm this is an authorized vendor pixel and not an artifact of a legacy integration.

---

### 6. Email-to-Site Continuity

UTM parameters on final destination URLs cannot be confirmed without probing the tracked links. Given all links pass through `click.emails.skechers.com` with opaque encrypted payloads, UTM injection must occur at redirect resolution time within the ESP.

**Verify:** That the ESP click-redirect configuration appends UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) to all final destination URLs, including product tile links (labeled generically as "PRODUCT" × 6).

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **High** | Empty first-name merge token | Add a `DefaultValue` fallback (e.g., `"Skechers Plus Member"`) to the greeting field in the AMPscript/personalization block |
| **High** | All images served over HTTP | Migrate all `image.emails.skechers.com` asset URLs to HTTPS; update the `ink1000.com` pixel and `cl.S10.exct.net` LiveContent URL accordingly |
| **Medium** | Missing alt text on `49468f73...png` | Add descriptive alt text to this content image |
| **Medium** | Unverified authentication headers | Run a seed-address test to confirm SPF/DKIM/DMARC pass before deployment |
| **Medium** | Unverified link destinations | Spot-probe REDEEM, SHOP MORE SAVE MORE, and product tile redirect targets |
| **Low** | Third-party open pixel (`ink1000.com`) | Confirm vendor authorization; consider consolidating to first-party ESP pixel |
| **Low** | `o.gif` missing alt attribute | Add `alt=""` explicitly to mark as decorative |
## Recent history

- [[2026-03-19-complete-your-profile-to-earn-50-adiclub-points]] — 4/10 (2026-03-19)
- [[2026-03-19-made-for-match-days-and-fans-everywhere-jamaica-home-away-jerseys]] — 6/10 (2026-03-19)
- [[2026-03-19-last-call-to-use-your-20-off-welcome-offer]] — 4/10 (2026-03-18)

