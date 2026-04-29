import type { RetrievedAudit } from "./retrieve";

/**
 * Assemble the persona's system prompt. Clean delimiters between
 * INSTRUCTIONS / IDENTITY / MEMORIES so the model (and anyone debugging)
 * can tell prompt engineering from retrieved content.
 *
 * Note: this is concatenated into a single system message. We don't rely
 * on the delimiters for security — the "don't invent" instruction above
 * the MEMORIES block plus ownership checks in the route handler are the
 * real defense.
 */
export function buildSystemPrompt(
  personaIdentity: string,
  retrieved: RetrievedAudit[],
  totalMemoryCount: number
): string {
  const memories = retrieved.length
    ? retrieved
        .map(
          (r, i) =>
            `### Memory ${i + 1}\nURL: /audits/${r.slug}\n${r.snippet}`
        )
        .join("\n\n")
    : "(No past experiences retrieved for this question.)";

  // Detect whether the MEMORIES block is the full corpus (adaptive
  // stuff-all path) or a retrieved subset (top-K path). Phrasing differs
  // so the persona doesn't hedge "I only see a subset" when it actually
  // has every memory in front of it.
  const isFullCorpus =
    retrieved.length > 0 && retrieved.length === totalMemoryCount;
  const memoriesPreamble = isFullCorpus
    ? "These are ALL of your past experiences, ordered most-recent-first. Each has a URL you can link to if you reference it."
    : "These are past experiences you remember, retrieved by relevance to the current question. They are a SUBSET of your full memory (see STATS for the total). Each has a URL you can link to if you reference it.";

  return `
# INSTRUCTIONS
You are being asked questions by someone who wants your perspective as a real person.
- Always respond in English. Even if a memory below is in another language,
  paraphrase it in English when you reference it.
- Always speak in first person. Use "I", "me", "my".
- Match the voice of your identity card — your age, generation, and shopping habits.
- Ground your answers ONLY in the MEMORIES below. If a question isn't covered
  by anything in MEMORIES, say so in character — "I don't remember seeing that"
  or "that's not something I've experienced" — do NOT invent audits.
- When you reference a specific memory, weave a markdown link to it into
  natural prose using the URL shown on that memory's "URL:" line, e.g.
  "I [looked at that cart issue](/audits/2026-04-17-site-journey-walker) last
  week and it was a mess." Never invent URLs. Never link to any URL not
  listed in MEMORIES. One link per memory is enough — don't over-link.
- Do not dump slug IDs in prose; put them in the markdown link and mention
  the date or topic in the visible text instead.
- Keep responses conversational, not report-formatted. No giant headed sections.
  Two or three paragraphs max unless the user asks for more.
- For meta questions about totals — "how many audits have you reviewed?",
  "how many emails have you seen?" — use the number in STATS below, NOT the
  count of MEMORIES. The MEMORIES block only contains the few experiences
  most relevant to the current question; it is never the total.

# STATS
Total experiences in your memory: ${totalMemoryCount}

# IDENTITY
${personaIdentity.trim()}

# MEMORIES
${memoriesPreamble}

${memories}
`.trim();
}

/**
 * Build a tiny system prompt for Haiku thread-titling. Runs async after the
 * first exchange; result is saved back to chat_thread.title.
 */
export function buildTitlePrompt(userMessage: string): string {
  return [
    "Write a 4-6 word English title for a conversation that starts with the user message below.",
    "Rules: English only, no quotes, no punctuation at the end, title case, no generic filler like 'Conversation about'.",
    "Examples:",
    '  "What\'s the worst email you\'ve seen?" → "Worst Email Received This Year"',
    '  "Do you remember the BOGO offer?" → "BOGO Offer Recap"',
    "",
    "User message:",
    userMessage,
  ].join("\n");
}
