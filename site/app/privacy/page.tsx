export const metadata = { title: "Privacy Policy · etell" };

const EFFECTIVE_DATE = "April 28, 2026";

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 prose prose-sm prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-3 prose-p:my-3 prose-li:my-1">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted text-sm">
        <strong>Effective:</strong> {EFFECTIVE_DATE}
      </p>

      <p>
        This Privacy Policy describes how <strong>etell.app</strong>{" "}
        (&ldquo;Service&rdquo;), operated by Alon Tsang as an independent
        project, collects, uses, and shares information when you use the
        Service. It supplements our{" "}
        <a href="/terms">Terms of Use</a>.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>You provide</h3>
      <ul>
        <li>
          <strong>Account data</strong>: your work email address (and any
          referral code) submitted at signup. Optional: display name.
        </li>
        <li>
          <strong>Persona data</strong>: identity fields you accept or edit
          during onboarding (name, age, generation, gender, style notes,
          shopping habits, focus areas).
        </li>
        <li>
          <strong>Brand selections</strong>: the email programs you choose
          to subscribe a persona inbox to.
        </li>
        <li>
          <strong>Chat messages</strong>: the prompts you send to your
          personas and the assistant&rsquo;s replies.
        </li>
      </ul>

      <h3>Generated for you</h3>
      <ul>
        <li>
          <strong>Persona inbox</strong>: a unique email address at{" "}
          <code>etell.app</code> provisioned when a persona is created.
        </li>
        <li>
          <strong>Audits</strong>: AI-generated reviews of brand emails (and
          eventually site experiences) that arrive at the persona inbox,
          including raw email content, parsed text, screenshots, embeddings,
          and review markdown.
        </li>
      </ul>

      <h3>Collected automatically</h3>
      <ul>
        <li>
          <strong>Session cookies</strong> for authentication
          (HTTP-only, SameSite=Lax).
        </li>
        <li>
          <strong>Page views &amp; sign-in events</strong> recorded
          server-side for product analytics (timestamp, route, user id; no
          third-party tracking pixels).
        </li>
        <li>
          <strong>Standard request logs</strong> from our hosting provider
          (IP address, user-agent, status codes) for short-term operational
          purposes.
        </li>
      </ul>

      <h3>Inbound brand mail</h3>
      <p>
        When a persona inbox is enrolled in a brand&rsquo;s email program,
        emails sent by that brand to the persona inbox are received,
        parsed, archived in encrypted storage, and used to generate audits.
        We do not solicit personal communication to persona inboxes; if you
        receive such mail it is treated as inbound brand content for
        review.
      </p>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To operate the Service: authenticate you, render the dashboard, generate audits, run chat.</li>
        <li>To send transactional email (magic-link sign-in, tier change notices).</li>
        <li>To improve the Service: aggregate usage analytics, debug, and prioritize features.</li>
        <li>To enforce our <a href="/terms">Terms of Use</a> and protect against abuse or fraud.</li>
        <li>To meet legal obligations.</li>
      </ul>
      <p>
        We do <strong>not</strong> sell your personal information. We do
        <strong> not</strong> use your account data, chat content, or audit
        content to train third-party AI models.
      </p>

      <h2>3. Sub-processors</h2>
      <p>
        We rely on the following third-party providers to operate the
        Service. Each receives only what they need:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> — application hosting and serverless
          functions.
        </li>
        <li>
          <strong>Neon</strong> — managed Postgres database (account data,
          personas, audits, chat threads).
        </li>
        <li>
          <strong>Cloudflare</strong> — DNS, Email Routing for persona
          inboxes, and R2 object storage for raw email archives and
          screenshots.
        </li>
        <li>
          <strong>Resend</strong> — delivery of transactional email
          (magic-link sign-in, plan notices).
        </li>
        <li>
          <strong>AgentMail</strong> — per-persona inbox provisioning where
          used (legacy and admin paths).
        </li>
        <li>
          <strong>Anthropic</strong> — AI model inference for onboarding
          research and audit generation.
        </li>
        <li>
          <strong>Self-hosted local LLM</strong> — persona chat runs against
          a model on hardware operated by us, not a third-party API.
        </li>
      </ul>
      <p>
        Sub-processors handle data subject to their own privacy policies and
        the protections of our agreements with them.
      </p>

      <h2>4. Data Retention</h2>
      <ul>
        <li>
          <strong>Account &amp; persona data</strong>: retained while your
          account is active. Deleted within 30 days of account closure
          (subject to backup expiry, typically up to 35 additional days).
        </li>
        <li>
          <strong>Audits and persona &ldquo;brain&rdquo;</strong>: retained
          for the lifetime of the persona to ground future chat and
          benchmarking. Deleted with the persona.
        </li>
        <li>
          <strong>Raw email archives in R2</strong>: retained 12 months,
          then automatically expired.
        </li>
        <li>
          <strong>Server logs</strong>: retained 30 days.
        </li>
        <li>
          <strong>Analytics events (page views, sign-ins)</strong>:
          retained 24 months.
        </li>
      </ul>

      <h2>5. Cookies</h2>
      <p>
        We use a single first-party cookie to keep you signed in
        (<code>__Secure-authjs.session-token</code> in production;{" "}
        <code>authjs.session-token</code> in development). It is HTTP-only,
        Secure (in production), SameSite=Lax, and expires after 30 days.
        We do <strong>not</strong> use third-party tracking cookies,
        advertising cookies, or analytics scripts loaded from third-party
        domains.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        Depending on where you live, you may have the right to access,
        correct, port, or delete personal information we hold about you, and
        to restrict or object to certain processing. To exercise these
        rights, email <a href="mailto:alon@etell.app">alon@etell.app</a>{" "}
        from the address associated with your account. We will respond
        within 30 days. We will not discriminate against you for exercising
        any of these rights.
      </p>

      <h3>EU/UK (GDPR)</h3>
      <p>
        Our legal bases for processing are: contractual necessity (to
        provide the Service to you), legitimate interests (operating,
        securing, and improving the Service), and consent (where required,
        e.g. optional marketing). You may lodge a complaint with your local
        supervisory authority.
      </p>

      <h3>California (CCPA/CPRA)</h3>
      <p>
        California residents may request disclosure of categories and
        specific pieces of personal information collected, request
        deletion, and opt out of any sale or sharing of personal
        information. We do <strong>not</strong> sell personal information.
      </p>

      <h2>7. International Transfers</h2>
      <p>
        Our sub-processors operate primarily in the United States. If you
        access the Service from outside the U.S., your data will be
        transferred to and processed in the U.S. We rely on Standard
        Contractual Clauses or equivalent mechanisms where required for
        cross-border transfers.
      </p>

      <h2>8. Security</h2>
      <p>
        We use encryption in transit (HTTPS/TLS) and at rest for stored
        records. Production secrets are scoped per environment. Access to
        the database is restricted by role. No system is perfectly secure;
        we encourage you to choose a strong, unique sign-in method and to
        notify us promptly of suspected unauthorized access.
      </p>

      <h2>9. Children</h2>
      <p>
        The Service is not directed to children under 18 and we do not
        knowingly collect personal information from anyone under 18. If you
        believe a child has provided us with personal information, contact
        us and we will delete it.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this Privacy Policy from time to time. The current
        version is the one posted at this URL with an updated effective
        date. Material changes will be communicated to active users by
        email. Continued use of the Service after changes take effect
        constitutes acceptance of the updated Policy.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions or privacy requests:{" "}
        <a href="mailto:alon@etell.app">alon@etell.app</a>.
      </p>

      <p className="text-xs text-muted mt-8 pt-4 border-t border-gray-200">
        This Privacy Policy is a working draft and has not been reviewed by
        counsel. It will be updated before any commercial launch.
      </p>
    </div>
  );
}
