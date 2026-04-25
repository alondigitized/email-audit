import { generateObject } from "ai";
import {
  ResearchOutputSchema,
  buildResearchPrompt,
  type ResearchOutput,
} from "./research-prompt";

// Calls Claude Opus 4.7 via the Vercel AI Gateway (default in AI SDK v6+).
// Uses generateObject with the zod schema for structured output. The gateway
// auto-resolves "anthropic/claude-opus-4-7" given AI_GATEWAY_API_KEY (or
// the equivalent OIDC token in production).
//
// Provider override: set ONBOARDING_RESEARCH_MODEL to switch e.g. for QA
// (cheaper sonnet) without code changes.

const DEFAULT_MODEL = "anthropic/claude-opus-4-7";

export async function runOnboardingResearch(args: {
  domain: string;
  siteSummary: string | null;
}): Promise<ResearchOutput> {
  const model = process.env.ONBOARDING_RESEARCH_MODEL ?? DEFAULT_MODEL;
  const prompt = buildResearchPrompt(args);

  const { object } = await generateObject({
    model,
    schema: ResearchOutputSchema,
    prompt,
    // Quietly cap runaway generations; the schema bounds output size already.
    maxOutputTokens: 4000,
    temperature: 0.7,
  });
  return object;
}
