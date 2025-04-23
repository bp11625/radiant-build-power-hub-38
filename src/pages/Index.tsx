import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import AboutUs from "@/components/home/AboutUs";
import CounterSection from "@/components/home/CounterSection";
import ProjectEnquiry from "@/components/home/ProjectEnquiry";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Heading from "@/components/ui/Heading";
import { useState, useEffect } from "react";

export default function Index() {
  // Video sources for hero background
  const HERO_VIDEOS = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4"
  ];

  // Show one video at a time, rotate every 2.5s
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar showContact={true} />
      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          {/* Animated single video, floating */}
          <div className="absolute inset-0 w-full h-full flex z-0">
            <div className="flex-1 h-full group relative overflow-hidden" style={{ minWidth: 0 }}>
              <video
                key={currentVideo}
                src={HERO_VIDEOS[currentVideo]}
                loop
                muted
                playsInline
                autoPlay
                className={`w-full h-full object-cover video-float-0`}
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Building Excellence <br /> Since 1990
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              We provide high-quality construction services for residential and commercial properties
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded transition-colors">
                Our Services
              </button>
              <button className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <AboutUs />
        <CounterSection />

        {/* Services Section with Heading */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <Heading>Our Services</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Service 1 */}
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
            <div className="text-center mt-10">
              <a href="/services">
                <button className="bg-[#1a3c6b] hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded transition-colors shadow-md">
                  View All Services
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Heading>Recent Projects</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
            <div className="text-center mt-12">
              <a href="/projects">
                <button className="bg-[#1a3c6b] hover:bg-blue-800 text-white font-medium py-3 px-8 rounded transition-colors">
                  View All Projects
                </button>
              </a>
            </div>
          </div>
        </section>
        <ProjectEnquiry />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
