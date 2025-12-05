import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
  type?: 'words' | 'chars';
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  staggerDelay = 0.05,
  duration = 0.5,
  once = true,
  type = 'words',
}) => {
  const items = type === 'words' ? text.split(' ') : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block ${wordClassName}`}
          style={{ 
            marginRight: type === 'words' ? '0.3em' : undefined,
            perspective: '1000px',
          }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SplitText;
