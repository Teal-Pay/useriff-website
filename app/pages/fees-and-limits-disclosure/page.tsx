import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocShell } from "@/components/legal/legal-doc-shell";

export const metadata: Metadata = {
  title: "Riff Fees & Limits Disclosure",
  description: "Fees & Limits Disclosure",
};

export default function FeesAndLimitsDisclosurePage() {
  return (
    <LegalDocShell>
      <div className="doc-actions">
        <Link className="back-btn" href="/pages/legal/">
          ← Back to Legal Disclosures
        </Link>
      </div>

      <h1 className="section-title">{"Fees & Limits Disclosure"}</h1>

      <section className="doc-paper" aria-label="Fees and Limits Disclosure">

                        <p><strong>Effective Date:</strong> Aug 15, 2025</p>
                        <p><strong>Posted Date:</strong> Aug 15, 2025</p>

                        <p>Unless otherwise waived by Riff* through a promotional offer or specific program terms, the fees listed below apply to transactions conducted via your account, including any subaccounts unless noted. All fees are in U.S. Dollars and may change at our discretion, with notice provided in accordance with applicable law.</p>

                        <h3>A. Schedule of Services and Fees</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Card Services</th>
                                    <td>Not Available</td>
                                    <td>No fee for online payments, automatic debits, or bill pay through supported rails.</td>
                                </tr>
                                <tr>
                                    <th>Transfers</th>
                                    <td>Included</td>
                                    <td>No fee for internal transfers between your Riff subaccounts.</td>
                                </tr>
                                <tr>
                                    <th>P2P Transfers</th>
                                    <td>Included</td>
                                    <td>No fee for peer-to-peer transfers between Riff users.</td>
                                </tr>
                                <tr>
                                    <th>Support</th>
                                    <td>Included</td>
                                    <td>Access support via call, email, or in-app messaging.</td>
                                </tr>
                                <tr>
                                    <th>Account Closure Check Disbursement Fee</th>
                                    <td>$5.00</td>
                                    <td>If funds remain at account closure, a $5 fee will be deducted for disbursement via check.</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>B. Payment Limits</h3>
                        <p>Riff enables payments through third-party partners. Limits are subject to the rules of the underlying payment networks, regulatory guidelines, and the policies of our partners. Limits may vary based on user profile, risk assessment, or other platform-defined factors.</p>

                        <p><strong>Daily Transfer Limits: Individual Users</strong></p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Transfer Type</th>
                                    <th>Daily Maximum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ACH Credit (incoming)</td>
                                    <td>$1,000.00</td>
                                </tr>
                                <tr>
                                    <td>ACH Debit (outgoing)</td>
                                    <td>$1,000.00</td>
                                </tr>
                                <tr>
                                    <td>P2P Transfer (per transfer)</td>
                                    <td>$2,000.00</td>
                                </tr>
                                <tr>
                                    <td>Wire Transfers</td>
                                    <td>Not supported</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="doc-note">* Note: Limits are subject to change and may be reduced or increased based on account history, usage patterns, or compliance review.</p>
                        <p className="doc-note">* Riff is a trade name of Teal Pay Global, Inc.</p>

                        <p><strong>Daily Transfer Limits: Business Accounts</strong></p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Transfer Type</th>
                                    <th>Daily Maximum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ACH Credit (incoming)</td>
                                    <td>$5,000.00</td>
                                </tr>
                                <tr>
                                    <td>ACH Debit (outgoing)</td>
                                    <td>$5,000.00</td>
                                </tr>
                                <tr>
                                    <td>P2P Transfer (per transfer)</td>
                                    <td>$10,000.00</td>
                                </tr>
                                <tr>
                                    <td>Wire Transfers</td>
                                    <td>Not supported</td>
                                </tr>
                            </tbody>
                        </table>

      </section>
    </LegalDocShell>
  );
}
