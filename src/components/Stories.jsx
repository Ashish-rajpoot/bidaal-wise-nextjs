import React from "react";
import SingleCard from "./SingleCard";
import CeoBanner from "./CeoBanner";

const Stories = () => {
  return (
    <div className="h-fit bg-section2 ">
      <div className="max-w-[75vw] flex justify-between py-20 items-center  flex-col space-y-10 mx-auto ">
        <h1 className="h1"> How our customers have benefited</h1>
        <div className="flex justify-between items-center w-full max-md:flex-col max-md:space-y-5 gap-y-5 ">
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
        <CeoBanner />
        <p className="text-darkGreen text-[1.5rem] font-bold">Read More About Testimonials</p>
      </div>
    </div>
  );
};

export default Stories;
