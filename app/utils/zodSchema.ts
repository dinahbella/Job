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

export const individualSchema = z.object({
  name: z.string().min(3, "Company name must be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Please provide some information about your Yourself"),
  resume: z.string().min(1, "Please upload your resume"),
});

export const jobSchema = z.object({
  jobTitle: z.string().min(3, "Title must be at least 3 characters long"),
  employmentType: z.string().min(3, "Employment type must be defined"),
  location: z.string().min(3, "Location must be defined"),
  salaryFrom: z.number().min(1, "Salary from is required"),
  salaryTo: z.number().min(1, "Salary to is required"),
  jobDescription: z.string().min(3, "Job description is required"),
  listingDuration: z.number().min(1, "Listing duration is required"),

  benefits: z.array(z.string()).min(3, "Please select atleast one benefits"),
  companyName: z.string().min(3, "Company name is required"),
  companyLocation: z.string().min(3, "Company location is required"),
  companyWebsite: z.string().url("Please provide a valid URL"),
  companyLogo: z.string().min(1, "Please upload a logo"),
  companyDescription: z
    .string()
    .min(10, "Please provide some information about your Company"),
  companyXaccount: z.string().optional(),
});
