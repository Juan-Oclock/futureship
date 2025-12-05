import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../animations/AnimatedCounter';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface FiftyFiftySectionProps {
  leftNumber: number;
  rightNumber: number;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const FiftyFiftySection: React.FC<FiftyFiftySectionProps> = ({
  leftNumber,
  rightNumber,
  title,
  description,
  ctaText = 'Learn More',
  ctaLink = '/about',
  className = '',
}) => {
  return (
    <section className={`py-24 lg:py-32 bg-slate-900 relative overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-slate-900" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Large Numbers */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center"
          >
            <div className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-white leading-none tracking-tighter">
              <AnimatedCounter value={leftNumber} duration={2} />
            </div>
            <div className="text-[80px] md:text-[120px] lg:text-[150px] font-light text-slate-400 mx-2 lg:mx-4">/</div>
            <div className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-white leading-none tracking-tighter">
              <AnimatedCounter value={rightNumber} duration={2} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:max-w-md"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {description}
            </p>
            <Link to={ctaLink}>
              <Button className="!bg-coral !text-white hover:!bg-coral-600 font-semibold">
                {ctaText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
