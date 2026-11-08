import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Favourites — Salone Market",
  description: "Listings you have saved on Salone Market.",
};

export default function FavouritesPage() {
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
            d="M12 21s-7-4.5-9.3-9A5.4 5.4 0 0 1 12 6.5 5.4 5.4 0 0 1 21.3 12C19 16.5 12 21 12 21z"
          />
        </svg>
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
        Favourites
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
        You have not saved any listings yet. Once accounts launch you will be
        able to save listings here for later.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/products"
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Find something to save
        </Link>
        <Link
          href="/categories"
          className="rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          Browse categories
        </Link>
      </div>
      <p className="mt-8 text-xs text-muted">
        Demo page — saved listings will appear here after accounts launch.
      </p>
    </div>
  );
}
