import React, { useRef, useState, useCallback } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';
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
  const beforeScale = useTransform(sliderPosition, [0, 100], [1, 0.98]);
  const afterScale = useTransform(sliderPosition, [0, 100], [0.98, 1]);
  
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
      <div className="flex justify-center gap-3 mb-10">
        <motion.button
          onClick={goToBefore}
          className="px-6 py-3 text-sm font-semibold transition-all border"
          style={{
            backgroundColor: useTransform(sliderPosition, [0, 100], ['#fef2f2', '#ffffff']),
            borderColor: useTransform(sliderPosition, [0, 100], ['#fca5a5', '#e7e5e4']),
            color: useTransform(sliderPosition, [0, 100], ['#dc2626', '#a3a3a3']),
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            Before
          </span>
        </motion.button>
        
        <motion.button
          onClick={goToAfter}
          className="px-6 py-3 text-sm font-semibold transition-all border"
          style={{
            backgroundColor: useTransform(sliderPosition, [0, 100], ['#ffffff', '#f0fdf4']),
            borderColor: useTransform(sliderPosition, [0, 100], ['#e7e5e4', '#86efac']),
            color: useTransform(sliderPosition, [0, 100], ['#a3a3a3', '#16a34a']),
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            After
          </span>
        </motion.button>
      </div>

      {/* Main Comparison Container */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden cursor-ew-resize select-none bg-white shadow-xl border border-stone-200"
        style={{ touchAction: 'none' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Before Side (Red/Problem) */}
        <motion.div 
          className="absolute inset-0 bg-red-50 flex flex-col md:flex-row"
          style={{ opacity: beforeOpacity, scale: beforeScale }}
        >
          {/* Image */}
          <div className="hidden md:block md:w-2/5 flex-shrink-0 relative">
            <img 
              src="/image/fragmented.jpg"
              alt="Before transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-red-50" />
          </div>
          
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <h3 className="text-xl lg:text-2xl font-bold text-red-600">
                  Before Way Forward
                </h3>
              </div>
              
              <div className="space-y-4">
                {transformations.map((item, index) => (
                  <motion.div
                    key={`before-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: appleEase }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <p className="text-lg text-neutral-700">
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
          className="relative bg-green-50 min-h-[380px] lg:min-h-[420px] flex flex-col-reverse md:flex-row"
          style={{ opacity: afterOpacity, scale: afterScale }}
        >
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <h3 className="text-xl lg:text-2xl font-bold text-green-600">
                  After Way Forward
                </h3>
              </div>
              
              <div className="space-y-4">
                {transformations.map((item, index) => (
                  <motion.div
                    key={`after-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: appleEase }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <p className="text-lg text-neutral-800 font-medium">
                      {item.after}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="hidden md:block md:w-2/5 flex-shrink-0 relative">
            <img 
              src="/image/clarity.jpg"
              alt="After transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-green-50" />
          </div>
        </motion.div>

        {/* Slider Handle */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-10"
          style={{ left: handleX }}
        >
          {/* Handle Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing">
            <motion.div
              style={{
                rotate: useTransform(sliderPosition, [0, 100], [0, 180]),
              }}
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none"
                className="text-white w-6 h-6"
              >
                <path 
                  d="M9 6L15 12L9 18" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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

        {/* Instruction hint */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovering ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-neutral-500 text-sm flex items-center gap-2 pointer-events-none"
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
      className="py-24 lg:py-32 bg-stone-100 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: appleEase }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            The Transformation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-neutral-900 leading-tight mb-4">
            From uncertainty
            <span className="text-neutral-400"> to clarity</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
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
          className="text-center mt-14"
        >
          <Link to="/contact">
            <Button size="lg" className="font-semibold shadow-lg hover:shadow-xl transition-all">
              Start Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;
