"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      Icon: Sparkles,
      title: "16K ULTRA-HD CAPTURE",
      description:
        "We shoot with the latest Matterport Pro3 LiDAR scanners for crisp, true-to-life detail and accurate measurements.",
    },
    {
      Icon: Clock,
      title: "FAST TURNAROUND",
      description:
        "One short visit to scan your space, with your finished tour typically delivered live within 48 hours.",
    },
    {
      Icon: ShieldCheck,
      title: "NO TRAVEL FEES",
      description:
        "Nationwide UK coverage with transparent project-based pricing. No surprises, no recurring lock-ins.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image and Quote */}
          <div className="relative">
            <div className="aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
                alt="Hotel suite captured as a 3D virtual tour"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md absolute bottom-6 left-6 border border-gray-100">
              <blockquote className="text-lg font-medium italic text-gray-800">
                &ldquo;A virtual tour lets prospects explore your space with genuine
                confidence — so the enquiries you receive are ready to book.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="inline-block bg-blue-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
              WHY APEX VR TOURS
            </div>
            <h2 className="text-4xl font-bold mb-6">More bookings, fewer wasted viewings</h2>
            <p className="text-lg text-gray-700 mb-6">
              An immersive 3D tour works around the clock for your business. Customers can
              walk through your space, understand the layout and picture their event or stay
              long before they pick up the phone.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              From scan to shareable tour, we handle everything — so you can attract more
              enquiries without adding to your team&rsquo;s workload.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-sm hover:bg-blue-700 transition-colors duration-200"
            >
              EXPLORE OUR SERVICES
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <feature.Icon className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
