"use client";

import Link from "next/link";
import { Check } from "lucide-react";

interface Package {
  title: string;
  subtitle: string;
  price: string;
  unit: string;
  features: string[];
  featured?: boolean;
}

export const Packages = () => {
  const packages: Package[] = [
    {
      title: "Essential",
      subtitle: "Small spaces & single rooms",
      price: "£299",
      unit: "from, per tour",
      features: [
        "Up to ~1,500 sq ft",
        "Interactive 3D tour",
        "Hosted link + embed code",
        "Dollhouse & inside views",
        "48-hour delivery",
      ],
    },
    {
      title: "Professional",
      subtitle: "Hotels, venues & restaurants",
      price: "£599",
      unit: "from, per tour",
      featured: true,
      features: [
        "Up to ~5,000 sq ft",
        "Everything in Essential",
        "Schematic floor plan",
        "Custom info & media tags",
        "Branded tour highlights",
      ],
    },
    {
      title: "Premium",
      subtitle: "Large & multi-floor properties",
      price: "£999",
      unit: "from, per tour",
      features: [
        "5,000+ sq ft",
        "Everything in Professional",
        "Drone & aerial photography",
        "Video integration",
        "Priority delivery",
      ],
    },
    {
      title: "Portfolio",
      subtitle: "Multi-site & ongoing work",
      price: "Bespoke",
      unit: "tailored package",
      features: [
        "Multiple locations",
        "Discounted per-site rates",
        "Dedicated account manager",
        "Flexible hosting options",
        "Volume scheduling",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-lg p-8 ${
                pkg.featured
                  ? "bg-gray-900 text-white shadow-2xl ring-2 ring-blue-600"
                  : "bg-white text-gray-900 shadow-sm border border-gray-100"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{pkg.title}</h3>
              <p
                className={`text-sm mb-6 ${
                  pkg.featured ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {pkg.subtitle}
              </p>
              <div className="mb-1">
                <span className="text-4xl font-bold">{pkg.price}</span>
              </div>
              <p
                className={`text-sm mb-6 ${
                  pkg.featured ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {pkg.unit}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <Check
                      className={`mr-2 h-5 w-5 flex-shrink-0 ${
                        pkg.featured ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                    <span className={pkg.featured ? "text-gray-200" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full text-center px-6 py-3 rounded-sm font-semibold transition-colors duration-200 ${
                  pkg.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                GET A QUOTE
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          All prices exclude VAT. Optional tour hosting is available from £60 + VAT per year.
        </p>
      </div>
    </section>
  );
};
