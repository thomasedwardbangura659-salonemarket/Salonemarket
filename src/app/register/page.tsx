import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/account/AuthForm";

export const metadata: Metadata = {
  title: "Create Account — Salone Market",
  description: "Create a free Salone Market account to buy and sell.",
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-full items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight">Create your account</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Join Salone Market to buy and sell across Sierra Leone. Accounts are
          not connected in this preview.
        </p>
        <AuthForm mode="register" />
        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:text-primary-dark"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
