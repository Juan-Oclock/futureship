import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Button from '../components/ui/Button';
import { caseStudies, getCaseStudyBySlug } from '../data/caseStudies';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  // Find next and previous case studies
  const currentIndex = caseStudies.findIndex(cs => cs.slug === slug);
  const prevCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Full-width Hero Image */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Link */}
              <Link 
                to="/case-studies" 
                className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Link>

              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary text-white text-xs font-semibold uppercase tracking-wider">
                  {caseStudy.industry}
                </span>
                <span className="text-white/60 text-sm">
                  {caseStudy.client}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 max-w-3xl">
                {caseStudy.title}
              </h1>

              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                {caseStudy.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Results Bar */}
      <section className="bg-white py-16 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Main Result */}
            <div className="col-span-2 lg:col-span-1 border-l-4 border-primary pl-6">
              <p className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-2">
                {caseStudy.result}
              </p>
              <p className="text-neutral-500 text-sm font-medium">
                {caseStudy.resultLabel}
              </p>
            </div>

            {/* Other Metrics */}
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="border-l-4 border-stone-200 pl-6">
                <p className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">{metric.value}</p>
                <p className="text-neutral-500 text-sm font-medium">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                The Challenge
              </h2>
              <p className="text-xl text-neutral-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Our Approach
              </h2>
              <p className="text-xl text-neutral-700 leading-relaxed">
                {caseStudy.approach}
              </p>
            </motion.div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                The Outcome
              </h2>
              <p className="text-xl text-neutral-700 leading-relaxed">
                {caseStudy.outcome}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-20 bg-stone-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading text-neutral-900 leading-relaxed mb-10">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-neutral-900 text-lg">{caseStudy.testimonial.author}</p>
                <p className="text-neutral-500">{caseStudy.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8">
            {prevCase ? (
              <Link 
                to={`/case-studies/${prevCase.slug}`}
                className="group p-6 bg-stone-50 hover:bg-stone-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <ArrowLeft className="w-5 h-5 text-neutral-400 group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">Previous</p>
                    <p className="font-semibold text-neutral-900 group-hover:text-primary transition-colors">{prevCase.title}</p>
                    <p className="text-sm text-neutral-500">{prevCase.client}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextCase ? (
              <Link 
                to={`/case-studies/${nextCase.slug}`}
                className="group p-6 bg-stone-50 hover:bg-stone-100 transition-colors text-right"
              >
                <div className="flex items-center justify-end gap-4">
                  <div>
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">Next</p>
                    <p className="font-semibold text-neutral-900 group-hover:text-primary transition-colors">{nextCase.title}</p>
                    <p className="text-sm text-neutral-500">{nextCase.client}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ) : (
              <div />
            )}
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-neutral-400 mb-10">
              Let's discuss how we can help your organization achieve similar results.
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

export default CaseStudyDetail;
