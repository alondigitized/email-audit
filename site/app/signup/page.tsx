import { redirect } from "next/navigation";
import { currentUser } from "@/lib/dal";
import { Wordmark } from "@/components/Wordmark";
import SignupForm from "./SignupForm";

type Search = { [key: string]: string | string[] | undefined };

export const metadata = {
  title: "Sign up · etell",
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  // If already signed in, the funnel is already done.
  const user = await currentUser();
  if (user) redirect("/");

  const sp = await searchParams;
  const ref = typeof sp?.ref === "string" ? sp.ref : null;

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white border border-gray-200 rounded-[20px] p-10 max-w-[420px] w-[90%] shadow-sm">
        <div className="mb-5 text-center">
          <Wordmark size="md" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Get a free persona</h1>
        <p className="text-muted text-sm mb-5 text-center">
          14 days free, no credit card. Use your work email — we research your
          company and propose a persona to live in your customer&apos;s shoes.
        </p>
        <SignupForm refCode={ref} />
        <p className="text-xs text-muted mt-5 text-center">
          Already have an account?{" "}
          <a href="/login" className="underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
