---
slug: 2026-05-20-the-memorial-day-sale-is-calling
type: email
date: 2026-05-20
persona: lila-hearth-potterybarn-fap6e
score: "8/10"
sender: Pottery Barn Sale
subject: The Memorial Day Sale is calling ☎️
tags: [email, score-8, sender/pottery-barn-sale]
---
# The Memorial Day Sale is calling ☎️
**Score:** 8/10 · **Type:** Email audit · **2026-05-20**
## Full review
## 5. Business Impact Score (1-10)

**8/10**

- ✅ Sender is a brand you recognize / are subscribed to
- ✅ One concrete offer is visible (Extra 20% off select styles + up to 60% off)
- ✅ Primary CTA is unambiguous ("SHOP EXTRA 20% OFF" — clear button, clear copy)
- ✅ No render bugs — clean render throughout
- ✅ Email reflects current campaign / season (Memorial Day, May 20)
- ✅ Loyalty / member benefits visible ("Earn 10% Back in Rewards")
- ✅ Offer feels honest ("select styles" disclosed upfront in hero)
- ✅ Visual hierarchy is clear — hero lands first (but weakened by dense grid below)
- ❌ Subject or hero copy explicitly references your persona's focus area — "calling" is a metaphor, no category focus
- ❌ Demographic signals match persona — generic aspirational imagery, no targeted modeling

---

## 6. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** Sender display name is recognizable ("Pottery Barn Sale"); subject is relevant to persona's focus area (home goods shopper, Memorial Day sale); subject is under ~50 chars (34 chars); no spam signals (one emoji, no ALL CAPS, no stacked exclamations).
- **Rationale:** The phone-emoji hook is the freshest subject in this entire campaign run, and the sender is immediately recognizable. But four straight negative signals — no specific offer in the subject, probable preview-text junk (not visible in render), zero personalization hint, and this being the tenth near-identical promo in five days — cap the open pull hard.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** Hero offer is visible without scrolling on mobile; primary CTA is in the focus area (home goods); offer reduces price (20% off + up to 60% off); one specific product hero linked (Recommended section — Capitan Platform Bed, outdoor chairs, curtain rods with prices); brand voice is consistent and trusted; no friction (no "view in browser" gate, clean load).
- **Rationale:** The "Recommended Just for You" section is the strongest click driver in this email — named products with prices are the closest this run has come to a direct reason to tap. What keeps the score from climbing higher: no time-bound deadline pulls the trigger, the recs require significant scrolling to reach, and the generic category grid above them dilutes intent.

---

## 8. Subject

- **Subject:** `The Memorial Day Sale is calling ☎️`
- **Length:** 34 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `1`, Urgency `4`, Specificity `3`

---

## 9. Preview

- **Preview:** `(not visible in render — likely leaking "view in browser" or boilerplate)`
- **Length:** unknown
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`

---

## Technical Audit

## Technical Audit — Pottery Barn "Memorial Day Sale" Email

---

### 1. Technical Summary

Two broken links produce hard 403 errors, a PHP `header()` code block was leaked into a `<style>` tag, 40+ images carry no alt text, three image sources use unencrypted HTTP, and both RFC 8058 one-click unsubscribe headers are absent from the captured message.

---

### 2. Link & Tracking Issues

**FAIL — Credit card CTA returns 403**
`https://clickcp.potterybarn.com/c/da01b407-b21c-4618-a71b-f83bef0dd682?brandCode=POTTERYBARNCB&marketingChannelCode=APPLYANDBUY&...`
The Apply-and-Buy / The Key credit card banner link is dead. Any subscriber clicking this CTA hits a 403 immediately.

**FAIL — Cross-brand spacer asset returns 403**
`http://edm.westelm.com/we/evergreen/spacer_0.gif`
A West Elm domain is supplying a spacer gif inside a Pottery Barn send. The asset 403s and also uses plain HTTP (see §3).

**INFO — 24 click-redirect links unverified**
All go through `click.e.potterybarn.com`. Destination health is unknown; only the two above were directly probeable.

---

### 3. Rendering & Accessibility

**HIGH — PHP code literal inside `<style>` block**
```
header('Content-Type: image/jpeg');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
```
Server-side PHP was never executed — it was passed through as raw text into the CSS block. Email clients treat it as malformed CSS and ignore it, but it reveals template engine misconfiguration and inflates message size.

**HIGH — 40+ images missing `alt` text**
Includes every banner slice (`slices_01.jpg` – `slices_14.jpg` for both the hero and footer rows), all product images (curtain rod, sheet set, bed frame, mattress, outdoor sofa/chair), the footer credit card banner (`Foot_NonMem_PB.jpg`), the Key CC legacy banner slice (`slices_02.jpg`), and three tracking pixels. Images-off rendering produces a content-free email.

**MEDIUM — Three image sources served over HTTP**
- `http://edm.westelm.com/we/evergreen/spacer_0.gif`
- `http://edm.potterybarn.com/pb/thekey/CC_Banner/PB/Foot_NonMem_PB.jpg`
- `http://edm.potterybarn.com/pb/2022/0311_Key_CC_Email_BrandBanner/slices_02.jpg`

Gmail and Apple Mail proxy/block mixed-content images; these will likely not render for a significant portion of recipients.

**MEDIUM — Open-tracking pixel uses HTTP**
`http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true&sv_sveme=...`
HTTP-only pixel will be blocked or proxied by most modern mail clients, making open-rate data unreliable.

**LOW — `<title>` is empty**
`<title></title>` — tab/preview label is blank. Some accessibility tooling and screen readers surface this.

**LOW — `maximum-scale=1` in viewport meta**
Prevents user-initiated zoom on mobile; fails WCAG 1.4.4 (Resize Text).

---

### 4. Personalization & Merge Tokens

No unfired merge tokens detected in the visible HTML. The persona inbox address (`lila-hearth-potterybarn-fap6e@etell.app`) is correctly bound into the open-pixel and coreemail suppression URL — no raw `%%TOKEN%%` artifacts present.

---

### 5. Compliance

**WARN — `List-Unsubscribe` header absent**
Not captured by the AgentMail relay. CAN-SPAM does not mandate this header, but Gmail and Yahoo enforced it for bulk senders (≥5k/day) starting February 2024. Its absence risks inbox demotion or bulk-folder routing for those providers.

**WARN — `List-Unsubscribe-Post` (RFC 8058) absent**
One-click unsubscribe is required by Gmail/Yahoo bulk sender policy. Without it, Gmail's native "Unsubscribe" button falls back to a mailto: or web redirect, increasing friction and complaint risk.

**WARN — `Authentication-Results` header not captured**
SPF/DKIM/DMARC pass/fail status cannot be confirmed from this relay capture. Recommend verifying directly against a received copy or via MXToolbox.

**INFO — `<meta name="referrer" content="no-referrer" />`**
Strips the HTTP Referer header on click-throughs. If potterybarn.com analytics rely on document.referrer rather than UTM params alone, session attribution will break for any link not routed through the click-tracking redirect.

---

### 6. Email-to-Site Continuity

**The `no-referrer` policy** (noted above) is the primary continuity risk. All 24 tracked links pass through `click.e.potterybarn.com`, which should append UTM params before the final redirect — verify that the redirect chain preserves `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` on arrival at `potterybarn.com`.

The dead credit card CTA (`clickcp.potterybarn.com`, 403) is a complete conversion break for that specific flow.

**Plain-text version is 70% URLs** (9,742 of 13,901 characters). This indicates the plain-text alt is auto-generated from raw HTML rather than a curated version, which both harms deliverability scoring and produces an unusable fallback for plain-text mail clients.

---

### 7. Recommendations

| Priority | Action |
|----------|--------|
| P0 | Fix or redirect the dead credit card CTA (`clickcp.potterybarn.com` → 403) before send. |
| P0 | Remove PHP `header()` calls from the `<style>` block; fix the template that allowed server-side code to escape into rendered HTML. |
| P1 | Replace all three HTTP image sources with HTTPS equivalents; replace the West Elm cross-domain spacer with a Pottery Barn-owned asset. |
| P1 | Add `List-Unsubscribe` and `List-Unsubscribe-Post` headers to satisfy Gmail/Yahoo bulk sender requirements. |
| P1 | Add descriptive `alt` text to all 40+ images, prioritizing the hero banner slices and product images. |
| P2 | Upgrade the open-tracking pixel to HTTPS (`svopn.potterybarn.com`). |
| P2 | Replace auto-generated plain-text with a curated version to reduce the URL density below 30% and improve deliverability. |
| P2 | Remove `maximum-scale=1` from the viewport meta to restore mobile zoom accessibility. |
| P3 | Populate `<title>` with a descriptive string. |
| P3 | Confirm SPF/DKIM/DMARC pass on a live received header before deployment. |
## Recent history

- [[2026-05-19-don-t-forget-your-extra-20-off-pool-party-prep-storage-umbrellas-more]] — 9/10 (2026-05-19)
- [[2026-05-19-rsvp-for-free-design-appointments]] — 9/10 (2026-05-19)
- [[2026-05-19-our-top-memorial-day-picks-up-to-60-off]] — 9/10 (2026-05-19)

