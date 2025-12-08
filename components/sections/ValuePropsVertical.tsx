import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { LucideIcon, Lightbulb, Target, Users, Compass, Shield, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  image: string;
}

const valueProps: ValueProp[] = [
  {
    icon: Lightbulb,
    title: "Uncommon Thinking",
    description: "We do things differently to unlock untapped potential in strategic advisory, opening new possibilities for your organisation.",
    details: [
      "Challenge conventional assumptions",
      "Explore alternative perspectives",
      "Discover hidden opportunities"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: Target,
    title: "Forward Focus",
    description: "An agile response for today's context ensures diverse perspectives to help move your organisation and leadership forward.",
    details: [
      "Adaptive strategic frameworks",
      "Future-ready decision making",
      "Continuous alignment with goals"
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: Users,
    title: "Network Mastery",
    description: "Our partners bring relationships that go beyond business from 20+ years alongside remarkable leaders with a shared outlook on success.",
    details: [
      "Access to industry leaders",
      "Cross-sector collaboration",
      "Trusted advisory relationships"
    ],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: Compass,
    title: "Strategic Clarity",
    description: "Cut through complexity to find the clearest path forward. We help leadership teams align on what matters most and make confident decisions.",
    details: [
      "Simplify complex challenges",
      "Build leadership alignment",
      "Create actionable roadmaps"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: Shield,
    title: "Trusted Partnership",
    description: "More than consultants—we're partners invested in your success. Our approach builds lasting capability within your organisation.",
    details: [
      "Long-term relationship focus",
      "Knowledge transfer emphasis",
      "Confidential and discreet"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "We focus on outcomes that matter. Every engagement is designed to deliver tangible results that strengthen your organisation's position.",
    details: [
      "Clear success metrics",
      "Evidence-based approaches",
      "Sustainable improvements"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  }
];

// Apple-style easing
const appleEase = [0.25, 0.1, 0.25, 1.0];

const ValuePropsVertical: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProp = valueProps[activeIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: appleEase }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-4 block">
            The Way Forward Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
            We do things a little differently
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 min-h-[600px] border border-slate-700/50 rounded-3xl overflow-hidden">
          
          {/* Left Column - Navigation Titles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: appleEase }}
            className="lg:col-span-4 flex flex-col justify-between p-6 lg:p-8"
          >
            {/* Title List */}
            <div className="space-y-1">
              {valueProps.map((prop, index) => {
                const Icon = prop.icon;
                const isActive = index === activeIndex;
                
                return (
                  <button
                    key={prop.title}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                      isActive 
                        ? 'bg-white/10' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'bg-coral' : 'bg-white/10 group-hover:bg-white/20'
                    }`}>
                      <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </div>
                    <span className={`font-semibold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'
                    }`}>
                      {prop.title}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-coral"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Up/Down navigation - bottom right */}
            <div className="hidden lg:flex items-center justify-end gap-1 mt-6">
              <button 
                onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className={`p-2 rounded-lg border border-slate-600/50 transition-all ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 hover:border-slate-500'}`}
              >
                <ChevronUp className="w-4 h-4 text-slate-400" />
              </button>
              <button 
                onClick={() => setActiveIndex(Math.min(valueProps.length - 1, activeIndex + 1))}
                disabled={activeIndex === valueProps.length - 1}
                className={`p-2 rounded-lg border border-slate-600/50 transition-all ${activeIndex === valueProps.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 hover:border-slate-500'}`}
              >
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </motion.div>

          {/* Right Column - Content + Background Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: appleEase }}
            className="lg:col-span-8 relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-full"
          >
            {/* Background Image with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: appleEase }}
                className="absolute inset-0"
              >
                <img 
                  src={activeProp.image}
                  alt={activeProp.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/30" />
              </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: appleEase }}
                  className="max-w-lg"
                >
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold font-heading text-white mb-4">
                    {activeProp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {activeProp.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-3">
                    {activeProp.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                        className="flex items-center gap-3 text-white"
                      >
                        <div className="w-2 h-2 rounded-full bg-coral flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Progress indicator */}
                  <div className="mt-8 flex items-center gap-2">
                    {valueProps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === activeIndex 
                            ? 'w-8 bg-coral' 
                            : 'w-2 bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropsVertical;
