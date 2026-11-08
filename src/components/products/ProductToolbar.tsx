"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type FormEvent } from "react";
import { sortOptions } from "@/data/catalog";

type ProductToolbarProps = {
  categories: { slug: string; name: string }[];
  cities: string[];
  showCategory?: boolean;
};

export default function ProductToolbar({
  categories,
  cities,
  showCategory = true,
}: ProductToolbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentQuery = searchParams.get("q") ?? "";

  function apply(next: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(next)) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextQuery = String(formData.get("q") ?? "").trim();
    apply({ q: nextQuery || null });
  }

  const hasFilters = ["q", "category", "city", "sort", "featured"].some((key) =>
    searchParams.get(key)
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-white p-3 shadow-sm sm:p-4"
      role="search"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            key={currentQuery}
            type="search"
            name="q"
            defaultValue={currentQuery}
            placeholder="Search listings — iPhone, Corolla, rice..."
            aria-label="Search listings"
            className="w-full rounded-lg border border-border bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
          />
        </div>

        {showCategory ? (
          <select
            aria-label="Filter by category"
            value={searchParams.get("category") ?? ""}
            onChange={(event) =>
              apply({ category: event.target.value || null })
            }
            className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary lg:w-44"
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        ) : null}

        <select
          aria-label="Filter by location"
          value={searchParams.get("city") ?? ""}
          onChange={(event) => apply({ city: event.target.value || null })}
          className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary lg:w-44"
        >
          <option value="">All of Sierra Leone</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          aria-label="Sort listings"
          value={searchParams.get("sort") ?? "recommended"}
          onChange={(event) =>
            apply({
              sort:
                event.target.value === "recommended"
                  ? null
                  : event.target.value,
            })
          }
          className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary lg:w-52"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Search
        </button>
      </div>

      {hasFilters ? (
        <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-3">
          <span className="text-xs text-muted">Filters applied</span>
          <button
            type="button"
            onClick={() => router.push(pathname)}
            className="text-xs font-semibold text-primary hover:text-primary-dark"
          >
            Clear all filters
          </button>
        </div>
      ) : null}
    </form>
  );
}
