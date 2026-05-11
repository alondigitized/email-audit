// Piper TTS wrapper for the audit pipeline.
//
// Piper is a local neural TTS binary (https://github.com/rhasspy/piper).
// We shell out to it from the producer daemon — no API keys, no
// per-character cost, no PII leaving the Mac mini.
//
// Setup (one-time on the host that runs the daemon):
//
//   brew install piper-tts ffmpeg
//   mkdir -p ~/.local/share/piper-voices && cd ~/.local/share/piper-voices
//
//   # Download the en_US voices the persona map below references.
//   # Each voice is two files: .onnx (model) + .onnx.json (config).
//   #
//   #   huggingface.co/rhasspy/piper-voices/tree/main/en/en_US
//   #
//   # Curl pairs example:
//   for v in amy-medium kristin-medium kathleen-low ryan-high joe-medium norman-medium; do
//     curl -LO "https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/${v%-*}/${v##*-}/en_US-${v}.onnx"
//     curl -LO "https://huggingface.co/rhasspy/piper-voices/resolve/main/en/en_US/${v%-*}/${v##*-}/en_US-${v}.onnx.json"
//   done
//
// Env:
//   PIPER_BIN          path to the piper binary (default /opt/homebrew/bin/piper)
//   PIPER_VOICES_DIR   dir holding the .onnx + .onnx.json files
//                      (default ~/.local/share/piper-voices)
//   FFMPEG_BIN         path to ffmpeg (default /opt/homebrew/bin/ffmpeg)
//
// Voice selection: each persona's profile.identity (gender + age) maps
// to a Piper voice name via VOICE_BY_GENDER_AGE. profile.tts.voice
// overrides the default — set it to a piper voice id like
// `en_US-amy-medium` to pin.

import { execFile } from 'child_process';
import { promisify } from 'util';
import crypto from 'crypto';
import fs from 'fs';
import os from 'os';
import path from 'path';

const execFileAsync = promisify(execFile);

// The piper-tts pip wheel installs the entrypoint into the user's
// Python `bin/` dir. On macOS w/ system Python 3.9 that's
// ~/Library/Python/3.9/bin/piper. Override via PIPER_BIN if you used
// a venv, pipx, or a different Python.
const PIPER_BIN =
  process.env.PIPER_BIN ||
  `${process.env.HOME}/Library/Python/3.9/bin/piper`;
const FFMPEG_BIN = process.env.FFMPEG_BIN || '/opt/homebrew/bin/ffmpeg';
const VOICES_DIR =
  process.env.PIPER_VOICES_DIR ||
  path.join(os.homedir(), '.local', 'share', 'piper-voices');

const CHAR_BUDGET = 4500; // ~4-5 min audio at default length-scale

// Piper voice picks for each gender × age bucket. Names follow the
// rhasspy/piper-voices repo convention: en_US-<speaker>-<quality>.
//
//   amy-medium       — female, mid-30s warm
//   kristin-medium   — female, mid-30s warm alt (used for mid bucket)
//   kathleen-low     — female, older measured
//   ryan-high        — male, younger crisp
//   joe-medium       — male, mid-range
//   norman-medium    — male, older measured
//   lessac-medium    — neutral female, very clear (fallback)
//
// All voices ship at 22.05 kHz mono. Length-scale > 1 slows the read,
// < 1 speeds it up — inverse of our rate axis. We map rate → 1/rate.
const VOICE_BY_GENDER_AGE = {
  'female:young':  { voice: 'en_US-amy-medium',      rate: 1.05 },
  'female:mid':    { voice: 'en_US-kristin-medium',  rate: 1.00 },
  'female:older':  { voice: 'en_US-kathleen-low',    rate: 0.95 },
  'male:young':    { voice: 'en_US-ryan-high',       rate: 1.05 },
  'male:mid':      { voice: 'en_US-joe-medium',      rate: 1.00 },
  'male:older':    { voice: 'en_US-norman-medium',   rate: 0.95 },
  'other:young':   { voice: 'en_US-lessac-medium',   rate: 1.05 },
  'other:mid':     { voice: 'en_US-lessac-medium',   rate: 1.00 },
  'other:older':   { voice: 'en_US-lessac-medium',   rate: 0.95 },
};

function ageBucket(age) {
  if (typeof age !== 'number' || !Number.isFinite(age)) return 'mid';
  if (age < 30) return 'young';
  if (age < 50) return 'mid';
  return 'older';
}

function normalizeGender(g) {
  const s = String(g || '').toLowerCase();
  if (s.startsWith('f') || s === 'woman' || s === 'female') return 'female';
  if (s.startsWith('m') || s === 'man' || s === 'male') return 'male';
  return 'other';
}

/**
 * Pick a Piper voice for a persona. Honors profile.tts override; falls
 * back to the gender × age-bucket default. Returns { voice, rate }.
 */
export function pickVoice(personaProfile) {
  const override = personaProfile?.tts;
  if (override?.voice) {
    return { voice: override.voice, rate: override.rate ?? 1.0 };
  }
  const id = personaProfile?.identity ?? {};
  const key = `${normalizeGender(id.gender)}:${ageBucket(id.age)}`;
  return VOICE_BY_GENDER_AGE[key] ?? VOICE_BY_GENDER_AGE['other:mid'];
}

/**
 * Reduce a persona's review markdown to inbox-clean spoken text. Only
 * sections 1-3 of the v2 IA are narrated (Take / What stood out /
 * What I'd change). Score blocks, subject grid, preview grid all drop —
 * they're visual.
 */
export function buildSpokenScript({ persona, sections, email }) {
  const lines = [];

  const who = persona?.short ?? persona?.name ?? 'I';
  const brand = email?.from_display_name ?? '';
  const subject = email?.subject ?? '';
  if (brand && subject) {
    lines.push(`${who} on ${brand}: ${subject}.`);
    lines.push('');
  }

  const overview = (sections.executive_summary ?? []).join(' ');
  const worked = (sections.whats_working ?? []).join(' ');
  const didnt = (sections.whats_weak ?? []).join(' ');
  // V2-window fallback when the audit was produced under the brief
  // "What stood out" shape — narrate it as one block when present.
  const stoodOut =
    !worked && !didnt ? (sections.stood_out ?? []).join(' ') : '';
  const changes = (sections.recommendations ?? []).join(' ');

  if (overview) {
    lines.push('Overview.');
    lines.push(stripMarkdown(overview));
    lines.push('');
  }
  if (worked) {
    lines.push('What worked.');
    lines.push(stripMarkdown(worked));
    lines.push('');
  }
  if (didnt) {
    lines.push("What didn't.");
    lines.push(stripMarkdown(didnt));
    lines.push('');
  }
  if (stoodOut) {
    lines.push('What stood out.');
    lines.push(stripMarkdown(stoodOut));
    lines.push('');
  }
  if (changes) {
    lines.push("What I'd change.");
    lines.push(stripMarkdown(changes));
  }

  let text = lines.join('\n').trim();
  if (text.length > CHAR_BUDGET) {
    const sliced = text.slice(0, CHAR_BUDGET);
    const lastStop = Math.max(
      sliced.lastIndexOf('. '),
      sliced.lastIndexOf('! '),
      sliced.lastIndexOf('? ')
    );
    text = sliced.slice(0, lastStop > CHAR_BUDGET * 0.8 ? lastStop + 1 : CHAR_BUDGET);
  }
  return text;
}

function stripMarkdown(s) {
  return s
    .replace(/\*\*(\d+(?:\.\d+)?)\s*\/\s*10\*\*/g, '$1 out of 10')
    .replace(/(\d+(?:\.\d+)?)\s*\/\s*10/g, '$1 out of 10')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^\s*[-*]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/\n{2,}/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

function voicePath(voiceId) {
  return path.join(VOICES_DIR, `${voiceId}.onnx`);
}

/**
 * Synthesize MP3 from text via Piper + ffmpeg. Returns
 * { buffer, voice, rate } or null if Piper isn't configured or the
 * voice model is missing.
 *
 * Pipeline uses a temp WAV file between piper and ffmpeg rather than a
 * live stream. The Node child_process pipe between two execFile spawns
 * corrupts long PCM streams — symptomatic output is clipped near 0 dB
 * with constant max-volume samples instead of speech. Routing through
 * a temp file is a couple of disk writes and adds no perceptible
 * latency (the WAV is ~5 MB / 5 min audio).
 *
 * Piper writes its native sample rate to the WAV header so ffmpeg
 * doesn't need to be told — that also fixes the kathleen-low 16 kHz
 * voice that the raw-S16LE pipeline misinterpreted.
 */
export async function synthesizeMp3({ text, voice, rate }) {
  if (!ttsConfigured()) return null;
  if (!text || !text.trim()) return null;

  const modelPath = voicePath(voice);
  if (!fs.existsSync(modelPath)) {
    throw new Error(
      `piper: voice model missing — expected ${modelPath}. ` +
        `Download from huggingface.co/rhasspy/piper-voices.`
    );
  }
  if (!fs.existsSync(`${modelPath}.json`)) {
    throw new Error(`piper: voice config missing — expected ${modelPath}.json`);
  }

  // length-scale is the inverse of our rate axis (rate 1.10 = faster =
  // shorter audio = length-scale 0.91).
  const lengthScale = (1 / (rate || 1.0)).toFixed(3);

  const stem = `etell-tts-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
  const wavPath = path.join(os.tmpdir(), `${stem}.wav`);

  try {
    // Step 1: piper text→WAV. Pass text on stdin; --output-file writes
    // a proper RIFF WAV with sample-rate metadata.
    const piper = execFile(
      PIPER_BIN,
      ['--model', modelPath, '--output-file', wavPath, '--length-scale', lengthScale],
      { maxBuffer: 1024 * 1024 * 16 }
    );
    const piperErr = collectStderr(piper);
    piper.stdin.write(text);
    piper.stdin.end();
    const piperCode = await new Promise((res) => piper.on('close', res));
    if (piperCode !== 0) {
      throw new Error(
        `piper exited ${piperCode}: ${(await piperErr).slice(0, 400)}`
      );
    }

    // Step 2: ffmpeg WAV→MP3. Reads the WAV header so we don't have to
    // guess sample rate / channels / endianness.
    const { stdout: mp3 } = await execFileAsync(
      FFMPEG_BIN,
      [
        '-hide_banner',
        '-loglevel', 'error',
        '-y',
        '-i', wavPath,
        '-codec:a', 'libmp3lame',
        '-qscale:a', '4',
        '-f', 'mp3',
        'pipe:1',
      ],
      { maxBuffer: 1024 * 1024 * 200, encoding: 'buffer' }
    );
    const buffer = Buffer.isBuffer(mp3) ? mp3 : Buffer.from(mp3);
    if (buffer.length === 0) throw new Error('ffmpeg produced empty mp3');
    return { buffer, voice, rate: rate ?? 1.0 };
  } finally {
    try { fs.unlinkSync(wavPath); } catch {}
  }
}

function collectStderr(child) {
  return new Promise((res) => {
    const parts = [];
    child.stderr.on('data', (b) => parts.push(b));
    child.on('close', () => res(Buffer.concat(parts).toString('utf8')));
  });
}

/**
 * Approximate audio duration in seconds. Piper at length-scale 1.0
 * produces ~15 chars/sec of speech — same as Google Neural2, so the
 * estimate carries over.
 */
export function estimateDuration(text, rate = 1.0) {
  if (!text) return 0;
  const charsPerSec = 15 * rate;
  return Math.round(text.length / charsPerSec);
}

/**
 * True when the Piper binary is on disk and at least one voice model
 * lives in VOICES_DIR. Cheap fs.existsSync stat; the daemon caller
 * skips audio generation cleanly when this returns false so the
 * pipeline never crashes on a misconfigured host.
 */
export function ttsConfigured() {
  if (!fs.existsSync(PIPER_BIN)) return false;
  if (!fs.existsSync(FFMPEG_BIN)) return false;
  if (!fs.existsSync(VOICES_DIR)) return false;
  return true;
}
