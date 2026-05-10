// Persona-voiced rewrite alternatives for an audited artifact.
//
// Operator workflow: review an audit, click "Ask {persona} to rewrite",
// receive 2-3 alternatives per dimension (subject / preheader / hero /
// CTA for email; hero / CTA for web). Each alternative carries a
// predicted score in the persona's voice — operator can copy the best
// one straight into Klaviyo / their ESP.
//
// Implementation: single LLM call with structured output (one trip,
// one bill). Uses the same local OpenAI-compatible chat model the rest
// of the app uses (LLM_BASE_URL). Cost = $0 against Ollama; model
// quality on qwen2.5:14b is solid for short copy variants.

import { generateObject, generateText } from "ai";
import { z } from "zod";
import { researchModel } from "@/lib/chat/provider";
import type { AuditData } from "@/lib/schema/audit";
import type { PersonaProfile } from "@/lib/schema/persona";

export const rewriteAlternativeSchema = z.object({
  dimension: z.enum(["subject", "preheader", "hero", "cta"]),
  text: z.string().max(280),
  predicted_score: z.number().min(1).max(10),
  rationale: z.string().max(400),
});

export const rewritesSchema = z.object({
  generated_at: z.string(),
  channel: z.enum(["email", "site"]),
  baseline_score: z.number().nullable(),
  alternatives: z.array(rewriteAlternativeSchema).min(1).max(12),
});

export type Rewrites = z.infer<typeof rewritesSchema>;
export type RewriteAlternative = z.infer<typeof rewriteAlternativeSchema>;

// LOOSE schema we ask the model for. Local LLMs frequently break the
// strict types: predicted_score comes back as "8" (string) or "8/10"
// instead of number 8, alternative.text overflows 280 chars on hero
// dimension, dimension values arrive as "headline" or "title" instead
// of one of our enums. We coerce + truncate everything in
// normalizeAlternative() before persisting to the strict
// rewritesSchema, so the model only has to be roughly right.
const looseAlternativeSchema = z
  .object({
    dimension: z.string(),
    text: z.string(),
    predicted_score: z.union([z.number(), z.string()]),
    rationale: z.string().optional().default(""),
  })
  .passthrough();
const llmRewriteOutputSchema = z.object({
  alternatives: z.array(looseAlternativeSchema).min(1).max(20),
});

// Map common synonyms the model emits to our canonical dimensions.
const DIMENSION_ALIASES: Record<string, RewriteAlternative["dimension"]> = {
  subject: "subject",
  "subject line": "subject",
  preheader: "preheader",
  "preheader text": "preheader",
  preview: "preheader",
  hero: "hero",
  headline: "hero",
  title: "hero",
  "hero copy": "hero",
  cta: "cta",
  button: "cta",
  "cta button": "cta",
  "call to action": "cta",
};

function normalizeAlternative(
  raw: z.infer<typeof looseAlternativeSchema>,
  channel: "email" | "site"
): RewriteAlternative | null {
  const dimKey = String(raw.dimension ?? "").trim().toLowerCase();
  const dimension = DIMENSION_ALIASES[dimKey];
  if (!dimension) return null;
  if (!dimensionsForChannel(channel).includes(dimension)) return null;

  let score: number;
  if (typeof raw.predicted_score === "number") {
    score = raw.predicted_score;
  } else {
    const m = String(raw.predicted_score).match(/(-?\d+(?:\.\d+)?)/);
    if (!m) return null;
    score = Number(m[1]);
  }
  if (!Number.isFinite(score)) return null;
  score = Math.max(1, Math.min(10, score));

  const text = String(raw.text ?? "").trim().slice(0, 280);
  if (!text) return null;
  const rationale = String(raw.rationale ?? "").trim().slice(0, 400);

  return { dimension, text, predicted_score: score, rationale };
}

function dimensionsForChannel(channel: "email" | "site"): RewriteAlternative["dimension"][] {
  // Email surface = inbox-side decisions. Web surface = on-page decisions.
  // CTA copy matters for both. Hero matters for both.
  return channel === "email"
    ? ["subject", "preheader", "hero", "cta"]
    : ["hero", "cta"];
}

function buildPrompt({
  audit,
  persona,
  channel,
}: {
  audit: AuditData;
  persona: PersonaProfile;
  channel: "email" | "site";
}): string {
  const id = persona.identity;
  const personaLine = [
    `You are ${id.name}.`,
    id.age ? `Age: ${id.age}.` : "",
    id.generation ? `Generation: ${id.generation}.` : "",
    id.gender ? `Gender: ${id.gender}.` : "",
    id.style,
    id.shopping_habits ? `Shopping habits: ${id.shopping_habits}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const score = audit.review.score;
  const summary = audit.review.sections?.executive_summary?.join(" ") ?? "";
  // V2 audits collapse What's Weak into the prose "What stood out" block.
  // Prefer whats_weak when present (legacy), else fall through to stood_out
  // so the rewrite prompt always has signal to work from.
  const weakSrc =
    audit.review.sections?.whats_weak?.length
      ? audit.review.sections.whats_weak
      : audit.review.sections?.stood_out ?? [];
  const weak = weakSrc.length ? weakSrc.join("\n- ") : "(none recorded)";
  // Recommendations now also hold "Subject Alt A/B" + "Preheader Alt A/B"
  // lines (v2 IA). Don't feed those back to the model — re-showing the
  // model its own alt rewrites confuses the structured-output call and
  // bloats the prompt. Keep only the actionable recommendation lines.
  const recLines = (audit.review.sections?.recommendations ?? []).filter(
    (l) => !/\*\*(?:subject|preheader)\s+alt\b/i.test(l)
  );
  const recs = recLines.length ? recLines.join("\n- ") : "(none)";

  const dims = dimensionsForChannel(channel);
  const dimList = dims.map((d) => `- ${d}`).join("\n");

  // Email-only fields that anchor the rewrite.
  const subject = audit.email?.subject ?? "";
  const preview = audit.email?.preheader ?? "";

  const lines = [
    personaLine,
    "",
    `You audited a ${channel === "email" ? "marketing email" : "homepage"} and scored it ${score}.`,
    "",
    summary ? `Your one-paragraph reaction:` : "",
    summary,
    "",
    `What you found weak:`,
    `- ${weak}`,
    "",
    `Your recommendations:`,
    `- ${recs}`,
    "",
    channel === "email"
      ? `Original subject: \`${subject}\`\nOriginal preheader: \`${preview || "(empty / leaking junk)"}\``
      : "",
    "",
    `Now rewrite the brand's copy in YOUR voice — the version YOU would respond to. Generate 2-3 alternatives PER DIMENSION below. Each alternative must be:`,
    "- In your voice and your worldview (not marketing-speak).",
    "- Concrete, specific, scannable.",
    "- Honest about what's actually being offered (no inflating).",
    "- Short enough to fit the channel:",
    "  - subject: ≤55 chars",
    "  - preheader: ≤90 chars",
    "  - hero: ≤120 chars",
    "  - cta: ≤22 chars (button copy)",
    "",
    `Dimensions you must cover:`,
    dimList,
    "",
    `For each alternative, predict the score (1-10) it would earn from you under the same rubric you used to score the original.`,
    "Return JSON only, no prose. Aim for 2-3 alternatives per dimension. Higher scores must be defensible — don't hand out 9s or 10s unless the copy is genuinely sharp.",
  ];
  return lines.filter((s) => s !== null && s !== undefined).join("\n");
}

// Run the rewrite generation. Caller persists the result; this function
// has no side effects beyond the LLM call.
export async function generateRewrites({
  audit,
  persona,
}: {
  audit: AuditData;
  persona: PersonaProfile;
}): Promise<Rewrites> {
  const channel = (audit.type ?? "email") as "email" | "site";
  const prompt = buildPrompt({ audit, persona, channel });

  // Three-tier fallback for structured output. Local LLMs through
  // Ollama frequently break native generateObject schema validation —
  // most commonly returning predicted_score as a string ("8" or "8/10"),
  // wrapping JSON in markdown fences, or overflowing text length caps.
  //
  //   Attempt 1: generateObject in JSON mode (no native tool call —
  //              qwen2.5 tool-calls aren't supported by all backends)
  //   Attempt 2: generateText + manual JSON.parse with the same loose
  //              schema; tolerates fenced markdown around the JSON.
  let rawAlternatives: z.infer<typeof looseAlternativeSchema>[] = [];
  let lastErr: unknown = null;

  try {
    const r = await generateObject({
      model: researchModel(),
      schema: llmRewriteOutputSchema,
      prompt,
      maxOutputTokens: 3000,
      temperature: 0.7,
    });
    rawAlternatives = r.object.alternatives;
  } catch (e1) {
    lastErr = e1;
    try {
      const stricter =
        prompt +
        '\n\nIMPORTANT: Output ONLY a single JSON object of shape {"alternatives":[...]}.\nNo markdown fences, no commentary. Each alternative is {"dimension":<string>,"text":<string>,"predicted_score":<number 1-10>,"rationale":<string>}.';
      const { text } = await generateText({
        model: researchModel(),
        prompt: stricter,
        maxOutputTokens: 3000,
        temperature: 0.3,
      });
      // Strip ```json ... ``` fences if the model added them, then take
      // the substring from the first { to the matching last } so any
      // trailing prose is ignored.
      const cleaned = text.replace(/```(?:json)?\s*/gi, "").replace(/```\s*$/g, "");
      const start = cleaned.indexOf("{");
      const end = cleaned.lastIndexOf("}");
      if (start < 0 || end <= start) {
        throw new Error("no JSON braces in fallback response");
      }
      const parsed = JSON.parse(cleaned.slice(start, end + 1));
      const validated = llmRewriteOutputSchema.parse(parsed);
      rawAlternatives = validated.alternatives;
      console.warn(
        `[rewrites] generateObject failed, generateText fallback succeeded: ${
          e1 instanceof Error ? e1.message.slice(0, 200) : "unknown"
        }`
      );
    } catch (e2) {
      const msg1 = lastErr instanceof Error ? lastErr.message : String(lastErr);
      const msg2 = e2 instanceof Error ? e2.message : String(e2);
      throw new Error(
        `rewrite generation failed; primary=${msg1.slice(0, 200)}; fallback=${msg2.slice(0, 200)}`
      );
    }
  }

  const alternatives = rawAlternatives
    .map((a) => normalizeAlternative(a, channel))
    .filter((a): a is RewriteAlternative => a !== null);
  if (alternatives.length === 0) {
    throw new Error(
      "rewrite generation produced no usable alternatives after normalization"
    );
  }

  const baseline = (() => {
    const m = String(audit.review.score).match(/^\s*(\d+(?:\.\d+)?)\s*\//);
    return m ? Number(m[1]) : null;
  })();
  return {
    generated_at: new Date().toISOString(),
    channel,
    baseline_score: baseline,
    alternatives,
  };
}
