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
  competitors: z.array(CompetitorProposalSchema).length(5),
  recommended_persona_idx: z.number().int().min(0).max(2),
  recommended_competitor_idx: z.number().int().min(0).max(4),
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
- 5 close competitors who target the same kind of buyer, one of which you recommend as the most natural head-to-head comparison.

Personas must be concrete people, not segments. Give each one a first name + last initial (e.g. "Sarah K.", "Jamal T."), a believable age, a generation label ("Gen Z", "Millennial", "Gen X", "Boomer"), a gender, a 1-2 sentence style description, a 2-3 sentence description of how they shop (channels, frequency, what triggers a purchase, dealbreakers), a tech-comfort line, 3-6 focus_areas (single-word or two-word topics they actively care about — "performance running", "vegan leather", "wide widths"), a believable rationale that explains *why* this persona is a good early target for this brand, a default search_term they'd type into search, and a category_path that mirrors the brand's nav (lowercase URL segments, e.g. ["women","running"] or ["kids","girls","shoes"]).

Competitors must be real, current brands with valid domains. Skip anything you're not sure exists. Each competitor needs a 1-2 sentence rationale that names the customer overlap.

Return your output via the provided structured-output tool. Do not write prose; do not apologize.`;
}
