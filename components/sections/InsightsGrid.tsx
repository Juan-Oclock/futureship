import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Insight {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

interface InsightsGridProps {
  insights: Insight[];
  className?: string;
  showViewAll?: boolean;
}

const InsightsGrid: React.FC<InsightsGridProps> = ({
  insights,
  className = '',
  showViewAll = true,
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className={className}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {insights.map((insight) => (
          <motion.article
            key={insight.id}
            variants={item}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 h-full flex flex-col">
              {/* Image */}
              {insight.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                    {insight.category}
                  </span>
                  <div className="flex items-center text-slate-400 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {insight.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-navy transition-colors line-clamp-2">
                  {insight.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {insight.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center text-navy font-medium text-sm mt-auto">
                  <span className="group-hover:mr-2 transition-all duration-300">Read article</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* View all link */}
      {showViewAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/insights"
            className="inline-flex items-center text-navy font-semibold hover:text-navy-800 transition-colors group"
          >
            View all insights
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default InsightsGrid;
