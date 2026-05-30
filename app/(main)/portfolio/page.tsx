import React from "react";
import { PortfolioHero } from "@/components/website/portfolio/hero";
import ProjectGrid from "@/components/website/portfolio/project-grid";

export const metadata = {
  title: "Portfolio | Apex VR Tours",
  description:
    "A selection of recent Matterport virtual tours for hotels, venues, restaurants, retail and commercial spaces across the UK.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <ProjectGrid />
    </main>
  );
}
