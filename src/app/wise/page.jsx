"use client";
import ScrollSection from "@/components/sections/faq/ScrollSection";
import Faq from "@/components/sections/faq/Faq";
import NewScroll from "@/components/sections/newScroll";
import Section2 from "@/components/sections/Section2";
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
    <div className="overflow-hidden">
      <Hero />
      <Banner />
      {/* <Section2 /> */}
      {/* <NewScroll /> */}
      <ScrollSection />
      <Stories />
      <Faq />
    </div>
  );
};

export default Wise;
