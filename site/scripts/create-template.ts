/**
 * CLI for creating a fresh persona template for an industry.
 *
 * Usage:
 *   cd site && npx tsx --env-file=.env.local scripts/create-template.ts \
 *     --industry beauty
 *   cd site && npx tsx --env-file=.env.local scripts/create-template.ts \
 *     --industry beauty --hint "early-30s woman shopping Sephora regularly"
 *   cd site && npx tsx --env-file=.env.local scripts/create-template.ts \
 *     --industry beauty --dry-run
 *
 * --dry-run prints the proposed persona + brand list and exits without
 * touching the DB / filesystem / subscription queue. Use it to sanity-
 * check the LLM output before committing.
 *
 * Real run:
 * 1. LLM-generates a TemplatePersona for the industry (~10-15s).
 * 2. LLM-generates a 5-8 brand list for that persona (~10-15s).
 * 3. Inserts a persona row in the founder tenant ('alon') with a
 *    Cloudflare-routed <slug>@etell.app inbox.
 * 4. Inserts a persona_template row with the same slug.
 * 5. Stamps personas.template_slug = own slug (Walker self-reference).
 * 6. Writes vaults/{slug}/README.md so Alon's Obsidian sees a landing
 *    page immediately.
 * 7. Enqueues a manual_pending subscription job for each brand. They
 *    surface in /admin/subscriptions for the admin to walk through and
 *    mark done.
 *
 * Aborts cleanly on slug collision; does NOT roll back partial work
 * because the steps are append-only and idempotent on re-run with a
 * different slug.
 */

import { createTemplate } from "../lib/template-creation/create-template";

type Args = {
  industry?: string;
  hint?: string;
  dryRun: boolean;
};

function parseArgs(argv: string[]): Args {
  const out: Args = { dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run") out.dryRun = true;
    else if (a === "--industry") out.industry = argv[++i];
    else if (a === "--hint") out.hint = argv[++i];
    else if (a === "--help" || a === "-h") {
      printHelpAndExit(0);
    } else {
      console.error(`unknown arg: ${a}`);
      printHelpAndExit(1);
    }
  }
  return out;
}

function printHelpAndExit(code: number): never {
  console.log(`Usage:
  --industry <tag>   required. Lowercase tag, e.g. 'beauty', 'athleisure', 'home-decor'.
  --hint <text>      optional. Bias the LLM toward a specific archetype.
  --dry-run          print proposed persona + brands without writing anything.
`);
  process.exit(code);
}

function dumpPersona(p: ReturnType<typeof JSON.parse>) {
  console.log(`\n--- proposed persona ---`);
  console.log(`  slug:       ${p.slug}`);
  console.log(`  name:       ${p.name} (short: ${p.short})`);
  console.log(`  age/gen:    ${p.age} ${p.generation} ${p.gender}`);
  console.log(`  style:      ${p.style}`);
  console.log(`  habits:     ${p.shopping_habits}`);
  console.log(`  tech:       ${p.tech_comfort}`);
  console.log(`  focus:      ${(p.focus_areas as string[]).join(", ")}`);
  console.log(`  journey:    /${(p.journey_category_path as string[]).join("/")} · q="${p.journey_search_term}"`);
  console.log(`  rationale:  ${p.rationale}`);
}

function dumpBrands(brands: { brands: Array<{ name: string; domain: string; rationale: string }> }) {
  console.log(`\n--- proposed brands (${brands.brands.length}) ---`);
  for (const b of brands.brands) {
    console.log(`  ${b.domain.padEnd(30)} ${b.name}`);
    console.log(`    ${b.rationale}`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.industry) {
    console.error("--industry is required");
    printHelpAndExit(1);
  }
  console.log(`Creating template for industry='${args.industry}'${args.hint ? ` (hint: '${args.hint}')` : ""}${args.dryRun ? " [DRY RUN]" : ""}\n`);

  const result = await createTemplate({
    industry: args.industry,
    archetypeHint: args.hint ?? null,
    dryRun: args.dryRun,
  });

  dumpPersona(result.persona);
  dumpBrands(result.brands);

  if (result.dryRun) {
    console.log(
      `\n[DRY RUN] No DB writes, no filesystem writes, no subscription jobs.`
    );
    console.log(`Re-run without --dry-run to commit.`);
    return;
  }

  console.log(`\n--- writes ---`);
  console.log(`  persona row id:    ${result.personaId}`);
  console.log(`  inbox:             ${result.inboxAddress}`);
  console.log(`  vault README:      ${result.vaultReadmePath}`);
  console.log(`  template promoted: yes`);

  const subs = result.subscriptions ?? [];
  console.log(`\n--- subscriptions ---`);
  console.log(`  ${subs.length} enqueued for manual signup (visit /admin/subscriptions)`);
  for (const s of subs) console.log(`    ⏳ ${s.brandDomain}`);

  console.log(
    `\nDone. Template '${result.persona.slug}' is live in /admin/templates and ready for fresh ${args.industry} signups to fork.`
  );
}

main().catch((err) => {
  console.error("\nFAIL:", err);
  process.exit(1);
});
