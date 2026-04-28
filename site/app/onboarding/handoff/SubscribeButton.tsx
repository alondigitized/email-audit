"use client";

import { useState } from "react";

// Single-click subscribe helper: copies the persona's inbox to the
// clipboard AND opens the brand's signup page in a new tab. The user
// pastes into the brand's form and comes back to mark done. Reads as
// the normal flow, not as an error-recovery path.
export function SubscribeButton({
  brandDomain,
  inboxAddress,
}: {
  brandDomain: string;
  inboxAddress: string;
}) {
  const [stage, setStage] = useState<"idle" | "copied">("idle");

  async function handleClick() {
    let copied = false;
    try {
      await navigator.clipboard.writeText(inboxAddress);
      copied = true;
    } catch {
      const el = document.createElement("textarea");
      el.value = inboxAddress;
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
        copied = true;
      } catch {
        // give up silently — the manual address text below is selectable
      }
      document.body.removeChild(el);
    }
    if (copied) {
      setStage("copied");
      setTimeout(() => setStage("idle"), 4000);
    }
    // Open in a new tab. We don't deep-link to a signup form because
    // every brand's URL differs; the homepage is the safe baseline.
    window.open(`https://${brandDomain}/`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Subscribe to {brandDomain} →
      </button>
      <span
        className={`text-[11px] ${
          stage === "copied" ? "text-emerald-700" : "text-muted"
        }`}
      >
        {stage === "copied"
          ? `Copied ${inboxAddress} to clipboard — paste it on the brand's email signup form.`
          : `We'll copy your persona's inbox and open ${brandDomain} in a new tab.`}
      </span>
    </div>
  );
}
