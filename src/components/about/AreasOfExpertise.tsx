
import React from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";

const AreasOfExpertise = () => {
  const expertiseAreas = [
    {
      title: "Transmission Structures",
      description: "Monopoles, lattice towers, and H-frames designed to withstand extreme weather conditions with superior mechanical strength.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Substation Structures",
      description: "Custom-engineered substation components including bus supports, equipment stands, and rigid bus systems.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Solar Module Mounting",
      description: "Fixed-tilt and tracking systems optimized for all terrain conditions with rapid installation capabilities.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      title: "Telecom Infrastructure",
      description: "Cell towers, small cell poles, and antenna mounts with seamless integration and concealment capabilities.",
      image: "https://images.unsplash.com/photo-1519307212971-dd9561667ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Areas of Expertise</h2>
      <TooltipProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="h-56 relative overflow-hidden">
                    <div 
                      className="h-full w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${area.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-xl font-bold text-white">{area.title}</h3>
                    </div>
                  </div>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4" side="top">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-lg">{area.title}</h3>
                  <p className="text-gray-700">{area.description}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default AreasOfExpertise;
