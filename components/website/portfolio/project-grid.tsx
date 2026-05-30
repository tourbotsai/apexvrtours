"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Project {
  image: string;
  title: string;
  category: string;
}

const projects: Project[] = [
  {
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    title: "The Langford Hotel",
    category: "Boutique Hotel",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    title: "Riverside Wedding Barn",
    category: "Event Venue",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    title: "The Quayside Brasserie",
    category: "Restaurant",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    title: "Holloway & Co Showroom",
    category: "Retail",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    title: "Northgate Office Suites",
    category: "Commercial Property",
  },
  {
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    title: "The Meridian Suite",
    category: "Luxury Accommodation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    title: "Harbour View Lodge",
    category: "Hotel",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    title: "Apex Fitness Studio",
    category: "Leisure & Fitness",
  },
];

const ProjectGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
              onClick={() => setSelectedImage(project.image)}
            >
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                  {project.category}
                </p>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl">
          <div className="relative aspect-[4/3] w-full">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Enlarged virtual tour preview"
                fill
                className="rounded-lg object-contain"
                priority
                sizes="100vw"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectGrid;
