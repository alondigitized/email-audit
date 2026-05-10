import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db, personas } from "@/lib/db/client";
import {
  buildRssXml,
  listPodcastItems,
  resolvePodcastToken,
} from "@/lib/podcast";

// Public podcast RSS feed. Auth-bypassed in proxy.ts; ACL is the URL
// token resolved against podcast_subscription. Podcast apps poll this
// every ~30 min, so we cache lightly.

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ persona: string; token: string }> }
) {
  const { persona: personaSlug, token: rawToken } = await context.params;
  // Podcast clients sometimes append .rss; strip it so we look up the
  // raw token. Direct curls like /feed/walker/abcdefg also work.
  const token = rawToken.replace(/\.rss$/i, "");

  const subscription = await resolvePodcastToken({ token, personaSlug });
  if (!subscription) {
    return new NextResponse("Feed not found", { status: 404 });
  }

  const [persona] = await db
    .select({
      slug: personas.slug,
      name: personas.name,
      short: personas.short,
    })
    .from(personas)
    .where(eq(personas.slug, personaSlug))
    .limit(1);
  if (!persona) return new NextResponse("Persona not found", { status: 404 });

  const items = await listPodcastItems({ personaSlug, limit: 100 });
  const origin = new URL(request.url).origin;
  const xml = buildRssXml({
    personaSlug: persona.slug,
    personaName: persona.name,
    personaShort: persona.short,
    token,
    origin,
    items,
  });

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      // Podcast apps re-poll often; ten minutes is plenty for "next
      // episode" to land while sparing the DB.
      "Cache-Control": "public, max-age=600",
    },
  });
}
