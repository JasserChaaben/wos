import { motion } from "framer-motion";

interface CakeWithCandlesProps {
  isVisible: boolean;
}

export default function CakeWithCandles({ isVisible }: CakeWithCandlesProps) {
  const candles = Array.from({ length: 28 });

  return (
    <div className="relative" data-testid="cake-container">
      <svg
        width="200"
        height="180"
        viewBox="0 0 200 180"
        className="drop-shadow-lg"
      >
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
        >
          <rect x="40" y="100" width="120" height="60" fill="#FFB6C1" rx="5" />
          <rect x="30" y="80" width="140" height="30" fill="#FFC0CB" rx="5" />
          <rect x="20" y="60" width="160" height="30" fill="#FFB6C1" rx="5" />
          
          <ellipse cx="50" cy="65" rx="8" ry="6" fill="#FF69B4" opacity="0.6" />
          <ellipse cx="100" cy="65" rx="8" ry="6" fill="#FF69B4" opacity="0.6" />
          <ellipse cx="150" cy="65" rx="8" ry="6" fill="#FF69B4" opacity="0.6" />
        </motion.g>

        {candles.slice(0, 8).map((_, index) => {
          const x = 30 + index * 18;
          const delay = 1.8 + index * 0.05;
          
          return (
            <g key={index}>
              <motion.rect
                x={x}
                y="45"
                width="3"
                height="15"
                fill="#FFE4B5"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isVisible ? 1 : 0 }}
                transition={{ delay }}
              />
              
              <motion.ellipse
                cx={x + 1.5}
                cy="42"
                rx="2"
                ry="4"
                fill="#FFA500"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isVisible ? [0, 1, 0.8, 1] : 0,
                  scale: isVisible ? [0, 1, 0.9, 1] : 0
                }}
                transition={{ 
                  delay: delay + 0.2,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              />
              
              <motion.ellipse
                cx={x + 1.5}
                cy="40"
                rx="3"
                ry="5"
                fill="#FFD700"
                opacity="0.6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isVisible ? [0, 0.6, 0.4, 0.6] : 0,
                  scale: isVisible ? [0, 1.2, 1, 1.2] : 0
                }}
                transition={{ 
                  delay: delay + 0.2,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
