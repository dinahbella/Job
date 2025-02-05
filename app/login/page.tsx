import LoginForm from "@/components/form/LoginForm";
import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6 ">
        <Link href={"/"} className="flex items-center gap-2 justify-center">
          <BriefcaseBusiness className=" font-bold text-primary" />
          <h1 className="text-2xl font-bold">
            Job<span className="text-primary">Portal</span>
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
