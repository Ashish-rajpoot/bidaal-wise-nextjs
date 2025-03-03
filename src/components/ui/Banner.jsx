import React from "react";

const Banner = () => {
  return (
    // <img src="section2-banner.png" alt="banner" className='w-full ' />
    <div className="  bg-section2 ">
      <div className="lg-device flex justify-between max-lg:justify-center items-center max-lg:flex-col gap-y-5 py-24 mob-def-pad gap-x-5">
        <div className="w-fit min-w-[12.5rem]">
          <img src="logos/mcl1.png" alt="mcl" />
        </div>
        <div className="w-fit min-w-[12.5rem]">
          <img src="logos/jsw.jpg" alt="mcl" />
        </div>
        <div className="w-fit min-w-[12.5rem]">
          <img src="logos/tata-steel.png" alt="mcl" />
        </div>
        <div className="w-fit min-w-[12.5rem]">
          <img src="logos/jindal.jpg" alt="mcl" />
        </div>
        <div className="w-fit min-w-[12.5rem]">
          <img src="logos/saint-png.png" alt="mcl" className=""/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
