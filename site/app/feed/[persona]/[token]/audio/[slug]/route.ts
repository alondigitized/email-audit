import { NextRequest, NextResponse } from "next/server";
import { eq, and } from "drizzle-orm";
import { db, reactions } from "@/lib/db/client";
import { resolvePodcastToken } from "@/lib/podcast";
import { signGetUrl, r2IsConfigured } from "@/lib/storage/r2";

// 302 redirect from a stable token-scoped URL to a short-lived signed
// R2 URL. Podcast apps follow redirects, so this preserves the R2
// "private bucket + signed read" model without exposing keys.
//
// The slug query confirms the audio belongs to the persona the token
// authorizes — a leaked token can't be repurposed to pull audio from
// a different persona's feed.

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  context: {
    params: Promise<{ persona: string; token: string; slug: string }>;
  }
) {
  const params = await context.params;
  const personaSlug = params.persona;
  const slugRaw = params.slug.replace(/\.mp3$/i, "");
  const token = params.token;

  const subscription = await resolvePodcastToken({ token, personaSlug });
  if (!subscription) {
    return new NextResponse("Not found", { status: 404 });
  }

  const [row] = await db
    .select({ reviewData: reactions.reviewData })
    .from(reactions)
    .where(
      and(eq(reactions.slug, slugRaw), eq(reactions.personaSlug, personaSlug))
    )
    .limit(1);
  const audio = (row?.reviewData as { audio?: { key?: string } })?.audio;
  if (!audio?.key) {
    return new NextResponse("Audio not found", { status: 404 });
  }

  if (!r2IsConfigured()) {
    return new NextResponse("Storage not configured", { status: 500 });
  }

  // 24h signed URL — podcast apps can re-deref the enclosure even if
  // the user downloads later in the day. The token in the parent URL
  // remains the trust root.
  const signed = await signGetUrl(audio.key, 24 * 3600);
  return NextResponse.redirect(signed, { status: 302 });
}
