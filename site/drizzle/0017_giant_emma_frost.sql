CREATE TABLE "brand_blocklist" (
	"domain" text PRIMARY KEY NOT NULL,
	"reason" text,
	"added_by" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "brand_blocklist" ADD CONSTRAINT "brand_blocklist_added_by_user_id_fk" FOREIGN KEY ("added_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;