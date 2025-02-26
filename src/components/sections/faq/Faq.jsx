"use client";
import { findQuestionByInputValue } from "@/utils/utils";
import { useState } from "react";
import { FaqAccordion } from "./FaqAccordion";
import FaqLinks from "./FaqLinks";
import { faqData } from "@/data/data";

const Faq = () => {
  const [faqsData, setFaqData] = useState(faqData);
  const [selectedNav, setSelectedNav] = useState("Hardware");
  const selectedData = faqsData.find((data) => data.category === selectedNav);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setSearch(inputValue);
    const filterdData = inputValue.length > 0 ? findQuestionByInputValue(inputValue) : faqData;
    setFaqData(filterdData);
  };

  return (
    <div className="relative min-h-screen gradient-tb flex flex-col space-y-0 py-10">
      {/* Background Image */}
      <div className="absolute ">
        <img
          src="tharmal2.webp"
          alt="device"
          className="w-full h-full object-cover mix-blend-multiply faq-image "
        />
      </div>

      {/* Content - Ensure it's clickable */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-10 w-full">
        <div className="faq-h1 text-white pb-5 py-5">FAQ</div>
        <FaqLinks selectedNav={selectedNav} setSelectedNav={setSelectedNav} />

        {/* Search Box */}
        <div className="flex flex-col py-5">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search your question here"
            className="rounded-full px-4 w-[400px] max-md:w-[200px] py-[5px] bg-white text-black focus:outline-none shadow-lg"
          />
        </div>

        {/* FAQ Questions */}
        <div className="mx-auto min-w-[65vw] px-5">
          {/* <FaqQuestion data={selectedData} /> */}
          <FaqAccordion data={selectedData} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
