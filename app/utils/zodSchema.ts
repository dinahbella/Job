import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(3, "Company name must be at least 3 characters long"),
  location: z.string().min(3, "Location must be defined"),
  description: z
    .string()
    .min(10, "Please provide some information about your Company"),
  logo: z.string().min(1, "Please upload a logo"),
  website: z.string().url("Please provide a valid URL"),
  xAccount: z.string().optional(),
});
