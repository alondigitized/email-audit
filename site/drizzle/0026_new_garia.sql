CREATE TYPE "public"."persona_kind" AS ENUM('brand', 'industry');--> statement-breakpoint
ALTER TABLE "persona_template" ADD COLUMN "kind" "persona_kind" DEFAULT 'brand' NOT NULL;--> statement-breakpoint
ALTER TABLE "persona" ADD COLUMN "kind" "persona_kind" DEFAULT 'brand' NOT NULL;--> statement-breakpoint
ALTER TABLE "persona" ADD COLUMN "industry" text;