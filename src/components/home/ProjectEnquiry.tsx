
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const propertyTypes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Renovation",
  "Infrastructure",
  "Turnkey Projects"
] as const;

const ProjectEnquiry = () => {
  const [selectedType, setSelectedType] = useState<string>("Residential");

  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#1a3c6b]">
        Project Enquiry
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
      </h2>

      {/* Property Type Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {propertyTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-6 py-3 rounded-md transition-colors ${
              selectedType === type
                ? "bg-[#1a3c6b] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Type
            </label>
            <Select defaultValue={selectedType.toLowerCase()}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type.toLowerCase()} value={type.toLowerCase()}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Built-up Area (sq.ft)
            </label>
            <input
              type="text"
              placeholder="e.g. 2000"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Floors
            </label>
            <input
              type="number"
              min="1"
              placeholder="1"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="City, State"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range (₹)
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-50l">₹0 - ₹50 Lakhs</SelectItem>
                <SelectItem value="50l-1cr">₹50 Lakhs - ₹1 Crore</SelectItem>
                <SelectItem value="1cr-5cr">₹1 Crore - ₹5 Crore</SelectItem>
                <SelectItem value="5cr-10cr">₹5 Crore - ₹10 Crore</SelectItem>
                <SelectItem value="10cr+">₹10 Crore+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Requirements
          </label>
          <textarea
            placeholder="Any specific requirements or details..."
            rows={4}
            className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <Button className="bg-[#e73d2a] hover:bg-[#d13324] text-white px-8 py-2 rounded">
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectEnquiry;
