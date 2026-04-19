"use client";

// Full-page navigation instead of router.push — guaranteed to reset the
// ChatClient's useChat state whether you were deep in a thread or already
// on the empty state. App Router's Link/push was a no-op when the current
// URL already equals /chat/{slug}.
export function NewThreadButton({
  personaSlug,
  active,
}: {
  personaSlug: string;
  active: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = `/chat/${personaSlug}`;
      }}
      className={`flex items-center justify-center gap-1 w-full py-2 rounded-xl text-sm font-semibold transition-colors ${
        active
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      + New thread
    </button>
  );
}
