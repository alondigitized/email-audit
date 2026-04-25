import { Resend } from "resend";

// Transactional emails for the free-tier program (waitlist confirm, approval,
// referral credit). Reuses the same Resend client as the magic-link sender;
// each email is a thin template + a single resend.emails.send call.

function client(): Resend {
  const key = process.env.AUTH_RESEND_KEY;
  if (!key) throw new Error("AUTH_RESEND_KEY is not set");
  return new Resend(key);
}

function from(): string {
  return process.env.AUTH_EMAIL_FROM ?? "onboarding@resend.dev";
}

const BRAND = "#1f2937";
const ACCENT = "#111827";
const MUTED = "#6b7280";
const LINE = "#e5e7eb";
const DOT = "#0284c7";

function shell(title: string, body: string): string {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${BRAND};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f9fafb;padding:32px 16px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:#ffffff;border:1px solid ${LINE};border-radius:16px;overflow:hidden;">
          <tr><td align="center" style="padding:32px 32px 8px 32px;">
            <div style="font-size:30px;font-weight:600;letter-spacing:-0.02em;color:${BRAND};line-height:1;">etell<span style="color:${DOT};">.</span></div>
            <div style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:${MUTED};margin-top:6px;">${title}</div>
          </td></tr>
          ${body}
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

function paragraph(text: string): string {
  return `<tr><td style="padding:16px 32px;font-size:15px;line-height:1.55;color:${BRAND};">${text}</td></tr>`;
}

function ctaButton(url: string, label: string): string {
  return `<tr><td style="padding:16px 32px;">
    <a href="${url}" style="display:inline-block;background:${ACCENT};color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:12px 20px;border-radius:10px;">${label}</a>
  </td></tr>`;
}

export async function sendWaitlistConfirmEmail(args: {
  to: string;
  companyDomain: string;
}): Promise<void> {
  const r = client();
  const html = shell(
    "You're on the list",
    paragraph(
      `Thanks for signing up. We're reviewing requests from <strong>${args.companyDomain}</strong> in the order they came in.`
    ) +
      paragraph(
        "We'll send you a sign-in link as soon as you're approved. The free tier runs for 14 days; refer a coworker to extend it (up to 28 days)."
      )
  );
  const { error } = await r.emails.send({
    from: from(),
    to: args.to,
    subject: "You're on the etell waitlist",
    html,
    text: `You're on the etell waitlist for ${args.companyDomain}. We'll email a sign-in link when you're approved.`,
  });
  if (error) throw new Error(`Resend send failed: ${error.message}`);
}

export async function sendWaitlistApprovedEmail(args: {
  to: string;
  loginUrl: string;
  daysFree: number;
}): Promise<void> {
  const r = client();
  const html = shell(
    "You're in",
    paragraph(
      `Welcome to etell. You have <strong>${args.daysFree} days</strong> of free access. Click below to sign in and start your persona's brain.`
    ) +
      ctaButton(args.loginUrl, "Sign in to etell") +
      paragraph(
        `Refer a coworker after onboarding to extend your free window by 7 more days (cap 28).`
      )
  );
  const { error } = await r.emails.send({
    from: from(),
    to: args.to,
    subject: "You're approved — welcome to etell",
    html,
    text: `You're approved. ${args.daysFree} days of free access. Sign in: ${args.loginUrl}`,
  });
  if (error) throw new Error(`Resend send failed: ${error.message}`);
}

export async function sendReferralCreditEmail(args: {
  to: string;
  newDaysLeft: number;
  refereeDomain: string;
}): Promise<void> {
  const r = client();
  const html = shell(
    "+7 days",
    paragraph(
      `Someone from <strong>${args.refereeDomain}</strong> signed up via your referral link. You now have <strong>${args.newDaysLeft} days</strong> of free access remaining.`
    )
  );
  const { error } = await r.emails.send({
    from: from(),
    to: args.to,
    subject: "Your friend joined — +7 days",
    html,
    text: `Referral credited. You now have ${args.newDaysLeft} days remaining.`,
  });
  if (error) throw new Error(`Resend send failed: ${error.message}`);
}
