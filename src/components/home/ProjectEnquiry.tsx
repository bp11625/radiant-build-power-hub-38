
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Heading from "@/components/ui/Heading";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  surfaceFinish: z.string().min(1, {
    message: "Please select a surface finish."
  }),
  message: z.string().optional(),
});

const ProjectEnquiry = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      surfaceFinish: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
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
    
    // Show success message
    toast({
      title: "Form submitted",
      description: "We will contact you soon!",
    });
    
    form.reset();
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Heading title="Project Enquiry" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg h-full">
                  <h3 className="text-xl font-semibold mb-4">Surface Finish</h3>
                  <FormField
                    control={form.control}
                    name="surfaceFinish"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Select finish</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="smooth" id="smooth" />
                              <label htmlFor="smooth">Smooth</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="rough" id="rough" />
                              <label htmlFor="rough">Rough</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="polished" id="polished" />
                              <label htmlFor="polished">Polished</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="matte" id="matte" />
                              <label htmlFor="matte">Matte</label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" type="email" {...field} />
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
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" type="tel" {...field} />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your project"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="bg-[#1a3c6b] hover:bg-blue-800">Submit</Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ProjectEnquiry;
