
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const CompanyTimeline = () => {
  const timelineEvents = [
    {
      year: "2005",
      title: "Company Founded",
      description: "Started as an electrical contracting company with three employees"
    },
    {
      year: "2010",
      title: "Expansion into Construction",
      description: "Broadened our services to include full construction capabilities"
    },
    {
      year: "2014",
      title: "Solar Energy Division",
      description: "Launched dedicated solar energy division"
    },
    {
      year: "2017",
      title: "Fabrication Facilities",
      description: "Opened state-of-the-art fabrication facilities"
    },
    {
      year: "2020",
      title: "Integrated Logistics",
      description: "Added comprehensive logistics capabilities to our service offering"
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Opened offices in Europe and Asia to serve global clients"
    },
    {
      year: "2024",
      title: "Renewable Focus",
      description: "Committed to 100% renewable energy projects by 2030"
    }
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        
        <div className="relative max-w-5xl mx-auto px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {timelineEvents.map((event, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="h-64 p-4">
                    <div className="bg-white rounded-lg shadow-md h-full flex flex-col items-center p-6 hover:shadow-lg transition-shadow">
                      <div className="text-2xl font-bold text-blue-800">{event.year}</div>
                      <div className="my-4 bg-blue-100 rounded-full p-3">
                        <Calendar className="text-blue-800 h-7 w-7" />
                      </div>
                      <h3 className="text-lg font-semibold text-center mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-center text-sm">{event.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CompanyTimeline;
