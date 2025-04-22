import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Construction, Sun, Zap, Factory, Truck } from "lucide-react";
import ProjectEnquiry from "../components/home/ProjectEnquiry";
import AboutUs from "../components/home/AboutUs";
import Footer from "../components/about/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-800">PowerBuild Construction</div>
          <div className="flex space-x-6">
            <Link to="/" className="font-medium text-gray-600 hover:text-blue-800">Home</Link>
            <Link to="/about" className="font-medium text-gray-600 hover:text-blue-800">About</Link>
            <a href="#" className="font-medium text-gray-600 hover:text-blue-800">Services</a>
            <a href="#" className="font-medium text-gray-600 hover:text-blue-800">Projects</a>
            <a href="#" className="font-medium text-gray-600 hover:text-blue-800">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Building Tomorrow's Energy Solutions</h1>
            <p className="text-xl mb-8">Specializing in Solar Energy, Construction, Electrical Power Plants, Fabrication, and Logistics</p>
            <div className="flex space-x-4">
              <Link to="/about">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Learn About Us</Button>
              </Link>
              <Button variant="outline" className="bg-white text-blue-800 hover:bg-blue-800 hover:text-white border-white transition-colors">Our Services</Button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <AboutUs />

      {/* Project Enquiry Section */}
      <ProjectEnquiry />

      {/* Core Services Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#1a3c6b]">
          Our Core Services
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </h2>

        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From building impactful assets to empowering lives through self-reliance and sustainability, our vision is to drive progress rooted in goodness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 group">
            <div className="mb-6 flex justify-center">
              <Sun className="h-16 w-16 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Energy & Utilities</h3>
            <p className="text-gray-600">
              Powering a sustainable future with clean energy solutions.
            </p>
          </div>

          <div className="text-center p-6 group">
            <div className="mb-6 flex justify-center">
              <Construction className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Construction</h3>
            <p className="text-gray-600">
              Building world-class infrastructures and enduring legacies.
            </p>
          </div>

          <div className="text-center p-6 group">
            <div className="mb-6 flex justify-center">
              <Zap className="h-16 w-16 text-red-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Power Plant</h3>
            <p className="text-gray-600">
              Delivering reliable and efficient energy to keep the world running.
            </p>
          </div>

          <div className="text-center p-6 group">
            <div className="mb-6 flex justify-center">
              <Truck className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Logistics</h3>
            <p className="text-gray-600">
              Driving global connectivity with smart, efficient, and reliable solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
