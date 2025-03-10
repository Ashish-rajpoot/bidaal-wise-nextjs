"use client";
import { findQuestionByInputValue } from "@/utils/utils";
import { useEffect, useState } from "react";
import { FaqAccordion } from "./FaqAccordion";
import FaqLinks from "./FaqLinks";
import { faqData } from "@/data/data";

const Faq = () => {
  const [selectedNav, setSelectedNav] = useState("Hardware");
  const [faqsData, setFaqData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.value;
    setInputValue(input);
  };

  useEffect(() => {
    inputValue
      ? setFaqData(findQuestionByInputValue(inputValue))
      : setFaqData(faqData.find((data) => data.category === selectedNav));
  }, [selectedNav, inputValue]);

  return (
    <div className="relative min-h-screen gradient-tb flex flex-col space-y-0 py-10 mob-def-pad overflow-hidden">
      {/* Background Image */}
      <div className="absolute ">
        <img
          src="tharmal2.webp"
          alt="device"
          className="w-full h-full object-cover mix-blend-multiply faq-image "
        />
      </div>

      {/* Content - Ensure it's clickable */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-10 w-full lg-device">
        <h1 className="text-6xl max-md:text-3xl text-white pb-5 py-5 font-semibold">FAQ</h1>
        <FaqLinks selectedNav={selectedNav} setSelectedNav={setSelectedNav} />

        {/* Search Box */}
        <div className="flex-col py-5 hidden">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search your question here"
            className="rounded-full px-4 w-[400px] max-md:w-[200px] py-[5px] bg-white text-black focus:outline-none shadow-lg"
          />
        </div>

        {/* FAQ Questions */}
        <div className="pt-10 w-full">
          <FaqAccordion data={faqsData} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
