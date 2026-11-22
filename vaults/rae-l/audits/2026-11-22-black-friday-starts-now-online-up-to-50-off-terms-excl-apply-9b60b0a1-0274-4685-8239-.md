---
slug: 2026-11-22-black-friday-starts-now-online-up-to-50-off-terms-excl-apply-9b60b0a1-0274-4685-8239-
type: email
date: 2026-11-22
persona: rae-l
score: "8/10"
sender: Ulta Beauty Black Friday
subject: Black Friday^ starts NOW online! Up to 50% off. Terms & excl. apply 🖤
tags: [email, score-8, sender/ulta-beauty-black-friday]
---
# Black Friday^ starts NOW online! Up to 50% off. Terms & excl. apply 🖤
**Score:** 8/10 · **Type:** Email audit · **2026-11-22**
## Full review
## Technical Audit

## 1. Technical Summary
The 57% QA pass rate comes from three header warnings and about 20 image warnings. The headers are likely a capture limitation of the AgentMail relay rather than confirmed defects. The confirmed code-level issues are 10 plain-HTTP third-party pixels and 9 content-image `<img>` tags without alt text. The HTML source was truncated, so the body links, footer and unsubscribe link could not be inspected.

## 2. Link & Tracking Issues
- **Unverified links:** 52 tracking/click-redirect links were skipped by the HTTP probe, so none were checked for status, redirect chain or destination. This is a coverage gap, not a confirmed defect.
- **Insecure third-party pixels:** 10 `<img>` tags load over `http://` from `ads.dotomi.com/cookieredir/2997/pub1.php` through `pub10.php`. All use the query string `?afceee870be08769d39f955496b70f67b=1`.
  - These look like ad-platform cookie-sync pixels.
  - Non-HTTPS sources can be blocked or flagged as mixed content.
  - They add 10 extra third-party requests and expose recipient data to an ad network.
- **Open-tracking pixel:** `https://ixtw8lub.emltrk.com/v2/ixtw8lub?i=202740837&t=164886` is HTTPS and works as intended. It has no alt text (see section 3).

## 3. Rendering & Accessibility
- **Missing alt text on content images:** the QA check flagged 9 entries on 7 distinct images. Two appear twice in the list: `4f7c3146-d437-4161-b9bd-a1e8ce719ffd.gif` and `852db034-b7e7-4f49-bcce-3b881d164154.png`. The QA data doesn't say whether these entries are separate `<img>` tags or repeats. With images off, or for screen readers, these carry no text equivalent.
  - `https://image.e.ulta.com/lib/fe35117171640578741677/m/45/08964789-66f1-406b-84da-7fe1840efb8d.png`
  - `https://image.e.ulta.com/lib/fe35117171640578741677/m/44/414d3e76-c584-4831-ac2f-067f82b68465.jpg`
  - `https://image.e.ulta.com/lib/fe35117171640578741677/m/45/4f7c3146-d437-4161-b9bd-a1e8ce719ffd.gif` (×2)
  - `https://image.e.ulta.com/lib/fe35117171640578741677/m/3/95387140-e203-4c97-b6ee-adf6232acec9.jpg`
  - `https://image.e.ulta.com/lib/fe35117171640578741677/m/1/852db034-b7e7-4f49-bcce-3b881d164154.png` (×2)
  - `https://mi.ulta.com/p/rp/01fa2fab9849e714.png?mi_u=202740837&mi_ign=164886` and `.../3eb758650b65389e.png?...`. These are Movable Ink dynamic images, so they probably carry live content.
- **Tracking pixels without alt:** `pub1.php` to `pub10.php` and the `emltrk.com` pixel are flagged. For 1×1 pixels, `alt=""` is the correct fix. The flag is real but low severity.
- **Head markup:** the `<head>` includes a Google Fonts `<link>` (DM Sans). Many clients ignore it, so the fallback stack matters. The truncated source doesn't show it, so this is unverified.
- **Other head markup:** it declares `color-scheme: light dark`, a viewport meta, a VML/Office namespace and `lang="en-US"`. No issues found.

## 4. Personalization & Merge Tokens
No issues found. The visible source has no unrendered merge tokens such as `%%…%%`, `{{…}}` or `[First Name]`. The per-recipient identifier `mi_u=202740837` / `i=202740837` is rendered, not a raw token. The source is truncated, so the body could not be fully checked.

## 5. Compliance (CAN-SPAM, unsubscribe, authentication headers)
- **List-Unsubscribe:** not found. QA notes it "may not be captured by AgentMail relay", so this is unconfirmed rather than a sender defect.
- **List-Unsubscribe-Post (RFC 8058):** not found, same caveat. One-click unsubscribe support is unconfirmed.
- **Authentication-Results:** not found, so SPF/DKIM/DMARC alignment for `U-Mail@e.ulta.com` is unknown. This is an expected limitation of the relay.
- **Footer:** the visible source doesn't show the unsubscribe link or physical postal address because of truncation. They could not be verified.
- **Sender identity:** the From domain `e.ulta.com` matches the image CDN `image.e.ulta.com`. No mismatch found.

## 6. Email-to-Site Continuity (UTM params, landing page alignment)
Not verifiable. All 52 click links were skipped, so UTM parameters and landing-page destinations weren't captured. The only campaign identifier visible is the tracking-pixel label `pr_fy26wk42_saturday_bf_launch_8pm_Last`, which isn't evidence of link-level UTM tagging.

## 7. Recommendations
1. **Probe the tracking links.** Resolve the 52 redirect links with a GET/HEAD follow-through and record the final URLs, status codes and UTM params, so section 6 can be assessed.
2. **Capture raw headers.** Check List-Unsubscribe, List-Unsubscribe-Post and Authentication-Results from the original message rather than the relay copy. Until then, treat compliance as unconfirmed, not failed.
3. **Add alt text.** Give the 7 content images meaningful `alt` values (including the Movable Ink images) and `alt=""` on all tracking pixels.
4. **Move the pixels to HTTPS.** Serve the 10 `ads.dotomi.com` cookie-redirect pixels over HTTPS, or remove them. Consider whether 10 third-party sync pixels are warranted in an email at all.
5. **Re-run on the full HTML.** The audit used truncated source. Re-run on the complete document to check the footer, unsubscribe link, postal address, fallback fonts and any remaining tokens.
## Recent history

- [[2026-08-19-this-style-has-limited-availability]] — 5/10 (2026-08-19)
- [[2026-08-19-your-fall-beauty-routine-starts-here-4793d7c9-b378-4388-a060-]] — 7/10 (2026-08-19)
- [[2026-08-19-1-free-mini-3-ways-to-wear]] — 7/10 (2026-08-19)

