import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const LinkButton = ({ href = "/", children,className }) => {
  return (
    <Link
      href={href}
      className={cn("text-textWhite bg-bgBlue px-6 text-base py-2 font-semibold rounded-lg text-nav max-w-fit uppercase cursor-pointer text-nowrap",className)}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
