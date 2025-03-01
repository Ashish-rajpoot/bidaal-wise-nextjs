import React from "react";
import SingleCard from "../ui/SingleCard";
import CeoBanner from "../Stories/CeoBanner";

const Stories = () => {
  return (
    <div className="h-fit bg-section2 ">
      <div className=" flex justify-between py-20 items-center  flex-col space-y-10 mx-auto px-5 lg-device">
        <h1 className="h1 text-center"> How our customers have benefited</h1>
        <div className="flex justify-between items-center w-full max-md:flex-col max-md:space-y-5 gap-x-2 lg:gap-x-20">
          {Array.from({ length: 3 }).map((_, index) => (
            <SingleCard key={index} image={`images/ai${index + 1}.jpg`} />
          ))}
        </div>
        <CeoBanner />
        <p className="text-darkGreen text-2xl font-bold flex flex-col justify-center items-center max-md:text-center">
          Read More About our client Testimonials
          <span>
            <img
              src="svgs/chevron_right.svg"
              alt="arrow"
              className="text-darkGreen transform rotate-90 animate-chevronArrow"
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Stories;
