import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, Lightbulb, Users, Globe, Shield, MessageSquare, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link, useLocation } from 'react-router-dom';
import ScrollReveal from '../components/animations/ScrollReveal';
import TextMarquee from '../components/animations/TextMarquee';
import StatsHighlight from '../components/sections/StatsHighlight';

const Services: React.FC = () => {
  const { hash } = useLocation();

  // Handle scroll to hash on load
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const services = [
    {
      id: 'futurist',
      icon: Compass,
      title: 'Futurist in Residence',
      desc: 'Longer-term engagements (12+ months) designed for clients who want to develop greater trust, insight, and intimacy.',
      features: ['Ongoing Strategic Support', 'Embedded Foresight', 'Long-term Transformation'],
      color: 'primary' 
    },
    {
      id: 'scenario',
      icon: Globe,
      title: 'Future Scenarios',
      desc: 'Developing plausible alternative futures to help shape an organisation\'s long-term strategy and test robustness.',
      features: ['Scenario Workshops', 'Strategy Stress-Testing', 'Contingency Planning'],
      color: 'secondary'
    },
    {
      id: 'risk',
      icon: Shield,
      title: 'Strategic Risk Workshops',
      desc: 'Facilitated sessions to identify, compare, and prioritise strategic opportunities and risks in a complex environment.',
      features: ['Risk Identification', 'Opportunity Prioritisation', 'Mitigation Strategies'],
      color: 'accent'
    },
    {
      id: 'consensus',
      icon: Users,
      title: 'Collective Decision Making',
      desc: 'Supporting leadership teams and boards to engage in open dialogue, find common ground, and build consensus.',
      features: ['Consensus Building Tools', 'Transparent Decision Frameworks', 'Shared Understanding'],
      color: 'neutral'
    },
    {
      id: 'facilitation',
      icon: MessageSquare,
      title: 'Board & Councillor Facilitation',
      desc: 'Helping new councillor groups and boards transition from campaigning to effective, collective decision making.',
      features: ['Transition Support', 'Board Trust Building', 'Governance Alignment'],
      color: 'primary_dark'
    },
    {
      id: 'training',
      icon: Lightbulb,
      title: 'Foresight Training',
      desc: 'Engaging training programs in strategic foresight and decision-making techniques for diverse groups.',
      features: ['The Art of Future Thinking', 'Decision Making Science', 'Team Capability Building'],
      color: 'secondary_dark'
    }
  ];

  const getColorClass = (color: string, type: 'bg' | 'text') => {
    // Map abstract colors to specific utility classes
    const map: Record<string, any> = {
        primary: { bg: 'group-hover:bg-coral_glow-900', text: 'group-hover:text-coral_glow-500' },
        secondary: { bg: 'group-hover:bg-blue_slate-900', text: 'group-hover:text-blue_slate-500' },
        accent: { bg: 'group-hover:bg-silver-800', text: 'group-hover:text-jet_black-600' },
        neutral: { bg: 'group-hover:bg-silver-900', text: 'group-hover:text-jet_black-500' },
        primary_dark: { bg: 'group-hover:bg-coral_glow-900', text: 'group-hover:text-coral_glow-400' },
        secondary_dark: { bg: 'group-hover:bg-blue_slate-900', text: 'group-hover:text-blue_slate-400' }
    };
    return map[color] ? map[color][type] : map['primary'][type];
  }

  // Marquee items for services
  const marqueeItems = [
    "Strategic Foresight",
    "Scenario Planning",
    "Board Advisory",
    "Governance",
    "Decision Making",
    "Leadership",
    "Consensus Building",
    "Risk Management",
  ];

  // Stats for services page
  const serviceStats = [
    { value: 100, suffix: "%", label: "Client Retention", decimals: 0 },
    { value: 15, suffix: "+", label: "Years Experience", decimals: 0 },
    { value: 200, suffix: "+", label: "Workshops Delivered", decimals: 0 },
    { value: 50, suffix: "+", label: "Organisations Served", decimals: 0 },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section - Full Width */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" 
            alt="Strategy planning" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[11px] font-semibold text-gold uppercase tracking-[0.2em] mb-4 block">
              Our Expertise
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-8 leading-[1.05]">
              Strategic Advisory
              <span className="text-gold"> Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              As governance requirements expand and operational complexity grows, leaders often struggle to maintain strategic focus. We offer engaging and effective approaches to bridge the gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="py-6 bg-slate-900 overflow-hidden border-b border-slate-800">
        <TextMarquee 
          items={marqueeItems}
          speed={25}
          className="text-xl md:text-2xl font-semibold text-white/80"
          separator={<span className="mx-6 text-gold">•</span>}
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsHighlight stats={serviceStats} variant="light" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-silver-900 transition-colors ${getColorClass(service.color, 'bg')}`}>
                <service.icon className={`w-7 h-7 text-neutral-dark transition-colors ${getColorClass(service.color, 'text')}`} />
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-neutral-dark mb-3">{service.title}</h3>
              <p className="text-neutral-medium mb-6 leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-neutral-600">
                    <span className="mr-2 mt-1 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <span className="inline-flex items-center text-primary font-semibold hover:underline">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NEW SECTION: Scenario Planning Spotlight */}
      <section id="scenario-planning" className="bg-white py-24 border-y border-gray-100 scroll-mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
               <div className="inline-block px-3 py-1 mb-6 border border-coral_glow-200 rounded-full bg-coral_glow-50">
                  <span className="text-coral_glow-600 text-xs font-bold uppercase tracking-widest">Strategic Resilience</span>
               </div>
               
               <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-dark mb-8 leading-tight">
                 Is your strategic plan outdated before it's even published?
               </h2>

               <div className="space-y-6 text-lg text-neutral-medium leading-relaxed">
                 <p className="font-medium text-neutral-dark">
                   If it sometimes feels like your strategic plan is outdated before it's even been published, or if your organisation's strategy is poorly understood by staff, or if you're struggling to get people to contribute meaningfully to your strategy development, then a well facilitated scenario planning engagement might be exactly what your organisation needs.
                 </p>
                 <p>
                   Scenario planning is a strategy development process that prioritises stakeholder engagement, collective ownership, and strategic resilience.
                 </p>
                 <p>
                   It is particularly relevant for organisations making long-term investments in uncertain environments that require high levels of governance.
                 </p>
               </div>

               <div className="mt-8">
                 <Link to="/contact">
                   <Button variant="secondary" className="bg-blue_slate-500 hover:bg-blue_slate-600">
                     Discuss Scenario Planning
                   </Button>
                 </Link>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full"
            >
               <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                 <div className="absolute inset-0 bg-blue_slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
                   alt="Scenario Planning Workshop" 
                   className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg max-w-xs">
                   <p className="text-jet_black-500 font-bold font-heading text-lg">"The future isn't predicted. It's prepared for."</p>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-12 bg-jet_black-500 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
           <div className="relative z-10">
             <h2 className="text-3xl font-bold font-heading mb-4">Are you ready to transition?</h2>
             <p className="text-silver-600 mb-8 max-w-2xl mx-auto">
               From campaigning to collective decision making. From operational noise to strategic focus. Let's start the conversation.
             </p>
             <Link to="/contact">
               <Button variant="primary" className="bg-white text-jet_black-500 hover:bg-silver-900 border-none">
                 Book a Discovery Call
               </Button>
             </Link>
           </div>
           {/* Decorative circles */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-coral_glow-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;