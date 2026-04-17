import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getPersonaSlugsForUser } from "./personas-db";

export type CurrentUser = {
  id: string;
  email: string;
  name: string | null;
  personas: string[];
};

// S7: every route handler / server component that touches data must call this.
// Proxy enforcement is optimistic; this is the authoritative check.
export async function requireUser(): Promise<CurrentUser> {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) {
    redirect("/login");
  }
  const personas = await getPersonaSlugsForUser(session.user.id);
  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name ?? null,
    personas,
  };
}

export async function currentUser(): Promise<CurrentUser | null> {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) return null;
  const personas = await getPersonaSlugsForUser(session.user.id);
  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name ?? null,
    personas,
  };
}
