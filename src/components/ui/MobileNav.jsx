"use client";
import Image from "next/image";

const MobileNav = ({ navOpen, setNavOpen }) => {
 
  return (
    <div className="absolute top-0 bg-gradient-to-b left-0 right-0 h-screen flex justify-start items-center flex-col z-20 space-y-1 overflow-y-auto">
      <div className="py-10 justify-between items-center flex z-10">
        <a className="mob-img" href="/product">
          <Image
            src="/bidaal.svg"
            alt="logo"
            width={150}
            height={150}
            className="text-white"
          />
        </a>
        <div
          className="fixed w-fit  nav-svg lg:hidden mr-5"
          onClick={() => setNavOpen(!navOpen)}
        >
          <Image src="svgs/close.svg" alt="close" width={40} height={40} />
        </div>
      </div>

      <a className="mob-nav" href="/">
        product
      </a>

      <a className="mob-nav" href="/about">
        Solution
      </a>

      <a className="mob-nav" href="/contact">
        resources
      </a>

      <a className="mob-nav" href="/contact">
        company
      </a>

      <a className="mob-nav" href="/contact">
        contact us
      </a>
    </div>
  );
};

export default MobileNav;
