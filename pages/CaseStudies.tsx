import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { caseStudies } from '../data/caseStudies';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 mb-6">
              Proven Impact
            </h1>
            <p className="text-lg text-neutral-600 max-w-xl">
              Real-world strategic partnerships that deliver measurable future-readiness and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <Link to={`/case-studies/${item.slug}`}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="aspect-[4/3] overflow-hidden bg-stone-100 group-hover:opacity-90 transition-opacity">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                        {item.industry}
                      </p>
                      <h2 className="text-3xl font-bold font-heading text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-neutral-500 mb-6">
                        {item.client}
                      </p>
                      <p className="text-neutral-600 leading-relaxed mb-8">
                        {item.description}
                      </p>

                      {/* Result Highlight */}
                      <div className="border-l-2 border-primary pl-6 mb-8">
                        <p className="text-4xl font-bold text-neutral-900 mb-1">
                          {item.result}
                        </p>
                        <p className="text-neutral-600">
                          {item.resultLabel}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="flex gap-8 mb-6">
                        {item.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx}>
                            <p className="text-xl font-semibold text-neutral-900">{metric.value}</p>
                            <p className="text-sm text-neutral-500">{metric.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Read More */}
                      <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Divider */}
                {index < caseStudies.length - 1 && (
                  <div className="border-b border-stone-200 mt-24" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-neutral-600 mb-10">
              Join the organizations that have transformed their strategic capabilities with The Way Forward.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;