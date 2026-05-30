"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CompanyInfo = () => {
  const capabilities = [
    "Matterport Pro3 LiDAR capture",
    "Interactive 3D dollhouse views",
    "Accurate schematic floor plans",
    "Embeddable tours for your website",
    "Custom info tags & branding",
    "Drone & aerial photography",
    "Multi-site portfolio packages",
    "Hosting & ongoing support",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-block bg-blue-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
              OUR STORY
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Specialists in immersive 3D virtual tours
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Apex VR Tours was established to give businesses a better way to showcase
              their spaces online. What began as a small London studio is now a nationwide
              team trusted by hotels, wedding and event venues, restaurants, showrooms and
              commercial property owners across the UK.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We handle every project personally — from the initial scan through to a
              polished, ready-to-share tour. No outsourcing, no shortcuts, and transparent
              project-based pricing with no surprise travel fees.
            </p>

            {/* Capabilities List */}
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-sm hover:bg-blue-700 transition-colors duration-200 mt-8"
            >
              GET IN TOUCH
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="Modern commercial interior captured by Apex VR Tours"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
