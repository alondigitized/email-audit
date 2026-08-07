CREATE TYPE "public"."defect_status" AS ENUM('candidate', 'verified', 'refuted', 'approved', 'rejected', 'submitted', 'suppressed');--> statement-breakpoint
CREATE TABLE "defect" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenant_id" uuid,
	"persona_slug" text NOT NULL,
	"experience_id" uuid,
	"location" text NOT NULL,
	"url" text NOT NULL,
	"area" text NOT NULL,
	"description" text NOT NULL,
	"device" text,
	"browser" text,
	"urgency" text NOT NULL,
	"reporter_email" text,
	"evidence" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"category" text NOT NULL,
	"expected" text,
	"observed" text,
	"repro_steps" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"urgency_rationale" text,
	"confidence" numeric,
	"dedupe_key" text,
	"verification" jsonb,
	"verified_at" timestamp,
	"status" "defect_status" DEFAULT 'candidate' NOT NULL,
	"reviewed_by" text,
	"reviewed_at" timestamp,
	"review_note" text,
	"submitted_at" timestamp,
	"submission_ref" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "defect" ADD CONSTRAINT "defect_tenant_id_tenant_id_fk" FOREIGN KEY ("tenant_id") REFERENCES "public"."tenant"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "defect" ADD CONSTRAINT "defect_experience_id_experience_id_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experience"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "defect_status_created_idx" ON "defect" USING btree ("status","created_at");--> statement-breakpoint
CREATE INDEX "defect_dedupe_idx" ON "defect" USING btree ("dedupe_key");--> statement-breakpoint
CREATE INDEX "defect_persona_idx" ON "defect" USING btree ("persona_slug");--> statement-breakpoint
CREATE INDEX "defect_tenant_idx" ON "defect" USING btree ("tenant_id");