
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const GetInTouch = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you soon!",
    });
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#1a3c6b]">Contact Us</h2>
        <div className="w-12 h-1 bg-red-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h3>
            <p className="text-gray-600 mb-8">
              Have questions or want to discuss your construction project? Contact us today and our team will be happy to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <MapPin className="text-[#1a3c6b] h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-gray-700">Address</h4>
                  <p className="text-gray-600">123 Construction Avenue, Industrial Area, City - 110001</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Phone className="text-[#1a3c6b] h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-gray-700">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="text-[#1a3c6b] h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-gray-700">Email</h4>
                  <p className="text-gray-600">info@ratanconstructions.com</p>
                </div>
              </div>
            </div>

            <Button 
              className="mt-8 bg-red-500 hover:bg-red-600 text-white"
            >
              Contact Details
            </Button>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="w-full"
              />
              <Textarea
                placeholder="Your Message"
                className="w-full min-h-[150px]"
              />
              <Button 
                type="submit"
                className="w-full md:w-auto bg-[#1a3c6b] hover:bg-blue-800 text-white"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
