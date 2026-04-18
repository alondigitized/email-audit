import { db, pageViews } from "./db/client";

// Fire-and-forget page-view recorder. Admins are excluded so their browsing
// while reviewing the admin panel doesn't skew adoption stats.
export async function recordPageView(args: {
  userId: string;
  isAdmin?: boolean;
  kind: "audit" | "analysis";
  path: string;
}): Promise<void> {
  if (args.isAdmin) return;
  try {
    await db
      .insert(pageViews)
      .values({ userId: args.userId, kind: args.kind, path: args.path });
  } catch {
    // Never fail a page render because we couldn't log.
  }
}
