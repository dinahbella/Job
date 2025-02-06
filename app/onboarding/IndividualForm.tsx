import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
import { createIndividual } from "../actions";
import { Textarea } from "@/components/ui/textarea";
import { individualSchema } from "../utils/zodSchema";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { UploadDropzone } from "@/components/general/UploadThingExport";
import PdfImage from "@/public/pdf.png";

const IndividualForm = () => {
  const form = useForm<z.infer<typeof individualSchema>>({
    resolver: zodResolver(individualSchema),
    defaultValues: {
      name: "",
      description: "",
      resume: "",
    },
  });
  const [pending, setPending] = useState(false);
  async function onSubmit(data: z.infer<typeof individualSchema>) {
    try {
      setPending(true);
      await createIndividual(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.log(error.message);
      }
    } finally {
      setPending(false);
    }
  }
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={(field) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={(field) => (
            <FormItem>
              <FormLabel>Short Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your yourself... "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="resume"
          render={(field) => (
            <FormItem>
              <FormLabel>Resume (PDF)</FormLabel>
              <FormControl>
                <div>
                  {field.field.value ? (
                    <div className="relative w-fit">
                      <Image
                        src={PdfImage}
                        alt="pdf resume image"
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
                      endpoint="resumeUploader"
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
  );
};

export default IndividualForm;
