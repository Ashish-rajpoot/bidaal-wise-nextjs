import { faqData } from "@/data/data";

export function findQuestionByInputValue(inputValue) {
  const trimmedInput = inputValue.trim().toLowerCase();
  if (!trimmedInput) return faqData; // Return full data when no search term is entered

  return faqData
    .map((category) => ({
      ...category, // Keep original category structure
      questions: category.questions.filter((q) =>
        q.question.toLowerCase().includes(trimmedInput)
      ),
    }))
    .filter((category) => category.questions.length > 0)[0]; // Remove empty categories
}
