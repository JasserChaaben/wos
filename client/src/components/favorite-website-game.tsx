import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Sparkles } from "lucide-react";

interface FavoriteWebsiteGameProps {
  onComplete: () => void;
}

const options = ["Facebook", "Twitter", "Instagram", "Harry Potter characters viewer"];

export default function FavoriteWebsiteGame({ onComplete }: FavoriteWebsiteGameProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [shake, setShake] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

    if (option === "Harry Potter characters viewer") {
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
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="inline-block mb-4"
          >
            <Globe className="w-20 h-20 text-purple-500" />
          </motion.div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-purple-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-testid="text-game4-title">
              Last Question!
            </h1>
            <Sparkles className="w-10 h-10 text-pink-500" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground" data-testid="text-game4-question">
            What's Jasser's favorite website?
          </p>
        </motion.div>

        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.div
              key={option}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{
                x: shake === option ? [-10, 10, -10, 10, 0] : 0,
                opacity: 1,
                scale: selectedOption === option ? 0.95 : 1,
              }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Button
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null}
                className={`w-full text-lg py-6 rounded-xl transition-all ${selectedOption === option && option === "Harry Potter characters viewer"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500"
                  : selectedOption === option
                    ? "bg-gradient-to-r from-red-400 to-red-500"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  }`}
                data-testid={`button-website-${option.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {option}
              </Button>
            </motion.div>
          ))}
        </div>

        {selectedOption === "Harry Potter characters viewer" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-6 text-xl font-semibold text-green-600"
            data-testid="text-correct"
          >
            You got it! Time for your surprise!
          </motion.p>
        )}
      </Card>
    </div>
  );
}
