CREATE TABLE "podcast_subscription" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"persona_slug" text NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"revoked_at" timestamp,
	CONSTRAINT "podcast_subscription_token_unique" UNIQUE("token")
);
--> statement-breakpoint
ALTER TABLE "podcast_subscription" ADD CONSTRAINT "podcast_subscription_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "podcast_subscription_user_persona_idx" ON "podcast_subscription" USING btree ("user_id","persona_slug");