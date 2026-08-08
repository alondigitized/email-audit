/**
 * Proof screenshots that actually show the problem.
 *
 * A viewport screenshot of the page a defect was found on is not proof: the
 * offer drawer sits below the fold, so the "evidence" for four missing-alt
 * banner images was a picture of the hero carousel. Whoever receives that
 * report has to go hunting for what we're talking about, which is exactly the
 * friction that gets a report ignored.
 *
 * This re-visits the page, finds the offending elements, scrolls them into
 * view, draws a numbered highlight around each, and captures a shot framed on
 * them — so the screenshot answers "where?" before anyone has to ask.
 */

import { dismissOverlays } from './navigator.mjs';

const HIGHLIGHT_CSS = `
  .qa-evidence-ring {
    position: absolute;
    border: 3px solid #e11d48;
    border-radius: 4px;
    box-shadow: 0 0 0 3px rgba(225,29,72,.22);
    z-index: 2147483646;
    pointer-events: none;
  }
  .qa-evidence-tag {
    position: absolute;
    background: #e11d48;
    color: #fff;
    font: 700 12px/1.5 -apple-system, system-ui, sans-serif;
    padding: 1px 7px;
    border-radius: 3px;
    z-index: 2147483647;
    pointer-events: none;
    white-space: nowrap;
  }
`;

/**
 * Highlight every selector we can find, returning what actually matched so
 * the caller can tell whether the shot is real proof or just a page picture.
 */
async function highlight(page, selectors) {
  return page.evaluate(
    ({ sels, css }) => {
      document.querySelectorAll('.qa-evidence-ring,.qa-evidence-tag,#qa-evidence-style').forEach((n) => n.remove());
      const style = document.createElement('style');
      style.id = 'qa-evidence-style';
      style.textContent = css;
      document.head.appendChild(style);

      const boxes = [];
      let n = 0;
      for (const sel of sels) {
        if (boxes.length >= 8) break; // ringing everything proves nothing
        let els = [];
        try {
          els = Array.from(document.querySelectorAll(sel));
        } catch {
          continue; // selector we can't parse — skip, don't fake a match
        }
        // A selector that matches half the page isn't identifying anything.
        if (els.length > 8) continue;
        for (const el of els.slice(0, 6)) {
          const r = el.getBoundingClientRect();
          if (r.width < 4 || r.height < 4) continue;
          n += 1;
          const top = r.top + window.scrollY;
          const left = r.left + window.scrollX;

          const ring = document.createElement('div');
          ring.className = 'qa-evidence-ring';
          ring.style.cssText += `top:${top}px;left:${left}px;width:${r.width}px;height:${r.height}px;`;
          document.body.appendChild(ring);

          const tag = document.createElement('div');
          tag.className = 'qa-evidence-tag';
          tag.textContent = String(n);
          tag.style.cssText += `top:${Math.max(0, top - 18)}px;left:${left}px;`;
          document.body.appendChild(tag);

          boxes.push({ top, left, width: r.width, height: r.height });
        }
      }
      return boxes;
    },
    { sels: selectors, css: HIGHLIGHT_CSS }
  );
}

/**
 * Capture proof for one finding.
 *
 * Returns { path, matched, framed }. `matched` is how many elements we could
 * actually locate — 0 means we could not prove anything visually and the
 * caller should say so rather than pass off a generic page shot as evidence.
 */
/**
 * Turn catalog elements into the most precise selector available.
 *
 * A class selector like `img.mt-img_fluid` matched 40 images on the homepage —
 * ringing forty things proves nothing. Prefer an exact src/href match, which
 * identifies the one element the finding is actually about.
 */
export function selectorsFor(elements) {
  const out = [];
  for (const e of elements ?? []) {
    if (e?.src) {
      // CSS attribute selectors need quotes escaped, and long CDN URLs are
      // unique enough on their tail segment.
      const src = String(e.src).replace(/"/g, '\\"');
      out.push(`img[src="${src}"]`);
      const file = String(e.src).split('/').pop()?.split('?')[0];
      if (file && file.length > 6) out.push(`img[src*="${file.replace(/"/g, '\\"')}"]`);
    } else if (e?.selector) {
      out.push(e.selector);
    }
  }
  return [...new Set(out)];
}

export async function captureProof(page, { url, selectors, outPath }) {
  if (page.url() !== url) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 }).catch(() => {});
    await page.waitForTimeout(3000);
  }

  // Clear the email-capture modal and cookie banners first. Without this the
  // "proof" was a picture of a 20%-off signup overlay with the actual defect
  // hidden behind it.
  await dismissOverlays(page);
  await page.waitForTimeout(400);
  // Nudge lazy content into existence before looking for the elements.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, 0);
  }).catch(() => {});
  await page.waitForTimeout(700);

  // Expand collapsed regions. The offer drawer ships collapsed ("SAVE 25% OFF
  // — 4 AVAILABLE OFFERS"), so its images are in the DOM but clipped out of
  // view; highlighting them produced rings nobody could see. Done generically
  // via aria-expanded rather than by hardcoding a Skechers selector.
  await expandCollapsed(page);
  await page.waitForTimeout(900);

  const boxes = await highlight(page, selectors.filter(Boolean));

  if (!boxes.length) {
    // Nothing located — capture the page, but tell the truth about it.
    await page.screenshot({ path: outPath, fullPage: false }).catch(() => {});
    return { path: outPath, matched: 0, framed: false };
  }

  // Frame the shot on the highlighted region: scroll so the first box sits
  // comfortably in view, and grow the clip to include nearby siblings.
  const top = Math.min(...boxes.map((b) => b.top));
  const bottom = Math.max(...boxes.map((b) => b.top + b.height));
  const vh = page.viewportSize()?.height ?? 900;
  const scrollTo = Math.max(0, top - Math.min(180, vh * 0.2));
  await page.evaluate((y) => window.scrollTo(0, y), scrollTo);
  await page.waitForTimeout(500);

  // Re-draw after scrolling (lazy images shift layout) and confirm at least
  // one ring actually lands inside the viewport. If we can't frame them —
  // they're spread down a long page, or clipped inside a carousel — fall back
  // to a full-page shot so the rings are visible SOMEWHERE. Handing over a
  // screenshot that doesn't contain the highlight is not proof.
  const redrawn = await highlight(page, selectors.filter(Boolean));
  await page.waitForTimeout(250);

  const inView = await page.evaluate(() => {
    const vh = window.innerHeight;
    return Array.from(document.querySelectorAll('.qa-evidence-ring')).some((el) => {
      const r = el.getBoundingClientRect();
      return r.bottom > 0 && r.top < vh && r.height > 2;
    });
  }).catch(() => false);

  if (inView) {
    await page.screenshot({ path: outPath, fullPage: false }).catch(() => {});
  } else {
    // Can't frame them in a viewport shot, and a 4700px full-page dump buries
    // the evidence. Clip tightly to the ringed region instead — that IS the
    // proof, cropped to what the reader needs to see.
    const all = redrawn.length ? redrawn : boxes;
    const pad = 90;
    const x = Math.max(0, Math.min(...all.map((b) => b.left)) - pad);
    const y = Math.max(0, Math.min(...all.map((b) => b.top)) - pad);
    const right = Math.max(...all.map((b) => b.left + b.width)) + pad;
    const btm = Math.max(...all.map((b) => b.top + b.height)) + pad;
    const dims = await page.evaluate(() => ({
      w: document.documentElement.scrollWidth,
      h: document.documentElement.scrollHeight,
    }));
    await page
      .screenshot({
        path: outPath,
        fullPage: true,
        clip: {
          x,
          y,
          width: Math.max(60, Math.min(right - x, dims.w - x)),
          // Keep the crop readable even if the elements span a long stretch.
          height: Math.max(60, Math.min(btm - y, dims.h - y, 2200)),
        },
      })
      .catch(async () => {
        await page.screenshot({ path: outPath, fullPage: true }).catch(() => {});
      });
  }

  return {
    path: outPath,
    matched: redrawn.length || boxes.length,
    framed: true,
    cropped: !inView,
    tallerThanViewport: bottom - top > vh,
  };
}

/**
 * If a target element is present but has no rendered size, look for a
 * collapsed ancestor (accordion/drawer) and click its toggle to reveal it.
 */
async function expandCollapsed(page) {
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const toggles = Array.from(document.querySelectorAll('[aria-expanded="false"]')).slice(0, 6);
    for (const t of toggles) {
      const r = t.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) continue;
      try { t.click(); await sleep(450); } catch { /* ignore */ }
    }
  }).catch(() => {});
}

/** Remove highlights so later steps aren't polluted. */
export async function clearHighlights(page) {
  await page
    .evaluate(() => {
      document.querySelectorAll('.qa-evidence-ring,.qa-evidence-tag,#qa-evidence-style').forEach((n) => n.remove());
    })
    .catch(() => {});
}
