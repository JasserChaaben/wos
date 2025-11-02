import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NameGame from "@/components/name-game";
import QuizGame from "@/components/quiz-game";
import CandleGame from "@/components/candle-game";
import FavoriteWebsiteGame from "@/components/favorite-website-game";
import CelebrationPage from "@/components/celebration-page";
import ProgressIndicator from "@/components/progress-indicator";

export default function BirthdayPage() {
  const [currentStage, setCurrentStage] = useState(0);
  const totalStages = 4;

  const nextStage = () => {
    setCurrentStage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      {currentStage < totalStages && (
        <ProgressIndicator current={currentStage} total={totalStages} />
      )}

      <AnimatePresence mode="wait">
        {currentStage === 0 && (
          <motion.div
            key="name-game"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <NameGame onComplete={nextStage} />
          </motion.div>
        )}

        {currentStage === 1 && (
          <motion.div
            key="quiz-game"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <QuizGame onComplete={nextStage} />
          </motion.div>
        )}

        {currentStage === 2 && (
          <motion.div
            key="candle-game"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <CandleGame onComplete={nextStage} />
          </motion.div>
        )}

        {currentStage === 3 && (
          <motion.div
            key="favorite-game"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <FavoriteWebsiteGame onComplete={nextStage} />
          </motion.div>
        )}

        {currentStage === 4 && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <CelebrationPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
