import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/animations/ScrollReveal';

// Blog data
const blogPosts = [
  {
    slug: "future-of-strategic-governance",
    title: "The Future of Strategic Governance in Uncertain Times",
    category: "Governance",
    date: "December 2, 2024",
    readTime: "5 min read",
    author: {
      name: "Simon Waller",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    excerpt: "How boards and leadership teams can navigate complexity while maintaining strategic clarity and collective decision-making.",
    featured: true
  },
  {
    slug: "building-consensus-leadership-teams",
    title: "Building Consensus in Diverse Leadership Teams",
    category: "Leadership",
    date: "November 28, 2024",
    readTime: "7 min read",
    author: {
      name: "Simon Waller",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    excerpt: "Practical frameworks for facilitating open dialogue and finding common ground when perspectives differ.",
    featured: false
  },
  {
    slug: "scenario-planning-local-government",
    title: "Scenario Planning for Local Government",
    category: "Foresight",
    date: "November 20, 2024",
    readTime: "6 min read",
    author: {
      name: "Simon Waller",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    excerpt: "Why councils need to embrace strategic foresight to prepare for demographic shifts and climate challenges.",
    featured: false
  },
  {
    slug: "collective-intelligence-organizations",
    title: "Harnessing Collective Intelligence in Organizations",
    category: "Leadership",
    date: "November 15, 2024",
    readTime: "8 min read",
    author: {
      name: "Simon Waller",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    excerpt: "How to tap into the wisdom of crowds within your organization to make better decisions and foster innovation.",
    featured: false
  },
  {
    slug: "strategic-foresight-technological-disruption",
    title: "Strategic Foresight in the Age of AI Disruption",
    category: "Foresight",
    date: "November 8, 2024",
    readTime: "6 min read",
    author: {
      name: "Simon Waller",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    excerpt: "Preparing your organization for the transformative impact of artificial intelligence and automation.",
    featured: false
  },
  {
    slug: "decision-making-under-uncertainty",
    title: "Decision Making Under Uncertainty",
    category: "Governance",
    date: "October 30, 2024",
    readTime: "7 min read",
    author: {
      name: "Simon Waller",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    excerpt: "Practical tools and frameworks for making high-quality decisions when information is incomplete.",
    featured: false
  },
  {
    slug: "adaptive-leadership-change-management",
    title: "Adaptive Leadership: Thriving Through Constant Change",
    category: "Leadership",
    date: "October 22, 2024",
    readTime: "9 min read",
    author: {
      name: "Simon Waller",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    excerpt: "Why traditional change management fails and how adaptive leadership approaches create sustainable transformation.",
    featured: false
  },
  {
    slug: "municipal-innovation-climate-resilience",
    title: "Building Climate Resilience in Municipal Planning",
    category: "Foresight",
    date: "October 15, 2024",
    readTime: "6 min read",
    author: {
      name: "Simon Waller",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    excerpt: "How local governments can integrate climate resilience into long-term planning and infrastructure decisions.",
    featured: false
  },
  {
    slug: "board-dynamics-effective-governance",
    title: "The Dynamics of Effective Board Governance",
    category: "Governance",
    date: "October 8, 2024",
    readTime: "7 min read",
    author: {
      name: "Simon Waller",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    excerpt: "Understanding the interpersonal dynamics that enable boards to function at their highest level.",
    featured: false
  },
  {
    slug: "stakeholder-engagement-strategies",
    title: "Effective Stakeholder Engagement Strategies",
    category: "Leadership",
    date: "October 1, 2024",
    readTime: "5 min read",
    author: {
      name: "Simon Waller",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    excerpt: "Building meaningful relationships with stakeholders to drive organizational success and sustainable outcomes.",
    featured: false
  }
];

const categories = ["All", "Governance", "Leadership", "Foresight"];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-6 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-slate-700">Insights & Perspectives</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-navy/70">Journal</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Strategic thinking for leaders navigating complexity. Fresh perspectives on governance, leadership, and organizational foresight.
              </p>
            </div>
          </ScrollReveal>

          {/* Search & Filters */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy/30 transition-all shadow-sm"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-navy text-white shadow-lg shadow-navy/25"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Featured Article */}
          {selectedCategory === "All" && !searchTerm && featuredPost && (
            <ScrollReveal className="mb-16">
              <Link to={`/blog/${featuredPost.slug}`} className="group block">
                <motion.article 
                  className="relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50"
                  whileHover={{ y: -4 }}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-72 lg:h-[450px] overflow-hidden">
                      <img
                        src={featuredPost.heroImage}
                        alt={featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute top-6 left-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-navy uppercase tracking-wide">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                        <span className="font-medium text-navy">{featuredPost.category}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span>{featuredPost.date}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span>{featuredPost.readTime}</span>
                      </div>

                      <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-navy transition-colors">
                        {featuredPost.title}
                      </h2>

                      <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <img
                            src={featuredPost.author.image}
                            alt={featuredPost.author.name}
                            className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
                          />
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">{featuredPost.author.name}</div>
                            <div className="text-slate-500 text-xs">Author</div>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-2 text-navy font-semibold group-hover:gap-3 transition-all">
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </ScrollReveal>
          )}

          {/* Articles Grid - Matching Home Page Card Style */}
          <AnimatePresence mode="wait">
            {regularPosts.length > 0 ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {regularPosts.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        {/* Full-bleed background image */}
                        <img 
                          src={post.heroImage} 
                          alt={post.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Dark gradient overlay - from top */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/70 to-slate-900/20"></div>
                        
                        {/* Content at top */}
                        <div className="absolute top-0 left-0 right-0 p-6">
                          {/* Category tag */}
                          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider mb-4">
                            {post.category}
                          </span>
                          
                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 leading-[1.1] line-clamp-3 group-hover:text-slate-300 transition-colors">
                            {post.title}
                          </h3>
                          
                          {/* Excerpt */}
                          <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                        
                        {/* Author at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img 
                                src={post.author.image} 
                                alt={post.author.name}
                                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                              />
                              <div>
                                <p className="text-white text-sm font-medium">{post.author.name}</p>
                                <p className="text-white/60 text-xs">{post.date} · {post.readTime}</p>
                              </div>
                            </div>
                            
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-all">
                              <ArrowRight className="w-4 h-4 text-white group-hover:text-navy transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-7 h-7 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No articles found</h3>
                <p className="text-slate-500 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-xl font-medium hover:bg-navy/90 transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Section - Modern Design */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Newsletter
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                Stay ahead of the curve
              </h2>
              <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Get exclusive insights on strategic governance, leadership trends, and organizational foresight delivered to your inbox.
              </p>

              {/* Subscribe Form */}
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-4 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-primary transition-all"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    {isSubscribed ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Trust indicators */}
              <p className="text-neutral-500 text-sm mt-6">
                Join 2,000+ leaders. Unsubscribe anytime.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Blog;