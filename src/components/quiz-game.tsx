import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

interface QuizGameProps {
  onComplete: () => void;
}

const options = ["Birthday card", "Questionnaire", "Quiz", "Survey"];

export default function QuizGame({ onComplete }: QuizGameProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    
    if (option === "Survey") {
      setFeedback("That's right!");
      setTimeout(onComplete, 800);
    } else {
      setFeedback("Not quite! Keep trying...");
      setTimeout(() => {
        setSelectedOption(null);
        setFeedback("");
      }, 600);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full p-8 md:p-12 bg-white/90 backdrop-blur-sm shadow-2xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-purple-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-testid="text-game2-title">
              Question Time!
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8" data-testid="text-game2-question">
            What do you think this is?
          </p>
        </motion.div>

        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.div
              key={option}
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                scale: selectedOption === option ? 0.95 : 1,
              }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Button
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null}
                className={`w-full text-lg py-6 rounded-xl transition-all ${
                  selectedOption === option && option === "Survey"
                    ? "bg-gradient-to-r from-green-500 to-emerald-500"
                    : selectedOption === option
                    ? "bg-gradient-to-r from-red-400 to-red-500"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                }`}
                data-testid={`button-option-${option.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {option}
              </Button>
            </motion.div>
          ))}
        </div>

        {feedback && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center mt-6 text-xl font-semibold ${
              feedback.includes("right") ? "text-green-600" : "text-orange-600"
            }`}
            data-testid="text-feedback"
          >
            {feedback}
          </motion.p>
        )}
      </Card>
    </div>
  );
}
