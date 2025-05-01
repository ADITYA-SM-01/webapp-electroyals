import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center overflow-hidden">
              <img src="/images/electroyals-icon.png" alt="ELECTROYALS" className="w-8 h-8 object-cover" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">ELECTROYALS</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-electroyals-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-electroyals-500 transition-colors">
              About
            </Link>
            <Link to="/team" className="text-sm font-medium hover:text-electroyals-500 transition-colors">
              Team
            </Link>
            <Link to="/services" className="text-sm font-medium hover:text-electroyals-500 transition-colors">
              Services
            </Link>
            <Link to="/projects" className="text-sm font-medium hover:text-electroyals-500 transition-colors">
              Projects
            </Link>
            <Link to="/careers" className="text-sm font-medium hover:text-electroyals-500 transition-colors">
              Careers
            </Link>
          </nav>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact">
              <Button className="rounded-full bg-gradient-to-r from-electroyals-500 to-electroyals-600 hover:from-electroyals-600 hover:to-electroyals-700 text-electroyals-navy">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link to="/" className="block py-2 text-base font-medium hover:text-electroyals-500" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block py-2 text-base font-medium hover:text-electroyals-500" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/team" className="block py-2 text-base font-medium hover:text-electroyals-500" onClick={() => setIsMenuOpen(false)}>
              Team
            </Link>
            <Link to="/services" className="block py-2 text-base font-medium hover:text-electroyals-500" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/projects" className="block py-2 text-base font-medium hover:text-electroyals-500" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link to="/careers" className="block py-2 text-base font-medium hover:text-electroyals-500" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full rounded-full bg-gradient-to-r from-electroyals-500 to-electroyals-600 hover:from-electroyals-600 hover:to-electroyals-700 text-electroyals-navy">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
