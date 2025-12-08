import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Role titles for scroll reveal
const roles = [
  'Board',
  'CEO',
  'CFO',
  'COO',
  'CRO',
  'CMO',
  'CHRO',
  'GM',
  'Director',
];

// Apple-style easing
const appleEase = [0.25, 0.1, 0.25, 1.0];

// Color palette for the gradient effect (gold to navy transition)
const colors = {
  gold: '#C9A227',
  goldMuted: '#D4B85A',
  navy: '#1E3A5F',
  navyLight: '#2A4A73',
  slate: '#94A3B8',
  slateMuted: '#CBD5E1',
};

// Double Chevron Arrow Component (like the logo)
const DoubleChevronArrow: React.FC<{ progress: number }> = ({ progress }) => {
  // Animate the arrow drawing based on scroll progress
  const lineLength = 180;
  const chevronProgress = Math.min(1, progress * 1.5);
  
  return (
    <svg 
      width="320" 
      height="80" 
      viewBox="0 0 320 80" 
      fill="none"
      className="transition-all duration-300"
    >
      {/* Animated horizontal line */}
      <motion.path 
        d="M0 40 H220" 
        stroke={progress > 0.1 ? colors.gold : colors.slateMuted}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={lineLength}
        strokeDashoffset={lineLength * (1 - Math.min(1, progress * 2))}
        style={{ transition: 'stroke 0.3s ease' }}
      />
      
      {/* First chevron */}
      <motion.path 
        d="M220 12 L255 40 L220 68" 
        stroke={progress > 0.3 ? colors.gold : colors.slateMuted}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: chevronProgress > 0.3 ? 1 : 0 }}
        transition={{ duration: 0.5, ease: appleEase }}
        style={{ transition: 'stroke 0.3s ease' }}
      />
      
      {/* Second chevron */}
      <motion.path 
        d="M250 12 L285 40 L250 68" 
        stroke={progress > 0.5 ? colors.gold : colors.slateMuted}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: chevronProgress > 0.5 ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: appleEase }}
        style={{ transition: 'stroke 0.3s ease' }}
      />
    </svg>
  );
};

// Individual title item with scroll-linked color
const TitleItem: React.FC<{
  title: string;
  index: number;
  totalItems: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}> = ({ title, index, totalItems, activeIndex, setActiveIndex }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    margin: "-45% 0px -45% 0px"
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  const isActive = activeIndex === index;
  const isPast = activeIndex > index;
  
  // Determine color based on position relative to active
  const getColor = () => {
    if (isActive) return colors.gold;
    if (isPast) return colors.goldMuted;
    
    // Future items fade from navy to slate based on distance
    const distance = index - activeIndex;
    if (distance === 1) return colors.navy;
    if (distance === 2) return colors.navyLight;
    return colors.slateMuted;
  };

  return (
    <motion.div
      ref={ref}
      className="py-2 sm:py-3 md:py-4 lg:py-3 overflow-hidden"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: appleEase 
      }}
    >
      <motion.h3
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading leading-none tracking-tight whitespace-nowrap cursor-default"
        style={{ 
          color: getColor(),
          transition: 'color 0.4s ease-out',
        }}
        whileHover={{ 
          x: 10,
          color: colors.gold,
        }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
};

const ProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titlesContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Track when titles container is in view (for mobile arrow)
  // Use stricter margins so arrow only shows when titles are actually visible
  const titlesInView = useInView(titlesContainerRef, { 
    margin: "-40% 0px -40% 0px" // Only show when titles are well within viewport
  });
  
  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Arrow visibility - appears AFTER "We partner with" label, disappears after last title
  // Timing: starts appearing at 0.22 (after problem statement), fully visible at 0.28, disappear at 0.72
  const arrowOpacity = useTransform(scrollYProgress, [0.22, 0.28, 0.68, 0.75], [0, 1, 1, 0]);
  const arrowProgress = useTransform(scrollYProgress, [0.25, 0.70], [0, 1]);
  
  // Background parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  // Get current arrow progress value for the component
  const [currentArrowProgress, setCurrentArrowProgress] = useState(0);
  
  useEffect(() => {
    const unsubscribe = arrowProgress.on('change', (v) => {
      setCurrentArrowProgress(v);
    });
    return () => unsubscribe();
  }, [arrowProgress]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-white" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-gold/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-navy/5 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Top section - Problem statement (moved from bottom) */}
      <div className="relative z-10 pt-20 lg:pt-28 pb-8 lg:pb-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: appleEase }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
            Strategic Foresight & Governance Advisory
          </p>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-neutral-900 leading-tight mb-6">
            Navigating complexity shouldn't
            <br />
            <span className="text-neutral-400">mean losing clarity</span>
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto">
            When governance requirements expand and operational complexity grows, 
            leaders often struggle to maintain strategic focus.
            <span className="text-neutral-800 font-semibold"> We bridge that gap.</span>
          </p>
        </motion.div>
        
        {/* "We partner with" label - leads into the titles */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: appleEase }}
          className="text-center text-sm font-semibold text-neutral-400 uppercase tracking-[0.25em] mt-8 sm:mt-10 lg:mt-16"
        >
          We partner with
        </motion.p>
      </div>

      {/* Sticky Arrow - fixed to viewport, positioned closer to titles */}
      <motion.div 
        className="hidden lg:block fixed top-1/2 -translate-y-1/2 z-20 pointer-events-none" 
        style={{ 
          left: 'calc(50% - 480px)',
          opacity: arrowOpacity,
        }}
      >
        <DoubleChevronArrow progress={currentArrowProgress} />
      </motion.div>

      {/* Mobile/Tablet Fixed Arrow */}
      <motion.div 
        className="lg:hidden fixed left-4 sm:left-8 z-50 pointer-events-none"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: titlesInView ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg 
          width="50" 
          height="36" 
          viewBox="0 0 50 36" 
          fill="none"
        >
          {/* Horizontal line */}
          <path 
            d="M0 18 H18" 
            stroke={colors.gold}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* First chevron */}
          <path 
            d="M16 5 L32 18 L16 31" 
            stroke={colors.gold}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Second chevron */}
          <path 
            d="M28 5 L44 18 L28 31" 
            stroke={colors.gold}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Scrolling titles container */}
      <div 
        ref={titlesContainerRef}
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-center lg:justify-center">
          <div className="py-6 sm:py-10 md:py-16 lg:py-32 lg:pl-32 xl:pl-40 pl-16 sm:pl-20">
            {roles.map((title, index) => (
              <TitleItem 
                key={title} 
                title={title} 
                index={index}
                totalItems={roles.length}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="relative z-10 pb-16 lg:pb-24" />
    </section>
  );
};

export default ProblemSection;
