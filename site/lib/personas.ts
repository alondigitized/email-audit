// Lightweight type for persona display metadata. Runtime persona data
// lives in Postgres (`persona` table, profile JSONB); server code uses
// `getAllPersonas()` / `getPersonaBySlug()` from `lib/personas-db.ts`.
// This file stays type-only so client components can describe the shape
// they receive via props without pulling in a DB client.

export interface PersonaMeta {
  slug: string;
  name: string;
  short: string;
}
