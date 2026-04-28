import { z } from "zod";

// Output schema for the research call. Persona shape mirrors
// `personaIdentitySchema` (lib/schema/persona.mjs) so the wizard's edit step
// can hand the chosen proposal directly to the existing persona builder
// without translation.
export const PersonaProposalSchema = z.object({
  name: z.string().min(1).max(80),
  age: z.number().int().min(18).max(95),
  generation: z.string().min(1).max(40),
  gender: z.string().min(1).max(40),
  style: z.string().min(1).max(400),
  shopping_habits: z.string().min(1).max(600),
  tech_comfort: z.string().min(1).max(300),
  focus_areas: z.array(z.string().min(1).max(60)).min(1).max(8),
  // Wizard-only — explains *why* this persona was proposed for this company.
  // Discarded when the row is committed; lives on the unlocked_proposals
  // sidecar so the upgrade pitch can show "we recommended Sarah because…".
  rationale: z.string().min(1).max(400),
  // Default search term + category path for the daemon's site journey. The
  // user can edit these in the wizard's edit step.
  search_term: z.string().min(1).max(80),
  category_path: z.array(z.string().min(1).max(40)).min(1).max(4),
});

export const CompetitorProposalSchema = z.object({
  name: z.string().min(1).max(80),
  domain: z
    .string()
    .min(3)
    .max(120)
    .regex(/^[a-z0-9.-]+\.[a-z]{2,}$/i, "domain must look like example.com"),
  rationale: z.string().min(1).max(280),
});

export const ResearchOutputSchema = z.object({
  personas: z.array(PersonaProposalSchema).length(3),
  competitors: z.array(CompetitorProposalSchema).length(2),
  recommended_persona_idx: z.number().int().min(0).max(2),
});

export type PersonaProposal = z.infer<typeof PersonaProposalSchema>;
export type CompetitorProposal = z.infer<typeof CompetitorProposalSchema>;
export type ResearchOutput = z.infer<typeof ResearchOutputSchema>;

export function buildResearchPrompt(args: {
  domain: string;
  siteSummary: string | null;
}): string {
  const sitePart = args.siteSummary
    ? `Here is what their public homepage looks like:\n\n<SITE>\n${args.siteSummary}\n</SITE>\n\n`
    : `(No homepage content available — use what you know about the brand from training.)\n\n`;

  return `You are doing customer-experience research for a brand whose domain is "${args.domain}".

${sitePart}Your job is to propose:
- 3 distinct customer personas (different age + life stage + shopping motivation), one of which you recommend as the highest-leverage starter persona for this brand.
- 2 close competitors who target the same kind of buyer. The user will be invited to subscribe their persona's inbox to the email programs of these competitors, so pick brands the persona would genuinely want to receive marketing from.

Personas must be concrete people, not segments. Each persona is a real-feeling individual with a first name + last initial.

Competitors must be real, current brands with valid web domains (example.com format).

Output a SINGLE JSON object with EXACTLY these keys and no others:

{
  "personas": [
    {
      "name": "<First L.>",                                  // string, 1–80 chars
      "age": <integer 18–95>,
      "generation": "Gen Z" | "Millennial" | "Gen X" | "Boomer",
      "gender": "<string>",
      "style": "<1–2 sentence style description>",
      "shopping_habits": "<2–3 sentences on channels, frequency, triggers, dealbreakers>",
      "tech_comfort": "<1 sentence>",
      "focus_areas": ["<topic1>", "<topic2>", ...],          // 1–8 short topics
      "rationale": "<why this persona is a good early target for this brand>",
      "search_term": "<query they would type into the brand's search>",
      "category_path": ["<segment1>", "<segment2>", ...]     // 1–4 lowercase URL segments
    },
    { ... },                                                 // exactly 3 personas
    { ... }
  ],
  "competitors": [
    {
      "name": "<Brand Name>",
      "domain": "<example.com>",                              // valid lowercase domain
      "rationale": "<1–2 sentence explanation of customer overlap>"
    },
    { ... }                                                   // exactly 2 competitors
  ],
  "recommended_persona_idx": <0 | 1 | 2>                      // INDEX into personas[]
}

CRITICAL: use EXACTLY the field names above. Do not rename "rationale" to "rationale_for_overlap" or anything else. Do not return brand NAMES for "recommended_persona_idx" — return the integer INDEX into the array.

Return ONLY the JSON object. No prose, no markdown fences, no apology.`;
}
