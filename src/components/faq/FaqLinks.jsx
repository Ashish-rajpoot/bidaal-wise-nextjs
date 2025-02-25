import React from "react";
import FaqLink from "./FaqLink";
import { faqLinks } from "@/data/data";

const FaqLinks = () => {
  return (
    <div className="flex justify-evenly w-full">
      {faqLinks.map((link, index) => (
        <FaqLink key={index} link={link} />
      ))}
    </div>
  );
};

export default FaqLinks;
