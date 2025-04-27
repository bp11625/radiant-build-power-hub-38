
import React from 'react';

const coreValues = [
  {
    title: "Excellence",
    description: "We strive for excellence in every project we undertake, maintaining the highest standards of quality and craftsmanship.",
    icon: "🏆"
  },
  {
    title: "Integrity",
    description: "We conduct our business with unwavering integrity, transparency, and ethical principles that build trust with all stakeholders.",
    icon: "🤝"
  },
  {
    title: "Innovation",
    description: "We embrace innovation and creative solutions, constantly seeking better ways to address construction challenges.",
    icon: "💡"
  },
  {
    title: "Safety",
    description: "We prioritize safety above all else, ensuring secure working environments for our team and the public.",
    icon: "🛡️"
  },
  {
    title: "Sustainability",
    description: "We're committed to sustainable building practices that minimize environmental impact and maximize resource efficiency.",
    icon: "🌱"
  },
  {
    title: "Customer Focus",
    description: "We put our clients at the center of everything we do, focusing on their needs and exceeding their expectations.",
    icon: "👥"
  }
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            <span className="relative pb-2">
              Our Core Values
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            These principles guide our decisions and define who we are as a company
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-700 text-center mb-3">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
