"use client";
import Faq from "@/components/sections/faq/Faq";
import ScrollSection from "@/components/sections/Section2";
import Stories from "@/components/sections/Stories";
import Banner from "@/components/ui/Banner";
import Hero from "@/components/ui/Hero";
import { useEffect, useState } from "react";

const Wise = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  });
  if (!isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Hero />
      <Banner />
      <ScrollSection />
      <Stories />
      <Faq />
    </div>
  );
};

export default Wise;
