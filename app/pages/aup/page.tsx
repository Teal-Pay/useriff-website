import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/pages/aup/");

export default function Page() {
  return <MarketingDocument route="/pages/aup/" />;
}
