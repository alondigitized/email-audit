---
slug: 2026-03-29-the-messi-collection
type: email
date: 2026-03-28
persona: walker
score: "5/10"
sender: adidas
subject: The Messi collection
tags: [email, score-5, sender/adidas]
---
# The Messi collection
**Score:** 5/10 · **Type:** Email audit · **2026-03-28**
## Executive summary

- A visually strong Messi-branded email that loses its identity halfway through. The hero lands well — moody Messi imagery and a clean product shot of the Samba Messi sell the collection. But the email then pivots to a Jude Bellingham sweepstakes module, fragmenting the message and undermining the singular "Messi collection" promise of the subject line. Recipients clicking for Messi get a detour through a Bellingham contest that belongs in a different send.
- Strong creative execution sabotaged by incoherent content strategy. The mixed-athlete send reduces conversion intent for both the Messi product and the Bellingham contest.

## What's working

- **Hero photography is excellent.** The dark, atmospheric shot of Messi is premium and on-brand — it commands attention and earns the subject line.
- **Samba Messi product shot pops.** The teal/coral colorway is vibrant and eye-catching. Good product presentation.
- **"BUILT FOR GREATNESS" headline** is appropriately bold and aligned with the athlete brand.
- **Top discount banner** (Save 30% with code) is well-placed and immediately actionable.
- **Layout is clean.** Full-width modules, readable type hierarchy, no visual clutter.

## What's weak

- **Split-athlete identity is the core problem.** Subject line promises "The Messi collection." The bottom third pivots to a Jude Bellingham newspaper sweepstakes. This isn't a cross-sell — it's a different campaign grafted onto this one.
- **Samba Messi copy references Jude Bellingham.** The body copy under "SAMBA MESSI" appears to name Bellingham rather than focus on the Messi shoe. This is a mismatch that will read as an error to engaged fans of either athlete.
- **No direct product CTA visible on the Samba Messi module.** The shoe is showcased beautifully but there's no visible "Shop Now" or "Buy" button anchoring the product.
- **"WIN THE JUDE NEWSPAPER" module is completely off-brief.** It's a contest for Bellingham-related editorial content — entirely disconnected from a Messi collection email. It dilutes recall and splits the reader's intent.
- **Weak scarcity/urgency signals.** Nothing drives action on the collection beyond the top discount banner.

## Recommendations

- 1. **Remove or relocate the Bellingham module.** It belongs in a Bellingham-focused send, not tacked onto a Messi collection email. If both must coexist, lead with a dual-athlete framing in the subject and hero.
- 2. **Fix the Samba Messi copy.** If it references Bellingham where it should reference Messi, correct it. The product deserves copy that reinforces the Messi narrative.
- 3. **Add a CTA button to the Samba Messi module.** Beautiful shoe with no buy button = a missed conversion.
- 4. **Sharpen the email's singular mission.** Pick one: sell the Messi collection, or promote the Bellingham contest. Not both.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **Critical** | Broken `/g/` redirect path | Fix redirect schema — align path prefix with `/o/` or correct the URL type in the ESP redirect config before resend |
- | **High** | Plain-text fallback is empty | Populate `text/plain` MIME part with stripped content; minimum viable: subject line + primary CTA URLs + unsubscribe link |
- | **High** | 7 HTTP image sources | Migrate all `http://image.link.adidas.com` and `http://click.comms.adidas.com` image references to HTTPS |
- | **Medium** | 2 images missing alt text | Add descriptive `alt=""` (empty string acceptable for decorative) or meaningful text to `dv.adidas.com/o/1c0e453b...` and the `click.comms.adidas.com` tracking pixel |
- | **Medium** | DKIM/SPF unconfirmed | Pull raw headers from a seeded inbox delivery and confirm `Authentication-Results: dkim=pass` for `us-news.comms.adidas.com` |
- | **Low** | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block to reduce parse overhead |

## Full review
## Email Review: "The Messi collection" — adidas

---

### 1. Executive Summary

A visually strong Messi-branded email that loses its identity halfway through. The hero lands well — moody Messi imagery and a clean product shot of the Samba Messi sell the collection. But the email then pivots to a Jude Bellingham sweepstakes module, fragmenting the message and undermining the singular "Messi collection" promise of the subject line. Recipients clicking for Messi get a detour through a Bellingham contest that belongs in a different send.

---

### 2. Business Impact Score: **5 / 10**

Strong creative execution sabotaged by incoherent content strategy. The mixed-athlete send reduces conversion intent for both the Messi product and the Bellingham contest.

---

### 3. What's Working

- **Hero photography is excellent.** The dark, atmospheric shot of Messi is premium and on-brand — it commands attention and earns the subject line.
- **Samba Messi product shot pops.** The teal/coral colorway is vibrant and eye-catching. Good product presentation.
- **"BUILT FOR GREATNESS" headline** is appropriately bold and aligned with the athlete brand.
- **Top discount banner** (Save 30% with code) is well-placed and immediately actionable.
- **Layout is clean.** Full-width modules, readable type hierarchy, no visual clutter.

---

### 4. What's Weak

- **Split-athlete identity is the core problem.** Subject line promises "The Messi collection." The bottom third pivots to a Jude Bellingham newspaper sweepstakes. This isn't a cross-sell — it's a different campaign grafted onto this one.
- **Samba Messi copy references Jude Bellingham.** The body copy under "SAMBA MESSI" appears to name Bellingham rather than focus on the Messi shoe. This is a mismatch that will read as an error to engaged fans of either athlete.
- **No direct product CTA visible on the Samba Messi module.** The shoe is showcased beautifully but there's no visible "Shop Now" or "Buy" button anchoring the product.
- **"WIN THE JUDE NEWSPAPER" module is completely off-brief.** It's a contest for Bellingham-related editorial content — entirely disconnected from a Messi collection email. It dilutes recall and splits the reader's intent.
- **Weak scarcity/urgency signals.** Nothing drives action on the collection beyond the top discount banner.

---

### 5. Recommendations

1. **Remove or relocate the Bellingham module.** It belongs in a Bellingham-focused send, not tacked onto a Messi collection email. If both must coexist, lead with a dual-athlete framing in the subject and hero.
2. **Fix the Samba Messi copy.** If it references Bellingham where it should reference Messi, correct it. The product deserves copy that reinforces the Messi narrative.
3. **Add a CTA button to the Samba Messi module.** Beautiful shoe with no buy button = a missed conversion.
4. **Sharpen the email's singular mission.** Pick one: sell the Messi collection, or promote the Bellingham contest. Not both.

---

### 6. Bottom Line

The creative quality is there — the photography, typography, and layout are all solid. The strategy isn't. Sending a "Messi collection" email that contains a Jude Bellingham sweepstakes erodes trust, confuses the recipient, and splits click intent. Fix the content mix before the next send.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Promote the adidas Messi collection / Samba Messi shoe |
| **Hero / primary value prop** | Strong Messi portrait; "Built for Greatness" headline — visually compelling, on-brand |
| **Membership / benefits** | None visible |
| **Product discoverability** | Samba Messi product shot is strong; no visible CTA button on the module |
| **Utility / secondary modules** | Top 30% discount banner with "Shop Now" CTA is clear and well-placed |
| **Off-brand module** | "WIN THE JUDE NEWSPAPER" — Jude Bellingham contest appears as a standalone module; completely disconnected from the Messi subject line and hero |
| **Copy mismatch** | Samba Messi section body copy appears to reference Jude Bellingham rather than Messi — misattributed narrative for a Messi shoe |
| **Bugs / visual issues** | No broken images or rendering errors visible; all images load cleanly |

---

## Technical Audit

## Technical Audit — adidas "The Messi Collection"
**From:** adidas@us-news.comms.adidas.com | **Date:** 2026-03-29

---

### 1. Technical Summary

Two hard failures detected: a broken click-redirect URL and a missing plain-text fallback. Six HTTP (non-HTTPS) image sources and one unresolved alt-text gap add rendering and deliverability risk across security-strict clients.

---

### 2. Link & Tracking Issues

**[FAIL] Malformed redirect URL — broken experience**
The redirect path uses `/g/` while the destination URL uses `/o/`, producing an unresolvable URL type error:
```
unknown url type: '/g/1c0e453b-372a-44c6-a47a-a76077af9933?txn=51079d80-2b8e-11f1-af63-b2872873faee'
Redirect target: https://dv.adidas.com/o/1c0e453b-372a-44c6-a47a-a76077af9933?...
```
This link will fail to resolve for affected recipients — any CTA pointing through this redirect is non-functional.

**[WARN] 31 tracking links skipped** — click-redirect domains not probed; destination URL health is unverified beyond the one confirmed failure above.

---

### 3. Rendering & Accessibility

**[WARN] 7 images served over HTTP** — all instances are the same asset repeated six times plus one unrelated image:
- `http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` (alt: "arrow") — 6 occurrences
- `http://click.comms.adidas.com/CI0/0102019d326a9c73-47e3b8b6-d528-4ef2-828e-6812a6bc9c8d-000000/0nQIxUmEVdHIcmJmFzSBOFzBj...` — 1 occurrence

Clients with mixed-content blocking (Gmail Android, Outlook 2016+, Apple Mail with Intelligent Tracking Prevention) will suppress these images silently.

**[WARN] 2 images missing `alt` text:**
- `https://dv.adidas.com/o/1c0e453b-372a-44c6-a47a-a76077af9933?...` — no alt attribute
- `http://click.comms.adidas.com/CI0/...0nQIxUmEVdHIcmJmFzSBOFzBj...` — no alt attribute

Both affect screen reader accessibility and image-off rendering fallback.

**[INFO] Duplicate `@font-face` declarations** — `AdihausDIN` and `AdineuePRO` are declared twice across two `<style>` blocks with slightly different `src` stacks. No functional breakage, but increases parse weight unnecessarily.

---

### 4. Personalization & Merge Tokens

No issues found. No unresolved merge tokens or exposed template syntax detected in the truncated source.

---

### 5. Compliance

**[FAIL] Plain-text fallback absent** — text/plain MIME part is 0 characters. CAN-SPAM and many ISP filtering rules expect a non-trivial plain-text alternative. A zero-length plain part increases spam scoring risk and fails accessibility requirements for some enterprise mail filters.

**[WARN] SPF/DKIM authentication status unverifiable** — `Authentication-Results` header not present in the captured message via AgentMail relay. Cannot confirm DKIM signature from `us-news.comms.adidas.com` resolved correctly. Recommend verifying via a live header capture or MX Toolbox DKIM lookup against the sending domain.

**[INFO]** `<meta name="ROBOTS" content="NOINDEX, NOFOLLOW">` and `<meta name="referrer" content="no-referrer">` present — correct for email HTML, no issue.

---

### 6. Email-to-Site Continuity

**[UNVERIFIABLE]** The broken redirect for `1c0e453b-372a-44c6-a47a-a76077af9933` prevents UTM parameter delivery to the landing page for that link. All 31 skipped tracking links have unverified UTM continuity.

No issues found with UTM parameter structure in the links that were parseable — standard `cp_tp`, `cp_cid`, `mi_cid`, `mi_mid` parameters appear consistently formatted.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **Critical** | Broken `/g/` redirect path | Fix redirect schema — align path prefix with `/o/` or correct the URL type in the ESP redirect config before resend |
| **High** | Plain-text fallback is empty | Populate `text/plain` MIME part with stripped content; minimum viable: subject line + primary CTA URLs + unsubscribe link |
| **High** | 7 HTTP image sources | Migrate all `http://image.link.adidas.com` and `http://click.comms.adidas.com` image references to HTTPS |
| **Medium** | 2 images missing alt text | Add descriptive `alt=""` (empty string acceptable for decorative) or meaningful text to `dv.adidas.com/o/1c0e453b...` and the `click.comms.adidas.com` tracking pixel |
| **Medium** | DKIM/SPF unconfirmed | Pull raw headers from a seeded inbox delivery and confirm `Authentication-Results: dkim=pass` for `us-news.comms.adidas.com` |
| **Low** | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block to reduce parse overhead |
## Recent history

- [[2026-03-29-test-mkg-us-na-u-best-gender-en-03292026the-styles-everyone-s-searching-for]] — 5.5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-nonpur-u-best-nonpurch-en-03292026everybody-wants-these-styles]] — 6/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-ecmpur-u-best-ecom-en-03292026-athe-styles-everyone-s-searching-for]] — 6.5/10 (2026-03-27)

