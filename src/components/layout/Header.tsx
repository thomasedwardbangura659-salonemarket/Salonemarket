"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = String(formData.get("q") ?? "").trim();
    setMenuOpen(false);
    router.push(
      query ? `/products?q=${encodeURIComponent(query)}` : "/products"
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span className="text-xl font-bold text-primary">Salone</span>
          <span className="text-xl font-bold text-foreground">Market</span>
        </Link>

        <form
          onSubmit={handleSearch}
          role="search"
          className="hidden flex-1 max-w-md md:block"
        >
          <div className="relative">
            <input
              type="search"
              name="q"
              placeholder="Search products, services..."
              aria-label="Search products and services"
              className="w-full rounded-lg border border-border bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </form>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/products"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Browse
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/sell"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Sell
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Login
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            <form onSubmit={handleSearch} role="search" className="relative mb-3">
              <input
                type="search"
                name="q"
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full rounded-lg border border-border bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-primary"
              />
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>
            <Link href="/products" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
              Browse
            </Link>
            <Link href="/categories" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
              Categories
            </Link>
            <Link href="/sell" className="block rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white" onClick={() => setMenuOpen(false)}>
              Sell a Product
            </Link>
            <Link href="/login" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}