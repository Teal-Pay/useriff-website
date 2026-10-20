import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/pages/invoice-and-payment-terms/");

export default function Page() {
  return <MarketingDocument route="/pages/invoice-and-payment-terms/" />;
}
