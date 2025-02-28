"use client"
import Faq from "@/components/sections/faq/Faq";
import ScrollSection from "@/components/sections/Section2";
import Stories from "@/components/sections/Stories";
import Banner from "@/components/ui/Banner";
import Hero from "@/components/ui/Hero";
import Nav from "@/components/ui/Nav";
import { useEffect, useState } from "react";

const page = () => {
   const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setIsLoading(false);
    }, []);
    if (isLoading) {
      return <div>Loading</div>;
    }
  return (
    <div className="overflow-hidden mx-auto">
      <div className="min-h-screen">
        <div className="w-screen h-full relative">
          <Nav />
        </div>
        <Hero />
      </div>
      <Banner />
      <ScrollSection />
      <Stories />
      <Faq />
    </div>
  );
};

export default page;
