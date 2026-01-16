'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Zap, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function BookServicePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceTypes = [
    'Residential Electrical Work',
    'Commercial Electrical Work',
    'Industrial Electrical Services',
    'Electrical Wiring & Installation',
    'Lighting Installation',
    'Power Backup Solutions (Inverter/UPS)',
    'Electrical Safety Inspection',
    'MCB/RCCB Installation',
    'Fan & Appliance Installation',
    'Emergency Electrical Repair',
    'Annual Maintenance Contract (AMC)',
    'Smart Home Electrical Setup',
    'Solar Inverter Installation',
    'Other',
  ];

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM',
    'Emergency (24/7)',
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      customerName: formData.get('customerName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      serviceType: formData.get('serviceType'),
      preferredDate: formData.get('preferredDate'),
      preferredTime: formData.get('preferredTime'),
      address: formData.get('address'),
      pincode: formData.get('pincode'),
      message: formData.get('message'),
      urgency: formData.get('urgency'),
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit booking');
      }

      setSubmitted(true);
      toast.success('Booking request submitted successfully!');
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Booking Request Received!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing ElectriSafe Power Solutions. We&apos;ve received your booking request and our team will contact you shortly to confirm the appointment.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            You will receive a confirmation email at the provided email address.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-[var(--electric-blue)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
            >
              Book Another Service
            </button>
            <Link
              href="/"
              className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-20">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-12 h-12 text-[var(--electric-blue)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Electrical Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule professional electrical services in Lucknow. Our expert technicians are ready to help.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-[var(--electric-blue)] text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--electric-blue)] focus:border-transparent outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--electric-blue)] focus:border-transparent outline-none transition-all"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--electric-blue)] focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-[var(--electric-blue)] text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Service Details
              </h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--electric-blue)] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--electric-blue)] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select urgency</option>
                    <option value="emergency">Emergency (Same Day)</option>
                    <option value="urgent">Urgent (Within 2 Days)</option>
                    <option value="normal">Normal (Within a Week)</option>
                    <option value="scheduled">Scheduled (Specific Date)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Appointment Schedule */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-[var(--electric-blue)] text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Preferred Schedule
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--electric-blue)] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Preferred Time Slot *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--electric-blue)] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-[var(--electric-blue)] text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
                Service Location
              </h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Complete Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--electric-blue)] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="House/Building No., Street, Locality"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    required
                    pattern="[0-9]{6}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--electric-blue)] focus:border-transparent outline-none transition-all"
                    placeholder="6-digit pincode"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-[var(--electric-blue)] text-white rounded-full flex items-center justify-center text-sm mr-3">5</span>
                Additional Details
              </h3>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe Your Issue (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--electric-blue)] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Please provide details about the electrical work needed, any specific requirements, or questions..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[var(--electric-blue)] to-[var(--dark-navy)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 mr-2" />
                    Submit Booking Request
                  </>
                )}
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Our team will contact you within 2 hours to confirm your appointment
              </p>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Need immediate assistance?</p>
          <a
            href="tel:+919565555581"
            className="text-[var(--electric-blue)] font-semibold text-lg hover:underline"
          >
            Call +91 95655 55581
          </a>
          <span className="text-gray-500 mx-2">|</span>
          <a
            href="https://wa.me/919565555581"
            className="text-[var(--electric-blue)] font-semibold text-lg hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
