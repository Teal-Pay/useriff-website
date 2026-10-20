import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/payments/");

export default function Page() {
  return <MarketingDocument route="/payments/" />;
}
