import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";

export const metadata: Metadata = {
  title: "Terms of Service — Salone Market",
  description: "Terms for using the Salone Market preview and marketplace.",
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="By using Salone Market you agree to use the marketplace responsibly and to follow these terms. This preview is provided for demonstration purposes."
      sections={[
        {
          heading: "Using the marketplace",
          body: [
            "You may browse listings freely. Do not misuse the site, attempt to disrupt it, or use it for unlawful purposes.",
            "All listings currently shown are sample data and are not offers to sell real goods or services.",
          ],
        },
        {
          heading: "Listings and transactions",
          body: [
            "Sellers are responsible for the accuracy of their listings and for completing transactions safely.",
            "Salone Market does not process payments in this preview and is not a party to any transaction between buyers and sellers.",
          ],
        },
        {
          heading: "Changes",
          body: [
            "These terms will evolve as selling, accounts and payments are added. Continued use of the marketplace means you accept the latest version.",
          ],
        },
      ]}
    />
  );
}
