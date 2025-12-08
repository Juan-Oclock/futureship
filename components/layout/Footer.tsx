
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4">
            <Link to="/" className="flex items-center space-x-2 mb-5 group">
              <svg 
                className="w-9 h-9 transition-transform duration-200 group-hover:translate-x-0.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M6 4l8 8-8 8" stroke="#a3a3a3" />
                <path d="M12 4l8 8-8 8" stroke="#ef8354" />
              </svg>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-neutral-900 tracking-tight leading-none">thewayfwd</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-500 font-medium">Strategic Advisory</span>
              </div>
            </Link>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-sm">
              Guiding organisations forward through uncertainty with strategic clarity. We empower leaders to make confident, collective decisions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-stone-200 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-stone-200 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[11px] font-semibold text-neutral-900 uppercase tracking-[0.15em] mb-5">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-neutral-500 hover:text-primary text-sm transition-colors">Strategic Foresight</Link></li>
              <li><Link to="/services" className="text-neutral-500 hover:text-primary text-sm transition-colors">Scenario Planning</Link></li>
              <li><Link to="/services" className="text-neutral-500 hover:text-primary text-sm transition-colors">Decision Making</Link></li>
              <li><Link to="/services" className="text-neutral-500 hover:text-primary text-sm transition-colors">Advisory Partnerships</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[11px] font-semibold text-neutral-900 uppercase tracking-[0.15em] mb-5">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-neutral-500 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-neutral-500 hover:text-primary text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-neutral-500 hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4">
            <h3 className="text-[11px] font-semibold text-neutral-900 uppercase tracking-[0.15em] mb-5">Stay Informed</h3>
            <p className="text-neutral-500 text-sm mb-4">
              Subscribe for insights on strategic foresight and governance.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-10 px-4 bg-white border border-stone-300 focus:ring-1 focus:ring-primary focus:border-primary text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors"
              />
              <button className="h-10 bg-primary hover:bg-primary-hover text-white px-5 text-sm font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-stone-200 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs sm:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} The Way Forward. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 items-center text-xs sm:text-sm text-neutral-500">
            <span>Melbourne</span>
            <span className="text-stone-300">•</span>
            <span>Sydney</span>
            <span className="text-stone-300">•</span>
            <span>Brisbane</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
