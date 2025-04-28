
import * as z from "zod";

export const projectEnquirySchema = z.object({
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

export type ProjectEnquiryFormData = z.infer<typeof projectEnquirySchema>;
