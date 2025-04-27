import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#1a3c6b]">
        About Us
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Modern construction site"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-800">We Build Your Dreams Into Reality</h3>
          
          <p className="text-gray-600 text-lg">
            Established in 1990, PowerBuild Construction has grown to become one of the leading construction
            companies in the region. With a strong focus on quality, safety, and customer satisfaction, we have
            successfully completed numerous residential, commercial, and industrial projects.
          </p>
          
          <p className="text-gray-600 text-lg">
            Our team consists of highly skilled professionals who are dedicated to delivering excellence in every
            project we undertake.
          </p>
          
          <Link to="/about">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
