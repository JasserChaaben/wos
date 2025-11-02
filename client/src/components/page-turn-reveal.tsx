import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PartyPopper, Frown } from "lucide-react";

export default function PageTurnReveal() {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center p-6"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card className="max-w-2xl w-full p-12 md:p-16 bg-white/95 backdrop-blur-sm shadow-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground" data-testid="text-reveal-message">
            Sorry I said happy birthday yesterday, it's an honest mistake
          </h1>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className="flex justify-center"
            data-testid="icon-crying"
          >
            <Frown className="w-32 h-32 text-blue-400" strokeWidth={1.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-8 flex items-center justify-center gap-2"
          >
            <p className="text-lg text-muted-foreground">
              Just kidding! Happy Birthday!
            </p>
            <PartyPopper className="w-6 h-6 text-purple-500" />
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
