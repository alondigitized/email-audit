export const metadata = { title: "Terms of Use · etell" };

const EFFECTIVE_DATE = "April 28, 2026";

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 prose prose-sm prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-3 prose-p:my-3 prose-li:my-1">
      <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
      <p className="text-muted text-sm">
        <strong>Effective:</strong> {EFFECTIVE_DATE}
      </p>

      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use
        of <strong>etell.app</strong> (the &ldquo;Service&rdquo;), operated by
        Alon Tsang as an independent project. By creating an account or using
        the Service, you agree to these Terms.
      </p>

      <h2>1. The Service</h2>
      <p>
        etell.app generates AI-driven reviews of brand experiences (emails and
        websites) by routing brand mail to AI personas, scoring it, and
        surfacing the results in a dashboard. The Service is offered as-is
        and continues to evolve; features may change, be added, or be
        removed at any time.
      </p>

      <h2>2. Eligibility &amp; Accounts</h2>
      <ul>
        <li>You must be at least 18 years old.</li>
        <li>
          You must sign up using a valid work email at a company you are
          authorized to represent. We do not accept generic personal email
          providers.
        </li>
        <li>
          You are responsible for keeping your account credentials secure and
          for all activity under your account.
        </li>
        <li>
          You will not share access with anyone outside your tenant or use
          another person&rsquo;s account without permission.
        </li>
      </ul>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Use the Service to scrape, mirror, or systematically harvest content
          from any third party in a way that violates that third
          party&rsquo;s terms.
        </li>
        <li>
          Subscribe persona inboxes to mailing lists you do not have a
          legitimate business interest in observing, or in volumes intended
          to disrupt the sender.
        </li>
        <li>
          Reverse-engineer, decompile, or attempt to extract source code or
          training data from the Service.
        </li>
        <li>
          Upload, transmit, or generate content that is illegal, infringing,
          defamatory, or that violates the rights of any third party.
        </li>
        <li>
          Attempt to interfere with, disrupt, or gain unauthorized access to
          the Service, other users&rsquo; tenants, or the underlying
          infrastructure.
        </li>
        <li>
          Use the Service to make automated decisions affecting individual
          consumers without independent human review.
        </li>
      </ul>

      <h2>4. Your Content</h2>
      <p>
        You retain ownership of any data you submit to the Service
        (&ldquo;Your Content&rdquo;). You grant etell.app a worldwide,
        non-exclusive, royalty-free license to host, process, transmit, and
        display Your Content solely as needed to operate the Service for you.
        You represent that you have all rights necessary to grant this
        license.
      </p>

      <h2>5. AI Output</h2>
      <p>
        The Service uses AI models to generate persona reviews, scores, and
        commentary (&ldquo;Output&rdquo;). Output is probabilistic and may
        contain errors, omissions, or biases. You are responsible for
        independently verifying Output before relying on it for any
        consequential decision. etell.app makes no representation that
        Output is accurate, complete, or fit for any particular purpose.
      </p>

      <h2>6. Persona Inboxes &amp; Brand Mail</h2>
      <p>
        Persona email addresses provisioned by the Service are intended to
        receive brand marketing emails for review. You agree:
      </p>
      <ul>
        <li>
          To use persona inboxes only for the lawful purpose of observing
          brand experiences relevant to your business.
        </li>
        <li>
          That you are responsible for compliance with applicable
          anti-spam, privacy, and consumer-protection laws (including, where
          applicable, CAN-SPAM, GDPR, CCPA, and similar regimes) when
          enrolling persona inboxes in third-party email programs.
        </li>
        <li>
          To unsubscribe persona inboxes promptly when you no longer have a
          legitimate purpose for receiving the relevant brand&rsquo;s mail.
        </li>
      </ul>

      <h2>7. Beta &amp; Service Availability</h2>
      <p>
        The Service is currently in active development. Features may be
        unstable; data may be lost or corrupted; downtime may occur without
        notice. The Service is provided <strong>&ldquo;as is&rdquo;</strong>{" "}
        and <strong>&ldquo;as available&rdquo;</strong>, without warranties of
        any kind, express or implied, including warranties of merchantability,
        fitness for a particular purpose, or non-infringement.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, in no event will etell.app or
        Alon Tsang be liable for any indirect, incidental, special,
        consequential, or punitive damages arising out of or in connection
        with your use of the Service, even if advised of the possibility of
        such damages. Total aggregate liability for any claim arising from
        the Service is limited to the greater of (a) the amounts you have
        paid to use the Service in the twelve months preceding the claim or
        (b) USD $100.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless etell.app, Alon
        Tsang, and any contributors from and against any claims, damages,
        losses, or expenses (including reasonable attorneys&rsquo; fees)
        arising out of your use of the Service, your violation of these
        Terms, or your violation of any third-party right.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may suspend or terminate your access at any time, with or without
        notice, if we believe you are in violation of these Terms or pose a
        risk to the Service or other users. You may stop using the Service
        at any time; on request we will delete your tenant&rsquo;s data
        within a reasonable period, subject to our backup retention.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update these Terms from time to time. The current version is
        always the one posted at this URL with an updated effective date.
        Material changes will be communicated to active users by email.
        Continued use of the Service after changes take effect constitutes
        acceptance of the revised Terms.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of California,
        without regard to its conflict-of-laws provisions. Any dispute
        arising from these Terms or the Service will be brought exclusively
        in the state or federal courts located in San Francisco County,
        California, and you consent to personal jurisdiction there.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions or notices: <a href="mailto:alon@etell.app">alon@etell.app</a>.
      </p>

      <p className="text-xs text-muted mt-8 pt-4 border-t border-gray-200">
        These Terms are a working draft and have not been reviewed by
        counsel. They will be updated before any commercial launch.
      </p>
    </div>
  );
}
