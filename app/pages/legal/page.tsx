import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/pages/legal/");

export default function Page() {
  return <MarketingDocument route="/pages/legal/" />;
}
