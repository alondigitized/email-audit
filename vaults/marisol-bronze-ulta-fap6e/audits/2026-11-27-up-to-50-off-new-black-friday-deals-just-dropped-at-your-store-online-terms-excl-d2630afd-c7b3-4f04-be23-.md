---
slug: 2026-11-27-up-to-50-off-new-black-friday-deals-just-dropped-at-your-store-online-terms-excl-d2630afd-c7b3-4f04-be23-
type: email
date: 2026-11-27
persona: marisol-bronze-ulta-fap6e
score: "7/10"
sender: Ulta Beauty Black Friday
subject: Up to 50% off! NEW Black Friday deals just dropped at your store & online (Terms & excl. apply) 👏👏
tags: [email, score-7, sender/ulta-beauty-black-friday]
---
# Up to 50% off! NEW Black Friday deals just dropped at your store & online (Terms & excl. apply) 👏👏
**Score:** 7/10 · **Type:** Email audit · **2026-11-27**
## Full review
## Technical Audit

## 1. Technical Summary
The QA run found no hard failures, only warnings. The header checks (List-Unsubscribe, Authentication-Results) are inconclusive because of the AgentMail relay. The main confirmed code-level issues are 24 images with missing alt text and 11 images served over plain `http://`, mostly third-party cookie-sync pixels. The HTML source was truncated, so only the QA data covers the body.

## 2. Link & Tracking Issues
- **Unverified links:** 55 tracking/click-redirect links were skipped for HTTP probing, so link health, redirect chains and destinations are unverified.
- **Non-HTTPS tracking pixels:** 11 images load over `http://`:
  - `http://ads.dotomi.com/cookieredir/2997/pub1.php` through `pub10.php?a848b7436c89b41e828aeec7260d6e42d=1`
  - `http://cl.s11.exct.net/LiveContent.aspx?qs=ABp7ImQiOjUwNzMs...`
- **Likely blocking:** Clients that block mixed or insecure content will probably drop these.
  - The `dotomi` pixels are 10 third-party cookie-redirect calls, a heavy ad-sync payload for one email.
  - `LiveContent.aspx` is Salesforce Marketing Cloud dynamic content, so it may fail to render when blocked.
- **Third-party pixels:** The `mi.ulta.com/p/rp/*.png?mi_u=203057427&mi_ign=165131` images and the `ixtw8lub.emltrk.com/v2/ixtw8lub?i=203057427&t=165131` pixel are tracking beacons. They are HTTPS and not defects, but they are more third-party requests.

## 3. Rendering & Accessibility
- **Missing alt text:** 24 `<img>` entries are missing alt text, split into three groups:
  - **Content images (10 entries):**
    - `image.e.ulta.com/lib/fe35117171640578741677/m/45/08964789-66f1-406b-84da-7fe1840efb8d.png`
    - `.../m/44/414d3e76-c584-4831-ac2f-067f82b68465.jpg`
    - `.../m/45/4f7c3146-d437-4161-b9bd-a1e8ce719ffd.gif` (flagged twice)
    - `.../m/1/f4520f7d-a790-45bf-a249-61cd250c26d4.jpg`
    - `.../m/1/5528bb52-6094-41dd-96fb-44df01f0c27b.jpg`
    - `.../m/1/4fc3aa75-81de-42a4-956f-afe8dbcc6eb4.jpg`
    - `.../m/1/8c9f688d-d034-4aab-87b7-6d3088132e4a.jpg`
    - `.../m/1/852db034-b7e7-4f49-bcce-3b881d164154.png` (flagged twice)
  - **Dynamic and ad images:** `mi.ulta.com/.../01fa2fab9849e714.png`, `mi.ulta.com/.../3eb758650b65389e.png` and `LiveContent.aspx`.
  - **Tracking pixels (12 entries):** `dotomi` `pub1.php` through `pub10.php`, `LiveContent.aspx` and `emltrk.com` pixel. These should carry `alt=""` and be hidden from assistive tech.
- **Effect on content images:** With images blocked, or in a screen reader, the content images have no text fallback. Any that carry offer text or CTAs would be unreadable.
- **Doctype mismatch:** The doctype is XHTML 1.0 Strict, but `<meta name="color-scheme" content="light dark">` and `<meta name="supported-color-schemes" content="light dark">` are not self-closed. This is a minor validity issue.
- **Web font:** `<link href="https://fonts.googleapis.com/css2?family=DM+Sans...">` is stripped or ignored by many clients (Gmail, Outlook desktop). I can't confirm the fallback stack from the truncated source.

## 4. Personalization & Merge Tokens
No issues found. The QA run flagged no unresolved tokens. The source is truncated, so tokens in the unseen body can't be ruled out.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe and List-Unsubscribe-Post:** Neither header was found. The QA tool says the relay may strip them, so this is unconfirmed, not a confirmed violation. Gmail and Yahoo bulk-sender rules require both (RFC 8058 one-click) for senders of this volume. Check against the raw original message, not the relay copy.
- **Authentication:** `Authentication-Results` is missing for the same relay reason, so SPF, DKIM and DMARC are unverified. The From domain is `e.ulta.com`.
- **Footer unsubscribe link and physical address:** I can't confirm them because the source is truncated and the QA run has no result for them.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not verifiable. All 55 click-tracked links were skipped, so destination URLs, UTM parameters and landing-page alignment can't be checked. The only campaign identifier visible is in the pixel parameters (`t=165131`, and the label `pr_fy26wk43_friday_bf_6am_Last`).

## 7. Recommendations
1. Re-run the QA against the raw `.eml` to check `List-Unsubscribe`, `List-Unsubscribe-Post` and `Authentication-Results`.
2. Add descriptive `alt` to the 10 content images, and `alt=""` to the pixels and tracking beacons.
3. Move the `dotomi` pixels and `LiveContent.aspx` to HTTPS, or remove them. If `LiveContent` is dynamic content, verify it renders when `http://` is blocked.
4. Cut the 10 `dotomi` cookie-sync pixels to what is needed.
5. Resolve the tracking redirects with a real HTTP probe to confirm destinations and UTM params.
6. Self-close the `<meta>` tags to match the XHTML doctype, and make sure `DM Sans` has a safe fallback stack.
## Recent history

- [[2026-08-01-marisol-ends-today-shop-what-s-new-with-your-20-off-one-qualifying-item-coupon-u]] — 8/10 (2026-08-01)
- [[2026-07-26-lucky-you-this-20-off-one-qualifying-item-just-landed-in-your-lap-use-code-score-c2a86dd1-1bfe-4471-9d3c-]] — 9/10 (2026-07-26)
- [[2026-07-01-ready-set-glow-this-tatcha-gift-with-select-60-online-purchase-is-a-dew-terms-ex]] — 9/10 (2026-07-01)

