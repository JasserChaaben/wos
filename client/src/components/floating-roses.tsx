import { motion } from "framer-motion";

export default function FloatingRoses() {
  const roses = [
    { delay: 0, duration: 16, x: "25%" },
    { delay: 2, duration: 14, x: "45%" },
    { delay: 1, duration: 15, x: "65%" },
    { delay: 3, duration: 17, x: "35%" },
    { delay: 1.5, duration: 13, x: "55%" },
    { delay: 2.5, duration: 16, x: "75%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {roses.map((rose, index) => (
        <motion.div
          key={`rose-${index}`}
          initial={{ y: "110%", x: rose.x, rotate: 0 }}
          animate={{
            y: "-20%",
            x: [rose.x, `calc(${rose.x} + ${index % 2 === 0 ? '5%' : '-5%'})`, rose.x],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            y: { duration: rose.duration, repeat: Infinity, ease: "linear", delay: rose.delay },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute"
          style={{ left: 0 }}
          data-testid={`rose-${index}`}
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="20" fill="#FF1493" opacity="0.9" />
            <circle cx="42" cy="42" r="12" fill="#FF69B4" opacity="0.8" />
            <circle cx="58" cy="42" r="12" fill="#FF69B4" opacity="0.8" />
            <circle cx="42" cy="58" r="12" fill="#FF69B4" opacity="0.8" />
            <circle cx="58" cy="58" r="12" fill="#FF69B4" opacity="0.8" />
            <ellipse cx="35" cy="35" rx="4" ry="6" fill="#FFB6C1" opacity="0.6" />
            <path
              d="M50 70 Q45 85 50 95 Q55 85 50 70"
              fill="#228B22"
              opacity="0.7"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
