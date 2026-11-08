import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";

export const metadata: Metadata = {
  title: "About Us — Salone Market",
  description:
    "Salone Market is a modern online marketplace connecting buyers and sellers across Sierra Leone.",
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About"
      title="Marketplace built for Sierra Leone"
      intro="Salone Market connects individuals and businesses across Sierra Leone so they can buy, sell and discover products and services with confidence — from Freetown to Kenema, Bo to Makeni."
      sections={[
        {
          heading: "Our mission",
          body: [
            "We want every seller to reach buyers beyond their own street, and every buyer to find what they need without travelling across town.",
            "By bringing listings together in one clean, mobile-friendly marketplace, we make local trade simpler and more transparent.",
          ],
        },
        {
          heading: "What you can find",
          body: [
            "Electronics, vehicles, property, fashion, home and garden goods, services, farm produce and job opportunities.",
            "Every category is organised so buyers can filter by location, price and recency.",
          ],
        },
        {
          heading: "Where we are going",
          body: [
            "This preview focuses on browsing. Selling, accounts, messaging and payments will be added in later stages, with secure infrastructure behind them.",
          ],
        },
      ]}
    />
  );
}
