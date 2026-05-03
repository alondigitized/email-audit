export const metadata = { title: "How scoring works · etell" };

export default function ScoringPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 prose prose-sm prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-3 prose-p:my-3 prose-li:my-1">
      <h1 className="text-3xl font-bold mb-2">How scoring works</h1>
      <p className="text-muted text-sm">
        Updated: May 2026
      </p>

      <p>
        Every audit on etell carries three numeric scores out of 10. We score
        from observable signals in the captured artifact (the rendered email,
        the homepage screenshot) — not gut feel — so two persona-grounded
        reviews of the same artifact converge on the same number. This page
        is the rubric the persona applies; you can read each criterion,
        agree or disagree, and recalibrate.
      </p>

      <h2>The three scores</h2>

      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Score 1 — Overall</th>
            <th>Score 2 — Funnel A</th>
            <th>Score 3 — Funnel B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email</td>
            <td>Business Impact</td>
            <td>Open Likelihood</td>
            <td>Click Likelihood</td>
          </tr>
          <tr>
            <td>Web</td>
            <td>Business Impact</td>
            <td>Engagement Likelihood</td>
            <td>Conversion Likelihood</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Business Impact</strong> answers: how well does this artifact
        target a person like the persona? <strong>Funnel A</strong> answers:
        will the persona move past the inbox / past the first screen?{" "}
        <strong>Funnel B</strong> answers: would the persona click /
        convert / add-to-cart?
      </p>

      <h2>The scoring method (every score)</h2>

      <p>
        Each score works the same way:
      </p>

      <ol>
        <li>The score starts at <strong>1</strong>.</li>
        <li>
          The persona walks a <strong>10-criterion checklist</strong>.
          For every criterion that&apos;s TRUE based on what&apos;s visible
          in the artifact, add <strong>+1</strong> to the score.
        </li>
        <li>The score caps at <strong>10</strong>.</li>
        <li>
          Each score is rendered with the per-criterion tally in the audit
          detail page so you can see exactly which signals counted.
        </li>
      </ol>

      <p>
        That means a score of 10 is rare and means almost every signal is
        present. A score of 5 means about half of the signals are present.
        Most everyday emails / homepages land 4–7.
      </p>

      <h2>Email rubric</h2>

      <h3>Business Impact (Email)</h3>
      <ul>
        <li>Subject or hero copy explicitly references the persona&apos;s focus area.</li>
        <li>Sender is a brand the persona recognizes / is subscribed to.</li>
        <li>One concrete offer is visible (specific %/$ off, free-shipping, BOGO).</li>
        <li>Primary CTA is unambiguous (clear button copy + visible button).</li>
        <li>Visual hierarchy is clear — the eye lands on the offer / hero first.</li>
        <li>No render bugs (no overlapping text, broken images, lorem-ipsum, layout breakage).</li>
        <li>Demographic signals match the persona (age / gender / style of models).</li>
        <li>Email reflects current campaign / season (not stale promo language).</li>
        <li>Loyalty / member benefits visible if the persona is a member.</li>
        <li>Offer feels honest (no buried fine print, exclusionary language, bait-and-switch).</li>
      </ul>

      <h3>Open Likelihood (Email)</h3>
      <ul>
        <li>Sender display name is recognizable.</li>
        <li>Subject is concrete (specific offer, product, urgency).</li>
        <li>Subject is relevant to the persona&apos;s focus area.</li>
        <li>Preview text complements the subject (does NOT repeat it).</li>
        <li>Preview text is real copy (not &ldquo;view in browser&rdquo; / unsubscribe junk).</li>
        <li>Subject is under ~50 chars (mobile-friendly).</li>
        <li>No spam signals (ALL CAPS, !!! exclamations, &ldquo;FREE!!!&rdquo;).</li>
        <li>Personalization or segmentation hints (the persona&apos;s name, category).</li>
        <li>Time-bounded urgency that feels credible.</li>
        <li>Cadence feels right (not the 4th near-identical promo this week).</li>
      </ul>

      <h3>Click Likelihood (Email)</h3>
      <ul>
        <li>Hero offer is visible without scrolling on mobile.</li>
        <li>Primary CTA is in the persona&apos;s category.</li>
        <li>CTA copy is specific (&ldquo;Shop Slip-ins&rdquo;, not &ldquo;Discover&rdquo;).</li>
        <li>Offer reduces price OR has loyalty member pricing.</li>
        <li>Offer is time-bounded with a credible deadline.</li>
        <li>One specific product / hero linked (not just to homepage).</li>
        <li>Sizing / fit / availability info visible.</li>
        <li>Reviews or social proof visible.</li>
        <li>Brand voice consistent and trusted.</li>
        <li>No friction (no &ldquo;view in browser&rdquo; first, no broken-image gaps).</li>
      </ul>

      <h2>Web rubric</h2>

      <h3>Business Impact (Web)</h3>
      <ul>
        <li>Hero copy or imagery explicitly speaks to the persona (focus area, age, generation, lifestyle).</li>
        <li>A returning-shopper hook is visible (loyalty / member CTA, recently-viewed, rewards balance).</li>
        <li>One concrete offer is visible above the fold (specific %/$ off, free-shipping threshold).</li>
        <li>One unmistakable primary CTA is visible above the fold.</li>
        <li>Visual hierarchy is clear — the eye knows where to land first.</li>
        <li>No render bugs (overlapping text, broken images, placeholder lorem-ipsum, layout breakage).</li>
        <li>Demographic signals match the persona.</li>
        <li>Page reflects current campaign / season.</li>
        <li>Loyalty / membership benefits visible without scrolling.</li>
        <li>Offer feels honest (no buried fine print, exclusionary language, bait-and-switch).</li>
      </ul>

      <h3>Engagement Likelihood (Web)</h3>
      <p>
        The persona is already on the homepage — engagement scores whether
        they&apos;d scroll past the first screen / tap a category /
        interact, vs. bounce.
      </p>
      <ul>
        <li>Hero relates to the persona&apos;s shopping focus area.</li>
        <li>Visible navigation makes it easy to reach the persona&apos;s category in 1 tap.</li>
        <li>A category or product image catches the eye for what the persona shops.</li>
        <li>A promo banner offers something the persona would actually use.</li>
        <li>The page renders cleanly (no obvious perf issues, no layout shift).</li>
        <li>Imagery includes someone like the persona (age / style / situation).</li>
        <li>Copy register matches the persona&apos;s reading style.</li>
        <li>Trust signals visible (review counts, badges, free returns).</li>
        <li>New-arrivals or &ldquo;what&apos;s hot&rdquo; rail visible in the persona&apos;s category.</li>
        <li>No dark patterns / forced modals making the persona want to bounce.</li>
      </ul>

      <h3>Conversion Likelihood (Web)</h3>
      <ul>
        <li>Primary CTA is in the persona&apos;s category.</li>
        <li>CTA copy is unambiguous (&ldquo;Shop Slip-ins&rdquo;, not &ldquo;Discover&rdquo;).</li>
        <li>Active offer reduces price OR has loyalty member pricing.</li>
        <li>Offer is time-bounded with a credible deadline.</li>
        <li>Free-shipping threshold visible AND reachable for typical AOV.</li>
        <li>A specific product page is one tap away (not buried in nav).</li>
        <li>Sizing / fit info visible or one tap away.</li>
        <li>Returns / exchanges policy is mentioned.</li>
        <li>Reviews or ratings visible on featured products.</li>
        <li>Trust signals at checkout depth (secure-checkout, pay-later, etc.).</li>
      </ul>

      <h2>Why a checklist instead of a vibe</h2>

      <p>
        Persona-grounded scoring is inherently subjective — the persona is
        a 62-year-old comfort shopper, not a regression model. But the
        question we want answered isn&apos;t &ldquo;what&apos;s the
        feeling?&rdquo;; it&apos;s &ldquo;what&apos;s actually on the
        page that a 62-year-old would respond to?&rdquo; Anchoring scores
        to observable signals lets reviewers — including humans — disagree
        with the persona on a specific criterion (&ldquo;the loyalty
        callout is there, you missed it&rdquo;) instead of arguing about
        a vibe.
      </p>

      <h2>What scores are not</h2>

      <p>
        These are <strong>not</strong> probability predictions. A &ldquo;9/10
        Open Likelihood&rdquo; doesn&apos;t mean the email has a 90%
        open rate in production. It means the persona, with their
        particular shopping habits and their accumulated history with
        the brand, would likely open this one — based on the signals
        listed above. Treat the scores as <em>relative</em>: useful for
        comparing two emails or two homepages from the same persona&apos;s
        point of view, less useful as forecasts.
      </p>

      <h2>Questions or feedback?</h2>

      <p>
        Email{" "}
        <a href="mailto:alon@etell.app">alon@etell.app</a>. The rubric is
        living — if a criterion is missing or wrong for your category,
        we&apos;ll iterate.
      </p>
    </div>
  );
}
