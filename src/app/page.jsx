"use client";
import Banner from "@/components/Banner";
import Faq from "@/components/faq/Faq";
import Hero from "@/components/Hero";
import Section2 from "@/components/Section2";
import Stories from "@/components/Stories";
import Nav from "@/components/ui/Nav";
import { useEffect, useState } from "react";

export default function Home() {
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
      <Section2 />
      <Stories />
      <Faq />
    </div>
  );
}
