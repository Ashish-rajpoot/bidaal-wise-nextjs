import React from "react";
import ScrollAnimation from "../ui/gsapScroller";
import { scrollData } from "@/data/data";

const Section2 = () => {
  return (
    <div className="min-h-fit flex  items-center gradient-tb">
      <div className="h-fit w-full px-8">
        <ScrollAnimation scrollData={scrollData} />
      </div>
    </div>
  );
};

export default Section2;
