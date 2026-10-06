import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocShell } from "@/components/legal/legal-doc-shell";

export const metadata: Metadata = {
  title: "Riff Terms of Service",
  description: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <LegalDocShell>
      <div className="doc-actions">
        <Link className="back-btn" href="/pages/legal/">
          ← Back to Legal Disclosures
        </Link>
      </div>

      <h1 className="section-title">{"Terms of Service"}</h1>

      <section className="doc-paper" aria-label="Terms of Service">
        <p><strong>Last Updated:</strong> October 3, 2026</p>

        <h3>{"Welcome To Riff"}</h3>

        <p>{"These Terms of Service (also known as \"Customer Agreement\") are a legal agreement between you and Riff (doing business as \"Riff\"), a Delaware corporation. Riff (referred to as \"Riff,\" \"we,\" \"us,\" or \"our,\" as applicable). This agreement governs your use of, and access to, the Services as defined herein, which include the Website, iOS and Android Applications, and other related Riff Materials."}</p>

        <p>{"By accessing our platform, opening, registering, or using a Riff Account, or any of our Services, you agree to be bound by this Customer Agreement and consent to receive communications related to the Services or your Riff Account in electronic format (as set forth in our "}<strong><Link href="/pages/electronic-communications-policy/">{"Electronic Communications Delivery Policy"}</Link></strong>{" - which also provides for E-sign disclosures and consent), and you affirm that you are of legal age in your jurisdiction, have legal authorization to represent yourself and/or your business, and legally capable of entering into this Customer Agreement. You also agree to comply with the following additional policies and each of the other agreements that apply to you:"}</p>

        <p>{"Our "}<strong><Link href="/pages/aup/">{"Acceptable Use Policy"}</Link></strong>{", which sets forth the permitted uses and prohibited uses of our Services."}</p>

        <p>{"For details on how Riff collects, uses, and safeguards your personal information, please review our "}<strong><Link href="/pages/privacy-policy/">{"Privacy Policy"}</Link></strong>{"."}</p>

        <p>{"By accepting this Customer Agreement, you also agree to the "}<a href="https://checkbook.io/company/terms-and-conditions/">{"User Terms"}</a>{" of our payments and custody partner, along with any other third-party agreements necessary for Riff to provide its services."}</p>

        <p>{"Please read carefully all of the terms of these policies and each of the other agreements that apply to you. Your use of certain Services may be subject to additional terms and conditions, as communicated by us to you through the Service or by other means, and such additional terms and conditions are incorporated into this Customer Agreement."}</p>

        <p>{"This Customer Agreement contains several sections, and you should read all of them carefully. The headings are for reference only. Some capitalized terms have specific definitions that are defined in the Glossary or within this Customer Agreement. Underlined words in this Customer Agreement contain hyperlinks to further information."}</p>

        <p>{"If we change the Customer Agreement in a way that reduces your rights or increases your responsibilities, we will provide you with 30 days prior notice, including by posting notice on Riff's platform. Your use of the Services following any changes to this Customer Agreement will constitute your acceptance of such changes. The \"Last Updated\" legend above indicates when this Customer Agreement was last changed. We may, at any time and without liability, modify or discontinue all or part of the Services (including access via any third-party links); charge, modify or waive certain fees related to the Services; or offer the Services, or certain of the Services, to some or all users."}</p>

        <h3>{"About Riff"}</h3>

        <p>{"Riff is a subsidiary of Riff, incorporated in Delaware, and operates as a Technology company throughout the United States, using the infrastructure of its financial partners to process Fiat (US Dollar) transactions for payments. Riff does not directly handle customer interactions for Fiat collections but provides a platform that allows all services to be provided by a range of partners. Riff works with various licensed partners to ensure our services reach end beneficiaries efficiently. Our services enable currency transfers, balance maintenance, currency conversion into other supported currencies, including conversions from Stablecoins, including USDC to FIAT currencies, fund withdrawals, and the management of other related financial transactions. Riff reserves the right to reject any user registration or deny any transaction instructions, including transfers, receipts, withdrawals, or conversions of funds in your Riff Account, at our sole discretion."}</p>

        <p>{"Riff is a software platform and is NOT a bank or a licensed financial institution. In order to facilitate payment and funds management services, Riff enters into contractual arrangements with partner banks and payment partners to provide platform Services. Except where required by law, Customer assets held by, or transmitted through, partner banks and payment partners are not the responsibility of Riff and Riff makes no assurances or representations with respect to any such partner bank, payment partner, custodian or exchange. No member of Riff will be liable for any direct or indirect losses or damages realized by customers for any reason where such loss or damage is caused, directly or indirectly, by a partner bank or a payment partner."}</p>

        <p>{"Funds deposited into your Riff Wallet are held in pooled custodial accounts by one or more regulated financial institutions through our financial infrastructure partners. These accounts are not insured by the FDIC and may not offer the same protections as traditional deposit accounts. Riff does not itself hold or safeguard funds."}</p>

        <h3>{"Platform Role Acknowledgment"}</h3>

        <p>{"By using the Services, you acknowledge that Riff is a technology platform and is not a party to any transaction between you and any other user, recipient, or third party. Riff facilitates access to payment services provided by third-party partners and does not hold, control, or transmit funds on your behalf. Riff does not guarantee, endorse, or assume responsibility for the performance, legality, or outcome of any transaction facilitated through the platform. Any transaction you initiate through the Services is between you and the applicable counterparty, and Riff's role is limited to providing the technology infrastructure through which such transactions are facilitated."}</p>

        <h3>{"Glossary"}</h3>

        <p>{"In this Customer Agreement:"}</p>

        <ul>
          <li>{"API means the application programming interface provided by Riff."}</li>
          <li>{"Business Day means a day other than a Saturday, Sunday or a public holiday in the United States when financial institutions are open for business. "}</li>
          <li>{"Currency means any local legal tender. Convert Money means any instructions you provide to Riff's payments partners via our platform to convert, transmit, send one type of legal tender/currency, and receive another type of legal tender/currency, for you and/or your customer. "}</li>
          <li>{"Cryptocurrency means FIAT backed fully collateralized stablecoins such as USDC (subjected to changes). "}</li>
          <li>{"Designed Account means any account you provide to Riff, to store, send, transfer, receive, and/or convert money. "}</li>
          <li>{"Fiat means US Dollars and/or any local legal tender backed by the sovereign authority of a nation-state. "}</li>
          <li>{"Riff Account means the Riff Account on the website you have opened with us in accordance with the terms of this Customer Agreement for use of our Services. "}</li>
          <li>{"Riff Materials means any software (including without limitation the App, API, developer tools, sample source code, and code libraries), data, materials, content and printed and electronic documentation (including any specifications and integration guides) developed and provided by us or our affiliates to you, or available for download from our Website. "}</li>
          <li>{"Partners means Riff's partners and vendors. "}</li>
          <li>{"Receive means the currency is received in the designed account. "}</li>
          <li>{"Registered User means any clients, customers that have directly registered with Riff and have a direct contractual relationship with Riff. This excludes any customers of our registered user that did not register with Riff and/or have a direct contractual relationship with us. "}</li>
          <li>{"Send means providing instructions to convert money, or other instructions to take any action on your Riff Account. "}</li>
          <li>{"Services means all products, services, content, features, technologies or functions offered by us and all related websites and services (including the Website and API). "}</li>
          <li>{"Source Currency means the currency which you use to fund a currency conversion. "}</li>
          <li>{"Target Currency means the currency that you or your recipient will receive after you convert currency. "}</li>
          <li>{"Transfer means using your Riff Account to, as part of a single or multiple transactions, upload, convert and send currency. "}</li>
          <li>{"Unauthorized Transaction means when money is sent from your Riff "}</li>
          <li>{"Account that you did not authorize and that did not benefit you. "}</li>
          <li>{"Website means any webpage, including but not limited to "}<a href="https://useriff.app">{"https://useriff.app"}</a>{" where we provide Services to you. "}</li>
          <li>{"Withdraw means providing instructions to move currency out of your account, your customer's account, or any designed account."}</li>
        </ul>

        <h3>{"Using Our Services"}</h3>

        <h3>{"Opening a Riff Account"}</h3>

        <p>{"In order to use some or all of the Services, you must become a Registered User by opening an account with us and our partners, providing the requested information, and passing all onboarding requirements here, checks and screening. Registered User means any clients or customers that have directly registered with Riff and have a direct contractual relationship with Riff. This excludes any customers of our registered user that did not register with Riff and/or do not have a direct contractual relationship with us. For legal reasons, all information you provide during the signup process or any time thereafter must be complete, accurate and truthful. You are responsible for keeping your mailing address, email address, telephone number, and other contact information up-to-date in your Riff Account profile. To make changes to your profile, please contact us. We may refuse to provide or may discontinue providing the Services to any person or entity at any time for any reason."}</p>

        <p>{"We treat all activities under a Riff Account to be those of the registered user. You must only use the Services to transact on your own account. You may only open one Riff Account unless we explicitly approve the opening of additional accounts. We may refuse the creation of duplicate accounts for the same user. Where duplicate accounts are detected, Riff may close or merge these duplicate accounts without notification to you."}</p>

        <p>{"You will also appoint a point of contact, responsible for coordinating with Riff for anything related to your Riff Account and/or Services."}</p>

        <p><strong>{"Geographical Eligibility"}</strong>{" "}<strong>{"and Client Obligations"}</strong>{" "}</p>

        <p>{"Riff's services are currently available only to customers operating within the United States. By using Riff, you confirm that your business operates within this geographic scope and that you understand and accept these limitations. For compliance and safety, certain locations are not eligible to use Riff as senders. This includes residents of Cuba, Iran, North Korea, Syria, and the Crimea, Donetsk, and Luhansk regions. Other jurisdictions may be restricted or require additional review before access is granted. These measures help us meet regulatory obligations and maintain a secure platform for all users. We are also unable to work with individuals or entities that appear on any restricted or denied party lists maintained by the United States, United Kingdom, European Union, or United Nations. This includes, but is not limited to, the U.S. Office of Foreign Assets Control's sanctions lists and the U.S. Department of Commerce's Denied Persons or Entity Lists. Lastly, please note that you are prohibited from the use of Riff and its products and services for any illegal activities or other restricted services. As a Riff customer, you agree to uphold these requirements."}</p>

        <h3>{"Prohibited Activities"}</h3>

        <p>{"You shall not use the Riff platform or Services for any fraudulent, illegal, deceptive, or unauthorized purpose. Without limiting the foregoing, the following activities are strictly prohibited:"}</p>

        <p>{"(a) Fraud, misrepresentation, or misappropriation of funds of any kind; (b) Money laundering or terrorist financing; (c) Transmitting funds derived from illegal activity; (d) Operating an unlicensed money services business; (e) Using the Services to facilitate payments for illegal goods or services; (f) Structuring transactions to evade reporting requirements or regulatory thresholds; (g) Initiating unauthorized transactions or transactions on behalf of undisclosed third parties; (h) Using falsified, stolen, or unauthorized payment credentials or account information; (i) Any activity that violates applicable federal, state, or local law or regulation."}</p>

        <p>{"Violation of this section may result in immediate suspension or termination of your Riff Account, reporting to law enforcement and relevant regulatory authorities, and personal liability for all resulting damages, losses, fines, and penalties incurred by Riff or any third party. You acknowledge and agree that you bear sole responsibility for ensuring that your use of the Services complies with all applicable laws and regulations at all times."}</p>

        <h3>{"User Responsibility for Transactions"}</h3>

        <p>{"You are solely responsible for all transactions you initiate, authorize, or participate in through the Riff platform, including the legality, accuracy, authorization, and completeness of such transactions. This includes, without limitation, ensuring that (a) the source of funds used in any transaction is lawful, (b) all recipient and beneficiary information you provide is accurate and complete, (c) all transactions comply with applicable laws and regulations, and (d) you have obtained all necessary authorizations and consents for each transaction."}</p>

        <p>{"Riff acts as a technology platform facilitating access to payment services provided by third-party partners. Riff does not hold, control, or transmit funds on your behalf and is not a party to any transaction between you and any other user, recipient, or third party. You acknowledge and agree that any legal action, claim, fine, penalty, or liability arising from your transactions, including any claim brought by a payment processor, financial institution, banking partner, government authority, or other third party, is solely your responsibility."}</p>

        <h3>{"Account Security"}</h3>

        <p>{"You, not Riff, are responsible for maintaining adequate security and control of any and all IDs, passwords, or any other details that you use to access your Riff Account and the Services. You must never disclose your Riff Account password or your customer reference number. Riff and its employees, associates, partners and vendors will never request your Riff Account password. Keep them safe. Change your password regularly. Tell us if anyone asks for your password, and contact us if you are not sure about this, or any other security-related aspect of your Riff Account."}</p>

        <p>{"You must never let anyone access your Riff Account or watch you accessing your Riff Account."}</p>

        <p>{"If you suspect your Riff Account, login details, password or any other security features are stolen, lost, used without authorization or otherwise compromised, you are advised to change your password. Contact us immediately if you believe your credentials have been compromised or you are suspicious about the security of your password or any other security features. The compromise of your credentials could enable thieves to access your account and attempt transactions not authorized by you."}</p>

        <p>{"In addition, contact us at once if your transaction history for your Riff Account shows transactions that you did not initiate. We rely on you to regularly check the transaction history of your Riff Account and to contact us immediately in case you have any questions or concerns. We may (but are not obligated to) suspend your Riff Account or otherwise restrict its functionality if we have concerns about the security of the Riff Account or any of its security features; or potential unauthorized or fraudulent use of your Riff Account or any of its security features."}</p>

        <p>{"You must make sure that your email account(s) are secure and only accessible by you, as your email address may be used to reset passwords or to communicate with you about the security of your Riff Account. Let us know immediately if your email address becomes compromised. Never use any functionality that allows login details or passwords to be stored by the computer or browser you are using or to be cached or otherwise recorded. Additional Riff products or Services you use may have additional security requirements, as notified to you by us, and you must familiarize yourself with those requirements. In the case of what you believe to be any incorrect or misdirected payment, contact us immediately."}</p>

        <h3>{"Initiating a Transfer"}</h3>

        <p>{"All transfer requests must be made via our API following the established protocols and guidelines. Riff will establish a cut off time during each business day where transfer requests will be processed in accordance to the date and time the instructions were received and confirmed. All Source Currency must be made in USD unless otherwise agreed. You will be able to see the Target Currency, the exchange rate, applicable fees, and approximate processing time in your Riff Account."}</p>

        <p>{"Upon submitting your Transfer request, you will have 2 business days (unless otherwise agreed) to confirm the list of transactions and wire the funds to Riff for us to initiate the transfer request. Any delay and/or discrepancies in the wired amount received by Riff will result in a delay in initiating the transfer. If wired funds are received after the agreed business days, payments to beneficiaries will be delayed. Riff reserves the right to use the latest FX rate to complete the Transfer request. Any additional amount discrepancies due to the changes in FX rate as a result of your or your bank's wire transfer delay will be borne by you. Riff will work with you for the recovery of the additional funds owed to Riff."}</p>

        <p>{"You will work with Riff to resolve any discrepancies without delays. Riff has the right to reject, decline, or cancel in part or in full any Transfer request at its discretion. Once a transfer is initiated by Riff, we will not be able to make any changes to the transactions, including changing the amount, delaying, canceling the transaction, changing the recipient or the Target Currency."}</p>

        <h3>{"Delay in Transfer"}</h3>

        <p>{"We do not have any control over the time it may take to complete your transfer, which is dependent on the services provided by our Partners. We may delay a Transfer, in certain situations, including if we need to confirm that the withdrawal has been authorized by you or if other discrepancies arise. The completion time of your Transfer (i.e., the date on which funds were made available to the recipient) is notified to you via electronic communication upon completion of the transfer request."}</p>

        <h3>{"Currency Conversion, Exchange Rate and Fees"}</h3>

        <p>{"The currency conversion and exchange rate shall be determined and agreed upon as specified in the contract executed during your onboarding process. This agreement will also outline any applicable fees and the cost of our services and/or products. Any change request must be made in writing 30 days in advance to Riff for consideration. All subsequent changes will need to be confirmed in writing and accepted by both parties prior to the new effective date."}</p>

        <h3>{"We are not a currency trading platform."}</h3>

        <p>{"Riff is not a currency trading platform, and accordingly, you should not use our Services, including the Riff Account or our Services for this purpose. If we detect that you are using our Services for this purpose, we may, at in our sole discretion, set a limit on the number of transfer requests you may create, cancel your orders, set a limit on the amount of money you can convert or transfer in one or more currencies or in the same currency, restrict your ability to use this or other features, or suspend or close your Riff Account."}</p>

        <h3>{"Closing Your Riff Account"}</h3>

        <p>{"You may end this Customer Agreement and close your Riff Account in accordance with the agreed terms of your contract with Riff. At the time of closure, if you still have money in your account, you must withdraw your money within a reasonable period of time by following the guidance and instructions from Riff."}</p>

        <p>{"You must not close your Riff Account to avoid an investigation. If you attempt to close your Riff Account during an investigation, we may hold your money until the investigation is fully completed. You agree that you will continue to be responsible for all obligations related to your Riff Account even after it is closed."}</p>

        <h3>{"Riff can close your Riff Account"}</h3>

        <p>{"Riff, in its sole discretion, reserves the right to suspend or terminate this Customer Agreement, access to or use of its Service websites, software, systems (including any networks and servers used to provide any of the Services) operated by us or on our behalf or some or all of the Services for any reason and at any time."}</p>

        <p>{"Reasons we may close your Riff Account include, but are not limited to:"}</p>

        <p>{"your breach of any provision of this Customer Agreement or documents referred to in this Customer Agreement; we are requested or directed to do so by any competent court of law, government authority or agency, or law enforcement agency; we have reason to believe you are in violation or breach of any applicable law or regulation; we have reason to believe you are involved in any fraudulent activity, money laundering, terrorism financing or other criminal or illegal activity; or you engage in any Prohibited Activity as defined in this Customer Agreement. We may also suspend your Riff Account if it has been compromised or for other security reasons; or has been used or is being used without your authorization or fraudulently."}</p>

        <p>{"If we close your Riff Account or terminate your use of the Services for any reason, we'll provide you with notice of our actions. You are responsible for all reversals, chargebacks, fees, fines, penalties and other liability incurred by Riff, any other Riff customer, or a third party, caused by or arising out of your breach of this Customer Agreement. You agree to reimburse Riff, any Riff customer, or a third party for any and all such liability. On termination for any reason, all rights granted to you in connection with your account shall cease."}</p>

        <h3>{"Tax Compliance and Responsibilities"}</h3>

        <p>{"Riff offers optional functionality to assist in the generation and collection of IRS Form W-9 from Creators for the benefit of Brands or other paying parties. This service may be provided as part of a paid plan, usage-based pricing model, or other monetized feature of the Riff platform. The availability and terms of this functionality are subject to change and may vary based on your platform tier, account status, or contractual arrangement."}</p>

        <p>{"Use of this feature does not constitute tax, legal, or financial advice, and Riff makes no representations regarding the accuracy, sufficiency, or legal compliance of any generated or collected tax information."}</p>

        <p>{"All users, including both Creators, Agencies, and Brands, are solely responsible for:"}</p>

        <p>{"The accuracy and completeness of the tax information they provide or receive through the Riff platform; Compliance with all applicable federal, state, and local tax laws; The preparation, filing, and submission of any required tax documents (including IRS Forms 1099) to taxing authorities; Consulting with appropriate tax professionals to determine their individual or business tax obligations."}</p>

        <p>{"Riff does not file tax forms with the Internal Revenue Service (IRS) or any other government agency on behalf of any user. By using the W-9 or W-8 BEN assistance feature, you acknowledge that Riff's role is limited to facilitating the collection and delivery of tax forms between users and does not include verification, submission, or legal review."}</p>

        <h3>{"Communications Between You and Us"}</h3>

        <p>{"Riff"}{" may communicate with you about your Riff Account and the Services electronically as described in our "}<Link href="/pages/electronic-communications-policy/">{"Electronic Communications Delivery Policy"}</Link>{" . You will be considered to have received a communication from us, if it's delivered electronically, 24 hours after the time we post it to our website or email it to you. You will be considered to have received a communication from us, if it's delivered by mail, three (3) Business Days after we send it."}</p>

        <p>{"We usually contact you via email. For this reason, you must at all times maintain at least one valid email address in your Riff Account profile. You are required to check for incoming messages regularly and frequently, these emails may contain links to further communication on our Website. If you don't maintain or check your email and other methods of communications, you will miss emails about your transactions and our Services. We cannot be liable for any consequence or loss if you don't do this."}</p>

        <p>{"In addition to communicating via email, we may contact you via letter or telephone where appropriate. If you use any mobile services, we may, and you agree that we may, also communicate with you via SMS. Any communications or notices sent by Text messages (SMS) will be deemed received the same day. If you need a copy of the current Customer Agreement or any other relevant document, please contact us."}</p>

        <h3>{"Reversals, Chargebacks, ACH Returns and Wire Recalls"}</h3>

        <p>{"Riff is not responsible for any reversals, chargebacks, ACH returns and/or wire recalls. Once you have initiated a transfer request, it is your responsibility to ensure the transaction(s) are validated and funded before you confirm and wire us the funds. If you receive a reversal, chargeback, ACH return or wire recall after you have wired us the funds, it is your responsibility to collect whatever outstanding balance from your customer. Riff will not be responsible and/or involved in your collections and recovery process."}</p>

        <h3>{"Negative Balances"}</h3>

        <p>{"Riff"}{" wallet balances cannot contain negative amounts. We may charge you for any costs we may incur as a result of any collection efforts."}</p>

        <h3>{"Error Resolution"}</h3>

        <p>{"You must make sure that the information you provide to us when you send or convert currency, is accurate. Once a transaction is processed, it cannot be reversed (except where, and to the extent, required by applicable law) and, except as expressly set forth in this Customer Agreement, we will not be liable in any way for any loss you suffer as a result of a transaction being carried out in accordance with your instructions."}</p>

        <p>{"If you believe there to be an error in connection with a transaction or other problem, then you should notify Riff in writing as soon as possible, but no later than 60 days from the date we disclosed to you that a transaction has been completed. When you do, please tell us as much of the following information as possible: (1) your name and address; (2) the error or problem with the transaction, and why you believe it is an error or problem; (3) the name of the recipient, and if you know it, telephone number or address; (4) the dollar amount of the transfer; and (5) the transfer number."}</p>

        <p>{"The following are not considered Errors:"}</p>

        <ul>
          <li>{"If you give someone access to your Riff Account (by giving them your login information) and they use your Riff Account without your knowledge or permission. You are responsible for transactions made in this situation; "}</li>
          <li>{"Invalidation and reversal of a payment or transaction as a result of the actions described under Reversals, Chargebacks, ACH Returns and Wire Recalls; Routine inquiries about your Riff "}</li>
          <li>{"Account balance; Requests for duplicate documentation or other information for recordkeeping purposes; A change requested by the recipient of funds sent from you; A change in the amount or type of currency received by a designated recipient from the amount or type of currency stated in the disclosure provided you, if we relied on information provided by you in making the disclosure; Delays that result from Riff applying holds or limitations. "}</li>
          <li>{"Our decision about holds or limitations may be based on confidential risk management procedures and the protection of Riff, our customers and/or service providers. "}</li>
          <li>{"In addition, we may be restricted by regulation or a governmental authority from disclosing certain information to you about such decisions. "}</li>
          <li>{"We have no obligation to disclose the details of our risk management or security procedures to you; Delays based on a review of a potentially high-risk transaction; Your errors in making a transaction (for example, mistyping an amount of money that you are sending or choosing an incorrect Target Currency)."}</li>
        </ul>

        <h3>{"Complaints"}</h3>

        <p>{"If you have a question or complaint regarding the Services, please send an email through our "}<a href="mailto:info@useriff.app">{"info@useriff.app"}</a>{"."}</p>

        <h3>{"Riff API"}</h3>

        <p>{"If you access our Services via our API, we grant you a non-transferable, non-exclusive license to use our API subject to this Customer Agreement. We reserve all other rights."}</p>

        <h3>{"Information Security"}</h3>

        <p>{"Please see Account Security above for further details on how to keep your Riff Account safe. You are responsible for configuring your information technology, computer programs and platform in order to access our Services. You should use your own virus protection software. You must not misuse our Services by introducing viruses, trojans, worms, logic bombs or other materials which are malicious or technologically harmful. You must not attempt to gain unauthorized access to the Services, or our Website, our servers, computers or databases. You must not attack the Services, including via our Website with any type of denial-of-service attack. By breaching this provision, you would commit a criminal offense under applicable law, including the Computer Fraud and Abuse Act (18 U.S.C. § 1030). We may report any such breach to the relevant law enforcement authorities and we may co-operate with those authorities by disclosing your identity or other information to them. In the event of such a breach, your right to access and use our Website and/or our Services will cease immediately without notice, and you must immediately cease all such access and use."}</p>

        <h3>{"Riff's Rights"}</h3>

        <h3>{"Limitation on Riff's Liability, Indemnity and Release"}</h3>

        <p>{"In this section, we use the term \"Riff\" to include our partners and affiliates, and each of their respective directors, officers, employees, agents, joint venturers, service providers and suppliers. Our affiliates include each entity that we control, we are controlled by or we are under common control with."}</p>

        <p>{"In no event shall Riff be liable for lost profits or for any indirect, incidental, consequential, special, exemplary or punitive damages of any kind, under any contract, tort (including negligence), strict liability or other theory, including damages for loss of profits, use or data, loss of other intangibles, loss of business, loss of security of any information or other materials (including unauthorized interception by third parties of any information or other materials), even if advised in advance of the possibility of such damages or losses, however arising, including negligence, unless and to the extent prohibited by law. Our liability to you or any third parties in any circumstance is limited to the actual amount of direct damages."}</p>

        <p>{"In addition, to the extent permitted by applicable law, Riff is not liable, and you agree not to hold Riff responsible, for any damages or losses (including, but not limited to, loss of money, goodwill, or reputation, profits, or other intangible losses or any special, indirect, or consequential damages) resulting directly or indirectly from: (1) your use of, or your inability to use, our websites, API, software, systems (including any networks and servers used to provide any of the Services) operated by us or on our behalf, or any of the Services; (2) delays or disruptions in our Website software, API, systems (including any networks and servers used to provide any of the Services) operated by us or on our behalf and any of the Services; (3) viruses or other malicious software obtained by accessing our websites, API, software, systems (including any networks and servers used to provide any of the Services) operated by us or on our behalf or any of the Services or any website or service linked to our websites, software or any of the Services; (4) glitches, bugs, errors, or inaccuracies of any kind in our websites, software, systems (including any networks and servers used to provide any of the Services) operated by us or on our behalf or any of the Services or in the information and graphics obtained from them; (5) the content, actions, or inactions of third parties; (6) a suspension or other action taken with respect to your Riff Account; or (7) your need to modify your practices, content, or behavior, or your loss of or inability to do business, as a result of changes to this Customer Agreement or any other Riff policy."}</p>

        <h3>{"Indemnity"}</h3>

        <p>{"Except to the extent prohibited under applicable law, you agree to defend, indemnify and hold harmless Riff and its affiliates, and their respective successors and assigns, from and against all claims, liabilities, damages, judgments, awards, losses, costs, expenses and fees (including attorneys' fees) arising out of or relating to (a) your or your authorized third parties use of, or activities in connection with, the Services; (b) any violation or alleged violation by you of this Customer Agreement or applicable law; (c) any claim, fine, penalty, or assessment brought against Riff by a payment processor, financial institution, banking partner, or other third-party service provider arising from your conduct, transactions, or use of the Services; (d) any fraudulent, illegal, or unauthorized activity conducted by you or through your Riff Account; and (e) any claim by a third party arising from or related to your transactions, including disputes with recipients, beneficiaries, or other users. This indemnification obligation shall apply regardless of whether Riff is found to have been negligent or at fault, to the fullest extent permitted by applicable law."}</p>

        <h3>{"Release"}</h3>

        <p>{"If you have a dispute with any other Riff Account holder or a third party that you send money to or receive money from using the Services, you release Riff from any and all claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes. In entering into this release you expressly waive any protections (whether statutory or otherwise,) that would otherwise limit the coverage of this release to include only those claims which you may know or suspect to exist in your favor at the time of agreeing to this release."}</p>

        <h3>{"Service Availability"}</h3>

        <p>{"We will try to make sure our Services are available to you when you need them. However, we do not guarantee that our Services will always be available or be uninterrupted. We have the right to suspend, withdraw, discontinue or change all or any part of our Service without notice. We will not be liable to you if for any reason our Services are unavailable (in whole or in part) at any time or for any period. You are responsible for making all arrangements necessary for you to have access to the Services (including all hardware and telecommunications services)."}</p>

        <h3>{"Disclaimer of Warranty"}</h3>

        <p>{"The Services are provided \"As-Is\" \"Where Is\" and \"Where Available\" and without any representation or warranty, whether express, implied or statutory. Riff specifically disclaims any implied warranties of title, merchantability, fitness for a particular purpose and non-infringement. We disclaim all warranties with respect to the Services to the fullest extent permissible under applicable law, including the warranties of merchantability, fitness for a particular purpose, non-infringement and title."}</p>

        <h3>{"Insolvency Proceedings"}</h3>

        <p>{"If any type of bankruptcy or insolvency proceeding (e.g., a proceeding commenced under any provision of the United States Bankruptcy Code) is commenced by or against you, we'll be entitled to recover all reasonable costs or expenses (including reasonable attorneys' fees and expenses) incurred in connection with the enforcement of this Customer Agreement or objections that we supply information in connection with such proceeding."}</p>

        <h3>{"Intellectual Property"}</h3>

        <p>{"\"Riff,\" and all logos related to the Services that are either trademarks or or Riff's licensors. You may not copy, imitate, modify or use them without Riff's prior written consent. In addition, all page headers, custom graphics, button icons, and scripts are service marks, trademarks, and/or trade dress of Riff. You may not copy, imitate, modify or use them without our prior written consent. All right, title and interest in and to the Riff websites, any content thereon, the Services, the technology related to the Services, and any and all technology and any content created or derived from any of the foregoing is the exclusive property of Riff and its licensors."}</p>

        <h3>{"Use of Artificial Intelligence (AI) and Machine Learning"}</h3>

        <p>{"The Services may include artificial intelligence (\"AI\") or machine learning functionality that generates outputs or recommendations. You are solely responsible for reviewing and validating any AI outputs before use and by your use of the service acknowledge they may contain inaccuracies or limitations. Riff may use Customer Data to provide, improve, and develop our services, including enhancements to our AI systems, in compliance with applicable law. AI outputs are provided \"as is\" and without warranties of any kind. Riff is not liable for any actions taken based on such outputs."}</p>

        <h3>{"Miscellaneous Translation of This Customer Agreement"}</h3>

        <p>{"Any translation of this Customer Agreement is provided solely for your convenience and is not intended to modify the terms of this Customer Agreement. Only the English language of the Customer Agreement version is an official version. In the event of a conflict between the English version of this Customer Agreement and a version in a language other than English, the English version shall control."}</p>

        <h3>{"Governing law and Agreement to Arbitrate"}</h3>

        <p>{"You agree that, except to the extent inconsistent with or preempted by federal law and except as otherwise stated in this Customer Agreement, the laws of the State of California, without regard to principles of conflict of laws, will govern this Customer Agreement and any claim or dispute that has arisen or may arise between you and Riff, and regardless of your location. Except for disputes that qualify for small claims court, all disputes arising out of or related to this Agreement or any aspect of the relationship between you and Riff, whether based in contract, tort, statute, fraud, misrepresentation or any other legal theory, will be resolved through final and binding arbitration before a neutral arbitrator instead of in a court by a judge or jury and you agree that Riff and you are each waiving the right to trial by a jury. You agree that any arbitration under this Agreement will take place on an individual basis; class arbitrations and class actions are not permitted and you are agreeing to give up the ability to participate in a class action."}</p>

        <p>{"The arbitrator will conduct hearings, if any, by teleconference or videoconference, rather than by personal appearances, unless the arbitrator determines upon request by you or by us that an in-person hearing is appropriate. Any in-person appearances will be held at a location which is reasonably convenient to both parties with due consideration of their ability to travel and other pertinent circumstances. If the parties are unable to agree on a location, such determination should be made by the arbitrator. The arbitrator's decision will follow the terms of this Agreement and will be final and binding. The arbitrator will have authority to award temporary, interim or permanent injunctive relief or relief providing for specific performance of this Agreement, but only to the extent necessary to provide relief warranted by the individual claim before the arbitrator. The award rendered by the arbitrator may be confirmed and enforced in any court having jurisdiction thereof. Notwithstanding any of the foregoing, nothing in this Agreement will preclude you from bringing issues to the attention of federal, state or local agencies and, if the law allows, they can seek relief against us for you."}</p>

        <h3>{"Unlawful internet gambling notice"}</h3>

        <p>{"Restricted transactions as defined in Federal Reserve Regulation GG are prohibited from being processed through your Riff Account or your relationship with Riff. Restricted transactions generally include, but are not limited to, transactions in which credit, electronic fund transfers, checks, or drafts are knowingly accepted by gambling businesses in connection with unlawful Internet gambling."}</p>

        <h3>{"Survival"}</h3>

        <p>{"The following sections of this Customer Agreement shall survive any termination or expiration of this Agreement or closure of your Riff Account: Prohibited Activities, User Responsibility for Transactions, Platform Role Acknowledgment, Limitation on Riff's Liability, Indemnity, Release, Disclaimer of Warranty, Governing Law and Agreement to Arbitrate, and any other provision that by its nature is intended to survive termination. Your obligations under these sections shall continue in full force and effect notwithstanding any termination of your Riff Account or this Agreement."}</p>

        <h3>{"Other Information About this Customer Agreement"}</h3>

        <p>{"You may not transfer or assign any rights or obligations you have under this Customer Agreement without Riff's prior written consent. Riff may transfer or assign this Customer Agreement or any right or obligation under this Customer Agreement at any time."}</p>

        <p>{"Each of the paragraphs of this Customer Agreement operates separately. If any court or relevant authority decides that any of them are unlawful, the remaining paragraphs will remain in full force and effect. If we delay in asking you to do certain things or in taking action, it will not prevent us from taking steps against you at a later date."}</p>

        <p>{"Our failure to act with respect to a breach of any of your obligations under this Customer Agreement by you or others does not waive our right to act with respect to subsequent or similar breaches."}</p>

        <p>{"This Customer Agreement, including any terms and conditions incorporated herein, is the entire agreement between you and us relating to the subject matter hereof, and supersedes any and all prior or contemporaneous written or oral agreements or understandings. This Agreement does not, and shall not be construed to, create any partnership, joint venture, employer-employee, agency or franchisor-franchisee relationship between you and us."}</p>

        <h3>{"Contact Information"}</h3>

        <p>{"Direct contact information of Riff for support, legal inquiries, or regulatory questions to"}<a href="mailto:info@useriff.app">{" info@useriff.app"}</a>{"."}</p>
      </section>
    </LegalDocShell>
  );
}
