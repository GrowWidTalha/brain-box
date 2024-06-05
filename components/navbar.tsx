"use client";
import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { SignOutButton, useAuth, } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="w-full border-b border-[#B4A4A4]">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-5">
        <Logo />
        <div className="gap-4 flex items-center ">
          {!isSignedIn && (
            <Button
            asChild
            variant={"outline"}
            className="border-black border-2 hidden md:flex"
          >
            {!isSignedIn ? (
              <Link href={"/sign-in"}>sign in</Link>
            ) : (
              <SignOutButton />
            )}
          </Button>
          )}

          
          <Button asChild variant={"gradient"}>
            {isSignedIn ? (
              <Link href={"/app"}>Dashboard</Link>
            ) : (
              <Link href={"/sign-up"}>Get Started</Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
