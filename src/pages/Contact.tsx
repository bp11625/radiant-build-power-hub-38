
import React from "react";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Heading from "@/components/ui/Heading";

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [webhookUrl, setWebhookUrl] = React.useState("YOUR_ZAPIER_WEBHOOK_URL"); // Replace with your Zapier webhook URL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MainNavbar />
      <main className="container mx-auto px-4 py-8">
        <Heading title="Contact Us" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <p className="text-gray-600">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="firstName" placeholder="First Name" className="w-full" required />
                <Input name="lastName" placeholder="Last Name" className="w-full" required />
              </div>
              <Input name="email" placeholder="Email" type="email" className="w-full" required />
              <Input name="phone" placeholder="Phone" type="tel" className="w-full" required />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
              <Button 
                type="submit" 
                className="bg-red-500 hover:bg-red-600 text-white w-full md:w-auto px-8"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-800">Address</h3>
                <p className="text-gray-600">123 Construction Way, Building City, State 12345</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800">Email</h3>
                <p className="text-gray-600">info@ratanconstruction.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800">Working Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8am - 5pm</p>
                <p className="text-gray-600">Saturday: 9am - 1pm</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
            <div className="h-64 bg-gray-300 rounded-lg">
              {/* Map will go here */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map Location
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
