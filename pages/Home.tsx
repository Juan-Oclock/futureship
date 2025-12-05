import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Target, Users, CheckCircle2, Compass, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/ui/Button';
import TextMarquee from '../components/animations/TextMarquee';
import ScrollReveal from '../components/animations/ScrollReveal';
import ValuePropsGrid from '../components/sections/ValuePropsGrid';
import StatsHighlight from '../components/sections/StatsHighlight';
import FiftyFiftySection from '../components/sections/FiftyFiftySection';
import ScrollingTitles from '../components/sections/ScrollingTitles';
import StickyValueProps from '../components/sections/StickyValueProps';

// Strategic Capabilities Section with scroll-linked fade and position
const StrategicCapabilities: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const leftX = useTransform(scrollYProgress, [0, 0.2], ["25%", "0%"]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.1, 0.7, 0.78], [0, 1, 1, 0]);
  const chevronColor = useTransform(
    scrollYProgress, 
    [0.1, 0.25, 0.4, 0.55, 0.7],
    ["#1E3A5F", "#C9A227", "#1E3A5F", "#C9A227", "#1E3A5F"]
  );

  const services = [
    {
      title: "Collective Decision-Making",
      desc: "Proven tools and techniques for groups to build consensus and make transparent decisions. We facilitate structured dialogue that transforms diverse perspectives into aligned action.",
    },
    {
      title: "Advisory Partnership",
      desc: "Extended engagements where deeper trust, insight, and strategic intimacy develop over time. We become an extension of your leadership team, providing ongoing counsel and support.",
    },
    {
      title: "Scenario Planning",
      desc: "Develop robust future scenarios to stress-test strategy and build organisational resilience. Our methodology helps you prepare for multiple futures while remaining agile.",
    },
    {
      title: "Strategic Foresight",
      desc: "Facilitated workshops and training to anticipate change and shape long-term strategy. We help leadership teams see around corners and identify emerging opportunities before competitors.",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white pt-32 lg:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[60%]">
            <motion.div 
              className="lg:sticky lg:top-1/2 lg:-translate-y-1/2"
              style={{ opacity: leftOpacity, x: leftX }}
            >
              <div className="flex items-baseline gap-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 leading-[1.1] whitespace-nowrap">
                  Strategic Capabilities
                </h2>
                <motion.svg 
                  className="w-7 h-7 hidden md:block flex-shrink-0 mt-2" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  style={{ stroke: chevronColor }}
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 4l8 8-8 8" />
                  <path d="M12 4l8 8-8 8" />
                </motion.svg>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-[40%] lg:pl-12 pb-32">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4, margin: "-30% 0px -40% 0px" }}
                transition={{ 
                  opacity: { duration: 0.8, ease: "easeInOut" },
                  y: { duration: 0.6, ease: "easeOut" }
                }}
                className="min-h-[30vh] lg:min-h-[45vh] flex flex-col justify-center py-8 lg:py-16"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-slate-500 leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  // Value propositions data (EmuSearch style)
  const valueProps = [
    {
      icon: Lightbulb,
      title: "Uncommon Thinking",
      description: "We do things differently to unlock untapped potential in strategic advisory, opening new possibilities for your organisation.",
      details: [
        "Challenge conventional assumptions",
        "Explore alternative perspectives",
        "Discover hidden opportunities"
      ]
    },
    {
      icon: Target,
      title: "Forward Focus",
      description: "An agile response for today's context ensures diverse perspectives to help move your organisation and leadership forward.",
      details: [
        "Adaptive strategic frameworks",
        "Future-ready decision making",
        "Continuous alignment with goals"
      ]
    },
    {
      icon: Users,
      title: "Network Mastery",
      description: "Our partners bring relationships that go beyond business from 20+ years alongside remarkable leaders with a shared outlook on success.",
      details: [
        "Access to industry leaders",
        "Cross-sector collaboration",
        "Trusted advisory relationships"
      ]
    },
    {
      icon: Compass,
      title: "Strategic Clarity",
      description: "Cut through complexity to find the clearest path forward. We help leadership teams align on what matters most and make confident decisions.",
      details: [
        "Simplify complex challenges",
        "Build leadership alignment",
        "Create actionable roadmaps"
      ]
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "More than consultants—we're partners invested in your success. Our approach builds lasting capability within your organisation.",
      details: [
        "Long-term relationship focus",
        "Knowledge transfer emphasis",
        "Confidential and discreet"
      ]
    }
  ];

  // Stats data
  const stats = [
    { value: 4.9, suffix: "/5", label: "Client Satisfaction", decimals: 1 },
    { value: 100, suffix: "%", label: "Project Success Rate", decimals: 0 },
    { value: 15, suffix: "+", label: "Years Experience", decimals: 0 },
    { value: 50, suffix: "+", label: "Organisations Served", decimals: 0 },
  ];

  // Marquee items
  const marqueeItems = [
    "Strategic Foresight",
    "Scenario Planning",
    "Board Advisory",
    "Governance",
    "Decision Making",
    "Leadership",
    "Consensus Building",
    "Risk Management",
    "Future Planning",
    "Executive Coaching",
  ];

  // Timeline animation variants
  const timelineContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const timelineItem = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <div className="bg-slate-50">
      {/* Hero Section - EmuSearch Inspired */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/image/simon at forge event.jpg" 
            alt="Simon at Forge event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Animated headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading tracking-tight leading-[1.05] mb-8"
            >
              <span className="font-medium text-slate-900">Strategic Advisory to help </span>
              <span className="font-extrabold text-navy">move your organisation forward.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 max-w-2xl"
            >
              We partner with boards, councils, and leadership teams to navigate complexity, strengthen governance, and build collective decision-making capabilities.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto !bg-navy !text-white hover:!bg-navy-800 border-none font-semibold shadow-lg hover:shadow-xl transition-all">
                  Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto !border-slate-300 !text-slate-700 hover:!bg-slate-100 hover:!border-slate-400 transition-colors font-medium">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">Scroll</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Bar - Two Row Scrolling Logos */}
      <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-center text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em]">
            Trusted by forward-thinking organisations
          </p>
        </div>
        
        {/* Scrolling container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Row 1 - scrolling left */}
          <div className="flex mb-4">
            <motion.div 
              className="flex items-center gap-16 pr-16"
              animate={{ x: [0, -1920] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-16">
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Meridian Partners</span>
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Apex Council</span>
                  <span className="text-xl font-bold text-slate-300 tracking-wide whitespace-nowrap">NORTHGATE</span>
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Vanguard Group</span>
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Sterling & Co</span>
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Horizon Capital</span>
                  <span className="text-xl font-bold text-slate-300 tracking-wider whitespace-nowrap">BLACKWOOD</span>
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Atlas Ventures</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Row 2 - scrolling right */}
          <div className="flex">
            <motion.div 
              className="flex items-center gap-16 pr-16"
              animate={{ x: [-1920, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-16">
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Pinnacle Advisory</span>
                  <span className="text-xl font-bold text-slate-300 tracking-wide whitespace-nowrap">SUMMIT</span>
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Evergreen Trust</span>
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Keystone Group</span>
                  <span className="text-xl font-bold text-slate-300 whitespace-nowrap">NEXUS</span>
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Catalyst Partners</span>
                  <span className="text-xl font-semibold text-slate-300 whitespace-nowrap">Bridgewater Co</span>
                  <span className="text-xl font-bold text-slate-300 tracking-wider whitespace-nowrap">FORTIS</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Titles Section - EmuSearch Role Titles Style */}
      <ScrollingTitles 
        titles={[
          "Board",
          "CEO",
          "CFO",
          "COO",
          "CHRO",
          "Director",
          "Head of Council",
        ]}
      />

      {/* Value Props Section - Sticky Scroll Animation */}
      <StickyValueProps
        subtitle="The Way Forward Difference"
        title="We do things a little differently"
        items={valueProps}
      />

      {/* Stats Section - EmuSearch "4.9/5" Style */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsHighlight stats={stats} variant="light" />
        </div>
      </section>

      {/* Strategic Capabilities - Scroll Reveal - HIDDEN FOR NOW */}
      {/* <StrategicCapabilities /> */}

      {/* Methodology Section */}
      <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            
            {/* Left Column */}
            <div className="lg:w-5/12">
              <div className="lg:sticky lg:top-32">
                <ScrollReveal direction="left">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-4 block">Our Approach</span>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 leading-tight">
                    From Dialogue to
                    <span className="text-slate-400"> Decisive Action</span>
                  </h2>
                  <p className="text-slate-400 mb-10 leading-relaxed">
                    We guide leadership teams through a structured process that builds understanding, alignment, and the confidence to act decisively together.
                  </p>
                </ScrollReveal>

                {/* Image */}
                <ScrollReveal delay={0.2} className="hidden lg:block">
                  <div className="relative rounded-xl overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                      alt="Team collaborating on strategy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Building collective intelligence</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            
            {/* Right Column: Timeline */}
            <div className="lg:w-7/12 flex flex-col justify-center">
              <motion.div 
                className="relative border-l-2 border-slate-700 ml-4 pl-8 py-4 space-y-8"
                variants={timelineContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  {
                    title: "Open Dialogue",
                    desc: "Creating safe environments where diverse perspectives can be shared transparently and constructively.",
                    num: "01"
                  },
                  {
                    title: "Strategic Awareness",
                    desc: "Building shared understanding of operational complexities and future scenarios facing the organisation.",
                    num: "02"
                  },
                  {
                    title: "Consensus Building",
                    desc: "Structured tools to identify, compare, and prioritise strategic opportunities as a unified team.",
                    num: "03"
                  },
                  {
                    title: "Accountable Action",
                    desc: "Making transparent, collective decisions with clear ownership that drive the organisation forward.",
                    num: "04"
                  }
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    variants={timelineItem}
                    className="relative group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] top-6 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-white group-hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors">{step.num}</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-xl p-6 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-slate-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <ScrollReveal delay={0.3} className="mt-10 ml-4 pl-8">
                <Link to="/services">
                  <Button className="!bg-coral !text-white hover:!bg-coral-600 font-semibold shadow-lg">
                    Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 50/50 Section - EmuSearch "Diversity" Style */}
      <FiftyFiftySection
        leftNumber={50}
        rightNumber={50}
        title="Diversity in equal measure"
        description="Balanced representation is just part of our approach to diverse thinking. We believe the best decisions come from teams that embrace different perspectives and experiences."
        ctaText="Meet Our Team"
        ctaLink="/about"
      />

      {/* Case Studies Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <ScrollReveal className="max-w-2xl">
              <span className="text-[11px] font-semibold text-navy uppercase tracking-[0.2em] mb-4 block">Featured Stories</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4">
                Extraordinary Results
              </h2>
              <p className="text-slate-500 text-lg">
                Real partnerships delivering measurable impact for forward-thinking organisations.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} className="hidden md:block">
              <Link to="/case-studies">
                <Button variant="outline" className="group !border-slate-300 !text-slate-600 hover:!border-navy hover:!text-navy">
                  View All Stories <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column - Featured Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Link to="/case-studies" className="block h-full">
                <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200" 
                    alt="Scaling Strategic Governance"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Tags */}
                  <div className="absolute top-6 left-6 flex gap-3">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                      Financial Services
                    </span>
                    <span className="bg-navy text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                      Featured
                    </span>
                  </div>
                  
                  {/* Content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4">
                      Scaling Strategic Governance
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-3">
                        <span className="text-white font-bold text-4xl">+40%</span>
                        <span className="text-white/70 text-sm">Revenue Growth</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                        <ArrowRight className="w-5 h-5 text-white group-hover:text-navy transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Right Column - Two Stacked Cards */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="group flex-1"
              >
                <Link to="/case-studies" className="block h-full">
                  <div className="h-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" 
                        alt="Unifying Council Strategy"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                          Local Government
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-navy transition-colors">
                        Unifying Council Strategy
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-navy font-bold text-3xl">100%</span>
                        <span className="text-slate-400 text-sm">Consensus Achieved</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="group flex-1"
              >
                <Link to="/case-studies" className="block h-full">
                  <div className="h-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
                        alt="Sustainability as Strategy"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                          Retail
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-navy transition-colors">
                        Sustainability as Strategy
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-navy font-bold text-3xl">-60%</span>
                        <span className="text-slate-400 text-sm">Supply Chain Risk</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-12 md:hidden text-center">
            <Link to="/case-studies">
              <Button variant="outline" className="w-full !border-slate-300">View All Stories</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-tight">
              Ready to move forward
              <br />
              <span className="text-slate-300">with clarity?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help your leadership team navigate complexity and make decisions that drive lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="!bg-coral !text-white hover:!bg-coral-600 font-semibold shadow-lg hover:shadow-xl transition-all">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline" className="!border-white/20 !text-white hover:!bg-white/10">
                  View Our Results
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles/Insights Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <ScrollReveal className="max-w-2xl">
              <span className="text-[11px] font-semibold text-navy uppercase tracking-[0.2em] mb-4 block">Insights & Perspectives</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4">
                Latest Thinking
              </h2>
              <p className="text-slate-500 text-lg">
                Explore our latest articles on strategic foresight, governance, and leadership.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} className="hidden md:block">
              <Link to="/blog">
                <Button variant="outline" className="group !border-slate-300 !text-slate-600 hover:!border-navy hover:!text-navy">
                  View All Articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                slug: "future-of-strategic-governance",
                category: "Governance",
                title: "The Future of Strategic Governance in Uncertain Times",
                excerpt: "How boards and leadership teams can navigate complexity while maintaining strategic clarity.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
                date: "Dec 2, 2024",
                readTime: "5 min",
                author: {
                  name: "Simon Waller",
                  image: "/image/simon waller.jpg"
                }
              },
              {
                id: 2,
                slug: "building-consensus-leadership-teams",
                category: "Leadership",
                title: "Building Consensus in Diverse Leadership Teams",
                excerpt: "Practical frameworks for facilitating open dialogue and finding common ground.",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
                date: "Nov 28, 2024",
                readTime: "7 min",
                author: {
                  name: "Simon Waller",
                  image: "/image/simon waller.jpg"
                }
              },
              {
                id: 3,
                slug: "scenario-planning-local-government",
                category: "Foresight",
                title: "Scenario Planning for Local Government",
                excerpt: "Why councils need to embrace strategic foresight to prepare for the future.",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
                date: "Nov 20, 2024",
                readTime: "6 min",
                author: {
                  name: "Simon Waller",
                  image: "/image/simon waller.jpg"
                }
              }
            ].map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group"
              >
                <Link to={`/blog/${article.slug}`} className="block">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    {/* Full-bleed background image */}
                    <img 
                      src={article.image} 
                      alt={article.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark gradient overlay - from top */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/70 to-slate-900/20"></div>
                    
                    {/* Content at top */}
                    <div className="absolute top-0 left-0 right-0 p-6">
                      {/* Category tag */}
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider mb-4">
                        {article.category}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 leading-[1.1] line-clamp-3 group-hover:text-slate-300 transition-colors">
                        {article.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    {/* Author at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img 
                            src={article.author.image} 
                            alt={article.author.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                          />
                          <div>
                            <p className="text-white text-sm font-medium">{article.author.name}</p>
                            <p className="text-white/60 text-xs">{article.date} · {article.readTime}</p>
                          </div>
                        </div>
                        
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-all">
                          <ArrowRight className="w-4 h-4 text-white group-hover:text-navy transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
            <Link to="/blog">
              <Button variant="outline" className="w-full !border-slate-300">View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
