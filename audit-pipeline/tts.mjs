// Google Cloud Text-to-Speech wrapper for the audit pipeline.
//
// Auth: API key in GOOGLE_TTS_API_KEY. Restrict the key to the
// "Cloud Text-to-Speech API" service in the Google Cloud Console and
// add a referrer/IP allowlist if exposed beyond this daemon.
//
// Voice strategy: each persona gets a stable Google Neural2 voice based
// on identity (gender + age bucket). The mapping lives in
// VOICE_BY_GENDER_AGE; persona profiles may override via
// profile.tts = { voice: "en-US-Neural2-X", rate: 1.05 }.
//
// Text shape: we only narrate the persona's prose sections
// (executive_summary / stood_out / recommendations) — the scores card is
// tabular data that doesn't read well aloud. The markdownToSpoken
// stripper produces inbox-clean speech: heading prefixes dropped, bullet
// dashes dropped, score notations like `**X/10**` expanded to "X out of
// ten", code spans flattened.
//
// Char budget: Google's text:synthesize endpoint caps a single request
// at 5000 chars. We truncate at 4500 to leave headroom for SSML
// expansion. A 4500-char persona-voiced prose block produces ~4.5 min
// of audio at speaking_rate=1.0 — fine for a commute.

const TTS_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize';
const CHAR_BUDGET = 4500;

// Default Neural2 voices keyed by (gender, age bucket). Picked for
// distinguishability so a podcast feed mixing personas doesn't sound
// like one narrator reading multiple parts.
//
// Each tuple maps to the persona's likely voice profile:
//   Male voices:   D (mid-30s warm), I (older measured), J (younger crisp)
//   Female voices: F (mid-30s warm), C (older measured), H (younger bright)
//   Neutral/other: A (default neutral male), E (default neutral female)
const VOICE_BY_GENDER_AGE = {
  'female:young':  { voice: 'en-US-Neural2-H', rate: 1.10 },
  'female:mid':    { voice: 'en-US-Neural2-F', rate: 1.00 },
  'female:older':  { voice: 'en-US-Neural2-C', rate: 0.95 },
  'male:young':    { voice: 'en-US-Neural2-J', rate: 1.10 },
  'male:mid':      { voice: 'en-US-Neural2-D', rate: 1.00 },
  'male:older':    { voice: 'en-US-Neural2-I', rate: 0.95 },
  'other:young':   { voice: 'en-US-Neural2-A', rate: 1.05 },
  'other:mid':     { voice: 'en-US-Neural2-A', rate: 1.00 },
  'other:older':   { voice: 'en-US-Neural2-A', rate: 0.95 },
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
 * Pick a Google voice for a persona. Honors profile.tts override; falls
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
 *
 * Input: parsed sections dict from audit-pipeline/extract.mjs.
 * Output: plain-text string suitable for Google TTS `input.text`.
 */
export function buildSpokenScript({ persona, sections, email }) {
  const lines = [];

  // One-sentence opener so the listener knows what they're hearing.
  // Persona's short name + brand + subject keeps the feed scannable in
  // a podcast app's queue.
  const who = persona?.short ?? persona?.name ?? 'I';
  const brand = email?.from_display_name ?? '';
  const subject = email?.subject ?? '';
  if (brand && subject) {
    lines.push(`${who} on ${brand}: ${subject}.`);
    lines.push('');
  }

  const take = (sections.executive_summary ?? []).join(' ');
  const stoodOut =
    (sections.stood_out ?? []).join(' ') ||
    [
      ...(sections.whats_working ?? []),
      ...(sections.whats_weak ?? []),
    ].join(' '); // legacy v1 fallback
  const changes = (sections.recommendations ?? []).join(' ');

  if (take) {
    lines.push('My take.');
    lines.push(stripMarkdown(take));
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
    // Truncate at a sentence boundary near the budget so we don't cut a
    // word mid-syllable.
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
    // Score notations: `**3/10**` → "three out of ten" feels too kitschy;
    // just drop to "3 out of 10" so the TTS reads it cleanly.
    .replace(/\*\*(\d+(?:\.\d+)?)\s*\/\s*10\*\*/g, '$1 out of 10')
    .replace(/(\d+(?:\.\d+)?)\s*\/\s*10/g, '$1 out of 10')
    // Bold/italic markers — keep the inner text, drop the asterisks.
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    // Inline code: keep the text without backticks; TTS will read it.
    .replace(/`([^`]+)`/g, '$1')
    // Links: keep the visible text only.
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Bullet leaders.
    .replace(/^\s*[-*]\s+/gm, '')
    // Numbered list leaders.
    .replace(/^\s*\d+\.\s+/gm, '')
    // Collapse multi-blank lines and tighten whitespace.
    .replace(/\n{2,}/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

/**
 * Synthesize MP3 from text. Returns { buffer, voice, rate } or null if
 * GOOGLE_TTS_API_KEY is unset (producer treats null as "skip audio").
 *
 * Throws on API errors so the caller's try/catch logs cleanly.
 */
export async function synthesizeMp3({ text, voice, rate }) {
  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey) return null;
  if (!text || !text.trim()) return null;

  const body = {
    input: { text },
    voice: { languageCode: 'en-US', name: voice },
    audioConfig: { audioEncoding: 'MP3', speakingRate: rate ?? 1.0 },
  };
  const res = await fetch(`${TTS_URL}?key=${encodeURIComponent(apiKey)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(
      `google tts ${res.status}: ${detail.slice(0, 300)}`
    );
  }
  const json = await res.json();
  const audioB64 = json.audioContent;
  if (typeof audioB64 !== 'string') {
    throw new Error('google tts: missing audioContent in response');
  }
  return {
    buffer: Buffer.from(audioB64, 'base64'),
    voice,
    rate: rate ?? 1.0,
  };
}

/**
 * Approximate audio duration in seconds from char count + speaking rate.
 * Google's Neural2 voices hit ~15 chars/sec at rate=1.0 in English. We
 * use this for the RSS <itunes:duration> tag and the player UI — exact
 * length comes from the MP3 itself but most podcast apps tolerate
 * mp3-vs-rss mismatch.
 */
export function estimateDuration(text, rate = 1.0) {
  if (!text) return 0;
  const charsPerSec = 15 * rate;
  return Math.round(text.length / charsPerSec);
}

export function ttsConfigured() {
  return !!process.env.GOOGLE_TTS_API_KEY;
}
