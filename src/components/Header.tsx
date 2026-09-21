import React, { useState } from 'react';
import { Phone, Clock, Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleMobileNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur" role="banner">
      {/* Top bar with contact info */}
      <div className="bg-primary-500 text-accent-200 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 text-sm">
            <div className="flex min-w-0 items-center gap-6">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Phone className="h-4 w-4" />
                <a href="tel:+441704544479" className="hover:underline">01704 544 479</a>
                <MessageCircle className="ml-3 h-4 w-4" />
                <a href="https://wa.me/447443313128" className="hover:underline">07443 131 128</a>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</span>
              </div>
            </div>
            <div className="hidden shrink-0 lg:block">
              <span className="text-accent-300">Emergency: <a href="tel:+441704544479" className="hover:underline">01704 544 479</a></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile header with hamburger */}
        <div className="flex items-center justify-between gap-3 py-3 md:hidden">
          <img 
            src="/Acorn Dentistry Logo Design (1).png" 
            alt="Acorn Dentistry Southport" 
            className="h-11 w-auto shrink rounded-md shadow-sm"
            loading="eager"
          />
          <button
            onClick={() => setActiveTab('contact')}
            className="min-w-0 flex-shrink rounded-lg bg-primary-600 px-3 py-2 text-sm font-semibold leading-tight text-white transition-colors hover:bg-primary-700"
          >
            Book Appointment
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-gray-100"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Desktop Logo Section */}
        <div className="hidden items-center justify-between gap-8 py-4 md:flex">
          <img 
            src="/Acorn Dentistry Logo Design (1).png" 
            alt="Acorn Dentistry Southport" 
            className="h-20 w-auto rounded-lg shadow-sm lg:h-24"
            loading="eager"
          />
          <div className="flex min-w-0 items-center gap-6">
            <nav className="flex flex-wrap justify-end gap-2" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <button 
              onClick={() => setActiveTab('contact')}
              className="shrink-0 rounded-lg bg-primary-600 px-5 py-3 font-medium text-white transition-colors hover:bg-primary-700"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 py-3 md:hidden">
            <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  className={`w-full rounded-md px-4 py-3 text-left text-base font-medium transition-colors ${
                    activeTab === item.id
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleMobileNavClick('contact')}
                className="mt-4 w-full rounded-lg bg-primary-600 px-4 py-3 font-medium text-white transition-colors hover:bg-primary-700"
              >
                Book Appointment
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
