import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerReveal from '../components/animations/StaggerReveal';

const About: React.FC = () => {
  const team = [
    { name: "Simon Waller", role: "Principal Strategist", img: "https://picsum.photos/200/200?random=10" },
    { name: "David Chen", role: "Head of Foresight", img: "https://picsum.photos/200/200?random=11" },
    { name: "Amara Okeke", role: "Innovation Lead", img: "https://picsum.photos/200/200?random=12" },
    { name: "Marcus Thorne", role: "Governance Specialist", img: "https://picsum.photos/200/200?random=13" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-neutral-dark mb-6">Our Mission</h1>
        <p className="text-xl md:text-2xl font-light text-neutral-medium leading-relaxed">
          "To support groups to engage in more open dialogue, develop shared understanding, and find common ground for accountable collective decisions."
        </p>
      </motion.div>

      {/* Story */}
      <div className="bg-white py-16 mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <img src="https://picsum.photos/800/600?random=20" alt="Team meeting" className="rounded-2xl shadow-xl" />
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <h2 className="text-3xl font-bold font-heading text-neutral-dark mb-6">Experience from the Boardroom</h2>
             <p className="text-neutral-medium mb-4 leading-relaxed">
               As a Non-Executive Director of a growing not-for-profit, our founder Simon is acutely aware of the needs of boards and leadership teams.
             </p>
             <p className="text-neutral-medium mb-4 leading-relaxed">
               With expanding governance requirements, growing operational complexity, and increasing uncertainty, many leaders are struggling to maintain a strategic focus.
             </p>
             <p className="text-neutral-medium leading-relaxed">
               Futureship was born to solve this. We are particularly applicable to groups who make high-value, long-term decisions in governance-rich environments. We help new councillor groups transition from campaigning to collective decision making, and we work with boards to build trust and a sense of collective purpose.
             </p>
           </motion.div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          {...fadeInUp}
          className="text-3xl font-bold font-heading text-neutral-dark mb-12 text-center"
        >
          Meet the Minds
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-4 inline-block">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 right-0 bg-primary rounded-full p-2 border-2 border-white">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
              </div>
              <h3 className="text-lg font-bold font-heading text-neutral-dark">{member.name}</h3>
              <p className="text-primary font-medium text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;