import { redirect } from "next/navigation";
import { auth } from "@/auth";

export type CurrentUser = {
  id: string;
  email: string;
  name: string | null;
  // Populated in Phase 2; empty array until user_personas exists/is seeded.
  personas: string[];
};

// S7: every route handler / server component that touches data must call this.
// Proxy enforcement is optimistic; this is the authoritative check.
export async function requireUser(): Promise<CurrentUser> {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) {
    redirect("/login");
  }
  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name ?? null,
    personas: [], // Phase 2 will hydrate from user_personas
  };
}

export async function currentUser(): Promise<CurrentUser | null> {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) return null;
  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name ?? null,
    personas: [],
  };
}
