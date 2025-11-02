import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/use-window-size";
import FloatingBalloons from "@/components/floating-balloons";
import FloatingRoses from "@/components/floating-roses";
import BirthdayCard from "@/components/birthday-card";
import PageTurnReveal from "@/components/page-turn-reveal";

export default function CelebrationPage() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [cardOpened, setCardOpened] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardOpened(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 relative">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
      )}

      <FloatingBalloons />
      <FloatingRoses />

      <AnimatePresence mode="wait">
        {!showReveal ? (
          <motion.div
            key="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, rotateY: 180 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center p-4 relative z-10"
          >
            <BirthdayCard 
              isOpened={cardOpened} 
              onRevealClick={() => setShowReveal(true)} 
            />
          </motion.div>
        ) : (
          <PageTurnReveal key="reveal" />
        )}
      </AnimatePresence>
    </div>
  );
}
