import Image from "next/image";
import React from "react";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="sticky top-0  w-full z-10  flex justify-between items-center max-sm:flex-col  max-md:gap-y-4 uppercase px-20 py-10  bg-gradient-to-r from-darkGreen to-lightGreen text-textWhite">
      <Image src="/bidaal.svg" alt="logo" width={150} height={150} className="text-white"/>
      <ul className="flex items-center justify-between max-md:flex-col max-md:gap-y-2 gap-x-14 bg-navBtnClr py-2 px-5 rounded-lg font-semibold">
        <li>
          <a href="/">product</a>
        </li>
        <li>
          <a href="/about">Solution</a>
        </li>
        <li>
          <a href="/contact">resources</a>
        </li>
        <li>
          <a href="/contact">company</a>
        </li>
      </ul>
      <Button>contact us</Button>
    </div>
  );
};

export default Nav;
