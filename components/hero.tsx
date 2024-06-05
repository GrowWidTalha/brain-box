"use client"
import React from "react";
import { Button } from "./ui/button";
import { SignedIn, SignOutButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

const Hero = () => {
  const { isSignedIn } = useAuth();
  return (
    <section className="mt-32 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="md:text-5xl text-3xl font-bold text-center">
          Your Second Brain in the
          <br /> Cloud with{" "}
          <span className="bg-gradient-to-r from-[#000092] to-[#FF00F3] inline-block text-transparent bg-clip-text">
            Brain Box
          </span>
        </h1>
        <p className="text-sm  text-center ">
          Organize, Optimize, and Access Your Knowledge <br className="flex md:hidden"  />Seamlessly.
        </p>
        <Button variant={"gradient"} size={"lg"} className="text-xl">
          {isSignedIn ? (
            <Link href={"/app"}>Dashboard</Link>

          ) : (
            <Link href={"/sign-in"}>Get Started</Link>

          )}
        </Button>
      </div>
    </section>
  );
};

export default Hero;