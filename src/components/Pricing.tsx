import { Star, Shield, CreditCard, Heart, Sparkles, Zap, Smile, BadgeCheck } from 'lucide-react';

interface PricingProps {
  setActiveTab?: (tab: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ setActiveTab }) => {
   const privateTreatments = [
    { treatment: 'Comprehensive Examination', price: '£65' },
    { treatment: 'New Patient Examination', price: '£65' },
    { treatment: 'Emergency Appointment', price: '£80' },
    { treatment: 'Fillings', price: 'from £180' },
    { treatment: 'Root Canal', price: 'from £350' },
    { treatment: 'Extraction', price: 'from £180' },
    { treatment: 'Complex Extraction', price: 'from £220' },     
    { treatment: 'Crowns', price: 'from £600' },
    { treatment: 'Bridges', price: '£600 per unit' },
    { treatment: 'Dentures', price: 'from £450' },
    { treatment: 'Teeth Whitening', price: '£300' },
    { treatment: 'Porcelain Veneers', price: '£400 per tooth' },
    { treatment: 'Composite Edge Bonding', price: 'from £180' },
    { treatment: 'Composite Veneers', price: '£350 per tooth' },
    { treatment: 'Orthodontic Aligner Consultation', price: '£50' },
    { treatment: 'Orthodontic Aligners', price: 'from £2500' },
    { treatment: 'Removable Retainer', price: '£150 per arch' },
    { treatment: 'Sports/Bite Guards', price: '£130 per arch' },
    { treatment: 'Anti-Snoring Devices', price: 'from £550' },
    { treatment: 'Required X-Rays', price: '£9' }
  ];

  const facialAesthetics = [
    { treatment: 'Anti-Wrinkle Treatment (1 area)', price: '£150' },
    { treatment: 'Anti-Wrinkle Treatment (2 areas)', price: '£210' },
    { treatment: 'Anti-Wrinkle Treatment (3 areas)', price: '£270' },
    { treatment: 'Prescription Skin Peel', price: 'from £120' },
    { treatment: 'Skin Boosters', price: 'from £180' },
    { treatment: 'Jaw Slimming Treatment', price: '£300' },
    { treatment: 'Consultation', price: '£30' }
  ];

  const sedationServices = [
    { treatment: 'IV Sedation Consultation', price: '£30' },
    { treatment: 'IV Sedation (per hour)', price: '£350' },
    { treatment: 'Simple Extraction with IV Sedation', price: '£450' },
    { treatment: 'Complex Extraction with IV Sedation', price: '£650' },
    { treatment: 'Multiple Treatments with IV Sedation', price: 'From £500' }
  ];

  const hygieneServices = [
    { treatment: 'Standard Hygienist Appointment', price: '£70' },
    { treatment: 'Deep Clean (Scaling & Root Planing)', price: '£100-£120' },
    { treatment: 'Biofilm Therapy (Enhanced, gentle cleaning)', price: '£95' },
    { treatment: 'Periodontal Maintenance', price: '£85' },
    { treatment: 'Fluoride Treatment', price: '£25' }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Dental Treatment Pricing in Southport
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            We believe in clear, upfront pricing with no hidden costs. Explore our treatment fees 
            for private dentistry, facial aesthetics, sedation and hygiene services, plus flexible payment options.
            As part of our commitment to whole-family care, children of registered active patients receive free comprehensive dental examinations when their parent or guardian is an active patient.
          </p>
        </div>

        {/* Private Pricing */}
        <div className="mb-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-start gap-4 sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100">
                <Star className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Private Treatment Fees</h2>
                <p className="text-gray-600">Premium care with extended appointment times</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {privateTreatments.map((item, index) => (
                <div key={index} className="relative rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-300">
                    </span>
                  )}
                  <h3 className="mb-2 mt-1 font-semibold text-gray-900">{item.treatment}</h3>
                  <p className="text-primary-600 font-bold text-lg">{item.price}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Facial Aesthetics Pricing */}
        <div className="mb-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-start gap-4 sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-100">
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Facial Aesthetics</h2>
                <p className="text-gray-600">Professional aesthetic treatments by qualified dental professionals</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {facialAesthetics.map((item, index) => (
                <div key={index} className="border border-pink-200 rounded-lg p-4 hover:border-pink-300 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.treatment}</h3>
                  <p className="text-pink-600 font-bold text-lg">{item.price}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-pink-50 rounded-lg">
              <p className="text-sm text-pink-800">
                <strong>Note:</strong> All completed facial aesthetic treatments include the comprehensive consultation fee. 
                Results typically last 3-6 months for anti-wrinkle treatments and 6-12 months for skin boosters.
              </p>
            </div>
          </div>
        </div>

        {/* Sedation Pricing */}
        <div className="mb-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-start gap-4 sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Sedation Services</h2>
                <p className="text-gray-600">Comfortable, anxiety-free dental treatment with IV sedation. Complete Consultation requires Comprehensive Examination.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sedationServices.map((item, index) => (
                <div key={index} className="border border-green-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.treatment}</h3>
                  <p className="text-green-600 font-bold text-lg">{item.price}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Important:</strong> IV sedation requires a consultation and medical assessment. 
                You'll need someone to accompany you home after treatment. Fasting may be required.
              </p>
            </div>
          </div>
        </div>

        {/* Dental Hygiene Pricing */}
        <div className="mb-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-start gap-4 sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                <Smile className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Dental Hygiene</h2>
                <p className="text-gray-600">Professional cleaning and preventive care services</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hygieneServices.map((item, index) => (
                <div key={index} className="border border-blue-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.treatment}</h3>
                  <p className="text-blue-600 font-bold text-lg">{item.price}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Recommendation:</strong> Regular hygienist visits every 6 months help prevent 
                gum disease and maintain optimal oral health. Deep cleaning may require multiple appointments.
              </p>
            </div>
          </div>
        </div>

        {/* Membership Options */}
        <div className="mb-12">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-8 flex items-start gap-4 sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-100">
                <BadgeCheck className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Membership Options</h2>
                <p className="text-gray-600">Spread the cost of your routine dental care with a monthly plan via PracticePlan</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Maintenance Plan */}
              <div className="rounded-lg border-2 border-primary-200 bg-primary-50/40 p-6 transition-colors hover:border-primary-400">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Maintenance Plan</h3>
                  <p className="text-sm text-gray-500">via PracticePlan</p>
                </div>
                <p className="mb-6">
                  <span className="text-4xl font-bold text-primary-600">£22.30</span>
                  <span className="text-gray-500"> /month</span>
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    2 checkups per year
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    2 hygiene appointments per year
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    15% off treatment prices
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    X-rays included
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                    Worldwide Dental Emergency Assistance
                  </li>
                </ul>
              </div>

              {/* Enhanced Maintenance Plan */}
              <div className="relative rounded-lg border-2 border-accent-300 bg-accent-50/40 p-6 transition-colors hover:border-accent-500">
                <span className="absolute -top-3 right-6 inline-flex rounded-full bg-accent-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  Most Hygiene
                </span>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Enhanced Maintenance Plan</h3>
                  <p className="text-sm text-gray-500">via PracticePlan</p>
                </div>
                <p className="mb-6">
                  <span className="text-4xl font-bold text-accent-600">£33.90</span>
                  <span className="text-gray-500"> /month</span>
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    2 checkups per year
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    4 hygiene appointments per year
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    15% off treatment prices
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    X-rays included
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    Worldwide Dental Emergency Assistance
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent-50 rounded-lg">
              <p className="text-sm text-accent-800">
                <strong>Please note:</strong> Both plans are provided via PracticePlan and help spread the cost of your 
                routine dental care into an easy monthly payment. Ask our team for full terms and to sign up.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-start gap-4 sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-100">
              <CreditCard className="w-6 h-6 text-accent-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Payment Options</h2>
              <p className="text-gray-600">Flexible payment solutions for your convenience</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Card Payments</h3>
              <p className="text-gray-600 text-sm">Visa, Mastercard, American Express accepted</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2"> Dental Finance</h3>
              <p className="text-gray-600 text-sm">Available on treatments over £500</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Insurance</h3>
              <p className="text-gray-600 text-sm">We work with most dental insurance providers</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cash Payments</h3>
              <p className="text-gray-600 text-sm">Cash and bank transfers accepted</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="rounded-lg bg-gradient-to-r from-primary-600 to-purple-600 p-6 text-white sm:p-8">
            <h2 className="text-2xl font-bold mb-4">Questions About Pricing?</h2>
            <p className="text-lg text-primary-100 mb-6">
              Our team is happy to discuss treatment options and provide detailed cost estimates.
            </p>
            <button 
              onClick={() => setActiveTab?.('contact')}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
