import React from "react";
import { PortfolioHero } from "@/components/website/portfolio/hero";
import { ClientTours } from "@/components/website/portfolio/client-tours";

export const metadata = {
  title: "Portfolio | Apex VR Tours",
  description:
    "Explore real Matterport virtual tours Apex VR Tours has created for clients across the UK.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <ClientTours />
    </main>
  );
}
