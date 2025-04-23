
import React, { useState } from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import { Filter, Sun, Building2 } from "lucide-react";

const projectData = [
  {
    title: "Luxury Villa",
    type: "Residential",
    tag: "infrastructure",
    image:
      "https://images.unsplash.com/photo-1621335223658-0ebd89004d51?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Office Tower",
    type: "Commercial",
    tag: "infrastructure",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Modern Apartment",
    type: "Residential",
    tag: "infrastructure",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Solar Mega Plant",
    type: "Solar",
    tag: "solar",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1222&q=80",
  },
  {
    title: "Community Solar Field",
    type: "Solar",
    tag: "solar",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  }
];

const filters = [
  { key: "all", label: "All", icon: Filter },
  { key: "solar", label: "Solar", icon: Sun },
  { key: "infrastructure", label: "Infrastructure", icon: Building2 }
];

export default function Projects() {
  const [selected, setSelected] = useState("all");

  const filteredProjects =
    selected === "all"
      ? projectData
      : projectData.filter((proj) => proj.tag === selected);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar showContact={false} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-[#1a3c6b]">Our Projects</h1>
        <div className="w-24 h-1 bg-red-500 mb-8"></div>

        {/* Filter buttons */}
        <div className="flex gap-4 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border font-medium transition-colors ${
                selected === f.key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-blue-100 text-gray-700"
              }`}
              onClick={() => setSelected(f.key)}
            >
              <f.icon size={18} />
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {filteredProjects.map((proj, idx) => (
            <div key={idx} className="group rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">View Project</button>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{proj.title}</h3>
                <p className="text-gray-600">{proj.type} Project</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
