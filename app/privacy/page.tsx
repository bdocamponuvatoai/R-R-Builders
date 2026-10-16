import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy">
      <p>
        The project enquiry tool prepares a message in your browser. It does not submit the details to {site.name} or
        store them in a website database. The message is only sent when you send it through your email provider.
      </p>
      <p>
        If you contact {site.name} by phone or email, the information you provide is used to discuss and respond to
        your enquiry. Do not include sensitive personal information.
      </p>
      <p>
        The website does not include advertising trackers or analytics integrations. The hosting provider may process
        technical information to operate and secure the site.
      </p>
      <p>
        For questions about information you have shared, contact{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-forest-700 underline underline-offset-4">
          {site.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
