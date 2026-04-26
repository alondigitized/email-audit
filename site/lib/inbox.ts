// Email-inbox helpers for personas.
//
// Replaces lib/agentmail.ts on the new code path. Each persona's inbox is
// just a recipient string at the etell.app catch-all — no per-inbox API
// call, no provisioning step, no upstream limit. Cloudflare Email Routing
// + Worker delivers anything sent to *@etell.app to /api/email/inbound,
// which keys on the local-part to find the persona.

const INBOX_DOMAIN = process.env.INBOX_DOMAIN ?? "etell.app";

// Slug must already be a-z0-9- (validated at persona creation), but we
// re-sanitize defensively so a buggy caller can't produce an invalid
// recipient.
function sanitizeLocal(slug: string): string {
  return slug.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
}

export function generateInboxAddress(personaSlug: string): {
  inbox_address: string;
  inbox_id: null;
  provisioned_at: string;
} {
  const local = sanitizeLocal(personaSlug);
  if (!local) {
    throw new Error(`generateInboxAddress: bad slug '${personaSlug}'`);
  }
  return {
    inbox_address: `${local}@${INBOX_DOMAIN}`,
    // No external id any more — kept on the profile for backward compat,
    // always null for cloudflare-delivered inboxes.
    inbox_id: null,
    provisioned_at: new Date().toISOString(),
  };
}
