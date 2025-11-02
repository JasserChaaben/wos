import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface NameGameProps {
  onComplete: () => void;
}

export default function NameGame({ onComplete }: NameGameProps) {
  const [name, setName] = useState("");
  const [shake, setShake] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().toUpperCase() === "CHAIMAE") {
      setTimeout(onComplete, 300);
    } else {
      setError("Hmm, that's not quite right! Try again.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setName("");
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
            <Sparkles className="w-10 h-10 text-purple-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-testid="text-game1-title">
              Let's Begin!
            </h1>
            <Sparkles className="w-10 h-10 text-pink-500" />
          </div>
          <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8" data-testid="text-game1-question">
            What's your name?
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            x: shake ? [-10, 10, -10, 10, 0] : 0,
          }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <Input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="Type your name here..."
              className="text-xl py-6 px-6 text-center rounded-2xl border-2 focus-visible:ring-4 focus-visible:ring-purple-200 transition-all"
              data-testid="input-name"
              autoFocus
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center mt-3 font-medium"
                data-testid="text-error"
              >
                {error}
              </motion.p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full text-lg py-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
            data-testid="button-submit-name"
          >
            Continue
          </Button>
        </motion.form>
      </Card>
    </div>
  );
}
