#!/usr/bin/env node
// One-shot: upload every tracked audit screenshot into R2, update each
// audit.json with the resulting R2 key(s). Safe to re-run — upserts by key.
//
// Run this once, then follow up with `git rm -r site/public/images/audits`
// and add the path to .gitignore. That final commit is what stops the
// images from bloating git on future pushes.

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { putMedia, auditMediaKey, mediaConfigured } from './media.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const SITE_IMAGES = path.join(REPO, 'site', 'public', 'images', 'audits');
const SITE_CONTENT = path.join(REPO, 'site', 'content', 'audits');

async function main() {
  if (!mediaConfigured()) {
    console.error('R2 not configured — set R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY / R2_BUCKET.');
    process.exit(1);
  }
  if (!fs.existsSync(SITE_IMAGES)) {
    console.error('No site/public/images/audits directory.');
    process.exit(1);
  }

  const slugs = fs
    .readdirSync(SITE_IMAGES, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  let uploaded = 0;
  let skipped = 0;
  let failed = 0;
  let jsonUpdated = 0;

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const dir = path.join(SITE_IMAGES, slug);
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.toLowerCase().endsWith('.png'));
    if (files.length === 0) {
      skipped++;
      continue;
    }

    const uploadedKeys = {}; // filename -> key
    for (const f of files) {
      try {
        const key = auditMediaKey(slug, f);
        await putMedia({
          filePath: path.join(dir, f),
          key,
          contentType: 'image/png',
        });
        uploadedKeys[f] = key;
        uploaded++;
      } catch (err) {
        console.error(`fail   ${slug}/${f}: ${String(err).slice(0, 200)}`);
        failed++;
      }
    }

    // Update the matching audit.json so the site can generate signed URLs.
    const auditPath = path.join(SITE_CONTENT, slug, 'audit.json');
    if (!fs.existsSync(auditPath)) continue;
    try {
      const data = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
      data.assets = data.assets ?? {};
      let mutated = false;

      if (uploadedKeys['render.png']) {
        data.assets.render_image_key = uploadedKeys['render.png'];
        mutated = true;
      }

      if (Array.isArray(data.assets.journey_steps)) {
        for (const step of data.assets.journey_steps) {
          if (step.viewport_screenshot && uploadedKeys[step.viewport_screenshot]) {
            step.viewport_screenshot_key = uploadedKeys[step.viewport_screenshot];
            mutated = true;
          }
          if (step.fullpage_screenshot && uploadedKeys[step.fullpage_screenshot]) {
            step.fullpage_screenshot_key = uploadedKeys[step.fullpage_screenshot];
            mutated = true;
          }
        }
      }

      if (mutated) {
        fs.writeFileSync(auditPath, JSON.stringify(data, null, 2));
        jsonUpdated++;
      }
    } catch (err) {
      console.error(`fail update ${slug}/audit.json: ${err.message}`);
      failed++;
    }

    if ((i + 1) % 25 === 0) {
      console.log(`... ${i + 1}/${slugs.length} slugs processed (${uploaded} uploads, ${jsonUpdated} json updates)`);
    }
  }

  console.log(
    `\ndone. ${uploaded} files uploaded, ${jsonUpdated} audit.json files updated, ${skipped} empty dirs skipped, ${failed} failed.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
