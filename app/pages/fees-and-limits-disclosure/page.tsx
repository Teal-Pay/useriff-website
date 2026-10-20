import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/pages/fees-and-limits-disclosure/");

export default function Page() {
  return <MarketingDocument route="/pages/fees-and-limits-disclosure/" />;
}
