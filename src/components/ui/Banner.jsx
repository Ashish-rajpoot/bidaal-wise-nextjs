import React from "react";

const Banner = () => {
  return (
    // <img src="section2-banner.png" alt="banner" className='w-full ' />
    <div className="flex justify-between max-lg:justify-center items-center max-lg:flex-col gap-y-5 bg-section2 py-10 mob-def-pad">

      <img src="logos/mcl1.png" alt="mcl" className="w-[200px]"/>
      <img src="logos/jsw.jpg" alt="mcl" className="w-[200px]"/>
      <img src="logos/tata-steel.png" alt="mcl" className="w-[200px]" />
      <img src="logos/jindal.jpg" alt="mcl" className="w-[200px]" />
      <img src="logos/sain.svg" alt="mcl" className="w-[200px]" />
    </div>
  );
};

export default Banner;
