import { useState } from 'react';
import { Smile, Shield, Zap, Heart, Star, Clock, X, AlertTriangle, Sparkles } from 'lucide-react';

const Treatments = () => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const treatments = [
    {
      category: 'General Dentistry',
      icon: Shield,
      color: 'primary',
      services: [
        {
          name: 'Routine Check-ups',
          description: 'Comprehensive oral health examinations and preventive care',
          duration: '30-45 minutes',
          frequency: 'Every 6 months'
        },
        {
          name: 'Professional Cleaning',
          description: 'Deep cleaning to remove plaque and tartar buildup',
          duration: '45-60 minutes',
          frequency: 'Every 6 months'
        },
        {
          name: 'Fillings',
          description: 'White composite and amalgam fillings for cavity treatment',
          duration: '30-60 minutes',
          frequency: 'As needed'
        },
        {
          name: 'Root Canal Treatment',
          description: 'Advanced endodontic therapy to save infected teeth',
          duration: '60-90 minutes',
          frequency: 'As needed'
        },
        {
          name: 'Periodontal Treatment',
          description: 'Below the Gum cleaning to treat and prevent Gum Disease',
          duration: '45-60 minutes',
          frequency: 'As needed'
        },
        {
          name: 'Airflow Guided Biofilm Therapy',
          description: 'Gentle, enhanced cleaning; Gold-Standard removal of plaque and staining',
          duration: '45-60 minutes',
          frequency: 'As needed'
        }
      ]
    },
    {
      category: 'Cosmetic Dentistry',
      icon: Smile,
      color: 'accent',
      services: [
        {
          name: 'Teeth Whitening',
          description: 'Professional whitening for a brighter, more confident smile',
          duration: '60-90 minutes',
          frequency: 'Annual touch-ups'
        },
        {
          name: 'Porcelain Veneers',
          description: 'Custom-made veneers to perfect your smile',
          duration: '2-3 appointments',
          frequency: '10-15 year lifespan'
        },
        {
          name: 'Dental Bonding',
          description: 'Composite resin to repair chips and improve appearance',
          duration: '30-60 minutes',
          frequency: '5-10 year lifespan'
        },
        {
          name: 'Smile Makeover',
          description: 'Comprehensive cosmetic treatment planning',
          duration: 'Multiple appointments',
          frequency: 'Customized plan'
        }
      ]
    },
    {
      category: 'Restorative Dentistry',
      icon: Star,
      color: 'purple',
      services: [
        {
          name: 'Dental Crowns',
          description: 'Custom crowns to restore damaged or weakened teeth',
          duration: '2 appointments',
          frequency: '15-20 year lifespan'
        },
        {
          name: 'Dental Bridges',
          description: 'Fixed bridges to replace missing teeth',
          duration: '2-3 appointments',
          frequency: '10-15 year lifespan'
        },
        {
          name: 'Dentures',
          description: 'Partial and complete dentures for tooth replacement',
          duration: '3-4 appointments',
          frequency: '5-7 year replacement'
        }
      ]
    },
    {
      category: 'Sedation',
      icon: Heart,
      color: 'green',
      services: [
        {
          name: 'Intravenous Sedation',
          description: 'IV sedation provides deep relaxation for anxious patients or complex procedures. You remain conscious but deeply relaxed and comfortable throughout treatment.',
          duration: '60-120 minutes',
          frequency: 'As needed'
        }
      ]
    },
    {
      category: 'Facial Aesthetics',
      icon: Sparkles,
      color: 'pink',
      services: [
        {
          name: 'Anti-Wrinkle Treatments',
          description: 'Professional intervention to reduce fine lines and wrinkles around the eyes, forehead, and mouth. Safe, effective treatments performed by qualified dental professionals.',
          duration: '30-45 minutes',
          frequency: '3-6 months'
        },
        {
          name: 'Prescription Skin Peels',
          description: 'Medical-grade chemical peels to improve skin texture, reduce pigmentation, and promote healthy skin renewal. Customised treatments for your specific skin concerns.',
          duration: '45-60 minutes',
          frequency: '4-6 weeks'
        },
        {
          name: 'Skin Boosters',
          description: 'Injectable hyaluronic acid treatments to deeply hydrate and improve skin quality. Enhances skin elasticity, smoothness, and natural glow for a refreshed appearance.',
          duration: '30-45 minutes',
          frequency: '6-9 months'
        },
        {
          name: 'Jaw Slimming',
          description: 'Treatments for the masseter muscles to reduce jaw width and create a more refined facial contour. Also helps with teeth grinding and jaw tension.',
          duration: '20-30 minutes',
          frequency: '4-6 months'
        }
      ]
    },
    {
      category: 'Emergency Care',
      icon: Zap,
      color: 'red',
      services: [
        {
          name: 'Emergency Appointments',
          description: 'Same-day treatment for dental emergencies',
          duration: '30-60 minutes',
          frequency: 'As needed'
        },
        {
          name: 'Pain Relief',
          description: 'Immediate pain management and treatment',
          duration: '15-30 minutes',
          frequency: 'As needed'
        },
        {
          name: 'Trauma Treatment',
          description: 'Treatment for dental injuries and accidents',
          duration: '60-120 minutes',
          frequency: 'As needed'
        },
        {
          name: 'Lost Filling/Crown',
          description: 'Emergency repair or replacement of dental work',
          duration: '30-45 minutes',
          frequency: 'As needed'
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-100',
          icon: 'text-primary-600',
          border: 'border-primary-200',
          accent: 'text-primary-600'
        };
      case 'accent':
        return {
          bg: 'bg-purple-100',
          icon: 'text-purple-600',
          border: 'border-purple-200',
          accent: 'text-purple-600'
        };
      case 'purple':
        return {
          bg: 'bg-accent-100',
          icon: 'text-accent-600',
          border: 'border-accent-200',
          accent: 'text-accent-600'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          icon: 'text-green-600',
          border: 'border-green-200',
          accent: 'text-green-600'
        };
      case 'pink':
        return {
          bg: 'bg-pink-100',
          icon: 'text-pink-600',
          border: 'border-pink-200',
          accent: 'text-pink-600'
        };
      case 'red':
        return {
          bg: 'bg-red-100',
          icon: 'text-red-600',
          border: 'border-red-200',
          accent: 'text-red-600'
        };
      default:
        return {
          bg: 'bg-gray-100',
          icon: 'text-gray-600',
          border: 'border-gray-200',
          accent: 'text-gray-600'
        };
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Treatments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of dental services to keep your smile healthy, 
            beautiful, and functional for life.
          </p>
        </div>

        {/* Treatment Categories */}
        <div className="space-y-12">
          {treatments.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className={`${colors.bg} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className={`border-2 ${colors.border} rounded-lg p-6 hover:shadow-md transition-shadow`}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-gray-400" />
                          <span className="text-gray-500">{service.duration}</span>
                        </div>
                        <span className={`${colors.accent} font-medium`}>{service.frequency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Notice */}
        <div id="emergency-section" className="mt-12 bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-red-800">Dental Emergency?</h2>
          </div>
          <p className="text-red-700 mb-4 text-lg">
            We provide same-day emergency appointments for urgent dental problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:01704544479" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Emergency Line: 01704 544 479
            </a>
            <button 
              onClick={() => setShowEmergencyModal(true)}
              className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
            >
              What Constitutes an Emergency?
            </button>
          </div>
        </div>

        {/* Treatment Philosophy */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Our Treatment Philosophy</h2>
            <p className="text-lg text-primary-100 max-w-4xl mx-auto leading-relaxed">
              At Acorn Dentistry, we believe in preventive care and patient education. Our goal is to help you 
              maintain optimal oral health while providing comfortable, pain-free treatment when needed. We take 
              the time to explain all procedures and work with you to develop a personalized treatment plan that 
              fits your needs and budget.
            </p>
          </div>
        </div>

        {/* Emergency Modal */}
        {showEmergencyModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Dental Emergencies</h2>
                  </div>
                  <button
                    onClick={() => setShowEmergencyModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    A dental emergency requires immediate attention to save a tooth, stop ongoing tissue bleeding, 
                    or alleviate severe pain. Here are the most common dental emergencies:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Severe Toothache</h3>
                      <p className="text-gray-600 text-sm">
                        Intense, throbbing pain that doesn't respond to over-the-counter pain medication. 
                        Often indicates infection or nerve damage.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Knocked-Out Tooth</h3>
                      <p className="text-gray-600 text-sm">
                        A completely dislodged tooth. Time is critical - the tooth may be saved 
                        if treated within 30-60 minutes.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Broken or Cracked Tooth</h3>
                      <p className="text-gray-600 text-sm">
                        Significant fractures that expose the nerve or cause severe pain. 
                        Minor chips can usually wait for a regular appointment.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Dental Abscess</h3>
                      <p className="text-gray-600 text-sm">
                        Swelling, fever, or pus around a tooth. This is a serious infection 
                        that can spread to other parts of the body if left untreated.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Lost Filling or Crown</h3>
                      <p className="text-gray-600 text-sm">
                        When a large filling or crown falls out, the exposed tooth can be 
                        extremely sensitive and vulnerable to further damage.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Uncontrolled Bleeding</h3>
                      <p className="text-gray-600 text-sm">
                        Bleeding from the mouth that won't stop after 15-20 minutes of 
                        applying pressure with clean gauze.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 mb-2">What to Do in an Emergency:</h3>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Call our emergency line immediately: 01704 544 479</li>
                      <li>• For knocked-out teeth, keep the tooth moist in milk or saliva</li>
                      <li>• Apply cold compress to reduce swelling</li>
                      <li>• Take over-the-counter pain medication as directed</li>
                      <li>• For severe bleeding or facial trauma, go to A&E</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={() => setShowEmergencyModal(false)}
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Treatments;