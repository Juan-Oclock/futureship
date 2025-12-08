import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target, BookOpen } from 'lucide-react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  const credentials = [
    { icon: Award, label: "15+ Years Experience" },
    { icon: Users, label: "50+ Organisations Served" },
    { icon: Target, label: "100% Project Success Rate" },
    { icon: BookOpen, label: "Published Author & Speaker" },
  ];

  const expertise = [
    "Strategic Foresight & Scenario Planning",
    "Board & Council Facilitation",
    "Governance Advisory",
    "Leadership Team Alignment",
    "Collective Decision-Making",
    "Stakeholder Engagement",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-neutral-900 mb-6">
              Helping leaders navigate complexity with clarity
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              The Way Forward partners with boards, councils, and leadership teams to build the capabilities needed for effective collective decision-making in uncertain times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-primary pl-8"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <blockquote className="text-2xl md:text-3xl font-heading text-neutral-900 leading-relaxed">
              "To support groups to engage in more open dialogue, develop shared understanding, and find common ground for accountable collective decisions."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Simon Waller Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                  <img 
                    src="/image/simon waller.jpg" 
                    alt="Simon Waller"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Principal Advisor
              </p>
              <h2 className="text-4xl font-bold font-heading text-neutral-900 mb-2">
                Simon Waller
              </h2>
              <p className="text-neutral-500 mb-8">
                Strategic Advisor, Facilitator & Author
              </p>

              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  As a Non-Executive Director of a growing not-for-profit, Simon is acutely aware of the needs of boards and leadership teams navigating complexity.
                </p>
                <p>
                  With over 15 years of experience in strategic advisory, Simon has worked with councils, boards, and executive teams across Australia to build alignment, strengthen governance, and develop the collective decision-making capabilities needed to thrive in uncertain times.
                </p>
                <p>
                  Simon is a published author and sought-after speaker on topics including strategic foresight, governance, and leadership in complexity. His practical, facilitation-led approach helps groups move from dialogue to decisive action.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {credentials.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-neutral-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Expertise
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
                Areas of Focus
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                The Way Forward specializes in helping governance-rich organizations navigate high-stakes decisions with confidence and clarity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-stone-50 border-l-2 border-primary"
                  >
                    <span className="text-neutral-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-8">
              Born from the Boardroom
            </h2>
            
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                The Way Forward was born from a simple observation: too many leadership teams struggle to translate good intentions into aligned action.
              </p>
              <p>
                With expanding governance requirements, growing operational complexity, and increasing uncertainty, many leaders find themselves caught between the urgent and the important—unable to maintain the strategic focus their organizations need.
              </p>
              <p>
                We work with groups who make high-value, long-term decisions in governance-rich environments. We help new councillor groups transition from campaigning to collective decision-making. We work with boards to build trust and a sense of collective purpose. And we partner with executive teams to develop the strategic awareness needed to navigate an uncertain future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Ready to Move Forward?
            </h2>
            <p className="text-lg text-neutral-400 mb-10">
              Let's discuss how we can help your leadership team navigate complexity with clarity.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;