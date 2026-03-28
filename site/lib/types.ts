export interface JourneyStep {
  step: number;
  label: string;
  viewport_screenshot: string | null;
  fullpage_screenshot: string | null;
  url: string;
  status?: string;
}

export interface PerfStep {
  step: number;
  label: string;
  url: string;
  ttfb_ms?: number | null;
  lcp_ms?: number | null;
  cls?: number | null;
}

export interface AuditData {
  schema_version: number;
  slug: string;
  type?: "email" | "site";
  persona?: string | null;
  email: {
    subject: string;
    from: string;
    from_display_name: string;
    timestamp_iso: string | null;
    date_formatted: string;
  };
  review: {
    score: string;
    raw_markdown: string;
    sections: ReviewSections;
  };
  qa: QaReport | null;
  assets: {
    render_image: string | null;
    pdf: string | null;
    webview_url: string | null;
    journey_steps?: JourneyStep[];
  };
  performance?: {
    steps: PerfStep[];
  };
}

export interface ReviewSections {
  executive_summary: string[];
  business_impact_score: string[];
  whats_working: string[];
  whats_weak: string[];
  recommendations: string[];
  bottom_line: string[];
  evidence: string[];
}

export interface QaReport {
  summary: QaSummary;
  categories: Record<string, QaCategory>;
}

export interface QaSummary {
  overall_pass_rate: string;
  total_checks: number;
  total_issues: number;
  total_warnings: number;
}

export interface QaCategory {
  passed: number;
  warned: number;
  failed: number;
  checks: QaCheck[];
}

export interface QaCheck {
  check_id: string;
  status: "pass" | "warn" | "fail" | "info";
  label: string;
  detail: string;
  url?: string;
}

export interface AuditSummary {
  slug: string;
  subject: string;
  from_display_name: string;
  timestamp_iso: string | null;
  score: string;
  qa_summary: QaSummary | null;
  has_image: boolean;
  type?: "email" | "site";
  persona?: string | null;
}

export type QaBusinessGroup =
  | "broken_experience"
  | "compliance"
  | "deliverability"
  | "accessibility"
  | "info";

export interface SplitReview {
  content: string;
  technical: string | null;
}

const TECH_MARKER = "## Technical Audit";

export function splitReview(rawMarkdown: string): SplitReview {
  const idx = rawMarkdown.indexOf(TECH_MARKER);
  if (idx === -1) {
    return { content: rawMarkdown, technical: null };
  }
  return {
    content: rawMarkdown.slice(0, idx).trimEnd(),
    technical: rawMarkdown.slice(idx),
  };
}
