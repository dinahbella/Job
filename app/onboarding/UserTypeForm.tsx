import { Button } from "@/components/ui/button";
import { Building, User2, UserRound } from "lucide-react";
import React from "react";

type UserSelectionType = "company" | "individual" | null;

interface UserSelectionTypeProps {
  onSelect: (type: UserSelectionType) => void;
}

const UserTypeForm = ({ onSelect }: UserSelectionTypeProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Welcome! Let's get Started</h2>
        <p className="text-muted-foreground ">Please select your user type:</p>
      </div>
      <div className="grid gap-4">
        <Button
          onClick={() => onSelect("company")}
          className="mt-2 w-full h-auto p-6 hover:bg-primary/10  items-center transition-all duration-300 border-2 hover:border-primary "
          variant="outline"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Building className="size-6 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="flex font-semibold text-lg">
              Company / Organization
            </h3>
            <p>Post jobs and find great talents</p>
          </div>
        </Button>
        <Button
          onClick={() => onSelect("individual")}
          className="mt-2 w-full h-auto p-6 hover:bg-primary/10  items-center transition-all duration-300 border-2 hover:border-primary "
          variant="outline"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <UserRound className="size-6 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="flex font-semibold text-lg">Job Seekers</h3>
            <p>Find Your Dream Job</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default UserTypeForm;
