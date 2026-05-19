import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocShell } from "@/components/legal/legal-doc-shell";

export const metadata: Metadata = {
  title: "Riff GLBA Privacy Notice for Financial Customers",
  description: "GLBA Privacy Notice for Financial Customers",
};

export default function GlbaPrivacyNoticePage() {
  return (
    <LegalDocShell>
      <div className="doc-actions">
        <Link className="back-btn" href="/pages/legal/">
          ← Back to Legal Disclosures
        </Link>
      </div>

      <h1 className="section-title">{"GLBA Privacy Notice for Financial Customers"}</h1>

      <section className="doc-paper doc-paper--glba" aria-label="GLBA Privacy Notice for Financial Customers">

                        <p className="eyebrow">As Required by the Gramm-Leach-Bliley Act</p>
                        <p className="effective-date"><strong>Effective Date:</strong> Aug 15, 2025</p>

                        <h2>FACTS</h2>
                        <p><strong>What does Riff do with your personal information?</strong></p>
                        <p>Financial companies choose how they share your personal information. Federal law gives consumers the right to limit some but not all sharing. It also requires us to tell you how we collect, share, and protect your personal information. Please read this notice carefully to understand what we do.</p>
                        <p>The types of personal information we collect and share depend on the product or service you have with us. This information can include:</p>
                        <ul>
                            <li>Name, email address, and government-issued identification</li>
                            <li>Social Security number or other tax identification numbers</li>
                            <li>Financial account details and transaction history</li>
                            <li>Contact information and IP address</li>
                            <li>Information shared with us through our platform or during onboarding</li>
                        </ul>
                        <p>When you are no longer our customer, we continue to share your information as described in this notice.</p>
                        <p>All financial companies need to share customers’ personal information to run their everyday business. In the section below, we list the reasons financial companies can share their customers’ personal information, the reasons Riff chooses to share, and whether you can limit this sharing.</p>

                        <table className="glba-table" aria-label="Reasons we can share your personal information">
                            <thead>
                                <tr>
                                    <th>Reasons We Can Share Your Personal Information</th>
                                    <th>Does Riff Share?</th>
                                    <th>Can You Limit This Sharing?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>For our everyday business purposes, such as to process your transactions, maintain your account(s), respond to court orders and legal investigations, or report to credit bureaus</td>
                                    <td>Yes</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>For our marketing purposes, to offer our products and services to you</td>
                                    <td>No</td>
                                    <td>We don’t share</td>
                                </tr>
                                <tr>
                                    <td>For joint marketing with other financial companies</td>
                                    <td>No</td>
                                    <td>We don’t share</td>
                                </tr>
                                <tr>
                                    <td>For our affiliates’ everyday business purposes, information about your transactions and experiences</td>
                                    <td>No</td>
                                    <td>We don’t share</td>
                                </tr>
                                <tr>
                                    <td>For our affiliates’ everyday business purposes, information about your creditworthiness</td>
                                    <td>No</td>
                                    <td>We don’t share</td>
                                </tr>
                                <tr>
                                    <td>For our affiliates to market to you</td>
                                    <td>No</td>
                                    <td>We don’t share</td>
                                </tr>
                                <tr>
                                    <td>For nonaffiliates to market to you</td>
                                    <td>No</td>
                                    <td>We don’t share</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Who We Are</h3>
                        <p><strong>Who is providing this notice?</strong></p>
                        <p>Riff, a platform that partners with regulated financial institutions to facilitate account creation and payments for creators and agencies.</p>

                        <h3>What We Do</h3>
                        <p><strong>How does Riff protect my personal information?</strong></p>
                        <p>To protect your personal information from unauthorized access and use, we use security measures that comply with federal law. These measures include computer safeguards and secured files and buildings.</p>

                        <p><strong>How does Riff collect my personal information?</strong></p>
                        <p>We collect your personal information, for example, when you:</p>
                        <ul>
                            <li>Create or access an account through our platform</li>
                            <li>Provide identifying documents or verification</li>
                            <li>Use our services for payments or deposits</li>
                        </ul>
                        <p>We may also collect information from our banking or payment processing partners.</p>

                        <p><strong>Why can’t I limit all sharing?</strong></p>
                        <p>Federal law gives you the right to limit only:</p>
                        <ul>
                            <li>Sharing for affiliates’ everyday business purposes, information about your creditworthiness</li>
                            <li>Affiliates from using your information to market to you</li>
                            <li>Sharing for nonaffiliates to market to you</li>
                        </ul>
                        <p>State laws and individual companies may give you additional rights to limit sharing.</p>

                        <h3>Definitions</h3>
                        <p><strong>Affiliates:</strong> Companies related by common ownership or control. They can be financial and nonfinancial companies. Riff is a subsidiary of Teal Pay Global, Inc.</p>
                        <p><strong>Nonaffiliates:</strong> Companies not related by common ownership or control. They can be financial and nonfinancial companies. Riff does not share with nonaffiliates for marketing purposes.</p>
                        <p><strong>Joint marketing:</strong> A formal agreement between nonaffiliated financial companies that together market financial products or services to you. Riff does not jointly market.</p>

                        <h3>Other Important Information</h3>
                        <p><strong>Do Not Call Policy</strong></p>
                        <p>This notice serves as Riff’s Do Not Call Policy under the Telephone Consumer Protection Act. We do not solicit via telephone numbers listed on state or federal Do Not Call lists, unless the law allows.</p>

                        <p><strong>Questions?</strong></p>
                        <p>Email us at <a href="mailto:info@useriff.app">info@useriff.app</a>.</p>

      </section>
    </LegalDocShell>
  );
}
