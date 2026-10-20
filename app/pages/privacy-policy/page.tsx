import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/pages/privacy-policy/");

export default function Page() {
  return <MarketingDocument route="/pages/privacy-policy/" />;
}
