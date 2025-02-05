import Link from "next/link";
import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-5">
      <Link href={"/"} className="flex items-center gap-2">
        <BriefcaseBusiness className=" font-bold text-primary" />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Portal</span>
        </h1>
      </Link>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
