
import React from "react";
import { Atom, Cpu, CircuitBoard } from "lucide-react";

const technologyFeatures = [
  {
    icon: <Atom className="text-blue-600 w-10 h-10 mb-3" />,
    title: "Modern Engineering Tools",
    desc: "We utilize advanced BIM, CAD, and simulation software for highly accurate, cost-effective project designs.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Cpu className="text-blue-600 w-10 h-10 mb-3" />,
    title: "Automated Fabrication",
    desc: "Robotic welding, plasma CNC cutting, and IoT-enabled manufacturing boost efficiency and quality control.",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <CircuitBoard className="text-blue-600 w-10 h-10 mb-3" />,
    title: "IoT & Smart Monitoring",
    desc: "Real-time sensors and analytics enable predictive maintenance and maximize safety & uptime.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];

export default function OurTechnology() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Technology</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {technologyFeatures.map((tech, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={tech.img} alt={tech.title} className="w-full h-60 object-cover" />
            <div className="flex-1 flex flex-col items-center text-center p-6">
              {tech.icon}
              <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
