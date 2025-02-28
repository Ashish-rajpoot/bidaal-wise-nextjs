"use client";
import React from "react";
import FaqLink from "./FaqLink";
import { faqLinks } from "@/data/data";

const FaqLinks = ({ selectedNav, setSelectedNav }) => {

  return (
    <div className="flex justify-between w-full text-slate-400 max-md:flex-col items-center gap-8">
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
