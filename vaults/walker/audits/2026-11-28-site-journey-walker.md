---
slug: 2026-11-28-site-journey-walker
type: site
date: 2026-11-28
persona: walker
score: "3/10"
previous_score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-3, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 3/10 (prev 3/10) · **Type:** Site journey · **2026-11-28**
## Full review
## 1. Executive Summary

I still couldn't buy a shoe on my phone. The Black Friday banners are loud and the Men's menu is easy to use. But my bag still showed **0** after Add to Cart, and the cart page was a **completely blank white screen**. I never saw a login screen. Search for "comfort shoes" put women's loafers and a women's wedge first. The shoe the journey picked for me was a $120 basketball sneaker with no reviews and a note saying it's excluded from the sale.

## 2. Business Impact Score (1-10)

**3/10.** That's the same as yesterday's 3/10, so I see no net improvement and no regression in the score. I only have yesterday's written review to go by. Compared with it:
- **Unchanged:** the cart is blank, no login is shown, and search still leads with women's shoes.
- **Slightly different:** the search count moved from 1,657 to 1,679 results. The sample shoe is also a different one, a $120 basketball sneaker today instead of a $155 shoe with reviews yesterday.
- **Not seen today:** I didn't see yesterday's "Please select a size" message on the size screen.

A customer who can't see their cart can't check out, so this stays low whatever the merchandising looks like.

## 3. What's Working

- **The Men menu (step 4)** is a clean slide-out with big, full-width rows: Shoes, Shop by Activity, Comfort Technologies, Collections. The text is easy to read and the rows are easy to tap. "Comfort Technologies" is the label I'd go looking for.
- **Men's Shoes (step 5)** leads with "Hands Free Slip-ins" and "Walking Shoes" tiles. That's what I came for.
- **The tabs under the header** ("Slip-ins", "Wide Fit", "Arch Fit", "Max Cushioning") use my words. This is the best thing on the site for me.
- **The size picker (step 7)** has large, well-spaced buttons. Sold-out sizes are crossed out, and each has a little bell for restock alerts.
- **Buy-now-pay-later** is shown on the product page (Klarna and Afterpay, from $11/month). That's clear and honest.

## 4. What's Weak

- **The cart is blank (step 8).** The page is plain white, with no "your bag is empty" and no error message. The bag icon still said 0 after step 7. The site's error log shows a 429 ("too many requests") response when the cart loaded. That may be the site throttling the automated visit rather than what a real customer would hit. I can only report what I saw, and a shopper who sees white gives up.
- **No login screen (step 3).** The screen is the homepage again, with only a small person icon in the corner. I never saw a sign-in form, "Welcome back" or a points balance. Nothing was personalized to me.
- **The popups step (step 2)** looks the same as the homepage. The only difference is that the promo line under the header scrolls sideways, so its text is cut off at both edges ("b OFF with Code: BF2026"). A scrolling line is hard to read for a 62-year-old.
- **Wrong shoe for me (step 6).** The product is the "OG Anunoby: SKX Nexus NYC Blue", a basketball shoe. It has **No Reviews**, five empty stars, and "Excluded from promotions." That means the 30-50% off and the extra 15% don't apply, so it's $120 with no sale and no one vouching for it.
- **Search is not relevant to me (step 9).** "comfort shoes" returned 1,679 results, and the first two are women's loafers and a women's wedge. I'm a man shopping for walking comfort. Nothing asks or filters.
- **No comparison or value math anywhere.** I saw nothing about arch support and nothing that sets Skechers next to Hoka, Brooks or New Balance. There is no "why it's worth the price" content in any screen.
- **Three discounts compete (steps 1-2).** The top bar says 30-50% off. A second bar says extra 15% with code BF2026. A big black banner repeats the code, and a gray banner says the discount is "applied at cart." It's hard to tell what I actually pay. Sale prices like "$49.99" also carry a red "Members get an extra 15%..." line, and that fine print is too small to read without zooming.
- **The filter chips are small and cut off (steps 5 and 9).** "Filter", "Sort by", "Size" and "Width" are tight and scroll sideways. The tabs under the header are also cut off ("Max Cus...").
- **The size list is out of order (step 7).** It runs M 7 to M 17, then jumps back to M 6.5, M 4, and so on. I had to hunt for my size.

## 5. Recommendations

1. **Fix the cart first.** Add to Cart must put the shoe in the bag. The cart page must always show something: the items, or a clear "Your bag is empty" message with a button back to shopping. Never a blank page. Check whether the 429 is only the automation being throttled, and if so, slow the test run or whitelist it.
2. **Make login visible and welcoming.** Show a large sign-in form, and once I'm in, say "Welcome back" and show my name or points. Right now there's no sign that the site knows me.
3. **Don't send men's comfort searches to women's shoes.** If I came from the Men menu, keep me in Men. Rank slip-ins, walking and cushioned shoes first for "comfort shoes".
4. **Use a comfort shoe in the test and on the page.** Show a walking or slip-in shoe with reviews. Put a plain "Arch support: Yes/No" and "Cushioning: Light/Medium/Max" line near the price. A reviewless, promo-excluded basketball shoe isn't a good sample of the product.
5. **Cut the discount noise.** Pick one message and say it once in large text. Say what I'll pay at cart, and explain the code in a sentence.
6. **Make touch targets and text larger.** The filter chips and the red fine print are too small. Stop the promo line from scrolling sideways.
7. **Sort the size list** in numeric order, and highlight sizes I'd likely wear.
8. **Add a short "how this compares" strip** for comfort shoppers: price, cushioning and arch support next to Hoka, Brooks and New Balance. That's the math I do in my head before I buy.

## 6. Bottom Line

Skechers has the right words ("Slip-ins", "Arch Fit", "Max Cushioning") and a good Men menu. But in two days running I couldn't get a shoe into a bag and see it, and I never saw any sign the site knew who I was. Until the cart works, nothing else matters. Right now Hoka or Brooks would take my money, because their cart works. **3/10 again, with no progress since yesterday.**

## 7. Evidence

**Step 1 - Homepage**
- **What I saw:** A blue "30-50% OFF Sitewide" bar, the Skechers logo, then search, account, bag (0) and a MENU button. Under that, a promo line, a row of tabs, a black "EXTRA 15% OFF, CODE: BF2026" banner, and a gray "30-50% OFF SITEWIDE" banner with a Shop Now button.
- **Phone ease:** The two Shop Now buttons are big and easy to tap. The tab row and promo line are cut off at the edge, and the small gray print is hard to read.
- **Friction/delight:** Delight: the "Slip-ins / Wide Fit / Arch Fit" tabs. Friction: three overlapping discount messages.
- **Personalized?** No. Nothing about men's shoes, walking or my history.

**Step 2 - Dismiss Popups**
- **What I saw:** Almost the same as step 1. The only change is the promo line, which is now scrolling and cut off at both sides.
- **Phone ease:** No popup got in my way. The scrolling text is hard to read.
- **Friction/delight:** Nothing to dismiss, which is good. The moving text is a small annoyance.
- **Personalized?** No.

**Step 3 - Log In**
- **What I saw:** The homepage again. There was no sign-in form, no field, and no "Welcome back." The bag still read 0.
- **Phone ease:** The account icon is small and has no label. I never got to a place where I could sign in.
- **Friction/delight:** Confusing. I couldn't tell whether I was signed in, signed out, or whether anything happened.
- **Personalized?** No.

**Step 4 - Men category**
- **What I saw:** A slide-out Men menu with Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations and Clothing & Accessories. Below it are photos of two sneakers.
- **Phone ease:** Good. The rows are wide, spaced out and use a readable size. There's a Back arrow and an X to close.
- **Friction/delight:** Delight: "Comfort Technologies" is in the first few rows.
- **Personalized?** No. It's the same menu for everyone, but it fits what I'm after.

**Step 5 - Men > Shoes**
- **What I saw:** "Men's Shoes," 837 results, and tiles for "Hands Free Slip-ins," "Walking Shoes" and "Up To 40% off Boots." Under those, Filter, Sort by, Size and Width buttons, then the first two products: a bright blue and orange basketball shoe and a colorful black sneaker.
- **Phone ease:** The tiles are large. The filter chips are small and "Width" is clipped.
- **Friction/delight:** Delight: Slip-ins and Walking are at the top. Friction: the first two shoes are flashy, not what I'd wear.
- **Personalized?** No. The first products aren't picked for a comfort shopper.

**Step 6 - Product detail**
- **What I saw:** "OG Anunoby: SKX Nexus NYC Blue," Unisex, **$120.00**, "No Reviews," Add to Wishlist, Klarna/Afterpay payment text, and an orange "Excluded from promotions" note. Below is a large photo of a blue basketball shoe.
- **Phone ease:** Readable at normal size. The price is large and clear.
- **Friction/delight:** Friction: no reviews, no arch or cushion info above the photo, and the shoe is excluded from the sale I was just told about.
- **Personalized?** No. This isn't a shoe I'd buy.

**Step 7 - Add to Cart**
- **What I saw:** A size list from M 7 / W 8.5 up through M 17 / W 18.5, then M 6.5, M 4 and so on, with M 10 through M 12.5 crossed out. The bag at the top still said **0**.
- **Phone ease:** The size buttons are big and easy to tap. The order is confusing.
- **Friction/delight:** Friction: I couldn't tell if the shoe was added, and the bag stayed at 0. The page showed no confirmation.
- **Personalized?** No. It didn't suggest or highlight a size.

**Step 8 - View Cart**
- **What I saw:** A completely blank white screen. The site's error log shows a 429 response when the cart loaded.
- **Phone ease:** Not usable. There was nothing to read or tap.
- **Friction/delight:** This is the biggest problem. Nothing told me my bag was empty or that anything went wrong.
- **Personalized?** No. Nothing to judge. The cart didn't work correctly.

**Step 9 - Search "comfort shoes"**
- **What I saw:** "comfort shoes," 1,679 results, "Best Matches" sort, and the first two results: a women's Cypress loafer ($70 crossed out, $49.99) and a women's Relaxed Fit wedge ($65, "30% OFF! Applied at Cart"), plus an "Exclusive" tag.
- **Phone ease:** The product photos and prices are readable. The filter chips are small and cut off, and the red member-discount line is tiny.
- **Friction/delight:** Friction: the first two results are women's, and nothing filters to men. Delight: "Relaxed Fit" is the right idea for comfort.
- **Personalized?** No. Search didn't use the fact that I came from the Men menu. Results were only partly relevant: comfort-style shoes, but for the wrong shopper.

---

## Technical Audit

## Technical Summary

- **Scope:** 8 steps were audited. The HTML samples for Homepage, Log In and Men category all show `https://www.skechers.com/`, so those steps appear to be in-page overlays or SPA transitions, not distinct document loads. The a11y and SEO results for those steps are therefore effectively the homepage DOM.
- **Missing metrics:** LCP and CLS were not captured on any step (`?`). Only TTFB is available, so Core Web Vitals can't be assessed.
- **Cart failure:** `/cart/` returned HTTP 429. The View Cart step was audited against what looks like a rate-limit or bot-protection error page. It has no `<title>`, no `lang` and no `<main>`. The cart journey is not verified.
- **Third-party load:** The head loads a large number of third-party scripts, including GTM, TikTok, Bing, Pinterest, Yahoo, Impact, RTB House, Monetate, Quantum Metric, Pulse Insights, Bloomreach and Tune.

## Accessibility

18 axe violations across 3 pages (2 critical, 3 serious, 12 moderate/minor):

- **Homepage (10)**
  - Critical `button-name`: at least one button has no accessible name.
  - Critical `aria-required-parent`: ARIA roles that need a specific parent are not inside one.
  - Serious `link-name`: at least one link has no discernible text.
  - Landmark structure is broken: `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-complementary-is-top-level` and `landmark-unique`. This is consistent with nested or duplicated `<main>` elements.
  - Moderate `page-has-heading-one` and `region`: no `<h1>`, and content sits outside landmarks.
  - Minor `aria-allowed-role`: a role is applied to an element that doesn't allow it.
- **View Cart (4)**
  - Serious `document-title` and `html-has-lang`.
  - Moderate `landmark-one-main` and `page-has-heading-one`.
  - These are most likely artifacts of the 429 response page, not the real cart template.
- **Search "comfort shoes" (4)**
  - `aria-allowed-role`, `landmark-complementary-is-top-level`, `landmark-unique` and `region`, the same patterns as the homepage.
- **Recurring:** The same landmark and role defects appear on both the homepage and search results, which points to a shared header or footer template.

## SEO

- The homepage `<html lang="en">` is correct.
- **No `<h1>`:** `page-has-heading-one` fails on the homepage and on the cart error page, and no heading hierarchy is evident.
- **Cart error page:** it has no `<title>` and no `lang`. If a crawler or user hits a 429, the response has no SEO value. Serving a 429 to automated traffic on `/cart/` is expected, but the error body should still have a valid document shell.
- **Not verifiable:** The truncated HTML doesn't show canonical, meta description, hreflang, Open Graph or structured data, so these couldn't be assessed.
- **Unchanged URL:** Steps 1–3 all report the same URL. If category navigation doesn't update the URL, those views are not crawlable or shareable. Confirm that the History API is used.

## Performance

- **TTFB:** homepage 409ms, Log In 370ms, Men category 370ms and View Cart 152ms are all under the 800ms "good" threshold. Men > Shoes, Product detail, Add to Cart and Search show 21–24ms, which is not realistic for a network document fetch. They likely reflect cache or bfcache hits, SPA transitions, or measurement of a non-navigation entry. Treat them as unreliable.
- **LCP and CLS:** not measured, so they can't be assessed.
- **Third-party load:** the sampled head lists more than 20 third-party script tags, nearly all `async`. Only the Pulse Insights script has SRI (`integrity` plus `crossorigin`), and the others have none.
  - Many are marketing or analytics tags that compete for main-thread time.
  - They also add a large number of third-party DNS and connection setups.
- **Font loading:** web fonts load through `webfontloader.js` from cdnjs, which adds a third-party dependency. The `wf-*-active` classes are applied only after the loader runs, so there is FOIT/FOUT and CLS risk. A self-hosted `@font-face` with `font-display: swap` and preload would avoid this.
- **bfcache:** repeated `Permissions policy violation: unload is not allowed` errors mean something is attempting `unload` handlers (see below). That can disable or degrade back/forward cache eligibility.
- **Viewport height:** the inline `--vh: 6.64px` custom property suggests a JS-computed viewport height. Check it's recomputed on resize and orientation change.

## Mobile Optimization

- `--vh` is set by JS, so layout depends on script execution. This is a possible source of layout shift.
- No viewport meta, tap-target or responsive-image data is visible in the truncated samples, so those couldn't be verified.
- Nothing else mobile-specific is evidenced.

## Console & Network Errors

- **Network:** `429 https://www.skechers.com/cart/` was blocked by rate limiting or bot defense, which probably caught the automated session. Cart and checkout flows were not exercised. A real-user false positive is a conversion risk, so it's worth checking the rate-limit or WAF rules on `/cart/`.
- **Console (21 entries, 2 distinct):**
  - `Permissions policy violation: unload is not allowed in this document` (14 entries, repeated). A script is registering an `unload` listener, but the browser's Permissions-Policy now blocks it. This is typically third-party tag code and should be replaced with `pagehide` or `visibilitychange`.
  - `Unsupported Summarizer API languages were specified...` (7 entries). This is Chrome's built-in Summarizer API being called with unsupported languages. It isn't evident in the site source and likely comes from a browser extension or injected script. Identify the source before treating it as a site defect.
- **GTM preview environment in production:** the loaded GTM URL includes `gtm_auth=...&gtm_preview=env-1&gtm_cookies_win=x`. That points GTM at a non-live environment (env-1), so the page may be running unpublished or staging tag configurations. Confirm whether this is intentional.

## Recommendations

1. **Fix critical a11y defects:** give every button and link an accessible name, and fix the `aria-required-parent` structure on the homepage.
2. **Repair landmarks:** use a single top-level `<main>`, make `<aside>` elements top-level, and give duplicate landmarks distinct `aria-label`s. Fix this in the shared template.
3. **Add an `<h1>`** to the homepage and verify it on category, search and PDP pages.
4. **Cart 429:** investigate rate-limit and WAF thresholds for `/cart/`. Re-run the audit with a throttled or allow-listed session. Make error responses a complete document with `<title>`, `lang` and `<main>`.
5. **Capture LCP and CLS:** the instrumentation isn't recording them. Fix collection (for example a `PerformanceObserver` registered before navigation with `buffered: true`) and re-run. Treat TTFB values of about 21–24ms as suspect.
6. **Replace `unload` listeners** with `pagehide` or `visibilitychange`. Identify which third-party tag registers them.
7. **Audit the third-party tags:** load non-essential tags after interaction or idle time, via the tag manager. Add SRI where the vendor allows it, and dedupe the tags that appear twice (Yahoo `ytc.js`).
8. **Verify the GTM configuration:** confirm that `gtm_preview=env-1` in production is intentional.
9. **Self-host fonts:** replace `webfontloader` from cdnjs with preloaded `@font-face` and `font-display: swap`.
10. **Check URL and History API:** make sure category, search and PDP navigation updates the URL, and that those steps are real routes.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

