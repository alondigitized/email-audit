// Browser hygiene for runners that use the SHARED real Chrome over CDP.
//
// The trap: on a CDP connection, browser.close() only DISCONNECTS the
// Playwright client — every page opened with context.newPage() stays alive
// as a real tab in the persistent Chrome (the daily-wrapper deliberately
// leaves that Chrome running so the logged-in session survives). Nightly
// runs that don't close their pages accumulate tabs day after day, and
// each Skechers tab holds a full renderer process (~150-400 MB): the Mac
// mini eventually runs out of memory. An error mid-run leaks the tab even
// in scripts that close on the happy path — none of the runners used
// try/finally before this module existed.
//
// Contract for every runner:
//   const page = await context.newPage();
//   try { ...work... }
//   finally { await releaseBrowser({ browser, page, viaCdp }); }
//
// plus reapStrayPages(browser) right after connecting, so tabs leaked by a
// crashed previous run are cleaned on the NEXT run even if that crash was
// unclean (SIGKILL, launchd timeout, power loss).

const log = (m, extra) =>
  console.log(`[${new Date().toISOString()}] ${m}${extra ? ' ' + JSON.stringify(extra) : ''}`);

/**
 * Close leftover tabs from previous (possibly crashed) runs on the shared
 * CDP Chrome. Closes every page except:
 *   - pages passed in `keep` (the caller's own),
 *   - devtools/extension pages,
 *   - ONE about:blank (Chrome needs at least one page or it may quit).
 * Only ever call this on the DEDICATED automation Chrome (port 9222's
 * .chrome-qa-profile) — never on a browser a human is using.
 */
export async function reapStrayPages(browser, { keep = [] } = {}) {
  let closed = 0;
  try {
    const keepSet = new Set(keep);
    for (const ctx of browser.contexts()) {
      const pages = ctx.pages();
      let blankKept = false;
      for (const p of pages) {
        if (keepSet.has(p)) continue;
        const url = p.url();
        if (url.startsWith('devtools://') || url.startsWith('chrome-extension://')) continue;
        if ((url === 'about:blank' || url === 'chrome://newtab/') && !blankKept) {
          blankKept = true; // leave one so Chrome doesn't exit
          continue;
        }
        await p.close().catch(() => {});
        closed++;
      }
    }
    // Guarantee one keeper page: Chrome with zero pages can quit on some
    // platforms, which would kill the warm logged-in session mid-week.
    const remaining = browser.contexts().flatMap((c) => c.pages());
    if (remaining.length === 0) {
      const ctx = browser.contexts()[0];
      if (ctx) await ctx.newPage().then((p) => p.goto('about:blank').catch(() => {})).catch(() => {});
    }
  } catch (err) {
    log('reapStrayPages failed (non-fatal)', { err: String(err).slice(0, 120) });
  }
  if (closed > 0) log('closed stray tabs from previous runs', { closed });
  return closed;
}

/**
 * Release everything a runner opened. Safe to call multiple times and on
 * partially-initialized state (any argument may be null/undefined).
 *
 *   viaCdp=true  -> close our pages/contexts INSIDE the shared Chrome
 *                   (disconnecting alone would orphan them as live tabs),
 *                   then disconnect.
 *   viaCdp=false -> we own the whole (stealth/headless) browser process;
 *                   browser.close() tears it down, pages included.
 */
export async function releaseBrowser({ browser, pages = [], contexts = [], page = null, viaCdp = true } = {}) {
  const all = page ? [...pages, page] : pages;
  for (const p of all) {
    if (!p) continue;
    await p.close().catch(() => {});
  }
  if (viaCdp) {
    // Only close contexts WE created (callers pass them explicitly).
    // contexts()[0] on a CDP connect is the browser's own default context —
    // closing it would close the human-visible window set.
    for (const c of contexts) {
      if (!c) continue;
      await c.close().catch(() => {});
    }
  }
  if (browser) await browser.close().catch(() => {});
}
