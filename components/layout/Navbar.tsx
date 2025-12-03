import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
  ];

  // Determine styles based on state - now hero is light themed
  const isTransparent = isHome && !scrolled;
  
  const navBackground = isTransparent 
    ? 'bg-transparent py-5' 
    : 'bg-white shadow-sm border-b border-slate-100 py-4';

  // Both states now use dark text since hero is light
  const textColor = 'text-slate-700';
  const logoColor = 'text-slate-900';
  const linkHoverColor = 'hover:text-navy';
  const activeLinkColor = 'text-navy font-semibold';
  const mobileMenuBtnColor = 'text-slate-700 hover:bg-slate-100';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-out ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <svg 
              className="w-9 h-9 text-navy transition-transform duration-200 group-hover:translate-x-0.5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M6 4l8 8-8 8" />
              <path d="M12 4l8 8-8 8" />
            </svg>
            <div className="flex flex-col">
              <span className={`text-lg font-semibold tracking-tight transition-colors leading-none ${logoColor}`}>
                thewayfwd
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                Strategic Advisory
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `px-4 py-2 text-sm tracking-wide transition-all duration-200 rounded-md ${isActive ? activeLinkColor : textColor} ${linkHoverColor}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className={`ml-4 pl-4 border-l ${isTransparent ? 'border-slate-200' : 'border-slate-200'}`}>
              <NavLink to="/contact">
                <Button 
                  size="sm" 
                  className="!bg-navy hover:!bg-navy-800 !text-white font-medium shadow-sm hover:shadow-md"
                >
                  Get Started
                </Button>
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2.5 rounded-lg focus:outline-none transition-colors ${mobileMenuBtnColor}`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-5 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-navy/5 text-navy' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-3 mt-2 border-t border-slate-100">
            <NavLink to="/contact" className="w-full">
              <Button className="w-full justify-center !bg-navy hover:!bg-navy-800">Get Started</Button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;