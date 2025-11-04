import { motion } from "framer-motion";
import { Music } from "lucide-react";

const notes = [
  { x: -120, y: -40, delay: 0 },
  { x: 140, y: -20, delay: 0.2 },
  { x: -80, y: 60, delay: 0.4 },
  { x: 180, y: 80, delay: 0.6 },
];

export default function AmbientNotes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {notes.map((n, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: n.y + 20, x: n.x }}
          animate={{ opacity: [0, 1, 1, 0], y: [n.y + 20, n.y, n.y - 20, n.y], x: n.x }}
          transition={{ duration: 8, delay: n.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2"
        >
          <Music className="w-6 h-6 text-white/40" />
        </motion.div>
      ))}
    </div>
  );
}
