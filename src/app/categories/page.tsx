import type { Metadata } from "next";
import Link from "next/link";
import {
  categories,
  productCountsByCategory,
} from "@/data/catalog";

export const metadata: Metadata = {
  title: "Categories — Salone Market",
  description:
    "Browse every category on Salone Market: electronics, vehicles, property, fashion, home & garden, services, agriculture and jobs.",
};

export default function CategoriesPage() {
  const counts = productCountsByCategory();

  return (
    <div className="bg-gray-50">
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-muted">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Categories</span>
          </nav>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Browse Categories
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Find what you need across eight categories. All listings are sample
            data for demonstration.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              style={{ animationDelay: `${index * 50}ms` }}
              className="group animate-rise flex flex-col rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                {counts[category.slug]}{" "}
                {counts[category.slug] === 1 ? "listing" : "listings"}
              </span>
              <h2 className="mt-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary-dark">
                {category.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
              <span className="mt-4 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
                View listings →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-white px-6 py-8 text-center">
          <h2 className="text-lg font-semibold">Looking for something else?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Search every listing at once or see the most popular sample ads
            first.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Browse all listings
            </Link>
            <Link
              href="/products?featured=true"
              className="rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Featured ads
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
