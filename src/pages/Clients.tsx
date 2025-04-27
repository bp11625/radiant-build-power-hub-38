
import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import { Check } from "lucide-react";
import Heading from "@/components/ui/Heading";

export default function Clients() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <main className="container mx-auto px-4 py-8">
        <Heading title="Our Clients" />
        {/* Who we serve + Our Clients */}
        <section className="mb-12">
          <h2 className="text-orange-600 uppercase font-bold text-xl mb-2">Who We Serve</h2>
          <h1 className="text-4xl font-extrabold mb-2 text-[#1a3c6b]">OUR CLIENTS</h1>
          <div className="w-full flex flex-col md:flex-row gap-6 mt-6">
            <div className="flex-1">
              <h3 className="uppercase font-semibold text-gray-700 mb-2">Public <span className="border-t border-gray-300 w-8 inline-block align-middle ml-2" /></h3>
              <ul className="space-y-1 text-lg text-gray-800">
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> State Departments Of Transportation</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Turnpikes</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Cities</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Counties</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Other State Agencies</li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="uppercase font-semibold text-gray-700 mb-2">Private <span className="border-t border-gray-300 w-8 inline-block align-middle ml-2" /></h3>
              <ul className="space-y-1 text-lg text-gray-800">
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Industrial</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Manufacturing</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Food Processing</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Oil & Gas/Refinery</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> General Contractors</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Developers</li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="uppercase font-semibold text-gray-700 mb-2">Specialty <span className="border-t border-gray-300 w-8 inline-block align-middle ml-2" /></h3>
              <ul className="space-y-1 text-lg text-gray-800">
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Federal Agencies</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Railroad Companies</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Airports</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Golf Courses</li>
                <li className="flex gap-2 items-center"><span className="text-orange-600"><Check /></span> Design-Builders</li>
              </ul>
            </div>
          </div>
        </section>
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
