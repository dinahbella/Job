"use client";

import React, { useState } from "react";
import UserTypeForm from "./UserTypeForm";
import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import CompanyForm from "./CompanyForm";
import IndividualForm from "./IndividualForm";

type UserSelectionType = "company" | "individual" | null;

const OnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);

  function handleUserTypeSelection(type: UserSelectionType) {
    setUserType(type);
    setStep(2);
  }

  function renderStep() {
    switch (step) {
      case 1:
        return <UserTypeForm onSelect={handleUserTypeSelection} />;
      case 2:
        return userType === "company" ? <CompanyForm /> : <IndividualForm />;
      default:
        return null;
    }
  }

  return (
    <div>
      <div className=" flex items-center gap-3 mb-7 justify-center">
        <Link href={"/"} className="flex items-center gap-2 justify-center">
          <BriefcaseBusiness className=" font-bold text-primary size-6" />
          <h1 className="text-4xl font-bold">
            Job<span className="text-primary">Portal</span>
          </h1>
        </Link>
      </div>
      <Card className="max-w lg w-full">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
