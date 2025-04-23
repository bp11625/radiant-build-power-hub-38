import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-[#1a3c6b]">Our Services</h1>
        <div className="w-24 h-1 bg-red-500 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {/* Service cards */}
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
          
          {/* Service 2 */}
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
          
          {/* Service 3 */}
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
