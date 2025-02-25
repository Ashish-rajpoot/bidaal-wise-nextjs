"use client";
import { useRef, useState } from "react";

const FaqQuestion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
      <div className="faq-p max-w-[55vw] gap-y-10 flex flex-col relative left-0 right-0">
        {data.questions.map((question, index) => (
          <div key={index} className="flex flex-col gap-y-2">
            <p
              className="faq-question text-[1.5rem] max-md:text-[1.3rem] text-white font-roboto min-w-full"
              onClick={()=>handleToggle(index)}
            >
              {question.question}
            </p>
            {openIndex === index && (
              <p className={`faq-answer text-[1rem] max-md:text-[0.9rem] text-white/80 font-roboto transition-all duration-200 ease-in-out`}>
                {question.answer}
              </p>
            )}
          </div>
        ))}
      </div>
  );
};

export default FaqQuestion;
