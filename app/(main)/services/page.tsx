import { ServicesHero } from "@/components/website/services/hero";
import { Industries } from "@/components/website/services/industries";
import { Process } from "@/components/website/services/process";

export const metadata = {
  title: "Services | Apex VR Tours",
  description:
    "Matterport 3D virtual tours for hotels, venues, restaurants, retail, commercial property and leisure spaces across the UK.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <Industries />
      <Process />
    </main>
  );
}
