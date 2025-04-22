
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProjectEnquiry = () => {
  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Project Enquiry</h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="w-full sm:w-[calc(33%-12px)]">
            <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="renovation">Renovation</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                <SelectItem value="turnkey">Turnkey Projects</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full sm:w-[calc(33%-12px)]">
            <label className="block text-sm font-medium text-gray-700 mb-2">Built-up Area (sq.ft)</label>
            <input
              type="text"
              placeholder="e.g. 2000"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="w-full sm:w-[calc(33%-12px)]">
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Floors</label>
            <input
              type="number"
              min="1"
              placeholder="1"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="w-full sm:w-[calc(33%-12px)]">
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              placeholder="City, State"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="w-full sm:w-[calc(33%-12px)]">
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range ($)</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                <SelectItem value="1m+">$1,000,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Requirements</label>
          <textarea
            placeholder="Any specific requirements or details..."
            rows={4}
            className="w-full px-3 py-2 border rounded-md resize-none"
          />
        </div>
        <div className="text-center">
          <Button className="bg-blue-800 text-white hover:bg-blue-700">Get Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectEnquiry;
