import { redirect } from "next/navigation";
import { requireUser } from "@/lib/dal";
import { requireAppEnabled } from "@/lib/apps";
import { PERSONA_BY_SLUG } from "@/lib/personas";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Chat · etell",
};

export default async function ChatIndex() {
  const user = await requireUser();
  await requireAppEnabled("chat", {
    isAdmin: user.isAdmin,
    userApps: user.apps,
  });

  // Admins see all personas; users see only their own.
  const slugs = user.isAdmin
    ? Object.keys(PERSONA_BY_SLUG)
    : user.personas;

  if (slugs.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold mb-2">Chat</h1>
        <p className="text-muted text-sm">
          You don&apos;t have access to any personas yet.
        </p>
      </div>
    );
  }

  if (slugs.length === 1) {
    redirect(`/chat/${slugs[0]}`);
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Pick a persona</h1>
        <p className="text-muted text-sm">
          Each persona remembers the audits they&apos;ve experienced. Ask them
          what they&apos;ve seen.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {slugs.map((slug) => {
          const meta = PERSONA_BY_SLUG[slug];
          return (
            <a
              key={slug}
              href={`/chat/${slug}`}
              className="block bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm no-underline text-ink transition-[border-color,box-shadow] duration-150 hover:border-slate-400 hover:shadow-md"
            >
              <div className="text-base font-semibold">
                {meta?.name ?? slug}
              </div>
              <div className="text-sm text-muted mt-0.5">
                {meta?.short ?? slug}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
