
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white">
                <Rocket size={18} />
              </div>
              <span className="text-lg font-bold font-heading text-neutral-dark">Futureship.</span>
            </Link>
            <p className="text-neutral-medium text-sm leading-relaxed mb-6">
              Helping forward-thinking organizations navigate uncertainty and build a resilient future through strategic foresight. We empower leaders with the tools, frameworks, and insights needed to anticipate change and make confident, collective decisions in an increasingly complex world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold font-heading text-neutral-dark uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-neutral-medium hover:text-primary text-sm">Strategic Foresight</Link></li>
              <li><Link to="/services" className="text-neutral-medium hover:text-primary text-sm">Scenario Planning</Link></li>
              <li><Link to="/services" className="text-neutral-medium hover:text-primary text-sm">Innovation Strategy</Link></li>
              <li><Link to="/services" className="text-neutral-medium hover:text-primary text-sm">Organizational Readiness</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-heading text-neutral-dark uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-neutral-medium hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/case-studies" className="text-neutral-medium hover:text-primary text-sm">Case Studies</Link></li>
              <li><Link to="/contact" className="text-neutral-medium hover:text-primary text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold font-heading text-neutral-dark uppercase tracking-wider mb-4">Stay Ahead</h3>
            <p className="text-neutral-medium text-sm mb-4">
              Subscribe to our insights for the latest trends and future strategies.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm w-full"
              />
              <button className="h-11 bg-neutral-dark text-white px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-medium text-sm">
            &copy; {new Date().getFullYear()} Futureship Strategy Advisor. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <span className="text-neutral-medium text-sm">Melbourne</span>
            <span className="text-gray-300">•</span>
            <span className="text-neutral-medium text-sm">Sydney</span>
            <span className="text-gray-300">•</span>
            <span className="text-neutral-medium text-sm">London</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
