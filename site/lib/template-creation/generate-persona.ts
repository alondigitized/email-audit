import { generateObject } from "ai";
import { z } from "zod";
import { researchModel } from "@/lib/chat/provider";

// Inverts the wizard's per-brand persona research: given just an INDUSTRY
// (e.g. "beauty", "athleisure", "premium-denim"), generate ONE canonical
// early-adopter persona we can curate as a template. The picker shows
// these to fresh tenants in the matched industry, and each tenant forks
// the template we generate here.
//
// We keep the LLM output tightly-shaped via zod so the create-template
// orchestrator can hand the result straight to personaProfileSchema.parse
// without translation.

export const TemplatePersonaSchema = z.object({
  // A short URL slug for the persona — lowercase letters + digits + hyphens,
  // 4-24 chars, must start with a letter. Used for the @etell.app inbox and
  // the personaTemplates.slug primary identifier.
  slug: z
    .string()
    .regex(/^[a-z][a-z0-9-]{3,23}$/, "slug must be 4-24 lowercase chars, hyphens ok"),
  // First-name + last-initial style ("Rae L.", "Jordan K.").
  name: z.string().min(2).max(60),
  // Single-word handle for tight UI surfaces ("Rae").
  short: z.string().min(2).max(20),
  age: z.number().int().min(18).max(75),
  generation: z.enum(["Gen Z", "Millennial", "Gen X", "Boomer"]),
  gender: z.string().min(2).max(40),
  style: z.string().min(20).max(400),
  shopping_habits: z.string().min(40).max(600),
  tech_comfort: z.string().min(15).max(300),
  focus_areas: z.array(z.string().min(2).max(60)).min(3).max(8),
  // Default journey config (the daemon's site-walkthrough seed). Free-form
  // search term + slash-pathed category, both pointed at a flagship brand
  // in the industry rather than the future tenant's site (forks override
  // these at fork-time).
  journey_search_term: z.string().min(2).max(80),
  journey_category_path: z.array(z.string().min(1).max(40)).min(1).max(4),
  // 1-2 sentences explaining who this persona is and why a brand in this
  // industry would care. Lands in personaTemplates.profile.notes.
  rationale: z.string().min(40).max(600),
});

export type TemplatePersona = z.infer<typeof TemplatePersonaSchema>;

export async function generateTemplatePersona(args: {
  industry: string;
  // Optional hint — e.g. "early-adopter mid-30s woman who shops Sephora";
  // when set, the prompt biases toward this archetype. When unset, the
  // LLM picks the canonical archetype for the industry.
  archetypeHint?: string | null;
}): Promise<TemplatePersona> {
  const hintBlock = args.archetypeHint
    ? `\nArchetype hint from the curator: ${args.archetypeHint}\n`
    : "";

  const prompt = `You are designing ONE canonical customer persona for the "${args.industry}" retail/consumer industry. This persona becomes a curated template that real brands in this industry will benchmark against; their experience-marketing teams will see emails and site flows reviewed THROUGH this persona's voice.
${hintBlock}
Pick the highest-leverage archetype — the buyer this industry's marketing teams most want to win, not the most common buyer. Concrete, named, opinionated. Not a segment or demographic average.

Output a SINGLE JSON object with EXACTLY these keys:

{
  "slug": "<4-24 lowercase chars, hyphens ok, must start with a letter>",
  "name": "<First L. — first name + last initial>",
  "short": "<single-word display handle>",
  "age": <integer 18-75>,
  "generation": "Gen Z" | "Millennial" | "Gen X" | "Boomer",
  "gender": "<string>",
  "style": "<1-2 sentence aesthetic + presentation>",
  "shopping_habits": "<2-3 sentences: channels, frequency, triggers, dealbreakers>",
  "tech_comfort": "<1 sentence on devices + comfort with online shopping>",
  "focus_areas": ["<topic1>", "<topic2>", ...],         // 3-8 short topic tags
  "journey_search_term": "<query they'd type into a brand's search>",
  "journey_category_path": ["<seg1>", "<seg2>", ...],    // 1-4 lowercase URL segments
  "rationale": "<1-2 sentences: who they are + why brands in this industry care>"
}

CRITICAL:
- The slug should evoke the persona's identity, not the industry. Good: "rae", "harper-d", "jordan-k". Bad: "beauty-buyer", "athleisure-1".
- Use EXACTLY the field names above — no renames, no additions.
- Return ONLY the JSON object. No prose, no markdown fences, no apology.`;

  const { object } = await generateObject({
    model: researchModel(),
    schema: TemplatePersonaSchema,
    prompt,
    maxOutputTokens: 1200,
    temperature: 0.7,
  });
  return object;
}
