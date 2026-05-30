import { PricingHero } from "@/components/website/pricing/hero";
import { Packages } from "@/components/website/pricing/packages";

export const metadata = {
  title: "Pricing | Apex VR Tours",
  description:
    "Simple, transparent pricing for Matterport virtual tours. Packages scale with the size of your space, with no surprise travel fees.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <Packages />
    </main>
  );
}
