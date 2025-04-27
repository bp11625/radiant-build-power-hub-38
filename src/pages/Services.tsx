import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import { Truck } from "lucide-react";
import Heading from "@/components/ui/Heading";

const earthworkServices = [
  "Mass Earthwork",
  "Rock Excavation",
  "Site Clearing & Grading",
  "Subgrade Stabilization",
  "Crushed Aggregates",
  "Sheet Piling And Shoring",
  "Heavy Highway / Urban Expressways / City Streets",
  "Levee Construction & Rehabilitation",
  "Railroad Construction",
  "Airport Construction",
  "Site Development (Commercial, Industrial, Residential)",
  "Water & Wastewater Treatment Plants",
  "Golf Course Construction & Renovation",
  "Environmental / Wetland Remediation"
];

export default function Services() {
  const half = Math.ceil(earthworkServices.length / 2);
  const left = earthworkServices.slice(0, half);
  const right = earthworkServices.slice(half);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <main className="container mx-auto px-4 py-8">
        <Heading title="Our Services" />
        <section className="py-10 rounded-xl bg-gray-50 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            <div className="flex flex-col items-center md:items-start w-full md:w-1/4 text-center md:text-left">
              <Truck size={56} className="text-orange-500 mb-2" />
              <span className="uppercase font-bold text-orange-500 tracking-wide mb-2">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">WE DO IT ALL</h2>
              <span className="font-semibold text-2xl mt-4 text-gray-700">EARTHWORK</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-3/4">
              <ul className="space-y-3 text-base text-gray-700">
                {left.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-orange-500 font-bold">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3 text-base text-gray-700">
                {right.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-orange-500 font-bold">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Residential Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Residential Construction</h3>
              <p className="text-gray-600 mb-4">
                Custom homes, renovations, and additions tailored to your lifestyle and needs.
              </p>
              <a href="#" className="text-red-500 hover:text-red-600 font-medium">Learn More →</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Commercial Construction"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Commercial Construction</h3>
              <p className="text-gray-600 mb-4">
                Office buildings, retail spaces, and industrial facilities designed for efficiency.
              </p>
              <a href="#" className="text-red-500 hover:text-red-600 font-medium">Learn More →</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1665513366480-5e5881cdac6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1222&q=80"
                alt="Renovation & Remodeling"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Renovation & Remodeling</h3>
              <p className="text-gray-600 mb-4">
                Transform your existing space with modern designs and quality craftsmanship.
              </p>
              <a href="#" className="text-red-500 hover:text-red-600 font-medium">Learn More →</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
