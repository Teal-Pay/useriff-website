import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/customers/");

export default function Page() {
  return <MarketingDocument route="/customers/" />;
}
