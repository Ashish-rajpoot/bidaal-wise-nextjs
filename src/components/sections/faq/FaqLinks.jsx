"use client";
import React, { useEffect, useState } from "react";
import FaqLink from "./FaqLink";
import { faqLinks } from "@/data/data";

const FaqLinks = ({ selectedNav, setSelectedNav }) => {
   const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setIsLoading(false);
    }, []);
    if (isLoading) {
      return <div>Loading</div>;
    }
  return (
    <div className="flex justify-evenly w-full text-slate-400 max-md:flex-col items-center gap-5">
      {faqLinks.map((link, index) => (
        <FaqLink
          key={index}
          link={link}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />
      ))}
    </div>
  );
};

export default FaqLinks;
