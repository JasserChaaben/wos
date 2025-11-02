import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export default function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50" data-testid="progress-indicator">
      <div className="flex gap-3">
        {Array.from({ length: total }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{
              scale: index === current ? 1.2 : 1,
              opacity: index <= current ? 1 : 0.4,
            }}
            transition={{ duration: 0.3 }}
            className={`h-3 w-3 rounded-full ${
              index <= current
                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                : "bg-gray-300"
            }`}
            data-testid={`progress-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
