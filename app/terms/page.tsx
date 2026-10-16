import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Website terms",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Website terms">
      <p>
        This website introduces the roofing and home repair services of {site.name}. Information here is general and is
        not a binding quotation, service agreement or confirmation of availability.
      </p>
      <p>
        Project scope, service area, pricing, timing and any applicable terms must be agreed directly with {site.name} before
        work begins. An enquiry does not create a booking.
      </p>
      <p>Photography is illustrative and is not presented as completed {site.name} projects.</p>
      <p>
        <strong>This website is not an emergency service.</strong> Do not climb onto a roof or enter an unsafe area to
        document a repair. Contact the appropriate emergency service if there is immediate danger.
      </p>
    </LegalPage>
  );
}
