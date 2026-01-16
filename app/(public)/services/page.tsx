import { Metadata } from 'next';
import Image from 'next/image';
import { Phone, MessageCircle, Home, Building2, ShoppingBag, Factory, ShieldCheck, Battery, Lightbulb, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electrical Services in Lucknow | ElectriSafe Power Solutions',
  description: 'Professional electrical services for residential, commercial, and industrial clients in Lucknow. Installation, wiring, maintenance, safety solutions, and more.',
  keywords: 'electrician Lucknow, electrical services Lucknow, home electrician, commercial electrical contractor, electrical wiring, power backup solutions',
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Electrical Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'ElectriSafe Power Solutions',
      telephone: '+919565555581',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lucknow',
        addressRegion: 'UP',
        addressCountry: 'IN'
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'Lucknow'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Electrical Services',
            description: 'Complete electrical solutions for homes'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Electrical Services',
            description: 'Professional electrical services for offices and businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wiring & Rewiring',
            description: 'Expert wiring services for new constructions and renovations'
          }
        }
      ]
    }
  };

  const services = [
    {
      icon: Home,
      title: 'Residential Electrical Services',
      description: 'Complete electrical solutions for your home with safety and quality.',
      services: [
        'New home electrical installation',
        'Electrical repairs and troubleshooting',
        'Lighting installation and upgrades',
        'Fan and appliance installation',
        'Switch and socket replacement',
        'Home electrical safety inspections',
        'Electrical panel upgrades',
        'Emergency electrical repairs',
      ],
    },
    {
      icon: Building2,
      title: 'Commercial & Office Electrical',
      description: 'Professional electrical services for offices, shops, and commercial spaces.',
      services: [
        'Office electrical setup and installation',
        'Commercial lighting solutions',
        'Power distribution systems',
        'Data and network cabling',
        'Emergency lighting systems',
        'CCTV and security system wiring',
        'Air conditioning electrical work',
        'Commercial electrical maintenance',
      ],
    },
    {
      icon: ShoppingBag,
      title: 'Shops, Malls & Retail Electrical',
      description: 'Specialized electrical services for retail and shopping spaces.',
      services: [
        'Shop electrical installation',
        'Display and accent lighting',
        'Signage electrical connections',
        'Point of sale (POS) system wiring',
        'Load management systems',
        'Energy-efficient lighting upgrades',
        'Electrical panel and distribution boards',
        'Retail space electrical planning',
      ],
    },
    {
      icon: Factory,
      title: 'Industrial Electrical Services',
      description: 'Heavy-duty electrical solutions for industrial and manufacturing spaces.',
      services: [
        'Industrial equipment installation',
        'Three-phase power systems',
        'Motor and machinery wiring',
        'Control panel installation',
        'High-voltage electrical work',
        'Industrial lighting systems',
        'Power factor correction',
        'Preventive maintenance programs',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Power & Safety Solutions',
      description: 'Comprehensive electrical safety and power management systems.',
      services: [
        'Electrical safety audits',
        'Earthing and grounding systems',
        'Lightning protection systems',
        'MCB and RCCB installation',
        'Circuit breaker upgrades',
        'Surge protection devices',
        'Fire alarm system wiring',
        'Emergency power systems',
      ],
    },
    {
      icon: Battery,
      title: 'Inverter, UPS & Backup Power',
      description: 'Reliable power backup solutions for uninterrupted operations.',
      services: [
        'Inverter installation and setup',
        'UPS system installation',
        'Battery replacement and maintenance',
        'Generator installation and wiring',
        'Solar inverter installation',
        'Backup power system design',
        'Power backup troubleshooting',
        'Battery load testing',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Smart Electrical Solutions',
      description: 'Modern smart home and automation electrical services.',
      services: [
        'Smart home electrical setup',
        'Home automation wiring',
        'Smart lighting installation',
        'Motion sensor lighting',
        'Timer and programmable switches',
        'Smart thermostat installation',
        'Energy monitoring systems',
        'IoT device electrical integration',
      ],
    },
    {
      icon: Wrench,
      title: 'Maintenance & Emergency Services',
      description: 'Regular maintenance and 24/7 emergency electrical support.',
      services: [
        'Annual Maintenance Contracts (AMC)',
        'Preventive maintenance programs',
        'Electrical troubleshooting',
        'Emergency breakdown repairs',
        '24/7 emergency response',
        'Scheduled electrical inspections',
        'Equipment testing and certification',
        'Electrical system upgrades',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--dark-navy)] to-gray-900 text-white pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <Image 
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80" 
            alt="Electrical services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark-navy)]/95 to-gray-900/95"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Electrical Services
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive electrical solutions for homes, offices, and commercial spaces in Lucknow
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--light-blue)] rounded-xl">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-navy)] mb-3">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-lg">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.services.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <svg
                              className="w-5 h-5 text-[var(--electric-blue)] mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--dark-navy)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for professional electrical services in Lucknow
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
