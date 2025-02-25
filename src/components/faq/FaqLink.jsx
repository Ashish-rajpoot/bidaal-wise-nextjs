import Link from "next/link";
import React from "react";

const FaqLink = ({ link }) => {
  return <Link href={`${link.href}`} className="text-2xl ">{link.label} </Link>;
};

export default FaqLink;
