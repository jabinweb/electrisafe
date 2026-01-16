import Link from 'next/link';
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--dark-navy)] via-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">ElectriSafe</span>
                <span className="text-xs text-gray-400">Power Solutions</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm leading-relaxed">
              Safe, reliable, and professional electrical services for homes, offices, and commercial spaces in Lucknow. 
              Your trusted partner for all electrical needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[var(--electric-blue)] mt-0.5 flex-shrink-0" />
                <span className="text-sm">Lucknow, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-[var(--electric-blue)] flex-shrink-0" />
                <a href="tel:+919565555581" className="text-sm hover:text-white transition-colors">+91 95655 55581</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-[var(--electric-blue)] flex-shrink-0" />
                <a href="mailto:info@electrisafe.in" className="text-sm hover:text-white transition-colors">info@electrisafe.in</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-[var(--electric-blue)] hover:text-white font-semibold transition-colors text-sm">
                  📅 Book Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors text-sm">
                  Residential Electrical
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors text-sm">
                  Commercial Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors text-sm">
                  Wiring & Rewiring
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors text-sm">
                  Safety Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ElectriSafe Power Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

