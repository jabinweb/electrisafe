'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from "react";
import { toast } from 'sonner';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const data = {
      name: (form.fullName as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value,
      service: (form.service as HTMLInputElement).value,
      message: (form.message as HTMLInputElement).value,
    };

    const payload = {
      formName: "contact",
      data,
      phone: data.phone,
      source: "contact"
    };

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      
      const result = await res.json();
      
      if (result.success) {
        setSuccess(true);
        form.reset();
        toast.success('Thank you! We will contact you shortly.');
      } else {
        const errorMsg = result.error || "Failed to send message";
        setError(errorMsg);
        toast.error(`Failed to send message: ${errorMsg}`);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError("Failed to send message");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--dark-navy)] to-gray-900 text-white pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <Image 
            src="https://images.unsplash.com/photo-1621905252472-b5f7f4c3c0e5?w=1920&q=80" 
            alt="Contact us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark-navy)]/95 to-gray-900/95"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch for professional electrical services in Lucknow
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--dark-navy)] mb-4">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Need electrical services? Contact us today for a free consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--dark-navy)] mb-1">Service Area</h4>
                    <p className="text-gray-600">
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--dark-navy)] mb-1">Phone Number</h4>
                    <a href="tel:+919565555581" className="text-gray-600 hover:text-[var(--electric-blue)] transition-colors">
                      +91 95655 55581
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--dark-navy)] mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/919565555581" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[var(--electric-blue)] transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--dark-navy)] mb-1">Email Address</h4>
                    <a href="mailto:info@electrisafe.in" className="text-gray-600 hover:text-[var(--electric-blue)] transition-colors">
                      info@electrisafe.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[var(--electric-blue)]/10 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--electric-blue)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--dark-navy)] mb-1">Available Hours</h4>
                    <p className="text-gray-600">
                      24/7 Emergency Services<br />
                      Regular Hours: Mon-Sat, 9 AM - 7 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--dark-navy)] rounded-xl text-white">
                <h4 className="text-xl font-bold mb-2">Quick Contact</h4>
                <p className="text-gray-200 mb-4">Call or message us now for immediate assistance</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+919565555581"
                    className="inline-flex items-center justify-center space-x-2 bg-white text-[var(--electric-blue)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919565555581"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[var(--dark-navy)] mb-6">
                Request a Service
              </h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <Input 
                    id="fullName"
                    name="fullName"
                    type="text" 
                    placeholder="Your full name"
                    className="h-11 rounded-lg"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    placeholder="+91 95655 55581"
                    className="h-11 rounded-lg"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                    Service Required
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger className="w-full h-11 rounded-lg">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Electrical</SelectItem>
                      <SelectItem value="commercial">Commercial Electrical</SelectItem>
                      <SelectItem value="wiring">Wiring & Rewiring</SelectItem>
                      <SelectItem value="safety">Safety & MCB</SelectItem>
                      <SelectItem value="inverter">Inverter & UPS</SelectItem>
                      <SelectItem value="maintenance">Maintenance & AMC</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <Textarea 
                    id="message"
                    name="message"
                    rows={4} 
                    placeholder="Describe your electrical requirements..."
                    className="rounded-lg resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-[var(--electric-blue)] hover:bg-[var(--dark-navy)] text-white h-12 rounded-lg font-semibold"
                  disabled={loading}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {loading ? "Sending..." : "Send Request"}
                </Button>
                {success && (
                  <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg font-medium">
                    Thank you! We will contact you shortly.
                  </div>
                )}
                {error && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg font-medium">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}