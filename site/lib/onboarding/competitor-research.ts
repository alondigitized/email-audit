import { generateObject } from "ai";
import { z } from "zod";
import { researchModel } from "@/lib/chat/provider";
import { CompetitorProposalSchema } from "./research-prompt";

// Step 1's competitor half. The legacy research call asked for personas +
// competitors in one shot; with templates handling personas, we only need
// competitors here. ~30s typical; runs in parallel with classifyIndustry.

export const CompetitorResearchOutputSchema = z.object({
  competitors: z.array(CompetitorProposalSchema).length(5),
  recommended_competitor_idx: z.number().int().min(0).max(4),
});

export type CompetitorResearchOutput = z.infer<typeof CompetitorResearchOutputSchema>;

export async function runCompetitorResearch(args: {
  domain: string;
  siteSummary: string | null;
}): Promise<CompetitorResearchOutput> {
  const sitePart = args.siteSummary
    ? `Their public homepage:\n\n<SITE>\n${args.siteSummary}\n</SITE>\n\n`
    : `(No homepage content available — use brand knowledge.)\n\n`;

  const prompt = `You are doing competitor research for the brand at "${args.domain}".

${sitePart}Propose 5 close competitors who target the same kind of buyer, and recommend ONE as the most natural head-to-head comparison.

Competitors must be real, current brands with valid web domains (lowercase example.com format).

Output a SINGLE JSON object with EXACTLY these keys:

{
  "competitors": [
    {
      "name": "<Brand Name>",
      "domain": "<example.com>",
      "rationale": "<1-2 sentence explanation of customer overlap>"
    },
    ...                                          // exactly 5 competitors
  ],
  "recommended_competitor_idx": <0 | 1 | 2 | 3 | 4>
}

CRITICAL: use field name "rationale" (NOT "rationale_for_overlap" or similar). Return the integer INDEX for the recommended field, not the brand name.

Return ONLY the JSON object. No prose, no markdown fences.`;

  const { object } = await generateObject({
    model: researchModel(),
    schema: CompetitorResearchOutputSchema,
    prompt,
    maxOutputTokens: 1200,
    temperature: 0.6,
  });
  return object;
}
