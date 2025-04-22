
import { useState } from "react";
import { ArrowLeft, ArrowRight, Sun, Construction, Zap, Factory, Truck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { useAutoplayCarousel } from "./AutoplayCarousel";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  useAutoplayCarousel(api, 5000); // 5 seconds interval

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      title: "Building Excellence",
      description: "Leading the way in construction innovation"
    },
    {
      image: "https://images.unsplash.com/photo-1591964006776-90d42738b2a0",
      title: "Powering Progress",
      description: "Sustainable energy solutions for tomorrow"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Engineering Future",
      description: "Advanced infrastructure development"
    }
  ];

  const services = [
    {
      icon: Sun,
      title: "Solar Energy",
      description: "Sustainable power solutions"
    },
    {
      icon: Construction,
      title: "Construction",
      description: "Expert building services"
    },
    {
      icon: Zap,
      title: "Power Plants",
      description: "Energy infrastructure"
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Manufacturing solutions"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Supply chain excellence"
    }
  ];

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative h-[600px] w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 z-10" />
      </Carousel>

      <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white py-8 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <service.icon className="h-8 w-8 text-yellow-500 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
