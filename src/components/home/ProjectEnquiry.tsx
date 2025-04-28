import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Construction, Sun, Power, Building } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
});

const fabricationSchema = contactSchema.extend({
  structure: z.string().min(1, "Structure type is required"),
  material: z.string().min(1, "Material grade is required"),
  dimensions: z.string().min(1, "Dimensions are required"),
  quantity: z.string().min(1, "Quantity is required"),
  finish: z.string().min(1, "Surface finish is required"),
  delivery_timeline: z.string().min(1, "Delivery timeline is required"),
  notes: z.string().optional(),
});

const civilSchema = contactSchema.extend({
  foundation: z.string().min(1, "Foundation type is required"),
  area: z.string().min(1, "Site area is required"),
  soil: z.string().min(1, "Soil type is required"),
  construction_type: z.string().min(1, "Construction type is required"),
  timeline: z.string().min(1, "Timeline is required"),
  budget_range: z.string().min(1, "Budget range is required"),
  notes: z.string().optional(),
});

const solarSchema = contactSchema.extend({
  capacity: z.string().min(1, "System capacity is required"),
  mounting: z.string().min(1, "Mounting type is required"),
  modules: z.string().min(1, "Number of modules is required"),
  inverter_type: z.string().min(1, "Inverter type is required"),
  battery_storage: z.string().min(1, "Battery storage required?"),
  site_location: z.string().min(1, "Site location is required"),
  notes: z.string().optional(),
});

const infrastructureSchema = contactSchema.extend({
  project_type: z.string().min(1, "Project type is required"),
  area: z.string().min(1, "Area is required"),
  budget: z.string().min(1, "Budget is required"),
  notes: z.string().optional(),
});

const transmissionSchema = contactSchema.extend({
  length: z.string().min(1, "Line length is required"),
  voltage: z.string().min(1, "Voltage level is required"),
  tower_type: z.string().min(1, "Tower type is required"),
  notes: z.string().optional(),
});

const turnkeySchema = contactSchema.extend({
  scope: z.string().min(1, "Project scope is required"),
  location: z.string().min(1, "Location is required"),
  timeline: z.string().min(1, "Timeline is required"),
  notes: z.string().optional(),
});

const ProjectEnquiry = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("fabrication");
  const [isLoading, setIsLoading] = useState(false);
  
  const getFormSchema = () => {
    switch (activeTab) {
      case "fabrication": return fabricationSchema;
      case "civil": return civilSchema;
      case "solar": return solarSchema;
      case "infrastructure": return infrastructureSchema;
      case "transmission": return transmissionSchema;
      case "turnkey": return turnkeySchema;
      default: return fabricationSchema;
    }
  };

  const form = useForm({
    resolver: zodResolver(getFormSchema()),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      structure: "",
      material: "",
      dimensions: "",
      quantity: "",
      finish: "",
      delivery_timeline: "",
      foundation: "",
      area: "",
      soil: "",
      construction_type: "",
      timeline: "",
      budget_range: "",
      capacity: "",
      mounting: "",
      modules: "",
      inverter_type: "",
      battery_storage: "",
      site_location: "",
      project_type: "",
      budget: "",
      length: "",
      voltage: "",
      tower_type: "",
      scope: "",
      location: "",
      notes: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    console.log("Form data:", data);
    console.log("Active tab:", activeTab);
    
    try {
      const response = await fetch("https://formsubmit.co/bhanuprakash00045@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: activeTab,
          ...data
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Enquiry Submitted",
          description: "We'll get back to you shortly.",
        });
        form.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    form.clearErrors();
  };

  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#1a3c6b]">
        Project Enquiry
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
      </h2>

      <Tabs defaultValue="fabrication" className="w-full max-w-5xl mx-auto" onValueChange={handleTabChange}>
        <TabsList className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-2 w-full">
          <TabsTrigger value="fabrication" className="flex gap-1 items-center">
            <Construction className="w-4 h-4" />
            <span className="hidden sm:inline">Steel</span>
          </TabsTrigger>
          <TabsTrigger value="civil" className="flex gap-1 items-center">
            <Building className="w-4 h-4" />
            <span className="hidden sm:inline">Civil</span>
          </TabsTrigger>
          <TabsTrigger value="solar" className="flex gap-1 items-center">
            <Sun className="w-4 h-4" />
            <span className="hidden sm:inline">Solar</span>
          </TabsTrigger>
          <TabsTrigger value="infrastructure" className="flex gap-1 items-center">
            <Building className="w-4 h-4" />
            <span className="hidden sm:inline">Infra</span>
          </TabsTrigger>
          <TabsTrigger value="transmission" className="flex gap-1 items-center">
            <Power className="w-4 h-4" />
            <span className="hidden sm:inline">Trans</span>
          </TabsTrigger>
          <TabsTrigger value="turnkey" className="flex gap-1 items-center">
            <Building className="w-4 h-4" />
            <span className="hidden sm:inline">Turn</span>
          </TabsTrigger>
        </TabsList>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-lg mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
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
                        <Input type="email" placeholder="your.email@example.com" {...field} />
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
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <TabsContent value="fabrication">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="structure"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Structure Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="monopoles">Monopoles</SelectItem>
                          <SelectItem value="angular">Angular Frames</SelectItem>
                          <SelectItem value="custom">Custom Weldments</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="material"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Material Grade</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose grade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ss304">SS 304</SelectItem>
                          <SelectItem value="ms-a">MS Grade A</SelectItem>
                          <SelectItem value="galvanized">Galvanized Steel</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dimensions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dimensions (L×W×H in mm)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 2000×500×300" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="finish"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Surface Finish</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select finish type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="galvanized">Hot-dip Galvanized</SelectItem>
                          <SelectItem value="painted">Painted</SelectItem>
                          <SelectItem value="powder-coated">Powder Coated</SelectItem>
                          <SelectItem value="raw">Raw Steel</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="delivery_timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Timeline</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                          <SelectItem value="normal">Normal (3-4 weeks)</SelectItem>
                          <SelectItem value="relaxed">Relaxed (5-6 weeks)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any specific requirements..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>

            <TabsContent value="civil">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="foundation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Foundation Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="pile">Pile Foundation</SelectItem>
                          <SelectItem value="raft">Raft Foundation</SelectItem>
                          <SelectItem value="pad">Pad Foundation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Area (m²)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 1500" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="soil"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Soil Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select soil" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="clay">Clay</SelectItem>
                          <SelectItem value="sandy">Sandy</SelectItem>
                          <SelectItem value="rocky">Rocky</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="construction_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Construction Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Timeline</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                          <SelectItem value="normal">Normal (3-4 weeks)</SelectItem>
                          <SelectItem value="relaxed">Relaxed (5-6 weeks)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget_range"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="range1">Under ₹50 Lakhs</SelectItem>
                          <SelectItem value="range2">₹50 Lakhs - 1 Crore</SelectItem>
                          <SelectItem value="range3">₹1 Crore - 5 Crore</SelectItem>
                          <SelectItem value="range4">Above ₹5 Crore</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any specific requirements..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>

            <TabsContent value="solar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="capacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>System Capacity (kW)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mounting"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mounting Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="fixed">Fixed Tilt</SelectItem>
                          <SelectItem value="seasonal">Seasonal Tilt</SelectItem>
                          <SelectItem value="tracking">Tracking System</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="modules"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel># of Modules</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 200" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="inverter_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inverter Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="string">String Inverter</SelectItem>
                          <SelectItem value="central">Central Inverter</SelectItem>
                          <SelectItem value="micro">Microinverter</SelectItem>
                          <SelectItem value="hybrid">Hybrid Inverter</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="battery_storage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Battery Storage</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="yes">Yes, Required</SelectItem>
                          <SelectItem value="no">No, Grid-tied Only</SelectItem>
                          <SelectItem value="future">Plan for Future</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="site_location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site Location</FormLabel>
                      <FormControl>
                        <Input placeholder="City, State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any specific requirements..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>

            <TabsContent value="infrastructure">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="project_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="shed">Industrial Shed</SelectItem>
                          <SelectItem value="road">Road & Railing</SelectItem>
                          <SelectItem value="lightning">Lightning Poles</SelectItem>
                          <SelectItem value="peb">Pre-Engineered Building</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area (m²)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 5000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Budget (₹)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. ₹10,00,000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any specific requirements..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>

            <TabsContent value="transmission">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="length"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Line Length (km)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="voltage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Voltage Level (kV)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 220" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tower_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tower Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="lattice">Lattice Tower</SelectItem>
                          <SelectItem value="monopole">Monopole</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any specific requirements..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>

            <TabsContent value="turnkey">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="scope"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Scope</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Solar + Civil + Electrical" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="City, State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Timeline (months)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any specific requirements..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TabsContent>

            <div className="flex justify-center mt-6">
              <Button 
                type="submit" 
                className="bg-[#e73d2a] hover:bg-[#d13324] w-full md:w-auto"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Enquiry"}
              </Button>
            </div>
          </form>
        </Form>
      </Tabs>
    </div>
  );
};

export default ProjectEnquiry;
