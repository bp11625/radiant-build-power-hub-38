
import React, { useState } from 'react';
import { Button } from "../ui/button";

const videoData = [
  {
    id: 1,
    title: "Construction Management",
    description: "Expert management of construction projects from start to finish",
    image: "https://picsum.photos/seed/1/800/600",
  },
  {
    id: 2,
    title: "Architecture & Design",
    description: "Innovative architectural solutions for modern needs",
    image: "https://picsum.photos/seed/2/800/600",
  },
  {
    id: 3,
    title: "Renovation Projects",
    description: "Transforming spaces with expert renovation services",
    image: "https://picsum.photos/seed/3/800/600",
  },
  {
    id: 4,
    title: "Safety & Compliance",
    description: "Ensuring all projects meet safety standards",
    image: "https://picsum.photos/seed/4/800/600",
  },
];

const Hero = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="relative bg-gray-900">
      <div className="h-[600px] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="/lovable-uploads/6d21e0ac-3d27-47ba-9046-ccde539ce977.png"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Building Tomorrow's <span className="text-blue-400">Infrastructure</span> Today
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                With over two decades of experience, we've been delivering exceptional construction
                solutions across commercial, residential, and industrial sectors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-30 pb-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {videoData.map((item, index) => (
              <div
                key={item.id}
                className="group relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-200 text-sm mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
