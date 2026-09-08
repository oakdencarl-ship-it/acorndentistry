import React from 'react';
import { Shield, Heart, Award, Clock, MapPin, Phone, Facebook, Instagram, GraduationCap } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-accent-200 py-20 overflow-hidden" role="banner">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Modern dental treatment room at Acorn Dentistry Southport"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700/80 via-primary-600/80 to-primary-800/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Dentist">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="name">
              Your Smile is Our Priority — Dentist in Southport
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-accent-300 max-w-3xl mx-auto" itemProp="description">
              Professional dental care in the heart of Southport. We provide comprehensive 
              dental services — from routine check-ups to cosmetic dentistry, IV sedation and 
              facial aesthetics — with a gentle, caring approach for the whole family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveTab('contact')}
                className="bg-purple-500 text-accent-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                Book Your Appointment
              </button>
              <button 
                onClick={() => {
                  setActiveTab('treatments');
                  setTimeout(() => {
                    const emergencySection = document.getElementById('emergency-section');
                    if (emergencySection) {
                      emergencySection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="border-2 border-accent-200 text-accent-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-200 hover:text-primary-700 transition-colors"
              >
                Emergency Care
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative" aria-labelledby="features-heading">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-50 to-transparent rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-50 to-transparent rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative z-10">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Acorn Dentistry?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine modern technology with compassionate care to deliver exceptional dental experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe &amp; Sterile</h3>
              <p className="text-gray-600">
                State-of-the-art sterilization protocols and infection control measures 
                ensure your safety at every visit.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gentle Care</h3>
              <p className="text-gray-600">
                Our compassionate approach and pain-free techniques make dental visits 
                comfortable for patients of all ages.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Highly qualified dentists and hygienists with years of experience 
                in comprehensive dental care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Dentist */}
      <section className="py-16 bg-white" aria-labelledby="dentist-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="dentist-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Your Dentist
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Personal, dedicated care from the heart of Acorn Dentistry
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2">
                <img 
                  src="/dr-kate-oakden.jpg" 
                  alt="Dr Kate Oakden, Principal Dentist and Practice Owner at Acorn Dentistry Southport"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Kate Oakden</h3>
                <p className="text-primary-600 font-semibold mb-4">Principal Dentist &amp; Practice Owner</p>
                
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-primary-600" />
                    <span>BDS (UCLAN)</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-purple-600" />
                    <span>10+ years experience</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {['General Dentistry', 'Cosmetic Dentistry', 'Dental Sedation'].map((specialty) => (
                      <span key={specialty} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Dr. Oakden founded Acorn Dentistry with a vision to provide exceptional dental care 
                  in a comfortable, welcoming environment. She specialises in general and cosmetic dentistry and 
                  Intravenous sedation for nervous patients. She takes pride in building lasting relationships with every patient. 
                  Her gentle, patient-centered approach ensures you always feel at ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50 relative" aria-labelledby="services-heading">
        {/* Background image for services section */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Dental instruments and equipment used at Acorn Dentistry Southport"
            className="w-full h-full object-cover opacity-5"
            loading="lazy"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative z-10">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive dental care for your entire family
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              'General Dentistry',
              'Cosmetic Dentistry',
              'Emergency Care',
              'Sedation',
              'Facial Aesthetics'
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Professional {service.toLowerCase()} services tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-purple-500 text-accent-200" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-xl mb-8 text-accent-300">
            Contact us today to book your appointment or learn more about our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              <div className="text-left">
                <p className="font-semibold">Call Us</p>
                <a href="tel:+441704544479" className="text-accent-300 hover:underline">01704 544 479</a>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-3" />
              <div className="text-left">
                <p className="font-semibold">Visit Us</p>
                <p className="text-accent-300">54 Eastbank Street, Southport</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-3" />
              <div className="text-left">
                <p className="font-semibold">Opening Hours</p>
                <p className="text-accent-300">Mon-Fri: 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-12 bg-white border-t border-gray-200" aria-labelledby="social-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 id="social-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Follow Us
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay connected with Acorn Dentistry for dental tips, practice updates, and oral health advice.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com/acorndentistrysouthport"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="group bg-gray-50 hover:bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Facebook className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              
              <a
                href="https://instagram.com/acorndentistry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="group bg-gray-50 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Instagram className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              
              <a
                href="https://x.com/acornsouthport"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X (Twitter)"
                className="group bg-gray-50 hover:bg-black w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <div className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors flex items-center justify-center font-bold text-xl">
                  𝕏
                </div>
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              <p>Follow us for dental health tips, practice news, and special offers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
