
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sun, Building, Zap, Factory, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Sun,
    title: "Solar Energy",
    description: "We design, install, and maintain solar power systems for commercial, industrial, and utility-scale applications.",
    color: "text-yellow-500",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80",
    features: [
      "Solar panel installation and maintenance",
      "Solar farm development",
      "Battery storage solutions",
      "Energy efficiency consulting",
      "Renewable energy integration"
    ]
  },
  {
    icon: Building,
    title: "Construction",
    description: "Our construction services encompass everything from initial planning and design to project completion.",
    color: "text-blue-500",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1331&q=80",
    features: [
      "Commercial building construction",
      "Industrial facility development",
      "Infrastructure projects",
      "Retrofitting and renovations",
      "Project management and consulting"
    ]
  },
  {
    icon: Zap,
    title: "Electrical Power Plants",
    description: "We specialize in the design, construction, and maintenance of electrical power plants.",
    color: "text-red-500",
    image: "https://images.unsplash.com/photo-1591964006776-90d42738b2a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Power plant design and engineering",
      "Equipment installation and commissioning",
      "Maintenance and upgrades",
      "Control systems integration",
      "Compliance and regulatory support"
    ]
  },
  {
    icon: Factory,
    title: "Fabrication",
    description: "Our state-of-the-art fabrication facilities enable us to create custom components and structures.",
    color: "text-gray-700",
    image: "https://images.unsplash.com/photo-1518783261635-f434d794e8eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80",
    features: [
      "Structural steel fabrication",
      "Custom metal components",
      "Pipe and duct fabrication",
      "Welding and assembly",
      "Quality control and testing"
    ]
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Effective logistics is crucial to project success. We provide comprehensive logistics services.",
    color: "text-green-600",
    image: "https://images.unsplash.com/photo-1581922227913-5dbd47593714?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Supply chain management",
      "Transportation and delivery",
      "Inventory management",
      "Warehousing and storage",
      "Logistics planning and optimization"
    ]
  }
];

const ServiceCard = ({
  service,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onTouchStart
}: {
  service: typeof services[0];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onTouchStart: () => void;
}) => (
  <div
    className={cn(
      "relative flex flex-col rounded-xl overflow-hidden cursor-pointer bg-white shadow-lg transition-all duration-300 h-72 group",
      isActive ? "z-10 scale-105 shadow-2xl" : "opacity-80 scale-95"
    )}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onTouchStart={onTouchStart}
    tabIndex={0}
    onFocus={onMouseEnter}
    onBlur={onMouseLeave}
    role="button"
    aria-pressed={isActive}
  >
    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-gray-900/80 to-transparent relative h-40">
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover object-center z-0 opacity-70 group-hover:opacity-90 group-focus:opacity-90 transition-opacity"
        draggable={false}
      />
      <div className="relative z-10 flex flex-col items-center">
        <service.icon className={cn("h-9 w-9 mb-3 drop-shadow-lg", service.color)} />
        <span className="text-xl font-bold text-white drop-shadow-sm">{service.title}</span>
      </div>
    </div>
    <div
      className={cn(
        "absolute left-0 right-0 bg-white rounded-b-xl shadow-lg px-6 py-4 transition-all duration-300 pointer-events-none",
        isActive ? "opacity-100 translate-y-0 pointer-events-auto animate-fade-in" : "opacity-0 invisible translate-y-4"
      )}
      style={{ top: "60%" }}
    >
      <p className="text-sm text-gray-700 font-medium mb-2">{service.description}</p>
      <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
        {service.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () => {
  // Track which card is active (hovered or touched), null = none
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Areas of Expertise</h2>
        <Carousel
          opts={{
            align: "center",
            loop: true
          }}
          className="w-full max-w-5xl mx-auto relative"
        >
          <CarouselContent>
            {services.map((service, idx) => (
              <CarouselItem
                key={idx}
                className="md:basis-1/3 sm:basis-1/2 basis-full px-4"
              >
                <ServiceCard
                  service={service}
                  isActive={activeIndex === idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onTouchStart={() => setActiveIndex(idx)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        <div className="text-center text-gray-500 mt-8 text-xs">
          <span>↔ Drag, swipe, or hover to explore all services</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
