import { motion } from "framer-motion";

export default function FloatingBalloons() {
  const balloons = [
    { color: "#FF1493", size: 60, delay: 0, duration: 12, x: "10%" },
    { color: "#9370DB", size: 50, delay: 1, duration: 14, x: "20%" },
    { color: "#FF69B4", size: 55, delay: 2, duration: 13, x: "80%" },
    { color: "#BA55D3", size: 48, delay: 0.5, duration: 15, x: "90%" },
    { color: "#FF1493", size: 52, delay: 1.5, duration: 11, x: "30%" },
    { color: "#9370DB", size: 58, delay: 2.5, duration: 13, x: "70%" },
    { color: "#FF69B4", size: 45, delay: 3, duration: 14, x: "15%" },
    { color: "#BA55D3", size: 53, delay: 3.5, duration: 12, x: "85%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon, index) => (
        <motion.div
          key={`balloon-${index}`}
          initial={{ y: "110%", x: balloon.x }}
          animate={{
            y: "-20%",
            x: [balloon.x, `calc(${balloon.x} + ${index % 2 === 0 ? '3%' : '-3%'})`, balloon.x],
          }}
          transition={{
            y: { duration: balloon.duration, repeat: Infinity, ease: "linear", delay: balloon.delay },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute"
          style={{ left: 0 }}
          data-testid={`balloon-${index}`}
        >
          <svg width={balloon.size} height={balloon.size * 1.2} viewBox="0 0 100 120">
            <ellipse
              cx="50"
              cy="50"
              rx="35"
              ry="45"
              fill={balloon.color}
              opacity="0.9"
            />
            <path
              d="M50 95 Q45 100 50 105"
              stroke={balloon.color}
              strokeWidth="2"
              fill="none"
              opacity="0.7"
            />
            <ellipse
              cx="40"
              cy="35"
              rx="8"
              ry="12"
              fill="white"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
