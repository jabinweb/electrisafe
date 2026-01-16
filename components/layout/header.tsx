'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Zap } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled
    ? "fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300" 
    : "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 transition-all duration-300";

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--dark-navy)] rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-[var(--dark-navy)] leading-tight">ElectriSafe</span>
              <span className="text-xs text-gray-600 hidden sm:block">Power Solutions</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[var(--electric-blue)] font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--electric-blue)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/book"
              className="bg-gradient-to-r from-[var(--electric-blue)] to-[var(--dark-navy)] text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-all duration-200 shadow-md"
            >
              Book Service
            </Link>
            <a
              href="tel:+919565555581"
              className="flex items-center space-x-2 bg-white text-[var(--electric-blue)] border-2 border-[var(--electric-blue)] px-5 py-2.5 rounded-lg font-medium hover:bg-[var(--electric-blue)] hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-[var(--electric-blue)] transition-colors duration-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2.5' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[var(--electric-blue)] font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+919565555581"
                className="flex items-center justify-center space-x-2 bg-[var(--electric-blue)] text-white px-5 py-3 rounded-lg font-medium hover:bg-[var(--dark-navy)] transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}