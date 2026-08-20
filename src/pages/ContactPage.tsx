import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2, Clock } from 'lucide-react';
import { Accordion } from '../components/ui/Accordion';
import { FAQS } from '../data/faqs';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Order & Product Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-cream py-12 md:py-20 animate-fade-in space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest text-rose uppercase">
            WE ARE HERE FOR YOU
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum">
            Get in Touch with Luna Care
          </h1>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Have questions about product sizing, subscription deliveries, or organic ingredients? Send us a message and our team will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-8 bg-blush-soft p-8 rounded-3xl border border-blush-deep">
            <h3 className="font-serif text-2xl font-bold text-plum">Contact Information</h3>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white text-rose shrink-0 shadow-soft">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-plum">Email Support</h4>
                  <p className="text-xs text-charcoal-muted mt-0.5">care@lunaperiod.com</p>
                  <p className="text-[11px] text-sage-dark font-medium mt-1">Average response time: 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white text-rose shrink-0 shadow-soft">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-plum">Toll-Free Phone</h4>
                  <p className="text-xs text-charcoal-muted mt-0.5">1-800-586-2273 (1-800-LUNA-CARE)</p>
                  <p className="text-[11px] text-charcoal-light mt-1">Mon - Fri: 8am - 8pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white text-rose shrink-0 shadow-soft">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-plum">Headquarters</h4>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    LUNA Wellness Inc. <br />
                    540 Commerce Street, Suite 400 <br />
                    Austin, TX 78701
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cream border border-blush-deep flex items-center gap-3 text-xs text-plum font-semibold">
              <Clock className="w-4 h-4 text-rose shrink-0" />
              <span>Live Chat available Mon - Sun 9am to 6pm</span>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-blush-deep shadow-editorial">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-sage-light text-sage-dark mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-plum">Message Sent Successfully!</h3>
                <p className="text-sm text-charcoal-muted max-w-sm mx-auto">
                  Thank you for reaching out. A Luna Care Specialist will review your request and reply to <strong>{formData.email}</strong> shortly.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-bold text-plum mb-4">Send Us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-blush-soft border border-blush-deep text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-rose"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-blush-soft border border-blush-deep text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-rose"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-blush-soft border border-blush-deep text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-rose"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-charcoal">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-blush-soft border border-blush-deep text-xs text-plum font-semibold focus:outline-none"
                    >
                      <option value="Order & Product Inquiry">Order & Product Inquiry</option>
                      <option value="Subscription Modification">Subscription Modification</option>
                      <option value="Press & Wholesale">Press & Wholesale</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-charcoal">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-blush-soft border border-blush-deep text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-rose resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Quick Shortcut */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-3xl font-bold text-plum">Common Inquiries</h3>
          </div>
          <Accordion items={FAQS.slice(0, 4)} />
        </div>
      </div>
    </div>
  );
};
