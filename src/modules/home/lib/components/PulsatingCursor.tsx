import { motion } from 'framer-motion';
import { FC } from 'react';
import { FaMousePointer } from 'react-icons/fa';

export const PulsatingCursor: FC = () => (
  <motion.div
    style={{ position: "absolute" }}
    animate={{
      scale: [1, 0.84, 0.96, 0.74, 1],
    }}
    transition={{
      duration: 1.5,
      ease: "easeInOut",
      times: [0, 0.1, 0.17, 0.33, 0.45],
      repeat: Infinity,
    }}
  >
    <FaMousePointer
      style={{
        color: "hsl(322 95% 57%)",
        fontSize: "2rem",
      }}
    />
  </motion.div>
);
