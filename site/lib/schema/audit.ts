// Re-export of the shared zod schema with TypeScript types derived via
// z.infer. The canonical schema lives in audit-pipeline/audit-schema.mjs
// so producer daemons and this consumer share one definition.
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
  reviewSectionsSchema,
  parseAuditData,
  safeParseAuditData,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore — resolved at runtime; tsconfig allowJs covers .mjs imports
} from "../../../audit-pipeline/audit-schema.mjs";

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
  reviewSectionsSchema,
  parseAuditData,
  safeParseAuditData,
};

export type AuditType = z.infer<typeof auditTypeSchema>;
export type JourneyStep = z.infer<typeof journeyStepSchema>;
export type PerfStep = z.infer<typeof perfStepSchema>;
export type ReviewSections = z.infer<typeof reviewSectionsSchema>;
export type QaCheck = z.infer<typeof qaCheckSchema>;
export type QaCategory = z.infer<typeof qaCategorySchema>;
export type QaSummary = z.infer<typeof qaSummarySchema>;
export type QaReport = z.infer<typeof qaReportSchema>;
export type AuditData = z.infer<typeof auditDataSchema>;
export type AuditSummary = z.infer<typeof auditSummarySchema>;
