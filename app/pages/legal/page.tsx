import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocShell } from "@/components/legal/legal-doc-shell";

export const metadata: Metadata = {
  title: "Riff Legal",
  description: "Legal disclosures for Riff.",
};

export default function LegalIndexPage() {
  return (
    <LegalDocShell>
      <div className="legal-page--index">
        <h1 className="section-title">Legal Disclosures</h1>

        <section className="legal-list" aria-label="Legal disclosures">
          <Link className="legal-item-link" href="/pages/terms-of-service/">
            <article className="legal-item">
              <div className="legal-title">Terms of Service</div>
              <p className="legal-copy">
                Sets the general rules for using Riff – including acceptable use, account restrictions, dispute
                resolution, and legal limitations.
              </p>
            </article>
          </Link>

          <Link className="legal-item-link" href="/pages/aup/">
            <article className="legal-item">
              <div className="legal-title">Acceptable Use Policy (AUP)</div>
              <p className="legal-copy">
                Outlines the rules for using your Riff account and services – including lawful use, prohibited
                activities, and compliance with our financial partners&apos; requirements.
              </p>
            </article>
          </Link>

          <Link className="legal-item-link" href="/pages/agency-authorization-and-payment-disclosure/">
            <article className="legal-item">
              <div className="legal-title">Agency Authorization and Payment Disclosure</div>
              <p className="legal-copy">
                Confirms that agencies have written permission to receive payments on behalf of creators and will
                maintain proper documentation.
              </p>
            </article>
          </Link>

          <Link className="legal-item-link" href="/pages/electronic-communications-policy/">
            <article className="legal-item">
              <div className="legal-title">Electronic Communications Policy</div>
              <p className="legal-copy">
                Explains how we use electronic records and signatures, and your consent to receive documents and sign
                agreements electronically instead of on paper
              </p>
            </article>
          </Link>

          <Link className="legal-item-link" href="/pages/fees-and-limits-disclosure/">
            <article className="legal-item">
              <div className="legal-title">Fees &amp; Limits Disclosure</div>
              <p className="legal-copy">
                Details any fees you may be charged and the limits that apply to your account or transactions, such as
                payment caps or withdrawal minimums.
              </p>
            </article>
          </Link>

          <Link className="legal-item-link" href="/pages/invoice-and-payment-terms/">
            <article className="legal-item">
              <div className="legal-title">Invoice &amp; Payment Terms</div>
              <p className="legal-copy">
                Covers how invoices are issued, payment timelines, accepted payment methods, and what happens in the case
                of late or failed payments.
              </p>
            </article>
          </Link>

          <Link className="legal-item-link" href="/pages/payment-rails-and-network-service-terms/">
            <article className="legal-item">
              <div className="legal-title">Payments Rails &amp; Network Service Terms</div>
              <p className="legal-copy">
                Describes how payments are processed through our banking and payment network partners, including any
                applicable rules from those networks.
              </p>
            </article>
          </Link>

          <Link className="legal-item-link" href="/pages/privacy-policy/">
            <article className="legal-item">
              <div className="legal-title">Privacy Policy</div>
              <p className="legal-copy">
                Explains how we collect, use, share, and protect your personal information, and your rights regarding
                your data.
              </p>
            </article>
          </Link>
        </section>
      </div>
    </LegalDocShell>
  );
}
