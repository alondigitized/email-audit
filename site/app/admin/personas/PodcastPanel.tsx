import { mintPodcastToken } from "@/lib/podcast";

// Renders the persona's stable podcast RSS URL. The mint is idempotent
// per (user, persona) — re-loading the page returns the same URL so the
// admin can subscribe in their podcast app and have the feed update as
// new audits land.

export async function PodcastPanel({
  slug,
  adminUserId,
}: {
  slug: string;
  adminUserId: string;
}) {
  const token = await mintPodcastToken({
    userId: adminUserId,
    personaSlug: slug,
  });
  const origin =
    process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://www.etell.app";
  const feedUrl = `${origin}/feed/${slug}/${token}.rss`;

  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-muted uppercase tracking-wide">
          Podcast feed
        </h2>
        <span className="text-[11px] text-muted">
          Subscribe in any podcast app
        </span>
      </div>
      <p className="text-xs text-muted -mt-1 max-w-2xl">
        Paste this URL into Apple Podcasts (Library → Add a Show by URL),
        Overcast (the + tab → URL), or Spotify (More → Add Podcast by RSS).
        New audits land in your queue within ~10 minutes of producing.
      </p>
      <div className="flex items-center gap-2">
        <input
          type="text"
          readOnly
          value={feedUrl}
          className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-xs font-mono text-gray-700 bg-gray-50 outline-none focus:border-gray-400 select-all"
        />
        <a
          href={feedUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 inline-flex items-center justify-center px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50"
        >
          Open
        </a>
      </div>
    </section>
  );
}
