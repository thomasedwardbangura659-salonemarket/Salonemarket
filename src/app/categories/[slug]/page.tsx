import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/products/ProductCard";
import ProductToolbar from "@/components/products/ProductToolbar";
import {
  categories,
  cities,
  filterProducts,
  getCategory,
  isSortOption,
} from "@/data/catalog";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found — Salone Market" };
  return {
    title: `${category.name} — Salone Market`,
    description: category.description,
  };
}

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const queryParams = await searchParams;
  const q = firstValue(queryParams.q) ?? "";
  const city = firstValue(queryParams.city) ?? "";
  const sortParam = firstValue(queryParams.sort) ?? "";

  const results = filterProducts({
    q,
    city: city || undefined,
    sort: isSortOption(sortParam) ? sortParam : undefined,
    category: category.slug,
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
            <Link href="/categories" className="hover:text-primary">
              Categories
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{category.name}</span>
          </nav>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {category.name}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {category.description}
              </p>
            </div>
            <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary-dark">
              {results.length} {results.length === 1 ? "listing" : "listings"}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="h-[76px] rounded-xl border border-border bg-white" />
          }
        >
          <ProductToolbar
            categories={categories.map(({ slug: value, name }) => ({
              slug: value,
              name,
            }))}
            cities={cities()}
            showCategory={false}
          />
        </Suspense>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {results.length}
            </span>{" "}
            sample {results.length === 1 ? "listing" : "listings"} in{" "}
            {category.name}
            {q ? <> matching &ldquo;{q}&rdquo;</> : null}
          </p>
          <Link
            href="/categories"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-dark"
          >
            ← All categories
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
            <h2 className="text-lg font-semibold">
              No {category.name.toLowerCase()} listings match your filters
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Try a different search term or view every sample listing in this
              category.
            </p>
            <Link
              href={`/categories/${category.slug}`}
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
