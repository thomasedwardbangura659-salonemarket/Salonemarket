import Link from "next/link";

const footerLinks = {
  Marketplace: [
    { label: "Browse Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Sell a Product", href: "/sell" },
    { label: "Featured Ads", href: "/products?featured=true" },
  ],
  Account: [
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
    { label: "My Listings", href: "/account/my-listings" },
    { label: "Favourites", href: "/account/favourites" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-lg font-bold text-primary">Salone</span>
              <span className="text-lg font-bold text-foreground">Market</span>
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Sierra Leone&apos;s trusted online marketplace. Buy and sell with
              confidence across Freetown, Bo, Kenema, Makeni and beyond.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Salone Market. All rights reserved.
          </p>
          <p className="text-sm text-muted">Made with pride in Sierra Leone</p>
        </div>
      </div>
    </footer>
  );
}