'use client'

import Link from 'next/link';
import { Home, ArrowLeft, Zap } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--dark-navy)] via-gray-900 to-[var(--dark-navy)] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[var(--electric-blue)] blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative flex items-center justify-center w-32 h-32 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-full">
              <Zap className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-md mx-auto">
          Oops! The page you&apos;re looking for seems to have lost power. 
          Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-[var(--electric-blue)]/50 transition-all duration-300 hover:scale-105 min-w-[200px]"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 min-w-[200px]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-4 text-sm">Or try one of these pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-[var(--electric-blue)] hover:text-[var(--light-blue)] transition-colors text-sm font-medium">
              Services
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/about" className="text-[var(--electric-blue)] hover:text-[var(--light-blue)] transition-colors text-sm font-medium">
              About Us
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/contact" className="text-[var(--electric-blue)] hover:text-[var(--light-blue)] transition-colors text-sm font-medium">
              Contact
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/faq" className="text-[var(--electric-blue)] hover:text-[var(--light-blue)] transition-colors text-sm font-medium">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
