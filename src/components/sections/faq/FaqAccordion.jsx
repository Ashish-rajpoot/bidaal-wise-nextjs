"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion({ data }) {
  if (data === undefined || data.length < 1) {
    return (
      <div className="text-red-200 text-[2rem]">
        No Result Found for your Query!!!
      </div>
    );
  }
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.questions?.map((question, index) => (
        <AccordionItem value={`item-${index + 1}`} key={index} className="mb-8">
          <AccordionTrigger className="text-white text-[1.5rem]">
            {question.question}
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 text-[0.9rem]">
            {question.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
