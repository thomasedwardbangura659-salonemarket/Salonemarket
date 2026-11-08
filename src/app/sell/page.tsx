import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell on Salone Market",
  description:
    "Post an ad on Salone Market and reach buyers across Sierra Leone.",
};

const steps = [
  {
    title: "Create an account",
    description:
      "Sign up free with your email or phone number. Selling will be enabled when accounts launch.",
  },
  {
    title: "Add your listing",
    description:
      "Add photos, a clear title, your price in Leones and the location of the item.",
  },
  {
    title: "Connect with buyers",
    description:
      "Reply to interested buyers, agree on a price and complete the sale safely.",
  },
];

export default function SellPage() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-100">
            Sell
          </p>
          <h1 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Reach buyers across Sierra Leone
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-green-50 sm:text-base">
            Post your ad for free and get discovered by buyers in Freetown, Bo,
            Kenema, Makeni and beyond.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/login"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50"
            >
              Get started
            </Link>
            <Link
              href="/products"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See sample listings
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{ animationDelay: `${index * 80}ms` }}
              className="animate-rise rounded-xl border border-border bg-white p-5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary-dark">
                {index + 1}
              </span>
              <h2 className="mt-3 text-base font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-sm font-semibold text-amber-900">
            Posting ads is not enabled yet
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-amber-800">
            This is the browsing preview — creating listings will be connected
            in a later stage. In the meantime, explore sample listings to see
            how ads will look.
          </p>
          <Link
            href="/products"
            className="mt-3 inline-block text-sm font-semibold text-amber-900 underline decoration-amber-400 underline-offset-2 hover:text-amber-950"
          >
            Browse sample listings →
          </Link>
        </div>
      </div>
    </div>
  );
}
