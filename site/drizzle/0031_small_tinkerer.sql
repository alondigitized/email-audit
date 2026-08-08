ALTER TABLE "defect" ADD COLUMN "component_key" text;--> statement-breakpoint
ALTER TABLE "defect" ADD COLUMN "also_seen_on" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
CREATE INDEX "defect_component_idx" ON "defect" USING btree ("component_key");