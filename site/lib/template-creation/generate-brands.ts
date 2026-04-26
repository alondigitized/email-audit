import { generateObject } from "ai";
import { z } from "zod";
import { researchModel } from "@/lib/chat/provider";

// Given an industry, propose 5-8 canonical brand domains whose newsletters
// the new template-source persona should subscribe to. Result is a
// brand-list seed for the create-template orchestrator's subscription
// enqueue step.
//
// Domains must look real (foo.com, foo.co.uk, foo.io). We don't validate
// they actually exist or are open to newsletter signups — admin reviews
// failures in /admin/subscriptions if any subscription fails to land.

export const TemplateBrandListSchema = z.object({
  brands: z
    .array(
      z.object({
        name: z.string().min(2).max(60),
        domain: z
          .string()
          .min(3)
          .max(120)
          .regex(/^[a-z0-9.-]+\.[a-z]{2,}$/i, "must look like example.com"),
        rationale: z.string().min(20).max(280),
      })
    )
    .min(5)
    .max(8),
});

export type TemplateBrandList = z.infer<typeof TemplateBrandListSchema>;

export async function generateBrandList(args: {
  industry: string;
  // The persona we generated — we pass slug + a one-liner so the LLM picks
  // brands the persona would actually buy from rather than a generic
  // industry top-N.
  personaName: string;
  personaSummary: string;
}): Promise<TemplateBrandList> {
  const prompt = `You are picking 5-8 brand newsletters to subscribe a curated persona to.

Industry: ${args.industry}
Persona: ${args.personaName}
Persona summary: ${args.personaSummary}

Pick brands this persona would realistically receive marketing email from. Mix major direct competitors (so the persona's brain gets cross-brand benchmarks) with one or two flanker brands (a premium tier above + a value tier below).

Output a SINGLE JSON object:

{
  "brands": [
    {
      "name": "<Brand Name>",
      "domain": "<example.com — lowercase, no protocol, no path>",
      "rationale": "<1 sentence why this persona would be on their list>"
    },
    ...                                          // 5-8 entries total
  ]
}

CRITICAL:
- Real, current brands only. Valid web domains.
- No duplicates of the same brand under different domains.
- Use the EXACT field names. No prose outside the JSON.`;

  const { object } = await generateObject({
    model: researchModel(),
    schema: TemplateBrandListSchema,
    prompt,
    maxOutputTokens: 1200,
    temperature: 0.6,
  });
  return object;
}
