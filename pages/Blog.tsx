import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, User, Filter, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/animations/ScrollReveal';

// Blog data - same as BlogPost.tsx but with more articles
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
    title: "Decision Making Under Uncertainty: A Leader's Guide",
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
  }
];

const categories = ["All", "Governance", "Leadership", "Foresight"];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Minimal */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <ScrollReveal>
            <div className="max-w-4xl">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-6 block">
                Strategic Insights
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 leading-tight">
                Latest thinking on
                <span className="text-navy ml-3">governance & leadership</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-2xl">
                Research-backed perspectives for forward-thinking organizations navigating complexity and change.
              </p>
            </div>
          </ScrollReveal>

          {/* Search & Filter - Minimal Design */}
          <div className="flex flex-col md:flex-row gap-4 mb-16">
            <ScrollReveal delay={0.1} className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy transition-all bg-white text-slate-900 placeholder-slate-400 text-sm"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-3 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-navy text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === "All" && !searchTerm && featuredPost && (
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
            <ScrollReveal className="mb-12">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3 block">
                Featured Article
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
                {featuredPost.title}
              </h2>
            </ScrollReveal>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Link to={`/blog/${featuredPost.slug}`} className="block">
                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <div className="aspect-[16/10] md:aspect-[21/9]">
                    <img
                      src={featuredPost.heroImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  </div>

                  {/* Floating content overlay */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-navy text-white px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider">
                          {featuredPost.category}
                        </span>
                        <span className="text-slate-500 text-sm">{featuredPost.date}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500 text-sm">{featuredPost.readTime}</span>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-4">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={featuredPost.author.image}
                            alt={featuredPost.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-slate-900 text-sm font-medium">{featuredPost.author.name}</span>
                        </div>

                        <div className="flex items-center gap-2 text-navy font-medium text-sm">
                          Read Article
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <ScrollReveal className="mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
                  {searchTerm ? `Search Results (${regularPosts.length})` :
                   selectedCategory !== "All" ? `${selectedCategory} Articles` :
                   "All Articles"}
                </h2>
                {!searchTerm && selectedCategory === "All" && (
                  <p className="text-slate-600">Recent insights and perspectives</p>
                )}
              </div>
              {regularPosts.length > 0 && (
                <span className="text-sm text-slate-500">
                  {regularPosts.length} article{regularPosts.length !== 1 ? 's' : ''}
                </span>
              )}
            </div>
            {regularPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate-500 text-lg mb-4">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="text-navy hover:text-navy-700 text-sm font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </ScrollReveal>

          {regularPosts.length > 0 && (
            <div className="space-y-6">
              {regularPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <article className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Image */}
                        <div className="relative md:w-1/3 aspect-[4/3] md:aspect-square rounded-lg overflow-hidden">
                          <img
                            src={post.heroImage}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider">
                              {post.category}
                            </span>
                            <span className="text-slate-500 text-sm">{post.date}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-500 text-sm">{post.readTime}</span>
                          </div>

                          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 leading-tight group-hover:text-navy transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-slate-600 leading-relaxed line-clamp-2 md:line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                            <div className="flex items-center gap-3">
                              <img
                                src={post.author.image}
                                alt={post.author.name}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <span className="text-slate-900 text-sm font-medium">{post.author.name}</span>
                            </div>

                            <div className="flex items-center gap-2 text-navy font-medium text-sm">
                              Read more
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Minimal Design */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 leading-tight">
                Transform your organization's
                <span className="text-navy block">decision-making capability</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Let's discuss how strategic advisory can help you navigate complexity and achieve your goals.
              </p>
              <Link to="/contact">
                <Button size="lg" className="!bg-navy !text-white hover:!bg-navy-800 font-medium">
                  Start a conversation <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Blog;