import React from "react";

const Section2 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col text-textWhite py-20 ">
      <div className="gradient-lr w-fit text-[3rem] font-bold px-[200px] rounded-lg py-3 max-md:w-fit max-md:text-sm max-md:px-24">
        W.I.S.E. in 3 Easy Steps
      </div>
      <div className="gradient-tb mt-20 text-[1.5rem] font-semibold w-screen flex justify-evenly items-center max-md:flex-col ">
        <div className="flex justify-center items-center flex-col font-normal text-[2rem] px-5 text-center">
          <p>Use our multi-utility measuring</p>
          <p> device to capture illumination </p>
          <p>value in your site</p>
        </div>
        <div className=" sec2-img-p right-40">
          <img src="image1.jpg" alt="image1" className=" sec2-img" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
