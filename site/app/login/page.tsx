"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
      setPassword("");
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white border border-gray-200 rounded-[20px] p-10 max-w-[360px] w-[90%] text-center shadow-sm">
        <h2 className="mt-0 mb-2 text-ink">Email Audit</h2>
        <p className="text-muted text-sm mb-5">
          Enter the shared secret to continue.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Shared secret"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2.5 px-3.5 border border-gray-200 rounded-xl text-[15px] mb-3 outline-none"
            autoFocus
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-accent text-white border-none rounded-xl text-[15px] cursor-pointer disabled:opacity-50"
          >
            {loading ? "Unlocking..." : "Unlock"}
          </button>
        </form>
        {error && (
          <p className="text-red-600 text-[13px] mt-2.5">
            Incorrect. Try again.
          </p>
        )}
      </div>
    </div>
  );
}
