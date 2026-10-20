import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/");

export default function Page() {
  return <MarketingDocument route="/" />;
}
