import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ElectriSafe Power Solutions',
  description: 'Terms of Service for ElectriSafe Power Solutions - Professional electrical services in Lucknow.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--electric-blue)] to-[var(--dark-navy)] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using our electrical services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="space-y-8">
              <div>
                <p className="text-gray-600 mb-6">
                  <strong>Last updated:</strong> January 16, 2026
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to ElectriSafe Power Solutions. By accessing our website and using our electrical services, you agree to be bound by these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By engaging our electrical services or accessing our website, you accept and agree to be bound by these terms and provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Our Services</h2>
                <p className="text-gray-700 mb-3">
                  ElectriSafe Power Solutions provides professional electrical services including:
                </p>
                <ul className="text-gray-700 ml-6 space-y-1">
                  <li>• Residential electrical installation and repair</li>
                  <li>• Commercial electrical solutions</li>
                  <li>• Industrial electrical systems</li>
                  <li>• Emergency electrical services (24/7)</li>
                  <li>• Electrical safety inspections</li>
                  <li>• Wiring and rewiring</li>
                  <li>• Inverter and UPS installation</li>
                  <li>• Smart home electrical solutions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Service Agreement</h2>
                <p className="text-gray-700 mb-3">When you engage our services:</p>
                <ul className="text-gray-700 ml-6 space-y-1">
                  <li>• Accurate information about your electrical requirements must be provided</li>
                  <li>• Site access must be provided to our technicians during scheduled appointments</li>
                  <li>• Payment terms must be honored as per the estimate</li>
                  <li>• Safety guidelines and recommendations must be followed</li>
                  <li>• You grant permission to work on your electrical systems</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Safety and Compliance</h2>
                <p className="text-gray-700">
                  All work performed by ElectriSafe Power Solutions complies with Indian electrical safety standards and local regulations. Our technicians are licensed and certified professionals. We prioritize safety in all our installations and repairs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Payment Terms</h2>
                <ul className="text-gray-700 ml-6 space-y-1">
                  <li>• Quotes are valid for 30 days from date of issue</li>
                  <li>• Payment is due upon completion of work unless otherwise agreed</li>
                  <li>• We accept cash, UPI, bank transfer, and digital payments</li>
                  <li>• Additional charges may apply for emergency or after-hours services</li>
                  <li>• Materials and labor are itemized in our estimates</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Warranty</h2>
                <p className="text-gray-700 mb-3">
                  We provide warranty on:
                </p>
                <ul className="text-gray-700 ml-6 space-y-1">
                  <li>• Workmanship: 1 year from completion date</li>
                  <li>• Materials: As per manufacturer warranty</li>
                  <li>• Warranty does not cover damage from misuse or unauthorized modifications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Limitation of Liability</h2>
                <p className="text-gray-700">
                  ElectriSafe Power Solutions shall not be liable for any indirect, incidental, or consequential damages. Our liability is limited to the cost of the service provided. We maintain professional liability insurance for all our work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Cancellation Policy</h2>
                <ul className="text-gray-700 ml-6 space-y-1">
                  <li>• Cancellations must be made at least 24 hours in advance</li>
                  <li>• Late cancellations may incur a service charge</li>
                  <li>• Emergency services cannot be cancelled once technician is dispatched</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated revision date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-3">
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li><strong>Phone:</strong> +91 95655 55581</li>
                  <li><strong>WhatsApp:</strong> +91 95655 55581</li>
                  <li><strong>Email:</strong> info@electrisafe.in</li>
                  <li><strong>Location:</strong> Lucknow, Uttar Pradesh, India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
