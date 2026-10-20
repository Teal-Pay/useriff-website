import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/pricing/");

export default function Page() {
  return <MarketingDocument route="/pricing/" />;
}
