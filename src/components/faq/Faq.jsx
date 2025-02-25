import React from "react";
import FaqLinks from "./FaqLinks";

const Faq = () => {
  return (
    <div className="min-h-screen gradient-tb text-white bg-transparent relative flex justify-center">
      <div className="flex justify-center items-center relative w-full">
        <img
          src="tharmal2.webp"
          alt="device"
          className="mix-blend-multiply faq-image absolute"
        />
      </div>
      <div className="absolute flex items-center flex-col w-full h-full space-y-10">
        {/* content goes here */}
        <div className="faq-h1">FAQ</div>
        <FaqLinks />
      </div>
    </div>
  );
};

export default Faq;
