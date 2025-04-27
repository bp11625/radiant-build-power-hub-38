
import React from 'react';

const services = [
  {
    title: "Construction Management",
    description: "We provide end-to-end construction management services, ensuring your project is completed on time, within budget, and to the highest standards.",
    icon: "🏗️",
  },
  {
    title: "Design-Build",
    description: "Our integrated design-build approach combines architectural design and construction services for a streamlined project delivery.",
    icon: "✏️",
  },
  {
    title: "General Contracting",
    description: "As general contractors, we handle all aspects of your construction project, from initial planning to final completion.",
    icon: "🔨",
  },
  {
    title: "Preconstruction Services",
    description: "Our preconstruction services include cost estimating, value engineering, and constructability analysis to set your project up for success.",
    icon: "📝",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            <span className="relative pb-2">
              Our Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive construction solutions for every project phase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
