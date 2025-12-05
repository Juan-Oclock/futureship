import React from 'react';
import { motion } from 'framer-motion';

interface TextMarqueeProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  separator?: React.ReactNode;
  pauseOnHover?: boolean;
}

const TextMarquee: React.FC<TextMarqueeProps> = ({
  items,
  speed = 25,
  direction = 'left',
  className = '',
  separator = <span className="mx-6 text-slate-300">•</span>,
  pauseOnHover = true,
}) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className={`flex items-center whitespace-nowrap ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        animate={{
          x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="inline-block">{item}</span>
            {index < duplicatedItems.length - 1 && separator}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TextMarquee;
