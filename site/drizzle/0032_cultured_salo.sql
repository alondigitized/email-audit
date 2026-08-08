CREATE TABLE "brand" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"domains" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"industry" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "brand_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "experience" ADD COLUMN "brand_slug" text;--> statement-breakpoint
ALTER TABLE "persona_template" ADD COLUMN "brand_slug" text;--> statement-breakpoint
ALTER TABLE "persona" ADD COLUMN "brand_slug" text;--> statement-breakpoint
CREATE INDEX "experience_brand_slug_idx" ON "experience" USING btree ("brand_slug","received_at");