import Link from "next/link";
import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { auth, signOut } from "@/app/utils/auth";
import UserDropdown from "./UserDropdown";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className=" flex items-center justify-between py-5">
      <Link href={"/"} className="flex items-center gap-2">
        <BriefcaseBusiness className=" font-bold text-primary" />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Portal</span>
        </h1>
      </Link>
      <div className="hidden md:flex items-center gap-5">
        <ThemeToggle />
        <Link className={buttonVariants({ size: "lg" })} href="/post-job">
          Post Job
        </Link>
        {session?.user ? (
          <UserDropdown
            email={session?.user?.email as string}
            name={session?.user?.name as string}
            image={session?.user?.image as string}
          />
        ) : (
          <Link
            className={buttonVariants({ size: "lg", variant: "outline" })}
            href="/login"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
