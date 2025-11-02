import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cake } from "lucide-react";

interface CandleGameProps {
  onComplete: () => void;
}

const options = [28, 29, 30];

export default function CandleGame({ onComplete }: CandleGameProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [shake, setShake] = useState<number | null>(null);

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    
    if (option === 28) {
      setTimeout(onComplete, 800);
    } else {
      setShake(option);
      setTimeout(() => {
        setSelectedOption(null);
        setShake(null);
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
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="inline-block mb-4"
          >
            <Cake className="w-20 h-20 text-pink-500" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-testid="text-game3-title">
            Birthday Candles!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground" data-testid="text-game3-question">
            How many candles should be on the cake?
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          {options.map((option, index) => (
            <motion.div
              key={option}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                x: shake === option ? [-10, 10, -10, 10, 0] : 0,
              }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Button
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null}
                className={`w-full h-24 text-3xl font-bold rounded-2xl transition-all ${
                  selectedOption === option && option === 28
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 scale-105"
                    : selectedOption === option
                    ? "bg-gradient-to-r from-red-400 to-red-500"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                }`}
                data-testid={`button-candle-${option}`}
              >
                {option}
              </Button>
            </motion.div>
          ))}
        </div>

        {selectedOption === 28 && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-6 text-xl font-semibold text-green-600"
            data-testid="text-correct"
          >
            Perfect!
          </motion.p>
        )}
      </Card>
    </div>
  );
}
