import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Car, Train, Bus, Armchair as Wheelchair, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      if (!supabase) throw new Error('Contact form is not configured');

      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          service: formData.service || null,
          message: formData.message
        });

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  const openingHours = [
    { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch to book your appointment or ask any questions about our dental services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Practice Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      54 Eastbank Street<br />
                      Southport, Merseyside<br />
                      PR8 1ES
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      Reception: <a href="tel:01704544479" className="text-primary-600 hover:underline">01704 544 479</a><br />
                      WhatsApp: <a href="tel:07443313128" className="text-primary-600 hover:underline">07443 313 128</a><br />
                      Emergency: <a href="tel:01704544479" className="text-red-600 hover:underline">01704 544 479</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:hello@acorndentistry.co.uk" className="text-primary-600 hover:underline">
                        hello@acorndentistry.co.uk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Opening Hours</h2>
              </div>
              
              <div className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className={`${schedule.hours === 'Closed' ? 'text-red-600' : 'text-gray-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Emergency Care:</strong> For dental emergencies outside normal hours, 
                  call our emergency line. We provide same-day appointments for urgent cases.
                </p>
              </div>
            </div>

            {/* Getting Here */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Here</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Car className="w-5 h-5 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">By Car</h3>
                    <p className="text-gray-600 text-sm">
                      Parking on Eastbank Street (Pay and Display). 
                      We're located in the town center, easily accessible from the A565.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Train className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">By Train</h3>
                    <p className="text-gray-600 text-sm">
                      Southport railway station is a 5-minute walk from our practice. 
                      Regular services from Liverpool, Manchester, and Preston.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Bus className="w-5 h-5 text-accent-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">By Bus</h3>
                    <p className="text-gray-600 text-sm">
                      Multiple bus routes stop nearby. Check Merseytravel 
                      for current timetables and routes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Wheelchair className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Accessibility</h3>
                    <p className="text-gray-600 text-sm">
                      Our practice is fully wheelchair accessible with ground floor access 
                      and disabled parking spaces available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            {status === 'success' && (
              <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-900">Message sent successfully!</h3>
                  <p className="text-sm text-green-800 mt-1">
                    Thank you for contacting us. We typically respond within 24 hours during business days.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-3 text-sm font-medium text-green-700 underline hover:text-green-900"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900">Something went wrong</h3>
                  <p className="text-sm text-red-800 mt-1">
                    We couldn't send your message. Please try again, or call us directly at 01704 544 479.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="checkup">Routine Check-up</option>
                    <option value="cleaning">Professional Cleaning</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Please tell us about your dental needs or any questions you have..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800">
                <strong>Response Time:</strong> We typically respond to all enquiries within 24 hours during business days. 
                For urgent dental problems, please call our emergency line.
              </p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.123456789!2d-3.0123456789!3d53.6456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1234567890ab%3A0x1234567890abcdef!2s54%20Eastbank%20St%2C%20Southport%20PR8%201ES%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Acorn Dentistry Southport Location"
              className="w-full h-96"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm">
              54 Eastbank Street, Southport, Merseyside PR8 1ES
            </p>
            <a 
              href="https://www.google.com/maps/dir//54+Eastbank+St,+Southport+PR8+1ES,+UK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
