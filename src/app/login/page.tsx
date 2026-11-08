import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/account/AuthForm";

export const metadata: Metadata = {
  title: "Login — Salone Market",
  description: "Sign in to manage your Salone Market listings.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-full items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Sign in to manage your listings and favourites. Accounts are not
          connected in this preview.
        </p>
        <AuthForm mode="login" />
        <p className="mt-6 text-center text-sm text-muted">
          New to Salone Market?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:text-primary-dark"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
