import { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ | ElectriSafe Power Solutions',
  description: 'Frequently asked questions about ElectriSafe Power Solutions electrical services in Lucknow.',
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide 24/7 emergency electrical services. Our team is always ready to respond to urgent electrical issues such as power outages, short circuits, sparking outlets, or any electrical hazards. Call us at +91 95655 55581 anytime for immediate assistance."
    },
    {
      question: "What areas do you cover?",
      answer: "We proudly serve Lucknow and nearby areas in Uttar Pradesh. Our service area includes all major localities in Lucknow city and surrounding regions. Contact us to confirm service availability in your specific location."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely! All our electricians are licensed, certified, and fully insured. We comply with all Indian electrical safety standards and local regulations. Our team undergoes regular training to stay updated with the latest electrical codes and best practices."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept multiple payment methods for your convenience: Cash, UPI (Google Pay, PhonePe, Paytm), Bank Transfer/NEFT/RTGS, and all major digital payment platforms. Payment is typically due upon completion of work unless otherwise agreed."
    },
    {
      question: "How quickly can you respond to service requests?",
      answer: "For emergency services, we aim to respond within 1-2 hours. For scheduled appointments, we typically offer same-day or next-day service depending on availability. We understand the urgency of electrical issues and prioritize quick response times."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide free, no-obligation estimates for all electrical work. Our technician will assess your requirements and provide a detailed quote including labor and materials. There are no hidden charges - everything is transparent and upfront."
    },
    {
      question: "What warranty do you offer on your work?",
      answer: "We provide a 1-year warranty on workmanship for all installations and repairs. Materials are covered under manufacturer warranty. Our warranty does not cover damage from misuse, natural disasters, or unauthorized modifications."
    },
    {
      question: "Can you handle both residential and commercial projects?",
      answer: "Yes! We have extensive experience in both residential and commercial electrical work. From home wiring and lighting installations to complex commercial electrical systems, industrial setups, and retail shops - we handle projects of all sizes."
    },
    {
      question: "Do you use quality materials?",
      answer: "We only use high-quality, ISI-certified electrical materials from trusted brands. Quality and safety are our top priorities. We can source specific brands as per your preference or recommend the best options within your budget."
    },
    {
      question: "How do I schedule a service appointment?",
      answer: "Scheduling is easy! You can call us at +91 95655 55581, WhatsApp us at the same number, email us at info@electrisafe.in, or fill out the contact form on our website. We'll confirm your appointment and provide a time window for our visit."
    },
    {
      question: "What should I do if I smell burning or see sparks?",
      answer: "This is an emergency! Turn off the main power supply immediately if safe to do so, evacuate if necessary, and call us right away at +91 95655 55581. Do not attempt to fix it yourself. Our emergency team will respond quickly to ensure your safety."
    },
    {
      question: "Do you offer maintenance contracts?",
      answer: "Yes, we offer annual maintenance contracts (AMCs) for both residential and commercial properties. Regular maintenance helps prevent electrical issues, ensures safety, and extends the life of your electrical systems. Contact us for customized AMC packages."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--dark-navy)] via-[var(--dark-navy)] to-[var(--electric-blue)] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our electrical services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--electric-blue)] transition-colors"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50">
                  <h3 className="text-lg font-semibold text-[var(--dark-navy)] pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-[var(--electric-blue)] flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-16 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--dark-navy)] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              We&apos;re here to help! Contact us directly and our team will be happy to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919565555581"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--electric-blue)] font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Call Now: +91 95655 55581
              </a>
              <a
                href="https://wa.me/919565555581"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
