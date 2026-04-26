import { generateObject } from "ai";
import {
  ResearchOutputSchema,
  buildResearchPrompt,
  type ResearchOutput,
} from "./research-prompt";
import { researchModel } from "@/lib/chat/provider";

// Runs the onboarding wizard's research call against the same local LLM
// (Ollama via LLM_BASE_URL / LLM_API_KEY) that powers persona chat. Uses
// generateObject with the zod schema for structured output; AI SDK negotiates
// JSON-mode with the OpenAI-compatible endpoint.
//
// The model defaults to LLM_CHAT_MODEL ("llama3.1:8b" if unset). For higher-
// quality research, set LLM_RESEARCH_MODEL to a beefier local model
// (e.g. "qwen2.5:32b", "llama3.3:70b") without affecting chat. Switching to
// a hosted provider just means changing LLM_BASE_URL — no code change.

export async function runOnboardingResearch(args: {
  domain: string;
  siteSummary: string | null;
}): Promise<ResearchOutput> {
  const prompt = buildResearchPrompt(args);

  const { object } = await generateObject({
    model: researchModel(),
    schema: ResearchOutputSchema,
    prompt,
    // Quietly cap runaway generations; the schema bounds output size already.
    maxOutputTokens: 4000,
    temperature: 0.7,
  });
  return object;
}
