// Re-export of the shared zod schema with TypeScript types derived via
// z.infer. The canonical schema lives next to this file as audit.mjs so
// Node's module resolution can find `zod` in site/node_modules both from
// this file (consumer) and from the daemons that import the .mjs directly.
// Producer daemons reach it via relative path `../site/lib/schema/audit.mjs`.
//
// Keep this file dumb: no new schemas, no validation wrappers. Anything
// that would live here belongs alongside the canonical schema instead.

import { z } from "zod";
import {
  auditDataSchema,
  auditSummarySchema,
  auditTypeSchema,
  journeyStepSchema,
  perfStepSchema,
  qaCategorySchema,
  qaCheckSchema,
  qaReportSchema,
  qaSummarySchema,
  qaJourneySchema,
  reviewAudioSchema,
  reviewSectionsSchema,
  inventoryAuditSchema,
  inventoryPlpSchema,
  inventoryStyleSchema,
  inventoryVariantSchema,
  inventorySizeSchema,
  inventoryTotalsSchema,
  autoConfirmSchema,
  parseAuditData,
  safeParseAuditData,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore — resolved at runtime; tsconfig allowJs covers .mjs imports
} from "./audit.mjs";

export {
  auditDataSchema,
  auditSummarySchema,
  auditTypeSchema,
  journeyStepSchema,
  perfStepSchema,
  qaCategorySchema,
  qaCheckSchema,
  qaReportSchema,
  qaSummarySchema,
  qaJourneySchema,
  reviewAudioSchema,
  reviewSectionsSchema,
  inventoryAuditSchema,
  inventoryPlpSchema,
  inventoryStyleSchema,
  inventoryVariantSchema,
  inventorySizeSchema,
  inventoryTotalsSchema,
  autoConfirmSchema,
  parseAuditData,
  safeParseAuditData,
};

export type AuditType = z.infer<typeof auditTypeSchema>;
export type QaJourney = z.infer<typeof qaJourneySchema>;
export type JourneyStep = z.infer<typeof journeyStepSchema>;
export type PerfStep = z.infer<typeof perfStepSchema>;
export type ReviewSections = z.infer<typeof reviewSectionsSchema>;
export type QaCheck = z.infer<typeof qaCheckSchema>;
export type QaCategory = z.infer<typeof qaCategorySchema>;
export type QaSummary = z.infer<typeof qaSummarySchema>;
export type QaReport = z.infer<typeof qaReportSchema>;
export type AuditData = z.infer<typeof auditDataSchema>;
export type AuditSummary = z.infer<typeof auditSummarySchema>;
export type InventoryAudit = z.infer<typeof inventoryAuditSchema>;
export type InventoryVariant = z.infer<typeof inventoryVariantSchema>;
export type AutoConfirm = z.infer<typeof autoConfirmSchema>;
export type ReviewAudio = z.infer<typeof reviewAudioSchema>;
