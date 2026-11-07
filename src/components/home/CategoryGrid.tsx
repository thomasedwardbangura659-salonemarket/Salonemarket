import Link from "next/link";

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    count: "Phones, laptops & more",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    name: "Vehicles",
    slug: "vehicles",
    count: "Cars, bikes & parts",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    name: "Property",
    slug: "property",
    count: "Rent, sale & land",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    name: "Fashion",
    slug: "fashion",
    count: "Clothing & accessories",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
  },
  {
    name: "Home & Garden",
    slug: "home-garden",
    count: "Furniture & appliances",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
        <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5H7V11a2 2 0 0 0-4 0z" />
        <path d="M5 18v2" />
        <path d="M19 18v2" />
      </svg>
    ),
  },
  {
    name: "Services",
    slug: "services",
    count: "Repair, cleaning & more",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    name: "Agriculture",
    slug: "agriculture",
    count: "Farm produce & tools",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </svg>
    ),
  },
  {
    name: "Jobs",
    slug: "jobs",
    count: "Full-time & part-time",
    icon: (
      <svg {...iconProps} className="h-7 w-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Browse Categories</h2>
        <Link
          href="/categories"
          className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          View all →
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            style={{ animationDelay: `${i * 60}ms` }}
            className="group animate-rise flex flex-col items-center rounded-xl border border-border bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
              {cat.icon}
            </span>
            <span className="mt-3 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
              {cat.name}
            </span>
            <span className="mt-1 text-xs text-muted">{cat.count}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}