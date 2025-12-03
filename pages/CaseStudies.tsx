import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      id: 1,
      client: "Global Fintech Corp",
      industry: "Finance",
      title: "Navigating Market Transition",
      result: "40% Increase in New Market Revenue",
      tags: ["Foresight", "Strategy"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      client: "Metro City Council",
      industry: "Government",
      title: "Unanimous Adoption of 2030 Vision",
      result: "Unanimous Adoption of 2030 Vision",
      tags: ["Governance", "Consensus"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d528e9868?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      client: "EcoRetail Giants",
      industry: "Retail",
      title: "Sustainability as a Strategy",
      result: "Reduced Supply Chain Risk by 60%",
      tags: ["Transformation", "Sustainability"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop"
    }
  ];

  const chartData = [
    { name: 'Readiness', readiness: 85, growth: 70 },
    { name: 'Growth', readiness: 75, growth: 90 },
    { name: 'Consensus', readiness: 80, growth: 65 },
    { name: 'Innovation', readiness: 70, growth: 85 },
    { name: 'Sustainability', readiness: 90, growth: 75 }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-24 text-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-neutral-dark mb-6">
            Proven Impact
          </h1>
          <p className="text-xl text-neutral-600 mb-4 max-w-3xl">
            Real-world strategic partnerships that deliver measurable future-readiness and growth
          </p>
        </div>
      </motion.div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.15 * index,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/50 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{item.client}</p>
                  <p className="text-xs opacity-75">{item.industry}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-lg font-semibold text-neutral-dark mb-3">{item.result}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Data Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold font-heading text-neutral-dark mb-8 text-center">
              The Way Forward Effect: Measurable Strategic Outcomes
            </h2>
            <p className="text-lg text-center text-neutral-600 mb-12">
              Four-year partnership delivering consistent improvements in organizational readiness and market positioning
            </p>
          </div>
          <ResponsiveContainer width="100%" height="400" className="mb-12">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#71799e' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71799e' }} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
              <Bar dataKey="readiness" fill="#ef8354" radius={[4, 0, 0, 0]} barSize={40} />
              <Bar dataKey="growth" fill="#4f5d75" radius={[4, 0, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center pb-24"
      >
        <Link to="/contact">
          <Button size="lg" variant="outline">
            Start Your Strategic Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CaseStudies;