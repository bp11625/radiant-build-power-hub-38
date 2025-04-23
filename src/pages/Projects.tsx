import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-[#1a3c6b]">Our Projects</h1>
        <div className="w-24 h-1 bg-red-500 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {/* Project cards */}
          {/* Project 1 */}
          <div className="group rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1621335223658-0ebd89004d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Luxury Villa" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">View Project</button>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Luxury Villa</h3>
              <p className="text-gray-600">Residential Project</p>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="group rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Office Tower" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">View Project</button>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Office Tower</h3>
              <p className="text-gray-600">Commercial Project</p>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="group rounded-lg overflow-hidden shadow-md">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Modern Apartment" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">View Project</button>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Modern Apartment</h3>
              <p className="text-gray-600">Residential Project</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
