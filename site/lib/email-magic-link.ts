import { Resend } from "resend";

type Args = {
  to: string;
  url: string;
  expiresInMinutes: number;
  from: string;
  apiKey: string;
};

export async function sendMagicLinkEmail(args: Args): Promise<void> {
  const { to, url, expiresInMinutes, from, apiKey } = args;
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: "Your Experience Intelligence sign-in link",
    html: renderHtml({ url, expiresInMinutes }),
    text: renderText({ url, expiresInMinutes }),
    headers: {
      // Help mail clients categorize correctly.
      "X-Entity-Ref-ID": `experience-review-signin-${Date.now()}`,
    },
  });
  if (error) throw new Error(`Resend send failed: ${error.message}`);
}

function renderHtml({
  url,
  expiresInMinutes,
}: {
  url: string;
  expiresInMinutes: number;
}): string {
  // Inline styles only — most email clients strip <style>.
  // Keep it narrow (~560px) for mobile; use system fonts; single-column.
  const brand = "#1f2937"; // ink
  const accent = "#111827"; // near-black button
  const muted = "#6b7280";
  const line = "#e5e7eb";

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${brand};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f9fafb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:#ffffff;border:1px solid ${line};border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 8px 32px;">
                <div style="font-size:22px;font-weight:700;color:${brand};">Experience Intelligence</div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px 32px;font-size:15px;line-height:1.55;color:${brand};">
                Click the button below to sign in. This link expires in <strong>${expiresInMinutes} minutes</strong> and can be used once.
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px;">
                <a href="${url}" style="display:inline-block;background:${accent};color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:12px 20px;border-radius:10px;">
                  Sign in to Experience Intelligence
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 24px 32px;font-size:13px;color:${muted};line-height:1.55;">
                Or paste this URL into your browser:<br>
                <a href="${url}" style="color:${muted};word-break:break-all;">${url}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;border-top:1px solid ${line};font-size:12px;color:${muted};line-height:1.55;">
                If you didn't request this email, you can safely ignore it — no one can sign in without this link.
              </td>
            </tr>
          </table>
          <div style="margin-top:16px;font-size:12px;color:${muted};">
            Experience Intelligence · AI reviews of brand experiences
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function renderText({
  url,
  expiresInMinutes,
}: {
  url: string;
  expiresInMinutes: number;
}): string {
  return [
    "Experience Intelligence — sign-in link",
    "",
    `Click to sign in (expires in ${expiresInMinutes} minutes, single use):`,
    url,
    "",
    "If you didn't request this, you can safely ignore this email.",
  ].join("\n");
}
