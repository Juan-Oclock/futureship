
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center space-x-2 mb-5 group">
              <svg 
                className="w-9 h-9 transition-transform duration-200 group-hover:translate-x-0.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M6 4l8 8-8 8" stroke="#64748b" />
                <path d="M12 4l8 8-8 8" stroke="#ffffff" />
              </svg>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white tracking-tight leading-none">thewayfwd</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-medium">Strategic Advisory</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Guiding organisations forward through uncertainty with strategic clarity. We empower leaders to make confident, collective decisions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-md bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-slate-400" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-semibold text-slate-300 uppercase tracking-[0.15em] mb-5">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Strategic Foresight</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Scenario Planning</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Decision Making</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Advisory Partnerships</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-semibold text-slate-300 uppercase tracking-[0.15em] mb-5">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 hover:text-white text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-[11px] font-semibold text-slate-300 uppercase tracking-[0.15em] mb-5">Stay Informed</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe for insights on strategic foresight and governance.
            </p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-10 px-4 bg-slate-800 border border-slate-700 rounded-md focus:ring-1 focus:ring-white focus:border-white text-sm text-white placeholder-slate-500 outline-none transition-colors"
              />
              <button className="h-10 bg-coral hover:bg-coral-600 text-white px-5 rounded-md text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} The Way Forward. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center text-sm text-slate-500">
            <span>Melbourne</span>
            <span className="text-slate-700">•</span>
            <span>Sydney</span>
            <span className="text-slate-700">•</span>
            <span>London</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
