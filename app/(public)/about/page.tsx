import { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Users, Award, CheckCircle, Zap, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | ElectriSafe Power Solutions - Trusted Electricians in Lucknow',
  description: 'ElectriSafe Power Solutions provides safe, reliable electrical services in Lucknow. Learn about our commitment to safety, quality, and professional service.',
  keywords: 'about electrician Lucknow, professional electrical services, certified electricians, electrical company Lucknow',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--dark-navy)] to-gray-900 text-white pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <Image 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80" 
            alt="Electrical team at work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark-navy)]/95 to-gray-900/95"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ElectriSafe Power Solutions
            </h1>
            <p className="text-xl text-gray-300">
              Your trusted partner for safe and reliable electrical services in Lucknow
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-6 text-center">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                ElectriSafe Power Solutions is a leading provider of professional electrical services in Lucknow, 
                Uttar Pradesh. We specialize in delivering safe, reliable, and high-quality electrical solutions 
                for residential, commercial, and industrial clients.
              </p>
              <p>
                With years of experience in the electrical industry, our team of certified electricians is dedicated 
                to ensuring every project meets the highest safety standards and quality benchmarks. We understand 
                that electrical work requires precision, expertise, and unwavering attention to safety.
              </p>
              <p>
                At ElectriSafe, we don&apos;t just fix electrical problems – we build lasting relationships with our 
                clients through transparent pricing, professional service, and a commitment to excellence in 
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-[var(--electric-blue)] tracking-widest uppercase mb-4">
              Trusted Partnership
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Powering India&apos;s Leading Brands
            </h2>
            <div className="w-16 h-0.5 bg-[var(--electric-blue)] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by Fortune 500 companies and leading institutions across telecommunications, healthcare, retail, and infrastructure sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {[
              'Vodafone Idea',
              'Airtel',
              'Kaya Clinic',
              'W Store',
              'Aurelia',
              'Lulu Mall',
              'Palassio',
              'Railway Kochi',
              'Maikual Hospital',
              'Titan Watch',
              'Indian Institute of Toxicology Research'
            ].map((client) => (
              <div
                key={client}
                className="group bg-white p-10 flex items-center justify-center min-h-[160px] relative overflow-hidden transition-all duration-500 hover:bg-gradient-to-br hover:from-[var(--electric-blue)]/[0.02] hover:to-white"
              >
                <div className="absolute left-0 top-0 w-0 h-full bg-[var(--electric-blue)] group-hover:w-1 transition-all duration-300"></div>
                <p className="text-center font-bold text-gray-700 text-sm md:text-base lg:text-lg leading-tight relative z-10 group-hover:text-[var(--dark-navy)] transition-colors duration-300 group-hover:translate-x-1 transform">
                  {client}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full"></div>
                <span className="font-medium">100+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full"></div>
                <span className="font-medium">Pan-India Presence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--electric-blue)] rounded-full"></div>
                <span className="font-medium">20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide our work every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-navy)] mb-3">Safety First</h3>
              <p className="text-gray-600">
                Safety is our top priority in every project we undertake. We follow strict safety protocols and regulations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-navy)] mb-3">Quality Workmanship</h3>
              <p className="text-gray-600">
                We take pride in delivering exceptional quality in every electrical installation, repair, and maintenance job.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-navy)] mb-3">Professional Team</h3>
              <p className="text-gray-600">
                Our certified and experienced electricians bring expertise and professionalism to every job.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-lg mb-6">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-navy)] mb-3">Transparency</h3>
              <p className="text-gray-600">
                Clear communication and upfront pricing with no hidden charges or surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-6">
                Our Commitment to Excellence
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[var(--electric-blue)] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-[var(--dark-navy)] mb-1">Safety-Focused Approach</h3>
                    <p className="text-gray-600">
                      Every project is completed following strict safety standards and electrical codes to ensure the 
                      safety of our clients and their properties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[var(--electric-blue)] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-[var(--dark-navy)] mb-1">Experienced Professionals</h3>
                    <p className="text-gray-600">
                      Our team consists of certified electricians with years of hands-on experience in residential, 
                      commercial, and industrial electrical work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[var(--electric-blue)] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-[var(--dark-navy)] mb-1">Quality Materials</h3>
                    <p className="text-gray-600">
                      We use only high-quality, certified electrical materials and equipment from trusted brands 
                      to ensure longevity and reliability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[var(--electric-blue)] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-[var(--dark-navy)] mb-1">Customer Satisfaction</h3>
                    <p className="text-gray-600">
                      We&apos;re not satisfied until you are. Our commitment to customer satisfaction drives us to 
                      deliver excellence in every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--electric-blue)] to-[var(--dark-navy)] p-12 rounded-2xl text-white">
              <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-8 mx-auto">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Serving Lucknow with Pride</h3>
              <p className="text-gray-200 text-center mb-8">
                We&apos;re proud to serve the Lucknow community with professional electrical services that 
                homeowners and businesses can trust. Our local expertise and commitment to quality make 
                us the preferred choice for electrical work in the region.
              </p>
              <div className="text-center">
                <p className="text-sm text-gray-300">Our Service Area:</p>
                <p className="text-xl font-bold mt-2">Lucknow & Nearby Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark-navy)] mb-6">
            Experience the ElectriSafe Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your electrical needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919565555581"
              className="inline-flex items-center space-x-2 bg-[var(--electric-blue)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--dark-navy)] transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
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
        