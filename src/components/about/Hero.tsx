
import { useState } from "react";
import { Sun, Construction, Zap, Factory, Truck } from "lucide-react";
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

  // Replace static images with videos
  const slides = [
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Engineering Excellence",
      description: "Pioneering innovative solutions in construction and energy"
    },
    {
      video: "https://www.w3schools.com/html/movie.mp4",
      title: "Sustainable Power",
      description: "Leading the way in renewable energy solutions"
    },
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Advanced Technology",
      description: "Cutting-edge infrastructure development"
    },
    {
      video: "https://www.w3schools.com/html/movie.mp4",
      title: "Smart Solutions",
      description: "Innovative approaches to modern challenges"
    }
  ];

  const services = [
    {
      icon: Sun,
      title: "Solar Energy",
      description: "Renewable power solutions",
      color: "text-yellow-500"
    },
    {
      icon: Construction,
      title: "Construction",
      description: "Infrastructure development",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Power Plants",
      description: "Energy infrastructure",
      color: "text-red-500"
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Manufacturing excellence",
      color: "text-gray-700"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Supply chain solutions",
      color: "text-green-600"
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
              <div className="relative h-[500px] w-full overflow-hidden">
                <video
                  src={slide.video}
                  className="h-full w-full object-cover brightness-50 transform scale-105 transition-transform duration-10000 hover:scale-110"
                  loop
                  muted
                  preload="auto"
                  playsInline
                  poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=40"
                  onMouseOver={e => e.currentTarget.play()}
                  onMouseOut={e => e.currentTarget.pause()}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in">{slide.title}</h1>
                  <p className="text-2xl animate-fade-in delay-200">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 z-10" />
      </Carousel>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-black/60 text-white py-12 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="text-center group transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <div className="mb-4 flex justify-center">
                  <service.icon className={`h-12 w-12 ${service.color} group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
