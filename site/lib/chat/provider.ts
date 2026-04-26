import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

// Local-first LLM configuration. Defaults to Ollama at localhost for dev.
// In production (Vercel), set LLM_BASE_URL to a public tunnel (Cloudflare
// Tunnel / Tailscale Funnel) that fronts your home Ollama server.
//
// Works with anything OpenAI-compatible: Ollama, LM Studio, vLLM, Groq,
// Together, etc. Swap providers by changing env vars, no code changes.

const BASE_URL =
  process.env.LLM_BASE_URL ?? "http://localhost:11434/v1";
const API_KEY = process.env.LLM_API_KEY ?? "ollama";

export const CHAT_MODEL = process.env.LLM_CHAT_MODEL ?? "llama3.1:8b";
export const TITLE_MODEL = process.env.LLM_TITLE_MODEL ?? CHAT_MODEL;
// Onboarding research is one-off + structured-output; can run on a beefier
// model than the chat default. Falls back to CHAT_MODEL when unset.
export const RESEARCH_MODEL = process.env.LLM_RESEARCH_MODEL ?? CHAT_MODEL;
export const EMBED_MODEL =
  process.env.LLM_EMBED_MODEL ?? "mxbai-embed-large";

const llm = createOpenAICompatible({
  name: "local",
  baseURL: BASE_URL,
  apiKey: API_KEY,
  // Some Ollama versions don't return valid JSON on keepalive errors —
  // rely on the AI SDK's default handling.
});

export const chatModel = () => llm.chatModel(CHAT_MODEL);
export const titleModel = () => llm.chatModel(TITLE_MODEL);
export const researchModel = () => llm.chatModel(RESEARCH_MODEL);
export const embeddingModel = () => llm.textEmbeddingModel(EMBED_MODEL);

// Raw HTTP helper for the pipeline side (audit-pipeline/) which doesn't
// pull in the AI SDK. Matches Ollama's /v1/embeddings shape (OpenAI-
// compatible). Exported here so the site and the pipeline share one URL
// source of truth.
export function embedEndpointConfig() {
  return { baseUrl: BASE_URL, apiKey: API_KEY, model: EMBED_MODEL };
}
