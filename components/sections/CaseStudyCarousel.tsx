import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  result: string;
  image: string;
  featured?: boolean;
}

interface CaseStudyCarouselProps {
  cases: CaseStudy[];
  className?: string;
}

const CaseStudyCarousel: React.FC<CaseStudyCarouselProps> = ({ cases, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ x }}
        className="flex gap-6 lg:gap-8 pl-4 sm:pl-6 lg:pl-8"
      >
        {cases.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="flex-shrink-0 w-[320px] md:w-[400px] lg:w-[450px] group cursor-pointer"
          >
            <Link to="/case-studies">
              <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                {/* Featured badge */}
                {caseStudy.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white text-navy text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  {/* Industry tag */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <p className="text-sm text-slate-400 mb-2">{caseStudy.client}</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-navy transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-navy font-semibold text-sm mb-4">{caseStudy.result}</p>

                  {/* Read more link */}
                  <div className="flex items-center text-navy font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Read case study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* View all card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: cases.length * 0.1, duration: 0.6 }}
          className="flex-shrink-0 w-[280px] md:w-[320px]"
        >
          <Link to="/case-studies">
            <div className="h-full min-h-[380px] rounded-2xl border-2 border-dashed border-slate-200 hover:border-navy/30 transition-colors duration-300 flex flex-col items-center justify-center p-8 group">
              <div className="w-16 h-16 rounded-full bg-slate-100 group-hover:bg-navy/10 transition-colors duration-300 flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-navy transition-colors" />
              </div>
              <p className="text-slate-600 font-semibold text-center group-hover:text-navy transition-colors">
                View all case studies
              </p>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CaseStudyCarousel;
