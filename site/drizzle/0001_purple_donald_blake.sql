CREATE TABLE IF NOT EXISTS "signInEvent" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" text NOT NULL,
	"ts" timestamp DEFAULT now() NOT NULL,
	"ipHash" text
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "isAdmin" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "lastSignInAt" timestamp;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "signInEvent" ADD CONSTRAINT "signInEvent_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
