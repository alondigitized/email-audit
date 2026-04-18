#!/usr/bin/env node
/**
 * One-shot migration: move audit screenshots from
 *   site/public/images/audits/{slug}/
 * to
 *   site/private-content/audits/{slug}/
 *
 * Idempotent. Safe to re-run. At cutover, run after rebasing the feature
 * branch on main to catch any new audits the daemons pushed during the
 * freeze window.
 *
 * Usage: cd site && node scripts/move-public-images-to-private.mjs
 */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, "..");
const FROM = path.join(SITE_ROOT, "public", "images", "audits");
const TO = path.join(SITE_ROOT, "private-content", "audits");

function moveDirContents(src, dst) {
  if (!fs.existsSync(src)) return { moved: 0, merged: 0 };
  fs.mkdirSync(dst, { recursive: true });

  let moved = 0;
  let merged = 0;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      if (fs.existsSync(d)) {
        // Merge into existing slug dir (overwrite per-file).
        for (const f of fs.readdirSync(s)) {
          fs.renameSync(path.join(s, f), path.join(d, f));
        }
        fs.rmdirSync(s);
        merged++;
      } else {
        fs.renameSync(s, d);
        moved++;
      }
    }
  }
  return { moved, merged };
}

const { moved, merged } = moveDirContents(FROM, TO);
console.log(`moved ${moved} slug dirs, merged ${merged} existing`);
if (fs.existsSync(FROM) && fs.readdirSync(FROM).length === 0) {
  fs.rmdirSync(FROM);
  console.log(`removed empty ${path.relative(SITE_ROOT, FROM)}`);
}
