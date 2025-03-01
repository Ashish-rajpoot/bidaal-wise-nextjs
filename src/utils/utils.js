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

export const generateRandomData = (size = 4) => {
  const sampleTexts = [
    "Life is about making an impact, not making an income. Work hard, stay consistent, and never stop believing in yourself. Your dedication today will define your success tomorrow.",
    "Opportunities don’t happen, you create them. When you take risks, you unlock doors that others never even knew existed. Step forward boldly, and make your mark in this world.",
    "Success is the sum of small efforts, repeated day in and day out. Consistency, patience, and resilience are the true keys to achieving your biggest dreams in life.",
    "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Passion fuels perseverance, and perseverance leads to mastery.",
    "Dream big, stay positive, work hard, and enjoy the journey. True fulfillment comes not just from reaching goals but from embracing the challenges along the way.",
    "Your future is created by what you do today, not tomorrow. Every small step you take now builds the foundation for your success in the years to come.",
    "Success doesn’t just find you; you have to go out and get it. Stay dedicated, push through obstacles, and never settle for mediocrity. Greatness requires effort and persistence.",
    "If you are willing to put in the work, the results will follow. Nothing worth having comes easy, but every challenge you overcome strengthens your character.",
    "Perseverance is not a long race; it is many short races one after another. Every challenge, setback, and failure is simply another step toward eventual success.",
    "Great things never come from comfort zones. Growth happens when you step outside your fears and challenge yourself to do what seems impossible today but will be natural tomorrow.",
  ];

  const images = ["card-ai-1.jpg", "card-ai-2.jpg", "card-ai-3.jpg", "card-ai-4.jpg"];
  return sampleTexts.map((text, index) => ({
    content: text,
    imgUrl: `card/${images[index]}`,
  }));
};
