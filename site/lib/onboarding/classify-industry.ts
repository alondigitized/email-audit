import { generateObject } from "ai";
import { z } from "zod";
import { researchModel } from "@/lib/chat/provider";

// Step 1 of the templated wizard: classify the tenant's industry from the
// homepage scrape. ~10s round-trip vs. the ~90-120s of full persona research.
// Output drives template lookup against `persona_template.industry`.
//
// Free-form `industry` text in v1 — admin curates the canonical set on the
// template side (footwear, athleisure, beauty, …). v2 will swap to a closed
// enum once the taxonomy stabilises.

export const IndustryClassificationSchema = z.object({
  industry: z.string().min(2).max(60),
  confidence: z.enum(["high", "medium", "low"]),
  // Up to 3 alternates the LLM considered; surfaced if confidence is low.
  alternates: z.array(z.string().min(2).max(60)).max(3).default([]),
  // 1 sentence explaining the pick — debug aid only.
  rationale: z.string().min(1).max(280),
});

export type IndustryClassification = z.infer<typeof IndustryClassificationSchema>;

export async function classifyIndustry(args: {
  domain: string;
  siteSummary: string | null;
}): Promise<IndustryClassification> {
  const sitePart = args.siteSummary
    ? `Their public homepage:\n\n<SITE>\n${args.siteSummary}\n</SITE>\n\n`
    : `(No homepage content available — use brand knowledge.)\n\n`;

  const prompt = `You are classifying which retail/consumer industry the brand at "${args.domain}" operates in.

${sitePart}Pick a SHORT lowercase industry tag (2–60 chars). Use the most specific term that still aggregates similar brands together. Examples of good tags: "footwear", "athleisure", "fast-fashion", "beauty", "skincare", "home-decor", "outdoor-gear", "premium-denim", "kids-apparel", "athletic-apparel".

Output a SINGLE JSON object with EXACTLY these keys:

{
  "industry": "<lowercase-hyphenated tag>",
  "confidence": "high" | "medium" | "low",
  "alternates": ["<other tags you considered>"],   // 0-3 items
  "rationale": "<1 sentence why>"
}

confidence rubric:
- high: homepage clearly identifies the category (e.g. all running shoes).
- medium: category is implied but the brand spans 2-3 sub-areas.
- low: brand's actual focus is unclear from the scrape.

Return ONLY the JSON object. No prose, no markdown fences.`;

  const { object } = await generateObject({
    model: researchModel(),
    schema: IndustryClassificationSchema,
    prompt,
    maxOutputTokens: 400,
    temperature: 0.2,
  });
  return object;
}
