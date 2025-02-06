import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { companySchema } from "../utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryList } from "../utils/countriesList";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/components/general/UploadThingExport";
import { createCompany } from "../actions";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { XIcon } from "lucide-react";

const CompanyForm = () => {
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      location: "",
      description: "",
      logo: "",
      website: "",
      xAccount: "",
    },
  });
  const [pending, setPending] = useState(false);
  async function onSubmit(data: z.infer<typeof companySchema>) {
    try {
      setPending(true);
      await createCompany(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.log(error.message);
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={(field) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={(field) => (
                <FormItem>
                  <FormLabel>Company Location</FormLabel>
                  <Select
                    onValueChange={field.field.onChange}
                    {...field.field}
                    defaultValue={field.field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Worldwide</SelectLabel>
                        <SelectItem value="Worldwide">
                          <span>🌎</span> <span>Worldwide / Remote</span>
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Location</SelectLabel>
                        {countryList.map((country) => (
                          <SelectItem value={country.name}>
                            <span>{country.flagEmoji}</span>
                            <span className="pl-4">{country.name}</span>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="website"
              render={(field) => (
                <FormItem>
                  <FormLabel>Company Website</FormLabel>
                  <FormControl>
                    <Input placeholder="https://yourcompany.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="xAccount"
              render={(field) => (
                <FormItem>
                  <FormLabel>X (Twitter) Account</FormLabel>
                  <FormControl>
                    <Input placeholder="@yourCompany" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={(field) => (
              <FormItem>
                <FormLabel>About</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your Company... "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="logo"
            render={(field) => (
              <FormItem>
                <FormLabel>Company Logo</FormLabel>
                <FormControl>
                  <div>
                    {field.field.value ? (
                      <div className="relative w-fit">
                        <Image
                          src={field.field.value}
                          alt="Company logo"
                          width={100}
                          height={100}
                          className="rounded-lg"
                        />
                        <Button
                          className="absolute -top-2 -right-2"
                          type="button"
                          variant="destructive"
                          size="icon"
                          onClick={() => {
                            field.field.onChange("");
                          }}
                        >
                          <XIcon />
                        </Button>
                      </div>
                    ) : (
                      <UploadDropzone
                        endpoint="imageUploader"
                        {...field}
                        onClientUploadComplete={(res) => {
                          field.field.onChange(res[0].url);
                        }}
                        onUploadError={(error: Error) => {
                          // Do something with the error.
                          alert(`ERROR! ${error.message}`);
                        }}
                        className="ut-button:bg-primary
                     ut-button:text-white 
                     ut-button:hover:bg-primary/90 
                     ut-label:text-muted-foreground ut-allowed-content:text-muted-foreground"
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Loading..." : "Continue"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CompanyForm;
