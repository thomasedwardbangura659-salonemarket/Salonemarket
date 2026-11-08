import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/products/ProductCard";
import ProductImage from "@/components/products/ProductImage";
import {
  conditionLabel,
  formatDate,
  formatPrice,
  getCategory,
  getProduct,
  productLocation,
  products,
  relatedProducts,
} from "@/data/catalog";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Listing not found — Salone Market" };
  return {
    title: `${product.name} — Salone Market`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = relatedProducts(product);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-xs text-muted">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">
            Browse
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/categories/${product.category}`}
            className="hover:text-primary"
          >
            {category?.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-primary-light/40">
              <ProductImage
                kind={product.image}
                category={product.category}
                label={product.name}
                seed={product.slug}
                accent={product.accent}
                className="aspect-[4/3] w-full"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-dark shadow-sm backdrop-blur">
                Sample listing
              </span>
            </div>
            <p className="mt-3 text-xs text-muted">
              Illustrative sample image. This is demonstration data, not a real
              sale.
            </p>
          </div>

          <div>
            <Link
              href={`/categories/${product.category}`}
              className="inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-dark transition-colors hover:bg-primary hover:text-white"
            >
              {category?.name}
            </Link>
            <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              {product.name}
            </h1>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.priceUnit ? (
                <span className="text-sm font-medium text-muted">
                  {product.priceUnit}
                </span>
              ) : null}
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-border bg-gray-50 p-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  Location
                </dt>
                <dd className="mt-1 font-medium text-foreground">
                  {productLocation(product)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  Condition
                </dt>
                <dd className="mt-1 font-medium text-foreground">
                  {conditionLabel(product.condition)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  Posted
                </dt>
                <dd className="mt-1 font-medium text-foreground">
                  {formatDate(product.postedAt)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  Seller type
                </dt>
                <dd className="mt-1 font-medium text-foreground">
                  {product.seller.type}
                </dd>
              </div>
            </dl>

            <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-white p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary-dark">
                {product.seller.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {product.seller.name}
                </p>
                <p className="flex items-center gap-1 text-xs text-muted">
                  <svg
                    className="h-3.5 w-3.5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
                  </svg>
                  {product.seller.rating.toFixed(1)} seller rating
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Contact Seller
              </Link>
              <Link
                href="/products"
                className="rounded-lg border border-border px-6 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                Back to listings
              </Link>
            </div>

            <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">
              Demo listing — messaging and payments are not connected. All
              details shown are sample data for preview only.
            </p>
          </div>
        </div>

        <section className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold tracking-tight">Description</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {product.description}
            </p>

            <h2 className="mt-8 text-xl font-bold tracking-tight">
              Key details
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 rounded-lg border border-border bg-gray-50 px-3 py-2 text-sm text-foreground"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-xl border border-border bg-gray-50 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Safety tips
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              <li>Meet in a public place during daylight.</li>
              <li>Inspect the item before paying.</li>
              <li>Never send money before seeing the item.</li>
              <li>Report suspicious listings to Salone Market.</li>
            </ul>
            <p className="mt-4 border-t border-border pt-3 text-xs text-muted">
              These are general tips for the demo, not legal advice.
            </p>
          </aside>
        </section>

        {related.length > 0 ? (
          <section className="mt-12 border-t border-border pt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">
                More in {category?.name}
              </h2>
              <Link
                href={`/categories/${product.category}`}
                className="text-sm font-medium text-primary transition-colors hover:text-primary-dark"
              >
                View all →
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
              {related.map((item, index) => (
                <ProductCard key={item.slug} product={item} index={index} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
