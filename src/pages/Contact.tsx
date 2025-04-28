
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import MainNavbar from "@/components/layout/MainNavbar";
import Footer from "@/components/about/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Heading from "@/components/ui/Heading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // Create a hidden form to submit to formsubmit.co
      const formElement = document.createElement("form");
      formElement.method = "POST";
      formElement.action = "https://formsubmit.co/bhanuprakash00045@gmail.com";
      formElement.target = "_blank";

      // Add form data
      Object.entries(values).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value?.toString() || "";
        formElement.appendChild(input);
      });

      // Submit the form
      document.body.appendChild(formElement);
      formElement.submit();
      document.body.removeChild(formElement);

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      
      form.reset();
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Phone" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          rows={5}
                          className="w-full p-3 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-red-500 hover:bg-red-600 text-white w-full md:w-auto px-8"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
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
