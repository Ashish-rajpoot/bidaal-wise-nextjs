"use client";
import React from "react";

const FaqLink = ({ link, selectedNav, setSelectedNav }) => {
  const handleClick = () => {
    setSelectedNav(link.label);
  };

  return (
    <div className="w-fit">
      <button
        onClick={handleClick}
        className={`text-2xl font-medium hover:font-semibold transition-all whitespace-nowrap block hover:text-white ${
          selectedNav === link.label ? "text-white" : "text-slate-400"
        }`}
      >
        {link.label}
      </button>
    </div>
  );
};

export default FaqLink;
