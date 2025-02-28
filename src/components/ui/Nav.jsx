"use client";
import Image from "next/image";
import LinkButton from "./Button";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { routeLinks } from "@/data/data";
import Link from "next/link";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    // <div className="nav">
    <div className="bg-gradient-to-r from-darkGreen to-lightGreen text-textWhite uppercase sticky top-0 w-full z-20 flex items-center justify-between py-10 ">
      <div className="flex justify-between items-center w-screen mob-def-pad">
        <Link href={"/"}>
          <Image
            src="/bidaal.svg"
            alt="logo"
            width={150}
            height={150}
            className="text-white shrink-0 min-w-[150px] min-h-[15px]"
          />
        </Link>
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
          <LinkButton href="/contact" className={""}>contact us</LinkButton>
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
      </div>
    </div>
  );
};

export default Nav;
