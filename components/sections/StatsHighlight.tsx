import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../animations/AnimatedCounter';

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

interface StatsHighlightProps {
  stats: Stat[];
  className?: string;
  variant?: 'light' | 'dark';
}

const StatsHighlight: React.FC<StatsHighlightProps> = ({
  stats,
  className = '',
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`${className}`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-center relative group"
          >
            {/* Large number */}
            <div className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.decimals || 0}
                duration={2}
              />
            </div>

            {/* Label */}
            <p className={`text-sm md:text-base font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {stat.label}
            </p>

            {/* Decorative underline */}
            <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full ${isDark ? 'bg-white/30' : 'bg-navy/20'} group-hover:w-20 transition-all duration-500`} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsHighlight;
