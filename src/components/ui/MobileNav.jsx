"use client";
import { routeLinks } from "@/data/data";
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
            className="text-white shrink-0 min-w-[150px] min-h-[15px]"
          />
        </a>
        <div
          className="fixed w-fit  nav-svg lg:hidden mr-5"
          onClick={() => setNavOpen(!navOpen)}
        >
          <Image src="svgs/close.svg" alt="close" width={40} height={40} />
        </div>
      </div>

      {routeLinks.map((link) => (
        <a
          href={`${link.url}`}
          className=" mob-nav capitalize"
          key={link.label}
        >
          {link.label}
        </a>
      ))}
      <a className="mob-nav capitalize" href="/contact">
        contact us
      </a>
    </div>
  );
};

export default MobileNav;
