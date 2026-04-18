---
slug: 2026-04-11-earn-50-points-for-completing-your-profile
type: email
date: 2026-04-11
persona: walker
score: "3/10"
sender: adidas
subject: Earn 50 points for completing your profile
tags: [email, score-3, sender/adidas]
---
# Earn 50 points for completing your profile
**Score:** 3/10 · **Type:** Email audit · **2026-04-11**
## Executive summary

- A critically broken email. The headline renders as garbled Unicode garbage (`LETÂ€™S GET TO KNOW EACH OTHER`), and the body copy repeats the same corruption (`youâ€™ll get 50 adiClub points. Whatâ€™s not to love?`). Every recipient sees mangled text in the two most important elements: the headline and the value proposition. The offer itself — 50 points for profile completion — is a solid, low-friction engagement tactic, but this send is effectively wasted.
- The fundamental message is not legible as intended. Even engaged adiClub members will disengage or lose trust.

## What's working

- **Hero image** is visually strong — diverse, energetic, on-brand for adidas lifestyle.
- **adiClub logo** renders cleanly in the top-right corner of the hero, reinforcing the loyalty program context.
- **Offer clarity** (beneath the corruption): the 50-point incentive and the reason (profile completion) are at least deducible from the broken copy.
- **Social icons** (Instagram, YouTube, X, Pinterest) render correctly.
- **Footer** — Privacy Statement, Support, My Account, Unsubscribe — is clean and compliant.

## What's weak

- **Headline encoding failure** — `LETÂ€™S GET TO KNOW EACH OTHER` is a hard stop. This is the first thing a reader sees after the hero image.
- **Body copy encoding failure** — `youâ€™ll` and `Whatâ€™s` repeat the same broken rendering mid-sentence, degrading trust.
- **No CTA button** — the entire purpose of the email is to drive a profile completion click. There is no visible button, link, or call-to-action of any kind in the email body. The user has nowhere to go.
- **Salutation is empty** — "Hello," with no name. Either personalization failed silently or the email was sent without it.
- **Email preview text** — the preheader renders as a raw tracking URL string (`adidas https://click.link.adidas.com/?qs=eyJ...`), which appears in inbox previews and destroys the first impression before the email is even opened.
- **Sparse layout** — after the hero, there's a text block and then immediately social icons. No visual break, no product recommendation, no supporting imagery to reinforce the loyalty offer.

## Recommendations

- 1. **Fix encoding immediately** — smart quotes (`'`) are rendering as multi-byte UTF-8 sequences. Audit the template's character encoding end-to-end before any resend.
- 2. **Add a CTA button** — "Complete My Profile" should be a high-contrast button placed directly under the introductory copy. This email has no conversion mechanism.
- 3. **Fix the preheader** — the preview text must be set to a human-readable summary (e.g., "Complete your profile and earn 50 adiClub points."), not a tracking URL.
- 4. **Resolve personalization** — if first-name merge is available in the loyalty database, use it. If not, replace "Hello," with "Hi there," rather than leaving a dangling comma.
- 5. **Consider a resend** — given the encoding failure, a corrected resend to the full list is warranted. The offer is legitimate and the segment (incomplete profiles) is high-value.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Staging URL in production (`image.staging.link.adidas.com`) | Replace with production CDN host before any resend |
- | P0 | Empty merge token (`"Hi ,"`) | Add a default fallback (e.g., `"Hi there"`) to the personalization block; audit suppression list for profiles with blank first-name fields |
- | P1 | 8 font files returning 403 | Restore S3 bucket public-read policy for the `/adidas-adl/foundation/dist/adidas/assets/fonts/` path, or migrate font hosting to a CDN with confirmed availability |
- | P1 | Disclaimer link returning 403 | Validate the AppsFlyer + cm_mmc combined URL construction; test the decorated URL independently before send |
- | P1 | 3 images on `http://` | Update all `image.link.adidas.com` asset references to `https://` |
- | P2 | Missing `alt` text on 3 images | Add descriptive alt values; use `alt=""` for purely decorative assets |
- | P2 | Plain-text version is 91% URLs | Rewrite plain-text alternative with human-readable content; URLs should be inline, not replacing body copy |
- | P2 | SPF/DKIM not confirmed | Confirm `us-news.adidas.com` has valid DKIM record and DMARC alignment; retrieve full headers from a seed inbox send |
- | P3 | `<meta charset>` missing `http-equiv` | Fix to `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` |
- | P3 | Dead CSS (`appleLinks-white` without `.`, duplicate `.f26-l38_3_2d`) | Clean up template CSS to remove dead rules |

## Full review
## adidas adiClub Profile Completion Email Review

---

### 1. Executive Summary

A critically broken email. The headline renders as garbled Unicode garbage (`LETÂ€™S GET TO KNOW EACH OTHER`), and the body copy repeats the same corruption (`youâ€™ll get 50 adiClub points. Whatâ€™s not to love?`). Every recipient sees mangled text in the two most important elements: the headline and the value proposition. The offer itself — 50 points for profile completion — is a solid, low-friction engagement tactic, but this send is effectively wasted.

---

### 2. Business Impact Score: **3 / 10**

The fundamental message is not legible as intended. Even engaged adiClub members will disengage or lose trust.

---

### 3. What's Working

- **Hero image** is visually strong — diverse, energetic, on-brand for adidas lifestyle.
- **adiClub logo** renders cleanly in the top-right corner of the hero, reinforcing the loyalty program context.
- **Offer clarity** (beneath the corruption): the 50-point incentive and the reason (profile completion) are at least deducible from the broken copy.
- **Social icons** (Instagram, YouTube, X, Pinterest) render correctly.
- **Footer** — Privacy Statement, Support, My Account, Unsubscribe — is clean and compliant.

---

### 4. What's Weak

- **Headline encoding failure** — `LETÂ€™S GET TO KNOW EACH OTHER` is a hard stop. This is the first thing a reader sees after the hero image.
- **Body copy encoding failure** — `youâ€™ll` and `Whatâ€™s` repeat the same broken rendering mid-sentence, degrading trust.
- **No CTA button** — the entire purpose of the email is to drive a profile completion click. There is no visible button, link, or call-to-action of any kind in the email body. The user has nowhere to go.
- **Salutation is empty** — "Hello," with no name. Either personalization failed silently or the email was sent without it.
- **Email preview text** — the preheader renders as a raw tracking URL string (`adidas https://click.link.adidas.com/?qs=eyJ...`), which appears in inbox previews and destroys the first impression before the email is even opened.
- **Sparse layout** — after the hero, there's a text block and then immediately social icons. No visual break, no product recommendation, no supporting imagery to reinforce the loyalty offer.

---

### 5. Recommendations

1. **Fix encoding immediately** — smart quotes (`'`) are rendering as multi-byte UTF-8 sequences. Audit the template's character encoding end-to-end before any resend.
2. **Add a CTA button** — "Complete My Profile" should be a high-contrast button placed directly under the introductory copy. This email has no conversion mechanism.
3. **Fix the preheader** — the preview text must be set to a human-readable summary (e.g., "Complete your profile and earn 50 adiClub points."), not a tracking URL.
4. **Resolve personalization** — if first-name merge is available in the loyalty database, use it. If not, replace "Hello," with "Hi there," rather than leaving a dangling comma.
5. **Consider a resend** — given the encoding failure, a corrected resend to the full list is warranted. The offer is legitimate and the segment (incomplete profiles) is high-value.

---

### 6. Bottom Line

A strategically sound lifecycle email — profile completion + points incentive is a proven engagement play — completely undermined by an encoding bug and a missing CTA. Nothing in this email asks the recipient to do anything, and the text they read is broken. Resend required.

---

### 7. Evidence

| Module | What's Visible |
|---|---|
| **Overall purpose** | Drive adiClub profile completions via a 50-point incentive |
| **Hero / primary value prop** | Strong lifestyle photo with adiClub branding; value prop broken by encoding error in headline |
| **Membership / benefits** | adiClub mentioned in hero logo and body copy; no dedicated benefits module or tier visualization |
| **Product discoverability** | None — no product tiles, recommendations, or category links |
| **Utility / secondary modules** | Social follow icons (4 platforms), standard footer with legal/account links |
| **Bugs / friction / clarity** | (1) Headline: `LETÂ€™S GET TO KNOW EACH OTHER` — encoding broken. (2) Body: `youâ€™ll`, `Whatâ€™s` — same corruption. (3) Preheader shows raw tracking URL. (4) "Hello," — no name rendered. (5) No CTA button present anywhere in the email body. |

---

## Technical Audit

## Technical Audit — adidas "Earn 50 points" Profile Completion Email

---

### 1. Technical Summary

The email has a 25% QA pass rate driven by 8 broken font asset URLs, a staging-environment image URL in production, HTTP (non-HTTPS) image sources, an unfired merge token, and unverifiable SPF/DKIM authentication. Several issues are breakage-level, not warnings.

---

### 2. Link & Tracking Issues

**FAIL — 8 font files returning 403**
All custom typefaces (AdihausDIN and adineuePRO) are unreachable. The S3 bucket is returning Forbidden, meaning the bucket policy no longer allows public reads. Affected:
```
https://s3-eu-west-1.amazonaws.com/adidas-adl/foundation/dist/adidas/assets/fonts/adidas/AdihausDIN-Regular.woff2
https://s3-eu-west-1.amazonaws.com/adidas-adl/foundation/dist/adidas/assets/fonts/adidas/AdihausDIN-Regular.ttf
https://s3-eu-west-1.amazonaws.com/adidas-adl/foundation/dist/adidas/assets/fonts/adidas/AdihausDIN-Bold.woff2
https://s3-eu-west-1.amazonaws.com/adidas-adl/foundation/dist/adidas/assets/fonts/adidas/AdihausDIN-Bold.ttf
https://s3-eu-west-1.amazonaws.com/adidas-adl/foundation/dist/adidas/assets/fonts/adidas/adineuePRO-Regular.woff2
https://s3-eu-west-1.amazonaws.com/adidas-adl/foundation/dist/adidas/assets/fonts/adidas/adineuePRO-Regular.woff
https://s3-eu-west-1.amazonaws.com/adidas-adl/foundation/dist/adidas/assets/fonts/adidas/adineuePRO-Bold.woff2
https://s3-eu-west-1.amazonaws.com/adidas-adl/foundation/dist/adidas/assets/fonts/adidas/adineuePRO-Bold.woff
```
Fallback system fonts (Arial is present in `.appleLinks`) will render instead, but this affects all clients that support web fonts (Apple Mail, newer Gmail).

**FAIL — Disclaimer/footer link returning 403**
The homepage link embedded in the footer disclaimer also 403s:
```
https://www.adidas.com/us?cm_mmc=AdiEmail_PCC-_-None-_-Profile_Completion...&pid=sfmc&c=adidas-NA-eCom-Email-PCC-...&af_channel=Email_Universal_Link
```
This is a decorated URL combining Adobe Analytics `cm_mmc` params and AppsFlyer deep-link params (`is_retargeting=true`, `af_reengagement_window=30d`). The 403 may indicate the URL construction is malformed or that AppsFlyer URL signing is rejecting the request. Any click on the disclaimer resolves to an error page.

**INFO — 26 tracking links not probed**
Click-redirect wrapper URLs were skipped; their destination health is unconfirmed.

---

### 3. Rendering & Accessibility

**FAIL — Staging image URL in production send**
One image (an animated GIF used as a tracking pixel or decorative asset) is being loaded from a staging hostname:
```
src: https://image.staging.link.adidas.com/lib/fe6515707c62007e7715/m/21/2373748f-4913-4dfd-88b6-ca5c712d055b.gif
```
This appears twice in the source. Staging CDN endpoints are typically rate-limited or access-controlled and may return errors for general recipients.

**WARN — 3 image URLs using HTTP (non-HTTPS)**
Mixed content will be blocked silently in most modern email clients:
```
src: http://image.link.adidas.com/lib/fe6515707c62007e7715/m/5/222b1902-7cb3-4ab0-813a-84b74dc6f0f9.png  (alt="arrow", appears twice)
src: http://image.link.adidas.com/lib/fe6515707c62007e7715/m/1/37231f63-3f72-48f3-8047-2650e11742e8.gif
```

**WARN — 3 images missing `alt` text**
```
2373748f-4913-4dfd-88b6-ca5c712d055b.gif  (staging URL, no alt)
37231f63-3f72-48f3-8047-2650e11742e8.gif  (http://, no alt)
```
Images-off rendering (common in Outlook, corporate environments) will leave blank holes with no accessible label.

**CSS bug — malformed class selector**
In the `<style>` block, the rule `appleLinks-white a` is missing its leading `.`, making it a non-matching selector:
```css
appleLinks-white a { color: #fff!important; text-decoration: none; }
```
The correct `.appleLinks-white a` rule is also present further up, so this duplicate is dead code, but it indicates a template defect.

**CSS bug — duplicate rule**
`.f26-l38_3_2d` is declared twice inside the `max-width: 639px` media query with differing values (`font-size: 22px/13px`). The second declaration wins; the first is dead.

**`<meta>` charset tag is malformed**
```html
<meta content="text/html; charset=UTF-8" />
```
The `http-equiv="Content-Type"` attribute is missing. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Without it, some legacy parsers may not apply the charset declaration.

---

### 4. Personalization & Merge Tokens

**FAIL — Empty name merge token**
The automated QA detected an unfired substitution resulting in:
> "Hi ,"

The first-name token (e.g., `%%First_Name%%` or equivalent SFMC syntax) was not replaced before send. This affects all recipients where the profile field is blank and no default fallback value was configured in the personalization block.

---

### 5. Compliance

**WARN — SPF/DKIM authentication status unverifiable**
The `Authentication-Results` header was not present in the analyzed sample:
> `Authentication-Results header not found: Expected via AgentMail relay — SPF/DKIM status unknown`

Sending domain is `us-news.adidas.com`. Without confirmed DKIM pass, inbox placement is at risk and DMARC alignment cannot be verified.

**WARN — Plain-text part is URL-saturated**
```
13,637 / 15,014 characters (91%) in the plain-text version are URLs
```
This well exceeds the 70% threshold flagged by spam filters. A link-heavy plain-text alternative is a negative signal for Spamhaus and Gmail's content classifiers.

No issues found with physical mailing address presence or unsubscribe link existence (not confirmed absent — not flagged by QA either).

---

### 6. Email-to-Site Continuity

The disclaimer footer link (the one confirmed broken with 403) carries both Adobe Analytics `cm_mmc` attribution and AppsFlyer deep-link params in the same URL. This dual-param pattern can cause conflicts: AppsFlyer may strip or override the `cm_mmc` params during redirect resolution, breaking Adobe Analytics attribution on landing. The parameter construction should be validated against both platforms' expected URL schemas.

The `cm_mmc` value:
```
AdiEmail_PCC-_-None-_-Profile_Completion-_-Marketing-_-DisclaimerLink-_-NONE-_-dv:eCom-_-cn:Profile_Completion-_-pc:None
```
...is consistent with the campaign naming convention visible across other links in the email, so the attribution taxonomy itself appears intentional.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Staging URL in production (`image.staging.link.adidas.com`) | Replace with production CDN host before any resend |
| P0 | Empty merge token (`"Hi ,"`) | Add a default fallback (e.g., `"Hi there"`) to the personalization block; audit suppression list for profiles with blank first-name fields |
| P1 | 8 font files returning 403 | Restore S3 bucket public-read policy for the `/adidas-adl/foundation/dist/adidas/assets/fonts/` path, or migrate font hosting to a CDN with confirmed availability |
| P1 | Disclaimer link returning 403 | Validate the AppsFlyer + cm_mmc combined URL construction; test the decorated URL independently before send |
| P1 | 3 images on `http://` | Update all `image.link.adidas.com` asset references to `https://` |
| P2 | Missing `alt` text on 3 images | Add descriptive alt values; use `alt=""` for purely decorative assets |
| P2 | Plain-text version is 91% URLs | Rewrite plain-text alternative with human-readable content; URLs should be inline, not replacing body copy |
| P2 | SPF/DKIM not confirmed | Confirm `us-news.adidas.com` has valid DKIM record and DMARC alignment; retrieve full headers from a seed inbox send |
| P3 | `<meta charset>` missing `http-equiv` | Fix to `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` |
| P3 | Dead CSS (`appleLinks-white` without `.`, duplicate `.f26-l38_3_2d`) | Clean up template CSS to remove dead rules |
## Recent history

- [[2026-04-11-more-sun-more-savings]] — 6/10 (2026-04-11)
- [[2026-04-11-your-cart-expires-soon-y1wbjitythgbzzghoyf2zq-g]] — 5/10 (2026-04-11)
- [[2026-04-11-your-items-are-waiting-q0komijtt6mars70xax5eq-g]] — 5/10 (2026-04-11)

