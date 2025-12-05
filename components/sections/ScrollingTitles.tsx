import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface ScrollingTitlesProps {
  titles: string[];
  className?: string;
}

const ScrollingTitles: React.FC<ScrollingTitlesProps> = ({ titles, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Fade arrow in/out based on section visibility - starts later to avoid overlapping caption, ends after last title
  const arrowOpacity = useTransform(scrollYProgress, [0.32, 0.40, 0.62, 0.68], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className={`relative bg-slate-50 ${className}`}>
      {/* Static Title - top of section */}
      <div className="absolute top-12 left-8 lg:left-12">
        <span className="text-base md:text-lg font-medium text-slate-500 uppercase tracking-[0.15em]">
          Strategic Foresight & Governance Advisory
        </span>
      </div>

      {/* Sticky Arrow - fixed to viewport center, only visible when section is in view */}
      <motion.div 
        className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none" 
        style={{ width: 'calc(50% - 150px)', opacity: arrowOpacity }}
      >
        <div className="flex justify-end pr-8">
          <svg 
            width="280" 
            height="80" 
            viewBox="0 0 280 80" 
            fill="none"
            className="text-navy"
          >
            {/* Long horizontal line */}
            <path 
              d="M0 40 H210" 
              stroke="currentColor" 
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* First chevron - thicker and closer */}
            <path 
              d="M210 10 L240 40 L210 70" 
              stroke="currentColor" 
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Second chevron - thicker and closer to first */}
            <path 
              d="M230 10 L260 40 L230 70" 
              stroke="currentColor" 
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </motion.div>

      {/* Scrolling titles - full width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="py-32 lg:py-48 lg:pl-72 xl:pl-80">
            {titles.map((title, index) => (
              <TitleItem 
                key={index} 
                title={title} 
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TitleItemProps {
  title: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const TitleItem: React.FC<TitleItemProps> = ({ title, index, activeIndex, setActiveIndex }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    margin: "-48% 0px -48% 0px"
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  const isActive = activeIndex === index;

  return (
    <div
      ref={ref}
      className="py-2 lg:py-3"
    >
      <h3
        className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading leading-none tracking-tight transition-colors duration-300 whitespace-nowrap ${
          isActive ? 'text-navy' : 'text-slate-200'
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

export default ScrollingTitles;
