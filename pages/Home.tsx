import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Compass, Zap, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  };

  const scaleUp = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  // Specific variants for the timeline section
  const timelineContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each card revealing
        delayChildren: 0.2
      }
    }
  };

  const timelineItem = {
    hidden: { opacity: 0, x: 100 }, // Start 100px to the right
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
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/image/simon at forge event.jpg" 
            alt="Strategic advisory session"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay - stronger on left for text, lighter on right to show speaker */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-16">
          <motion.div 
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1 }}
            className="max-w-2xl"
          >
            <motion.h1 
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-slate-900 tracking-tight leading-[1.05] mb-8"
            >
              Navigate Forward
              <br />
              <span className="text-navy">With Clarity.</span>
            </motion.h1>
            
            <motion.p 
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
              }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl"
            >
              We partner with boards, councils, and leadership teams to navigate complexity, strengthen governance, and build collective decision-making capabilities.
            </motion.p>
            
            <motion.div 
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto !bg-navy !text-white hover:!bg-navy-800 border-none font-semibold shadow-lg">
                  Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto !border-slate-400 !text-slate-700 hover:!bg-slate-100 hover:!border-slate-500 transition-colors font-medium">
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Refined scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar - Scrolling Logos */}
      <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            {...fadeInUp}
            className="text-center text-[11px] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-10"
          >
            Trusted by forward-thinking organizations
          </motion.p>
        </div>
        
        {/* Scrolling container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Row 1 - scrolling left */}
          <div className="flex mb-6">
            <motion.div 
              className="flex items-center gap-16 pr-16"
              animate={{ x: [0, -1920] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-16">
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Meridian Partners</span>
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Apex Council</span>
                  <span className="text-xl font-bold text-slate-500 tracking-wide whitespace-nowrap">NORTHGATE</span>
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Vanguard Group</span>
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Sterling & Co</span>
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Horizon Capital</span>
                  <span className="text-xl font-bold text-slate-500 tracking-wider whitespace-nowrap">BLACKWOOD</span>
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Atlas Ventures</span>
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
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Pinnacle Advisory</span>
                  <span className="text-xl font-bold text-slate-500 tracking-wide whitespace-nowrap">SUMMIT</span>
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Evergreen Trust</span>
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Keystone Group</span>
                  <span className="text-xl font-bold text-slate-500 whitespace-nowrap">NEXUS</span>
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Catalyst Partners</span>
                  <span className="text-xl font-semibold text-slate-500 whitespace-nowrap">Bridgewater Co</span>
                  <span className="text-xl font-bold text-slate-500 tracking-wider whitespace-nowrap">FORTIS</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[11px] font-semibold text-navy uppercase tracking-[0.2em] mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-5">Strategic Capabilities</h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We equip leadership teams with proven frameworks and methodologies to navigate complexity and drive meaningful outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Compass,
                title: "Strategic Foresight",
                desc: "Facilitated workshops and training to anticipate change and shape long-term strategy.",
              },
              {
                icon: Target,
                title: "Scenario Planning",
                desc: "Develop robust future scenarios to stress-test strategy and build organizational resilience.",
              },
              {
                icon: Users,
                title: "Collective Decision Making",
                desc: "Proven tools and techniques for groups to build consensus and make transparent decisions.",
              },
              {
                icon: Zap,
                title: "Advisory Partnerships",
                desc: "Extended engagements where deeper trust, insight, and strategic intimacy develop over time.",
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * idx,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="group p-8 rounded-xl bg-white border border-slate-200/60 hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-navy/5 group-hover:bg-navy group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            
            {/* Left Column */}
            <div className="lg:w-5/12">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <span className="text-[11px] font-semibold text-gold uppercase tracking-[0.2em] mb-4 block">Our Approach</span>

                  <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 leading-tight">
                    From Dialogue to
                    <span className="text-slate-400"> Decisive Action</span>
                  </h2>

                  <p className="text-slate-400 mb-10 leading-relaxed">
                    We guide leadership teams through a structured process that builds understanding, alignment, and the confidence to act decisively together.
                  </p>
                </motion.div>

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden group hidden lg:block"
                >
                   <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                      alt="Team collaborating on strategy"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                   <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-gold" />
                        <span className="text-white text-sm font-medium">Building collective intelligence</span>
                      </div>
                   </div>
                </motion.div>
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
                    desc: "Building shared understanding of operational complexities and future scenarios facing the organization.",
                    num: "02"
                  },
                  {
                    title: "Consensus Building",
                    desc: "Structured tools to identify, compare, and prioritize strategic opportunities as a unified team.",
                    num: "03"
                  },
                  {
                    title: "Accountable Action",
                    desc: "Making transparent, collective decisions with clear ownership that drive the organization forward.",
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
                       <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-slate-400 group-hover:text-gold transition-colors">{step.num}</span>
                       </div>
                    </div>

                    <div className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-xl p-6 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                {...fadeInUp}
                className="mt-10 ml-4 pl-8"
              >
                <Link to="/services">
                  <Button className="!bg-gold !text-slate-900 hover:!bg-gold-400 font-semibold shadow-lg shadow-gold/10">
                    Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Section: Scenario Planning */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 order-2 md:order-1"
            >
              <div className="relative rounded-xl overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1200" 
                    alt="Strategic discussion" 
                    className="w-full h-full object-cover"
                 />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 order-1 md:order-2"
            >
               <span className="text-[11px] font-semibold text-navy uppercase tracking-[0.2em] mb-4 block">Featured Service</span>
               <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-5">
                 Is your strategic plan outdated before it's published?
               </h2>
               <p className="text-slate-500 mb-6 leading-relaxed">
                 If you're struggling to get meaningful contribution to strategy development, a well-facilitated scenario planning engagement might be exactly what your organisation needs.
               </p>
               <p className="text-slate-500 mb-8 leading-relaxed">
                 We prioritize stakeholder engagement and strategic resilience—perfect for organizations making long-term investments in uncertain environments.
               </p>
               <Link to="/services#scenario-planning">
                 <Button className="!bg-navy hover:!bg-navy-800 !text-white font-medium">
                   Explore Scenario Planning
                 </Button>
               </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div 
              {...fadeInUp}
              className="max-w-2xl"
            >
              <span className="text-[11px] font-semibold text-navy uppercase tracking-[0.2em] mb-4 block">Client Success</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Proven Impact</h2>
              <p className="text-slate-500">
                We measure our success by the tangible growth and resilience of our clients.
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="hidden md:block"
            >
               <Link to="/case-studies">
                 <Button variant="outline" className="group !border-slate-300 !text-slate-600 hover:!border-navy hover:!text-navy">
                   View All Cases <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </Button>
               </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                industry: "Financial Services",
                title: "Scaling Strategic Governance",
                stat: "+40%",
                statLabel: "Revenue Growth",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 2,
                industry: "Local Government",
                title: "Unifying Council Strategy",
                stat: "100%",
                statLabel: "Consensus Achieved",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 3,
                industry: "Retail",
                title: "Sustainability as Strategy",
                stat: "-60%",
                statLabel: "Supply Chain Risk",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <Link to="/case-studies">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-slate-200">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                        <span className="bg-white px-3 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                          {item.industry}
                        </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-navy transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="text-gold font-bold text-xl">{item.stat}</span>
                    <span className="text-slate-400">{item.statLabel}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 md:hidden text-center">
             <Link to="/case-studies">
               <Button variant="outline" className="w-full !border-slate-300">View All Cases</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div {...scaleUp}>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Ready to move forward
              <br />
              <span className="text-gold">with clarity?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help your leadership team navigate complexity and make decisions that drive lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact">
                 <Button size="lg" className="!bg-gold !text-slate-900 hover:!bg-gold-400 font-semibold shadow-lg shadow-gold/20">
                   Schedule a Conversation
                 </Button>
               </Link>
               <Link to="/case-studies">
                  <Button size="lg" variant="outline" className="!border-white/20 !text-white hover:!bg-white/10">
                    View Our Results
                  </Button>
               </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;