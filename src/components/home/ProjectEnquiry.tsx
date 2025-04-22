
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
import { Construction, Sun, Power, Buildings, Building } from "lucide-react";

const ProjectEnquiry = () => {
  const { toast } = useToast();
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Enquiry Submitted",
      description: "We'll get back to you shortly.",
    });
  };

  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#1a3c6b]">
        Project Enquiry
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
      </h2>

      <Tabs defaultValue="fabrication" className="w-full max-w-5xl mx-auto">
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
            <Buildings className="w-4 h-4" />
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
                  <FormItem>
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any specific requirements..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center mt-6">
                <Button type="submit" className="bg-[#e73d2a] hover:bg-[#d13324]">
                  Submit Enquiry
                </Button>
              </div>
            </TabsContent>

            {/* Similar structure for other tabs */}
            <TabsContent value="civil">
              {/* Civil foundations form fields */}
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
                {/* Add other civil form fields similarly */}
              </div>
            </TabsContent>

            <TabsContent value="solar">
              {/* Solar erection form fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="capacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>System Capacity (kW)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g. 50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Add other solar form fields similarly */}
              </div>
            </TabsContent>

            {/* Add remaining tab contents with similar structure */}
          </form>
        </Form>
      </Tabs>
    </div>
  );
};

export default ProjectEnquiry;

