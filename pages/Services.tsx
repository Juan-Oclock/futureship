import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Users, Globe, Shield, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link, useLocation } from 'react-router-dom';

const Services: React.FC = () => {
  const { hash } = useLocation();

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
      desc: 'Longer-term engagements (12+ months) designed for clients who want to develop greater trust, insight, and strategic intimacy.',
      features: ['Ongoing Strategic Support', 'Embedded Foresight Capability', 'Long-term Transformation Partnership'],
    },
    {
      id: 'scenario',
      icon: Globe,
      title: 'Future Scenarios',
      desc: 'Developing plausible alternative futures to help shape your organisation\'s long-term strategy and test its robustness.',
      features: ['Scenario Development Workshops', 'Strategy Stress-Testing', 'Contingency Planning'],
    },
    {
      id: 'risk',
      icon: Shield,
      title: 'Strategic Risk Workshops',
      desc: 'Facilitated sessions to identify, compare, and prioritise strategic opportunities and risks in complex environments.',
      features: ['Risk Identification & Mapping', 'Opportunity Prioritisation', 'Mitigation Strategy Development'],
    },
    {
      id: 'consensus',
      icon: Users,
      title: 'Collective Decision Making',
      desc: 'Supporting leadership teams and boards to engage in open dialogue, find common ground, and build genuine consensus.',
      features: ['Consensus Building Frameworks', 'Transparent Decision Processes', 'Shared Understanding Development'],
    },
    {
      id: 'facilitation',
      icon: MessageSquare,
      title: 'Board & Council Facilitation',
      desc: 'Helping new councillor groups and boards transition from campaigning to effective, collective decision making.',
      features: ['Transition Support Programs', 'Board Trust Building', 'Governance Alignment'],
    },
    {
      id: 'training',
      icon: Lightbulb,
      title: 'Foresight Training',
      desc: 'Engaging training programs in strategic foresight and decision-making techniques for diverse leadership groups.',
      features: ['The Art of Future Thinking', 'Decision Making Under Uncertainty', 'Team Capability Building'],
    }
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Organisations Served" },
    { value: "200+", label: "Workshops Delivered" },
    { value: "100%", label: "Client Retention" },
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
              Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-neutral-900 mb-6">
              Strategic Advisory for Complex Decisions
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We partner with boards, councils, and leadership teams to navigate complexity, strengthen governance, and build collective decision-making capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-neutral-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900">
              Our Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-stone-50 p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-stone-200"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold font-heading text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-neutral-600">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                  Enquire <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario Planning Feature */}
      <section id="scenario-planning" className="py-20 bg-stone-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Featured Service
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
                Is your strategic plan outdated before it's even published?
              </h2>
              
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  If your organisation's strategy is poorly understood by staff, or if you're struggling to get people to contribute meaningfully to strategy development, then a well-facilitated scenario planning engagement might be exactly what you need.
                </p>
                <p>
                  Scenario planning is a strategy development process that prioritises stakeholder engagement, collective ownership, and strategic resilience. It's particularly relevant for organisations making long-term investments in uncertain environments.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg">
                    Discuss Scenario Planning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Scenario Planning Workshop" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-lg max-w-xs">
                  <p className="text-lg font-heading font-semibold text-neutral-900">
                    "The future isn't predicted. It's prepared for."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We guide leadership teams through a structured process that builds understanding, alignment, and the confidence to act decisively together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Open Dialogue", desc: "Creating safe environments for diverse perspectives to be shared transparently." },
              { num: "02", title: "Strategic Awareness", desc: "Building shared understanding of complexities and future scenarios." },
              { num: "03", title: "Consensus Building", desc: "Structured tools to identify and prioritise strategic opportunities." },
              { num: "04", title: "Accountable Action", desc: "Making transparent, collective decisions with clear ownership." },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-stone-200 mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
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
              From operational noise to strategic focus. Let's start the conversation about how we can help your organisation.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;