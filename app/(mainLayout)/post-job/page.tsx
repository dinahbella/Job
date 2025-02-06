import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import AjLogo from "@/public/arcjet.jpg";
import InLogo from "@/public/inngest-locale.png";
import Star from "@/public/star.png";
import Snap from "@/public/snap.png";
import Ford from "@/public/ford.png";
import Gmail from "@/public/gmail.png";
import Image from "next/image";
import CreateJobForm from "@/components/form/CreateJobForm";

const companies = [
  { id: 0, name: "Arcjet", logo: AjLogo },
  { id: 1, name: "Inngest", logo: InLogo },
  { id: 2, name: "StarBucks", logo: Star },
  { id: 3, name: "SnapChat", logo: Snap },
  { id: 4, name: "Ford", logo: Ford },
  { id: 5, name: "Gmail", logo: Gmail },
];

const testimonials = [
  {
    quote:
      "We found our ideal candidate within 48 hours of posting. The quality of applicants was exceptional!",
    author: "- Mr. Babatunde",
    company: "Gocity",
  },
  {
    quote:
      "The platform made hiring remote talent incredibly simple. Highly recommended!",
    author: "- Dinah Blessing",
    company: "SoapCorp",
  },
  {
    quote:
      "We've consistently found high-quality candidates here. It's our go-to platform for all our hiring needs.",
    author: " - Emily Rodriguez",
    company: "InnovateNow",
  },
];

const stats = [
  { id: 0, value: "10k+", label: "Monthly active job seekers" },
  { id: 1, value: "48h", label: "Average time to hire" },
  { id: 2, value: "95%", label: "Employer satisfaction rate" },
  { id: 3, value: "500+", label: "Companies hiring monthly" },
];
const PostJob = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
      <CreateJobForm />
      <div className=" col-span-1">
        <Card className="">
          <CardHeader>
            <CardTitle className="text-xl font-medium">
              Trusted by Company owners
            </CardTitle>
            <CardDescription>
              Join thousands of company to hire great talents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 ">
              {companies.map((company) => (
                <div key={company.id}>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={80}
                    className="rounded-lg opacity-75 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="border-l-2 border-primary pl-4"
                >
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <footer className="mt-2 text-sm font-medium">
                    {testimonial.author} - {testimonial.company}
                  </footer>
                </blockquote>
              ))}
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {stats.map((stat) => (
                <div key={stat.id} className="rounded-lg bg-muted p-4">
                  <h4 className="text-3xl font-medium">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostJob;
