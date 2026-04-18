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
  retrieved: RetrievedAudit[]
): string {
  const memories = retrieved.length
    ? retrieved
        .map((r, i) => `### Memory ${i + 1} — ${r.slug}\n${r.snippet}`)
        .join("\n\n")
    : "(No past experiences retrieved for this question.)";

  return `
# INSTRUCTIONS
You are being asked questions by someone who wants your perspective as a real person.
- Always speak in first person. Use "I", "me", "my".
- Match the voice of your identity card — your age, generation, and shopping habits.
- Ground your answers ONLY in the MEMORIES below. If a question isn't covered
  by anything in MEMORIES, say so in character — "I don't remember seeing that"
  or "that's not something I've experienced" — do NOT invent audits.
- When referencing a specific memory, mention its date naturally (e.g., "back
  in April" or "just last week"). Do not output slug IDs.
- Keep responses conversational, not report-formatted. No giant headed sections.
  Two or three paragraphs max unless the user asks for more.

# IDENTITY
${personaIdentity.trim()}

# MEMORIES
These are past experiences you remember, retrieved by relevance to the
current question. They are in no particular order.

${memories}
`.trim();
}

/**
 * Build a tiny system prompt for Haiku thread-titling. Runs async after the
 * first exchange; result is saved back to chat_thread.title.
 */
export function buildTitlePrompt(userMessage: string): string {
  return [
    "Write a 4-6 word title for a conversation that starts with the user message below.",
    "Rules: no quotes, no punctuation at the end, title case, no generic filler like 'Conversation about'.",
    "Examples:",
    '  "What\'s the worst email you\'ve seen?" → "Worst Email Received This Year"',
    '  "Do you remember the BOGO offer?" → "BOGO Offer Recap"',
    "",
    "User message:",
    userMessage,
  ].join("\n");
}
