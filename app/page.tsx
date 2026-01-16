'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Zap, Calendar, CheckCircle, Award, Clock, Users, Star, Home, Building2, Cable, ShieldCheck, Battery, Wrench } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--dark-navy)] via-gray-900 to-[var(--dark-navy)] text-white pt-40 pb-32 overflow-hidden min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80" 
            alt="Electrical background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark-navy)]/90 via-gray-900/90 to-[var(--dark-navy)]/90"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--electric-blue)] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[var(--light-blue)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start space-x-3 mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-2xl shadow-xl">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-[var(--electric-blue)] to-transparent"></div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[var(--electric-blue)] tracking-widest uppercase">Certified & Trusted</div>
                  <div className="text-sm text-gray-400">Since 2003</div>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="block">ElectriSafe</span>
                <span className="block bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent">Power Solutions</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold">
                Safe Power for Every Space
              </p>
              
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Professional electrical services for homes, offices, shops, and commercial spaces in Lucknow. 
                Your trusted partner for safe and reliable electrical work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[var(--electric-blue)]/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <Calendar className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Book Service Now</span>
                  <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+919565555581"
                  className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--electric-blue)]" />
                  <span className="text-sm text-gray-400">24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--electric-blue)]" />
                  <span className="text-sm text-gray-400">Licensed Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[var(--electric-blue)]" />
                  <span className="text-sm text-gray-400">Same Day Service</span>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Card */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-white/5 rounded-2xl">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent mb-2">100+</div>
                      <div className="text-sm text-gray-300">Projects Completed</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent mb-2">20+</div>
                      <div className="text-sm text-gray-300">Years Experience</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent mb-2">24/7</div>
                      <div className="text-sm text-gray-300">Support Available</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl">
                      <div className="text-4xl font-bold bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent mb-2">5★</div>
                      <div className="text-sm text-gray-300">Client Rating</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-br from-[var(--electric-blue)]/20 to-[var(--light-blue)]/20 rounded-2xl border border-[var(--electric-blue)]/30">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex -space-x-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--light-blue)] to-[var(--electric-blue)] border-2 border-white flex items-center justify-center text-white text-xs font-bold">B</div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Trusted by 500+ Clients</div>
                        <div className="text-xs text-gray-300">Join our satisfied customers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Slider */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Main Image Slider Container */}
                <div className="relative h-[500px] bg-gray-900">
                  <Image
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                    alt="Professional electrical work"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-navy)]/80 via-transparent to-transparent"></div>
                </div>

                {/* Thumbnail Strip */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-white">
                  <div className="relative h-24 rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&q=80"
                      alt="Electrical panel installation"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[var(--electric-blue)]/0 group-hover:bg-[var(--electric-blue)]/20 transition-colors"></div>
                  </div>
                  <div className="relative h-24 rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&q=80"
                      alt="Commercial electrical work"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[var(--electric-blue)]/0 group-hover:bg-[var(--electric-blue)]/20 transition-colors"></div>
                  </div>
                  <div className="relative h-24 rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&q=80"
                      alt="Residential wiring"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[var(--electric-blue)]/0 group-hover:bg-[var(--electric-blue)]/20 transition-colors"></div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hidden xl:block">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent mb-1">
                    99.8%
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-[var(--electric-blue)]/10 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide">
                  About ElectriSafe
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-6">
                Trusted Electrical Services in
                <span className="block bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent">
                  Lucknow
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ElectriSafe Power Solutions provides safe, reliable, and professional electrical services for residential, 
                commercial, and industrial clients across Lucknow. We specialize in electrical installation, wiring, 
                maintenance, power backup, and safety solutions with a focus on quality workmanship and transparent pricing.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--light-blue)]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Certified Professionals</h3>
                    <p className="text-gray-600 text-sm">Licensed electricians with 20+ years of combined experience</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--light-blue)]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Safety Guaranteed</h3>
                    <p className="text-gray-600 text-sm">Strict adherence to electrical safety codes and regulations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--electric-blue)]/10 to-[var(--light-blue)]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">24/7 Emergency Support</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock availability for urgent electrical issues</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[var(--electric-blue)]/30 transition-all duration-300 hover:scale-105"
                >
                  <span>Learn More About Us</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:border-[var(--electric-blue)] hover:text-[var(--electric-blue)] transition-all duration-300"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-6">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-6">
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

      {/* Trusted By Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center space-x-2 mb-5">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--electric-blue)]"></div>
              <p className="text-xs font-bold text-[var(--electric-blue)] tracking-[0.2em] uppercase">
                Trusted Partnership
              </p>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--electric-blue)]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-6">
              Powering India&apos;s<br />Leading Brands
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Trusted by Fortune 500 companies and premier institutions across telecommunications, healthcare, retail, and infrastructure sectors nationwide
            </p>
          </div>

          {/* Infinite Scrolling Carousel */}
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* First Row - Scroll Right */}
            <div className="flex overflow-hidden mb-6 group/row1">
              <div className="flex animate-scroll-right group-hover/row1:pause-animation">
                {[
                  'Vodafone Idea',
                  'Airtel',
                  'Kaya Clinic',
                  'W Store',
                  'Aurelia',
                  'Lulu Mall'
                ].concat(['Vodafone Idea', 'Airtel', 'Kaya Clinic', 'W Store', 'Aurelia', 'Lulu Mall']).map((client, index) => (
                  <div
                    key={`row1-${index}`}
                    className="group flex-shrink-0 mx-3 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl px-10 py-8 flex items-center justify-center min-w-[280px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-[var(--electric-blue)]/30 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric-blue)]/0 via-transparent to-[var(--light-blue)]/0 group-hover:from-[var(--electric-blue)]/5 group-hover:to-[var(--light-blue)]/3 rounded-2xl transition-all duration-500"></div>
                    <p className="text-center font-bold text-gray-800 text-lg leading-snug relative z-10 group-hover:text-[var(--dark-navy)] transition-all duration-300">
                      {client}
                    </p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] group-hover:w-3/4 transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Scroll Left */}
            <div className="flex overflow-hidden group/row2">
              <div className="flex animate-scroll-left group-hover/row2:pause-animation">
                {[
                  'Palassio',
                  'Railway Kochi',
                  'Maikual Hospital',
                  'Titan Watch',
                  'Indian Institute of Toxicology Research'
                ].concat(['Palassio', 'Railway Kochi', 'Maikual Hospital', 'Titan Watch', 'Indian Institute of Toxicology Research']).map((client, index) => (
                  <div
                    key={`row2-${index}`}
                    className="group flex-shrink-0 mx-3 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl px-10 py-8 flex items-center justify-center min-w-[280px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-[var(--electric-blue)]/30 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric-blue)]/0 via-transparent to-[var(--light-blue)]/0 group-hover:from-[var(--electric-blue)]/5 group-hover:to-[var(--light-blue)]/3 rounded-2xl transition-all duration-500"></div>
                    <p className="text-center font-bold text-gray-800 text-lg leading-snug relative z-10 group-hover:text-[var(--dark-navy)] transition-all duration-300">
                      {client}
                    </p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] group-hover:w-3/4 transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent mb-2">100+</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent mb-2">Pan-India</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Presence</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--electric-blue)] to-[var(--light-blue)] bg-clip-text text-transparent mb-2">20+</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-6">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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