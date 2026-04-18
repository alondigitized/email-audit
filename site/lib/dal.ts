import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";
import { db, users } from "./db/client";
import { getPersonaSlugsForUser } from "./personas-db";

export type CurrentUser = {
  id: string;
  email: string;
  name: string | null;
  personas: string[];
  isAdmin: boolean;
};

async function loadIsAdmin(userId: string): Promise<boolean> {
  const row = await db
    .select({ isAdmin: users.isAdmin })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  return row[0]?.isAdmin ?? false;
}

// S7: every route handler / server component that touches data must call this.
// Proxy enforcement is optimistic; this is the authoritative check.
export async function requireUser(): Promise<CurrentUser> {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) {
    redirect("/login");
  }
  const [personas, isAdmin] = await Promise.all([
    getPersonaSlugsForUser(session.user.id),
    loadIsAdmin(session.user.id),
  ]);
  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name ?? null,
    personas,
    isAdmin,
  };
}

export async function currentUser(): Promise<CurrentUser | null> {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) return null;
  const [personas, isAdmin] = await Promise.all([
    getPersonaSlugsForUser(session.user.id),
    loadIsAdmin(session.user.id),
  ]);
  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name ?? null,
    personas,
    isAdmin,
  };
}

export async function requireAdmin(): Promise<CurrentUser> {
  const user = await requireUser();
  if (!user.isAdmin) {
    // S7: non-admins get a 404, not a 403 — don't leak the route's existence.
    const { notFound } = await import("next/navigation");
    notFound();
  }
  return user;
}
