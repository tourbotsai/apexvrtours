"use client";

import Image from "next/image";

interface Industry {
  name: string;
  image: string;
  tagline: string;
  description: string;
}

export const Industries = () => {
  const industries: Industry[] = [
    {
      name: "Hotels & Accommodation",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
      tagline: "Hospitality",
      description:
        "Let guests explore rooms, suites and communal spaces before they book. Perfect for boutique hotels, B&Bs and holiday lets looking to stand out online.",
    },
    {
      name: "Wedding & Event Venues",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      tagline: "Venues",
      description:
        "Showcase every event space in full 3D so couples and planners can picture their day, reducing site visits and speeding up the booking decision.",
    },
    {
      name: "Restaurants & Bars",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      tagline: "Hospitality",
      description:
        "Capture the atmosphere of your venue and highlight private dining areas, helping guests choose the right space for celebrations and group bookings.",
    },
    {
      name: "Retail & Showrooms",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      tagline: "Retail",
      description:
        "Let customers browse your store or showroom from anywhere. Tag products with info, links and pricing to turn an online visit into a sale.",
    },
    {
      name: "Commercial Property",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      tagline: "Property",
      description:
        "Give prospective tenants and buyers a true sense of scale and layout with accurate floor plans and measurements, qualifying leads before viewings.",
    },
    {
      name: "Leisure & Fitness",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      tagline: "Leisure",
      description:
        "From gyms and spas to attractions and clubs, show off your facilities and equipment so visitors know exactly what to expect before they arrive.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-blue-600 text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-sm mb-3">
                  {industry.tagline}
                </div>
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
