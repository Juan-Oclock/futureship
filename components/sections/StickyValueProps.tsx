import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  details?: string[];
}

interface StickyValuePropsProps {
  subtitle: string;
  title: string;
  items: ValueProp[];
}

// Placeholder images for each card
const cardImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
];

// Background colors - shades of primary palette (slate/navy tones)
const bgColors = [
  "#ffffff",      // White (initial)
  "#fafbfc",      // very light
  "#f8fafc",      // slate-50
  "#f1f5f9",      // slate-100
  "#e2e8f0",      // slate-200
  "#cbd5e1",      // slate-300
];

const StickyValueProps: React.FC<StickyValuePropsProps> = ({ subtitle, title, items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create scroll points for background color transitions
  const colorStops = items.map((_, i) => (i + 1) / (items.length + 1));
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, ...colorStops],
    bgColors.slice(0, items.length + 1)
  );

  // Title animation - waits for last card to fully leave, then moves to center, scales up, fades out
  // Phase 1: Title stays at top while cards animate (0 to 0.75)
  // Phase 2: Title moves to center (0.75 to 0.85)
  // Phase 3: Title scales up and fades out (0.85 to 1.0)
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.75, 0.85, 1],
    ["0%", "0%", "25vh", "25vh"]
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.85, 0.95, 1],
    [1, 1, 1.2, 1.4]
  );
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.88, 0.95, 1],
    [1, 1, 0.3, 0]
  );

  return (
    <div 
      ref={containerRef} 
      className="relative"
      style={{ height: `${(items.length + 1) * 100}vh` }}
    >
      {/* Sticky container with animated background */}
      <motion.div 
        className="sticky top-0 h-screen flex flex-col overflow-hidden"
        style={{ backgroundColor }}
      >
        {/* Header - animates to center, scales up, then fades out */}
        <motion.div 
          className="text-center pb-6" 
          style={{ paddingTop: '150px', y: titleY, scale: titleScale, opacity: titleOpacity }}
        >
          <span className="text-[11px] font-semibold text-navy uppercase tracking-[0.2em] mb-4 block">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900">
            {title}
          </h2>
        </motion.div>

        {/* Cards container - takes remaining space */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-6xl h-[520px]">
            {items.map((item, index) => (
              <ValuePropCard
                key={index}
                item={item}
                index={index}
                totalItems={items.length}
                scrollProgress={scrollYProgress}
                image={cardImages[index % cardImages.length]}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ValuePropCardProps {
  item: ValueProp;
  index: number;
  totalItems: number;
  scrollProgress: any;
  image: string;
}

const ValuePropCard: React.FC<ValuePropCardProps> = ({ item, index, totalItems, scrollProgress, image }) => {
  // Calculate scroll ranges for this card - cards animate in first 70% of scroll
  const scrollRange = 0.70; // Cards use 70% of scroll, leaving 30% for title animation
  const cardStart = (index + 0.3) / totalItems * scrollRange;
  const cardPeak = (index + 0.7) / totalItems * scrollRange;
  const cardEnd = (index + 1.1) / totalItems * scrollRange;

  // Animate from right (100%) to center (0%) to left (-100%)
  const x = useTransform(
    scrollProgress,
    [cardStart, cardPeak, cardEnd],
    ["80%", "0%", "-80%"]
  );

  // Fade in and out
  const opacity = useTransform(
    scrollProgress,
    [cardStart, cardStart + 0.05, cardEnd - 0.05, cardEnd],
    [0, 1, 1, 0]
  );

  // Scale up when entering, scale down when leaving
  const scale = useTransform(
    scrollProgress,
    [cardStart, cardPeak, cardEnd],
    [0.85, 1, 0.85]
  );

  const Icon = item.icon;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ x, opacity, scale }}
    >
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="flex flex-col md:flex-row h-[420px]">
          {/* Image side */}
          <div className="md:w-1/2 h-72 md:h-auto">
            <img 
              src={image} 
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content side */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            {/* Icon */}
            <div className="w-14 h-14 mb-6 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
              <Icon className="w-7 h-7 text-navy" />
            </div>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 mb-4">
              {item.title}
            </h3>
            
            {/* Description */}
            <p className="text-slate-500 leading-relaxed text-base md:text-lg mb-6">
              {item.description}
            </p>

            {/* Details list */}
            {item.details && item.details.length > 0 && (
              <ul className="space-y-2 mb-6">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-navy flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            )}

            {/* Progress indicator */}
            <div className="flex gap-2 mt-auto">
              {Array.from({ length: totalItems }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === index ? 'bg-navy' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyValueProps;
