---
slug: 2026-07-10-100s-of-new-sale-styles-style-a-beautiful-dining-table--felix-plinth-home-furniture-fap6e
type: email
date: 2026-07-10
persona: felix-plinth-home-furniture-fap6e
score: "7/10"
sender: Pottery Barn
subject: 100s of NEW sale styles + Style a beautiful dining table
tags: [email, score-7, sender/pottery-barn]
---
# 100s of NEW sale styles + Style a beautiful dining table
**Score:** 7/10 · **Type:** Email audit · **2026-07-10**
## Full review
## 5. Business Impact Score (1-10)

**7/10**

- Subject/hero copy explicitly references my focus area (dining table = two renovation dining rooms)
- Sender is recognized and I'm subscribed
- Primary CTA unambiguous (numbered editorial categories are clear entry points)
- Visual hierarchy is clear — numbered guide creates an obvious reading path
- No render bugs visible
- Reflects current campaign/season (Summer Sale)
- Offer feels honest — editorial framing isn't a bait-and-switch

*FALSE: No concrete %/$ off in the hero. Demographic signals lean slightly feminine-coded aesthetic for a 36M buyer.*

---

## 6. Open Likelihood (persona-grounded)

- **Score:** 5/10
- **Signals counted:** Sender display name recognized; subject is concrete in the dining table half; subject is relevant to my renovation focus; no spam signals (no ALL CAPS stacking, no triple exclamation)
- **Rationale:** The dining table half of the subject is genuinely relevant to me right now, but it's buried after the vague sale claim and the subject runs to 55 characters — already trimmed on mobile before "Style a beautiful dining table" fully renders. And at email sixteen in ten days, the credibility cost of that cadence hits the open rate hard before the content even gets a chance.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** 6/10
- **Signals counted:** Hero content visible without scrolling; CTA is in my category (dining/home furnishing); sale pricing implied via Summer Sale framing; brand voice is consistent and trusted; no friction — email renders clean with no dead zones
- **Rationale:** If I open, the numbered editorial guide gives me five distinct reasons to click through, all renovation-relevant. What pulls me back is that no single CTA stands above the rest — it's five equal-weight categories plus a product grid, and the choice paralysis is real. Article's new-arrivals send last week had one hero product that gave me something specific to click; this gives me five OK options and no clear winner.

---

## 8. Subject

- **Subject:** `100s of NEW sale styles + Style a beautiful dining table`
- **Length:** 55 characters
- **Scores (1-10):** Clarity `4`, Curiosity `5`, Personalization `2`, Urgency `3`, Specificity `5`

---

## 9. Preview

- **Preview:** `(not clearly visible in render — likely first copy block from dining table guide intro)`
- **Length:** unknown
- **Scores (1-10):** Complements subject `4`, Specificity `4`, Clarity `4`, Inbox-fit `4`

---

## Technical Audit

## Technical Audit — Pottery Barn Email (2026-07-10)

**From:** `PotteryBarn@e.potterybarn.com` | **Subject:** 100s of NEW sale styles + Style a beautiful dining table

---

### 1. Technical Summary

One confirmed broken link (403) will silently dead-end a click path. Three HTTP image sources risk blocking in modern clients, and 55+ images lack alt text, causing a complete content blackout when images are disabled.

---

### 2. Link & Tracking Issues

**[FAIL] Broken link — 403 response**
The Pottery Barn Key credit card apply-and-buy banner resolves to a 403:
```
https://clickcp.potterybarn.com/c/da01b407-b21c-4618-a71b-f83bef0dd682
  ?brandCode=POTTERYBARNCB&marketingChannelCode=APPLYANDBUY
  &external_id=PB_Email_MemberBanner&cm_ite=PB_header_nonmember
```
This is the header CTA for non-members. The token `cp_tp=v3.eJy...` appears to be a signed/encrypted payload — likely expired or environment-mismatch at send time.

**[INFO] 23 tracking/redirect links skipped** — click.e.potterybarn.com redirect chain not probed; cannot confirm final destination health for those CTAs.

---

### 3. Rendering & Accessibility

**HTTP image sources (3 instances) — will be blocked by Outlook, iOS Mail with "load images" off, and any client enforcing mixed-content policy:**

| Filename | HTTP src |
|---|---|
| `spacer_0.gif` | `http://edm.westelm.com/we/evergreen/spacer_0.gif` |
| `Foot_NonMem_PB.jpg` | `http://edm.potterybarn.com/pb/thekey/CC_Banner/PB/Foot_NonMem_PB.jpg` |
| `slices_02.jpg` | `http://edm.potterybarn.com/pb/2022/0311_Key_CC_Email_BrandBanner/slices_02.jpg` |

Note: `spacer_0.gif` is served from `westelm.com` — a cross-brand asset reference that could break independently of PB infrastructure.

**Open-tracking pixel uses HTTP:**
```
http://svopn.potterybarn.com/?sv_cid=0053_00597&sv_emopen=true
```
Open-rate tracking will be undercounted on any client blocking mixed content.

**55 images missing `alt` text** — the email is effectively blank for screen reader users and image-blocking environments. High-priority images without alt:
- `F26_TOP_SummerSalePartC_NoUrgency.jpg` — hero banner
- `F26_Bottom_NewArrivals.jpg` — secondary promo
- `S26_Bottom_UpTo60OffOutdoor.jpg` — sale CTA
- All 20 `slices_01–20.jpg` (tablescaping checklist section)
- All 18 footer `slices_01–18.jpg`

**PHP header directives injected into CSS block:**
```html
<style>
  ...
  header('Content-Type: image/jpeg');
  header("Cache-Control: no-store, no-cache ...");
  header("Pragma: no-cache");
</style>
```
Server-side PHP `header()` calls appear verbatim inside a `<style>` tag. These are inert in the rendered email but indicate a template assembly bug — a dynamic image-serving snippet was pasted into the wrong block. This is a build/QA process failure.

**`<title>` is empty** — minor; some clients display the title in tab/preview UI.

**`maximum-scale=1` in viewport meta** — prevents user zoom on mobile, an accessibility regression.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens detected in the truncated source (e.g., no `{{first_name}}` or `%%FIRST_NAME%%` literals exposed). The recipient address `lila-hearth-potterybarn-fap6e@etell.app` appears correctly substituted in the open-pixel and `coreemail.html` beacon URLs. No issues found in visible portion.

---

### 5. Compliance

**[WARN] `List-Unsubscribe` header not captured** — the QA relay did not surface this header. If absent at the MTA level, Gmail and Yahoo will suppress the native unsubscribe UI (required for bulk senders under Gmail/Yahoo 2024 policy). Needs verification against raw SMTP headers, not just relay capture.

**[WARN] `List-Unsubscribe-Post` (RFC 8058) not captured** — one-click unsubscribe (required for Gmail bulk sender compliance) cannot be confirmed. Same caveat: may be present at MTA and dropped by relay.

**[WARN] `Authentication-Results` header not found** — SPF/DKIM/DMARC pass status unknown via this capture path. Sending domain is `e.potterybarn.com`; authentication should be verifiable via direct header inspection.

**Plain-text part is 73% URLs** (`11,117 / 15,305 chars`) — spam filters (SpamAssassin `URI_ONLY`, Postmark scoring) penalize text parts that are almost entirely link strings. The plain-text alternative should contain human-readable copy mirroring the HTML content.

**CAN-SPAM physical address** — not verifiable from truncated HTML, but standard for PB; assume present in footer.

---

### 6. Email-to-Site Continuity

UTM parameters are embedded inside the `click.e.potterybarn.com` redirect chain and are not directly visible in the HTML source. The 403 on the Key credit card CTA (`cm_ite=PB_header_nonmember`) means that click path produces zero conversion and zero UTM attribution. No other landing page issues confirmed without probing the 23 skipped redirect chains.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | 403 on Key credit card CTA | Regenerate or re-sign the `cp_tp` payload; retest `clickcp.potterybarn.com` link before resend |
| **P0** | PHP `header()` calls in `<style>` block | Remove server-side code fragment from CSS; audit template assembly pipeline for similar bleed-through |
| **P1** | 3 HTTP image sources | Migrate `spacer_0.gif`, `Foot_NonMem_PB.jpg`, `slices_02.jpg` to HTTPS; replace `westelm.com` asset with PB-hosted copy |
| **P1** | HTTP open-tracking pixel | Update `svopn.potterybarn.com` beacon to HTTPS |
| **P1** | `List-Unsubscribe` / `List-Unsubscribe-Post` | Verify headers at MTA; add if absent — required for Gmail/Yahoo bulk sender compliance |
| **P2** | 55 images missing alt text | Add descriptive alt on hero/promo images; use `alt=""` on decorative spacers and slices |
| **P2** | Plain-text part URL density | Replace link-only plain text with readable copy; keeps spam score down |
| **P3** | `maximum-scale=1` in viewport | Remove or raise to `5` to restore user zoom on mobile |
| **P3** | Empty `<title>` | Add a descriptive title matching the subject line |
## Recent history

- [[2026-07-10-want-exclusive-sneak-peeks-and-sale-alerts--felix-plinth-home-furniture-fap6e]] — 5/10 (2026-07-10)
- [[2026-07-10-the-lighting-edit-sculptural-statement-glows--felix-plinth-home-furniture-fap6e]] — 6/10 (2026-07-10)
- [[2026-07-10-get-bestselling-faves-in-just-a-few-days--felix-plinth-home-furniture-fap6e]] — 7/10 (2026-07-10)

