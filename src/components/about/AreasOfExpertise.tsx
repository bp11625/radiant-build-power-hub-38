
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const expertiseAreas = [
  {
    title: "Transmission Structures",
    description:
      "Monopoles, lattice towers, and H-frames designed to withstand extreme weather conditions with superior mechanical strength.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Substation Structures",
    description:
      "Custom-engineered substation components including bus supports, equipment stands, and rigid bus systems.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Solar Module Mounting",
    description:
      "Fixed-tilt and tracking systems optimized for all terrain conditions with rapid installation capabilities.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Telecom Infrastructure",
    description:
      "Cell towers, small cell poles, and antenna mounts with seamless integration and concealment capabilities.",
    image:
      "https://images.unsplash.com/photo-1519307212971-dd9561667ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
  }
];

const AreasOfExpertise = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Areas of Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {expertiseAreas.map((area, i) => (
          <div
            key={i}
            className="relative rounded-xl group overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            tabIndex={0}
            onFocus={() => setHoverIndex(i)}
            onBlur={() => setHoverIndex(null)}
          >
            <img src={area.image} alt={area.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            {/* Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6",
                hoverIndex === i && "opacity-100"
              )}
              style={{ zIndex: 10 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
              <p className="text-white">{area.description}</p>
            </div>
            <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
              <h3 className="text-xl text-white font-semibold drop-shadow">{area.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreasOfExpertise;
