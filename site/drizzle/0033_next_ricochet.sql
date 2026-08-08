CREATE TYPE "public"."opportunity_status" AS ENUM('hypothesis', 'validated', 'presented', 'accepted', 'dismissed');--> statement-breakpoint
CREATE TABLE "opportunity" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"brand_slug" text NOT NULL,
	"title" text NOT NULL,
	"thesis" text NOT NULL,
	"impact" text,
	"category" text,
	"confidence" numeric,
	"metrics" jsonb,
	"status" "opportunity_status" DEFAULT 'hypothesis' NOT NULL,
	"created_by" text DEFAULT 'synthesis' NOT NULL,
	"reviewed_by" text,
	"reviewed_at" timestamp,
	"review_note" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "opportunity_evidence" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"opportunity_id" uuid NOT NULL,
	"kind" text NOT NULL,
	"experience_id" uuid,
	"defect_id" uuid,
	"note" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "opportunity_evidence" ADD CONSTRAINT "opportunity_evidence_opportunity_id_opportunity_id_fk" FOREIGN KEY ("opportunity_id") REFERENCES "public"."opportunity"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "opportunity_evidence" ADD CONSTRAINT "opportunity_evidence_experience_id_experience_id_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experience"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "opportunity_evidence" ADD CONSTRAINT "opportunity_evidence_defect_id_defect_id_fk" FOREIGN KEY ("defect_id") REFERENCES "public"."defect"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "opportunity_brand_idx" ON "opportunity" USING btree ("brand_slug","status");--> statement-breakpoint
CREATE INDEX "opportunity_evidence_opp_idx" ON "opportunity_evidence" USING btree ("opportunity_id");