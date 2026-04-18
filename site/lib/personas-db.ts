import { cache } from "react";
import { eq } from "drizzle-orm";
import { db, personas, userPersonas } from "./db/client";

// Per-request cache (React cache). Each server request hydrates once.
export const getPersonaSlugsForUser = cache(
  async (userId: string): Promise<string[]> => {
    const rows = await db
      .select({ slug: personas.slug })
      .from(userPersonas)
      .innerJoin(personas, eq(userPersonas.personaId, personas.id))
      .where(eq(userPersonas.userId, userId));
    return rows.map((r) => r.slug);
  }
);
