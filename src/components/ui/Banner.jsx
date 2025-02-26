import React from "react";

const Banner = () => {
  return (
    // <img src="section2-banner.png" alt="banner" className='w-full ' />
    <div className="flex justify-between items-center max-md:flex-col max-md:gap-y-3 p-4 bg-section2 min-w-fit">

      <img src="logos/mcl1.png" alt="mcl" className="w-[200px]"/>
      <img src="logos/jsw.jpg" alt="mcl" className="w-[200px]"/>
      <img src="logos/tata-steel.png" alt="mcl" className="w-[200px]" />
      <img src="logos/jindal.jpg" alt="mcl" className="w-[200px]" />
      <img src="logos/sain.svg" alt="mcl" className="w-[200px]" />
    </div>
  );
};

export default Banner;
