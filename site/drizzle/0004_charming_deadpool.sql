CREATE TABLE IF NOT EXISTS "user_app_access" (
	"user_id" text NOT NULL,
	"app_key" text NOT NULL,
	"granted_at" timestamp DEFAULT now() NOT NULL,
	"granted_by" text,
	CONSTRAINT "user_app_access_user_id_app_key_pk" PRIMARY KEY("user_id","app_key")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_app_access" ADD CONSTRAINT "user_app_access_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_app_access" ADD CONSTRAINT "user_app_access_granted_by_user_id_fk" FOREIGN KEY ("granted_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
