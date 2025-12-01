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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          >
            <source src="/image/MAVTech-cinemagraph-lowres.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <motion.div 
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1 }}
            className="max-w-4xl"
          >
            <motion.div 
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }} 
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-white"></span>
              <span className="text-sm font-semibold text-white tracking-wide">Governance & Strategy</span>
            </motion.div>
            
            <motion.h1 
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tight leading-[1.1] mb-8"
            >
              Maintain Strategic Focus
              <br className="block md:hidden" />
              <span className="hidden md:inline"> in </span>
              <span className="text-amber-200 italic underline decoration-amber-200/30 decoration-2 underline-offset-4">Uncertain Times.</span>
            </motion.h1>
            
            <motion.p 
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
              }}
              className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 max-w-2xl font-light drop-shadow-sm"
            >
              We help boards, councillors, and leadership teams navigate operational complexity, improve governance, and build collective decision-making skills.
            </motion.p>
            
            <motion.div 
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto !bg-white !text-black hover:!bg-gray-100 border-none font-bold">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto !border-white !text-white hover:!bg-amber-200 hover:!text-black transition-colors" style={{ borderWidth: '0.7px' }}>
                  Explore Our Approach
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/50 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            {...fadeInUp}
            className="text-center text-xs font-bold text-neutral-medium/60 uppercase tracking-widest mb-8"
          >
            Trusted by forward-thinking organizations
          </motion.p>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {/* Placeholder Logos - All Sans Serif */}
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold font-heading text-neutral-dark tracking-tight">AcmeCorp</motion.h3>
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold font-mono text-neutral-dark">Globex</motion.h3>
            <motion.h3 variants={fadeInUp} className="text-2xl font-extrabold font-sans text-neutral-dark tracking-widest">SOYLENT</motion.h3>
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold font-sans italic text-neutral-dark">Umbrella</motion.h3>
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold font-mono text-neutral-dark tracking-tighter">Initech</motion.h3>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-dark mb-4">Why Futureship Matters</h2>
            <p className="text-lg text-neutral-medium">
              Expanding governance requirements and operational complexity are distracting leaders. We provide the tools to get the most out of your collective expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Compass,
                title: "Strategic Foresight",
                desc: "Facilitated strategic risk workshops and training to help you shape long-term strategy.",
                color: "text-coral_glow-500",
                bg: "bg-coral_glow-900", // Light bg
                border: "hover:border-coral_glow-800"
              },
              {
                icon: Target,
                title: "Scenario Planning",
                desc: "Develop future scenarios to help shape an organization's long-term strategy.",
                color: "text-blue_slate-500",
                bg: "bg-blue_slate-900",
                border: "hover:border-blue_slate-800"
              },
              {
                icon: Users,
                title: "Collective Decision Making",
                desc: "Tools and techniques for groups to build consensus and make transparent decisions.",
                color: "text-coral_glow-400", // Darker coral
                bg: "bg-coral_glow-900",
                border: "hover:border-coral_glow-700"
              },
              {
                icon: Zap,
                title: "Futurist in Residence",
                desc: "Longer-term engagements (12+ months) where greater trust, insight, and intimacy develop.",
                color: "text-jet_black-500",
                bg: "bg-silver-900",
                border: "hover:border-silver-600"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 * idx,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={`p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all bg-white ${item.border}`}
              >
                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                  <item.icon className={`h-7 w-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold font-heading text-neutral-dark mb-3">{item.title}</h3>
                <p className="text-neutral-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology / Approach - Updated to Modern Timeline Style */}
      <section className="py-24 bg-jet_black-500 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-jet_black-400/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral_glow-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Text & Image Blend */}
            <div className="lg:w-5/12">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <div className="inline-flex items-center space-x-2 mb-6">
                    <span className="w-8 h-px bg-coral_glow-500"></span>
                    <span className="text-coral_glow-500 text-xs font-bold uppercase tracking-widest">Our Methodology</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
                    Open Dialogue, <br/>
                    <span className="text-gray-400">Shared Understanding.</span>
                  </h2>

                  <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
                    We support boards and leadership teams to engage in more open dialogue to find common ground. From this foundation, we provide the frameworks to make accountable collective decisions.
                  </p>
                </motion.div>

                {/* Sleek Image Blend */}
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group hidden lg:block"
                >
                   <div className="absolute inset-0 bg-gradient-to-t from-jet_black-500 via-transparent to-transparent z-10 opacity-60"></div>
                   <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                      alt="Team collaborating on strategy"
                      className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                        <div className="flex items-center space-x-3 mb-1">
                          <CheckCircle2 className="w-5 h-5 text-coral_glow-500" />
                          <span className="text-white font-bold text-sm uppercase tracking-wider">Collective Intelligence</span>
                        </div>
                        <p className="text-gray-200 text-sm font-light">
                          Transitioning from individual campaigning to collective purpose.
                        </p>
                      </div>
                   </div>
                </motion.div>
              </div>
            </div>
            
            {/* Right Column: Timeline Style List */}
            <div className="lg:w-7/12 flex flex-col justify-center">
              <motion.div 
                className="relative border-l border-white/10 ml-6 md:ml-8 pl-8 md:pl-12 py-4 space-y-12"
                variants={timelineContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  {
                    title: "Open Dialogue",
                    desc: "Facilitating environments where diverse decision-making groups can share perspectives safely and transparently.",
                    num: "01"
                  },
                  {
                    title: "Strategic Awareness",
                    desc: "Developing shared understanding of the operational complexities and future scenarios facing the organization.",
                    num: "02"
                  },
                  {
                    title: "Consensus Building",
                    desc: "Tools and techniques to help boards and councillors identify, compare, and prioritize strategic opportunities.",
                    num: "03"
                  },
                  {
                    title: "Accountable Action",
                    desc: "Making transparent and accountable collective decisions that move the organization forward.",
                    num: "04"
                  }
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    variants={timelineItem}
                    className="relative group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[49px] md:-left-[65px] top-8 flex items-center justify-center">
                       <div className="w-10 h-10 rounded-full bg-jet_black-400 border-2 border-jet_black-500 group-hover:border-coral_glow-500 group-hover:bg-coral_glow-500 transition-all duration-300 flex items-center justify-center z-10 shadow-lg">
                          <span className="text-xs font-bold text-white group-hover:scale-110 transition-transform">{step.num}</span>
                       </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1">
                      <h3 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-coral_glow-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                {...fadeInUp}
                className="mt-12 ml-6 md:ml-8 pl-8 md:pl-12"
              >
                <Link to="/services">
                  <Button className="!bg-white !text-black hover:!bg-gray-200 border-none font-bold px-8 py-4 text-lg w-full sm:w-auto">
                    See How We Work <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Section: Scenario Planning */}
      <section className="py-24 bg-neutral-light border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 order-2 md:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                 <img 
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1200" 
                    alt="Strategic discussion" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-blue_slate-900/10"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 order-1 md:order-2"
            >
               <div className="inline-block px-3 py-1 mb-6 border border-blue_slate-200 rounded-full bg-blue_slate-50">
                  <span className="text-blue_slate-600 text-xs font-bold uppercase tracking-widest">In Focus</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-dark mb-6">
                 Is your strategic plan outdated before it's even published?
               </h2>
               <p className="text-lg text-neutral-medium mb-6 leading-relaxed">
                 If you're struggling to get meaningful contribution to strategy development, a well-facilitated scenario planning engagement might be exactly what your organisation needs.
               </p>
               <p className="text-neutral-medium mb-8 leading-relaxed">
                 We prioritize stakeholder engagement and strategic resilience—perfect for organizations making long-term investments in uncertain environments.
               </p>
               <Link to="/services#scenario-planning">
                 <Button variant="secondary" className="bg-blue_slate-500 hover:bg-blue_slate-600 shadow-none">
                   Explore Scenario Planning
                 </Button>
               </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies / Impact Stories Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div 
              {...fadeInUp}
              className="max-w-2xl"
            >
              <div className="inline-block px-3 py-1 mb-4 border border-gray-200 rounded-full bg-gray-50">
                 <span className="text-gray-600 text-xs font-bold uppercase tracking-widest">Proven Results</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-dark mb-4">Impact Stories</h2>
              <p className="text-lg text-neutral-medium">
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
                 <Button variant="outline" className="group">
                   View All Cases <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </Button>
               </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                industry: "Fintech",
                title: "Scaling Strategic Governance",
                stat: "+40%",
                statLabel: "Revenue Growth",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 2,
                industry: "Government",
                title: "Unifying Council Strategy",
                stat: "100%",
                statLabel: "Consensus Reached",
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
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-neutral-dark">
                          {item.industry}
                        </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-neutral-dark mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center space-x-3 text-sm border-t border-gray-100 pt-3 mt-3">
                    <span className="text-primary font-bold text-lg">{item.stat}</span>
                    <span className="text-neutral-medium">{item.statLabel}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
             <Link to="/case-studies">
               <Button variant="outline" className="w-full">View All Cases</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-coral_glow-500 text-white relative overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
             alt="Earth from space" 
             className="w-full h-full object-cover opacity-10 mix-blend-overlay"
           />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div {...scaleUp}>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Stop reacting to change. <br/>Start shaping it.</h2>
            <p className="text-xl text-coral_glow-900 mb-10 max-w-2xl mx-auto font-medium">
              Your competition is preparing for tomorrow. Are you ready to lead the future of your industry?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact">
                 <button className="bg-white text-coral_glow-500 hover:bg-gray-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-none">
                   Schedule a Strategy Session
                 </button>
               </Link>
               <Link to="/case-studies">
                  <button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                    View Our Results
                  </button>
               </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;