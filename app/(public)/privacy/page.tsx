import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ElectriSafe Power Solutions',
  description: 'Privacy Policy for ElectriSafe Power Solutions - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--dark-navy)] to-gray-900 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                  This Privacy Policy describes how ElectriSafe Power Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and shares your personal information when you visit our website or use our electrical services in Lucknow, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                    <p className="text-gray-700">We may collect personal information such as your name, phone number, email address, and service location when you:</p>
                    <ul className="text-gray-700 ml-6 mt-2 space-y-1">
                      <li>• Contact us for electrical services</li>
                      <li>• Submit a service request form</li>
                      <li>• Call or WhatsApp us</li>
                      <li>• Request a quote or consultation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Information</h3>
                    <p className="text-gray-700">When you request electrical services, we may collect information about your property, electrical requirements, and service history to provide better assistance.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-3">We use the information we collect to:</p>
                <ul className="text-gray-700 ml-6 space-y-1">
                  <li>• Provide electrical services you request</li>
                  <li>• Contact you regarding your service appointments</li>
                  <li>• Send you quotes and estimates</li>
                  <li>• Improve our services and customer experience</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Send service reminders and maintenance notifications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Information Sharing</h2>
                <p className="text-gray-700">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only with:
                </p>
                <ul className="text-gray-700 ml-6 mt-2 space-y-1">
                  <li>• Our certified electricians who will perform the work</li>
                  <li>• Service providers who assist in our operations</li>
                  <li>• Legal authorities when required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-3">You have the right to:</p>
                <ul className="text-gray-700 ml-6 space-y-1">
                  <li>• Access your personal information</li>
                  <li>• Request correction of inaccurate information</li>
                  <li>• Request deletion of your information</li>
                  <li>• Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Cookies</h2>
                <p className="text-gray-700">
                  Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--dark-navy)] mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-3">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li><strong>Phone:</strong> +91 95655 55581</li>
                  <li><strong>Email:</strong> info@electrisafe.in</li>
                  <li><strong>Location:</strong> Lucknow, Uttar Pradesh, India</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
                     