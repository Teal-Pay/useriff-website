import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/faq/");

export default function Page() {
  return <MarketingDocument route="/faq/" />;
}
