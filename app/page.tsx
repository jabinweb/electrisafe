import Link from 'next/link';
import { Phone, MessageCircle, Zap, Home, Building2, Cable, ShieldCheck, Battery, Wrench, CheckCircle, Award, Clock, Users, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--dark-navy)] via-gray-900 to-[var(--dark-navy)] text-white pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80" 
            alt="Electrical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark-navy)]/90 via-gray-900/90 to-[var(--dark-navy)]/90"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--electric-blue)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--electric-blue)] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-2xl mb-8">
              <Zap className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ElectriSafe Power Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Safe Power for Every Space
            </p>
            
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Professional electrical services for homes, offices, shops, and commercial spaces in Lucknow. 
              Your trusted partner for safe and reliable electrical work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+919565555581"
                className="inline-flex items-center space-x-2 bg-[var(--electric-blue)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--light-blue)] transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919565555581"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-6">
              Trusted Electrical Services in Lucknow
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ElectriSafe Power Solutions provides safe, reliable, and professional electrical services for residential, 
              commercial, and industrial clients across Lucknow. We specialize in electrical installation, wiring, 
              maintenance, power backup, and safety solutions with a focus on quality workmanship and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-4">
              Our Key Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive electrical solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-navy)] mb-3">
                Residential Electrical Services
              </h3>
              <p className="text-gray-600 mb-4">
                Complete home electrical solutions including installation, repair, and maintenance.
              </p>
              <Link href="/services" className="text-[var(--electric-blue)] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-navy)] mb-3">
                Commercial & Office Electrical
              </h3>
              <p className="text-gray-600 mb-4">
                Professional electrical services for offices, shops, malls, and commercial spaces.
              </p>
              <Link href="/services" className="text-[var(--electric-blue)] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cable className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-navy)] mb-3">
                Wiring & Rewiring
              </h3>
              <p className="text-gray-600 mb-4">
                Expert wiring and rewiring services for new constructions and renovations.
              </p>
              <Link href="/services" className="text-[var(--electric-blue)] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-navy)] mb-3">
                Panels, MCB & Safety
              </h3>
              <p className="text-gray-600 mb-4">
                Installation and maintenance of distribution panels, MCBs, and safety systems.
              </p>
              <Link href="/services" className="text-[var(--electric-blue)] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Battery className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-navy)] mb-3">
                Inverter & UPS Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Power backup solutions including inverter and UPS installation and service.
              </p>
              <Link href="/services" className="text-[var(--electric-blue)] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-navy)] mb-3">
                Maintenance & AMC
              </h3>
              <p className="text-gray-600 mb-4">
                Regular maintenance and annual maintenance contracts for hassle-free operations.
              </p>
              <Link href="/services" className="text-[var(--electric-blue)] font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-4">
              Why Choose ElectriSafe?
            </h2>
            <p className="text-lg text-gray-600">
              Your safety and satisfaction are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--dark-navy)] mb-2">Safety First Approach</h3>
                <p className="text-gray-600">
                  Every project is completed following strict safety standards and regulations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg">
                  <Users className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--dark-navy)] mb-2">Trained Electricians</h3>
                <p className="text-gray-600">
                  Our team consists of certified and experienced electrical professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--dark-navy)] mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden charges. Clear and upfront pricing for all our services.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg">
                  <Clock className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--dark-navy)] mb-2">Quick Response</h3>
                <p className="text-gray-600">
                  Fast response times for both emergency and scheduled services.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg">
                  <Award className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--dark-navy)] mb-2">Quality Materials</h3>
                <p className="text-gray-600">
                  We use only high-quality, certified electrical materials and equipment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg">
                  <Star className="w-6 h-6 text-[var(--electric-blue)]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--dark-navy)] mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Committed to delivering excellence and ensuring complete customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Proudly serving Lucknow and nearby areas
            </p>
            <div className="inline-flex items-center space-x-2 text-[var(--electric-blue)] text-xl font-semibold">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Lucknow, Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--dark-navy)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Safe and Reliable Electrical Work?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact ElectriSafe today for professional electrical services in Lucknow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919565555581"
              className="inline-flex items-center space-x-2 bg-white text-[var(--electric-blue)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>Call: +91 95655 55581</span>
            </a>
            <a
              href="https://wa.me/919565555581"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}