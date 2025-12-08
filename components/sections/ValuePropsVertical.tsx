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
      className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: appleEase }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            The Way Forward Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900">
            We do things a little differently
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Navigation Titles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: appleEase }}
            className="flex flex-col"
          >
            {/* Title List */}
            <div className="space-y-2">
              {valueProps.map((prop, index) => {
                const Icon = prop.icon;
                const isActive = index === activeIndex;
                
                return (
                  <div
                    key={prop.title}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full text-left p-4 transition-all duration-300 flex items-center gap-4 group border-l-4 cursor-pointer ${
                      isActive 
                        ? 'bg-white border-primary shadow-md' 
                        : 'bg-transparent border-transparent hover:bg-white/50 hover:border-stone-300'
                    }`}
                  >
                    <div className={`w-12 h-12 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isActive ? 'bg-primary' : 'bg-stone-200 group-hover:bg-stone-300'
                    }`}>
                      <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-neutral-600'}`} />
                    </div>
                    <div className="flex-1">
                      <span className={`font-semibold text-base transition-colors duration-300 block ${
                        isActive ? 'text-neutral-900' : 'text-neutral-600 group-hover:text-neutral-800'
                      }`}>
                        {prop.title}
                      </span>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-neutral-500 mt-1 block"
                        >
                          {prop.details[0]}
                        </motion.span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation arrows */}
            <div className="hidden lg:flex items-center gap-2 mt-8">
              <button 
                onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className={`w-10 h-10 flex items-center justify-center border border-stone-300 transition-all ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white hover:border-primary hover:text-primary'}`}
              >
                <ChevronUp className="w-5 h-5 text-neutral-600" />
              </button>
              <button 
                onClick={() => setActiveIndex(Math.min(valueProps.length - 1, activeIndex + 1))}
                disabled={activeIndex === valueProps.length - 1}
                className={`w-10 h-10 flex items-center justify-center border border-stone-300 transition-all ${activeIndex === valueProps.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white hover:border-primary hover:text-primary'}`}
              >
                <ChevronDown className="w-5 h-5 text-neutral-600" />
              </button>
              <span className="text-sm text-neutral-500 ml-4">
                {activeIndex + 1} / {valueProps.length}
              </span>
            </div>
          </motion.div>

          {/* Right Column - Content + Background Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: appleEase }}
            className="relative overflow-hidden min-h-[450px] lg:min-h-[550px]"
          >
            {/* Background Image with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: appleEase }}
                className="absolute inset-0"
              >
                <img 
                  src={activeProp.image}
                  alt={activeProp.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: appleEase }}
                >
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold font-heading text-white mb-4">
                    {activeProp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
                    {activeProp.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-3 mb-8">
                    {activeProp.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                        className="flex items-center gap-3 text-white"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Progress indicator */}
                  <div className="flex items-center gap-2">
                    {valueProps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeIndex 
                            ? 'w-10 bg-primary' 
                            : 'w-3 bg-white/40 hover:bg-white/60'
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
