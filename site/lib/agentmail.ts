// Thin wrapper around the AgentMail SDK. Only used by the admin
// persona-management UI; email-monitor talks to its own instance of the
// same SDK directly. Keep the surface tight — if we ever swap providers,
// this is the single file to rewrite.

import { AgentMailClient } from "agentmail";

type InboxProvisionResult = {
  inbox_id: string;
  inbox_address: string;
};

function getClient(): AgentMailClient {
  const key = process.env.AGENTMAIL_API_KEY;
  if (!key) {
    throw new Error(
      "AGENTMAIL_API_KEY missing. Set it on Vercel (same key the daemon uses) before provisioning inboxes."
    );
  }
  return new AgentMailClient({ apiKey: key });
}

/**
 * Provision a new inbox for a persona. Username defaults to the persona
 * slug, domain defaults to `agentmail.to`. Returns the AgentMail inbox
 * id + full address so the caller can persist both on the profile.
 */
export async function provisionInbox(opts: {
  slug: string;
  displayName?: string;
  username?: string;
  domain?: string;
}): Promise<InboxProvisionResult> {
  const client = getClient();
  const username = opts.username ?? opts.slug;
  const domain = opts.domain ?? "agentmail.to";
  // The SDK returns an Inbox object. Shape varies by version; the minimum
  // we rely on is the inbox's identifier and email address. AgentMail
  // 0.4.x returns these as { inboxId, email } (camelCase), with older
  // versions using { inbox_id, inbox_address }. Accept both.
  const inbox = (await client.inboxes.create({
    username,
    domain,
    displayName: opts.displayName,
  })) as unknown as {
    inboxId?: string;
    inbox_id?: string;
    email?: string;
    inbox_address?: string;
    address?: string;
    id?: string;
  };

  const inbox_id = inbox.inboxId ?? inbox.inbox_id ?? inbox.id ?? null;
  const inbox_address =
    inbox.email ??
    inbox.inbox_address ??
    inbox.address ??
    `${username}@${domain}`;
  if (!inbox_id) {
    throw new Error(
      `AgentMail inbox.create returned no id; got keys: ${Object.keys(inbox).join(", ")}`
    );
  }
  return { inbox_id, inbox_address };
}
