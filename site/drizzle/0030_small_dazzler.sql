ALTER TABLE "defect" ADD COLUMN "business_impact" text;--> statement-breakpoint
ALTER TABLE "defect" ADD COLUMN "affected_elements" jsonb DEFAULT '[]'::jsonb NOT NULL;