import React, { useRef, useState, useCallback } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

// Apple-style easing
const appleEase = [0.25, 0.1, 0.25, 1.0];

// Transformation pairs - Before maps to After
const transformations = [
  { before: "Fragmented decision-making", after: "Aligned collective decisions" },
  { before: "Reactive to market changes", after: "Proactive future planning" },
  { before: "Siloed leadership teams", after: "Collaborative governance" },
  { before: "Unclear strategic direction", after: "Crystal-clear strategy" },
];

// Interactive Slider Component
const TransformationSlider: React.FC<{ isInView: boolean }> = ({ isInView }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const sliderPosition = useMotionValue(0); // 0 = Before, 100 = After
  
  // Transform slider position to visual properties
  const beforeOpacity = useTransform(sliderPosition, [0, 50, 100], [1, 0.3, 0]);
  const afterOpacity = useTransform(sliderPosition, [0, 50, 100], [0, 0.3, 1]);
  const handleX = useTransform(sliderPosition, [0, 100], ['0%', '100%']);
  const beforeScale = useTransform(sliderPosition, [0, 100], [1, 0.95]);
  const afterScale = useTransform(sliderPosition, [0, 100], [0.95, 1]);
  
  // Track cursor position within container (no drag needed)
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    sliderPosition.set(percentage);
  }, [sliderPosition]);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    // Snap to nearest end when cursor leaves
    const current = sliderPosition.get();
    const target = current < 50 ? 0 : 100;
    sliderPosition.set(target);
  };
  
  // Touch support - track touch position
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    sliderPosition.set(percentage);
  }, [sliderPosition]);
  
  const handleTouchEnd = () => {
    // Snap to nearest end
    const current = sliderPosition.get();
    const target = current < 50 ? 0 : 100;
    sliderPosition.set(target);
  };
  
  // Quick toggle buttons
  const goToBefore = () => sliderPosition.set(0);
  const goToAfter = () => sliderPosition.set(100);

  return (
    <div className="relative">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <motion.button
          onClick={goToBefore}
          className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
          style={{
            backgroundColor: useTransform(sliderPosition, [0, 100], ['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0.05)']),
            color: useTransform(sliderPosition, [0, 100], ['#f87171', '#94a3b8']),
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            Before
          </span>
        </motion.button>
        
        <motion.button
          onClick={goToAfter}
          className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
          style={{
            backgroundColor: useTransform(sliderPosition, [0, 100], ['rgba(52, 211, 153, 0.05)', 'rgba(52, 211, 153, 0.2)']),
            color: useTransform(sliderPosition, [0, 100], ['#94a3b8', '#34d399']),
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            After
          </span>
        </motion.button>
      </div>

      {/* Main Comparison Container */}
      <div 
        ref={containerRef}
        className="relative rounded-3xl overflow-hidden cursor-ew-resize select-none"
        style={{ touchAction: 'none' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Before Side (Red/Problem) */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950/30 flex flex-col md:flex-row"
          style={{ opacity: beforeOpacity, scale: beforeScale }}
        >
          {/* Image - Corporate Stress/Fragmentation - Full Height on desktop, top on tablet */}
          <div className="hidden md:block md:w-1/3 lg:w-2/5 flex-shrink-0 relative md:min-h-[200px] lg:min-h-0">
            <img 
              src="/image/fragmented.jpg"
              alt="Stressed executive in corporate setting"
              className="absolute inset-0 w-full h-full object-cover filter saturate-75 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/90" />
            <div className="absolute inset-0 bg-red-900/20" />
          </div>
          
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500 animate-pulse" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400">
                  Before Way Forward
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {transformations.map((item, index) => (
                  <motion.div
                    key={`before-${index}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: appleEase }}
                    className="flex items-start gap-2 sm:gap-3 group"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs sm:text-sm">✕</span>
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-medium leading-tight">
                      {item.before}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* After Side (Green/Solution) */}
        <motion.div 
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950/30 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] flex flex-col-reverse md:flex-row"
          style={{ opacity: afterOpacity, scale: afterScale }}
        >
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-400">
                  After Way Forward
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {transformations.map((item, index) => (
                  <motion.div
                    key={`after-${index}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: appleEase }}
                    className="flex items-start gap-2 sm:gap-3 group"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-400 text-xs sm:text-sm">✓</span>
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-tight">
                      {item.after}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image - Happy Team/Clarity - Full Height on desktop */}
          <div className="hidden md:block md:w-1/3 lg:w-2/5 flex-shrink-0 relative md:min-h-[200px] lg:min-h-0">
            <img 
              src="/image/clarity.jpg"
              alt="Happy team celebrating success"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/90" />
            <div className="absolute inset-0 bg-emerald-900/10" />
          </div>
        </motion.div>

        {/* Slider Handle */}
        <motion.div
          className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white/50 cursor-ew-resize z-10"
          style={{ left: handleX }}
        >
          {/* Handle with Double Chevron */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden">
            {/* Double Chevron - direction based on position */}
            <motion.div
              style={{
                rotate: useTransform(sliderPosition, [0, 100], [0, 180]),
              }}
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none"
                className="text-navy w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
              >
                {/* First chevron */}
                <path 
                  d="M9 6L15 12L9 18" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Second chevron */}
                <path 
                  d="M15 6L21 12L15 18" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Instruction hint - different text for mobile */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovering ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-xs sm:text-sm flex items-center gap-2 pointer-events-none"
        >
          <span>←</span>
          <span className="hidden sm:inline">Move cursor to compare</span>
          <span className="sm:hidden">Swipe to compare</span>
          <span>→</span>
        </motion.div>
      </div>
    </div>
  );
};

const TransformationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Video - positioned to show person on right */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover object-right"
        >
          <source src="/image/MAVTech-cinemagraph-lowres.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Dark gradient overlay - much lighter on right to show person clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />
      
      {/* Subtle animated gradient orbs */}
      <motion.div
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl -translate-x-1/2"
      />
      <motion.div
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl translate-x-1/2"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: appleEase }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-4 block">
            The Transformation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight mb-4">
            From uncertainty
            <span className="text-slate-400"> to clarity</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See how we transform leadership challenges into strategic advantages
          </p>
        </motion.div>

        {/* Interactive Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
        >
          <TransformationSlider isInView={isInView} />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: appleEase }}
          className="text-center mt-12 lg:mt-16"
        >
          <Link to="/contact">
            <Button className="!bg-coral !text-white hover:!bg-coral-600 font-semibold shadow-lg hover:shadow-xl transition-all px-8 py-4 text-lg">
              Start Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;
