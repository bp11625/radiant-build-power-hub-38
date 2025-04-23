import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";

export default function Clients() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-[#1a3c6b]">Our Clients</h1>
        <div className="w-24 h-1 bg-red-500 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12">
          {/* Client logos */}
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Client 1" className="max-h-24 max-w-full" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Client 2" className="max-h-24 max-w-full" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Client 3" className="max-h-24 max-w-full" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Client 4" className="max-h-24 max-w-full" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Client 5" className="max-h-24 max-w-full" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Client 6" className="max-h-24 max-w-full" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Client 7" className="max-h-24 max-w-full" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Client 8" className="max-h-24 max-w-full" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
