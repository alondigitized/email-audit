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

import { generateObject } from "ai";
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

// Internal — what we ask the model for. Strips the metadata fields
// (generated_at, baseline_score) we add server-side.
const llmRewriteOutputSchema = z.object({
  alternatives: z.array(rewriteAlternativeSchema).min(1).max(12),
});

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
  const recs = audit.review.sections?.recommendations?.join("\n- ") ?? "(none)";

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
  const { object } = await generateObject({
    model: researchModel(),
    schema: llmRewriteOutputSchema,
    prompt,
    maxOutputTokens: 1500,
    temperature: 0.7,
  });

  // Filter out alternatives whose dimension doesn't apply to the channel
  // (model occasionally generates a "subject" rewrite for a homepage).
  const valid = new Set(dimensionsForChannel(channel));
  const baseline = (() => {
    const m = String(audit.review.score).match(/^\s*(\d+(?:\.\d+)?)\s*\//);
    return m ? Number(m[1]) : null;
  })();
  return {
    generated_at: new Date().toISOString(),
    channel,
    baseline_score: baseline,
    alternatives: object.alternatives.filter((a) => valid.has(a.dimension)),
  };
}
