
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";
import { ProjectEnquiryFormData } from "./schema";

interface SurfaceFinishSelectProps {
  form: UseFormReturn<ProjectEnquiryFormData>;
}

const SurfaceFinishSelect = ({ form }: SurfaceFinishSelectProps) => {
  return (
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
  );
};

export default SurfaceFinishSelect;
