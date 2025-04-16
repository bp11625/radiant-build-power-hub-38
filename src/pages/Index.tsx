
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Construction, Sun, Zap, Factory, Truck } from "lucide-react";

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
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">Our Services</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
            <Sun className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Solar Energy</h3>
            <p className="text-gray-600">Renewable energy solutions for residential and commercial projects</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
            <Construction className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Construction</h3>
            <p className="text-gray-600">End-to-end construction services for commercial and industrial clients</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
            <Zap className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Electrical Power</h3>
            <p className="text-gray-600">Power plant design, installation and maintenance services</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
            <Factory className="h-12 w-12 text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fabrication</h3>
            <p className="text-gray-600">Custom metal fabrication and manufacturing solutions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all">
            <Truck className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Logistics</h3>
            <p className="text-gray-600">Efficient transportation and supply chain management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
