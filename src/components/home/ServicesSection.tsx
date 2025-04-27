
import React from 'react';
import Heading from '@/components/ui/Heading';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Heading title="Our Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            image="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            title="Residential Construction"
            description="Custom homes, renovations, and additions tailored to your lifestyle and needs."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            title="Commercial Construction"
            description="Office buildings, retail spaces, and industrial facilities designed for efficiency."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1665513366480-5e5881cdac6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1222&q=80"
            title="Renovation & Remodeling"
            description="Transform your existing space with modern designs and quality craftsmanship."
          />
        </div>
        <div className="text-center mt-10">
          <a href="/services">
            <button className="bg-[#1a3c6b] hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded transition-colors shadow-md">
              View All Services
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ image, title, description }: { image: string; title: string; description: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="h-48 bg-blue-100 flex items-center justify-center">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-red-500 hover:text-red-600 font-medium">Learn More →</a>
    </div>
  </div>
);

export default ServicesSection;
