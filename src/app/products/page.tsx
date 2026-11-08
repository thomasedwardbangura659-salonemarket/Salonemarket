import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ProductCard from "@/components/products/ProductCard";
import ProductToolbar from "@/components/products/ProductToolbar";
import {
  categories,
  cities,
  filterProducts,
  isCategorySlug,
  isSortOption,
} from "@/data/catalog";

export const metadata: Metadata = {
  title: "Browse Listings — Salone Market",
  description:
    "Browse sample listings for electronics, vehicles, property, fashion and more across Sierra Leone. Prices in new Leones (SLE).",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const q = firstValue(params.q) ?? "";
  const categoryParam = firstValue(params.category) ?? "";
  const city = firstValue(params.city) ?? "";
  const sortParam = firstValue(params.sort) ?? "";
  const featuredOnly = firstValue(params.featured) === "true";

  const results = filterProducts({
    q,
    category: isCategorySlug(categoryParam) ? categoryParam : undefined,
    city: city || undefined,
    sort: isSortOption(sortParam) ? sortParam : undefined,
    featuredOnly,
  });

  return (
    <div className="bg-gray-50">
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-muted">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Browse</span>
          </nav>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {featuredOnly ? "Featured Listings" : "Browse Listings"}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Explore listings from sellers across Sierra Leone. Prices are shown
            in new Leones (SLE). Every listing on this page is sample data for
            demonstration.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="h-[76px] rounded-xl border border-border bg-white" />
          }
        >
          <ProductToolbar
            categories={categories.map(({ slug, name }) => ({ slug, name }))}
            cities={cities()}
          />
        </Suspense>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted">
            <span className="font-semibold text-foreground">
              {results.length}
            </span>{" "}
            {results.length === 1 ? "listing" : "listings"}
            {q ? <> matching &ldquo;{q}&rdquo;</> : null}
          </p>
          <Link
            href="/categories"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-dark"
          >
            Browse by category →
          </Link>
        </div>

        {results.length > 0 ? (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
            {results.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-border bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary-dark">
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h2 className="mt-4 text-lg font-semibold">No listings found</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Try a different search term or clear your filters to see all
              sample listings.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Clear filters
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
