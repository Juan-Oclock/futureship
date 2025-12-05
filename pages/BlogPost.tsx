import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter } from 'lucide-react';
import Button from '../components/ui/Button';

// Blog data - in a real app this would come from a CMS or API
const blogPosts: Record<string, any> = {
  "future-of-strategic-governance": {
    title: "The Future of Strategic Governance in Uncertain Times",
    category: "Governance",
    date: "December 2, 2024",
    readTime: "5 min read",
    author: {
      name: "Simon Chen",
      role: "Principal Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
    excerpt: "How boards and leadership teams can navigate complexity while maintaining strategic clarity and collective decision-making.",
    content: `
      <p class="lead">In an era defined by unprecedented uncertainty, the traditional models of strategic governance are being put to the test. Boards and leadership teams must evolve their approaches to remain effective in navigating complexity.</p>

      <h2>The Changing Landscape</h2>
      <p>The past few years have demonstrated that disruption can come from anywhere—global pandemics, technological shifts, climate events, and geopolitical tensions. For organisations, this means that strategic planning can no longer be a once-a-year exercise conducted in isolation from operational realities.</p>
      
      <p>Forward-thinking boards are recognising that governance must become more adaptive, more inclusive, and more connected to the organisation's strategic sensing capabilities.</p>

      <h2>Key Principles for Modern Governance</h2>
      
      <h3>1. Embrace Collective Intelligence</h3>
      <p>The most effective boards leverage the diverse perspectives of their members. This means creating space for open dialogue, encouraging constructive dissent, and ensuring that all voices are heard before major decisions are made.</p>

      <h3>2. Build Strategic Awareness</h3>
      <p>Governance bodies need regular exposure to emerging trends, potential disruptions, and alternative future scenarios. This isn't about predicting the future—it's about building the organisational capacity to respond effectively to whatever emerges.</p>

      <h3>3. Focus on Decision Quality</h3>
      <p>Rather than trying to make perfect decisions, effective governance focuses on making good decisions quickly and learning from outcomes. This requires clear decision-making frameworks and a culture that values transparency over certainty.</p>

      <blockquote>
        "The goal isn't to eliminate uncertainty—it's to build the collective capability to navigate it with confidence."
      </blockquote>

      <h2>Practical Steps Forward</h2>
      <p>For boards and leadership teams looking to strengthen their strategic governance, we recommend starting with these practical steps:</p>
      
      <ul>
        <li><strong>Conduct a governance health check</strong> - Assess how well your current structures support adaptive decision-making</li>
        <li><strong>Invest in scenario planning</strong> - Build shared understanding of potential futures and their implications</li>
        <li><strong>Create space for strategic dialogue</strong> - Ensure board meetings include time for open exploration, not just reporting</li>
        <li><strong>Develop decision-making protocols</strong> - Clarify how different types of decisions should be made and by whom</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>The organisations that thrive in uncertain times will be those with governance structures that enable rather than constrain adaptive strategy. This requires ongoing investment in the capabilities, relationships, and processes that support effective collective decision-making.</p>

      <p>At The Way Forward, we partner with boards and leadership teams to build these capabilities through facilitated workshops, scenario planning exercises, and ongoing advisory relationships.</p>
    `
  },
  "building-consensus-leadership-teams": {
    title: "Building Consensus in Diverse Leadership Teams",
    category: "Leadership",
    date: "November 28, 2024",
    readTime: "7 min read",
    author: {
      name: "Simon Chen",
      role: "Principal Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600",
    excerpt: "Practical frameworks for facilitating open dialogue and finding common ground when perspectives differ.",
    content: `
      <p class="lead">Diversity of thought is one of the greatest assets a leadership team can have—but only if that diversity can be channelled into aligned action. Building genuine consensus requires more than just voting or compromise.</p>

      <h2>Why Consensus Matters</h2>
      <p>When leadership teams make decisions through genuine consensus rather than majority rule or executive decree, the resulting decisions tend to be better implemented, more sustainable, and more widely supported throughout the organisation.</p>

      <p>However, achieving consensus in diverse teams is challenging. Different backgrounds, experiences, and mental models can lead to fundamentally different views on the same issue.</p>

      <h2>The Consensus-Building Framework</h2>
      
      <h3>Step 1: Create Psychological Safety</h3>
      <p>Before any meaningful dialogue can occur, team members must feel safe to express dissenting views without fear of judgment or retribution. This requires intentional effort from leaders to model vulnerability and welcome challenge.</p>

      <h3>Step 2: Separate Positions from Interests</h3>
      <p>Often, apparent disagreements are actually about different solutions to the same underlying concern. By exploring the interests behind stated positions, teams can often find creative solutions that address everyone's core needs.</p>

      <h3>Step 3: Use Structured Dialogue</h3>
      <p>Unstructured discussion tends to favour the most vocal participants. Structured dialogue techniques ensure all perspectives are heard and considered systematically.</p>

      <blockquote>
        "Consensus doesn't mean everyone gets their first choice—it means everyone can live with and support the decision."
      </blockquote>

      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li><strong>False consensus</strong> - When people agree publicly but disagree privately</li>
        <li><strong>Groupthink</strong> - When the desire for harmony overrides critical evaluation</li>
        <li><strong>Analysis paralysis</strong> - When the pursuit of perfect consensus prevents any decision</li>
        <li><strong>Premature closure</strong> - When teams rush to agreement before fully exploring options</li>
      </ul>

      <h2>Building Long-term Capability</h2>
      <p>Consensus-building is a skill that improves with practice. Teams that regularly engage in structured dialogue develop shared language, trust, and the ability to navigate disagreement productively.</p>
    `
  },
  "scenario-planning-local-government": {
    title: "Scenario Planning for Local Government",
    category: "Foresight",
    date: "November 20, 2024",
    readTime: "6 min read",
    author: {
      name: "Simon Chen",
      role: "Principal Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    heroImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600",
    excerpt: "Why councils need to embrace strategic foresight to prepare for demographic shifts and climate challenges.",
    content: `
      <p class="lead">Local governments face a unique challenge: they must plan for the long term while responding to immediate community needs. Scenario planning offers a powerful approach to bridging this gap.</p>

      <h2>The Case for Foresight in Local Government</h2>
      <p>Councils are responsible for infrastructure, services, and planning decisions that will shape communities for decades. Yet traditional planning approaches often assume a relatively stable future—an assumption that recent events have thoroughly challenged.</p>

      <p>Demographic shifts, climate change, technological disruption, and changing community expectations all create uncertainty that councils must navigate.</p>

      <h2>What is Scenario Planning?</h2>
      <p>Scenario planning is not about predicting the future. Instead, it's about developing multiple plausible futures and using them to stress-test strategies, identify early warning signs, and build organisational adaptability.</p>

      <h3>Key Elements of Effective Scenarios</h3>
      <ul>
        <li><strong>Plausibility</strong> - Scenarios must be believable, even if challenging</li>
        <li><strong>Distinctiveness</strong> - Each scenario should represent a genuinely different future</li>
        <li><strong>Relevance</strong> - Scenarios must connect to the decisions councils actually face</li>
        <li><strong>Challenge</strong> - Good scenarios push thinking beyond comfort zones</li>
      </ul>

      <h2>A Practical Approach for Councils</h2>
      
      <h3>Phase 1: Identify Key Uncertainties</h3>
      <p>What are the major forces that could shape your community's future? These might include population growth, economic diversification, climate impacts, or technological change.</p>

      <h3>Phase 2: Develop Scenario Frameworks</h3>
      <p>Select two or three critical uncertainties and use them to create a matrix of possible futures. Each quadrant represents a distinct scenario to explore.</p>

      <h3>Phase 3: Flesh Out the Narratives</h3>
      <p>For each scenario, develop a rich narrative that describes what life in the community would look like. Include implications for council services, infrastructure, and governance.</p>

      <blockquote>
        "The value of scenarios isn't in their accuracy—it's in the conversations they enable and the preparedness they build."
      </blockquote>

      <h2>From Scenarios to Strategy</h2>
      <p>The real power of scenario planning comes from using scenarios to inform strategy. This includes identifying robust strategies that work across multiple scenarios, developing contingency plans, and establishing monitoring systems for early warning signs.</p>
    `
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-500 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img 
            src={post.heroImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <span className="inline-block bg-navy text-white px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-3">
                <img 
                  src={post.author.image} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <p className="font-medium text-white">{post.author.name}</p>
                  <p className="text-sm text-white/60">{post.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-heading prose-headings:text-slate-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-navy prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900
              prose-blockquote:border-l-4 prose-blockquote:border-navy prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:text-slate-700
              prose-ul:space-y-2 prose-li:text-slate-600
              [&_.lead]:text-xl [&_.lead]:text-slate-700 [&_.lead]:leading-relaxed [&_.lead]:mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-slate-500 font-medium">Share this article</span>
                <div className="flex gap-2">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-navy hover:text-white flex items-center justify-center transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-navy hover:text-white flex items-center justify-center transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <Link to="/contact">
                <Button className="!bg-navy hover:!bg-navy-800">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">
            Want to explore more insights?
          </h2>
          <p className="text-slate-500 mb-8">
            Discover more articles on strategic foresight, governance, and leadership.
          </p>
          <Link to="/">
            <Button variant="outline" className="!border-slate-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Articles
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
