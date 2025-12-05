import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ValuePropsGridProps {
  items: ValueProp[];
  className?: string;
}

const ValuePropsGrid: React.FC<ValuePropsGridProps> = ({ items, className = '' }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((prop, index) => (
        <motion.div
          key={index}
          variants={item}
          className="group relative"
        >
          {/* Hover background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          <div className="p-6 lg:p-8">
            {/* Icon */}
            <div className="mb-6 relative">
              <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-navy group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                <prop.icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-300" />
              </div>
              {/* Decorative line */}
              <div className="absolute top-7 left-16 w-12 h-px bg-gradient-to-r from-slate-200 to-transparent hidden lg:block" />
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-navy transition-colors duration-300">
              {prop.title}
            </h3>

            {/* Description */}
            <p className="text-slate-500 leading-relaxed">
              {prop.description}
            </p>
          </div>

          {/* Bottom border accent */}
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-navy/30 transition-colors duration-500" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ValuePropsGrid;
