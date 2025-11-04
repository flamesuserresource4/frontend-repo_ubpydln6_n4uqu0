import { motion } from "framer-motion";

const barVariants = {
  animate: (i) => ({
    height: [8, 28, 14, 36, 12, 32, 10],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      delay: i * 0.08,
      ease: "easeInOut",
    },
  }),
};

export default function AudioVisualizer() {
  return (
    <div className="flex items-end gap-1.5 h-12" aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={barVariants}
          animate="animate"
          className="w-1 rounded-full bg-gradient-to-b from-pink-400 via-purple-400 to-indigo-400/90"
          style={{ height: 10 + ((i * 7) % 24) }}
        />
      ))}
    </div>
  );
}
