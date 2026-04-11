// Display registry for personas. Add one entry per persona slug.
// Long-term this should be generated from site-monitor/personas/*.json,
// but a manual registry is fine while the roster is small.

export interface PersonaMeta {
  slug: string;
  name: string;
  short: string;
}

export const PERSONAS: PersonaMeta[] = [
  { slug: "walker", name: "Walker Miles", short: "Walker" },
  { slug: "martha", name: "Martha Stroll", short: "Martha" },
];

export const PERSONA_BY_SLUG: Record<string, PersonaMeta> = Object.fromEntries(
  PERSONAS.map((p) => [p.slug, p])
);
