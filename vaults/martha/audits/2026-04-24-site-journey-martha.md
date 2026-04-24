---
slug: 2026-04-24-site-journey-martha
type: site
date: 2026-04-24
persona: martha
score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Martha Stroll on www.skechers.com"
tags: [site-journey, score-3, sender/www-skechers-com]
---
# Daily Journey: Martha Stroll on www.skechers.com
**Score:** 3/10 · **Type:** Site journey · **2026-04-24**
## Full review
---

# Skechers.com Journey Review
### Persona: Martha Stroll, 34 | Mom of 5yo girl + 9yo boy | Mobile shopper

---

## 1. Executive Summary

I sat down on my phone during the kids' Saturday downtime to grab shoes for both my daughter and son. I was logged in, I had rewards points, and I was ready to spend. What happened next was genuinely demoralizing: both dedicated kids category pages — `/kids/girls/shoes/` and `/kids/boys/shoes/` — threw 404 errors. I never saw a single kids' shoe in the intended category flow. The "product detail" steps that followed showed me adult women's and men's shoes ($88–$165 range) as if they were substitutes. The Add to Cart step timed out with no button found. The cart itself loaded as a completely blank white page. The only step that actually worked for kids was a manual search for "girls shoes" at the very end — which I only did because everything else had already failed.

This is not a rough experience. This is a broken one. A mom who hit those two 404s in real life would have closed the tab and gone to Amazon.

---

## 2. Business Impact Score

**3 / 10**

The rewards personalization and BOGO promotion are real positives. Everything else in the core purchase funnel — kids category browse, product detail, add to cart, and cart — was either a dead end or a blank page. A score of 3 is being generous because search partially recovered the session.

---

## 3. What's Working

- **Rewards personalization on login.** The moment I logged in, I saw: *"Martha, You have enough points for a $5 reward."* That's my name. That's a concrete dollar amount. That's exactly the kind of thing that makes me feel seen as a loyal customer. I noticed it immediately and it gave me a reason to stay.
- **BOGO 50% OFF is prominent.** The blue banner at the very top is hard to miss. As a price-sensitive mom buying for two kids at once, a buy-one-get-one deal is directly relevant to me. It was visible on nearly every step.
- **Search for "girls shoes" actually worked.** Step 10 was the only step that delivered what I came for: 125 Girls' results, Slip-ins Summits at $55, Bounder Pro at $50, proper category label, filter and sort controls. If the rest of the site worked like this, it would be a good experience.
- **Popups dismissed cleanly.** No lingering modal blocking the screen. The banner rotated from a promotional message to a Skechers Plus pitch without interrupting me.

---

## 4. What's Weak

**Critical failures:**

- **Both kids category URLs are dead.** `/kids/girls/shoes/` (Step 4) and `/kids/boys/shoes/` (Step 6) both returned "Sorry! We can not find the page you are looking for..." This is the single most damaging problem in the entire journey. These are the two most logical navigation paths for a mom shopping for a daughter and a son. Hitting a 404 once is surprising. Hitting it twice in a row for my two kids is infuriating.

- **The 404 fallback is useless.** After the error message, the page showed "Recommended For You" and "Shop by Category" — but the recommendations were adult shoes (a men's $150 golf shoe, a women's $165 running shoe). Nothing for a 5-year-old girl or a 9-year-old boy. There's no recovery path. It just dumps me into generic adult inventory.

- **Product detail steps showed completely wrong products.** Step 5 (meant to be the 5yo girl's product page) showed a Men's Slip-ins Golf shoe at $150. Step 7 (meant to be the 9yo boy's page) showed a Women's Aero Burst at $165. Step 8 showed a Women's Contour Foam at $88. None of these have any relevance to kids.

- **Add to Cart failed entirely.** The button could not be found and the action timed out. Whether that's a rendering issue or a DOM problem, the outcome is the same: I can't buy anything.

- **Cart page was a blank white screen.** Step 9 rendered nothing. Not an error message, not a loading spinner — just white. I have no idea if I have anything in my cart or not.

**Moderate issues:**

- **Homepage is adult-centric.** The hero is a Skechers Sandals campaign with adult models on a dock. "Kids'" is only accessible via a small tab in the bottom navigation bar. There's no kids' feature, no "Shop for your little ones" callout, nothing that says Skechers knows I'm a mom. Given that I'm logged in with purchase history presumably showing kids purchases, this is a personalization miss.

- **No age or size filtering surfaced on any kids page** (those that worked). For a 5-year-old, I'm shopping toddler/little kid sizes; for a 9-year-old I'm in big kid sizes. The site never helped me narrow by age group or size range before I saw products.

- **No velcro, light-up, or fastening-type filters visible.** For a 5-year-old, closures are a practical need, not a style preference. I want velcro. The search results page showed filter controls but I couldn't see what filter options exist — and on mobile, tapping into filters is an extra step many shoppers won't take.

- **No family bundle or multi-kid discount visible.** I'm buying shoes for two kids in one session. That's exactly the scenario BOGO is designed for, but it's not framed as a "shopping for the whole family?" moment anywhere in the journey.

---

## 5. Recommendations

**Fix immediately (this week):**

1. **Restore `/kids/girls/shoes/` and `/kids/boys/shoes/`.** Whatever broke these URLs needs to be found and fixed. These are not obscure deep links — they are the primary navigation paths to your second-largest customer segment (parents shopping for kids).

2. **Fix the cart page.** A blank cart is a conversion zero. There's no recovery from that. Whether it's a JS load failure or a session state issue, this has to work.

3. **Fix the 404 fallback for kids paths.** If a kids URL fails, the fallback should show kids products, not men's golf shoes. At minimum, surface the kids category tiles (Girls, Boys, Toddlers) as recovery options.

**Fix soon (next sprint):**

4. **Age/size-range filtering on kids pages.** "Shop for little kids (4-8) / big kids (8-12)" as prominent filter options would instantly help a parent like me scope down without needing to know Skechers' internal size taxonomy.

5. **Surface velcro/closure type as a filter** on girls' and toddler pages. It's a top-3 decision driver for parents of young kids.

6. **Leverage login state on the homepage.** I'm Martha. I have a $5 reward. My last orders presumably included kids' shoes. Show me something relevant: "Back for the kids?" or "New arrivals in Girls' and Boys'." The homepage right now acts like it doesn't know me.

7. **Reframe BOGO as a family moment.** "Buy shoes for both kids, get 50% off the second pair" is more resonant to me than a generic BOGO banner. The deal structure already supports this — the framing just needs to connect.

---

## 6. Bottom Line

I came in logged-in, with rewards points, ready to buy shoes for two kids. The site lost me at step four when the girls' category 404'd, and then again at step six when the boys' category did the same thing. By the time I tried to add to cart and found a broken button and then a blank cart page, I had zero confidence that any purchase would actually go through. The only reason I'd come back is because I know the Skechers brand and I trust the product — not because this experience earned my loyalty. If I were any less brand-committed, I'd have been on a competitor's site after that first 404.

The personalization bones are there. The rewards message on login is genuinely good. But the execution broke down completely the moment I tried to do the one thing I came to do: buy shoes for my kids.

---

## 7. Evidence

**Step 1 — Homepage**
I land on a sandals campaign featuring two adults on a dock. It's clean and the BOGO banner is visible at the top. The "Get Mom a Gift She'll Love" sub-banner is timely (Mother's Day adjacent) but aimed at gift-givers, not at me as a mom buying for my kids. To get to Kids', I have to tap a small tab in a horizontal scroll at the bottom of the screen — not featured, not prominent. Nothing on the homepage signals that Skechers knows I'm a parent. Usable on mobile but not personalized.

**Step 2 — Dismiss Popups**
The initial popup (if there was one) was dismissed cleanly. The banner swapped to a Skechers Plus free shipping pitch. No modal obscuring the screen. This was fine — no friction, no second-guessing the X button.

**Step 3 — Log In**
This was the highlight of the entire journey. After logging in, the banner reads: *"Martha, You have enough points for a $5 reward."* My name. My reward amount. I feel recognized. This is the kind of personalization that makes me want to shop more, not less. Skechers knows who I am — now I wish the rest of the site did too.

**Step 4 — 5-year-old girl: Girls' category**
Dead end. The page reads "Sorry! We can not find the page you are looking for..." with a cartoon broken-link illustration. Below that: "Recommended For You" and "Shop by Category." None of the visible recommended items are girls' kids shoes. I was shopping for my 5-year-old daughter — I never got to see velcro sneakers, light-ups, or anything in pink/purple. This step produced nothing useful.

**Step 5 — 5-year-old girl: Product detail**
The page that loaded as the "product detail" for my daughter showed a Men's Skechers Slip-ins Golf Waterproof: Prestige – Nature of the Game at $150. That is a men's golf shoe. There is no world in which that is what I was looking for while shopping for a 5-year-old girl. The page also showed what appears to be a partial product card for another adult shoe. The "BOGO! Applied at Cart" note is visible but irrelevant when the products are wrong entirely.

**Step 6 — 9-year-old boy: Boys' category**
Second 404 in a row. Same "Sorry!" page. This time the "Recommended For You" section below shows a pink adult sneaker and a blue adult sneaker — adult styles, not kids'. Shopping for my 9-year-old son's back-to-school sneakers, I saw nothing in blue/black, nothing with durable soles or lace-up options, nothing age-appropriate. Two kids, two 404s.

**Step 7 — 9-year-old boy: Product detail**
The fallback "product detail" for my son shows the Skechers Slip-ins: Aero Burst — Women's, $165, Also in Wide. A women's $165 running shoe as the product page for a 9-year-old boy. Again, completely irrelevant inventory. The BOGO notice appears again but there's nothing to buy.

**Step 8 — Add to Cart (FAILED)**
The visible product is the Skechers Slip-ins: Contour Foam – Cozy Fit, Women's, $88.00, with "Buy 1, Get 1 50% OFF! Applied at Cart" — more adult women's inventory. The automation reported a timeout trying to find the Add to Cart button, meaning it simply wasn't findable on the page. Whether the button failed to render or was obscured, the result is the same: I cannot add anything to my cart.

**Step 9 — View Cart**
Completely blank white page. No products, no empty-cart message, no "you have 0 items" state, no navigation options. The cart did not render. From a mom's perspective: I have no idea if the shoes I tried to add are in there or not. I wouldn't know whether to start over or check my email for a confirmation. This is a full session-ending failure.

**Step 10 — Search "girls shoes"**
This was the recovery. I typed "girls shoes" and landed on a real, functional results page: "GIRLS SHOES – (125)" with proper Girls' category products visible, including the Slip-ins: Summits at $55 and Slip-ins: Bounder Pro at $50. Filter and Sort controls are present. The BOGO banner and my rewards personalization are both visible. If the site had sent me here from Step 4 instead of a 404, this entire journey would have felt very different. The products shown are age-appropriate, the prices are reasonable, and the category label is correct. This step worked. The rest didn't get me here.

---

## Technical Audit

## Technical Summary

Journey covers 8 steps across Homepage, Login, Kids category pages (girls/boys), product detail pages, cart, and search. Core infrastructure is Salesforce Commerce Cloud (SFCC/Demandware). Bot-protection layer is Kasada SDK. Consent management via TrustArc. Analytics stack includes GTM, GA4, TikTok, Pinterest, Bing, Reddit, Yahoo, Bloomreach, Monetate, Quantum Metric, and Impact — 15+ third-party scripts loaded per page.

LCP and CLS are unavailable from this dataset; findings below are constrained to TTFB, network errors, axe violations, and HTML source analysis.

---

## Accessibility

**16 violations across 3 pages. Two critical/serious violations require immediate remediation.**

| Severity | Rule | Page | Detail |
|---|---|---|---|
| Critical | `aria-required-parent` | Homepage | ARIA role elements missing required parent container — likely carousel or listbox items outside their owning element |
| Serious | `link-name` | Homepage | One or more links have no accessible text — likely icon-only links (hamburger, social icons) missing `aria-label` |
| Serious | `document-title` | View Cart | `<title>` is empty or absent on cart page |
| Serious | `html-has-lang` | View Cart | `lang` attribute missing on cart `<html>` element (present on all other pages) |
| Moderate | `landmark-no-duplicate-main` / `landmark-main-is-top-level` | Homepage | Two `<main>` elements in DOM; at least one nested inside a non-body ancestor — indicates a modal or overlay injecting its own landmark tree |
| Moderate | `landmark-complementary-is-top-level` | Homepage, Search | `<aside>` elements nested inside `<main>` or other landmarks instead of being top-level |
| Moderate | `heading-order` | Homepage | Heading levels skip (e.g., h1 → h3) — common in component-based builds |
| Moderate | `region` | Homepage, Search | Content outside any landmark region |
| Moderate | `landmark-one-main` / `page-has-heading-one` | View Cart | No `<main>` and no `<h1>` — cart page appears to render as a JS shell without proper document structure |

**Root cause pattern:** The View Cart violations (`document-title`, `html-has-lang`, `landmark-one-main`, `page-has-heading-one`) are consistent with a client-side navigation or iframe-style cart overlay rendering a detached document without propagating metadata. This is distinct from the server-rendered pages.

---

## SEO

**High severity: Two category pages returning HTTP 410.**

```
410 https://www.skechers.com/kids/girls/shoes/
410 https://www.skechers.com/kids/boys/shoes/
```

HTTP 410 (Gone) signals permanent removal to crawlers — Googlebot will de-index these URLs. The pages do render in-browser (TTFB 327–332ms), which means either:

1. The 410 is returned on the initial request but JS bootstraps the page via client-side rendering — crawlers without JS execution see a 410 and drop the URL
2. The 410 is returned for an XHR re-fetch of the same URL (less likely given the path)

Either way, this is a crawlability and indexing defect for two core commercial category pages.

Additional SEO issues:
- `document-title` missing on View Cart — the cart URL (`/cart/`) would index with no title if crawled
- Missing `lang` on cart page — affects language targeting signals

---

## Performance

**TTFB observations:**

| Step | TTFB | Status |
|---|---|---|
| Homepage | 41ms | Good |
| Log In | 39ms | Good |
| Kids Girls category | 332ms | Acceptable |
| Kids Girls PDP | 332ms | Acceptable |
| Kids Boys category | 327ms | Acceptable |
| Kids Boys PDP | 327ms | Acceptable |
| View Cart | 356ms | Marginal |
| Search | 31ms | Good (CDN/cached) |

TTFB is healthy for static/cached routes; category and cart pages are slower, consistent with SFCC dynamic rendering.

**Third-party script volume is the primary performance risk.** From HTML source, the following load unconditionally in `<head>` as `async`:

- Monetate (3 separate script tags: `se.monetate.net` ×2, `sb.monetate.net` via dns-prefetch)
- Google Tag Manager (`gtm.js` + 3 `gtag/destination` tags including a placeholder `G-1234567890`)
- TikTok pixel (3 scripts: `identify_5cff1caf.js`, `main.MWE0...js`, `events.js`)
- Pinterest pixel (`vice-managed-src`)
- Yahoo pixel (`vice-managed-src`) — **loaded twice, duplicate tag**
- Bing Ads (`bat.js`)
- Reddit pixel
- Quantum Metric (`quantum-skechers.js`)
- Impact CDN (`utt.impactcdn.com`)
- CreativeCDN (`tags.creativecdn.com`)
- Bloomreach (`cdns.brsrvr.com/v1/br-trk-7927.js`)
- Tune/Go2SDK (`js.go2sdk.com/v2/tune.js`)
- Pulse Insights (`js.pulseinsights.com`)
- WebFontLoader 1.6.28 from cdnjs
- TrustArc consent inline styles + font loads

**Specific issues:**

1. **`G-1234567890` GA4 placeholder** — a non-production GA4 property ID is loading in production alongside the real `G-XZTV9LQ9DQ`. This fires an unnecessary GTM destination request on every page.

2. **Yahoo pixel loaded twice** — `vice-managed-src="https://s.yimg.com/wi/ytc.js"` appears twice in the `<head>`, doubling that network request and any associated execution.

3. **WebFontLoader 1.6.28** — loading Mulish via WebFontLoader causes FOUT. The `wf-mulish-*-active` classes visible in `<html>` confirm the flash behavior. Fonts should be loaded via `<link rel="preload">` + `@font-face` CSS to avoid this.

4. **`--vh` CSS custom property** — `style="--vh: 6.640000000000001px;"` is computed via JS on load to fix `100vh` on mobile Safari. The fractional sub-pixel value (`6.64000000000001px`) suggests insufficient rounding; should be `Math.round` or `parseFloat(value).toFixed(2)`.

LCP and CLS data were not captured; those metrics would be needed for full Core Web Vitals assessment.

---

## Mobile Optimization

**Viewport height fix in place** but implemented with precision issues (see Performance above).

**`vice-managed-src` pattern** — TrustArc consent management defers some scripts via a custom attribute that is swapped to `src` post-consent. This reduces initial payload but adds latency on consent resolution for users who accept cookies.

No mobile-specific HTML issues are identifiable from the available source snippets. LCP/CLS capture on mobile viewport would be required to assess layout stability and image loading behavior.

---

## Console & Network Errors

**9 errors total: 7× HTTP 429, 2× HTTP 410.**

**429s on Kasada fingerprint endpoint:**
```
429 /149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.381
```
This is the Kasada SDK bot-protection fingerprint submission endpoint. 429 responses here mean the Kasada service is rate-limiting the session. In a real-user session (vs. automated audit), repeated 429s on this endpoint can degrade bot-protection accuracy and may silently block legitimate requests that depend on a valid Kasada token. The volume (7 hits in a single session) suggests the SDK is retrying aggressively without backoff.

**429 on `/cart/`:**
```
429 https://www.skechers.com/cart/
```
The cart page itself was rate-limited. If this is reproducible for real users (not just bot-detection triggering on the audit tool), it represents a conversion-critical failure path with no user-visible error messaging.

**410s on category pages:**
Already covered in SEO section. The 410 status on `/kids/girls/shoes/` and `/kids/boys/shoes/` is the highest-priority network defect.

---

## Recommendations

**P0 — Fix immediately:**

1. **Resolve 410 on `/kids/girls/shoes/` and `/kids/boys/shoes/`** — verify whether the origin server or CDN edge is returning 410, check SFCC routing config and CDN cache rules. If URLs are being redirected, ensure the redirect returns 301 not 410.

2. **Cart page missing `<title>` and `lang` attribute** — investigate whether the cart is rendered via a separate document/iframe or if client-side navigation strips these. Ensure all SPA route transitions preserve `<html lang>` and update `<title>` via `document.title`.

**P1 — High priority:**

3. **Remove `G-1234567890` GTM destination tag** — non-production property ID firing in production.

4. **Deduplicate Yahoo pixel** — remove one of the two `vice-managed-src="https://s.yimg.com/wi/ytc.js"` tags.

5. **Fix `aria-required-parent` (Critical)** and **`link-name` (Serious)** on Homepage — audit carousel/listbox component markup and add `aria-label` to all icon-only interactive elements.

6. **Investigate Kasada 429 retry behavior** — the SDK should implement exponential backoff or honor `Retry-After` headers rather than hammering the endpoint 7+ times per session.

**P2 — Address in next sprint:**

7. **Replace WebFontLoader with native font loading** — use `<link rel="preload" as="font">` + CSS `@font-face` to eliminate FOUT.

8. **Fix `--vh` rounding** — `parseFloat((window.innerHeight * 0.01).toFixed(2))` prevents the trailing-precision artifact.

9. **Fix remaining landmark and heading violations** — `landmark-no-duplicate-main`, heading order skips, and content outside regions are fixable with structural HTML corrections in the homepage template.
