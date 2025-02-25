"use client";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import HorizontalScroll from "@/components/HorizontalScroll";
import Nav from "@/components/Nav";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Stories from "@/components/Stories";
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
        <Section1 />
      </div>
      <Banner />
      <Section2 />
      <Stories />
      <Faq />
    </div>
  );
}
