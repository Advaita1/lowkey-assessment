import React from 'react';
import { motion } from 'framer-motion';

interface activeButtonProps {
  activeButtonKey: number;
}

export default function ActiveButton ({ activeButtonKey }: activeButtonProps) {
  return (
    <motion.div animate={{y: activeButtonKey * 56}} className="active-button"></motion.div>
  );
}
