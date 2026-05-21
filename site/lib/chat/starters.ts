import { desc, eq, sql as drizzleSql } from "drizzle-orm";
import { db, reactions, experiences } from "@/lib/db/client";
import type { PersonaRecord } from "@/lib/personas-db";

// Generate 3 persona-specific starter prompts for the chat empty state.
// Composes from:
//   - persona kind (brand vs industry)
//   - the most-frequent brand label from this persona's recent email
//     audits (the user-facing name, e.g. "Barnes & Noble" rather than
//     the bare hostname)
//   - identity.focus_areas (what the persona obsesses over)
//   - identity.generation + gender + industry as a fallback
//
// Prompts are written in first-person-asking-the-persona voice so they
// read like things you'd actually ask Blair, not the generic
// "What's the worst email you've seen?" placeholder.
export async function getChatStarterPrompts(
  persona: PersonaRecord
): Promise<string[]> {
  const identity = persona.profile?.identity;
  const focus = identity?.focus_areas?.[0] ?? null;
  const focus2 = identity?.focus_areas?.[1] ?? null;

  // Industry tag — only used in the industry-persona branch below, where
  // persona.industry is set directly. Brand personas use the brand label
  // path and don't need this.
  const industry = persona.industry;

  // Brand label for brand-kind personas. Pulled from the most recent
  // email audit's from_display_name so we get "Barnes & Noble", not
  // "barnesandnoble.com" or a slug. Falls back to null when this
  // persona has no email audits yet.
  let brand: string | null = null;
  if (persona.kind === "brand") {
    const rows = await db
      .select({
        name: drizzleSql<string>`${experiences.emailData}->>'from_display_name'`,
        count: drizzleSql<number>`count(*)::int`,
      })
      .from(reactions)
      .innerJoin(experiences, eq(experiences.id, reactions.experienceId))
      .where(eq(reactions.personaSlug, persona.slug))
      .groupBy(drizzleSql`${experiences.emailData}->>'from_display_name'`)
      .orderBy(desc(drizzleSql`count(*)`))
      .limit(1);
    brand = rows[0]?.name?.trim() || null;
  }

  const prompts: string[] = [];
  if (brand) {
    prompts.push(
      `What's the last ${brand} email that actually got you to open?`
    );
    if (focus) {
      prompts.push(`Where does ${brand} fall short on ${focus}?`);
    } else {
      prompts.push(`What does ${brand} get right that competitors miss?`);
    }
    prompts.push(
      `If you were running ${brand}'s email program, what would you change first?`
    );
  } else if (persona.kind === "industry" && industry) {
    prompts.push(
      `Which ${industry} brand is doing the best job right now, and why?`
    );
    if (focus) {
      prompts.push(`How are most ${industry} brands handling ${focus}?`);
    } else {
      prompts.push(
        `What's the most overrated tactic in ${industry} marketing today?`
      );
    }
    if (focus2) {
      prompts.push(
        `Walk me through what good ${focus2} looks like across this industry.`
      );
    } else {
      prompts.push(
        `What's one thing every ${industry} brand should stop doing in 2026?`
      );
    }
  } else {
    // Last-resort fallback: persona-flavored but no brand/industry hooks.
    const gen = identity?.generation;
    const gender = identity?.gender?.toLowerCase();
    const role = gen && gender ? `${gen} ${gender}` : "shopper";
    prompts.push(`What's the worst marketing email you've seen this year?`);
    prompts.push(`As a ${role}, what makes a brand worth your time?`);
    prompts.push(`Tell me about a brand experience that frustrated you.`);
  }
  return prompts.slice(0, 3);
}
