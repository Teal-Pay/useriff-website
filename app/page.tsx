import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Agencies } from "@/components/sections/agencies";
import { Features } from "@/components/sections/features";
import { Splits } from "@/components/sections/in-practice";
import { Brands } from "@/components/sections/brands";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Agencies />
        <Features />
        <Splits />
        <Brands />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
