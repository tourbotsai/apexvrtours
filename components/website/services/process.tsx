"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Book your scan",
      description:
        "Tell us about your space and we'll provide a fixed quote and arrange a convenient time to visit.",
    },
    {
      number: "02",
      title: "We capture on-site",
      description:
        "Our technician scans your space with a Matterport Pro3 camera — usually in just a few hours with minimal disruption.",
    },
    {
      number: "03",
      title: "Go live in 48 hours",
      description:
        "We process and deliver your finished tour with an embed code and shareable link, ready to publish anywhere.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl font-bold mb-4">A simple, end-to-end process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From first call to live tour, we handle everything for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-lg border border-gray-100 bg-gray-50 p-8">
              <span className="text-5xl font-bold text-blue-100">{step.number}</span>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-sm hover:bg-blue-700 transition-colors duration-200"
          >
            START YOUR PROJECT
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
