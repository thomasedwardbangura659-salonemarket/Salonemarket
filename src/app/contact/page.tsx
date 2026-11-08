import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Salone Market",
  description:
    "Get in touch with the Salone Market team in Freetown, Sierra Leone.",
};

const details = [
  {
    label: "Email",
    value: "hello@salonemarket.example",
    href: "mailto:hello@salonemarket.example",
  },
  {
    label: "Phone",
    value: "+232 00 000 000",
    href: "tel:+23200000000",
  },
  {
    label: "Office",
    value: "Wilberforce, Freetown",
    href: null,
  },
  {
    label: "Hours",
    value: "Mon–Sat, 9:00–18:00",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Contact
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Talk to Salone Market
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Questions about a listing, the marketplace or this preview? Reach out
          and our team will get back to you.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="rounded-xl border border-border bg-white p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="mt-1 inline-block text-sm font-medium text-primary hover:text-primary-dark"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="mt-1 text-sm font-medium text-foreground">
                  {detail.value}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-white p-6">
          <h2 className="text-lg font-semibold">About seller messages</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Buyer–seller messaging is not connected in this preview. To ask
            about a sample listing, email us with the listing name and we will
            point you in the right direction.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Browse listings
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              About Salone Market
            </Link>
          </div>
        </div>

        <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">
          Contact details are sample data for this demo. Replace them with real
          support channels before launch.
        </p>
      </div>
    </div>
  );
}
