import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
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

  // Determine styles based on state
  const isTransparent = isHome && !scrolled;
  
  const navBackground = isTransparent 
    ? 'bg-transparent py-6' 
    : 'bg-white/95 backdrop-blur-md shadow-sm py-4';

  const textColor = isTransparent ? 'text-white' : 'text-neutral-dark';
  const logoColor = isTransparent ? 'text-white' : 'text-neutral-dark';
  // Hover color: light coral when transparent, primary (coral) when white
  const linkHoverColor = isTransparent ? 'hover:text-gray-300' : 'hover:text-primary';
  const activeLinkColor = isTransparent ? 'text-white underline underline-offset-4' : 'text-primary';
  const mobileMenuBtnColor = isTransparent ? 'text-white hover:bg-white/10' : 'text-neutral-dark hover:bg-neutral-light';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105 ${isTransparent ? 'bg-white/20 backdrop-blur-md' : 'bg-primary'}`}>
              <Rocket size={24} />
            </div>
            <span className={`text-xl font-bold font-heading tracking-tight transition-colors ${logoColor}`}>
              Futureship<span className={isTransparent ? 'text-amber-200' : 'text-primary'}>.</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${isActive ? activeLinkColor : textColor} ${linkHoverColor}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/contact">
              <Button 
                size="sm" 
                className={isTransparent ? '!bg-transparent border border-white !text-white hover:!bg-white hover:!text-black' : ''}
              >
                Get Started
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none transition-colors ${mobileMenuBtnColor}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-gray-100 text-primary' : 'text-neutral-dark hover:bg-neutral-light'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/contact" className="w-full">
            <Button className="w-full justify-center">Get Started</Button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;