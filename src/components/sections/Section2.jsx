import React from "react";
import ScrollAnimation from "../ui/gsapScroller";
import { scrollData } from "@/data/data";

const ScrollSection = () => {
  return (
    <div className="min-h-fit flex  items-center gradient-tb">
      <div className="h-fit w-full px-8 large-screen-padding">
        <ScrollAnimation scrollData={scrollData} />
      </div>
    </div>
  );
};

export default ScrollSection;
