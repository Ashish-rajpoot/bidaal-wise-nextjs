"use client";
import Image from "next/image";
import LinkButton from "./Button";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { routeLinks } from "@/data/data";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="nav ">
      <Image
        src="/bidaal.svg"
        alt="logo"
        width={150}
        height={150}
        className="text-white shrink-0 min-w-[150px] min-h-[15px]"
      />
      <ul className="flex items-center justify-evenly  max-md:flex-col max-md:gap-y-2 gap-x-14 bg-navBtnClr py-2 px-5 rounded-lg font-semibold max-lg:hidden">
        {routeLinks.map((link) => (
          <li key={link.label}>
            <a href={`${link.url}`} className="capitalize">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className=" max-lg:hidden">
        <LinkButton>contact us</LinkButton>
      </div>

      <div
        className="absolute w-fit nav-svg mr-5 lg:hidden"
        onClick={() => setNavOpen(!navOpen)}
      >
        <Image src="svgs/menu.svg" alt="menu" width={40} height={40} />
      </div>
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-all duration-500 ease-in-out transform ${
          navOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <MobileNav setNavOpen={setNavOpen} navOpen={navOpen} />
      </div>

      {/* {navOpen && (
        <div
          className={`lg:hidden ${
            navOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <MobileNav setNavOpen={setNavOpen} navOpen={navOpen} />
        </div>
      )} */}
    </div>
  );
};

export default Nav;
