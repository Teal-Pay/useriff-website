import { MarketingDocument, pageMetadata } from "@/components/marketing-document";

export const metadata = pageMetadata("/how-it-works/");

export default function Page() {
  return <MarketingDocument route="/how-it-works/" />;
}
