import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CakeWithCandles from "@/components/cake-with-candles";
import { Gift, Heart } from "lucide-react";

interface BirthdayCardProps {
  isOpened: boolean;
  onRevealClick: () => void;
}

export default function BirthdayCard({ isOpened, onRevealClick }: BirthdayCardProps) {
  return (
    <div className="relative perspective-1000" style={{ perspective: "2000px" }}>
      <div className="relative w-full max-w-3xl mx-auto">
        <div className={`relative transition-all duration-1000 preserve-3d ${isOpened ? "opened" : ""}`}>
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isOpened ? -15 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-1/2 h-full origin-right"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-l-3xl shadow-2xl p-8 flex items-center justify-center" data-testid="card-left">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpened ? 1 : 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-center"
              >
                <Gift className="w-16 h-16 mb-4 text-white mx-auto" />
                <p className="text-white/90 font-handwritten text-2xl">For You</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isOpened ? 15 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-1/2 h-full origin-left"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-500 rounded-r-3xl shadow-2xl" data-testid="card-right" />
          </motion.div>

          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-[600px] flex flex-col items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpened ? 1 : 0, y: isOpened ? 0 : 20 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="w-full"
            >
              <h1 className="font-handwritten text-4xl md:text-5xl text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-testid="text-birthday-title">
                Happy Birthday, Chaimae!
              </h1>

              <div className="flex justify-center mb-8">
                <CakeWithCandles isVisible={isOpened} />
              </div>

              <div className="space-y-4 text-center max-w-2xl mx-auto" data-testid="text-birthday-message">
                <p className="text-lg text-foreground leading-relaxed">
                  I wish you all the best today and always.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  I know it's been hard for you lately, but I'm sure you'll get through it, you're amazing, strong, and honestly the most capable friend I know. Don't ever forget that.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Sorry it's the same gift as last year, I really wish I could buy you many things to show how much you mean to me.
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                  <p className="text-lg text-foreground leading-relaxed font-semibold">
                    I truly cherish our friendship, and I hope it stays forever.
                  </p>
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isOpened ? 1 : 0, scale: isOpened ? 1 : 0.9 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="mt-8"
              >
                <Button
                  onClick={onRevealClick}
                  size="lg"
                  className="w-full md:w-auto px-12 py-6 text-lg rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
                  data-testid="button-reveal"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Click here
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
