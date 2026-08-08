/**
 * Agentic navigation for the QA secret shoppers.
 *
 * There are no predefined routes or selectors here. At each step we enumerate
 * the interactive elements actually rendered on the page, hand that list to
 * the persona along with its shopping goal, and it picks the next action — the
 * way a real secret shopper works from what they can see.
 *
 * This also unlocks the class of defect passive observation cannot reach:
 * a control that does nothing, a search that returns an empty grid, a filter
 * that drops every result. Those only exist if you actually click things.
 *
 * Safety: the runner — not the prompt — blocks anything transactional.
 * A secret shopper looks; it does not place orders, create accounts, or
 * submit personal data. See BLOCKED_PATTERNS and isTransactional().
 */

/** Text/URL patterns we refuse to activate regardless of what the model asks. */
const BLOCKED_PATTERNS = [
  /place\s*order|submit\s*order|complete\s*(purchase|order)|pay\s*now|buy\s*now/i,
  /checkout/i,
  /create\s*(an\s*)?account|sign\s*up|register|join\s*(now|us)/i,
  /subscribe|sign me up|text\s*me|join sms/i,
  /apply\s*(now|for)|credit\s*card/i,
  /delete|remove\s*account|unsubscribe/i,
  /gift\s*card\s*(purchase|buy)/i,
];

const BLOCKED_URL_PATTERNS = [
  /\/checkout/i,
  /\/order-confirm/i,
  /attn\.tv|klaviyo|sms/i,
  /\/register|\/create-account/i,
];

export function isTransactional(label, href) {
  const text = String(label || '');
  const url = String(href || '');
  if (BLOCKED_PATTERNS.some((re) => re.test(text))) return true;
  if (BLOCKED_URL_PATTERNS.some((re) => re.test(url))) return true;
  return false;
}

/**
 * Enumerate what a shopper could actually act on right now.
 *
 * Returns indexed entries — the model references them by index rather than
 * inventing a selector, so we always act on an element we actually found.
 * Only visible, in-viewport-ish, reasonably sized elements are included.
 */
export async function listInteractables(page, limit = 45) {
  const raw = await page.evaluate(() => {
    const out = [];
    const seenLabels = new Set();
    // Clear tags from the previous step so indices never collide.
    document.querySelectorAll('[data-qa-ref],[data-qa-orig]').forEach((el) => {
      el.removeAttribute('data-qa-ref');
      el.removeAttribute('data-qa-orig');
    });

    const visible = (el) => {
      const r = el.getBoundingClientRect();
      if (r.width < 8 || r.height < 8) return false;
      const st = getComputedStyle(el);
      if (st.visibility === 'hidden' || st.display === 'none' || Number(st.opacity) < 0.1) return false;
      return true;
    };

    const label = (el) => {
      const t =
        (el.innerText || '').trim() ||
        el.getAttribute('aria-label') ||
        el.getAttribute('title') ||
        el.getAttribute('placeholder') ||
        el.querySelector('img')?.getAttribute('alt') ||
        el.value ||
        '';
      return String(t).replace(/\s+/g, ' ').trim().slice(0, 90);
    };

    const push = (el, kind) => {
      if (!visible(el)) return;
      const lab = label(el);
      if (!lab && kind !== 'input') return;
      // Collapse repeated identical nav links (mega-menus duplicate heavily).
      const key = kind + '|' + lab + '|' + (el.getAttribute('href') || '');
      if (seenLabels.has(key)) return;
      seenLabels.add(key);
      const r = el.getBoundingClientRect();
      // Stamp a unique handle on the element itself. Rebuilding a CSS path
      // and re-querying it did not survive contact with a real site — the
      // path resolved to an element Playwright considered unactionable and
      // every click timed out, which the lens then misread as a dead control.
      const tag = String(out.length);
      // data-qa-orig is the enumeration-order handle; data-qa-ref is re-stamped
      // below to match the (filtered, sorted) index the model actually sees.
      el.setAttribute('data-qa-orig', tag);
      out.push({
        kind,
        label: lab,
        href: el.getAttribute('href') || null,
        type: el.getAttribute('type') || null,
        y: Math.round(r.top + window.scrollY),
        tag,
      });
    };

    document.querySelectorAll('a[href]').forEach((el) => push(el, 'link'));
    document.querySelectorAll('button, [role="button"]').forEach((el) => push(el, 'button'));
    document
      .querySelectorAll('input[type="text"], input[type="search"], input:not([type]), select')
      .forEach((el) => push(el, 'input'));
    return out;
  });

  // Prefer things nearer the top of the document; drop transactional targets
  // entirely so the model is never even offered them.
  const chosen = raw
    .filter((e) => !isTransactional(e.label, e.href))
    .sort((a, b) => a.y - b.y)
    .slice(0, limit);

  // Re-stamp so data-qa-ref matches the index the model actually sees.
  await page.evaluate((tags) => {
    document.querySelectorAll('[data-qa-ref]').forEach((el) => el.removeAttribute('data-qa-ref'));
    tags.forEach((oldTag, i) => {
      const el = document.querySelector(`[data-qa-orig="${oldTag}"]`);
      if (el) el.setAttribute('data-qa-ref', String(i));
    });
  }, chosen.map((e) => e.tag)).catch(() => {});

  return chosen.map((e, i) => ({ ...e, ref: i }));
}

/**
 * Classify the page we've landed on into one of the intake form's Areas,
 * from what the page actually contains rather than a URL allowlist.
 */
export async function inferArea(page) {
  // Host check happens in Node against the real page URL — an off-site
  // landing (affiliate, SMS provider, social) is its own Area.
  let host = '';
  try {
    host = new URL(page.url()).hostname;
  } catch { /* keep empty */ }
  if (host && !/(^|\.)skechers\.com$/i.test(host)) {
    return /facebook|instagram|tiktok|youtube|pinterest|x\.com|twitter/i.test(host)
      ? 'Social (off-site)'
      : 'Off-site';
  }

  const sig = await page.evaluate(() => {
    const path = location.pathname;
    const text = document.body.innerText.slice(0, 4000);
    const tiles = document.querySelectorAll(
      '[class*="product-tile"], [class*="product-grid"] a, [data-pid], [class*="ProductTile"]'
    ).length;
    return {
      path,
      search: location.search,
      tiles,
      hasAddToCart: /add to (cart|bag)/i.test(text),
      hasSizePicker: !!document.querySelector('[class*="size"], [data-attr="size"]'),
      hasCartSummary: /order summary|subtotal|your (cart|bag)/i.test(text),
      isSearch: /search/i.test(location.pathname + location.search) || /results? for/i.test(text),
      productish: /^\/[a-z0-9-]+\/\d+_[A-Za-z0-9]+\.html$/.test(path),
    };
  });

  if (sig.path === '/' || sig.path === '') return 'Homepage';
  if (sig.hasCartSummary || /\/cart/i.test(sig.path)) return 'Cart';
  if (/\/(account|order)/i.test(sig.path)) return 'MyAccount / Order History';
  if (/loyalty|rewards|plus/i.test(sig.path)) return 'Loyalty Dashboard';
  if (sig.isSearch) return 'Site search';
  if (sig.productish || (sig.hasAddToCart && sig.hasSizePicker && sig.tiles < 6)) return 'PDP';
  if (sig.tiles >= 6) return 'PLP';
  return 'Homepage';
}

/**
 * Perform one chosen action and report what observably happened.
 *
 * The "what happened" part is the point: a click that changes nothing is a
 * dead control, and that is a real functional defect we could never see by
 * loading URLs from a list.
 */
export async function performAction(page, action, interactables) {
  const before = {
    url: page.url(),
    title: await page.title().catch(() => ''),
    bodyLen: await page.evaluate(() => document.body.innerText.length).catch(() => 0),
  };

  const target = typeof action.ref === 'number' ? interactables[action.ref] : null;
  if (action.kind !== 'scroll' && !target) {
    return { ok: false, reason: 'no such element ref', before, after: before };
  }
  if (target && isTransactional(target.label, target.href)) {
    return { ok: false, reason: 'blocked: transactional action', before, after: before };
  }

  try {
    if (action.kind === 'scroll') {
      await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.9));
    } else {
      const el = page.locator(`[data-qa-ref="${target.ref}"]`).first();
      // Mega-menu entries and lazily-revealed controls are often not
      // actionable until scrolled to and hovered.
      await el.scrollIntoViewIfNeeded({ timeout: 5000 }).catch(() => {});
      await el.hover({ timeout: 4000 }).catch(() => {});
      if (action.kind === 'type') {
        await el.fill(String(action.text ?? '').slice(0, 80), { timeout: 8000 });
        await el.press('Enter');
      } else {
        try {
          await el.click({ timeout: 8000 });
        } catch {
          // Some nav entries are anchors whose click target is a child span,
          // or are covered by an overlay. A DOM-level click still exercises
          // the site's own handler, which is what we're testing.
          await el.evaluate((n) => n.click());
        }
      }
    }
  } catch (err) {
    // IMPORTANT: this is OUR automation failing to drive the element, which
    // is NOT evidence that the control is broken. It must never be reported
    // as a site defect — an early version filed a High-urgency "main nav is
    // dead" report that was purely a selector bug on our side.
    return {
      ok: false,
      automationFailed: true,
      reason: `automation could not operate this element: ${String(err).slice(0, 110)}`,
      before,
      after: before,
    };
  }

  await page.waitForLoadState('domcontentloaded', { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(2500);

  const after = {
    url: page.url(),
    title: await page.title().catch(() => ''),
    bodyLen: await page.evaluate(() => document.body.innerText.length).catch(() => 0),
  };

  const changed =
    before.url !== after.url ||
    before.title !== after.title ||
    Math.abs(before.bodyLen - after.bodyLen) > 120;

  return {
    ok: true,
    changed,
    // A control that produced no observable change is the signal Quinn exists
    // to find. Surfaced, not judged — the lens decides if it's a defect.
    deadControl: action.kind === 'click' && !changed,
    target: target ? { label: target.label, href: target.href, path: target.path } : null,
    before,
    after,
  };
}

/** Dismiss the cookie/region interstitials that block a first-time visitor. */
/**
 * Block third-party popup/email-capture vendors at the network layer.
 *
 * The Attentive email-capture modal renders in its own iframe, so clicking a
 * close button in the main document never finds it — every proof screenshot
 * came back as a picture of a "20% OFF" signup overlay with the actual defect
 * hidden behind it. Blocking the vendor is far more reliable than racing its
 * close button.
 *
 * Caveat worth knowing: this suppresses those vendors' own content, so defects
 * *inside* the popup itself are out of scope for a run with this enabled.
 */
export async function installPopupBlocker(context) {
  const VENDORS =
    /attn\.tv|attentivemobile|klaviyo|privy|justuno|optimonk|sleeknote|wisepops|bounceexchange|exponea/i;
  await context.route('**/*', (route) => {
    const url = route.request().url();
    if (VENDORS.test(url)) return route.abort();
    return route.continue();
  }).catch(() => {});
}

export async function dismissOverlays(page) {
  // NOTE: deliberately does NOT click "Continue" — on Skechers that submits
  // the email-capture form. Closing an overlay must never opt anyone in.
  const labels = [
    /accept.*cookies?/i, /^accept$/i, /^close$/i,
    /no thanks/i, /^dismiss$/i, /stay on/i, /^got it$/i, /^x$/i,
  ];
  for (const re of labels) {
    try {
      const btn = page.getByRole('button', { name: re }).first();
      if (await btn.isVisible({ timeout: 600 })) {
        await btn.click({ timeout: 3000 });
        await page.waitForTimeout(600);
      }
    } catch { /* nothing to dismiss */ }
  }

  // Same sweep inside child frames — vendor modals live in their own iframe.
  for (const f of page.frames()) {
    if (f === page.mainFrame()) continue;
    await f.evaluate(() => {
      for (const s of ['[aria-label*="close" i]', 'button[class*="close" i]', '[data-testid*="close" i]']) {
        for (const el of Array.from(document.querySelectorAll(s)).slice(0, 3)) {
          try { el.click(); } catch { /* ignore */ }
        }
      }
    }).catch(() => {});
  }

  // Generic close affordances the role/name lookup misses (icon-only X in a
  // modal, close spans, aria-labelled dismissers).
  await page.evaluate(() => {
    const sels = [
      '[aria-label*="close" i]', '[class*="close" i][role="button"]',
      'button[class*="close" i]', '[data-dismiss]', '.modal button.close',
      '[id*="close" i][role="button"]',
    ];
    for (const s of sels) {
      for (const el of Array.from(document.querySelectorAll(s)).slice(0, 4)) {
        const r = el.getBoundingClientRect();
        if (r.width > 4 && r.height > 4) { try { el.click(); } catch { /* ignore */ } }
      }
    }
  }).catch(() => {});
  await page.waitForTimeout(500);
}
