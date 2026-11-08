"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

const locations = [
  "All Sierra Leone",
  "Freetown",
  "Bo",
  "Kenema",
  "Makeni",
  "Koidu",
  "Port Loko",
];

const popularSearches = [
  { label: "Phones", href: "/products?q=phone" },
  { label: "Cars", href: "/products?q=car" },
  { label: "Apartments", href: "/products?q=apartment" },
  { label: "Laptops", href: "/products?q=laptop" },
  { label: "Furniture", href: "/products?q=furniture" },
];

export default function Hero() {
  const [location, setLocation] = useState("All Sierra Leone");
  const router = useRouter();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = String(formData.get("q") ?? "").trim();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (location !== "All Sierra Leone") params.set("city", location);
    const queryString = params.toString();
    router.push(queryString ? `/products?${queryString}` : "/products");
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Buy &amp; Sell Anything in Sierra Leone
          </h1>
          <p className="mt-4 text-lg text-green-50 sm:text-xl">
            The trusted marketplace for electronics, vehicles, property, fashion
            and more. Connect with buyers and sellers near you.
          </p>

          <form
            onSubmit={handleSearch}
            role="search"
            className="mt-8 rounded-xl bg-white p-3 shadow-lg sm:p-4"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <svg
                  className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="search"
                  name="q"
                  placeholder="What are you looking for?"
                  aria-label="Search listings"
                  className="w-full rounded-lg border border-border py-3 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-label="Filter by location"
                className="rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-primary sm:w-44"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-green-50">Popular:</span>
            {popularSearches.map((term) => (
              <Link
                key={term.label}
                href={term.href}
                className="rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur transition-colors hover:bg-white/25"
              >
                {term.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}