import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Clock, Sparkles } from 'lucide-react';

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
    <div className="bg-[#F8F3FC] py-12 md:py-20 animate-fade-in space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-crimson uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            WE ARE HERE FOR YOU
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Get in Touch with <span className="font-normal text-brand-purple">Makeasy Care</span>
          </h1>
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            Have questions about Makeasy Classic Cotton pads, HaPee PeeDevice, bulk orders, or hygiene workshops? Send us a message and our team will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Left (matching Reference Image 1) */}
          <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-3xl border border-purple-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-100 text-brand-purple shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Support</h4>
                  <p className="text-xs text-gray-600 mt-0.5">care@makeasyhygiene.com</p>
                  <p className="text-[11px] text-brand-crimson font-medium mt-1">Average response time: 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-pink-100 text-brand-crimson shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Support Phone</h4>
                  <p className="text-xs text-gray-600 mt-0.5">+91-888-956-781</p>
                  <p className="text-[11px] text-gray-500 mt-1">Mon - Sat: 9am - 7pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-100 text-brand-purple shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Work Office</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                    Makeasy Hygiene & Healthcare <br />
                    Web Office 101/B, New Apollo Area <br />
                    Railway Road, NIT Faridabad - 121001 India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 flex items-center gap-3 text-xs text-brand-purple font-semibold">
              <Clock className="w-4 h-4 text-brand-pink shrink-0" />
              <span>Live Support available Monday through Saturday</span>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-purple-100 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto font-light">
                  Thank you for reaching out. A Makeasy Care Specialist will review your message and reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-purple-100 text-brand-purple rounded-full px-6 py-2 text-xs font-bold hover:bg-purple-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pooja Kapoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-magenta"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. pooja@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-magenta"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+91-888-000-000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-magenta"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-gray-800 font-semibold focus:outline-none"
                    >
                      <option value="Order & Product Inquiry">Order & Product Inquiry</option>
                      <option value="Makeasy HaPee Bulk Order">Makeasy HaPee Bulk Order</option>
                      <option value="Hygiene Workshop & Press">Hygiene Workshop & Press</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-800">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-purple-50/50 border border-purple-200 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-magenta resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full py-3 text-sm font-semibold transition-all duration-300 shadow-md transform hover:scale-103"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
