
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import Heading from "@/components/ui/Heading";
import { projectEnquirySchema, type ProjectEnquiryFormData } from "./schema";
import SurfaceFinishSelect from "./SurfaceFinishSelect";
import ContactInformation from "./ContactInformation";

const ProjectEnquiry = () => {
  const { toast } = useToast();
  const form = useForm<ProjectEnquiryFormData>({
    resolver: zodResolver(projectEnquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      surfaceFinish: "",
      message: "",
    },
  });

  function onSubmit(values: ProjectEnquiryFormData) {
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
                <SurfaceFinishSelect form={form} />
              </div>
              <div className="lg:col-span-2">
                <ContactInformation form={form} />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ProjectEnquiry;
