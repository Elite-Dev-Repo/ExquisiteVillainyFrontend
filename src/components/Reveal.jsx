import { motion } from "framer-motion";
import React from "react";

const Reveal = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      transition={{ delay: delay }}
      exit={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
