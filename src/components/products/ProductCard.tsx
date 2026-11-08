import Link from "next/link";
import ProductImage from "@/components/products/ProductImage";
import {
  categoryName,
  conditionLabel,
  formatPrice,
  productLocation,
  type Product,
} from "@/data/catalog";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
      className="group animate-rise flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-primary-light/40">
        <ProductImage
          kind={product.image}
          category={product.category}
          label={product.name}
          seed={product.slug}
          accent={product.accent}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-primary-dark shadow-sm backdrop-blur">
          Sample
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-foreground/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
          {conditionLabel(product.condition)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
          {categoryName(product.category)}
        </span>
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary-dark">
          {product.name}
        </h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-base font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.priceUnit ? (
            <span className="text-[11px] font-medium text-muted">
              {product.priceUnit}
            </span>
          ) : null}
        </div>
        <div className="mt-auto flex items-center gap-1.5 pt-3 text-xs text-muted">
          <svg
            className="h-3.5 w-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 1 1 16 0z"
            />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span className="truncate">{productLocation(product)}</span>
        </div>
      </div>
    </Link>
  );
}
