import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Salone Market",
  description:
    "How Salone Market collects, uses and protects information in this preview.",
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This preview does not require an account and does not collect personal information. The policy below describes how privacy will be handled as the marketplace develops."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "In this demo, browsing data stays on your device. Search filters are stored in the page URL and are not sent to a server or database.",
            "When accounts and listings go live, we will collect only the information needed to operate the marketplace, such as your name, contact details and listings.",
          ],
        },
        {
          heading: "How information is used",
          body: [
            "Information will be used to display listings, connect buyers with sellers and keep the marketplace safe.",
            "We will never sell personal information to third parties.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You will be able to review, update or delete your account information at any time. Contact us if you have questions about your data.",
          ],
        },
      ]}
    />
  );
}
