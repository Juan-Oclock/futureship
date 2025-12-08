import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@simonwaller.com.au",
      link: "mailto:hello@simonwaller.com.au"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "1300 66 55 85",
      link: "tel:1300665585"
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "PO Box 29 Mt. Martha 3934, Vic Australia",
      link: null
    }
  ];

  const benefits = [
    "Free initial consultation",
    "Tailored strategic approach",
    "Response within 24 hours",
    "No obligation discussion"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 mb-6">
                Let's Start a Conversation
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-10">
                Ready to navigate complexity with clarity? Reach out to discuss how we can help your leadership team make better decisions together.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-neutral-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-neutral-600 hover:text-primary transition-colors"
                        >
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-neutral-600">{item.detail}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 shadow-xl border border-stone-200"
            >
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-neutral-900 mb-3">Message Sent!</h3>
                  <p className="text-neutral-600 mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    Send another message
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold font-heading text-neutral-900 mb-2">
                      Send us a message
                    </h2>
                    <p className="text-neutral-500">
                      Fill out the form below and we'll be in touch soon.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-neutral-900 placeholder:text-neutral-400"
                        placeholder="Jane Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-neutral-900 placeholder:text-neutral-400"
                        placeholder="jane@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-2">
                        Organisation
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-neutral-900 placeholder:text-neutral-400"
                        placeholder="Your organisation name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-neutral-900 placeholder:text-neutral-400 resize-none"
                        placeholder="Tell us about your strategic challenges or what you'd like to discuss..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={status === 'submitting'}
                      className="w-full justify-center"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                      {status !== 'submitting' && <ArrowRight className="w-5 h-5 ml-2" />}
                    </Button>

                    <p className="text-xs text-neutral-400 text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Common Questions
            </p>
            <h2 className="text-3xl font-bold font-heading text-neutral-900">
              What to Expect
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "What happens after I submit the form?",
                a: "We'll review your message and respond within 24 hours to schedule an initial conversation. This is a no-obligation discussion to understand your needs."
              },
              {
                q: "How long is the initial consultation?",
                a: "Our initial conversations typically run 30-45 minutes. We'll discuss your challenges, goals, and explore whether our approach is a good fit for your organisation."
              },
              {
                q: "What types of organisations do you work with?",
                a: "We work with boards, councils, and leadership teams across sectors including local government, not-for-profits, and private enterprises navigating complex decisions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-stone-200 pb-6"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-neutral-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Not Ready to Talk Yet?
            </h2>
            <p className="text-lg text-neutral-400 mb-10">
              Explore our case studies and insights to learn more about how we help organisations navigate complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/case-studies">
                <Button size="lg">
                  View Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="outline" className="!border-white/20 !text-white hover:!bg-white/10">
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;