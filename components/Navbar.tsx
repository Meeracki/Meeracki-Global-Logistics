"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Trade Routes', href: '#routes' },
    { name: 'Documentation', href: '#docs' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-primary/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-brand-accent">Meeracki</span> Global
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-white hover:text-brand-accent font-medium text-sm transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/919669510699" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-accent hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold text-sm transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-accent focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-primary absolute top-full left-0 w-full shadow-lg border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 hover:text-brand-accent rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/919669510699" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mt-4 text-center bg-brand-accent text-black px-5 py-3 rounded-full font-bold text-base"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
