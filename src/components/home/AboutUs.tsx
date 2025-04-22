
import { Button } from "@/components/ui/button";

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
            src="/lovable-uploads/eb3c17ee-a759-4377-ba92-19ff75a909a7.png"
            alt="Construction corridor"
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
          
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
