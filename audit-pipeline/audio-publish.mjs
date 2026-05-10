// Producer-side audio generation + persistence. Sits between the
// daemon's review-completion hook and the TTS provider / R2 / Postgres.
//
// Flow per audit:
//   1. Daemon calls generateAndPublishAudio({ slug, persona, sections,
//      email, artifactDir }) after publishSite finishes.
//   2. We look up the persona's profile in Postgres to pick a voice
//      (gender + age bucket, or profile.tts override).
//   3. tts.buildSpokenScript turns the parsed review sections into
//      inbox-clean spoken text — only Take + What stood out + What I'd
//      change get narrated; the scores card is visual-only.
//   4. tts.synthesizeMp3 calls Google Cloud TTS and returns an MP3
//      buffer.
//   5. We write the MP3 to the artifact dir (audio.mp3) and upload to
//      R2 at audits/{slug}/audio.mp3.
//   6. reaction.review_data.audio = { key, voice, rate, duration_sec,
//      generated_at } so the renderer can mint a signed URL on read.
//
// Best-effort: every failure path here is non-fatal. The audit row
// already exists in DB before this runs; missing audio just disables the
// player + omits the <enclosure> from the RSS feed.

import fs from 'fs';
import path from 'path';
import { neon } from '@neondatabase/serverless';
import {
  buildSpokenScript,
  estimateDuration,
  pickVoice,
  synthesizeMp3,
  ttsConfigured,
} from './tts.mjs';
import { putMedia, auditMediaKey, mediaConfigured } from './media.mjs';

function db() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL_UNPOOLED or DATABASE_URL required');
  return neon(url);
}

/**
 * Generate + persist audio for one audit. Returns the audio metadata
 * persisted into review_data.audio (or null when skipped). Throws only
 * on hard failures the caller's try/catch should log.
 *
 * Skip conditions (return null cleanly):
 *   - GOOGLE_TTS_API_KEY unset
 *   - R2 not configured
 *   - Empty spoken script (no Take / Stood out / Recommendations to
 *     narrate — usually a malformed audit)
 *   - audio already present on this reaction with the same voice
 *     (idempotent re-runs don't burn TTS quota)
 */
export async function generateAndPublishAudio({
  slug,
  persona,
  sections,
  email,
  artifactDir,
  force = false,
}) {
  if (!ttsConfigured()) return null;
  if (!mediaConfigured()) return null;
  if (!slug || !persona) return null;

  const sql = db();

  // Look up persona profile + existing audio metadata.
  const personaRows = await sql`
    SELECT name, short, profile FROM persona WHERE slug = ${persona} LIMIT 1
  `;
  const personaRow = personaRows[0];
  if (!personaRow?.profile?.identity) return null;

  const existingRows = await sql`
    SELECT review_data->'audio' AS audio FROM reaction WHERE slug = ${slug} LIMIT 1
  `;
  const existing = existingRows[0]?.audio ?? null;
  const { voice, rate } = pickVoice(personaRow.profile);
  if (!force && existing?.key && existing.voice === voice) {
    return existing;
  }

  const personaMeta = {
    name: personaRow.name,
    short: personaRow.short ?? personaRow.name,
  };

  const text = buildSpokenScript({
    persona: personaMeta,
    sections: sections ?? {},
    email: email ?? {},
  });
  if (!text || text.length < 100) return null;

  let result;
  try {
    result = await synthesizeMp3({ text, voice, rate });
  } catch (err) {
    throw new Error(`tts synth failed for ${slug}: ${err.message}`);
  }
  if (!result?.buffer) return null;

  // Write the MP3 to the artifact dir alongside the screenshot. Lets
  // rerun-audit reuse without re-billing TTS, and gives us a local-on-
  // disk fallback if the R2 upload throws.
  if (artifactDir && fs.existsSync(artifactDir)) {
    const localPath = path.join(artifactDir, 'audio.mp3');
    fs.writeFileSync(localPath, result.buffer);
    try {
      const key = auditMediaKey(slug, 'audio.mp3');
      await putMedia({
        filePath: localPath,
        key,
        contentType: 'audio/mpeg',
      });
      const audioMeta = {
        key,
        voice: result.voice,
        rate: result.rate,
        duration_sec: estimateDuration(text, result.rate),
        char_count: text.length,
        generated_at: new Date().toISOString(),
      };
      // jsonb_set in one round-trip; preserves the rest of review_data.
      await sql`
        UPDATE reaction
        SET review_data = jsonb_set(review_data, '{audio}', ${JSON.stringify(audioMeta)}::jsonb),
            updated_at = NOW()
        WHERE slug = ${slug}
      `;
      // Mirror into legacy audit.data.review.audio so the audit table
      // stays consistent until that table retires.
      await sql`
        UPDATE audit
        SET data = jsonb_set(data, '{review,audio}', ${JSON.stringify(audioMeta)}::jsonb),
            updated_at = NOW()
        WHERE slug = ${slug}
      `;
      return audioMeta;
    } catch (err) {
      throw new Error(`tts r2 publish failed for ${slug}: ${err.message}`);
    }
  }

  // No artifactDir — upload buffer directly via a temp file.
  const tmp = `/tmp/etell-tts-${Date.now()}-${slug}.mp3`;
  fs.writeFileSync(tmp, result.buffer);
  try {
    const key = auditMediaKey(slug, 'audio.mp3');
    await putMedia({
      filePath: tmp,
      key,
      contentType: 'audio/mpeg',
    });
    const audioMeta = {
      key,
      voice: result.voice,
      rate: result.rate,
      duration_sec: estimateDuration(text, result.rate),
      char_count: text.length,
      generated_at: new Date().toISOString(),
    };
    await sql`
      UPDATE reaction
      SET review_data = jsonb_set(review_data, '{audio}', ${JSON.stringify(audioMeta)}::jsonb),
          updated_at = NOW()
      WHERE slug = ${slug}
    `;
    await sql`
      UPDATE audit
      SET data = jsonb_set(data, '{review,audio}', ${JSON.stringify(audioMeta)}::jsonb),
          updated_at = NOW()
      WHERE slug = ${slug}
    `;
    return audioMeta;
  } finally {
    try { fs.unlinkSync(tmp); } catch {}
  }
}
