import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocShell } from "@/components/legal/legal-doc-shell";

export const metadata: Metadata = {
  title: "Riff Agency Authorization and Payment Disclosure",
  description: "Agency Authorization and Payment Disclosure for Riff.",
};

export default function AgencyAuthorizationPage() {
  return (
    <LegalDocShell>
      <div className="doc-actions">
        <Link className="back-btn" href="/pages/legal/">
          ← Back to Legal Disclosures
        </Link>
      </div>

      <h1 className="section-title">Agency Authorization and Payment Disclosure</h1>

      <section className="doc-paper" aria-label="Agency Authorization and Payment Disclosure">
        <h3>Authorization to Receive Funds</h3>
        <p>
          You have obtained explicit, written authorization from each content creator you represent (each, a
          &quot;Creator&quot;) to receive payments through Riff{"\u2019"}s platform on their behalf. Riff is a trade name
          of Teal Pay Global, Inc. You understand that Riff will rely on these authorizations to process payments, and
          that payment made to you will be treated as payment to the applicable Creator.
        </p>

        <h3>Voluntary Payment Method Selection</h3>
        <p>
          You have informed each Creator of all available payment methods (e.g., direct deposit, check) and confirmed
          that each Creator has freely chosen their preferred method. You will not withhold, limit, or otherwise
          interfere with a Creator{"\u2019"}s ability to select or change their payment method.
        </p>

        <h3>Agent of the Payee Acknowledgment</h3>
        <p>
          You act as the authorized agent of each Creator and have the legal authority to accept payments on their
          behalf. Receipt of payment by you is considered receipt by the Creator, minus any clearly disclosed and
          contractually agreed-upon agency fees, as well as any applicable fees for Riff{"\u2019"}s services.
        </p>

        <h3>Recordkeeping and Audit Cooperation</h3>
        <p>
          Upon request, you will promptly provide Riff with documentation showing each Creator{"\u2019"}s written
          authorization and chosen payment method. You agree to cooperate with Riff in any compliance review or audit
          relating to these authorizations.
        </p>

        <h3>Indemnification</h3>
        <p>
          You will indemnify and hold harmless Riff from any claims, disputes, or liabilities resulting from your
          failure to obtain, maintain, or comply with the authorizations and disclosures described above.
        </p>
      </section>
    </LegalDocShell>
  );
}
