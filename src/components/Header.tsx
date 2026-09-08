import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastHeight = 240;
    let lastScrollTop = 0;
    const offsetChange = 10; // Threshold for scroll offset change - adjust this value to test
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          
          // Only proceed if scroll offset has changed by the threshold amount
          if (Math.abs(scrollTop - lastScrollTop) < offsetChange) {
            ticking = false;
            return;
          }
          
          lastScrollTop = scrollTop;
          setIsScrolled(scrollTop > 20);
          
          // Calculate logo height
          const maxScroll = 150;
          const minHeight = 96;
          const maxHeight = 240;
          
          let newHeight;
          if (scrollTop === 0) {
            newHeight = maxHeight;
          } else if (scrollTop >= maxScroll) {
            newHeight = minHeight;
          } else {
            const progress = scrollTop / maxScroll;
            newHeight = maxHeight - (progress * (maxHeight - minHeight));
          }
          
          // Only update if there's a significant change (prevents micro-updates)
          if (Math.abs(newHeight - lastHeight) > 0.5) {
            document.documentElement.style.setProperty('--logo-height', `${newHeight}px`);
            lastHeight = newHeight;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="bg-white shadow-lg sticky top-0 z-50" role="banner">
      {/* Top bar with contact info */}
      <div className="bg-primary-500 text-accent-200 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+441704544479" className="hover:underline">01704 544 479</a>
                <WhatsApp className="w-4 h-4 mr-2" />
                <a href="tel:+447443313128" className="hover:underline">07743 313 128</a>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-accent-300">Emergency: <a href="tel:+441704544479" className="hover:underline">01704 544 479</a></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile header with hamburger */}
        <div className="md:hidden flex items-center justify-between py-4 gap-3">
          <img 
            src="/Acorn Dentistry Logo Design (1).png" 
            alt="Acorn Dentistry Southport" 
            className="h-12 w-auto rounded-lg shadow-lg"
            loading="eager"
          />
          <button
            onClick={() => setActiveTab('contact')}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors flex-shrink-0"
          >
            Book Appointment
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Desktop Logo Section */}
        <div className="hidden md:flex justify-center py-8">
          <img 
            src="/Acorn Dentistry Logo Design (1).png" 
            alt="Acorn Dentistry Southport" 
            className="w-auto rounded-2xl shadow-2xl logo-scroll"
            loading="eager"
          />
        </div>

        {/* Desktop Navigation Section */}
        <div className="hidden md:block border-t border-gray-200 py-4">
          <div className="flex justify-between items-center">
            {/* Navigation */}
            <nav className="flex space-x-8" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
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

            {/* CTA Button */}
            <div>
              <button 
                onClick={() => setActiveTab('contact')}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
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
                className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors mt-4"
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
