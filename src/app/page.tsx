import Link from "next/link";
import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const steps = [
  {
    title: "Create an Account",
    description: "Sign up free with your email or phone number in under a minute.",
    icon: (
      <svg {...iconProps} className="h-8 w-8">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6" />
        <path d="M22 11h-6" />
      </svg>
    ),
  },
  {
    title: "Post Your Ad",
    description: "Add photos, set your price and publish your listing instantly.",
    icon: (
      <svg {...iconProps} className="h-8 w-8">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
  {
    title: "Connect & Sell",
    description: "Chat with buyers, agree on a price and complete the sale safely.",
    icon: (
      <svg {...iconProps} className="h-8 w-8">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            How Salone Market Works
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted">
            Buying and selling has never been easier. Three simple steps to get
            started.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                style={{ animationDelay: `${i * 120}ms` }}
                className="animate-rise relative rounded-xl border border-border bg-white p-6 text-center transition-shadow duration-300 hover:shadow-md"
              >
                <span className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-primary-dark">
                  {step.icon}
                </span>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-6 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/5" />
          <h2 className="relative text-2xl font-bold text-white sm:text-3xl">
            Ready to Start Selling?
          </h2>
          <p className="relative mx-auto mt-3 max-w-lg text-green-50">
            Reach thousands of buyers across Sierra Leone. Post your first ad
            for free and start earning today.
          </p>
          <Link
            href="/sell"
            className="relative mt-6 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-md"
          >
            Post a Free Ad
          </Link>
        </div>
      </section>
    </>
  );
}