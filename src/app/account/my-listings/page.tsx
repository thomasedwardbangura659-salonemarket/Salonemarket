import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Listings — Salone Market",
  description: "Manage the listings you have posted on Salone Market.",
};

export default function MyListingsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary-dark">
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h10"
          />
        </svg>
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
        My Listings
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
        You have not posted any listings yet. Posting ads will be enabled once
        accounts are connected.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/sell"
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Post an ad
        </Link>
        <Link
          href="/products"
          className="rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          Browse listings
        </Link>
      </div>
      <p className="mt-8 text-xs text-muted">
        Demo page — listings will appear here after accounts launch.
      </p>
    </div>
  );
}
