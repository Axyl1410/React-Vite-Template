import { motion } from "framer-motion";
import React from "react";

interface TransitionProps {
  children: React.ReactNode;
}

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * A component that wraps its children in a `framer-motion` animated div.
 *
 * This component uses the `motion.div` element from the `framer-motion` library
 * to provide a fade-in and fade-out animation effect for its children.
 *
 * The animation has an initial state with zero opacity, animates to full opacity
 * on enter, and returns to zero opacity on exit. The transition duration is set
 * to 0.3 seconds.
 *
 * @param {TransitionProps} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be rendered inside
 * the animated container.
 *
 * @example
 * <Transition>
 *  <YourComponent />
 * </Transition>
 */
const Transition: React.FC<TransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
