import React from 'react';
import { motion } from 'framer-motion';

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
  duration?: number;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  childDelay = 0.2,
  duration = 0.6,
  once = true,
  direction = 'up',
}) => {
  const getChildVariants = () => {
    const offset = 40;
    const initial = {
      opacity: 0,
      ...(direction === 'up' && { y: offset }),
      ...(direction === 'down' && { y: -offset }),
      ...(direction === 'left' && { x: offset }),
      ...(direction === 'right' && { x: -offset }),
    };

    return {
      hidden: initial,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
    };
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={getChildVariants()}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerReveal;
