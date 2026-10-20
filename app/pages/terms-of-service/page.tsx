import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/pages/terms-of-service/");

export default function Page() {
  return <MarketingDocument route="/pages/terms-of-service/" />;
}
