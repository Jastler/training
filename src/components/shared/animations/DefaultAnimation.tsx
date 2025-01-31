import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DefaultAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

const DefaultAnimation: React.FC<DefaultAnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default DefaultAnimation;
