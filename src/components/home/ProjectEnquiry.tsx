
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

// Define validation schemas for each form type
const fabricationSchema = z.object({
  structure: z.string().min(1, "Structure type is required"),
  material: z.string().min(1, "Material grade is required"),
  dimensions: z.string().min(1, "Dimensions are required"),
  quantity: z.string().min(1, "Quantity is required"),
  notes: z.string().optional(),
});

const civilSchema = z.object({
  foundation: z.string().min(1, "Foundation type is required"),
  area: z.string().min(1, "Site area is required"),
  soil: z.string().min(1, "Soil type is required"),
  notes: z.string().optional(),
});

const solarSchema = z.object({
  capacity: z.string().min(1, "System capacity is required"),
  mounting: z.string().min(1, "Mounting type is required"),
  modules: z.string().min(1, "Number of modules is required"),
  notes: z.string().optional(),
});

const infrastructureSchema = z.object({
  project_type: z.string().min(1, "Project type is required"),
  area: z.string().min(1, "Area is required"),
  budget: z.string().min(1, "Budget is required"),
  notes: z.string().optional(),
});

const transmissionSchema = z.object({
  length: z.string().min(1, "Line length is required"),
  voltage: z.string().min(1, "Voltage level is required"),
  tower_type: z.string().min(1, "Tower type is required"),
  notes: z.string().optional(),
});

const turnkeySchema = z.object({
  scope: z.string().min(1, "Project scope is required"),
  location: z.string().min(1, "Location is required"),
  timeline: z.string().min(1, "Timeline is required"),
  notes: z.string().optional(),
});

const ProjectEnquiry = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("fabrication");
  
  // Get the appropriate schema based on active tab
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
      // Default values for all fields
      structure: "",
      material: "",
      dimensions: "",
      quantity: "",
      foundation: "",
      area: "",
      soil: "",
      capacity: "",
      mounting: "",
      modules: "",
      project_type: "",
      budget: "",
      length: "",
      voltage: "",
      tower_type: "",
      scope: "",
      location: "",
      timeline: "",
      notes: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    console.log("Active tab:", activeTab);
    toast({
      title: "Enquiry Submitted",
      description: "We'll get back to you shortly.",
    });
    form.reset();
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
        <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <TabsTrigger value="fabrication" className="flex gap-2 items-center">
            <Construction className="w-4 h-4" />
            <span className="hidden md:inline">Steel Fabrication</span>
            <span className="md:hidden">Fabrication</span>
          </TabsTrigger>
          <TabsTrigger value="civil" className="flex gap-2 items-center">
            <Building className="w-4 h-4" />
            <span className="hidden md:inline">Civil Foundations</span>
            <span className="md:hidden">Civil</span>
          </TabsTrigger>
          <TabsTrigger value="solar" className="flex gap-2 items-center">
            <Sun className="w-4 h-4" />
            <span className="hidden md:inline">Solar Erection</span>
            <span className="md:hidden">Solar</span>
          </TabsTrigger>
          <TabsTrigger value="infrastructure" className="flex gap-2 items-center">
            <Building className="w-4 h-4" />
            <span className="hidden md:inline">Infrastructure</span>
            <span className="md:hidden">Infra</span>
          </TabsTrigger>
          <TabsTrigger value="transmission" className="flex gap-2 items-center">
            <Power className="w-4 h-4" />
            <span className="hidden md:inline">Transmission</span>
            <span className="md:hidden">Trans</span>
          </TabsTrigger>
          <TabsTrigger value="turnkey" className="flex gap-2 items-center">
            <Building className="w-4 h-4" />
            <span className="hidden md:inline">Turnkey Projects</span>
            <span className="md:hidden">Turnkey</span>
          </TabsTrigger>
        </TabsList>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              <Button type="submit" className="bg-[#e73d2a] hover:bg-[#d13324] w-full md:w-auto">
                Submit Enquiry
              </Button>
            </div>
          </form>
        </Form>
      </Tabs>
    </div>
  );
};

export default ProjectEnquiry;
