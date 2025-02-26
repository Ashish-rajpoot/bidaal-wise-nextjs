import { faqData } from "@/data/data";

export function findQuestionByInputValue(inputValue) {
    if (!inputValue) return []; // Prevents unnecessary filtering
  
    const lowerCaseInput = inputValue.trim().toLowerCase();
  
    return faqData
      .map((category) => ({
        category: category.category,
        questions: category.questions.filter((q) =>
          q.question.toLowerCase().includes(lowerCaseInput)
        ),
      }))
      .filter((category) => category.questions.length > 0); // Removes empty categories
  }
  