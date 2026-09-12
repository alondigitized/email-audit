---
slug: 2026-09-12-about-that-extra-25-off
type: email
date: 2026-09-12
persona: esme-radical-everlane-fap6e
score: "4/10"
sender: Everlane
subject: About That Extra 25% Off…
tags: [email, score-4, sender/everlane]
---
# About That Extra 25% Off…
**Score:** 4/10 · **Type:** Email audit · **2026-09-12**
## Executive summary

- This is a plain-text-styled discount blast, and it's got a broken personalization token sitting right at the top: "Hi There, ," — an empty first-name field with a stray comma, visible to any recipient who opens it. That's a real, visible bug, not a nitpick.
- Setting that aside, the offer itself is the most concrete this brand has sent in over a week — "additional 25% off sale styles (already up to 70% off)" with a real code, EXTRA25, and a real deadline (9/14 11:59 PM PST). After a run of no-discount editorial sends (Cashmere, Somewhere/West, Top Rated, Best-Selling Denim), this is a return to a hard-discount lane. But the execution is threadbare: no hero image, no product shots, no button — just underlined text links buried in paragraphs. It reads more like a system-generated re-engagement nudge than a merchandised campaign email.
- Given the render bug and the total absence of visual merchandising, this lands low despite having the strongest offer in the recent set.

## What's working

- The offer is specific and legible: 25% off on top of up to 70% off, with a named code (EXTRA25) and a hard deadline.
- Category links (sweaters, denim) at least point somewhere more specific than the homepage.
- "This offer is available only for special customers like you" attempts a VIP/exclusivity angle, which fits a loyalty-style send.
- Footer/legal block and nav (Shop Women/Men, New Arrivals, Best-Sellers) are clean and complete.

## What's weak

- "Hi There, ," — a visibly broken merge field with a dangling comma; this is the single worst thing in the render and every recipient without a first name on file will see it.
- Zero product imagery or hero — this is the plainest, least "Everlane" looking send in the recent history; no visual hierarchy at all.
- No CTA button — the offer's only affordances are inline underlined text links, easy to skim past.
- Generic "sale styles" language with no product visible undercuts the "special customers" framing — it doesn't feel curated, it feels like leftover inventory.

## Recommendations

- 1. Fix the personalization fallback immediately — "Hi There, ," is a QA miss that should never reach production; default to "Hi there," with no trailing comma when the name field is empty.
- 2. Add a hero product image and at least one visible CTA button (e.g., "Shop the Sale") above the fold — right now there's nothing to look at.
- 3. Replace generic "sale styles" copy with 3-4 actual discounted products so the exclusivity claim has something to back it up.
- 4. Make the code and deadline visually prominent (badge/banner) instead of buried mid-paragraph.
- **Subject Alt A:** `Your Extra 25% Off Code Is Waiting`
- **Subject Alt B:** `EXTRA25: 25% Off Sale Styles, Ends Sunday`
- **Preheader Alt A:** `Stack it on top of up to 70% off — through 9/14 at 11:59 PM PST`
- **Preheader Alt B:** `Sweaters, denim, and more — before sizes sell out`

## Full review
## 1. Overview

This is a plain-text-styled discount blast, and it's got a broken personalization token sitting right at the top: "Hi There, ," — an empty first-name field with a stray comma, visible to any recipient who opens it. That's a real, visible bug, not a nitpick.

Setting that aside, the offer itself is the most concrete this brand has sent in over a week — "additional 25% off sale styles (already up to 70% off)" with a real code, EXTRA25, and a real deadline (9/14 11:59 PM PST). After a run of no-discount editorial sends (Cashmere, Somewhere/West, Top Rated, Best-Selling Denim), this is a return to a hard-discount lane. But the execution is threadbare: no hero image, no product shots, no button — just underlined text links buried in paragraphs. It reads more like a system-generated re-engagement nudge than a merchandised campaign email.

Given the render bug and the total absence of visual merchandising, this lands low despite having the strongest offer in the recent set.

## 2. What worked

- The offer is specific and legible: 25% off on top of up to 70% off, with a named code (EXTRA25) and a hard deadline.
- Category links (sweaters, denim) at least point somewhere more specific than the homepage.
- "This offer is available only for special customers like you" attempts a VIP/exclusivity angle, which fits a loyalty-style send.
- Footer/legal block and nav (Shop Women/Men, New Arrivals, Best-Sellers) are clean and complete.

## 3. What didn't

- "Hi There, ," — a visibly broken merge field with a dangling comma; this is the single worst thing in the render and every recipient without a first name on file will see it.
- Zero product imagery or hero — this is the plainest, least "Everlane" looking send in the recent history; no visual hierarchy at all.
- No CTA button — the offer's only affordances are inline underlined text links, easy to skim past.
- Generic "sale styles" language with no product visible undercuts the "special customers" framing — it doesn't feel curated, it feels like leftover inventory.

## 4. What I'd change

1. Fix the personalization fallback immediately — "Hi There, ," is a QA miss that should never reach production; default to "Hi there," with no trailing comma when the name field is empty.
2. Add a hero product image and at least one visible CTA button (e.g., "Shop the Sale") above the fold — right now there's nothing to look at.
3. Replace generic "sale styles" copy with 3-4 actual discounted products so the exclusivity claim has something to back it up.
4. Make the code and deadline visually prominent (badge/banner) instead of buried mid-paragraph.
   - **Subject Alt A:** `Your Extra 25% Off Code Is Waiting`
   - **Subject Alt B:** `EXTRA25: 25% Off Sale Styles, Ends Sunday`
   - **Preheader Alt A:** `Stack it on top of up to 70% off — through 9/14 at 11:59 PM PST`
   - **Preheader Alt B:** `Sweaters, denim, and more — before sizes sell out`

## 5. Business Impact Score (1-10)

**4/10**
- One concrete offer is visible (specific %/$ off, free-shipping, BOGO)
- No render bugs — **FALSE, excluded** (broken "Hi There, ," personalization is a visible render bug)
- Email reflects current campaign / season (deadline dated, feels current)
- Loyalty / member benefits visible if you are a member ("special customers like you" framing)

(Base 1 + 3 true signals = 4)

## 6. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** Sender display name is recognizable; Subject is concrete (specific offer); Subject is relevant to persona's focus area; Subject is under ~50 chars.
- **Rationale:** "About That Extra 25% Off…" is a recognizable, curiosity-driven subject with a real discount hook, but it reads slightly gimmicky/vague ("about that...") rather than stating the number and code outright.

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Signals counted:** Offer reduces price OR has loyalty member pricing; Offer is time-bounded with credible deadline.
- **Rationale:** The discount and deadline are real reasons to click, but there's no hero product, no CTA button, and the broken name field undermines trust before the reader even gets to the offer.

## 8. Subject

- **Subject:** `About That Extra 25% Off…`
- **Length:** 26
- **Scores (1-10):** Clarity `5`, Curiosity `6`, Personalization `2`, Urgency `4`, Specificity `4`

## 9. Preview

- **Preview:** (none / leaking junk)
- **Length:** 0
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

## 1. Technical Summary
Email is built on Klaviyo's MJML-based template system with standard email-client CSS resets in place; automated QA reports a 38% pass rate driven by two broken tracked links and missing authentication/unsubscribe headers.

## 2. Link & Tracking Issues
- **Broken redirect — Logo link**: `https://trk.send.everlane.com/l/01M2BSFEFF0FM4ZFKKB3H6EASG_0` resolves to an invalid target: `/pages/womens?_kx=...&bxid=...&cm_flow_i...` — QA flags "unknown url type," indicating the underlying URL is malformed or improperly encoded/truncated before the redirect target.
- **Broken redirect — "Shop Men" CTA**: `https://trk.send.everlane.com/l/01M2BSFEFF0FM4ZFKKB3H6EASG_7` has the same failure mode, targeting `/collections/shop-all-mens-clothing?_kx=...&bxid=...`.
- Both broken links use Klaviyo `_kx` and `bxid` tracking params — the tracking parameters themselves are present and well-formed; the failure is in the underlying destination path resolution, not the tracking layer.
- Tracking pixel present: `https://trk.send.everlane.com/o/01M2BSFEFF0FM4ZFKKB3H6EASG` (open tracking beacon) — loads via `<img>` but is missing `alt` text (see Section 3).
- 12 material links were probed, 9 skipped by design (footer/utility/social deprioritized) — not a defect, but means link coverage on this pass is partial.

## 3. Rendering & Accessibility
- **Missing alt attribute**: the open-tracking pixel `<img src="https://trk.send.everlane.com/o/01M2BSFEFF0FM4ZFKKB3H6EASG">` has no `alt` text. For a 1x1 tracking pixel this has negligible visual impact but will register as an accessibility/lint failure in automated scans; recommend `alt=""` to explicitly mark it decorative.
- Outlook conditional comments (`<!--[if mso]>`, `<!--[if lte mso 11]>`) and `mso-*` properties are correctly present for Outlook desktop rendering fallback.
- Responsive breakpoints defined at `max-width: 480px` for mobile type scaling (h1–h4) and layout stacking (`.kl-column`, `.kl-row.colstack`) — structurally sound, no issues found in the visible source.
- `<title>` tag is empty (`<title> </title>`) — will show as a blank tab/preview title in webmail clients that render it.

## 4. Personalization & Merge Tokens
No unresolved merge tags (e.g. `{{ }}`, `*|...|*`) are present in the truncated source. No issues found.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe header not found**: QA notes this may be a relay artifact ("may not be captured by AgentMail relay") rather than a confirmed absence — flag as unverified, not confirmed missing. Recommend checking raw headers at the SMTP/MTA level, not just the relayed copy.
- **List-Unsubscribe-Post header not found**: same caveat — if genuinely absent, one-click unsubscribe (RFC 8058) is not supported, which is a Gmail/Yahoo bulk-sender requirement as of their 2024 policies.
- **Authentication-Results header not found**: SPF/DKIM/DMARC status cannot be confirmed from this capture. This is a relay visibility gap, not evidence of an actual auth failure — needs direct verification against Everlane's/Klaviyo's sending domain headers.
- In-body unsubscribe link: QA confirms "an unsubscribe link is always included" in probing scope, but it was among the 9 skipped/deprioritized links, so its destination was not validated in this pass.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
- Links use Klaviyo-native tracking params (`_kx`, `bxid`, `cm_flow_i...`) rather than standard `utm_*` parameters — this is expected for Klaviyo-sent campaigns and not itself a defect, but means GA/UTM-based attribution won't pick these up unless Klaviyo's params are separately mapped.
- Cannot confirm landing page alignment for `/pages/womens` or `/collections/shop-all-mens-clothing` since both associated redirects are broken (Section 2) — this blocks any continuity check for those two destinations.

## 7. Recommendations
1. Fix the two broken tracked redirects (`_0` logo link, `_7` "Shop Men" link) — inspect the Klaviyo campaign's raw destination URLs for malformed encoding around the `_kx`/`bxid` query string before it hits the redirect resolver.
2. Add `alt=""` to the tracking pixel image to pass accessibility lint checks.
3. Populate the `<title>` tag with a non-empty value.
4. Independently verify `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` directly against the raw SMTP headers from the sending MTA (not the AgentMail relay copy) to confirm whether these are true gaps or capture artifacts.
5. If UTM-based analytics are needed downstream, confirm whether Klaviyo's `_kx`/`bxid` params are being mapped to GA/site analytics, or add `utm_*` params via Klaviyo's URL builder.
6. Re-run full link probing (all 12 material + skipped footer/social links) to validate unsubscribe and remaining destination URLs not covered in this pass.
## Recent history

- [[2026-08-19-don-t-miss-your-exclusive-access]] — 5/10 (2026-08-19)
- [[2026-08-18-way-high-denim-now-way-lower-price]] — 5/10 (2026-08-18)
- [[2026-08-17-forget-sale-try-better-prices]] — 5/10 (2026-08-17)

